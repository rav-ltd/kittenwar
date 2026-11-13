// Le leggende dipinte nelle tane: tre per tana, in italiano, in inglese e in francese.
// Ogni leggenda dice soltanto ciò che la fonte citata sostiene (richiesta del 12 novembre 2026
const LEGGENDE={
 tanaGuerrieri:[
  {it:{t:'Il Grande Gatto e il serpente',x:'Sulla parete un gatto tiene un coltello e taglia la testa a un serpente, sotto un albero.',s:'Nel <i>Libro dei morti</i> egizio (capitolo 17) il dio sole parla come «il grande gatto» che, la notte della battaglia, presso l’albero sacro di Eliopoli, sconfigge il serpente del caos, Apopi. Nei papiri dipinti il gatto taglia il serpente con un coltello: ogni notte il sole doveva vincere di nuovo per sorgere al mattino.'},
   en:{t:'The Great Cat and the serpent',x:'On the wall a cat holds a knife and cuts off a serpent’s head beneath a tree.',s:'In the Egyptian <i>Book of the Dead</i> (chapter 17) the sun god speaks as «the great cat» who, on the night of battle, beside the sacred tree of Heliopolis, defeats Apep, the serpent of chaos. In painted papyri the cat cuts the serpent with a knife: every night the sun had to win again in order to rise in the morning.'}},
  {it:{t:'Il carro della dea',x:'Due gatti tirano un carro, e sul carro siede una donna con una collana.',s:'Nell’<i>Edda in prosa</i> di Snorri Sturluson (Islanda, XIII secolo) la dea Freyja va in battaglia e ai funerali su un carro tirato da due gatti. Metà dei guerrieri caduti, dice Snorri, spetta a lei; l’altra metà a Odino.'},
   en:{t:'The goddess’s chariot',x:'Two cats pull a chariot, and on it sits a woman wearing a necklace.',s:'In Snorri Sturluson’s <i>Prose Edda</i> (Iceland, 13th century) the goddess Freyja rides to battles and funerals in a chariot drawn by two cats. Half of the fallen warriors, Snorri says, belong to her; the other half to Odin.'}},
  {it:{t:'I leoni della grotta',x:'Una fila di grandi felini, senza criniera, corre tutta nella stessa direzione.',s:'Nella grotta Chauvet, in Francia, scoperta nel 1994, alcuni pittori di circa 36.000 anni fa hanno dipinto in fondo alla grotta un branco di leoni delle caverne che inseguono dei bisonti. Usavano il carbone e sfumavano il colore con le dita per dare rilievo ai musi. In Germania, nella grotta di Hohlenstein-Stadel, è stata trovata una statuetta d’avorio di mammut di circa 40.000 anni: un corpo umano con la testa di leone, l’«uomo-leone», forse un essere dei racconti di allora.'},
   en:{t:'The lions of the cave',x:'A row of great cats, without manes, all running the same way.',s:'In the Chauvet cave in France, discovered in 1994, painters of about 36,000 years ago drew a pride of cave lions chasing bison at the back of the cave. They used charcoal and smudged the colour with their fingers to shape the muzzles. In Germany, in the Hohlenstein-Stadel cave, a mammoth-ivory figurine about 40,000 years old was found: a human body with a lion’s head, the «Lion-man», perhaps a being from the stories of that time.'}},
 ],
 tanaApprendisti:[
  {it:{t:'Il gatto sepolto accanto all’uomo',x:'Un gatto piccolo, disegnato accanto a una figura distesa, con conchiglie e pietre levigate intorno.',s:'A Shillourokambos, sull’isola di Cipro, gli archeologi hanno trovato la tomba di un uomo di circa 9.500 anni fa con offerte di pietre levigate e conchiglie; a quaranta centimetri, in una piccola fossa, era sepolto un gatto di otto mesi. A Cipro i gatti selvatici non vivevano: qualcuno li aveva portati in barca. È la più antica prova di un gatto che vive con gli umani (Jean-Denis Vigne e colleghi, <i>Science</i>, 2004).'},
   en:{t:'The cat buried beside a man',x:'A small cat drawn beside a lying figure, with shells and polished stones around them.',s:'At Shillourokambos, on the island of Cyprus, archaeologists found the grave of a man from about 9,500 years ago with offerings of polished stones and shells; forty centimetres away, in a small pit, an eight-month-old cat had been buried. Wild cats did not live on Cyprus: someone had brought them by boat. It is the oldest evidence of a cat living with humans (Jean-Denis Vigne and colleagues, <i>Science</i>, 2004).'}},
  {it:{t:'La festa in cui si invitano i gatti',x:'Gatti e tigri tra le spighe, con i topi e i cinghiali che scappano.',s:'Il <i>Libro dei riti</i> cinese (<i>Liji</i>, raccolto tra il IV e il I secolo a.C.) descrive il sacrificio di fine anno a otto spiriti dei campi. Tra gli spiriti invitati ci sono i gatti, «perché mangiano i topi dei campi», e le tigri, «perché mangiano i cinghiali». Un rito di ringraziamento, insomma, anche per i cacciatori a quattro zampe.'},
   en:{t:'The festival that invites the cats',x:'Cats and tigers among ears of grain, with mice and wild boars running away.',s:'The Chinese <i>Book of Rites</i> (<i>Liji</i>, compiled between the 4th and the 1st century BC) describes the end-of-year sacrifice to eight spirits of the fields. Among the spirits invited are the cats, «because they eat the field mice», and the tigers, «because they eat the wild boars». A thanksgiving rite, then, for the four-legged hunters too.'}},
  {it:{t:'I gatti che cadono dalla torre',x:'Una torre alta, e dall’alto cadono piccoli gatti, mentre sotto la folla guarda.',s:'A Ypres, nelle Fiandre, nel Medioevo i gatti venivano gettati dalla torre del mercato dei tessuti in un giorno di festa: forse per allontanare il male, forse per liberarsi dei gatti in eccesso. L’usanza finì all’inizio dell’Ottocento. Dal 1938 la città la ricorda con la sfilata dei gatti, il <i>Kattenstoet</i>: oggi, ogni tre anni, un buffone getta dalla torre gatti di peluche, e chi ne prende uno avrà fortuna.'},
   en:{t:'The cats falling from the tower',x:'A tall tower, and small cats falling from the top while the crowd watches below.',s:'In Ypres, in Flanders, in the Middle Ages cats were thrown from the tower of the Cloth Hall on a feast day: perhaps to drive away evil, perhaps to get rid of too many cats. The custom ended in the early 1800s. Since 1938 the town has remembered it with the cat parade, the <i>Kattenstoet</i>: today, every three years, a jester throws toy cats from the tower, and whoever catches one will have good luck.'}},
 ],
 nursery:[
  {it:{t:'Le sopracciglia rasate',x:'Una famiglia in fila, e tutti si toccano la fronte; davanti a loro un gatto addormentato per sempre.',s:'Lo storico greco Erodoto (<i>Storie</i>, II, 66-67, V secolo a.C.) racconta che in Egitto, quando in una casa moriva un gatto di morte naturale, tutti gli abitanti si radevano le sopracciglia in segno di lutto; per un cane si radevano tutto il corpo. I gatti morti venivano portati a Bubastis, la città della dea gatta Bastet, imbalsamati e sepolti in tombe sacre.'},
   en:{t:'The shaved eyebrows',x:'A family in a row, all touching their foreheads; before them a cat asleep forever.',s:'The Greek historian Herodotus (<i>Histories</i>, II, 66-67, 5th century BC) tells that in Egypt, when a cat died a natural death in a house, everyone living there shaved their eyebrows in mourning; for a dog they shaved their whole body. Dead cats were taken to Bubastis, the city of the cat goddess Bastet, embalmed and buried in sacred tombs.'}},
  {it:{t:'Il gatto e la manica',x:'Un gatto dorme sul lembo di un mantello, e qualcuno taglia il mantello per non svegliarlo.',s:'Una tradizione popolare del mondo islamico racconta che il profeta Maometto tagliò la manica del suo mantello per non svegliare la gatta che vi dormiva sopra. I testi antichi non riportano questa storia; riportano però un detto, nella raccolta di al-Bukhari (IX secolo), su una donna punita per aver chiuso una gatta senza darle cibo né lasciarla cacciare. Uno dei compagni del profeta era soprannominato Abu Hurayra, «il padre del gattino».'},
   en:{t:'The cat and the sleeve',x:'A cat sleeps on the edge of a cloak, and someone cuts the cloak so as not to wake it.',s:'A popular tradition of the Islamic world tells that the prophet Muhammad cut off the sleeve of his cloak so as not to wake the cat sleeping on it. The early texts do not contain this story; they do, however, record a saying, in al-Bukhari’s collection (9th century), about a woman punished for shutting up a cat without food or letting it hunt. One of the prophet’s companions was nicknamed Abu Hurayra, «father of the kitten».'}},
  {it:{t:'Il libro dei gatti fortunati',x:'Tanti gatti dipinti uno sotto l’altro, ciascuno con macchie diverse, come le pagine di un libro.',s:'Nel Siam, l’attuale Thailandia, si copiavano da secoli i <i>Tamra Maew</i>, i «trattati sui gatti»: manoscritti di carta piegata a fisarmonica, con poesie e disegni. Descrivono diciassette gatti che portano fortuna, riconoscibili dal colore del mantello e dalle macchie, e alcuni gatti che portano sventura. Tra i gatti fortunati c’è il <i>wichienmat</i>, l’antenato del gatto siamese.'},
   en:{t:'The book of lucky cats',x:'Many cats painted one under another, each with different markings, like the pages of a book.',s:'In Siam, today’s Thailand, people copied for centuries the <i>Tamra Maew</i>, the «cat treatises»: manuscripts of paper folded like an accordion, with poems and drawings. They describe seventeen cats that bring good luck, recognised by the colour of their coat and their markings, and some cats that bring bad luck. Among the lucky cats is the <i>wichienmat</i>, ancestor of the Siamese cat.'}},
 ],
 tanaGuaritore:[
  {it:{t:'La festa di Bubastis',x:'Barche piene di gente che suona e canta lungo un fiume, verso un tempio con una dea dalla testa di gatta.',s:'Erodoto (<i>Storie</i>, II, 59-60) descrive la festa della dea Bastet a Bubastis come la più grande d’Egitto: uomini e donne arrivavano in barca suonando nacchere e flauti, battendo le mani e cantando; secondo gli abitanti erano settecentomila, senza contare i bambini. In quei giorni, scrive, si beveva più vino che in tutto il resto dell’anno.'},
   en:{t:'The festival of Bubastis',x:'Boats full of people playing music and singing along a river, towards a temple with a cat-headed goddess.',s:'Herodotus (<i>Histories</i>, II, 59-60) describes the festival of the goddess Bastet at Bubastis as the greatest in Egypt: men and women arrived by boat playing castanets and flutes, clapping and singing; according to the locals there were seven hundred thousand of them, not counting the children. In those days, he writes, more wine was drunk than in all the rest of the year.'}},
  {it:{t:'Il romano e il gatto',x:'Una folla arrabbiata davanti a una casa, e a terra un gatto immobile.',s:'Lo storico Diodoro Siculo (<i>Biblioteca storica</i>, I, 83) racconta di aver visto con i propri occhi, in Egitto, verso il 60 a.C., la folla assalire la casa di un romano che aveva ucciso un gatto per sbaglio. I funzionari mandati dal re per salvarlo non riuscirono a fermarla, anche se il re temeva Roma. Chi uccideva un gatto, anche senza volerlo, rischiava la vita.'},
   en:{t:'The Roman and the cat',x:'An angry crowd in front of a house, and on the ground a motionless cat.',s:'The historian Diodorus Siculus (<i>Library of History</i>, I, 83) says he saw with his own eyes, in Egypt, around 60 BC, a crowd attack the house of a Roman who had killed a cat by accident. The officials the king sent to save him could not stop them, even though the king feared Rome. Whoever killed a cat, even without meaning to, risked their life.'}},
  {it:{t:'Le mummie nei campi',x:'Migliaia di piccoli fagotti a forma di gatto, ammucchiati su una nave.',s:'Nel 1888, vicino a Beni Hasan, in Egitto, un contadino trovò un cimitero con un numero enorme di gatti mummificati: si parlò di circa 180.000 mummie. Molte furono vendute come concime e spedite in Inghilterra: un carico di quasi venti tonnellate arrivò al porto di Liverpool nel 1890. Le offerte di un antico culto finirono così a concimare i campi inglesi; un cranio di quel carico è conservato al Museo di Storia Naturale di Londra.'},
   en:{t:'The mummies in the fields',x:'Thousands of small cat-shaped bundles, piled on a ship.',s:'In 1888, near Beni Hasan in Egypt, a farmer found a cemetery holding an enormous number of mummified cats: people spoke of about 180,000 mummies. Many were sold as fertiliser and shipped to England: a cargo of almost twenty tonnes reached the port of Liverpool in 1890. So the offerings of an ancient cult ended up fertilising English fields; a skull from that cargo is kept at the Natural History Museum in London.'}},
 ],
};
// le leggende in francese (aggiunte il 12 novembre 2026, versione francese del gioco)
const LEGGENDE_FR={
 tanaGuerrieri:[
  {t:'Le Grand Chat et le serpent',x:'Sur la paroi, un chat tient un couteau et tranche la tête d’un serpent, sous un arbre.',s:'Dans le <i>Livre des morts</i> égyptien (chapitre 17), le dieu soleil parle comme « le grand chat » qui, la nuit du combat, près de l’arbre sacré d’Héliopolis, vainc le serpent du chaos, Apophis. Sur les papyrus peints, le chat tranche le serpent avec un couteau : chaque nuit, le soleil devait vaincre de nouveau pour se lever au matin.'},
  {t:'Le char de la déesse',x:'Deux chats tirent un char, et sur le char est assise une femme portant un collier.',s:'Dans l’<i>Edda en prose</i> de Snorri Sturluson (Islande, XIIIe siècle), la déesse Freyja se rend aux batailles et aux funérailles sur un char tiré par deux chats. La moitié des guerriers tombés, dit Snorri, lui revient ; l’autre moitié revient à Odin.'},
  {t:'Les lions de la grotte',x:'Une file de grands félins, sans crinière, court dans la même direction.',s:'Dans la grotte Chauvet, en France, découverte en 1994, des peintres d’il y a environ 36 000 ans ont peint au fond de la grotte une troupe de lions des cavernes qui chassent des bisons. Ils utilisaient le charbon et estompaient la couleur avec les doigts pour donner du relief aux museaux. En Allemagne, dans la grotte de Hohlenstein-Stadel, on a trouvé une statuette en ivoire de mammouth d’environ 40 000 ans : un corps humain à tête de lion, « l’homme-lion », peut-être un être des récits de cette époque.'}],
 tanaApprendisti:[
  {t:'Le chat enterré près de l’homme',x:'Un petit chat dessiné à côté d’une figure allongée, entouré de coquillages et de pierres polies.',s:'À Shillourokambos, sur l’île de Chypre, les archéologues ont trouvé la tombe d’un homme d’il y a environ 9 500 ans, avec des offrandes de pierres polies et de coquillages ; à quarante centimètres, dans une petite fosse, était enterré un chat de huit mois. Les chats sauvages ne vivaient pas à Chypre : quelqu’un les avait amenés en bateau. C’est la plus ancienne preuve d’un chat vivant avec les humains (Jean-Denis Vigne et ses collègues, <i>Science</i>, 2004).'},
  {t:'La fête où l’on invite les chats',x:'Des chats et des tigres parmi les épis, tandis que les souris et les sangliers s’enfuient.',s:'Le <i>Livre des rites</i> chinois (<i>Liji</i>, compilé entre le IVe et le Ier siècle av. J.-C.) décrit le sacrifice de fin d’année à huit esprits des champs. Parmi les esprits invités, il y a les chats, « parce qu’ils mangent les rats des champs », et les tigres, « parce qu’ils mangent les sangliers ». Un rite de remerciement, en somme, aussi pour les chasseurs à quatre pattes.'},
  {t:'Les chats qui tombent de la tour',x:'Une haute tour, et du sommet tombent de petits chats, tandis qu’en bas la foule regarde.',s:'À Ypres, en Flandre, au Moyen Âge, on jetait des chats du haut du beffroi de la halle aux draps un jour de fête : peut-être pour éloigner le mal, peut-être pour se débarrasser des chats en trop. La coutume a pris fin au début du XIXe siècle. Depuis 1938, la ville la rappelle par le défilé des chats, le <i>Kattenstoet</i> : aujourd’hui, tous les trois ans, un bouffon lance de la tour des chats en peluche, et celui qui en attrape un aura de la chance.'}],
 nursery:[
  {t:'Les sourcils rasés',x:'Une famille en rang, chacun se touchant le front ; devant eux, un chat endormi pour toujours.',s:'L’historien grec Hérodote (<i>Histoires</i>, II, 66-67, Ve siècle av. J.-C.) raconte qu’en Égypte, quand un chat mourait de mort naturelle dans une maison, tous ses habitants se rasaient les sourcils en signe de deuil ; pour un chien, ils se rasaient le corps entier. Les chats morts étaient portés à Bubastis, la ville de la déesse chatte Bastet, embaumés et enterrés dans des tombes sacrées.'},
  {t:'Le chat et la manche',x:'Un chat dort sur le pan d’un manteau, et quelqu’un coupe le manteau pour ne pas le réveiller.',s:'Une tradition populaire du monde islamique raconte que le prophète Mahomet coupa la manche de son manteau pour ne pas réveiller la chatte qui dormait dessus. Les textes anciens ne rapportent pas cette histoire ; ils rapportent en revanche une parole, dans le recueil d’al-Bukhari (IXe siècle), sur une femme punie pour avoir enfermé une chatte sans la nourrir ni la laisser chasser. L’un des compagnons du prophète était surnommé Abu Hurayra, « le père du chaton ».'},
  {t:'Le livre des chats porte-bonheur',x:'Beaucoup de chats peints les uns sous les autres, chacun avec des taches différentes, comme les pages d’un livre.',s:'Au Siam, l’actuelle Thaïlande, on recopiait depuis des siècles les <i>Tamra Maew</i>, les « traités des chats » : des manuscrits de papier plié en accordéon, avec des poèmes et des dessins. Ils décrivent dix-sept chats qui portent bonheur, reconnaissables à la couleur de leur pelage et à leurs taches, et quelques chats qui portent malheur. Parmi les chats porte-bonheur, il y a le <i>wichienmat</i>, l’ancêtre du chat siamois.'}],
 tanaGuaritore:[
  {t:'La fête de Bubastis',x:'Des barques pleines de gens qui jouent et chantent le long d’un fleuve, vers un temple d’une déesse à tête de chatte.',s:'Hérodote (<i>Histoires</i>, II, 59-60) décrit la fête de la déesse Bastet à Bubastis comme la plus grande d’Égypte : hommes et femmes arrivaient en barque en jouant des castagnettes et de la flûte, en battant des mains et en chantant ; selon les habitants, ils étaient sept cent mille, sans compter les enfants. Pendant ces jours-là, écrit-il, on buvait plus de vin que pendant tout le reste de l’année.'},
  {t:'Le Romain et le chat',x:'Une foule en colère devant une maison, et par terre un chat immobile.',s:'L’historien Diodore de Sicile (<i>Bibliothèque historique</i>, I, 83) raconte avoir vu de ses propres yeux, en Égypte, vers 60 av. J.-C., la foule attaquer la maison d’un Romain qui avait tué un chat par accident. Les fonctionnaires envoyés par le roi pour le sauver ne purent l’arrêter, bien que le roi craignît Rome. Celui qui tuait un chat, même sans le vouloir, risquait sa vie.'},
  {t:'Les momies dans les champs',x:'Des milliers de petits paquets en forme de chat, entassés sur un navire.',s:'En 1888, près de Beni Hassan, en Égypte, un paysan découvrit un cimetière contenant un nombre énorme de chats momifiés : on parla d’environ 180 000 momies. Beaucoup furent vendues comme engrais et expédiées en Angleterre : une cargaison de près de vingt tonnes arriva au port de Liverpool en 1890. Les offrandes d’un culte ancien finirent ainsi par fertiliser les champs anglais ; un crâne de cette cargaison est conservé au Musée d’histoire naturelle de Londres.'}],
};
for(const k in LEGGENDE_FR) LEGGENDE_FR[k].forEach((v,i)=>{ LEGGENDE[k][i].fr=v; });
const LINGUA=(()=>{ const l=(document.documentElement.lang||'it').slice(0,2); return l==='en'||l==='fr'?l:'it'; })();
const TESTI_LEGG={
 it:{azione:'Leggi le pitture sulla parete',titolo:'🕯️ Le pitture della tana',fonte:'Che cosa raccontano le fonti',altra:'Guarda la pittura accanto',basta:'Torna al clan',tutte:'Hai visto tutte le pitture di questa tana: ogni tana ne custodisce altre.',letta:t=>`🕯️ Hai letto la leggenda «${t}» sulla parete della tana.`,
  esci:'Esci dalla tana',sgrida:k=>k?'Scendi subito dalla Roccia Alta! Lassù salgono soltanto i guerrieri e i guaritori.':'Giù dalla Roccia Alta! Un apprendista non ha ancora il diritto di salirci: soltanto i guerrieri e i guaritori.',salto:'Super salto oltre la siepe',prega:'🙏 Pregare per gli antenati morti',pregato:'Hai già pregato qui in questa luna: torna più avanti.',
  preghiera:'Ti accucci davanti all’altare, tra i lumini. Chiudi gli occhi e pensi ai gatti del clan che sono morti prima di te: i loro nomi, le loro cacce, le loro storie. Il fumo delle candele sale verso la volta.',
  boxPreghiera:['Le feste dei morti','A Roma, a febbraio, le famiglie celebravano i <i>Parentalia</i>: per nove giorni portavano sulle tombe degli antenati fiori, grano, sale e pane bagnato nel vino; il poeta Ovidio li descrive nei <i>Fasti</i> (libro II). In Messico, nel Día de Muertos, si preparano altari con fotografie, candele e i cibi preferiti dei defunti. Ricordare i morti tiene unita una comunità.'],
  spirito:'Spirito del clan', piu:(n,m)=>`✨ Spirito del clan +${n}: ${m}.`,
  nemico:{spazio:n=>'affronta '+n,titolo:n=>'⚔️ '+n,incontro:(n,cl,f)=>`${n}, ${f?'una guerriera':'un guerriero'} del ${cl}, ti sbarra la strada con il pelo ritto.`,
   combatti:'⚔️ Combatti',scappa:'💨 Scappa',amici:'🤝 Proponi di diventare amici',cuccioli:'💞 Proponi di avere dei cuccioli insieme',
   vinto:n=>`🏆 Hai vinto! ${n} scappa verso il suo campo.`,perso:n=>`😿 Hai perso: ${n} ha avuto la meglio. Ti ritiri con qualche graffio.`,
   fuggito:'💨 Via di corsa nel bosco!',presoInFuga:n=>`${n} ti raggiunge: bisogna combattere!`,
   amiciSi:n=>`🤝 ${n} abbassa il pelo e ti tocca il naso: «I nostri clan sono nemici, ma noi due no.» Da oggi non ti attaccherà più.`,
   amiciNo:n=>`${n} soffia: «Amici? Con uno della Felce? Mai!» E ti salta addosso.`,
   cucciNo:n=>`${n} ti guarda a lungo, poi scuote la testa con dolcezza: «I nostri clan sono nemici, e il mio cuore resta con il mio clan. Ma non ti dimenticherò.»`,
   cucciSi:n=>`${n} ti guarda a lungo, poi si avvicina e ti strofina il muso: «I nostri clan sono nemici… ma io acconsento, se anche tu lo desideri.»`},
  ogg:{raccogli:n=>'Raccogli '+n,soloGuerrieri:'Solo i guerrieri possono prendere le armi',preso:(n,d)=>`🎒 Hai raccolto ${n}. ${d}`,rubato:(n,cl)=>`🏺 Hai rubato ${n} al ${cl}! Se ti hanno visto, ti inseguiranno.`,visto:n=>`😾 ${n} ti ha visto rubare!`,motivoFurto:'vuole vendicare il furto di un oggetto sacro',inventario:'🎒 Inventario',vuoto:'Ancora vuoto: esplora il bosco.',offri:n=>'🎁 Offrire all’altare '+n,offerto:n=>`🎁 Hai offerto ${n} all’altare.`,forza:n=>`+${n} forza`,arma:'arma',reperto:'reperto',culto:'oggetto di culto'},
  guadagni:{fame:'🍖 Ti sei saziato',sete:'💧 Ti sei dissetato',energia:'😴 Hai recuperato le forze',salute:'❤️ Ti senti meglio',spirito:'✨ Lo spirito del clan si rafforza',forza:'💪 Diventi più forte'},
  clicInd:{fame:'Hai fame: dove vai?',mucchio:n=>`🍖 Al mucchio delle prede (${n})`,caccia:'🐾 A caccia',acqua:'Clicca: all’acqua',salute:'Clicca: dal guaritore',curato:n=>`🌿 ${n} ti cura con le erbe del bosco.`,energia:'Clicca: a dormire',cibo:'Clicca: a mangiare',spirito:'Clicca: a pregare'},
  verso:{tit:'🎖️ Per diventare guerriero',titG:'🎖️ Per diventare guaritore',titA:'🎖️ Per diventare apprendista',b:{lune:'🌙 lune',racconti:'📜 racconti',prede:'🐭 prede',allenamenti:'⚔️ allenamenti',erbe:'🌿 erbe',cure:'🩹 cure'},oppure:n=>`Battaglie vinte: ${n} di 3 (con 3 vittorie il capo ti chiama)`,pronto:'✅ Pronto! Vai alla Roccia Alta'},
  convoca:n=>`${n}, hai combattuto con valore. Vieni alla Roccia Alta: è il momento della tua cerimonia da guerriero!`,convocaAnn:'🌟 Sei convocato alla Roccia Alta!',
  manca:(n,l)=>`Non scoraggiarti, ${n}. Per diventare guerriero ti mancano: ${l}. Oppure vinci tre battaglie, e il capo ti chiamerà.`,
  visita:{storia:n=>`${n} ti si avvicina e si siede davanti a te: «Mi racconti una storia?»`,coccole:n=>`${n} ti si avvicina facendo le fusa e ti strofina la testa sul fianco: vuole un po’ di coccole.`,racconta:'📖 Raccontare una storia',coccola:'😽 Fare le coccole',nonOra:'🙂 Non ora',ok:n=>`${n} ti saluta con la coda alta.`},
  get canto(){ return pick(['🎶 Miaooooom…','🎶 Miaaaao…','🎶 Mrrrau…','🎶 Miaoooo…']); },
  pausa:{tit:'⏸ Pausa',testo:'Il gioco è fermo. Che cosa vuoi fare?',continua:'▶ Continua',salva:'💾 Salva la partita',partite:'📂 Partite',esci:'🚪 Esci al menu iniziale',salvata:'💾 Partita salvata'},
  risveglio:n=>`🌿 ${n} ti cura con impacchi di erbe e ti lecca la fronte. Piano piano ti rimetti in forze.`,
  funerale:{caduto:n=>`🕯️ Il clan ha perso ${n} in battaglia.`,chiama:n=>`Il clan ha perso ${n}. Venite tutti alla Roccia Alta, per l’ultimo saluto.`,ann:'🕯️ Funerale alla Roccia Alta',
   tit:n=>'🕯️ Il commiato di '+n,discorso:(c,n,r)=>`${c} sale sulla Roccia Alta. Il clan è in silenzio. «Oggi salutiamo ${n}, ${r} del Clan della Felce. Ha difeso il clan fino all’ultimo respiro. Che le stelle accolgano il suo spirito tra gli antenati.»<br><br>I gatti chinano la testa, uno dopo l’altro. Poi tocca a te.`,
   veglia:'🕯️ Vegliare accanto al caduto',fiore:'🌸 Deporre un fiore',storia:'📜 Ricordare una sua storia',
   fatto:{veglia:'Resti accanto al compagno caduto fino all’alba, in silenzio.',fiore:'Deponi un fiore di campo accanto al caduto. Altri gatti fanno lo stesso.',storia:'Racconti al clan una sua caccia memorabile. Qualcuno sorride tra le lacrime.'},
   fine:n=>`Gli anziani portano ${n} sotto la grande quercia, dove riposano gli antenati del clan. Il suo nome non sarà dimenticato.`,
   box:['Il funerale di Ettore','Nell’ultimo canto dell’<i>Iliade</i> di Omero, i Troiani piangono Ettore per nove giorni; il decimo bruciano il suo corpo sul rogo, poi raccolgono le ossa in un’urna d’oro e innalzano un tumulo. Il poema si chiude così: «Così celebrarono le esequie di Ettore».'],
   motivo:'hai onorato un compagno caduto',ricordo:n=>` Pensi anche a ${n}, caduti per il clan.`},
  alMassimo:'✨ Lo spirito del clan è al massimo',
  contaPrede:(a,b)=>`🐭 Prede: ${a} di ${b}`,
  nemiche:{nome:cl=>'tana del '+cl,profana:'Profanazione! Fuori dalla nostra tana!',ann:'😾 Profanazione!',log:cl=>`😾 Questa è una tana del ${cl}: i suoi gatti gridano alla profanazione! Dentro non possono toccarti, ma fuori…`,
   ruba:'🏺 Rubare l’oggetto sacro dall’altare',vuoto:'L’altare è vuoto: l’oggetto sacro è già stato preso.',insegue:cl=>`😾 I gatti del ${cl} ti inseguono!`,motivo:'vuole vendicare la tana profanata'},
  vita:{vecchio:n=>`${n}, hai visto moltissime lune e non puoi più combattere. Ma la tua saggezza vale più di mille artigli: racconta le tue storie ai giovani.`,vecchioAnn:'🍂 Ora sei tra gli anziani',
   tit:'🌅 Il lungo viaggio',sonno:n=>`Una sera, dopo un pasto con il clan, ${n} si addormenta nella tana dei guerrieri, in pace, e non si sveglia più. È arrivato il suo momento, come arriva per ogni gatto. Il clan si raduna per l’ultimo onore.`,
   onore:'🕯️ Il rito d’onore',discorso:(c,n,l,pr,b)=>`${c} parla davanti a tutto il clan: «${n} ha vissuto ${l} lune.${pr||b?` Ha portato ${pr} prede al mucchio e ha vinto ${b} battaglie.`:''} Il clan e ${n} si sono voluti bene. Ora il suo spirito corre tra le stelle, con gli antenati.»<br><br>I gatti chinano la testa insieme. Poi, uno dopo l’altro, sfiorano il suo pelo con il naso.`,
   box:['Il mito di Er','Alla fine della <i>Repubblica</i>, Platone racconta il mito di Er: le anime dei morti, dopo un lungo viaggio, scelgono una nuova vita, bevono l’acqua del fiume dell’Oblio e rinascono. Per molti popoli la morte non è una fine, ma un passaggio in un grande ciclo.'],
   rinasci:'🌱 Il tuo spirito rinasce',nuova:'🌱 Una nuova vita',nato:(n,m)=>`Nella nursery è nato un gattino: <b>${n}</b>. Sua madre è ${m}. Nei suoi occhi c’è qualcosa di antico, come un ricordo che non sa di avere… Il tuo spirito continua il suo cammino nel Clan della Felce.`,
   comincia:'Cominciamo!',antenato:n=>`🌟 ${n} ora veglia sul clan dalle stelle.`},
  arte:['Graffito rupestre','Stampa giapponese','Vaso greco a figure nere','Affresco egizio','La Gioconda gatta','Pittura cinese a inchiostro','Mosaico romano','Vetrata gotica','Miniatura medievale','Pop art'],
  di:'di', battaglie:'Battaglie vinte',
  bocca:(n)=>`🐭 In bocca: ${n} di 3`,
  stranieri:{arriva:(n,cl)=>`${n}, del ${cl}, esce dagli alberi. Non soffia: ti guarda con prudenza e curiosità.`,parla:'💬 Parlare',saluta:'👋 Salutare e andare',sfida:'⚔️ Sfidare',tit:n=>'💬 '+n,
   fine:'«Le vostre usanze sono diverse dalle nostre. Ed è giusto così: ogni clan ha le sue.»',ciao:n=>`${n} ti saluta con un cenno della coda e torna tra gli alberi.`,
   cultura:{nebbia:['«Da noi nessuno mangia l’airone: è il nostro antenato, il primo gatto della Nebbia nacque dalle sue piume. Voi della Felce mangiate tutto quello che prendete?»',
    '«Quando un gatto della Nebbia riceve una preda in dono, deve restituirne due prima della luna nuova. Altrimenti resta in debito, e il debito pesa. Da voi un dono è soltanto un dono?»',
    '«Ogni nostro cucciolo riceve un nome segreto, che conosce soltanto sua madre. Il nome con cui mi chiami non è il mio vero nome: chi conosce il vero nome di un gatto ha potere su di lui.»',
    '«Da noi i figli appartengono alla famiglia della madre, e sono gli zii materni a insegnare la caccia. Da voi conta di più il padre, vero? Strano.»',
    '«Nella nebbia chi si perde è un ospite sacro: anche un nemico va nutrito e lasciato dormire una notte, prima di tornare nemico.»',
    '«I nostri apprendisti diventano guerrieri passando una notte da soli nella palude, senza dire una parola. Voi lo fate in cerchio, alla Roccia Alta. Ognuno ha la sua soglia.»'],
   pietre:['«Quando uno di noi muore, ogni gatto del clan porta una pietra sul luogo dove riposa. Il mucchio cresce, e il suo nome resta. Voi i vostri morti li portate sotto una quercia, mi hanno detto.»',
    '«Noi non contiamo le lune. Contiamo le stagioni delle pietre calde e delle pietre fredde. Per noi sei giovane di tre pietre calde.»',
    '«Il nostro capo non comanda: parla per ultimo, dopo che tutti hanno parlato in cerchio. Da voi il capo sale sulla roccia e decide da solo?»',
    '«Da noi chi vince un duello regala qualcosa allo sconfitto: così non si fa un nemico per sempre. La vittoria senza dono porta sfortuna.»',
    '«Ogni gatto delle Pietre porta con sé una pietra del cuore, trovata da cucciolo. Se la perde, non può prendere compagno finché non ne trova un’altra.»',
    '«Prima di cacciare chiediamo il permesso alla preda, in silenzio, e dopo la ringraziamo. Voi ringraziate le vostre prede?»']}},
  guaritore:{convoca:n=>`${n}, hai raccolto le erbe e imparato i loro segreti. Vieni alla Roccia Alta: è il momento della tua cerimonia da guaritore!`,cer:'🌿 Cerimonia del guaritore',pronto:n=>`«${n}, il clan è pronto. Oggi diventerai guaritore.»`,
   malanni:{spina:'ha una spina nella zampa',pancia:'ha il mal di pancia',tosse:'ha la tosse',zampa:'ha una zampa dolorante',ferita:'è ferito dopo una battaglia'},
   arriva:(n,m)=>`${n} arriva zoppicando: ${m}. «Mi aiuti, tu che conosci le erbe?»`,arrivaN:(n,cl,m)=>`${n}, del ${cl}, si avvicina con prudenza: ${m}. «Nel mio clan non riescono a curarmi… mi aiuti, anche se siamo nemici?»`,
   cura:'🌿 Curarlo con le erbe',nonOra:'🙂 Non ora',senza:'Non hai erbe con te: raccoglile nel bosco, poi torna.',guarito:n=>`🌿 Hai curato ${n}. Ti ringrazia con una testata affettuosa.`,guaritoN:n=>`🌿 Hai curato ${n}. «Non lo dimenticherò: da oggi non sei più mio nemico.»`},
  iniziazione:{gattino:(a,n)=>`${n}, avvicinati. Le lune ti hanno fatto crescere: è giunto il momento della tua iniziazione. Oggi lascerai la nursery e diventerai apprendista.`,
   guerriero:(a,n)=>`${n}, il clan ti ha visto cacciare e combattere. È giunto il momento della tua iniziazione: oggi riceverai il tuo nome di guerriero.`,
   guaritore:(a,n)=>`${n}, conosci le erbe e i loro segreti. È giunto il momento della tua iniziazione: oggi diventerai guaritore.`},
  entra:'Entra', profilo:{lune:n=>`🌙 ${n} lune`,forza:n=>`💪 forza ${n}`,umori:{fame:'Ha fame',sete:'Ha sete',stanco:'Ha sonno',ferito:'Ha una ferita',incinta:'Aspetta i cuccioli',felice:'Sta bene'}},
  curio:'📜 Lo sapevi?', luoghi:{lago:'Lago d’Argento',stagno:'stagno',guado:'guado'},
  guida:{clic:'👉 Clicca: ti ci porto',via:'🧭 Ti accompagno: usa le frecce per riprendere il controllo.',arrivo:'🧭 Eccoci!',fatto:{bevi:o=>`💧 Ora ti sei dissetat${o}`,mangia:()=>'🍖 Ora hai mangiato',deposita:()=>'🐭 Hai portato la preda al mucchio',dormi:()=>'😴 Ora dormi nella tua tana',caccia:()=>'🐾 Ora insegui la preda'},stop:'🧭 Hai ripreso il controllo.',giro:'🧭 Di qui la siepe è chiusa: facciamo il giro fino all’apertura.',bloccato:'🧭 Di qui non si passa: torno indietro, prova un’altra strada.',nessuna:'🧭 Non so dove portarti per questo: guarda il consiglio nel riquadro.',missione:'Ho una missione per te!',dice:n=>`${n} ti chiama`},
  titoloSpirito:'✨ Lo Spirito del clan',
  spiegaLunga:'Un clan non è soltanto un gruppo di gatti che vivono vicini: è tenuto insieme dai suoi riti e dalla sua memoria. La barra viola <b>✨ Spirito</b>, in basso, misura quanto il tuo clan è unito.<br><br><b>Come si ricarica</b> (cala piano, da sola, di circa dieci punti a ogni luna):<br>• ascoltare un racconto dell’anziano: +12<br>• raccontare una storia ai cuccioli: +10<br>• partecipare a un rito alla Roccia Alta: +15<br>• pregare per gli antenati all’altare di una tana: +10<br>• leggere le pitture sacre delle tane: +8<br>• miagolare in coro con un amico: +4<br><br><b>A che cosa serve</b><br>• <b>In battaglia</b>: con lo spirito alto i guerrieri del clan combattono uniti e sono più forti, e anche tu; con lo spirito basso ognuno combatte per sé, e siete più deboli.<br>• <b>Il cibo</b>: con lo spirito alto i cacciatori portano tutte le prede al mucchio, per tutti; con lo spirito basso <b>ognuno mangia per sé</b>, e il mucchio resta vuoto.<br>• Con lo spirito molto alto guarisci anche più in fretta.',
  boxSpirito:['Il collante dei riti','Per il sociologo Émile Durkheim (<i>Le forme elementari della vita religiosa</i>, 1912) i riti collettivi producono una «effervescenza» che fa sentire a ciascuno di appartenere a qualcosa di più grande, e rinnova i legami del gruppo.'],
  capito:'Ho capito',
  perSe:'mangia per sé', spiritoBassoAnnuncio:'😿 Spirito basso: ognuno mangia per sé!',
  amore:{proponi:'💞 Proporre di avere dei cuccioli insieme',si:'💞 Sì, acconsento',no:'🙂 No, grazie',
   arriva:(n,f)=>`${n} si avvicina, fa le fusa e ti strofina il muso con dolcezza. Poi ti guarda negli occhi: vorrebbe avere dei cuccioli con te, se anche tu lo desideri.`,
   chiediConsenso:'Avere dei cuccioli è una scelta che si fa in due: serve il sì di entrambi. Tu acconsenti?',
   accetta:n=>`«Sì, acconsento anch’io», risponde ${n}, e strofina il naso contro il tuo.`,
   rifiutoTuo:n=>`${n} abbassa le orecchie, poi ti dà un colpetto affettuoso con la testa. «Va bene, ti capisco. Restiamo amici.»`,
   rifiuti:{partner:n=>`«Ti voglio bene, ${n}, ma il mio cuore è già impegnato, e voglio restare al suo fianco. Restiamo amici, vero?»`,
    guerra:n=>`«Sei gentile, ${n}, ma ho scelto di dedicare la mia vita alla guerra e al clan. Non voglio cuccioli, almeno per ora. Restiamo amici!»`,
    presto:n=>`«Mi fa piacere, ${n}, ma ci conosciamo ancora poco. Lavarsi il pelo insieme, giocare, cacciare… poi vedremo.»`},
   titolo:'💞 Una proposta',
   box:['Il consenso','In ogni scelta d’amore conta il sì di entrambi, ed è giusto anche dire di no, con gentilezza. Un rifiuto non è un’offesa: ognuno ha la sua strada.'],
   cuccioli:'Siete d’accordo tutti e due: avrete dei cuccioli.'},
  motivi:{cura:'hai curato un gatto',compagnia:'hai passato del tempo con un compagno',racconto:'hai ascoltato un racconto',tramanda:'hai tramandato una storia ai cuccioli',coro:'avete cantato insieme',rito:'hai partecipato a un rito',pittura:'hai letto le pitture sacre',preghiera:'hai pregato per gli antenati'},
  spiega:'✨ <b>Lo Spirito del clan</b> è la barra viola: misura quanto senti tue le tradizioni del clan. Si consuma molto piano e si ricarica con i riti e con la memoria: ascoltare e raccontare storie, guardare le pitture delle tane, pregare per gli antenati all’altare, partecipare alle cerimonie, cantare in coro. Con lo spirito alto sei più forte in battaglia e guarisci prima.',
  basso:'Il tuo spirito del clan si sta spegnendo. Entra in una tana e prega all’altare, o chiedi un racconto all’anziano.',
  salv:{titolo:'💾 Le tue partite',scegli:'Scegli una partita da continuare, o uno spazio vuoto per cominciarne una nuova.',vuoto:i=>`Spazio vuoto — ✨ nuova partita`,pieno:(i,n,g)=>`«${n}» — ${g}`,annulla:'Torna al gioco',
   nome:'Il nome della partita',chiedi:'Come vuoi chiamare questa partita?',ok:'Comincia',def:i=>`Partita ${i}`,
   occupato:n=>`La partita «${n}»`,carica:'▶ Continua questa partita',cancella:'🗑 Cancellala e ricomincia qui',sicuro:n=>`Vuoi davvero cancellare «${n}»? Non si potrà recuperare.`,si:'Sì, cancella',no:'No',bottone:'💾 Partite',nuova:'✨ Nuova partita',cancellaMenu:'🗑 Cancella partite',qualeCancellare:'Quale partita vuoi cancellare? Non si potrà recuperare.',nessuna:'Non ci sono partite salvate.',pieni:'I cinque spazi sono pieni: cancella una partita per cominciarne una nuova.'}},
 en:{azione:'Read the paintings on the wall',titolo:'🕯️ The paintings of the den',fonte:'What the sources tell',altra:'Look at the next painting',basta:'Back to the clan',tutte:'You have seen all the paintings in this den: every den keeps others.',letta:t=>`🕯️ You read the legend «${t}» on the wall of the den.`,
  esci:'Leave the den',sgrida:k=>k?'Get down from Tall Rock at once, little one! Only warriors and healers may climb up there.':'Down from Tall Rock! An apprentice does not yet have the right to climb it: only warriors and healers.',salto:'Super jump over the hedge',prega:'🙏 Pray for the ancestors who died',pregato:'You have already prayed here this moon: come back later.',
  preghiera:'You crouch before the altar, among the little lights. You close your eyes and think of the clan cats who died before you: their names, their hunts, their stories. The candle smoke rises towards the vault.',
  boxPreghiera:['Festivals of the dead','In Rome, in February, families celebrated the <i>Parentalia</i>: for nine days they brought flowers, grain, salt and bread soaked in wine to their ancestors’ tombs; the poet Ovid describes them in the <i>Fasti</i> (book II). In Mexico, on the Día de Muertos, people build altars with photographs, candles and the favourite foods of the dead. Remembering the dead keeps a community together.'],
  spirito:'Clan spirit', piu:(n,m)=>`✨ Clan spirit +${n}: ${m}.`,
  nemico:{spazio:n=>'face '+n,titolo:n=>'⚔️ '+n,incontro:(n,cl,f)=>`${n}, a warrior of the ${cl}, blocks your way with ${f?'her':'his'} fur on end.`,
   combatti:'⚔️ Fight',scappa:'💨 Run away',amici:'🤝 Suggest becoming friends',cuccioli:'💞 Suggest having kits together',
   vinto:n=>`🏆 You won! ${n} runs back to their camp.`,perso:n=>`😿 You lost: ${n} is stronger. You back off, bruised.`,
   fuggito:'💨 You escaped into the forest.',presoInFuga:n=>`${n} catches up with you: you have to fight!`,
   amiciSi:n=>`🤝 ${n} lowers their fur and touches your nose: «Our clans are enemies, but we two are not.» From now on they will not attack you.`,
   amiciNo:n=>`${n} hisses: «Friends? With a Fern cat? Never!» And leaps at you.`,
   cucciNo:n=>`${n} looks at you for a long time, then gently shakes their head: «Our clans are enemies, and my heart stays with my clan. But I will not forget you.»`,
   cucciSi:n=>`${n} looks at you for a long time, then comes close and rubs muzzles with you: «Our clans are enemies… but I consent, if you want it too.»`},
  ogg:{raccogli:n=>'Pick up '+n,soloGuerrieri:'Only warriors may take weapons',preso:(n,d)=>`🎒 You picked up ${n}. ${d}`,rubato:(n,cl)=>`🏺 You stole ${n} from the ${cl}! If they saw you, they will chase you.`,visto:n=>`😾 ${n} saw you stealing!`,motivoFurto:'wants revenge for a stolen sacred object',inventario:'🎒 Inventory',vuoto:'Still empty: explore the forest.',offri:n=>'🎁 Offer at the altar: '+n,offerto:n=>`🎁 You offered ${n} at the altar.`,forza:n=>`+${n} strength`,arma:'weapon',reperto:'find',culto:'sacred object'},
  guadagni:{fame:'🍖 You have eaten your fill',sete:'💧 Your thirst is quenched',energia:'😴 You got your strength back',salute:'❤️ You feel better',spirito:'✨ The clan spirit grows stronger',forza:'💪 You grow stronger'},
  clicInd:{fame:'You are hungry: where to?',mucchio:n=>`🍖 To the prey pile (${n})`,caccia:'🐾 Go hunting',acqua:'Click: to water',salute:'Click: to the healer',curato:n=>`🌿 ${n} heals you with forest herbs.`,energia:'Click: to sleep',cibo:'Click: to eat',spirito:'Click: to pray'},
  verso:{tit:'🎖️ To become a warrior',titG:'🎖️ To become a healer',titA:'🎖️ To become an apprentice',b:{lune:'🌙 moons',racconti:'📜 stories',prede:'🐭 prey',allenamenti:'⚔️ training',erbe:'🌿 herbs',cure:'🩹 healing'},oppure:n=>`Battles won: ${n} of 3 (with 3 victories the leader calls you)`,pronto:'✅ Ready! Go to Tall Rock'},
  convoca:n=>`${n}, you fought bravely. Come to Tall Rock: it is time for your warrior ceremony!`,convocaAnn:'🌟 You are summoned to Tall Rock!',
  manca:(n,l)=>`Don’t lose heart, ${n}. To become a warrior you still need: ${l}. Or win three battles, and the leader will call you.`,
  visita:{storia:n=>`${n} comes over and sits in front of you: «Will you tell me a story?»`,coccole:n=>`${n} comes over purring and rubs their head against your side: they want a cuddle.`,racconta:'📖 Tell a story',coccola:'😽 Cuddle',nonOra:'🙂 Not now',ok:n=>`${n} greets you with their tail held high.`},
  get canto(){ return pick(['🎶 Miaooooom…','🎶 Miaaaao…','🎶 Mrrrau…','🎶 Miaoooo…']); },
  pausa:{tit:'⏸ Paused',testo:'The game is paused. What do you want to do?',continua:'▶ Continue',salva:'💾 Save the game',partite:'📂 Games',esci:'🚪 Back to the title screen',salvata:'💾 Game saved'},
  risveglio:n=>`🌿 ${n} tends you with herb poultices and licks your forehead. Little by little you get your strength back.`,
  funerale:{caduto:n=>`🕯️ ${n} fell in battle.`,chiama:n=>`The clan has lost ${n}. Come, all of you, to Tall Rock: we will say farewell together.`,ann:'🕯️ Funeral at Tall Rock',
   tit:n=>'🕯️ Farewell to '+n,discorso:(c,n,r)=>`${c} climbs Tall Rock. The clan is silent. «Today we say farewell to ${n}, ${r} of the Fern Clan, who defended the clan to the last breath. May the stars welcome them among the ancestors.»<br><br>One after another, the cats bow their heads. Then it is your turn.`,
   veglia:'🕯️ Keep vigil beside them',fiore:'🌸 Lay a flower',storia:'📜 Tell a story about them',
   fatto:{veglia:'You stay beside your fallen clanmate until dawn, in silence.',fiore:'You lay a wild flower beside them. Other cats do the same.',storia:'You tell the clan about one of their great hunts. Someone smiles through the tears.'},
   fine:n=>`The elders carry ${n} beneath the great oak, where the clan’s ancestors rest. Their name will not be forgotten.`,
   box:['The funeral of Hector','In the last book of Homer’s <i>Iliad</i>, the Trojans mourn Hector for nine days; on the tenth they burn his body on the pyre, then gather the bones in a golden urn and raise a mound. The poem ends: «Such were the funeral rites of Hector».'],
   motivo:'you honoured a fallen clanmate',ricordo:n=>` You also think of ${n}, who fell for the clan.`},
  alMassimo:'✨ The clan spirit is at its peak',
  contaPrede:(a,b)=>`🐭 Prey: ${a} of ${b}`,
  nemiche:{nome:cl=>'den of the '+cl,profana:'Desecration! Out of our den!',ann:'😾 Desecration!',log:cl=>`😾 You went into a den of the ${cl}: its cats cry desecration! Inside they cannot touch you, but outside…`,
   ruba:'🏺 Steal the sacred object from the altar',vuoto:'The altar is empty: the sacred object has already been taken.',insegue:cl=>`😾 The ${cl} cats are chasing you!`,motivo:'wants revenge for its desecrated den'},
  vita:{vecchio:n=>`${n}, you are very old and can no longer fight. But your wisdom is worth more than a thousand claws: tell your stories to the young.`,vecchioAnn:'🍂 You have become an elder',
   tit:'🌅 The long journey',sonno:n=>`One evening, after a meal with the clan, ${n} falls asleep in the warriors’ den, peacefully, and does not wake up. Their time has come, as it comes for every cat. The clan gathers to honour them.`,
   onore:'🕯️ The rite of honour',discorso:(c,n,l,pr,b)=>`${c} speaks before the whole clan: «${n} lived ${l} moons${pr||b?`, brought ${pr} prey to the pile and won ${b} battles`:''}. They loved the clan and the clan loved them. Now their spirit runs among the stars, with the ancestors.»<br><br>The cats bow their heads together. Then, one after another, they touch their fur with their noses.`,
   box:['The myth of Er','At the end of the <i>Republic</i>, Plato tells the myth of Er: the souls of the dead, after a long journey, choose a new life, drink the water of the river of Forgetfulness and are born again. For many peoples death is not an end, but a passage in a great cycle.'],
   rinasci:'🌱 Your spirit is reborn',nuova:'🌱 A new life',nato:(n,m)=>`A kit has been born in the nursery: <b>${n}</b>. Their mother is ${m}. In their eyes there is something ancient, like a memory they do not know they have… Your spirit continues its path in the Fern Clan.`,
   comincia:'Let’s begin!',antenato:n=>`🌟 ${n} now watches over the clan from the stars.`},
  arte:['Cave painting','Japanese print','Greek black-figure vase','Egyptian fresco','The Cat Lisa','Chinese ink painting','Roman mosaic','Gothic stained glass','Medieval miniature','Pop art'],
  di:'of', battaglie:'Battles won',
  bocca:(n)=>`🐭 In your mouth: ${n} of 3`,
  stranieri:{arriva:(n,cl)=>`${n}, of the ${cl}, steps out of the trees. No hissing: they watch you, wary but curious.`,parla:'💬 Talk',saluta:'👋 Greet and go',sfida:'⚔️ Challenge',tit:n=>'💬 '+n,
   fine:'«Your customs are different from ours. And that is right: every clan has its own.»',ciao:n=>`${n} greets you with a flick of the tail and goes back among the trees.`,
   cultura:{nebbia:['«None of us eats the heron: it is our ancestor, the first Mist cat was born from its feathers. Do you Fern cats eat everything you catch?»',
    '«When a Mist cat receives prey as a gift, they must give back two before the new moon. Otherwise they stay in debt, and debt is heavy. For you, is a gift just a gift?»',
    '«Each of our kits receives a secret name that only their mother knows. The name you call me is not my true name: whoever knows a cat’s true name has power over them.»',
    '«With us, kits belong to their mother’s family, and it is their mother’s brothers who teach them to hunt. With you the father counts more, right? Strange.»',
    '«In the mist, whoever is lost is a sacred guest: even an enemy must be fed and allowed to sleep one night, before becoming an enemy again.»',
    '«Our apprentices become warriors by spending a night alone in the marsh, without saying a word. You do it in a circle, at Tall Rock. Everyone has their own threshold.»'],
   pietre:['«When one of us dies, every cat of the clan brings a stone to where they rest. The pile grows, and their name remains. You take your dead beneath an oak, I have been told.»',
    '«We do not count moons. We count the seasons of warm stones and cold stones. To us you are young: three warm stones old.»',
    '«Our leader does not command: they speak last, after everyone has spoken in the circle. With you, the leader climbs the rock and decides alone?»',
    '«With us, whoever wins a duel gives something to the loser: that way you do not make an enemy forever. A victory without a gift brings bad luck.»',
    '«Every Stone cat carries a heart stone, found as a kit. If they lose it, they cannot take a mate until they find another.»',
    '«Before hunting we ask the prey for permission, in silence, and afterwards we thank it. Do you thank your prey?»']}},
  guaritore:{convoca:n=>`${n}, you have gathered the herbs and learned their secrets. Come to Tall Rock: it is time for your healer ceremony!`,cer:'🌿 Healer ceremony',pronto:n=>`«${n}, the clan is ready. Today you will become a healer.»`,
   malanni:{spina:'a thorn in their paw',pancia:'a bellyache',tosse:'a cough',zampa:'a sore paw',ferita:'a battle wound'},
   arriva:(n,m)=>`${n} comes limping, with ${m}. «Healer, will you help me?»`,arrivaN:(n,cl,m)=>`${n}, of the ${cl}, comes carefully closer, with ${m}. «In my clan they cannot cure me… will you help me, even though we are enemies?»`,
   cura:'🌿 Heal them with herbs',nonOra:'🙂 Not now',senza:'You have no herbs with you: gather some in the forest, then come back.',guarito:n=>`🌿 You healed ${n}. They thank you with a fond headbutt.`,guaritoN:n=>`🌿 You healed ${n}. «I will not forget it: from today you are no longer my enemy.»`},
  iniziazione:{gattino:(a,n)=>`${n}, come closer. The moons have made you grow: the time of your initiation has come. Today you will leave the nursery and become an apprentice.`,
   guerriero:(a,n)=>`${n}, the clan has seen you hunt and fight. The time of your initiation has come: today you will receive your warrior name.`,
   guaritore:(a,n)=>`${n}, you know the herbs and their secrets. The time of your initiation has come: today you will become a healer.`},
  entra:'Go in', profilo:{lune:n=>`🌙 ${n} moons`,forza:n=>`💪 strength ${n}`,umori:{fame:'Hungry',sete:'Thirsty',stanco:'Tired',ferito:'Hurt',incinta:'Expecting kits',felice:'Doing well'}},
  curio:'📜 Did you know?', luoghi:{lago:'Silver Lake',stagno:'pond',guado:'ford'},
  guida:{clic:'👉 Click: I will take you there',via:'🧭 Taking you there: use the arrows to take back control.',arrivo:'🧭 Here we are!',fatto:{bevi:()=>'💧 Now you have quenched your thirst',mangia:()=>'🍖 Now you have eaten',deposita:()=>'🐭 You brought your prey to the pile',dormi:()=>'😴 Now you sleep in your den',caccia:()=>'🐾 Now you chase the prey'},stop:'🧭 You took back control.',giro:'🧭 The hedge is closed here: let’s go round to the opening.',bloccato:'🧭 No way through here: going back, try another path.',nessuna:'🧭 I don’t know where to take you for this: read the tip in the box.',missione:'I have a mission for you!',dice:n=>`${n} is calling you`},
  titoloSpirito:'✨ Clan spirit',
  spiegaLunga:'A clan is not just a group of cats living close together: it is held together by its rites and its memory. The purple <b>✨ Spirit</b> gauge, at the bottom, measures how united your clan is.<br><br><b>How it fills up</b> (it slowly wears down by itself, about ten points every moon):<br>• listening to a story from the elder: +12<br>• telling a story to the kits: +10<br>• taking part in a rite at Tall Rock: +15<br>• praying for the ancestors at a den’s altar: +10<br>• reading the sacred paintings in the dens: +8<br>• singing together with a friend: +4<br><br><b>What it is for</b><br>• <b>In battle</b>: with high spirit the clan’s warriors fight together and are stronger, and so are you; with low spirit everyone fights for themselves, and you are all weaker.<br>• <b>Food</b>: with high spirit the hunters bring all their prey to the pile, for everyone; with low spirit <b>everyone eats for themselves</b>, and the pile stays empty.<br>• With very high spirit you also heal faster.',
  boxSpirito:['The glue of rites','For the sociologist Émile Durkheim (<i>The Elementary Forms of Religious Life</i>, 1912) collective rites produce an «effervescence» that makes everyone feel part of something larger, and renews the bonds of the group.'],
  capito:'Got it',
  perSe:'eats it alone', spiritoBassoAnnuncio:'😿 Low spirit: everyone eats for themselves!',
  amore:{proponi:'💞 Suggest having kits together',si:'💞 Yes, I consent',no:'🙂 No, thank you',
   arriva:(n,f)=>`${n} comes close, purrs and gently rubs ${f?'her':'his'} muzzle against yours. Then ${f?'she':'he'} looks you in the eyes: ${f?'she':'he'} would like to have kits with you, if you want it too.`,
   chiediConsenso:'Having kits is a choice made by two: both must say yes. Do you consent?',
   accetta:n=>`«Yes, I consent too», answers ${n}, rubbing noses with you.`,
   rifiutoTuo:n=>`${n} lowers their ears, then gives you a fond little headbutt. «All right, I understand. Let’s stay friends.»`,
   rifiuti:{partner:n=>`«I care about you, ${n}, but I already have a life partner, and I want to stay by their side. Let’s stay friends, shall we?»`,
    guerra:n=>`«You are kind, ${n}, but I have chosen to give my life to war and to the clan. I don’t want kits, at least for now. Let’s stay friends!»`,
    presto:n=>`«That’s sweet, ${n}, but we hardly know each other yet. Grooming together, playing, hunting… then we’ll see.»`},
   titolo:'💞 A proposal',
   box:['Consent','In every choice of love, both must say yes, and it is also right to say no, kindly. A refusal is not an insult: everyone has their own path.'],
   cuccioli:'You both agree: you will have kits.'},
  motivi:{cura:'you healed a cat',compagnia:'you spent time with a clanmate',racconto:'you listened to a story',tramanda:'you passed a story on to the kits',coro:'you sang together',rito:'you took part in a rite',pittura:'you read the sacred paintings',preghiera:'you prayed for the ancestors'},
  spiega:'✨ <b>Clan spirit</b> is the purple bar: it measures how much the clan’s traditions are yours. It wears down very slowly and fills up with rites and memory: listening to and telling stories, looking at the paintings in the dens, praying for the ancestors at the altar, taking part in ceremonies, singing together. With high spirit you are stronger in battle and heal faster.',
  basso:'Your clan spirit is fading. Go into a den and pray at the altar, or ask the elder for a story.',
  salv:{titolo:'💾 Your games',scegli:'Choose a game to continue, or an empty slot to start a new one.',vuoto:i=>`Empty slot — ✨ new game`,pieno:(i,n,g)=>`«${n}» — ${g}`,annulla:'Back to the game',
   nome:'Name of the game',chiedi:'What do you want to call this game?',ok:'Start',def:i=>`Game ${i}`,
   occupato:n=>`The game «${n}»`,carica:'▶ Continue this game',cancella:'🗑 Delete it and start again here',sicuro:n=>`Do you really want to delete «${n}»? It cannot be recovered.`,si:'Yes, delete',no:'No',bottone:'💾 Games',nuova:'✨ New game',cancellaMenu:'🗑 Delete games',qualeCancellare:'Which game do you want to delete? It cannot be recovered.',nessuna:'There are no saved games.',pieni:'All five slots are full: delete a game to start a new one.'}},
 fr:{azione:'Lire les peintures sur la paroi',titolo:'🕯️ Les peintures de la tanière',fonte:'Ce que racontent les sources',altra:'Regarder la peinture voisine',basta:'Retour au clan',tutte:'Tu as vu toutes les peintures de cette tanière : chaque tanière en garde d’autres.',letta:t=>`🕯️ Tu as lu la légende « ${t} » sur la paroi de la tanière.`,
  esci:'Sortir de la tanière',sgrida:k=>k?'Descends tout de suite de la Haute Roche ! Là-haut, seuls montent les guerriers et les guérisseurs.':'Descends de la Haute Roche ! Un apprenti n’a pas encore le droit d’y monter : seuls les guerriers et les guérisseurs.',salto:'Super saut par-dessus la haie',prega:'🙏 Prier pour les ancêtres disparus',pregato:'Tu as déjà prié ici pendant cette lune : reviens plus tard.',
  preghiera:'Tu t’accroupis devant l’autel, parmi les petites lumières. Tu fermes les yeux et tu penses aux chats du clan morts avant toi : leurs noms, leurs chasses, leurs histoires. La fumée des bougies monte vers la voûte.',
  boxPreghiera:['Les fêtes des morts','À Rome, en février, les familles célébraient les <i>Parentalia</i> : pendant neuf jours, elles portaient sur les tombes des ancêtres des fleurs, du blé, du sel et du pain trempé dans le vin ; le poète Ovide les décrit dans les <i>Fastes</i> (livre II). Au Mexique, pour le Día de Muertos, on prépare des autels avec des photos, des bougies et les plats préférés des défunts. Se souvenir des morts garde une communauté unie.'],
  spirito:'Esprit du clan', piu:(n,m)=>`✨ Esprit du clan +${n} : ${m}.`,
  nemico:{spazio:n=>'affronter '+n,titolo:n=>'⚔️ '+n,incontro:(n,cl,f)=>`${n}, ${f?'une guerrière':'un guerrier'} du ${cl}, te barre la route, le poil hérissé.`,
   combatti:'⚔️ Combattre',scappa:'💨 Fuir',amici:'🤝 Proposer de devenir amis',cuccioli:'💞 Proposer d’avoir des chatons ensemble',
   vinto:n=>`🏆 Tu as gagné ! ${n} s’enfuit vers son camp.`,perso:n=>`😿 Tu as perdu : ${n} a eu le dessus. Tu te retires avec quelques griffures.`,
   fuggito:'💨 Vite, à travers la forêt !',presoInFuga:n=>`${n} te rattrape : il faut se battre !`,
   amiciSi:n=>`🤝 ${n} rabat son poil et te touche le nez : « Nos clans sont ennemis, mais pas nous deux. » Désormais, ce chat ne t’attaquera plus.`,
   amiciNo:n=>`${n} crache : « Amis ? Avec un chat de la Fougère ? Jamais ! » Et te saute dessus.`,
   cucciNo:n=>`${n} te regarde longuement, puis secoue doucement la tête : « Nos clans sont ennemis, et mon cœur reste avec mon clan. Mais je ne t’oublierai pas. »`,
   cucciSi:n=>`${n} te regarde longuement, puis s’approche et frotte son museau contre le tien : « Nos clans sont ennemis… mais j’y consens, si tu le désires aussi. »`},
  ogg:{raccogli:n=>'Ramasser '+n,soloGuerrieri:'Seuls les guerriers peuvent prendre les armes',preso:(n,d)=>`🎒 Tu as ramassé ${n}. ${d}`,rubato:(n,cl)=>`🏺 Tu as volé ${n} au ${cl} ! Si on t’a vu, on te poursuivra.`,visto:n=>`😾 ${n} t’a vu voler !`,motivoFurto:'veut venger le vol d’un objet sacré',inventario:'🎒 Inventaire',vuoto:'Encore vide : explore la forêt.',offri:n=>'🎁 Offrir à l’autel : '+n,offerto:n=>`🎁 Tu as offert ${n} à l’autel.`,forza:n=>`+${n} force`,arma:'arme',reperto:'trouvaille',culto:'objet de culte'},
  guadagni:{fame:'🍖 Tu as bien mangé',sete:'💧 Ta soif est apaisée',energia:'😴 Tu as repris des forces',salute:'❤️ Tu te sens mieux',spirito:'✨ L’esprit du clan se renforce',forza:'💪 Tu deviens plus fort'},
  clicInd:{fame:'Tu as faim : où vas-tu ?',mucchio:n=>`🍖 Au tas de proies (${n})`,caccia:'🐾 À la chasse',acqua:'Clique : vers l’eau',salute:'Clique : chez le guérisseur',curato:n=>`🌿 ${n} te soigne avec les herbes de la forêt.`,energia:'Clique : dormir',cibo:'Clique : manger',spirito:'Clique : prier'},
  verso:{tit:'🎖️ Pour devenir guerrier',titG:'🎖️ Pour devenir guérisseur',titA:'🎖️ Pour devenir apprenti',b:{lune:'🌙 lunes',racconti:'📜 récits',prede:'🐭 proies',allenamenti:'⚔️ entraînements',erbe:'🌿 herbes',cure:'🩹 soins'},oppure:n=>`Batailles gagnées : ${n} sur 3 (avec 3 victoires, le chef t’appelle)`,pronto:'✅ Prêt ! Va à la Haute Roche'},
  convoca:n=>`${n}, tu as combattu avec courage. Viens à la Haute Roche : c’est le moment de ta cérémonie de guerrier !`,convocaAnn:'🌟 Tu es convoqué à la Haute Roche !',
  manca:(n,l)=>`Ne te décourage pas, ${n}. Pour devenir guerrier, il te manque : ${l}. Ou gagne trois batailles, et le chef t’appellera.`,
  visita:{storia:n=>`${n} s’approche et s’assoit devant toi : « Tu me racontes une histoire ? »`,coccole:n=>`${n} s’approche en ronronnant et frotte sa tête contre ton flanc : un câlin, s’il te plaît.`,racconta:'📖 Raconter une histoire',coccola:'😽 Faire un câlin',nonOra:'🙂 Pas maintenant',ok:n=>`${n} te salue la queue bien haute.`},
  get canto(){ return pick(['🎶 Miaooooom…','🎶 Miaaaao…','🎶 Mrrrau…','🎶 Miaoooo…']); },
  pausa:{tit:'⏸ Pause',testo:'Le jeu est en pause. Que veux-tu faire ?',continua:'▶ Continuer',salva:'💾 Sauvegarder la partie',partite:'📂 Parties',esci:'🚪 Retour à l’écran titre',salvata:'💾 Partie sauvegardée'},
  risveglio:n=>`🌿 ${n} te soigne avec des cataplasmes d’herbes et te lèche le front. Peu à peu, tu reprends des forces.`,
  funerale:{caduto:n=>`🕯️ Le clan a perdu ${n} au combat.`,chiama:n=>`Le clan a perdu ${n}. Venez tous à la Haute Roche : nous lui dirons adieu ensemble.`,ann:'🕯️ Funérailles à la Haute Roche',
   tit:n=>'🕯️ L’adieu à '+n,discorso:(c,n,r)=>`${c} monte sur la Haute Roche. Le clan se tait. « Aujourd’hui, nous disons adieu à ${n}, ${r} du Clan de la Fougère. Ce chat a défendu le clan jusqu’à son dernier souffle. Que les étoiles accueillent son esprit parmi les ancêtres. »<br><br>Les chats baissent la tête, l’un après l’autre. Puis vient ton tour.`,
   veglia:'🕯️ Veiller à ses côtés',fiore:'🌸 Déposer une fleur',storia:'📜 Raconter une de ses histoires',
   fatto:{veglia:'Tu restes près du compagnon tombé jusqu’à l’aube, en silence.',fiore:'Tu déposes une fleur des champs à ses côtés. D’autres chats font de même.',storia:'Tu racontes au clan une de ses chasses mémorables. Quelqu’un sourit à travers les larmes.'},
   fine:n=>`Les anciens portent ${n} sous le grand chêne, où reposent les ancêtres du clan. Son nom ne sera pas oublié.`,
   box:['Les funérailles d’Hector','Dans le dernier chant de l’<i>Iliade</i> d’Homère, les Troyens pleurent Hector pendant neuf jours ; le dixième, ils brûlent son corps sur le bûcher, puis recueillent ses os dans une urne d’or et élèvent un tertre. Le poème s’achève ainsi : « Ainsi furent célébrées les funérailles d’Hector ».'],
   motivo:'tu as honoré un compagnon tombé',ricordo:n=>` Tu penses aussi à ${n}, tombés pour le clan.`},
  alMassimo:'✨ L’esprit du clan est à son comble',
  contaPrede:(a,b)=>`🐭 Proies : ${a} sur ${b}`,
  nemiche:{nome:cl=>'tanière du '+cl,profana:'Profanation ! Hors de notre tanière !',ann:'😾 Profanation !',log:cl=>`😾 C’est une tanière du ${cl} : ses chats crient à la profanation ! Dedans, ils ne peuvent pas te toucher, mais dehors…`,
   ruba:'🏺 Voler l’objet sacré sur l’autel',vuoto:'L’autel est vide : l’objet sacré a déjà été pris.',insegue:cl=>`😾 Les chats du ${cl} te poursuivent !`,motivo:'veut venger sa tanière profanée'},
  vita:{vecchio:n=>`${n}, tu as vu d’innombrables lunes et tu ne peux plus combattre. Mais ta sagesse vaut plus que mille griffes : raconte tes histoires aux jeunes.`,vecchioAnn:'🍂 Te voilà parmi les anciens',
   tit:'🌅 Le long voyage',sonno:n=>`Un soir, après un repas avec le clan, ${n} s’endort dans la tanière des guerriers, en paix, et ne se réveille plus. Son heure est venue, comme elle vient pour chaque chat. Le clan se rassemble pour un dernier hommage.`,
   onore:'🕯️ Le rite d’honneur',discorso:(c,n,l,pr,b)=>`${c} parle devant tout le clan : « ${n} a vécu ${l} lunes.${pr||b?` Ce chat a apporté ${pr} proies au tas et gagné ${b} batailles.`:''} Il a aimé le clan, et le clan l’a aimé. Maintenant, son esprit court parmi les étoiles, avec les ancêtres. »<br><br>Les chats baissent la tête ensemble. Puis, l’un après l’autre, ils effleurent son pelage du bout du nez.`,
   box:['Le mythe d’Er','À la fin de la <i>République</i>, Platon raconte le mythe d’Er : les âmes des morts, après un long voyage, choisissent une nouvelle vie, boivent l’eau du fleuve de l’Oubli et renaissent. Pour beaucoup de peuples, la mort n’est pas une fin, mais un passage dans un grand cycle.'],
   rinasci:'🌱 Ton esprit renaît',nuova:'🌱 Une nouvelle vie',nato:(n,m)=>`Dans la pouponnière est né un chaton : <b>${n}</b>. Sa mère est ${m}. Dans ses yeux, il y a quelque chose d’ancien, comme un souvenir qu’il ne sait pas avoir… Ton esprit poursuit son chemin dans le Clan de la Fougère.`,
   comincia:'Commençons !',antenato:n=>`🌟 ${n} veille désormais sur le clan depuis les étoiles.`},
  arte:['Peinture rupestre','Estampe japonaise','Vase grec à figures noires','Fresque égyptienne','La Joconde chatte','Peinture chinoise à l’encre','Mosaïque romaine','Vitrail gothique','Enluminure médiévale','Pop art'],
  di:'sur', battaglie:'Batailles gagnées',
  bocca:(n)=>`🐭 Dans la gueule : ${n} sur 3`,
  stranieri:{arriva:(n,cl)=>`${n}, du ${cl}, sort d’entre les arbres. Pas de crachat : ce chat t’observe avec prudence et curiosité.`,parla:'💬 Parler',saluta:'👋 Saluer et repartir',sfida:'⚔️ Défier',tit:n=>'💬 '+n,
   fine:'« Vos coutumes sont différentes des nôtres. Et c’est bien ainsi : chaque clan a les siennes. »',ciao:n=>`${n} te salue d’un mouvement de queue et retourne entre les arbres.`,
   cultura:{nebbia:['« Chez nous, personne ne mange le héron : c’est notre ancêtre, le premier chat de la Brume est né de ses plumes. Vous, la Fougère, vous mangez tout ce que vous attrapez ? »',
    '« Quand un chat de la Brume reçoit une proie en cadeau, il doit en rendre deux avant la nouvelle lune. Sinon il reste en dette, et la dette pèse. Chez vous, un cadeau n’est qu’un cadeau ? »',
    '« Chacun de nos chatons reçoit un nom secret que seule sa mère connaît. Le nom par lequel tu m’appelles n’est pas mon vrai nom : qui connaît le vrai nom d’un chat a du pouvoir sur lui. »',
    '« Chez nous, les petits appartiennent à la famille de leur mère, et ce sont les frères de la mère qui leur apprennent à chasser. Chez vous, c’est le père qui compte le plus, non ? Bizarre. »',
    '« Dans la brume, celui qui se perd est un hôte sacré : même un ennemi doit être nourri et laissé dormir une nuit, avant de redevenir un ennemi. »',
    '« Nos apprentis deviennent guerriers en passant une nuit seuls dans le marais, sans dire un mot. Vous, vous le faites en cercle, à la Haute Roche. Chacun a son seuil. »'],
   pietre:['« Quand l’un de nous meurt, chaque chat du clan apporte une pierre là où il repose. Le tas grandit, et son nom demeure. Vous, vous portez vos morts sous un chêne, m’a-t-on dit. »',
    '« Nous ne comptons pas les lunes. Nous comptons les saisons des pierres chaudes et des pierres froides. Pour nous, tu es jeune : trois pierres chaudes. »',
    '« Notre chef ne commande pas : il parle en dernier, après que tout le monde a parlé en cercle. Chez vous, le chef monte sur la roche et décide seul ? »',
    '« Chez nous, celui qui gagne un duel offre quelque chose au vaincu : ainsi, on ne se fait pas un ennemi pour toujours. Une victoire sans cadeau porte malheur. »',
    '« Chaque chat des Pierres porte une pierre du cœur, trouvée quand il était chaton. S’il la perd, il ne peut pas prendre de compagne avant d’en trouver une autre. »',
    '« Avant de chasser, nous demandons la permission à la proie, en silence, et après nous la remercions. Vous remerciez vos proies ? »']}},
  guaritore:{convoca:n=>`${n}, tu as cueilli les herbes et appris leurs secrets. Viens à la Haute Roche : c’est le moment de ta cérémonie de guérisseur !`,cer:'🌿 Cérémonie du guérisseur',pronto:n=>`« ${n}, le clan est prêt. Aujourd’hui, tu deviendras guérisseur. »`,
   malanni:{spina:'a une épine dans la patte',pancia:'a mal au ventre',tosse:'tousse',zampa:'a une patte douloureuse',ferita:'est blessé après une bataille'},
   arriva:(n,m)=>`${n} arrive en boitant : ce chat ${m}. « Tu m’aides, toi qui connais les herbes ? »`,arrivaN:(n,cl,m)=>`${n}, du ${cl}, s’approche prudemment : ce chat ${m}. « Dans mon clan, on n’arrive pas à me soigner… tu m’aides, même si nous sommes ennemis ? »`,
   cura:'🌿 Le soigner avec les herbes',nonOra:'🙂 Pas maintenant',senza:'Tu n’as pas d’herbes sur toi : cueilles-en dans la forêt, puis reviens.',guarito:n=>`🌿 Tu as soigné ${n}. Ce chat te remercie d’un petit coup de tête affectueux.`,guaritoN:n=>`🌿 Tu as soigné ${n}. « Je ne l’oublierai pas : à partir d’aujourd’hui, tu n’es plus mon ennemi. »`},
  iniziazione:{gattino:(a,n)=>`${n}, approche. Les lunes t’ont fait grandir : le moment de ton initiation est venu. Aujourd’hui, tu quitteras la pouponnière et tu deviendras apprenti.`,
   guerriero:(a,n)=>`${n}, le clan t’a vu chasser et combattre. Le moment de ton initiation est venu : aujourd’hui, tu recevras ton nom de guerrier.`,
   guaritore:(a,n)=>`${n}, tu connais les herbes et leurs secrets. Le moment de ton initiation est venu : aujourd’hui, tu deviendras guérisseur.`},
  entra:'Entrer', profilo:{lune:n=>`🌙 ${n} lunes`,forza:n=>`💪 force ${n}`,umori:{fame:'A faim',sete:'A soif',stanco:'A sommeil',ferito:'A une blessure',incinta:'Attend des chatons',felice:'Va bien'}},
  curio:'📜 Le savais-tu ?', luoghi:{lago:'Lac d’Argent',stagno:'étang',guado:'gué'},
  guida:{clic:'👉 Clique : je t’y emmène',via:'🧭 Je t’accompagne : utilise les flèches pour reprendre la main.',arrivo:'🧭 Nous y voilà !',fatto:{bevi:o=>`💧 Te voilà désaltéré${o==='a'?'e':''}`,mangia:()=>'🍖 Tu as mangé',deposita:()=>'🐭 Tu as apporté ta proie au tas',dormi:()=>'😴 Tu dors dans ta tanière',caccia:()=>'🐾 Tu poursuis la proie'},stop:'🧭 Tu as repris la main.',giro:'🧭 La haie est fermée ici : faisons le tour jusqu’à l’ouverture.',bloccato:'🧭 On ne passe pas par ici : je reviens en arrière, essaie un autre chemin.',nessuna:'🧭 Je ne sais pas où t’emmener pour cela : lis le conseil dans l’encadré.',missione:'J’ai une mission pour toi !',dice:n=>`${n} t’appelle`},
  titoloSpirito:'✨ L’Esprit du clan',
  spiegaLunga:'Un clan n’est pas seulement un groupe de chats qui vivent les uns près des autres : ce qui le tient uni, ce sont ses rites et sa mémoire. La jauge violette <b>✨ Esprit</b>, en bas, mesure l’unité de ton clan.<br><br><b>Comment elle se remplit</b> (elle baisse lentement toute seule, d’environ dix points à chaque lune) :<br>• écouter un récit de l’ancien : +12<br>• raconter une histoire aux chatons : +10<br>• participer à un rite à la Haute Roche : +15<br>• prier pour les ancêtres à l’autel d’une tanière : +10<br>• lire les peintures sacrées des tanières : +8<br>• miauler en chœur avec un ami : +4<br><br><b>À quoi elle sert</b><br>• <b>Au combat</b> : avec un esprit élevé, les guerriers du clan combattent unis et sont plus forts, toi aussi ; avec un esprit bas, chacun se bat pour soi, et vous êtes plus faibles.<br>• <b>La nourriture</b> : avec un esprit élevé, les chasseurs apportent toutes leurs proies au tas, pour tous ; avec un esprit bas, <b>chacun mange pour soi</b>, et le tas reste vide.<br>• Avec un esprit très élevé, tu guéris aussi plus vite.',
  boxSpirito:['Le ciment des rites','Pour le sociologue Émile Durkheim (<i>Les Formes élémentaires de la vie religieuse</i>, 1912), les rites collectifs produisent une « effervescence » qui fait sentir à chacun qu’il appartient à quelque chose de plus grand, et renouvelle les liens du groupe.'],
  capito:'J’ai compris',
  perSe:'mange pour soi', spiritoBassoAnnuncio:'😿 Esprit bas : chacun mange pour soi !',
  amore:{proponi:'💞 Proposer d’avoir des chatons ensemble',si:'💞 Oui, je consens',no:'🙂 Non, merci',
   arriva:(n,f)=>`${n} s’approche, ronronne et frotte doucement son museau contre le tien. Puis ${f?'elle':'il'} te regarde dans les yeux : ${f?'elle':'il'} aimerait avoir des chatons avec toi, si tu le désires aussi.`,
   chiediConsenso:'Avoir des chatons, c’est un choix qui se fait à deux : il faut le oui de chacun. Est-ce que tu consens ?',
   accetta:n=>`« Oui, j’y consens moi aussi », répond ${n}, en frottant son nez contre le tien.`,
   rifiutoTuo:n=>`${n} baisse les oreilles, puis te donne un petit coup de tête affectueux. « D’accord, je comprends. Restons amis. »`,
   rifiuti:{partner:n=>`« Je t’aime bien, ${n}, mais mon cœur est déjà pris, et je veux rester à ses côtés. Restons amis, d’accord ? »`,
    guerra:n=>`« C’est gentil, ${n}, mais j’ai choisi de consacrer ma vie à la guerre et au clan. Je ne veux pas de chatons, du moins pour l’instant. Restons amis ! »`,
    presto:n=>`« Ça me fait plaisir, ${n}, mais nous nous connaissons encore peu. Faire notre toilette ensemble, jouer, chasser… et puis on verra. »`},
   titolo:'💞 Une proposition',
   box:['Le consentement','Dans tout choix d’amour, il faut le oui des deux, et il est juste aussi de dire non, avec gentillesse. Un refus n’est pas une offense : chacun a son chemin.'],
   cuccioli:'Vous êtes d’accord tous les deux : vous aurez des chatons.'},
  motivi:{cura:'tu as soigné un chat',compagnia:'tu as passé du temps avec un compagnon',racconto:'tu as écouté un récit',tramanda:'tu as transmis une histoire aux chatons',coro:'vous avez chanté ensemble',rito:'tu as participé à un rite',pittura:'tu as lu les peintures sacrées',preghiera:'tu as prié pour les ancêtres'},
  spiega:'✨ <b>L’Esprit du clan</b> est la jauge violette : elle mesure combien les traditions du clan sont les tiennes.',
  basso:'L’esprit de ton clan s’éteint. Entre dans une tanière et prie à l’autel, ou demande un récit à l’ancien.',
  salv:{titolo:'💾 Tes parties',scegli:'Choisis une partie à continuer, ou un emplacement vide pour en commencer une nouvelle.',vuoto:i=>`Emplacement vide — ✨ nouvelle partie`,pieno:(i,n,g)=>`« ${n} » — ${g}`,annulla:'Retour au jeu',
   nome:'Le nom de la partie',chiedi:'Comment veux-tu appeler cette partie ?',ok:'Commencer',def:i=>`Partie ${i}`,
   occupato:n=>`La partie « ${n} »`,carica:'▶ Continuer cette partie',cancella:'🗑 L’effacer et recommencer ici',sicuro:n=>`Veux-tu vraiment effacer « ${n} » ? Impossible de la récupérer.`,si:'Oui, effacer',no:'Non',bottone:'💾 Parties',nuova:'✨ Nouvelle partie',cancellaMenu:'🗑 Effacer des parties',qualeCancellare:'Quelle partie veux-tu effacer ? Impossible de la récupérer.',nessuna:'Il n’y a pas de parties enregistrées.',pieni:'Les cinq emplacements sont pleins : efface une partie pour en commencer une nouvelle.'}},
}[LINGUA];
// il punto davanti all'altare, verso il fondo della tana (l'ingresso guarda a sud)
function puntoStele(d){ return {x:d.x,y:d.y-d.r*0.5+3.5}; } // davanti all'altare, che è solido
function leggiLeggenda(k,i){
 const lista=LEGGENDE[k]; if(!lista) return;
 G.leggende=G.leggende||{}; const viste=G.leggende[k]=G.leggende[k]||[];
 if(i==null){ i=lista.findIndex((_,j)=>!viste.includes(j)); if(i<0) i=Math.floor(Math.random()*lista.length); }
 const L1=lista[i][LINGUA]; if(!viste.includes(i)){ viste.push(i); log(TESTI_LEGG.letta(L1.t),'#ffd9a0'); spirito(8,'pittura'); }
 setPosa(G.p,'siede',4);
 const prossima=(i+1)%lista.length, bt=[{t:'🕯️ '+TESTI_LEGG.altra,f:()=>leggiLeggenda(k,prossima)},{t:TESTI_LEGG.prega,f:()=>prega(k)},...offerte(),{t:TESTI_LEGG.basta}];
 const ar=artGatto(); modale(`${TESTI_LEGG.titolo}${LINGUA==='fr'?' : ':': '}${L1.t}`,`<figure style="margin:4px 0 8px"><img src="${ar.src}" style="display:block;width:72%;margin:0 auto;border-radius:10px;box-shadow:0 3px 10px rgba(0,0,0,.5)"><figcaption style="font:italic 12px system-ui;color:#e8d9a8;text-align:center;margin-top:3px">🎨 ${ar.nome}</figcaption></figure><i>${L1.x}</i>`+box(TESTI_LEGG.fonte,L1.s)+(viste.length>=lista.length?`<br><small>${TESTI_LEGG.tutte}</small>`:''),bt);
}

// ================== lo Spirito del clan ==================
// richiesta del 12 novembre 2026
function spirito(n,motivo){
 const p=G&&G.p; if(!p) return; if(p.spirito==null) p.spirito=60;
 if(p.spirito>=99.5){ mostraToast(TESTI_LEGG.alMassimo,'#b48cff'); log(TESTI_LEGG.alMassimo,'#d9b8ff'); return; }
 p.spirito=Math.min(100,p.spirito+n);
 flo(p.x,p.y-34,`+${n} ✨`,'#d9b8ff');
 log(TESTI_LEGG.piu(n,TESTI_LEGG.motivi[motivo]||motivo),'#d9b8ff');
}
function bonusSpirito(){ const v=G&&G.p&&G.p.spirito; const b=v==null?0:v>=70?3:v>=40?1:v<20?-1:0; return b+bonusArma(); } // lo spirito e l'arma migliore dell'inventario
function prega(k){
 const p=G.p; G.preghiere=G.preghiere||{};
 const n=G.preghiere[k]&&G.t-G.preghiere[k]<MOON?4:10; // pregare dà sempre spirito: di più la prima volta in una luna
 G.preghiere[k]=G.t;
 avviaScena('dorme',[p],2.4,()=>{ spirito(n,'preghiera'); modale(TESTI_LEGG.prega,`<i>${TESTI_LEGG.preghiera}${(G.caduti||[]).length?TESTI_LEGG.funerale.ricordo(G.caduti.slice(-3).join(', ')):''}</i>`+box(TESTI_LEGG.boxPreghiera[0],TESTI_LEGG.boxPreghiera[1]),[{t:TESTI_LEGG.basta}]); });
}

// ================== entrare e uscire dalle tane: cambio di scena ==================
const SALA_S=7; let transizione=false;
const velo=document.createElement('div'); velo.style.cssText='position:fixed;inset:0;background:#000;opacity:0;pointer-events:none;transition:opacity .35s;z-index:50';
addEventListener('DOMContentLoaded',()=>document.body.appendChild(velo));
function passaggio(fatto){
 transizione=true; velo.style.opacity=1;
 setTimeout(()=>{ fatto(); if(window.R3D) R3D.cam3.init=false; for(const k in keys) keys[k]=false; setTimeout(()=>{ velo.style.opacity=0; transizione=false; },120); },380);
}
function entraTana(k){ const d=L[k], p=G.p; if(d.clan) profanazione(k);
 passaggio(()=>{ G.dentro=k; p.x=d.x; p.y=d.y+d.r*0.5; p.vx=p.vy=0; p.dir=-Math.PI/2; p.uscito=null; if(window.R3D) R3D.cam3.yaw=Math.PI; // entrando, la telecamera guarda sempre l'altare
  annuncia('🕯️ '+d.nome.charAt(0).toUpperCase()+d.nome.slice(1),'#ffd9a0'); }); }
function esciTana(){ const k=G.dentro, d=L[k], p=G.p; if(!d){ G.dentro=null; return; } if(d.clan) setTimeout(()=>inseguimento(d.clan),500);
 passaggio(()=>{ G.dentro=null; p.x=d.x; p.y=d.y+d.r+16; p.vx=p.vy=0; p.dir=Math.PI/2; p.uscito=k; }); }
function vincoloTana(p,ox,oy,dt){
 if(p.spirito==null) p.spirito=60;
 p.spirito=Math.max(0,p.spirito-dt*10/MOON); // una decina di punti in una luna
 if(p.spirito>=70&&p.salute<100&&!p.ferito) p.salute=Math.min(100,p.salute+dt*0.25);
 if(p.spirito<25) consiglio('spiritoBasso',TESTI_LEGG.basso,90);
 if(occupato()){ if(G.cerimonia) G.cerimonia.fino+=dt; if(G.missione) G.missione.fino+=dt; if(G.colonia&&!G.colonia.partita) G.colonia.fino+=dt; } // in battaglia i tempi degli altri eventi si fermano
 if(!G.spiritoSpiegato&&G.t>8&&puoEvento()){ segnaEvento(); spiegaSpirito(); }
 corteggiamento(dt); curaOggetti(); dopoBattaglie(p);
 if(p.guida&&!transizione&&!p.anim) guidaPasso(p,dt);
 if(transizione) return;
 if(p.anim){ animaSalto(p,dt); return; }
 if(G.dentro){ const d=L[G.dentro]; if(!d){ G.dentro=null; return; }
  if(p.auto||G.colonia&&false){ esciTana(); return; }
  p.x=ox+(p.x-ox)/SALA_S; p.y=oy+(p.y-oy)/SALA_S; // nella sala si cammina a passo normale: la sala è la tana ingrandita
  const dd=Math.hypot(p.x-d.x,p.y-d.y), m=d.r*0.92;
  if(dd>m){ if(p.y-d.y>d.r*0.7&&!scena) esciTana(); else { p.x=d.x+(p.x-d.x)/dd*m; p.y=d.y+(p.y-d.y)/dd*m; } }
  arrediSolidi(p,G.dentro,d);
  return; }
 const inScena=scena&&scena.attori.includes(p);
 if(inScena){ if(p.sopra){ p.sopra=false; p.elev=0; } return; }
 rocciaAlta(p);
 if(p.anim) return;
 siepe(p,ox,oy,dt);
 solidiBosco(p);
 if(scena||p.auto) return;
 for(const k of [...TANE,...taneNemiche()]){ const d=L[k], dd=Math.hypot(p.x-d.x,p.y-d.y), m=d.r*0.85;
  if(p.uscito===k&&dd>d.r*1.4) p.uscito=null;
  if(dd<m){ if(p.y-d.y>d.r*0.25&&p.uscito!==k&&Math.hypot(ox-d.x,oy-d.y)>=m){ entraTana(k); return; } p.x=d.x+(p.x-d.x)/(dd||1)*m; p.y=d.y+(p.y-d.y)/(dd||1)*m; } } // da fuori la tana è solida: si entra soltanto dall'imbocco, a sud // si entra soltanto camminando dentro, non se una scena ci posa il gatto
}
function contestoTana(){ const p=G.p, d=L[G.dentro];
 if(!d){ const o=G.oggetti&&oggettoVicino(p); if(o) return {t:TO().raccogli(nomeOgg(o.tipo)),f:()=>raccogliOgg(o)};
  { const cg=typeof colossoVicino==='function'&&colossoVicino(p); if(cg) return cg; } // il grande gatto di pietra (js/storie.js)
  if(p.rango!=='gattino'&&!p.anim&&!p.sopra&&siepeVicina(p)) return {t:TESTI_LEGG.salto,f:superSalto}; return undefined; }
 { const o=G.oggetti&&oggettoVicino(p); if(o) return {t:TO().raccogli(nomeOgg(o.tipo)),f:()=>raccogliOgg(o)}; } // un oggetto dentro la tana
 if(d.clan&&Math.hypot(p.x-puntoStele(d).x,p.y-puntoStele(d).y)<15) return {t:TESTI_LEGG.nemiche.ruba,f:()=>rubaAltare(G.dentro)};
 if(Math.hypot(p.x-puntoStele(d).x,p.y-puntoStele(d).y)<9) return {t:TESTI_LEGG.azione,f:()=>leggiLeggenda(G.dentro)};
 if(p.y-d.y>d.r*0.6) return {t:TESTI_LEGG.esci,f:esciTana};
 return undefined; }

// ================== cinque partite salvate, ciascuna con il suo nome ==================
// richiesta del 12 novembre 2026
let SLOT=null, NOME_SLOT=null;
const chiaveSlot=i=>KEY+'_'+i;
function leggiSlot(i){ try{ const s=localStorage.getItem(chiaveSlot(i)); return s?JSON.parse(s):null; }catch(e){ return null; } }
function salvaSlot(){ if(!G||SLOT==null) return; try{ G.nomeSalvataggio=G.nomeSalvataggio||NOME_SLOT||TESTI_LEGG.salv.def(SLOT); G.salvatoIl=Date.now(); localStorage.setItem(chiaveSlot(SLOT),JSON.stringify(G)); }catch(e){ if(window.REG) REG.erroreSalvataggio(e); } }
function caricaSlot(){ return SLOT==null?null:leggiSlot(SLOT); }
function migraVecchia(){ try{ const v=localStorage.getItem(KEY); if(!v) return; for(let i=1;i<=5;i++) if(localStorage.getItem(chiaveSlot(i))) return;
  const s=JSON.parse(v); s.nomeSalvataggio=s.p?nome(s.p):TESTI_LEGG.salv.def(1); localStorage.setItem(chiaveSlot(1),JSON.stringify(s)); }catch(e){} }
function menuSalvataggi(allAvvio){
 migraVecchia(); if(allAvvio&&riapriDopoRicarica()) return; const T=TESTI_LEGG.salv, bt=[];
 for(let i=1;i<=5;i++){ const s=leggiSlot(i);
  if(s&&s.p){ const quando=s.salvatoIl?new Date(s.salvatoIl).toLocaleString(LINGUA,{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'}):'';
   bt.push({t:T.pieno(i,s.nomeSalvataggio||T.def(i),nome(s.p)+(quando?' · '+quando:'')),f:()=>sceltaPiena(i,s,allAvvio)}); }
  else bt.push({t:T.vuoto(i),f:()=>chiediNome(i)}); }
 const vuoti=[1,2,3,4,5].filter(i=>!(leggiSlot(i)||{}).p), pieni=[1,2,3,4,5].filter(i=>(leggiSlot(i)||{}).p);
 bt.push({t:T.nuova,f:()=>vuoti.length?chiediNome(vuoti[0]):modale(T.titolo,T.pieni,[{t:T.cancellaMenu,f:()=>menuCancella(allAvvio)},{t:'↩',f:()=>menuSalvataggi(allAvvio)}])});
 if(pieni.length) bt.push({t:T.cancellaMenu,f:()=>menuCancella(allAvvio)});
 if(!allAvvio) bt.push({t:T.annulla});
 modale(T.titolo,T.scegli,bt);
}
function menuCancella(allAvvio){ const T=TESTI_LEGG.salv, bt=[];
 for(let i=1;i<=5;i++){ const s=leggiSlot(i); if(!(s&&s.p)) continue; const n=s.nomeSalvataggio||T.def(i);
  bt.push({t:'🗑 «'+n+'» — '+nome(s.p),f:()=>modale(T.cancellaMenu,T.sicuro(n),[{t:T.si,f:()=>{ try{ localStorage.removeItem(chiaveSlot(i)); localStorage.removeItem(KEY+'_reg_'+i); }catch(e){} if(SLOT===i){ SLOT=null; G=null; allAvvio=true; } menuCancella(allAvvio); }},{t:T.no,f:()=>menuCancella(allAvvio)}])}); }
 bt.push({t:'↩',f:()=>menuSalvataggi(allAvvio)});
 modale(T.cancellaMenu,bt.length>1?T.qualeCancellare:T.nessuna,bt); }
function sceltaPiena(i,s,allAvvio){ const T=TESTI_LEGG.salv, n=s.nomeSalvataggio||T.def(i);
 modale(T.occupato(n),'',[{t:T.carica,f:()=>apriSlot(i)},{t:T.cancella,f:()=>modale(T.cancella,T.sicuro(n),[{t:T.si,f:()=>{ try{ localStorage.removeItem(chiaveSlot(i)); localStorage.removeItem(KEY+'_reg_'+i); }catch(e){} chiediNome(i); }},{t:T.no,f:()=>menuSalvataggi(allAvvio)}])},{t:'↩',f:()=>menuSalvataggi(allAvvio)}]); }
function apriSlot(i){ if(cambiaPartita({slot:i})) return; SLOT=i; NOME_SLOT=null; avvioVecchio(); if(modBtn&&modBtn[0]&&modBtn[0].f){ const f=modBtn[0].f; chiudiModale(); f(); } }
function chiediNome(i){ const T=TESTI_LEGG.salv;
 modale(T.nome,`${T.chiedi}<br><input id="nomeSlot" maxlength="30" value="${T.def(i)}" style="margin-top:10px;width:90%;font-size:17px;padding:8px;border-radius:8px;border:1px solid #6a8a5a;background:#1d2a1f;color:#fff">`,
  [{t:T.ok,f:()=>{}}]);
 const inp=document.getElementById('nomeSlot'); setTimeout(()=>{ inp.focus(); inp.select(); },50);
 const via=()=>{ const n=(inp.value||'').trim()||T.def(i); if(cambiaPartita({slot:i,nome:n})) return; SLOT=i; NOME_SLOT=n; G=null; chiudiModale(); nuovaPartita(); };
 modBtn[0].f=via; document.querySelector('#mb button').onclick=via;
 inp.addEventListener('keydown',e=>{ if(e.key==='Enter'){ e.preventDefault(); via(); } });
}
// mentre si scrive il nome, i tasti non devono muovere il gatto né scegliere i pulsanti
addEventListener('keydown',e=>{ if(e.target&&e.target.tagName==='INPUT'){ if(e.key==='Enter'){ e.preventDefault(); e.stopImmediatePropagation(); const b=document.querySelector('#mb button'); if(b) b.click(); return; } e.stopImmediatePropagation(); } },true); // Invio conferma il nome

// ================== salti: la Roccia Alta e la siepe del campo ==================
// richiesta del 12 novembre 2026
const CIMA=94; // altezza della cima della Roccia Alta, in pixel della v1 (1,9 m)
function salta(p,x1,y1,h1,arco,dur){ p.anim={t:0,dur,x0:p.x,y0:p.y,x1,y1,h0:p.elev||0,h1,arco}; p.vx=p.vy=0; }
function animaSalto(p,dt){ const a=p.anim; a.t+=dt; const u=Math.min(1,a.t/a.dur), e=u*u*(3-2*u);
 p.x=a.x0+(a.x1-a.x0)*e; p.y=a.y0+(a.y1-a.y0)*e; p.elev=a.h0+(a.h1-a.h0)*e+a.arco*Math.sin(u*Math.PI); p.vx=p.vy=0;
 if(Math.abs(a.x1-a.x0)>1) p.flip=a.x1<a.x0?-1:1;
 if(u>=1){ p.anim=null; p.elev=a.h1; } }
// sulla Roccia Alta salgono soltanto i guerrieri e i guaritori; un gattino o un apprendista viene sgridato dal capo e scende
const puoSalire=p=>p.rango==='guerriero'||p.rango==='guaritore'||(p.rango==='apprendista'&&p.via==='guaritore'&&!!p.preda); // l'apprendista guaritore sale soltanto con la preda del sacrificio (js/erbe.js)
function rocciaAlta(p){ const r=L.roccia, dx=p.x-r.x, dy=p.y-r.y, d=Math.hypot(dx,dy)||1, ora=performance.now();
 if(p.sopra){ const giu=d>36||(!puoSalire(p)&&ora>(p.scendiAlle||0));
  if(giu){ p.sopra=false; if(!puoSalire(p)) p.bloccoRoccia=ora+5000; salta(p,r.x+dx/d*(r.r+42),r.y+dy/d*(r.r+42),0,18,0.45); } else p.elev=CIMA; return; }
const suScalini=Math.abs(dx)<24&&dy>15&&dy<82; // gli scalini scolpiti, sul davanti
 if(p.guida&&(d<r.r+26||suScalini)){ const m=suScalini||(Math.abs(dx)<30&&dy>0)?84:r.r+26; p.x=r.x+dx/d*m; p.y=r.y+dy/d*m; return; } // un gatto guidato non sale e non entra nella roccia: per lui è solida
 if((d<r.r+26||suScalini)&&!p.auto&&!G.dentro&&!recitaAtt&&!(scena&&scena.tipo==='cerimonia')){ // durante le cerimonie si resta ai piedi della roccia
  if(ora<(p.bloccoRoccia||0)){ const m=suScalini||(Math.abs(dx)<30&&dy>0)?84:r.r+26; p.x=r.x+dx/d*m; p.y=r.y+dy/d*m; return; } // la roccia e i suoi scalini sono solidi
  p.sopra=true; salta(p,r.x+dx/d*18,r.y+dy/d*18,CIMA,22,0.6);
  if(!puoSalire(p)){ p.scendiAlle=ora+2200; const c=capo(); const t=TESTI_LEGG.sgrida(p.rango==='gattino');
   segnaEvento(); if(c){ parla(c,t,5); mettiAFuoco(c,4500); log(`🗣️ ${nome(c)}: «${t}»`,'#ffb0a0'); } else log('🗣️ '+t,'#ffb0a0'); } } }
function siepe(p,ox,oy,dt){ let spinto=false; const ora=performance.now();
 // soluzione semplice (12 novembre 2026): al secondo urto, o dopo mezzo secondo di spinta, il gatto attraversa la siepe
 if(ora<(p.passaSiepe||0)) return;
 for(const k in CLAN){ const cm=CLAN[k].campo, R=cm.r+18, r0=Math.hypot(ox-cm.x,oy-cm.y), r1=Math.hypot(p.x-cm.x,p.y-cm.y);
  const a=Math.atan2(p.y-cm.y,p.x-cm.x), da=Math.abs(((a-CLAN[k].ingresso+Math.PI*3)%(Math.PI*2))-Math.PI);
  if(da<0.27) continue; // l'apertura
  const dentroPrima=r0<R;
  if(dentroPrima&&r1>R-10||!dentroPrima&&r1<R+10){
   if(p.rango!=='gattino'){
    if(!p.inSiepe){ p.urtiSiepe=(p.urtiSiepe||0)+1; p.inSiepe=true; }
    p.spintaSiepe=(p.spintaSiepe||0)+(dt||0);
    if(p.auto||p.urtiSiepe>=2||p.spintaSiepe>0.5){ p.passaSiepe=ora+1500; p.urtiSiepe=0; p.spintaSiepe=0; return; } } // passa attraverso
   const rr=dentroPrima?R-10:R+10; p.x=cm.x+(p.x-cm.x)/(r1||1)*rr; p.y=cm.y+(p.y-cm.y)/(r1||1)*rr; spinto=true; } }
 if(!spinto){ p.spintaSiepe=0; p.inSiepe=false; if(!p.ultimoUrto||ora-p.ultimoUrto>4000) p.urtiSiepe=0; } else p.ultimoUrto=ora; }
function siepeVicina(p){
 for(const k in CLAN){ const cm=CLAN[k].campo, R=cm.r+18, r1=Math.hypot(p.x-cm.x,p.y-cm.y);
  const a=Math.atan2(p.y-cm.y,p.x-cm.x), da=Math.abs(((a-CLAN[k].ingresso+Math.PI*3)%(Math.PI*2))-Math.PI);
  if(da>=0.27&&Math.abs(r1-R)<16) return {cm,R,r1,fuori:r1>R}; } return null; }
function superSalto(){ const p=G.p, s=siepeVicina(p); if(!s) return; const rr=s.fuori?s.R-28:s.R+28;
 p.energia=Math.max(0,p.energia-3); salta(p,s.cm.x+(p.x-s.cm.x)/s.r1*rr,s.cm.y+(p.y-s.cm.y)/s.r1*rr,0,70,0.75); }

// ================== indicatori grandi in basso: cibo, acqua, energia, salute, spirito ==================
// richiesta del 12 novembre 2026
//; la barra laterale si semplifica.
const NOMI_IND={it:['Cibo','Acqua','Energia','Salute','Spirito'],en:['Food','Water','Energy','Health','Spirit'],fr:['Nourriture','Eau','Énergie','Santé','Esprit']}[LINGUA];
const IND=[['fame','🍖','#e0a050'],['sete','💧','#4aa8e8'],['energia','⚡','#e8d040'],['salute','❤️','#e85a5a'],['spirito','✨','#b48cff']];
const stileInd=document.createElement('style');
stileInd.textContent=`
#pbar,#preq,#pclan{display:none!important}
#indicatori{position:absolute;left:50%;bottom:10px;transform:translateX(-50%);display:flex;gap:14px;pointer-events:none;z-index:5}
#indicatori .ind.clic{pointer-events:auto;cursor:pointer} #indicatori .ind.clic:hover .med{transform:translateY(-4px) scale(1.08);box-shadow:0 0 16px rgba(255,230,150,.7),0 4px 10px rgba(0,0,0,.6)} #indicatori .med{transition:transform .15s,box-shadow .15s}
.ind{position:relative;width:74px;text-align:center;font:600 12px system-ui,sans-serif;color:#f5e6c8;text-shadow:0 1px 2px #000}
.med{position:relative;width:70px;height:70px;margin:0 auto 3px;border-radius:50%;
 background:radial-gradient(circle at 35% 30%,#8a6a42,#4a3220 60%,#2a1a0e);box-shadow:0 4px 10px rgba(0,0,0,.6),inset 0 2px 3px rgba(255,230,180,.35),inset 0 -3px 6px rgba(0,0,0,.5)}
.med .anello{position:absolute;inset:5px;border-radius:50%;-webkit-mask:radial-gradient(circle,transparent 58%,#000 60%);mask:radial-gradient(circle,transparent 58%,#000 60%)}
.med .cuore{position:absolute;inset:15px;border-radius:50%;background:radial-gradient(circle at 40% 35%,#3a2a1c,#1a110a);display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:inset 0 2px 5px rgba(0,0,0,.8)}
.ind.basso .med{animation:allarme .8s ease-in-out infinite}
.ind.basso .cuore{animation:trema .4s ease-in-out infinite}
.ind.basso span{color:#ff9a8a}
@keyframes allarme{0%,100%{box-shadow:0 4px 10px rgba(0,0,0,.6),0 0 0 0 rgba(255,60,40,.0)}50%{box-shadow:0 4px 10px rgba(0,0,0,.6),0 0 0 7px rgba(255,60,40,.55)}}
#indicatori .ind.guadagno .med{animation:cresce 1.8s ease-out}
@keyframes cresce{0%{transform:scale(1)}15%{transform:scale(1.9) translateY(-12px)}60%{transform:scale(1.6) translateY(-8px)}100%{transform:scale(1)}}
#grande{position:absolute;left:50%;bottom:150px;z-index:8;pointer-events:none;display:flex;flex-direction:column;align-items:center;opacity:0;transform:translateX(-50%)}
#grande.via{animation:grandeA 2.2s ease-out}
#grande .gm{position:relative;width:150px;height:150px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#8a6a42,#4a3220 60%,#2a1a0e);box-shadow:0 0 40px var(--c),0 8px 20px rgba(0,0,0,.6)}
#grande .ga{position:absolute;inset:10px;border-radius:50%;-webkit-mask:radial-gradient(circle,transparent 58%,#000 60%);mask:radial-gradient(circle,transparent 58%,#000 60%)}
#grande .gc{position:absolute;inset:32px;border-radius:50%;background:radial-gradient(circle at 40% 35%,#3a2a1c,#1a110a);display:flex;align-items:center;justify-content:center;font-size:52px}
#grande .gn{margin-top:6px;font:900 40px system-ui,sans-serif;color:#fff;text-shadow:0 0 14px var(--c),0 3px 4px #000}
@keyframes grandeA{0%{opacity:0;transform:translateX(-50%) scale(.3)}14%{opacity:1;transform:translateX(-50%) scale(1.12)}24%{transform:translateX(-50%) scale(1)}72%{opacity:1;transform:translateX(-50%) scale(1)}100%{opacity:0;transform:translateX(-50%) translateY(110px) scale(.35)}}
.piu{position:absolute;left:50%;top:-8px;transform:translateX(-50%);font:900 20px system-ui,sans-serif;color:#fff;text-shadow:0 0 8px var(--c),0 2px 3px #000;animation:sale 1.6s ease-out forwards;pointer-events:none}
@keyframes sale{0%{opacity:0;transform:translate(-50%,10px)}15%{opacity:1}100%{opacity:0;transform:translate(-50%,-46px)}}
#toastPunti{position:absolute;left:50%;bottom:345px;transform:translateX(-50%);z-index:7;pointer-events:none;font:800 22px system-ui,sans-serif;color:#fff;padding:10px 20px;border-radius:999px;background:rgba(20,14,30,.78);border:2px solid var(--c);box-shadow:0 0 18px var(--c);white-space:nowrap;opacity:0}
#toastPunti.via{animation:toast 2.4s ease-out}
@keyframes toast{0%{opacity:0;transform:translate(-50%,16px) scale(.8)}12%{opacity:1;transform:translate(-50%,0) scale(1.08)}22%{transform:translate(-50%,0) scale(1)}80%{opacity:1}100%{opacity:0;transform:translate(-50%,-10px)}}
@keyframes trema{0%,100%{transform:rotate(0)}25%{transform:rotate(-8deg)}75%{transform:rotate(8deg)}}
`;
document.head.appendChild(stileInd);
const indicatori=document.createElement('div'); indicatori.id='indicatori';
indicatori.innerHTML=IND.map(([k,ic],i)=>`<div class="ind" id="ind-${k}"><div class="med"><div class="anello"></div><div class="cuore">${ic}</div></div><span>${NOMI_IND[i]}</span></div>`).join('');
const toastPunti=document.createElement('div'); toastPunti.id='toastPunti'; const grande=document.createElement('div'); grande.id='grande';
addEventListener('DOMContentLoaded',()=>{ const sc=document.getElementById('scena3'); (sc||document.body).appendChild(indicatori); (sc||document.body).appendChild(toastPunti); (sc||document.body).appendChild(grande); });
const prima={}; let toastFino=0;
function guadagno(k,n,col){ const el=document.getElementById('ind-'+k); if(el){ el.classList.remove('guadagno'); void el.offsetWidth; el.classList.add('guadagno'); const s=document.createElement('div'); s.className='piu'; s.style.setProperty('--c',col); s.textContent='+'+n; el.appendChild(s); setTimeout(()=>s.remove(),1700); }
 mostraToast(TESTI_LEGG.guadagni[k]+'  +'+n,col);
 // il medaglione grande al centro: si vede subito che cosa è cresciuto
 const ic=(IND.find(x=>x[0]===k)||[])[1]||'✨', v=Math.max(0,Math.min(100,k==='spirito'?(G.p.spirito??60):G.p[k]));
 grande.style.setProperty('--c',col); grande.innerHTML=`<div class="gm"><div class="ga" style="background:conic-gradient(${col} ${v*3.6}deg,rgba(0,0,0,.55) ${v*3.6}deg)"></div><div class="gc">${ic}</div></div><div class="gn">+${n}</div>`;
 grande.classList.remove('via'); void grande.offsetWidth; grande.classList.add('via'); }
function mostraToast(t,col){ const ora=performance.now(); if(ora<toastFino-1600) return; toastFino=ora+2400; toastPunti.textContent=t; toastPunti.style.setProperty('--c',col); toastPunti.classList.remove('via'); void toastPunti.offsetWidth; toastPunti.classList.add('via'); }
setInterval(()=>{ const p=typeof G!=='undefined'&&G&&G.p; indicatori.style.display=p?'flex':'none'; if(!p) return; if(prima.G!==G){ for(const k in prima) delete prima[k]; prima.G=G; } // partita nuova: nessun falso guadagno
 for(const [k,,col] of IND){ const v=Math.max(0,Math.min(100,k==='spirito'?(p.spirito??60):p[k])), el=document.getElementById('ind-'+k); if(!el) continue;
  const c=v<30?'#ff4a3a':col; el.querySelector('.anello').style.background=`conic-gradient(${c} ${v*3.6}deg,rgba(0,0,0,.55) ${v*3.6}deg)`;
  el.classList.toggle('basso',v<30); el.title=Math.round(v)+'%'+(el.classList.contains('clic')?' — '+TESTI_LEGG.clicInd[{fame:'cibo',sete:'acqua',energia:'energia',salute:'salute',spirito:'spirito'}[k]]:'');
  if(prima[k]!=null&&v-prima[k]>=4&&!(k==='energia'&&v>=99&&prima[k]>90)) guadagno(k,Math.round(v-prima[k]),col); prima[k]=v; }
 const f=forza(p); if(prima.forza!=null&&f>prima.forza) mostraToast(TESTI_LEGG.guadagni.forza+'  +'+(f-prima.forza),'#ffb060'); prima.forza=f; },200);

// ================== effetti dello spirito: coesione in battaglia e cibo condiviso ==================
// richiesta del 12 novembre 2026
function coesione(){ const v=G&&G.p&&G.p.spirito; if(v==null) return 0; return v>=70?2:v>=40?0:v<25?-3:-1; }
let annuncioPerSe=0;
function portaAlMucchio(c){ const v=G.p.spirito??60; const tieni=v<25?0.75:v<40?0.35:0;
 if(Math.random()<tieni){ flo(c.x,c.y-25,'😼 '+TESTI_LEGG.perSe,'#ffb37a'); const ora=performance.now(); if(ora>annuncioPerSe){ annuncioPerSe=ora+60000; annuncia(TESTI_LEGG.spiritoBassoAnnuncio,'#ffb37a'); consiglio('perSe',TESTI_LEGG.basso,60); } return false; }
 return true; }
function spiegaSpirito(){ G.spiritoSpiegato=true; modale(TESTI_LEGG.titoloSpirito,TESTI_LEGG.spiegaLunga+box(TESTI_LEGG.boxSpirito[0],TESTI_LEGG.boxSpirito[1]),[{t:TESTI_LEGG.capito}]); }

// ================== cuccioli: proposte con il consenso di entrambi ==================
// richiesta del 12 novembre 2026: cuoricini e coccole quando un gatto vuole avere cuccioli, un esplicito
// proposte soltanto a gatti di sesso opposto della stessa età e dello stesso rango, rifiuti gentili; niente scene scabrose: il gioco è per bambini.
const AM=()=>TESTI_LEGG.amore;
function impegno(c){ if(c.impegno===undefined){ const r=((c.id*2654435761)>>>0)%100; c.impegno=r<22?'partner':r<38?'guerra':null; } return c.impegno; }
function puoProporre(p,c){
 return c.clan==='felce'&&c!==p&&c.sesso!==p.sesso&&p.rango==='guerriero'&&c.rango==='guerriero'
  &&!c.leader&&!c.figlio&&c.id!==G.madre&&!c.incinta&&!p.incinta&&!G.attesaGattini&&!(p.allatta&&G.t<p.allatta)&&(p.compagno==null||p.compagno===c.id); }
function opzioniAmore(c){ const p=G.p; return puoProporre(p,c)?[{t:AM().proponi,f:()=>proponi(c)}]:[]; }
function proponi(c){ const p=G.p, n=nome(p);
 if(p.compagno!==c.id){ const im=impegno(c), why=c.amicizia<3?'presto':im;
  if(why){ avviaScena('naso',[p,c],1.6,()=>modale(AM().titolo,AM().rifiuti[why](n)+box(AM().box[0],AM().box[1]),[{t:'🙂 OK'}])); return; } }
 avviaScena('naso',[p,c],2.2,()=>modale(AM().titolo,AM().accetta(nome(c))+'<br><br>'+AM().chiediConsenso,[{t:AM().si,f:()=>accordo(c)},{t:AM().no,f:()=>modale(AM().titolo,AM().rifiutoTuo(nome(c)),[{t:'🙂 OK'}])}]));
}
function accordo(c){ const p=G.p; p.compagno=c.id; log('💞 '+AM().cuccioli,'#ffd0f0'); avereCuccioli(c); }
// un gatto del clan che vuole avere cuccioli con il giocatore gli si avvicina con i cuoricini
let corteggia=null, prossimoCorteggio=0;
function corteggiamento(dt){
 const p=G.p, ora=performance.now();
 if(corteggia){ const c=gatto(corteggia.id); corteggia.t+=dt;
  if(!c||scena||paused||G.raid||G.dentro||corteggia.t>25||(!corteggia.tipo&&!puoProporre(p,c))){ if(c&&(corteggia.tipo==='straniero'||corteggia.tipo==='paziente')) fineIncontro(c); corteggia=null; return; }
  const dx=p.x-c.x, dy=p.y-c.y, d=Math.hypot(dx,dy);
  corteggia.cuore-=dt; if(corteggia.cuore<=0&&corteggia.tipo!=='straniero'&&corteggia.tipo!=='paziente'){ corteggia.cuore=0.6; flo(c.x+rnd(-8,8),c.y-34,pick(['💗','💕','💞']),'#ffb0d0'); }
  if(d>34){ const v=95; c.x+=dx/d*v*dt; c.y+=dy/d*v*dt; c.vx=dx/d*v; c.vy=dy/d*v; c.vel=v; c.flip=dx<0?-1:1; c.posa=null; }
  else if(corteggia.tipo==='paziente'){ corteggia=null; c.vx=c.vy=0; c.flip=dx<0?-1:1; prossimoCorteggio=ora+60000; mettiAFuoco(c,3000); const H=TESTI_LEGG.guaritore, m=H.malanni[c.malanno||'spina'];
   const anche=c.clan!=='felce'&&window.COE_T?pick(COE_T.ancheSe):''; if(anche) parla(c,anche,6); const testo=c.clan==='felce'?H.arriva(nome(c),m):anche+'<br><br>'+H.arrivaN(nome(c),CLAN[c.clan].nome,m);
   modale('🌿 '+nome(c),testo,[{t:H.cura,f:()=>curaPaziente(c)},{t:H.nonOra,f:()=>{ c.malanno=null; fineIncontro(c); }}]); }
  else if(corteggia.tipo==='straniero'){ corteggia=null; c.vx=c.vy=0; c.flip=dx<0?-1:1; prossimoCorteggio=ora+60000; mettiAFuoco(c,3000); const S=TESTI_LEGG.stranieri;
   modale('🐾 '+nome(c),S.arriva(nome(c),CLAN[c.clan].nome),[{t:S.parla,f:()=>parlaStraniero(c)},...(puoCuccioliNemico(p,c)?[{t:TN().cuccioli,f:()=>cuccioliNemico(c)}]:[]),{t:S.saluta,f:()=>{ log('👋 '+S.ciao(nome(c)),'#cfe8ff'); fineIncontro(c); }},{t:S.sfida,f:()=>{ fineIncontro(c); lottaNemico(c); }}]); }
  else if(corteggia.tipo){ const tipo=corteggia.tipo, V=TESTI_LEGG.visita; corteggia=null; c.vx=c.vy=0; c.flip=dx<0?-1:1; prossimoCorteggio=ora+60000; mettiAFuoco(c,3000);
   const coccole=()=>{ amicizia(c,'pelo'); spirito(4,'compagnia'); }, storia=()=>{ scegliStoria(c); spirito(4,'compagnia'); };
   const bt=tipo==='storia'?[{t:V.racconta,f:storia},{t:V.coccola,f:coccole}]:[{t:V.coccola,f:coccole},...(sentiti().length?[{t:V.racconta,f:storia}]:[])];
   bt.push({t:V.nonOra,f:()=>log('🐾 '+V.ok(nome(c)),'#cfe8ff')}); modale('🐾 '+nome(c),V[tipo](nome(c)),bt); }
  else { corteggia=null; c.vx=c.vy=0; c.flip=dx<0?-1:1; prossimoCorteggio=ora+180000;
   avviaScena('pelo',[p,c],2.6,()=>modale(AM().titolo,AM().arriva(nome(c),c.sesso==='f')+'<br><br>'+AM().chiediConsenso+box(AM().box[0],AM().box[1]),
    [{t:AM().si,f:()=>{ c.amicizia++; accordo(c); }},{t:AM().no,f:()=>{ c.impegnoRifiuto=G.t; modale(AM().titolo,AM().rifiutoTuo(nome(c)),[{t:'🙂 OK'}]); }}])); }
  return; }
 const basso=(p.spirito??60)<40; // con lo spirito basso, i gatti del clan vengono più spesso a fare compagnia
 if(ora<prossimoCorteggio||scena||paused||G.raid||G.dentro||!(basso?puoVisita():puoEvento())) return;
 prossimoCorteggio=ora+(basso?10000:20000); // un controllo ogni venti secondi (dieci con lo spirito basso)
 if(Math.random()>(basso?0.8:0.35)) return;
 const cand=p.rango!=='guerriero'?[]:G.cats.filter(c=>puoProporre(p,c)&&(c.amicizia>=3||(lune(p)>=14&&c.amicizia>=1)||lune(p)>=18)&&(p.compagno===c.id||!impegno(c))&&!(c.impegnoRifiuto&&G.t-c.impegnoRifiuto<MOON*3)&&dist(c,p)<420&&c.stato==='campo');
 if(cand.length&&Math.random()<0.55){ const sc=cand.sort((a,b)=>(b.id===p.compagno)-(a.id===p.compagno)||b.amicizia-a.amicizia)[0]; sc.amicizia=Math.max(sc.amicizia||0,3); corteggia={id:sc.id,t:0,cuore:0}; segnaEvento(); return; } // chi ti corteggia ti è già amico
 if(p.rango==='guaritore'&&Math.random()<0.5){ // i pazienti vengono dal guaritore
  const nemico=Math.random()<0.25, pool=G.cats.filter(c=>(nemico?c.clan!=='felce'&&!ostileClan(c.clan):c.clan==='felce')&&c!==p&&!c.leader&&c.stato!=='fuga'&&c.stato!=='assalto'&&c.rango!=='gattino');
  if(pool.length){ const c=pick(pool); c.malanno=c.ferito?'ferita':pick(['spina','pancia','tosse','zampa']); if(nemico){ const a=Math.random()*6.283; c.x=clamp(p.x+Math.cos(a)*260,30,WW-30); c.y=clamp(p.y+Math.sin(a)*260,30,WH-30); c.amicoPrima=c.amico; c.amico=true; c.pacificoFino=G.t+MOON*0.5; c.stato='pattuglia'; }
   corteggia={id:c.id,t:0,cuore:99,tipo:'paziente'}; segnaEvento(); return; } }
 if(p.rango!=='gattino'&&dist(p,CLAN.felce.campo)>CLAN.felce.campo.r+80&&Math.random()<0.45){ const st=inVillaggioNemico(p)?[]:G.cats.filter(c=>c.clan!=='felce'&&!ostileClan(c.clan)&&!c.leader&&c.rango!=='gattino'&&c.stato!=='fuga'&&c.stato!=='assalto'&&!c.ferito);
  if(st.length){ const c=pick(st), a=Math.random()*6.283; c.x=clamp(p.x+Math.cos(a)*260,30,WW-30); c.y=clamp(p.y+Math.sin(a)*260,30,WH-30); c.stato='pattuglia'; c.amicoPrima=c.amico; c.amico=true; c.pacificoFino=G.t+MOON*0.5; corteggia={id:c.id,t:0,cuore:99,tipo:'straniero'}; segnaEvento(); return; } }
 const vis=G.cats.filter(c=>c.clan==='felce'&&c!==p&&!c.leader&&!c.ferito&&c.stato==='campo'&&dist(c,p)<420&&dist(c,p)>60);
 if(vis.length){ const c=pick(vis); corteggia={id:c.id,t:0,cuore:0,tipo:sentiti().length&&Math.random()<0.5?'storia':'coccole'}; segnaEvento(); }
}

// ================== clic sull'obiettivo o sulla missione: il gatto ci va da solo ==================
// richiesta del 12 novembre 2026
const felci=()=>G.cats.filter(c=>c.clan==='felce');
const piuVicino=(lista,p)=>{ let b=null,bd=1e9; for(const c of lista){ const d=dist(c,p); if(d<bd){bd=d;b=c;} } return b; };
const ingressoTana=k=>({x:L[k].x,y:L[k].y+L[k].r*0.6,tana:k});
function zonaCaccia(p){ const q=piuVicino(prede.filter(q=>!q.morta&&!(q.vola>0.2)),p); if(q&&dist(q,p)<700) return q; const cm=CLAN.felce.campo; return {x:cm.x+cm.r+170,y:cm.y+rnd(-120,120)}; }
function acquaVicina(p){ const riva=l=>{ const d=Math.hypot(p.x-l.x,p.y-l.y)||1; return {x:l.x+(p.x-l.x)/d*(l.r+8),y:l.y+(p.y-l.y)/d*(l.r+8)}; };
 const cand=[L.pozza,riva(L.stagno),riva(L.lago),{x:FX0-14,y:p.y}]; return piuVicino(cand,p); }
function feritoVicino(p){ return piuVicino(felci().filter(c=>c.ferito),p); }
function anzianoVicino(){ return piuVicino(felci().filter(c=>c.rango==='anziano'),G.p); }
function tanaMia(p){ for(const k of TANE) if(tanaGiusta(k,p)) return ingressoTana(k); return ingressoTana('nursery'); }
const davantiRoccia=()=>({x:L.roccia.x,y:L.roccia.y+L.roccia.r+30});
// dove porta l'obiettivo: segue lo stesso ordine di obiettivo() in gioco.html
function metaObiettivo(){ const p=G.p;
 if(G.raid) return G.raid.luogo||null;
 if(G.cats.some(c=>c.stato==='assalto')) return p.rango==='gattino'?ingressoTana('nursery'):piuVicino(G.cats.filter(c=>c.stato==='assalto'),p);
 if(p.sete<30) return acquaVicina(p);
 if(p.fame<30) return G.cibo>0?L.mucchio:zonaCaccia(p);
 if(p.energia<25) return tanaMia(p);
 if(p.incinta||(p.allatta&&G.t<p.allatta)) return ingressoTana('nursery');
 { const m=gatto(p.compagno); if(m&&m.incinta) return ingressoTana('nursery'); }
 if(G.colonia&&!G.colonia.partita) return davantiRoccia();
 if(G.cerimonia&&gatto(G.cerimonia.id)) return davantiRoccia();
 if(G.daVedere&&G.t<G.daVedere.fino) return ingressoTana('nursery');
 if(p.preda) return L.mucchio;
 const req=requisiti().find(r=>!r.ok&&r.b!=='lune')||requisiti().find(r=>!r.ok);
 if(req){ if(req.b==='lune') return null; if(req.b==='racconti') return anzianoVicino(); if(req.b==='prede') return zonaCaccia(p); // le lune non si raggiungono: si aspettano
  if(req.b==='allenamenti') return gatto(p.mentore); if(req.b==='erbe'){ const e=piuVicino(ERBE.filter((h,i)=>G.erbe[i]<=G.t),p); return e; } if(req.b==='cure') return feritoVicino(p)||ingressoTana('tanaGuaritore'); }
 if(p.rango==='gattino'||(p.rango==='apprendista'&&p.via==='guerriero')) return davantiRoccia();
 if(p.rango==='apprendista') return L.lago;
 if(p.rango==='guerriero'){ const cl=G.tens.nebbia>=G.tens.pietre?'nebbia':'pietre'; if(G.tens[cl]>70) return davantiRoccia();
  if((p.lezioni||0)<3&&felci().some(c=>c.rango==='gattino')) return ingressoTana('nursery');
  if(!p.compagno){ const c=piuVicino(G.cats.filter(c=>puoProporre(p,c)),p); if(c) return c; }
  return {x:FX0-30,y:GUADI.reduce((b,g)=>Math.abs(g-p.y)<Math.abs(b-p.y)?g:b,GUADI[0])}; }
 if((p.lezioni||0)<3&&felci().some(c=>c.rango==='gattino')) return ingressoTana('nursery');
 return feritoVicino(p)||piuVicino(ERBE.filter((h,i)=>G.erbe[i]<=G.t),p); }
function metaMissione(){ const m=G.missione, p=G.p; if(!m) return null;
 switch(m.k){ case 'caccia': return p.preda?L.mucchio:zonaCaccia(p); case 'anziano': return p.preda?anzianoVicino():zonaCaccia(p); case 'ascolta': return anzianoVicino();
  case 'educa': return ingressoTana('nursery'); case 'amicizia': return gatto(m.b); case 'pattuglia': return {x:FX0-30,y:GUADI.reduce((b,g)=>Math.abs(g-p.y)<Math.abs(b-p.y)?g:b,GUADI[0])};
  case 'cura': return feritoVicino(p); case 'gioca': return piuVicino(felci().filter(c=>c.rango==='gattino'&&c!==p),p); case 'allievo': return gatto(p.allievo); }
 return null; }
function avviaGuida(tipo,punto){ if(!G||!G.p||paused) return; const T=TESTI_LEGG.guida;
 const meta=punto||(tipo==='missione'?metaMissione():metaObiettivo()); if(!meta){ log(T.nessuna,'#cfe8ff'); return; }
 G.p.guida={tipo,t:0,punto}; G.p.caccia=null; log(T.via,'#cfe8ff'); }
// Il passaggio del fiume (correzione del 13 novembre 2026
//). Prima la tappa restava l'imbocco del guado anche quando il gatto c'era già sopra, e dentro il fiume lo rimandava indietro. Ora: chi deve
// cambiare riva va all'imbocco del guado più comodo (il minor giro tra sé e la meta), e arrivato lì punta all'uscita sull'altra riva. Vale per tutti i gatti.
function tappaGuado(c,meta){ const lato=x=>x<FX0?-1:x>FX1?1:0, lc=lato(c.x), lm=lato(meta.x); if(lm===0||lc===lm) return meta;
 const gy=GUADI.reduce((b,g)=>Math.abs(g-c.y)+Math.abs(g-meta.y)<Math.abs(b-c.y)+Math.abs(b-meta.y)?g:b,GUADI[0]), esce={x:lm<0?FX0-30:FX1+30,y:gy};
 if(lc===0) return Math.abs(c.y-gy)<26?esce:meta; // già nel fiume: sui sassi si prosegue fino all'altra riva, altrove si esce dritti
 const entra={x:lc<0?FX0-30:FX1+30,y:gy}, sulGuado=Math.abs(c.y-gy)<22&&(lc<0?c.x>=FX0-48:c.x<=FX1+48); return sulGuado?esce:entra; } // chi è già all'altezza dei sassi, tra l'imbocco e l'acqua, prosegue: senza questo il gatto tornava indietro all'imbocco a ogni passo
function tappaVerso(p,meta){ // gira intorno alla siepe fino all'apertura del campo, poi passa dal guado se serve
 if(p.rango!=='gattino') return tappaGuado(p,meta); // la siepe ora si attraversa: si va dritti
 for(const k in CLAN){ const cm=CLAN[k].campo, R=cm.r+18, dP=dist(p,cm)<R, dM=dist(meta,cm)<R; if(dP===dM) continue;
  const ai=CLAN[k].ingresso, ux=Math.cos(ai), uy=Math.sin(ai), dentro={x:cm.x+ux*(R-36),y:cm.y+uy*(R-36)}, fuori={x:cm.x+ux*(R+40),y:cm.y+uy*(R+40)};
  const scarto=pt=>{ const a=Math.atan2(pt.y-cm.y,pt.x-cm.x); return Math.abs(((a-ai+Math.PI*3)%(Math.PI*2))-Math.PI); };
  if(dP) return (dist(p,dentro)>16&&scarto(p)>0.22)?dentro:fuori;
  const ap=Math.atan2(p.y-cm.y,p.x-cm.x), diff=((ai-ap+Math.PI*3)%(Math.PI*2))-Math.PI;
  if(Math.abs(diff)>0.3){ const a2=ap+Math.sign(diff)*Math.min(0.5,Math.abs(diff)), RR=R+55; return {x:cm.x+Math.cos(a2)*RR,y:cm.y+Math.sin(a2)*RR}; } // il giro largo, fuori dalla siepe
  return (dist(p,fuori)>16&&scarto(p)>0.22)?fuori:dentro; }
 return tappaGuado(p,meta); }
function guidaPasso(p,dt){ const T=TESTI_LEGG.guida, g=p.guida;
 const tasti=keys.ArrowUp||keys.ArrowDown||keys.ArrowLeft||keys.ArrowRight||keys.KeyW||keys.KeyA||keys.KeyS||keys.KeyD;
 if((tasti&&!g.giro)||p.auto||scena||g.t>90){ p.guida=null; if(tasti) log(T.stop,'#cfe8ff'); return; }
 g.t+=dt;
 const meta=g.punto?(g.punto.clan||g.punto.campo?{x:g.punto.x,y:g.punto.y,clan:g.punto.clan}:g.punto):g.tipo==='missione'?metaMissione():metaObiettivo(); if(!meta){ p.guida=null; return; }
 let tap;
 if(G.dentro&&meta.altare){ if(dist(p,meta)<5){ p.guida=null; preghiAllAltare(); return; } const d=L[G.dentro]; tap=(p.y>d.y+2&&Math.abs(p.x-d.x)<8)?{x:d.x+10,y:d.y+3}:meta; } // gira intorno al focolare
 else if(G.dentro){ const d=L[G.dentro]; if(Math.hypot(meta.x-d.x,meta.y-d.y)<d.r){ p.guida=null; arrivoInTana(p); return; } tap={x:d.x,y:d.y+d.r*1.2}; }
 else if(meta.tana){ const d=L[meta.tana], fronte={x:d.x,y:d.y+d.r+22}; // alle tane si arriva dal davanti, verso l'imbocco
  const allineato=p.y>d.y+d.r*0.3&&Math.abs(p.x-d.x)<d.r*0.5; tap=allineato?meta:tappaVerso(p,fronte); }
 else tap=tappaVerso(p,meta);
 // se il gatto non avanza: salta la siepe, oppure un passo di lato; dopo qualche tentativo torna indietro e ridà il controllo
 if(!G.dentro){ g.chk=(g.chk||0)+dt; if(!g.pos0) g.pos0={x:p.x,y:p.y};
  if(g.chk>=1){ const mosso=Math.hypot(p.x-g.pos0.x,p.y-g.pos0.y); g.pos0={x:p.x,y:p.y}; g.chk=0;
   if(mosso<8){ g.fermo=(g.fermo||0)+1;
    if(g.fermo<=3){ const a=Math.atan2(tap.y-p.y,tap.x-p.x)+(g.fermo%2?1.3:-1.3); salta(p,p.x+Math.cos(a)*32,p.y+Math.sin(a)*32,0,10,0.35); return; }
    p.guida=null; log(T.bloccato,'#cfe8ff'); const a=Math.atan2(tap.y-p.y,tap.x-p.x)+Math.PI; salta(p,p.x+Math.cos(a)*40,p.y+Math.sin(a)*40,0,10,0.4); return; }
   else g.fermo=0; } }
 const vicino=meta.clan?36:20;
 if(g.giro&&dist(p,meta)<24){ p.guida=null; return; }
 if(dist(p,meta)<vicino&&!G.dentro&&!meta.tana){ p.guida=null; arrivo(p,g.punto&&g.punto.clan?g.punto:meta); return; }
 const dx=tap.x-p.x, dy=tap.y-p.y, d=Math.hypot(dx,dy)||1, v=(p.rango==='gattino'?100:130)*(acqua(p.x,p.y)?0.5:1), s=Math.min(d,v*dt);
 p.x+=dx/d*s; p.y+=dy/d*s; p.vx=dx/d*2; p.vy=dy/d*2; p.dir=Math.atan2(dy,dx); if(Math.abs(dx)>1) p.flip=dx<0?-1:1;
 if(!G.dentro){ // gira intorno alla Roccia Alta e alle tane che non sono la meta, senza salirci né entrarci
  const ostacoli=[[L.roccia,L.roccia.r+32],...TANE.filter(k=>dist(ingressoTana(k),meta)>4).map(k=>[L[k],L[k].r*0.98])];
  for(const [o,r] of ostacoli){ const ox=p.x-o.x, oy=p.y-o.y, od=Math.hypot(ox,oy)||1; if(od<r){ const tx=-oy/od, ty=ox/od, sg=(tx*dx+ty*dy)>=0?1:-1; p.x=o.x+ox/od*r+tx*sg*s; p.y=o.y+oy/od*r+ty*sg*s; } } } }

// ================== la missione presentata dal gatto che la dà, nel pannello di destra ==================
// richiesta del 12 novembre 2026
const stileGuida=document.createElement('style');
stileGuida.textContent=`
#pobj,#pmis{cursor:pointer;transition:transform .15s,box-shadow .15s}
#pobj:hover,#pmis:hover{transform:translateY(-2px);box-shadow:0 4px 14px rgba(255,220,140,.25)}
#pobj.attesa::after{content:none} #pobj.attesa{cursor:default}
#pobj::after,#pmis::after{content:var(--clic);display:block;margin-top:5px;font-size:12px;font-weight:700;color:#ffe08a;opacity:.85}
#pmis.nuova{animation:lampo 1s ease-in-out 4}
@keyframes lampo{0%,100%{box-shadow:0 0 0 0 rgba(140,200,255,0)}50%{box-shadow:0 0 0 6px rgba(140,200,255,.55)}}
#annMis{display:flex;gap:10px;align-items:flex-start;margin:8px 0;padding:10px;border-radius:12px;background:linear-gradient(135deg,#2a3f55,#1f2e3d);border:2px solid #7fa8d0;cursor:pointer;
 animation:entraAnn .6s cubic-bezier(.3,1.6,.5,1) both}
#annMis.via{animation:esceAnn .4s ease-in both}
@keyframes entraAnn{0%{transform:translateX(60px) scale(.6);opacity:0}100%{transform:none;opacity:1}}
@keyframes esceAnn{to{transform:translateX(60px) scale(.7);opacity:0;height:0;margin:0;padding:0}}
#annMis svg{flex:none;width:64px;height:64px;animation:saltella 1.1s ease-in-out infinite}
@keyframes saltella{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-6px) rotate(3deg)}}
#annMis .occhio{animation:batti 3s infinite;transform-origin:center;transform-box:fill-box}
@keyframes batti{0%,92%,100%{transform:scaleY(1)}95%{transform:scaleY(.1)}}
#annMis .bocca{animation:parla .22s ease-in-out infinite alternate;transform-origin:center;transform-box:fill-box}
@keyframes parla{from{transform:scaleY(.3)}to{transform:scaleY(1.2)}}
#annMis .fumetto{position:relative;flex:1;background:#fff8e6;color:#2b1a08;border-radius:10px;padding:7px 9px;font-size:13px;line-height:1.35}
#annMis .fumetto::before{content:'';position:absolute;left:-8px;top:18px;border:8px solid transparent;border-right-color:#fff8e6;border-left:0}
#annMis .chi{font-size:11px;color:#bfe0ff;margin-bottom:3px;font-weight:700}
`;
document.head.appendChild(stileGuida);
document.documentElement.style.setProperty('--clic',JSON.stringify(TESTI_LEGG.guida.clic));
function musoSVG(col){ return `<svg viewBox="0 0 64 64"><polygon points="10,26 14,4 28,18" fill="${col}" stroke="#2a1a10" stroke-width="2"/><polygon points="54,26 50,4 36,18" fill="${col}" stroke="#2a1a10" stroke-width="2"/>
 <polygon points="15,20 16,10 24,17" fill="#f3a6b8"/><polygon points="49,20 48,10 40,17" fill="#f3a6b8"/>
 <ellipse cx="32" cy="36" rx="23" ry="21" fill="${col}" stroke="#2a1a10" stroke-width="2"/>
 <ellipse class="occhio" cx="23" cy="33" rx="4" ry="5.5" fill="#1d2a10"/><ellipse class="occhio" cx="41" cy="33" rx="4" ry="5.5" fill="#1d2a10"/>
 <circle cx="24.5" cy="31" r="1.5" fill="#fff"/><circle cx="42.5" cy="31" r="1.5" fill="#fff"/>
 <polygon points="29,41 35,41 32,44" fill="#e07a8a"/><ellipse class="bocca" cx="32" cy="48" rx="4" ry="2.5" fill="#6a1a20"/>
 <g stroke="#2a1a10" stroke-width="1.2"><line x1="6" y1="40" x2="20" y2="42"/><line x1="6" y1="46" x2="20" y2="45"/><line x1="58" y1="40" x2="44" y2="42"/><line x1="58" y1="46" x2="44" y2="45"/></g></svg>`; }
let missioneVista=null, annTimer=null;
function presentaMissione(){ if(occupato()) return; const m=G&&G.missione, chiave=m?m.k+'|'+m.da+'|'+(m.t||''):null; if(chiave===missioneVista) return; missioneVista=chiave; if(m){ segnaEvento(); if(m.inizio==null) m.inizio=G.t; }
 const vecchio=document.getElementById('annMis'); if(vecchio) vecchio.remove(); if(!m) return;
 const d=gatto(m.da), pmis=document.getElementById('pmis'); if(!pmis) return;
 if(d&&dist(d,G.p)<500) mettiAFuoco(d,3500); const col=d&&d.colore||'#d08a40', T=TESTI_LEGG.guida, testo=`${T.missione} ${m.t}.`;
 const el=document.createElement('div'); el.id='annMis';
 el.innerHTML=musoSVG(col)+`<div class="fumetto"><div class="chi">${d?T.dice(nome(d)):''}</div><span class="txt"></span></div>`;
 pmis.parentNode.insertBefore(el,pmis); pmis.classList.remove('nuova'); void pmis.offsetWidth; pmis.classList.add('nuova');
 const span=el.querySelector('.txt'); let i=0; clearInterval(annTimer);
 annTimer=setInterval(()=>{ i++; span.textContent=testo.slice(0,i); if(i>=testo.length){ clearInterval(annTimer); el.querySelector('.bocca').style.animation='none'; } },35);
 el.onclick=()=>{ avviaGuida('missione'); chiudiAnn(el); };
 setTimeout(()=>chiudiAnn(el),12000); }
function chiudiAnn(el){ if(!el.isConnected) return; el.classList.add('via'); setTimeout(()=>el.remove(),400); }
addEventListener('DOMContentLoaded',()=>{ const o=document.getElementById('pobj'), m=document.getElementById('pmis');
 if(o) o.addEventListener('click',()=>avviaGuida('obiettivo')); if(m) m.addEventListener('click',()=>avviaGuida('missione')); });
setInterval(()=>{ if(typeof G!=='undefined'&&G&&G.p) presentaMissione(); },300);

// ================== menu dei gatti più brevi; etichette soltanto per ciò che conta, e cliccabili ==================
// richieste del 12 novembre 2026
function curiositaBreve(){ const h=curiosita(); return `<details style="margin-top:6px"><summary style="cursor:pointer;color:#e8d9a8">${TESTI_LEGG.curio}</summary>${h}</details>`; }
function etichettaUtile(c){ const p=G.p; if(c===p) return false;
 if(c.clan!=='felce') return c.stato==='caccia'||c.stato==='assalto'||c.stato==='schierato'||!!G.raid;
 const m=G.missione;
 return (c.ferito&&puoErbe())||(m&&(m.b===c.id||((m.k==='ascolta'||m.k==='anziano')&&c.rango==='anziano')||(m.k==='allievo'&&p.allievo===c.id)))||(corteggia&&corteggia.id===c.id); }
function metaPosto(k){ if(TANE.includes(k)) return ingressoTana(k); if(k==='roccia') return davantiRoccia(); return {x:L[k].x,y:L[k].y+(k==='lago'||k==='stagno'?L[k].r+12:0)}; }
const ZONE=[];
function targaCliccabile(t,x,y,col,meta){ if((scena&&(scena.tipo==='rito'||scena.tipo==='cerimonia'))||(G&&G.riposoFinale)) return; // durante i riti, soltanto il rito
 targa(t,x,y,col); ctx.font='bold 15px system-ui'; const w=ctx.measureText(t).width+18; ZONE.push({x0:x-w/2,y0:y-17,x1:x+w/2,y1:y+7,meta}); }
function zonaSotto(e){ const r=e.target.getBoundingClientRect(), x=e.clientX-r.left, y=e.clientY-r.top; return ZONE.find(z=>x>=z.x0&&x<=z.x1&&y>=z.y0&&y<=z.y1); }
addEventListener('DOMContentLoaded',()=>{ const cv=document.getElementById('c'); if(!cv) return; let giu=null;
 cv.addEventListener('mousedown',e=>{ giu={x:e.clientX,y:e.clientY}; });
 cv.addEventListener('click',e=>{ if(giu&&Math.hypot(e.clientX-giu.x,e.clientY-giu.y)>6) return; const z=zonaSotto(e); if(!z) return; if(z.meta&&z.meta.altare&&G.dentro){ G.p.guida={tipo:'punto',t:0,punto:z.meta}; return; } avviaGuida('punto',z.meta); });
 cv.addEventListener('mousemove',e=>{ cv.style.cursor=zonaSotto(e)?'pointer':''; }); });

// nel bosco servono le indicazioni per muoversi: lago, stagno e il guado più vicino
function guideBosco(p){ const cm=CLAN.felce.campo; if(dist(p,cm)<cm.r+40) return []; const T=TESTI_LEGG.luoghi, out=[];
 out.push({x:L.lago.x,y:L.lago.y,s:'💧',t:T.lago,c:'#9cd0ff',soloFuori:true});
 out.push({x:L.stagno.x,y:L.stagno.y,s:'💧',t:T.stagno,c:'#9cd0ff',soloFuori:true});
 const gy=GUADI.reduce((b,g)=>Math.abs(g-p.y)<Math.abs(b-p.y)?g:b,GUADI[0]);
 out.push({x:p.x<FX0?FX0-24:FX1+24,y:gy,s:'🪨',t:T.guado,c:'#e8dcc0'});
 if(G.funerale) out.push({x:L.roccia.x,y:L.roccia.y,s:'🕯️',t:TESTI_LEGG.funerale.ann.replace('🕯️ ',''),c:'#d9c8ff'});
 return out; }

// all'arrivo il gatto fa ciò per cui è andato, e la scritta dice che cosa ha fatto (richiesta del 12 novembre 2026
function arrivo(p,meta){ const F=TESTI_LEGG.guida.fatto, o=p.sesso==='f'?'a':'o', di=t=>annuncia(t,'#bfe0ff');
 if(p.vuoleCure&&meta.rango==='guaritore'&&G.cats.includes(meta)){ p.vuoleCure=false; const h=meta; curaSolenne(h,()=>{ p.salute=Math.min(100,p.salute+45); if(p.salute>60) p.ferito=false; log(TESTI_LEGG.clicInd.curato(nome(h)),'#c8f0a8'); }); return; } // il guaritore cura il giocatore
 if(meta.clan&&meta.clan!=='felce'&&G.cats.includes(meta)){ incontroNemico(meta); return; }
 if(meta.clan==='felce'&&G.cats.includes(meta)){ menuGatto(meta); return; } // il gatto verso cui si andava, non quello più vicino
 if(meta.tipo&&OGG[meta.tipo]&&G.oggetti.includes(meta)){ raccogliOgg(meta); return; }
 if(meta.tipo&&PREDE[meta.tipo]&&prede.includes(meta)&&p.rango!=='gattino'){ p.caccia={q:meta,t:0}; di(F.caccia()); return; }
 const a=contesto(); if(!a){ di(TESTI_LEGG.guida.arrivo); return; }
 if(a.f===bevi){ const s0=p.sete; a.f(); if(p.sete>s0||scena) di(F.bevi(o)); return; }
 if(a.f===mangiaMucchio){ a.f(); if(scena) di(F.mangia()); return; }
 if(a.f===deposita){ a.f(); di(F.deposita()); return; }
 if(meta.clan||a.f===menuCapo){ a.f(); return; } // un gatto: si apre il suo menu
 di(TESTI_LEGG.guida.arrivo); }
function arrivoInTana(p){ const k=G.dentro, d=L[k];
 if(p.vuolePregare){ p.vuolePregare=false; p.guida={tipo:'punto',t:0,punto:{...puntoStele(d),altare:true}}; return; }
 if(p.vuoleDormire){ p.vuoleDormire=false; if(tanaGiusta(k,p)){ dormi(d); annuncia(TESTI_LEGG.guida.fatto.dormi(),'#bfe0ff'); } return; }
 if(p.energia<60&&tanaGiusta(k,p)&&p.energia<=85){ dormi(d); annuncia(TESTI_LEGG.guida.fatto.dormi(),'#bfe0ff'); } }

// ================== cose solide: gli arredi delle sale e, nel bosco, tronchi e massi ==================
// richiesta del 12 novembre 2026
const RAGGIO_GATTO=0.2; // metri, nella sala
function arredi(k,d){ // in metri, nel sistema della sala (centro della tana = 0, sud = +z): cerchi [x,z,r] e rettangoli [x0,z0,x1,z1]
 const S=SALA_S*0.02, zA=-0.5*d.r*S, Rr=d.r*S, c=[], r=[];
 r.push([-0.95,zA-1.6,0.95,zA+0.06]);            // altare e statue sul piedistallo
 c.push([0,0.4,0.62]);                           // il focolare
 c.push([1.25,zA-0.9,0.5],[-1.25,zA-0.9,0.5]);   // le stele
 c.push([2.0,zA-0.6,0.3],[-2.0,zA-0.6,0.3]);     // i totem
 for(let j=0;j<6;j++){ const a=Math.PI*0.5+0.75+j*((Math.PI*2-1.5-0.9)/5); c.push([Math.cos(a)*Rr*0.78,Math.sin(a)*Rr*0.78,0.3]); } // i menhir
 if(k==='tanaGuaritore'||/Tana1$/.test(k)) r.push([Rr*0.5-0.55,zA+0.45-0.28,Rr*0.5+0.55,zA+0.45+0.28]); // l'armadio delle erbe (js/erbe.js, js/mondo3d.js)
 if(k==='tanaGuerrieri') c.push([2.9,zA+0.2,0.3],[-2.9,zA+0.2,0.3]); // le armature
 if(k==='tanaApprendisti') for(let j=0;j<3;j++) c.push([-2.2+j*0.5,1.2+j*0.3,0.26]); // i ceppi
 if(k==='tanaGuerrieri') c.push([1.3,zA-1.9,0.16],[-1.3,zA-1.9,0.16]); // il torii
 if(k==='tanaApprendisti') c.push([1.45,zA-1.85,0.22],[-1.45,zA-1.85,0.22],[1.7,1.4,0.32],[-1.8,1.5,0.16],[2.6,1.6,0.22],[-2.6,1.6,0.22],[3.2,-0.5,0.22],[-3.2,-0.5,0.22]); // colonne del frontone, tripode, obelisco, anfore
 return {c,r,S}; }
const cacheArredi={};
function arrediSolidi(p,k,d){ const A=cacheArredi[k]||(cacheArredi[k]=arredi(k,d)), S=A.S;
 let x=(p.x-d.x)*S, z=(p.y-d.y)*S;
 for(const [cx,cz,cr] of A.c){ const dx=x-cx, dz=z-cz, dd=Math.hypot(dx,dz), m=cr+RAGGIO_GATTO; if(dd<m){ x=cx+dx/(dd||1)*m; z=cz+dz/(dd||1)*m; } }
 for(const [x0,z0,x1,z1] of A.r){ const X0=x0-RAGGIO_GATTO, Z0=z0-RAGGIO_GATTO, X1=x1+RAGGIO_GATTO, Z1=z1+RAGGIO_GATTO;
  if(x>X0&&x<X1&&z>Z0&&z<Z1){ const e=[x-X0,X1-x,z-Z0,Z1-z], i=e.indexOf(Math.min(...e)); if(i===0) x=X0; else if(i===1) x=X1; else if(i===2) z=Z0; else z=Z1; } }
 p.x=d.x+x/S; p.y=d.y+z/S; }
function solidiBosco(p){ const L0=window.SOLIDI; if(!L0) return;
 for(const o of L0){ const dx=p.x-o.x, dy=p.y-o.y; if(Math.abs(dx)>40||Math.abs(dy)>40) continue; const dd=Math.hypot(dx,dy), m=o.r+6; if(dd<m){ p.x=o.x+dx/(dd||1)*m; p.y=o.y+dy/(dd||1)*m; } } }

// dentro ogni tana un pulsante sullo schermo per uscire subito (richiesta del 12 novembre 2026)
const bottoneEsci=document.createElement('button');
bottoneEsci.textContent='🚪 '+TESTI_LEGG.esci;
bottoneEsci.style.cssText="position:absolute;right:14px;bottom:24px;z-index:6;display:none;cursor:pointer;border:2px solid #f0c060;border-radius:14px;padding:10px 16px;font:700 15px system-ui,sans-serif;color:#2b1a08;background:linear-gradient(#ffe7a6,#e8a840);box-shadow:0 4px 0 #8a5a1c,0 8px 18px rgba(0,0,0,.5)";
bottoneEsci.onclick=e=>{ e.stopPropagation(); if(G&&G.dentro&&!transizione&&!paused) esciTana(); };
addEventListener('DOMContentLoaded',()=>{ const sc=document.getElementById('scena3'); (sc||document.body).appendChild(bottoneEsci); });
setInterval(()=>{ bottoneEsci.style.display=(typeof G!=='undefined'&&G&&G.dentro&&!transizione)?'block':'none'; },200);

// ================== una cosa alla volta ==================
// richiesta del 12 novembre 2026
// In battaglia (chiamata alle armi, assalto al campo, marcia guidata) non arrivano missioni, cerimonie, colonie, nascite, proposte, spiegazioni;
// fuori dalla battaglia, tra un evento importante e il successivo passano almeno 25 secondi di gioco. Gli eventi rimandati arrivano dopo.
function occupato(){ return !!(G&&(G.raid||G.p.auto||G.cats.some(c=>c.stato==='assalto'))); }
function puoEvento(){ if(!G) return false; const p=G.p, m=G.missione; if(G.ultimoEvento==null) G.ultimoEvento=G.t; if(inCaccia()||recitaAtt) return false; // all'inizio della partita, un minuto di quiete; niente eventi durante la caccia o un racconto animato
 if(p.guida||p.caccia||p.preda) return false; // stai andando da qualche parte, cacciando o portando una preda: niente interruzioni
 if(m&&m.inizio!=null&&G.t-m.inizio<70) return false; // lascia avviare la missione, senza soffocare visite e incontri
 return !occupato()&&!scena&&!paused&&!G.cerimonia&&!G.funerale&&!(G.colonia&&!G.colonia.partita)&&G.t-(G.ultimoEvento??-1e9)>60; } // almeno un minuto di gioco tra un evento importante e il successivo
function segnaEvento(){ G.ultimoEvento=G.t; }

// ================== incontro con un gatto nemico: combattere, scappare, a volte diventare amici o avere cuccioli ==================
// richiesta del 12 novembre 2026
const TN=()=>TESTI_LEGG.nemico;
function puoCuccioliNemico(p,e){ return e.sesso!==p.sesso&&p.rango==='guerriero'&&e.rango==='guerriero'&&((e.conosciuto||0)>=1||e.amicoPrima||(e.amico&&e.pacificoFino==null))&&!e.leader&&!e.incinta&&!p.incinta&&!G.attesaGattini&&!(p.allatta&&G.t<p.allatta)&&(p.compagno==null||p.compagno===e.id); }
function incontroNemico(e){ const p=G.p; if(!e||e.stato==='fuga'||paused||scena) return;
 if(!e.opz||G.t>e.opz.fino){ e.opz={fino:G.t+MOON, amici:!e.amico&&Math.random()<0.35, cuccioli:puoCuccioliNemico(p,e)}; }
 segnaEvento(); p.guida=null; p.caccia=null; e.vx=e.vy=0; e.flip=p.x<e.x?-1:1; p.flip=-e.flip;
 const T=TN(), bt=p.vecchio?[{t:T.scappa,f:()=>scappaDa(e)}]:[{t:T.combatti,f:()=>lottaNemico(e)},{t:T.scappa,f:()=>scappaDa(e)}];
 if(ostileClan(e.clan)){ const t=OSTILE.grido(p.sesso==='f'); parla(e,t,4); modale(T.titolo(nome(e)),OSTILE.testo(nome(e),CLAN[e.clan].nome),bt); return; } // nel loro villaggio o dopo un furto non si chiacchiera
 bt.splice(1,0,{t:TESTI_LEGG.stranieri.parla,f:()=>(typeof parlaConNemico==='function'?parlaConNemico(e):parlaStraniero(e))}); // con un aggressore, parlare può fallire (js/storie.js)
 if(e.opz.amici) bt.push({t:T.amici,f:()=>amiciNemico(e)});
 if(e.opz.cuccioli&&puoCuccioliNemico(p,e)) bt.push({t:T.cuccioli,f:()=>cuccioliNemico(e)});
 modale(T.titolo(nome(e)),T.incontro(nome(e),CLAN[e.clan].nome,e.sesso==='f'),bt); }
function lottaNemico(e){ const p=G.p, T=TN();
 const fp=forza(p)*(0.5+p.salute/200), fe=forza(e)*(0.5+(e.hp/e.hpMax)/2), vince=Math.random()<fp/(fp+fe);
 avviaScena('lotta',[p,e],2.8,()=>{
  if(vince){ e.hp=Math.min(e.hp,e.hpMax*0.2); e.stato='fuga'; p.vittorie=(p.vittorie||0)+1; tensione(e.clan,5); annuncia('🏆','#ffe08a'); log(T.vinto(nome(e)),'#ffe08a'); }
  else { p.salute-=30; log(T.perso(nome(e)),'#ff9a8a'); annuncia('😿','#ff9a8a');
   if(p.salute<=0){ sviene(); return; }
   e.stato='pattuglia'; if(typeof puntoNemico==='function') puntoNemico(e);
   const d=dist(p,e)||1; salta(p,p.x+(p.x-e.x)/d*80,p.y+(p.y-e.y)/d*80,0,20,0.5); } }); }
function scappaDa(e){ const p=G.p, T=TN();
 if(Math.random()<0.75){ const d=dist(p,e)||1; salta(p,p.x+(p.x-e.x)/d*110,p.y+(p.y-e.y)/d*110,0,28,0.55); e.stato='pattuglia'; if(typeof puntoNemico==='function') puntoNemico(e); log(T.fuggito,'#cfe8ff'); }
 else { log(T.presoInFuga(nome(e)),'#ff9a8a'); lottaNemico(e); } }
function amiciNemico(e){ const p=G.p, T=TN(), riesce=Math.random()<0.45+((p.spirito??60)>=70?0.15:0);
 avviaScena('naso',[p,e],2,()=>{ if(riesce){ e.amico=true; e.stato='pattuglia'; if(typeof puntoNemico==='function') puntoNemico(e); tensione(e.clan,-8); modale(T.titolo(nome(e)),T.amiciSi(nome(e)),[{t:'🤝 OK'}]); }
  else modale(T.titolo(nome(e)),T.amiciNo(nome(e)),[{t:T.combatti,f:()=>lottaNemico(e)}]); }); }
function cuccioliNemico(e){ const p=G.p, T=TN(), riesce=Math.random()<((e.amico||e.amicoPrima)?0.75:0.5);
 avviaScena('naso',[p,e],2.2,()=>{ if(!riesce){ modale(AM().titolo,T.cucciNo(nome(e))+box(AM().box[0],AM().box[1]),[{t:'🙂 OK'}]); return; }
  modale(AM().titolo,T.cucciSi(nome(e))+'<br><br>'+AM().chiediConsenso,[{t:AM().si,f:()=>{ e.amico=true; accordo(e); }},{t:AM().no,f:()=>modale(AM().titolo,AM().rifiutoTuo(nome(e)),[{t:'🙂 OK'}])}]); }); }
// clic con il mouse su qualunque cosa: gatto, nemico, preda, oggetto, luogo; il gatto ci va e fa l'azione naturale
// (richiesta del 12 novembre 2026)
function cosaSotto(mx,my){ const p=G.p, cand=[];
 const prova=(o,x,y,alt,tipo)=>{ if(!vis(x,y,0)) return; const [sx,sy]=aSchermo(x,y,alt), d=Math.hypot(sx-mx,sy-my); if(d<48) cand.push({o,tipo,d}); };
 for(const c of G.cats){ if(c.stato==='fuga'||c.stato==='colonia'||dist(c,p)>900) continue; prova(c,c.x,c.y,0.22,c.clan==='felce'?'amico':'nemico'); }
 for(const q of prede){ if(q.morta||dist(q,p)>900) continue; prova(q,q.x,q.y,0.1,'preda'); }
 for(const o of (G.oggetti||[])){ if(o.tana||dist(o,p)>900) continue; prova(o,o.x,o.y,0.12,'oggetto'); }
 if(!cand.length) for(const k of [...TANE,'roccia','mucchio','pozza','lago','stagno']){ const l=L[k]; if(dist(l,p)>1200) continue; const [sx,sy]=aSchermo(l.x,l.y,k==='roccia'?1.0:0.3), d=Math.hypot(sx-mx,sy-my); if(d<(k==='lago'||k==='stagno'?110:70)) cand.push({o:metaPosto(k),tipo:'luogo',d}); }
 cand.sort((a,b)=>a.d-b.d); return cand[0]; }
function azioneSu(t){ const p=G.p, o=t.o, vicino=dist(p,o)<(t.tipo==='luogo'?14:45);
 if(t.tipo==='nemico'){ if(p.rango==='gattino'||G.raid) return; if(dist(p,o)<80) incontroNemico(o); else avviaGuida('punto',o); return; }
 if(t.tipo==='amico'&&vicino){ menuGatto(o); return; }
 if(t.tipo==='preda'&&p.rango!=='gattino'&&dist(p,o)<200){ p.caccia={q:o,t:0}; return; }
 if(t.tipo==='oggetto'&&dist(p,o)<30){ raccogliOgg(o); return; }
 avviaGuida('punto',o); }
addEventListener('DOMContentLoaded',()=>{ const cv=document.getElementById('c'); if(!cv) return;
 let giu2=null; cv.addEventListener('mousedown',e=>{ giu2={x:e.clientX,y:e.clientY}; });
 cv.addEventListener('click',e=>{ if(giu2&&Math.hypot(e.clientX-giu2.x,e.clientY-giu2.y)>6) return; if(!G||paused||scena||G.dentro||zonaSotto(e)) return; const r=cv.getBoundingClientRect(), t=cosaSotto(e.clientX-r.left,e.clientY-r.top); if(t) azioneSu(t); });
 cv.addEventListener('mousemove',e=>{ if(!G||G.dentro||zonaSotto(e)) return; const r=cv.getBoundingClientRect(); cv.style.cursor=cosaSotto(e.clientX-r.left,e.clientY-r.top)?'pointer':''; }); });

// l'inquadratura segue ciò che accade: chi parla al giocatore entra nell'immagine insieme a lui
// (richiesta del 12 novembre 2026)
let fuoco=null;
function mettiAFuoco(c,ms){ fuoco={id:c.id,fino:performance.now()+ms}; }
function fuocoCamera(){ if(!fuoco||performance.now()>fuoco.fino) return null; const c=gatto(fuoco.id); if(!c||dist(c,G.p)>500) return null; return c; }

// sopra l'imbocco di ogni tana una freccia che indica dove entrare; cliccandola il gatto ci va ed entra
// (richiesta del 12 novembre 2026)
function etichetteOggetti(){ if(G.dentro||!G.oggetti) return; const p=G.p;
 for(const q of prede){ if(!q.lenta||q.morta||dist(p,q)>320||!vis(q.x,q.y,0)) continue; const [x,y]=aSchermo(q.x,q.y,0.35); ctx.font='16px system-ui'; ctx.textAlign='center'; ctx.fillText('💤',x,y+Math.sin(performance.now()/400+q.x)*3); } // le prede assonnate, più facili
 for(const o of G.oggetti){ if(o.tana||dist(p,o)>320||!vis(o.x,o.y,0)) continue; const [x,y]=aSchermo(o.x,o.y,0.55); targaCliccabile('✨ '+cap(nomeOgg(o.tipo)),x,y,OGG[o.tipo].cat==='culto'?'#d9b8ff':OGG[o.tipo].cat==='arma'?'#ffb0a0':'#ffe9a8',o); } }
function frecceTane(inVillaggio){ etichetteOggetti(); etichettaAltare();
 if(G.funerale&&!G.dentro&&vis(L.roccia.x,L.roccia.y,0)){ const [x,y]=aSchermo(L.roccia.x,L.roccia.y,2.6); targaCliccabile(TESTI_LEGG.funerale.ann,x,y,'#d9c8ff',davantiRoccia()); }
 if(!inVillaggio||G.dentro) return; const p=G.p, t=performance.now()/1000;
 for(const k of TANE){ const e=ingressoTana(k), d=L[k], davanti={x:d.x,y:d.y+d.r*0.95}; if(dist(p,d)>380||!vis(davanti.x,davanti.y,0)) continue;
  const [x,y0]=aSchermo(davanti.x,davanti.y,0.55), y=y0+Math.sin(t*4+d.x)*5;
  ctx.save(); ctx.fillStyle='#ffd34a'; ctx.strokeStyle='rgba(60,30,0,0.85)'; ctx.lineWidth=2.5;
  ctx.beginPath(); ctx.moveTo(x,y+16); ctx.lineTo(x-13,y); ctx.lineTo(x-5,y); ctx.lineTo(x-5,y-12); ctx.lineTo(x+5,y-12); ctx.lineTo(x+5,y); ctx.lineTo(x+13,y); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
  targaCliccabile('🚪 '+TESTI_LEGG.entra,x,y-22,'#ffe08a',e); } }

// ================== pannello di destra: scheda del gatto con l'umore, diario più grande con un'immagine per ogni voce ==================
// richiesta del 12 novembre 2026
function muso(col,umore,rango,piccolo){ // il muso del gatto in SVG, con l'espressione e il segno del rango
 const occhi=umore==='stanco'?`<path d="M18 33 q5 4 10 0 M36 33 q5 4 10 0" stroke="#1d2a10" stroke-width="2.5" fill="none"/>`
  :`<ellipse cx="23" cy="33" rx="${piccolo?5:4}" ry="${piccolo?6.5:5.5}" fill="#1d2a10"/><ellipse cx="41" cy="33" rx="${piccolo?5:4}" ry="${piccolo?6.5:5.5}" fill="#1d2a10"/><circle cx="24.5" cy="31" r="1.6" fill="#fff"/><circle cx="42.5" cy="31" r="1.6" fill="#fff"/>`;
 const bocca={fame:`<ellipse cx="32" cy="49" rx="5" ry="4" fill="#6a1a20"/><path d="M35 52 q1 5 0 7" stroke="#8ad0ff" stroke-width="2" fill="none"/>`,
  sete:`<path d="M27 49 q5 -3 10 0" stroke="#6a1a20" stroke-width="2" fill="none"/>`,ferito:`<path d="M27 50 q5 -3 10 0" stroke="#6a1a20" stroke-width="2" fill="none"/>`,
  stanco:`<ellipse cx="32" cy="49" rx="2.5" ry="2" fill="#6a1a20"/>`}[umore]||`<path d="M26 47 q6 6 12 0" stroke="#6a1a20" stroke-width="2" fill="none"/>`;
 let extra='';
 if(umore==='ferito') extra+=`<rect x="12" y="15" width="40" height="7" rx="3" fill="#f4f0e8" stroke="#c8b8a8" transform="rotate(-12 32 18)"/><rect x="36" y="36" width="9" height="5" fill="#f4f0e8"/>`;
 if(umore==='fame') extra+=`<text x="50" y="60" font-size="13">🍖</text>`; if(umore==='sete') extra+=`<text x="50" y="60" font-size="13">💧</text>`; if(umore==='stanco') extra+=`<text x="46" y="16" font-size="12">💤</text>`;
 if(rango==='guerriero'&&umore!=='ferito') extra+=`<rect x="11" y="18" width="42" height="6" rx="2" fill="#c0281e"/><path d="M53 21 l7 4 l-7 2 z" fill="#c0281e"/>`;
 if(rango==='guaritore') extra+=`<path d="M30 14 q8 -10 14 -4 q-6 8 -14 4 z" fill="#5aa040" stroke="#2a5a20"/>`;
 if(rango==='apprendista') extra+=`<text x="26" y="20" font-size="11">⭐</text>`;
 if(rango==='capo') extra+=`<path d="M20 16 l4 -8 l4 6 l4 -8 l4 8 l4 -6 l4 8 z" fill="#f0c040" stroke="#8a6a10"/>`;
 return `<svg viewBox="0 0 64 64"><polygon points="10,26 14,4 28,18" fill="${col}" stroke="#2a1a10" stroke-width="2"/><polygon points="54,26 50,4 36,18" fill="${col}" stroke="#2a1a10" stroke-width="2"/>
 <polygon points="15,20 16,10 24,17" fill="#f3a6b8"/><polygon points="49,20 48,10 40,17" fill="#f3a6b8"/><ellipse cx="32" cy="36" rx="23" ry="21" fill="${col}" stroke="#2a1a10" stroke-width="2"/>
 ${occhi}<polygon points="29,41 35,41 32,44" fill="#e07a8a"/>${bocca}<g stroke="#2a1a10" stroke-width="1.2"><line x1="6" y1="40" x2="20" y2="42"/><line x1="6" y1="46" x2="20" y2="45"/><line x1="58" y1="40" x2="44" y2="42"/><line x1="58" y1="46" x2="44" y2="45"/></g>${extra}</svg>`; }
function umoreDi(p){ if(p.salute<40||p.ferito) return 'ferito'; if(p.fame<30) return 'fame'; if(p.sete<30) return 'sete'; if(p.energia<25) return 'stanco'; if(p.incinta) return 'incinta'; return 'felice'; }
const stilePan=document.createElement('style');
stilePan.textContent=`
#pnome,#prango,#pguerra{display:none!important} /* niente indicatori di tensione: «togli indicatori tensione per alleggerire» */
#profilo{display:flex;gap:12px;align-items:center;margin:2px 0 10px;padding:10px;border-radius:14px;background:linear-gradient(135deg,#2a3a26,#1c261a);border:1px solid #5a7a4a}
#profilo svg{flex:none;width:78px;height:78px;filter:drop-shadow(0 3px 4px rgba(0,0,0,.5))}
#profilo .n{font:800 21px system-ui,sans-serif;color:#ffe9a8;line-height:1.15}
#profilo .r{font:600 14px system-ui,sans-serif;color:#d8e8c8;margin:2px 0 6px}
#profilo .chips{display:flex;flex-wrap:wrap;gap:6px}
#profilo .chip{font:700 14px system-ui,sans-serif;background:rgba(0,0,0,.35);border:1px solid rgba(255,230,170,.3);border-radius:999px;padding:3px 9px;color:#fff3d6}
#profilo .chip.umore{background:rgba(255,220,140,.15)}
#pobj b,#pmis b{font-size:16px}
#log{font-size:14.5px!important;line-height:1.35}
#log .voce{display:flex;gap:9px;align-items:flex-start;margin:0 0 9px;padding:6px 6px 6px 4px;border-radius:10px;background:rgba(255,255,255,.04)}
#log .voce .ic{flex:none;width:38px;height:38px;display:flex;align-items:center;justify-content:center;font-size:24px;border-radius:50%;background:rgba(0,0,0,.3)}
#log .voce .ic svg{width:38px;height:38px}
`;
document.head.appendChild(stilePan);
const profilo=document.createElement('div'); profilo.id='profilo';
addEventListener('DOMContentLoaded',()=>{ const pn=document.getElementById('pnome'); if(pn) pn.parentNode.insertBefore(profilo,pn); });
let profiloChiave='';
setInterval(()=>{ const p=typeof G!=='undefined'&&G&&G.p; profilo.style.display=p?'flex':'none'; if(!p) return;
 const T=TESTI_LEGG.profilo, u=umoreDi(p), rk=p.leader?'capo':p.rango, ra=cap(rangoTesto(p));
 const chiave=[nome(p),u,rk,lune(p),forza(p),p.colore,ra].join('|'); if(chiave===profiloChiave) return; profiloChiave=chiave;
 profilo.innerHTML=muso(p.colore||'#d08a40',u,rk,p.rango==='gattino')+`<div><div class="n">${nome(p)}</div><div class="r">${ra}</div><div class="chips"><span class="chip">${T.lune(lune(p))}</span><span class="chip">${T.forza(forza(p))}</span><span class="chip umore">${T.umori[u]}</span></div></div>`; },300);
// il diario: ogni voce con un'immagine (il muso di chi parla, oppure l'icona della notizia)
function voceDiario(t){ const m=/^(?:💬|🗣️)\s*([^:«]+?):\s*«/.exec(t); let ic='';
 if(m){ const c=G&&G.cats.find(c=>nome(c)===m[1].trim()); if(c) ic=muso(c.colore||'#d08a40','felice',c.leader?'capo':c.rango,c.rango==='gattino'); }
 if(!ic){ const e=/^\s*(\p{Extended_Pictographic}(?:️|‍\p{Extended_Pictographic})*)/u.exec(t.replace(/<[^>]+>/g,'')); ic=e?e[1]:'🐾'; if(e) t=t.replace(e[1],'').trimStart(); }
 return `<div class="voce"><div class="ic">${ic}</div><div>${t}</div></div>`; }
addEventListener('DOMContentLoaded',()=>{ if(typeof log!=='function') return; const orig=log; log=function(t,col){ orig(voceDiario(String(t)),col); }; });

// ================== oggetti: armi gattesche, reperti, oggetti di culto ==================
// richiesta del 12 novembre 2026
const OGG={
 katana:{cat:'arma',forza:3,ic:'🗡️',it:'una katana minuscola',en:'a tiny katana',fr:'un minuscule katana',d:{it:'Una lama da gatto samurai.',en:'A blade for a samurai cat.',fr:'Une lame de chat samouraï.'}},
 artigli:{cat:'arma',forza:2,ic:'🦾',it:'gli artigli d’acciaio',en:'steel claws',fr:'des griffes d’acier',d:{it:'Si infilano sulle zampe anteriori.',en:'They slip over the front paws.',fr:'Elles se glissent sur les pattes avant.'}},
 lancia:{cat:'arma',forza:2,ic:'🔱',it:'una lancia di spina',en:'a thorn spear',fr:'une lance d’épine',d:{it:'Una spina di rovo lunga e dura.',en:'A long, hard bramble thorn.',fr:'Une longue épine de ronce bien dure.'}},
 scudo:{cat:'arma',forza:1,ic:'🛡️',it:'uno scudo di corteccia',en:'a bark shield',fr:'un bouclier d’écorce',d:{it:'Leggero e robusto.',en:'Light and sturdy.',fr:'Léger et solide.'}},
 elmo:{cat:'arma',forza:1,ic:'🪖',it:'un elmo di guscio di noce',en:'a walnut-shell helmet',fr:'un casque en coquille de noix',d:{it:'Protegge le orecchie.',en:'It protects your ears.',fr:'Il protège les oreilles.'}},
 piuma:{cat:'reperto',ic:'🪶',it:'una piuma di corvo',en:'a raven feather',fr:'une plume de corbeau',d:{it:'Nera e lucida.',en:'Black and shiny.',fr:'Noire et brillante.'}},
 conchiglia:{cat:'reperto',ic:'🐚',it:'una conchiglia',en:'a shell',fr:'un coquillage',d:{it:'Viene da molto lontano.',en:'It comes from far away.',fr:'Il vient de très loin.'}},
 cristallo:{cat:'reperto',ic:'💎',it:'un cristallo',en:'a crystal',fr:'un cristal',d:{it:'Brilla anche al buio.',en:'It shines even in the dark.',fr:'Il brille même dans le noir.'}},
 osso:{cat:'reperto',ic:'🦴',it:'un osso inciso',en:'a carved bone',fr:'un os gravé',d:{it:'Qualcuno ci ha inciso dei segni.',en:'Someone carved signs on it.',fr:'Quelqu’un y a gravé des signes.'}},
 pietraforata:{cat:'reperto',ic:'🪨',it:'una pietra forata',en:'a holed stone',fr:'une pierre percée',d:{it:'Si dice che porti fortuna.',en:'They say it brings luck.',fr:'On dit qu’elle porte bonheur.'}},
 idolo:{cat:'culto',ic:'🗿',it:'l’idolo della Nebbia',en:'the Mist idol',fr:'l’idole de la Brume',d:{it:'Un idolo di pietra grigia.',en:'A grey stone idol.',fr:'Une idole de pierre grise.'}},
 totem:{cat:'culto',ic:'🪆',it:'il piccolo totem delle Pietre',en:'the little Stone totem',fr:'le petit totem des Pierres',d:{it:'Inciso con il simbolo del clan.',en:'Carved with the clan’s sign.',fr:'Gravé du signe du clan.'}},
 campanella:{cat:'culto',ic:'🔔',it:'una campanella sacra',en:'a sacred bell',fr:'une clochette sacrée',d:{it:'Suona da sola quando c’è vento.',en:'It rings by itself in the wind.',fr:'Elle sonne toute seule quand il y a du vent.'}},
};
const nomeOgg=t=>OGG[t][LINGUA], TO=()=>TESTI_LEGG.ogg;
function postoLibero(){ for(let i=0;i<60;i++){ const x=rnd(60,WW-60), y=rnd(60,WH-60); if(!inCampo(x,y,70)&&!acqua(x,y)&&!(x>FX0-40&&x<FX1+40)) return {x,y}; } return {x:200,y:600}; }
function nuovoOgg(tipo,pos){ G.oggId=(G.oggId||0)+1; const p=pos||postoLibero(); G.oggetti.push({id:G.oggId,tipo,x:p.x,y:p.y}); }
function curaOggetti(){ if(!G.oggetti){ G.oggetti=[]; for(const t of oggLiberi()) nuovoOgg(t);
  for(const [t,cl] of [['idolo','nebbia'],['totem','pietre'],['campanella',Math.random()<0.5?'nebbia':'pietre']]){ const cm=CLAN[cl].campo; nuovoOgg(t,{x:cm.x+rnd(-50,50),y:cm.y+rnd(-50,50)}); } G.prossimoOgg=G.t+MOON; }
 if(G.t>(G.prossimoOgg||0)){ G.prossimoOgg=G.t+MOON; const liberi=G.oggetti.filter(o=>OGG[o.tipo].cat!=='culto'&&!o.tana).length;
  if(liberi<16){ const fuori=G.oggetti.map(o=>o.tipo), inv=G.p.inventario||[], rari=oggLiberi().filter(t=>!fuori.includes(t)&&!inv.includes(t)); nuovoOgg(pick(rari.length?rari:oggLiberi())); } // compaiono prima gli oggetti che ancora non si sono visti
  oggettiNelleTane();
  for(const [t,cl] of [['idolo','nebbia'],['totem','pietre']]) if(!G.oggetti.some(o=>o.tipo===t)&&!(G.p.inventario||[]).includes(t)&&Math.random()<0.3){ const cm=CLAN[cl].campo; nuovoOgg(t,{x:cm.x+rnd(-50,50),y:cm.y+rnd(-50,50)}); } } }
const oggLiberi=()=>Object.keys(OGG).filter(t=>OGG[t].cat!=='culto');
// oggetti dentro le tane del clan: stanno ai lati della sala, si vedono e si raccolgono soltanto da dentro (campo `tana`)
function oggettiNelleTane(){ if(G.t<(G.prossimoOggTana||0)) return; const dentro=G.oggetti.filter(o=>o.tana); if(dentro.length>=3){ G.prossimoOggTana=G.t+MOON; return; } G.prossimoOggTana=G.t+MOON*(dentro.length?2:0.2);
 const libere=TANE.filter(k=>!dentro.some(o=>o.tana===k)&&G.dentro!==k); if(!libere.length) return; const k=pick(libere), d=L[k], lato=Math.random()<0.5?-1:1, arcani=Object.keys(OGG).filter(t=>OGG[t].cat==='arcano');
 G.oggId=(G.oggId||0)+1; G.oggetti.push({id:G.oggId,tipo:pick(arcani.length?arcani:oggLiberi()),x:d.x+lato*d.r*0.52,y:d.y-d.r*0.08+rnd(-4,8),tana:k}); }
function oggettoVicino(p,r=30){ return (G.oggetti||[]).find(o=>(G.dentro?o.tana===G.dentro:!o.tana)&&Math.hypot(o.x-p.x,o.y-p.y)<(G.dentro?16:r)); }
function raccogliOgg(o){ const p=G.p, T=TO(), O=OGG[o.tipo]; if(!G.oggetti.includes(o)) return;
 if(O.cat==='arma'&&p.rango!=='guerriero'){ log('⚔️ '+T.soloGuerrieri,'#ffd27a'); return; }
 G.oggetti=G.oggetti.filter(x=>x!==o); p.inventario=p.inventario||[]; p.inventario.push(o.tipo); segnaEvento();
 avviaScena('annusa',[p],0.8,()=>{});
 const cl=territorio(o.x,o.y);
 if(O.cat==='culto'&&cl!=='felce'&&CLAN[cl]){ offeso(cl); tensione(cl,25,T.motivoFurto); log(T.rubato(nomeOgg(o.tipo),CLAN[cl].nome),'#ffb37a'); annuncia(O.ic+' '+cap(nomeOgg(o.tipo)),'#ffb37a');
  const g=G.cats.filter(c=>c.clan===cl&&c.stato!=='fuga'&&!c.amico&&dist(c,p)<260).sort((a,b)=>dist(a,p)-dist(b,p))[0];
  if(g&&Math.random()<0.7){ g.stato='caccia'; g.bersaglio=0; parla(g,'Ffff!',3); log(T.visto(nome(g)),'#ff9a8a'); } }
 else { log(T.preso(nomeOgg(o.tipo),O.d[LINGUA]+(O.forza?' ('+T.forza(O.forza)+')':'')),'#ffe9a8'); annuncia(O.ic+' '+cap(nomeOgg(o.tipo)),'#ffe9a8'); } }
function bonusArma(){ const inv=(G&&G.p&&G.p.inventario)||[]; let b=0; for(const t of inv) if(OGG[t]&&OGG[t].forza>b) b=OGG[t].forza; return b; }
function offerte(){ const inv=(G.p.inventario||[]), T=TO(), fatte=new Set(), out=[];
 for(const t of inv){ const O=OGG[t]; if(!O||O.cat==='arma'||fatte.has(t)) continue; fatte.add(t);
  out.push({t:T.offri(nomeOgg(t)),f:()=>{ const i=G.p.inventario.indexOf(t); if(i>=0) G.p.inventario.splice(i,1); log(T.offerto(nomeOgg(t)),'#d9b8ff'); spirito(O.cat==='culto'?15:6,'preghiera'); if(O.cat==='culto') setTimeout(()=>bottino(t),300); }}); }
 return out.slice(0,3); }
// l'inventario nel pannello di destra
const stileInv=document.createElement('style');
stileInv.textContent=`#inventario{margin:6px 0 8px;padding:8px 10px;border-radius:12px;background:rgba(0,0,0,.25);border:1px solid rgba(255,230,170,.25)}
#inventario .tit{font:700 15px system-ui,sans-serif;color:#ffe9a8;margin-bottom:5px}
#inventario .og{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;margin:2px;font-size:24px;border-radius:10px;background:rgba(255,255,255,.07);position:relative;cursor:help}
#inventario .og b{position:absolute;right:2px;bottom:0;font:700 11px system-ui;color:#ffe08a}
#inventario .og.arma{background:rgba(255,120,90,.15)} #inventario .og.culto{background:rgba(190,140,255,.18)}
#inventario .v{font:13px system-ui;color:#c8d8b8}`;
document.head.appendChild(stileInv);
const inventario=document.createElement('div'); inventario.id='inventario';
addEventListener('DOMContentLoaded',()=>{ const pm=document.getElementById('pmis'); if(pm) pm.parentNode.insertBefore(inventario,pm.nextSibling); });
let invChiave=null;
setInterval(()=>{ const p=typeof G!=='undefined'&&G&&G.p; inventario.style.display=p?'block':'none'; if(!p) return; const inv=p.inventario||[], ch=inv.join(','); if(ch===invChiave) return; invChiave=ch; const T=TO();
 const conta={}; inv.forEach(t=>conta[t]=(conta[t]||0)+1);
 inventario.innerHTML=`<div class="tit">${T.inventario}</div>`+(inv.length?Object.entries(conta).map(([t,n])=>{ const O=OGG[t]; return `<span class="og ${O.cat}" title="${cap(nomeOgg(t))} — ${T[O.cat]}${O.forza?' · '+T.forza(O.forza):''}">${O.ic}${n>1?`<b>${n}</b>`:''}</span>`; }).join(''):`<div class="v">${T.vuoto}</div>`); },400);

// gli indicatori in basso sono cliccabili: portano dove si ricarica (richiesta del 12 novembre 2026)
function preghiAllAltare(){ if(L[G.dentro]&&L[G.dentro].clan) rubaAltare(G.dentro); else prega(G.dentro); }
function clicIndicatore(k){ if(!G||!G.p||paused||scena) return; const p=G.p, T=TESTI_LEGG.clicInd;
 if(k==='sete'){ if(G.dentro){ esciTana(); setTimeout(()=>avviaGuida('punto',acquaVicina(G.p)),600); return; } avviaGuida('punto',acquaVicina(p)); return; }
 if(k==='salute'){ const h=piuVicino(felci().filter(c=>c.rango==='guaritore'&&c!==p&&!c.ferito),p); if(h){ p.vuoleCure=true; avviaGuida('punto',h); } else avviaGuida('punto',ingressoTana('tanaGuaritore')); return; }
 if(k==='energia'){ p.vuoleDormire=true; avviaGuida('punto',tanaMia(p)); return; }
 if(k==='fame'){ const mucchio=()=>avviaGuida('punto',L.mucchio), caccia=()=>avviaGuida('punto',zonaCaccia(G.p));
  if(p.rango==='gattino'||G.cibo<=0){ (p.rango==='gattino'||G.cibo>0?mucchio:caccia)(); return; }
  modale(T.fame,'',[{t:T.mucchio(G.cibo),f:mucchio},{t:T.caccia,f:caccia}]); return; }
 if(k==='spirito'){ p.vuolePregare=true; let best=TANE[0],bd=1e9; for(const t of TANE){ const d=dist(p,L[t]); if(d<bd){bd=d;best=t;} }
  if(G.dentro){ p.vuolePregare=false; p.guida={tipo:'punto',t:0,punto:{...puntoStele(L[G.dentro]),altare:true}}; return; }
  avviaGuida('punto',ingressoTana(best)); } }
addEventListener('DOMContentLoaded',()=>{ for(const k of ['fame','sete','energia','salute','spirito']){ const el=document.getElementById('ind-'+k); if(!el) continue; el.classList.add('clic'); el.addEventListener('click',e=>{ e.stopPropagation(); clicIndicatore(k); });
  el.title=TESTI_LEGG.clicInd[{fame:'cibo',sete:'acqua',energia:'energia',salute:'salute',spirito:'spirito'}[k]]; } });

// ================== la strada verso il rango di guerriero, chiara ==================
// richiesta del 12 novembre 2026
const stileVerso=document.createElement('style');
stileVerso.textContent=`#verso{margin:0 0 8px;padding:8px 10px;border-radius:12px;background:rgba(255,224,138,.08);border:1px solid rgba(255,224,138,.35)}
#verso .t{font:800 15px system-ui,sans-serif;color:#ffe08a;margin-bottom:4px} #verso .r{display:flex;flex-wrap:wrap;gap:5px}
#verso .q{font:700 13px system-ui,sans-serif;padding:2px 8px;border-radius:999px;background:rgba(0,0,0,.3)} #verso .q.ok{color:#9be07f} #verso .q.no{color:#ffd6a0}
#verso .o{font:800 14px system-ui;color:#ffe9a8;margin-top:6px;padding:4px 8px;border-radius:8px;background:rgba(255,120,90,.18);border:1px solid rgba(255,150,110,.4)} #verso .pr{font:800 14px system-ui;color:#9be07f}
#solenne{position:absolute;inset:0;pointer-events:none;z-index:4;opacity:0;transition:opacity 1.2s;background:radial-gradient(ellipse at 50% 55%,rgba(255,210,120,.16) 0%,rgba(40,20,0,.0) 30%,rgba(8,4,0,.85) 100%)}
#solenne.si{opacity:1}`;
document.head.appendChild(stileVerso);
const verso=document.createElement('div'); verso.id='verso'; const solenne=document.createElement('div'); solenne.id='solenne';
addEventListener('DOMContentLoaded',()=>{ const pr=document.getElementById('profilo'); if(pr&&pr.parentNode) pr.parentNode.insertBefore(verso,pr.nextSibling); const sc=document.getElementById('scena3'); if(sc) sc.appendChild(solenne); });
let versoChiave=null;
setInterval(()=>{ const p=typeof G!=='undefined'&&G&&G.p; const T=TESTI_LEGG.verso;
 const mostra=p&&(p.rango==='gattino'||p.rango==='apprendista'); verso.style.display=mostra?'block':'none'; if(!mostra) return;
 const req=requisiti(), ch=JSON.stringify(req)+p.rango+p.via+(p.battaglie||0)+!!p.convocato; if(ch===versoChiave) return; versoChiave=ch;
 const tit=p.rango==='gattino'?T.titA:(p.via==='guaritore'?T.titG:T.tit);
 const tutto=req.every(r=>r.ok);
 verso.innerHTML=`<div class="t">${tit}</div>`+(tutto?`<div class="pr" data-k="roccia">${T.pronto}</div>`:`<div class="r">${req.map(r=>`<span class="q ${r.ok?'ok':'no'}" data-k="${r.b}">${r.ok?'✔':'○'} ${T.b[r.b]||r.b} ${r.v}</span>`).join('')}</div>`)
  +(p.rango==='apprendista'&&p.via==='guerriero'&&!tutto?`<div class="o" data-k="battaglie">⚔️ ${T.oppure(p.battaglie||0)}</div>`:'');
 verso.querySelectorAll('[data-k]').forEach(el=>{ el.style.cursor='pointer'; el.onclick=e=>{ e.stopPropagation(); const k=el.dataset.k; if(k==='roccia') avviaGuida('punto',G.p.rango==='apprendista'&&G.p.via==='guaritore'&&!G.p.convocato?L.lago:davantiRoccia()); else if(k!=='lune') vaiCompito(k); }; }); },500);
// dopo le battaglie: due vittorie portano alla convocazione; dopo una sconfitta il mentore ricorda che cosa manca
let raidPrima=false, battPrima=0;
function dopoBattaglie(p){ const r=!!G.raid;
 if(raidPrima&&!r){ const vinta=(p.battaglie||0)>battPrima;
  if(vinta){ if(p.rango==='guerriero') p.vinte=(p.vinte||0)+2; for(const c of G.cats) if(c.clan==='felce'&&c.inMischia!=null&&G.t-c.inMischia<MOON*2) c.vinte=(c.vinte||0)+2; } // classifica: una battaglia vinta vale due
  if(p.rango==='apprendista'&&p.via==='guerriero'&&!p.convocato){
   if(vinta&&(p.battaglie||0)>=3){ p.convocato=true; const c=capo(); setTimeout(()=>{ const t=TESTI_LEGG.convoca(nome(p)); if(c){ parla(c,t,8); mettiAFuoco(c,5000); log(`🗣️ ${nome(c)}: «${t}»`,'#ffe08a'); } annuncia(TESTI_LEGG.convocaAnn,'#ffe08a'); segnaEvento(); },2500); }
   else if(!vinta){ const m=gatto(p.mentore)||capo(); const manca=requisiti().filter(x=>!x.ok).map(x=>`${TESTI_LEGG.verso.b[x.b]||x.b} ${x.v}`).join(', ');
    if(m&&manca) setTimeout(()=>{ const t=TESTI_LEGG.manca(nome(p),manca); parla(m,t,9); mettiAFuoco(m,4000); log(`💬 ${nome(m)}: «${t}»`,'#cfe8ff'); },3000); } } }
 if(raidPrima&&!r) caduto(p);
 if(p.rango==='apprendista'&&p.via==='guaritore'&&!p.convocato&&(p.erbeTotali||0)>=5&&!scena&&!paused){ p.convocato=true; const c=capo(), t=TESTI_LEGG.guaritore.convoca(nome(p)); if(c){ parla(c,t,8); mettiAFuoco(c,4500); log(`🗣️ ${nome(c)}: «${t}»`,'#c8f0a8'); } annuncia(TESTI_LEGG.convocaAnn,'#c8f0a8'); segnaEvento(); }
 if(r&&!raidPrima) colpiRaid=0;
 raidPrima=r; if(r) battPrima=p.battaglie||0; }
// le cerimonie, più solenni: bordi in ombra, luce calda al centro, il canto del clan
let cantoT=0;
function solennita(dt){ const rito=(scena&&(scena.tipo==='rito'||scena.tipo==='cerimonia'||scena.tipo==='cura'))||!!G.riposoFinale; solenne.classList.toggle('si',!!rito);
 if(rito){ cantoT-=dt; if(cantoT<=0){ cantoT=1.6; const a=scena?scena.attori:G.cats.filter(c=>c.clan==='felce'&&dist(c,G.p)<60), c=a[Math.floor(Math.random()*a.length)]; if(c) testo(c.x,c.y-40,TESTI_LEGG.canto,'#ffe9b0',10,-16,1.6); } } }

setInterval(()=>{ if(typeof G!=='undefined'&&G&&G.p) solennita(0.2); },200); // gira anche durante le scene

// Esc: pausa, con salvare, scegliere la partita o uscire al menu iniziale (richiesta del 12 novembre 2026)
function pausa(){ const T=TESTI_LEGG.pausa;
 modale(T.tit,T.testo,[{t:T.continua},{t:T.salva,f:()=>{ salva(); mostraToast(T.salvata,'#9be07f'); }},{t:T.partite,f:()=>{ salva(); menuSalvataggi(false); }},...(window.REG?[{t:REG.testi.bottone,f:()=>{ REG.esporta(); }}]:[]),{t:T.esci,f:()=>{ salva(); location.href='index.html'+(LINGUA==='it'?'':'#'+LINGUA); }}]); }
addEventListener('keydown',e=>{ if(e.key!=='Escape'||typeof G==='undefined'||!G) return; const m=document.getElementById('modal'); if(m&&m.style.display==='flex') return; e.preventDefault(); pausa(); });

// svenire: ci si risveglia dentro la tana del guaritore, con un guaritore che cura (richiesta del 12 novembre 2026)
addEventListener('DOMContentLoaded',()=>{ if(typeof sviene!=='function') return; const orig=sviene; sviene=function(){ orig(); if(G) G.risveglio=true; }; });
setInterval(()=>{ if(typeof G==='undefined'||!G||!G.risveglio||paused||scena||transizione) return; G.risveglio=false;
 const p=G.p, k='tanaGuaritore', d=L[k]; G.dentro=k; p.uscito=null; p.x=d.x-4; p.y=d.y+d.r*0.15; p.vx=p.vy=0; p.guida=null; p.caccia=null; p.sopra=false; p.elev=0;
 if(window.R3D){ R3D.cam3.yaw=Math.PI; R3D.cam3.init=false; }
 const h=piuVicino(felci().filter(c=>c.rango==='guaritore'&&!c.ferito),p)||piuVicino(felci().filter(c=>c.rango==='anziano'||c.rango==='guerriero'),p);
 if(!h){ p.salute=Math.min(100,p.salute+30); return; }
 h.x=p.x+14; h.y=p.y; h.vx=h.vy=0; h.stato='campo';
 setPosa(p,'dorme',3); curaSolenne(h,()=>{ p.salute=Math.min(100,p.salute+35); p.ferito=false; log(TESTI_LEGG.risveglio(nome(h)),'#c8f0a8'); }); },300);

// ================== i caduti in battaglia e il funerale alla Roccia Alta ==================
// richiesta del 12 novembre 2026
// (nella v1 nessuno muore; in Gattini 3D a volte un guerriero ferito non ce la fa)
function caduto(p){ if(G.funerale||G.bolla||G.veglia||Math.random()>0.4) return; // quando il guaritore veglia sulla battaglia nessuno cade
 const esclusi=new Set([p.compagno,p.mentore,p.allievo,G.madre].filter(x=>x!=null));
 if(colpiRaid<6) return; // nessuno cade se la battaglia non c'è stata
 const cand=G.cats.filter(c=>c.clan==='felce'&&c.inMischia!=null&&G.t-c.inMischia<MOON*2&&(c.ferito||c.hp<c.hpMax*0.5)&&!c.leader&&!c.figlio&&!esclusi.has(c.id)&&(c.rango==='guerriero'||c.rango==='apprendista'));
 if(!cand.length) return; const c=pick(cand), F=TESTI_LEGG.funerale, n=nome(c);
 G.funerale={nome:n,colore:c.colore,sesso:c.sesso,rango:rangoTesto(c),x:L.roccia.x+4,y:L.roccia.y+L.roccia.r+34,da:G.t};
 G.cats=G.cats.filter(x=>x!==c); liberaNome(c); if(p.allievo===c.id) p.allievo=null; if(p.mentore===c.id) p.mentore=null;
 log(F.caduto(n),'#d9c8ff');
 setTimeout(()=>{ const k=capo(); if(k){ parla(k,F.chiama(n),9); mettiAFuoco(k,4000); log(`🗣️ ${nome(k)}: «${F.chiama(n)}»`,'#d9c8ff'); } annuncia(F.ann,'#d9c8ff'); segnaEvento(); },4000); }
setInterval(()=>{ if(typeof G==='undefined'||!G||!G.funerale||paused||scena||recitaAtt||G.dentro||G.raid||G.cats.some(c=>c.stato==='assalto')) return; const f=G.funerale, p=G.p;
 if(dist(p,L.roccia)>150||f.inCorso) return; f.inCorso=true; const F=TESTI_LEGG.funerale, k=capo();
 const altri=partecipanti().filter(c=>c!==p), att=[p,...altri];
 avviaScena('rito',att,6,()=>{
  const bt=['veglia','fiore','storia'].map(g=>({t:F[g],f:()=>{ spirito(g==='veglia'?12:g==='storia'?10:8,F.motivo);
   modale(F.tit(f.nome),`<i>${F.fatto[g]}</i><br><br>${F.fine(f.nome)}`+box(F.box[0],F.box[1]),[{t:'🕯️'}]);
   G.caduti=G.caduti||[]; G.caduti.push(f.nome); G.funerale=null; }}));
  modale(F.tit(f.nome),F.discorso(k?nome(k):'',f.nome,f.rango),bt); }); },500);

// la barra dei compiti in alto: ciò che manca, cliccabile (richiesta del 12 novembre 2026)
const barra=document.createElement('div'); barra.id='barraCompiti';
const stileBarra=document.createElement('style'); stileBarra.textContent=`#barraCompiti{position:absolute;left:50%;top:12px;transform:translateX(-50%);z-index:6;display:flex;gap:8px;flex-wrap:wrap;justify-content:center;max-width:62%}
#barraCompiti .cp{pointer-events:auto;cursor:pointer;font:800 16px system-ui,sans-serif;color:#fff3d6;padding:7px 14px;border-radius:999px;background:rgba(40,26,10,.85);border:2px solid #e0a050;box-shadow:0 4px 12px rgba(0,0,0,.5);transition:transform .2s;white-space:nowrap}
#barraCompiti .cp:hover{transform:translateY(-2px) scale(1.05)} #barraCompiti .cp.su{transform:scale(1.35)}
#barraCompiti .cp.mis{border-color:#7fa8d0;background:rgba(20,34,52,.88)} #barraCompiti .cp.bat{border-color:#ff8a6a}`;
document.head.appendChild(stileBarra);
addEventListener('DOMContentLoaded',()=>{ const sc=document.getElementById('scena3'); if(sc) sc.appendChild(barra); });
const ICO={prede:'🐭',racconti:'📜',allenamenti:'⚔️',erbe:'🌿',cure:'🩹'};
function compiti(p){ const T=TESTI_LEGG.verso, out=[], m=G.missione;
 if(p.preda) out.push({k:'bocca',cl:'bat',t:TESTI_LEGG.bocca(1+(p.carico||[]).length)});
 if(m) out.push({k:'missione',cl:'mis',t:`📋 ${m.t}${m.n>1?` ${m.fatto}/${m.n}`:''}`});
 if(p.rango==='gattino'||p.rango==='apprendista'){ for(const r of requisiti()){ if(r.ok||r.b==='lune') continue; out.push({k:r.b,t:`${ICO[r.b]||'○'} ${(T.b[r.b]||r.b).replace(/^\S+\s/,'')}: ${r.v.replace('/',' '+TESTI_LEGG.di+' ')}`}); } }
 if(p.rango==='apprendista'&&p.via==='guerriero'&&!p.convocato) out.push({k:'battaglie',cl:'bat',t:`⚔️ ${TESTI_LEGG.battaglie}: ${p.battaglie||0} ${TESTI_LEGG.di} 3`});
 return out.slice(0,4); }
function vaiCompito(k){ const p=G.p; if(!G||paused||scena) return;
 if(k==='missione') return avviaGuida('missione');
 if(k==='bocca') return avviaGuida('punto',L.mucchio);
 const meta={prede:()=>zonaCaccia(p),racconti:()=>anzianoVicino(),allenamenti:()=>gatto(p.mentore),erbe:()=>piuVicino(ERBE.filter((h,i)=>G.erbe[i]<=G.t),p),cure:()=>feritoVicino(p)||ingressoTana('tanaGuaritore'),battaglie:()=>davantiRoccia()}[k]; //: davanti alla Roccia Alta, dove si parla con il capo
 const t=meta&&meta(); if(t) avviaGuida('punto',t); }
let barraChiave=null, barraPrima={};
setInterval(()=>{ const p=typeof G!=='undefined'&&G&&G.p; if(!p||G.dentro){ barra.style.display='none'; barraChiave=null; return; } barra.style.display='flex';
 const lista=compiti(p), ch=JSON.stringify(lista); if(ch===barraChiave) return; barraChiave=ch;
 barra.innerHTML=lista.map(c=>`<span class="cp ${c.cl||''}" data-k="${c.k}">${c.t}</span>`).join('');
 barra.querySelectorAll('.cp').forEach(el=>{ el.onclick=e=>{ e.stopPropagation(); vaiCompito(el.dataset.k); }; const v=el.textContent; if(barraPrima[el.dataset.k]&&barraPrima[el.dataset.k]!==v){ el.classList.add('su'); setTimeout(()=>el.classList.remove('su'),450); } barraPrima[el.dataset.k]=v; }); },400);

// ================== le tane dei clan nemici: profanazione, furto all'altare, inseguimento ==================
// richiesta del 12 novembre 2026
let taneN=null;
function taneNemiche(){ if(taneN) return taneN; taneN=[];
 for(const cl of ['nebbia','pietre']){ const cm=CLAN[cl].campo; [[-78,-52],[78,-39],[13,78]].forEach(([dx,dy],i)=>{ const k=cl+'Tana'+i; L[k]={x:cm.x+dx,y:cm.y+dy,r:34,nome:TESTI_LEGG.nemiche.nome(CLAN[cl].nome),clan:cl}; taneN.push(k); }); }
 return taneN; }
window.taneNemiche=taneNemiche;
function profanazione(k){ const cl=L[k].clan, T=TESTI_LEGG.nemiche, p=G.p; offeso(cl);
 tensione(cl,15,T.motivo); log(T.log(CLAN[cl].nome),'#ff9a8a'); setTimeout(()=>annuncia(T.ann,'#ff8a7a'),500);
 for(const c of G.cats){ if(c.clan!==cl||c.stato==='fuga'||c.amico||dist(c,p)>380) continue; parla(c,T.profana,5); c.furioso=G.t+MOON; } }
function inseguimento(cl){ const p=G.p, T=TESTI_LEGG.nemiche; let n=0;
 for(const c of G.cats){ if(c.clan!==cl||c.stato==='fuga'||c.amico||dist(c,p)>450||c.rango==='gattino') continue; if(!(c.furioso>G.t)&&!G.rubatoDa) continue; c.stato='caccia'; c.bersaglio=0; n++; }
 if(n){ log(T.insegue(CLAN[cl].nome),'#ff9a8a'); annuncia('😾 '+T.insegue(CLAN[cl].nome).replace('😾 ',''),'#ff8a7a'); } G.rubatoDa=null; }
function rubaAltare(k){ const cl=L[k].clan, T=TESTI_LEGG.nemiche, p=G.p; G.derubate=G.derubate||{};
 if(G.derubate[k]&&G.t-G.derubate[k]<MOON*2){ log('🏺 '+T.vuoto,'#ffd27a'); return; }
 G.derubate[k]=G.t; offeso(cl); const tipo=cl==='nebbia'?'idolo':(Math.random()<0.5?'totem':'campanella'); p.inventario=p.inventario||[]; p.inventario.push(tipo);
 tensione(cl,25,T.motivo); G.rubatoDa=cl; segnaEvento();
 avviaScena('annusa',[p],1,()=>{ annuncia(OGG[tipo].ic+' '+cap(nomeOgg(tipo)),'#ffb37a'); log(TO().rubato(nomeOgg(tipo),CLAN[cl].nome),'#ffb37a'); }); }

// ================== la vecchiaia, il rito d'onore e la rinascita ==================
// richiesta del 12 novembre 2026
const ETA_VECCHIO=60, ETA_FINE=70; // vita più corta (scelta del 12 novembre 2026): circa 50 minuti di gioco per vita
setInterval(()=>{ if(typeof G==='undefined'||!G||!G.p||paused||scena||G.raid||transizione) return; const p=G.p, V=TESTI_LEGG.vita, l=lune(p);
 if(l>=ETA_VECCHIO&&!p.vecchio&&p.rango!=='gattino'){ p.vecchio=true; const c=capo(); const t=V.vecchio(nome(p)); if(c&&c!==p){ parla(c,t,9); mettiAFuoco(c,4000); log(`🗣️ ${nome(c)}: «${t}»`,'#e8d0a8'); } else log(t,'#e8d0a8'); annuncia(V.vecchioAnn,'#e8d0a8'); segnaEvento(); return; }
 if(l>=ETA_FINE&&!G.riposoFinale&&p.rango!=='gattino') fineVita(); },1000);
function fineVita(){ const p=G.p, V=TESTI_LEGG.vita, k='tanaGuerrieri', d=L[k]; G.riposoFinale={t:G.t}; p.guida=null; p.caccia=null; p.anim=null; p.sopra=false; p.elev=0;
 modale(V.tit,V.sonno(nome(p)),[{t:'🕯️',f:()=>{
  passaggio(()=>{ G.dentro=k; p.x=d.x; p.y=d.y+d.r*0.45; p.vx=p.vy=0; setPosa(p,'dorme',60); if(window.R3D){ R3D.cam3.yaw=Math.PI; R3D.cam3.pitch=0.55; }
   const vicini=G.cats.filter(c=>c.clan==='felce'&&c.rango!=='gattino'&&!c.ferito).slice(0,8);
   vicini.forEach((c,i)=>{ const a=-Math.PI/2+(i-(vicini.length-1)/2)*0.45+Math.PI; c.x=d.x+Math.cos(a)*d.r*0.3; c.y=d.y+d.r*0.45+Math.sin(a)*d.r*0.3; c.vx=c.vy=0; c.stato='campo'; c.flip=c.x<p.x?1:-1; setPosa(c,'siede',12); }); });
  setTimeout(()=>{ const c=capo(); modale(V.onore,V.discorso(c&&c!==p?nome(c):'',nome(p),lune(p),p.prede||0,p.battaglie||0)+box(V.box[0],V.box[1]),[{t:V.rinasci,f:rinascita}]); },6000); }}]); }
function rinascita(){ const V=TESTI_LEGG.vita, vecchio=G.p, nomeVecchio=nome(vecchio);
 G.antenati=G.antenati||[]; G.antenati.push(nomeVecchio); G.caduti=G.caduti||[]; G.caduti.push(nomeVecchio);
 const madri=G.cats.filter(c=>c.clan==='felce'&&c.sesso==='f'&&(c.rango==='guerriero'||c.regina)&&!c.leader), madre=pick(madri.length?madri:G.cats.filter(c=>c.clan==='felce'&&c.sesso==='f'))||G.cats[0];
 const sesso=Math.random()<0.5?'f':'m', base=prefissiPer(sesso), liberi=base.filter(x=>!(G.usati||[]).includes(x)), pref=liberi.length?pick(liberi):pick(base); (G.usati=G.usati||[]).push(pref);
 const pelo=pick(PELI).c;
 G.p={id:0,clan:'felce',prefisso:pref,sesso,colore:pelo,macchie:null,occhi:'#9be04a',rango:'gattino',via:null,suffisso:'',nascita:G.t-MOON*2,x:L.nursery.x,y:L.nursery.y+L.nursery.r+20,dir:0,flip:1,passo:0,
  fame:90,sete:90,energia:90,salute:100,preda:null,prede:0,allenamenti:0,erbe:0,erbeTotali:0,cure:0,vittorie:0,mentore:null,compagno:null,figli:0,balzo:0,cd:0,giochi:0,acq:false,vx:0,vy:0,
  spirito:Math.max(60,vecchio.spirito||60),sentiti:[],vite:(vecchio.vite||1)+1,inventario:[]};
 for(const c of G.cats){ c.figlio=false; c.amicizia=Math.floor((c.amicizia||0)/2); if(c.incinta&&c.id===vecchio.compagno) c.incinta=false; if(c.stato==='seguace'||c.stato==='avvicina'){ c.stato='campo'; c.seguace=null; nuovoPuntoCampo(c); } }
 for(const k in prima) delete prima[k]; // nessun falso guadagno alla rinascita
 G.madre=madre?madre.id:null; G.riposoFinale=null; G.dentro=null; G.missione=null; G.cerimonia=null; G.attesaGattini=null; G.ultimoEvento=G.t;
 if(window.R3D) R3D.cam3.init=false;
 log(V.antenato(nomeVecchio),'#ffe9a8');
 passaggio(()=>{}); setTimeout(()=>modale(V.nuova,V.nato(nome(G.p),madre?nome(madre):''),[{t:V.comincia}]),500); salva(); }

// ================== le immagini delle pitture: ogni volta un'opera diversa a tema gatti, disegnata qui ==================
// richiesta del 12 novembre 2026
let arteN=Math.floor(Math.random()*10);
function gattoSeduto(g,x,y,s,col,bordo){ g.save(); g.translate(x,y); g.scale(s,s); g.fillStyle=col;
 g.beginPath(); g.ellipse(0,0,22,30,0,0,6.283); g.fill(); g.beginPath(); g.arc(0,-38,16,0,6.283); g.fill();
 g.beginPath(); g.moveTo(-14,-46); g.lineTo(-11,-64); g.lineTo(-3,-52); g.moveTo(14,-46); g.lineTo(11,-64); g.lineTo(3,-52); g.fill();
 g.lineWidth=7; g.strokeStyle=col; g.lineCap='round'; g.beginPath(); g.moveTo(18,22); g.quadraticCurveTo(44,24,36,-6); g.stroke();
 if(bordo){ g.lineWidth=2.5; g.strokeStyle=bordo; g.beginPath(); g.ellipse(0,0,22,30,0,0,6.283); g.stroke(); g.beginPath(); g.arc(0,-38,16,0,6.283); g.stroke(); }
 g.restore(); }
function gattoCammina(g,x,y,s,col,dir=1){ g.save(); g.translate(x,y); g.scale(s*dir,s); g.fillStyle=col; g.strokeStyle=col; g.lineCap='round';
 g.beginPath(); g.ellipse(0,0,30,11,0,0,6.283); g.fill(); g.beginPath(); g.ellipse(30,-9,10,8,0,0,6.283); g.fill();
 g.beginPath(); g.moveTo(25,-14); g.lineTo(27,-25); g.lineTo(32,-15); g.moveTo(33,-15); g.lineTo(39,-23); g.lineTo(38,-12); g.fill();
 g.lineWidth=5; g.beginPath(); for(const lx of [-22,-12,14,22]){ g.moveTo(lx,6); g.lineTo(lx+(lx<0?-4:4),24); } g.moveTo(-28,-4); g.quadraticCurveTo(-50,-10,-46,-34); g.stroke(); g.restore(); }
function artGatto(){ const c=document.createElement('canvas'); c.width=480; c.height=300; const g=c.getContext('2d'), W=480, H=300, i=arteN++%10, r=()=>Math.random();
 if(i===0){ g.fillStyle='#c9a274'; g.fillRect(0,0,W,H); for(let k=0;k<4000;k++){ g.fillStyle=`rgba(${120+r()*60|0},${90+r()*40|0},${60+r()*30|0},0.25)`; g.fillRect(r()*W,r()*H,3,3); }
  for(let k=0;k<4;k++) gattoCammina(g,70+k*110,170+(k%2)*40,1.1,['#8a2e17','#3a2418','#a4521f','#6e1f12'][k],k%2?-1:1);
  g.fillStyle='rgba(110,30,15,.7)'; for(let k=0;k<3;k++){ const x=40+k*170, y=50; g.beginPath(); g.ellipse(x,y,12,10,0,0,6.283); g.fill(); for(const [dx,dy] of [[-12,-14],[-4,-19],[5,-19],[13,-14]]){ g.beginPath(); g.ellipse(x+dx,y+dy,4,5,0,0,6.283); g.fill(); } } }
 else if(i===1){ g.fillStyle='#efe2c4'; g.fillRect(0,0,W,H); g.strokeStyle='#1f3c74'; g.fillStyle='#2a508a'; g.lineWidth=4;
  for(let k=0;k<5;k++){ g.beginPath(); g.moveTo(-20,240-k*12); for(let x=0;x<=W+20;x+=40) g.quadraticCurveTo(x+20,200-k*12-((x/40)%2)*30,x+40,240-k*12); g.lineTo(W+20,H); g.lineTo(-20,H); g.closePath(); g.globalAlpha=0.35+k*0.1; g.fill(); g.globalAlpha=1; }
  g.fillStyle='#fff'; for(let k=0;k<12;k++){ g.beginPath(); g.arc(30+k*38,150+Math.sin(k)*10,5,0,6.283); g.fill(); }
  gattoSeduto(g,330,140,1.4,'#f4f0e6','#1a1a1a'); g.fillStyle='#d84a2a'; g.fillRect(410,20,40,52); g.fillStyle='#fff'; g.fillRect(418,28,24,4); g.fillRect(418,40,24,4); g.fillRect(428,28,4,36);
  g.fillStyle='#1a1a1a'; g.beginPath(); g.arc(80,60,30,0,6.283); g.fillStyle='#d84a2a'; g.fill(); }
 else if(i===2){ g.fillStyle='#1a1410'; g.fillRect(0,0,W,H); g.fillStyle='#d27a3a'; g.beginPath(); g.moveTo(170,20); g.lineTo(310,20); g.quadraticCurveTo(300,60,360,110); g.quadraticCurveTo(400,200,300,280); g.lineTo(180,280); g.quadraticCurveTo(80,200,120,110); g.quadraticCurveTo(180,60,170,20); g.fill();
  g.strokeStyle='#1a1410'; g.lineWidth=4; for(let x=130;x<350;x+=22){ g.beginPath(); g.moveTo(x,110); g.lineTo(x,96); g.lineTo(x+16,96); g.lineTo(x+16,106); g.lineTo(x+7,106); g.stroke(); }
  gattoCammina(g,200,190,1.2,'#1a1410',1); gattoCammina(g,290,200,1.0,'#1a1410',-1); g.fillStyle='#1a1410'; g.fillRect(140,250,200,6); }
 else if(i===3){ g.fillStyle='#e6cf9a'; g.fillRect(0,0,W,H); g.fillStyle='#2a6a8a'; g.fillRect(0,0,W,18); g.fillRect(0,H-18,W,18);
  gattoSeduto(g,150,200,1.8,'#1a1410'); g.fillStyle='#d8a830'; g.fillRect(126,140,48,8); g.beginPath(); g.arc(150,178,4,0,6.283); g.fill();
  g.strokeStyle='#8a2a1a'; g.fillStyle='#8a2a1a'; g.lineWidth=4; for(let k=0;k<4;k++){ const x=270+(k%2)*80, y=60+Math.floor(k/2)*90; if(k===0){ g.beginPath(); g.ellipse(x,y,12,15,0,0,6.283); g.stroke(); g.fillRect(x-3,y+14,6,40); g.fillRect(x-18,y+22,36,6); } if(k===1){ g.beginPath(); g.ellipse(x,y+20,24,10,0,0,6.283); g.stroke(); g.beginPath(); g.arc(x,y+20,6,0,6.283); g.fill(); } if(k===2){ g.beginPath(); g.moveTo(x-20,y+40); g.quadraticCurveTo(x,y,x+20,y+40); g.stroke(); } if(k===3){ gattoCammina(g,x,y+30,0.6,'#8a2a1a',1); } } }
 else if(i===4){ const sf=g.createLinearGradient(0,0,0,H); sf.addColorStop(0,'#6a7a5a'); sf.addColorStop(0.5,'#8a8a5e'); sf.addColorStop(1,'#4a4a30'); g.fillStyle=sf; g.fillRect(0,0,W,H);
  g.strokeStyle='rgba(60,70,50,.6)'; g.lineWidth=3; g.beginPath(); g.moveTo(0,120); g.quadraticCurveTo(80,90,140,130); g.stroke(); g.beginPath(); g.moveTo(340,110); g.quadraticCurveTo(410,80,480,120); g.stroke();
  g.fillStyle='#2a2018'; g.beginPath(); g.moveTo(150,H); g.quadraticCurveTo(160,170,240,165); g.quadraticCurveTo(320,170,330,H); g.fill();
  g.fillStyle='#2a1a10'; g.beginPath(); g.ellipse(240,135,70,75,0,0,6.283); g.fill(); g.fillRect(170,135,140,70); // i capelli, dietro la testa
  g.fillStyle='#c89060'; g.beginPath(); g.ellipse(240,120,48,52,0,0,6.283); g.fill(); g.beginPath(); g.moveTo(202,92); g.lineTo(196,40); g.lineTo(228,76); g.moveTo(278,92); g.lineTo(284,40); g.lineTo(252,76); g.fill();
  g.fillStyle='#2a1a10'; g.globalAlpha=0.55; g.beginPath(); g.moveTo(205,70); g.quadraticCurveTo(240,58,275,70); g.quadraticCurveTo(240,78,205,70); g.fill(); g.globalAlpha=1; // il velo
  g.fillStyle='#e08a90'; g.beginPath(); g.moveTo(234,128); g.lineTo(246,128); g.lineTo(240,135); g.fill(); g.strokeStyle='rgba(60,40,20,.7)'; g.lineWidth=1.2; for(const [x1,y1,x2,y2] of [[230,134,196,128],[230,138,196,140],[250,134,284,128],[250,138,284,140]]){ g.beginPath(); g.moveTo(x1,y1); g.lineTo(x2,y2); g.stroke(); }
  g.fillStyle='#1a1a10'; g.beginPath(); g.ellipse(225,115,6,4,0,0,6.283); g.ellipse(255,115,6,4,0,0,6.283); g.fill();
  g.strokeStyle='#5a3020'; g.lineWidth=2.5; g.beginPath(); g.moveTo(228,145); g.quadraticCurveTo(240,151,254,143); g.stroke(); // il sorriso
  g.fillStyle='#c89060'; g.beginPath(); g.ellipse(225,262,30,12,0.2,0,6.283); g.ellipse(262,258,30,12,-0.2,0,6.283); g.fill(); // le zampe incrociate
  const v=g.createRadialGradient(240,150,90,240,150,300); v.addColorStop(0,'rgba(0,0,0,0)'); v.addColorStop(1,'rgba(20,14,6,.75)'); g.fillStyle=v; g.fillRect(0,0,W,H);
  g.strokeStyle='#b88a30'; g.lineWidth=10; g.strokeRect(5,5,W-10,H-10); }
 else if(i===5){ g.fillStyle='#f4efe2'; g.fillRect(0,0,W,H); g.strokeStyle='#2a2a2a';
  for(let k=0;k<5;k++){ const x=360+k*22; g.lineWidth=6; g.globalAlpha=0.5+k*0.1; g.beginPath(); g.moveTo(x,H); g.lineTo(x+8,20); g.stroke(); for(let j=0;j<4;j++){ g.lineWidth=3; g.beginPath(); g.moveTo(x+4,60+j*50); g.quadraticCurveTo(x+40,50+j*50,x+60,70+j*50); g.stroke(); } }
  g.globalAlpha=1; gattoSeduto(g,180,200,1.6,'rgba(30,30,30,.85)'); g.fillStyle='rgba(30,30,30,.25)'; g.beginPath(); g.ellipse(180,250,90,14,0,0,6.283); g.fill();
  g.fillStyle='#c0281e'; g.fillRect(40,40,30,30); g.fillStyle='#f4efe2'; g.fillRect(46,46,8,18); g.fillRect(58,46,6,6); }
 else if(i===6){ const t=12, cols=['#e8dcc0','#c8a878','#8a5a3a','#3a3028','#f4ecd8']; for(let y=0;y<H;y+=t) for(let x=0;x<W;x+=t){ g.fillStyle=cols[(x/t+y/t*3)%2?0:4]; g.fillRect(x+1,y+1,t-2,t-2); }
  const tess=(px,py,col)=>{ g.fillStyle=col; g.fillRect(Math.floor(px/t)*t+1,Math.floor(py/t)*t+1,t-2,t-2); };
  const cc=document.createElement('canvas'); cc.width=W; cc.height=H; const cg=cc.getContext('2d'); gattoCammina(cg,220,170,2.4,'#000',1); cg.fillStyle='#000'; cg.beginPath(); cg.moveTo(330,130); cg.lineTo(370,110); cg.lineTo(360,140); cg.fill();
  const d=cg.getImageData(0,0,W,H).data; for(let y=0;y<H;y+=t) for(let x=0;x<W;x+=t){ if(d[((y+t/2)*W+(x+t/2))*4+3]>100) tess(x,y,x>320?'#3a5a8a':(y%24?'#8a5a3a':'#6a4028')); }
  g.strokeStyle='#3a3028'; g.lineWidth=t; g.strokeRect(t/2,t/2,W-t,H-t); }
 else if(i===7){ const cols=['#c8202a','#2a50c8','#e8c020','#20a050','#8a30c0','#e86a20']; for(let k=0;k<40;k++){ g.fillStyle=cols[k%6]; g.beginPath(); const x=r()*W, y=r()*H; g.moveTo(x,y); for(let j=0;j<5;j++) g.lineTo(x+(r()-0.5)*140,y+(r()-0.5)*140); g.fill(); }
  gattoSeduto(g,240,200,2.2,'#1a1a1a'); g.strokeStyle='#111'; g.lineWidth=5; for(let k=0;k<9;k++){ g.beginPath(); g.moveTo(r()*W,0); g.lineTo(r()*W,H); g.stroke(); }
  g.fillStyle='#e8c020'; g.beginPath(); g.ellipse(225,112,7,5,0,0,6.283); g.ellipse(255,112,7,5,0,0,6.283); g.fill(); g.lineWidth=12; g.strokeRect(6,6,W-12,H-12); }
 else if(i===8){ g.fillStyle='#efe0b8'; g.fillRect(0,0,W,H); for(let k=0;k<2500;k++){ g.fillStyle='rgba(150,120,70,.12)'; g.fillRect(r()*W,r()*H,2,2); }
  g.fillStyle='#2a3a8a'; g.fillRect(30,30,110,110); g.strokeStyle='#d8a830'; g.lineWidth=5; g.strokeRect(30,30,110,110); g.fillStyle='#d8a830'; g.font='bold 90px Georgia'; g.fillText('G',48,120);
  g.fillStyle='#3a2a1a'; for(let k=0;k<8;k++) g.fillRect(160,40+k*18,280-(k===7?120:0),5); gattoCammina(g,140,230,1.2,'#8a6a3a',1); g.strokeStyle='#2a6a3a'; g.lineWidth=3; g.beginPath(); g.moveTo(240,250); for(let x=240;x<460;x+=20) g.quadraticCurveTo(x+10,230,x+20,250); g.stroke();
  g.fillStyle='#c0281e'; for(let x=250;x<460;x+=40){ g.beginPath(); g.arc(x,238,5,0,6.283); g.fill(); } }
 else { const cols=[['#ff4fa0','#ffe600'],['#00c2ff','#ff6a00'],['#7cff4f','#8a2be2'],['#ffd000','#ff2a2a']];
  cols.forEach(([b,f],k)=>{ const x=(k%2)*W/2, y=Math.floor(k/2)*H/2; g.fillStyle=b; g.fillRect(x,y,W/2,H/2); g.save(); g.beginPath(); g.rect(x,y,W/2,H/2); g.clip(); gattoSeduto(g,x+W/4,y+H/4+28,1.0,f,'#111'); g.restore(); }); }
 return {src:c.toDataURL('image/png'),nome:TESTI_LEGG.arte[i]}; }

// prima la caccia: finché c'è un compito di caccia aperto, niente riti, guerre né assalti (al massimo quattro minuti di gioco dall'ultima preda)
// (richiesta del 12 novembre 2026)
function compitoCaccia(p){ return (G.missione&&G.missione.k==='caccia')||(p.rango==='apprendista'&&p.via==='guerriero'&&!p.convocato&&requisiti().some(r=>r.b==='prede'&&!r.ok)); }
function inCaccia(){ if(typeof G==='undefined'||!G||!G.p) return false; const p=G.p;
 if(!compitoCaccia(p)){ G.cacciaDa=null; return !!(p.caccia||p.preda); }
 if(G.cacciaDa==null||(p.prede||0)!==G.predeViste){ G.cacciaDa=G.t; G.predeViste=p.prede||0; }
 return G.t-G.cacciaDa<240||!!p.caccia||!!p.preda; }

// ================== i gatti degli altri clan: incontri pacifici nel bosco e le loro usanze ==================
// richiesta del 12 novembre 2026
function fineIncontro(c){ if(c.pacificoFino!=null){ c.amico=!!c.amicoPrima; c.pacificoFino=null; if(!c.amico){ c.stato='pattuglia'; if(typeof puntoNemico==='function') puntoNemico(c); } } }
function parlaStraniero(c){ const S=TESTI_LEGG.stranieri, lista=S.cultura[c.clan]||S.cultura.nebbia; G.culture=G.culture||{}; const viste=G.culture[c.clan]=G.culture[c.clan]||[];
 let i=lista.findIndex((_,j)=>!viste.includes(j)); if(i<0) i=Math.floor(Math.random()*lista.length); if(!viste.includes(i)) viste.push(i);
 c.vx=c.vy=0; tensione(c.clan,-3); c.conosciuto=(c.conosciuto||0)+1; if(c.conosciuto>=2){ c.amico=true; c.amicoPrima=true; }
 avviaScena('narra',[c,G.p],2,()=>{ modale(S.tit(nome(c)),`${lista[i]}<br><br><i>${S.fine}</i>`,[{t:'🙂',f:()=>fineIncontro(c)}]); spirito(3,'racconto'); }); }

// nelle tane nemiche: l'oggetto sacro si vede sull'altare, con un'etichetta cliccabile (richiesta del 12 novembre 2026)
function altareDerubato(k){ return !!(G.derubate&&G.derubate[k]&&G.t-G.derubate[k]<MOON*2); }
window.altareDerubato=altareDerubato;
function etichettaAltare(){ const k=G.dentro, d=k&&L[k]; if(!d||!d.clan||altareDerubato(k)) return; const st=puntoStele(d), [x,y]=aSchermo(d.x,d.y-d.r*0.5,0.9);
 targaCliccabile(TESTI_LEGG.nemiche.ruba,x,y,'#ffb37a',{...st,altare:true}); }

// con lo spirito basso le visite dei compagni arrivano più spesso (richiesta del 12 novembre 2026)
function puoVisita(){ if(!G) return false; const p=G.p; if(p.guida||p.caccia||p.preda||inCaccia()) return false; if(G.ultimoEvento==null) G.ultimoEvento=G.t;
 return !occupato()&&!scena&&!paused&&!G.cerimonia&&!G.funerale&&G.t-(G.ultimoEvento??-1e9)>25; }

// ================== la cerimonia del guaritore al villaggio e i pazienti ==================
// richiesta del 12 novembre 2026
addEventListener('DOMContentLoaded',()=>{ if(typeof menuCapo!=='function') return; const orig=menuCapo;
 menuCapo=function(){ const p=G.p; if(p.rango==='apprendista'&&p.via==='guaritore'&&p.convocato){ const H=TESTI_LEGG.guaritore, c=capo();
   return modale(c?nome(c):'🌿',H.pronto(nome(p)),[{t:H.cer,f:()=>avviaScena('cerimonia',partecipanti(),3.6,()=>setTimeout(cerimoniaGuaritore,60))},{t:'🙂'}]); }
  return orig(); }; });
function curaPaziente(c){ const p=G.p, H=TESTI_LEGG.guaritore;
 if((p.erbe||0)<=0){ log('🌿 '+H.senza,'#ffd27a'); c.malanno=null; fineIncontro(c); return; }
 avviaScena('cura',[p,c],3.4,()=>{ p.erbe--; p.cure=(p.cure||0)+1; c.malanno=null; c.ferito=false; c.hp=c.hpMax; if(c.stato==='ferito') c.stato='campo'; c.amicizia=(c.amicizia||0)+1; spirito(5,'cura');
  if(c.clan!=='felce'){ c.amicoPrima=true; c.amico=true; tensione(c.clan,-10); log(H.guaritoN(nome(c)),'#c8f0a8'); } else log(H.guarito(nome(c)),'#c8f0a8'); fineIncontro(c); }); }

// la prova della sapienza ha bisogno di almeno un racconto ascoltato: chi è convocato senza racconti passa direttamente (la cerimonia non deve bloccarsi)
addEventListener('DOMContentLoaded',()=>{ if(typeof prova!=='function') return; const orig=prova;
 prova=function(titolo,intro,ok){ if(!RACCONTI.some(l=>sentiti().includes(l.id))) return ok(); return orig(titolo,intro,ok); }; });

// ================== la mappa in alto a destra: una vecchia mappa di un territorio misterioso ==================
// richiesta del 12 novembre 2026
let MAPPA=null;
function mappaAntica(p,bn,bp){ // vecchia mappa, ma leggibile (12 novembre 2026)
 const mw=Math.min(300,W*0.25), s=mw/WW, mh=WH*s, mx=W-mw-14, my=10, chiave=[mw,bn,bp,DPR,LINGUA].join('|');
 if(!MAPPA||MAPPA.k!==chiave){ const pad=10, c=document.createElement('canvas'); c.width=Math.ceil((mw+pad*2)*DPR); c.height=Math.ceil((mh+pad*2)*DPR); const g=c.getContext('2d'); g.scale(DPR,DPR); g.translate(pad,pad);
  let seme=7; const rr=()=>{ seme=(seme*16807)%2147483647; return seme/2147483647; };
  const bordo=[]; const N=90; for(let i=0;i<N;i++){ const t=i/N; let x,y; if(t<0.25){x=t*4*mw;y=0;} else if(t<0.5){x=mw;y=(t-0.25)*4*mh;} else if(t<0.75){x=mw-(t-0.5)*4*mw;y=mh;} else {x=0;y=mh-(t-0.75)*4*mh;}
   const cx=mw/2, cy=mh/2, dx=x-cx, dy=y-cy, d=Math.hypot(dx,dy)||1, j=(rr()-0.5)*5-(rr()<0.06?4:0); bordo.push([x+dx/d*j,y+dy/d*j]); }
  const forma=()=>{ g.beginPath(); bordo.forEach(([x,y],i)=>i?g.lineTo(x,y):g.moveTo(x,y)); g.closePath(); };
  g.save(); g.shadowColor='rgba(0,0,0,.6)'; g.shadowBlur=10; g.shadowOffsetY=3; forma(); g.fillStyle='#e8d6a8'; g.fill(); g.restore();
  g.save(); forma(); g.clip();
  const carta=g.createRadialGradient(mw/2,mh/2,mw*0.2,mw/2,mh/2,mw*0.8); carta.addColorStop(0,'#f6ead0'); carta.addColorStop(0.75,'#ead8ab'); carta.addColorStop(1,'#c9a86c'); g.fillStyle=carta; g.fillRect(-pad,-pad,mw+pad*2,mh+pad*2);
  // i tre territori, ciascuno con un velo del colore del suo clan
  const velo={felce:'rgba(90,160,60,.20)',nebbia:'rgba(70,130,200,.18)',pietre:'rgba(210,130,50,.18)'};
  g.fillStyle=velo.felce; g.fillRect(0,0,FX0*s,mh); g.fillRect(FX1*s,0,(bn-FX1)*s,mh/2); g.fillRect(FX1*s,mh/2,(bp-FX1)*s,mh/2);
  g.fillStyle=velo.nebbia; g.fillRect(bn*s,0,mw-bn*s,mh/2); g.fillStyle=velo.pietre; g.fillRect(bp*s,mh/2,mw-bp*s,mh/2);
  const inch='rgba(60,38,15,'; g.lineCap='round'; g.lineJoin='round';
  // pochi alberi tenui, lontano dalle scritte
  for(let i=0;i<70;i++){ const x=rr()*WW, y=rr()*WH; if(inCampo(x,y,140)||(x>FX0-40&&x<FX1+40)||Math.hypot(x-L.lago.x,y-L.lago.y)<L.lago.r+60||Math.hypot(x-L.stagno.x,y-L.stagno.y)<L.stagno.r+50||Math.hypot(x-L.roccia.x,y-L.roccia.y)<120) continue;
   const X=x*s, Y=y*s; g.strokeStyle=inch+'.28)'; g.lineWidth=0.7; g.fillStyle='rgba(80,110,50,.22)';
   if(y<WH/2&&x>FX1){ g.beginPath(); g.moveTo(X-2.5,Y+2); g.lineTo(X,Y-4); g.lineTo(X+2.5,Y+2); g.closePath(); g.fill(); g.stroke(); } else { g.beginPath(); g.arc(X,Y-1,2.4,0,6.283); g.fill(); g.stroke(); } }
  // il fiume, netto, con i guadi in sassi marroni
  const fx=y=>((FX0+FX1)/2+Math.sin(y/140)*14)*s, fw=Math.max(4,(FX1-FX0)*s);
  g.strokeStyle='rgba(40,70,110,.9)'; g.lineWidth=fw+2; g.beginPath(); for(let y=0;y<=WH;y+=30){ y?g.lineTo(fx(y),y*s):g.moveTo(fx(y),y*s); } g.stroke();
  g.strokeStyle='#7fb0d8'; g.lineWidth=fw; g.stroke();
  for(const gy of GUADI){ g.fillStyle='#6b4a28'; for(let k=-1;k<=1;k++){ g.beginPath(); g.arc(fx(gy)+k*fw*0.45,gy*s,1.8,0,6.283); g.fill(); } }
  // laghi
  for(const k of ['lago','stagno']){ const l=L[k]; g.fillStyle='#8fbfe0'; g.beginPath(); g.ellipse(l.x*s,l.y*s,l.r*s*1.1,l.r*s*0.85,0,0,6.283); g.fill(); g.strokeStyle='rgba(40,70,110,.9)'; g.lineWidth=1.2; g.stroke(); }
  // confini a trattini
  g.setLineDash([3,3]); g.strokeStyle=inch+'.6)'; g.lineWidth=1.2; g.beginPath(); g.moveTo(Math.max(bn,bp)*s,WH/2*s); g.lineTo(WW*s,WH/2*s); g.stroke();
  for(const [b,y0,y1] of [[bn,0,WH/2],[bp,WH/2,WH]]){ g.beginPath(); g.moveTo(b*s,y0*s); g.lineTo(b*s,y1*s); g.stroke(); } g.setLineDash([]);
  // la Roccia Alta
  { const X=L.roccia.x*s, Y=L.roccia.y*s; g.fillStyle='#8a7d66'; g.beginPath(); g.moveTo(X-6,Y+4); g.lineTo(X,Y-7); g.lineTo(X+6,Y+4); g.closePath(); g.fill(); g.strokeStyle=inch+'.9)'; g.lineWidth=1; g.stroke(); }
  // i campi: un cerchio pieno del colore del clan, con l'emblema
  for(const k in CLAN){ const cm=CLAN[k].campo, X=cm.x*s, Y=cm.y*s, R=Math.max(9,cm.r*s);
   g.fillStyle='rgba(255,248,230,.9)'; g.beginPath(); g.arc(X,Y,R,0,6.283); g.fill(); g.strokeStyle=ANELLO[k]; g.lineWidth=3; g.stroke(); g.strokeStyle=inch+'.8)'; g.lineWidth=1; g.stroke();
   g.font=`${Math.round(R*1.1)}px serif`; g.textAlign='center'; g.textBaseline='middle'; g.fillStyle='#000'; g.fillText(EMBLEMA[k]||'',X,Y+1); g.textBaseline='alphabetic'; }
  // le scritte: grassetto scuro con un alone di carta, perché si leggano sopra il disegno
  const scritta=(t,x,y,px,it)=>{ g.font=`${it?'italic ':''}bold ${px}px Georgia,serif`; g.textAlign='center'; const w=g.measureText(t).width; x=Math.min(Math.max(x,w/2+4),mw-w/2-4);
   g.lineWidth=3.5; g.strokeStyle='rgba(248,238,212,.95)'; g.strokeText(t,x,y); g.fillStyle='#3a2410'; g.fillText(t,x,y); };
  const fs=Math.max(10,Math.round(mw/24));
  for(const k in CLAN){ const cm=CLAN[k].campo; scritta(CLAN[k].nome,cm.x*s,cm.y*s+Math.max(9,cm.r*s)+fs+1,fs); }
  scritta(L.lago.nome,L.lago.x*s,(L.lago.y-L.lago.r)*s-4,fs-1,true);
  scritta(L.roccia.nome,L.roccia.x*s,L.roccia.y*s-10,fs-1,true);
  // rosa dei venti
  { const X=mw-16, Y=24, R=9; g.strokeStyle=inch+'.8)'; g.fillStyle=inch+'.8)'; g.lineWidth=0.8;
   for(let i=0;i<4;i++){ const a=i*Math.PI/2; g.beginPath(); g.moveTo(X+Math.cos(a)*R,Y+Math.sin(a)*R); g.lineTo(X+Math.cos(a+0.4)*R*0.3,Y+Math.sin(a+0.4)*R*0.3); g.lineTo(X+Math.cos(a-0.4)*R*0.3,Y+Math.sin(a-0.4)*R*0.3); g.closePath(); i===3?g.fill():g.stroke(); }
   g.font='bold 9px Georgia,serif'; g.textAlign='center'; g.fillText('N',X,Y-R-2); }
  g.restore();
  g.save(); forma(); g.strokeStyle='rgba(90,55,20,.8)'; g.lineWidth=2; g.stroke(); g.restore();
  MAPPA={k:chiave,c,pad}; }
 const pd=MAPPA.pad; ctx.drawImage(MAPPA.c,mx-pd,my-pd,mw+pd*2,mh+pd*2); MAPPA_R={mx,my,mw,mh,s};
 ctx.font='italic 10px Georgia,serif'; ctx.textAlign='left'; ctx.fillStyle='rgba(60,38,15,.75)'; ctx.fillText(MAPPA_T,mx+6,my+mh-5); // la mappa si clicca
 const ora=performance.now()/1000;
 for(const c of G.cats) if(c.stato==='assalto'){ ctx.fillStyle='#c0201a'; ctx.beginPath(); ctx.arc(mx+c.x*s,my+c.y*s,3,0,6.283); ctx.fill(); }
 if(G.colosso&&G.colosso.visto){ ctx.font='15px serif'; ctx.textAlign='center'; ctx.fillStyle='#3a2410'; ctx.fillText('🗿',mx+G.colosso.x*s,my+G.colosso.y*s+5); } // il grande gatto di pietra, una volta trovato
 if(G.raid){ const lb=G.raid.luogo; ctx.font='bold 15px serif'; ctx.textAlign='center'; ctx.fillStyle='#8a1a10'; ctx.fillText('⚔',mx+lb.x*s,my+lb.y*s+5); }
 // la meta verso cui il gatto sta andando: una stella dorata
 let meta=null; try{ const gd=p.guida; if(gd) meta=gd.punto||(gd.tipo==='missione'?metaMissione():metaObiettivo()); }catch(e){}
 if(meta&&meta.x!=null){ const X=mx+meta.x*s, Y=my+meta.y*s; ctx.save(); ctx.translate(X,Y); ctx.rotate(ora*0.8); ctx.fillStyle='#f2b51c'; ctx.strokeStyle='#5a3a08'; ctx.lineWidth=1.2; ctx.beginPath();
  for(let i=0;i<10;i++){ const a=i*Math.PI/5-Math.PI/2, r=i%2?3:7.5; ctx.lineTo(Math.cos(a)*r,Math.sin(a)*r); } ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore(); }
 // il giocatore: un segnaposto rosso grande, con un anello che pulsa e il cono dello sguardo
 const px=mx+p.x*s, py=my+p.y*s;
 if(window.R3D){ const y=R3D.cam3.yaw; ctx.fillStyle='rgba(200,30,20,.28)'; ctx.beginPath(); ctx.moveTo(px,py); ctx.arc(px,py,26,Math.PI/2-y-0.45,Math.PI/2-y+0.45); ctx.closePath(); ctx.fill(); }
 const pul=(ora%1.6)/1.6; ctx.strokeStyle=`rgba(200,30,20,${0.8*(1-pul)})`; ctx.lineWidth=2; ctx.beginPath(); ctx.arc(px,py,6+pul*12,0,6.283); ctx.stroke();
 ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(px,py,7.5,0,6.283); ctx.fill(); ctx.fillStyle='#c8201a'; ctx.beginPath(); ctx.arc(px,py,5.5,0,6.283); ctx.fill();
 ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(px,py,1.8,0,6.283); ctx.fill(); }

// ================== l'iniziazione la annuncia l'anziano, e la cerimonia parte da sola ==================
// richiesta del 12 novembre 2026
setInterval(()=>{ if(typeof G==='undefined'||!G||!G.p||paused||scena||recitaAtt||G.raid||G.dentro||transizione||fx||G.funerale||occupato()) return; const p=G.p;
 if(p.rango!=='gattino'&&p.rango!=='apprendista') return; if(p.via==='guaritore'&&!p.convocato) return; // l'apprendista guaritore non convocato va al Lago d'Argento
 if(!requisiti().every(r=>r.ok)) return; const cm=CLAN.felce.campo; if(dist(p,cm)>cm.r+10) return;
 if(G.iniziazioneT&&G.t-G.iniziazioneT<MOON*0.5) return; G.iniziazioneT=G.t;
 const a=G.cats.find(c=>c.clan==='felce'&&c.rango==='anziano')||capo(), T=TESTI_LEGG.iniziazione, tipo=p.rango==='gattino'?'gattino':p.via==='guaritore'?'guaritore':'guerriero', t=T[tipo](a?nome(a):'',nome(p));
 segnaEvento(); p.guida=null; p.caccia=null;
 const fine=tipo==='gattino'?separazione:tipo==='guaritore'?()=>setTimeout(cerimoniaGuaritore,60):cerimoniaGuerriero;
 recita([{c:a,t,dur:7}],()=>avviaScena('cerimonia',partecipanti(),3.6,fine)); },1000);
// testi grandi anche nelle finestre di dialogo e nei racconti
const stileGrande=document.createElement('style'); stileGrande.textContent=`#mt{font-size:24px!important;line-height:1.25} #mx{font-size:18px!important;line-height:1.55} #mb button{font-size:17px!important;padding:12px 14px!important} #modal .box{max-width:680px!important} #modal .sapere{font-size:16px}`;
document.head.appendChild(stileGrande);

// ================== racconti animati: le cerimonie si recitano con i fumetti, non con i menu ==================
// richiesta del 12 novembre 2026
// recita([{c:gatto,t:'battuta'} | {t:'didascalia'} | {coro:[gatti],coroT:'grido'} | {scena:[tipo,attori,durata]} | {f:()=>…}, …], fine)
// Ogni battuta resta a schermo il tempo di leggerla; Spazio o un clic passano alla successiva.
var recitaAtt=null;
const didascalia=document.createElement('div'); didascalia.id='didascalia';
const stileRecita=document.createElement('style'); stileRecita.textContent=`#didascalia{position:absolute;left:50%;bottom:27%;transform:translateX(-50%);max-width:min(760px,80%);padding:16px 26px;border-radius:14px;background:rgba(12,9,22,.82);border:2px solid rgba(255,220,150,.45);color:#ffe9c4;font:italic 600 24px/1.45 Georgia,serif;text-align:center;opacity:0;transition:opacity .5s;pointer-events:none;z-index:30;text-shadow:0 2px 6px #000}
#didascalia.si{opacity:1} #didascalia.alto{bottom:auto;top:12%} #saltaRecita{position:absolute;left:50%;bottom:118px;transform:translateX(-50%);z-index:31;font:800 19px system-ui;color:#2a1a05;background:linear-gradient(#ffeeb8,#ffc94d);border:2px solid #fff6d0;border-radius:999px;padding:10px 24px 13px;display:none;cursor:pointer;white-space:nowrap;overflow:hidden;animation:invito 1.4s ease-in-out infinite} #saltaRecita.si{display:block}
#saltaRecita kbd,#mb kbd.sp{display:inline-block;margin:0 7px;padding:2px 12px;border-radius:7px;background:#2a1a05;color:#ffe9a8;font:800 15px system-ui;box-shadow:0 2px 0 #000} #mb kbd.sp{float:right;margin:0 0 0 10px;animation:lamp 1.2s infinite}
#saltaRecita small{margin-left:8px;font:700 13px system-ui;opacity:.7} #saltaRecita i{position:absolute;left:0;bottom:0;height:4px;width:100%;background:#a8560a;transform-origin:left}
@keyframes invito{0%,100%{box-shadow:0 0 0 0 rgba(255,210,90,.8),0 6px 18px #0009}50%{box-shadow:0 0 0 13px rgba(255,210,90,0),0 6px 18px #0009}} @keyframes durata{from{transform:scaleX(1)}to{transform:scaleX(0)}}
#cornice{position:absolute;inset:0;pointer-events:none;z-index:29;opacity:0;transition:opacity .6s;border-radius:10px;box-shadow:inset 0 0 0 4px rgba(255,224,150,.95),inset 0 0 60px 16px rgba(255,190,80,.6),inset 0 0 170px 40px rgba(30,14,0,.38);animation:cornice 2.6s ease-in-out infinite} #cornice.si{opacity:1}
@keyframes cornice{50%{box-shadow:inset 0 0 0 4px rgba(255,240,200,1),inset 0 0 90px 26px rgba(255,204,100,.75),inset 0 0 170px 40px rgba(30,14,0,.38)}}`;
document.head.appendChild(stileRecita);
const saltaRecita=document.createElement('div'); saltaRecita.id='saltaRecita'; const cornice=document.createElement('div'); cornice.id='cornice';
addEventListener('DOMContentLoaded',()=>{ const sc=document.getElementById('scena3')||document.body; sc.appendChild(didascalia); sc.appendChild(saltaRecita);
 saltaRecita.innerHTML={it:'Premi <kbd>SPAZIO</kbd> per continuare ▸',en:'Press <kbd>SPACE</kbd> to continue ▸',fr:'Appuie sur <kbd>ESPACE</kbd> pour continuer ▸'}[LINGUA]+'<small></small><i></i>'; sc.appendChild(cornice); saltaRecita.addEventListener('click',e=>{ e.stopPropagation(); avanzaRecita(true); }); });
function recita(battute,fine){ if(recitaAtt) clearTimeout(recitaAtt.to); recitaAtt={b:battute.filter(Boolean),i:-1,fine,da:0}; saltaRecita.classList.add('si'); avanzaRecita(); }
function avanzaRecita(salto){ const r=recitaAtt; if(!r) return;
 if(salto&&performance.now()-r.da<900) return;
 clearTimeout(r.to); // un clic subito dopo l'inizio di una battuta non la salta
 if(paused||fx){ r.to=setTimeout(avanzaRecita,400); return; }
 r.i++; didascalia.classList.remove('si');
 if(r.i>=r.b.length){ recitaAtt=null; saltaRecita.classList.remove('si'); r.fine&&r.fine(); return; }
 const b=r.b[r.i], dur=b.dur||Math.min(9,2.4+(b.t||'').length*0.055); r.da=performance.now();
 fumetti=[]; // una battuta alla volta: il fumetto di prima si chiude
 if(b.c&&b.t){ parla(b.c,b.t,dur+0.5); mettiAFuoco(b.c,dur*1000); log(`🗣️ ${nome(b.c)}: «${b.t}»`,'#ffe08a'); }
 else if(b.t){ didascalia.textContent=b.t; didascalia.classList.add('si'); }
 if(b.coro){ if(window.suonoMiao) suonoMiao('gioia'); b.coro.forEach((c,k)=>setTimeout(()=>{ if(k<3) parla(c,b.coroT,dur-k*0.3); testo(c.x,c.y-50*scala(c),'!','#ffe08a',16); },k*350)); mettiAFuoco(G.p,dur*1000); if(b.coroT) log('📣 '+b.coroT,'#ffe08a'); } // coro: tre fumetti, gli altri gridano con un
 if(b.scena&&b.scena!==null&&!scena) avviaScena(b.scena[0],b.scena[1],b.scena[2]||dur,null);
 if(b.f) b.f();
 { const n=saltaRecita.querySelector('small'), bar=saltaRecita.querySelector('i'); if(n) n.textContent=r.b.length>1?(r.i+1)+' / '+r.b.length:''; if(bar){ bar.style.animation='none'; void bar.offsetWidth; bar.style.animation='durata '+dur+'s linear forwards'; } } // l'invito dice a che punto siamo, e la barra quanto manca prima che la sequenza prosegua da sola
 r.to=setTimeout(avanzaRecita,dur*1000); }
// una cornice di luce intorno alla scena finché il giocatore non può intervenire (racconto animato o scena lunga)
setInterval(()=>{ const si=typeof G!=='undefined'&&G&&!paused&&(!!recitaAtt||(scena&&scena.dur>=2.5)); cornice.classList.toggle('si',!!si); },150);
// Prima il fumetto, poi la finestra (richiesta del 13 novembre 2026)
// quando una finestra porta il nome di un gatto vicino e comincia con una sua battuta tra, il gatto la dice in un fumetto;
// poi si apre la finestra con le scelte, oppure niente finestra se c'era soltanto da leggere. Un solo pulsante mostra il tasto Spazio.
addEventListener('DOMContentLoaded',()=>{ if(typeof modale!=='function') return; const o=modale, SP={it:'Spazio',en:'Space',fr:'Espace'}[LINGUA];
 const parlante=tit=>{ const t=String(tit).replace(/<[^>]+>/g,''), p=G.p, d=G.dentro&&L[G.dentro]; let m=null;
  for(const c of G.cats){ if(c===p||c.rango===undefined) continue; const n=nome(c); if(!n||!t.includes(n)||dist(c,p)>420||(d&&dist(c,d)>d.r*1.05)) continue; if(!m||dist(c,p)<dist(m,p)) m=c; } return m; };
 const spezza=q=>{ const fr=q.split(/(?<=[.!?…])\s+/), out=[]; let a=''; for(const f of fr){ if(a&&(a+' '+f).length>170){ out.push(a); a=f; } else a=a?a+' '+f:f; } if(a) out.push(a); return out; };
 modale=function(tit,testo,bottoni){
  const fin=()=>{ const r=o.apply(this,arguments); if(bottoni&&bottoni.length===1){ const e=document.querySelector('#mb button'); if(e) e.insertAdjacentHTML('beforeend','<kbd class="sp">'+SP+'</kbd>'); } return r; };
  if(window.FUMETTO_NO||typeof G==='undefined'||!G||!G.p||typeof testo!=='string'||recitaAtt||scena||fx||transizione||occupato()||!bottoni||!bottoni.length) return fin();
  const m=/^\s*(?:<(?:b|i|br)[^>]*>\s*)*«([\s\S]{6,}?)»/.exec(testo), c=m&&parlante(tit); if(!c) return fin();
  const battuta=m[1].replace(/<br\s*\/?>/g,' ').replace(/<[^>]+>/g,'').trim(), resto=testo.slice(m[0].length).replace(/^(?:\s|<\/(?:b|i)>|<br\s*\/?>)+/,''), pezzi=spezza(battuta);
  recita(pezzi.map(t=>({c,t})),()=>{ if(bottoni.length===1&&!resto){ bottoni[0].f&&bottoni[0].f(); return; }
   window.FUMETTO_NO=true; try{ modale(tit,resto||`<span style="opacity:.75;font-size:15px">«${pezzi[pezzi.length-1]}»</span>`,bottoni); } finally{ window.FUMETTO_NO=false; } }); }; });
// Spazio e clic sulla scena fanno avanzare il racconto, e durante il racconto il gatto non si muove
addEventListener('keydown',e=>{ if(!recitaAtt||paused) return; if(e.code==='Space'||e.code==='Enter'){ e.preventDefault(); e.stopImmediatePropagation(); if(!e.repeat) avanzaRecita(true); } else if(/^Arrow|^Key[WASD]$/.test(e.code)){ e.preventDefault(); e.stopImmediatePropagation(); } },true);
addEventListener('DOMContentLoaded',()=>{ const cv=document.getElementById('c'); if(cv) cv.addEventListener('click',e=>{ if(recitaAtt&&!paused){ e.stopImmediatePropagation(); avanzaRecita(true); } },true); });
setInterval(()=>{ if(recitaAtt&&typeof G!=='undefined'&&G&&G.p){ G.p.vx=0; G.p.vy=0; G.p.guida=null; } },100);
const coroClan=()=>partecipanti().filter(c=>c!==G.p).slice(0,7);
const nomeCon=(p,s)=>LINGUA==='fr'?s+' '+deNom(p.prefisso):LINGUA==='en'?p.prefisso+s:p.prefisso+' '+s;

const RECITE={
 it:{
  sep1:'Che tutti i gatti abbastanza grandi da cacciare si riuniscano sotto la Roccia Alta!',
  sep2:(n,ma)=>`Oggi ${n} lascia la nursery. Da questa notte non dormirà più accanto a ${ma||'sua madre'}.`,
  madre:'Sii coraggios{o}, piccol{o} mi{o}. Ti guarderò crescere da lontano.',
  sep3:'Quale strada sceglierai?',
  scegli:'🌑 Quale strada scegli?', scegliT:'Tutto il clan aspetta la tua risposta.', guer:'⚔️ La strada del guerriero', guar:'🌿 La strada del guaritore', ancora:'Non ancora',
  notaSep:'📜 Separazione: ogni rito di passaggio comincia staccando chi passa dalla sua condizione di prima (Arnold van Gennep, I riti di passaggio, 1909).',
  marg:p=>`Avanzi da sol${o(p)} nel cerchio, sotto la Roccia. Nessuno pronuncia il tuo nome: non sei più gattin${o(p)}, e non sei ancora apprendista.`,
  notaMarg:'📜 Margine: chi sta sulla soglia non è né di qua né di là. Victor Turner chiamò questo stato liminalità, dal latino limen, soglia (Il processo rituale, 1969).',
  nomeApp:(n,via,m,p,mf)=>`Da questo momento, fino a quando non avrai guadagnato il tuo nome da ${via}, ti chiamerai ${n}. ${m} sarà ${mf?'la tua mentore':'il tuo mentore'}.`,
  mentore:p=>`Ti insegnerò tutto ciò che so, ${nome(p)}.`,
  naso:m=>`Tocchi il naso di ${m}.`,
  fine:'🌕 Sei apprendista!', box:['Aggregazione','Il nome nuovo e il tocco del naso ti fanno entrare nel gruppo. Per James Frazer, ciò che è stato a contatto resta legato: è la legge della magia contagiosa (<i>Il ramo d’oro</i>, 1890).'], ora:'Che cosa fare ora:', evviva:'Evviva!',
  inv:p=>`Io, capo del Clan della Felce, chiedo ai nostri antenati stellati di guardare quest${o(p)} apprendista. Ha imparato il codice dei guerrieri, e ve l${o(p)} affido.`,
  prom:p=>`${nome(p)}, prometti di rispettare il codice e di proteggere il clan, anche a costo della vita?`, lo:'Lo prometto.',
  qualNome:'🌗 Il nome del guerriero', qualNomeT:'Il capo ti guarda a lungo. Quale nome ti darà?', boxNome:['Il nome','Per molti popoli, scrive Frazer nel <i>Ramo d’oro</i>, il nome è una parte viva della persona: per questo a volte lo si tiene segreto. Cambiare nome è diventare un altro.'],
  dato:n=>`Da questo momento sarai conosciut{o} come ${n}. Il Clan della Felce onora il tuo coraggio e la tua lealtà.`,
  veglia:'La veglia: tutta la notte di guardia al campo, in silenzio. Sei sulla soglia.',
  alba:n=>`All’alba i guerrieri ti circondano e ti sfiorano il fianco con la coda. Ora sei ${n}.`,
  benv:'Benvenut{o} tra i guerrieri.',
  fineG:'🌕 Sei guerrier{o}!', boxG:['Communitas','Chi ha vegliato sulla soglia resta legato agli altri da un vincolo tra uguali: Victor Turner lo chiamò <i>communitas</i>. L’anziano ha nuovi racconti per te.'],
  oraG:p=>`Ora puoi:<br>• dormire nella tana dei guerrieri;<br>• guidare un assalto contro un altro clan (Roccia Alta);<br>• diventare compagn${o(p)} di un guerriero amico e avere dei gattini.`, avanti:'Avanti!',
  sogno:['Bevi l’acqua gelida e ti addormenti sulla riva.','Nel sogno cadi nell’acqua nera e ti senti sciogliere, come se morissi.','Poi i gatti di stelle ti ricompongono, pelo per pelo, e ti rimettono in piedi.','«Ora conosci la strada tra i vivi e gli antenati.»'],
  notaSogno:'📜 Morte e rinascita: per Mircea Eliade l’iniziazione dello sciamano passa spesso per una morte simbolica e una rinascita (Lo sciamanismo e le tecniche arcaiche dell’estasi, 1951).',
  stelle:'🌕 Il nome dato dalle stelle', stelleT:'«Ogni anima ha la sua stella, e ora tu conosci la tua.» Quale nome ti danno gli antenati?', boxStelle:['Le stelle','Nel <i>Timeo</i> Platone racconta che ogni anima ha la sua stella, e che chi vive con giustizia vi ritorna.'],
  voce:n=>`«${n}…» sussurrano le stelle sull’acqua. «Questo è il tuo nome.»`, sveglia:'Ti svegli al chiaro di luna. Gli antenati ti hanno parlato.',
  guarFine:(n,r)=>`Ora sei ${n}, ${r} del Clan della Felce. L’anziano ha nuovi racconti per te.`,
 },
 en:{
  sep1:'Let all cats old enough to catch their own prey gather beneath Tall Rock!',
  sep2:(n,ma,p)=>`Today ${n} leaves the nursery. From tonight ${p.sesso==='f'?'she':'he'} will no longer sleep beside ${ma||'her mother'}.`,
  madre:'Be brave, my little one. I will watch you grow from afar.',
  sep3:'Which path will you choose?',
  scegli:'🌑 Which path do you choose?', scegliT:'The whole clan is waiting for your answer.', guer:'⚔️ The warrior’s path', guar:'🌿 The healer’s path', ancora:'Not yet',
  notaSep:'📜 Separation: every rite of passage begins by detaching the one who passes from their former condition (Arnold van Gennep, The Rites of Passage, 1909).',
  marg:()=>'You step alone into the circle, beneath the Rock. Nobody speaks your name: you are no longer a kit, and not yet an apprentice.',
  notaMarg:'📜 Margin: whoever stands on the threshold is neither here nor there. Victor Turner called this state liminality, from the Latin limen, threshold (The Ritual Process, 1969).',
  nomeApp:(n,via,m)=>`From this moment, until you have earned your ${via==='guaritore'?'healer':'warrior'} name, you will be called ${n}. ${m} will be your mentor.`,
  mentore:p=>`I will teach you everything I know, ${nome(p)}.`,
  naso:m=>`You touch ${m}’s nose.`,
  fine:'🌕 You are an apprentice!', box:['Aggregation','Your new name and the touch of noses bring you into the group. For James Frazer, what has been in contact stays linked: it is the law of contagious magic (<i>The Golden Bough</i>, 1890).'], ora:'What to do now:', evviva:'Hooray!',
  inv:p=>`I, leader of the Fern Clan, call upon our starry ancestors to look down on this apprentice. ${p.sesso==='f'?'She':'He'} has learned the warrior code, and I commend ${p.sesso==='f'?'her':'him'} to you.`,
  prom:p=>`${nome(p)}, do you promise to uphold the warrior code and to protect the clan, even at the cost of your life?`, lo:'I do.',
  qualNome:'🌗 The warrior name', qualNomeT:'The leader looks at you for a long time. What name will you be given?', boxNome:['The name','For many peoples, writes Frazer in <i>The Golden Bough</i>, the name is a living part of the person: that is why it is sometimes kept secret. Changing your name means becoming someone else.'],
  dato:n=>`From this moment you will be known as ${n}. The Fern Clan honours your courage and your loyalty.`,
  veglia:'The vigil: a whole night keeping watch over the camp, in silence. You are on the threshold.',
  alba:n=>`At dawn the warriors gather around you and brush your flank with their tails. Now you are ${n}.`,
  benv:'Welcome among the warriors.',
  fineG:'🌕 You are a warrior!', boxG:['Communitas','Those who have kept vigil on the threshold stay bound to the others by a tie between equals: Victor Turner called it <i>communitas</i>. The elder has new stories for you.'],
  oraG:()=>'Now you can:<br>• sleep in the warriors’ den;<br>• lead a raid against another clan (Tall Rock);<br>• become the mate of a warrior friend and have kits.', avanti:'Onward!',
  sogno:['You drink the icy water and fall asleep on the shore.','In the dream you fall into the black water and feel yourself melting away, as if you were dying.','Then the star cats put you back together, hair by hair, and set you on your feet again.','“Now you know the path between the living and the ancestors.”'],
  notaSogno:'📜 Death and rebirth: for Mircea Eliade a shaman’s initiation often passes through a symbolic death and a rebirth (Shamanism: Archaic Techniques of Ecstasy, 1951).',
  stelle:'🌕 The name given by the stars', stelleT:'“Every soul has its own star, and now you know yours.” What name do the ancestors give you?', boxStelle:['The stars','In the <i>Timaeus</i> Plato tells that every soul has its own star, and that whoever lives justly returns to it.'],
  voce:n=>`“${n}…” whisper the stars on the water. “This is your name.”`, sveglia:'You wake up in the moonlight. The ancestors have spoken to you.',
  guarFine:(n,r)=>`Now you are ${n}, ${r} of the Fern Clan. The elder has new stories for you.`,
 },
 fr:{
  sep1:'Que tous les chats assez grands pour chasser se rassemblent sous la Haute Roche !',
  sep2:(n,ma,p)=>`Aujourd’hui, ${n} quitte la pouponnière. À partir de cette nuit, ${p.sesso==='f'?'elle':'il'} ne dormira plus à côté de ${ma||'sa mère'}.`,
  madre:p=>`Sois ${p.sesso==='f'?'courageuse':'courageux'}, ${p.sesso==='f'?'ma petite':'mon petit'}. Je te regarderai grandir de loin.`,
  sep3:'Quel chemin choisis-tu ?',
  scegli:'🌑 Quel chemin choisis-tu ?', scegliT:'Tout le clan attend ta réponse.', guer:'⚔️ Le chemin du guerrier', guar:'🌿 Le chemin du guérisseur', ancora:'Pas encore',
  notaSep:'📜 Séparation : tout rite de passage commence par détacher celui qui passe de sa condition d’avant (Arnold van Gennep, Les Rites de passage, 1909).',
  marg:p=>`Tu avances ${p.sesso==='f'?'seule':'seul'} dans le cercle, sous la Roche. Personne ne prononce ton nom : tu n’es plus ${p.sesso==='f'?'une chatonne':'un chaton'}, et tu n’es pas encore ${p.sesso==='f'?'apprentie':'apprenti'}.`,
  notaMarg:'📜 Marge : celui qui se tient sur le seuil n’est ni d’un côté ni de l’autre. Victor Turner a appelé cet état la liminalité, du latin limen, le seuil (Le Phénomène rituel, 1969).',
  nomeApp:(n,via,m,p)=>`À partir de maintenant, et jusqu’à ce que tu aies gagné ton nom de ${via==='guaritore'?(p.sesso==='f'?'guérisseuse':'guérisseur'):(p.sesso==='f'?'guerrière':'guerrier')}, tu t’appelleras ${n}. ${m} sera ton mentor.`,
  mentore:p=>`Je t’apprendrai tout ce que je sais, ${nome(p)}.`,
  naso:m=>`Tu touches le nez de ${m}.`,
  fine:'🌕 Tu es apprenti{e} !', box:['Agrégation','Le nouveau nom et le contact du nez te font entrer dans le groupe. Pour James Frazer, ce qui a été en contact reste lié : c’est la loi de la magie contagieuse (<i>Le Rameau d’or</i>, 1890).'], ora:'Que faire maintenant :', evviva:'Hourra !',
  inv:p=>`Moi, chef du Clan de la Fougère, je demande à nos ancêtres étoilés de regarder ${p.sesso==='f'?'cette apprentie':'cet apprenti'}. ${p.sesso==='f'?'Elle':'Il'} a appris le code du guerrier, et je vous ${p.sesso==='f'?'la':'le'} confie.`,
  prom:p=>`${nome(p)}, promets-tu de respecter le code et de protéger le clan, même au prix de ta vie ?`, lo:'Je le promets.',
  qualNome:'🌗 Le nom du guerrier', qualNomeT:'Le chef te regarde longuement. Quel nom te donnera-t-il ?', boxNome:['Le nom','Pour beaucoup de peuples, écrit Frazer dans <i>Le Rameau d’or</i>, le nom est une partie vivante de la personne : c’est pour cela qu’on le garde parfois secret. Changer de nom, c’est devenir un autre.'],
  dato:n=>`À partir de maintenant, tu seras connu{e} sous le nom de ${n}. Le Clan de la Fougère honore ton courage et ta loyauté.`,
  veglia:'La veille : toute la nuit de garde au camp, en silence. Tu es sur le seuil.',
  alba:n=>`À l’aube, les guerriers t’entourent et t’effleurent le flanc avec leur queue. Maintenant, tu es ${n}.`,
  benv:'Bienvenue parmi les guerriers.',
  fineG:'🌕 Tu es guerri{er} !', boxG:['Communitas','Celui qui a veillé sur le seuil reste lié aux autres par un lien entre égaux : Victor Turner l’a appelé <i>communitas</i>. L’ancien a de nouveaux récits pour toi.'],
  oraG:p=>`Maintenant, tu peux :<br>• dormir dans la tanière des guerriers ;<br>• mener un assaut contre un autre clan (Haute Roche) ;<br>• devenir ${p.sesso==='f'?'la compagne':'le compagnon'} d’un guerrier ami et avoir des chatons.`, avanti:'En avant !',
  sogno:['Tu bois l’eau glacée et tu t’endors sur la rive.','Dans ton rêve, tu tombes dans l’eau noire et tu te sens fondre, comme si tu mourais.','Puis les chats d’étoiles te reconstituent, poil par poil, et te remettent sur tes pattes.','« Maintenant, tu connais le chemin entre les vivants et les ancêtres. »'],
  notaSogno:'📜 Mort et renaissance : pour Mircea Eliade, l’initiation du chaman passe souvent par une mort symbolique et une renaissance (Le Chamanisme et les techniques archaïques de l’extase, 1951).',
  stelle:'🌕 Le nom donné par les étoiles', stelleT:'« Chaque âme a son étoile, et maintenant tu connais la tienne. » Quel nom les ancêtres te donnent-ils ?', boxStelle:['Les étoiles','Dans le <i>Timée</i>, Platon raconte que chaque âme a son étoile, et que celui qui vit avec justice y retourne.'],
  voce:n=>`« ${n}… » murmurent les étoiles sur l’eau. « C’est ton nom. »`, sveglia:'Tu te réveilles au clair de lune. Les ancêtres t’ont parlé.',
  guarFine:(n,r)=>`Maintenant, tu es ${n}, ${r} du Clan de la Fougère. L’ancien a de nouveaux récits pour toi.`,
 }}[LINGUA];
// {o} → o/a in italiano; {e}, {er} → accordi francesi
const accorda=(t,p)=>{ const f=p.sesso==='f'; return t.replace(/\{o\}/g,f?'a':'o').replace(/\{e\}/g,f?'e':'').replace(/\{er\}/g,f?'ère':'er'); };
const RC=(k,...a)=>{ const v=RECITE[k]; return accorda(typeof v==='function'?v(...a):v,G.p); };

addEventListener('DOMContentLoaded',()=>{
 if(typeof separazione!=='function') return;
 const cosaOrig=diventaApprendista; // il testo resta quello del gioco
 separazione=function(){ const p=G.p, k=capo(), madre=gatto(G.madre);
  recita([{c:k,t:RC('sep1')},{c:k,t:RC('sep2',nome(p),madre?nome(madre):null,p)},
   madre&&madre.clan==='felce'?{c:madre,t:RC('madre',p),scena:dist(madre,p)<160?['pelo',[madre,p],3.4]:null}:null,
   {c:k,t:RC('sep3')}],()=>{ log(RECITE.notaSep,'#e8d9a8');
   modale(RC('scegli'),RC('scegliT'),[{t:RECITE.guer,f:()=>margine('guerriero')},{t:RECITE.guar,f:()=>margine('guaritore')},{t:RECITE.ancora}]); }); };
 margine=function(via){ const p=G.p; recita([{t:RC('marg',p),dur:6}],()=>{ log(RECITE.notaMarg,'#e8d9a8'); diventaApprendista(via); }); };
 // il mentore si sceglie dalla lista, durante il rito (richiesta del 12 novembre 2026)
 diventaApprendista=function(via){ const p=G.p, k=capo();
  const lista=(via==='guaritore'?G.cats.filter(c=>c.clan==='felce'&&c.rango==='guaritore'):G.cats.filter(c=>c.clan==='felce'&&c.rango==='guerriero'&&!c.leader&&!c.regina&&!c.ferito)).sort((a,b)=>(b.amicizia||0)-(a.amicizia||0)||b.forza-a.forza).slice(0,6);
  if(lista.length<2) return conMentore(via,lista[0]||capo());
  recita([k?{c:k,t:MEN.capo(nome(p)),dur:6}:null],()=>modale(MEN.scegliTit,MEN.scegli+box(...MEN.box),lista.map(c=>({t:`${nome(c)} · ${lune(c)} ${MEN.lune} · 💪 ${c.forza}${(c.amicizia||0)>=1?' · 💚':''}`,f:()=>conMentore(via,c)})))); };
 const conMentore=function(via,m){ const p=G.p, k=capo(); if(!m) return;
  p.rango='apprendista'; p.via=via; p.mentore=m.id;
  // il testo finale del gioco si ricava dalla funzione originale, senza ripeterne la logica
  let fin=null; const mo=modale; modale=(ti,te,bt)=>{ fin=te; }; const lo=log; log=()=>{}; p.rango='gattino';
  try{ cosaOrig(via); } finally { modale=mo; log=lo; }
  p.rango='apprendista'; p.via=via; p.mentore=m.id;
  const cosa=fin&&fin.split(/<br><b>[^<]*<\/b>\s*/)[1]||'';
  recita([{c:k,t:RC('nomeApp',nome(p),via,nome(m),p,m.sesso==='f'),dur:8},{c:m,t:RC('mentore',p)},
   {t:RC('naso',nome(m)),scena:['naso',[p,m],3],dur:3.2},
   {coro:coroClan(),coroT:`${nome(p)}!`,dur:4,f:()=>{ annuncia('🌟 '+nome(p)); scintille(p.x,p.y-20,'#ffe08a',14); }}],
   ()=>{ log(`🌟 ${nome(p)}`,'#ffe08a'); modale(RC('fine'),box(...RECITE.box)+`<br><b>${RECITE.ora}</b> ${cosa}`,[{t:RECITE.evviva}]); }); };
 nomeGuerriero=function(){ const p=G.p, k=capo(), opz=shuffle(SUFFISSI).slice(0,4);
  recita([{c:k,t:RC('inv',p),dur:8},{c:k,t:RC('prom',p)},{c:p,t:RC('lo'),dur:2.6}],()=>{
   modale(RC('qualNome'),RC('qualNomeT')+box(...RECITE.boxNome),opz.map(s=>({t:nomeCon(p,s),f:()=>{
    p.suffisso=s; p.rango='guerriero'; p.via=null; G.t+=MOON*0.3; p.energia=Math.max(10,p.energia-25);
    recita([{c:k,t:RC('dato',nome(p)),dur:6},{coro:coroClan(),coroT:`${nome(p)}!`,dur:4,f:()=>{ annuncia('🌟 '+nome(p)); scintille(p.x,p.y-20,'#ffe08a',14); }}],
     ()=>effetto(RECITE.veglia,3.4,()=>{ const g=G.cats.find(c=>c.clan==='felce'&&c.rango==='guerriero'&&c!==k);
      recita([{t:RC('alba',nome(p)),dur:5},g?{c:g,t:RC('benv')}:null],()=>modale(RC('fineG'),box(...RECITE.boxG)+'<br>'+RC('oraG',p),[{t:RECITE.avanti}])); }));
   }})));
  }); };
 riva=function(){ const p=G.p;
  const titolo={it:'🌑 Sulla riva del Lago d’Argento',en:'🌑 On the shore of Silver Lake',fr:'🌑 Sur la rive du Lac d’Argent'}[LINGUA], voce={it:'Dall’acqua sale una voce: «Chi vuole parlare con gli antenati deve prima sapere.»',en:'A voice rises from the water: “Whoever wishes to speak with the ancestors must first know.”',fr:'De l’eau monte une voix : « Celui qui veut parler aux ancêtres doit d’abord savoir. »'}[LINGUA];
  prova(titolo,voce,()=>{ const S=RECITE.sogno;
   recita([{t:S[0],dur:4,f:()=>{ setPosa(p,'dorme',30); }},{t:S[1],dur:5},{t:S[2],dur:5,f:()=>scintille(p.x,p.y-10,'#cfe0ff',20)},{t:S[3],dur:4.5}],()=>{ log(RECITE.notaSogno,'#e8d9a8');
    const opz=shuffle(SUFF_GUAR).slice(0,4);
    modale(RECITE.stelle,RECITE.stelleT+box(...RECITE.boxStelle),opz.map(s=>({t:nomeCon(p,s),f:()=>{
     p.suffisso=s; p.rango='guaritore'; p.via=null; G.t+=MOON*0.3;
     recita([{t:RC('voce',nome(p)),dur:4.5,f:()=>scintille(p.x,p.y-20,'#ffe08a',18)}],()=>{ p.posa=null; p.posaFine=0; log('✨ '+RC('guarFine',nome(p),rangoTesto(p)),'#ffe08a'); effetto(RECITE.sveglia,2.6); });
    }})));
   });
  }); };
});

// il riquadro dell'obiettivo non promette di accompagnare quando l'unica cosa che manca sono le lune (segnalazione del 12 novembre 2026)
setInterval(()=>{ const o=document.getElementById('pobj'); if(!o||typeof G==='undefined'||!G||!G.p) return; let att=false;
 try{ att=metaObiettivo()==null; }catch(e){} o.classList.toggle('attesa',att); },500);

// ================== coerenza con gli altri clan; il bottino offerto all'altare ==================
// segnalazione del 12 novembre 2026
function offeso(cl){ G.offesa=G.offesa||{}; G.offesa[cl]=G.t; }
function inVillaggioNemico(p){ for(const k of ['nebbia','pietre']){ const cm=CLAN[k]&&CLAN[k].campo; if(cm&&dist(p,cm)<cm.r+70) return k; } return null; }
function ostileClan(cl){ if(!G||!G.p||cl==='felce') return false; const p=G.p;
 if(inVillaggioNemico(p)===cl) return true; if(G.dentro&&L[G.dentro]&&L[G.dentro].clan===cl) return true;
 return !!(G.offesa&&G.offesa[cl]!=null&&G.t-G.offesa[cl]<MOON*1.5); }
const OSTILE={
 it:{grido:f=>f?'Ladra! Fuori dal nostro campo!':'Ladro! Fuori dal nostro campo!',testo:(n,cl)=>`${n} del ${cl} ti si para davanti, il pelo ritto e gli artigli fuori. Qui non c’è niente da dire: o combatti, o te ne vai.`},
 en:{grido:()=>'Thief! Get out of our camp!',testo:(n,cl)=>`${n} of the ${cl} stands in your way, fur on end and claws out. There is nothing to talk about here: either you fight, or you leave.`},
 fr:{grido:f=>f?'Voleuse ! Hors de notre camp !':'Voleur ! Hors de notre camp !',testo:(n,cl)=>`${n} du ${cl} se dresse devant toi, le poil hérissé, les griffes sorties. Ici, il n’y a rien à dire : soit tu te bats, soit tu t’en vas.`}}[LINGUA];
const BOTTINO={
 it:{tit:'🏺 Il bottino sull’altare',testo:(o,ta)=>`Deponi ${o} sull’altare${ta}. Il clan si avvicina a guardare: per noi è un trofeo, per chi lo venerava era sacro. Da oggi starà qui, lontano dal suo altare.`,
  box:['Oggetti sacri in casa d’altri','Molti musei europei custodiscono oggetti sacri presi con la forza durante le conquiste coloniali. Nel 1897 una spedizione punitiva britannica saccheggiò la città di Benin, nell’attuale Nigeria, e portò via migliaia di placche e sculture, i «bronzi del Benin», oggi sparsi in decine di musei. Nel 2018 Felwine Sarr e Bénédicte Savoy, in un rapporto chiesto dal presidente francese (<i>Restituer le patrimoine africain</i>), hanno stimato che tra il 90 e il 95 per cento del patrimonio artistico dell’Africa subsahariana si trova fuori dal continente, e hanno proposto di restituirlo; nel 2022 la Germania ha restituito alla Nigeria la proprietà di più di mille bronzi. Tolto dal suo altare, un oggetto sacro cambia senso: diventa arte, curiosità o trofeo.'],ok:'Capisco'},
 en:{tit:'🏺 The spoils on the altar',testo:(o,ta)=>`You lay ${o} on the altar${ta}. The clan comes closer to look: for us it is a trophy, for those who worshipped it, it was sacred. From today it will stay here, far from its own altar.`,
  box:['Sacred objects in someone else’s house','Many European museums hold sacred objects taken by force during colonial conquests. In 1897 a British punitive expedition looted the city of Benin, in today’s Nigeria, and carried off thousands of plaques and sculptures, the «Benin Bronzes», now scattered across dozens of museums. In 2018 Felwine Sarr and Bénédicte Savoy, in a report requested by the French president (<i>Restituer le patrimoine africain</i>), estimated that 90 to 95 per cent of the artistic heritage of sub-Saharan Africa lies outside the continent, and proposed returning it; in 2022 Germany transferred ownership of more than a thousand bronzes back to Nigeria. Taken from its altar, a sacred object changes meaning: it becomes art, a curiosity or a trophy.'],ok:'I see'},
 fr:{tit:'🏺 Le butin sur l’autel',testo:(o,ta)=>`Tu déposes ${o} sur l’autel${ta}. Le clan s’approche pour regarder : pour nous, c’est un trophée ; pour ceux qui le vénéraient, c’était sacré. Désormais, il restera ici, loin de son autel.`,
  box:['Des objets sacrés chez les autres','Beaucoup de musées européens conservent des objets sacrés pris par la force pendant les conquêtes coloniales. En 1897, une expédition punitive britannique pilla la ville de Bénin, dans l’actuel Nigeria, et emporta des milliers de plaques et de sculptures, les « bronzes du Bénin », aujourd’hui dispersés dans des dizaines de musées. En 2018, Felwine Sarr et Bénédicte Savoy, dans un rapport demandé par le président français (<i>Restituer le patrimoine africain</i>), ont estimé que 90 à 95 % du patrimoine artistique de l’Afrique subsaharienne se trouve hors du continent, et ont proposé de le restituer ; en 2022, l’Allemagne a rendu au Nigeria la propriété de plus de mille bronzes. Arraché à son autel, un objet sacré change de sens : il devient œuvre d’art, curiosité ou trophée.'],ok:'Je comprends'}}[LINGUA];
function bottino(t){ const ta=G.dentro&&L[G.dentro]?({it:' della ',en:' of the ',fr:' de la '}[LINGUA]+L[G.dentro].nome):'';
 G.trofei=G.trofei||[]; G.trofei.push({tipo:t,tana:G.dentro||null,t:G.t});
 modale(BOTTINO.tit,BOTTINO.testo(nomeOgg(t),ta)+box(...BOTTINO.box),[{t:BOTTINO.ok}]); }

// ================== i cuccioli vengono da te: giocare, coccole, imparare, seguirti ==================
// richiesta del 12 novembre 2026
const CUCCI={
 it:{tradizione:()=>'Posso farti una domanda sulle usanze del clan? Una difficile!',siTrad:'🤔 Sentiamo',storia:()=>'Ci racconti una storia? Una di quelle degli antichi… o una tua!',siStoria:'📖 Sedetevi qui',gioco:f=>'Giochiamo alla caccia? Tu fai il topo!',coccole:f=>`Mi fai le coccole? Oggi mi sento piccol${f?'a':'o'} piccol${f?'a':'o'}…`,
  insegna:(f,g)=>g?'Mi insegni a riconoscere le erbe? Voglio diventare come te!':`Mi insegni a cacciare? Prometto di stare acquattat${f?'a':'o'} e zitt${f?'a':'o'}!`,
  vieni:f=>'Posso venire con te nel bosco? Starò sempre dietro la tua coda!',battaglia:f=>'Posso venire con te alla prossima battaglia? Guarderò da lontano, giuro!',
  si:'Sì, vieni!',siGioco:'Giochiamo!',siCoccole:'Vieni qui',no:'Non ora',evviva:'Evviva! Ti seguo!',noRisp:'Uffa… va bene.',
  strada:['Aspettami!','Guarda, un topo!','Come fai a essere così veloce?','Che grande il bosco!','Anch’io, anch’io!','Un giorno sarò come te.'],
  battaglia2:['Forza! Forza!','Sei fortissim{x}!','Io guardo da qui!'],fine:'Che avventura! Lo racconterò a tutti nella nursery!',log:(n)=>`🐾 ${n} ti segue: tornerà alla nursery quando rientrerai al campo.`},
 en:{tradizione:()=>'Can I ask you a question about the clan’s customs? A hard one!',siTrad:'🤔 Go on',storia:()=>'Will you tell us a story? One from the ancients… or one of your own!',siStoria:'📖 Sit down here',gioco:()=>'Shall we play hunting? You be the mouse!',coccole:()=>'Will you cuddle me? I feel very small today…',
  insegna:(f,g)=>g?'Will you teach me to recognise herbs? I want to be like you!':'Will you teach me to hunt? I promise to crouch low and keep quiet!',
  vieni:()=>'Can I come with you into the forest? I will always stay behind your tail!',battaglia:()=>'Can I come with you to the next battle? I will watch from far away, I swear!',
  si:'Yes, come!',siGioco:'Let’s play!',siCoccole:'Come here',no:'Not now',evviva:'Hooray! I’m following you!',noRisp:'Oh… all right.',
  strada:['Wait for me!','Look, a mouse!','How are you so fast?','The forest is so big!','Me too, me too!','One day I will be like you.'],
  battaglia2:['Go! Go!','You are so strong!','I am watching from here!'],fine:'What an adventure! I will tell everyone in the nursery!',log:(n)=>`🐾 ${n} is following you: back to the nursery when you return to camp.`},
 fr:{tradizione:()=>'Je peux te poser une question sur les coutumes du clan ? Une difficile !',siTrad:'🤔 Vas-y',storia:()=>'Tu nous racontes une histoire ? Une des anciens… ou une à toi !',siStoria:'📖 Asseyez-vous là',gioco:()=>'On joue à la chasse ? C’est toi la souris !',coccole:f=>`Tu me fais un câlin ? Aujourd’hui, je me sens tout${f?'e':''} petit${f?'e':''}…`,
  insegna:(f,g)=>g?'Tu m’apprends à reconnaître les herbes ? Je veux devenir comme toi !':`Tu m’apprends à chasser ? Je promets de rester ${f?'tapie':'tapi'} et silencieu${f?'se':'x'} !`,
  vieni:()=>'Je peux venir avec toi dans la forêt ? Je resterai toujours derrière ta queue !',battaglia:()=>'Je peux venir avec toi à la prochaine bataille ? Je regarderai de loin, promis !',
  si:'Oui, viens !',siGioco:'On joue !',siCoccole:'Viens là',no:'Pas maintenant',evviva:'Youpi ! Je te suis !',noRisp:'Oh… d’accord.',
  strada:['Attends-moi !','Regarde, une souris !','Comment tu fais pour être si rapide ?','Qu’elle est grande, la forêt !','Moi aussi, moi aussi !','Un jour, je serai comme toi.'],
  battaglia2:['Allez ! Allez !','Tu es trop fort{x} !','Je regarde d’ici !'],fine:'Quelle aventure ! Je vais le raconter à toute la pouponnière !',log:(n)=>`🐾 ${n} te suit : retour à la pouponnière quand tu rentreras au camp.`}}[LINGUA];
const seguaci=()=>G.cats.filter(c=>c.stato==='seguace');
const nelCampo=(p,m=0)=>{ const cm=CLAN.felce.campo; return dist(p,cm)<cm.r+m; };
// l'iniziativa: ogni tanto, al campo e senza altro da fare, un cucciolo si avvicina
setInterval(()=>{ if(typeof G==='undefined'||!G||!G.p||paused||scena||recitaAtt||fx||G.raid||G.dentro||corteggia||G.funerale||occupato()) return; const p=G.p;
 if(G.prossimoCucciolo==null) G.prossimoCucciolo=G.t+MOON*0.8; if(G.t<G.prossimoCucciolo||!nelCampo(p)||p.guida||inCaccia()) return;
 if(G.cats.some(c=>c.stato==='avvicina')||seguaci().length>=3) return;
 const k=G.cats.filter(c=>c.clan==='felce'&&c.rango==='gattino'&&c.stato==='campo'&&!c.ferito&&dist(c,p)<320); if(!k.length){ G.prossimoCucciolo=G.t+MOON*0.5; return; }
 G.prossimoCucciolo=G.t+MOON*(1.2+Math.random()); const c=pick(k);
 const tipi=p.rango==='gattino'?['gioco']:p.rango==='guerriero'?['storia','storia','tradizione','insegna','coccole','battaglia','gioco']:['storia','storia','tradizione','insegna','coccole','vieni','gioco']; // i cuccioli chiedono spesso una storia (richiesta del 12 novembre 2026)
 c.stato='avvicina'; c.richiesta={tipo:pick(tipi),t0:G.t}; },1500);
function richiestaCucciolo(c){ const p=G.p, tipo=c.richiesta.tipo, f=c.sesso==='f', t=CUCCI[tipo](f,p.rango==='guaritore'||p.via==='guaritore');
 c.stato='campo'; c.vx=c.vy=0; c.flip=p.x<c.x?-1:1; p.flip=-c.flip; parla(c,t,8); mettiAFuoco(c,3000); segnaEvento();
 const no={t:CUCCI.no,f:()=>{ parla(c,CUCCI.noRisp,3); nuovoPuntoCampo(c); }};
 let si;
 if(tipo==='gioco') si={t:CUCCI.siGioco,f:()=>avviaScena('gioco',[p,c],4.6,()=>{ spirito(3,'compagnia'); nuovoPuntoCampo(c); })};
 else if(tipo==='coccole') si={t:CUCCI.siCoccole,f:()=>avviaScena('pelo',[p,c],3,()=>{ spirito(3,'compagnia'); nuovoPuntoCampo(c); })};
 else if(tipo==='tradizione'&&typeof quizTradizioni==='function') si={t:CUCCI.siTrad,f:()=>quizTradizioni(c,'cucciolo',()=>nuovoPuntoCampo(c))};
 else if(tipo==='storia') si={t:CUCCI.siStoria,f:()=>{ nuovoPuntoCampo(c); if(sentiti().length) insegnaStoria(); else if(typeof STORIE!=='undefined') STORIE.narra(); }};
 else si={t:CUCCI.si,f:()=>{ c.stato='seguace'; c.seguace={tipo,uscito:false,frase:G.t+8}; parla(c,CUCCI.evviva,3); log(CUCCI.log(nome(c)),'#cfe8ff'); }};
 modale('🐾 '+nome(c),'«'+t+'»',[si,no]); }
function aggiornaCucciolo(c,dt){ const p=G.p;
 if(c.stato==='avvicina'){ if(!c.richiesta||G.t-c.richiesta.t0>20||scena||G.raid||!nelCampo(p,40)){ c.stato='campo'; nuovoPuntoCampo(c); return; }
  if(dist(c,p)>34){ c.posa=null; muovi(c,p.x,p.y,95,dt); } else if(!paused&&!recitaAtt) richiestaCucciolo(c); return; }
 // il seguace: sta dietro al giocatore, fa quello che fa lui, e torna alla nursery quando si rientra al campo
 const s=c.seguace||(c.seguace={tipo:'vieni',uscito:true,frase:G.t+8});
 if(!nelCampo(p,30)) s.uscito=true;
 if(s.uscito&&nelCampo(p,-10)&&!G.raid){ c.stato='campo'; c.seguace=null; c.posa=null; nuovoPuntoCampo(c); parla(c,CUCCI.fine,5); spirito(3,'compagnia'); return; }
 const i=seguaci().indexOf(c), dir=p.flip||1, lontano=G.raid?70:30;
 let tx=p.x-dir*(lontano+i*16), ty=p.y+(i-1)*14;
 if(G.dentro){ const d=L[G.dentro]; if(d){ tx=d.x+(i-1)*16; ty=d.y+d.r+22; } } // aspetta fuori dalla tana
 const d=Math.hypot(tx-c.x,ty-c.y);
 if(d>10){ c.posa=null; muovi(c,tx,ty,d>120?200:140,dt); }
 else { const pp=G.p.posa; if(pp&&!G.dentro) setPosa(c,pp,0.4); else setPosa(c,'siede',0.4); c.flip=p.x<c.x?-1:1; } // fa quello che fai tu: beve, mangia, si acquatta, dorme
 if(G.t>s.frase){ s.frase=G.t+14+Math.random()*12; const L2=G.raid?CUCCI.battaglia2:CUCCI.strada; parla(c,pick(L2).replace('{x}',LINGUA==='it'?(p.sesso==='f'?'a':'o'):(p.sesso==='f'?'e':'')),3.5); } }
addEventListener('DOMContentLoaded',()=>{ if(typeof aggiornaFelce!=='function') return; const o=aggiornaFelce;
 aggiornaFelce=function(c,dt){ if(c.stato==='avvicina'||c.stato==='seguace') return aggiornaCucciolo(c,dt); return o(c,dt); }; });

// ================== Spazio: prima la battaglia, poi il bisogno più urgente, poi la vicinanza ==================
// segnalazione del 12 novembre 2026
const SPAZIO_B={it:{bevi:'bevi',mucchio:n=>`mangia dal mucchio (${n} prede)`,preda:'mangia la preda',erba:'usa un’erba su di te'},
 en:{bevi:'drink',mucchio:n=>`eat from the pile (${n} prey)`,preda:'eat the prey',erba:'use a herb on yourself'},
 fr:{bevi:'bois',mucchio:n=>`mange au tas (${n} proies)`,preda:'mange la proie',erba:'utilise une herbe sur toi'}}[LINGUA];
addEventListener('DOMContentLoaded',()=>{ if(typeof azioneSpazio!=='function') return; const o=azioneSpazio;
 azioneSpazio=function(){ const p=G.p; if(G.raid||G.dentro||p.anim) return o();
  { const cg=typeof colossoVicino==='function'&&!campoSottoAttacco()&&colossoVicino(p); if(cg) return cg; } // ai piedi del grande gatto di pietra, Spazio serve a lui
  if(campoSottoAttacco()&&p.rango!=='gattino'&&!p.vecchio){ const gu0=typeof azioneGuerra==='function'&&azioneGuerra(); if(gu0) return gu0; if(nemicoVicino(p,55)) return o(); return {t:ALLARME.corri,f:()=>avviaGuida('obiettivo')}; } // con il campo sotto attacco, Spazio serve soltanto a difenderlo
  const gu=typeof azioneGuerra==='function'&&azioneGuerra(); if(gu) return gu;
  if(p.rango!=='gattino'&&nemicoVicino(p,55)) return o(); // un nemico addosso viene prima di tutto
  const B=[];
  if(vicinoAcqua(p)) B.push({v:p.sete,a:{t:SPAZIO_B.bevi,f:bevi}});
  const alMucchio=dist(p,L.mucchio)<L.mucchio.r+16;
  if(p.preda){ if(p.fame<30&&!alMucchio&&!felcePerParlare(p,34)) B.push({v:p.fame,a:{t:SPAZIO_B.preda,f:mangiaPreda}}); } // la preda in bocca è per il clan: la si mangia soltanto con una fame vera, lontano dal mucchio e dai compagni
  else if(alMucchio&&G.cibo>0) B.push({v:p.fame,a:{t:SPAZIO_B.mucchio(G.cibo),f:mangiaMucchio}});
  if(!p.preda&&puoErbe()&&p.erbe>0) B.push({v:p.salute+10,a:{t:SPAZIO_B.erba,f:mangiaPreda}});
  const u=B.filter(b=>b.v<70).sort((a,b)=>a.v-b.v)[0]; // il bisogno più scarso, se è davvero un bisogno
  return u?u.a:o(); }; });

// ================== il duello in primo piano ==================
// richiesta dello stesso giorno
let duello=null;
function duelloAttivo(){ if(!duello||performance.now()>duello.fino||!G||G.dentro) return null; const e=gatto(duello.id); if(!e||e.stato==='fuga'||dist(e,G.p)>110) return null; return e; }
addEventListener('DOMContentLoaded',()=>{
 if(typeof colpisci==='function'){ const o=colpisci; colpisci=function(a,b){ const statoPrima=b.stato, r=o.apply(this,arguments);
  if(a.clan==='felce'&&b.clan!=='felce'&&b.stato==='fuga'&&statoPrima!=='fuga'&&(a!==G.p||a.rango==='guerriero')) a.vinte=(a.vinte||0)+1; // classifica: un nemico messo in fuga
  if(G.raid){ colpiRaid++; a.inMischia=G.t; b.inMischia=G.t; }
  if(a===G.p||b===G.p){ const e=a===G.p?b:a; duello={id:e.id,fino:performance.now()+2200};
   const ang=Math.atan2(b.y-a.y,b.x-a.x); for(let i=0;i<2;i++) particelle.push({x:b.x+rnd(-4,4),y:b.y-16+rnd(-4,4),ang:ang+rnd(-0.4,0.4),t:0.3,tipo:'graffio'});
   testo((a.x+b.x)/2+rnd(-10,10),Math.min(a.y,b.y)-46,pick(['💥','✦','Ffff!','⚡']),'#ffe08a',14);
   if(window.suonoGraffio) suonoGraffio(); }
  return r; }; }
 if(typeof aggiornaCamera==='function'){ const o=aggiornaCamera; aggiornaCamera=function(dt){ const e=scena?null:duelloAttivo(); if(!e||!window.R3D) return o(dt);
  const k0=1-Math.exp(-dt*3); zf+=(1.85-zf)*k0; banda+=(0.7-banda)*(1-Math.exp(-dt*4));
  // la telecamera si mette di fianco: i due gatti si vedono di profilo, uno di fronte all'altro
  const c3=R3D.cam3, dx=e.x-G.p.x, dy=e.y-G.p.y, base=Math.atan2(dx,dy); let tg=base+Math.PI/2; const w=a=>Math.atan2(Math.sin(a),Math.cos(a));
  if(Math.abs(w(tg-c3.yaw))>Math.abs(w(tg+Math.PI-c3.yaw))) tg+=Math.PI; c3.yaw+=w(tg-c3.yaw)*Math.min(1,dt*2.5); c3.manuale=G.t;
  R3D.aggiornaCamera(dt,(G.p.x+e.x)/2,(G.p.y+e.y)/2,zf,false,0); }; }
});

// ================== un evento alla volta: niente guerra durante funerali, cerimonie e racconti, e viceversa ==================
// segnalazione del 12 novembre 2026
function momentoSacro(){ if(typeof G==='undefined'||!G) return false;
 return !!(G.funerale||G.riposoFinale||G.cerimonia||recitaAtt||(scena&&['rito','cerimonia','cura'].includes(scena.tipo))); }

// ================== mangiare, bere e dormire non si perdono più ==================
// segnalazione dello stesso giorno. Se una scena era già in corso, l'azione veniva scartata
// (e la preda spariva): ora aspetta la fine della scena.
addEventListener('DOMContentLoaded',()=>{ for(const k of ['mangiaMucchio','mangiaPreda','bevi','dormi']){ const o=window[k]; if(typeof o!=='function') continue;
 window[k]=function(...a){ if(!scena&&!fx) return o.apply(this,a); let n=0; const t=setInterval(()=>{ if((!scena&&!fx)||++n>50){ clearInterval(t); if(!scena&&!fx) o.apply(this,a); } },150); }; } });

// il mucchio del villaggio non resta vuoto a lungo: ogni tanto un guerriero del clan porta una preda
setInterval(()=>{ if(typeof G==='undefined'||!G||!G.p||paused) return; if(G.prossimoCibo==null) G.prossimoCibo=G.t+MOON*0.4; if(G.t<G.prossimoCibo) return;
 G.prossimoCibo=G.t+MOON*(0.35+Math.random()*0.3); if(G.cibo>=6||G.raid) return;
 G.cibo+=1+(G.cibo<2?1:0); const m=L.mucchio; flo(m.x,m.y-25,'+🐭','#c8f0a8'); },2000);
// più prede nel nostro territorio: metà di quelle nuove nasce a ovest del fiume
addEventListener('DOMContentLoaded',()=>{ if(typeof spawnPreda!=='function') return; const o=spawnPreda;
 spawnPreda=function(){ const n=prede.length; o(); const q=prede[prede.length-1]; if(prede.length>n&&q&&Math.random()<0.5){
  for(let k=0;k<10;k++){ const x=rnd(30,FX0-30), y=rnd(30,WH-30); if(acqua(x,y)||inCampo(x,y,50)||(G&&Math.hypot(x-G.p.x,y-G.p.y)<150)) continue; q.x=x; q.y=y; break; } } }; });

// ================== correzioni della rilettura globale del 12 novembre 2026 (RILETTURA-2026-11-12.md, sezione 1) ==================
var colpiRaid=0;
// C4. Cambiare partita ricarica la pagina: scene, racconti, consigli e diario della partita di prima non passano alla nuova
let sessioneUsata=false;
function cambiaPartita(d){ if(!sessioneUsata){ sessioneUsata=true; return false; }
 try{ if(G&&SLOT!=null) salvaSlot(); sessionStorage.setItem('gattiniApri',JSON.stringify(d)); }catch(e){ return false; }
 G=null; location.reload(); return true; }
function riapriDopoRicarica(){ let d=null; try{ d=JSON.parse(sessionStorage.getItem('gattiniApri')||'null'); sessionStorage.removeItem('gattiniApri'); }catch(e){}
 if(!d||!d.slot) return false;
 if(d.nome){ sessioneUsata=true; SLOT=d.slot; NOME_SLOT=d.nome; G=null; chiudiModale(); nuovaPartita(); return true; }
 if(!leggiSlot(d.slot)) return false; apriSlot(d.slot); return true; }
// C3, C14. Una partita appena caricata non porta con sé lo stato di passaggio di quando è stata salvata
let Gnormale=null;
function normalizza(){ const p=G.p; Gnormale=G;
 if(G.funerale) delete G.funerale.inCorso; // un funerale interrotto riparte
 G.riposoFinale=null; // l'addio interrotto riparte da solo, perché le lune ci sono
 p.guida=null; p.vuoleCure=p.vuoleDormire=p.vuolePregare=false;
 p.bloccoRoccia=p.scendiAlle=p.passaSiepe=p.ultimoUrto=0; p.sopra=false;
 for(const c of G.cats){ if(c.clan!=='felce') continue; const l=lune(c); if(c.rango==='anziano'&&l>ETA_FINE+10) c.nascita=G.t-(ETA_VECCHIO+(c.id%8))*MOON; else if(c.leader&&l>ETA_VECCHIO) c.nascita=G.t-(42+(c.id%8))*MOON; } // salvataggi di prima della vita più corta // tempi dell'orologio del browser: non valgono dopo una ricarica
 for(const c of G.cats){ if(c.pacificoFino!=null&&!corteggia){ c.amico=!!c.amicoPrima; c.pacificoFino=null; } if(c.stato==='avvicina'){ c.stato='campo'; } } }
setInterval(()=>{ if(typeof G==='undefined'||!G||!G.p) return; if(G!==Gnormale) normalizza(); const p=G.p;
 // C9. la tregua di uno straniero in visita scade da sola
 for(const c of G.cats) if(c.pacificoFino!=null&&G.t>c.pacificoFino&&!(corteggia&&corteggia.id===c.id)&&!paused&&!scena) fineIncontro(c);
 // C8. un apprendista non resta senza mentore
 if(p.rango==='apprendista'&&!gatto(p.mentore)&&!paused&&!scena&&!recitaAtt&&!G.raid){
  const m=p.via==='guaritore'?G.cats.find(c=>c.clan==='felce'&&c.rango==='guaritore'):(pick(G.cats.filter(c=>c.clan==='felce'&&c.rango==='guerriero'&&!c.leader&&!c.regina&&!c.ferito))||capo());
  if(m){ p.mentore=m.id; const t={it:`${nome(p)}, da oggi ti seguirò io. Vieni ad allenarti quando vuoi.`,en:`${nome(p)}, from today I will guide you. Come and train whenever you like.`,fr:`${nome(p)}, à partir d’aujourd’hui, c’est moi qui te guiderai. Viens t’entraîner quand tu veux.`}[LINGUA]; parla(m,t,7); log(`🗣️ ${nome(m)}: «${t}»`,'#cfe8ff'); } }
 // C17. intenzioni che muoiono con la guida
 if(p.guida||transizione||scena) senzaGuida=0; else if(++senzaGuida>=4){ p.vuoleCure=p.vuoleDormire=p.vuolePregare=false; } },1000);
var senzaGuida=0;
// C17. svenire non è un guadagno di salute
addEventListener('DOMContentLoaded',()=>{ if(typeof sviene!=='function') return; const o=sviene; sviene=function(){ const r=o.apply(this,arguments); for(const k in prima) delete prima[k]; return r; }; });

// ================== il clan invecchia con te (rilettura del 12 novembre 2026, R5 e R8) ==================
// I guerrieri diventano anziani, gli anziani partono per il lungo viaggio, il capo e la regina passano il testimone. C'è sempre almeno un anziano per i racconti.
const ETA={
 it:{anziano:n=>`🍂 ${n} lascia la tana dei guerrieri e si unisce agli anziani: ora racconterà le sue storie.`,viaggio:n=>`🌌 ${n} si è addormentat{x} per il lungo viaggio, in pace, dopo molte lune. Il clan ne custodisce il nome.`,
  capo:v=>`${v} mi affida il clan. Da oggi lo guiderò io, con il vostro aiuto.`,capoLog:(v,n)=>`⭐ ${v} lascia la guida del clan. Il nuovo capo è ${n}.`},
 en:{anziano:n=>`🍂 ${n} leaves the warriors’ den and joins the elders, to tell stories from now on.`,viaggio:n=>`🌌 ${n} has fallen asleep for the long journey, in peace, after many moons. The clan keeps the name.`,
  capo:v=>`${v} entrusts the clan to me. From today I will lead it, with your help.`,capoLog:(v,n)=>`⭐ ${v} steps down as leader. The new leader is ${n}.`},
 fr:{anziano:n=>`🍂 ${n} quitte la tanière des guerriers et rejoint les anciens : place aux récits.`,viaggio:n=>`🌌 ${n} s’est endormi{x} pour le long voyage, en paix, après de nombreuses lunes. Le clan garde son nom.`,
  capo:v=>`${v} me confie le clan. À partir d’aujourd’hui, je le guiderai, avec votre aide.`,capoLog:(v,n)=>`⭐ ${v} quitte la tête du clan. Le nouveau chef est ${n}.`}}[LINGUA];
const etaX=(t,c)=>t.replace('{x}',LINGUA==='fr'?(c.sesso==='f'?'e':''):(c.sesso==='f'?'a':'o'));
// I nomi seguono il sesso del gatto (correzione del 13 novembre 2026): una gatta riceve
// un nome femminile, un gatto un nome maschile. In inglese i nomi non hanno genere.
const NOMI_F={it:['Cenere','Pioggia','Volpe','Luna','Neve','Brina','Quercia','Salvia','Tempesta','Ombra','Piuma','Selce','Betulla','Ruggine','Corteccia','Ghianda','Lepre','Vespa','Sabbia','Ortica','Alba','Nube','Mora','Castagna','Grandine','Edera','Rugiada','Felce','Scintilla'],
 fr:['Cendre','Pluie','Lune','Ronce','Neige','Rivière','Sauge','Tempête','Boue','Ombre','Plume','Mousse','Rouille','Écorce','Guêpe','Ortie','Aube','Mûre','Châtaigne','Grêle','Rosée','Fougère','Étincelle']}[LINGUA];
function prefissiPer(s){ if(!NOMI_F) return PREFISSI; const f=s==='f'; return PREFISSI.filter(x=>NOMI_F.includes(x)===f); }
function aggettivoNome(s){ return LINGUA==='it'?pick(s==='f'?['Chiara','Scura','Piccola']:['Chiaro','Scuro','Piccolo']):LINGUA==='fr'?pick(s==='f'?['Claire','Sombre','Petite']:['Clair','Sombre','Petit']):pick(['Pale','Dark','Small']); }
function liberaNome(c){ if(G.usati){ const i=G.usati.indexOf(c.prefisso); if(i>=0) G.usati.splice(i,1); } }
function diventaAnziano(c){ c.rango='anziano'; c.leader=false; c.regina=false; c.reginaFino=0; stat(c); c.stato='campo'; nuovoPuntoCampo(c); }
function clanInvecchia(){ const p=G.p;
 const F=G.cats.filter(c=>c.clan==='felce'), legati=new Set([p.compagno,p.mentore,p.allievo,G.madre].filter(x=>x!=null)), anziani=F.filter(c=>c.rango==='anziano');
 const soglia=c=>ETA_VECCHIO+(c.id%7); // non tutti alla stessa luna
 // 1. il capo passa il testimone
 const k=F.find(c=>c.leader); if(k&&lune(k)>=soglia(k)){ const G2=F.filter(c=>c.rango==='guerriero'&&!c.leader&&!c.regina&&!c.ferito), cand=G2.filter(c=>lune(c)<ETA_VECCHIO-12).sort((a,b)=>lune(b)-lune(a))[0]||G2.sort((a,b)=>lune(a)-lune(b))[0]; // il più esperto tra i giovani; in mancanza, il più giovane
  if(cand){ const v=nome(k); diventaAnziano(k); cand.leader=true; stat(cand); nuovoPuntoCampo(cand); const t=ETA.capo(v); parla(cand,t,8); mettiAFuoco(cand,4000); log(ETA.capoLog(v,nome(cand)),'#ffe08a'); log(`🗣️ ${nome(cand)}: «${t}»`,'#ffe08a'); return 'capo'; } }
 // 2. un guerriero o un guaritore vecchio diventa anziano (il guaritore soltanto se un altro guaritore resta)
 const v=F.find(c=>!c.leader&&(c.rango==='guerriero'||(c.rango==='guaritore'&&F.filter(x=>x.rango==='guaritore').length>1))&&c.stato==='campo'&&!c.ferito&&lune(c)>=soglia(c));
 if(v){ diventaAnziano(v); log(ETA.anziano(nome(v)),'#e8d0a8'); return 'anziano'; }
 // 3. la regina di sempre lascia il posto a una più giovane
 const r=F.find(c=>c.regina&&!c.reginaFino&&lune(c)>=45); if(r&&F.some(c=>c!==r&&c.sesso==='f'&&c.rango==='guerriero'&&!c.leader)) r.regina=false;
 // 4. il lungo viaggio: mai l'ultimo anziano, mai un gatto legato al giocatore
 const parte=anziani.find(c=>lune(c)>=ETA_FINE+4+(c.id%9)&&!legati.has(c.id)&&c.stato==='campo');
 if(parte&&anziani.length>1){ const n=nome(parte); G.cats=G.cats.filter(x=>x!==parte); liberaNome(parte); (G.caduti=G.caduti||[]).push(n); log(etaX(ETA.viaggio(n),parte),'#d9c8ff'); return 'viaggio'; }
 return null; }
setInterval(()=>{ if(typeof G==='undefined'||!G||!G.p||paused||scena||recitaAtt||fx||G.raid||G.dentro||momentoSacro()||occupato()) return; clanInvecchia(); },4000);

// ================== in battaglia c'è sempre qualcuno ad aspettarti ==================
// segnalazione del 12 novembre 2026. Succedeva quando i nemici
// erano già in fuga o a riposo (per esempio dopo un assalto al nostro campo): ora si schierano comunque, e chi è stato battuto non torna.
setInterval(()=>{ if(typeof G==='undefined'||!G||!G.raid||paused) return; const r=G.raid, cl=r.bersaglio, lu=r.luogo; if(!lu) return;
 const clan=G.cats.filter(c=>c.clan===cl); if(!r.battuti){ r.battuti=[]; r.visti={}; }
 for(const c of clan){ if(c.stato==='fuga'&&r.visti[c.id]&&r.visti[c.id]!=='fuga'&&!r.battuti.includes(c.id)) r.battuti.push(c.id); r.visti[c.id]=c.stato; }
 const attivi=clan.filter(c=>c.stato==='schierato'||c.stato==='caccia'), mancano=r.necessari-r.sconfitti-attivi.length; if(mancano<=0) return;
 const riserva=clan.filter(c=>!attivi.includes(c)&&!r.battuti.includes(c.id)).sort((a,b)=>(a.leader?1:0)-(b.leader?1:0)).slice(0,mancano);
 riserva.forEach((c,i)=>{ c.stato='schierato'; c.hp=Math.max(c.hp,c.hpMax*0.7); c.posto=[lu.x+50+(i%2)*28,lu.y-30+i*26]; r.visti[c.id]='schierato'; if(dist(c,{x:lu.x,y:lu.y})>500){ c.x=lu.x+160+i*20; c.y=lu.y+i*18; } });
 const disp=attivi.length+riserva.length;
 if(disp<r.necessari-r.sconfitti){ r.necessari=r.sconfitti+disp; if(r.necessari<1) r.sconfitti=r.necessari=1; if(r.sconfitti>=r.necessari&&typeof controllaRaid==='function') controllaRaid(); } },1000);

// ================== la classifica dei guerrieri più vittoriosi ==================
// richiesta del 12 novembre 2026
//. Punti (campo `vinte`): 1 per ogni nemico messo in fuga, 2 per ogni battaglia vinta combattendo.
const CLASS={it:{tit:'🏆 Guerrieri più vittoriosi',tu:'tu',primo:n=>`🏆 ${n}, sei il guerriero più vittorioso del clan!`,vuota:'Nessuna vittoria, per ora.'},
 en:{tit:'🏆 Most victorious warriors',tu:'you',primo:n=>`🏆 ${n}, you are the clan’s most victorious warrior!`,vuota:'No victories yet.'},
 fr:{tit:'🏆 Guerriers les plus victorieux',tu:'toi',primo:n=>`🏆 ${n}, personne dans le clan n’a remporté plus de victoires que toi !`,vuota:'Aucune victoire pour l’instant.'}}[LINGUA];
const classifica=document.createElement('div'); classifica.id='classifica';
const stileClass=document.createElement('style'); stileClass.textContent=`#classifica{margin:6px 0 8px;padding:8px 10px;border-radius:12px;background:rgba(0,0,0,.25);border:1px solid rgba(255,230,170,.25);font:14px system-ui,sans-serif;color:#dfe8d0}
#classifica .tit{font:700 15px system-ui,sans-serif;color:#ffe9a8;margin-bottom:5px} #classifica .r{display:flex;justify-content:space-between;padding:2px 0} #classifica .r.io{color:#ffe08a;font-weight:700} #classifica .r b{color:#ffe08a}`;
document.head.appendChild(stileClass);
addEventListener('DOMContentLoaded',()=>{ const inv=document.getElementById('inventario'); if(inv) inv.parentNode.insertBefore(classifica,inv.nextSibling); });
let classChiave='', eroPrimo=false;
function classificaGuerrieri(){ const p=G.p, L2=G.cats.filter(c=>c.clan==='felce'&&c.rango==='guerriero').map(c=>({n:nome(c),v:c.vinte||0,io:false}));
 if(p.rango==='guerriero') L2.push({n:nome(p),v:p.vinte||0,io:true}); return L2.sort((a,b)=>b.v-a.v||(b.io-a.io)); }
setInterval(()=>{ const p=typeof G!=='undefined'&&G&&G.p; if(!p||p.rango==='gattino'){ classifica.style.display='none'; return; } classifica.style.display='';
 const L2=classificaGuerrieri(), top=L2.slice(0,5), io=L2.findIndex(x=>x.io); if(io>=5) top.push(L2[io]);
 const ch=top.map(x=>x.n+x.v+x.io).join('|'); if(ch!==classChiave){ classChiave=ch;
  classifica.innerHTML=`<div class="tit">${CLASS.tit}</div>`+(L2.some(x=>x.v>0)?top.map(x=>`<div class="r${x.io?' io':''}"><span>${L2.indexOf(x)===0?'🥇':L2.indexOf(x)===1?'🥈':L2.indexOf(x)===2?'🥉':(L2.indexOf(x)+1)+'.'} ${x.n}${x.io?' ('+CLASS.tu+')':''}</span><b>${x.v}</b></div>`).join(''):`<div class="r">${CLASS.vuota}</div>`); }
 const primo=io===0&&L2[0].v>0&&(L2.length<2||L2[0].v>L2[1].v); if(primo&&!eroPrimo&&!paused){ const t=CLASS.primo(nome(p)); log(t,'#ffe08a'); mostraToast(t,'#ffe08a'); if(window.suonoMiao) suonoMiao('gioia'); } eroPrimo=primo; },2000);

// ================== il campo è sotto attacco: niente caccia, niente consigli sulla caccia ==================
// segnalazione del 12 novembre 2026
const ALLARME={it:{corri:'corri a difendere il campo'},en:{corri:'run to defend the camp'},fr:{corri:'cours défendre le camp'}}[LINGUA];
function campoSottoAttacco(){ return !!(G&&G.cats.some(c=>c.stato==='assalto')); }
setInterval(()=>{ if(typeof G==='undefined'||!G||!G.p) return; if((campoSottoAttacco()||G.raid)&&G.p.caccia) G.p.caccia=null; },250); // un inseguimento in corso si interrompe
addEventListener('DOMContentLoaded',()=>{
 if(typeof consiglio==='function'){ const o=consiglio; consiglio=function(k){ if(G&&campoSottoAttacco()&&!String(k).startsWith('guerra')) return; return o.apply(this,arguments); }; }
 if(typeof controllaPresa==='function'){ const o=controllaPresa; controllaPresa=function(){ if(G&&(campoSottoAttacco()||G.raid)){ if(dist(G.p,palla)<24) return o(); return; } return o(); }; } // un balzo non cattura prede per sbaglio
});

// ================== il mentore: si sceglie, e poi ci si torna ogni volta che si ha un dubbio ==================
// richiesta del 12 novembre 2026
//. Le domande (MEN.q): la prima risposta è la giusta, vengono mescolate; `s` è la spiegazione, detta in ogni caso.
const MEN={
 it:{capo:n=>`${n}, un apprendista non impara da solo. Guarda i guerrieri del clan, e scegli chi ti farà da mentore.`,scegliTit:'🎓 Scegli il tuo mentore',scegli:'Ti insegnerà a cacciare e a combattere, e risponderà ai tuoi dubbi. Chi scegli?',lune:'lune',
  box:['Il mentore','Nell’<i>Odissea</i> Mentore è l’amico a cui Ulisse, partendo per Troia, affida la sua casa; ed è sotto il suo aspetto che la dea Atena accompagna e consiglia il giovane Telemaco. Da lui viene la parola «mentore».'],
  cosa:'🧭 Che cosa devo fare?',quiz:'🎓 Fammi una domanda',allena:'⚔️ Allenarsi adesso',ok:'Ho capito',
  tappe:(via,f)=>`«Per diventare ${via==='guaritore'?(f?'guaritrice':'guaritore'):(f?'guerriera':'guerriero')} ti servono queste cose. Guarda a che punto sei:»`,pronto:'«Hai tutto. Resta al campo: l’anziano ti chiamerà per la cerimonia.»',
  come:{lune:'il tempo passa da solo; se vuoi, dormi nella tua tana: fa passare una luna',prede:'esci dal campo, avvicinati a una preda e premi Spazio; poi portala al mucchio',allenamenti:'vieni da me e scegli «Allenarsi»',racconti:'chiedi un racconto all’anziano, vicino alla tana dei guerrieri',erbe:'cerca i fiorellini nel bosco e premi Spazio',cure:'cura un gatto ferito 🩹 con le tue erbe'},
  giusto:'«Giusto.»',sbagliato:'«Non proprio.»',finite:'«Per oggi non ho altre domande. Vai, e torna quando vuoi.»',cerca:n=>`🎓 Il tuo mentore: ${n}`,porta:'clicca: ti ci porto',
  allievoCapo:(n,a)=>`${n}, ${a} comincia l’apprendistato e ha bisogno di un mentore. Ti ho vist{o} cacciare e combattere: vuoi essere tu?`,allievoTit:'🎓 Un allievo per te',allievoTesto:a=>`${a} ti guarda con gli occhi spalancati. Se accetti, potrai allenarl{x} parlandogli, e verrà con te in battaglia.`,allievoSi:'🎓 Accettare',allievoNo:'Non adesso',
  allievoFatto:a=>`🎓 ${a} è il tuo allievo. Parlagli per allenarlo.`,allievoRif:a=>`${a} abbassa le orecchie; il capo gli troverà un altro mentore.`,
  q:[{d:'Quali sono i tre tempi di un rito di passaggio?',r:['Separazione, margine, aggregazione','Nascita, crescita, morte','Caccia, pasto, riposo'],s:'Così Arnold van Gennep, nei <i>Riti di passaggio</i> (1909): ci si stacca dalla condizione di prima, si sta sulla soglia, si entra in quella nuova.'},
   {d:'Come si chiama lo stato di chi sta sulla soglia, senza nome e senza rango?',r:['Liminalità','Effervescenza','Tabù'],s:'Victor Turner, <i>Il processo rituale</i> (1969): dal latino <i>limen</i>, soglia. Tra chi la attraversa insieme nasce un legame tra uguali, la <i>communitas</i>.'},
   {d:'Che cosa dice la legge della magia contagiosa?',r:['Ciò che è stato a contatto resta legato','Il simile produce il simile','Chi dona per primo comanda'],s:'James Frazer, <i>Il ramo d’oro</i> (1890). «Il simile produce il simile» è l’altra legge, quella della magia imitativa.'},
   {d:'Quali sono i tre obblighi del dono?',r:['Dare, ricevere, ricambiare','Chiedere, prendere, nascondere','Contare, pesare, pagare'],s:'Marcel Mauss, <i>Saggio sul dono</i> (1925): un dono non è mai soltanto un regalo, lega chi dà e chi riceve.'},
   {d:'Che cosa nasce quando tutto il clan si raduna, canta e si muove insieme?',r:['Un’energia comune, più grande di ciascuno','Una gara tra i più forti','Il sonno'],s:'Émile Durkheim la chiamò «effervescenza collettiva» (<i>Le forme elementari della vita religiosa</i>, 1912): nel rito il gruppo sente la propria forza.'},
   {d:'Nel cerchio del kula, che cosa fanno collane e bracciali?',r:['Girano in versi opposti, e nessuno li tiene','Si seppelliscono con i capi','Si vendono al miglior offerente'],s:'Bronisław Malinowski, <i>Argonauti del Pacifico occidentale</i> (1922): ogni scambio lega due compagni per la vita.'},
   {d:'Che cosa attraversa, in molte iniziazioni, chi diventa sciamano?',r:['Una morte simbolica e una rinascita','Un lungo digiuno di parole','Una gara di caccia'],s:'Mircea Eliade, <i>Lo sciamanismo e le tecniche arcaiche dell’estasi</i> (1951).'},
   {d:'Per Huizinga, da che cosa nasce la cultura?',r:['Dal gioco','Dalla paura','Dal commercio'],s:'Johan Huizinga, <i>Homo ludens</i> (1938): il diritto, la poesia, il rito hanno prima la forma di un gioco, con regole e uno spazio a parte.'},
   {d:'Che cosa fa un gruppo in crisi con un capro espiatorio?',r:['Gli dà la colpa di tutto e lo scaccia','Lo elegge capo','Gli chiede consiglio'],s:'René Girard, <i>La violenza e il sacro</i> (1972): l’unità ritrovata dura poco, perché la colpa non era sua.'},
   {d:'Tra gli indiani dell’Amazzonia studiati da Clastres, che cosa non può fare un capo?',r:['Dare ordini','Parlare in pubblico','Fare doni'],s:'Pierre Clastres, <i>La società contro lo Stato</i> (1974): il capo mette pace, dona e parla bene, ma non comanda.'}]},
 en:{capo:n=>`${n}, an apprentice does not learn alone. Look at the clan’s warriors, and choose who will be your mentor.`,scegliTit:'🎓 Choose your mentor',scegli:'Your mentor will teach you to hunt and fight, and will answer your doubts. Whom do you choose?',lune:'moons',
  box:['The mentor','In the <i>Odyssey</i> Mentor is the friend to whom Odysseus, leaving for Troy, entrusts his household; and it is in his shape that the goddess Athena accompanies and advises young Telemachus. The word «mentor» comes from him.'],
  cosa:'🧭 What should I do?',quiz:'🎓 Ask me a question',allena:'⚔️ Train now',ok:'I see',
  tappe:(via)=>`“To become a ${via==='guaritore'?'healer':'warrior'} you need these things. See how far you have come:”`,pronto:'“You have everything. Stay in camp: the elder will call you for the ceremony.”',
  come:{lune:'time passes by itself; if you like, sleep in your den: it makes a moon go by',prede:'leave camp, go near prey and press Space; then take it to the pile',allenamenti:'come to me and choose «Train»',racconti:'ask the elder for a story, near the warriors’ den',erbe:'look for the little flowers in the forest and press Space',cure:'heal an injured cat 🩹 with your herbs'},
  giusto:'“Right.”',sbagliato:'“Not quite.”',finite:'“I have no more questions for today. Go, and come back whenever you like.”',cerca:n=>`🎓 Your mentor: ${n}`,porta:'click: I will take you there',
  allievoCapo:(n,a)=>`${n}, ${a} is starting an apprenticeship and needs a mentor. I have seen you hunt and fight: will it be you?`,allievoTit:'🎓 An apprentice for you',allievoTesto:a=>`${a} looks at you wide-eyed. If you accept, you can train your apprentice by talking, and ${a} will follow you into battle.`,allievoSi:'🎓 Accept',allievoNo:'Not now',
  allievoFatto:a=>`🎓 ${a} is your apprentice. Talk to your apprentice to train.`,allievoRif:a=>`${a}’s ears droop; the leader will find another mentor.`,
  q:[{d:'What are the three stages of a rite of passage?',r:['Separation, margin, aggregation','Birth, growth, death','Hunt, meal, rest'],s:'So says Arnold van Gennep in <i>The Rites of Passage</i> (1909): you leave your former condition, stand on the threshold, and enter the new one.'},
   {d:'What is the state of one who stands on the threshold, without name or rank?',r:['Liminality','Effervescence','Taboo'],s:'Victor Turner, <i>The Ritual Process</i> (1969): from the Latin <i>limen</i>, threshold. Those who cross it together are bound as equals: <i>communitas</i>.'},
   {d:'What does the law of contagious magic say?',r:['What has been in contact stays linked','Like produces like','Whoever gives first commands'],s:'James Frazer, <i>The Golden Bough</i> (1890). «Like produces like» is the other law, that of imitative magic.'},
   {d:'What are the three obligations of the gift?',r:['To give, to receive, to return','To ask, to take, to hide','To count, to weigh, to pay'],s:'Marcel Mauss, <i>The Gift</i> (1925): a gift is never only a present; it binds giver and receiver.'},
   {d:'What arises when the whole clan gathers, sings and moves together?',r:['A shared energy, greater than each one','A contest among the strongest','Sleep'],s:'Émile Durkheim called it «collective effervescence» (<i>The Elementary Forms of Religious Life</i>, 1912): in the rite the group feels its own strength.'},
   {d:'In the kula ring, what do necklaces and armshells do?',r:['They travel in opposite directions, and nobody keeps them','They are buried with the chiefs','They are sold to the highest bidder'],s:'Bronisław Malinowski, <i>Argonauts of the Western Pacific</i> (1922): each exchange binds two partners for life.'},
   {d:'In many initiations, what does one who becomes a shaman go through?',r:['A symbolic death and a rebirth','A long fast from words','A hunting contest'],s:'Mircea Eliade, <i>Shamanism: Archaic Techniques of Ecstasy</i> (1951).'},
   {d:'For Huizinga, where does culture arise from?',r:['From play','From fear','From trade'],s:'Johan Huizinga, <i>Homo Ludens</i> (1938): law, poetry and ritual first take the form of a game, with rules and a space set apart.'},
   {d:'What does a group in crisis do with a scapegoat?',r:['Blames it for everything and drives it out','Elects it leader','Asks its advice'],s:'René Girard, <i>Violence and the Sacred</i> (1972): the recovered unity does not last, because the fault was not the scapegoat’s.'},
   {d:'Among the Amazonian peoples studied by Clastres, what can a chief not do?',r:['Give orders','Speak in public','Give gifts'],s:'Pierre Clastres, <i>Society Against the State</i> (1974): the chief makes peace, gives and speaks well, but does not command.'}]},
 fr:{capo:n=>`${n}, on n’apprend pas sans guide. Regarde les guerriers du clan, et choisis ton mentor.`,scegliTit:'🎓 Choisis ton mentor',scegli:'Ton mentor t’apprendra à chasser et à combattre, et répondra à tes doutes. Qui choisis-tu ?',lune:'lunes',
  box:['Le mentor','Dans l’<i>Odyssée</i>, Mentor est l’ami à qui Ulysse, en partant pour Troie, confie sa maison ; et c’est sous ses traits que la déesse Athéna accompagne et conseille le jeune Télémaque. Le mot « mentor » vient de lui.'],
  cosa:'🧭 Que dois-je faire ?',quiz:'🎓 Pose-moi une question',allena:'⚔️ S’entraîner maintenant',ok:'J’ai compris',
  tappe:(via,f)=>`« Pour devenir ${via==='guaritore'?(f?'guérisseuse':'guérisseur'):(f?'guerrière':'guerrier')}, voici ce qu’il te faut. Regarde où tu en es : »`,pronto:'« Tu as tout. Reste au camp : l’ancien t’appellera pour la cérémonie. »',
  come:{lune:'le temps passe tout seul ; si tu veux, dors dans ta tanière : une lune passera',prede:'sors du camp, approche d’une proie et appuie sur Espace ; puis apporte-la au tas',allenamenti:'viens me voir et choisis « S’entraîner »',racconti:'demande un récit à l’ancien, près de la tanière des guerriers',erbe:'cherche les petites fleurs dans la forêt et appuie sur Espace',cure:'soigne un chat blessé 🩹 avec tes herbes'},
  giusto:'« Exact. »',sbagliato:'« Pas tout à fait. »',finite:'« Je n’ai plus de questions pour aujourd’hui. Va, et reviens quand tu veux. »',cerca:n=>`🎓 Ton mentor : ${n}`,porta:'clique : je t’y emmène',
  allievoCapo:(n,a)=>`${n}, ${a} commence son apprentissage et a besoin d’un mentor. Je t’ai vu{e} chasser et combattre : veux-tu t’en charger ?`,allievoTit:'🎓 Un apprenti pour toi',allievoTesto:a=>`${a} te regarde avec de grands yeux. Si tu acceptes, tu pourras l’entraîner en lui parlant, et ${a} te suivra à la bataille.`,allievoSi:'🎓 Accepter',allievoNo:'Pas maintenant',
  allievoFatto:a=>`🎓 ${a} est ton apprenti. Parle-lui pour l’entraîner.`,allievoRif:a=>`${a} baisse les oreilles ; le chef lui trouvera un autre mentor.`,
  q:[{d:'Quels sont les trois temps d’un rite de passage ?',r:['Séparation, marge, agrégation','Naissance, croissance, mort','Chasse, repas, repos'],s:'C’est ce que dit Arnold van Gennep dans <i>Les Rites de passage</i> (1909) : on quitte sa condition d’avant, on se tient sur le seuil, on entre dans la nouvelle.'},
   {d:'Comment s’appelle l’état de celui qui se tient sur le seuil, sans nom ni rang ?',r:['La liminalité','L’effervescence','Le tabou'],s:'Victor Turner, <i>Le Phénomène rituel</i> (1969) : du latin <i>limen</i>, le seuil. Ceux qui le franchissent ensemble sont liés entre égaux : la <i>communitas</i>.'},
   {d:'Que dit la loi de la magie contagieuse ?',r:['Ce qui a été en contact reste lié','Le semblable produit le semblable','Qui donne le premier commande'],s:'James Frazer, <i>Le Rameau d’or</i> (1890). « Le semblable produit le semblable » est l’autre loi, celle de la magie imitative.'},
   {d:'Quelles sont les trois obligations du don ?',r:['Donner, recevoir, rendre','Demander, prendre, cacher','Compter, peser, payer'],s:'Marcel Mauss, <i>Essai sur le don</i> (1925) : un don n’est jamais un simple cadeau, il lie celui qui donne et celui qui reçoit.'},
   {d:'Que naît-il quand tout le clan se rassemble, chante et bouge ensemble ?',r:['Une énergie commune, plus grande que chacun','Un concours entre les plus forts','Le sommeil'],s:'Émile Durkheim l’a appelée « effervescence collective » (<i>Les Formes élémentaires de la vie religieuse</i>, 1912) : dans le rite, le groupe sent sa propre force.'},
   {d:'Dans le cercle de la kula, que font les colliers et les bracelets ?',r:['Ils circulent en sens opposés, et personne ne les garde','On les enterre avec les chefs','On les vend au plus offrant'],s:'Bronisław Malinowski, <i>Les Argonautes du Pacifique occidental</i> (1922) : chaque échange lie deux partenaires pour la vie.'},
   {d:'Dans beaucoup d’initiations, que traverse celui qui devient chaman ?',r:['Une mort symbolique et une renaissance','Un long jeûne de paroles','Un concours de chasse'],s:'Mircea Eliade, <i>Le Chamanisme et les techniques archaïques de l’extase</i> (1951).'},
   {d:'Pour Huizinga, d’où naît la culture ?',r:['Du jeu','De la peur','Du commerce'],s:'Johan Huizinga, <i>Homo ludens</i> (1938) : le droit, la poésie, le rite ont d’abord la forme d’un jeu, avec des règles et un espace à part.'},
   {d:'Que fait un groupe en crise d’un bouc émissaire ?',r:['Il le charge de toutes les fautes et le chasse','Il l’élit chef','Il lui demande conseil'],s:'René Girard, <i>La Violence et le sacré</i> (1972) : l’unité retrouvée ne dure pas, car la faute n’était pas la sienne.'},
   {d:'Chez les Indiens d’Amazonie étudiés par Clastres, que ne peut pas faire un chef ?',r:['Donner des ordres','Parler en public','Faire des dons'],s:'Pierre Clastres, <i>La Société contre l’État</i> (1974) : le chef apaise, donne et parle bien, mais il ne commande pas.'}]}}[LINGUA];
function mentoreSpiega(c){ const p=G.p, R=requisiti(), f=p.sesso==='f';
 const righe=R.map(r=>`${r.ok?'✅':'⬜'} <b>${r.t}</b> (${r.v})${r.ok?'':' — '+(MEN.come[r.b]||'')}`).join('<br>');
 const bt=[]; if(p.via==='guerriero'&&typeof allenati==='function') bt.push({t:MEN.allena,f:()=>allenati(c)}); bt.push({t:MEN.quiz,f:()=>quizMentore(c)},{t:MEN.ok});
 modale('🎓 '+nome(c),(R.length&&!R.every(r=>r.ok)?MEN.tappe(p.via,f)+'<br><br>'+righe:MEN.pronto+(righe?'<br><br>'+righe:'')),bt); }
function quizMentore(c){ const p=G.p, fatte=p.quizMen=p.quizMen||[]; if(p.quizOggi&&G.t-p.quizOggi.t<MOON&&p.quizOggi.n>=3) return modale('🎓 '+nome(c),MEN.finite,[{t:MEN.ok}]); // tre domande per luna
 let i=MEN.q.findIndex((_,j)=>!fatte.includes(j)); if(i<0){ fatte.length=0; i=Math.floor(Math.random()*MEN.q.length); } fatte.push(i);
 if(!p.quizOggi||G.t-p.quizOggi.t>=MOON) p.quizOggi={t:G.t,n:0}; p.quizOggi.n++;
 const q=MEN.q[i]; parla(c,q.d,8);
 modale('🎓 '+nome(c),`«<b>${q.d}</b>»`,shuffle([0,1,2]).map(k=>({t:q.r[k],f:()=>{ const ok=k===0; if(ok){ p.sapienza=(p.sapienza||0)+1; c.amicizia=(c.amicizia||0)+(p.sapienza%3===0?1:0); }
  modale('🎓 '+nome(c),(ok?MEN.giusto:MEN.sbagliato+' <b>'+q.r[0]+'.</b>')+box({it:'La fonte',en:'The source',fr:'La source'}[LINGUA],q.s),[{t:MEN.quiz,f:()=>quizMentore(c)},{t:MEN.ok,f:()=>{ if(ok) spirito(3,'racconto'); }}]); }}))); }
// nel menu del mentore compaiono per prime le sue due voci
addEventListener('DOMContentLoaded',()=>{ if(typeof menuGatto!=='function') return; const o=menuGatto;
 menuGatto=function(c){ const p=G.p;
  if(p.allievo===c.id&&c.rango==='apprendista'){ const m1=modale; modale=function(t,x,bt){ modale=m1; return m1(t,x,[...(bt||[])].sort((a,b)=>(String(b.t).startsWith('⚔️')?1:0)-(String(a.t).startsWith('⚔️')?1:0))); }; try{ return o.apply(this,arguments); } finally { modale=m1; } } // con il tuo allievo, l'allenamento è la prima voce
  if(!(p.rango==='apprendista'&&p.mentore===c.id)) return o.apply(this,arguments);
  const m0=modale; modale=function(t,x,bt){ modale=m0; return m0(t,x,[{t:MEN.cosa,f:()=>mentoreSpiega(c)},{t:MEN.quiz,f:()=>quizMentore(c)},...(bt||[])]); };
  try{ return o.apply(this,arguments); } finally { modale=m0; } }; });
// nel pannello, con un clic ti ci porta
const mentoreBox=document.createElement('div'); mentoreBox.id='mentoreBox';
const stileMen=document.createElement('style'); stileMen.textContent=`#mentoreBox{margin:6px 0 8px;padding:8px 10px;border-radius:12px;background:rgba(120,170,255,.12);border:1px solid rgba(150,190,255,.4);font:700 15px system-ui,sans-serif;color:#dbe8ff;cursor:pointer}
#mentoreBox:hover{background:rgba(120,170,255,.22)} #mentoreBox small{display:block;margin-top:4px;font:700 12px system-ui;color:#ffe08a;opacity:.85}`;
document.head.appendChild(stileMen);
addEventListener('DOMContentLoaded',()=>{ const inv=document.getElementById('inventario'); if(inv) inv.parentNode.insertBefore(mentoreBox,inv);
 mentoreBox.addEventListener('click',()=>{ const m=G&&gatto(G.p.mentore); if(m&&!paused&&!scena){ G.p.guida=null; avviaGuida('punto',m); } }); });
setInterval(()=>{ const p=typeof G!=='undefined'&&G&&G.p, m=p&&p.rango==='apprendista'&&gatto(p.mentore); if(!m){ mentoreBox.style.display='none'; return; } mentoreBox.style.display='';
 const h=MEN.cerca(nome(m))+`<small>👉 ${MEN.porta}</small>`; if(mentoreBox.dataset.h!==h){ mentoreBox.dataset.h=h; mentoreBox.innerHTML=h; } },1000);
// anche tu, da guerriero, puoi essere mentore: il capo te lo propone, e puoi accettare o rifiutare
function proponiAllievo(){ const p=G.p, k=capo(), a=G.cats.find(c=>c.clan==='felce'&&c.rango==='apprendista'&&!c.figlio&&!c.pittore&&dist(c,p)<600); if(!k||!a) return false;
 segnaEvento(); G.allievoChiesto=G.t; const n=nome(a), acc=t=>t.replace('{o}',p.sesso==='f'?'a':'o').replace('{e}',p.sesso==='f'?'e':'').replace('{x}',a.sesso==='f'?'a':'o');
 recita([{c:k,t:acc(MEN.allievoCapo(nome(p),n)),dur:9}],()=>modale(MEN.allievoTit,acc(MEN.allievoTesto(n)),[{t:MEN.allievoSi,f:()=>{ p.allievo=a.id; a.amicizia=Math.max(a.amicizia||0,2); log(MEN.allievoFatto(n),'#c8f0a8'); parla(a,'💚',3); spirito(5,'tramanda'); }},{t:MEN.allievoNo,f:()=>log('🎓 '+MEN.allievoRif(n),'#e8d9a8')}])); return true; }
setInterval(()=>{ if(typeof G==='undefined'||!G||!G.p||typeof storiaLibera!=='function') return; const p=G.p; if(p.rango!=='guerriero'||p.vecchio) return;
 const al=gatto(p.allievo); if(al&&al.rango==='apprendista') return; if(G.allievoChiesto!=null&&G.t-G.allievoChiesto<MOON*6) return;
 if(lune(p)>=14&&nelCampo(p,0)&&storiaLibera(50)) proponiAllievo(); },4000);

// ================== la mappa si clicca: il gatto va nel punto scelto ==================
// richiesta del 12 novembre 2026.
// Un clic vicino a un campo, alla Roccia Alta o a un lago porta proprio lì; altrove, nel punto cliccato.
var MAPPA_R=null; const MAPPA_T={it:'clicca: ti ci porto',en:'click: I will take you there',fr:'clique : je t’y emmène'}[LINGUA];
function puntoMappa(e){ const R=MAPPA_R; if(!R||!G||G.dentro) return null; const r=e.target.getBoundingClientRect(), x=e.clientX-r.left, y=e.clientY-r.top;
 if(x<R.mx||x>R.mx+R.mw||y<R.my||y>R.my+R.mh) return null; const wx=(x-R.mx)/R.s, wy=(y-R.my)/R.s;
 for(const k in CLAN){ const cm=CLAN[k].campo; if(Math.hypot(wx-cm.x,wy-cm.y)<cm.r+60) return k==='felce'?{x:L.mucchio.x,y:L.mucchio.y+30}:{x:cm.x,y:cm.y}; }
 if(G.colosso&&G.colosso.visto&&Math.hypot(wx-G.colosso.x,wy-G.colosso.y)<90) return {x:G.colosso.x,y:G.colosso.y+125};
 if(Math.hypot(wx-L.roccia.x,wy-L.roccia.y)<70) return davantiRoccia();
 for(const k of ['lago','stagno']){ const l=L[k]; if(Math.hypot(wx-l.x,wy-l.y)<l.r+40) return metaPosto(k); }
 return {x:clamp(wx,30,WW-30),y:clamp(wy,30,WH-30)}; }
addEventListener('DOMContentLoaded',()=>{ const cv=document.getElementById('c'); if(!cv) return;
 cv.addEventListener('click',e=>{ if(paused||scena||recitaAtt) return; const pt=puntoMappa(e); if(!pt) return; e.stopImmediatePropagation(); G.p.guida=null; avviaGuida('punto',pt); },true);
 cv.addEventListener('mousemove',e=>{ if(puntoMappa(e)) cv.style.cursor='pointer'; else if(cv.style.cursor==='pointer'&&!zonaSotto(e)) cv.style.cursor=''; }); });
