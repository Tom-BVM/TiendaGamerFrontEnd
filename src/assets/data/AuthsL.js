const API_URL = "http://localhost:8080/auths";

export async function obtenerUsuarios() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Error al obtener usuarios");
    return await res.json();
  } catch (err) {
    console.error("Error al obtener usuarios:", err);
    return [];
  }
}

export async function registrarUsuario({ nombre, email, password, confirmPassword, fechaNacimiento }) {

  if (!nombre || !email || !password || !confirmPassword || !fechaNacimiento) {
    return { ok: false, mensaje: "Por favor completa todos los campos." };
  }

  if (password.length < 8) {
    return { ok: false, mensaje: "La contraseña debe tener al menos 8 caracteres." };
  }

  if (password !== confirmPassword) {
    return { ok: false, mensaje: "Las contraseñas no coinciden." };
  }

  const nacimiento = new Date(fechaNacimiento);
  const hoy = new Date();
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const m = hoy.getMonth() - nacimiento.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  if (edad < 18) {
    return { ok: false, mensaje: "Debes ser mayor de 18 años para registrarte." };
  }

  const nuevoUsuario = {
    username: nombre.trim(),
    email: email.trim(),
    password: password,
    role: "USER"
  };

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoUsuario)
    });

    if (!res.ok) {
      const errorText = await res.text();
      return { ok: false, mensaje: `No se pudo registrar el usuario: ${errorText}` };
    }

    const data = await res.json();
    return { ok: true, mensaje: "Registro exitoso. Ahora puedes iniciar sesión.", usuario: data };
  } catch (err) {
    console.error("Error al registrar usuario:", err);
    return { ok: false, mensaje: "Error al conectar con el servidor." };
  }
}

export async function iniciarSesion({ email, password }) {
  if (!email || !password) {
    return { ok: false, mensaje: "Por favor ingresa tu correo y contraseña." };
  }

  try {
    const usuarios = await obtenerUsuarios();
    const usuario = usuarios.find((u) => u.email === email && u.password === password);

    if (usuario) {
      localStorage.setItem("usuarioActivo", JSON.stringify(usuario));
      return { ok: true, mensaje: `Bienvenido ${usuario.username}`, usuario };
    } else {
      return { ok: false, mensaje: "Correo o contraseña incorrectos." };
    }
  } catch (err) {
    console.error("Error al iniciar sesión:", err);
    return { ok: false, mensaje: "Error al conectar con el servidor." };
  }
}

export function obtenerUsuarioActivo() {
  return JSON.parse(localStorage.getItem("usuarioActivo")) || null;
}

export function cerrarSesion() {
  localStorage.removeItem("usuarioActivo");
}
