# Niebla & Cifra

Aventura gráfica educativa original en HTML, CSS y JavaScript, ambientada en una versión ilustrada de Vigo, Galicia, en 1893. Caso completo para aproximadamente 10 años en adelante: 15–25 minutos de juego.

## Jugar localmente

Abre `dist/index.html` directamente o ejecuta desde esta carpeta:

```sh
python3 -m http.server 4173 --directory dist
```

Visita http://localhost:4173. No requiere instalación ni compilación. Google Fonts es opcional: si no hay conexión, se usan las fuentes de sistema. Los recursos visuales y la lógica son locales.

## Incluye

- Cinco enigmas encadenados: desplazamiento de letras, phishing, binario, mínimo privilegio y deducción basada en registros.
- Escenario con puntos de exploración, diálogos, inventario, mapa, cuaderno, dos pistas por enigma y desenlace.
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

Las ilustraciones son assets estáticos generados para este proyecto. La versión actual usa tres PNG transparentes independientes con estética de animación 2D. Son sprites estáticos, no animaciones. Las ilustraciones iniciales se conservan como assets alternativos. La ambientación mezcla época victoriana y conceptos informáticos de forma deliberadamente ficticia. Los dominios .test son ejemplos reservados, no servicios reales. La pieza de dos discos se presenta sin nombrarla; su funcionamiento se aprende al manipularla. César es el remitente de la carta y un personaje de la historia.

## Soluciones para docentes

1. WDOOHU → TALLER, desplazamiento inverso de tres letras.
2. Telegrama B: dominio alterado, urgencia y solicitud de contraseña.
3. 1101 → 13.
4. Solo permiso de lectura.
5. La cuenta Tornillín 07 registra un traslado al almacén de O Berbés a las 21:14. No se debe inferir la persona responsable de una cuenta sin más pruebas.

## Rediseño de pantalla completa

La interfaz ocupa el viewport completo, sin scroll de página. La escena tiene personajes grandes superpuestos y un cuadro de diálogo inferior. La flecha del diálogo pasa a la exploración al terminar la conversación, retira los personajes y activa los objetos; en pantallas estrechas se puede desplazar la escena horizontalmente. Los enigmas ocupan una pantalla independiente. El botón de las cuatro esquinas activa la API Fullscreen cuando el navegador la admite. Los menús se abren desde la maleta. El capítulo de Vigo usa la clave niebla-cifra-vigo-v1. La partida de la versión anterior se conserva intacta bajo su clave original y no se mezcla con la nueva historia.

Validado con una partida completa, respuestas incorrectas, pistas, final, persistencia, reinicio, diálogos de Clotilde, galería, fullscreen y vistas de escritorio y móvil.

Ilustraciones de la segunda versión generadas con Imagegen integrado usando las dos imágenes de Layton aportadas por el usuario como referencias de estilo. Las descripciones de generación están en `ASSET-PROMPTS.md`.

La escena principal prescinde de cabecera, título del expediente, contador de enigmas, barra de acciones del diálogo y botón de pistas del escenario. Se conservan los controles flotantes de sonido, pantalla completa y menú, además del mapa. El progreso sigue disponible en el menú.

## La carta de la ría

Criptóbal y Lola llegan a Vigo en barco después de recibir una carta escrita y firmada por César. El sobre incluye una pieza de latón con dos discos de letras. La carta puede consultarse desde el menú, el cuaderno y el primer enigma. El objeto permite girar el disco en ambos sentidos con teclado o ratón; no se le da nombre en el guion.

El escenario es una recreación ficticia del ambiente del Casco Vello, no una vista topográficamente exacta. Sus fachadas de granito, galerías y soportales se basan en referencias del Consorcio Casco Vello de Vigo:
- https://consorciocascovellovigo.org/blog/arquitectura-popular-en-el-casco-viejo-de-vigo_parte-ii-elementos-constructivos-2/
- https://consorciocascovellovigo.org/blog/a-porta-do-sol-a-praza-da-princesa-e-a-praza-da-constitucion-centros-do-casco-vello/

Validación de esta versión: recorrido completo hasta el desenlace en O Berbés, persistencia de partida, reinicio, giro del objeto y retorno circular de A a Z, carta accesible desde menú/cuaderno/enigma y vista móvil sin desbordamiento horizontal.
