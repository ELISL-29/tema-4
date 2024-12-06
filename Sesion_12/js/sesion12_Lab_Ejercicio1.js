let numeros=[5,10,15,20,25];
let acumulador=0;
alert(numeros.length);
for(let i=0;i<numeros.length;i++)
{
    acumulador=acumulador+numeros[i];
}
document.write("La sumatoria de los elementos del arreglo es: " ,acumulador);

let suma= numeros.reduce((acumulador, valorActual) => acumulador+valorActual, 0);
let promedio=suma/numeros.length

document.write(` El promedio de los elementos es  ${acumulador/numeros.length}`);
