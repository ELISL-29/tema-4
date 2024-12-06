//Parte 1
let calificacion = prompt("Por favor, ingresa una calificación numérica entre 0 y 100:");

calificacion = Number(calificacion);

if (calificacion >= 90 && calificacion <= 100) {
    console.log("Aprobado con honores");
} else if (calificacion >= 70 && calificacion < 90) {
    console.log("Aprobado");
} else if (calificacion >= 0 && calificacion < 70) {
    console.log("Reprobado");
} else {
    console.log("Calificación no válida. Debes ingresar un número entre 0 y 100.");
}

//Parte 2
let numero = prompt("Por favor, ingresa un número:");

numero = Number(numero);

if ((numero)) {
    if (numero % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
} else {
    console.log("Entrada no válida. Por favor, ingresa un número.");
}

//Parte 3
let montoCompra = prompt("Por favor, ingresa el monto total de tu compra:");

montoCompra = Number(montoCompra);

if ((montoCompra) && montoCompra >= 0) {
    if (montoCompra > 100) {
        let descuento = montoCompra * 0.10; 
        let montoFinal = montoCompra - descuento; 
        console.log(`Se aplicó un descuento del 10%. El monto final a pagar es: $${montoFinal.toFixed(2)}`);
    } else {
        console.log(`No se aplica descuento. El monto final a pagar es: $${montoCompra.toFixed(2)}`);
    }
} else {
    console.log("Entrada no válida. Por favor, ingresa un monto numérico válido.");
}

//Parte 4
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

let intentoUsuario = prompt("Adiv290ina el número (entre 1 y 10):");

intentoUsuario = Number(intentoUsuario);

if (!isNaN(intentoUsuario) && intentoUsuario >= 1 && intentoUsuario <= 10) {
    if (intentoUsuario === numeroAleatorio) {
        console.log("¡Felicidades, adivinaste el número!");
    } else {
        console.log(`Lo siento, el número era ${numeroAleatorio}.`);
    }
} else {
    console.log("Entrada no válida. Por favor, ingresa un número entre 1 y 10.");
}

