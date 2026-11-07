# Niebla & Cifra · La carta de la ría

Aventura gráfica educativa en HTML, CSS y JavaScript, ambientada en un Vigo ilustrado de 1893. Criptóbal y Lola llegan por una carta misteriosa, firmada por César, que contiene una pieza de latón con dos alfabetos.

## Jugar

```sh
python3 -m http.server 4173 --directory dist
```

Abrir http://localhost:4173. No requiere instalación ni compilación.

## Recorrido actual

1. Conversación de llegada al Casco Vello.
2. Carta y dispositivo: WDOOHU conduce a TALLER.
3. Regreso directo a los diálogos de Criptóbal y Lola.
4. Llegada a la relojería cerrada y conversación sobre el timbre.
5. Reto MD5: introducir la huella de RELOJ directamente en la ranura y pulsar el timbre ilustrado. Sin calculadora integrada.
6. Regreso al diálogo cuando se libera el cerrojo y entrada al interior de la relojería.
7. La señora Tic-Tac exige que demuestren su inteligencia reparando un reloj antes de ayudarles.
8. Tres pantallas: palabra en binario, octal y hexadecimal. Cada acierto instala un engranaje; la tercera pieza pone el mecanismo en marcha.
9. Tic-Tac acepta ayudarles y comienza a hablar de César.

Los retos antiguos de phishing, cerrojo numérico binario, permisos y deducción fueron retirados. El nuevo reto del reloj usa palabras ASCII en tres bases. Las partidas previas conservan su progreso. La reparación guarda los engranajes y la pantalla pendiente; volver a una prueba resuelta no duplica piezas.

## Interfaz

Pantalla completa, diálogo de altura fija con margen inferior y controles de anterior y pantalla completa. El juego no reproduce sonido. Sin cabecera, menú, mapa ni footer. Anterior recupera el diálogo o pantalla previa, conserva las respuestas de los retos y también funciona tras recargar. El guardado utiliza localStorage bajo la clave niebla-cifra-vigo-v1.

Criptóbal y Lola tienen dos gestos, cada uno con boca cerrada o abierta. Quien habla muestra la boca abierta en una pose fija; quien escucha aparece más oscuro. No hay animación de boca. La fachada conserva la puerta cerrada y las placas en blanco: las inscripciones aparecen en la interfaz del reto.

## Archivos

- `dist/app.js`: historia, retos y navegación.
- `dist/md5.js`: referencia educativa conservada para las pruebas; no se carga en el juego.
- `dist/style.css`: composición adaptable y estados de los personajes.
- `dist/assets/criptobal-gestos.png`, `dist/assets/lola-gestos.png`: hojas transparentes 2×2. Columnas boca cerrada/abierta; filas gesto explicativo/pensativo.
- `dist/assets/vigo-casco-vello.png`: primer escenario.
- `dist/assets/relojeria-cerrada-v2.png`: segundo escenario, ajustado al estilo del primero, timbre sin texto.
- `dist/assets/relojeria-interior.png`: interior sin personajes.
- `dist/assets/clotilde-gestos-v3.png`: hoja transparente de dos poses, boca cerrada/abierta, sin animación; gafas corregidas con un ojo por lente.
- `dist/assets/reloj-bolsillo.png`: reloj de bolsillo con tres huecos.
- `dist/assets/nota-codificada.png`: papel ilustrado para los códigos.
- `dist/assets/engranaje-reloj.png`: pieza transparente que se instala con cada acierto.
- `dist/assets/timbre-reloj.png`: primer plano del timbre; la ranura y el pulsador son interactivos.
- `ASSET-PROMPTS.md`: prompts y procedencia de las ilustraciones. Las versiones previas se conservan como alternativas sin usarse en el juego.

## Validación

`node tests/md5.test.cjs` comprueba vectores RFC, UTF-8, mayúsculas y límites del relleno. El recorrido de navegador verifica carta → diálogos → fachada → timbre → diálogos, respuestas conservadas al retroceder, recarga, migración de partidas antiguas, boca fija y personaje oyente oscuro. No se detectaron errores de JavaScript.

