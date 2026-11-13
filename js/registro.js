// Registro di gioco esportabile (richiesta R-011 del Ponte, 12 novembre 2026).
// Tiene errori, eventi con l'ora di gioco e misure di fluidità in una chiave a parte di localStorage
// con un tetto di dimensione. Niente lascia il browser scarica un file JSON.
(function(){
 const L=(typeof LINGUA!=='undefined'&&LINGUA)||'it';
 const TESTI={
  it:{bottone:'📋 Esporta registro',fatto:'📋 Registro scaricato',vuoto:'Il registro è ancora vuoto',salvataggio:'⚠️ Salvataggio non riuscito',file:'registro-gattini'},
  en:{bottone:'📋 Export log',fatto:'📋 Log downloaded',vuoto:'The log is still empty',salvataggio:'⚠️ Saving failed',file:'kittens-log'},
  fr:{bottone:'📋 Exporter le journal',fatto:'📋 Journal téléchargé',vuoto:'Le journal est encore vide',salvataggio:'⚠️ La sauvegarde a échoué',file:'journal-chatons'}
 };
 const T=TESTI[L]||TESTI.it;
 const MAX_EVENTI=1500, MAX_FLUIDITA=240, MAX_ERRORI=60, MAX_BYTE=300000;
 const avvio=performance.now();
 let D=null, slotAtt=null, sporco=false;

 const haG=()=>typeof G!=='undefined'&&G&&G.p;
 const chiave=i=>KEY+'_reg_'+i;
 const nuovo=id=>({id,creato:new Date().toISOString(),sessioni:[],eventi:[],fluidita:[],errori:[]});
 const testo=s=>String(s==null?'':s).replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim().slice(0,180);
 const oraGioco=()=>haG()?{t:Math.round(G.t),l:+(G.t/MOON).toFixed(2)}:{t:-1,l:-1};

 function carica(){
  if(!haG()||typeof SLOT==='undefined'||SLOT==null) return false;
  if(D&&slotAtt===SLOT&&D.id===G.regId) return true;
  if(!G.regId) G.regId=Math.random().toString(36).slice(2,10);
  let d=null; try{ d=JSON.parse(localStorage.getItem(chiave(SLOT))||'null'); }catch(e){}
  if(!d||d.id!==G.regId) d=nuovo(G.regId);
  D=d; slotAtt=SLOT; statoPrima=null;
  D.sessioni.push({inizio:new Date().toISOString(),t:Math.round(G.t),lingua:L,schermo:innerWidth+'x'+innerHeight,dpr:window.devicePixelRatio||1,pagina:location.hostname});
  if(D.sessioni.length>40) D.sessioni.splice(0,D.sessioni.length-40);
  for(const e of attesa) aggiungiErrore(e.dove,e.msg,e.pila);
  attesa.length=0; sporco=true; return true;
 }
 function scrivi(){
  if(!D||!sporco||slotAtt==null) return;
  try{
   let s=JSON.stringify(D);
   while(s.length>MAX_BYTE&&D.eventi.length>50){ D.eventi.splice(0,Math.ceil(D.eventi.length/3)); D.tagliato=(D.tagliato||0)+1; s=JSON.stringify(D); }
   localStorage.setItem(chiave(slotAtt),s); sporco=false;
  }catch(e){ try{ D.eventi.splice(0,Math.ceil(D.eventi.length/2)); D.tagliato=(D.tagliato||0)+1; }catch(e2){} }
 }

 function evento(k,x,extra){
  if(!carica()) return;
  const e=Object.assign(oraGioco(),{k,x:testo(x)},extra||{});
  if(G.raid) e.b=1;
  if(G.dentro) e.d=G.dentro;
  try{ if(typeof scena!=='undefined'&&scena) e.s=scena.tipo; }catch(er){}
  const u=D.eventi[D.eventi.length-1];
  if(u&&u.k===e.k&&u.x===e.x&&e.t-u.t<3){ u.n=(u.n||1)+1; return; }
  D.eventi.push(e); if(D.eventi.length>MAX_EVENTI) D.eventi.splice(0,D.eventi.length-MAX_EVENTI);
  sporco=true;
 }

 // ---- errori ----
 const attesa=[];
 function aggiungiErrore(dove,msg,pila){
  const m=testo(msg), o=oraGioco();
  const v=D.errori.find(e=>e.msg===m&&e.dove===dove);
  if(v){ v.n++; v.ultimo=o.t; v.ultimaLuna=o.l; }
  else { D.errori.push({dove,msg:m,pila:String(pila||'').split('\n').slice(0,6).join(' | ').slice(0,600),n:1,primo:o.t,primaLuna:o.l,ultimo:o.t,ultimaLuna:o.l,quando:new Date().toISOString()});
   if(D.errori.length>MAX_ERRORI) D.errori.shift(); }
  sporco=true;
 }
 function errore(dove,e){
  const msg=e&&e.message?e.message:String(e), pila=e&&e.stack?e.stack:'';
  try{ if(carica()) aggiungiErrore(dove,msg,pila); else if(attesa.length<20) attesa.push({dove,msg,pila}); }catch(er){}
 }
 addEventListener('error',ev=>{ errore('window.onerror',ev.error||((ev.message||'errore')+' @'+(ev.filename||'').split('/').pop()+':'+ev.lineno)); });
 addEventListener('unhandledrejection',ev=>{ errore('unhandledrejection',ev.reason); });
 const ceVecchio=console.error.bind(console);
 console.error=function(){ try{ const a=arguments[0]; errore('console.error',a instanceof Error?a:Array.from(arguments).map(String).join(' ')); }catch(er){} ceVecchio.apply(null,arguments); };
 let avvisoSalva=0;
 function erroreSalvataggio(e){ errore('salvaSlot',e); const ora=performance.now();
  if(ora-avvisoSalva>60000){ avvisoSalva=ora; try{ if(typeof mostraToast==='function') mostraToast(T.salvataggio,'#ff8a7a'); }catch(er){} } }

 // ---- eventi: funzioni avvolte ----
 function avvolgi(nome,prima){
  try{ const o=window[nome]; if(typeof o!=='function') return;
   window[nome]=function(){ try{ prima.apply(null,arguments); }catch(er){} return o.apply(this,arguments); };
  }catch(er){}
 }
 let missioneCompiuta=false;
 addEventListener('DOMContentLoaded',()=>{
  avvolgi('log',t=>evento('diario',t));
  avvolgi('annuncia',t=>evento('annuncio',t));
  avvolgi('modale',tit=>{ const m=document.getElementById('modal'), aperto=m&&m.style.display==='flex';
   const sopra=aperto?testo((document.getElementById('mt')||{}).innerHTML):'';
   if(aperto&&sopra&&sopra!==testo(tit)) evento('riquadro sopra riquadro',tit,{sotto:sopra}); else evento('riquadro',tit); });
  avvolgi('iniziaGuerra',(cl,chiamata)=>evento('guerra: inizio',(cl&&(cl.nome||cl.k||cl))+(chiamata?' (chiamata alle armi)':'')));
  avvolgi('fineRaid',msg=>evento('guerra: fine',msg||''));
  avvolgi('completaMissione',()=>{ missioneCompiuta=true; });
  avvolgi('sviene',()=>evento('svenimento',''));
 });

 // ---- eventi: stato osservato ogni due secondi ----
 let statoPrima=null, fermo={x:0,y:0,da:0,detto:false}, scenaVista=null, scenaDa=0, scenaDetta=false, fxVisto=null, fxDa=0, fxDetto=false;
 function nomeDi(c){ try{ return typeof nome==='function'?testo(nome(c)):c.prefisso; }catch(e){ return '?'; } }
 function osserva(){
  if(document.hidden||!carica()) return;
  const p=G.p, ora=performance.now();
  const gatti={}; for(const c of G.cats) gatti[c.id]={n:nomeDi(c),r:c.rango,c:c.clan};
  const s={rango:p.rango,via:p.via||'',leader:!!p.leader,vecchio:!!p.vecchio,vite:p.vite||0,raid:!!G.raid,
   assalto:G.cats.some(c=>c.stato==='assalto'),miss:G.missione?G.missione.k:'',caduti:(G.caduti||[]).length,funerale:!!G.funerale,gatti};
  const a=statoPrima;
  if(a){
   if(a.vite!==s.vite) evento('rinascita','vita n. '+(s.vite+1));
   else if(a.rango!==s.rango||a.via!==s.via) evento('cambio di rango',a.rango+(a.via?' ('+a.via+')':'')+' → '+s.rango+(s.via?' ('+s.via+')':''));
   if(!a.leader&&s.leader) evento('cambio di rango','capo del clan');
   if(!a.vecchio&&s.vecchio) evento('cambio di rango','vecchiaia');
   if(!a.raid&&s.raid) evento('battaglia: inizio',''); if(a.raid&&!s.raid) evento('battaglia: fine','');
   if(!a.assalto&&s.assalto) evento('assalto al campo: inizio',''); if(a.assalto&&!s.assalto) evento('assalto al campo: fine','');
   if(a.miss!==s.miss){ if(a.miss) evento(missioneCompiuta?'missione compiuta':'missione finita senza esito',a.miss); if(s.miss) evento('missione data',s.miss+': '+testo(G.missione.t||G.missione.n)); missioneCompiuta=false; }
   if(s.caduti>a.caduti) evento('caduto in battaglia',testo((G.caduti||[]).slice(a.caduti).map(c=>c&&c.nome||c).join(', ')));
   if(!a.funerale&&s.funerale) evento('funerale: inizio',''); if(a.funerale&&!s.funerale) evento('funerale: fine','');
   if(a.vite===s.vite) for(const id in a.gatti) if(!gatti[id]){ const c=a.gatti[id]; evento('gatto uscito dal gioco',c.n+' ('+c.r+', '+c.c+')'); }
  }
  statoPrima=s;
  // blocchi: una scena o un effetto che non finisce, il gatto che spinge senza avanzare
  let sc=null, f=null, giu=false, fermoGioco=true;
  try{ sc=scena; f=fx; fermoGioco=paused; for(const k in keys) if(keys[k]&&/Arrow|^[wasd]$/i.test(k)) giu=true; }catch(e){}
  if(sc!==scenaVista){ scenaVista=sc; scenaDa=ora; scenaDetta=false; }
  else if(sc&&!fermoGioco&&!scenaDetta&&ora-scenaDa>40000){ scenaDetta=true; evento('blocco: scena che non finisce',sc.tipo); }
  if(f!==fxVisto){ fxVisto=f; fxDa=ora; fxDetto=false; }
  else if(f&&!fermoGioco&&!fxDetto&&ora-fxDa>30000){ fxDetto=true; evento('blocco: effetto che non finisce',''); }
  const mosso=Math.abs(p.x-fermo.x)+Math.abs(p.y-fermo.y)>3, spinge=(giu||!!p.guida||!!G.guida)&&!fermoGioco&&!sc&&!f;
  if(mosso||!spinge){ fermo={x:p.x,y:p.y,da:ora,detto:false}; }
  else if(!fermo.detto&&ora-fermo.da>6000){ fermo.detto=true; evento('blocco: il gatto non avanza',Math.round(p.x)+','+Math.round(p.y)+(giu?' (tasti)':' (guida)')); }
 }
 setInterval(()=>{ try{ osserva(); }catch(e){ errore('registro',e); } },2000);
 setInterval(scrivi,30000);
 addEventListener('pagehide',scrivi);
 document.addEventListener('visibilitychange',()=>{ if(document.hidden) scrivi(); });

 // ---- fluidità: immagini al secondo, medie e minime, ogni minuto ----
 let ultimo=0, secInizio=0, secN=0, minuti=[], lunghe=0;
 function quadro(now){
  requestAnimationFrame(quadro);
  if(document.hidden||!haG()){ ultimo=0; secN=0; return; }
  if(!ultimo||now-ultimo>1000){ ultimo=now; secInizio=now; secN=0; return; }
  if(now-ultimo>100) lunghe++;
  ultimo=now; secN++;
  if(now-secInizio>=1000){ minuti.push(secN*1000/(now-secInizio)); secInizio=now; secN=0;
   if(minuti.length>=60){ misura(); minuti=[]; lunghe=0; } }
 }
 function misura(){
  if(!carica()) return;
  let ogg=0; try{ ogg=(G.oggetti||[]).length; }catch(e){}
  let np=0; try{ np=prede.length; }catch(e){}
  let ris=1; try{ ris=DPR; }catch(e){}
  const m=Object.assign(oraGioco(),{media:+(minuti.reduce((a,b)=>a+b,0)/minuti.length).toFixed(1),minima:+Math.min.apply(null,minuti).toFixed(1),
   lunghe,gatti:G.cats.length,prede:np,oggetti:ogg,risoluzione:ris,dove:G.dentro||'fuori',battaglia:!!G.raid});
  D.fluidita.push(m); if(D.fluidita.length>MAX_FLUIDITA) D.fluidita.shift(); sporco=true;
 }
 requestAnimationFrame(quadro);

 // ---- esportazione ----
 function dati(){
  if(!carica()) return null;
  const p=G.p; let eta=0; try{ eta=lune(p); }catch(e){}
  return {gioco:'Gattini guerrieri 3D',registro:1,esportato:new Date().toISOString(),lingua:L,navigatore:navigator.userAgent,
   partita:{nome:G.nomeSalvataggio||'',slot:SLOT,oraDiGioco:oraGioco(),giocatore:nomeDi(p),rango:p.rango,lune:eta,vite:(p.vite||0)+1,
    gatti:G.cats.length,delClan:G.cats.filter(c=>c.clan==='felce').length,cibo:G.cibo,spirito:Math.round(p.spirito||0)},
   minutiGiocatiConIlRegistro:Math.round((performance.now()-avvio)/60000),
   creato:D.creato,tagliato:D.tagliato||0,sessioni:D.sessioni,errori:D.errori,fluidita:D.fluidita,eventi:D.eventi};
 }
 function esporta(){
  const d=dati(); if(!d){ try{ mostraToast(T.vuoto,'#ffd27a'); }catch(e){} return false; }
  scrivi();
  const url=URL.createObjectURL(new Blob([JSON.stringify(d,null,1)],{type:'application/json'}));
  const a=document.createElement('a'); a.href=url; a.download=T.file+'-'+new Date().toISOString().slice(0,16).replace(/[T:]/g,'-')+'.json';
  document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),5000);
  try{ mostraToast(T.fatto,'#9be07f'); }catch(e){}
  return true;
 }
 window.REG={evento,errore,erroreSalvataggio,esporta,dati,scrivi,testi:T};
})();
