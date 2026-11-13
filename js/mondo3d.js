// Gattini 3D — il mondo e i gatti in tre dimensioni.
// La logica del gioco (G, gatti, missioni, riti) è quella della v1, in index.html: qui la si legge e la si disegna.
// Coordinate: la mappa della v1 è in pixel (x verso est, y verso sud); in 3D X = x·K, Z = y·K, Y in alto.
import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';
import {mergeGeometries,mergeVertices} from 'three/addons/utils/BufferGeometryUtils.js';

const K=0.02;                       // metri per pixel della v1
const R=(()=>{let s=11;return()=>{s=(s*16807)%2147483647;return s/2147483647;};})();
const wrap=a=>{ while(a>Math.PI) a-=2*Math.PI; while(a<-Math.PI) a+=2*Math.PI; return a; };

// ---------- motore ----------
const scena3=document.getElementById('scena3');
const renderer=new THREE.WebGLRenderer({antialias:true});
renderer.outputColorSpace=THREE.SRGBColorSpace; renderer.toneMapping=THREE.ACESFilmicToneMapping; renderer.toneMappingExposure=1.45;
renderer.shadowMap.enabled=true; renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.domElement.id='gl'; scena3.insertBefore(renderer.domElement,scena3.firstChild);
const scene=new THREE.Scene(), cielo=new THREE.Color('#9fc3d6'); scene.background=cielo.clone(); scene.fog=new THREE.Fog('#a9c6cf',12,34);
const camera=new THREE.PerspectiveCamera(50,1,0.05,80);
const emi=new THREE.HemisphereLight('#e8f4ff','#93a56c',2.1); scene.add(emi);
const sole=new THREE.DirectionalLight('#ffe8c0',2.9); sole.castShadow=true; sole.shadow.mapSize.set(1024,1024);
Object.assign(sole.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:0.5,far:40}); sole.shadow.bias=-0.0005; sole.shadow.radius=3; scene.add(sole); scene.add(sole.target);

// ---------- terreno ----------
const LX=WW*K, LZ=WH*K;
function quota(X,Z){ // altezza del suolo in metri
 let y=Math.sin(X*0.31)*0.18+Math.cos(Z*0.27)*0.15+Math.sin((X+Z)*0.8)*0.04;
 const x=X/K; if(x>FX0-12&&x<FX1+12){ const t=Math.min(1,Math.min(x-(FX0-12),(FX1+12)-x)/18); y-=0.32*t; }
 for(const k of ['lago','stagno']){ const l=L[k], d=Math.hypot(x-l.x,Z/K-l.y); if(d<l.r+12) y-=0.25*Math.min(1,(l.r+12-d)/16); }
 for(const k in CLAN){ const c=CLAN[k].campo, d=Math.hypot(x-c.x,Z/K-c.y); if(d<c.r+30){ const t=Math.min(1,(c.r+30-d)/30); y=y*(1-t)+0.05*t; } }
 return y;
}
const quotaPx=(x,y)=>quota(x*K,y*K);
const geo=new THREE.PlaneGeometry(LX,LZ,240,180); geo.rotateX(-Math.PI/2); geo.translate(LX/2,0,LZ/2);
const colori=new Float32Array(geo.attributes.position.count*3); geo.setAttribute('color',new THREE.BufferAttribute(colori,3));
const tinta={felce:new THREE.Color('#4f7f3a'),nebbia:new THREE.Color('#5f7f6a'),pietre:new THREE.Color('#8a826c'),fiume:new THREE.Color('#9c8a62'),campo:new THREE.Color('#b59b6a')};
const rnd0=geo.attributes.position.array.map(()=>R());
let conqVisto='';
function coloraTerreno(){
 const p=geo.attributes.position, c=new THREE.Color();
 for(let i=0;i<p.count;i++){ const X=p.getX(i), Z=p.getZ(i), x=X/K, y=Z/K; p.setY(i,quota(X,Z));
  let t=G?territorio(x,y):(x<FX0?'felce':x<FX1?'fiume':y<900?'nebbia':'pietre'); c.copy(t==='fiume'?tinta.fiume:tinta[t]);
  if(t==='felce'&&x>FX1) c.lerp(new THREE.Color('#6a8f42'),0.5);
  for(const k in CLAN){ const cm=CLAN[k].campo; if(Math.hypot(x-cm.x,y-cm.y)<cm.r) c.copy(tinta.campo); }
  const v=0.86+rnd0[i]*0.22; colori[i*3]=c.r*v; colori[i*3+1]=c.g*v; colori[i*3+2]=c.b*v; }
 p.needsUpdate=true; geo.attributes.color.needsUpdate=true; geo.computeVertexNormals();
}
coloraTerreno();
const grana=(()=>{ const c=document.createElement('canvas'); c.width=c.height=256; const g=c.getContext('2d'), im=g.createImageData(256,256); for(let i=0;i<im.data.length;i+=4){ const v=200+R()*55; im.data[i]=im.data[i+1]=im.data[i+2]=v; im.data[i+3]=255; } g.putImageData(im,0,0); const t=new THREE.CanvasTexture(c); t.wrapS=t.wrapT=THREE.RepeatWrapping; t.repeat.set(120,90); t.colorSpace=THREE.SRGBColorSpace; return t; })();
const suolo=new THREE.Mesh(geo,new THREE.MeshStandardMaterial({vertexColors:true,roughness:1,map:grana})); suolo.receiveShadow=true; scene.add(suolo);
// acqua
const ondeTex=(()=>{ const c=document.createElement('canvas'); c.width=c.height=128; const g=c.getContext('2d'); g.fillStyle='#fff'; g.fillRect(0,0,128,128);
 for(let i=0;i<46;i++){ const x=R()*128, y=R()*128, w=10+R()*26; g.strokeStyle=`rgba(${R()<0.5?'255,255,255':'120,170,200'},${0.25+R()*0.35})`; g.lineWidth=1+R()*1.5; g.beginPath(); g.moveTo(x,y); g.quadraticCurveTo(x+w/2,y-3-R()*3,x+w,y); g.stroke(); }
 const t=new THREE.CanvasTexture(c); t.wrapS=t.wrapT=THREE.RepeatWrapping; t.repeat.set(3,10); t.colorSpace=THREE.SRGBColorSpace; return t; })();
const acquaMat=new THREE.MeshStandardMaterial({color:'#4a94c6',roughness:0.15,metalness:0.1,transparent:true,opacity:0.88,map:ondeTex});
{ const f=new THREE.Mesh(new THREE.PlaneGeometry((FX1-FX0+16)*K,LZ),acquaMat); f.rotation.x=-Math.PI/2; f.position.set((FX0+FX1)/2*K,-0.09,LZ/2); scene.add(f);
  for(const k of ['lago','stagno','pozza']){ const l=L[k]; const m=new THREE.Mesh(new THREE.CircleGeometry(l.r*K,40),acquaMat); m.rotation.x=-Math.PI/2; m.position.set(l.x*K,quotaPx(l.x,l.y)+(k==='pozza'?0.02:0.04),l.y*K); scene.add(m); } }
const sassoMat=new THREE.MeshStandardMaterial({color:'#9a978c',roughness:1,flatShading:true});
for(const gy of GUADI) for(let i=0;i<4;i++){ const s=new THREE.Mesh(new THREE.DodecahedronGeometry(0.22,0),sassoMat); s.scale.set(1,0.45,0.8); s.position.set((FX0+10+i*20)*K,-0.12,(gy+(i%2)*7-3)*K); s.castShadow=s.receiveShadow=true; scene.add(s); }

// ---------- vegetazione e rocce (istanze) ----------
const OSTACOLI=[]; // alberi, cespugli e rocce che possono coprire il gatto
const ZERO=new THREE.Matrix4().makeScale(0,0,0), SINGOLI=[]; // rocce e tane: oggetti singoli che possono coprire il gatto
function istanze(geom,mat,lista,f,ostacolo=true,ingombro=0.55,tinta=null){ if(!lista.length) return null; const m=new THREE.InstancedMesh(geom,mat,lista.length), o=new THREE.Object3D();
 const info=[]; lista.forEach((d,i)=>{ f(d,o); o.updateMatrix(); m.setMatrixAt(i,o.matrix); info.push({x:o.position.x,z:o.position.z,r:ingombro*Math.max(o.scale.x,o.scale.z),m:o.matrix.clone(),nascosto:false}); });
 if(tinta){ const c=new THREE.Color(); lista.forEach((d,i)=>{ tinta(d,c); m.setColorAt(i,c); }); }
 m.castShadow=true; m.receiveShadow=true; scene.add(m);
 if(ostacolo){ // il: la stessa pianta, trasparente, al posto di quella che copre il gatto
  const gm=mat.clone(); gm.transparent=true; gm.opacity=0.16; gm.depthWrite=false;
  const fa=new THREE.InstancedMesh(geom,gm,lista.length); for(let i=0;i<lista.length;i++) fa.setMatrixAt(i,ZERO);
  if(m.instanceColor){ fa.instanceColor=m.instanceColor.clone(); } fa.frustumCulled=false; scene.add(fa);
  OSTACOLI.push({m,info,fa}); }
 return m; }
function liberaVisuale(){ // ciò che sta tra la telecamera e il gatto diventa trasparente; ciò che sta dietro il gatto resta solido
 if(G.dentro) return;
 const ax=camera.position.x, az=camera.position.z, bx=cam3.tx, bz=cam3.tz, dx=bx-ax, dz=bz-az, l2=dx*dx+dz*dz||1, lun=Math.sqrt(l2);
 const CC=G.colosso;
 const vistaColosso=(x,z,r)=>{ const sx=CC.x*K, sz=CC.y*K, ex=sx-ax, ez=sz-az, L2=ex*ex+ez*ez||1, t=Math.max(0,Math.min(1,((x-ax)*ex+(z-az)*ez)/L2)); return Math.hypot(x-(ax+ex*t),z-(az+ez*t))<r+1.6; }; // durante la festa nulla copre il grande gatto alla telecamera
 const davanti=(x,z,r)=>{ const t=((x-ax)*dx+(z-az)*dz)/l2; if(t<-0.1||t>1-0.04/lun) return false; return Math.hypot(x-(ax+dx*t),z-(az+dz*t))<r+0.35; };
 for(const {m,info,fa} of OSTACOLI){ let cambiato=false;
  for(let i=0;i<info.length;i++){ const it=info[i], rad=!!CC&&(Math.hypot(it.x-CC.x*K,it.z-CC.y*K)<(CC.festa?8.5:4.5)||(CC.vivo&&vistaColosso(it.x,it.z,it.r))), na=rad?2:(davanti(it.x,it.z,it.r)?1:0); // intorno al grande gatto di pietra c'è una radura: lì alberi e massi spariscono del tutto
   if(na!==(it.nascosto|0)){ it.nascosto=na; m.setMatrixAt(i,na?ZERO:it.m); fa.setMatrixAt(i,na===1?it.m:ZERO); cambiato=true; } }
  if(cambiato){ m.instanceMatrix.needsUpdate=true; fa.instanceMatrix.needsUpdate=true; } }
 for(const it of SINGOLI){
  if(!it.mats){ it.mats=[]; it.o.traverse(o=>{ if(o.isMesh){ o.material=Array.isArray(o.material)?o.material.map(x=>x.clone()):o.material.clone(); for(const x of [].concat(o.material)) it.mats.push(x); } }); }
  let na=davanti(it.x,it.z,it.r); if(!na){ const t2=((it.x-ax)*dx+(it.z-az)*dz)/l2; if(t2>=1-0.04/lun&&t2<1+it.r*0.7/lun&&Math.hypot(it.x-(ax+dx*t2),it.z-(az+dz*t2))<it.r+0.2) na=true; } // massi e tane che si sovrappongono ai protagonisti
  if(it.roccia&&G.p.sopra) na=false;
  if(na!==!!it.vel){ it.vel=na; for(const x of it.mats){ x.transparent=na; x.opacity=na?0.3:1; x.depthWrite=!na; x.needsUpdate=true; } } }
}
// forme irregolari: un rumore che dipende dalla posizione spinge i vertici dentro e fuori
const hash3=(x,y,z)=>{ const v=Math.sin(x*127.1+y*311.7+z*74.7)*43758.5453; return (v-Math.floor(v))*2-1; };
const rumore3=(x,y,z,f)=>{ const g=(a,b,c)=>hash3(Math.floor(a),Math.floor(b),Math.floor(c)); const X=x*f,Y=y*f,Z=z*f, fx=X-Math.floor(X), fy=Y-Math.floor(Y), fz=Z-Math.floor(Z), sm=t=>t*t*(3-2*t);
 let v=0; for(const [i,j,k] of [[0,0,0],[1,0,0],[0,1,0],[1,1,0],[0,0,1],[1,0,1],[0,1,1],[1,1,1]]) v+=g(X+i,Y+j,Z+k)*(i?sm(fx):1-sm(fx))*(j?sm(fy):1-sm(fy))*(k?sm(fz):1-sm(fz)); return v; };
function ruvido(g,amp,freq=2.5){ g=g.clone(); g.deleteAttribute('normal'); g.deleteAttribute('uv'); g=mergeVertices(g); const p=g.attributes.position;
 for(let i=0;i<p.count;i++){ const x=p.getX(i),y=p.getY(i),z=p.getZ(i), n=rumore3(x,y,z,freq)*0.7+rumore3(x,y,z,freq*2.3)*0.3, k=1+amp*n; p.setXYZ(i,x*k,y*k,z*k); }
 g.computeVertexNormals(); return g; }
const R2=(()=>{let v=99;return()=>{v=(v*16807)%2147483647;return v/2147483647;};})();
function chioma(n,rmin,rmax,larg,alto,base){ const parti=[]; for(let i=0;i<n;i++){ const r=rmin+R2()*(rmax-rmin), a=R2()*6.283, d=Math.sqrt(R2())*larg; parti.push(ruvido(new THREE.IcosahedronGeometry(r,2),0.22,2.2).translate(Math.cos(a)*d,base+R2()*alto,Math.sin(a)*d)); } return mergeGeometries(parti); }
const verde=(h,s,l,var_)=>(d,c)=>c.setHSL(h+(d.v-0.5)*0.05,s,l*(1-var_/2+d.v*var_));
const tipi={albero:[],pino:[],felce:[],cesp:[],canne:[],roccia:[],arbusto:[],salice:[]};
for(const d of DECOR){ const v=d.v;
 const t=d.z==='felce'?(v<0.36?'albero':v<0.46?'pino':v<0.8?'felce':'cesp'):d.z==='nebbia'?(v<0.2?'salice':v<0.62?'canne':'cesp'):(v<0.55?'roccia':v<0.82?'arbusto':'pino'); tipi[t].push(d); }
const pos=(d,o,y=0)=>{ o.position.set(d.x*K,quotaPx(d.x,d.y)+y,d.y*K); o.rotation.set(0,d.v*40,0); o.scale.setScalar(d.s); };
const bianco=(rough=0.95,extra={})=>new THREE.MeshStandardMaterial({color:'#ffffff',roughness:rough,...extra});
// tronchi un po' storti, con la corteccia scura
const tronco=ruvido(new THREE.CylinderGeometry(0.1,0.21,2.6,10,6).translate(0,1.3,0),0.08,3);
istanze(tronco,bianco(1),[...tipi.albero,...tipi.salice],(d,o)=>{pos(d,o); o.rotation.z=(d.v-0.5)*0.12;},true,0.3,(d,c)=>c.setHSL(0.07,0.35,0.2+d.v*0.08));
// latifoglie: due chiome diverse, fatte di più masse
const metà=Math.ceil(tipi.albero.length/2);
istanze(chioma(9,0.55,0.85,0.8,1.0,2.6),bianco(),tipi.albero.slice(0,metà),(d,o)=>pos(d,o),true,1.3,verde(0.28,0.45,0.27,0.35));
istanze(chioma(7,0.6,0.95,0.7,1.3,2.5),bianco(),tipi.albero.slice(metà),(d,o)=>pos(d,o),true,1.3,verde(0.25,0.5,0.3,0.35));
// salici: chioma ampia e chiara
istanze(chioma(8,0.55,0.8,1.0,0.6,2.3),bianco(),tipi.salice,(d,o)=>{pos(d,o); o.scale.set(d.s*1.2,d.s*0.9,d.s*1.2);},true,1.2,verde(0.24,0.25,0.42,0.2));
// abeti a palchi
const abete=mergeGeometries([0,1,2,3].map(i=>ruvido(new THREE.ConeGeometry(0.95-i*0.19,1.25,10,2),0.1,2.5).translate(0,1.3+i*0.62,0)));
istanze(new THREE.CylinderGeometry(0.07,0.12,1.4,7).translate(0,0.7,0),bianco(1),tipi.pino,(d,o)=>pos(d,o),true,0.2,(d,c)=>c.setHSL(0.07,0.35,0.2));
istanze(abete,bianco(),tipi.pino,(d,o)=>pos(d,o),true,0.95,verde(0.36,0.4,0.18,0.3));
// felci: fronde arcuate attorno al centro
const fronda=()=>{ const g=new THREE.PlaneGeometry(0.11,0.55,2,6); const p=g.attributes.position; for(let i=0;i<p.count;i++){ const y=p.getY(i)+0.275, x=p.getX(i)*(1-y*1.3); p.setXYZ(i,x,y,y*y*0.9); } g.computeVertexNormals(); return g; };
const felce=mergeGeometries([...Array(9)].map((_,i)=>fronda().rotateX(-0.55-(i%3)*0.15).rotateY(i*0.7)));
istanze(felce,bianco(0.9,{side:THREE.DoubleSide}),tipi.felce,(d,o)=>pos(d,o),false,0.4,verde(0.27,0.55,0.32,0.3));
// cespugli
const cespuglio=chioma(5,0.22,0.36,0.3,0.25,0.25);
istanze(cespuglio,bianco(),tipi.cesp,(d,o)=>{pos(d,o); o.scale.set(d.s,d.s*0.8,d.s);},true,0.5,(d,c)=>d.z==='nebbia'?c.setHSL(0.33,0.2,0.3+d.v*0.08):c.setHSL(0.28,0.45,0.22+d.v*0.08));
istanze(new THREE.CylinderGeometry(0.012,0.018,1.1,4).translate(0,0.55,0),bianco(1),tipi.canne.flatMap(d=>[0,1,2,3,4,5].map(k=>({...d,x:d.x+Math.cos(k*1.3+d.v*9)*9,y:d.y+Math.sin(k*1.3+d.v*9)*7,v:(d.v*7+k*0.13)%1}))),(d,o)=>{pos(d,o); o.rotation.z=(d.v-0.5)*0.25;},false,0.1,(d,c)=>c.setHSL(0.2,0.3,0.4+d.v*0.15));
// rocce scabre, a faccette
const sasso=ruvido(new THREE.DodecahedronGeometry(0.5,1),0.25,2.2);
// gli oggetti solidi del bosco, in pixel della v1: tronchi e massi (il gatto non li attraversa: js/leggende.js)
window.SOLIDI=[...[...tipi.albero,...tipi.salice,...tipi.pino].map(d=>({x:d.x,y:d.y,r:9*d.s})),...tipi.roccia.map(d=>({x:d.x,y:d.y,r:19*d.s}))];
istanze(sasso,bianco(1,{flatShading:true}),tipi.roccia,(d,o)=>{pos(d,o,0.08); o.scale.set(d.s,d.s*0.6,d.s*0.85);},true,0.5,(d,c)=>c.setHSL(0.1,0.06,0.42+d.v*0.15));
istanze(chioma(4,0.15,0.25,0.25,0.25,0.2),bianco(),tipi.arbusto,(d,o)=>pos(d,o),true,0.4,(d,c)=>c.setHSL(0.17,0.35,0.32+d.v*0.1));
{ // erba
 const filo=new THREE.PlaneGeometry(0.018,0.12,1,2); filo.translate(0,0.06,0); const lista=[];
 while(lista.length<18000){ const x=R()*WW, y=R()*WH; if(acqua(x,y)||inCampo(x,y,8)) continue; if(x>FX1&&y>900) continue; lista.push({x,y,s:0.6+R()*0.9,v:R()}); }
 const m=istanze(filo,bianco(0.9,{side:THREE.DoubleSide}),lista,(d,o)=>{pos(d,o); o.rotation.x=(d.v-0.5)*0.4;},false,0.1,(d,c)=>c.setHSL(0.24+d.v*0.05,0.45,0.3+d.v*0.12)); m.castShadow=false; }

// ---------- campi, siepi, tane, Roccia Alta ----------
const siepi=[];
for(const k in CLAN){ const cm=CLAN[k].campo, ing=CLAN[k].ingresso;
 for(let a=0;a<6.283;a+=0.09){ const d=Math.abs(((a-ing+Math.PI*3)%(Math.PI*2))-Math.PI); if(d<0.3) continue; siepi.push({x:cm.x+Math.cos(a)*(cm.r+18),y:cm.y+Math.sin(a)*(cm.r+18),s:0.8+R()*0.3,v:R()}); } }
