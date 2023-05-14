const form = document.getElementById("form");
form.addEventListener("submit", validarFormulario);

function validarFormulario(event) {
  event.preventDefault();

const nombre = document.getElementById("nombre").value;
const email = document.getElementById("email").value;
const consulta = document.getElementById("consulta_sugerencia").value;

if (nombre === "" || email === "" || consulta === "") {
    alert("Por favor, complete todos los campos");
    return;
  }

  if (!validarEmail(email)) {
    alert("Por favor, ingrese un correo electrónico válido");
    return;
  }

  alert("Formulario enviado exitosamente.");
  form.submit();
  form.reset();
}

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}