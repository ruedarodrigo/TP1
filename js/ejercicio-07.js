//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

const numero1 = Number(prompt('Ingresa el primer numero'))
const numero2 = Number(prompt('Ingresa el segundo numero'))
const numero3 = Number(prompt('Ingresa el tercer numero'))
const texto = document.getElementById('pantalla')

if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero2)) {
    if((numero1 !== numero2) || (numero1 !== numero3)){
        if((numero1>numero2) && (numero1>numero3)){
            texto.innerHTML = "<p>El "+ numero1 + " es el numero mas grande</p>"
        } else{
            if(numero2 > numero3){
                texto.innerHTML = "<p>El "+ numero2 + " es el numero mas grande</p>"
            } else{
                texto.innerHTML = "<p>El "+ numero3 + " es el numero mas grande</p>"
            }
        }
    } else{
        texto.innerHTML = "<p>Los tres numeros son iguales</p>"
    }
} else {
  texto.innerHTML = "<p>Ingresaste valores erroneos, recarga la pagina y vuelve a intentar</p>";
}