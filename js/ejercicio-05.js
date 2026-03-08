//Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

const numero1 = parseInt(prompt("ingresa un numero"));
const numero2 = parseInt(prompt("ingresa otro numero"));

if (!isNaN(numero1) && !isNaN(numero2)) {
  const texto = document.getElementById("pantalla");
  texto.innerHTML =
    "<p>La suma de los numeros es: " + (numero1 + numero2) + "</p>";
} else{
    alert('Ingresaste un valor erroneo')
}
