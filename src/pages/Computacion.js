import React from "react";
import { agregarAlCarrito } from "../assets/data/Carrito";

import MsiRtx5050 from "../assets/img/MSIGRTX50508.jpeg";
import Ryzen7 from "../assets/img/amdryzen7RLLEGADOS.jpg";
import MsiRtx5070 from "../assets/img/msirtx5070ti16gbRLLEGADOS.webp";

function Computacion() {
  return (
    <section className="container my-5">
      <h1 className="mb-4 text-center">Computación</h1>
      <div className="row justify-content-center">

        {/* Producto 1 */}
        <div className="col-md-4 col-lg-2 mb-4">
          <div className="card h-100 text-center bg-white border-secondary">
            <img
              className="card-img-top"
              src={MsiRtx5050}
              alt="Tarjeta gráfica MSI"
            />
            <div className="card-body text-black">
              <h6 className="card-title">MSI GeForce RTX™ 5050 8G GAMING OC</h6>
              <p className="fw-bold text-black">$319.990</p>
              <button
                className="btn btn-primary"
                onClick={() => agregarAlCarrito("MSI GeForce RTX™ 5050 8G GAMING OC", 319990)}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>

        {/* Producto 2 */}
        <div className="col-md-4 col-lg-2 mb-4">
          <div className="card h-100 text-center bg-white border-secondary">
            <img
              src={Ryzen7}
              className="card-img-top"
              alt="Procesador AMD Ryzen"
            />
            <div className="card-body text-black">
              <h6 className="card-title">AMD Ryzen 7 9800X3D</h6>
              <p className="fw-bold text-dark">$569.990</p>
              <button
                className="btn btn-primary"
                onClick={() => agregarAlCarrito("AMD Ryzen 7 9800X3D", 569990)}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>

        {/* Producto 3 */}
        <div className="col-md-4 col-lg-2 mb-4">
          <div className="card h-100 text-center bg-white border-secondary">
            <img
              src={MsiRtx5070}
              className="card-img-top"
              alt="Tarjeta gráfica MSI RTX 5070Ti"
            />
            <div className="card-body text-black">
              <h6 className="card-title">MSI RTX 5070Ti</h6>
              <p className="fw-bold text-dark">$1.299.990</p>
              <button
                className="btn btn-primary"
                onClick={() => agregarAlCarrito("MSI RTX 5070Ti", 1299990)}
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

export default Computacion;
