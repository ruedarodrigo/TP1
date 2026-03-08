//Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

const nombre = prompt("Ingresa tu nombre")

const texto = document.getElementById('pantalla')
texto.innerHTML = "<p>Hola " + nombre + "</p>"
