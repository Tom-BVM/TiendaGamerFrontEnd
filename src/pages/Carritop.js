import React, { useEffect, useState } from "react";
import styles from "../assets/style/carrito.module.css";
import {
  obtenerCarrito,
  eliminarProducto,
  vaciarCarrito,
  calcularTotal,
  finalizarCompra,
} from "../assets/data/Carrito";  

function Carrito() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const actualizarCarrito = () => {
    const datos = obtenerCarrito();
    setItems(datos);
    const { total } = calcularTotal();
    setTotal(total);
  };

  useEffect(() => {
    actualizarCarrito();
  }, []);

  const handleEliminar = (index) => {
    eliminarProducto(index);
    actualizarCarrito();
  };

  const handleVaciar = () => {
    vaciarCarrito();
    actualizarCarrito();
  };

  const handleFinalizar = () => {
    finalizarCompra();
    actualizarCarrito();
  };

  return (
    <div className={styles.carritoContainer}>
      <div className={styles.carritoBox}>
        <div className={styles.carritoCard}>
          <h3 className="text-center mb-4">Carrito de Compras</h3>

          {/* Lista de items */}
          <div className="list-group mb-3">
            {items.length === 0 ? (
              <p className="text-center">Tu carrito está vacío</p>
            ) : (
              items.map((item, index) => (
                <div
                  key={index}
                  className="list-group-item d-flex justify-content-between"
                >
                  <span>
                    {item.nombre} x {item.cantidad}
                  </span>
                  <span>${item.precio}</span>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleEliminar(index)}
                  >
                    Eliminar
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="d-flex justify-content-between">
            <span className="fw-bold">Total:</span>
            <span className="fw-bold">${total}</span>
          </div>

          <button
            className="btn btn-primary w-100 mt-3"
            onClick={handleFinalizar}
            disabled={items.length === 0}
          >
            Comprar
          </button>
          <button
            className="btn btn-danger w-100 mt-3"
            onClick={handleVaciar}
            disabled={items.length === 0}
          >
            Eliminar Carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
