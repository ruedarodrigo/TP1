//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

const numero1 = Number(prompt("Ingresa un numero"));
const numero2 = Number(prompt("Ingresa otro numero"));
const texto = document.getElementById("pantalla");

if (!isNaN(numero1) && !isNaN(numero2)) {
  if (numero1 !== numero2) {
    if (numero1 > numero2) {
      texto.innerHTML = "<p>El mayor de los numeros es: " + numero1 + "</p>";
    } else {
      texto.innerHTML = "<p>El mayor de los numeros es: " + numero2 + "</p>";
    }
  } else {
    texto.innerHTML = "<p>Los numeros son iguales</p>";
  }
} else {
  texto.innerHTML = "<p>Ingresaste valores erroneos, recarga la pagina y vuelve a intentar</p>";
}
