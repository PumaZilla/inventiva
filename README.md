# Niebla & Cifra

Aventura gráfica educativa original en HTML, CSS y JavaScript, ambientada en un Londres victoriano ficticio. Caso completo para aproximadamente 10 años en adelante: 15–25 minutos de juego.

## Jugar localmente

Abre `dist/index.html` directamente o ejecuta desde esta carpeta:

```sh
python3 -m http.server 4173 --directory dist
```

Visita http://localhost:4173. No requiere instalación ni compilación. Google Fonts es opcional: si no hay conexión, se usan las fuentes de sistema. Los recursos visuales y la lógica son locales.

## Incluye

- Cinco enigmas encadenados: César, phishing, binario, mínimo privilegio y deducción basada en registros.
- Escenario con puntos de exploración, diálogos, inventario, mapa, cuaderno, dos pistas por enigma y desenlace.
- Guardado local, reinicio con confirmación y ambiente sonoro generado con Web Audio.
- Controles de teclado, diálogo nativo, reducción de movimiento y diseño adaptable.
- Tres personajes originales: Elías Vale, Iris Finch y Ada Wren.

## Archivos

- `dist/index.html`: interfaz y escenario.
- `dist/style.css`: diseño y vistas adaptables.
- `dist/app.js`: contenido, historia, validación de respuestas y estado.
- `dist/assets/personajes.png`: lámina original de los tres personajes, descargable desde la galería.
- `dist/assets/meridian-street.png`: escenario original.
- `dist/assets/emblem.svg`: emblema vectorial.

Las ilustraciones son assets estáticos generados para este proyecto. Los tres personajes se muestran individualmente con recortes CSS de la lámina, no son sprites animados. La ambientación mezcla época victoriana y conceptos informáticos de forma deliberadamente ficticia. Los dominios .test son ejemplos reservados, no servicios reales. El cifrado César se presenta como ejercicio histórico, no como protección moderna.

## Soluciones para docentes

1. WDOOHU → TALLER, desplazamiento inverso de tres letras.
2. Telegrama B: dominio alterado, urgencia y solicitud de contraseña.
3. 1101 → 13.
4. Solo permiso de lectura.
5. La cuenta Autómata 07 registra un traslado al invernadero a las 21:14. No se debe inferir la persona responsable de una cuenta sin más pruebas.