istanze(cespuglio,bianco(),siepi,(d,o)=>{pos(d,o); o.scale.set(d.s,d.s*1.25,d.s);},true,0.5,(d,c)=>c.setHSL(0.3,0.45,0.17+d.v*0.07));
const buioMat=new THREE.MeshBasicMaterial({color:'#0a0604'}), rametti=new THREE.MeshStandardMaterial({color:'#4a3520',roughness:1});
const rocciaMat=new THREE.MeshStandardMaterial({color:'#9d978a',roughness:1,flatShading:true});
function entrata(g,r){ // l'imbocco scuro della tana, con un po' di profondità
 const ing=new THREE.Mesh(new THREE.CircleGeometry(r*0.4,20,0,Math.PI),buioMat); ing.position.set(0,0.004,r*0.97); g.add(ing);
 const fondo=new THREE.Mesh(new THREE.SphereGeometry(r*0.38,14,8,0,Math.PI*2,0,Math.PI/2),new THREE.MeshBasicMaterial({color:'#050302',side:THREE.BackSide})); fondo.scale.set(1,0.9,0.6); fondo.position.set(0,0,r*0.82); g.add(fondo);
 const ombra=new THREE.Mesh(new THREE.CircleGeometry(r*0.45,20),new THREE.MeshBasicMaterial({color:'#000',transparent:true,opacity:0.3,depthWrite:false})); ombra.rotation.x=-Math.PI/2; ombra.scale.y=0.6; ombra.position.set(0,0.01,r*1.05); g.add(ombra);
}
// ---------- l'interno delle tane: un piccolo tempio dipinto, visibile quando il gatto entra ----------
const pittura=(()=>{ // la parete: una roccia color ocra con gatti, zampe, spirali e soli dipinti, come in una grotta
 const c=document.createElement('canvas'); c.width=1024; c.height=160; const g=c.getContext('2d');
 g.fillStyle='#b89a74'; g.fillRect(0,0,1024,160);
 for(let i=0;i<2600;i++){ const v=150+R()*70|0; g.fillStyle=`rgba(${v},${v*0.82|0},${v*0.62|0},0.35)`; g.fillRect(R()*1024,R()*160,2+R()*6,2+R()*4); }
 const ocra=['#8a2e17','#a4521f','#3a2418','#b36a2a','#6e1f12'];
 const gatto=(x,y,s,col,dir)=>{ g.save(); g.translate(x,y); g.scale(s*dir,s); g.fillStyle=col; g.beginPath();
  g.ellipse(0,0,30,11,0,0,6.283); g.fill(); g.beginPath(); g.ellipse(30,-9,10,8,0,0,6.283); g.fill();
  g.beginPath(); g.moveTo(25,-14); g.lineTo(27,-25); g.lineTo(32,-15); g.moveTo(33,-15); g.lineTo(39,-23); g.lineTo(38,-12); g.fill();
  g.lineWidth=5; g.strokeStyle=col; g.lineCap='round'; g.beginPath(); for(const lx of [-22,-12,14,22]){ g.moveTo(lx,6); g.lineTo(lx+(lx<0?-4:4),24); } g.moveTo(-28,-4); g.quadraticCurveTo(-50,-10,-46,-34); g.stroke(); g.restore(); };
 const zampa=(x,y,s,col)=>{ g.fillStyle=col; g.beginPath(); g.ellipse(x,y,9*s,8*s,0,0,6.283); g.fill(); for(const [dx,dy] of [[-9,-11],[-3,-15],[4,-15],[10,-11]]){ g.beginPath(); g.ellipse(x+dx*s,y+dy*s,3.2*s,4*s,0,0,6.283); g.fill(); } };
 const spirale=(x,y,col)=>{ g.strokeStyle=col; g.lineWidth=3; g.beginPath(); for(let a=0;a<14;a+=0.2){ const r=a*1.6; g.lineTo(x+Math.cos(a)*r,y+Math.sin(a)*r); } g.stroke(); };
 const soleD=(x,y,col)=>{ g.strokeStyle=g.fillStyle=col; g.lineWidth=3; g.beginPath(); g.arc(x,y,11,0,6.283); g.fill(); for(let a=0;a<6.283;a+=0.52){ g.beginPath(); g.moveTo(x+Math.cos(a)*15,y+Math.sin(a)*15); g.lineTo(x+Math.cos(a)*24,y+Math.sin(a)*24); g.stroke(); } };
 for(let i=0;i<9;i++){ const x=50+i*112+R()*30, col=ocra[i%ocra.length];
  if(i%3===0) gatto(x,92,0.9+R()*0.4,col,R()<0.5?1:-1); else if(i%3===1){ gatto(x-20,100,0.6,col,1); gatto(x+30,95,0.6,ocra[(i+2)%5],-1); } else { soleD(x,50,ocra[(i+1)%5]); gatto(x,112,0.7,col,1); }
  zampa(x+45,40+R()*20,1,ocra[(i+3)%5]); if(R()<0.6) spirale(x-40,40,ocra[(i+4)%5]); }
 g.fillStyle='rgba(60,30,15,0.5)'; for(let x=0;x<1024;x+=14) g.fillRect(x,146,8,4); // una fascia di tacche, come un fregio
 const t=new THREE.CanvasTexture(c); t.colorSpace=THREE.SRGBColorSpace; t.wrapS=THREE.RepeatWrapping; return t; })();
const incisa=(()=>{ // la stele: pietra grigia con un gatto inciso e righe di segni
 const c=document.createElement('canvas'); c.width=128; c.height=192; const g=c.getContext('2d');
 g.fillStyle='#8e8a80'; g.fillRect(0,0,128,192); for(let i=0;i<900;i++){ const v=110+R()*60|0; g.fillStyle=`rgba(${v},${v},${v-8},0.5)`; g.fillRect(R()*128,R()*192,2,2); }
 g.strokeStyle='#3d3a34'; g.lineWidth=4; g.lineCap='round'; g.beginPath(); g.arc(64,52,30,0,6.283); g.stroke();
 g.beginPath(); g.moveTo(46,44); g.lineTo(50,24); g.lineTo(58,38); g.moveTo(70,38); g.lineTo(78,24); g.lineTo(82,44); g.stroke(); // orecchie
 g.fillStyle='#3d3a34'; g.beginPath(); g.ellipse(53,52,4,6,0,0,6.283); g.ellipse(75,52,4,6,0,0,6.283); g.fill();
 g.lineWidth=2.5; for(let r=0;r<6;r++){ let x=16; g.beginPath(); while(x<112){ const w=6+R()*10; g.moveTo(x,100+r*15); g.lineTo(x+w,100+r*15+(R()<0.4?-5:0)); x+=w+5; } g.stroke(); }
 const t=new THREE.CanvasTexture(c); t.colorSpace=THREE.SRGBColorSpace; return t; })();
const muroMat=new THREE.MeshStandardMaterial({map:pittura,side:THREE.BackSide,roughness:1});
const steleMat=new THREE.MeshStandardMaterial({map:incisa,roughness:1}), altareMat=new THREE.MeshStandardMaterial({color:'#7d766a',roughness:1,flatShading:true});
const ceraMat=new THREE.MeshStandardMaterial({color:'#efe2c4',roughness:0.6}), fiammaMat=new THREE.MeshBasicMaterial({color:'#ffcc66'});
const pavMat=new THREE.MeshStandardMaterial({color:'#5d4a33',roughness:1}), muschioMat=new THREE.MeshStandardMaterial({color:'#6f8f45',roughness:1});
function tana(x,y,rpx,tipo){ let g=new THREE.Group(); const r=rpx*K; g.position.set(x*K,quotaPx(x,y),y*K);
 const esterno=g; g=new THREE.Group(); esterno.add(g);
 if(tipo==='roccia'){ // grotta tra le rocce
  for(const [dx,dz,s,h] of [[-0.55,0,1.0,0.9],[0.55,0.05,0.95,0.85],[0,-0.45,1.2,1.1]]){ const m=new THREE.Mesh(ruvido(new THREE.DodecahedronGeometry(r*0.75,1),0.2,1.6),rocciaMat); m.position.set(dx*r,r*0.35*h,dz*r); m.scale.set(s,h*0.85,s); m.castShadow=m.receiveShadow=true; g.add(m); }
  const tetto=new THREE.Mesh(ruvido(new THREE.DodecahedronGeometry(r*0.7,1),0.2,1.6),rocciaMat); tetto.position.set(0,r*0.95,0.1*r); tetto.scale.set(1.3,0.5,1.1); tetto.castShadow=true; g.add(tetto);
  for(let i=0;i<8;i++){ const mu=new THREE.Mesh(new THREE.SphereGeometry(r*0.12,8,6),new THREE.MeshStandardMaterial({color:'#5f7f3a',roughness:1})); mu.scale.y=0.4; const a=R()*6.283; mu.position.set(Math.cos(a)*r*0.6,r*(0.9+R()*0.3),Math.sin(a)*r*0.5); g.add(mu); }
 } else { // cupola di rami (guerrieri), di felci (apprendisti) o di rovi (nursery)
  const col={rami:'#6b5233',felci:'#4f6b35',rovi:'#3c5a2b'}[tipo];
  const cupola=new THREE.Mesh(ruvido(new THREE.SphereGeometry(r,24,14,0,Math.PI*2,0,Math.PI/2),tipo==='rami'?0.1:0.16,tipo==='rami'?3:2.2),new THREE.MeshStandardMaterial({color:col,roughness:1})); cupola.scale.y=0.78; cupola.castShadow=cupola.receiveShadow=true; g.add(cupola);
  if(tipo==='rami') for(let i=0;i<22;i++){ const a=R()*6.283, b=0.2+R()*1.1, l=r*(0.6+R()*0.6); const st=new THREE.Mesh(new THREE.CylinderGeometry(0.012,0.02,l,5),rametti); st.position.set(Math.cos(a)*Math.cos(b)*r*0.98,Math.sin(b)*r*0.78,Math.sin(a)*Math.cos(b)*r*0.98); st.lookAt(0,r*2,0); st.rotateX(Math.PI/2); st.rotateZ(R()*3); st.castShadow=true; g.add(st); }
  if(tipo==='felci') for(let i=0;i<9;i++){ const a=R()*6.283, b=0.3+R()*0.9; const f=new THREE.Mesh(felce,new THREE.MeshStandardMaterial({color:'#5f9a42',side:THREE.DoubleSide,roughness:0.9})); f.position.set(Math.cos(a)*Math.cos(b)*r*0.95,Math.sin(b)*r*0.76,Math.sin(a)*Math.cos(b)*r*0.95); f.scale.setScalar(0.8); f.lookAt(f.position.clone().multiplyScalar(2)); f.rotateX(Math.PI/2); g.add(f); }
  if(tipo==='rovi') for(let i=0;i<26;i++){ const a=R()*6.283, b=0.15+R()*1.2; const m=new THREE.Mesh(new THREE.SphereGeometry(0.018,6,5),new THREE.MeshStandardMaterial({color:R()<0.5?'#2a0a1a':'#7a1838',roughness:0.4})); m.position.set(Math.cos(a)*Math.cos(b)*r*1.01,Math.sin(b)*r*0.8,Math.sin(a)*Math.cos(b)*r*1.01); g.add(m); }
 }
 entrata(g,r); scene.add(esterno); SINGOLI.push({o:g,x:x*K,z:y*K,r}); }
const tipiTana={tanaGuerrieri:'rami',tanaApprendisti:'felci',nursery:'rovi',tanaGuaritore:'roccia'};
for(const k of TANE) tana(L[k].x,L[k].y,L[k].r,tipiTana[k]);
for(const k of ['nebbia','pietre']){ const cm=CLAN[k].campo; for(const [dx,dy,t] of [[-78,-52,'rami'],[78,-39,'felci'],[13,78,'roccia']]) tana(cm.x+dx,cm.y+dy,34,k==='pietre'?'roccia':t); }
{ // la Roccia Alta: un masso scabro con la cima piatta, dove sale il capo
 let gR=ruvido(new THREE.DodecahedronGeometry(1.0,2),0.2,1.4); const p=gR.attributes.position; for(let i=0;i<p.count;i++) if(p.getY(i)>0.62) p.setY(i,0.62+(p.getY(i)-0.62)*0.15); gR.computeVertexNormals();
 const r=new THREE.Mesh(gR,new THREE.MeshStandardMaterial({color:'#a19b8e',roughness:1,flatShading:true})); r.position.set(L.roccia.x*K,quotaPx(L.roccia.x,L.roccia.y)+0.7,L.roccia.y*K); r.scale.set(1.25,1.9,1.1); r.castShadow=r.receiveShadow=true; scene.add(r); SINGOLI.push({o:r,x:r.position.x,z:r.position.z,r:1.0,roccia:true});
 for(let i=0;i<10;i++){ const mu=new THREE.Mesh(new THREE.SphereGeometry(0.1,8,6),new THREE.MeshStandardMaterial({color:'#6a8a42',roughness:1})); mu.scale.y=0.35; const a=R()*6.283; mu.position.set(r.position.x+Math.cos(a)*1.0,r.position.y-0.3+R()*0.9,r.position.z+Math.sin(a)*0.85); scene.add(mu); } }

// ---------- erbe, palla, mucchio ----------
const fioreMat=[new THREE.MeshStandardMaterial({color:'#c58cff'}),new THREE.MeshStandardMaterial({color:'#ffe066'}),new THREE.MeshStandardMaterial({color:'#ffffff'})];
let erbe3=[]; // le piante medicinali si disegnano più sotto (pianta3), una forma per specie
const palla3=new THREE.Mesh(new THREE.SphereGeometry(0.13,16,12),new THREE.MeshStandardMaterial({color:'#6f9a4a',roughness:1})); palla3.castShadow=true; scene.add(palla3);

// ---------- prede ----------
const pellicciaPreda={topo:'#7d6650',uccello:'#4f6aa8',coniglio:'#cdbb9e',scoiattolo:'#b0683a'};
const predaModelli={};
function corpoPreda(tipo){ if(!predaModelli[tipo]) predaModelli[tipo]=corpoPredaNuovo(tipo); return predaModelli[tipo].clone(); } // clone condivide geometrie e materiali
function corpoPredaNuovo(tipo){ const g=new THREE.Group(), m=new THREE.MeshStandardMaterial({color:pellicciaPreda[tipo],roughness:1}), s={topo:0.09,uccello:0.08,coniglio:0.16,scoiattolo:0.11}[tipo];
 const b=new THREE.Mesh(new THREE.SphereGeometry(s,12,10),m); b.scale.set(0.8,0.75,1.3); b.position.y=s*0.75; b.castShadow=true; g.add(b);
 const t=new THREE.Mesh(new THREE.SphereGeometry(s*0.6,10,8),m); t.position.set(0,s*1.1,s*1.1); g.add(t);
 if(tipo==='topo'){ const c=new THREE.Mesh(new THREE.CylinderGeometry(0.006,0.004,0.18,4),new THREE.MeshStandardMaterial({color:'#d9a0a0'})); c.rotation.x=Math.PI/2.4; c.position.set(0,s*0.5,-s*1.6); g.add(c); }
 if(tipo==='coniglio') for(const sx of [-1,1]){ const o=new THREE.Mesh(new THREE.SphereGeometry(s*0.18,8,6),m); o.scale.set(1,3,0.7); o.position.set(sx*s*0.25,s*1.8,s*1.0); g.add(o); }
 if(tipo==='scoiattolo'){ const c=new THREE.Mesh(new THREE.SphereGeometry(s*0.7,10,8),new THREE.MeshStandardMaterial({color:'#c98450',roughness:1})); c.scale.set(0.7,1.6,0.8); c.position.set(0,s*1.4,-s*1.2); g.add(c); }
 if(tipo==='uccello'){ const be=new THREE.Mesh(new THREE.ConeGeometry(0.015,0.05,6),new THREE.MeshStandardMaterial({color:'#e0b050'})); be.rotation.x=Math.PI/2; be.position.set(0,s*1.1,s*1.7); g.add(be); }
 g.scale.setScalar(0.6); return g; }
const prede3=new Map();
// mucchio
const mucchio3=new THREE.Group(); mucchio3.position.set(L.mucchio.x*K,quotaPx(L.mucchio.x,L.mucchio.y),L.mucchio.y*K); scene.add(mucchio3); let mucchioN=-1;

// ---------- visitatori ----------
let visit3=null, visitTipo=null;
function corpoVisitatore(tipo){ const T=VISITATORI[tipo], hh=T.h*K, g=new THREE.Group(), pel=new THREE.MeshStandardMaterial({color:T.pelle,roughness:0.9}), man=new THREE.MeshStandardMaterial({color:T.mantello[1],roughness:1});
 const largo=tipo==='nano'?1.4:tipo==='folletto'?1.1:0.85;
 const gambe=new THREE.Mesh(new THREE.CylinderGeometry(0.06*hh*largo*4,0.07*hh*largo*4,hh*0.42,10),new THREE.MeshStandardMaterial({color:T.gambe})); gambe.position.y=hh*0.21; g.add(gambe);
 const busto=new THREE.Mesh(new THREE.CylinderGeometry(0.1*hh*largo,0.16*hh*largo,hh*0.36,12),man); busto.position.y=hh*0.6; g.add(busto);
 const testa=new THREE.Mesh(new THREE.SphereGeometry(0.09*hh*(tipo==='folletto'?1.25:1),16,12),pel); testa.position.y=hh*0.87; g.add(testa);
 if(tipo==='nano'){ const b=new THREE.Mesh(new THREE.ConeGeometry(0.08*hh,0.22*hh,10),new THREE.MeshStandardMaterial({color:T.capelli})); b.rotation.x=Math.PI; b.position.set(0,hh*0.78,0.05*hh); g.add(b); const e=new THREE.Mesh(new THREE.SphereGeometry(0.095*hh,12,8,0,6.283,0,1.4),new THREE.MeshStandardMaterial({color:'#8a8a92',metalness:0.6,roughness:0.4})); e.position.y=hh*0.9; g.add(e); }
 if(tipo==='folletto'){ const c=new THREE.Mesh(new THREE.ConeGeometry(0.1*hh,0.3*hh,12),new THREE.MeshStandardMaterial({color:T.capelli})); c.position.y=hh*1.05; c.rotation.z=-0.3; g.add(c); }
 if(tipo==='elfo'){ const c=new THREE.Mesh(new THREE.SphereGeometry(0.1*hh,12,10),new THREE.MeshStandardMaterial({color:T.capelli})); c.scale.set(1,1.3,1); c.position.set(0,hh*0.85,-0.02*hh); g.add(c); for(const sx of [-1,1]){ const o=new THREE.Mesh(new THREE.ConeGeometry(0.015*hh,0.09*hh,6),pel); o.rotation.z=sx*1.2; o.position.set(sx*0.09*hh,hh*0.89,0); g.add(o); } }
 g.traverse(o=>{ if(o.isMesh){ o.castShadow=true; } }); return g; }

// ---------- i gatti ----------
const caricaGLB=()=>{ const l=new GLTFLoader(); if(!window.MODELLO_GLB) return l.loadAsync('modelli/toon_cat_free.glb'); const s=atob(window.MODELLO_GLB), u=new Uint8Array(s.length); for(let i=0;i<s.length;i++) u[i]=s.charCodeAt(i); return l.parseAsync(u.buffer,''); };
const gltf=await caricaGLB();
const modello=gltf.scene, passo=gltf.animations[0];
modello.updateMatrixWorld(true);
const SCALA=0.45/Math.max(...new THREE.Box3().setFromObject(modello,true).getSize(new THREE.Vector3()).toArray());
let mat0=null; modello.traverse(o=>{ if(o.isMesh) mat0=o.material; });
const mantelli=new Map();
function mantello(colore,vecchio){ const chiave=colore+(vecchio?'|v':''); if(mantelli.has(chiave)) return mantelli.get(chiave);
 const img=mat0.map.image, c=document.createElement('canvas'); c.width=img.width; c.height=img.height; const g=c.getContext('2d'); g.drawImage(img,0,0);
 const d=g.getImageData(0,0,c.width,c.height), k=new THREE.Color(colore), th={}, src=new THREE.Color(), hs={}; k.getHSL(th);
 for(let i=0;i<d.data.length;i+=4){ src.setRGB(d.data[i]/255,d.data[i+1]/255,d.data[i+2]/255); src.getHSL(hs);
  if(hs.s<0.35||hs.h<0.015||hs.h>0.16) continue;
  src.setHSL(th.h,th.s*Math.min(1,hs.s/0.7)*(vecchio?0.45:1),Math.min(0.95,Math.max(0.06,th.l*hs.l/0.5))+(vecchio?0.12:0)); d.data[i]=src.r*255; d.data[i+1]=src.g*255; d.data[i+2]=src.b*255; } // gli anziani ingrigiscono
 g.putImageData(d,0,0); const t=new THREE.CanvasTexture(c); t.colorSpace=THREE.SRGBColorSpace; t.flipY=false; const m=mat0.clone(); m.map=t; mantelli.set(chiave,m); return m; }
