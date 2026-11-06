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

# Gestos y fachada de la relojería

## Primer plano del timbre · reto 2

Asset: `dist/assets/timbre-primer-plano.png`. Generado con Imagegen integrado; referencia visual: `relojeria-cerrada-v2.png`. La ranura recibe un input HTML transparente y el pulsador es el botón de envío. No hay calculadora ni paneles externos.

Prompt final:

Use case: stylized-concept. Asset type: close-up interactive puzzle screen for this exact hand-painted 2D Victorian detective game. Reference image shows the established clock shop facade; recreate a magnified STRAIGHT-ON close-up of its brass doorbell on the granite pier, matching the same restrained brown ink contours, warm muted cel shading, hand-painted stone, soft afternoon light. Portrait canvas 2:3, no people, no UI. One large rectangular antique BRASS doorbell panel centered, from x12% to88%, y8% to72%, gently rounded corners, four screws near corners, restrained bevel and simple rim. Upper part of panel engraved exact text 'HASH MD5', horizontally centered at y22%, clear dark serif capitals, quite large. Below text one long dark recessed HORIZONTAL rectangular slot at y35%, opening from x20% to80% and y31% to39%, large enough for later live input text. Slot is entirely empty dark brown with brass raised bevel. Below slot a large protruding ROUND brass bell button centered x50%, y55%, diameter20% of canvas width, simple concentric rims with highlight and inset shadow, NO symbol and no text on button. Below main bell panel, separate small rectangular pale brass plaque centered x50%, y82%, width55% height10%, corner screws, engraved exact word 'ABRIR' in large dark serif capitals. All brass metal drawn and shaded, never photorealistic chrome. Surrounding background is the same warm beige gray granite blocks from reference, flat wall facing camera, thin strip of closed burgundy door at far LEFT margin, never open door. This is a tactile prop that player touches, no headings, notebook, calculator, HUD, form, extra buttons, captions or watermarks. Main panel completely visible with comfortable margins. Preserve accurate requested words 'HASH MD5' and 'ABRIR'; absolutely no other lettering or numbers.

Revisión actual: las poses al hablar son fijas, con boca abierta; no se alternan los fotogramas. La fachada usada por el juego es `dist/assets/relojeria-cerrada-v2.png`, generada con Imagegen integrado tomando `vigo-casco-vello.png` como referencia principal de estilo. El timbre y su placa no contienen texto.

## Prompt de la fachada revisada

Use case: style-transfer. Create the second background for this same illustrated 2D detective game. INPUT 1 is the strict ART STYLE and LOCATION reference: match its clean brown ink outlines, restrained painted/cel shading, warm soft afternoon light, muted granite stone with very restrained texture, ivory glazed galleries, burgundy wooden clock shop and terracotta roofs in Vigo Casco Vello. INPUT 2 is only a loose COMPOSITION reference for a clock shop facade; it is too hyperdetailed, too glossy, ornate and golden. Redraw the clock shop as though painted by the very same background artist as image 1. Landscape 16:9 game background with no people. The camera now faces the clock shop seen at the right of image 1: a modest CLOSED burgundy paneled wooden door centered, not ajar and no opening, one glass clock display to each side with a few simple antique clocks, granite facade, white wooden gallery above, hanging golden pocket watch sign. Simpler clean architectural forms and slightly wider view with pavement foreground, no enormous decorative shop name banner or carved swirls. On the granite immediately to the RIGHT of the closed door, place a small antique brass doorbell with narrow slot and a small plain rectangular label beneath. The bell panel and label are entirely BLANK, no text, no letters, no symbols, absolutely no HASH MD5 or ABRIR. Important all text is added later in a close-up puzzle, so background has no writing. Keep doorbell at roughly 60% horizontal so remains visible on mobile. Closed door centered, room at lower sides for later character overlays. Use original image1 style and palette consistently, avoiding photorealistic shiny texture or dramatic lighting. No characters, UI, watermarks or annotations.

Assets generados con Imagegen integrado. Los sprites son hojas transparentes de 1024 × 1536, con cuatro celdas de 512 × 768: columnas boca cerrada/abierta; filas gesto explicativo/pensativo. El juego usa la columna de boca abierta para quien habla y la de boca cerrada para quien escucha, oscureciendo a este último. Las poses son fijas.

## criptobal-gestos.png

Ruta: dist/assets/criptobal-gestos.png

Create a production sprite sheet for the SAME original professor character shown in reference: Professor Criptóbal, brown bowler hat, round spectacles, grey sideburns and moustache, olive long coat, orange waistcoat, burgundy cravat, magnifying glass. Professor Layton inspired clean 2D cel animation linework exactly matching reference. True transparent background, NO glow or shadow halos. Portrait 2:3 overall canvas, divided into EXACT equal 2 columns x 2 rows, no grid lines. Four separate thigh-up sprites, each fully contained within its equal cell, same size head, same camera/framing, same head position and baseline in all cells; hat safely within each cell with 5% margin. Top left: friendly explaining gesture with one palm up, mouth CLOSED. Top right: EXACT SAME pose as top left, only mouth OPEN speaking, clearly visible dark mouth under moustache. Bottom left: thoughtful pose hand to chin with magnifier lowered, mouth CLOSED. Bottom right: EXACT SAME thoughtful pose as bottom left, only mouth OPEN speaking. Two matched mouth pairs for game animation. All four face three-quarter right. Preserve identity, costume, proportions and colors. Four independent cutouts, no captions, no scenery. No sprite overlapping another cell. Transparent canvas everywhere outside characters.

