import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">

          {/* Ayuda */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Ayuda</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Centro de Ayuda</a></li>
              <li><a href="#" className="text-light text-decoration-none">Seguimiento de Compra</a></li>
              <li><a href="#" className="text-light text-decoration-none">Preguntas Frecuentes</a></li>
              <li><a href="#" className="text-light text-decoration-none">Revisa tu Boleta</a></li>
            </ul>
          </div>

          {/* Nosotros */}
          <div className="col-md-4 mb-3">
            <h5>Nosotros</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Trabaja con Nosotros</a></li>
              <li><a href="#" className="text-light text-decoration-none">Beneficios de Comprar con Nosotros</a></li>
              <li><a href="#" className="text-light text-decoration-none">Términos y Condiciones</a></li>
              <li><a href="#" className="text-light text-decoration-none">Políticas de Privacidad</a></li>
              <li><a href="#" className="text-light text-decoration-none">¿Quiénes somos?</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-md-4 mb-3">
            <h5>Contacto</h5>
            <p className="mb-1">contacto@levelupgamer.com</p>
            <p className="mb-1">+56 9 4867 4501</p>
            <p className="mb-0">Santiago, Chile</p>
          </div>

          {/* Derechos reservados */}
          <div className="text-center border-top border-secondary pt-3 mt-3">
            <small className="text-secondary">
              © 2026 LEVEL-UP GAMES — Todos los derechos reservados
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