const gatti3=new Map(), eu=new THREE.Euler(), qq=new THREE.Quaternion();
// ombra a macchia: i gatti a terra anche lontano dal giocatore, dove l'ombra vera non arriva
const sfumato=(c0,c1)=>{ const c=document.createElement('canvas'); c.width=c.height=64; const g=c.getContext('2d'), gr=g.createRadialGradient(32,32,2,32,32,31); gr.addColorStop(0,c0); gr.addColorStop(1,c1); g.fillStyle=gr; g.fillRect(0,0,64,64); return new THREE.CanvasTexture(c); };
// ---------- piante medicinali: una forma per specie (window.PIANTE, js/erbe.js), con un alone del colore del fiore ----------
const fogliaMat=new THREE.MeshStandardMaterial({color:'#4f8a36',roughness:1}), bruno=new THREE.MeshStandardMaterial({color:'#7a5632',roughness:1}), gialloMat=new THREE.MeshStandardMaterial({color:'#ffd23a',emissive:'#ffd23a',emissiveIntensity:0.3});
const gStelo=new THREE.CylinderGeometry(0.007,0.011,1,5), gSfera=new THREE.SphereGeometry(1,8,6), gDisco=new THREE.CylinderGeometry(1,0.75,0.3,10), gCono=new THREE.ConeGeometry(1,1,6), gPenta=new THREE.CylinderGeometry(1,0.25,0.3,5), aloneErba=sfumato('rgba(255,255,255,0.9)','rgba(255,255,255,0)');
function pianta3(P){ const g=new THREE.Group(), H=P.h, fm=new THREE.MeshStandardMaterial({color:P.c,emissive:P.c,emissiveIntensity:0.4,roughness:0.7});
 const pez=(geo,mat,x,y,z,sx,sy=sx,sz=sx,su=g)=>{ const m=new THREE.Mesh(geo,mat); m.position.set(x,y,z); m.scale.set(sx,sy,sz); su.add(m); return m; };
 const stelo=(x,z,h,su=g)=>pez(gStelo,fogliaMat,x,h/2,z,1,h,1,su);
 const foglie=(n,r,y,l)=>{ for(let i=0;i<n;i++){ const a=i*6.283/n+0.4, f=pez(gSfera,fogliaMat,Math.cos(a)*r,y,Math.sin(a)*r,l,l*0.18,l*0.45); f.rotation.y=-a; } };
 const giro=(n,r,fn)=>{ for(let i=0;i<n;i++){ const a=i*6.283/n; fn(Math.cos(a)*r,Math.sin(a)*r,i); } };
 if(P.f==='ombrella'){ giro(3,0.05,(x,z,i)=>{ const h=H*(0.78+i*0.11), r=0.055+H*0.05; stelo(x,z,h); pez(gDisco,fm,x,h,z,r,0.12,r); }); foglie(5,0.07,0.05,0.08); }
 else if(P.f==='spiga'){ giro(4,0.05,(x,z,i)=>{ const h=H*(0.6+i*0.1); stelo(x,z,h); pez(gCono,fm,x,h+H*0.14,z,0.024,H*0.42,0.024); }); foglie(6,0.065,0.07,0.085); }
 else if(P.f==='candelabro'){ giro(5,0,(x,z,i)=>{ const b=new THREE.Group(), a=i*1.257; if(i) b.rotation.set(Math.sin(a)*0.42,0,-Math.cos(a)*0.42); g.add(b); const h=H*(i?0.85:1); stelo(0,0,h,b); pez(gCono,fm,0,h+H*0.16,0,0.014,H*0.5,0.014,b); }); foglie(4,0.05,0.05,0.07); }
 else if(P.f==='margherita'){ giro(5,0.07,(x,z,i)=>{ const h=H*(0.7+(i%3)*0.15); stelo(x,z,h); pez(gDisco,fm,x,h,z,0.045,0.05,0.045); pez(gSfera,gialloMat,x,h+0.012,z,0.02,0.014,0.02); }); foglie(5,0.06,0.04,0.06); }
 else if(P.f==='coppa'){ giro(3,0.06,(x,z,i)=>{ const h=H*(0.7+i*0.15); stelo(x,z,h); pez(gSfera,fm,x,h+0.02,z,0.065,0.045,0.065); pez(gSfera,bruno,x,h+0.045,z,0.02,0.012,0.02); }); foglie(4,0.06,0.06,0.09); }
 else if(P.f==='globo'){ giro(3,0.045,(x,z,i)=>{ const h=H*(0.75+i*0.12); stelo(x,z,h); pez(gSfera,fm,x,h+0.04,z,0.055); }); foglie(4,0.05,0.08,0.11); }
 else if(P.f==='cuscino'){ pez(gSfera,fogliaMat,0,0.03,0,0.17,0.075,0.17); for(let i=0;i<14;i++){ const a=i*2.4, r=0.03+0.009*i; pez(gSfera,fm,Math.cos(a)*r,0.1-r*0.28,Math.sin(a)*r,0.022); } }
 else if(P.f==='rosetta'){ foglie(7,0.1,0.03,0.14); giro(3,0.03,(x,z,i)=>{ const h=H*(0.7+i*0.15); stelo(x,z,h); pez(gSfera,fm,x,h,z,0.016,H*0.2,0.016); }); }
 else if(P.f==='malva'){ giro(2,0.04,(x,z,i)=>{ const h=H*(0.85+i*0.15); stelo(x,z,h); for(let j=0;j<4;j++){ const a=j*2.2+i, y=h*(0.45+j*0.17); pez(gPenta,fm,x+Math.cos(a)*0.035,y,z+Math.sin(a)*0.035,0.04,0.05,0.04); } }); foglie(5,0.07,0.1,0.1); }
 else if(P.f==='stella'){ giro(4,0.06,(x,z,i)=>{ const h=H*(0.65+i*0.11); stelo(x,z,h); pez(gPenta,fm,x,h,z,0.045,0.04,0.045); pez(gSfera,gialloMat,x,h+0.012,z,0.014); }); foglie(6,0.06,0.09,0.07); }
 else if(P.f==='salice'){ pez(new THREE.CylinderGeometry(0.018,0.028,1,6),bruno,0,H*0.3,0,1,H*0.6,1); pez(gSfera,fm,0,H*0.66,0,0.12,0.07,0.12); giro(11,0.13,(x,z,i)=>pez(gSfera,fm,x,H*0.42+(i%2)*0.04,z,0.018,H*0.3,0.018)); }
 const al=new THREE.Sprite(new THREE.SpriteMaterial({map:aloneErba,color:P.c,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,opacity:0.5})); al.scale.setScalar(0.55+H*0.9); al.position.y=H*0.7; g.add(al); g.userData.alone=al;
 return g; }
erbe3=ERBE.map((h,i)=>{ const P=(window.PIANTE||[])[h.specie||0]||{f:'ombrella',c:'#ffffff',h:0.3}, g=pianta3(P); g.position.set(h.x*K,quotaPx(h.x,h.y),h.y*K); g.rotation.y=i*1.7; scene.add(g); return g; });
const ombraGeo=new THREE.CircleGeometry(0.3,20), ombraMat=new THREE.MeshBasicMaterial({map:sfumato('rgba(0,0,0,0.42)','rgba(0,0,0,0)'),transparent:true,depthWrite:false});
function nuovoGatto3(c){
 const vecchio=c.rango==='anziano'||!!c.vecchio, g=SkeletonUtils.clone(modello), mat=mantello(c.colore,vecchio);
 g.traverse(o=>{ if(o.isMesh){ o.castShadow=true; o.receiveShadow=true; o.material=mat; o.frustumCulled=false; } });
 const box=new THREE.Group(); box.add(g); scene.add(box);
 const ossa={}; g.traverse(o=>{ if(o.isBone){ ossa[o.name.replace(/_\d+$/,'')]=o; o.userData.riposo=o.quaternion.clone(); } });
 const mixer=new THREE.AnimationMixer(g), az=mixer.clipAction(passo); az.play(); az.setEffectiveWeight(0);
 const anello=new THREE.Mesh(new THREE.RingGeometry(0.27,0.3,40),new THREE.MeshBasicMaterial({color:ANELLO[c.clan],transparent:true,opacity:c.clan==='felce'?0.45:0.9,depthWrite:false})); anello.rotation.x=-Math.PI/2; anello.position.y=0.015; box.add(anello);
 const ombra=new THREE.Mesh(ombraGeo,ombraMat); ombra.rotation.x=-Math.PI/2; ombra.position.y=0.012; ombra.scale.setScalar(scala(c)); box.add(ombra);
 return {box,g,ossa,mixer,az,dir:Math.PI/2,colore:c.colore+(vecchio?'|v':''),anello,guarda:0};
}
function posaDi(c,a,t,guarda=0,parla=false){ // rotazioni da aggiungere alle ossa, a partire dagli stati che la v1 calcola per ogni gatto
 const P=c.posa, pt=c.posaT||0, si=a.sit||0, li=a.lie||0, cr=a.crouch||0, ar=a.arch||0, id=c.id||0;
 const as=c.att>0?Math.sin((1-c.att/0.32)*Math.PI):0, hu=c.colpito>0?Math.sin(c.colpito/0.3*Math.PI):0;
 const o={tail:[0.35+0.7*ar,Math.sin(t*1.6+id)*0.25*(1-ar),0],root:[-0.5*si-0.6*as,0,1.35*li+Math.sin(t*60)*0.06*hu],
  thighBL:[-0.6*as,0,0],thighBR:[-0.6*as,0,0],spine01:[0.3*ar,0,0],spine02:[0.2*ar,0,0],neck:[-0.45*ar+0.25*cr+0.25*si,0,0],
  legupperFL:[-1.6*as,0,0]};
 const testa=(n)=>{ o.head=[n,n,0]; };
 if(P==='lecca'){ o.neck=[0.35,0,0]; testa(0.25+Math.sin(pt*5)*0.12); }
 if(P==='leccato'){ o.neck=[-0.35,0,0]; testa(-0.15); }
 if(P==='naso'){ o.neck=[0.15,0,0]; }
 if(P==='canta'){ o.neck=[-0.6,0,0]; testa(-0.3); }
 if(P==='curato'){ o.root=[0,0,1.3]; o.neck=[0.2,0,0]; o.tail=[0.2,0.3,0]; } // sdraiato sulla lettiga
 if(P==='mangia'||P==='beve'||P==='annusa'||P==='cura'){ o.neck=[0.75,0,0]; testa(0.3+(P==='mangia'||P==='beve'?Math.abs(Math.sin(pt*10))*0.08:0)); }
 if(P==='racconta'){ testa(Math.sin(pt*4)*0.08); }
 if(P==='ascolta'){ o.neck=[-0.2,0,0]; }
 if(P==='rotola'){ o.root=[0,0,2.8+Math.sin(pt*4)*0.35]; o.legupperFL=[Math.sin(pt*12)*0.7,0,0]; o.legupperFR=[Math.sin(pt*12+1)*0.7,0,0]; o.thighBL=[Math.sin(pt*12+2)*0.6,0,0]; o.thighBR=[Math.sin(pt*12+3)*0.6,0,0]; }
 if(P==='zampata'){ const k=c.att>0?Math.sin((1-c.att/0.32)*Math.PI):0; o.legupperFL=[-1.4*k,0,0]; }
 if(P==='lotta'){ const w=Math.sin(t*14+id); o.root=[-0.8+0.1*Math.sin(t*7+id),0,0]; o.legupperFL=[-1.3+0.7*w,0,0]; o.legupperFR=[-1.3-0.7*w,0,0]; o.tail=[1.0,Math.sin(t*9+id)*0.6,0]; o.neck=[0.25,0,0]; o.spine01=[-0.15,0,0]; } // si impenna e mena zampate alternate
 if(P==='balzello'){ o.root=[0.25,0,0]; o.spine01=[0.3,0,0]; o.spine02=[0.2,0,0]; o.tail=[1.1,Math.sin(t*10+id)*0.4,0]; o.neck=[0.3,0,0]; } // acquattato, pronto a schivare
 if(scena&&(scena.tipo==='rito'||scena.tipo==='cerimonia')&&scena.attori.includes(c)){ // il rito: tutti si inchinano insieme, lentamente; il capo guarda il cielo
  if(c.leader){ o.neck=[-0.6,0,0]; testa(-0.3); o.tail=[0.9,0,0]; o.root=[-0.25,0,0]; }
  else { const b=Math.max(0,Math.sin(t*1.3)); o.neck=[0.15+0.75*b,0,0]; testa(0.35*b); o.tail=[1.1,Math.sin(t*0.7)*0.15,0]; } }
 if(c.rango==='gattino') o.head=[...(o.head||[0,0,0]),1.25];
 const chiusi=c.dorme||P==='leccato'||P==='naso'||P==='curato'||P==='dorme'||P==='canta'||(a.blink!==undefined&&a.blink<0);
 if(chiusi){ o.eyeL=[0,0,0,[1,0.15,1]]; o.eyeR=[0,0,0,[1,0.15,1]]; } // occhi chiusi come una linea
 // --- gatti più vivi (rilettura del 12 novembre 2026): coda, orecchie, bocca, sguardo, respiro. Assi provati sugli screenshot
 // tail01-03.y ondeggia di lato, tail*.x arriccia in su, ear*.x abbassa le orecchie, mouth.x apre la bocca, neck.z gira la testa.
 const fermo=(c.vel||0)<8, agit=(c.soffia>0||P==='lotta'||P==='balzello')?1:0, vecchio=c.rango==='anziano'||!!c.vecchio;
 if(P!=='rotola'&&P!=='curato'){ const f=t*(1.6+2.4*agit)+id, am=0.16+0.3*agit; o.tail01=[0.1*ar,Math.sin(f-0.7)*am,0]; o.tail02=[0.06,Math.sin(f-1.4)*am*1.25,0]; o.tail03=[0.06,Math.sin(f-2.1)*am*1.5,0]; }
 let or=0; if(agit||hu>0) or=0.75; else if(c===G.p&&(c.fame<30||c.sete<30||c.salute<40)) or=0.4; else if(c.ferito) or=0.4; else if(!chiusi&&((t*0.6+id*1.7)%6)<0.16) or=0.35; // un guizzo ogni tanto
 if(or){ o.earL=[or,0,0]; o.earR=[or,0,0]; }
 if(parla||P==='canta'||P==='racconta'||c.soffia>0) o.mouth=[0.12+0.42*Math.abs(Math.sin(t*10+id)),0,0];
 if(guarda) o.neck=[o.neck[0],o.neck[1],(o.neck[2]||0)-guarda];
 if(fermo&&P!=='rotola'){ const sp=o.spine01||[0,0,0]; o.spine01=[sp[0],sp[1],sp[2],1+0.02*Math.sin(t*(c.dorme?1.1:2.1)+id)]; } // il respiro
 if(vecchio&&!P){ o.neck=[o.neck[0]+0.2,o.neck[1],o.neck[2]]; o.tail=[o.tail[0]-0.3,o.tail[1],o.tail[2]]; } // collo e coda più bassi
 return o;
}

// il gatto del giocatore si vede meglio: anello dorato sempre acceso; quando si riprendono le frecce dopo una pausa
// l'anello si illumina e un alone di luce avvolge il gatto (richiesta del 12 novembre 2026)
const aloneTex=(()=>{ const c=document.createElement('canvas'); c.width=c.height=128; const g=c.getContext('2d'), gr=g.createRadialGradient(64,64,4,64,64,62);
 gr.addColorStop(0,'rgba(255,250,210,1)'); gr.addColorStop(0.3,'rgba(255,215,90,0.75)'); gr.addColorStop(0.7,'rgba(255,190,60,0.3)'); gr.addColorStop(1,'rgba(255,190,60,0)'); g.fillStyle=gr; g.fillRect(0,0,128,128); return new THREE.CanvasTexture(c); })();
let fermo=0, bagliore=0, premutoPrima=false;
function alonePlayer(o,dt,t){
 if(!o.alone){ o.alone=new THREE.Sprite(new THREE.SpriteMaterial({map:aloneTex,transparent:true,depthWrite:false,opacity:0})); o.alone.position.y=0.28; o.box.add(o.alone);
  o.anello.material=o.anello.material.clone(); o.anello.material.color.set('#ffd34a'); o.anello.material.opacity=0.85; }
 const premuto=!!(keys.ArrowUp||keys.ArrowDown||keys.ArrowLeft||keys.ArrowRight||keys.KeyW||keys.KeyA||keys.KeyS||keys.KeyD);
 if(premuto&&!premutoPrima&&fermo>3) bagliore=1.6; premutoPrima=premuto; fermo=premuto?0:fermo+dt;
 bagliore=Math.max(0,bagliore-dt);
 const b=Math.min(1,bagliore/0.8), pulsa=0.5+0.5*Math.sin(t*3);
 o.anello.scale.setScalar(1+0.12*pulsa+0.6*b); o.anello.material.opacity=0.7+0.15*pulsa+0.15*b;
 o.anello.material.color.setRGB(1,0.83+0.17*b,0.29+0.6*b);
 o.alone.material.opacity=0.9*b; o.alone.scale.setScalar(1.0+1.4*b); }
function aggiornaGatto3(c,dt,t){
 let o=gatti3.get(c); if(!o){ o=nuovoGatto3(c); gatti3.set(c,o); }
 { const vecchio=c.rango==='anziano'||!!c.vecchio, ch=c.colore+(vecchio?'|v':''); if(o.colore!==ch){ const m=mantello(c.colore,vecchio); o.g.traverse(x=>{ if(x.isMesh) x.material=m; }); o.colore=ch; } }
 const a=c.an||{}, s=scala(c)*(c.leader?1.1:1), v=c.vel||0;
 // direzione: in movimento segue la velocità, da fermo o in una scena segue il verso (flip) della v1
 let target=o.dir;
 const inRito=scena&&(scena.tipo==='rito'||scena.tipo==='cerimonia')&&scena.attori.includes(c), parla=c!==G.p&&typeof fumetti!=='undefined'&&fumetti.some(f=>f.id===c.id);
 if(inRito&&v>8&&(Math.abs(c.vx||0)+Math.abs(c.vy||0))>1) target=Math.atan2(c.vx,c.vy); // si raduna camminando
 else if(inRito){ let q; if(c.leader) q=G.p; else if(scena.tipo==='cerimonia') q=L.roccia; else { const A=scena.attori; q={x:A.reduce((s,x)=>s+x.x,0)/A.length,y:A.reduce((s,x)=>s+x.y,0)/A.length}; }
  if(Math.hypot(q.x-c.x,q.y-c.y)>4) target=Math.atan2(q.x-c.x,q.y-c.y); } // nei riti tutti guardano la Roccia Alta o il centro del cerchio; il capo guarda chi viene iniziato
 else if(c.posa||(scena&&scena.attori.includes(c))) target=(c.flip||1)>0?Math.PI/2:-Math.PI/2;
 else if(v>8&&(Math.abs(c.vx||0)+Math.abs(c.vy||0))>1) target=Math.atan2(c.vx,c.vy);
 else if(parla&&!c.posa&&Math.hypot(G.p.x-c.x,G.p.y-c.y)<400) target=Math.atan2(G.p.x-c.x,G.p.y-c.y); // chi parla si gira verso il giocatore
 // lo sguardo: da fermo, la testa segue il giocatore vicino
 { let g=0; if(c!==G.p&&v<8&&!c.posa&&!c.dorme&&!(scena&&scena.attori.includes(c))){ const d=Math.hypot(G.p.x-c.x,G.p.y-c.y); if(d<150&&d>10) g=Math.max(-0.7,Math.min(0.7,wrap(Math.atan2(G.p.x-c.x,G.p.y-c.y)-o.dir))); } o.guarda+=(g-o.guarda)*Math.min(1,dt*4); }
 o.dir+=wrap(target-o.dir)*Math.min(1,dt*8);
 let y=quotaPx(c.x,c.y);
 if(acqua(c.x,c.y)) y-=0.12;
 if(c.x>=FX0&&c.x<FX1){ if(GUADI.some(g=>Math.abs(c.y-g)<16)) y=Math.max(y,-0.04); else y=Math.max(y,-0.09-0.2*s); } // nel fiume nuota con la testa fuori; sui guadi cammina sopra i sassi
 if(c.elev) y+=c.elev*K;
 if(c===G.p&&c.balzo>0) y+=Math.sin((1-c.balzo/0.35)*Math.PI)*0.18;
 if(c.posa==='balzello') y+=Math.abs(Math.sin((c.posaT||0)*9))*0.2*s;
 y-=0.06*(a.lie||0)*s+0.03*(a.crouch||0)*s; if(c.posa==='curato') y+=0.07;
 let bx=c.x*K, bz=c.y*K;
 if(scena&&scena.attori.length===2&&scena.attori.includes(c)&&scena.tipo!=='coro'&&scena.tipo!=='sonnellino'){ const al=scena.attori[0]===c?scena.attori[1]:scena.attori[0]; const dx=al.x-c.x, dz=al.y-c.y, d=Math.hypot(dx,dz)||1; const avvicina=Math.min(0.12,Math.max(0,d*K-0.3)); bx+=dx/d*avvicina; bz+=dz/d*avvicina; }
 let fuoriSala=false; if(G.dentro&&scena&&scena.attori.length<=3&&scena.attori.includes(c)){ // nelle sale le scene a due restano vicine
  const A=scena.attori, cx=A.reduce((s,x)=>s+x.x,0)/A.length, cy=A.reduce((s,x)=>s+x.y,0)/A.length, q=inSala(cx,cy);
  if(q){ y=y-quotaPx(c.x,c.y)+(acqua(c.x,c.y)?0.12:0); bx=q[0]+(c.x-cx)*K*1.6; bz=q[1]+(c.y-cy)*K*1.6; } else fuoriSala=true; }
 else if(G.dentro){ const q=inSala(c.x,c.y); if(q){ y=y-quotaPx(c.x,c.y)+(acqua(c.x,c.y)?0.12:0); bx=q[0]+(bx-c.x*K)*SALA_S; bz=q[1]+(bz-c.y*K)*SALA_S; } else fuoriSala=true; }
 if(c.posa==='lotta'){ const af=Math.sin(t*7+(c.id||0))*0.07*s; bx+=Math.sin(o.dir)*af; bz+=Math.cos(o.dir)*af; } // piccoli affondi avanti e indietro
 o.box.position.set(bx,y,bz); o.box.rotation.y=o.dir; o.g.scale.setScalar(SCALA*s);
 o.anello.visible=!(scena&&scena.pp);
 // il guaritore si riconosce da lontano: mantellina viola, collare d'oro e un lume che gli galleggia sopra la testa (richiesta del 12 novembre 2026)
 { const guar=c.rango==='guaritore'||(c.rango==='apprendista'&&c.via==='guaritore');
  if(guar&&!o.veste){ const v=new THREE.Group();
   const cappa=new THREE.Mesh(new THREE.SphereGeometry(1,14,10),new THREE.MeshStandardMaterial({color:'#7a4fd6',roughness:0.85,emissive:'#2a1458',emissiveIntensity:0.5})); cappa.scale.set(0.088,0.062,0.15); cappa.position.set(0,0.205,-0.012); cappa.castShadow=true; v.add(cappa);
   const collare=new THREE.Mesh(new THREE.TorusGeometry(0.066,0.014,8,22),new THREE.MeshStandardMaterial({color:'#f2c14e',roughness:0.35,metalness:0.6,emissive:'#6a4a08',emissiveIntensity:0.6})); collare.rotation.x=Math.PI/2.25; collare.position.set(0,0.225,0.118); v.add(collare);
   const lume=new THREE.Sprite(new THREE.SpriteMaterial({map:sfumato('rgba(236,214,255,1)','rgba(170,120,255,0)'),transparent:true,depthWrite:false,blending:THREE.AdditiveBlending})); lume.position.y=0.5; v.add(lume); v.userData.lume=lume;
   const bolla=new THREE.Mesh(new THREE.SphereGeometry(0.62,28,18),new THREE.MeshBasicMaterial({color:'#c9b4ff',transparent:true,opacity:0.2,depthWrite:false})); bolla.position.y=0.28; bolla.visible=false; v.add(bolla); v.userData.bolla=bolla;
   o.box.add(v); o.veste=v; }
  if(o.veste){ o.veste.visible=guar; if(guar){ o.veste.scale.setScalar(s); const L0=o.veste.userData.lume; L0.scale.setScalar(0.2+0.04*Math.sin(t*2.4+(c.id||0))); L0.position.y=0.5+0.02*Math.sin(t*1.7);
    const B=o.veste.userData.bolla; B.visible=c===G.p&&!!G.bolla; if(B.visible){ B.scale.setScalar(1+0.05*Math.sin(t*3)); B.material.opacity=0.18+0.06*Math.sin(t*2.2); } } } }
 if(c===G.p) alonePlayer(o,dt,t);
 // nei primi piani si nascondono i gatti che si mettono tra la telecamera e i protagonisti
 o.box.visible=!fuoriSala;
 if(scena&&(scena.pp||scena.attori.length<=3)&&!scena.attori.includes(c)){ const ax=camera.position.x, az=camera.position.z, dx=cam3.tx-ax, dz=cam3.tz-az, l2=dx*dx+dz*dz||1, t2=((c.x*K-ax)*dx+(c.y*K-az)*dz)/l2;
  if(t2<1.15&&Math.hypot(c.x*K-(ax+dx*t2),c.y*K-(az+dz*t2))<0.9) o.box.visible=false; }
 // camminata: peso e velocità dell'animazione seguono il passo del gatto
 const peso=Math.min(1,(a.walk||0)*(1-(a.sit||0))*(1-(a.lie||0)));
 for(const b of Object.values(o.ossa)){ b.quaternion.copy(b.userData.riposo); b.scale.setScalar(1); }
 o.az.setEffectiveWeight(peso); o.az.timeScale=Math.max(0.3,Math.min(3,v*K/0.32)); o.mixer.update(dt);
 // le pose si sommano alla camminata (o al riposo, se il gatto è fermo)
 const posa=posaDi(c,a,t,o.guarda,parla);
 for(const [n,[x,yy,z,sc]] of Object.entries(posa)){ const b=o.ossa[n]; if(!b) continue; eu.set(x,yy,z); qq.setFromEuler(eu); b.quaternion.multiply(qq); if(sc){ if(Array.isArray(sc)) b.scale.set(sc[0],sc[1],sc[2]); else b.scale.setScalar(sc); } }
 if(window.DBG_OSSA) for(const [n,[x,yy,z]] of Object.entries(window.DBG_OSSA)){ const b=o.ossa[n]; if(!b) continue; eu.set(x,yy,z); qq.setFromEuler(eu); b.quaternion.multiply(qq); } // prova degli assi delle ossa
 window.OSSA_NOMI=Object.keys(o.ossa);
}

