// Este archivo contiene toda la interaccion propia de la pagina.
// De este modo el HTML se ocupa de la estructura y JavaScript se ocupa del comportamiento.

const nombreAlumno = "Hector Sascha Garcia Rodriguez";

// Esta traza sirve para comprobar en la consola que el archivo se ha cargado.
console.log("app.js cargado correctamente");

// Saluda al usuario con un mensaje visible y deja constancia en la consola.
function saludar() {
  alert(`Hola, ${nombreAlumno}. ¡Gracias por probar la pagina!`);
  console.log("Se ha pulsado el boton Saludar");
}

// Simula un problema de desarrollo sin molestar al usuario con otra ventana.
function simularError() {
  console.error("Error simulado: no se ha podido completar la operacion de prueba");
}

// Enseña la cadena userAgent y la guarda tambien para quien esta revisando la consola.
function mostrarNavegador() {
  const userAgent = navigator.userAgent;
  alert(`Este es el userAgent de tu navegador:\n\n${userAgent}`);
  console.log("UserAgent detectado:", userAgent);
}
