//funciones- se pueden declarar de diferentes formas, la primera
// es con function 
const cuadrado = function(x) { // recive un parametro
    return x * x;
}

console.log(cuadrado(12)); // cuadrado va a definir a la funcion de x y (12) lo toma como x

const ruido = function() { //En esta funcion no se le manda ningun parametro
    console.log("Kataplum");
}
ruido();

//Funcion en donde se manda mas de 1 parametro 

const exponencial1 = function(base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}
console.log(exponencial1(4, 3));

//Funciones se ponen despues 

console.log(sumar(2, 2)); // no importa en que parte del codigo se ponga la funcion 
function sumar(x, y) { // este lo va a leer 
    return x + y;
}

// Al poner restar = se esta declarando que esa va a ser una funcion 
const restar = (a, b) => { // con la flechita declaramos el function
    return a - b;
}
console.log(restar(40, 8));

//Tambien se puede declarar funciones con String 
function saludar(quien) {
    console.log("Hola " + quien);
}
saludar("Explorer");
console.log("Bye");

// Excepciones 
// Las excepciones nos van a ayudar a captar los errores que rompen nuestro 
// programa para que nustro programa siga funcionando 

function preguntaDireccion(pregunta) {
    let result = prompt(pregunta);
    if (result.toLowerCase() == "izquierda") return "I"; // con el toLowerCase se ponen en minusculas las respuestas del usuario
    if (result.toLowerCase() == "derecha") return "D";
    throw new Error("Dirección invalida: " + result); // si no funciona de forma correcta se va al throw  
}

function mirar() {
    if (preguntaDireccion("A que lado?") == "I") {
        return "Una casa";

    } else {
        return " 2 osos hambrientos";
    }
}

try {
    console.log("Mira a ", mirar());
} catch (error) {
    console.log("Hubo un error: " + error);
}