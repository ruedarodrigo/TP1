// Escribe un programa que pida una frase y escriba las vocales que aparecen.
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

const frase = prompt("Ingresa una frase de hasta 4 caracteres").toLowerCase();
const texto = document.getElementById("pantalla");

texto.innerHTML = `Las vocales de la palabra ${frase} son: `;
console.log(frase);
console.log(frase.toLocaleLowerCase()); //esto transforma el texto a minusculas
console.log(frase.toUpperCase()); //esto transforma el texto a mayusculas

if (frase.length <= 4) {
  if (
    frase.charAt(0) === "a" ||
    frase.charAt(0) === "e" ||
    frase.charAt(0) === "i" ||
    frase.charAt(0) === "o" ||
    frase.charAt(0) === "u"
  ) {
    texto.innerHTML += `${frase.charAt(0)} `;
  }

  if (
    frase.charAt(1) === "a" ||
    frase.charAt(1) === "e" ||
    frase.charAt(1) === "i" ||
    frase.charAt(1) === "o" ||
    frase.charAt(1) === "u"
  ) {
    texto.innerHTML += `${frase.charAt(1)} `;
  }
  if (
    frase.charAt(2) === "a" ||
    frase.charAt(2) === "e" ||
    frase.charAt(2) === "i" ||
    frase.charAt(2) === "o" ||
    frase.charAt(2) === "u"
  ) {
    texto.innerHTML += `${frase.charAt(2)} `;
  }
  if (
    frase.charAt(3) === "a" ||
    frase.charAt(3) === "e" ||
    frase.charAt(3) === "i" ||
    frase.charAt(3) === "o" ||
    frase.charAt(3) === "u"
  ) {
    texto.innerHTML += `${frase.charAt(3)} `;
  }
} else {
  alert(
    "Ingresaste una palabra mas larga de lo que podemos analizar en este momento",
  );
}
