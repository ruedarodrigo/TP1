// Escribe un programa que pida un número y diga si es divisible por 2

const numero = parseInt(prompt("ingresa un numero"));
const texto = document.getElementById("pantalla");

if (!isNaN(numero)) {
  const resto = numero % 2;
  if ((resto == 0)) {
    texto.innerHTML = "<p>El " + numero + " es divisible por 2.</p>";
  } else {
    texto.innerHTML = "<p>El " + numero + " no es divisible por 2.</p>";
  }
} else {
  texto.innerHTML = "<p>Ingresaste valores erroneos, recarga la pagina y vuelve a intentar</p>";
}
