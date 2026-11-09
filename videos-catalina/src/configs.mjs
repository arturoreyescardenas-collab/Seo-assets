const card=(top)=>({name:'Catalina Reyes Meza',top,d:0.9,foot:'encuadra moments',year:'2026',
 stats:[{v:26,k:'PACIENTES'},{v:90,u:'hrs',k:'ATENCIÓN'},{v:4,k:'REGIONES'},{v:'5.0',u:'/5.0 ★',k:'EVALUACIÓN'}]});

export const catalina={name:'video-catalina',scenes:[
 {dur:5,type:'hero',lines:[
  {h:'Recordemos',d:0.3},{h:'<b>ese camino que comenzaste</b>',d:0.9},{h:'tiempo atrás',d:1.5},
  {c:'sub',h:'Un año caminando junto a quienes <b>confiaron en ti</b>',d:2.4}]},
 {dur:8.5,type:'tl',top:560,items:[
  {icon:'nav',title:'Catalina,',body:'esta ruta tiene <b>tu nombre</b>',d:0.3,gap:50},
  {icon:'heart',hl:1,big:26,body:'pacientes recorrieron <b>parte de su camino contigo</b>',d:2.0,gap:50},
  {icon:'hour',big:90,unit:'hrs',body:'dedicadas a acompañarlos en su bienestar, eso equivale a <b>3 días completos</b>',d:4.6}]},
 {dur:7.5,type:'tl',top:470,items:[
  {icon:'nav',title:'Catalina,',body:'tus pacientes dejaron <b>testimonio de lo que progresaron</b> a tu lado',d:0.3,gap:50},
  {icon:'star',hl:1,big:8,body:'pacientes escribieron una evaluación sobre <b>lo que significó avanzar contigo</b>',d:2.2,gap:50},
  {icon:'chat',title:'Grato',body:'es como te describen tus pacientes, lo que se traduce en un promedio de <b><span style="white-space:nowrap">5.0/5.0 <span style="color:#ffd45a">★</span></span></b>',d:4.4}]},
 {dur:6.5,type:'rank',top:400,head:'Todo camino comienza en algún lugar…',rows:[
  {n:'03',t:'Psicoterapia online - Valor diferencia…',c:'2 CONSULTAS',dd:0.9},
  {n:'02',t:'Tu Espacio Flexible (Pre o Post ORIGE…',c:'43 CONSULTAS',dd:1.8},
  {n:'01',hl:1,t:'Un recorrido estructurado, no …',c:'48 CONSULTAS',d:'Fue el <b>punto de partida</b> que más pacientes eligieron contigo este año',dd:2.9}]},
 {dur:6.5,type:'tl',top:580,items:[
  {icon:'nav',title:'Catalina,',body:'hoy tu voz llega <b>más lejos que nunca</b>',d:0.3,gap:110},
  {icon:'pin',hl:1,title:'Santiago',body:'<b>36</b> agendamientos son de esta ciudad',d:1.9,gap:110},
  {icon:'route',title:'Otras ciudades',body:'<b>18</b> agendamientos fuera de Santiago',d:3.5}]},
 {dur:7,type:'months',head:'Haciendo de <b>octubre</b>',sub:'el mes cuando más caminos se cruzaron con el tuyo',big:15,
  body:'consultas en un solo mes. Y aun así, <b>estuviste ahí para cada una</b>',
  months:[['ENE',2],['FEB',2],['MAR',10],['ABR',11],['MAY',14],['JUN',9],['JUL',7],['AGO',13],['SEP',10],['OCT',15]]},
 {dur:8,type:'tl',small:1,head:'Encontraste nuevas formas de abrir tu <b>consulta al mundo</b>',headTop:340,top:640,items:[
  {icon:'search',title:'1.338 apariciones',body:'en búsquedas de Google',d:1.0,gap:30},
  {icon:'home',title:'867',body:'visitas a tu perfil de Encuadrado este año',d:2.4,gap:30},
  {icon:'users',hl:1,big:22,body:'pacientes llegaron por primera vez a través de tu <b>perfil público de Encuadrado</b>',d:4.0}]},
 {dur:5.5,type:'tl',head:'<b style="font-size:120px;font-weight:800">enc.do</b><br>abrió una nueva puerta',headTop:480,top:900,items:[
  {icon:'click',hl:1,big:26,body:'visitas a tu perfil llegaron desde tu <b>tarjeta digital</b>',d:1.4}]},
 {dur:8.5,type:'tl',small:1,head:'Catalina, tu tiempo <b>rindió más</b>',headTop:330,top:560,items:[
  {icon:'mic',title:'Transcriptor',body:'Te dio <b>17 horas</b> más presente en tus sesiones',d:0.8},
  {icon:'calc',title:'Agenda y recordatorios',body:'Te ahorró <b>13 horas</b> agendando y confirmando',d:2.0},
  {icon:'case',title:'Trabajo administrativo',body:'Te ahorró <b>3 horas</b> de papeleo',d:3.2,gap:20},
  {icon:'clock',hl:1,big:33,unit:'hrs libres',body:'Equivale a <b>4 jornadas</b> de trabajo que volvieron a ser tuyas',d:4.6}]},
 {dur:9,type:'tl',head:'Catalina,<br>detrás de cada peso hay <b>una persona que confió en ti</b>',headTop:330,top:760,items:[
  {icon:'dollar',hl:1,big:2163000,pre:'$',bs:112,body:'fue lo que <b>generó tu trabajo</b> este año',d:1.8,gap:60},
  {icon:'trend',big:500,pre:'+',suf:'%',bs:170,body:'creciste respecto al año pasado. Tu consulta <b>no solo avanzó, creció</b>',d:4.6}]},
 {dur:6,type:'card',head:'Este fue mi año <b>con Encuadrado</b>',headTop:380,...card(640)},
]};

export const social={name:'video-redes',scenes:[
 {dur:3.2,type:'hero',center:1,bgphoto:1,lines:[{h:'Este fue mi año',d:0.3},{h:'<b>en números</b>',d:0.9}]},
 {dur:3.8,type:'stat',tag:'Mi 2026',icon:'heart',big:26,body:'personas recorrieron <b>parte de su camino conmigo</b>'},
 {dur:3.8,type:'stat',tag:'Mi 2026',icon:'hour',big:90,unit:'hrs',body:'dedicadas a acompañar su bienestar. <b>3 días completos.</b>'},
 {dur:4,type:'stat',tag:'Mi 2026',icon:'star',big:'5.0',bs:300,unit:'/5.0 <span class="star">★</span>',body:'promedio en las <b>8 evaluaciones</b> que escribieron mis pacientes'},
 {dur:4,type:'stat',tag:'Mi 2026',icon:'pin',big:4,unit:'regiones',body:'Terapia online: mi voz llega <b>más lejos que nunca</b>'},
 {dur:4.4,type:'stat',tag:'Mi 2026',icon:'clock',big:17,unit:'hrs',body:'más presente en mis sesiones gracias a la <b>tecnología</b>'},
 {dur:6,type:'card',tag:'',...card(200),avatar:1,
  cta:{top:1290,d:2.4,h:'Si estás pensando en empezar, <b>escríbeme</b>',handle:'@ps.catalinareyes'}},
]};
