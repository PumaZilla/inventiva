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
5. Reto MD5: introducir la huella de ABRIR directamente en la ranura y pulsar el timbre ilustrado. Sin calculadora integrada.
6. Regreso al diálogo cuando se libera el cerrojo. Este tramo termina ante la puerta; no hay retos posteriores ni desenlace del caso.

Los retos antiguos de phishing, binario, permisos y deducción fueron retirados. Las partidas antiguas conservan la solución de la carta y vuelven al diálogo posterior a ella.

## Interfaz

Pantalla completa, diálogo de altura fija con margen inferior y controles de anterior, volumen y pantalla completa. Sin cabecera, menú, mapa ni footer. Anterior recupera el diálogo o pantalla previa, conserva las respuestas de los retos y también funciona tras recargar. El guardado utiliza localStorage bajo la clave niebla-cifra-vigo-v1.

Criptóbal y Lola tienen dos gestos, cada uno con boca cerrada o abierta. Quien habla muestra la boca abierta en una pose fija; quien escucha aparece más oscuro. No hay animación de boca. La fachada conserva la puerta cerrada y las placas en blanco: las inscripciones aparecen en la interfaz del reto.

## Archivos

- `dist/app.js`: historia, retos y navegación.
- `dist/md5.js`: referencia educativa conservada para las pruebas; no se carga en el juego.
- `dist/style.css`: composición adaptable y estados de los personajes.
- `dist/assets/criptobal-gestos.png`, `dist/assets/lola-gestos.png`: hojas transparentes 2×2. Columnas boca cerrada/abierta; filas gesto explicativo/pensativo.
- `dist/assets/vigo-casco-vello.png`: primer escenario.
- `dist/assets/relojeria-cerrada-v2.png`: segundo escenario, ajustado al estilo del primero, timbre sin texto.
- `dist/assets/timbre-primer-plano.png`: primer plano del timbre; la ranura y el pulsador son interactivos.
- `ASSET-PROMPTS.md`: prompts y procedencia de las ilustraciones. Las versiones previas se conservan como alternativas sin usarse en el juego.

## Validación

`node tests/md5.test.cjs` comprueba vectores RFC, UTF-8, mayúsculas y límites del relleno. El recorrido de navegador verifica carta → diálogos → fachada → timbre → diálogos, respuestas conservadas al retroceder, recarga, migración de partidas antiguas, boca fija y personaje oyente oscuro. No se detectaron errores de JavaScript.

La solución del timbre es `79a81a55520ad1640f63430608c5198d`. MD5 solo se usa para explicar hashes mediante un rompecabezas; no protege contraseñas reales. Referencias técnicas: [RFC 1321](https://www.rfc-editor.org/rfc/rfc1321) y [RFC 6151](https://www.rfc-editor.org/rfc/rfc6151).
