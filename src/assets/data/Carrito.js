//transformar la monea a la moneda chilena
const formatoCLP = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  minimumFractionDigits: 0,
});

//guardar y obetener carrito
export function obtenerCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

export function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Agregar producto al carrito
export function agregarAlCarrito(nombre, precio) {
  let carrito = obtenerCarrito();

  const productoExistente = carrito.find((item) => item.nombre === nombre);

  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    carrito.push({ nombre, precio, cantidad: 1 });
  }

  guardarCarrito(carrito);
  alert(`${nombre} agregado al carrito`);
}

// Eliminar producto por índice
export function eliminarProducto(index) {
  let carrito = obtenerCarrito();
  carrito.splice(index, 1);
  guardarCarrito(carrito);
}

// Vaciar carrito
export function vaciarCarrito() {
  localStorage.removeItem("carrito");
}

// Calcular total con descuento si aplica
export function calcularTotal() {
  const carrito = obtenerCarrito();
  let subtotal = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo")) || null;

  let total = subtotal;
  if (usuarioActivo?.descuento) {
    total = subtotal * 0.8;
  }

  return { subtotal, total };
}

// Finalizar compra
export function finalizarCompra() {
  const carrito = obtenerCarrito();

  if (carrito.length === 0) {
    alert("Tu carrito está vacío. Agrega productos antes de finalizar la compra.");
    return;
  }

  let resumen = "Resumen de tu compra:\n\n";
  let subtotal = 0;

  carrito.forEach((item) => {
    resumen += `${item.nombre} - ${item.cantidad} x ${formatoCLP.format(item.precio)}\n`;
    subtotal += item.precio * item.cantidad;
  });

  const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo")) || null;

  let total = subtotal;
  if (usuarioActivo?.descuento) {
    total = subtotal * 0.8;
    resumen += `\nDescuento aplicado: 20%`;
  }

  resumen += `\n\nTotal a pagar: ${formatoCLP.format(total)}`;

  alert(resumen);

  vaciarCarrito();
}
