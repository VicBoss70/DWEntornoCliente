
console.log("app.js cargado: pulsa «Ejecutar» en cada ejercicio");

// Ejercicio 1 · Variables y typeof
function ejercicio1() {
  console.log("--- Ejercicio 1 · Variables y typeof ---");

  const edad = 20;
  const nombre = "Héctor";
  const esEstudiante = true;
  const datoNulo = null;
  let ciudad;
  const identificador = 10n;

  console.log("edad =", edad, "→", typeof edad);
  console.log("nombre =", nombre, "→", typeof nombre);
  console.log("esEstudiante =", esEstudiante, "→", typeof esEstudiante);
  console.log("datoNulo =", datoNulo, "→", typeof datoNulo);
  console.log("ciudad antes de asignar =", ciudad, "→", typeof ciudad);

  ciudad = "Granada";
  console.log("ciudad después de asignar =", ciudad, "→", typeof ciudad);
  console.log("identificador =", identificador, "→", typeof identificador);
}

// Ejercicio 2 · Conversiones explícitas
function ejercicio2() {
  console.log("--- Ejercicio 2 · Conversiones explícitas ---");

  const conversion1 = String(123);       // espero "123"
  console.log('String(123) →', conversion1, "| typeof:", typeof conversion1);

  const conversion2 = Number("123");     // espero 123
  console.log('Number("123") →', conversion2, "| typeof:", typeof conversion2);

  const conversion3 = Number("12abc");   // espero NaN
  console.log('Number("12abc") →', conversion3, "| typeof:", typeof conversion3);
  const conversion4 = Number("");        // predicción inicial propuesta: NaN; sale 0
  console.log('Number("") →', conversion4, "| typeof:", typeof conversion4);

  const conversion5 = Number(true);      // espero 1
  console.log("Number(true) →", conversion5, "| typeof:", typeof conversion5);

  const conversion6 = Boolean(0);        // espero false
  console.log("Boolean(0) →", conversion6, "| typeof:", typeof conversion6);

  const conversion7 = Boolean("texto");  // espero true
  console.log('Boolean("texto") →', conversion7, "| typeof:", typeof conversion7);

  const conversion8 = Boolean("");       // espero false
  console.log('Boolean("") →', conversion8, "| typeof:", typeof conversion8);

  const conversion9 = String(false);     // espero "false"
  console.log("String(false) →", conversion9, "| typeof:", typeof conversion9);

  const conversion10 = Number("  7  ");  // espero 7
  console.log('Number("  7  ") →', conversion10, "| typeof:", typeof conversion10);
}

// Ejercicio 3 · Coerción y comparaciones


function ejercicio3() {
  console.log("--- Ejercicio 3 · Coerción y comparaciones ---");

  console.log('"5" - 2 →', "5" - 2);       // espero 3
  console.log('"5" + 2 →', "5" + 2);       // espero "52"
  console.log("10 + false →", 10 + false); // espero 10
  console.log('"10" - true →', "10" - true); // espero 9
  console.log('"hola" + 3 →', "hola" + 3); // espero "hola3" (ejemplo propio)
  console.log('"6" / "2" →', "6" / "2");   // espero 3 (ejemplo propio)

  console.log('5 == "5" →', 5 == "5");     // espero true
  console.log('5 === "5" →', 5 === "5");   // espero false
  console.log("0 == false →", 0 == false); // espero true
  console.log("0 === false →", 0 === false); // espero false
  console.log("null == undefined →", null == undefined); // espero true
  console.log("null === undefined →", null === undefined); // espero false
}

// Ejercicio 4 · Ficha con plantillas de cadena
function ejercicio4() {
  console.log("--- Ejercicio 4 · Mi ficha con plantillas de cadena ---");

  const nombre = "Héctor Sascha García Rodríguez";
  const ciclo = "Desarrollo de Aplicaciones Web";
  const curso = "2.º año";
  const aficion = "ajedrez";

  let horasEstudio = 15;
  console.log("Horas iniciales de estudio =", horasEstudio);
  horasEstudio += 2;
  console.log("Horas después de += 2 =", horasEstudio);

  const ficha = `Soy ${nombre}, estudio ${ciclo}, estoy en ${curso}, mi afición es ${aficion} y he estudiado ${horasEstudio} horas esta semana.`;
  console.log("Ficha con plantilla:", ficha);
  alert(ficha);

  const fichaConMas = "Soy " + nombre + ", estudio " + ciclo + ", estoy en " + curso +
    ", mi afición es " + aficion + " y he estudiado " + horasEstudio + " horas esta semana.";
  console.log("Ficha concatenada:", fichaConMas);
  console.log("¿Los dos mensajes son iguales?", ficha === fichaConMas);
}