// ---------- telecamera in terza persona ----------
const cam3={yaw:Math.PI,pitch:0.5,dist:3.4,tx:0,tz:0,init:false,trascina:null};
const ov=document.getElementById('c');
ov.addEventListener('mousedown',e=>{ cam3.trascina={x:e.clientX,y:e.clientY}; });
addEventListener('mouseup',()=>{ cam3.trascina=null; });
addEventListener('mousemove',e=>{ if(!cam3.trascina) return; cam3.yaw-=(e.clientX-cam3.trascina.x)*0.006; cam3.pitch=Math.max(0.12,Math.min(1.2,cam3.pitch+(e.clientY-cam3.trascina.y)*0.004)); cam3.trascina={x:e.clientX,y:e.clientY}; cam3.manuale=G.t; });
ov.addEventListener('wheel',e=>{ cam3.dist=Math.max(1.6,Math.min(5,cam3.dist*Math.exp(Math.max(-60,Math.min(60,e.deltaY))*0.0016))); cam3.rotella=performance.now(); e.preventDefault(); },{passive:false}); // passo proporzionale: uno scorrimento a due dita non porta più di colpo alla distanza massima

function aggiornaCamera(dt,fx,fy,zoom,pp,alt){
 const p=G.p, o=gatti3.get(p);
 // la telecamera si mette dietro al gatto quando corre, a meno che il giocatore l'abbia girata da poco
 if(o&&(p.vel||0)>40&&!cam3.trascina&&!(cam3.manuale&&G.t-cam3.manuale<4)&&!pp){ const dietro=o.dir; const diff=wrap(dietro-cam3.yaw); if(Math.abs(diff)<2.2) cam3.yaw+=diff*Math.min(1,dt*1.2); }
 const qs=G.dentro?inSala(fx,fy):null, X=qs?qs[0]:fx*K, Z=qs?qs[1]:fy*K, k=cam3.init?1-Math.exp(-dt*6):1; cam3.tx+=(X-cam3.tx)*k; cam3.tz+=(Z-cam3.tz)*k; cam3.init=true;
 if(cam3.dist>3.4&&performance.now()-(cam3.rotella||0)>6000) cam3.dist+=(3.4-cam3.dist)*Math.min(1,dt*0.8);
 const CG=G.colosso, cgD=CG&&!G.dentro&&(CG.massi||0)>=2?Math.hypot(G.p.x-CG.x,G.p.y-CG.y):9999, cgV=zoom>1.05?0:Math.max(0,Math.min(1,(560-cgD)/220))*Math.min(1,(CG?CG.massi:0)/9); // vicino al grande gatto di pietra la telecamera alza lo sguardo, per vederlo intero
 cam3.cg=(cam3.cg||0)+(cgV-(cam3.cg||0))*Math.min(1,dt*2);
 const d=(G.dentro?Math.min(cam3.dist,2.6):cam3.dist*(1+0.35*cam3.cg))/zoom, base=G.dentro?0.55:quota(cam3.tx,cam3.tz)+0.25+(alt!=null?alt:(G.p.elev||0)*K);
 const fwd=new THREE.Vector3(Math.sin(cam3.yaw),0,Math.cos(cam3.yaw));
 const sh=scossa>0?(Math.random()-0.5)*scossa*0.3:0;
 const pit=G.dentro?Math.min(cam3.pitch,0.2):cam3.pitch*(1-0.72*cam3.cg);
 camera.position.set(cam3.tx-fwd.x*d*Math.cos(pit)+sh,base+d*Math.sin(pit),cam3.tz-fwd.z*d*Math.cos(pit));
 const minY=quota(camera.position.x,camera.position.z)+0.25; if(camera.position.y<minY) camera.position.y=minY;
 const sl=G.dentro&&SALE[G.dentro]; if(sl){ const ox=camera.position.x-sl.O.x, oz=camera.position.z-sl.O.z, r=Math.hypot(ox,oz), m=sl.Rr-0.8; if(r>m){ camera.position.x=sl.O.x+ox/r*m; camera.position.z=sl.O.z+oz/r*m; } camera.position.y=Math.min(camera.position.y,salaH+0.4); }
 if(sl&&zoom>1.05){ const ox=sl.O.x-cam3.tx, oz=sl.O.z-cam3.tz, r=Math.hypot(ox,oz), dd=Math.max(1.7,d+0.5); // nelle scene dentro una tana la telecamera si mette dalla parte del centro della sala e guarda i protagonisti: così non finisce mai contro una parete
  if(r>0.5) camera.position.set(cam3.tx+ox/r*dd,0.95,cam3.tz+oz/r*dd); else camera.position.y=Math.min(Math.max(camera.position.y,0.7),0.95);
  camera.lookAt(cam3.tx,0.24,cam3.tz); } // nelle scene dentro una tana si guardano i protagonisti
 else if(sl){ camera.position.y=Math.min(Math.max(camera.position.y,base+0.6),base+0.75); camera.lookAt(cam3.tx+fwd.x*1.0,base-0.12,cam3.tz+fwd.z*1.0); } // nelle tane lo sguardo va avanti, verso l'altare, non in basso sul gatto
 else if(cam3.cg>0.01&&CG) camera.lookAt(cam3.tx+(CG.x*K-cam3.tx)*0.55*cam3.cg,base+2.7*cam3.cg,cam3.tz+(CG.y*K-cam3.tz)*0.55*cam3.cg);
 else camera.lookAt(cam3.tx,base,cam3.tz);
}
function ruota(dx,dy){ // frecce relative alla telecamera: su = avanti
 const f=[Math.sin(cam3.yaw),Math.cos(cam3.yaw)], r=[-f[1],f[0]];
 return [r[0]*dx-f[0]*dy, r[1]*dx-f[1]*dy];
}
const vv=new THREE.Vector3();
function proietta(x,y,alt=0){
 if(G&&G.dentro){ const q=inSala(x,y); if(!q) return [-999,-999]; vv.set(q[0],alt,q[1]).project(camera); }
 else vv.set(x*K,quotaPx(x,y)+alt,y*K).project(camera);
 if(vv.z>1) return [W/2-vv.x*W*6,H/2+vv.y*H*6];
 return [(vv.x+1)/2*W,(1-vv.y)/2*H];
}
function visibile(x,y,m=0){
 if(G&&G.dentro){ const q=inSala(x,y); if(!q) return false; vv.set(q[0],0.2,q[1]).project(camera); return vv.z<1&&Math.abs(vv.x)<1.1&&Math.abs(vv.y)<1.3; }
 const dx=x*K-camera.position.x, dz=y*K-camera.position.z; if(dx*dx+dz*dz>30*30) return false;
 vv.set(x*K,quotaPx(x,y)+0.2,y*K).project(camera); const marg=1.1+m*0.004; return vv.z<1&&Math.abs(vv.x)<marg&&Math.abs(vv.y)<marg+0.2;
}
function resize(w,h){ renderer.setPixelRatio(Math.min(DPR,1.5)); renderer.setSize(w,h,false); renderer.domElement.style.width=w+'px'; renderer.domElement.style.height=h+'px'; camera.aspect=w/h; camera.updateProjectionMatrix(); }

// ---------- un fotogramma ----------
let tempo=0;
// ---------- atmosfera (rilettura del 12 novembre 2026): aria diversa per territorio, sera dorata, stelle, luna, lucciole, acqua che scorre, polvere ----------
const ARIA={near:12,far:34}, coloreNotte=new THREE.Color('#3a4f78'), tmpC=new THREE.Color(), soleGiorno=new THREE.Color('#ffe8c0'), soleSera=new THREE.Color('#ffae6a'), soleLuna=new THREE.Color('#c4d2ff'), ariaBianca=new THREE.Color('#e9eef0'), ariaCalda=new THREE.Color('#e6d3b0');
const stelle=(()=>{ const n=320, pos=new Float32Array(n*3); for(let i=0;i<n;i++){ const a=R()*6.283, h=0.12+R()*0.88, r=Math.sqrt(1-h*h); pos[i*3]=Math.cos(a)*r*60; pos[i*3+1]=h*60; pos[i*3+2]=Math.sin(a)*r*60; }
 const g=new THREE.BufferGeometry(); g.setAttribute('position',new THREE.BufferAttribute(pos,3)); const m=new THREE.Points(g,new THREE.PointsMaterial({color:'#fff8e0',size:2.2,sizeAttenuation:false,transparent:true,opacity:0,fog:false,depthWrite:false})); m.frustumCulled=false; m.renderOrder=-2; scene.add(m); return m; })();
const luna=(()=>{ const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:sfumato('rgba(255,252,230,1)','rgba(255,250,220,0)'),transparent:true,opacity:0,fog:false,depthWrite:false})); sp.scale.setScalar(9); sp.renderOrder=-1; scene.add(sp); return sp; })();
const NL=36, lucciole=(()=>{ const pos=new Float32Array(NL*3), g=new THREE.BufferGeometry(); g.setAttribute('position',new THREE.BufferAttribute(pos,3));
 const m=new THREE.Points(g,new THREE.PointsMaterial({color:'#e6ff7a',size:0.07,map:sfumato('rgba(255,255,255,1)','rgba(255,255,255,0)'),transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending})); m.frustumCulled=false; scene.add(m); return m; })();
const semiL=Array.from({length:NL},()=>[R()*6.283,1.5+R()*6,0.25+R()*1.1,0.2+R()*0.5,R()*6.283]);
// polvere dietro chi corre: una riserva di sbuffi riusati
const sbuffi=Array.from({length:14},()=>{ const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:sfumato('rgba(226,208,170,0.7)','rgba(226,208,170,0)'),transparent:true,opacity:0,depthWrite:false})); sp.visible=false; scene.add(sp); return {sp,t:0}; });
let sbuffoT=0, sbuffoI=0;
// la neve d'inverno (una stagione ogni tre lune: js/storie.js)
const NN=260, neve=(()=>{ const pos=new Float32Array(NN*3), g=new THREE.BufferGeometry(); for(let i=0;i<NN;i++){ pos[i*3]=(R()-0.5)*16; pos[i*3+1]=R()*6; pos[i*3+2]=(R()-0.5)*16; } g.setAttribute('position',new THREE.BufferAttribute(pos,3));
 const m=new THREE.Points(g,new THREE.PointsMaterial({color:'#ffffff',size:0.06,transparent:true,opacity:0.9,depthWrite:false})); m.frustumCulled=false; m.visible=false; scene.add(m); return m; })();
function atmosfera(dt,fase,notte,p){
 const inverno=Math.floor(G.t/(MOON*3))%4===3;
 if(G.dentro){ stelle.material.opacity=luna.material.opacity=lucciole.material.opacity=0; neve.visible=false; for(const b of sbuffi) b.sp.visible=false; return; }
 neve.visible=inverno; if(inverno){ neve.position.set(p.x*K,quotaPx(p.x,p.y),p.y*K); const a=neve.geometry.attributes.position; for(let i=0;i<NN;i++){ let y=a.getY(i)-dt*(0.5+(i%5)*0.12); if(y<0) y+=6; a.setY(i,y); a.setX(i,a.getX(i)+Math.sin(tempo+i)*dt*0.12); } a.needsUpdate=true; }
 // l'aria: fitta e bianca nel territorio della Nebbia, limpida e calda in quello delle Pietre
 const tr=territorio(p.x,p.y), nT=tr==='nebbia'?7:tr==='pietre'?15:12, fT=tr==='nebbia'?23:tr==='pietre'?42:34, k=Math.min(1,dt*0.8);
 ARIA.near+=(nT-ARIA.near)*k; ARIA.far+=(fT-ARIA.far)*k; scene.fog.near=ARIA.near; scene.fog.far=ARIA.far;
 const sera=Math.max(0,1-Math.abs(fase-0.58)/0.1), alba=Math.max(0,1-Math.abs(fase-0.99)/0.06), oro=Math.max(sera,alba*0.7);
 tmpC.copy(scene.background); if(tr==='nebbia') tmpC.lerp(ariaBianca,0.35*(1-notte)); else if(tr==='pietre') tmpC.lerp(ariaCalda,0.25*(1-notte)); if(oro) tmpC.lerp(soleSera,0.3*oro); if(inverno) tmpC.lerp(ariaBianca,0.3*(1-notte));
 scene.background.copy(tmpC); scene.fog.color.copy(tmpC);
 sole.color.copy(soleGiorno).lerp(soleSera,oro*0.8).lerp(soleLuna,notte*0.7);
 // stelle e luna seguono la telecamera; compaiono con la notte
 stelle.position.copy(camera.position); stelle.material.opacity=Math.min(1,notte*1.4)*0.95; stelle.rotation.y=tempo*0.004;
 luna.position.set(camera.position.x-26,camera.position.y+30,camera.position.z-38); luna.material.opacity=Math.min(1,notte*1.3);
 // lucciole intorno al giocatore
 lucciole.material.opacity=inverno?0:Math.min(1,notte*1.5)*0.9;
 if(notte>0.02){ const a=lucciole.geometry.attributes.position; for(let i=0;i<NL;i++){ const [an,r,h,v,f]=semiL[i], ang=an+tempo*v*0.3; a.setXYZ(i,p.x*K+Math.cos(ang)*r,quotaPx(p.x,p.y)+h+Math.sin(tempo*1.3+f)*0.15,p.y*K+Math.sin(ang)*r); } a.needsUpdate=true; }
 // l'acqua scorre
 ondeTex.offset.y=-tempo*0.05; ondeTex.offset.x=Math.sin(tempo*0.3)*0.02;
 // polvere dietro il giocatore che corre
 sbuffoT-=dt; if((p.vel||0)>120&&sbuffoT<=0&&!acqua(p.x,p.y)){ sbuffoT=0.12; const b=sbuffi[sbuffoI++%sbuffi.length]; b.t=0.6; b.sp.visible=true; b.sp.position.set(p.x*K+(R()-0.5)*0.1,quotaPx(p.x,p.y)+0.06,p.y*K+(R()-0.5)*0.1); }
 for(const b of sbuffi){ if(b.t<=0){ b.sp.visible=false; continue; } b.t-=dt; const q=1-b.t/0.6; b.sp.scale.setScalar(0.15+q*0.45); b.sp.material.opacity=0.55*(1-q); b.sp.position.y+=dt*0.15; }
}
function frame(dt){
 tempo+=dt; const p=G.p;
 // giorno e notte
 const fase=(G.t%MOON)/MOON, eclissi=G.eclissiFino&&G.t<G.eclissiFino, notte=eclissi?0.95:(fase>0.6?Math.sin((fase-0.6)/0.4*Math.PI):0); // durante un'eclissi il giorno si fa notte (js/storie.js)
 sole.intensity=2.9*(1-0.6*notte); emi.intensity=2.1*(1-0.35*notte); // più luce, anche nel bosco e di notte (richiesta del 12 novembre 2026)
 scene.background.copy(cielo).lerp(coloreNotte,notte*0.8);
 atmosfera(dt,fase,notte,p);
 sole.position.set(p.x*K+4,10,p.y*K+7); sole.target.position.set(p.x*K,0,p.y*K);
 // conquiste: ricolora il terreno quando si sposta un confine
 const cq=G.conq.nebbia+'|'+G.conq.pietre; if(cq!==conqVisto){ conqVisto=cq; coloraTerreno(); }
 // gatti
 const vivi=new Set([p,...G.cats]);
 for(const [c,o] of gatti3) if(!vivi.has(c)){ scene.remove(o.box); gatti3.delete(c); }
 for(const c of vivi) aggiornaGatto3(c,dt,tempo);
 // prede
 const viste=new Set(prede);
 for(const [q,m] of prede3) if(!viste.has(q)){ scene.remove(m); prede3.delete(q); }
 for(const q of prede){ let m=prede3.get(q); if(!m){ m=corpoPreda(q.tipo); scene.add(m); prede3.set(q,m); }
  const vola=q.tipo==='uccello'&&q.vola>0?q.vola*1.2:0, hop=(q.tipo==='coniglio'||q.tipo==='scoiattolo')?Math.abs(Math.sin(q.ph||0))*0.06*Math.min(1,(q.sp||0)/25):0;
  m.position.set(q.x*K,quotaPx(q.x,q.y)+vola+hop,q.y*K); if(Math.abs(q.vx||0)+Math.abs(q.vy||0)>0.5||q.allarme>0) m.rotation.y=Math.atan2(q.allarme>0?q.x-p.x:q.vx,q.allarme>0?q.y-p.y:q.vy); }
 // erbe e palla
 ERBE.forEach((h,i)=>{ const e=erbe3[i], v=!G.dentro&&G.erbe[i]<=G.t&&Math.abs(h.x-p.x)<1500&&Math.abs(h.y-p.y)<1500; e.visible=v; if(v){ e.userData.alone.material.opacity=0.4+0.25*Math.sin(tempo*2.2+i); e.rotation.z=Math.sin(tempo*1.1+i)*0.05; } }); // si disegnano soltanto le piante vicine
 palla3.position.set(palla.x*K,quotaPx(palla.x,palla.y)+0.13,palla.y*K); palla3.rotation.x+=(palla.vy||0)*dt*0.1; palla3.rotation.z-=(palla.vx||0)*dt*0.1;
 // mucchio delle prede
 const n=Math.min(G.cibo,12); if(n!==mucchioN){ mucchioN=n; mucchio3.clear(); const tt=['topo','uccello','topo','coniglio','scoiattolo']; for(let i=0;i<n;i++){ const m=corpoPreda(tt[i%5]); const a=i*2.4, r=0.05+Math.sqrt(i)*0.09; m.position.set(Math.cos(a)*r,(i>6?0.05:0),Math.sin(a)*r); m.rotation.set(0,a,Math.PI/2*(i%2?1:0.6)); mucchio3.add(m); } }
 // visitatore
 const v=G.visitatore;
 if(v&&visitTipo!==v.tipo){ if(visit3) scene.remove(visit3); visit3=corpoVisitatore(v.tipo); visitTipo=v.tipo; scene.add(visit3); }
 if(!v&&visit3){ scene.remove(visit3); visit3=null; visitTipo=null; }
 if(v&&visit3){ visit3.position.set(v.x*K,quotaPx(v.x,v.y),v.y*K); visit3.rotation.y=(v.flip||1)>0?Math.PI/2:-Math.PI/2; visit3.scale.set(1,1-0.3*(v.kneel||0),1); visit3.traverse(o=>{ if(o.material){ o.material.transparent=true; o.material.opacity=v.alpha??1; } }); }
 aggiornaOggetti3(tempo); aggiornaNebbie(tempo); aggiornaCura(tempo); aggiornaColosso(tempo); aggiornaFuocoSacro(tempo);
 aggiornaFunerale3();
 aggiornaSala(tempo);
 liberaVisuale();
 renderer.render(scene,camera);
}
// ---------- le sale interne delle tane: si entra dall'imbocco con un cambio di scena (richiesta del 12 novembre 2026) ----------
// Ogni tana del campo ha una sala costruita lontano dal bosco. La sala è la tana ingrandita SALA_S volte
// un gatto che nella logica sta dentro la tana compare nel punto corrispondente della sala.
const SALA_S=7, SALE={}, salaH=3.4;
const tela=(w,h,f)=>{ const c=document.createElement('canvas'); c.width=w; c.height=h; f(c.getContext('2d'),w,h); const t=new THREE.CanvasTexture(c); t.colorSpace=THREE.SRGBColorSpace; return t; };
const TEMI={ // colori e stile di ogni tana (richiesta del 12 novembre 2026: giapponese, tempio greco, cattedrale gotica, caverna, con elementi egizi e cinesi mescolati)
 tanaGuerrieri:{stile:'giappone',volta:'#5a3a22',tessuto:'#a01818',accento:'#f0d070'},
 tanaApprendisti:{stile:'grecia',volta:'#1e3a7a',tessuto:'#1f3f8a',accento:'#f4ecd8'},
 nursery:{stile:'gotico',volta:'#22264a',tessuto:'#5a2a7a',accento:'#e8c860'},
 tanaGuaritore:{stile:'caverna',volta:'#4a3a2c',tessuto:'#7a4a1a',accento:'#7ad0ff'},
};
const pavimento=tela(512,512,(g,w,h)=>{ g.fillStyle='#6b5a44'; g.fillRect(0,0,w,h);
 for(let i=0;i<9;i++){ const r=40+i*28; g.strokeStyle='rgba(40,28,18,0.28)'; g.lineWidth=2; g.beginPath(); g.arc(256,256,r,0,6.283); g.stroke();
  for(let a=0;a<6.283;a+=6.283/(8+i*4)){ g.beginPath(); g.moveTo(256+Math.cos(a)*(r-28),256+Math.sin(a)*(r-28)); g.lineTo(256+Math.cos(a)*r,256+Math.sin(a)*r); g.stroke(); } }
 for(let i=0;i<5000;i++){ const v=90+R()*70|0; g.fillStyle=`rgba(${v},${v*0.85|0},${v*0.65|0},0.25)`; g.fillRect(R()*w,R()*h,2,2); }
 g.strokeStyle='#a4521f'; g.lineWidth=6; g.beginPath(); for(let a=0;a<30;a+=0.15){ const r=a*2.6; g.lineTo(256+Math.cos(a)*r,256+Math.sin(a)*r); } g.stroke(); });
