console.log("\n ********* Variables **********");
var numero1;
numero1 = 4;
var numero2 = 6; //Tambien se pueden colocar en la variable, directamente 
console.log(numero1);
console.log("Numero 1: " + numero1 + "\nNumero 2: " + numero2);

console.log("\n ********* Cadenas **********");
var frase = "\nBIENVENIDOS EXPLORERS";
var fraseC = 'Ejemplo de cadenas con comillas simples';
var frase2 = '\nEjemplo de cadenas con comillas simples';
var frase3 = `\n ${fraseC} invertidas`;
var frase4 = `\nLas comillas invertidas son con altgr y pulsar 2 veces en donde se cierrra el corchete`;
console.log(frase, frase2, frase3, frase4);

console.log("\n ********* Condicionales **********");

console.log(numero1 > numero2); // En esta parte tenemos diferentes condicionales como < > == != etc

//Operadores logicos 
console.log("\n ********* Operador logico AND **********");
console.log(true && true);

console.log("\n ********* Operador logico OR **********");
console.log(true || true);

console.log("\n ********* Arreglos **********");

let listaDeNumeros = [2, 3, 5, 7, 11, 234];

console.log(listaDeNumeros[5]);

listaDeNumeros.push(16);
listaDeNumeros.push(562);
console.log(listaDeNumeros);
console.log(listaDeNumeros.length);


let Palabras = ["Explorer", "Mission", "LaunchX"];
console.log(Palabras);

let palabra = "Explorer";
console.log(palabra[2]); // se va a imprimir p porque es la letra de la posicion 2
console.log(palabra.length);

console.log("\n ********* Objetos **********");

let explorer = {
    nombre: "Nombre del explorer",
    email: "liz@gmial.com",
    numeroR: 123456,
    mision: "FrontEnd",
    proyectos: ["Abogabot", "Taquería", "Pasteleria", "Vacunacion"],
    proPer: {
        escolar: "Tareas",
        profesional: "Trabajo",
        personal: "Negocio"
    } // se tiene un objeto dentro de otro objeto 
}

console.log(explorer);

console.log(explorer.email); // si solo queremos a uno de los elementos del objeto

console.log(explorer.proPer);
console.log(explorer.proPer.escolar);

console.log("\n ********* Flujo condicional **********");
let number1 = 4;
let number2 = 2;
console.log("\n ********* if/else **********");

if (number1 > number2 && number2 > 5) {
    console.log("El numero 1 es mayor a numero 2 ")
} else if (number1 == number2) {
    console.log("Los numeros son iguales")
} else if (number2 > number1) {
    console.log("El numero 2 es mayor que el numero 1")
} else {
    console.log("Favor de cambiar los vaores")
}
console.log("\n ********* While **********"); // ciclo: algo repetitivo
//ciclo condicional, while 
let numberwhile = 0;
while (numberwhile <= 12) {
    console.log(numberwhile)
    numberwhile = numberwhile + 2; //va a recorrer el ciclo hasta que sea mayor a 12 

}
console.log("Aqui sale del while: " + numberwhile);

console.log("\n ********* Do While **********"); //Tienen al menos una iteracion (al menos va a tener una vuelta)
let numberDoWhile = 10; // aun que sobrepase el valor, va a hacer el cilo portque tiene que entrar al menos 1 vez 
do {
    numberDoWhile = numberDoWhile + 2;
    console.log(numberDoWhile);
} while (numberDoWhile < 20);
console.log("Aquí se sale del Do Wile: " + numberDoWhile);

console.log("\n ********* For **********"); //Tiene una iteración controlada 
//El ciclo for tiene un control mas estricto en nuestro ciclo
let numberfor = 0;
for (let numberfor = 0; numberfor <= 12; numberfor = numberfor + 1) {
    console.log(numberfor);
}
console.log("Aquí sale el for: " + numberfor);

console.log("\n ********* Switch **********"); //Opciones para evitar anidar condicionales 
//Es cuando tenemos diferentes casos 
switch (prompt("¿Cómo está el clima?")) {
    case "lluvioso":
        console.log("No te vayas a mojar");
        break;
    case "soleado":
        console.log("Usa bloqueador");
        break;
    case "nublado":
        console.log("Lleva sueter");
        break;
    default:
        console.log("No se como esta el clima");
        break;
}
console.log("Aquí salimos del Switch");