La solución del timbre es `ce13c02063cd17f3a7346cda69a74ce8`. MD5 solo se usa para explicar hashes mediante un rompecabezas; no protege contraseñas reales. Referencias técnicas: [RFC 1321](https://www.rfc-editor.org/rfc/rfc1321) y [RFC 6151](https://www.rfc-editor.org/rfc/rfc6151).


## Reparación del reloj

Los prefijos fijos del campo de respuesta indican la base: 2, 8 y 16. Cada grupo de dígitos representa un código ASCII. La interfaz muestra únicamente el reloj de bolsillo, la nota codificada y el input numerado con controles de icono. No hay títulos, explicaciones, contador ni tabla de letras. Las bases se presentan en el diálogo.

- Binario: `01001100 01010101 01011010` → LUZ.
- Octal: `110 117 122 101` → HORA.
- Hexadecimal: `54 49 45 4D 50 4F` → TIEMPO.

Se comprobó el recorrido completo, error sin recompensa, un engranaje por acierto, guardado entre pantallas, regreso tras recargar y vistas móvil/escritorio. Los personajes mantienen la boca fija y el oyente oscurecido; el mecanismo del reloj gira al completarlo y respeta reducción de movimiento.

Lola se refleja horizontalmente cuando ocupa la izquierda para mirar a Tic-Tac. El profesor mira a la derecha y Tic-Tac a la izquierda. Se mantienen el oscurecimiento del oyente y las bocas estáticas.


## Validación de respuestas y avance

Todos los retos eliminan espacios en blanco, incluidos los interiores, y comparan sin distinguir mayúsculas/minúsculas. La carta y las palabras mantienen también la normalización de tildes. El timbre usa ahora RELOJ como pista.

Los aciertos de binario y octal avanzan automáticamente a la siguiente pantalla. Al completar hexadecimal se ocultan la nota y el input, conservando su espacio de composición, y aparece Continuar en el centro vertical y horizontal de esa zona. Los tres engranajes permanecen instalados.

Verificado en navegador con respuestas mezcladas y espaciadas en los cinco retos, avance 1→2→3, reanudación tras recargar, Anterior y Continuar.
# La caja de César

Después de reparar el reloj, Tic-Tac cuenta que César dejó una caja para la pareja de detectives que iba a llegar a Vigo. Los diálogos llevan al primer plano de la caja antigua y su nota plegada.

La cerradura tiene cinco cifras: se pueden cambiar pulsándolas, con las flechas del teclado o escribiendo un dígito. Se guardan en la partida. La combinación correcta es `98765`. La cerradura solo se abre al pulsar Desbloquear con esa combinación; cambiar las cifras no la abre. Lola y el profesor descubren una nota en el interior, que se muestra tras sus diálogos. El progreso y la navegación hacia atrás se conservan tras recargar.

Desdoblar revela exactamente: «Levántate y dibuja en la pizarra un animal cuya primera letra coincida con la primera letra de tu nombre». Un temporizador de 5000 ms vuelve a doblar la nota y permite abrirla de nuevo. Salir de la pantalla cancela el temporizador; volver o recargar presenta la nota plegada. Anterior regresa al diálogo inmediatamente anterior.

Validado en escritorio, móvil vertical y horizontal; sin desbordamiento. Comprobados el mensaje, plegado automático, cifras persistentes, recarga y navegación.

La nota interior conserva el texto indicado, las coordenadas `42.237819, -8.724906` y la palabra `PESCADO`. Esta palabra es texto seleccionable negro sobre fondo negro; `::selection` le da contraste al seleccionarla. La nota interior permanece abierta, se guarda entre recargas y Anterior regresa al último diálogo. La nota plegada exterior mantiene su temporizador de cinco segundos.

Al retroceder a una base del reloj, esa palabra queda pendiente de nuevo y se retiran sus engranajes posteriores. Volver a los diálogos anteriores al reloj reinicia sus tres etapas. La nota dirige ahora a «profe Kike». Los botones Desbloquear y Desdoblar comparten una fila, también en móvil.

## Portada y apertura del capítulo

Al cargar el juego se muestra el libro cerrado Investigadores Inventiva, acompañado de la lupa y la gorra de Lola. Empezar a leer lleva al libro abierto: mapa ilustrado de Vigo a pluma a la izquierda, Capítulo 1: Llegada a la ciudad a la derecha. En esta segunda imagen no hay lupa ni gorra. Pasar de página entra en la partida guardada, o en el primer diálogo de llegada a Vigo si es una partida nueva. Anterior en el primer diálogo vuelve al libro; la apertura no borra el progreso.

Las ilustraciones finales usan como referencias directas el interior de la relojería y los sprites, con contornos marrones y sombreado plano. Assets: dist/assets/libro-portada.png y dist/assets/libro-capitulo.png.

Texto final: «Dirígete al profe Kike de nuevo y dile el nombre de esta estatua seguido de la palabra secreta». Coordenadas y palabra oculta se mantienen.

Las imágenes de inicio llenan la ventana con object-fit: cover y variantes verticales. Las versiones v2 corrigen las proporciones de gorra y lupa y la tilde de Capítulo. Anterior desde el primer diálogo abre el capítulo; Anterior en el capítulo vuelve a la portada. Revisión ortográfica de diálogos, notas, controles y rótulos de las imágenes.
