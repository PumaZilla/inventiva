# Niebla & Cifra

Aventura gráfica educativa original en HTML, CSS y JavaScript, ambientada en una versión ilustrada de Vigo, Galicia, en 1893. Caso completo para aproximadamente 10 años en adelante: 20–30 minutos de juego.

## Jugar localmente

Abre `dist/index.html` directamente o ejecuta desde esta carpeta:

```sh
python3 -m http.server 4173 --directory dist
```

Visita http://localhost:4173. No requiere instalación ni compilación. Google Fonts es opcional: si no hay conexión, se usan las fuentes de sistema. Los recursos visuales y la lógica son locales.

## Incluye

- Seis enigmas encadenados: desplazamiento de letras, huellas MD5, phishing, binario, mínimo privilegio y deducción basada en registros.
- Dos escenarios, diálogos con gestos animados, carta interactiva, reto del timbre y desenlace.
- Guardado local, reinicio con confirmación y ambiente sonoro generado con Web Audio.
- Controles de teclado, diálogo nativo, reducción de movimiento y diseño adaptable.
- Tres personajes originales: Criptóbal Despistes, Lola Bitácora y Clotilde Tic-Tac.

## Archivos

- `dist/index.html`: interfaz y escenario.
- `dist/style.css`: diseño y vistas adaptables.
- `dist/app.js`: contenido, historia, validación de respuestas y estado.
- `dist/assets/vale-v2.png`, `iris-v2.png`, `ada-v2.png`: personajes actuales con transparencia, descargables desde la galería.
- `dist/assets/vigo-casco-vello.png`: escenario actual inspirado en el Casco Vello y la ría de Vigo.
- `dist/assets/personajes.png`: lámina original alternativa.
- `dist/assets/meridian-street.png`: escenario original.
- `dist/assets/emblem.svg`: emblema vectorial.

Las ilustraciones son assets estáticos generados para este proyecto. La versión actual usa tres PNG transparentes independientes con estética de animación 2D. Criptóbal y Lola tienen hojas de cuatro fotogramas: dos gestos, cada uno con boca cerrada y abierta. Clotilde conserva su ilustración estática. Las ilustraciones iniciales se conservan como assets alternativos. La ambientación mezcla época victoriana y conceptos informáticos de forma deliberadamente ficticia. Los dominios .test son ejemplos reservados, no servicios reales. La pieza de dos discos se presenta sin nombrarla; su funcionamiento se aprende al manipularla. César es el remitente de la carta y un personaje de la historia.

## Soluciones para docentes

1. WDOOHU → TALLER, desplazamiento inverso de tres letras.
2. Calcular MD5 de ABRIR: `79a81a55520ad1640f63430608c5198d`. Introducir la huella en la ranura del timbre.
3. Telegrama B: dominio alterado, urgencia y solicitud de contraseña.
4. 1101 → 13.
5. Solo permiso de lectura.
6. La cuenta Tornillín 07 registra un traslado al almacén de O Berbés a las 21:14. No se debe inferir la persona responsable de una cuenta sin más pruebas.

## Rediseño de pantalla completa

La interfaz ocupa el viewport completo. Los personajes se superponen al escenario y el diálogo conserva su altura y margen inferior. La flecha avanza la historia y abre el reto correspondiente. Anterior recupera la pantalla o diálogo previo, también después de recargar una partida. Los controles flotantes disponibles son anterior, sonido y pantalla completa; no hay menú, mapa, puntos de exploración ni pie de página. La partida usa la clave niebla-cifra-vigo-v1.

Validado con una partida completa, respuestas incorrectas, pistas, final, persistencia, reinicio, diálogos de Clotilde, galería, fullscreen y vistas de escritorio y móvil.

Ilustraciones de la segunda versión generadas con Imagegen integrado usando las dos imágenes de Layton aportadas por el usuario como referencias de estilo. Las descripciones de generación están en `ASSET-PROMPTS.md`.



## La carta de la ría

Criptóbal y Lola llegan a Vigo en barco después de recibir una carta escrita y firmada por César. El sobre incluye una pieza de latón con dos discos de letras. La carta puede consultarse desde el menú, el cuaderno y el primer enigma. El objeto permite girar el disco en ambos sentidos con teclado o ratón; no se le da nombre en el guion.

El escenario es una recreación ficticia del ambiente del Casco Vello, no una vista topográficamente exacta. Sus fachadas de granito, galerías y soportales se basan en referencias del Consorcio Casco Vello de Vigo:
- https://consorciocascovellovigo.org/blog/arquitectura-popular-en-el-casco-viejo-de-vigo_parte-ii-elementos-constructivos-2/
- https://consorciocascovellovigo.org/blog/a-porta-do-sol-a-praza-da-princesa-e-a-praza-da-constitucion-centros-do-casco-vello/

Validación de esta versión: recorrido completo hasta el desenlace en O Berbés, persistencia de partida, reinicio, giro del objeto y retorno circular de A a Z, carta accesible desde menú/cuaderno/enigma y vista móvil sin desbordamiento horizontal.


## La puerta de Clotilde

La fachada cambia de puerta cerrada a abierta solo al resolver el timbre HASH MD5. La placa ABRIR da la palabra para el calculador local del cuaderno. Se mantienen las partidas antiguas y el historial de anterior. Las hojas de sprites y ambas fachadas están en dist/assets; sus prompts figuran en ASSET-PROMPTS.md.

Validación: recorrido carta → diálogo de la relojería → respuesta incorrecta → cálculo y apertura → anterior → recarga → siguiente enigma, sin errores de JavaScript. Se comprueba el cálculo con `node tests/md5.test.cjs` (vectores RFC, Unicode y límites de bloques), además de las vistas móvil y escritorio.

Referencias técnicas: [RFC 1321](https://www.rfc-editor.org/rfc/rfc1321) y [RFC 6151](https://www.rfc-editor.org/rfc/rfc6151). MD5 se usa únicamente como contenido educativo del rompecabezas.