const stendardo=(col,acc)=>tela(128,256,(g,w,h)=>{ g.fillStyle=col; g.fillRect(0,0,w,h-30); g.beginPath(); g.moveTo(0,h-30); g.lineTo(w/2,h); g.lineTo(w,h-30); g.fill();
 g.strokeStyle=acc; g.lineWidth=5; g.strokeRect(8,8,w-16,h-46); g.fillStyle=acc;
 g.beginPath(); g.ellipse(64,100,26,22,0,0,6.283); g.fill(); for(const [dx,dy] of [[-24,-30],[-8,-40],[8,-40],[24,-30]]){ g.beginPath(); g.ellipse(64+dx,100+dy,8,10,0,0,6.283); g.fill(); }
 g.font='bold 22px serif'; g.textAlign='center'; for(let i=0;i<3;i++) g.fillText('✶',32+i*32,190); });
const oro=new THREE.MeshStandardMaterial({color:'#d9a440',metalness:0.85,roughness:0.3,emissive:'#3a2208',emissiveIntensity:0.6});
const legno=new THREE.MeshStandardMaterial({color:'#5a3e24',roughness:1}), ossoMat=new THREE.MeshStandardMaterial({color:'#e8dfc8',roughness:0.7});
const pietraMat=new THREE.MeshStandardMaterial({color:'#8a8478',roughness:1,flatShading:true});
const fiammaMat2=new THREE.MeshBasicMaterial({color:'#ffb347',transparent:true,opacity:0.9}), fiammaCuore=new THREE.MeshBasicMaterial({color:'#fff2b0'});
const FIAMME_SALA=[], MOBILI=[], SALA_LUCI=[];
for(let i=0;i<3;i++){ const l=new THREE.PointLight('#ffa040',0,14,1.3); scene.add(l); SALA_LUCI.push(l); }
function fiamma(gr,x,y,z,s){ const f=new THREE.Group(); const a=new THREE.Mesh(new THREE.ConeGeometry(0.05*s,0.2*s,8),fiammaMat2); a.position.y=0.1*s; const b=new THREE.Mesh(new THREE.ConeGeometry(0.025*s,0.1*s,6),fiammaCuore); b.position.y=0.06*s; f.add(a,b); f.position.set(x,y,z); gr.add(f); FIAMME_SALA.push(f); return f; }

// ---------- gli stili delle sale ----------
function texParete(k){ const st=TEMI[k].stile;
 if(st==='caverna'){ const t=pittura.clone(); t.needsUpdate=true; t.wrapS=THREE.RepeatWrapping; t.repeat.set(4,1); return t; }
 const t=tela(1024,256,(g,w,h)=>{
  if(st==='giappone'){ g.fillStyle='#efe4c8'; g.fillRect(0,0,w,h); g.strokeStyle='#3a2414'; g.lineWidth=6; // pannelli shōji
   for(let x=0;x<=w;x+=64){ g.beginPath(); g.moveTo(x,0); g.lineTo(x,h); g.stroke(); } g.lineWidth=3; for(let y=0;y<=h;y+=42){ g.beginPath(); g.moveTo(0,y); g.lineTo(w,y); g.stroke(); }
   g.fillStyle='#7a1010'; g.fillRect(0,h-26,w,26); g.fillStyle='#d8b040'; for(let x=10;x<w;x+=128){ g.beginPath(); g.arc(x+54,70,22,0,6.283); g.fill(); } }
  else if(st==='grecia'){ g.fillStyle='#ece6da'; g.fillRect(0,0,w,h); for(let i=0;i<3000;i++){ g.fillStyle=`rgba(180,170,160,${R()*0.25})`; g.fillRect(R()*w,R()*h,2,2); }
   g.fillStyle='#b8402a'; g.fillRect(0,26,w,40); g.strokeStyle='#1a1410'; g.lineWidth=5; // il meandro
   for(let x=0;x<w;x+=40){ g.beginPath(); g.moveTo(x,60); g.lineTo(x,32); g.lineTo(x+30,32); g.lineTo(x+30,52); g.lineTo(x+12,52); g.lineTo(x+12,42); g.stroke(); }
   g.fillStyle='#1a1410'; for(let x=60;x<w;x+=200){ // gatti a figure nere, come sui vasi
    g.beginPath(); g.ellipse(x,170,34,13,0,0,6.283); g.fill(); g.beginPath(); g.arc(x+36,156,12,0,6.283); g.fill(); g.beginPath(); g.moveTo(x+30,148); g.lineTo(x+32,134); g.lineTo(x+38,146); g.moveTo(x+40,146); g.lineTo(x+46,134); g.lineTo(x+46,150); g.fill();
    g.lineWidth=6; g.strokeStyle='#1a1410'; g.beginPath(); g.moveTo(x-32,165); g.quadraticCurveTo(x-60,150,x-52,124); g.stroke(); for(const lx of [-20,-8,12,24]){ g.beginPath(); g.moveTo(x+lx,178); g.lineTo(x+lx,200); g.stroke(); } }
   g.fillStyle='#b8402a'; g.fillRect(0,h-30,w,30); }
  else { g.fillStyle='#8a8a90'; g.fillRect(0,0,w,h); g.strokeStyle='rgba(50,50,60,0.5)'; g.lineWidth=2; // pietra a conci
   for(let y=0;y<h;y+=32){ g.beginPath(); g.moveTo(0,y); g.lineTo(w,y); g.stroke(); for(let x=(y/32%2)*40;x<w;x+=80){ g.beginPath(); g.moveTo(x,y); g.lineTo(x,y+32); g.stroke(); } } }
 }); t.wrapS=THREE.RepeatWrapping; t.repeat.set(3,1); return t; }
function texPavimento(k){ const st=TEMI[k].stile; if(st==='caverna') return pavimento;
 return tela(512,512,(g,w,h)=>{
  if(st==='giappone'){ for(let i=0;i<8;i++) for(let j=0;j<4;j++){ const x=(i%2?j*128+64:j*128)%w, y=i*64; g.fillStyle=`hsl(${70+R()*8},35%,${62+R()*6}%)`; g.fillRect(x,y,128,64); g.strokeStyle='#2a3a1a'; g.lineWidth=5; g.strokeRect(x,y,128,64); } }
  else if(st==='grecia'){ g.fillStyle='#f1ebdd'; g.fillRect(0,0,w,h); for(let r=60;r<256;r+=50){ g.strokeStyle='#1a1410'; g.lineWidth=10; g.beginPath(); g.arc(256,256,r,0,6.283); g.stroke(); }
   g.fillStyle='#b8402a'; for(let a=0;a<6.283;a+=0.42){ g.beginPath(); g.arc(256+Math.cos(a)*135,256+Math.sin(a)*135,10,0,6.283); g.fill(); } g.fillStyle='#1a1410'; g.beginPath(); g.arc(256,256,30,0,6.283); g.fill(); }
  else { const n=8; for(let i=0;i<n;i++) for(let j=0;j<n;j++){ g.fillStyle=(i+j)%2?'#1e1e24':'#e8e4dc'; g.fillRect(i*w/n,j*h/n,w/n,h/n); } } }); }
function texVolta(k){ const st=TEMI[k].stile;
 return tela(512,256,(g,w,h)=>{ g.fillStyle=TEMI[k].volta; g.fillRect(0,0,w,h);
  if(st==='grecia'||st==='gotico'){ g.fillStyle='#f0c850'; for(let i=0;i<70;i++){ const x=R()*w, y=R()*h; g.beginPath(); for(let a=0;a<10;a++){ const r=a%2?2:5; g.lineTo(x+Math.cos(a*0.628)*r,y+Math.sin(a*0.628)*r); } g.fill(); } }
  if(st==='gotico'){ g.strokeStyle='#c8a850'; g.lineWidth=4; for(let x=0;x<w;x+=64){ g.beginPath(); g.moveTo(x,0); g.lineTo(x,h); g.stroke(); } }
  if(st==='giappone'){ g.strokeStyle='#2a1a0e'; g.lineWidth=10; for(let x=0;x<w;x+=48){ g.beginPath(); g.moveTo(x,0); g.lineTo(x,h); g.stroke(); } }
  if(st==='caverna'){ for(let i=0;i<1500;i++){ const v=50+R()*50|0; g.fillStyle=`rgba(${v},${v*0.85|0},${v*0.7|0},0.5)`; g.fillRect(R()*w,R()*h,3,3); } } }); }
const marmoBianco=new THREE.MeshStandardMaterial({color:'#f2ede4',roughness:0.45}), laccaR=new THREE.MeshStandardMaterial({color:'#b01a14',roughness:0.4}), legnoScuro=new THREE.MeshStandardMaterial({color:'#2a1a10',roughness:0.8});
const pietraGrigia=new THREE.MeshStandardMaterial({color:'#8c8c96',roughness:0.9});
function lanterna(g,x,y,z,col,sc=1){ const l=new THREE.Mesh(new THREE.SphereGeometry(0.16*sc,14,10),new THREE.MeshStandardMaterial({color:col,emissive:col,emissiveIntensity:0.8,roughness:0.6})); l.scale.y=1.3; l.position.set(x,y,z); g.add(l);
 for(const dy of [-0.2,0.2]){ const b=new THREE.Mesh(new THREE.CylinderGeometry(0.08*sc,0.08*sc,0.03,10),legnoScuro); b.position.set(x,y+dy*sc,z); g.add(b); }
 const f=new THREE.Mesh(new THREE.CylinderGeometry(0.004,0.004,salaH+0.6-y,3),legnoScuro); f.position.set(x,(salaH+0.6+y)/2,z); g.add(f); }
function ankh(g,x,y,z,ry){ const a=new THREE.Group(); const m=oro;
 const anello=new THREE.Mesh(new THREE.TorusGeometry(0.1,0.03,8,20),m); anello.position.y=0.28; anello.scale.y=1.3; a.add(anello);
 const fusto=new THREE.Mesh(new THREE.BoxGeometry(0.06,0.32,0.05),m); fusto.position.y=0.02; a.add(fusto);
 const braccio=new THREE.Mesh(new THREE.BoxGeometry(0.3,0.06,0.05),m); braccio.position.y=0.16; a.add(braccio);
 a.position.set(x,y,z); a.rotation.y=ry||0; g.add(a); }
function colonna(g,x,z,stile){ // al posto dei menhir e dei totem, nello stesso punto (restano solidi)
 if(stile==='grecia'){ const c=new THREE.Mesh(new THREE.CylinderGeometry(0.2,0.24,salaH-0.3,16),marmoBianco); c.position.set(x,(salaH-0.3)/2+0.1,z); c.castShadow=true; g.add(c);
  const cap=new THREE.Mesh(new THREE.BoxGeometry(0.55,0.15,0.55),marmoBianco); cap.position.set(x,salaH-0.15,z); g.add(cap); const base=cap.clone(); base.position.y=0.07; g.add(base); return; }
 if(stile==='giappone'){ const b=new THREE.Group(); b.position.set(x,0,z); // lanterna di pietra tōrō
  const p1=new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.14,0.7,8),pietraGrigia); p1.position.y=0.35; b.add(p1);
  const box=new THREE.Mesh(new THREE.BoxGeometry(0.34,0.26,0.34),pietraGrigia); box.position.y=0.83; b.add(box);
  const luce=new THREE.Mesh(new THREE.BoxGeometry(0.2,0.14,0.36),new THREE.MeshBasicMaterial({color:'#ffd27a'})); luce.position.y=0.83; b.add(luce);
  const tetto=new THREE.Mesh(new THREE.ConeGeometry(0.34,0.24,4),pietraGrigia); tetto.position.y=1.08; tetto.rotation.y=Math.PI/4; b.add(tetto); g.add(b); return; }
 if(stile==='gotico'){ const c=new THREE.Group(); c.position.set(x,0,z); for(const [dx,dz] of [[0.09,0],[-0.09,0],[0,0.09],[0,-0.09]]){ const f=new THREE.Mesh(new THREE.CylinderGeometry(0.07,0.08,salaH,10),pietraGrigia); f.position.set(dx,salaH/2,dz); c.add(f); }
  const cap=new THREE.Mesh(new THREE.ConeGeometry(0.28,0.4,8),pietraGrigia); cap.position.y=salaH+0.1; cap.rotation.x=Math.PI; c.add(cap); g.add(c); return; }
 const st=new THREE.Mesh(ruvido(new THREE.ConeGeometry(0.26,1.2+R()*0.6,9),0.12,3),new THREE.MeshStandardMaterial({color:'#8a7a66',roughness:1})); st.position.set(x,0.6,z); g.add(st); } // stalagmite
function decorStile(k,g,Rr,zA){ const st=TEMI[k].stile;
 if(st==='giappone'){ // torii rosso dietro l'altare, lanterne di carta, e un ankh egizio fuori posto
  const zT=zA-1.9; for(const sx of [-1,1]){ const p=new THREE.Mesh(new THREE.CylinderGeometry(0.09,0.11,2.7,12),laccaR); p.position.set(sx*1.3,1.35,zT); g.add(p); }
  const kas=new THREE.Mesh(new THREE.BoxGeometry(3.3,0.16,0.26),legnoScuro); kas.position.set(0,2.78,zT); g.add(kas); const kas2=new THREE.Mesh(new THREE.BoxGeometry(3.0,0.12,0.22),laccaR); kas2.position.set(0,2.62,zT); g.add(kas2);
  const nuki=new THREE.Mesh(new THREE.BoxGeometry(2.8,0.1,0.14),laccaR); nuki.position.set(0,2.2,zT); g.add(nuki);
  for(let j=0;j<6;j++){ const a=Math.PI*0.5+0.9+j*0.75; lanterna(g,Math.cos(a)*Rr*0.55,2.0,Math.sin(a)*Rr*0.55,j%2?'#e83a2a':'#ffe0a0'); }
  ankh(g,Rr-0.25,1.6,0,-Math.PI/2); }
 if(st==='grecia'){ // frontone sopra l'altare, anfore, un tripode cinese di bronzo e un piccolo obelisco egizio
  const fr=new THREE.Shape(); fr.moveTo(-1.6,0); fr.lineTo(1.6,0); fr.lineTo(0,0.7); fr.closePath();
  const fron=new THREE.Mesh(new THREE.ExtrudeGeometry(fr,{depth:0.25,bevelEnabled:false}),marmoBianco); fron.position.set(0,2.6,zA-1.95); g.add(fron);
  const archi=new THREE.Mesh(new THREE.BoxGeometry(3.4,0.25,0.3),marmoBianco); archi.position.set(0,2.5,zA-1.85); g.add(archi);
  for(const sx of [-1,1]){ const c=new THREE.Mesh(new THREE.CylinderGeometry(0.16,0.19,2.4,16),marmoBianco); c.position.set(sx*1.45,1.2,zA-1.85); g.add(c); }
  const pr=[]; for(let i=0;i<=12;i++){ const t=i/12; pr.push(new THREE.Vector2(0.05+Math.sin(t*Math.PI)*0.16+(t>0.85?0.04:0),t*0.55)); }
  const anf=new THREE.LatheGeometry(pr,16); [[2.6,1.6],[-2.6,1.6],[3.2,-0.5],[-3.2,-0.5]].forEach(([x,z],i)=>{ const a=new THREE.Mesh(anf,new THREE.MeshStandardMaterial({color:i%2?'#1a1410':'#b8502a',roughness:0.5})); a.position.set(x,0,z); g.add(a); });
  const ding=new THREE.Group(); ding.position.set(1.7,0,1.4); const v=new THREE.Mesh(new THREE.CylinderGeometry(0.28,0.22,0.3,16),bronzo); v.position.y=0.45; ding.add(v);
  for(let j=0;j<3;j++){ const l=new THREE.Mesh(new THREE.CylinderGeometry(0.03,0.04,0.3,6),bronzo); l.position.set(Math.cos(j*2.09)*0.17,0.15,Math.sin(j*2.09)*0.17); ding.add(l); } g.add(ding);
  const ob=new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.13,1.2,4),new THREE.MeshStandardMaterial({color:'#c8a87a',roughness:0.8})); ob.position.set(-1.8,0.6,1.5); ob.rotation.y=Math.PI/4; g.add(ob); }
 if(st==='gotico'){ // vetrate colorate, un rosone con l'occhio di Horus, lanterne cinesi
  const vetro=tela(128,256,(c,w,h)=>{ const cols=['#c8202a','#2a50c8','#e8c020','#20a050','#8a30c0']; for(let y=0;y<h;y+=32) for(let x=0;x<w;x+=32){ c.fillStyle=cols[(x/32+y/32*3)%5|0]; c.fillRect(x,y,32,32); } c.strokeStyle='#111'; c.lineWidth=4; for(let y=0;y<=h;y+=32){ c.beginPath(); c.moveTo(0,y); c.lineTo(w,y); c.stroke(); } for(let x=0;x<=w;x+=32){ c.beginPath(); c.moveTo(x,0); c.lineTo(x,h); c.stroke(); } });
  const forma=new THREE.Shape(); forma.moveTo(-0.35,0); forma.lineTo(0.35,0); forma.lineTo(0.35,1.2); forma.quadraticCurveTo(0.35,1.6,0,1.85); forma.quadraticCurveTo(-0.35,1.6,-0.35,1.2); forma.closePath();
  const gv=new THREE.ShapeGeometry(forma); gv.computeBoundingBox(); const uv=gv.attributes.uv, pz=gv.attributes.position; for(let i=0;i<uv.count;i++) uv.setXY(i,(pz.getX(i)+0.35)/0.7,pz.getY(i)/1.85);
  const mv=new THREE.MeshBasicMaterial({map:vetro,side:THREE.DoubleSide});
  for(const a of [Math.PI*0.5+1.3,Math.PI*0.5-1.3,Math.PI+0.35,Math.PI*2-0.35,Math.PI*1.5+0.75,Math.PI*1.5-0.75]){ const v=new THREE.Mesh(gv,mv); v.position.set(Math.cos(a)*(Rr-0.05),0.9,Math.sin(a)*(Rr-0.05)); v.lookAt(0,0.9,0); g.add(v); }
  const rosa=tela(256,256,(c,w,h)=>{ const cols=['#c8202a','#2a50c8','#e8c020','#20a050']; for(let i=0;i<16;i++){ c.fillStyle=cols[i%4]; c.beginPath(); c.moveTo(128,128); c.arc(128,128,124,i*Math.PI/8,(i+1)*Math.PI/8); c.fill(); }
   c.fillStyle='#f4e8c8'; c.beginPath(); c.arc(128,128,50,0,6.283); c.fill(); c.strokeStyle='#1a1a3a'; c.lineWidth=7; c.beginPath(); c.ellipse(128,124,34,16,0,0,6.283); c.stroke(); c.fillStyle='#1a1a3a'; c.beginPath(); c.arc(128,124,10,0,6.283); c.fill(); c.beginPath(); c.moveTo(118,140); c.lineTo(112,168); c.stroke(); c.beginPath(); c.moveTo(150,138); c.quadraticCurveTo(170,150,160,170); c.stroke(); });
  const ros=new THREE.Mesh(new THREE.CircleGeometry(0.75,40),new THREE.MeshBasicMaterial({map:rosa})); ros.position.set(0,2.6,-(Rr-0.06)); g.add(ros);
  for(let j=0;j<5;j++){ const a=Math.PI*0.5+1.0+j*1.0; lanterna(g,Math.cos(a)*Rr*0.5,2.1,Math.sin(a)*Rr*0.5,'#d8281a',0.9); } }
 if(st==='caverna'){ // stalattiti, funghi luminosi, una campana cinese di bronzo e un ankh egizio
  for(let j=0;j<26;j++){ const a=R()*6.283, r=0.6+R()*(Rr-1.2), h=0.3+R()*0.7; const s=new THREE.Mesh(new THREE.ConeGeometry(0.06+R()*0.08,h,7),new THREE.MeshStandardMaterial({color:'#9a8a74',roughness:1})); s.rotation.x=Math.PI; s.position.set(Math.cos(a)*r,salaH+0.35-h/2,Math.sin(a)*r); g.add(s); }
  for(let j=0;j<18;j++){ const a=R()*6.283, r=Rr*(0.7+R()*0.22); const f=new THREE.Group(); const gamba=new THREE.Mesh(new THREE.CylinderGeometry(0.015,0.02,0.1,6),new THREE.MeshBasicMaterial({color:'#cfe8f0'})); gamba.position.y=0.05; f.add(gamba);
   const cap=new THREE.Mesh(new THREE.SphereGeometry(0.05,10,6,0,Math.PI*2,0,Math.PI/2),new THREE.MeshBasicMaterial({color:j%2?'#5af0ff':'#b0ff7a'})); cap.position.y=0.1; f.add(cap); f.position.set(Math.cos(a)*r,0,Math.sin(a)*r); g.add(f); }
  const camp=new THREE.Mesh(new THREE.CylinderGeometry(0.16,0.26,0.42,16,1,true),new THREE.MeshStandardMaterial({color:'#7a5a2a',metalness:0.8,roughness:0.35,side:THREE.DoubleSide})); camp.position.set(-2.2,2.3,0.6); g.add(camp);
  const cf=new THREE.Mesh(new THREE.CylinderGeometry(0.005,0.005,0.8,3),legnoScuro); cf.position.set(-2.2,2.9,0.6); g.add(cf);
  ankh(g,0.65,0.58,zA-0.35,0); }
}
// ---------- le statue: ogni tana ha le sue (richiesta del 12 novembre 2026) ----------
const bronzo=new THREE.MeshStandardMaterial({color:'#8a5a2a',metalness:0.75,roughness:0.38,emissive:'#1a0d04',emissiveIntensity:0.5});
const marmo=new THREE.MeshStandardMaterial({color:'#efe8dc',roughness:0.35,metalness:0.05});
const argento=new THREE.MeshStandardMaterial({color:'#c8d4e0',metalness:0.85,roughness:0.25,emissive:'#0a1420',emissiveIntensity:0.6});
const laccaRossa=new THREE.MeshStandardMaterial({color:'#9a1a14',roughness:0.35,metalness:0.2}), acciaio=new THREE.MeshStandardMaterial({color:'#dfe6ee',metalness:0.95,roughness:0.15});
function statua(mat,pose,sc){ const s=SkeletonUtils.clone(modello); s.traverse(o=>{ if(o.isMesh){ o.material=mat; o.castShadow=true; o.frustumCulled=false; } });
 const os={}; s.traverse(o=>{ if(o.isBone) os[o.name.replace(/_\d+$/,'')]=o; });
 for(const [n,[x,y,z]] of Object.entries(pose)){ const b=os[n]; if(b){ eu.set(x,y,z); qq.setFromEuler(eu); b.quaternion.multiply(qq); } }
 s.scale.setScalar(SCALA*sc); s.userData.ossa=os; return s; }
