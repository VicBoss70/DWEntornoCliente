# Tarea 3 · Variables, tipos y conversiones

**Autor:** Héctor Sascha García Rodríguez · Desarrollo Web en Entorno Cliente (DWEC) · 2.º DAW · Curso 2026-2027.

Esta carpeta contiene una página con cuatro ejercicios sobre variables, tipos, conversiones explícitas, coerción y plantillas de cadena. Para probarlos, abre `index.html` con el navegador (por ejemplo, usando Live Server en VS Code), abre las herramientas de desarrollador con **F12** y pulsa el botón de cada ejercicio. Los resultados aparecen en la consola; el ejercicio 4 también muestra la ficha con `alert()`.

## Capturas

Guarda en `capturas/` las cinco capturas reales tomadas en tu equipo, con estos nombres:

- `a-pagina.png`: página completa con el nombre visible y las cuatro tarjetas.
- `b-consola-ej1.png`: consola después de ejecutar el ejercicio 1.
- `c-consola-ej2.png`: consola con las conversiones y sus tipos.
- `d-consola-ej3.png`: consola con las expresiones y las comparaciones.
- `e-consola-ej4.png`: ficha y comparación de cadenas; incluye el error de reasignar una constante.

## Reflexión

La conversión que me parece más directa es `String(123)`, porque transforma el número en el texto `"123"`. También resulta fácil entender que `Boolean(0)` y `Boolean("")` devuelvan `false`, mientras que `Boolean("texto")` devuelve `true`. Lo que más me sorprendió fue `Number("")`: al principio esperaba `NaN`, pero JavaScript convierte la cadena vacía en `0`. En cambio, `Number("12abc")` sí devuelve `NaN`, porque el texto no representa un número válido. También comprobé que `"5" + 2` produce `"52"`, mientras que `"5" - 2` produce `3`. Por eso es importante tener en cuenta el operador y utilizar `===` cuando quiero comparar sin conversiones automáticas.

## Fuentes

- [MDN: Variables](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types#declaraciones)
- [MDN: typeof](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/typeof)
- [MDN: Number()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [MDN: Boolean()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [MDN: Comparaciones de igualdad](https://developer.mozilla.org/es/docs/Web/JavaScript/Equality_comparisons_and_sameness)

## Uso de IA

Se utilizó ChatGPT como apoyo para organizar la estructura de la práctica, preparar un borrador de código y revisar conceptos de JavaScript. Después, debo ejecutar el código en mi equipo, comprobar los resultados, revisar las predicciones y adaptar la reflexión a lo que realmente haya observado. Las capturas incluidas en la entrega son propias y se obtienen en el equipo del alumno.
