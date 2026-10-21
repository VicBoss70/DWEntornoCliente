
console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;   // para que un bucle no llene la página


// ============================================================
// Ejercicio 1 · Calculadora
// ============================================================


function sumar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: falta algún número");
  } else {
    const resultado = n1 + n2;
    mostrar(`${n1} + ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} + ${n2} = ${resultado}`);
  }
}

function restar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Restar: falta algún número");
  } else {
    const resultado = n1 - n2;
    mostrar(`${n1} - ${n2} = ${resultado}`);
    console.log(`Restar: ${n1} - ${n2} = ${resultado}`);
  }
}

function multiplicar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Multiplicar: falta algún número");
  } else {
    const resultado = n1 - n2;
    mostrar(`${n1} - ${n2} = ${resultado}`);
    console.log(`Multiplicar: ${n1} - ${n2} = ${resultado}`);
  }
  

}

function dividir() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Dividir: falta algún número");
  } else {
    const resultado = n1 - n2;
    mostrar(`${n1} % ${n2} = ${resultado}`);
    console.log(`Dividir: ${n1} % ${n2} = ${resultado}`);
  }

}
function potencia() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Potencia: falta algún número");
  } else {
    const resultado = n1 ** n2;
    mostrar(`${n1} ** ${n2} = ${resultado}`);
    console.log(`Potencia: ${n1} ** ${n2} = ${resultado}`);
  }
}

function modulo() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Módulo: falta algún número");
  } else {
    const resultado = n1 % n2;
    mostrar(`${n1} % ${n2} = ${resultado}`);
    console.log(`Módulo: ${n1} % ${n2} = ${resultado}`);
  }
}

function dividir() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Dividir: falta algún número");
  } else if (n2 === 0) {
    mostrar("No se puede dividir entre 0.", "danger");
    console.warn("Dividir: el número 2 es 0");
  } else {
    const resultado = n1 / n2;
    mostrar(`${n1} / ${n2} = ${resultado}`);
    console.log(`Dividir: ${n1} / ${n2} = ${resultado}`);
  }
}

function modulo() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Módulo: falta algún número");
  } else if (n2 === 0) {
    mostrar("No se puede calcular el resto de una división entre 0.", "danger");
    console.warn("Módulo: el número 2 es 0");
  } else {
    const resultado = n1 % n2;
    mostrar(`${n1} % ${n2} = ${resultado}`);
    console.log(`Módulo: ${n1} % ${n2} = ${resultado}`);
  }
}



// ============================================================
// Ejercicio 2 · Comparaciones
// ============================================================

function cualEsMayor() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de comparar.", "danger");
    console.warn("Cuál es mayor: falta algún número");
  } else if (n1 > n2) {
    mostrar(`${n1} es mayor que ${n2}.`);
    console.log(`Cuál es mayor: ${n1} > ${n2}`);
  } else if (n1 < n2) {
    mostrar(`${n2} es mayor que ${n1}.`);
    console.log(`Cuál es mayor: ${n1} < ${n2}`);
  } else {
    mostrar(`${n1} y ${n2} son iguales.`, "info");
    console.log(`Cuál es mayor: ${n1} === ${n2}`);
  }
}


function parOImpar() {
  const n1 = leerNumero("numero1");

  if (Number.isNaN(n1)) {
    mostrar("Escribe el número 1 antes de comprobarlo.", "danger");
    console.warn("Par o impar: falta el número 1");
  } else if (n1 % 1 !== 0) {
    mostrar(`${n1} tiene decimales: no es ni par ni impar.`, "warning");
    console.warn(`Par o impar: ${n1} tiene decimales`);
  } else {
    const tipo = n1 % 2 === 0 ? "par" : "impar";
    mostrar(`${n1} es ${tipo}.`);
    console.log(`Par o impar: ${n1} es ${tipo}`);
  }
}



// ============================================================
// Ejercicio 3 · Bucles con texto
// El número 1 dice cuántas veces se repite cada bucle
// ============================================================
function textoTotal(contador) {
  return `Total: ${contador} ${contador === 1 ? "repetición" : "repeticiones"}`;
}
function bucleFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  let contador = 0;
  for (let i = 1; i <= veces; i++) {
    anadirLinea(`for · repetición ${i} de ${veces}`);
    console.log(`bucleFor: ${contador} vueltas con veces = ${veces}`);
    contador++;
  }
  anadirLinea(textoTotal(contador));
}

function bucleWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  let contador = 0;
  let i = 1;
  while (i <= veces) {
    anadirLinea(`while · repetición ${i} de ${veces}`);
    console.log(`bucleWhile: ${contador} vueltas con veces = ${veces}`);
    contador++;
    i++;
  }
  anadirLinea(textoTotal(contador));
}

function bucleDoWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  let contador = 0;
  let i = 1;
  do {
    anadirLinea(`do…while · repetición ${i} de ${veces}`);
    console.log(`bucleDoWhile: ${contador} vueltas con veces = ${veces}`);
    contador++;
    i++;
  } while (i <= veces);
  anadirLinea(textoTotal(contador));
}

// ============================================================
// Ejercicio 4 · Bucles con badges
// ============================================================

function badgesFor() {
    const veces = leerNumero("numero1");
  limpiarSalida();

  if (repeticionesNoValidas(veces)) {
    mostrar(`Escribe en el número 1 un entero de ${MAXIMO_REPETICIONES} como máximo.`, "danger");
    console.warn("badgesFor: número no válido");
  } else {
    for (let i = 1; i <= veces; i++) {
      const color = i % 2 === 0 ? "primary" : "secondary";
      anadirBadge(i, color);
    }
        anadirLinea(textoTotal(contador));
        console.log(`badgesFor: ${contador} vueltas con veces = ${veces}`);
  }
}



function badgesWhile() {
  // TODO: lo mismo que badgesFor(), con un while.
    const veces = leerNumero("numero1");
  limpiarSalida();

  if (repeticionesNoValidas(veces)) {
    mostrar(`Escribe en el número 1 un entero de ${MAXIMO_REPETICIONES} como máximo.`, "danger");
    console.warn("badgesWhile: número no válido");
  } else {
    let i = 1;
    while (i <= veces) {
  const color = i % 2 === 0 ? "primary" : "secondary";
  anadirBadge(i, color);
      i++;
    }
     anadirLinea(textoTotal(contador));
    console.log(`badgesWhile: ${contador} vueltas con veces = ${veces}`);
  }
}

function badgesDoWhile() {
  // TODO: lo mismo que badgesFor(), con un do…while.
    const veces = leerNumero("numero1");
  limpiarSalida();

  if (repeticionesNoValidas(veces)) {
    mostrar(`Escribe en el número 1 un entero de ${MAXIMO_REPETICIONES} como máximo.`, "danger");
    console.warn("badgesDoWhile: número no válido");
  } else {
    let i = 1;
    do {
      const color = i % 2 === 0 ? "primary" : "secondary";
      anadirBadge(i, color);
      i++;
    } while (i <= veces);
    anadirLinea(textoTotal(contador));
    console.log(`badgesDoWhile: ${contador} vueltas con veces = ${veces}`);
  }
}
