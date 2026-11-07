'use strict';
const $=s=>document.querySelector(s);
const normalizeAnswer=value=>value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,'').toUpperCase();
const icon=id=>`<svg aria-hidden="true"><use href="#i-${id}"/></svg>`;
const LETTER_HTML="<article class=\"cesar-letter\"><p class=\"letter-date\">Vigo, 14 de noviembre de 1893</p><p>Profesor Criptóbal:</p><p>Venga a Vigo con Lola. La baliza del puerto ha desaparecido y alguien está enviando órdenes con mi nombre. No sé en quién confiar.</p><p>En este sobre encontrará una pieza de latón. Guárdela: dos letras pueden señalar el camino.</p><p>Al llegar al Casco Vello, enfrente la <strong>A</strong> a la <strong>D</strong> y busque:</p><strong class=\"cipher\">WDOOHU</strong><p>Pregunten allí por Clotilde Tic-Tac. Les contaré el resto cuando sea seguro.</p><p class=\"letter-signature\">César</p></article>";
const dialogueLines=[{"speaker": "Lola Bitácora", "text": "¡Mire la ría, profesor! Vigo es todavía más bonita que en los mapas. Aunque venir hasta Galicia por una carta misteriosa… eso sí que no estaba en nuestros planes."}, {"speaker": "Profesor Criptóbal", "text": "La escribió y firmó un tal César. Nos pide ayuda: ha desaparecido la baliza del puerto y alguien envía órdenes usando su nombre."}, {"speaker": "Lola Bitácora", "text": "Y dentro del sobre venía esto. Pesa lo suyo… tiene dos discos, letras por todas partes y una pequeña muesca. No parece una moneda de recuerdo."}, {"speaker": "Profesor Criptóbal", "text": "Todavía no sabemos para qué sirve. César escribió: «Al llegar al Casco Vello, enfrente la A a la D». Después dejó seis letras: WDOOHU."}, {"speaker": "Lola Bitácora", "text": "Voy a apoyar la maleta en ese banco. Saquemos la carta y la pieza. Quizá las letras no estén ahí de adorno."}, {"speaker": "Profesor Criptóbal", "text": "Buena idea. Acabamos de llegar a Vigo y ya tenemos un lugar que encontrar. Empecemos por leer con cuidado lo que nos ha escrito César."}];
const clockshopLines=[
  {speaker:'Lola Bitácora',text:'Aquí está: «Relojería Tic-Tac». Pero la puerta está cerrada… Profesor, este timbre tiene una ranura. ¡Parece que hay que introducir una contraseña!'},
  {speaker:'Profesor Criptóbal',text:'Qué recibimiento tan peculiar. Encima de la ranura pone «HASH MD5». Y debajo hay una placa con una sola palabra: «RELOJ».'},
  {speaker:'Lola Bitácora',text:'¿Probamos con RELOJ? Aunque, si fuera tan fácil, la señora Tic-Tac podría haber dejado una llave debajo del felpudo.'},
  {speaker:'Profesor Criptóbal',text:'Creo que nos pide la huella de esa palabra. MD5 transforma un texto en una cadena de treinta y dos caracteres. No es como los discos de César: aquí no se descifra un mensaje.'},
  {speaker:'Lola Bitácora',text:'Entonces la palabra de la placa es la pista… RELOJ, en mayúsculas. ¡Esta relojera se toma muy en serio las visitas!'},
  {speaker:'Profesor Criptóbal',text:'Examinemos el timbre de cerca. Introduzcamos la contraseña en la ranura y pulsemos el botón. A ver si la señora Tic-Tac nos recibe.'}
];

