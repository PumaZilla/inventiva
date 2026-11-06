# Assets de la versión 2

Método: herramienta Imagegen integrada, no CLI. Las dos capturas de Professor Layton proporcionadas por el usuario se utilizaron como referencias de estilo. Se solicitó transparencia real para los personajes y se verificó el canal alfa. No se incluyeron las capturas del usuario en los archivos publicados.

## Dirección compartida

Ilustración narrativa de videojuego. Estilo de animación 2D de las referencias de Professor Layton: contornos limpios marrones, rostros simples, ojos pequeños ovalados, formas amplias, colores planos, sombras suaves, paleta cálida de ocres y verdes. Personajes originales de Niebla & Cifra. Evitar render 3D, fotorealismo, acuarela detallada, ropa con texturas complejas y ojos anime grandes. Sin texto ni interfaces en las imágenes.

## meridian-v2.png

Escenario panorámico 16:9. Meridian Street, barrio europeo victoriano ficticio al final de la tarde. Librería verde con hiedra a la izquierda; arco de piedra y torre del reloj en el centro; buzón rojo cerca del centro a la derecha; taller de relojera con fachada ocre y puerta de madera rojiza a la derecha. Farola de gas, tejados inclinados, adoquines. Composición legible para aventura gráfica con espacio para personajes superpuestos. Sin personas, texto ni marco.

## vale-v2.png

Sprite transparente vertical 2:3 del profesor Elías Vale, criptógrafo victoriano de unos 50 años. Cara ovalada alargada, ojos pequeños, nariz prominente, gafas redondas, patillas grises y bigote. Bombín marrón, abrigo oliva de cuello alto, chaleco naranja, camisa crema y corbata burdeos. Vista tres cuartos mirando a la derecha, lupa en una mano, la otra abierta explicando. Mostrar sombrero completo hasta muslos, con margen transparente.

## iris-v2.png

Sprite transparente vertical 2:3 de Iris Finch, aprendiz de 15 años. Melena corta pelirroja, gorra beige con gafas de latón, chaqueta y chaleco verde azulado, blusa blanca, corbata ocre, falda marrón y bandolera de cuero. Sostiene un cuaderno cerrado, otra mano en la cadera. Tres cuartos mirando a la izquierda, expresión curiosa y confiada. Mostrar cabeza hasta muslos con margen transparente.

## ada-v2.png

Sprite transparente vertical 2:3 de Ada Wren, relojera victoriana adulta. Pelo oscuro con moño, gafas de latón, rostro sencillo, ojos pequeños, sonrisa inteligente. Capa corta burdeos sobre vestido azul marino de cuello alto y botones de latón. Sostiene mecanismo de reloj. Tres cuartos mirando a la izquierda, cabeza y manos completas hasta muslos. Sin sombras exteriores, fondo o texto.

## meridian-v3.png · Corrección de continuidad

Edición precisa del fondo meridian-v2.png con Imagegen integrado. Corregir únicamente la arquitectura de la calle detrás del puente: las fachadas que se ven a través del arco deben ser la continuación de los mismos edificios que sobresalen por encima. Alinear aristas, escala, ventanas y perspectiva. Prolongar la torre del reloj hacia abajo, a la derecha de la abertura, hasta la calle; eliminar el segundo horizonte de pequeños tejados del interior del arco. Conservar encuadre, puente, librería, buzón, farola, taller, pavimento, estilo y luz. Sin personajes ni texto.

## Nombres actuales del elenco

Las descripciones anteriores conservan los nombres usados al generar los assets. En el juego, Elías Vale pasa a llamarse Criptóbal Despistes; Iris Finch, Lola Bitácora; Ada Wren, Clotilde Tic-Tac. El librero Bell se llama don Tomás Tostón y el Autómata 07, Tornillín 07. Los nombres internos de los archivos no cambian.

## vigo-casco-vello.png

Generado con Imagegen integrado. Referencia de estilo: meridian-v3.png, conservando el dibujo 2D de contornos limpios y sombras suaves. Nuevo lugar: Vigo, Galicia, 1893. Calle del Casco Vello en pendiente hacia la ría y el puerto pesquero, fachadas de granito gris, galerías blancas de madera acristalada, balcones de hierro, tejados de teja, losas húmedas después de lluvia atlántica. Librería verde y soportales a la izquierda; relojero con puerta burdeos y reloj de latón a la derecha. Una maleta de cuero sobre banco de granito en primer plano lleva un sobre y una pequeña pieza circular. Mar azul verdoso, barcos de vela de época, montes al otro lado de la ría y gaviotas. Perspectiva coherente; no torre británica, puente sobre la calle, buzón rojo, vehículos modernos, personas, rótulos ni interfaz. Recreación ficticia inspirada en Vigo, no collage de monumentos.
# Carta y dispositivo ilustrados

Generados con la herramienta integrada `image_gen`, con transparencia real. Referencia de estilo: `dist/assets/vigo-casco-vello.png`. Las letras y el texto se dibujan en HTML/SVG para conservar legibilidad y exactitud.

- `dist/assets/carta-cesar.png`: papel y sobre con lacre roto; se usa como fondo adaptable de la carta de César.
- `dist/assets/dispositivo-laton.png`: discos de latón con rosa de los vientos; los dos alfabetos interactivos se superponen en SVG.

## Prompt del papel

Create a production-ready transparent PNG game prop asset, a single open Victorian correspondence sheet with a partly visible envelope underneath and small broken burgundy wax seal at bottom right. Professor Layton inspired hand-painted 2D adventure-game prop, crisp brown ink contours, warm cel shading and restrained watercolor paper texture, same palette and illustration quality as reference (reference is STYLE ONLY, do not reproduce scene). Front view, perfectly straight-on flat paper, portrait 3:4 canvas. Cream ivory rectangular sheet fills 94 percent width and 96 percent height, slightly irregular softly worn edges, subtle horizontal fold halfway down, small curled corner. Large completely EMPTY central writing area, no letters, no text, no writing, no symbols in the central 80 percent. Light even cream color for excellent dark text readability. Envelope and wax tucked at bottom edge outside writing space. Isolated on true transparent background. No tabletop, no hands, no perspective foreshortening. This will receive live HTML letter text on top.

## Prompt del dispositivo

Create a production-ready transparent PNG game prop: an antique brass two-ring alphabet cipher disk, but absolutely NO letters, NO numbers, NO text (these will be added as interactive game UI). Square canvas, strictly orthographic FRONT view, perfectly circular, precisely centered at 50% 50%, outer circle occupies 94% of canvas diameter. Two spacious concentric blank brass bands: outer writing band at radius 40% of canvas (between 35% and 45%), inner writing band at radius 29.4% (between 25% and 34%). Thin engraved circles separate the bands. Warm gold outer ring, slightly lighter pale golden inner ring, center medallion occupies only central radius 21%, engraved beautiful simple maritime compass rose and center slotted screw. Small burgundy triangle at very top pointing downward, tiny rivets only along outer edge. Fine restrained wear and subtle verdigris along edges, dark brown contour outlines, gorgeous warm hand-painted 2D cel shading in a Professor Layton inspired Victorian adventure-game style matching reference's craftsmanship (reference STYLE ONLY). No photorealism, no perspective, no elliptical shape, no extra surrounding items, no hands, no tabletop, true transparent background. Empty clean lettering bands are vital; do not place decorative markings or alphabet there. Rich illustrated metal with elegant engraved edge details.

