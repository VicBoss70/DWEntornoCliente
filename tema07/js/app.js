/*
  Tarea 7 · DWEC · [Hector Sascha Garcia Rodriguez]
  Funciones, flechas y clases.

  Cómo usar esta plantilla:
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · La regla de este tema:
      - declaración, function nombre() { ... }, para las funciones con nombre, como las de los botones;
      - FLECHA para todos los callbacks: forEach, map, filter, sort, reduce, find, some...;
      - nunca una flecha como método: en las clases, la forma corta media() { ... }.
  · Los resultados se pintan en la página como en los temas 5 y 6: createElement, textContent, classList y append.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: pinta una lista de textos en un <ul class="list-group">
// (ya está hecha, y su forEach ya lleva una flecha: es el modelo)
// ============================================================

function pintarLista(selector, textos) {
  const lista = document.querySelector(selector);
  lista.textContent = "";

  textos.forEach((texto) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = texto;
    lista.append(li);
  });
}


// ============================================================
// Ejercicio 1 · Precio final
// ============================================================

// TODO: calcularPrecio(base, iva, descuento) devuelve el precio final con return. No lee ni pinta nada.
//       iva vale 21 por defecto y descuento, 0 por defecto (parámetros por defecto).
//       Primero se resta el descuento (un tanto por ciento de la base) y después se suma el IVA.
//       Comprueba en la consola: calcularPrecio(100) tiene que dar 121.
function calcularPrecio(base, iva, descuento) {
  const conDescuento = base - (base * descuento) / 100;
  return conDescuento + (conDescuento * iva) / 100;
}

// Ya está hecha: 74.8 → "74.80 €"
function formatearEuros(cantidad) {
  return cantidad.toFixed(2) + " €";
}

function mostrarPrecio() {
  // TODO: lee #base, #iva y #descuento (value). El IVA conviértelo con Number().
  // TODO: si la base está vacía o es negativa, error en #error1 (quítale "d-none") y no sigas.
  // TODO: si el descuento está vacío, llama a calcularPrecio(base, iva), sin el tercer argumento, para que se
  //       use el valor por defecto. Si no, comprueba que está entre 0 y 100 y pásaselo.
  // TODO: oculta el error y pinta el desglose en #salida1 con pintarLista():
  //       «Precio sin IVA: …», «Descuento: … %», «IVA: … %» y «Precio final: …» (con formatearEuros).
  const textoBase = document.querySelector("#base").value.trim();
  const iva = Number(document.querySelector("#iva").value);
  const textoDescuento = document.querySelector("#descuento").value.trim();
  const error = document.querySelector("#error1");

  const base = Number(textoBase);
  if (textoBase === "" || Number.isNaN(base) || base < 0) {
    error.textContent = "Escribe un precio sin IVA que no sea negativo.";
    error.classList.remove("d-none");
    console.warn("Ejercicio 1: base no válida");
    return;
  }

  let descuento = 0;
  let precioFinal;

  if (textoDescuento === "") {
    // Sin tercer argumento se usa el descuento por defecto
    precioFinal = calcularPrecio(base, iva);
  } else {
    descuento = Number(textoDescuento);
    if (Number.isNaN(descuento) || descuento < 0 || descuento > 100) {
      error.textContent = "El descuento tiene que estar entre 0 y 100.";
      error.classList.remove("d-none");
      console.warn("Ejercicio 1: descuento no válido");
      return;
    }
    precioFinal = calcularPrecio(base, iva, descuento);
  }

  error.classList.add("d-none");
  pintarLista("#salida1", [
    `Precio sin IVA: ${formatearEuros(base)}`,
    `Descuento: ${descuento} %`,
    `IVA: ${iva} %`,
    `Precio final: ${formatearEuros(precioFinal)}`
  ]);
  console.log("Ejercicio 1: precio final →", precioFinal);
}


// ============================================================
// Ejercicio 2 · Películas: de function a flecha
// ============================================================

const peliculas = [
  { titulo: "El laberinto del fauno", anio: 2006, duracion: 118 },
  { titulo: "Coco", anio: 2017, duracion: 105 },
  { titulo: "Interstellar", anio: 2014, duracion: 169 },
  { titulo: "Regreso al futuro", anio: 1985, duracion: 116 },
  { titulo: "Parásitos", anio: 2019, duracion: 132 },
  { titulo: "Toy Story", anio: 1995, duracion: 81 }
];

// Ya está hecha: una película como texto, «Coco (2017) · 105 min»
function comoTexto(pelicula) {
  return `${pelicula.titulo} (${pelicula.anio}) · ${pelicula.duracion} min`;
}

// Las cuatro funciones siguientes ya funcionan, pero sus callbacks están escritos con function, como en el tema 6.
// TODO: pasa a flecha los cuatro callbacks (map, filter, sort y reduce). Si el cuerpo es solo una expresión,
//       sin llaves ni return. Comprueba después que cada botón sigue dando lo mismo.

function verTitulos() {
  const titulos = peliculas.map ((pelicula) => pelicula.titulo); 
    
  pintarLista("#salida2", titulos);
  document.querySelector("#mensaje2").textContent = `${titulos.length} títulos.`;
  console.log("Ejercicio 2: map →", titulos);
}

function verLargas() {
  const largas = peliculas.filter ((pelicula) => pelicula.duracion > 120)

  pintarLista("#salida2", largas.map(comoTexto));   // comoTexto ya es una función: se pasa sin paréntesis
  document.querySelector("#mensaje2").textContent = `${largas.length} películas duran más de 2 horas.`;
  console.log("Ejercicio 2: filter →", largas);
}

function ordenarPorAnio() {
  const ordenadas = [...peliculas].sort((a,b) => a.anio - b.anio);
  pintarLista("#salida2", ordenadas.map(comoTexto));
  document.querySelector("#mensaje2").textContent = "De la más antigua a la más reciente.";
  console.log("Ejercicio 2: sort →", ordenadas);
}

function verDuracionTotal() {
  const minutos = peliculas.reduce((total, pelicula) => total + pelicula.duracion, 0);
  pintarLista("#salida2", [`${minutos} minutos de películas`]);
  document.querySelector("#mensaje2").textContent = "La suma de las seis duraciones.";
  console.log("Ejercicio 2: reduce →", minutos);
}

function buscarAntigua() {
  // TODO: el callback nuevo, ya con flecha: con find(), la primera película anterior a 1990.
  // TODO: find devuelve undefined si no hay ninguna: dilo en #mensaje2 y vacía la lista.
  //       Si la encuentra, píntala con pintarLista("#salida2", [comoTexto(antigua)]).
  const antigua = peliculas.find((pelicula) => pelicula.anio < 1990);
  const mensaje = document.querySelector("#mensaje2");

  // find devuelve undefined si no encuentra ninguna
  if (antigua === undefined) {
    mensaje.textContent = "No hay ninguna película anterior a 1990.";
    pintarLista("#salida2", []);
    console.log("Ejercicio 2: find no ha encontrado nada");
  } else {
    mensaje.textContent = "La primera película anterior a 1990:";
    pintarLista("#salida2", [comoTexto(antigua)]);
    console.log("Ejercicio 2: find →", antigua);
  }
}


// ============================================================
// Ejercicio 3 · Tu propio callback
// ============================================================

const numeros = [3, -1, 4, -1, 5, 9];
document.querySelector("#numeros3").textContent = `const numeros = [${numeros.join(", ")}];`;

// TODO: transformar(lista, operacion) hace a mano lo que hace map, sin usar map:
//       recorre lista con for…of, llama a operacion con cada elemento, guarda lo que devuelve
//       en un array nuevo y, al final, devuelve ese array.
function transformar(lista, operacion) {
  const resultado = [];
  for (const elemento of lista) {
    resultado.push(operacion(elemento));
  }
  return resultado;
}

// Ya está hecha: escribe en #salida3 tu resultado, el de map y numeros
function mostrar3(nombre, resultado, conMap) {
  const salida = document.querySelector("#salida3");
  salida.textContent = "";
  const lineas = [
    `${nombre} → [${resultado.join(", ")}]`,
    `con map → [${conMap.join(", ")}]`,
    `numeros → [${numeros.join(", ")}] (no cambia)`
  ];
  lineas.forEach((linea) => {
    const p = document.createElement("p");
    p.classList.add("mb-1");
    p.textContent = linea;
    salida.append(p);
  });
}

// El modelo: funcionará cuando hayas escrito transformar()
function verDobles() {
  const resultado = transformar(numeros, (n) => n * 2);
  mostrar3("dobles", resultado, numeros.map((n) => n * 2));
  console.log("Ejercicio 3: dobles →", resultado);
}

function verCuadrados() {
  // TODO: como verDobles(), con el cuadrado de cada número (n ** 2).
    const resultado = transformar(numeros, (n) => n ** 2);
  mostrar3("cuadrados", resultado, numeros.map((n) => n ** 2));
  console.log("Ejercicio 3: cuadrados →", resultado);
}

function verAbsolutos() {
  // TODO: como verDobles(), con el valor absoluto (Math.abs). Pista: Math.abs ya es una función,
  //       así que se puede pasar tal cual, sin paréntesis.
    const resultado = transformar(numeros, Math.abs);
  mostrar3("absolutos", resultado, numeros.map(Math.abs));
  console.log("Ejercicio 3: absolutos →", resultado);
}


// ============================================================
// Ejercicio 4 · Dos contadores con closure
// ============================================================

// TODO: crearContador(paso) guarda una variable cuenta que empieza en 0 y DEVUELVE una función.
//       Cada vez que se llama a esa función, suma paso a cuenta y devuelve el valor nuevo.
//       paso vale 1 por defecto.
function crearContador(paso) {
  let cuenta = 0;
  return () => {
    cuenta += paso;
    return cuenta;
  };
}

const contarDeUno = crearContador();
const contarDeCinco = crearContador(5);

// El modelo
function sumarUno() {
  const valor = contarDeUno();
  document.querySelector("#cuenta1").textContent = valor;
  console.log("Ejercicio 4: de 1 en 1 →", valor);
}

function sumarCinco() {
  // TODO: lo mismo con contarDeCinco y #cuenta5.
    const valor = contarDeCinco();
  document.querySelector("#cuenta5").textContent = valor;
  console.log("Ejercicio 4: de 5 en 5 →", valor);
}


// ============================================================
// Ejercicio 5 · Clases
// ============================================================

class Alumno {
  constructor(nombre, curso) {
    this.nombre = nombre;
    this.curso = curso;
    this.notas = [];
  }
 anadirNota(nota) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    }
    this.notas.push(nota);
    return true;
  }

  // Media de las notas con reduce; 0 si no hay ninguna
  media() {
    if (this.notas.length === 0) {
      return 0;
    }
    const suma = this.notas.reduce((total, nota) => total + nota, 0);
    return suma / this.notas.length;
  }


  presentarse() {
    return `${this.nombre()}, de ${this.curso}`;
  }
  // TODO: anadirNota(nota): si la nota no es un número (Number.isNaN) o no está entre 0 y 10, devuelve false;
  //       si es válida, la añade a this.notas y devuelve true.
  // TODO: media(): 0 si no hay notas; si hay, la suma con reduce (con flecha) entre el número de notas.
  // TODO: presentarse(): devuelve «Lucía Martín, de 2.º DAW».
  //       Recuerda: en una clase, los métodos van sin function y sin comas entre ellos.
}

class AlumnoFCT extends Alumno {
  constructor(nombre, curso, empresa) {
    super(nombre, curso);
    this.empresa = empresa;
  }

  presentarse() {
    return `${super.presentarse()}, en prácticas en ${this.empresa}`;
  }
  // TODO: constructor(nombre, curso, empresa): primero super(nombre, curso) y después guarda la empresa.
  // TODO: presentarse(): la frase de Alumno (super.presentarse()) más «, en prácticas en TecnoSur».
}

const alumnos = [];
// Dos alumnos de partida, uno de cada clase, con dos notas cada uno
const alumnoUno = new Alumno("Héctor García", "2.º DAW");
alumnoUno.anadirNota(9);
alumnoUno.anadirNota(7);

const alumnoDos = new AlumnoFCT("Adrián Barbos", "2.º DAW", "Medac");
alumnoDos.anadirNota(8);
alumnoDos.anadirNota(6.5);

alumnos.push(alumnoUno, alumnoDos)

// TODO: cuando tengas las clases, crea aquí dos alumnos de partida y añádelos a alumnos con push:
//       un Alumno con dos notas y un AlumnoFCT con otras dos.

// Ya está hecha: pinta una tarjeta por alumno en #listaAlumnos y actualiza #totalAlumnos
function pintarAlumnos() {
  const contenedor = document.querySelector("#listaAlumnos");
  contenedor.textContent = "";

  alumnos.forEach((alumno) => {
    const columna = document.createElement("div");
    columna.classList.add("col-12", "col-md-6", "col-xl-4");

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("border", "rounded", "p-2", "h-100");

    const frase = document.createElement("p");
    frase.classList.add("mb-1");
    frase.textContent = alumno.presentarse();

    const media = document.createElement("span");
    media.classList.add("badge", "me-1");
    if (alumno.notas.length === 0) {
      media.classList.add("text-bg-secondary");
      media.textContent = "Sin notas";
    } else {
      media.classList.add(alumno.media() >= 5 ? "text-bg-success" : "text-bg-danger");
      media.textContent = `Media ${alumno.media().toFixed(2)}`;
    }

    tarjeta.append(frase, media);

    if (alumno instanceof AlumnoFCT) {
      const fct = document.createElement("span");
      fct.classList.add("badge", "text-bg-info");
      fct.textContent = "FCT";
      tarjeta.append(fct);
    }

    columna.append(tarjeta);
    contenedor.append(columna);
  });

  document.querySelector("#totalAlumnos").textContent = alumnos.length;
}

function crearAlumno() {
  // TODO: lee #nombre5, #curso5, #empresa5 y #notas5 (value y trim). Si el nombre está vacío, error en #error5.
  // TODO: si la empresa está vacía, crea un Alumno con new; si no, un AlumnoFCT.
  // TODO: si hay notas, sepáralas con split(",") y conviértelas con map((texto) => Number(texto.trim())).
  //       Si alguna no es válida (some), error en #error5 y no sigas. Si todas lo son, añádelas con anadirNota().
  // TODO: añade el alumno a alumnos, oculta el error, vacía las casillas y llama a pintarAlumnos().
  const nombre = document.querySelector("#nombre5").value.trim();
  const curso = document.querySelector("#curso5").value;
  const empresa = document.querySelector("#empresa5").value.trim();
  const textoNotas = document.querySelector("#notas5").value.trim();
  const error = document.querySelector("#error5");

  if (nombre === "") {
    error.textContent = "Escribe el nombre del alumno.";
    error.classList.remove("d-none");
    console.warn("Ejercicio 5: falta el nombre");
    return;
  }

  // Con empresa es un alumno en prácticas; sin ella, un alumno normal
  const alumno = empresa === "" ? new Alumno(nombre, curso) : new AlumnoFCT(nombre, curso, empresa);

  if (textoNotas !== "") {
    // «7, 8.5, 6» → [7, 8.5, 6]; un trozo vacío se convierte en NaN para que cuente como no válido
    const notas = textoNotas
      .split(",")
      .map((texto) => (texto.trim() === "" ? NaN : Number(texto.trim())));

    if (notas.some((nota) => Number.isNaN(nota) || nota < 0 || nota > 10)) {
      error.textContent = "Las notas tienen que ser números entre 0 y 10, separados por comas.";
      error.classList.remove("d-none");
      console.warn("Ejercicio 5: alguna nota no es válida", notas);
      return;
    }
    notas.forEach((nota) => alumno.anadirNota(nota));
  }

  alumnos.push(alumno);
  error.classList.add("d-none");
  document.querySelector("#nombre5").value = "";
  document.querySelector("#empresa5").value = "";
  document.querySelector("#notas5").value = "";
  pintarAlumnos();
  console.log("Ejercicio 5: alumno creado →", alumno.presentarse());
}

pintarAlumnos();


// ============================================================
// Ejercicio 6 · Fechas y textos
// ============================================================

// TODO: diasHasta(fecha) devuelve cuántos días faltan desde hoy hasta fecha (negativo si ya pasó).
//       Pon hoy a medianoche (hoy.setHours(0, 0, 0, 0)), resta las fechas, divide entre los milisegundos
//       de un día y redondea con Math.round: con el cambio de hora, la resta no siempre da un número entero.
function diasHasta(fecha) {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const milisegundosPorDia = 1000 * 60 * 60 * 24;
  // Math.round: con el cambio de hora la resta no siempre da un entero
  return Math.round((fecha - hoy) / milisegundosPorDia);
}

function mostrarDias() {
  const valor = document.querySelector("#fecha6").value;        // "2026-12-25", o "" si está vacía
  const salida = document.querySelector("#salida6a");

  if (valor === "") {
    salida.textContent = "Elige una fecha.";
    console.warn("Ejercicio 6: no hay fecha");
    return;
  }

  // Ya está hecho: de "2026-12-25" a un Date. Fíjate en el mes - 1: el mes va de 0 a 11
  const [anio, mes, dia] = valor.split("-").map(Number);
  const fecha = new Date(anio, mes - 1, dia);
   const dias = diasHasta(fecha);
  const nombreFecha = fecha.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  if (dias > 0) {
    salida.textContent = dias === 1
      ? `Falta 1 día: será ${nombreFecha}.`
      : `Faltan ${dias} días: será ${nombreFecha}.`;
  } else if (dias === 0) {
    salida.textContent = `Es hoy: ${nombreFecha}.`;
  } else {
    const pasados = Math.abs(dias);
    salida.textContent = pasados === 1
      ? `Fue hace 1 día: ${nombreFecha}.`
      : `Fue hace ${pasados} días: ${nombreFecha}.`;
  }
  console.log("Ejercicio 6: días hasta", valor, "→", dias);

  // TODO: con diasHasta(fecha), escribe en #salida6a «Faltan N días: será viernes, 25 de diciembre de 2026.»,
  //       «Es hoy…» o «Fue hace N días…». El nombre de la fecha, con toLocaleDateString("es-ES", {…}).
}

// TODO: iniciales(nombreCompleto) devuelve las iniciales en mayúsculas: «lucía martín ortega» → «LMO».
//       Encadena trim, split(" "), filter (para quitar las palabras vacías si hay espacios dobles),
//       map (la primera letra de cada palabra, en mayúscula) y join("").
function iniciales(nombreCompleto) {
  return nombreCompleto
    .trim()
    .split(" ")
    .filter((palabra) => palabra !== "")
    .map((palabra) => palabra[0].toUpperCase())
    .join("");
}

// TODO: crearUsuario(nombreCompleto) devuelve las iniciales en minúsculas y tres cifras al azar, de 000 a 999:
//       «lmo042». Pista: Math.random, Math.floor y padStart(3, "0").
function crearUsuario(nombreCompleto) {
  const azar = Math.floor(Math.random() * 1000);
  return iniciales(nombreCompleto).toLowerCase() + String(azar).padStart(3, "0");
}

function mostrarIniciales() {
  // TODO: lee #nombre6. Si está vacío, avisa en #salida6b.
  // TODO: si no, escribe en #salida6b «Iniciales: LMO · usuario: lmo042».
}
