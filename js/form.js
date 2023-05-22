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

//API

const url = 'https://dog.ceo/api/breeds/image/random';

fetch(url)
  .then(response => {
	if (response.ok) {
	  return response.json();
	} else {
	  throw new Error('Error al realizar la solicitud:', response.status);
	}
  })
  .then(data => {
	const imageUrl = data.message;
	const dogImage = document.getElementById('dogImage');
	dogImage.src = imageUrl;
  })
  .catch(error => {
	console.error('Error:', error);
  }).mount("#api.perros");