// Funciones para manejar usuarios en localStorage
export function obtenerUsuarios() {
  return JSON.parse(localStorage.getItem("usuarios")) || [];
}

export function guardarUsuarios(usuarios) {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// Registrar usuario
export function registrarUsuario({ nombre, email, password, confirmPassword, fechaNacimiento }) {
  if (!nombre || !email || !password || !confirmPassword || !fechaNacimiento) {
    return { ok: false, mensaje: "Por favor completa todos los campos." };
  }

  if (password.length < 8) {
    return { ok: false, mensaje: "La contraseña debe tener al menos 8 caracteres." };
  }

  if (password !== confirmPassword) {
    return { ok: false, mensaje: "Las contraseñas no coinciden." };
  }

  // Validar edad
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

  let usuarios = obtenerUsuarios();
  const existe = usuarios.find((u) => u.email === email);
  if (existe) {
    return { ok: false, mensaje: "Este correo ya está registrado." };
  }

  // Validación descuento por correo
  let descuento = false;
  if (email.endsWith("@duoc.cl")) {
    descuento = true;
  }

  usuarios.push({ nombre, email, password, fechaNacimiento, descuento });
  guardarUsuarios(usuarios);

  return { ok: true, mensaje: "Registro exitoso. Ahora puedes iniciar sesión." };
}

// Iniciar sesión
export function iniciarSesion({ email, password }) {
  if (!email || !password) {
    return { ok: false, mensaje: "Por favor ingresa tu correo y contraseña." };
  }

  let usuarios = obtenerUsuarios();
  const usuario = usuarios.find((u) => u.email === email && u.password === password);

  if (usuario) {
    localStorage.setItem("usuarioActivo", JSON.stringify(usuario));
    return { ok: true, mensaje: `Bienvenido ${usuario.nombre}`, usuario };
  } else {
    return { ok: false, mensaje: "Correo o contraseña incorrectos." };
  }
}

export function obtenerUsuarioActivo() {
  return JSON.parse(localStorage.getItem("usuarioActivo")) || null;
}

export function cerrarSesion() {
  localStorage.removeItem("usuarioActivo");
}
