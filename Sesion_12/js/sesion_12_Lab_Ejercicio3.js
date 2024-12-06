let contraseñaCorrecta = "12345";
let contraseñaIngresada;

do {
  contraseñaIngresada = prompt("Por favor, ingresa la contraseña:");

  if (contraseñaIngresada !== contraseñaCorrecta) {
    console.log("Contraseña incorrecta. Intenta de nuevo.");
  }

} while (contraseñaIngresada !== contraseñaCorrecta);