function puntoOsso(s,g,re){ g.updateMatrixWorld(true); const b=Object.entries(s.userData.ossa).find(([n])=>re.test(n)); const v=new THREE.Vector3(); if(b){ b[1].getWorldPosition(v); g.worldToLocal(v); } return v; }
function plinto(g,x,z,w,h,mat){ const p=new THREE.Mesh(ruvido(new THREE.BoxGeometry(w,h,w*0.7),0.03,3),mat||pietraMat); p.position.set(x,h/2,z); p.castShadow=p.receiveShadow=true; g.add(p); return h; }
function statue(k,g,zA){ const z=zA-1.05;
 if(k==='tanaGuerrieri'){ // due samurai gatti di bronzo che duellano, con l'elmo e la katana
  const h=plinto(g,0,z,1.7,1.0);
  for(const sx of [-1,1]){ const s=statua(bronzo,{root:[-0.7,0,0],legupperFL:[-1.5,0,0],legupperFR:[-0.9,0,0],tail:[0.9,0.3*sx,0],neck:[0.25,0,0],spine01:[0.15,0,0]},2.3);
   s.position.set(sx*0.42,h,z); s.rotation.y=-sx*Math.PI/2; g.add(s);
   const testa=puntoOsso(s,g,/^head$/), zampa=puntoOsso(s,g,/(paw|foot|leglower).*FL|FL.*(paw|foot)/i);
   const elmo=new THREE.Group(); elmo.position.copy(testa).add(new THREE.Vector3(0,0.07,0));
   const cal=new THREE.Mesh(new THREE.SphereGeometry(0.11,14,8,0,Math.PI*2,0,Math.PI/2),laccaRossa); cal.scale.set(1.15,0.8,1.15); elmo.add(cal);
   const fal=new THREE.Mesh(new THREE.CylinderGeometry(0.16,0.17,0.03,16,1,true),laccaRossa); fal.position.y=0.005; elmo.add(fal);
   const corna=new THREE.Mesh(new THREE.TorusGeometry(0.08,0.008,6,16,Math.PI),oro); corna.position.set(-sx*0.07,0.08,0); corna.rotation.y=Math.PI/2; elmo.add(corna);
   g.add(elmo);
   const kat=new THREE.Group(); kat.position.copy(zampa.lengthSq()?zampa:testa.clone().add(new THREE.Vector3(-sx*0.1,-0.1,0)));
   const lama=new THREE.Mesh(new THREE.BoxGeometry(0.012,0.5,0.03),acciaio); lama.position.y=0.27; kat.add(lama);
   const tsuba=new THREE.Mesh(new THREE.CylinderGeometry(0.035,0.035,0.01,10),oro); kat.add(tsuba);
   const manico=new THREE.Mesh(new THREE.CylinderGeometry(0.012,0.012,0.12,6),new THREE.MeshStandardMaterial({color:'#1a1010'})); manico.position.y=-0.06; kat.add(manico);
   kat.rotation.z=sx*0.9; kat.rotation.x=0.3; g.add(kat); }
  // due armature appese ai lati, come in un dojo
  for(const sx of [-1,1]){ const a=new THREE.Group(); a.position.set(sx*2.9,0,zA+0.2);
   const as=new THREE.Mesh(new THREE.CylinderGeometry(0.03,0.03,1.3,6),legno); as.position.y=0.65; a.add(as);
   const co=new THREE.Mesh(new THREE.BoxGeometry(0.42,0.38,0.2),laccaRossa); co.position.y=0.95; a.add(co);
   const el=new THREE.Mesh(new THREE.SphereGeometry(0.13,12,8,0,Math.PI*2,0,Math.PI/2),laccaRossa); el.position.y=1.32; a.add(el);
   for(let j=0;j<4;j++){ const l=new THREE.Mesh(new THREE.BoxGeometry(0.42,0.04,0.21),new THREE.MeshStandardMaterial({color:j%2?'#d8b040':'#3a1a10'})); l.position.y=0.8+j*0.08; a.add(l); }
   a.rotation.y=-sx*0.6; g.add(a); } }
 else if(k==='tanaApprendisti'){ // un apprendista di bronzo che balza su un topo
  const h=plinto(g,0,z,1.1,1.0);
  const s=statua(bronzo,{root:[-0.35,0,0],legupperFL:[-1.4,0,0],legupperFR:[-1.3,0,0],thighBL:[0.6,0,0],thighBR:[0.6,0,0],tail:[0.4,0,0]},1.9);
  s.position.set(0,h+0.22,z-0.1); g.add(s);
  const asta=new THREE.Mesh(new THREE.CylinderGeometry(0.015,0.015,0.25,6),bronzo); asta.position.set(0,h+0.12,z-0.1); g.add(asta);
  const topo=new THREE.Mesh(new THREE.SphereGeometry(0.06,10,8),bronzo); topo.scale.set(1,0.75,1.6); topo.position.set(0,h+0.05,z+0.35); g.add(topo); }
 else if(k==='nursery'){ // una gatta di marmo sdraiata, con i suoi cuccioli accanto
  const h=plinto(g,0,z,1.4,0.95,marmo);
  const m=statua(marmo,{root:[0,0,1.3],neck:[0.2,0,0],tail:[0.3,0.4,0]},2.2); m.position.set(-0.1,h+0.05,z); m.rotation.y=Math.PI/2; g.add(m);
  for(const [dx,dz,r] of [[0.32,0.15,0.4],[0.36,-0.12,-0.3]]){ const c=statua(marmo,{root:[-0.3,0,0],neck:[-0.2,0,0]},0.9); c.position.set(dx,h,z+dz); c.rotation.y=-Math.PI/2+r; g.add(c); }
  for(let j=0;j<10;j++){ const a=j/10*6.283, f=new THREE.Mesh(new THREE.SphereGeometry(0.035,6,5),new THREE.MeshStandardMaterial({color:['#ffd0e0','#fff2a0','#d0c0ff'][j%3]})); f.position.set(Math.cos(a)*0.62,h+0.02,z+Math.sin(a)*0.4); g.add(f); } }
 else { // il guaritore: un gatto d'argento seduto davanti alla luna, con un mazzo d'erbe
  const h=plinto(g,0,z,1.0,1.0);
  const s=statua(argento,{root:[-0.5,0,0],neck:[-0.45,0,0],head:[-0.2,-0.2,0],tail:[0.5,0,0]},2.4); s.position.set(0,h,z); g.add(s);
  const luna=new THREE.Mesh(new THREE.TorusGeometry(0.42,0.05,8,32,Math.PI*1.25),new THREE.MeshBasicMaterial({color:'#dfe8ff'})); luna.position.set(0,h+0.75,z-0.35); luna.rotation.z=2.2; g.add(luna);
  for(let j=0;j<5;j++){ const e=new THREE.Mesh(new THREE.ConeGeometry(0.03,0.22,5),new THREE.MeshStandardMaterial({color:['#6f8f45','#9ab060','#7a5a8a'][j%3]})); e.position.set(0.3+j*0.03,h+0.11,z+0.25); e.rotation.z=0.2-j*0.1; g.add(e); } }
}
function sala(k,i){
 const d=L[k], Rr=d.r*SALA_S*K, T=TEMI[k], g=new THREE.Group(); g.position.set(-120-i*30,0,20); scene.add(g);
 const pav=new THREE.Mesh(new THREE.CircleGeometry(Rr,64),new THREE.MeshStandardMaterial({map:texPavimento(k),roughness:TEMI[k].stile==='gotico'?0.35:1})); pav.rotation.x=-Math.PI/2; pav.receiveShadow=true; g.add(pav);
 // pareti dipinte, con l'apertura della porta a sud (+Z)
 const pt=texParete(k);
 const muro=new THREE.Mesh(new THREE.CylinderGeometry(Rr,Rr,salaH,72,1,true,0.32,Math.PI*2-0.64),new THREE.MeshStandardMaterial({map:pt,color:T.tinta||'#ffffff',side:THREE.BackSide,roughness:1})); muro.position.y=salaH/2; g.add(muro);
 const volta=new THREE.Mesh(ruvido(new THREE.SphereGeometry(Rr,40,16,0,Math.PI*2,0,Math.PI/2),0.06,1.5),new THREE.MeshStandardMaterial({map:texVolta(k),side:THREE.BackSide,roughness:1})); volta.scale.y=0.55; volta.position.y=salaH-0.02; g.add(volta);
 // la porta: stipiti di pietra, architrave, e fuori la luce del giorno
 for(const sx of [-1,1]){ const st=new THREE.Mesh(ruvido(new THREE.BoxGeometry(0.4,salaH*0.8,0.5),0.06,3),pietraMat); st.position.set(sx*Math.sin(0.32)*Rr,salaH*0.4,Math.cos(0.32)*Rr-0.1); g.add(st); }
 const arch=new THREE.Mesh(ruvido(new THREE.BoxGeometry(Math.sin(0.32)*Rr*2+0.5,0.35,0.55),0.06,3),pietraMat); arch.position.set(0,salaH*0.8+0.15,Math.cos(0.32)*Rr-0.1); g.add(arch);
 const giorno=new THREE.Mesh(new THREE.PlaneGeometry(Math.sin(0.32)*Rr*2+0.4,salaH*0.8),new THREE.MeshBasicMaterial({color:'#fff1c8'})); giorno.position.set(0,salaH*0.4,Rr+0.05); giorno.rotation.y=Math.PI; g.add(giorno);
 // l'altare a nord, con l'idolo d'oro del gatto, i lumini e le offerte; dietro, la stele delle leggende
 const zA=-0.5*d.r*SALA_S*K;
 const alt=new THREE.Mesh(ruvido(new THREE.BoxGeometry(1.5,0.55,0.7),0.05,3),pietraMat); alt.position.set(0,0.27,zA-0.35); alt.castShadow=alt.receiveShadow=true; g.add(alt);
 const drappo=new THREE.Mesh(new THREE.BoxGeometry(1.56,0.04,0.5),new THREE.MeshStandardMaterial({color:T.tessuto,roughness:0.9})); drappo.position.set(0,0.56,zA-0.35); g.add(drappo);
 const fronte=new THREE.Mesh(new THREE.PlaneGeometry(0.9,0.42),new THREE.MeshStandardMaterial({color:T.tessuto,roughness:0.9,side:THREE.DoubleSide})); fronte.position.set(0,0.33,zA+0.005); g.add(fronte);
 for(let j=0;j<7;j++){ const x=-0.6+j*0.2, h=0.08+((j*37)%5)*0.03; const ce=new THREE.Mesh(new THREE.CylinderGeometry(0.03,0.035,h,8),ceraMat); ce.position.set(x,0.58+h/2,zA-0.2-((j%2)*0.12)); g.add(ce); fiamma(g,x,0.58+h,zA-0.2-((j%2)*0.12),0.6); }
 const ciotola=new THREE.Mesh(new THREE.SphereGeometry(0.12,14,8,0,Math.PI*2,Math.PI/2,Math.PI/2),legno); ciotola.position.set(0.5,0.7,zA-0.5); g.add(ciotola);
 for(let j=0;j<8;j++){ const m=new THREE.Mesh(new THREE.SphereGeometry(0.03,6,5),new THREE.MeshStandardMaterial({color:j%2?'#5a0f2a':'#8a1838',roughness:0.4})); m.position.set(0.5+(R()-0.5)*0.12,0.72,zA-0.5+(R()-0.5)*0.12); g.add(m); }
 for(let j=0;j<3;j++){ const os=new THREE.Mesh(new THREE.CylinderGeometry(0.015,0.015,0.25,6),ossoMat); os.rotation.z=Math.PI/2; os.rotation.y=j*0.6; os.position.set(-0.5,0.6+j*0.02,zA-0.45); g.add(os); }
 statue(k,g,zA);
 const st=new THREE.Mesh(new THREE.BoxGeometry(0.9,1.4,0.12),[pietraMat,pietraMat,pietraMat,pietraMat,steleMat,pietraMat]); st.position.set(1.25,0.7,zA-0.9); st.rotation.y=-0.35; st.castShadow=true; g.add(st);
 const st2=st.clone(); st2.position.x=-1.25; st2.rotation.y=0.35; g.add(st2);
 if(TEMI[k].stile==='caverna'){
 // totem ai lati dell'altare: teste di gatto impilate, con le fasce dipinte
 for(const sx of [-1,1]){ const tot=new THREE.Group(); tot.position.set(sx*2.0,0,zA-0.6);
  for(let j=0;j<3;j++){ const c=new THREE.Mesh(new THREE.CylinderGeometry(0.22-j*0.02,0.24-j*0.02,0.5,10),legno); c.position.y=0.25+j*0.5; tot.add(c);
   const fa=new THREE.Mesh(new THREE.CylinderGeometry(0.235-j*0.02,0.235-j*0.02,0.06,10),new THREE.MeshStandardMaterial({color:j%2?T.accento:'#a4521f'})); fa.position.y=0.06+j*0.5; tot.add(fa);
   for(const ox of [-0.09,0.09]){ const oc=new THREE.Mesh(new THREE.SphereGeometry(0.035,8,6),new THREE.MeshBasicMaterial({color:'#ffd27a'})); oc.position.set(ox,0.32+j*0.5,0.2-j*0.02); tot.add(oc); } }
  for(const ox of [-0.12,0.12]){ const o=new THREE.Mesh(new THREE.ConeGeometry(0.08,0.22,4),legno); o.position.set(ox,1.6,0); tot.add(o); }
  tot.rotation.y=-sx*0.4; g.add(tot); }
 } else for(const sx of [-1,1]) colonna(g,sx*2.0,zA-0.6,TEMI[k].stile);
 // il focolare al centro, dentro un cerchio di pietre, e i menhir incisi tutt'intorno
 for(let j=0;j<10;j++){ const a=j/10*6.283, p=new THREE.Mesh(ruvido(new THREE.DodecahedronGeometry(0.12,0),0.1,4),pietraMat); p.position.set(Math.cos(a)*0.45,0.08,Math.sin(a)*0.45+0.4); g.add(p); }
 for(let j=0;j<3;j++){ const lg=new THREE.Mesh(new THREE.CylinderGeometry(0.04,0.05,0.6,6),legno); lg.rotation.z=Math.PI/2; lg.rotation.y=j*2.1; lg.position.set(0,0.06,0.4); g.add(lg); }
 fiamma(g,0,0.05,0.4,2.6); fiamma(g,0.1,0.05,0.35,1.8); fiamma(g,-0.1,0.05,0.45,1.9);
 for(let j=0;j<6;j++){ const a=Math.PI*0.5+0.75+j*((Math.PI*2-1.5-0.9)/5); colonna(g,Math.cos(a)*Rr*0.78,Math.sin(a)*Rr*0.78,TEMI[k].stile==='caverna'?'caverna':TEMI[k].stile); }
 // torce alle pareti
 for(const a of [Math.PI*0.5+1.0,Math.PI*0.5-1.0,Math.PI*1.5+0.9,Math.PI*1.5-0.9]){ const x=Math.cos(a)*(Rr-0.12), z=Math.sin(a)*(Rr-0.12); const t=new THREE.Mesh(new THREE.CylinderGeometry(0.03,0.04,0.5,6),legno); t.position.set(x,1.5,z); t.rotation.set(Math.sin(a)*0.4,0,-Math.cos(a)*0.4); g.add(t); fiamma(g,x-Math.cos(a)*0.1,1.75,z-Math.sin(a)*0.1,1.3); }
 // stendardi del clan tra le torce
 const sm=new THREE.MeshStandardMaterial({map:stendardo(T.tessuto,T.accento),side:THREE.DoubleSide,roughness:0.9,transparent:true});
 for(const a of [Math.PI,0,Math.PI*1.5-0.35,Math.PI*1.5+0.35]){ const b=new THREE.Mesh(new THREE.PlaneGeometry(0.6,1.2),sm); b.position.set(Math.cos(a)*(Rr-0.08),1.7,Math.sin(a)*(Rr-0.08)); b.lookAt(0,1.7,0); g.add(b); }
 // amuleti appesi alla volta: fili con piume, ossa e conchiglie che girano piano
 for(let j=0;j<9;j++){ const a=R()*6.283, r=0.8+R()*(Rr-1.6); const mo=new THREE.Group(); mo.position.set(Math.cos(a)*r,salaH+0.3,Math.sin(a)*r);
  const filo=new THREE.Mesh(new THREE.CylinderGeometry(0.004,0.004,1.1,3),new THREE.MeshBasicMaterial({color:'#2a1a10'})); filo.position.y=-0.55; mo.add(filo);
  for(let q=0;q<3;q++){ const it=q===1?new THREE.Mesh(new THREE.CylinderGeometry(0.012,0.012,0.12,5),ossoMat):new THREE.Mesh(new THREE.PlaneGeometry(0.05,0.2),new THREE.MeshStandardMaterial({color:['#e8e2d0','#6a4a2a','#2a2a30','#c06030'][(j+q)%4],side:THREE.DoubleSide})); it.position.set((q-1)*0.07,-1.0-q*0.12,0); it.rotation.z=(q-1)*0.3; mo.add(it); }
  g.add(mo); MOBILI.push(mo); }
 // giacigli di muschio lungo le pareti
 for(let j=0;j<6;j++){ const a=Math.PI*0.5+0.9+j*0.5+(j>2?1.6:0); const m=new THREE.Mesh(new THREE.TorusGeometry(0.35,0.13,6,16),muschioMat); m.rotation.x=-Math.PI/2; m.scale.z=0.55; m.position.set(Math.cos(a)*Rr*0.62,0.04,Math.sin(a)*Rr*0.62); m.receiveShadow=true; g.add(m); }
 // ciò che è proprio di ogni tana
 if(k==='tanaGuaritore'){ for(let j=0;j<10;j++){ const a=Math.PI+0.4+j*0.25; const fa=new THREE.Mesh(new THREE.ConeGeometry(0.08,0.35,6),new THREE.MeshStandardMaterial({color:['#6f8f45','#9a7a3a','#7a5a8a'][j%3]})); fa.rotation.x=Math.PI; fa.position.set(Math.cos(a)*(Rr-0.3),2.2,Math.sin(a)*(Rr-0.3)); g.add(fa); }
  const pozza=new THREE.Mesh(new THREE.CircleGeometry(0.45,24),new THREE.MeshStandardMaterial({color:'#2a6a8a',metalness:0.3,roughness:0.1})); pozza.rotation.x=-Math.PI/2; pozza.position.set(1.8,0.012,0.9); g.add(pozza);
  for(let j=0;j<5;j++){ const c=new THREE.Mesh(new THREE.SphereGeometry(0.09,10,6,0,Math.PI*2,Math.PI/2,Math.PI/2),legno); c.position.set(-1.6+j*0.2,0.09,1.4); g.add(c); } }
 if(k==='tanaGuerrieri'){ for(let j=0;j<5;j++){ const a=Math.PI+0.3+j*0.3; for(const s of [-1,1]){ const b=new THREE.Mesh(new THREE.CylinderGeometry(0.02,0.02,0.7,5),legno); b.position.set(Math.cos(a)*(Rr-0.1),1.0,Math.sin(a)*(Rr-0.1)); b.rotation.set(0,-a,s*0.6); g.add(b); }
   const art=new THREE.Mesh(new THREE.ConeGeometry(0.03,0.14,5),ossoMat); art.position.set(Math.cos(a)*(Rr-0.12),1.35,Math.sin(a)*(Rr-0.12)); art.rotation.z=Math.PI; g.add(art); } }
 if(k==='tanaApprendisti'){ for(let j=0;j<3;j++){ const c=new THREE.Mesh(new THREE.CylinderGeometry(0.2,0.24,0.4,10),legno); c.position.set(-2.2+j*0.5,0.2,1.2+j*0.3); g.add(c); }
  const palla=new THREE.Mesh(new THREE.SphereGeometry(0.12,10,8),muschioMat); palla.position.set(1.6,0.12,1.3); g.add(palla); }
 if(k==='nursery'){ for(let j=0;j<24;j++){ const a=R()*6.283, r=R()*(Rr-0.6); const fi=new THREE.Mesh(new THREE.SphereGeometry(0.04,6,5),new THREE.MeshStandardMaterial({color:['#ffd0e0','#fff2a0','#d0c0ff'][j%3]})); fi.position.set(Math.cos(a)*r,0.04,Math.sin(a)*r); g.add(fi); } }
 decorStile(k,g,Rr,zA);
 // pulviscolo nella luce
 const n=220, pos=new Float32Array(n*3); for(let j=0;j<n;j++){ const a=R()*6.283, r=R()*Rr*0.85; pos[j*3]=Math.cos(a)*r; pos[j*3+1]=R()*salaH; pos[j*3+2]=Math.sin(a)*r; }
 const pg=new THREE.BufferGeometry(); pg.setAttribute('position',new THREE.BufferAttribute(pos,3));
 const polvere=new THREE.Points(pg,new THREE.PointsMaterial({color:'#ffd9a0',size:0.025,transparent:true,opacity:0.7,depthWrite:false})); g.add(polvere);
 g.visible=false;
 SALE[k]={g,Rr,zA,polvere,O:g.position};
}
TANE.forEach((k,i)=>sala(k,i));
// le tane dei clan nemici: grotte di un altro colore (richiesta del 12 novembre 2026)
if(window.taneNemiche) window.taneNemiche().forEach((k,i)=>{ const cl=L[k].clan;
 TEMI[k]=cl==='nebbia'?{stile:'caverna',volta:'#24324a',tessuto:'#3a5a8a',accento:'#cfe6ff',tinta:'#9ab8e8',luce:'#8ab8ff'}:{stile:'caverna',volta:'#4a2418',tessuto:'#a8481c',accento:'#ffc57e',tinta:'#e89a7a',luce:'#ff7a3a'};
 sala(k,4+i); });
{ // la Roccia Alta delle proclamazioni: gradini scolpiti, bracieri, stendardi
 const g=new THREE.Group(), x0=L.roccia.x*K, z0=L.roccia.y*K, y0=quotaPx(L.roccia.x,L.roccia.y); g.position.set(x0,y0,z0); scene.add(g);
 const scal=new THREE.Group(); scal.position.copy(g.position); scene.add(scal); SINGOLI.push({o:scal,x:x0,z:z0,r:1.0,roccia:true}); // gli scalini fanno parte della roccia: diventano trasparenti con lei
 for(let j=0;j<5;j++){ const st=new THREE.Mesh(ruvido(new THREE.BoxGeometry(0.7-j*0.06,0.36,0.34),0.05,3),pietraMat); st.position.set(0.15,0.18+j*0.36,1.25-j*0.2); st.castShadow=st.receiveShadow=true; scal.add(st); }
 for(const sx of [-1,1]){ const b=new THREE.Group(); b.position.set(sx*1.35,0,1.25);
  const pie=new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.08,0.9,8),legno); pie.position.y=0.45; b.add(pie);
  const cop=new THREE.Mesh(new THREE.CylinderGeometry(0.22,0.12,0.18,12,1,true),new THREE.MeshStandardMaterial({color:'#4a3a2a',metalness:0.5,roughness:0.6,side:THREE.DoubleSide})); cop.position.y=0.98; b.add(cop);
  fiamma(b,0,0.95,0,2.2); fiamma(b,0.06,0.95,0.04,1.5); g.add(b);
  const lu=new THREE.PointLight('#ffa040',2.5,5,1.4); lu.position.set(sx*1.35,1.3,1.25); g.add(lu);
  window.SOLIDI.push({x:L.roccia.x+sx*1.35/K,y:L.roccia.y+1.25/K,r:9},{x:L.roccia.x+sx*1.9/K,y:L.roccia.y+0.2/K,r:5}); // braciere e asta sono solidi
  const asta=new THREE.Mesh(new THREE.CylinderGeometry(0.03,0.03,2.6,6),legno); asta.position.set(sx*1.9,1.3,0.2); g.add(asta);
  const sm=new THREE.MeshStandardMaterial({map:stendardo('#3f6a2a','#e8d070'),side:THREE.DoubleSide,roughness:0.9,transparent:true});
  const ban=new THREE.Mesh(new THREE.PlaneGeometry(0.55,1.1),sm); ban.position.set(sx*1.9+0.3*sx*0,2.0,0.25); g.add(ban); MOBILI.push(ban); }
 // niente pietre erette intorno alla roccia (l'autore, 12 novembre 2026)
}
// la sala del gatto: posizione nella sala di un punto della tana (in pixel della v1)
function inSala(x,y){ const k=G&&G.dentro, s=k&&SALE[k]; if(!s) return null; const d=L[k]; if(Math.hypot(x-d.x,y-d.y)>d.r*1.05) return null; return [s.O.x+(x-d.x)*SALA_S*K,s.O.z+(y-d.y)*SALA_S*K]; }
let salaVista=null;
const buioSala=new THREE.Color('#120b07');
function aggiornaSala(t){
 const k=G.dentro, s=k&&SALE[k];
 if(k!==salaVista){ for(const kk in SALE) SALE[kk].g.visible=kk===k; salaVista=k; }
 const rito=scena&&(scena.tipo==='rito'||scena.tipo==='cerimonia'), alto=rito?1.9:1;
 FIAMME_SALA.forEach((f,i)=>{ f.scale.set(alto,alto*(0.75+0.4*Math.abs(Math.sin(t*9+i*1.7))),alto); f.rotation.y=t*2+i; });
 if(s&&window.ERBE3D&&ERBE3D.haArmadio(k)){ if(!s.armadio) s.armadio=armadio3(s); s.armadio.userData.vasi.forEach((v,j)=>{ v.visible=ERBE3D.vaso(k,j); }); s.armadio.userData.alone.material.opacity=0.3+0.2*Math.sin(t*2); }
 if(s&&L[k].clan){ if(!s.sacro){ s.sacro=corpoOggetto(L[k].clan==='nebbia'?'idolo':'totem'); s.sacro.scale.setScalar(2.4); s.sacro.position.set(0,0.58,s.zA-0.35); s.g.add(s.sacro); } s.sacro.visible=!(window.altareDerubato&&window.altareDerubato(k)); s.sacro.rotation.y=t*0.8; s.sacro.userData.sp.material.opacity=0.6+0.4*Math.abs(Math.sin(t*2.5)); }
 if(!s){ SALA_LUCI.forEach(l=>l.intensity=0); MOBILI.forEach((m,i)=>{ m.rotation.y=Math.sin(t*0.4+i)*0.3; }); scene.fog.near=ARIA.near; scene.fog.far=ARIA.far; return; }
 sole.intensity=0.05; emi.intensity=0.25; scene.background.copy(buioSala); scene.fog.color.copy(buioSala); scene.fog.near=7; scene.fog.far=16;
 const fl=1+Math.sin(t*11)*0.08+Math.sin(t*17.3)*0.06;
 const lc=TEMI[k].luce||'#ffa040'; SALA_LUCI[0].color.set(lc); SALA_LUCI[1].color.set(lc);
 SALA_LUCI[0].position.set(s.O.x,0.8,s.O.z+0.4); SALA_LUCI[0].intensity=9*fl;            // il focolare
 SALA_LUCI[1].position.set(s.O.x,1.3,s.O.z+s.zA-0.3); SALA_LUCI[1].intensity=6*fl;        // l'altare
 SALA_LUCI[2].position.set(s.O.x,2.4,s.O.z+s.Rr*0.6); SALA_LUCI[2].intensity=3; SALA_LUCI[2].color.set('#ffe0b0'); // la luce della porta
 FIAMME_SALA.forEach((f,i)=>{ f.scale.set(1,0.75+0.4*Math.abs(Math.sin(t*9+i*1.7)),1); f.rotation.y=t*2+i; });
 MOBILI.forEach((m,i)=>{ m.rotation.y=Math.sin(t*0.4+i)*0.8; m.rotation.z=Math.sin(t*0.7+i*2)*0.04; });
 s.polvere.rotation.y=t*0.02; s.polvere.position.y=Math.sin(t*0.3)*0.05;
}

