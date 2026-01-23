import React from "react";
import { agregarAlCarrito } from "../assets/data/Carrito";

import TecladoLog from "../assets/img/telcadoLogG213prodigyRLLEGAOS.jpg";
import MonitorAsus from "../assets/img/asusrogwwift4koled32RLLEGADOS.jpg";

function Accesorios() {
  return (
    <section className="container my-5">
      <h1 className="mb-4 text-center">Accesorios</h1>
      <div className="row justify-content-center">

        <div className="col-md-4 col-lg-2 mb-4">
          <div className="card h-100 text-center bg-white border-secondary">
            <img
              src={TecladoLog}
              className="card-img-top"
              alt="Teclado Gamer"
            />
            <div className="card-body text-black">
              <h6 className="card-title">Teclado Logitech G312 Prodigy Led RGB</h6>
              <p className="fw-bold text-dark">$49.990</p>
              <button
                className="btn btn-primary"
                onClick={() => agregarAlCarrito("Teclado Logitech G312 Prodigy Led RGB", 49990)}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-lg-2 mb-4">
          <div className="card h-100 text-center bg-white border-secondary">
            <img
              src={MonitorAsus}
              className="card-img-top"
              alt="Monitor Gamer"
            />
            <div className="card-body text-black">
              <h6 className="card-title">Monitor Asus ROG swift 4k OLED 32"</h6>
              <p className="fw-bold text-dark">$1.499.990</p>
              <button
                className="btn btn-primary"
                onClick={() => agregarAlCarrito("Monitor Asus ROG swift 4k OLED 32\"", 1499990)}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Accesorios;
