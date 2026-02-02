import React from "react";
import { Link } from "react-router-dom";
import { agregarAlCarrito } from "../assets/data/Carrito";

import BrandinMSI from "../assets/img/BrandinMSI.png";
import IntelAMD from "../assets/img/Intel-AMD.png";
import LogRog from "../assets/img/log-rog.png";

import RogChariot from "../assets/img/rogchariotcoreRLLEGADOS.webp";
import TecladoLog from "../assets/img/telcadoLogG213prodigyRLLEGAOS.jpg";
import MonitorAsus from "../assets/img/asusrogwwift4koled32RLLEGADOS.jpg";
import Ryzen7 from "../assets/img/amdryzen7RLLEGADOS.jpg";
import MsiRtx5070 from "../assets/img/msirtx5070ti16gbRLLEGADOS.webp";

import CardGaming from "../assets/img/CardGaming.webp";
import CardComponentes from "../assets/img/CardComponentes.jpg";
import CardPerifericos from "../assets/img/CardPerifericos.jpg";
import CardPcArmada from "../assets/img/CardPcArmada.jpg";

function Home() {
  return (
    <div>
      {/* Carrusel */}
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={BrandinMSI} alt="MSI" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={IntelAMD} alt="Intel-AMD" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={LogRog} alt="Logitech/ROG" className="d-block w-100" />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Recién Llegados */}
      <section className="container my-5">
        <h2 className="mb-4 text-center">Recién llegados</h2>
        <div className="row justify-content-center">

          <div className="col-md-4 col-lg-2 mb-4">
            <div className="card h-100 text-center bg-white border-secondary">
              <img src={RogChariot} className="card-img-top" alt="Silla Gamer" />
              <div className="card-body text-black">
                <h6 className="card-title">Silla Gamer ASUS ROG Chariot Core</h6>
                <p className="fw-bold text-dark">$359.990</p>
                <button
                  className="btn btn-primary"
                  onClick={() => agregarAlCarrito({ nombre: "Silla Gamer ASUS ROG Chariot Core", precio: 359990 })}
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-2 mb-4">
            <div className="card h-100 text-center bg-white border-secondary">
              <img src={TecladoLog} className="card-img-top" alt="Teclado Gamer" />
              <div className="card-body text-black">
                <h6 className="card-title">Teclado Logitech G312 Prodigy Led RGB</h6>
                <p className="fw-bold text-dark">$49.990</p>
                <button
                  className="btn btn-primary"
                  onClick={() => agregarAlCarrito({ nombre: "Teclado Logitech G312 Prodigy Led RGB", precio: 49990 })}
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-2 mb-4">
            <div className="card h-100 text-center bg-white border-secondary">
              <img src={MonitorAsus} className="card-img-top" alt="Monitor Gamer" />
              <div className="card-body text-black">
                <h6 className="card-title">Monitor Asus ROG Swift 4K OLED 32"</h6>
                <p className="fw-bold text-dark">$1.499.990</p>
                <button
                  className="btn btn-primary"
                  onClick={() => agregarAlCarrito({ nombre: "Monitor Asus ROG Swift 4K OLED 32\"", precio: 1499990 })}
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-2 mb-4">
            <div className="card h-100 text-center bg-white border-secondary">
              <img src={Ryzen7} className="card-img-top" alt="Procesador" />
              <div className="card-body text-black">
                <h6 className="card-title">AMD Ryzen 7 9800X3D</h6>
                <p className="fw-bold text-dark">$569.990</p>
                <button
                  className="btn btn-primary"
                  onClick={() => agregarAlCarrito({ nombre: "AMD Ryzen 7 9800X3D", precio: 569990 })}
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-2 mb-4">
            <div className="card h-100 text-center bg-white border-secondary">
              <img src={MsiRtx5070} className="card-img-top" alt="Tarjeta gráfica" />
              <div className="card-body text-black">
                <h6 className="card-title">MSI RTX 5070Ti</h6>
                <p className="fw-bold text-dark">$1.299.990</p>
                <button
                  className="btn btn-primary"
                  onClick={() => agregarAlCarrito({ nombre: "MSI RTX 5070Ti", precio: 1299990 })}
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Cards */}
      <div className="container mt-3">
        <div className="row justify-content-center g-4">

          <div className="col-md-4 col-lg-3">
            <div className="card h-100">
              <img className="card-img-top w-100" src={CardGaming} alt="Gaming" />
              <div className="card-body text-center">
                <h4 className="card-title">Gaming</h4>
                <Link to="/gamer" className="btn btn-primary">Ver Más</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="card h-100">
              <img className="card-img-top w-100" src={CardComponentes} alt="Componentes" />
              <div className="card-body text-center">
                <h4 className="card-title">Computación</h4>
                <Link to="/computacion" className="btn btn-primary">Ver Más</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="card h-100">
              <img className="card-img-top w-100" src={CardPerifericos} alt="Periféricos" />
              <div className="card-body text-center">
                <h4 className="card-title">Accesorios</h4>
                <Link to="/accesorios" className="btn btn-primary">Ver Más</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="card h-100">
              <img className="card-img-top w-100" src={CardPcArmada} alt="PcArmada" />
              <div className="card-body text-center">
                <h4 className="card-title">Personalizados & Servicios</h4>
                <Link to="/peryser" className="btn btn-primary">Ver Más</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