// ---------- gli oggetti da raccogliere: brillano, girano e ondeggiano per farsi notare ----------
const oggetti3=new Map();
const scintilla=(()=>{ const c=document.createElement('canvas'); c.width=c.height=64; const g=c.getContext('2d'), gr=g.createRadialGradient(32,32,1,32,32,30); gr.addColorStop(0,'rgba(255,255,230,1)'); gr.addColorStop(0.4,'rgba(255,230,140,0.5)'); gr.addColorStop(1,'rgba(255,220,120,0)'); g.fillStyle=gr; g.fillRect(0,0,64,64); return new THREE.CanvasTexture(c); })();
function corpoOggetto(tipo){ const g=new THREE.Group(), M=(c,o={})=>new THREE.MeshStandardMaterial({color:c,roughness:0.4,...o});
 const acc=M('#e8eef4',{metalness:0.9,roughness:0.2}), oroM=M('#e0b040',{metalness:0.8,roughness:0.3}), leg=M('#6a4a2a');
 if(tipo==='katana'){ const l=new THREE.Mesh(new THREE.BoxGeometry(0.012,0.32,0.025),acc); l.position.y=0.2; g.add(l); const t=new THREE.Mesh(new THREE.CylinderGeometry(0.03,0.03,0.01,10),oroM); g.add(t); const m=new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.01,0.09,6),M('#2a1010')); m.position.y=-0.05; g.add(m); g.rotation.z=0.5; }
 else if(tipo==='artigli'){ for(let i=0;i<3;i++){ const a=new THREE.Mesh(new THREE.ConeGeometry(0.015,0.12,6),acc); a.position.set((i-1)*0.03,0.06,0); a.rotation.x=0.4; g.add(a); } const b=new THREE.Mesh(new THREE.TorusGeometry(0.045,0.012,6,14),acc); b.rotation.x=Math.PI/2; g.add(b); }
 else if(tipo==='lancia'){ const a=new THREE.Mesh(new THREE.CylinderGeometry(0.008,0.008,0.4,5),leg); a.position.y=0.2; g.add(a); const p=new THREE.Mesh(new THREE.ConeGeometry(0.02,0.08,6),M('#3a2a18')); p.position.y=0.44; g.add(p); g.rotation.z=0.7; }
 else if(tipo==='scudo'){ const s=new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,0.02,16),M('#7a5a32',{roughness:1})); s.rotation.x=Math.PI/2; s.position.y=0.1; g.add(s); const u=new THREE.Mesh(new THREE.SphereGeometry(0.025,8,6),oroM); u.position.set(0,0.1,0.015); g.add(u); }
 else if(tipo==='elmo'){ const e=new THREE.Mesh(new THREE.SphereGeometry(0.07,12,8,0,Math.PI*2,0,Math.PI/2),M('#8a6a3a',{roughness:0.9})); g.add(e); }
 else if(tipo==='piuma'){ const p=new THREE.Mesh(new THREE.PlaneGeometry(0.05,0.22),M('#14141c',{side:THREE.DoubleSide,metalness:0.4})); p.position.y=0.12; p.rotation.z=0.3; g.add(p); }
 else if(tipo==='conchiglia'){ const c=new THREE.Mesh(new THREE.SphereGeometry(0.05,12,8,0,Math.PI*2,0,Math.PI/2),M('#f4d8c8')); c.scale.set(1,0.6,1.3); g.add(c); }
 else if(tipo==='cristallo'){ const c=new THREE.Mesh(new THREE.OctahedronGeometry(0.06),new THREE.MeshStandardMaterial({color:'#9af0ff',emissive:'#4ac0ff',emissiveIntensity:0.8,roughness:0.1,transparent:true,opacity:0.85})); c.scale.y=1.6; c.position.y=0.1; g.add(c); }
 else if(tipo==='osso'){ const o=new THREE.Mesh(new THREE.CylinderGeometry(0.012,0.012,0.16,6),M('#efe6d0')); o.rotation.z=Math.PI/2; o.position.y=0.03; g.add(o); }
 else if(tipo==='pietraforata'){ const t=new THREE.Mesh(new THREE.TorusGeometry(0.04,0.025,8,14),M('#8a8478',{roughness:1})); t.position.y=0.06; g.add(t); }
 else if(tipo==='idolo'){ const b=new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.07,0.16,8),M('#9aa4b0')); b.position.y=0.08; g.add(b); const t=new THREE.Mesh(new THREE.SphereGeometry(0.05,10,8),M('#9aa4b0')); t.position.y=0.2; g.add(t); for(const sx of [-1,1]){ const o=new THREE.Mesh(new THREE.ConeGeometry(0.02,0.05,4),M('#9aa4b0')); o.position.set(sx*0.03,0.26,0); g.add(o); } }
 else if(tipo==='totem'){ for(let i=0;i<3;i++){ const c=new THREE.Mesh(new THREE.CylinderGeometry(0.04,0.045,0.08,8),M(i%2?'#c87a3a':'#6a4a2a')); c.position.y=0.04+i*0.08; g.add(c); } }
 // --- oggetti esoterici e primitivi (js/storie.js, categoria) ---
 else if(tipo==='cono'){ const c=new THREE.Mesh(new THREE.ConeGeometry(0.045,0.2,10),M('#c9a070',{roughness:1})); c.rotation.z=Math.PI/2; c.position.y=0.05; g.add(c); for(let i=0;i<3;i++){ const a=new THREE.Mesh(new THREE.TorusGeometry(0.036-i*0.009,0.004,5,12),M('#5a3a1a')); a.rotation.y=Math.PI/2; a.position.set(0.04-i*0.045,0.05,0); g.add(a); } }
 else if(tipo==='palo'){ ['#b5542e','#e0b040','#2f7a6a','#b5542e'].forEach((c,i)=>{ const b=new THREE.Mesh(new THREE.CylinderGeometry(0.032,0.036,0.07,8),M(c,{roughness:0.9})); b.position.y=0.035+i*0.07; g.add(b); }); const ali=new THREE.Mesh(new THREE.BoxGeometry(0.2,0.03,0.012),M('#e0b040',{roughness:0.9})); ali.position.y=0.21; g.add(ali); }
 else if(tipo==='venere'){ const o=M('#c98a5a',{roughness:1}); [[0.045,0.05],[0.058,0.11],[0.03,0.19]].forEach(([r,y])=>{ const m=new THREE.Mesh(new THREE.SphereGeometry(r,10,8),o); m.position.y=y; g.add(m); }); }
 else if(tipo==='scarabeo'){ const b=new THREE.Mesh(new THREE.SphereGeometry(0.06,12,8),M('#1f9a7a',{metalness:0.5,roughness:0.25})); b.scale.set(1,0.45,1.35); b.position.y=0.04; g.add(b); const t=new THREE.Mesh(new THREE.SphereGeometry(0.028,8,6),M('#17705a',{metalness:0.5})); t.position.set(0,0.035,0.085); g.add(t); }
 else if(tipo==='ankh'){ const a=new THREE.Mesh(new THREE.TorusGeometry(0.04,0.012,8,16),oroM); a.position.y=0.2; a.scale.y=1.3; g.add(a); const v=new THREE.Mesh(new THREE.BoxGeometry(0.02,0.15,0.016),oroM); v.position.y=0.075; g.add(v); const h=new THREE.Mesh(new THREE.BoxGeometry(0.11,0.02,0.016),oroM); h.position.y=0.135; g.add(h); }
 else if(tipo==='flauto'){ const f=new THREE.Mesh(new THREE.CylinderGeometry(0.012,0.014,0.22,8),M('#efe6d0')); f.rotation.z=Math.PI/2.4; f.position.y=0.08; g.add(f); for(let i=0;i<4;i++){ const b=new THREE.Mesh(new THREE.SphereGeometry(0.006,6,5),M('#3a2a18')); b.position.set(-0.05+i*0.032,0.058+i*0.014,0.012); g.add(b); } }
 else if(tipo==='ammonite'){ const p=M('#5a5560',{roughness:0.8}); [[0.06,0.022],[0.034,0.016],[0.014,0.012]].forEach(([r,t])=>{ const a=new THREE.Mesh(new THREE.TorusGeometry(r,t,8,18),p); a.position.y=0.09; g.add(a); }); }
 else if(tipo==='oracolo'){ const b=new THREE.Mesh(new THREE.CylinderGeometry(0.07,0.05,0.012,7),M('#efe6d0',{roughness:0.9})); b.rotation.x=Math.PI/2.6; b.position.y=0.09; g.add(b); for(let i=0;i<3;i++){ const c=new THREE.Mesh(new THREE.BoxGeometry(0.003,0.06,0.004),M('#3a2a18')); c.position.set(-0.03+i*0.03,0.095,0.012); c.rotation.z=(i-1)*0.5; g.add(c); } }
 else if(tipo==='specchio'){ const d=new THREE.Mesh(new THREE.CylinderGeometry(0.075,0.075,0.012,24),M('#0a0a10',{metalness:0.9,roughness:0.05})); d.rotation.x=Math.PI/2.4; d.position.y=0.11; g.add(d); const c=new THREE.Mesh(new THREE.TorusGeometry(0.078,0.008,6,24),oroM); c.rotation.x=Math.PI/2.4-Math.PI/2; c.position.y=0.11; g.add(c); }
 else if(tipo==='rombo'){ const t=new THREE.Mesh(new THREE.BoxGeometry(0.05,0.2,0.01),M('#8a5a32',{roughness:0.9})); t.position.y=0.13; t.rotation.z=0.3; g.add(t); const c=new THREE.Mesh(new THREE.CylinderGeometry(0.003,0.003,0.16,4),M('#d8c8a0')); c.position.set(0.045,0.26,0); c.rotation.z=-0.9; g.add(c); }
 else if(tipo==='bulla'){ const b=new THREE.Mesh(new THREE.SphereGeometry(0.06,12,10),M('#b8875a',{roughness:1})); b.position.y=0.07; g.add(b); for(let i=0;i<5;i++){ const k=new THREE.Mesh(new THREE.ConeGeometry(0.008,0.014,4),M('#6a4526')); const a=i*1.26; k.position.set(Math.cos(a)*0.055,0.07+Math.sin(a*1.7)*0.02,Math.sin(a)*0.055); g.add(k); } }
 else if(tipo==='tamburo'){ const t=new THREE.Mesh(new THREE.CylinderGeometry(0.085,0.085,0.04,18),M('#7a4a26',{roughness:0.9})); t.rotation.x=Math.PI/2.5; t.position.y=0.11; g.add(t); const p=new THREE.Mesh(new THREE.CylinderGeometry(0.08,0.08,0.004,18),M('#f0e2c0',{roughness:1})); p.rotation.x=Math.PI/2.5; p.position.set(0,0.118,0.02); g.add(p); const s=new THREE.Mesh(new THREE.TorusGeometry(0.03,0.004,5,12),M('#a03020')); s.rotation.x=Math.PI/2.5-Math.PI/2; s.position.set(0,0.12,0.024); g.add(s); }
 else if(tipo==='runa'){ const p=new THREE.Mesh(new THREE.BoxGeometry(0.1,0.15,0.03),M('#7a7870',{roughness:1})); p.position.y=0.09; p.rotation.z=0.08; g.add(p); const e=new THREE.MeshStandardMaterial({color:'#bfe8ff',emissive:'#6ac0ff',emissiveIntensity:1}); const v=new THREE.Mesh(new THREE.BoxGeometry(0.008,0.09,0.004),e); v.position.set(-0.01,0.09,0.017); g.add(v); for(const y of [0.115,0.09]){ const r=new THREE.Mesh(new THREE.BoxGeometry(0.035,0.007,0.004),e); r.position.set(0.008,y,0.017); r.rotation.z=0.5; g.add(r); } }
 else if(tipo==='mandragora'){ const r=M('#9a6a3a',{roughness:1}); const c=new THREE.Mesh(new THREE.SphereGeometry(0.035,8,8),r); c.scale.y=1.5; c.position.y=0.08; g.add(c); for(const sx of [-1,1]){ const z=new THREE.Mesh(new THREE.ConeGeometry(0.012,0.07,5),r); z.rotation.z=Math.PI+sx*0.4; z.position.set(sx*0.02,0.025,0); g.add(z); const o=new THREE.Mesh(new THREE.ConeGeometry(0.012,0.03,4),r); o.position.set(sx*0.02,0.14,0); g.add(o); const f=new THREE.Mesh(new THREE.SphereGeometry(0.025,6,5),M('#4a8a3a',{roughness:1})); f.scale.set(1.6,0.25,0.8); f.position.set(sx*0.04,0.17,0); f.rotation.z=sx*0.5; g.add(f); } }
 else { const b=new THREE.Mesh(new THREE.CylinderGeometry(0.03,0.06,0.08,12,1,true),M('#c8a040',{metalness:0.8,roughness:0.3,side:THREE.DoubleSide})); b.position.y=0.06; g.add(b); }
 const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:scintilla,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending})); sp.scale.setScalar(0.45); sp.position.y=0.12; g.add(sp); g.userData.sp=sp;
 return g; }
// ---------- il grande gatto di pietra (js/storie.js): 24 massi che compaiono uno alla volta e formano un gatto seduto, alto più di tre metri ----------
let colosso3=null;
// l'armadio delle erbe officinali, a destra dell'altare nella tana del guaritore (anche in quella dei vicini): un vaso per specie
function armadio3(s){ const g=new THREE.Group(), cotto=new THREE.MeshStandardMaterial({color:'#b5693c',roughness:0.9}), vasi=[]; g.position.set(s.Rr*0.5,0,s.zA+0.45);
 const asse=(w,h,d,x,y,z)=>{ const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),legno); m.position.set(x,y,z); m.castShadow=true; g.add(m); };
 asse(1.1,1.62,0.05,0,0.81,-0.2); asse(0.06,1.62,0.44,-0.55,0.81,0); asse(0.06,1.62,0.44,0.55,0.81,0); asse(1.22,0.07,0.5,0,1.65,0);
 for(let r=0;r<4;r++) asse(1.08,0.04,0.42,0,0.1+r*0.42,0);
 (window.PIANTE||[]).forEach((P,j)=>{ const riga=Math.floor(j/5), col=j%5, v=new THREE.Group(); v.position.set(-0.4+col*0.2+(riga===2?0.1:0),0.12+riga*0.42,0.06);
  const c=new THREE.Mesh(new THREE.CylinderGeometry(0.06,0.05,0.16,10),cotto); c.position.y=0.08; v.add(c);
  const f=new THREE.Mesh(new THREE.SphereGeometry(0.055,8,6),new THREE.MeshStandardMaterial({color:P.c,emissive:P.c,emissiveIntensity:0.5})); f.position.y=0.2; f.scale.y=0.8; v.add(f); g.add(v); vasi.push(v); });
 for(let j=0;j<5;j++){ const m=new THREE.Mesh(new THREE.ConeGeometry(0.06,0.3,6),new THREE.MeshStandardMaterial({color:['#6f8f45','#9a8a4a','#7a6a9a'][j%3],roughness:1})); m.rotation.x=Math.PI; m.position.set(-0.44+j*0.22,1.45,0.2); g.add(m); }
 const al=new THREE.Sprite(new THREE.SpriteMaterial({map:sfumato('rgba(190,255,190,0.9)','rgba(120,255,160,0)'),transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,opacity:0.4})); al.scale.setScalar(2.6); al.position.set(0,0.9,0.25); g.add(al);
 g.userData={vasi,alone:al}; s.g.add(g); return g; }
