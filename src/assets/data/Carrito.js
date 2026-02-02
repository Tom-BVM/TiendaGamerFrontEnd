const API_URL = "http://localhost:8080";

const formatoCLP = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  minimumFractionDigits: 0,
});

export function obtenerCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

export function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

export function agregarAlCarrito(producto) {
  let carrito = obtenerCarrito();

  const productoExistente = carrito.find((item) => item.id === producto.id);

  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    carrito.push({ id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: 1 });
  }

  guardarCarrito(carrito);
  alert(`${producto.nombre} agregado al carrito`);
}

export function eliminarProducto(index) {
  let carrito = obtenerCarrito();

  if (carrito[index].cantidad > 1) {
    carrito[index].cantidad -= 1;
  } else {
    carrito.splice(index, 1);
  }

  guardarCarrito(carrito);
}

export function vaciarCarrito() {
  localStorage.removeItem("carrito");
}

export function calcularTotal() {
  const carrito = obtenerCarrito();
  let subtotal = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo")) || null;

  let total = subtotal;
  if (usuarioActivo?.descuento) {
    total = subtotal * 0.8;
  }

  return { subtotal, total };
}

export async function finalizarCompra() {
  const carrito = obtenerCarrito();

  if (carrito.length === 0) {
    alert("Tu carrito está vacío. Agrega productos antes de finalizar la compra.");
    return;
  }

  const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo")) || null;
  if (!usuarioActivo) {
    alert("Debes iniciar sesión para finalizar la compra.");
    return;
  }

  const { subtotal, total } = calcularTotal();

  try {
    
    const pedidoRes = await fetch(`${API_URL}/pedidos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fecha: new Date().toISOString(),
        total,
        auths: { id: usuarioActivo.id }
      })
    });

    if (!pedidoRes.ok) throw new Error("Error al crear pedido");
    const pedido = await pedidoRes.json();

    for (const item of carrito) {
      const detalleRes = await fetch(`${API_URL}/detallepedidos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cantidad: item.cantidad,
          precioUnitario: item.precio,
          pedidoId: pedido.id,
          productoId: item.id
        })
      });
      if (!detalleRes.ok) throw new Error("Error al crear detalle de pedido");
    }

    let resumen = "Resumen de tu compra:\n\n";
    carrito.forEach((item) => {
      const precioTotalItem = item.precio * item.cantidad;
      resumen += `${item.nombre} - ${item.cantidad} x ${formatoCLP.format(item.precio)} = ${formatoCLP.format(precioTotalItem)}\n`;
    });

    if (usuarioActivo?.descuento) {
      resumen += `\nDescuento aplicado: 20%`;
    }

    resumen += `\n\nTotal a pagar: ${formatoCLP.format(total)}`;
    alert(resumen);

    vaciarCarrito();
  } catch (err) {
    console.error("Error al finalizar compra:", err);
    alert("Hubo un problema al procesar tu compra.");
  }
}
