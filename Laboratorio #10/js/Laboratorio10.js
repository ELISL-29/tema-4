// Parte 1 
let nombre = "elis"
let edad = 19
let esEstudiante = true

console.log("Nombre: ",nombre );
console.log("Edad ", edad);
console.log("Es Estudiante: ",esEstudiante);

// Parte 2

let a =10;
let b =30;

let suma=a+b;
let resta=a-b;
let multiplicacion= a*b;
let division=a/b;

console.log("<b>Suma: </br>",suma);
console.log("Resta: ",resta);
console.log("Multiplicacion: ",multiplicacion);
console.log("Division: ",division);

console.log(`a == b: ${a == b}`);  
console.log(`a != b: ${a != b}`);  
console.log(`a > b: ${a > b}`);    
console.log(`a < b: ${a < b}`);    
console.log(`a >= b: ${a >= b}`);  
console.log(`a <= b: ${a <= b}`);  

//Parte 3

let esMayorDeEdad = true;
let tieneLicencia = true;

let puedeConducir = esMayorDeEdad && tieneLicencia;
let necesitaPermiso = esMayorDeEdad || tieneLicencia;

console.log(`¿La persona puede conducir? ${puedeConducir}`);
console.log(`¿La persona puede conducir con alguna condición (mayor de edad o licencia)? ${necesitaPermiso}`);

let nombres="elis";
let apellido="lengua";

let bienvenida="¡Bienvenido Sr "+nombre+""+apellido+"! esperamos que disfrutes tu estancia";
let bienvenidaTemplate= `¡Bienvenido Sr, ${nombre} ${apellido} espero que le vaya super bien en su día`;

console.log(bienvenida);
console.log(bienvenidaTemplate);