// il fuoco del sacrificio in cima alla Roccia Alta (G.fuocoSacro, js/erbe.js)
let fuocoSacro3=null;
function aggiornaFuocoSacro(t){ const F=G.fuocoSacro; if(!F||G.t>F.fino||G.dentro){ if(fuocoSacro3) fuocoSacro3.g.visible=false; return; }
 if(!fuocoSacro3){ const g=new THREE.Group(), lingue=[]; g.position.set(L.roccia.x*K,quotaPx(L.roccia.x,L.roccia.y)+1.88,L.roccia.y*K-0.3); scene.add(g);
  for(let j=0;j<3;j++){ const c=new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,0.8,6),legno); c.rotation.set(Math.PI/2,j*2.1,0); c.position.y=0.06; g.add(c); }
  for(let j=0;j<8;j++){ const a=j*0.785, r=j?0.2:0, m=new THREE.Mesh(new THREE.ConeGeometry(j?0.26:0.5,j?1.7:3.2,8),new THREE.MeshBasicMaterial({color:j?'#ff5a14':'#ff8a1e',transparent:true,opacity:0.92,depthWrite:false,fog:false})); m.position.set(Math.cos(a)*r*1.6,j?0.85:1.6,Math.sin(a)*r*1.6); m.renderOrder=2; g.add(m); lingue.push(m); }
  const cuore=new THREE.Mesh(new THREE.ConeGeometry(0.26,2.0,8),new THREE.MeshBasicMaterial({color:'#ffe27a',fog:false})); cuore.position.y=1.0; g.add(cuore); lingue.push(cuore);
  const al=new THREE.Sprite(new THREE.SpriteMaterial({map:sfumato('rgba(255,190,90,1)','rgba(255,120,30,0)'),transparent:true,depthWrite:false,fog:false})); al.scale.setScalar(6.5); al.position.y=1.5; al.renderOrder=1; g.add(al);
  const luce=new THREE.PointLight('#ff9a3c',0,22,1.2); luce.position.y=1.4; g.add(luce);
  const fav=Array.from({length:10},(_,j)=>{ const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:sfumato('rgba(255,230,150,1)','rgba(255,160,40,0)'),transparent:true,depthWrite:false,blending:THREE.AdditiveBlending})); sp.scale.setScalar(0.22); g.add(sp); return sp; });
  fuocoSacro3={g,lingue,al,luce,fav}; }
 const o=fuocoSacro3, forza=Math.max(0,Math.min(1,(G.t-F.da)/2.5,(F.fino-G.t)/6)); o.g.visible=true; o.g.scale.setScalar(0.25+0.75*forza);
 o.lingue.forEach((m,j)=>{ m.scale.set(1,0.8+0.35*Math.abs(Math.sin(t*7+j*1.9)),1); m.rotation.y=t*1.5+j; });
 o.al.material.opacity=forza*(0.4+0.12*Math.sin(t*9)); o.luce.intensity=forza*(9+2.5*Math.sin(t*11));
 o.fav.forEach((sp,j)=>{ const f=((t*0.35+j*0.1)%1); sp.position.set(Math.sin(j*2.3+t)*0.4*(1+f),1.2+f*4.5,Math.cos(j*1.7+t)*0.4*(1+f)); sp.material.opacity=forza*(1-f); }); }
function aggiornaColosso(t){ const C=G.colosso; if(!C){ if(colosso3) colosso3.g.visible=false; return; }
 if(!colosso3||colosso3.C!==C){ if(colosso3) scene.remove(colosso3.g); const g=new THREE.Group(), massi=[], pm=new THREE.MeshStandardMaterial({color:'#b08a5a',roughness:1,flatShading:true}), pm2=new THREE.MeshStandardMaterial({color:'#c9a878',roughness:1,flatShading:true}); // arenaria color ocra: si distingue dai massi grigi del bosco
  if(window.SOLIDI) window.SOLIDI=window.SOLIDI.filter(q=>Math.hypot(q.x-C.x,q.y-C.y)>230); // nella radura i tronchi spariti non fermano più il gatto
  const om=new THREE.MeshStandardMaterial({color:'#ffd27a',emissive:'#ff9a2a',emissiveIntensity:1.6});
  const D=[]; for(let i=0;i<6;i++){ const a=i/6*6.283; D.push([Math.cos(a)*0.78,0.42,Math.sin(a)*0.78,0.62]); } // il cerchio di base
  for(let i=0;i<4;i++){ const a=i/4*6.283+0.5; D.push([Math.cos(a)*0.52,1.05,Math.sin(a)*0.52,0.6]); } // la schiena
  for(let i=0;i<3;i++){ const a=i/3*6.283+0.2; D.push([Math.cos(a)*0.3,1.68,Math.sin(a)*0.3+0.08,0.56]); } // il petto
  D.push([0,2.18,0.12,0.5],[0,2.82,0.2,0.84]); // il collo e la testa
  D.push([-0.44,3.66,0.16,0.36,'o'],[0.44,3.66,0.16,0.36,'o']); // le orecchie, grandi e a punta: sono loro a dire da lontano
  D.push([-0.4,0.26,1.0,0.36],[0.4,0.26,1.0,0.36]); // le zampe davanti
  D.push([0.66,0.3,-0.95,0.34],[1.12,0.5,-0.98,0.28]); // la coda
  D.push([0,2.62,0.92,0.3]); // il muso
  D.push([-0.3,3.0,0.92,0.12,'e'],[0.3,3.0,0.92,0.12,'e']); // gli occhi di fuoco, per ultimi
  D.forEach(([x,y,z,sc,k],i)=>{ const geo=k==='o'?new THREE.ConeGeometry(1,2.2,5):k==='e'?new THREE.SphereGeometry(1,10,8):new THREE.DodecahedronGeometry(1,1), m=new THREE.Mesh(geo,k==='e'?om:(i%2?pm:pm2));
   m.position.set(x,y,z); m.scale.set(sc*(0.92+R()*0.16),sc*(0.86+R()*0.16),sc*(0.92+R()*0.16)); if(!k) m.rotation.set(R()*3,R()*3,R()*3); m.castShadow=m.receiveShadow=true; m.visible=false; m.userData.p0=m.position.clone(); g.add(m); massi.push(m); });
  const luce=new THREE.PointLight('#ffb060',0,9,2); luce.position.set(0,3.0,1.2); g.add(luce);
  g.scale.setScalar(1.75); g.position.set(C.x*K,quotaPx(C.x,C.y)-0.05,C.y*K); g.rotation.y=Math.atan2((FX0+FX1)/2-C.x,0.001)>0?Math.PI/2:-Math.PI/2; scene.add(g); colosso3={g,massi,luce,C,n:-1,pm,pm2,om}; } // alto più di cinque metri: svetta sopra gli alberi
 const o=colosso3; o.g.visible=!G.dentro; const TOT=typeof COLOSSO_N!=='undefined'?COLOSSO_N:15, n=Math.min(o.massi.length,Math.ceil(o.massi.length*Math.min(TOT,C.massi||0)/TOT)); if(n!==o.n){ o.massi.forEach((m,i)=>{ m.visible=i<n; }); o.n=n; } // i pezzi sono ventiquattro, i massi da portare quindici: ogni masso posato ne scopre uno o due
 o.luce.intensity=n>=o.massi.length?2.2+0.6*Math.sin(t*5):0;
 colossoVivo(o,t); }
// il grande gatto si anima alla festa dei tre clan (G.colosso.vivo={fase,t0}, fasi dettate dal racconto in js/storie.js; richiesta del 13 novembre 2026
//). Fasi: 1 trema, 2 gira la testa, 3 alza la zampa, 4 lo spirito sale, 5 torna immobile.
const TESTA=[13,14,15,16,21,22,23], CODA=[19,20], ZAMPA=17;
function colossoVivo(o,t){ const V=G.colosso.vivo, M=o.massi; if(!V||!V.fase){ if(o.anim){ M.forEach(m=>m.position.copy(m.userData.p0)); o.pm.emissiveIntensity=o.pm2.emissiveIntensity=0; if(o.spirito) o.spirito.visible=false; o.anim=false; } return; }
 o.anim=true; const e=Math.max(0,G.t-V.t0), f=V.fase, liscio=x=>x<=0?0:x>=1?1:x*x*(3-2*x);
 const testa=f===2||f===3||f===4?liscio(e/3.5)*(f===2?1:1):f===5?1-liscio(e/2.5):0, ang=0.75*(V.verso||1)*(f>=3&&f<=4?1:testa), zampa=f===3?liscio(e/2):f===4?1:f===5?1-liscio(e/2):0;
 const trema=f===1?0.05*Math.min(1,e):f===5&&e<1?0.02:0, oro=f>=2&&f<=4?Math.min(1,e/2+(f>2?1:0)):f===5?Math.max(0,1-e/3):0;
 M.forEach((m,i)=>{ const q=m.userData.p0; let x=q.x, y=q.y, z=q.z;
  if(TESTA.includes(i)){ const px=0,pz=0.1, c=Math.cos(ang), sn=Math.sin(ang), dx=x-px, dz=z-pz; x=px+dx*c+dz*sn; z=pz-dx*sn+dz*c; y+=0.08*Math.sin(t*1.3)*(testa>0?1:0); }
  if(CODA.includes(i)&&f>=2&&f<=4){ const px=0.4,pz=-0.9, a=0.45*Math.sin(t*2.2), c=Math.cos(a), sn=Math.sin(a), dx=x-px, dz=z-pz; x=px+dx*c+dz*sn; z=pz-dx*sn+dz*c; }
  if(i===ZAMPA){ y+=1.3*zampa; z+=0.55*zampa; }
  if(trema){ x+=Math.sin(t*41+i*1.7)*trema; y+=Math.sin(t*37+i)*trema*0.6; z+=Math.cos(t*43+i)*trema; }
  m.position.set(x,y,z); });
 o.pm.emissive.set('#ffb347'); o.pm2.emissive.set('#ffc860'); o.pm.emissiveIntensity=o.pm2.emissiveIntensity=0.55*oro*(0.8+0.2*Math.sin(t*3)); o.om.emissiveIntensity=1.6+2.4*Math.min(1,oro+(f===1?e/4:0));
 o.luce.intensity=Math.max(o.luce.intensity,4+5*oro);
 if(!o.spirito){ const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:sfumato('rgba(255,236,170,1)','rgba(255,190,80,0)'),transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,fog:false})); o.g.add(sp); o.spirito=sp; }
 const sp=o.spirito; sp.visible=f===4||(f===5&&e<1.5); if(sp.visible){ const k=f===4?Math.min(1,e/6):1; sp.position.set(0,3.2+k*14,0.3); sp.scale.setScalar(2.2+2*Math.sin(Math.min(1,k)*Math.PI)); sp.material.opacity=f===4?Math.min(1,e*1.5)*(1-k*0.6):Math.max(0,1-e/1.5); } }
function aggiornaOggetti3(t){ const lista=G.oggetti||[], viste=new Set(lista);
 for(const [o,m] of oggetti3){ if(!viste.has(o)){ scene.remove(m); oggetti3.delete(o); } }
 for(const o of lista){ const qui=G.dentro?o.tana===G.dentro:!o.tana; let m=oggetti3.get(o); // gli oggetti di una tana si vedono soltanto da dentro quella tana
  if(!qui){ if(m) m.visible=false; continue; }
  if(!m){ m=corpoOggetto(o.tipo); scene.add(m); oggetti3.set(o,m); } m.visible=true;
  if(o.tana){ const q=inSala(o.x,o.y); if(!q){ m.visible=false; continue; } m.position.set(q[0],0.1+Math.sin(t*2+o.id)*0.03,q[1]); m.scale.setScalar(1.6); }
  else { m.position.set(o.x*K,quotaPx(o.x,o.y)+0.08+Math.sin(t*2+o.id)*0.03,o.y*K); m.scale.setScalar(1.25); }
  m.rotation.y=t*1.2+o.id;
  m.userData.sp.material.opacity=0.55+0.45*Math.abs(Math.sin(t*3+o.id)); } }

// ---------- il caduto, alla base della Roccia Alta, su un letto di fiori ----------
let funerale3=null, funeraleChiave=null;
function aggiornaFunerale3(){ const f=G.funerale, ch=f?f.nome+f.da:null;
 if(ch===funeraleChiave){ if(funerale3) funerale3.visible=!G.dentro; return; } funeraleChiave=ch;
 if(funerale3){ scene.remove(funerale3); funerale3=null; } if(!f) return;
 const g=new THREE.Group(); g.position.set(f.x*K,quotaPx(f.x,f.y),f.y*K);
 const letto=new THREE.Mesh(new THREE.CylinderGeometry(0.42,0.46,0.06,20),new THREE.MeshStandardMaterial({color:'#5f8a3a',roughness:1})); letto.position.y=0.03; g.add(letto);
 for(let i=0;i<26;i++){ const a=R()*6.283, r=0.15+R()*0.3; const fi=new THREE.Mesh(new THREE.SphereGeometry(0.03,6,5),new THREE.MeshStandardMaterial({color:['#f4f0f8','#f6d0e0','#fff2a0','#c8b0ff'][i%4]})); fi.position.set(Math.cos(a)*r,0.08,Math.sin(a)*r); g.add(fi); }
 const c=SkeletonUtils.clone(modello), m=mantello(f.colore||'#d08a40'); c.traverse(o=>{ if(o.isMesh){ o.material=m; o.castShadow=true; o.frustumCulled=false; } });
 const os={}; c.traverse(o=>{ if(o.isBone) os[o.name.replace(/_\d+$/,'')]=o; });
 for(const [n,[x,y,z]] of Object.entries({root:[0,0,1.35],neck:[0.3,0,0],tail:[0.2,0.5,0]})){ const b=os[n]; if(b){ eu.set(x,y,z); qq.setFromEuler(eu); b.quaternion.multiply(qq); } }
 for(const n of ['eyeL','eyeR']){ const b=os[n]; if(b) b.scale.set(1,0.25,1); } // occhi chiusi
 c.scale.setScalar(SCALA); c.position.y=0.02; c.rotation.y=Math.PI/2; g.add(c);
 scene.add(g); funerale3=g; }
// ---------- i campi nemici, riconoscibili: la Nebbia azzurra e nebbiosa, le Pietre ocra con gli ometti di pietra ----------
const NEBBIE=[];
{ const vel=(()=>{ const c=document.createElement('canvas'); c.width=c.height=128; const g=c.getContext('2d'), gr=g.createRadialGradient(64,64,4,64,64,62); gr.addColorStop(0,'rgba(235,245,255,0.55)'); gr.addColorStop(1,'rgba(235,245,255,0)'); g.fillStyle=gr; g.fillRect(0,0,128,128); return new THREE.CanvasTexture(c); })();
 for(const cl of ['nebbia','pietre']){ const cm=CLAN[cl].campo, col=CLAN[cl].col, sm=new THREE.MeshStandardMaterial({map:stendardo(cl==='nebbia'?'#2a4a7a':'#9a3a14',col),side:THREE.DoubleSide,roughness:0.9,transparent:true});
  for(let j=0;j<6;j++){ const a=j/6*6.283+0.4, x=cm.x+Math.cos(a)*(cm.r-14), y=cm.y+Math.sin(a)*(cm.r-14), g=new THREE.Group(); g.position.set(x*K,quotaPx(x,y),y*K);
   const asta=new THREE.Mesh(new THREE.CylinderGeometry(0.03,0.03,2.2,6),legno); asta.position.y=1.1; g.add(asta); window.SOLIDI.push({x,y,r:5}); const b=new THREE.Mesh(new THREE.PlaneGeometry(0.5,1.0),sm); b.position.set(0.27,1.6,0); g.add(b); scene.add(g); }
  if(cl==='nebbia'){ for(let j=0;j<10;j++){ const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:vel,transparent:true,depthWrite:false,opacity:0.7})); const a=R()*6.283, r=R()*cm.r; sp.position.set((cm.x+Math.cos(a)*r)*K,0.5,(cm.y+Math.sin(a)*r)*K); sp.scale.set(3.5,1.4,1); scene.add(sp); NEBBIE.push({sp,x0:sp.position.x,z0:sp.position.z,f:R()*6}); }
   for(let j=0;j<14;j++){ const a=R()*6.283, r=cm.r*(0.3+R()*0.6), x=cm.x+Math.cos(a)*r, y=cm.y+Math.sin(a)*r; for(let q=0;q<5;q++){ const c=new THREE.Mesh(new THREE.CylinderGeometry(0.012,0.018,0.9+R()*0.5,4),new THREE.MeshStandardMaterial({color:'#7a8a6a'})); c.position.set(x*K+(R()-0.5)*0.3,0.5,y*K+(R()-0.5)*0.3); c.rotation.z=(R()-0.5)*0.3; scene.add(c); } } }
  else { for(let j=0;j<9;j++){ const a=R()*6.283, r=cm.r*(0.25+R()*0.65), x=cm.x+Math.cos(a)*r, y=cm.y+Math.sin(a)*r, g=new THREE.Group(); g.position.set(x*K,quotaPx(x,y),y*K); let h=0; window.SOLIDI.push({x,y,r:11});
    for(let q=0;q<4+Math.floor(R()*3);q++){ const sz=0.22-q*0.03; const st=new THREE.Mesh(ruvido(new THREE.DodecahedronGeometry(sz,0),0.1,4),new THREE.MeshStandardMaterial({color:q%2?'#b86a3a':'#8a5a3a',roughness:1,flatShading:true})); st.scale.y=0.55; st.position.y=h+sz*0.5; h+=sz*0.9; g.add(st); }
    scene.add(g); } } } }
function aggiornaNebbie(t){ for(const n of NEBBIE){ n.sp.position.x=n.x0+Math.sin(t*0.2+n.f)*1.2; n.sp.position.z=n.z0+Math.cos(t*0.15+n.f)*0.8; n.sp.material.opacity=0.45+0.25*Math.sin(t*0.5+n.f); } }
// ---------- il rito della guarigione: lettiga, erbe, pozioni, fumi (richiesta del 12 novembre 2026) ----------
let kitCura=null; const FUMI=[];
function creaKitCura(){ const g=new THREE.Group(), leg=new THREE.MeshStandardMaterial({color:'#6a4a2a',roughness:1});
 for(const sx of [-1,1]){ const p=new THREE.Mesh(new THREE.CylinderGeometry(0.02,0.02,1.1,6),leg); p.rotation.x=Math.PI/2; p.position.set(sx*0.24,0.05,0); g.add(p); }
 const tela=new THREE.Mesh(new THREE.BoxGeometry(0.46,0.03,0.8),new THREE.MeshStandardMaterial({color:'#7a8a4a',roughness:1})); tela.position.y=0.06; g.add(tela);
 for(let i=0;i<6;i++){ const f=new THREE.Mesh(new THREE.PlaneGeometry(0.12,0.24),new THREE.MeshStandardMaterial({color:'#5f9a42',side:THREE.DoubleSide})); f.rotation.x=-Math.PI/2; f.rotation.z=i; f.position.set((i%2?0.12:-0.12),0.08,-0.32+i*0.13); g.add(f); }
 for(let i=0;i<4;i++){ const a=i/4*6.283+0.4; const m=new THREE.Mesh(new THREE.ConeGeometry(0.05,0.22,6),new THREE.MeshStandardMaterial({color:['#6f8f45','#9ab060','#7a5a8a','#c8a040'][i]})); m.rotation.x=Math.PI; m.position.set(Math.cos(a)*0.5,0.1,Math.sin(a)*0.55); g.add(m); }
 for(let i=0;i<3;i++){ const a=i/3*6.283+1.2, x=Math.cos(a)*0.42, z=Math.sin(a)*0.5; const b=new THREE.Mesh(new THREE.SphereGeometry(0.07,12,8,0,Math.PI*2,Math.PI/2,Math.PI/2),leg); b.position.set(x,0.07,z); g.add(b);
  const liq=new THREE.Mesh(new THREE.CircleGeometry(0.06,14),new THREE.MeshBasicMaterial({color:['#7aff9a','#9ad0ff','#e0a0ff'][i]})); liq.rotation.x=-Math.PI/2; liq.position.set(x,0.065,z); g.add(liq); }
 const fumoTex=(()=>{ const c=document.createElement('canvas'); c.width=c.height=64; const x=c.getContext('2d'), gr=x.createRadialGradient(32,32,2,32,32,30); gr.addColorStop(0,'rgba(230,240,230,0.7)'); gr.addColorStop(1,'rgba(230,240,230,0)'); x.fillStyle=gr; x.fillRect(0,0,64,64); return new THREE.CanvasTexture(c); })();
 for(let i=0;i<9;i++){ const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:fumoTex,transparent:true,depthWrite:false,opacity:0.5})); g.add(sp); FUMI.push({sp,f:i/9,x:(i%3-1)*0.35,z:(Math.floor(i/3)-1)*0.35}); }
 g.visible=false; scene.add(g); return g; }
function aggiornaCura(t){ const sc=scena&&scena.tipo==='cura'?scena:null; if(!kitCura){ if(!sc) return; kitCura=creaKitCura(); }
 if(!sc){ kitCura.visible=false; return; } const paz=sc.attori[1], o=paz&&gatti3.get(paz); if(!o){ kitCura.visible=false; return; }
 kitCura.visible=true; kitCura.position.set(o.box.position.x,o.box.position.y-0.07,o.box.position.z); kitCura.rotation.y=o.dir;
 for(const f of FUMI){ const u=(t*0.35+f.f)%1; f.sp.position.set(f.x+Math.sin(t+f.f*9)*0.05,0.15+u*1.3,f.z); f.sp.scale.setScalar(0.25+u*0.6); f.sp.material.opacity=0.55*(1-u); } }
window.R3D={frame,aggiornaCamera,proietta,vis:visibile,ruota,resize,quota:quotaPx,cam3};
resize(W,H);
window.dispatchEvent(new Event('r3d-pronto'));
