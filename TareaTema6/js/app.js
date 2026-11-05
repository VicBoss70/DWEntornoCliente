/*
  Tarea 6 · DWEC · [Hector Sascha Garcia Rodriguez]
  Objetos y arrays.

  Cómo usar esta plantilla:
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · Ya tienes hechas, como modelo, comoTexto(), pintarProductos() y el ejercicio 2 casi entero:
    léelas antes de empezar, porque el resto se hace igual.
  · Los resultados se pintan en la página como en el tema 5: createElement, textContent, classList y append.
    Antes de volver a pintar una lista, vacíala con textContent = "".
  · Las funciones se escriben con function, también las que pasas a forEach, sort, map, filter o reduce.
    Las funciones flecha las veremos en el tema 7: en esta tarea, no las uses.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: un array como texto, por ejemplo [1, 2, 3]
// (ya está hecha: úsala cuando quieras enseñar un array)
// ============================================================

function comoTexto(lista) {
  return "[" + lista.join(", ") + "]";
}


// ============================================================
// Ejercicio 1 · Ficha de estudiante
// ============================================================

// TODO: completa el objeto literal con tus datos: nombre, apellidos, edad y curso.
// TODO: añádele el método presentarse(), que devuelve una frase con this.nombre, this.apellidos, this.edad y this.curso.
//       Por ejemplo: «Soy [nombre] [apellidos], tengo [edad] años y estudio [curso].»
const estudiante = {
nombre: "Hector Sascha",
  apellidos: "Garcia Rodriguez",
  edad: 18,
  curso: "2.º DAW",
  presentarse: function () {
    return `Soy ${this.nombre} ${this.apellidos}, tengo ${this.edad} años y estudio ${this.curso}.`;
  }
};

function verFicha() {
  // TODO: vacía #salida1 (textContent = "").
  // TODO: crea un <ul class="list-group"> con un <li class="list-group-item"> por propiedad: «nombre: ...», «edad: ...».
  //       Pista: guarda las claves en un array, ["nombre", "apellidos", "edad", "curso"], recórrelo con forEach
  //       y lee cada valor con corchetes: estudiante[clave].
  // TODO: debajo, un <p> con la frase de estudiante.presentarse().
  // TODO: console.log() del objeto entero.
  const salida = document.querySelector("#salida1");
  salida.textContent = "";

  const lista = document.createElement("ul");
  lista.classList.add("list-group", "mb-2");

  // Las claves van en un array y el valor se lee con corchetes
  const claves = ["nombre", "apellidos", "edad", "curso"];
  claves.forEach(function (clave) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = `${clave}: ${estudiante[clave]}`;
    lista.append(li);
  });
const frase = document.createElement("p");
  frase.classList.add("fst-italic", "mb-0");
  frase.textContent = estudiante.presentarse();

  salida.append(lista, frase);
  console.log("Ejercicio 1: ficha pintada", estudiante);
}

function cumplirAnios() {
  // TODO: suma 1 a la edad del estudiante y vuelve a pintar la ficha (llama a verFicha()).
  estudiante.edad = estudiante.edad + 1;
  console.log("Ejercicio 1: cumplo años, ahora tengo", estudiante.edad);
  verFicha();
}

function quitarCurso() {
  // TODO: borra la propiedad curso con delete y vuelve a pintar la ficha.
  //       Fíjate en lo que sale ahora en el curso y explícalo en el README.
  delete estudiante.curso;
  console.log("Ejercicio 1: curso borrado", estudiante);
  verFicha();
  
}


// ============================================================
// Ejercicio 2 · Colores
// mostrarColores() y anadirColor() ya están hechas: son el modelo
// ============================================================

const colores = ["rojo", "verde", "azul"];

function mostrarColores() {
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";   // vaciamos la lista antes de volver a pintarla

  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });

  document.querySelector("#totalColores").textContent = colores.length;
}

function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
}

function anadirColor() {
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();

  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    return;
  }

  colores.push(color);   // push añade al final
  casilla.value = "";
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: push →", comoTexto(colores));
}

function quitarUltimo() {
  // TODO: si la lista está vacía, avisa con avisar2() y no hagas nada más.
  // TODO: si no, saca el último con pop(), vuelve a pintar la lista y di en la consola qué color ha salido.
    if (colores.length === 0) {
    avisar2("No quedan colores que quitar.");
    console.warn("Ejercicio 2: pop con la lista vacía");
    return;
  }

  const quitado = colores.pop();
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: pop →", quitado, comoTexto(colores));
  
}

function quitarPrimero() {
  // TODO: lo mismo que quitarUltimo(), pero sacando el primero con shift().
  if (colores.length === 0) {
    avisar2("No quedan colores que quitar.");
    console.warn("Ejercicio 2: shift con la lista vacía");
    return;
  }

  const quitado = colores.shift();
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: shift →", quitado, comoTexto(colores));
}

mostrarColores();   // pinta los tres colores de partida nada más cargar


// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================

// Puedes cambiar los productos por otros, pero deja al menos seis, con estas tres propiedades
const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

// Ya está hecha: pinta en la tabla la lista de productos que le pases
function pintarProductos(lista) {
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";

  lista.forEach(function (producto) {
    const fila = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.textContent = producto.nombre;

    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;

    const precio = document.createElement("td");
    precio.classList.add("text-end");
    precio.textContent = producto.precio.toFixed(2) + " €";

    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });
}

function mostrarProductos() {
  // TODO: pinta todos los productos con pintarProductos() y escribe en #mensaje3 cuántos hay.
  pintarProductos(productos);
  document.querySelector("#mensaje3").textContent = `Hay ${productos.length} productos en el catálogo.`;
  console.log("Ejercicio 3: catálogo completo,", productos.length, "productos");
}

function ordenarPorPrecio() {
  // TODO: haz una copia del array con [...productos] y ordénala con sort() de más barato a más caro.
  //       sort necesita una función de comparación: function (a, b) { return ... }.
  //       ¿Por qué una copia? Explícalo en el README.
  // TODO: pinta la copia y escribe en #mensaje3 cómo están ordenados.
  const copia = [...productos];
  copia.sort(function (a, b) {
    return a.precio - b.precio;
  });
  pintarProductos(copia);
  document.querySelector("#mensaje3").textContent = "Ordenados de más barato a más caro.";
  console.log("Ejercicio 3: ordenados por precio", copia);
}

function filtrarCaros() {
  // TODO: con filter(), los productos de más de 50 €. Píntalos y escribe en #mensaje3 cuántos son.
   const caros = productos.filter(function (producto) {
    return producto.precio > 50;
  });
  pintarProductos(caros);
  document.querySelector("#mensaje3").textContent = `Hay ${caros.length} productos de más de 50 €.`;
  console.log("Ejercicio 3: filter de más de 50 €", caros);
}

function buscarProducto() {
  // TODO: lee #buscarProducto (value, trim y toLowerCase). Si está vacío, avisa en #mensaje3.
  // TODO: con find(), el primer producto cuyo nombre en minúsculas contenga ese texto (includes).
  // TODO: find devuelve undefined si no encuentra nada: en ese caso, dilo en #mensaje3 y vacía la tabla.
  //       Si lo encuentra, píntalo solo a él: pintarProductos([encontrado]).
  const texto = document.querySelector("#buscarProducto").value.trim().toLowerCase();
  const mensaje = document.querySelector("#mensaje3");

  if (texto === "") {
    mensaje.textContent = "Escribe algo para buscar.";
    console.warn("Ejercicio 3: búsqueda vacía");
    return;
  }

  const encontrado = productos.find(function (producto) {
    return producto.nombre.toLowerCase().includes(texto);
  });

  // find devuelve undefined si no encuentra nada
  if (encontrado === undefined) {
    mensaje.textContent = `No hay ningún producto que contenga «${texto}».`;
    pintarProductos([]);
    console.log("Ejercicio 3: find no ha encontrado nada con", texto);
  } else {
    mensaje.textContent = `Primer producto que contiene «${texto}»:`;
    pintarProductos([encontrado]);
    console.log("Ejercicio 3: find →", encontrado);
  }
}

mostrarProductos();   // la tabla completa nada más cargar


// ============================================================
// Ejercicio 4 · Notas
// ============================================================

const alumno = {
  nombre: "[Tu nombre]",
  notas: [],

   // Guarda la nota si es un número entre 0 y 10. Devuelve true si la guarda y false si no
  anadirNota: function (nota) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    }
    this.notas.push(nota);
    return true;
  },

  // Calcula la media con reduce; sin notas devuelve 0
  media: function () {
    if (this.notas.length === 0) {
      return 0;
    }
    const suma = this.notas.reduce(function (acumulado, nota) {
      return acumulado + nota;
    }, 0);
    return suma / this.notas.length;
  }
  // TODO: método anadirNota(nota): si la nota no es un número (Number.isNaN) o no está entre 0 y 10, devuelve false;
  //       si es válida, la añade a this.notas con push y devuelve true.
  // TODO: método media(): si no hay notas devuelve 0; si hay, la suma (con reduce) dividida entre el número de notas.
  //       Recuerda la coma entre una propiedad y la siguiente.
};

function mostrarNotas() {
  // TODO: vacía #notas y pon un badge (<span class="badge">) por nota: verde (text-bg-success) si es de 5 o más,
  //       rojo (text-bg-danger) si no.
  // TODO: en #media, «Media de N notas: X» con dos decimales (toFixed(2)), o «Todavía no hay notas.».
    const contenedor = document.querySelector("#notas");
  contenedor.textContent = "";

  alumno.notas.forEach(function (nota) {
    const badge = document.createElement("span");
    badge.classList.add("badge", "me-1", nota >= 5 ? "text-bg-success" : "text-bg-danger");
    badge.textContent = nota;
    contenedor.append(badge);

});

const media = document.querySelector("#media");
  if (alumno.notas.length === 0) {
    media.textContent = "Todavía no hay notas.";
  } else {
    media.textContent = `Media de ${alumno.notas.length} notas: ${alumno.media().toFixed(2)}`;
  }
  console.log("Ejercicio 4: notas", comoTexto(alumno.notas));
}

function anadirNota() {
  // TODO: si #nota está vacía, muestra un error en #error4 (quítale "d-none").
  //       Ojo: Number("") vale 0, así que esta comprobación va antes de convertir.
  // TODO: convierte el valor con Number() y llama a alumno.anadirNota(). Si devuelve false, muestra el error.
  // TODO: si ha ido bien, oculta el error, vacía la casilla y llama a mostrarNotas().
  const casilla = document.querySelector("#nota");
  const error = document.querySelector("#error4");

  // La casilla vacía se comprueba antes de convertir, porque Number("") vale 0
  if (casilla.value.trim() === "") {
    error.textContent = "Escribe una nota antes de añadirla.";
    error.classList.remove("d-none");
    console.warn("Ejercicio 4: casilla vacía");
    return;
  }
  const nota = Number(casilla.value);
  if (!alumno.anadirNota(nota)) {
    error.textContent = "La nota tiene que ser un número entre 0 y 10.";
    error.classList.remove("d-none");
    console.warn("Ejercicio 4: nota no válida", nota);
    return;
  }

  error.classList.add("d-none");
  casilla.value = "";
  mostrarNotas();
}


function borrarNotas() {
  // TODO: deja alumno.notas vacío y vuelve a pintar.
  alumno.notas = [];
  document.querySelector("#error4").classList.add("d-none");
  console.log("Ejercicio 4: notas borradas");
  mostrarNotas();
}

mostrarNotas();


// ============================================================
// Ejercicio 5 · map, filter y reduce
// ============================================================

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verDobles() {
  // TODO: con map(), un array nuevo con el doble de cada número.
  // TODO: escribe en #salida5 el resultado y, debajo, numeros (para que se vea que no ha cambiado).
}

function verPares() {
  // TODO: con filter(), los números pares (n % 2 === 0). Escríbelos en #salida5 como en verDobles().
}

function verSuma() {
  // TODO: con reduce(), la suma de todos los números (empieza en 0). Escríbela en #salida5.
}

function verCadena() {
  // TODO: los tres seguidos: los pares, después sus dobles y al final la suma de esos dobles.
  //       Escribe en #salida5 una línea por paso.
}


// ============================================================
// Ejercicio 6 · Ciudades
// ============================================================

const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
let ciudades = [...ciudadesOriginal];   // una copia: splice cambia ciudades y así podemos restaurarla

function mostrarCiudades() {
  // TODO: vacía #ciudades y pon un badge por ciudad con su posición: «0 · Granada», «1 · Sevilla»...
  //       Pista: forEach le pasa a tu función dos datos: function (ciudad, posicion) { ... }.
}

function verSlice() {
  // TODO: guarda ciudades.slice(2, 5) y escribe en #salida6 qué devuelve y cuántas ciudades siguen en el array.
}

function hacerSplice() {
  // TODO: si quedan menos de 3 ciudades, avisa en #salida6 de que hay que restaurar y no hagas nada más.
  // TODO: si no, ciudades.splice(2, 2): escribe en #salida6 qué devuelve y cuántas quedan, y vuelve a pintar.
}

function restaurarCiudades() {
  // TODO: vuelve a copiar ciudadesOriginal en ciudades y pinta.
}

function buscarCiudad() {
  // TODO: lee #buscarCiudad (value y trim). Si está vacío, avisa.
  // TODO: escribe en #salida6 lo que dan includes() e indexOf() con ese nombre. Si no está, indexOf da -1.
}

mostrarCiudades();
