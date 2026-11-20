//: un motore generico per i moduli didattici (richiesta del 20 novembre 2026
// Un modulo è moduli/<id>.json con schema "stanza_del_tempo/1"; le immagini, se ci sono, in moduli/<id>/<id_oggetto>.png.
// L'elenco dei moduli sta in moduli/indice.json (lo rigenera valida_moduli.py); in locale il motore legge anche l'elenco della cartella.
// Flusso: il personaggio propone la porta e spiega le regole; nella stanza si legge il frammento di ogni oggetto; per portarlo via si risponde
// al quiz (opzioni mescolate); se si sbaglia la guardia si volta, il gattino fa la statua, appare l'indizio e si riprova; le stelle di furtività
// dipendono dai tentativi; dopo il numero di oggetti delle regole la stanza si chiude, e il bonus chiede di ordinarli per data.
// I totem compaiono nella tana del giocatore, ordinati per data con la loro etichetta. Stato salvato nella partita: G.st.tempo[<id>].
(function(){
const UI={
 it:{porta:'🕰️ La porta del tempo',portaSub:'Clicca: entri nella stanza',entra:'🚪 Entrare nella porta',nonOra:'Non ora',avanti:'Avanti ▸',esci:'🚪 Uscire dalla porta',
  leggi:'Leggi il frammento',porta_via:'🐾 Portalo via',torna:'↩ Torna alla stanza',riprova:'🐾 Riprova',preso:'Già tuo',pieno:'Hai già i tuoi totem',
  totem:(a,b)=>`Totem: ${a} di ${b}`,stelle:n=>'★'.repeat(n)+'☆'.repeat(3-n),indizio:'Indizio',spiega:'Perché',
  bonusTit:'Il bonus del tempo',bonusOk:r=>`Perfetto: dal più antico al più recente! Ricompensa: ${r}.`,bonusNo:'Non proprio: ecco l’ordine giusto.',bonusRiprova:'Riprovare',tana:'↩ Tornare nella tana',
  scaffale:'🗿 Totem del tempo',tocca:'Tocca un oggetto per leggere la sua storia.',sfidaTit:'⚔️ La sfida finale',curaTit:'🌿 La cura',scontro:(k,a,b)=>`<b>Scontro ${k}</b> · tu ${a}, avversario ${b}`,mossa:'Quale mossa scegli?',vintoS:'Lo scontro è tuo!',persoS:'Lo scontro va all’avversario.',pariS:'Stessa mossa: nessuno cede.',passo:(k,n)=>`Passo ${k} di ${n}`,tocca3D:'Avvicinati a un piedistallo e premi Spazio per leggere la storia dell’oggetto.',esamina:n=>'guarda «'+n+'»',parla:n=>'parla con '+n,esciT:'esci dalla porta del tempo',portaCampo:n=>'Nel bosco si è aperta una porta di luce: '+n+' ti aspetta lì',portaSub3D:'Clicca: ti ci porto',fatto:'Hai già portato via i tuoi totem: puoi ancora girare per la stanza e rileggere i frammenti.',scegli:'Quale porta apri?',
  log:t=>`🕰️ Sei tornato dalla stanza del tempo con i tuoi totem: «${t}».`,motivo:'la stanza del tempo'},
 en:{porta:'🕰️ The door of time',portaSub:'Click: you step into the room',entra:'🚪 Go through the door',nonOra:'Not now',avanti:'Next ▸',esci:'🚪 Leave through the door',
  leggi:'Read the fragment',porta_via:'🐾 Take it',torna:'↩ Back to the room',riprova:'🐾 Try again',preso:'Already yours',pieno:'You already have your totems',
  totem:(a,b)=>`Totems: ${a} of ${b}`,stelle:n=>'★'.repeat(n)+'☆'.repeat(3-n),indizio:'Hint',spiega:'Why',
  bonusTit:'The time bonus',bonusOk:r=>`Perfect: from oldest to newest! Reward: ${r}.`,bonusNo:'Not quite: here is the right order.',bonusRiprova:'Try again',tana:'↩ Back to your den',
  scaffale:'🗿 Totems of time',tocca:'Touch an object to read its story.',sfidaTit:'⚔️ The final challenge',curaTit:'🌿 The cure',scontro:(k,a,b)=>`<b>Clash ${k}</b> · you ${a}, opponent ${b}`,mossa:'Which move do you choose?',vintoS:'The clash is yours!',persoS:'The clash goes to your opponent.',pariS:'Same move: nobody gives way.',passo:(k,n)=>`Step ${k} of ${n}`,tocca3D:'Walk up to a pedestal and press Space to read the object’s story.',esamina:n=>'look at «'+n+'»',parla:n=>'talk to '+n,esciT:'leave through the door of time',portaCampo:n=>'A door of light has opened in the forest: '+n+' is waiting for you there',portaSub3D:'Click: I’ll take you there',fatto:'You already took your totems: you can still walk around the room and read the fragments again.',scegli:'Which door do you open?',
  log:t=>`🕰️ You came back from the room of time with your totems: «${t}».`,motivo:'the room of time'},
 fr:{porta:'🕰️ La porte du temps',portaSub:'Clique : tu entres dans la pièce',entra:'🚪 Passer la porte',nonOra:'Pas maintenant',avanti:'Suite ▸',esci:'🚪 Sortir par la porte',
  leggi:'Lire le fragment',porta_via:'🐾 L’emporter',torna:'↩ Retour à la pièce',riprova:'🐾 Réessayer',preso:'Déjà à toi',pieno:'Tu as déjà tes totems',
  totem:(a,b)=>`Totems : ${a} sur ${b}`,stelle:n=>'★'.repeat(n)+'☆'.repeat(3-n),indizio:'Indice',spiega:'Pourquoi',
  bonusTit:'Le bonus du temps',bonusOk:r=>`Parfait : du plus ancien au plus récent ! Récompense : ${r}.`,bonusNo:'Pas tout à fait : voici le bon ordre.',bonusRiprova:'Réessayer',tana:'↩ Retour à la tanière',
  scaffale:'🗿 Totems du temps',tocca:'Touche un objet pour lire son histoire.',sfidaTit:'⚔️ Le défi final',curaTit:'🌿 Le soin',scontro:(k,a,b)=>`<b>Assaut ${k}</b> · toi ${a}, adversaire ${b}`,mossa:'Quel mouvement choisis-tu ?',vintoS:'L’assaut est à toi !',persoS:'L’assaut va à ton adversaire.',pariS:'Même mouvement : personne ne cède.',passo:(k,n)=>`Étape ${k} sur ${n}`,tocca3D:'Approche-toi d’un piédestal et appuie sur Espace pour lire l’histoire de l’objet.',esamina:n=>'regarde « '+n+' »',parla:n=>'parle avec '+n,esciT:'sors par la porte du temps',portaCampo:n=>'Dans la forêt, une porte de lumière s’est ouverte : '+n+' t’y attend',portaSub3D:'Clique : je t’y emmène',fatto:'Tu as déjà emporté tes totems : tu peux encore te promener dans la pièce et relire les fragments.',scegli:'Quelle porte ouvres-tu ?',
  log:t=>`🕰️ Tu es revenu de la pièce du temps avec tes totems : « ${t} ».`,motivo:'la pièce du temps'}}[typeof LINGUA!=='undefined'?LINGUA:'it'];
const MODULI={}; window.STANZA={MODULI};
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const mescola=a=>{ a=a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; };

// ---------- caricamento dei moduli: indice.json e, in locale, l'elenco della cartella ----------
async function carica(){ const ids=new Set(), img={}; let locale=false;
 try{ const r=await fetch('moduli/indice.json',{cache:'no-store'}); if(r.ok){ const j=await r.json(); for(const m of (j.moduli||j)){ const id=typeof m==='string'?m:m.id; ids.add(id); if(m&&Array.isArray(m.immagini)) img[id]=m.immagini; } } }catch(e){}
 try{ const r=await fetch('moduli/',{cache:'no-store'}); if(r.ok){ const t=await r.text(); locale=/<a href/i.test(t); for(const m of t.matchAll(/href="([^"\/?#]+)\.json"/g)) if(m[1]!=='indice') ids.add(decodeURIComponent(m[1])); } }catch(e){}
 for(const id of ids){ try{ const r=await fetch('moduli/'+encodeURIComponent(id)+'.json',{cache:'no-store'}); if(!r.ok) continue; const m=await r.json(); if(m&&m.schema==='stanza_del_tempo/1'&&Array.isArray(m.oggetti)){ m._img=locale?null:(img[id]||null); MODULI[m.id||id]=m; } }catch(e){ console.warn('stanza del tempo: modulo non valido',id,e); } } }

// ---------- stato salvato nella partita ----------
const stato=id=>{ const S=G.st||(G.st={}), T=S.tempo||(S.tempo={}); return T[id]||(T[id]={presi:[],stelle:{},bonus:false,fatto:false,visto:false}); };
const luogoDi=m=>(m.stanza&&(m.stanza.luogo||m.stanza.nome))||m.titolo||'';
const epocaDi=m=>{ if(m.stanza&&m.stanza.epoca) return m.stanza.epoca; const a=m.oggetti.map(o=>Math.floor(o.ordine)).filter(Number.isFinite); if(!a.length) return ''; const x=Math.min(...a), y=Math.max(...a); return x===y?String(x):x+' – '+y; };
const daPortare=m=>(m.regole&&m.regole.oggetti_da_portare)||5;
const stelleDa=(m,t)=>{ const s=(m.regole&&m.regole.stelle_furtivita)||{}; return t<=1?(s['1_tentativo']??3):t===2?(s['2_tentativi']??2):(s['3_o_piu']??1); };

// ---------- figure: immagine se c'è, altrimenti un segnaposto ricavato da rendering_soggetto ----------
const EMOJI=[[/tavolo|pedin|scacch/i,'♟️'],[/globo|globe/i,'🌍'],[/carta|mappa|map/i,'🗺️'],[/medagli|stella a|medal/i,'🎖️'],[/libro|book|codice/i,'📕'],[/corona|crown/i,'👑'],[/lettera|sigillo|letter/i,'✉️'],[/spada|sword|sciabola/i,'⚔️'],[/vaso|anfora|coppa/i,'🏺'],[/cannone/i,'💣'],[/cappello|bicorno/i,'🎩'],[/nave|barca/i,'⛵'],[/chiave/i,'🗝️'],[/orologio/i,'⏳']];
const segnaposto=o=>{ const t=(o.rendering_soggetto||'')+' '+(o.nome||''); for(const [re,e] of EMOJI) if(re.test(t)) return e; return '📜'; };
function figura(m,o,cls){ const e=segnaposto(o); if(m._img&&!m._img.includes(o.id)) return `<div class="stF ${cls||''}"><span class="stE">${e}</span></div>`; return `<div class="stF ${cls||''}"><span class="stE">${e}</span><img alt="" src="moduli/${encodeURIComponent(m.id)}/${encodeURIComponent(o.id)}.png" onload="this.previousElementSibling.style.display='none';this.style.display='block'" onerror="this.remove()" style="display:none"></div>`; }
function ritratto(p){ const a=(p&&p.aspetto)||'', cappello=/bicorn/i.test(a)?'<path d="M14 30 Q40 6 66 30 Q40 22 14 30Z" fill="#1d1d24"/><circle cx="40" cy="20" r="3" fill="#c0302a"/>':/corona|crown/i.test(a)?'<path d="M22 26 L28 12 L34 22 L40 8 L46 22 L52 12 L58 26Z" fill="#f2c94c"/>':'';
 return `<svg viewBox="0 0 80 80" class="stRit"><path d="M20 34 L16 14 L32 26Z M60 34 L64 14 L48 26Z" fill="#e8a25c" stroke="#5a3a1a" stroke-width="2"/><circle cx="40" cy="44" r="24" fill="#e8a25c" stroke="#5a3a1a" stroke-width="2"/><circle cx="31" cy="42" r="3.4" fill="#2a1a0a"/><circle cx="49" cy="42" r="3.4" fill="#2a1a0a"/><path d="M36 51 Q40 55 44 51" stroke="#2a1a0a" stroke-width="2" fill="none"/><path d="M40 47 l-3 3 h6z" fill="#c05a5a"/>${cappello}</svg>`; }

// ---------- la scena ----------
const st=document.createElement('style'); st.textContent=`
#stanzaTempo{position:absolute;inset:0;z-index:45;display:none;font:15px/1.45 system-ui,sans-serif;color:#2a1a0a;overflow:hidden;
 background:radial-gradient(ellipse at 50% 30%,#f6dfb0 0%,#d9a866 55%,#7a4a24 100%)}
#stanzaTempo.si{display:block} #stanzaTempo .tenda{position:absolute;top:0;bottom:0;width:9%;background:repeating-linear-gradient(90deg,#8a1a1a 0 14px,#a82424 14px 26px);box-shadow:0 0 30px #0008}
#stanzaTempo .tenda.sx{left:0} #stanzaTempo .tenda.dx{right:0}
#stanzaTempo .testa{position:absolute;left:11%;right:11%;top:10px;display:flex;justify-content:space-between;align-items:center;font:700 20px Georgia,serif;color:#3a1a08}
#stanzaTempo .testa small{font:600 14px system-ui;color:#5a2a10;background:#fff4dccc;border-radius:999px;padding:4px 12px}
#stanzaTempo .esci{font:700 14px system-ui;background:#3a1a08;color:#ffe9b8;border:0;border-radius:10px;padding:7px 12px;cursor:pointer}
#stanzaTempo .griglia{position:absolute;left:24%;right:13%;top:58px;bottom:120px;display:grid;grid-template-columns:repeat(4,1fr);gap:12px;align-content:center}
#stanzaTempo .ogg{background:#fff7e4;border:3px solid #6a3a14;border-radius:14px;padding:8px;text-align:center;cursor:pointer;box-shadow:0 4px 0 #6a3a14;transition:transform .15s}
#stanzaTempo .ogg:hover{transform:translateY(-3px)} #stanzaTempo .ogg.preso{background:#e9f7d8;border-color:#3a7a2a;box-shadow:0 4px 0 #3a7a2a}
#stanzaTempo .ogg b{display:block;font-size:13px;line-height:1.2;margin-top:4px} #stanzaTempo .ogg i{font-size:12px;color:#7a4a24;font-style:normal}
#stanzaTempo .stF{position:relative;height:74px;display:flex;align-items:center;justify-content:center}
#stanzaTempo .stF img{max-height:100%;max-width:100%} #stanzaTempo .stE{font-size:48px;filter:drop-shadow(0 3px 0 #0003)}
#stanzaTempo .stF.grande{height:110px} #stanzaTempo .stF.grande .stE{font-size:76px}
#stanzaTempo .pers{position:absolute;left:10.5%;top:62px;width:13%;text-align:center}
#stanzaTempo .stRit{width:100%;max-width:110px} #stanzaTempo .pers b{display:block;font:700 13px Georgia,serif}
#stanzaTempo .fum{position:absolute;left:10.5%;top:215px;width:19%;z-index:4;background:#fffdf4;border:3px solid #3a1a08;border-radius:16px;padding:10px 14px;font:600 15px/1.4 system-ui;display:none}
#stanzaTempo .fum.si{display:block} #stanzaTempo .fum:before{content:'';position:absolute;left:40%;top:-14px;border:7px solid transparent;border-bottom-color:#3a1a08}
#stanzaTempo .guardia{position:absolute;right:11%;top:58px;width:12%;text-align:center;transition:transform .35s}
#stanzaTempo .guardia span{font-size:56px;display:inline-block;transition:transform .35s} #stanzaTempo .guardia b{display:block;font:700 12px system-ui;color:#3a1a08}
#stanzaTempo .guardia.voltata span{transform:scaleX(-1)} #stanzaTempo .guardia.voltata:after{content:'❗';position:absolute;right:0;top:-6px;font-size:30px;animation:lamp .5s infinite}
#stanzaTempo .gatto{position:absolute;left:50%;bottom:62px;transform:translateX(-50%);font-size:46px;transition:filter .3s}
#stanzaTempo .gatto.statua{filter:grayscale(1) brightness(1.4) drop-shadow(0 0 6px #fff);transform:translateX(-50%) scale(1.5)} #stanzaTempo .guardia.voltata span{filter:drop-shadow(0 0 12px #ff3a2a)}
#stanzaTempo .riq{position:absolute;left:31%;right:24%;top:52px;max-height:calc(100% - 175px);background:#fff9ea;border:4px solid #3a1a08;border-radius:18px;padding:16px 22px;overflow:auto;display:none;box-shadow:0 10px 40px #0008}
#stanzaTempo .riq.si{display:block} #stanzaTempo .riq h3{margin:0 0 4px;font:700 22px Georgia,serif} #stanzaTempo .riq .data{font:700 13px system-ui;color:#8a4a14}
#stanzaTempo .riq p{font-size:17px} #stanzaTempo .riq .box{background:#f3e3c0;border-left:5px solid #8a4a14;border-radius:8px;padding:8px 12px;margin:10px 0;font-size:15px}
#stanzaTempo .riq .box.indizio{background:#ffe9e0;border-color:#c0402a}
#stanzaTempo .bt{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px} #stanzaTempo .bt button{font:700 16px system-ui;padding:10px 16px;border-radius:12px;border:2px solid #3a1a08;background:#ffe2a0;cursor:pointer;color:#2a1a0a}
#stanzaTempo .bt button:hover{background:#ffd070} #stanzaTempo .bt button.opz{display:block;width:100%;text-align:left;background:#fff3d8}
#stanzaTempo .stelle{color:#e0a000;font-size:22px;letter-spacing:2px}
#stanzaTempo .ordina{display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin:10px 0} #stanzaTempo .ordina .ogg{width:120px}
#stanzaTempo .ordina .ogg.scelto{opacity:.35;pointer-events:none} #stanzaTempo .ordina .ogg .n{font:800 18px system-ui;color:#3a7a2a}
#stanzaTempo .portaV{position:absolute;left:50%;top:44%;transform:translate(-50%,-50%);width:150px;height:230px;border-radius:75px 75px 8px 8px;background:radial-gradient(ellipse at 50% 40%,#fff 0%,#bfe6ff 30%,#6a4aff 75%,#2a1a6a 100%);box-shadow:0 0 40px 16px #b9a4ffaa;animation:portaV 2.4s ease-in-out infinite}
@keyframes portaV{50%{box-shadow:0 0 70px 26px #d9c8ffcc}}
#scaffaleTempo{position:absolute;right:12px;bottom:92px;z-index:20;max-width:46%;background:#2a1a08dd;border:2px solid #e8c47a;border-radius:14px;padding:8px 10px;color:#ffe9b8;font:700 13px system-ui;display:none}
#scaffaleTempo.si{display:block} #scaffaleTempo .lista{display:flex;gap:6px;flex-wrap:wrap;margin-top:6px}
#scaffaleTempo .t{width:66px;background:#fff4dc;color:#2a1a0a;border-radius:10px;padding:4px;text-align:center;cursor:pointer;font:600 10px/1.2 system-ui;border:3px solid transparent}
#scaffaleTempo .t.oro{border-color:#f2c94c;box-shadow:0 0 10px #f2c94c} #scaffaleTempo .t .stF{height:34px} #scaffaleTempo .t .stE{font-size:26px}
#stanzaTempo.hud{background:none;pointer-events:none} #stanzaTempo.hud .tenda,#stanzaTempo.hud .griglia,#stanzaTempo.hud .gatto,#stanzaTempo.hud .guardia{display:none}
#stanzaTempo.hud .testa,#stanzaTempo.hud .riq,#stanzaTempo.hud .fum,#stanzaTempo.hud .pers{pointer-events:auto} #stanzaTempo.hud .testa{background:#2a1a08cc;border-radius:12px;padding:6px 12px;color:#ffe9b8} #stanzaTempo.hud .pers{width:8%;top:60px} #stanzaTempo.hud .pers b{color:#ffe9b8;text-shadow:0 1px 3px #000} #stanzaTempo.hud .fum{top:150px;width:24%}
#stanzaTempo.hud.lato .riq{left:auto;right:12px;width:34%;top:auto;bottom:96px}
#stanzaTempo .arrivo{position:absolute;left:50%;top:34%;transform:translate(-50%,-50%);text-align:center;color:#fff3d0;font:700 34px/1.25 Georgia,serif;text-shadow:0 3px 12px #000,0 0 30px #c08a2a;opacity:0;transition:opacity 1s;pointer-events:none;white-space:nowrap}
#stanzaTempo .arrivo small{display:block;font:italic 600 22px Georgia,serif;color:#ffd98a;margin-top:6px} #stanzaTempo .arrivo.si{opacity:1}
#portaTempo{margin:6px 0 8px;padding:8px 10px;border-radius:12px;background:rgba(150,120,255,.16);border:1px solid rgba(190,170,255,.5);font:700 15px system-ui,sans-serif;color:#e4dcff;cursor:pointer}
#portaTempo:hover{background:rgba(150,120,255,.3)} #portaTempo small{display:block;margin-top:4px;font:700 12px system-ui;color:#ffe08a;opacity:.85}`;
document.head.appendChild(st);
const sc=document.createElement('div'); sc.id='stanzaTempo';
sc.innerHTML=`<div class="tenda sx"></div><div class="tenda dx"></div><div class="testa"><span class="nome"></span><small class="conta"></small><button class="esci"></button></div>
<div class="pers"></div><div class="guardia"><span>💂</span><b></b></div><div class="griglia"></div><div class="gatto">🐈</div><div class="fum"></div><div class="riq"></div><div class="arrivo"></div>`;
const scaffale=document.createElement('div'); scaffale.id='scaffaleTempo';
const portaBox=document.createElement('div'); portaBox.id='portaTempo'; portaBox.style.display='none';
const $=s=>sc.querySelector(s);
let M=null, aperta=false, fumTo=null, hud=false, ritornoA=null, vaiPorta=false;
// la stanza 3D è una in più, fuori dalla mappa: il gatto ci cammina come nelle sale delle tane (js/mondo3d.js, salaImpero)
const KST='tempoStanza'; L[KST]={x:-600,y:-600,r:42,nome:''}; window.TEMPO3D=window.TEMPO3D||{}; const T3=()=>window.TEMPO3D;
const NAPO={x:10,y:-29}, SCRIV={x0:-7.6,x1:7.6,y0:-34,y1:-26.6};
function piedistalli(m){ const n=m.oggetti.length, meta=Math.ceil(n/2), d=L[KST], S=stato(m.id);
 return m.oggetti.map((o,i)=>{ const lato=i<meta?-1:1, j=i<meta?i:i-meta, k=lato<0?meta:n-meta, y=-16+(k>1?j*30/(k-1):15);
  return {id:o.id,x:d.x+lato*25,y:d.y+y,emoji:segnaposto(o),img:(m._img&&m._img.includes(o.id))?`moduli/${encodeURIComponent(m.id)}/${encodeURIComponent(o.id)}.png`:null,preso:S.presi.includes(o.id),o}; }); }
async function provaImmagini(m){ if(m._img) return; const si=[]; for(const o of m.oggetti){ try{ const r=await fetch(`moduli/${encodeURIComponent(m.id)}/${encodeURIComponent(o.id)}.png`,{method:'HEAD'}); if(r.ok) si.push(o.id); }catch(e){} } m._img=si; }
async function entra3D(m){ M=m; await provaImmagini(m); const p=G.p, d=L[KST]; ritornoA={x:p.x,y:p.y}; aperta=false; sc.classList.remove('si');
 Object.assign(T3(),{k:KST,pers:m.personaggio||{},guardia:m.guardia||{},ped:piedistalli(m),voltata:false,statua:false});
 passaggio(()=>{ G.dentro=KST; p.x=d.x; p.y=d.y+24; p.vx=p.vy=0; p.guida=null; p.caccia=null; p.sopra=false; p.elev=0; p.uscito=null; if(window.R3D){ R3D.cam3.yaw=Math.PI; R3D.cam3.pitch=0.45; R3D.cam3.init=false; } hudSu(); }); }
function hudSu(){ hud=true; sc.classList.add('si','hud'); paused=false; $('.pers').innerHTML=ritratto(M.personaggio)+`<b>${esc(M.personaggio&&M.personaggio.nome)}</b>`; $('.nome').textContent=luogoDi(M)+(epocaDi(M)?' · '+epocaDi(M):''); $('.esci').textContent=UI.esci; $('.esci').onclick=()=>esci3D(); disegna();
 const ar=$('.arrivo'); ar.innerHTML='🕰️ '+esc(luogoDi(M))+(epocaDi(M)?`<small>${esc(epocaDi(M))}</small>`:''); ar.classList.add('si'); setTimeout(()=>{ ar.classList.remove('si'); if(hud) dice(stato(M.id).fatto?UI.fatto:UI.tocca3D,7000); },4200); } // la scritta del luogo e dell'epoca in cui il gatto è catapultato
function esci3D(dopo){ const p=G.p, a=ritornoA||CLAN.felce.campo; hud=false; chiudiRiq(); sc.classList.remove('si','hud','lato'); $('.fum').classList.remove('si'); T3().k=null; T3().duello=false; T3().folla=null; paused=false;
 passaggio(()=>{ G.dentro=null; p.x=a.x; p.y=a.y; p.vx=p.vy=0; p.uscito=null; p.passaSiepe=performance.now()+2000; if(window.R3D) R3D.cam3.init=false; }); if(typeof segnaEvento==='function') segnaEvento(); if(dopo) setTimeout(dopo,1000); }

function dice(t,ms){ const f=$('.fum'); f.innerHTML=esc(t); f.classList.add('si'); clearTimeout(fumTo); if(ms) fumTo=setTimeout(()=>f.classList.remove('si'),ms); }
function riquadro(html){ const r=$('.riq'); r.innerHTML=html; r.classList.add('si'); r.scrollTop=0; if(hud) paused=true; return r; }
function chiudiRiq(){ $('.riq').classList.remove('si'); if(hud){ paused=false; T3().voltata=T3().statua=false; } }
function bottoni(r,lista){ const d=document.createElement('div'); d.className='bt'; for(const b of lista){ const e=document.createElement('button'); e.innerHTML=b.t; if(b.cls) e.className=b.cls; e.onclick=ev=>{ ev.stopPropagation(); b.f&&b.f(); }; d.appendChild(e); } r.appendChild(d); }

function apri(m){ M=m; aperta=true; if(typeof paused!=='undefined') paused=true; G.p.guida=null; sc.classList.add('si');
 $('.pers').innerHTML=ritratto(m.personaggio)+`<b>${esc(m.personaggio&&m.personaggio.nome)}</b>`; $('.guardia b').textContent=(m.guardia&&m.guardia.nome)||''; $('.esci').textContent=UI.esci; $('.esci').onclick=chiudi;
 $('.gatto').classList.remove('statua'); $('.guardia').classList.remove('voltata'); $('.nome').textContent=(m.stanza&&m.stanza.nome)||m.titolo||''; disegna(); }
function chiudi(){ aperta=false; sc.classList.remove('si'); chiudiRiq(); $('.fum').classList.remove('si'); if(typeof paused!=='undefined') paused=false; if(typeof segnaEvento==='function') segnaEvento(); }
function disegna(){ const S=stato(M.id), n=daPortare(M); $('.conta').textContent=UI.totem(S.presi.length,n); for(const q of (T3().ped||[])) q.preso=S.presi.includes(q.id);
 const g=$('.griglia'); g.innerHTML=''; for(const o of M.oggetti){ const p=S.presi.includes(o.id), d=document.createElement('div'); d.className='ogg'+(p?' preso':'');
  d.innerHTML=figura(M,o)+`<b>${esc(o.nome)}</b>${p?`<span class="stelle">${UI.stelle(S.stelle[o.id]||0)}</span>`:''}`; d.onclick=()=>leggi(o); g.appendChild(d); } }

// il personaggio propone la porta e spiega le regole
function porta(m){ apri(m); const S=stato(m.id), P=m.personaggio||{}; $('.griglia').style.visibility='hidden'; $('.guardia').style.visibility='hidden';
 const g=$('.griglia'); const pv=document.createElement('div'); pv.className='portaV'; sc.appendChild(pv);
 const battute=S.visto?[P.proposta_porta]:[P.ingresso,P.proposta_porta,P.regola_furto].filter(Boolean); let i=0;
 const fine=()=>{ pv.remove(); $('.griglia').style.visibility=''; $('.guardia').style.visibility=''; S.visto=true; dice(S.fatto?UI.fatto:UI.tocca,5000); };
 const passo=()=>{ dice(battute[i]); const r=riquadro(''); r.classList.remove('si');
  const b=document.createElement('div'); b.className='bt'; b.style.cssText='position:absolute;left:50%;bottom:16px;transform:translateX(-50%);z-index:3';
  const last=i>=battute.length-1; b.innerHTML=''; const bb=last?[{t:UI.entra,f:()=>{ b.remove(); pv.remove(); S.visto=true; chiudi(); entra3D(m); }},{t:UI.nonOra,f:()=>{ b.remove(); pv.remove(); chiudi(); }}]:[{t:UI.avanti,f:()=>{ b.remove(); i++; passo(); }}];
  for(const x of bb){ const e=document.createElement('button'); e.textContent=x.t; e.onclick=x.f; b.appendChild(e); } sc.appendChild(b); };
 passo(); }

// toccando un oggetto si legge il frammento
function leggi(o){ const S=stato(M.id), preso=S.presi.includes(o.id), pieno=S.presi.length>=daPortare(M);
 const r=riquadro(figura(M,o,'grande')+`<h3>${esc(o.nome)}</h3><div class="data">${esc(o.data_testo)}</div><p>${esc(o.frammento)}</p>`+(preso&&o.battuta_napoleone?`<div class="box">💬 ${esc(o.battuta_napoleone)}</div>`:'')+(preso?`<div class="stelle">${UI.stelle(S.stelle[o.id]||0)}</div>`:''));
 bottoni(r,[...(!preso&&!pieno&&!S.fatto?[{t:UI.porta_via,f:()=>quiz(o,1)}]:[]),...(preso?[{t:'✓ '+UI.preso}]:[]),...(!preso&&(pieno||S.fatto)?[{t:UI.pieno}]:[]),{t:UI.torna,f:chiudiRiq}]); }

// per portarlo via, il quiz; se si sbaglia la guardia si volta e il gattino fa la statua
function quiz(o,t){ const Q=o.quiz, opz=(M.regole&&M.regole.mescola_opzioni===false)?Q.opzioni:mescola(Q.opzioni);
 $('.guardia').classList.remove('voltata'); $('.gatto').classList.remove('statua');
 const r=riquadro(figura(M,o)+`<h3>${esc(Q.domanda)}</h3>`); bottoni(r,opz.map(x=>({t:esc(x.testo),cls:'opz',f:()=>x.giusta?riuscito(o,t):fallito(o,t)})));
 bottoni(r,[{t:UI.torna,f:chiudiRiq}]); }
function fallito(o,t){ const Gd=M.guardia||{}; $('.guardia').classList.add('voltata'); $('.gatto').classList.add('statua'); T3().voltata=T3().statua=true; if(window.suonoMiao) suonoMiao('allarme');
 const r=riquadro(`<h3>🗿 ${esc(Gd.furto_fallito||'')}</h3><div class="box indizio"><b>${UI.indizio}:</b> ${esc(o.quiz.indizio||'')}</div>`);
 setTimeout(()=>{ bottoni(r,[{t:UI.riprova,f:()=>{ T3().voltata=T3().statua=false; quiz(o,t+1); }},{t:UI.torna,f:()=>{ $('.guardia').classList.remove('voltata'); $('.gatto').classList.remove('statua'); chiudiRiq(); }}]); },1200); }
function riuscito(o,t){ const S=stato(M.id), s=stelleDa(M,t); if(!S.presi.includes(o.id)) S.presi.push(o.id); S.stelle[o.id]=s; disegna(); if(window.suonoMiao) suonoMiao('gioia');
 const r=riquadro(figura(M,o,'grande')+`<h3>✨ ${esc((M.guardia&&M.guardia.furto_riuscito)||'')}</h3><div class="stelle">${UI.stelle(s)}</div><div class="box"><b>${UI.spiega}:</b> ${esc(o.quiz.spiegazione||'')}</div>`);
 if(o.battuta_napoleone) dice(o.battuta_napoleone,6000);
 const fine=S.presi.length>=daPortare(M); bottoni(r,[{t:fine?UI.avanti:UI.torna,f:fine?chiusura:chiudiRiq}]); }

// dopo l'ultimo totem: la battuta di chiusura e il bonus dell'ordine per data
function chiusura(){ const S=stato(M.id), P=M.personaggio||{}; dice(P.chiusura||'',0); S.fatto=true; disegna();
 const B=M.regole&&M.regole.bonus_finale; if(!B||B.tipo!=='ordina_per_data'){ const r=riquadro(`<h3>${esc(M.titolo||'')}</h3>`); bottoni(r,[{t:UI.tana,f:ritorno}]); return; }
 bonus(B); }
function bonus(B){ const S=stato(M.id), oggetti=S.presi.map(id=>M.oggetti.find(o=>o.id===id)).filter(Boolean), giusto=oggetti.slice().sort((a,b)=>a.ordine-b.ordine), scelta=[];
 const r=riquadro(`<h3>⏳ ${UI.bonusTit}</h3><p>${esc(B.descrizione||'')}</p><div class="ordina"></div><div class="esito"></div>`), box=r.querySelector('.ordina');
 for(const o of mescola(oggetti)){ const d=document.createElement('div'); d.className='ogg'; d.innerHTML=figura(M,o)+`<b>${esc(o.nome)}</b><span class="n"></span>`;
  d.onclick=()=>{ scelta.push(o); d.classList.add('scelto'); d.querySelector('.n').textContent=scelta.length;
   if(scelta.length===oggetti.length){ const ok=scelta.every((x,i)=>x===giusto[i]), es=r.querySelector('.esito');
    if(ok){ S.bonus=true; es.innerHTML=`<div class="box">🏅 ${esc(UI.bonusOk(B.ricompensa||''))}</div>`; if(window.suonoMiao) suonoMiao('gioia'); bottoni(r,[{t:sfidaDi()?UI.avanti:UI.tana,f:dopoBonus}]); }
    else { es.innerHTML=`<div class="box indizio">${UI.bonusNo}<br>${giusto.map(x=>esc(x.data_testo+' · '+x.nome)).join('<br>')}</div>`; bottoni(r,[{t:UI.bonusRiprova,f:()=>bonus(B)},{t:sfidaDi()?UI.avanti:UI.tana,f:dopoBonus}]); } } };
  box.appendChild(d); } }
// la sfida finale (campo del modulo; richiesta del 20 novembre 2026
function ruoloDi(p){ return (p.rango==='guaritore'||p.via==='guaritore')?'guaritore':(p.rango==='guerriero'||p.leader||p.via==='guerriero')?'guerriero':null; }
function sfidaDi(){ const sf=M&&M.sfida_finale, r=ruoloDi(G.p); return sf&&r&&sf[r]&&!stato(M.id).sfidaVinta?sf[r]:null; }
function dopoBonus(){ const F=sfidaDi(); if(!F) return ritorno(); if(F.tipo==='duello_tattico') return duelloTattico(F); if(F.tipo==='cura') return curaFinale(F); ritorno(); }
function duelloTattico(F){ const P=M.personaggio||{}, mosse=F.mosse, nr=P.nome||''; let mie=0, sue=0, k=0; T3().duello=true; sc.classList.add('lato'); dice(F.sfida||'',0);
 const r0=riquadro(`<h3>${UI.sfidaTit}</h3><p>${esc(F.sfida||'')}</p><div class="box">${esc(F.regole||'')}</div>`); bottoni(r0,[{t:UI.avanti,f:prova}]);
 function prova(){ if(mie>=2||sue>=2) return fine(); k++; const lui=mosse[Math.floor(Math.random()*mosse.length)], vero=Math.random()<0.75, mostra=vero?lui:mosse[Math.floor(Math.random()*mosse.length)];
  const r=riquadro(`<h3>⚔️ ${UI.scontro(k,mie,sue)}</h3><div class="box">👀 ${esc(mostra.indizio||'')}</div><p>${UI.mossa}</p>`);
  bottoni(r,mosse.map(x=>({t:x.emoji+' '+esc(x.nome),cls:'opz',f:()=>{ const vince=x.batte===lui.id, perde=lui.batte===x.id; T3().colpo=performance.now(); if(vince) mie++; else if(perde) sue++;
   if(window.suonoGraffio) suonoGraffio(); const t=`${x.emoji} ${x.nome}  ·  ${lui.emoji} ${lui.nome}<br><b>${vince?UI.vintoS:perde?UI.persoS:UI.pariS}</b>`; const rr=riquadro(`<h3>${t}</h3>`); bottoni(rr,[{t:UI.avanti,f:prova}]); }}))); }
 function fine(){ T3().duello=false; sc.classList.remove('lato'); if(mie>=2){ stato(M.id).sfidaVinta=true; dice(F.vittoria||'',8000); acclamazione(F); }
  else { dice(F.sconfitta||'',8000); const r=riquadro(`<h3>${UI.sfidaTit}</h3><p>${esc(F.sconfitta||'')}</p>`); bottoni(r,[{t:UI.riprova,f:()=>duelloTattico(F)},{t:UI.tana,f:ritorno}]); } } }
function curaFinale(F){ const passi=F.passi||[]; let i=0; T3().duello=true; T3().colpo=0; sc.classList.add('lato'); dice(F.sfida||'',0); const r0=riquadro(`<h3>${UI.curaTit}</h3><p>${esc(F.sfida||'')}</p>`); bottoni(r0,[{t:UI.avanti,f:passo}]);
 function passo(){ if(i>=passi.length){ T3().duello=false; stato(M.id).sfidaVinta=true; dice(F.vittoria||'',8000); return acclamazione(F); } const q=passi[i];
  const r=riquadro(`<h3>🌿 ${UI.passo(i+1,passi.length)} · ${esc(q.domanda)}</h3>`); bottoni(r,mescola(q.opzioni).map(x=>({t:esc(x.testo),cls:'opz',f:()=>{
   if(x.giusta){ i++; const rr=riquadro(`<h3>✨ ${esc(x.testo)}</h3><div class="box"><b>${UI.spiega}:</b> ${esc(q.spiegazione||'')}</div>`); bottoni(rr,[{t:UI.avanti,f:passo}]); }
   else { const rr=riquadro(`<h3>🤔 ${esc(x.testo)}</h3><div class="box indizio"><b>${UI.indizio}:</b> ${esc(q.indizio||'')}</div>`); bottoni(rr,[{t:UI.riprova,f:passo}]); } }}))); } }
function acclamazione(F){ const A=F.acclamazione||{}; T3().folla=A.bandiera||'tricolore'; T3().follaDa=performance.now(); sc.classList.add('lato'); if(window.suonoMiaoGrande) suonoMiaoGrande();
 const ar=$('.arrivo'); ar.innerHTML=`«${esc(A.grido||'')}»<small>${esc(A.chi||'')}</small>`; ar.classList.add('si'); setTimeout(()=>ar.classList.remove('si'),5000);
 setTimeout(()=>{ const r=riquadro(`<h3>🎉 ${esc(A.chi||'')}: «${esc(A.grido||'')}»</h3><p>${esc(A.descrizione||'')}</p>`+(Array.isArray(F.riquadro)?`<div class="box"><b>📜 ${esc(F.riquadro[0])}</b><br>${esc(F.riquadro[1]||'')}</div>`:'')); bottoni(r,[{t:UI.tana,f:()=>{ T3().folla=null; sc.classList.remove('lato'); ritorno(); }}]); },2500); }
function ritorno(){ const S=stato(M.id); if(hud){ esci3D(()=>{ const k=(typeof TANE!=='undefined'?TANE:[]).find(k=>tanaGiusta(k,G.p)); if(k&&typeof entraTana==='function') entraTana(k); }); } else chiudi(); if(typeof log==='function') log(UI.log(M.titolo||''),'#d9c8ff'); if(typeof spirito==='function'&&!S.premiato){ S.premiato=true; spirito(10,UI.motivo); } }

// la porta nel pannello, la prima proposta del personaggio, lo scaffale nella tana
function sceltaModulo(){ const lista=Object.values(MODULI); if(!lista.length) return; if(lista.length===1) return porta(lista[0]);
 modale(UI.porta,UI.scegli,[...lista.map(m=>({t:'🕰️ '+esc(m.titolo||m.id),f:()=>porta(m)})),{t:UI.nonOra}]); }
function aggiornaScaffale(){ if(typeof G==='undefined'||!G||!G.p){ scaffale.classList.remove('si'); portaBox.style.display='none'; return; }
 const ci=Object.keys(MODULI).length>0&&!!T3().campo; portaBox.style.display=ci&&!hud?'':'none'; if(ci&&portaBox.dataset.ok!=='1'){ portaBox.dataset.ok='1'; portaBox.innerHTML=UI.porta+`<small>👉 ${UI.portaSub3D}</small>`; }
 const inTana=G.dentro&&typeof tanaGiusta==='function'&&tanaGiusta(G.dentro,G.p), T=(G.st&&G.st.tempo)||{}, tutti=[];
 if(inTana) for(const id in T){ const m=MODULI[id]; if(!m) continue; const presi=T[id].presi.map(x=>m.oggetti.find(o=>o.id===x)).filter(Boolean), primo=presi.slice().sort((a,b)=>a.ordine-b.ordine)[0];
  for(const o of presi) tutti.push({m,o,oro:T[id].bonus&&o===primo}); }
 if(!tutti.length){ scaffale.classList.remove('si'); scaffale.dataset.k=''; return; }
 tutti.sort((a,b)=>a.o.ordine-b.o.ordine); const k=tutti.map(x=>x.m.id+x.o.id+(x.oro?'*':'')).join(','); scaffale.classList.add('si'); if(scaffale.dataset.k===k) return; scaffale.dataset.k=k;
 scaffale.innerHTML=UI.scaffale+'<div class="lista"></div>'; const L=scaffale.querySelector('.lista');
 for(const x of tutti){ const d=document.createElement('div'); d.className='t'+(x.oro?' oro':''); d.innerHTML=figura(x.m,x.o)+esc(x.o.etichetta_tana||x.o.nome);
  d.onclick=e=>{ e.stopPropagation(); if(paused) return; modale(esc(x.o.etichetta_tana||x.o.nome),`<div style="text-align:center;font-size:64px">${segnaposto(x.o)}</div><b>${esc(x.o.nome)}</b> · ${esc(x.o.data_testo)}<br><br>${esc(x.o.frammento)}`,[{t:'🗿'}]); };
  L.appendChild(d); } }
window.STANZA.porta=porta; window.STANZA.apri=apri; window.STANZA.chiudi=chiudi;

addEventListener('DOMContentLoaded',()=>{ const sc3=document.getElementById('scena3')||document.body; sc3.appendChild(sc); sc3.appendChild(scaffale);
 const inv=document.getElementById('inventario'); if(inv) inv.parentNode.insertBefore(portaBox,inv);
 portaBox.addEventListener('click',()=>{ if(typeof G==='undefined'||!G||paused||(typeof scena!=='undefined'&&scena)||G.raid||hud) return; const c=T3().campo; if(c&&!G.dentro&&dist(G.p,c)<45) return sceltaModulo(); if(c){ if(G.dentro&&typeof esciTana==='function') esciTana(); vaiPorta=true; setTimeout(()=>avviaGuida('punto',{x:c.x,y:c.y+26}),G.dentro?1200:0); } else sceltaModulo(); });
 // con la stanza aperta, la tastiera non muove il gatto; Esc esce dalla porta
 addEventListener('keydown',e=>{ if(!aperta) return; e.stopImmediatePropagation(); if(e.code==='Escape'){ e.preventDefault(); chiudi(); } },true);
 // la porta del tempo sta nel bosco della Felce (correzione del 20 novembre 2026
 //): un punto lontano da acqua, tronchi, campi e grande gatto; si apre quando il gatto arriva a metà della vita (ETA_FINE/2 lune)
 // e da allora resta aperta per tutta la partita (G.st.tempoPorta)
 const puntoBosco=()=>{ const S=window.SOLIDI||[], C=G.colosso, cm=CLAN.felce.campo; let best=null, bd=-1; const r=mulberry32(777);
  for(let k=0;k<400;k++){ const x=80+r()*(FX0-160), y=120+r()*(WH-240); if(Math.hypot(x-cm.x,y-cm.y)<cm.r+110) continue; let bagnato=false; for(let q=0;q<6.283;q+=0.79) if(acqua(x+Math.cos(q)*80,y+Math.sin(q)*80)) bagnato=true; if(bagnato||acqua(x,y)) continue;
   if(C&&Math.hypot(x-C.x,y-C.y)<260) continue; let d=999; for(const o of S) d=Math.min(d,Math.hypot(x-o.x,y-o.y)-(o.r||8)); if(d>bd){ bd=d; best={x,y}; } } return best; };
 const metaVita=()=>typeof ETA_FINE!=='undefined'?ETA_FINE/2:35;
 if(typeof mappaAntica==='function'){ const o=mappaAntica; mappaAntica=function(){ if(G&&G.dentro===KST) return; return o.apply(this,arguments); }; } // durante il viaggio nel tempo niente mappa del bosco
 // uscire dalla sala per la porta riporta dove si era; nella sala gli arredi solidi sono i piedistalli, la scrivania e il personaggio
 if(typeof esciTana==='function'){ const o=esciTana; esciTana=function(){ if(G&&G.dentro===KST) return esci3D(); return o.apply(this,arguments); }; }
 if(typeof arrediSolidi==='function'){ const o=arrediSolidi; arrediSolidi=function(p,k,d){ if(k!==KST) return o.apply(this,arguments);
  const fuori=(cx,cy,r)=>{ const dx=p.x-cx, dy=p.y-cy, dd=Math.hypot(dx,dy); if(dd<r&&dd>0.01){ p.x=cx+dx/dd*r; p.y=cy+dy/dd*r; } };
  for(const q of (T3().ped||[])) fuori(q.x,q.y,5.5); fuori(d.x+NAPO.x,d.y+NAPO.y,5);
  if(p.x>d.x+SCRIV.x0-2&&p.x<d.x+SCRIV.x1+2&&p.y>d.y+SCRIV.y0-2&&p.y<d.y+SCRIV.y1+2) p.y=d.y+SCRIV.y1+2; }; }
 // Spazio nella sala: guardare l'oggetto del piedistallo vicino, parlare con il personaggio, uscire dalla porta
 if(typeof contestoTana==='function'){ const o=contestoTana; contestoTana=function(){ const p=G.p; if(G.dentro!==KST) return o.apply(this,arguments); const d=L[KST];
  if(!M) return null; let best=null, bd=17; for(const q of (T3().ped||[])){ const dd=Math.hypot(p.x-q.x,p.y-q.y); if(dd<bd){ bd=dd; best=q; } }
  if(best) return {t:UI.esamina(best.o.nome),f:()=>leggi(best.o)};
  if(Math.hypot(p.x-d.x-NAPO.x,p.y-d.y-NAPO.y)<17){ const P=M.personaggio||{}; return {t:UI.parla(P.nome||''),f:()=>dice(stato(M.id).fatto?(P.chiusura||''):(P.regola_furto||P.proposta_porta||''),9000)}; }
  if(p.y-d.y>d.r*0.55) return {t:UI.esciT,f:()=>esci3D()}; return null; }; }
 // al campo, vicino alla porta del tempo, Spazio parla con il personaggio
 if(typeof azioneSpazio==='function'){ const o=azioneSpazio; azioneSpazio=function(){ const c=T3().campo, p=G.p; if(c&&!G.dentro&&!G.raid&&dist(p,c)<42){ const m=Object.values(MODULI)[0]; return {t:UI.parla((m&&m.personaggio&&m.personaggio.nome)||''),f:sceltaModulo}; } return o.apply(this,arguments); }; }
 carica().then(()=>{ setInterval(aggiornaScaffale,500); const prima=Object.values(MODULI)[0]; if(prima) T3().pers=prima.personaggio||{};
  setInterval(()=>{ if(typeof G==='undefined'||!G||!G.p) return; const p=G.p;
   // una partita salvata dentro la sala riparte al campo
   if(G.dentro===KST&&!hud){ G.dentro=null; const cm=CLAN.felce.campo; p.x=cm.x; p.y=cm.y+40; }
   // arrivati alla porta dal pannello, parla il personaggio
   if(vaiPorta&&T3().campo&&!G.dentro&&dist(p,T3().campo)<46&&!paused){ vaiPorta=false; p.guida=null; sceltaModulo(); }
   // a metà della vita la porta si apre nel bosco, e un annuncio lo dice
   const SP=(G.st=G.st||{}); if(!Object.keys(MODULI).length) return; if(SP.tempoPorta){ T3().campo=SP.tempoPorta; } else { T3().campo=null; if(typeof lune!=='function'||lune(p)<metaVita()) return; }
   if(paused||aperta||hud||(typeof scena!=='undefined'&&scena)||(typeof recitaAtt!=='undefined'&&recitaAtt)||G.raid||G.dentro||G.golem||G.gita) return;
   if(typeof storiaLibera==='function'&&!storiaLibera(8)) return;
   if(!SP.tempoPorta){ SP.tempoPorta=puntoBosco(); T3().campo=SP.tempoPorta; }
   const m=Object.values(MODULI).find(m=>!stato(m.id).proposto); if(!m) return; stato(m.id).proposto=true; if(typeof segnaEvento==='function') segnaEvento();
   const t=UI.portaCampo((m.personaggio&&m.personaggio.nome)||''); if(typeof annuncia==='function') annuncia('🕰️ '+t,'#d9c8ff'); if(typeof log==='function') log('🕰️ '+t+'.','#d9c8ff'); if(typeof mostraToast==='function') mostraToast('🕰️ '+t,'#d9c8ff'); },2000); }); });
})();
