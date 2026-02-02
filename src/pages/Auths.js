import React, { useState } from "react";
import styles from "../assets/style/auths.module.css";
import { registrarUsuario, iniciarSesion } from "../assets/data/AuthsL";
import { useNavigate } from "react-router-dom";

function Auths() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleRegistro = async (event) => {
    event.preventDefault();
    const form = event.target;

    const resultado = await registrarUsuario({
      nombre: form.nombre.value,
      email: form.email.value,
      password: form.password.value,
      confirmPassword: form["confirm-password"].value,
      fechaNacimiento: form.fechaNacimiento.value,
    });

    alert(resultado.mensaje);
    if (resultado.ok) setIsLogin(true);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;

    const resultado = await iniciarSesion({
      email: form["login-email"].value,
      password: form["login-password"].value,
    });

    alert(resultado.mensaje);

    if (resultado.ok) {
      navigate("/");
    }
  };

  return (
    <div className={styles.authsContainer}>
      <div className={styles.loginBox}>
        <div className={styles.loginCard}>
          {isLogin ? (
            <>
              {/* Iniciar Sesión */}
              <h3 className="text-center mb-4">Iniciar Sesión</h3>
              <form id="login" onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="login-email" className="form-label">Correo electrónico</label>
                  <input type="email" className="form-control" id="login-email" name="login-email" placeholder="usuario@gmail.com" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="login-password" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="login-password" name="login-password" placeholder="********" required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Ingresar</button>
              </form>
              <div className="text-center mt-3">
                <p>¿No tienes cuenta?{" "}
                  <button type="button" className="btn btn-link text-decoration-none" onClick={() => setIsLogin(false)}>Regístrate Aquí</button>
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Crear Cuenta */}
              <h3 className="text-center mb-4">Crear Cuenta</h3>
              <form id="registro" onSubmit={handleRegistro}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Tu nombre" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo electrónico</label>
                  <input type="email" className="form-control" id="email" name="email" placeholder="usuario@gmail.com" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="fechaNacimiento" className="form-label">Fecha de nacimiento</label>
                  <input type="date" className="form-control" id="fechaNacimiento" name="fechaNacimiento" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="password" name="password" placeholder="********" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirm-password" className="form-label">Confirmar contraseña</label>
                  <input type="password" className="form-control" id="confirm-password" name="confirm-password" placeholder="********" required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Registrarse</button>
              </form>
              <div className="text-center mt-3">
                <p>¿Ya tienes cuenta?{" "}
                  <button type="button" className="btn btn-link text-decoration-none" onClick={() => setIsLogin(true)}>Ingresa Aquí</button>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auths;