## lola-gestos.png

Ruta: dist/assets/lola-gestos.png

Production game sprite sheet for EXACT SAME Lola character in reference: teenage young detective with auburn bob, tan cap with brass goggles, teal fitted jacket, ochre necktie, white collar, brown skirt and satchel, small brown notebook. Same original Professor Layton inspired clean cel illustrated linework, original identity and proportions. Portrait 2:3 overall canvas divided into EXACT 2 columns x 2 rows equal cells, no borders. Four independent thigh-up sprites, SAME camera scale, head position, cap height and baseline inside each cell, 5 percent clear margin, nothing crossing cell boundaries. Top-left: curious friendly, notebook held at chest, other hand on hip, mouth CLOSED. Top-right: EXACT same top-left pose, mouth clearly OPEN speaking enthusiastically. Bottom-left: surprised/investigating, index finger pointing upward beside face, notebook in other hand, mouth CLOSED and inquisitive eyebrows. Bottom-right: EXACT same bottom-left pose, mouth OPEN speaking with small round shape. Two matched closed/open mouth pairs. All face three-quarter LEFT toward professor. Transparent background absolutely no painted background, NO glow, no shadow cloud. No labels, no text, no scenery, no duplicate props. The reference is character identity and costume. Four full cutouts on true transparent alpha.

## relojeria-cerrada.png

Ruta: dist/assets/relojeria-cerrada.png

New full-screen background for the same illustrated Victorian detective adventure set in Vigo, Galicia, 1893. Match the warm hand-painted watercolor architecture and crisp cel outlines in reference, Professor Layton inspired. WIDE 16:9 landscape. Front-facing close establishing view of Clotilde's charming clockmaker shop in the Casco Vello: golden grey Galician granite stone facade, carved stone arch, white glazed galleries above, dark bottle-green wooden shopfront, large clock-filled display windows on LEFT and RIGHT. A very clearly SHUT solid dark green entrance door at exact center x50%, complete closed door visible from y25% to y85%, handle and keyhole. Above it ornate faded shop sign reads 'RELOJERÍA TIC-TAC'. Several antique pendulum and pocket clocks in windows, large hanging clock top-left, warm lamplight late afternoon, damp cobblestones foreground. On stone jamb immediately RIGHT of central door, at x61% y48%, a curious small brass doorbell with a horizontal card/password slot; above slot engraved exact text 'HASH MD5', and a separate small plaque below reads 'ABRIR'. Keep mechanism simple and readable. Leave central doorway unobstructed and bottom corners spacious for character overlays. NO people, no characters, no interface, no speech boxes. Geometrically coherent frontal facade, no distant street or bridge, door firmly CLOSED and locked, no opening. Elegant richly illustrated game environment, not photorealistic.

## relojeria-abierta.png

Ruta: dist/assets/relojeria-abierta.png

Edit only the CENTRAL DOOR in this game background: show this same green wooden door swung open INWARD to the left, revealing a warmly lit clockmaker workshop through the doorway with a small wooden workbench and clocks inside. Keep every other pixel composition as close as possible: identical stone facade, shop sign, clock displays, cobblestones, lighting, camera, exact image dimensions, brass HASH MD5 slot and ABRIR plaque on right jamb. No people. Match same illustrated cel watercolor style. The open doorway is the reward after solving the lock. Do not change any windows, signs, wall, objects, perspective or crop.


# Botones ilustrados del dispositivo

Generados con la herramienta integrada `image_gen`, sobre fondo transparente, usando `dist/assets/dispositivo-laton.png` como referencia de estilo.

- `dist/assets/boton-giro.png`: botón ilustrado de giro a la izquierda. El control derecho reutiliza la imagen reflejada en CSS.
- `dist/assets/boton-resolver.png`: placa ilustrada con el texto accesible «Resolver» superpuesto en HTML.

## Prompt de giro

Use case: stylized-concept. Production UI asset for a Victorian illustrated detective adventure game. Create ONE circular brass button with a very clear large ivory COUNTERCLOCKWISE curved arrow in its center, the arrow ending in a broad triangular tip pointing left at the upper-left. Match the supplied antique brass disk in warm hand-painted 2D ink outlines, cel shading, engraved bronze rim, slight age and maritime craftsmanship. The arrow is carved ivory enamel with a dark brown outline, simple bold silhouette legible at 48 pixels. Front-on perfectly circular button, fills 92 percent of square canvas, center at 50% 50%. Thin double decorative rim and very subtle rim rivets, warm highlight upper-left, no words, no letters, no extra objects, no scene. Isolated on true transparent background, no rectangular tile or huge shadow. It is a clickable game control, not a realistic photograph.

## Prompt de resolver

Use case: stylized-concept. Production UI asset for an illustrated Victorian detective adventure game. One elegant horizontal rectangular button/plaque, aspect ratio 3:1, fills 94 percent width and 86 percent height, front-on orthographic. Warm dark amber enamel/aged brown leather inset, substantial rounded BRASS double rim, tiny understated rivets at left and right, crisp brown ink contours and hand-painted cel shading matching supplied brass disk reference. The center must be completely EMPTY, dark smooth warm brown for later ivory HTML text. No letters, no text, no symbol, no word Resolver baked into art. Large clean center writing area. Simple beautiful 19th century craftsmanship, highlights upper left, softly rounded corners. True transparent background outside the button. No tabletop, no other objects, no perspective. Avoid excessive tiny ornament. This is an illustrated game button not a photograph.

