'use strict';
const $=s=>document.querySelector(s);
const icon=id=>`<svg aria-hidden="true"><use href="#i-${id}"/></svg>`;
const LETTER_HTML="<article class=\"cesar-letter\"><p class=\"letter-date\">Vigo, 14 de noviembre de 1893</p><p>Profesor Criptóbal:</p><p>Venga a Vigo con Lola. La baliza del puerto ha desaparecido y alguien está enviando órdenes con mi nombre. No sé en quién confiar.</p><p>En este sobre encontrará una pieza de latón. Guárdela: dos letras pueden señalar el camino.</p><p>Al llegar al Casco Vello, enfrente la <strong>A</strong> a la <strong>D</strong> y busque:</p><strong class=\"cipher\">WDOOHU</strong><p>Pregunten allí por Clotilde Tic-Tac. Les contaré el resto cuando sea seguro.</p><p class=\"letter-signature\">César</p></article>";
const ARRIVAL="Por fin, Vigo. Apenas hemos bajado del barco y ya tengo las botas mojadas. Espero que la carta de ese tal César justifique el viaje, Lola.";
const puzzles=[
{"title": "La carta de César", "short": "La carta de César", "topic": "Criptografía", "place": "La maleta · Casco Vello", "icon": "key", "item": "✉", "evidence": "La primera pista de César", "objective": "Descubre adónde quiere enviarte César", "detail": "La carta y la pieza de latón viajaron con vosotros hasta Vigo.", "action": "Examinar la carta", "intro": "La carta os ha traído hasta Vigo. Junto a ella venía esta pieza con dos discos de letras. César dejó una instrucción: «Enfrente la A a la D». ¿Qué lugar esconde la palabra WDOOHU?", "body": "<details class=\"letter-fold\"><summary>Leer la carta completa, firmada por César</summary><article class=\"cesar-letter\"><p class=\"letter-date\">Vigo, 14 de noviembre de 1893</p><p>Profesor Criptóbal:</p><p>Venga a Vigo con Lola. La baliza del puerto ha desaparecido y alguien está enviando órdenes con mi nombre. No sé en quién confiar.</p><p>En este sobre encontrará una pieza de latón. Guárdela: dos letras pueden señalar el camino.</p><p>Al llegar al Casco Vello, enfrente la <strong>A</strong> a la <strong>D</strong> y busque:</p><strong class=\"cipher\">WDOOHU</strong><p>Pregunten allí por Clotilde Tic-Tac. Les contaré el resto cuando sea seguro.</p><p class=\"letter-signature\">César</p></article></details><div id=\"brass-object\"></div><div class=\"puzzle-paper compact-cipher\"><strong class=\"cipher\">WDOOHU</strong><p>Relaciona cada letra del mensaje con la letra exterior que queda enfrente.</p></div><label class=\"field-label\" for=\"answer\">¿Adónde debéis ir?</label><input id=\"answer\" type=\"text\" placeholder=\"Escribe el lugar\" autocomplete=\"off\" maxlength=\"40\" required>", "answer": "TALLER", "hints": ["Gira el disco hasta que la A exterior quede enfrente de la D interior. Busca después la W en el círculo interior.", "Con A frente a D, la W interior está frente a la T exterior. D corresponde a A; O, a L. Continúa con O, H y U."], "learning": "La pieza relaciona dos alfabetos desplazados. Para leer el mensaje se recorre esa relación al revés: W corresponde a T. Este sistema tiene solo 25 desplazamientos distintos; sirve para aprender, pero no para proteger secretos actuales.", "finding": "WDOOHU dice TALLER. La carta de César os conduce a la relojería de Clotilde Tic-Tac, en el Casco Vello."},
{title:'Un telegrama impostor',short:'El falso telegrama',topic:'Ciberseguridad',place:'El taller de Clotilde',icon:'search',item:'⌁',evidence:'El telegrama falso',objective:'Detecta el telegrama falso',detail:'Clotilde recibió dos mensajes. Uno intenta robar la clave del taller.',action:'Examinar telegramas',intro:'Clotilde reconoce a César: es el encargado de la baliza. Le han llegado dos telegramas supuestamente suyos. Su taller usa el dominio taller-vigo.test. Compara los telegramas: ¿cuál intenta engañarla para que entregue su contraseña? Todos los dominios de este caso son ficticios.',body:'<label class="choice"><input type="radio" name="choice" value="a" required><span><strong>Telegrama A · Archivo del puerto de Vigo</strong><small>avisos@taller-vigo.test</small>«El inventario está listo. Revísalo en tu archivo habitual. No necesitamos tu contraseña.»</span></label><label class="choice"><input type="radio" name="choice" value="b"><span><strong>Telegrama B · ALERTA URGENTE</strong><small>seguridad@taller-vlgo.test</small>«¡Tu taller será clausurado en diez minutos! Responde con tu contraseña para verificar tu identidad.»</span></label>',answer:'b',hints:['Compara letra por letra el dominio del remitente con taller-vigo.test.','En el segundo mensaje, vigo se ha convertido en vlgo. También pide una contraseña y mete prisa.'],learning:'El phishing suplanta a alguien de confianza. Revisa el dominio completo, desconfía de la urgencia y nunca compartas contraseñas. Un remitente que parece correcto tampoco garantiza autenticidad: verifica por un canal conocido.',finding:'El telegrama B suplanta a Clotilde. Entre sus papeles aparece la combinación de una caja: trece, escrito en cuatro bits.'},
{title:'El cerrojo de dos símbolos',short:'La caja binaria',topic:'Informática',place:'La caja del taller',icon:'lock',item:'▦',evidence:'El registro de acceso',objective:'Abre el cerrojo binario',detail:'Cuatro interruptores protegen un registro. La combinación decimal es 13.',action:'Abrir la caja',intro:'La caja solo entiende ceros y unos. Cada interruptor aporta su valor cuando está encendido. Activa los necesarios para representar el número 13.',body:'<div class="puzzle-paper"><div class="binary-row">'+[8,4,2,1].map((v,i)=>`<div class="bit"><small>${v}</small><button type="button" class="bit-button" data-bit="${i}" aria-pressed="false" aria-label="Bit de valor ${v}">0</button></div>`).join('')+'<div class="binary-total">Valor actual: <strong id="binary-total">0</strong> · Objetivo: <strong>13</strong></div></div>',answer:13,hints:['Cada posición vale el doble que la de su derecha: 1, 2, 4, 8. Suma solo las encendidas.','13 = 8 + 4 + 1. El interruptor que vale 2 debe estar apagado.'],learning:'Un bit puede valer 0 o 1. En binario, cada posición representa una potencia de dos. 1101₂ = 8 + 4 + 0 + 1 = 13. Los ordenadores combinan bits para representar datos.',finding:'La caja contiene un registro firmado de la baliza. Para leerlo, Lola necesita acceso al archivo, pero no permiso para modificarlo.'},
{title:'La llave justa',short:'Los permisos',topic:'Seguridad digital',place:'El archivo del puerto',icon:'key',item:'⚿',evidence:'El permiso de lectura',objective:'Protege el archivo de pruebas',detail:'Da a Lola el acceso mínimo para consultar el registro sin alterar las pruebas.',action:'Asignar permisos',intro:'Lola solo debe leer el registro. Marca todos los permisos que necesita y deja sin marcar los demás.',body:'<label class="choice"><input type="checkbox" name="permission" value="read"><span><strong>Leer el registro</strong><small>Consultar las entradas del archivo.</small></span></label><label class="choice"><input type="checkbox" name="permission" value="write"><span><strong>Editar el registro</strong><small>Cambiar las entradas guardadas.</small></span></label><label class="choice"><input type="checkbox" name="permission" value="delete"><span><strong>Borrar el registro</strong><small>Eliminar las pruebas del caso.</small></span></label><label class="choice"><input type="checkbox" name="permission" value="admin"><span><strong>Administrar las cuentas</strong><small>Dar o quitar permisos a otras personas.</small></span></label>',answer:'read',hints:['Necesitar leer un documento no implica necesitar cambiarlo.','Selecciona solo «Leer el registro». Los otros permisos no hacen falta para su tarea.'],learning:'El principio de mínimo privilegio consiste en dar únicamente los permisos necesarios. Así se reduce el daño que puede causar un error o una cuenta comprometida. Los registros deben protegerse frente a cambios no autorizados.',finding:'Lola recupera una copia verificada del registro. A las 21:14, alguien activó el traslado automático de la baliza.'},
{title:'La huella entre la niebla',short:'La gran deducción',topic:'Deducción',place:'El almacén de O Berbés',icon:'search',item:'◷',evidence:'La orden de traslado',objective:'Reconstruye lo que ocurrió',detail:'Cruza la hora, la acción y el destino. Las pruebas cuentan una historia.',action:'Resolver el misterio',intro:'El registro verificado muestra todos los accesos de esa noche. La baliza desapareció la noche anterior a vuestra llegada, a las 21:14. Compara las cuentas, las acciones y las horas. ¿Qué conclusión respaldan estas pruebas?',body:'<div class="puzzle-paper"><table class="log-table"><caption>Registro de la baliza · 14 de noviembre de 1893</caption><thead><tr><th>Hora</th><th>Cuenta</th><th>Acción</th><th>Destino</th></tr></thead><tbody><tr><td>21:10</td><td>Clotilde</td><td>Consulta</td><td>Archivo</td></tr><tr><td>21:12</td><td>Tomás Tostón</td><td>Consulta</td><td>Archivo</td></tr><tr><td>21:14</td><td>Tornillín 07</td><td>Traslado</td><td>O Berbés</td></tr><tr><td>21:16</td><td>César</td><td>Consulta</td><td>Archivo</td></tr></tbody></table></div><label class="choice"><input type="radio" name="choice" value="ada" required><span>Clotilde robó la baliza porque consultó el archivo primero.</span></label><label class="choice"><input type="radio" name="choice" value="automaton"><span>La cuenta Tornillín 07 ordenó el traslado al almacén de O Berbés. Aún hay que investigar quién controlaba esa cuenta.</span></label><label class="choice"><input type="radio" name="choice" value="vale"><span>César borró la baliza, porque fue el último en entrar.</span></label>',answer:'automaton',hints:['La consulta de un archivo no es un traslado. Busca la acción que coincide con las 21:14.','El registro identifica una cuenta, una acción y un destino. No demuestra por sí solo quién estaba detrás de la cuenta.'],learning:'Investigar consiste en cruzar evidencias, no en adivinar culpables. Un registro ayuda a reconstruir hechos, pero una cuenta no siempre identifica a la persona que la utilizó. Distingue lo demostrado de lo que falta por verificar.',finding:'¡La baliza está en el almacén de O Berbés! Tornillín 07 la trasladó siguiendo una instrucción antigua. El telegrama falso era una segunda amenaza: Clotilde cambió sus credenciales por un canal seguro y protegió el archivo.'}
];
const KEY='niebla-cifra-vigo-v1';
let state={completed:[],hintUses:0,seen:[],dialogue:0,doorUnlocked:false,clockshopStarted:false};
try{const saved=JSON.parse(localStorage.getItem(KEY));if(saved&&Array.isArray(saved.completed)){let count=0;while(count<5&&saved.completed.includes(count))count++;state={...state,doorUnlocked:saved.doorUnlocked===true||count>=2,clockshopStarted:saved.clockshopStarted===true,completed:Array.from({length:count},(_,i)=>i),hintUses:Number.isFinite(saved.hintUses)?Math.max(0,saved.hintUses):0,seen:Array.isArray(saved.seen)?saved.seen.filter(x=>['book','clock','door'].includes(x)):[]};}}catch{}
const navigationHistory=[];
let activePuzzle=0,bits=[0,0,0,0],hintIndex=0,toastTimer,ambient=null,lastFocus=null,storyReadyForPuzzle=false,storyPuzzleIndex=null,restoringNavigation=false,sceneId='street',clockDialogueIndex=-1;
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch{toast('Guardado no disponible: mantén esta pestaña abierta');}}
function toast(msg){$('#toast').textContent=msg;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),3500);}
function openModal(kicker,html){
  const modal=$('#modal');
  rememberView();
  if(!modal.open)lastFocus=document.activeElement;
  modal.classList.toggle('door-screen',kicker==='ENIGMA 002 · HASH MD5');
  modal.classList.toggle('letter-screen',kicker==='LA CARTA DE CÉSAR');
  modal.classList.toggle('puzzle-screen',kicker.startsWith('ENIGMA '));
  modal.classList.toggle('result-screen',kicker==='DEDUCCIÓN CORRECTA'||kicker.includes('CASO CERRADO'));
  $('#modal-kicker').textContent=kicker;
  $('#modal-content').innerHTML=html;
  $('#modal-content').dataset.puzzleIndex=String(activePuzzle);
  if(!modal.open)modal.showModal();
  modal.scrollTop=0;
}
function closeModal(){goBack();}
function setScene(id){
  sceneId=id;
  const shop=id!=='street';
  $('#game').classList.toggle('at-clockshop',shop);
  $('.scene-art').src=shop?`assets/relojeria-${id==='shop-open'?'abierta':'cerrada'}.png`:'assets/vigo-casco-vello.png';
  $('.scene-art').alt=shop?`Fachada de la relojería Tic-Tac, puerta ${id==='shop-open'?'abierta':'cerrada'}`:'Calle del Casco Vello de Vigo con vistas a la ría';
  $('#scene').setAttribute('aria-label',shop?'Relojería Tic-Tac · Vigo':'Casco Vello de Vigo');
}
function setDialogue(text,speaker='Profesor Criptóbal',partner='iris'){
  $('#speaker-name').textContent=speaker;$('#dialogue-text').textContent=text;$('#dialogue-text').scrollTop=0;
  const lola=speaker!=='Profesor Criptóbal',thoughtful=/[¿?]|hash|ranura|contraseña|letras|registro|permiso/i.test(text);
  $('#game').classList.toggle('partner-speaking',lola);
  const professor=$('#vale-sprite'),other=$('#partner-sprite');
  other.dataset.character=partner;other.setAttribute('aria-label',partner==='ada'?'Clotilde Tic-Tac':'Lola Bitácora');
  professor.dataset.gesture=!lola&&thoughtful?'think':'explain';
  other.dataset.gesture=lola&&thoughtful?'think':'explain';
  professor.classList.toggle('is-speaking',!lola);other.classList.toggle('is-speaking',lola);
}
// Spoken transitions are separate from the factual summaries in the case notebook.
const progressDialogue=[
  {speaker:'Profesor Criptóbal',text:'¡Taller! Eso es lo que esconden esas seis letras. Vamos, Lola: busquemos a Clotilde Tic-Tac. Espero que sus relojes sean menos enigmáticos que esta carta.'},
  {speaker:'Lola Bitácora',text:'¡Querían que Clotilde entregase su contraseña! Menos mal que hemos mirado bien el remitente… Profesor, en este papel pone «13». ¿Será la combinación de esa caja?'},
  {speaker:'Lola Bitácora',text:'¡Se ha abierto! Aquí está el registro de la baliza, profesor. Solo necesito leerlo; no quiero cambiar nada y estropear una prueba. ¿Qué permiso debo pedir?'},
  {speaker:'Profesor Criptóbal',text:'Ya tenemos la copia, Lola. Fíjate en las 21:14: es la hora a la que desapareció la baliza. Comparemos las entradas con calma; una cuenta en un registro todavía no nos dice quién la utilizó.'},
  {speaker:'Profesor Criptóbal',text:'¡O Berbés, Lola! El registro señala ese almacén. Vamos a comprobar si la baliza sigue allí. Y, si encontramos a César, tengo unas cuantas preguntas para él…'}
];
function render(){
  const count=state.completed.length;
  storyReadyForPuzzle=count>0;
  storyPuzzleIndex=count;
  clockDialogueIndex=-1;
  setScene(count>0&&state.doorUnlocked?'shop-open':'street');
  if(count===1&&!state.doorUnlocked&&state.clockshopStarted){setScene('shop-closed');clockDialogueIndex=0;storyReadyForPuzzle=false;setDialogue(clockshopLines[0].text,clockshopLines[0].speaker);return;}
  if(count){const line=count===1&&state.doorUnlocked?{speaker:'Lola Bitácora',text:'¡La puerta está abierta, profesor! Ahí viene Clotilde. Parece que tiene algo urgente que contarnos…'}:progressDialogue[count-1];setDialogue(line.text,line.speaker);}
}
function openPuzzle(i){if(i>state.completed.length){toast('Resuelve el enigma anterior para descubrir esta pista.');return;}if(i===0){showLetter();return;}if(!state.doorUnlocked){startClockshop();return;}activePuzzle=i;bits=[0,0,0,0];hintIndex=0;const p=puzzles[i];openModal(`ENIGMA ${String(i+2).padStart(3,'0')} · ${p.topic.toUpperCase()}`,`<div class="puzzle-meta">${icon(p.icon)} ${p.place.toUpperCase()} <span>·</span> ${state.completed.includes(i)?'YA RESUELTO':'SIN LÍMITE DE TIEMPO'}</div><h2 class="modal-title">${p.title}</h2><p class="modal-intro">${p.intro}</p><form id="puzzle-form">${p.body}<div class="puzzle-actions"><button type="button" class="secondary-button" id="hint-button">${icon('spark')} Una pista</button><button class="primary-button" type="submit">Comprobar ${icon('arrow')}</button></div><div id="hint-output" aria-live="polite"></div><div class="feedback" id="feedback" role="status" aria-live="polite"></div></form>`);$('#puzzle-form').addEventListener('submit',checkAnswer);$('#hint-button').addEventListener('click',showHint);document.querySelectorAll('.bit-button').forEach(btn=>btn.addEventListener('click',()=>{const n=Number(btn.dataset.bit);bits[n]=1-bits[n];btn.textContent=bits[n];btn.classList.toggle('on',Boolean(bits[n]));btn.setAttribute('aria-pressed',String(Boolean(bits[n])));$('#binary-total').textContent=bits.reduce((sum,bit,index)=>sum+bit*[8,4,2,1][index],0);}));}
function showHint(){const p=puzzles[activePuzzle];if(hintIndex<p.hints.length){$('#hint-output').innerHTML=`<div class="hint"><strong>Pista ${hintIndex+1}.</strong> ${p.hints[hintIndex]}</div>`;hintIndex++;$('#hint-output').dataset.hintIndex=String(hintIndex);state.hintUses++;save();$('#hint-button').innerHTML=hintIndex===2?'Todas las pistas vistas':`${icon('spark')} Otra pista`;if(hintIndex===2)$('#hint-button').disabled=true;}}
function checkAnswer(event){event.preventDefault();let answer;if(activePuzzle===0)answer=$('#answer').value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g,'').toUpperCase();else if(activePuzzle===2)answer=bits.reduce((sum,bit,i)=>sum+bit*[8,4,2,1][i],0);else if(activePuzzle===3)answer=[...document.querySelectorAll('[name=permission]:checked')].map(el=>el.value).join(',');else answer=document.querySelector('[name=choice]:checked')?.value;const p=puzzles[activePuzzle];if(answer!==p.answer){if($('#modal').classList.contains('letter-screen')){$('#feedback').textContent='No encaja todavía. Prueba otra palabra.';$('#answer').setAttribute('aria-invalid','true');$('#answer').focus();return;}$('#feedback').textContent='Aún no encaja con las pruebas. Revisa los detalles o pide una pista. Puedes intentarlo de nuevo sin perder puntos.';return;}if(!state.completed.includes(activePuzzle)){state.completed.push(activePuzzle);save();}render();openModal('DEDUCCIÓN CORRECTA',`<div class="success-mark">${icon('check')}</div><div class="puzzle-meta">PRUEBA AÑADIDA AL CUADERNO</div><h2 class="modal-title">¡Elemental, detective!</h2><p class="modal-intro">${p.finding}</p><div class="learning"><strong>LO QUE ACABAS DE DESCUBRIR</strong><p>${p.learning}</p></div><button class="primary-button" id="next-puzzle">${activePuzzle===4?'Ver el desenlace':'Seguir la pista'} ${icon('arrow')}</button>`);$('#next-puzzle').addEventListener('click',()=>activePuzzle===0&&!state.doorUnlocked?startClockshop():activePuzzle===4?showEnding():openPuzzle(activePuzzle+1));}
function showEnding(){openModal('EXPEDIENTE 001 · CASO CERRADO',`<div class="medal">✧</div><div class="puzzle-meta">DISTINTIVO OBTENIDO · DETECTIVE DEL CÓDIGO</div><h2 class="modal-title">La niebla se disipa.</h2><p class="modal-intro">En el almacén de O Berbés, entre redes y engranajes, encontráis la baliza intacta. César os espera junto a ella: «¡Han recibido mi carta! Temía que interceptaran también el sobre». César y Clotilde descubren que una antigua orden de mantenimiento seguía activa en Tornillín 07. No hubo un robo: hubo un traslado sin comunicar.</p><p class="modal-intro">El telegrama impostor era real, pero no explicaba la desaparición. Al comprobar cada prueba has evitado acusar a alguien sin fundamento, y has ayudado a Clotilde a proteger su taller.</p><div class="learning"><strong>SEIS HABILIDADES PARA LLEVARTE CONTIGO</strong><p>Descifrar un código · Comprender los hashes · Reconocer el phishing · Leer binario · Limitar permisos · Separar hechos de sospechas.</p></div><p class="modal-intro">«Un misterio resuelto es una pregunta mejor formulada», sonríe Despistes. Lola guarda la carta de César y la pieza de latón en la maleta. Sobre la ría vuelve a sonar la baliza. Su primera noche en Vigo acaba con un misterio resuelto.</p><button class="primary-button" data-panel="notebook">Revisar mis descubrimientos ${icon('book')}</button>`);}
function showNotebook(){openModal('ARCHIVO PERSONAL',`<h2 class="modal-title">Mi cuaderno de detective</h2><p class="modal-intro">Las pruebas se conservan. Las conexiones las haces tú. ${state.completed.length+(state.doorUnlocked?1:0)} de 6 descubrimientos.</p><button class="letter-menu-link" data-panel="letter">${icon('book')} Carta recibida de César · Ver el objeto</button><div class="evidence-list">${state.completed.length?state.completed.map(i=>`<article class="evidence-card"><span class="evidence-icon">${puzzles[i].item}</span><div><h3>${puzzles[i].evidence}</h3><p>${puzzles[i].finding}</p><div class="learning"><strong>${puzzles[i].topic.toUpperCase()}</strong><p>${puzzles[i].learning}</p></div><button class="secondary-button" data-puzzle="${i}">Volver a resolver</button></div></article>`).join(''):'<div class="empty-note">Todavía no hay pruebas en tu cuaderno.<br>La carta de César ya está en tu equipaje. Examínala junto a la pieza de latón.</div>'}</div>`);}
function showCharacters(){openModal('ELENCO ORIGINAL · ASSETS DEL JUEGO',`<h2 class="modal-title">Nunca investigas a solas.</h2><p class="modal-intro">Tres mentes curiosas. Tres formas de mirar un mismo misterio.</p><div class="character-grid"><article class="character-card"><div class="character-art" role="img" aria-label="Criptóbal Despistes, detective de abrigo verde y lupa"></div><div class="character-info"><small>EL MENTOR</small><h3>Criptóbal Despistes</h3><p>Criptógrafo, profesor y coleccionista de preguntas. Cree que la paciencia es más útil que una lupa.</p></div></article><article class="character-card"><div class="character-art iris" role="img" aria-label="Lola Bitácora, joven inventora con gafas y cuaderno"></div><div class="character-info"><small>LA APRENDIZ</small><h3>Lola Bitácora</h3><p>Inventora de quince años. Ve patrones donde los demás solo ven números y cables enredados.</p></div></article><article class="character-card"><div class="character-art ada" role="img" aria-label="Clotilde Tic-Tac, relojera con un mecanismo de latón"></div><div class="character-info"><small>LA RELOJERA</small><h3>Clotilde Tic-Tac</h3><p>Custodia los mecanismos del puerto de Vigo. Sus relojes guardan secretos; ella, todas las llaves.</p></div></article></div><div class="asset-download"><a class="secondary-button" href="assets/vale-v2.png" download>Criptóbal · PNG ↓</a><a class="secondary-button" href="assets/iris-v2.png" download>Lola · PNG ↓</a><a class="secondary-button" href="assets/ada-v2.png" download>Clotilde · PNG ↓</a><a class="secondary-button" href="assets/vigo-casco-vello.png" download="niebla-y-cifra-escenario.png">Descargar escenario ↓</a></div>`);}
function showProfile(){openModal('CARNÉ DE INVESTIGADOR',`<h2 class="modal-title">${state.completed.length===5?'Detective del código':'Detective en formación'}</h2><p class="modal-intro">Lo importante no es correr. Es comprender cada pista.</p><div class="profile-stats"><div><strong>${state.completed.length+(state.doorUnlocked?1:0)}/6</strong><small>Enigmas resueltos</small></div><div><strong>${state.hintUses}</strong><small>Pistas consultadas</small></div><div><strong>${state.seen.length}/3</strong><small>Observaciones</small></div></div><p class="modal-intro">La partida se guarda automáticamente en este navegador. No se necesitan cuentas ni datos personales.</p><button class="secondary-button" id="reset-game">Comenzar una nueva investigación</button>`);$('#reset-game').addEventListener('click',()=>{openModal('NUEVA INVESTIGACIÓN',`<h2 class="modal-title">¿Volvemos al principio?</h2><p class="modal-intro">Se borrarán las pistas y el progreso de esta partida en este navegador.</p><div class="puzzle-actions"><button class="secondary-button" data-panel="profile">Conservar mi partida</button><button class="primary-button" id="confirm-reset">Reiniciar el caso</button></div>`);$('#confirm-reset').addEventListener('click',()=>{state={completed:[],hintUses:0,seen:[],dialogue:0,doorUnlocked:false,clockshopStarted:false};save();render();setDialogue(ARRIVAL);closeModal();toast('Una nueva investigación te espera.');});});}
function showHelp(){openModal('GUÍA DE CAMPO',`<h2 class="modal-title">Toda gran aventura<br>empieza observando.</h2><ol class="help-steps"><li>Avanza con la flecha del diálogo. Al terminar la conversación se abre la carta.</li><li>Resuelve las pistas para continuar la historia.</li><li>Lee las pruebas y envía tu deducción. No hay cronómetro.</li><li>Si te atascas, pide una pista. Aprender no resta puntos.</li><li>Guarda las ideas en tu cuaderno y sigue el recorrido.</li></ol><div class="learning"><strong>PARA MENTES CURIOSAS · A PARTIR DE 10 AÑOS</strong><p>Un caso de unos 20–30 minutos. Usa Tab para recorrer los controles y Enter para activarlos. Escape cierra las ventanas. El botón de las cuatro esquinas activa la pantalla completa. Todos los retos son simulaciones ficticias.</p></div><button class="primary-button" id="help-start">Volver a la aventura ${icon('arrow')}</button>`);$('#help-start').addEventListener('click',closeModal);}
const panels={notebook:showNotebook,characters:showCharacters,profile:showProfile,letter:showLetter};
document.addEventListener('click',event=>{
  const panel=event.target.closest('[data-panel]');if(panel){panels[panel.dataset.panel]?.();return;}
  const puzzle=event.target.closest('[data-puzzle]');if(puzzle){openPuzzle(Number(puzzle.dataset.puzzle));return;}
  const evidence=event.target.closest('[data-evidence]');if(evidence){const p=puzzles[Number(evidence.dataset.evidence)];openModal('PRUEBA RECOGIDA',`<div class="medal">${p.item}</div><h2 class="modal-title">${p.evidence}</h2><p class="modal-intro">${p.finding}</p><div class="learning"><strong>${p.topic}</strong><p>${p.learning}</p></div>`);}
});
$('#close-modal').addEventListener('click',closeModal);
$('#modal').addEventListener('cancel',event=>{event.preventDefault();goBack();});
$('#modal').addEventListener('click',e=>{if(e.target===$('#modal')){const r=$('#modal').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeModal();}});
const dialogueLines=[{"speaker": "Lola Bitácora", "text": "¡Mire la ría, profesor! Vigo es todavía más bonita que en los mapas. Aunque venir hasta Galicia por una carta misteriosa… eso sí que no estaba en nuestros planes."}, {"speaker": "Profesor Criptóbal", "text": "La escribió y firmó un tal César. Nos pide ayuda: ha desaparecido la baliza del puerto y alguien envía órdenes usando su nombre."}, {"speaker": "Lola Bitácora", "text": "Y dentro del sobre venía esto. Pesa lo suyo… tiene dos discos, letras por todas partes y una pequeña muesca. No parece una moneda de recuerdo."}, {"speaker": "Profesor Criptóbal", "text": "Todavía no sabemos para qué sirve. César escribió: «Al llegar al Casco Vello, enfrente la A a la D». Después dejó seis letras: WDOOHU."}, {"speaker": "Lola Bitácora", "text": "Voy a apoyar la maleta en ese banco. Saquemos la carta y la pieza. Quizá las letras no estén ahí de adorno."}, {"speaker": "Profesor Criptóbal", "text": "Buena idea. Acabamos de llegar a Vigo y ya tenemos un lugar que encontrar. Empecemos por leer con cuidado lo que nos ha escrito César."}];
$('#dialogue-next').addEventListener('click',()=>{
  if(clockDialogueIndex>=0){if(clockDialogueIndex+1<clockshopLines.length){rememberView();clockDialogueIndex++;const line=clockshopLines[clockDialogueIndex];setDialogue(line.text,line.speaker);}else showDoorPuzzle();return;}
  if(storyReadyForPuzzle){const next=storyPuzzleIndex??state.completed.length;next===5?showEnding():openPuzzle(next);return;}
  if(state.dialogue>=dialogueLines.length){showLetter();return;}
  rememberView();
  const line=dialogueLines[state.dialogue];
  setDialogue(line.text,line.speaker);
  state.dialogue++;
});
$('#fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else if(document.documentElement.requestFullscreen)await document.documentElement.requestFullscreen();else toast('El juego ya ocupa toda la ventana. Este navegador no admite el modo de pantalla completa.');}catch{toast('El navegador no permite ampliar más la ventana. El juego sigue ocupando todo el espacio disponible.');}});
document.addEventListener('fullscreenchange',()=>{const active=Boolean(document.fullscreenElement);$('#fullscreen').setAttribute('aria-pressed',String(active));$('#fullscreen').setAttribute('aria-label',active?'Salir de pantalla completa':'Activar pantalla completa');});
$('#sound').addEventListener('click',async()=>{try{if(!ambient){const AC=window.AudioContext||window.webkitAudioContext;if(!AC){toast('Este navegador no permite el ambiente sonoro.');return;}const ctx=new AC();const gain=ctx.createGain();gain.gain.value=.022;gain.connect(ctx.destination);const buffer=ctx.createBuffer(1,ctx.sampleRate*3,ctx.sampleRate);const channel=buffer.getChannelData(0);let previous=0;for(let i=0;i<channel.length;i++){previous=(previous+Math.random()*.04-.02)/1.02;channel[i]=previous*3;}const noise=ctx.createBufferSource();noise.buffer=buffer;noise.loop=true;const filter=ctx.createBiquadFilter();filter.type='lowpass';filter.frequency.value=550;noise.connect(filter);filter.connect(gain);noise.start();ambient={ctx,on:false};}ambient.on=!ambient.on;if(ambient.on)await ambient.ctx.resume();else await ambient.ctx.suspend();$('#sound').setAttribute('aria-pressed',String(ambient.on));$('#sound').setAttribute('aria-label',ambient.on?'Desactivar ambiente sonoro':'Activar ambiente sonoro');toast(ambient.on?'Ambiente de niebla activado':'Ambiente sonoro desactivado');}catch{toast('No se ha podido activar el sonido en este navegador.');}});


function showLetter(){
  activePuzzle=0;
  openModal('LA CARTA DE CÉSAR',`<button type="button" id="letter-back" class="round-control" aria-label="Anterior" title="Anterior">${icon('arrow')}</button><div class="letter-and-object"><section class="letter-evidence" aria-label="Carta recibida antes del viaje">${LETTER_HTML}</section><section class="object-panel" aria-label="Pieza de latón y solución"><div id="brass-object"></div><form id="letter-answer-form"><div class="letter-answer-row"><input id="answer" type="text" aria-label="Solución de la carta" aria-describedby="feedback" placeholder="Tu respuesta…" autocomplete="off" spellcheck="false" maxlength="40" required><button type="submit" class="primary-button illustrated-resolve"><span>Resolver</span></button></div><div class="feedback" id="feedback" role="status" aria-live="polite"></div></form></section></div>`);
  mountBrassObject(true);
  fitLetterScreen();
  $('#letter-back').addEventListener('click',closeModal);
  $('#letter-answer-form').addEventListener('submit',checkAnswer);
  $('#answer').addEventListener('input',()=>{$('#answer').removeAttribute('aria-invalid');$('#feedback').textContent='';});
}

function mountBrassObject(minimal=false){const host=$('#brass-object');if(!host)return;let shift=0;const alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';host.innerHTML=`<div class="brass-device"><svg class="brass-wheel" viewBox="0 0 320 320" role="img" aria-label="Pieza de latón con dos discos de letras"><image href="assets/dispositivo-laton.png" x="0" y="0" width="320" height="320"/><g id="outer-letters"></g><g id="inner-letters"></g></svg><div class="wheel-controls"><button type="button" class="secondary-button" data-turn="-1" aria-label="Girar el disco a la izquierda"><img src="assets/boton-giro.png" alt="" draggable="false"></button>${minimal?'':'<div class="wheel-readout"><span>ALINEACIÓN</span><output id="wheel-alignment" aria-live="polite">A ↔ A</output></div>'}<button type="button" class="secondary-button" data-turn="1" aria-label="Girar el disco a la derecha"><img src="assets/boton-giro.png" alt="" draggable="false"></button></div>${minimal?'':'<small>Usa las flechas para girar el disco interior.</small>'}</div>`;const letters=(radius,offset,size)=>[...alphabet].map((_,i)=>{const angle=i*2*Math.PI/26;return `<text x="${160+Math.sin(angle)*radius}" y="${160-Math.cos(angle)*radius+(radius===122&&i===0?7:0)}" text-anchor="middle" dominant-baseline="central" font-size="${size}">${alphabet[(i+offset+26)%26]}</text>`;}).join('');$('#outer-letters').innerHTML=letters(122,0,14);const update=()=>{$('#inner-letters').innerHTML=letters(88,shift,13);const output=$('#wheel-alignment');if(output)output.textContent=`A ↔ ${alphabet[shift]}`;host.querySelector('.brass-wheel').setAttribute('aria-label',`Pieza de latón: A exterior frente a ${alphabet[shift]} interior`);};host.querySelectorAll('[data-turn]').forEach(btn=>btn.addEventListener('click',()=>{shift=(shift+Number(btn.dataset.turn)+26)%26;update();}));update();}

// Measure the full composition, then fit it in both dimensions without cropping.
function fitLetterScreen(){
  const modal=$('#modal'), viewport=$('#modal-content');
  if(!modal.open||!modal.classList.contains('letter-screen'))return;
  const desk=viewport.querySelector('.letter-and-object');
  if(!desk||!viewport.clientWidth||!viewport.clientHeight)return;
  const width=Math.max(1,viewport.clientWidth-24),height=Math.max(1,viewport.clientHeight-88);
  const portrait=width<560;
  desk.classList.toggle('is-portrait',portrait);
  desk.style.width=`${portrait?Math.max(390,Math.min(470,width)):Math.max(820,Math.min(1100,width))}px`;
  const scale=Math.min(1,width/desk.offsetWidth,height/desk.offsetHeight);
  desk.style.setProperty('--evidence-scale',String(scale));
}
const evidenceViewportObserver=new ResizeObserver(fitLetterScreen);
evidenceViewportObserver.observe($('#modal-content'));
if(document.fonts)document.fonts.ready.then(fitLetterScreen);

// Store actual screen nodes so input values, disk position and listeners survive Back.
function captureView(){
  const modal=$('#modal'),content=$('#modal-content');
  if(modal.open)return {
    type:'screen',nodes:[...content.childNodes],classes:modal.className,
    kicker:$('#modal-kicker').textContent,scroll:modal.scrollTop,scene:sceneId,clockIndex:clockDialogueIndex,
    puzzle:Number(content.dataset.puzzleIndex),
    bits:[...content.querySelectorAll('.bit-button')].map(button=>Number(button.textContent)),
    hintIndex:Number(content.querySelector('#hint-output')?.dataset.hintIndex||0),
    focus:document.activeElement
  };
  return {
    type:'story',text:$('#dialogue-text').textContent,speaker:$('#speaker-name').textContent,
    partner:$('#partner-sprite').dataset.character||'iris',scene:sceneId,clockIndex:clockDialogueIndex,
    dialogue:state.dialogue,ready:storyReadyForPuzzle,nextPuzzle:storyPuzzleIndex,scroll:$('#dialogue-text').scrollTop,
    focus:document.activeElement
  };
}
function rememberView(){if(restoringNavigation)return;navigationHistory.push(captureView());$('#story-back').disabled=false;}
function goBack(){
  const previous=navigationHistory.pop(),modal=$('#modal');
  if(!previous){if(modal.open)modal.close();$('#story-back').disabled=true;return;}
  if(previous.type==='door-puzzle'){restoringNavigation=true;try{setScene('shop-closed');showDoorPuzzle();}finally{restoringNavigation=false;}}else if(previous.type==='puzzle'){
    restoringNavigation=true;
    try{openPuzzle(previous.puzzle);}finally{restoringNavigation=false;}
  }else if(previous.type==='screen'){
    setScene(previous.scene||'street');clockDialogueIndex=previous.clockIndex??-1;
    modal.className=previous.classes;
    $('#modal-kicker').textContent=previous.kicker;
    $('#modal-content').replaceChildren(...previous.nodes);
    $('#modal-content').dataset.puzzleIndex=String(previous.puzzle);
    activePuzzle=previous.puzzle;bits=previous.bits;hintIndex=previous.hintIndex;
    if(!modal.open)modal.showModal();
    modal.scrollTop=previous.scroll;
    fitLetterScreen();
  }else{
    if(modal.open)modal.close();
    setScene(previous.scene||'street');clockDialogueIndex=previous.clockIndex??-1;
    state.dialogue=previous.dialogue;storyReadyForPuzzle=previous.ready;storyPuzzleIndex=previous.nextPuzzle??null;
    setDialogue(previous.text,previous.speaker,previous.partner);
    $('#dialogue-text').scrollTop=previous.scroll;
  }
  $('#story-back').disabled=navigationHistory.length===0;
  if(previous.focus?.isConnected)previous.focus.focus({preventScroll:true});
}
$('#story-back').addEventListener('click',goBack);

// A saved checkpoint resumes after the last solved puzzle. Rebuild its predecessors
// so Back remains available after reloading, without undoing any solved evidence.
function restoreCheckpointHistory(){
  const completed=state.completed.length;
  if(!completed)return;
  const introduction=[{speaker:'Profesor Criptóbal',text:ARRIVAL},...dialogueLines];
  introduction.forEach((line,index)=>navigationHistory.push({
    type:'story',...line,partner:'iris',dialogue:index,ready:false,nextPuzzle:null,scroll:0
  }));
  for(let index=0;index<completed;index++){
    if(index>0)navigationHistory.push({
      type:'story',...(index===1?{speaker:'Lola Bitácora',text:'¡La puerta está abierta, profesor! Ahí viene Clotilde. Parece que tiene algo urgente que contarnos…'}:progressDialogue[index-1]),partner:'iris',scene:'shop-open',clockIndex:-1,dialogue:dialogueLines.length,
      ready:true,nextPuzzle:index,scroll:0
    });
    navigationHistory.push({type:'puzzle',puzzle:index});
    if(index===0&&state.doorUnlocked){
      clockshopLines.forEach((line,clockIndex)=>navigationHistory.push({type:'story',...line,partner:'iris',scene:'shop-closed',clockIndex,dialogue:dialogueLines.length,ready:false,nextPuzzle:null,scroll:0}));
      navigationHistory.push({type:'door-puzzle'});
    }
  }
  $('#story-back').disabled=false;
}


const clockshopLines=[
  {speaker:'Lola Bitácora',text:'Aquí está: «Relojería Tic-Tac». Pero la puerta está cerrada… Profesor, este timbre tiene una ranura. ¡Parece que hay que introducir una contraseña!'},
  {speaker:'Profesor Criptóbal',text:'Qué recibimiento tan peculiar. Encima de la ranura pone «HASH MD5». Y debajo hay una placa con una sola palabra: «ABRIR».'},
  {speaker:'Lola Bitácora',text:'¿Probamos con ABRIR? Aunque, si fuera tan fácil, la señora Tic-Tac podría haber dejado una llave debajo del felpudo.'},
  {speaker:'Profesor Criptóbal',text:'Creo que nos pide la huella de esa palabra. MD5 transforma un texto en una cadena de treinta y dos caracteres. No es como los discos de César: aquí no se descifra un mensaje.'},
  {speaker:'Lola Bitácora',text:'Tengo un calculador en mi cuaderno. Escribiré ABRIR, tal como aparece en la placa: en mayúsculas y sin espacios. ¡A ver qué huella sale!'},
  {speaker:'Profesor Criptóbal',text:'Adelante, Lola. Calculemos la huella y pongámosla en la ranura. Si Clotilde quería comprobar nuestra curiosidad, está a punto de llevarse una sorpresa.'}
];
function startClockshop(){
  rememberView();if($('#modal').open)$('#modal').close();
  state.clockshopStarted=true;save();setScene('shop-closed');clockDialogueIndex=0;storyReadyForPuzzle=false;
  const line=clockshopLines[0];setDialogue(line.text,line.speaker);
}
function showDoorPuzzle(){
  activePuzzle=1;
  openModal('ENIGMA 002 · HASH MD5',`<div class="puzzle-meta">${icon('lock')} EL TIMBRE DE CLOTILDE</div><h2 class="modal-title">La huella de una palabra</h2><p class="modal-intro">«La placa dice ABRIR, profesor. Calcularé su huella; usted pruebe la ranura».<br><small>— Lola Bitácora</small></p><div class="door-workbench"><section class="hash-notebook" aria-label="Calculador del cuaderno de Lola"><h3>El cuaderno de Lola</h3><form id="hash-calculator"><label for="hash-word">Palabra que quieres comprobar</label><div class="hash-row"><input id="hash-word" type="text" autocomplete="off" spellcheck="false" placeholder="Copia la palabra de la placa" maxlength="100" required><button class="secondary-button" type="submit">Calcular MD5</button></div><output id="hash-result" aria-live="polite">La huella aparecerá aquí.</output><button type="button" id="use-hash" class="secondary-button" disabled>Pasar a la ranura ${icon('arrow')}</button></form><p>Las mayúsculas, las minúsculas y los espacios producen huellas distintas.</p><details class="hash-learning"><summary>Una nota del profesor</summary><p>MD5 es una función hash, no un cifrado que se pueda descifrar. Aquí nos sirve para aprender; no debe usarse para proteger contraseñas reales.</p><a href="https://www.rfc-editor.org/rfc/rfc6151" target="_blank" rel="noopener noreferrer">Nota técnica de la IETF</a></details></section><form id="door-form" class="door-lock"><strong>HASH MD5</strong><label for="door-answer">Ranura de la contraseña</label><input id="door-answer" type="text" inputmode="text" autocomplete="off" spellcheck="false" maxlength="32" placeholder="Introduce los 32 caracteres" aria-describedby="door-feedback" required><span class="door-plaque">ABRIR</span><button type="submit" class="primary-button">Probar la cerradura ${icon('key')}</button><div id="door-feedback" role="status" aria-live="polite"></div></form></div>`);
  let calculated='';
  $('#hash-calculator').addEventListener('submit',event=>{event.preventDefault();calculated=md5($('#hash-word').value);$('#hash-result').textContent=calculated;$('#use-hash').disabled=false;});
  $('#hash-word').addEventListener('input',()=>{calculated='';$('#hash-result').textContent='La huella aparecerá aquí.';$('#use-hash').disabled=true;});
  $('#use-hash').addEventListener('click',()=>{$('#door-answer').value=calculated;$('#door-answer').focus();});
  $('#door-form').addEventListener('submit',event=>{
    event.preventDefault();const answer=$('#door-answer').value.trim().toLowerCase();
    if(answer!=='79a81a55520ad1640f63430608c5198d'){$('#door-feedback').textContent='El cerrojo no se mueve. Calcula la huella de ABRIR, en mayúsculas y sin espacios.';return;}
    rememberView();state.doorUnlocked=true;save();$('#modal').close();clockDialogueIndex=-1;storyReadyForPuzzle=true;storyPuzzleIndex=1;setScene('shop-open');
    setDialogue('¡Ha sonado un clic! La puerta está abierta, profesor. Y alguien viene hacia nosotros… ¡Señora Tic-Tac! Nos envía César.','Lola Bitácora');
  });
}

render();
if(!state.completed.length)setDialogue(ARRIVAL);
restoreCheckpointHistory();
