// Musica e suoni dei Gattini guerrieri 3D (richiesta del 12 novembre 2026
// Nessun file audio: tutto è sintetizzato al momento con Web Audio, quindi non ci sono diritti d'autore da rispettare.
// Musica: bordone basso, tamburo a cornice, sonaglio e un flauto pentatonico in re minore, con un'eco leggera.
// Durante cerimonie e racconti il tamburo si fa più solenne; in battaglia il ritmo si fa un po' più fitto.
// Suoni: miagolii quando un gatto parla, fusa nelle scene di affetto, un cinguettio alla cattura, un rintocco ai punti.
// Tasto M o pulsante 🔊 in basso a sinistra: tre stati (musica e suoni, soltanto suoni, silenzio), scelta salvata nel browser.
(()=>{
 const LG=(document.documentElement.lang||'it').slice(0,2);
 let ac=null, master=null, musica=null, sfx=null, eco=null, prossimo=0, passo=0, modo=({off:2,suoni:1})[localStorage.getItem('gattiniAudio')]||0, attivo=modo<2, ambiente=null, densita=1, riposoFino=0, tono=1;
 const BPM=74, OTTAVO=60/BPM/2;
 const SCALA=[146.83,174.61,196.0,220.0,261.63,293.66,349.23,392.0]; // re minore pentatonico: re fa sol la do
 function avvia(){ if(ac) { if(ac.state==='suspended') ac.resume(); return; }
  try{ ac=new (window.AudioContext||window.webkitAudioContext)(); }catch(e){ return; }
  master=ac.createGain(); master.gain.value=attivo?1:0; const comp=ac.createDynamicsCompressor(); comp.threshold.value=-14; comp.ratio.value=6; master.connect(comp); comp.connect(ac.destination);
  musica=ac.createGain(); musica.gain.value=modo===0?0.16:0; musica.connect(master);
  sfx=ac.createGain(); sfx.gain.value=0.35; sfx.connect(master);
  // eco: un ritardo con un po' di ritorno, filtrato, fa da riverbero economico
  eco=ac.createDelay(2); eco.delayTime.value=OTTAVO*3; const fb=ac.createGain(); fb.gain.value=0.32; const lp=ac.createBiquadFilter(); lp.type='lowpass'; lp.frequency.value=1800;
  eco.connect(lp); lp.connect(fb); fb.connect(eco); lp.connect(musica);
  bordone(); prossimo=ac.currentTime+0.1; setInterval(programma,90); caricaVoci(); }
 function bordone(){ // re e la gravi, con un respiro lento del volume
  const g=ac.createGain(); g.gain.value=0.22; const f=ac.createBiquadFilter(); f.type='lowpass'; f.frequency.value=380; f.connect(g); g.connect(musica);
  for(const [fr,v] of [[73.42,0.5],[110,0.32],[146.83,0.12]]){ const o=ac.createOscillator(); o.type='sawtooth'; o.frequency.value=fr; o.detune.value=Math.random()*8-4; const og=ac.createGain(); og.gain.value=v; o.connect(og); og.connect(f); o.start(); }
  const lfo=ac.createOscillator(); lfo.frequency.value=0.07; const lg=ac.createGain(); lg.gain.value=0.09; lfo.connect(lg); lg.connect(g.gain); lfo.start(); }
 const rumore=(()=>{ let b=null; return ()=>{ if(b) return b; b=ac.createBuffer(1,ac.sampleRate,ac.sampleRate); const d=b.getChannelData(0); for(let i=0;i<d.length;i++) d[i]=Math.random()*2-1; return b; }; })();
 function tamburo(t,forte,grave){ // tamburo a cornice: un tonfo morbido che scende di tono
  const o=ac.createOscillator(), g=ac.createGain(); o.type='sine'; o.frequency.setValueAtTime(grave?95:130,t); o.frequency.exponentialRampToValueAtTime(grave?42:58,t+0.25);
  g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(0.9*forte,t+0.008); g.gain.exponentialRampToValueAtTime(0.0001,t+(grave?0.9:0.45));
  o.connect(g); g.connect(musica); o.start(t); o.stop(t+1); }
 function tocco(t,v){ // il bordo del tamburo o il sonaglio: un soffio di rumore filtrato
  const s=ac.createBufferSource(); s.buffer=rumore(); const f=ac.createBiquadFilter(); f.type='bandpass'; f.frequency.value=v>0.3?2400:6500; f.Q.value=v>0.3?1.2:0.8; const g=ac.createGain();
  g.gain.setValueAtTime(v,t); g.gain.exponentialRampToValueAtTime(0.0001,t+(v>0.3?0.09:0.05)); s.connect(f); f.connect(g); g.connect(musica); s.start(t,Math.random()*0.5,0.12); }
 function flauto(t,fr,dur){ // flauto di canna: sinusoide con vibrato lento e un filo di fiato
  const o=ac.createOscillator(), g=ac.createGain(), vib=ac.createOscillator(), vg=ac.createGain(); o.type='triangle'; o.frequency.value=fr;
  vib.frequency.value=5; vg.gain.value=fr*0.012; vib.connect(vg); vg.connect(o.frequency);
  g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(0.16,t+0.09); g.gain.setValueAtTime(0.14,t+dur*0.7); g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
  const f=ac.createBiquadFilter(); f.type='lowpass'; f.frequency.value=2200; o.connect(f); f.connect(g); g.connect(musica); g.connect(eco);
  o.start(t); vib.start(t); o.stop(t+dur+0.05); vib.stop(t+dur+0.05); }
 let frase=[], nota=3;
 function umore(){ try{ if(typeof G==='undefined'||!G) return 'calmo'; if(G.raid) return 'guerra'; if((typeof scena!=='undefined'&&scena&&(scena.tipo==='cerimonia'||scena.tipo==='rito'))||(typeof recitaAtt!=='undefined'&&recitaAtt)||G.funerale||G.riposoFinale) return 'solenne'; }catch(e){} return 'calmo'; }
 function programma(){ if(!ac||modo!==0) return; if(prossimo<ac.currentTime) prossimo=ac.currentTime+0.05;
  while(prossimo<ac.currentTime+0.4){ const t=prossimo, i=passo%16, u=umore();
   if(passo%128===0){ densita=u==='calmo'?[1,1,0.6,0.6,0.3][Math.floor(Math.random()*5)]:1; if(u==='calmo'&&Math.random()<0.22) riposoFino=ac.currentTime+20+Math.random()*20; if(Math.random()<0.4) tono=[1,1.189,0.891,1][Math.floor(Math.random()*4)]; }
   if(u==='calmo'&&ac.currentTime<riposoFino){ prossimo+=OTTAVO; passo++; continue; } // una pausa: resta soltanto l'ambiente
   if(u==='solenne'){ if(i===0||i===8) tamburo(t,0.9,true); if(i===12) tamburo(t,0.5,false); }
   else if(u==='guerra'){ if([0,3,6,8,11,14].includes(i)) tamburo(t,i%8===0?0.8:0.45,false); if(i%2) tocco(t,0.06); if(i===4||i===12) tocco(t,0.35); }
   else { if(i===0) tamburo(t,0.7*Math.max(0.5,densita),true); if(densita>0.5&&(i===6||i===10)) tamburo(t,0.35,false); if(densita>0.25&&(i===4||i===12)) tocco(t,0.18); if(densita>0.5&&i%2) tocco(t,0.035); if(densita===1&&passo%64===62) tamburo(t,0.4,false); }
   // flauto: ogni due battute, a volte, una frase breve che sale e scende sulla scala
   if(passo%32===0) { frase=[]; if(Math.random()<(u==='guerra'?0.35:0.6)){ const n=3+Math.floor(Math.random()*4); let s=0; for(let k=0;k<n;k++){ nota=Math.max(0,Math.min(SCALA.length-1,nota+[-2,-1,-1,1,1,2][Math.floor(Math.random()*6)])); s+=[2,2,3,4][Math.floor(Math.random()*4)]; frase.push([s,nota]); } } }
   for(const [s,n] of frase) if((passo%32)===s) flauto(t,SCALA[n]*tono*(u==='solenne'?0.5:1),OTTAVO*(u==='solenne'?4:2.6));
   prossimo+=OTTAVO; passo++; } }
 // --- suoni gatteschi ---
 // miagolii registrati (js/suoni.js, CC0): un adulto e un cucciolo; se il browser non sa leggerli, restano quelli sintetici
 const voci={};
 function caricaVoci(){ const S=window.SUONI_OGG; if(!S) return; for(const k of ['miao','cucciolo']){ try{ const b=atob(S[k]), u=new Uint8Array(b.length); for(let i=0;i<b.length;i++) u[i]=b.charCodeAt(i); ac.decodeAudioData(u.buffer,buf=>{ voci[k]=buf; },()=>{}); }catch(e){} } }
 function miaoVero(alto,opt){ const buf=alto?(voci.cucciolo||voci.miao):voci.miao; if(!buf) return false; const t=ac.currentTime+0.01+(opt.dopo||0), s=ac.createBufferSource(), g=ac.createGain(); s.buffer=buf;
  const rif=alto?(voci.cucciolo?820:480):480; let r=(opt.base||rif)/rif*(0.9+Math.random()*0.22); if(opt.lungo>1.5) r*=0.72; s.playbackRate.value=Math.max(0.55,Math.min(1.7,r)); // l'altezza cambia ogni volta; i miagolii solenni sono più lenti e gravi
  g.gain.value=Math.min(1,(opt.vol||0.22)*3.2); s.connect(g); g.connect(sfx); if(opt.lungo>1.5) g.connect(eco); s.start(t); return true; }
 // miagolio: ogni volta un po' diverso (altezza, durata, profilo); opt: {dopo, lungo, vol, base}
 function miao(alto,opt={}){ if(!ac||!attivo) return; window.contaMiao=(window.contaMiao||0)+1; if(miaoVero(alto,opt)) return; const t=ac.currentTime+0.01+(opt.dopo||0), b=(opt.base||(alto?700:480))*(0.88+Math.random()*0.27), d=(opt.lungo||1)*(0.42+Math.random()*0.2), su=1.3+Math.random()*0.3, o=ac.createOscillator(), f=ac.createBiquadFilter(), g=ac.createGain(); // contaMiao serve alle prove: quanti miagolii sono partiti
  o.type='sawtooth'; o.frequency.setValueAtTime(b,t); o.frequency.linearRampToValueAtTime(b*su,t+d*0.33); o.frequency.linearRampToValueAtTime(b*(0.75+Math.random()*0.2),t+d);
  f.type='bandpass'; f.Q.value=3; f.frequency.setValueAtTime(900,t); f.frequency.linearRampToValueAtTime(1500+Math.random()*400,t+d*0.38); f.frequency.linearRampToValueAtTime(800,t+d);
  g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(opt.vol||0.22,t+0.05); g.gain.exponentialRampToValueAtTime(0.0001,t+d+0.04);
  o.connect(f); f.connect(g); g.connect(sfx); o.start(t); o.stop(t+d+0.08); }
 // un coro: n voci, adulte e di cucciolo, sparse lungo la durata della scena
 function coro(n,dur,opt){ if(!ac||!attivo) return; for(let k=0;k<n;k++) miao(opt.alto||k%3===2,{dopo:0.15+k*(Math.max(0.6,dur-0.6)/n)+Math.random()*0.15,vol:(opt.vol||0.16)*(0.8+Math.random()*0.4),lungo:opt.lungo,base:opt.alto?undefined:[430,480,540,400][k%4]}); }
 // miagolii dei momenti importanti (richiesta del 12 novembre 2026): gioia in coro, allarme, saluto solenne, vocina di cucciolo
 let ultMom=0;
 window.suonoMiao=tipo=>{ if(!ac||!attivo) return; const ora=performance.now(); if(ora-ultMom<1200) return; ultMom=ora;
  if(tipo==='gioia'){ for(let k=0;k<4;k++) miao(k%2===0,{dopo:k*0.22+Math.random()*0.08,vol:0.16}); }
  else if(tipo==='allarme'){ miao(false,{base:560,lungo:0.6,vol:0.26}); miao(false,{base:600,lungo:0.6,vol:0.26,dopo:0.34}); }
  else if(tipo==='solenne'){ miao(false,{base:330,lungo:2.2,vol:0.2}); miao(false,{base:290,lungo:2.4,vol:0.14,dopo:0.9}); }
  else if(tipo==='cucciolo'){ miao(true,{base:880,lungo:0.7,vol:0.2}); miao(true,{base:940,lungo:0.6,vol:0.16,dopo:0.3}); }
  else miao(false,{vol:0.2}); };
 function fusa(dur=1.8){ if(!ac||!attivo) return; const t=ac.currentTime+0.01, s=ac.createBufferSource(); s.buffer=rumore(); s.loop=true;
  const f=ac.createBiquadFilter(); f.type='lowpass'; f.frequency.value=420; const am=ac.createGain(); am.gain.value=0.5; const lfo=ac.createOscillator(); lfo.frequency.value=24; const lg=ac.createGain(); lg.gain.value=0.5; lfo.connect(lg); lg.connect(am.gain);
  const g=ac.createGain(); g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(0.9,t+0.3); g.gain.setValueAtTime(0.9,t+dur-0.4); g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
  s.connect(f); f.connect(am); am.connect(g); g.connect(sfx); s.start(t); lfo.start(t); s.stop(t+dur); lfo.stop(t+dur); }
 function cip(){ if(!ac||!attivo) return; const t=ac.currentTime+0.01; for(let k=0;k<2;k++){ const o=ac.createOscillator(), g=ac.createGain(), u=t+k*0.11; o.type='sine'; o.frequency.setValueAtTime(2600,u); o.frequency.exponentialRampToValueAtTime(3600,u+0.06);
  g.gain.setValueAtTime(0.0001,u); g.gain.exponentialRampToValueAtTime(0.08,u+0.01); g.gain.exponentialRampToValueAtTime(0.0001,u+0.08); o.connect(g); g.connect(sfx); o.start(u); o.stop(u+0.1); } }
 let ultRint=0, ultGraf=0;
 function rintocco(){ if(!ac||!attivo) return; if(performance.now()-ultRint<400) return; ultRint=performance.now(); const t=ac.currentTime+0.01; for(const [fr,r] of [[880,0],[1318.5,0.09]]){ const o=ac.createOscillator(), g=ac.createGain(); o.type='sine'; o.frequency.value=fr;
  g.gain.setValueAtTime(0.0001,t+r); g.gain.exponentialRampToValueAtTime(0.12,t+r+0.01); g.gain.exponentialRampToValueAtTime(0.0001,t+r+1.1); o.connect(g); g.connect(sfx); g.connect(eco); o.start(t+r); o.stop(t+r+1.2); } }
 function graffio(){ if(!ac||!attivo) return; if(performance.now()-ultGraf<150) return; ultGraf=performance.now(); const t=ac.currentTime+0.01, s=ac.createBufferSource(); s.buffer=rumore(); const f=ac.createBiquadFilter(); f.type='bandpass'; f.frequency.setValueAtTime(3500,t); f.frequency.exponentialRampToValueAtTime(1500,t+0.18); f.Q.value=1.5;
  const g=ac.createGain(); g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(0.25,t+0.02); g.gain.exponentialRampToValueAtTime(0.0001,t+0.22); s.connect(f); f.connect(g); g.connect(sfx); s.start(t,Math.random()*0.5,0.25); }
 window.suonoMiaoGrande=()=>{ if(!ac||!attivo) return; for(let k=0;k<14;k++) miao(k%3===0,{base:[300,360,420,520,640][k%5],lungo:2.4+Math.random()*1.2,vol:0.1+Math.random()*0.06,dopo:k*0.42+Math.random()*0.3}); }; // il grande miagolio del clan, per l'addio (js/storie.js)
 window.suonoRombo=()=>{ if(!ac||!attivo) return; const t=ac.currentTime+0.05; for(let k=0;k<3;k++){ const u=t+k*1.5, o=ac.createOscillator(), g=ac.createGain(), f=ac.createBiquadFilter(); o.type='sawtooth'; o.frequency.setValueAtTime(70,u); o.frequency.linearRampToValueAtTime(115,u+0.6); o.frequency.linearRampToValueAtTime(70,u+1.2); f.type='lowpass'; f.frequency.value=260;
  g.gain.setValueAtTime(0.0001,u); g.gain.exponentialRampToValueAtTime(0.5,u+0.5); g.gain.exponentialRampToValueAtTime(0.0001,u+1.3); o.connect(f); f.connect(g); g.connect(sfx); o.start(u); o.stop(u+1.4); } }; // il rombo nella notte (js/storie.js)
 window.suonoGraffio=graffio; // un soffio-graffio a ogni colpo del duello
 // --- suoni d'ambiente (rilettura del 12 novembre 2026): vento, acqua vicino al fiume e ai laghi, grilli di notte, uccelli di giorno
 function avviaAmbiente(){ if(ambiente||!ac) return; const bus=ac.createGain(); bus.gain.value=0.5; bus.connect(master);
  const sorgente=(tipo,fr,q)=>{ const s=ac.createBufferSource(); s.buffer=rumore(); s.loop=true; const f=ac.createBiquadFilter(); f.type=tipo; f.frequency.value=fr; f.Q.value=q; const g=ac.createGain(); g.gain.value=0; s.connect(f); f.connect(g); g.connect(bus); s.start(); return {f,g}; };
  const vento=sorgente('bandpass',480,0.6), acqua=sorgente('bandpass',1500,0.9);
  const gr=ac.createOscillator(); gr.frequency.value=4400; const grG=ac.createGain(); grG.gain.value=0; const lfo=ac.createOscillator(); lfo.type='square'; lfo.frequency.value=13; const lg=ac.createGain(); lg.gain.value=0; lfo.connect(lg); lg.connect(grG.gain); gr.connect(grG); grG.connect(bus); gr.start(); lfo.start();
  ambiente={bus,vento,acqua,grG,lg,uccello:0}; }
 function uccello(){ const t=ac.currentTime+0.01, b=1800+Math.random()*1400, n=2+Math.floor(Math.random()*3); for(let k=0;k<n;k++){ const o=ac.createOscillator(), g=ac.createGain(), u=t+k*0.16; o.type='sine'; o.frequency.setValueAtTime(b,u); o.frequency.linearRampToValueAtTime(b*(k%2?0.8:1.25),u+0.1);
  g.gain.setValueAtTime(0.0001,u); g.gain.exponentialRampToValueAtTime(0.035,u+0.02); g.gain.exponentialRampToValueAtTime(0.0001,u+0.13); o.connect(g); g.connect(ambiente.bus); o.start(u); o.stop(u+0.15); } }
 setInterval(()=>{ if(!ac||!attivo) return; avviaAmbiente(); const A=ambiente, t=ac.currentTime; let vento=0.012, acq=0, grilli=0, giorno=false;
  try{ if(typeof G!=='undefined'&&G&&G.p&&!paused){ const p=G.p, fase=(G.t%MOON)/MOON, notte=fase>0.6?Math.sin((fase-0.6)/0.4*Math.PI):0; giorno=notte<0.15;
    if(G.dentro){ vento=0.004; } else { vento=0.02+0.012*Math.sin(t*0.13); grilli=notte*0.012;
     let d=Math.max(0,Math.max(FX0-p.x,p.x-FX1)); for(const k of ['lago','stagno']){ const l=L[k]; d=Math.min(d,Math.max(0,Math.hypot(p.x-l.x,p.y-l.y)-l.r)); } acq=0.05*Math.max(0,1-d/260); } } }catch(e){}
  A.vento.g.gain.setTargetAtTime(vento,t,0.8); A.vento.f.frequency.setTargetAtTime(420+160*Math.sin(t*0.21),t,1); A.acqua.g.gain.setTargetAtTime(acq,t,0.6); A.grG.gain.setTargetAtTime(grilli*0.5,t,0.8); A.lg.gain.setTargetAtTime(grilli*0.5,t,0.8);
  if(giorno&&typeof G!=='undefined'&&G&&!G.dentro&&t>A.uccello){ A.uccello=t+4+Math.random()*9; uccello(); } },400);
 document.addEventListener('visibilitychange',()=>{ if(!ac) return; if(document.hidden) ac.suspend(); else if(attivo) ac.resume(); });
 window.vociPronte=()=>Object.keys(voci).join(',');
 window.statoAudio=()=>ac?ac.state:"spento"; // per le prove
 // --- l’interruttore ---
 const bt=document.createElement('div'); bt.id='audioBtn';
 const st=document.createElement('style'); st.textContent='#audioBtn{position:absolute;left:14px;bottom:14px;z-index:32;width:40px;height:40px;border-radius:50%;background:rgba(12,9,22,.7);border:1px solid rgba(255,220,150,.45);display:flex;align-items:center;justify-content:center;font-size:20px;cursor:pointer;user-select:none}';
 document.head.appendChild(st);
 const aggiornaBt=()=>{ bt.textContent=['🔊','🔉','🔇'][modo]; bt.title=({it:['Musica e suoni','Soltanto i suoni','Silenzio'],en:['Music and sounds','Sounds only','Silence'],fr:['Musique et sons','Sons seulement','Silence']}[LG]||['Musica e suoni','Soltanto i suoni','Silenzio'])[modo]+' (M)'; };
 function commuta(){ modo=(modo+1)%3; attivo=modo<2; localStorage.setItem('gattiniAudio',['on','suoni','off'][modo]); avvia(); if(master){ master.gain.setTargetAtTime(attivo?1:0,ac.currentTime,0.2); musica.gain.setTargetAtTime(modo===0?0.16:0,ac.currentTime,0.3); } aggiornaBt(); }
 bt.addEventListener('click',e=>{ e.stopPropagation(); commuta(); });
 addEventListener('DOMContentLoaded',()=>{ (document.getElementById('scena3')||document.body).appendChild(bt); aggiornaBt();
  // il browser lascia partire l'audio soltanto dopo un gesto del giocatore
  const primo=()=>{ avvia(); removeEventListener('pointerdown',primo,true); removeEventListener('keydown',primo,true); };
  addEventListener('pointerdown',primo,true); addEventListener('keydown',primo,true);
  addEventListener('keydown',e=>{ if(e.code==='KeyM'&&!(e.target&&/INPUT|TEXTAREA/.test(e.target.tagName))) commuta(); });
  // aggancio dei suoni alle funzioni del gioco
  // i fumetti non miagolano più: i miagolii sono riservati ai momenti importanti (correzione del 12 novembre 2026)
  if(typeof avviaScena==='function'){ const o=avviaScena; avviaScena=function(tipo){ const libero=typeof scena!=='undefined'&&!scena; const r=o.apply(this,arguments);
   if(libero){ const dur=arguments[2]||2, att=arguments[1]||[], piccolo=att.some(c=>c&&c.rango==='gattino');
    if(['pelo','naso','dorme','coccole','rotolo','sonnellino','carezza'].includes(tipo)) fusa(tipo==='dorme'||tipo==='sonnellino'?2.6:1.8);
    if(tipo==='cattura') cip();
    // un miagolio per ogni momento importante (richiesta del 12 novembre 2026)
    if(tipo==='coro') coro(7,dur,{}); // miagolare in coro: voci che si rispondono per tutta la scena
    else if(tipo==='cerimonia'||tipo==='rito') coro(4,Math.min(dur,3.2),{lungo:1.8,vol:0.12}); // il clan che si raduna
    else if(tipo==='lotta'){ miao(false,{base:560,lungo:0.6,vol:0.24}); miao(false,{base:610,lungo:0.55,vol:0.2,dopo:0.9}); } } // la sfida di un duello
   return r; }; }
  if(typeof annuncia==='function'){ const o=annuncia; annuncia=function(txt){ const t=String(txt||''); const tipo=/⚠️|📯/.test(t)?'allarme':/🕯️|🌑/.test(t)?'solenne':/🏆|🌟|⭐|👑/.test(t)?'gioia':null; if(tipo) suonoMiao(tipo); return o.apply(this,arguments); }; } // ogni annuncio importante ha il suo miagolio
  if(typeof mostraToast==='function'){ const o=mostraToast; mostraToast=function(){ rintocco(); return o.apply(this,arguments); }; }
 });
})();