const ARRIVAL='Por fin, Vigo. Apenas hemos bajado del barco y ya tengo las botas mojadas. Espero que la carta de ese tal César justifique el viaje, Lola.';
const story={
  arrival:[{speaker:'Profesor Criptóbal',text:ARRIVAL},...dialogueLines],
  'letter-solved':[
    {speaker:'Lola Bitácora',text:'¡TALLER! Profesor, las letras dicen TALLER. César quiere que busquemos a Clotilde Tic-Tac.'},
    {speaker:'Profesor Criptóbal',text:'Muy bien, Lola. Aquellos relojes del escaparate parecen una buena pista. Acerquémonos a la tienda.'},
    {speaker:'Lola Bitácora',text:'Espero que la señora Tic-Tac tenga respuestas. Aunque, con ese apellido, seguramente solo tendrá tiempo.'}
  ],
  clockshop:clockshopLines,
  workshop:[
    {speaker:'Señora Tic-Tac',text:'Así que ustedes son los amigos de César… Pasen, pero no crean que voy a ayudar a cualquiera que sepa pulsar un timbre.'},
    {speaker:'Profesor Criptóbal',text:'Entiendo su cautela, señora Tic-Tac. ¿Cómo podemos ganarnos su confianza?'},
    {speaker:'Señora Tic-Tac',text:'Demostrando su inteligencia. Mi reloj de bolsillo se ha parado. Si consiguen arreglarlo, les ayudaré a encontrar a César.'},
    {speaker:'Lola Bitácora',text:'¡Trato hecho! Aunque espero que no tengamos que esperar sentados a que vuelva a dar la hora…'},
    {speaker:'Señora Tic-Tac',text:'Le faltan tres engranajes. Cada uno está protegido por una palabra: la primera en binario, la segunda en octal y la tercera en hexadecimal.'},
    {speaker:'Profesor Criptóbal',text:'Distintas bases para escribir números. Y esos números representan letras, ¿verdad?'},
    {speaker:'Señora Tic-Tac',text:'Exacto. Cada grupo corresponde a una letra del código ASCII. Cada palabra correcta coloca un engranaje en su sitio.'},
    {speaker:'Lola Bitácora',text:'Tres palabras, tres piezas. Profesor, empecemos con los ceros y unos. ¡Vamos a devolverle el tic-tac!'}
  ],
  'clock-solved':[
    {speaker:'Lola Bitácora',text:'¡Tic… tac… tic… tac! ¡Ha vuelto a funcionar! Los tres engranajes están en su sitio, señora Tic-Tac.'},
    {speaker:'Señora Tic-Tac',text:'Buen oído y buena cabeza. Han cumplido su parte, y yo cumpliré la mía: les ayudaré. César estuvo aquí antes de enviar aquella carta.'},
    {speaker:'Profesor Criptóbal',text:'Entonces escuchamos con atención. Cuéntenos qué ocurrió, señora Tic-Tac.'}
  ],
  'door-solved':[
    {speaker:'Lola Bitácora',text:'¡Clic! ¿Lo ha oído, profesor? El cerrojo se ha soltado. ¡La huella era la contraseña!'},
    {speaker:'Profesor Criptóbal',text:'Bien pensado, Lola. Guarda la carta y la pieza de latón. Algo me dice que César todavía tiene mucho que contarnos.'},
    {speaker:'Lola Bitácora',text:'Ya están a buen recaudo. ¿Señora Tic-Tac? Somos el profesor Criptóbal y Lola Bitácora. ¡Nos envía César!'}
  ]
};
const KEY='niebla-cifra-vigo-v1';
let state={chapterVersion:2,completed:[],doorUnlocked:false,gears:0,clockScreen:null,phase:'arrival',line:0};
try{
  const saved=JSON.parse(localStorage.getItem(KEY));
  if(saved&&Array.isArray(saved.completed)){
    const letterSolved=saved.completed.includes(0);
    if(saved.chapterVersion===2){
      state={...state,completed:letterSolved?[0]:[],doorUnlocked:saved.doorUnlocked===true,gears:Number.isInteger(saved.gears)?Math.max(0,Math.min(3,saved.gears)):0};
      if(Object.hasOwn(story,saved.phase))state.phase=saved.phase;
      state.line=Number.isInteger(saved.line)?Math.max(0,Math.min(saved.line,story[state.phase].length-1)):0;
      if(state.phase==='workshop'&&Number.isInteger(saved.clockScreen))state.clockScreen=Math.max(0,Math.min(2,state.gears,saved.clockScreen));
    }else{
      // Retain the letter clue; obsolete challenges no longer determine the story.
      state.completed=letterSolved?[0]:[];
      state.phase=letterSolved?'letter-solved':'arrival';
    }
  }
}catch{}
let toastTimer,restoringNavigation=false;
const navigationHistory=[];
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch{toast('Guardado no disponible: mantén esta pestaña abierta');}}
function toast(msg){$('#toast').textContent=msg;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),3500);}
function setScene(shop){
  const inside=state.phase==='workshop'||state.phase==='clock-solved';
  $('#game').classList.toggle('at-clockshop',shop||inside);
  $('#game').classList.toggle('inside-workshop',inside);
  $('.scene-art').src=inside?'assets/relojeria-interior.png':shop?'assets/relojeria-cerrada-v2.png':'assets/vigo-casco-vello.png';
  $('.scene-art').alt=inside?'Interior de la relojería de la señora Tic-Tac, con relojes y herramientas':shop?'Fachada de la relojería, con la puerta cerrada y una placa de timbre sin texto':'Calle del Casco Vello de Vigo con vistas a la ría';
  $('#scene').setAttribute('aria-label',inside?'Interior de la relojería Tic-Tac':shop?'Relojería Tic-Tac · Vigo':'Casco Vello de Vigo');
}
function setDialogue(text,speaker){
  $('#speaker-name').textContent=speaker;$('#dialogue-text').textContent=text;$('#dialogue-text').scrollTop=0;
  const inside=$('#game').classList.contains('inside-workshop'),lola=speaker==='Lola Bitácora',clotilde=speaker==='Señora Tic-Tac';
  const left=$('#vale-sprite'),right=$('#partner-sprite');
  left.dataset.character=inside&&speaker!=='Profesor Criptóbal'?'iris':'vale';
  right.dataset.character=inside?'clotilde':'iris';
  left.setAttribute('aria-label',left.dataset.character==='iris'?'Lola Bitácora':'Profesor Criptóbal');
  right.setAttribute('aria-label',inside?'Señora Tic-Tac':'Lola Bitácora');
  const rightSpeaking=inside?clotilde:lola,thoughtful=/[¿?]|hash|ranura|contraseña|letras|bases/i.test(text);
  $('#game').classList.toggle('partner-speaking',rightSpeaking);
  left.dataset.gesture=!rightSpeaking&&thoughtful?'think':'explain';
  right.dataset.gesture=rightSpeaking&&thoughtful?'think':'explain';
  left.classList.toggle('is-speaking',!rightSpeaking);right.classList.toggle('is-speaking',rightSpeaking);
}
function render(){
  setScene(state.phase==='clockshop'||state.phase==='door-solved');
  const lines=story[state.phase],line=lines[state.line];
  setDialogue(line.text,line.speaker);
  const end=state.phase==='clock-solved'&&state.line===lines.length-1;
  $('#dialogue-next').disabled=end;
  $('#dialogue-next').style.visibility=end?'hidden':'';
  $('#story-back').disabled=navigationHistory.length===0;
}
function enterStory(phase,line){
  if($('#modal').open)$('#modal').close();
  state.phase=phase;state.line=line;state.clockScreen=null;save();render();
}
function openModal(kicker,html){
  rememberView();
  const modal=$('#modal');
  modal.className=kicker==='LA CARTA DE CÉSAR'?'letter-screen':kicker==='EL RELOJ DE TIC-TAC'?'puzzle-screen clock-screen':'puzzle-screen door-screen';
  $('#modal-kicker').textContent=kicker;$('#modal-content').innerHTML=html;
  if(!modal.open)modal.showModal();modal.scrollTop=0;
}
function closeModal(){goBack();}
function checkAnswer(event){
  event.preventDefault();
  const answer=normalizeAnswer($('#answer').value);
  if(answer!=='TALLER'){
    $('#feedback').textContent='No encaja todavía. Prueba otra palabra.';
    $('#answer').setAttribute('aria-invalid','true');$('#answer').focus();return;
  }
  rememberView();state.completed=[0];enterStory('letter-solved',0);
}
$('#dialogue-next').addEventListener('click',()=>{
  if(state.line+1<story[state.phase].length){rememberView();enterStory(state.phase,state.line+1);return;}
  if(state.phase==='arrival')showLetter();
  else if(state.phase==='letter-solved'){rememberView();enterStory('clockshop',0);}
  else if(state.phase==='clockshop')showDoorPuzzle();
  else if(state.phase==='door-solved'){rememberView();enterStory('workshop',0);}
  else if(state.phase==='workshop')showClockPuzzle(Math.min(state.gears,2));
});
$('#close-modal').addEventListener('click',closeModal);
$('#modal').addEventListener('cancel',event=>{event.preventDefault();goBack();});
$('#fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else if(document.documentElement.requestFullscreen)await document.documentElement.requestFullscreen();else toast('El juego ya ocupa toda la ventana. Este navegador no admite el modo de pantalla completa.');}catch{toast('El navegador no permite ampliar más la ventana. El juego sigue ocupando todo el espacio disponible.');}});
document.addEventListener('fullscreenchange',()=>{const active=Boolean(document.fullscreenElement);$('#fullscreen').setAttribute('aria-pressed',String(active));$('#fullscreen').setAttribute('aria-label',active?'Salir de pantalla completa':'Activar pantalla completa');});
function showLetter(){
  openModal('LA CARTA DE CÉSAR',`<button type="button" id="letter-back" class="round-control" aria-label="Anterior" title="Anterior">${icon('arrow')}</button><div class="letter-and-object"><section class="letter-evidence" aria-label="Carta recibida antes del viaje">${LETTER_HTML}</section><section class="object-panel" aria-label="Pieza de latón y solución"><div id="brass-object"></div><form id="letter-answer-form"><div class="letter-answer-row"><input id="answer" type="text" aria-label="Solución de la carta" aria-describedby="feedback" placeholder="Tu respuesta…" autocomplete="off" spellcheck="false" maxlength="256" required><button type="submit" class="primary-button illustrated-resolve"><span>Resolver</span></button></div><div class="feedback" id="feedback" role="status" aria-live="polite"></div></form></section></div>`);
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


// Keep actual modal nodes: inputs, disk alignment and listeners survive Back.
function captureView(){
  const modal=$('#modal');
  if(modal.open)return {type:'screen',nodes:[...$('#modal-content').childNodes],classes:modal.className,kicker:$('#modal-kicker').textContent,scroll:modal.scrollTop,phase:state.phase,line:state.line,clockIndex:modal.classList.contains('clock-screen')?Number($('#modal-content').dataset.clockIndex):null};
  return {type:'story',phase:state.phase,line:state.line};
}
function rememberView(){if(restoringNavigation)return;navigationHistory.push(captureView());$('#story-back').disabled=false;}
function goBack(){
  const previous=navigationHistory.pop();if(!previous)return;
  enterStory(previous.phase,previous.line);
  if(previous.type==='screen'){
    const modal=$('#modal');modal.className=previous.classes;
    $('#modal-kicker').textContent=previous.kicker;
    $('#modal-content').replaceChildren(...previous.nodes);
    modal.showModal();modal.scrollTop=previous.scroll;fitLetterScreen();
    if(previous.clockIndex!==null){$('#modal-content').dataset.clockIndex=previous.clockIndex;state.clockScreen=previous.clockIndex;syncClockView();save();}
  }else if(previous.type==='letter'||previous.type==='door'||previous.type==='clock'){
    restoringNavigation=true;
    try{previous.type==='letter'?showLetter():previous.type==='clock'?showClockPuzzle(previous.index):showDoorPuzzle();}finally{restoringNavigation=false;}
  }
  $('#story-back').disabled=navigationHistory.length===0;
}
$('#story-back').addEventListener('click',goBack);
function restoreCheckpointHistory(){
  // Rebuild only the current narrative path, never obsolete challenges.
  const phases=['arrival','letter-solved','clockshop','door-solved','workshop','clock-solved'];
  for(const phase of phases){
    const count=phase===state.phase?state.line:story[phase].length;
    for(let line=0;line<count;line++)navigationHistory.push({type:'story',phase,line});
    if(phase===state.phase){
      if(state.clockScreen!==null){navigationHistory.push({type:'story',phase,line:state.line});for(let index=0;index<state.clockScreen;index++)navigationHistory.push({type:'clock',phase,line:state.line,index});}
      break;
    }
    if(phase==='arrival')navigationHistory.push({type:'letter',phase,line:story[phase].length-1});
    if(phase==='clockshop')navigationHistory.push({type:'door',phase,line:story[phase].length-1});
    if(phase==='workshop')for(let index=0;index<3;index++)navigationHistory.push({type:'clock',phase,line:story[phase].length-1,index});
  }
}
function showDoorPuzzle(){
  openModal('ENIGMA 002 · HASH MD5',`<form id="door-form" class="bell-closeup" aria-label="El timbre de Clotilde: HASH MD5, placa RELOJ"><img class="bell-art" src="assets/timbre-reloj.png" alt="Timbre de latón sobre la pared de granito: inscripción HASH MD5, una ranura, un pulsador redondo y una placa que dice RELOJ" draggable="false"><input id="door-answer" type="text" aria-label="Contraseña del timbre" aria-describedby="door-feedback" autocomplete="off" autocapitalize="off" spellcheck="false" maxlength="256" placeholder="Contraseña…" required><button type="submit" class="bell-push" aria-label="Pulsar el timbre" title="Pulsar el timbre"></button><div id="door-feedback" role="status" aria-live="polite"></div></form>`);
  $('#door-answer').addEventListener('input',()=>{$('#door-answer').removeAttribute('aria-invalid');$('#door-feedback').textContent='';});
  $('#door-form').addEventListener('submit',event=>{
    event.preventDefault();const answer=normalizeAnswer($('#door-answer').value).toLowerCase();
    if(answer!=='ce13c02063cd17f3a7346cda69a74ce8'){
      $('#door-feedback').textContent='El timbre no responde. La contraseña no encaja.';
      $('#door-answer').setAttribute('aria-invalid','true');$('#door-answer').focus();return;
    }
    rememberView();state.doorUnlocked=true;enterStory('door-solved',0);
  });
}

const clockWords=[
  {base:2,name:'Binario',word:'LUZ',width:8},
  {base:8,name:'Octal',word:'HORA',width:3},
  {base:16,name:'Hexadecimal',word:'TIEMPO',width:2}
];
function syncClockView(){
  const index=Number($('#modal-content').dataset.clockIndex),solved=state.gears>index;
  document.querySelectorAll('.repair-gear').forEach((gear,i)=>gear.hidden=i>=state.gears);
  $('.repair-clock').classList.toggle('is-running',state.gears===3);
  $('.repair-clock').setAttribute('aria-label',`Reloj de bolsillo con ${state.gears} de 3 engranajes instalados${state.gears===3?', funcionando':''}`);
  $('#clock-answer').readOnly=solved;
  $('#clock-check').hidden=solved;$('#clock-continue').hidden=!solved;
  $('#clock-form').classList.toggle('is-solved',solved);
  const complete=index===2&&state.gears===3;
  $('.clock-clues').classList.toggle('is-complete',complete);
  if(complete){$('#clock-continue').textContent='Continuar';$('#clock-continue').setAttribute('aria-label','Continuar');$('#clock-continue').title='Continuar';}
  if(solved){$('#clock-answer').value=clockWords[index].word;$('#clock-feedback').textContent=state.gears===3?'¡Tic-tac! El reloj vuelve a funcionar.':'¡Encaja! Un engranaje más en su sitio.';}
}
function showClockPuzzle(index){
  index=Math.max(0,Math.min(index,state.gears,2));
  const puzzle=clockWords[index],code=[...puzzle.word].map(letter=>letter.charCodeAt(0).toString(puzzle.base).toUpperCase().padStart(puzzle.width,'0'));
  openModal('EL RELOJ DE TIC-TAC',`<div class="clock-workbench"><div class="repair-clock" role="img" aria-label="Reloj de bolsillo con huecos para tres engranajes"><img class="repair-clock-art" src="assets/reloj-bolsillo.png" alt="" draggable="false">${[0,1,2].map(i=>`<img class="repair-gear gear-${i}" src="assets/engranaje-reloj.png" alt="" hidden>`).join('')}</div><div class="clock-clues"><div class="clock-note" role="group" aria-label="Nota en ${puzzle.name.toLowerCase()}, base ${puzzle.base}"><div class="encoded-word">${code.map(group=>`<span>${group}</span>`).join(' ')}</div></div><form id="clock-form"><label class="numbered-answer" for="clock-answer"><span class="answer-number" aria-hidden="true">${index+1}</span><input id="clock-answer" type="text" aria-label="Palabra de la prueba ${index+1}" aria-describedby="clock-feedback" placeholder="…" autocomplete="off" spellcheck="false" maxlength="256" required></label><button id="clock-check" type="submit" class="clock-action" aria-label="Comprobar palabra" title="Comprobar palabra">${icon('check')}</button><button id="clock-continue" type="button" class="clock-action" aria-label="${index===2?'Volver con Tic-Tac':'Siguiente pieza'}" title="${index===2?'Volver con Tic-Tac':'Siguiente pieza'}" hidden>${icon('arrow')}</button><div id="clock-feedback" class="visually-hidden" role="status" aria-live="polite"></div></form></div></div>`);
  $('#modal-content').dataset.clockIndex=index;state.clockScreen=index;save();syncClockView();
  $('#clock-answer').addEventListener('input',()=>{$('#clock-answer').removeAttribute('aria-invalid');$('#clock-feedback').textContent='';});
  $('#clock-form').addEventListener('submit',event=>{
    event.preventDefault();
    const answer=normalizeAnswer($('#clock-answer').value);
    if(answer!==puzzle.word){$('#clock-feedback').textContent='Esa palabra no encaja. Revisa cada grupo y su base.';$('#clock-answer').setAttribute('aria-invalid','true');$('#clock-answer').focus();return;}
    if(state.gears===index)state.gears++;save();syncClockView();
    if(index<2){showClockPuzzle(index+1);$('#clock-answer').focus();}
    else $('#clock-continue').focus();
  });
  $('#clock-continue').addEventListener('click',()=>{if(index<2)showClockPuzzle(index+1);else{rememberView();enterStory('clock-solved',0);}});
}

restoreCheckpointHistory();
render();
if(state.clockScreen!==null){restoringNavigation=true;try{showClockPuzzle(state.clockScreen);}finally{restoringNavigation=false;}}
save();
