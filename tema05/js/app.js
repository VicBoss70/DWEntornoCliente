/*
  Tarea 5 · DWEC · [Tu nombre y apellidos]
  Manipular el DOM.

  Cómo usar esta plantilla:
  · Desde este tema, el JavaScript escribe en la página: selecciona elementos y cambia su texto, sus clases...
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · app.js se carga en el <head> con defer: cuando se ejecuta, el HTML ya está leído.
  · Selecciona con document.querySelector() / querySelectorAll() (o getElementById).
  · Texto con textContent; aspecto con classList y las clases de Bootstrap (no con style).
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ejercicio 1 · Selectores y modificación
// Un selector distinto para cada párrafo
// ============================================================

function aplicarCambios() {
  // El modelo: el primer párrafo, por su id
  const primero = document.getElementById("primero");
  primero.textContent = "Texto modificado por JavaScript";

  const segundo = documento.querySelector(".segundo");
  if (segundo !== null) {

  segundo.classList.add("bg-warning-subtle")
  }
  


  const parrafos = document.querySelectorAll("#contenido p")
  const tercero = parrafos[2];
  if (tercero !== undefined) {
    tercero.classList.add("textdanger");

    console.log("aplicarCambios: cambios aplicados a los tres párrafos");
  }

}


// ============================================================
// Ejercicio 2 · Crear y eliminar nodos
// ============================================================

function anadirParrafo() {
  const contenido = document.querySelector("#contenido");
  const parrafo = document.createElement("p");

  parrafo.textContent = `Párrafo nuevo ${contenido.children.lenght + 1}`;
  contenido.append(parrafo);

  document.querySelector("#aviso2").classList.add("d-none");
  console.log(`anadirParrafo: ahora hay ${contenido.children.lenght} párrafos`)

}

function eliminarUltimo() {

  //       Si no, bórralo con remove().
   const contenido = document.querySelector("#contenido");
  const ultimo = contenido.lastElementChild;

  if (ultimo === null) {
    document.querySelector("#aviso2").classList.remove("d-none");
    console.warn("eliminarUltimo: no quedan párrafos que eliminar");
  } else {
    ultimo.remove();
    console.log(`eliminarUltimo: quedan ${contenido.children.length} párrafos`);
  }
}



// ============================================================
// Ejercicio 3 · Resaltar al pasar el ratón
// ============================================================

// Añade a cada párrafo los eventos de entrar y salir con el ratón
function activarResaltado() {
  const parrafos = document.querySelectorAll("#contenido p");

  for (const parrafo of parrafos) {
    // Al entrar el ratón, se pone gris
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });

    // Al salir el ratón, se quita el gris
    parrafo.addEventListener("mouseleave", function () {
      parrafo.classList.remove("bg-body-secondary");
    });
  }

  console.log(`activarResaltado: eventos activados en ${parrafos.length} párrafos`);
}


// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

function cambiarTexto() {

    const texto = document.querySelector("#nuevoTexto").value.trim();
  const error = document.querySelector("#error4");
  const primero = document.querySelector("#contenido p");

  if (texto === "") {
    error.classList.remove("d-none");
    console.warn("cambiarTexto: la casilla está vacía");
  } else if (primero === null) {
    console.warn("cambiarTexto: no queda ningún párrafo");
  } else {
    primero.textContent = texto;
    error.classList.add("d-none");
    console.log(`cambiarTexto: el primer párrafo ahora dice «${texto}»`);
  }
}

function cambiarConHtml() {
 const texto = document.querySelector("#nuevoTexto").value.trim();
  const error = document.querySelector("#error4");
  const primero = document.querySelector("#contenido p");

  if (texto === "") {
    error.classList.remove("d-none");
    console.warn("cambiarConHtml: la casilla está vacía");
  } else if (primero === null) {
    console.warn("cambiarConHtml: no queda ningún párrafo");
  } else {
    primero.innerHTML = texto;
    error.classList.add("d-none");
    console.log(`cambiarConHtml: el primer párrafo ahora tiene el HTML «${texto}»`);
  }
}


// ============================================================
// Ejercicio 5 · Lista de tareas
// ============================================================

function anadirTarea() {

   const entrada = document.querySelector("#tareaInput");
  const texto = entrada.value.trim();
  const error = document.querySelector("#error5");

  if (texto === "") {
    error.textContent = "Escribe una tarea antes de añadirla.";
    error.classList.remove("d-none");
    console.warn("anadirTarea: la casilla está vacía");
  } else {
    const elemento = document.createElement("li");
    elemento.classList.add("list-group-item");

    const casilla = document.createElement("input");
    casilla.type = "checkbox";
    casilla.classList.add("form-check-input", "me-2");

    const nombre = document.createElement("span");
    nombre.textContent = texto;

    elemento.append(casilla, nombre);
    document.querySelector("#listaTareas").append(elemento);

    entrada.value = "";
    error.classList.add("d-none");
    actualizarTotal();
    console.log(`anadirTarea: añadida «${texto}»`);
    
        // Cuenta los <li> de la lista y lo escribe en el contador
function actualizarTotal() {
  const total = document.querySelectorAll("#listaTareas li").length;
  document.querySelector("#totalTareas").textContent = total;
}
  }
}

function borrarCompletadas() {
    const marcadas = document.querySelectorAll("#listaTareas input:checked");
  const error = document.querySelector("#error5");

  if (marcadas.length === 0) {
    error.textContent = "No hay ninguna tarea marcada para borrar.";
    error.classList.remove("d-none");
    console.warn("borrarCompletadas: no hay tareas marcadas");
  } else {
    for (const casilla of marcadas) {
      // El <li> es el padre de la casilla
      casilla.parentElement.remove();
    }
    error.classList.add("d-none");
    actualizarTotal();
    console.log(`borrarCompletadas: borradas ${marcadas.length} tareas`);
  }
}


// ============================================================
// Ejercicio 6 · Datos de la ventana (BOM)
// ============================================================

function verDatosVentana() {
    document.querySelector("#datoPantalla").textContent = `${screen.width} × ${screen.height} px`;
  document.querySelector("#datoUrl").textContent = location.href;
  document.querySelector("#datoIdioma").textContent = navigator.language;
  // El modelo: el tamaño de la ventana
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;

    let punto;
  if (ancho < 576) {
    punto = "xs (menos de 576 px)";
  } else if (ancho < 768) {
    punto = "sm (de 576 a 767 px)";
  } else if (ancho < 992) {
    punto = "md (de 768 a 991 px)";
  } else if (ancho < 1200) {
    punto = "lg (de 992 a 1199 px)";
  } else if (ancho < 1400) {
    punto = "xl (de 1200 a 1399 px)";
  } else {
    punto = "xxl (desde 1400 px)";
  }
  document.querySelector("#datoPunto").textContent = punto;

  document.querySelector("#datoPantalla").textContent = `${screen.width} × ${screen.height} px`;
  document.querySelector("#datoUrl").textContent = location.href;
  document.querySelector("#datoIdioma").textContent = navigator.language;

  console.log(`verDatosVentana: ventana ${ancho} × ${alto}, punto de corte ${punto}`);

}
