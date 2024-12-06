let numero1=parseInt(prompt("ingrese un numero: "));
let numero2=parseInt(prompt("ingrese un numero: "));
function sumar(){
    document.write(`La sumatoria de los numeros es: ${numero1+numero2}`);
}
sumar();
function restar(){
    document.write(`La diferencia de los numeros es: ${numero1-numero2}`);
}
restar();
function multiplicacion(){
    document.write(`La multiplicacion de los numeros es: ${numero1*numero2}`);
}
multiplicacion();
function division(){
    document.write(`El cociente de los numeros es: ${numero1/numero2}`);
}
division();

function calculadora(x,y,oper){
    switch(oper){
        case `sumar`:
            return sumar(x,y);
        case `restar`:
            return restar(x,y);
        case `multiplicar`:
            return multiplicacion(x,y);
        case `dividir`:
            return division(x,y);
        default:
            alert("Operacion no valida..");
    }
}
let num1=parseInt(prompt("ingrese un numero: "));
let num2=parseInt(prompt("ingrese un numero: "));
let oper=prompt("Digite una operacion: ");
calculadora(10,20,oper);
