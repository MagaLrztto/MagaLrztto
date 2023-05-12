const nombre = prompt("Por favor, ingrese su nombre:");

const mensajeBienvenida = document.getElementById("msj-bienvenida");
mensajeBienvenida.innerHTML = "Bienvenido/a, " + nombre + "!";