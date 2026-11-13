// Piante medicinali, armadio delle erbe, pozioni e sacrificio sulla montagna sacra.
// Richieste del 13 novembre 2026
// Questo file si carica dopo lo script della pagina e prima di js/mondo3d.js, che disegna le piante da window.PIANTE.
// Regola: una scheda dice soltanto ciò che la fonte citata sostiene. v: 's' la pianta serve alla salute, 'r' al riposo.
const PIANTE=[
 {k:'achillea',e:'🤍',lat:'Achillea millefolium',v:'s',f:'ombrella',c:'#ffffff',h:0.42,
  it:['achillea','Fiori bianchi a ombrello e foglie fini come piume. Plinio racconta che la scoprì Achille, allievo del centauro Chirone, e che con essa guarì la ferita di Telefo: per questo porta il suo nome.','Plinio il Vecchio, <i>Storia naturale</i>, libro XXV.'],
  en:['yarrow','White flowers in a flat cluster, leaves as fine as feathers. Pliny tells that Achilles, pupil of the centaur Chiron, discovered it and healed the wound of Telephus with it: that is why it bears his name.','Pliny the Elder, <i>Natural History</i>, book XXV.'],
  fr:['achillée','Des fleurs blanches en ombelle et des feuilles fines comme des plumes. Pline raconte qu’Achille, élève du centaure Chiron, la découvrit et guérit avec elle la blessure de Télèphe : c’est pourquoi elle porte son nom.','Pline l’Ancien, <i>Histoire naturelle</i>, livre XXV.']},
 {k:'piantaggine',e:'🌱',lat:'Plantago major',v:'s',f:'rosetta',c:'#9a7a4a',h:0.3,
  it:['piantaggine','Foglie larghe a rosetta e una spiga bruna. Dioscoride scrive che le sue foglie asciugano e stringono: si posano sulle ferite, sulle piaghe e sui morsi dei cani.','Dioscoride, <i>De materia medica</i>, libro II.'],
  en:['plantain','Broad leaves in a rosette and a brown spike. Dioscorides writes that its leaves dry and bind: they are laid on wounds, on sores and on dog bites.','Dioscorides, <i>De materia medica</i>, book II.'],
  fr:['plantain','De larges feuilles en rosette et un épi brun. Dioscoride écrit que ses feuilles sèchent et resserrent : on les pose sur les blessures, sur les plaies et sur les morsures de chien.','Dioscoride, <i>De materia medica</i>, livre II.']},
 {k:'salice',e:'🌿',lat:'Salix alba',v:'s',f:'salice',c:'#b9d98a',h:0.75,
  it:['salice','Rami sottili che pendono verso terra. Dioscoride dice che le foglie e la corteccia stringono, e usa il loro decotto per bagnare le giunture che fanno male. Nell’Ottocento dalla corteccia si ricavò la salicina, da cui nacque l’aspirina.','Dioscoride, <i>De materia medica</i>, libro I.'],
  en:['willow','Thin branches hanging towards the ground. Dioscorides says that its leaves and bark bind, and uses their decoction to bathe aching joints. In the nineteenth century salicin was extracted from the bark, and from it aspirin was born.','Dioscorides, <i>De materia medica</i>, book I.'],
  fr:['saule','De fines branches qui pendent vers le sol. Dioscoride dit que ses feuilles et son écorce resserrent, et il emploie leur décoction pour baigner les articulations douloureuses. Au XIXᵉ siècle on tira de l’écorce la salicine, d’où naquit l’aspirine.','Dioscoride, <i>De materia medica</i>, livre I.']},
 {k:'papavero',e:'🌺',lat:'Papaver somniferum',v:'r',f:'coppa',c:'#e8392e',h:0.5,
  it:['papavero','Una coppa rossa in cima a uno stelo. Dioscoride scrive che il suo succo calma il dolore e fa dormire; e avverte che, preso in troppa quantità, fa male e può uccidere. È un <i>phármakon</i>: rimedio e veleno insieme.','Dioscoride, <i>De materia medica</i>, libro IV.'],
  en:['poppy','A red cup on top of a stem. Dioscorides writes that its juice soothes pain and brings sleep; and he warns that too much of it harms and can kill. It is a <i>phármakon</i>: remedy and poison at once.','Dioscorides, <i>De materia medica</i>, book IV.'],
  fr:['pavot','Une coupe rouge au sommet d’une tige. Dioscoride écrit que son suc calme la douleur et fait dormir ; et il avertit que, pris en trop grande quantité, il fait du mal et peut tuer. C’est un <i>phármakon</i> : remède et poison à la fois.','Dioscoride, <i>De materia medica</i>, livre IV.']},
 {k:'menta',e:'🍃',lat:'Mentha',v:'r',f:'spiga',c:'#c9a6ff',h:0.36,
  it:['menta','Foglie verdi e dentate, spighe lilla. Plinio scrive che il solo profumo della menta risveglia l’animo, e che il suo sapore fa venire appetito.','Plinio il Vecchio, <i>Storia naturale</i>, libro XX.'],
  en:['mint','Green toothed leaves, lilac spikes. Pliny writes that the mere scent of mint awakens the spirit, and that its taste whets the appetite.','Pliny the Elder, <i>Natural History</i>, book XX.'],
  fr:['menthe','Des feuilles vertes et dentées, des épis lilas. Pline écrit que le seul parfum de la menthe réveille l’esprit, et que sa saveur ouvre l’appétit.','Pline l’Ancien, <i>Histoire naturelle</i>, livre XX.']},
 {k:'salvia',e:'💜',lat:'Salvia officinalis',v:'s',f:'spiga',c:'#7a5cff',h:0.46,
  it:['salvia','Foglie grigie e vellutate, spighe viola. Dioscoride dice che ferma il sangue delle ferite e pulisce le piaghe. I medici di Salerno, nel Medioevo, chiedevano: perché dovrebbe morire chi ha la salvia nell’orto?','Dioscoride, <i>De materia medica</i>, libro III; <i>Regimen sanitatis Salernitanum</i>.'],
  en:['sage','Grey velvety leaves, violet spikes. Dioscorides says that it stops the blood of wounds and cleans sores. The physicians of Salerno, in the Middle Ages, asked: why should anyone die who has sage in the garden?','Dioscorides, <i>De materia medica</i>, book III; <i>Regimen sanitatis Salernitanum</i>.'],
  fr:['sauge','Des feuilles grises et veloutées, des épis violets. Dioscoride dit qu’elle arrête le sang des blessures et nettoie les plaies. Les médecins de Salerne, au Moyen Âge, demandaient : pourquoi mourrait celui qui a de la sauge dans son jardin ?','Dioscoride, <i>De materia medica</i>, livre III ; <i>Regimen sanitatis Salernitanum</i>.']},
 {k:'timo',e:'🌸',lat:'Thymus',v:'s',f:'cuscino',c:'#ff9ad0',h:0.16,
  it:['timo','Un cuscino basso di fiorellini rosa. Dioscoride lo dà con il miele a chi respira a fatica e ha il petto chiuso.','Dioscoride, <i>De materia medica</i>, libro III.'],
  en:['thyme','A low cushion of tiny pink flowers. Dioscorides gives it with honey to those who breathe with difficulty and have a tight chest.','Dioscorides, <i>De materia medica</i>, book III.'],
  fr:['thym','Un coussin bas de petites fleurs roses. Dioscoride le donne avec du miel à ceux qui respirent avec peine et ont la poitrine prise.','Dioscoride, <i>De materia medica</i>, livre III.']},
 {k:'camomilla',e:'🌼',lat:'Matricaria chamomilla',v:'r',f:'margherita',c:'#ffffff',h:0.3,
  it:['camomilla','Petali bianchi intorno a un bottone giallo. Il suo nome greco, <i>chamáimēlon</i>, vuol dire «mela di terra»: Plinio spiega che profuma di mela, e che il medico Asclepiade la lodava moltissimo.','Plinio il Vecchio, <i>Storia naturale</i>, libro XXII.'],
  en:['chamomile','White petals around a yellow button. Its Greek name, <i>chamáimēlon</i>, means “earth apple”: Pliny explains that it smells of apple, and that the physician Asclepiades praised it highly.','Pliny the Elder, <i>Natural History</i>, book XXII.'],
  fr:['camomille','Des pétales blancs autour d’un bouton jaune. Son nom grec, <i>chamáimēlon</i>, veut dire « pomme du sol » : Pline explique qu’elle sent la pomme, et que le médecin Asclépiade la louait beaucoup.','Pline l’Ancien, <i>Histoire naturelle</i>, livre XXII.']},
 {k:'malva',e:'🌷',lat:'Malva sylvestris',v:'r',f:'malva',c:'#e07ad8',h:0.55,
  it:['malva','Fiori rosa-viola lungo uno stelo alto. Plinio racconta che chi beve ogni giorno un sorso del suo succo resta al riparo da tutte le malattie. Isidoro di Siviglia spiega il suo nome con il verbo greco che vuol dire «ammorbidire».','Plinio il Vecchio, <i>Storia naturale</i>, libro XX; Isidoro, <i>Etimologie</i>, XVII.'],
  en:['mallow','Pink-violet flowers along a tall stem. Pliny tells that whoever drinks a sip of its juice every day stays safe from all diseases. Isidore of Seville explains its name by the Greek verb meaning “to soften”.','Pliny the Elder, <i>Natural History</i>, book XX; Isidore, <i>Etymologies</i>, XVII.'],
  fr:['mauve','Des fleurs rose-violet le long d’une haute tige. Pline raconte que celui qui boit chaque jour une gorgée de son suc reste à l’abri de toutes les maladies. Isidore de Séville explique son nom par le verbe grec qui veut dire « amollir ».','Pline l’Ancien, <i>Histoire naturelle</i>, livre XX ; Isidore, <i>Étymologies</i>, XVII.']},
 {k:'iperico',e:'⭐',lat:'Hypericum perforatum',v:'s',f:'stella',c:'#ffd92e',h:0.4,
  it:['iperico','Fiori gialli a stella. Dioscoride dice che una sua specie si chiama <i>andrósaimon</i>, «sangue d’uomo», perché i fiori strofinati tra le dita lasciano un succo rosso; lo usa sulle scottature.','Dioscoride, <i>De materia medica</i>, libro III.'],
  en:['St John’s wort','Yellow star-shaped flowers. Dioscorides says that one kind of it is called <i>andrósaimon</i>, “man’s blood”, because the flowers rubbed between the fingers leave a red juice; he uses it on burns.','Dioscorides, <i>De materia medica</i>, book III.'],
  fr:['millepertuis','Des fleurs jaunes en étoile. Dioscoride dit qu’une de ses espèces s’appelle <i>andrósaimon</i>, « sang d’homme », parce que les fleurs frottées entre les doigts laissent un suc rouge ; il l’emploie sur les brûlures.','Dioscoride, <i>De materia medica</i>, livre III.']},
 {k:'valeriana',e:'🩷',lat:'Valeriana officinalis',v:'r',f:'ombrella',c:'#ffc4dc',h:0.62,
  it:['valeriana','Ombrelle rosa pallido in cima a steli alti. Dioscoride la chiama <i>phu</i> e dice che la sua radice scalda. Il suo odore piace moltissimo a circa un gatto su due, come l’erba gatta.','Dioscoride, <i>De materia medica</i>, libro I; per i gatti: Bol e colleghi, 2017.'],
  en:['valerian','Pale pink clusters on top of tall stems. Dioscorides calls it <i>phu</i> and says that its root warms. About one cat in two loves its smell, as with catnip.','Dioscorides, <i>De materia medica</i>, book I; for cats: Bol and colleagues, 2017.'],
  fr:['valériane','Des ombelles rose pâle au sommet de hautes tiges. Dioscoride l’appelle <i>phu</i> et dit que sa racine réchauffe. Son odeur plaît énormément à environ un chat sur deux, comme l’herbe à chat.','Dioscoride, <i>De materia medica</i>, livre I ; pour les chats : Bol et collègues, 2017.']},
 {k:'finocchio',e:'💛',lat:'Foeniculum vulgare',v:'s',f:'ombrella',c:'#f2e24a',h:0.8,
  it:['finocchio','Alto, con ombrelle gialle e foglie come fili. Plinio racconta che i serpenti, quando cambiano pelle, lo mangiano e si bagnano gli occhi con il suo succo per vederci meglio: così gli uomini capirono che fa bene alla vista.','Plinio il Vecchio, <i>Storia naturale</i>, libro XX.'],
  en:['fennel','Tall, with yellow clusters and thread-like leaves. Pliny tells that snakes, when they shed their skin, eat it and bathe their eyes with its juice to see better: so people understood that it is good for the sight.','Pliny the Elder, <i>Natural History</i>, book XX.'],
  fr:['fenouil','Haut, avec des ombelles jaunes et des feuilles comme des fils. Pline raconte que les serpents, quand ils changent de peau, en mangent et se baignent les yeux de son suc pour mieux voir : ainsi les hommes comprirent qu’il fait du bien à la vue.','Pline l’Ancien, <i>Histoire naturelle</i>, livre XX.']},
 {k:'aglio',e:'🟣',lat:'Allium sativum',v:'s',f:'globo',c:'#b07cff',h:0.55,
  it:['aglio','Una palla di fiorellini viola in cima a uno stelo dritto. Plinio scrive che l’aglio ha grandi forze, che aiuta chi cambia acqua e paese, e che il suo odore tiene lontani serpenti e scorpioni.','Plinio il Vecchio, <i>Storia naturale</i>, libro XX.'],
  en:['garlic','A ball of tiny violet flowers on top of a straight stem. Pliny writes that garlic has great powers, that it helps those who change water and country, and that its smell keeps snakes and scorpions away.','Pliny the Elder, <i>Natural History</i>, book XX.'],
  fr:['ail','Une boule de petites fleurs violettes au sommet d’une tige droite. Pline écrit que l’ail a de grandes forces, qu’il aide ceux qui changent d’eau et de pays, et que son odeur éloigne les serpents et les scorpions.','Pline l’Ancien, <i>Histoire naturelle</i>, livre XX.']},
 {k:'verbena',e:'🔮',lat:'Verbena officinalis',v:'s',f:'candelabro',c:'#a98cff',h:0.52,
  it:['verbena','Spighe sottili e viola, aperte come un candelabro. Per i Romani era l’erba sacra: Plinio dice che nessuna pianta era più famosa. Con essa si spazzava la tavola di Giove e si purificavano le case, e gli ambasciatori la portavano quando andavano dal nemico.','Plinio il Vecchio, <i>Storia naturale</i>, libro XXV.'],
  en:['vervain','Thin violet spikes, open like a candelabrum. For the Romans it was the sacred herb: Pliny says that no plant was more famous. With it they swept the table of Jupiter and purified houses, and ambassadors carried it when they went to the enemy.','Pliny the Elder, <i>Natural History</i>, book XXV.'],
  fr:['verveine','De fins épis violets, ouverts comme un candélabre. Pour les Romains c’était l’herbe sacrée : Pline dit qu’aucune plante n’était plus célèbre. Avec elle on balayait la table de Jupiter et on purifiait les maisons, et les ambassadeurs la portaient quand ils allaient chez l’ennemi.','Pline l’Ancien, <i>Histoire naturelle</i>, livre XXV.']},
];
window.PIANTE=PIANTE;

// più piante nel bosco: venti punti nuovi (sei oltre il fiume), e ogni punto ha la sua specie
(function(){ const r=mulberry32(4711); let giri=0;
 while(ERBE.length<34&&giri++<6000){ const est=ERBE.length>=28, x=est?FX1+60+r()*(WW-FX1-120):40+r()*900, y=40+r()*1720;
  if(inCampo(x,y,40)||acqua(x,y)||ERBE.some(h=>Math.hypot(h.x-x,h.y-y)<70)) continue; ERBE.push({x,y,tipo:0}); }
 ERBE.forEach((h,i)=>{ h.specie=(i*5+3)%PIANTE.length; }); })();

const ERB_T={
 it:{ cogli:n=>'Raccogli '+n, ignota:'una pianta che non conosci', solo:'Solo i guaritori conoscono le erbe.', piena:'Non puoi portare altre erbe: usale, o riponile nell’armadio della tana del guaritore.',
  colta:(n,q)=>`🌿 Hai raccolto ${n}. Ne porti ${q}.`, fonte:'La fonte', virtuS:'🩹 Nelle pozioni serve alla salute.', virtuR:'💤 Nelle pozioni serve al riposo.',
  armHint:'Apri l’armadio delle erbe', armTit:'🌿 L’armadio delle erbe officinali', armVuoto:'Gli scaffali sono vuoti, e i vasi aspettano. Le piante che un guaritore raccoglie nel bosco si ripongono qui, una specie per vaso.',
  armDentro:(el,n,tot)=>`Nei vasi: ${el}.<br><br><b>${n} piante su ${tot}.</b>`, armNonG:'Soltanto i guaritori ripongono e prendono le erbe; tu puoi sfogliare l’erbario.',
  riponi:n=>`🫙 Riporre le tue erbe (${n})`, prendi:'🌿 Prendere tre erbe', erbario:'📖 Sfogliare l’erbario', chiudi:'Chiudere', nonOra:'Non ora',
  riposte:(n,nuove)=>`🫙 Hai riposto ${n} ${n===1?'erba':'erbe'} nell’armadio.`+(nuove?` ${nuove===1?'Una pianta nuova':nuove+' piante nuove'} per l’erbario del clan!`:''), motErb:'l’erbario del clan cresce',
  prese:n=>`🌿 Hai preso ${n} ${n===1?'erba':'erbe'} dall’armadio.`, erbTit:'📖 L’erbario del clan', erbTesto:(n,tot)=>`Conosci ${n} piante su ${tot}. Scegline una per rileggere la sua scheda.`,
  pienoTit:'📖 L’erbario è completo', pieno:'Tutte e quattordici le piante del bosco riposano nei vasi dell’armadio. Il clan ha un erbario intero, e i guaritori che verranno lo troveranno pronto.',
  boxDio:['Il libro delle piante','Verso il 70 dopo Cristo il medico greco Dioscoride descrisse nel <i>De materia medica</i> circa seicento piante, con il loro aspetto e i loro usi. Per più di quindici secoli medici e speziali lo hanno copiato, illustrato e consultato.'],
  nuovoArm:'🌿 Nella tana del guaritore, a destra dell’altare, c’è l’armadio delle erbe officinali.',
  tanaG:cl=>`tana del guaritore (${cl})`, rubaHint:'Rubare le erbe dall’armadio', rubaSolo:'Vasi pieni di erbe secche. Soltanto un guaritore saprebbe che cosa prendere.', rubaVuoto:'I vasi sono ancora mezzi vuoti dopo il tuo ultimo passaggio.',
  rubate:(el,cl)=>`🌿 Hai rubato dall’armadio del ${cl}: ${el}. Se ne accorgeranno!`, rubaMot:'ci hanno rubato le erbe',
  pozBox:n=>`⚗️ Prepara una pozione<small>👉 hai ${n} erbe: ne servono tre</small>`, pozBtn:'⚗️ Preparare una pozione', pozTit:'⚗️ Una pozione',
  pozTesto:'Tre erbe pestate insieme su una pietra, con un po’ d’acqua. Le piante della salute curano, quelle del riposo ridanno energia; tre piante diverse fanno una pozione più forte.',
  pozS:(el,n)=>`🩹 Pozione di salute (+${n}): ${el}`, pozR:(el,n)=>`💤 Pozione di riposo (+${n}): ${el}`,
  pozFattaS:(el,n)=>`⚗️ Hai mescolato ${el}: la pozione ti dà +${n} di salute.`, pozFattaR:(el,n)=>`⚗️ Hai mescolato ${el}: la pozione ti dà +${n} di energia.`,
  boxTer:['Semplici e composti','I medici antichi chiamavano «semplice» il rimedio fatto di una pianta sola, «composto» quello che ne mescola molte. Il più famoso, la teriaca di Andromaco, medico di Nerone, ne univa più di sessanta; Galeno ne descrive la ricetta.'],
  mucHint:'Il mucchio delle prede', mucTit:'🐭 Il mucchio delle prede', mucTesto:n=>`Nel mucchio ci sono ${n} prede. Puoi mangiare, oppure prenderne una per offrirla sulla montagna sacra.`, mucMangia:'Mangiare', mucPrendi:'🔥 Prendere una preda per il sacrificio',
  mucPresa:'🔥 Hai preso una preda dal mucchio. Sali in cima alla Roccia Alta, la montagna sacra del clan, e premi Spazio.',
  offri:'Offri la preda sulla montagna sacra', presto:'Il fuoco sacro si accende una volta per luna. Aspetta la prossima.',
  sc1:'In cima alla montagna sacra posi la preda sulla pietra. Sotto, uno dopo l’altro, i gatti del clan si radunano.', sc2:'Il fuoco prende, e sale alto nel cielo. Tutto il clan alza il muso e miagola insieme.', sc3:'Il fumo porta l’offerta agli antenati stellati. Nessuno ha fame, stanotte: la preda è di tutti.',
  scTit:'🔥 Il fuoco sulla montagna sacra', scFine:n=>`Il clan ha cantato insieme sotto il fuoco. Lo spirito del clan sale di ${n}.`,
  scBox:['I fuochi sulle cime','Erodoto racconta che i Persiani non costruivano templi né statue: salivano sulle cime più alte dei monti e lì offrivano i loro sacrifici al cielo intero, che chiamavano Zeus (<i>Storie</i>, I, 131).'] },
 en:{ cogli:n=>'Gather '+n, ignota:'a plant you do not know', solo:'Only healers know the herbs.', piena:'You cannot carry more herbs: use them, or store them in the cabinet of the healer’s den.',
  colta:(n,q)=>`🌿 You gathered ${n}. You carry ${q}.`, fonte:'The source', virtuS:'🩹 In potions it serves health.', virtuR:'💤 In potions it serves rest.',
  armHint:'Open the herb cabinet', armTit:'🌿 The cabinet of healing herbs', armVuoto:'The shelves are empty, and the jars are waiting. The plants a healer gathers in the forest are stored here, one kind per jar.',
  armDentro:(el,n,tot)=>`In the jars: ${el}.<br><br><b>${n} plants out of ${tot}.</b>`, armNonG:'Only healers store and take herbs; you may leaf through the herbal.',
  riponi:n=>`🫙 Store your herbs (${n})`, prendi:'🌿 Take three herbs', erbario:'📖 Leaf through the herbal', chiudi:'Close', nonOra:'Not now',
  riposte:(n,nuove)=>`🫙 You stored ${n} ${n===1?'herb':'herbs'} in the cabinet.`+(nuove?` ${nuove===1?'One new plant':nuove+' new plants'} for the Clan’s herbal!`:''), motErb:'the Clan’s herbal grows',
  prese:n=>`🌿 You took ${n} ${n===1?'herb':'herbs'} from the cabinet.`, erbTit:'📖 The Clan’s herbal', erbTesto:(n,tot)=>`You know ${n} plants out of ${tot}. Choose one to read its card again.`,
  pienoTit:'📖 The herbal is complete', pieno:'All fourteen plants of the forest rest in the jars of the cabinet. The Clan has a whole herbal, and the healers to come will find it ready.',
  boxDio:['The book of plants','Around 70 AD the Greek physician Dioscorides described in <i>De materia medica</i> about six hundred plants, with their appearance and their uses. For more than fifteen centuries physicians and apothecaries copied, illustrated and consulted it.'],
  nuovoArm:'🌿 In the healer’s den, to the right of the altar, stands the cabinet of healing herbs.',
  tanaG:cl=>`healer’s den (${cl})`, rubaHint:'Steal herbs from the cabinet', rubaSolo:'Jars full of dried herbs. Only a healer would know what to take.', rubaVuoto:'The jars are still half empty after your last visit.',
  rubate:(el,cl)=>`🌿 You stole from the cabinet of ${cl}: ${el}. They will notice!`, rubaMot:'they stole our herbs',
  pozBox:n=>`⚗️ Brew a potion<small>👉 you have ${n} herbs: three are needed</small>`, pozBtn:'⚗️ Brew a potion', pozTit:'⚗️ A potion',
  pozTesto:'Three herbs crushed together on a stone, with a little water. Plants of health heal, plants of rest give energy back; three different plants make a stronger potion.',
  pozS:(el,n)=>`🩹 Potion of health (+${n}): ${el}`, pozR:(el,n)=>`💤 Potion of rest (+${n}): ${el}`,
  pozFattaS:(el,n)=>`⚗️ You mixed ${el}: the potion gives you +${n} health.`, pozFattaR:(el,n)=>`⚗️ You mixed ${el}: the potion gives you +${n} energy.`,
  boxTer:['Simples and compounds','Ancient physicians called “simple” a remedy made of a single plant, “compound” one that mixes many. The most famous, the theriac of Andromachus, physician to Nero, joined more than sixty; Galen describes its recipe.'],
  mucHint:'The prey pile', mucTit:'🐭 The prey pile', mucTesto:n=>`There are ${n} prey in the pile. You may eat, or take one to offer it on the sacred mountain.`, mucMangia:'Eat', mucPrendi:'🔥 Take a prey for the sacrifice',
  mucPresa:'🔥 You took a prey from the pile. Climb to the top of the High Rock, the Clan’s sacred mountain, and press Space.',
  offri:'Offer the prey on the sacred mountain', presto:'The sacred fire is lit once a moon. Wait for the next one.',
  sc1:'On top of the sacred mountain you lay the prey on the stone. Below, one after another, the cats of the Clan gather.', sc2:'The fire catches, and rises high into the sky. The whole Clan lifts its muzzle and meows together.', sc3:'The smoke carries the offering to the starry ancestors. No one is hungry tonight: the prey belongs to all.',
  scTit:'🔥 The fire on the sacred mountain', scFine:n=>`The Clan sang together beneath the fire. The Clan’s spirit rises by ${n}.`,
  scBox:['Fires on the peaks','Herodotus tells that the Persians built neither temples nor statues: they climbed the highest peaks of the mountains and there offered their sacrifices to the whole sky, which they called Zeus (<i>Histories</i>, I, 131).'] },
 fr:{ cogli:n=>'Cueille '+n, ignota:'une plante que tu ne connais pas', solo:'Seuls les guérisseurs connaissent les herbes.', piena:'Tu ne peux pas porter d’autres herbes : utilise-les, ou range-les dans l’armoire de la tanière du guérisseur.',
  colta:(n,q)=>`🌿 Tu as cueilli ${n}. Tu en portes ${q}.`, fonte:'La source', virtuS:'🩹 Dans les potions, elle sert à la santé.', virtuR:'💤 Dans les potions, elle sert au repos.',
  armHint:'Ouvre l’armoire aux herbes', armTit:'🌿 L’armoire aux herbes officinales', armVuoto:'Les étagères sont vides, et les pots attendent. Les plantes qu’un guérisseur cueille dans le bois se rangent ici, une espèce par pot.',
  armDentro:(el,n,tot)=>`Dans les pots : ${el}.<br><br><b>${n} plantes sur ${tot}.</b>`, armNonG:'Seuls les guérisseurs rangent et prennent les herbes ; toi, tu peux feuilleter l’herbier.',
  riponi:n=>`🫙 Ranger tes herbes (${n})`, prendi:'🌿 Prendre trois herbes', erbario:'📖 Feuilleter l’herbier', chiudi:'Fermer', nonOra:'Pas maintenant',
  riposte:(n,nuove)=>`🫙 Tu as rangé ${n} ${n===1?'herbe':'herbes'} dans l’armoire.`+(nuove?` ${nuove===1?'Une plante nouvelle':nuove+' plantes nouvelles'} pour l’herbier du clan !`:''), motErb:'l’herbier du clan grandit',
  prese:n=>`🌿 Tu as pris ${n} ${n===1?'herbe':'herbes'} dans l’armoire.`, erbTit:'📖 L’herbier du clan', erbTesto:(n,tot)=>`Tu connais ${n} plantes sur ${tot}. Choisis-en une pour relire sa fiche.`,
  pienoTit:'📖 L’herbier est complet', pieno:'Les quatorze plantes du bois reposent dans les pots de l’armoire. Le clan a un herbier entier, et les guérisseurs à venir le trouveront prêt.',
  boxDio:['Le livre des plantes','Vers l’an 70 après Jésus-Christ, le médecin grec Dioscoride décrivit dans le <i>De materia medica</i> environ six cents plantes, avec leur aspect et leurs usages. Pendant plus de quinze siècles, médecins et apothicaires l’ont copié, illustré et consulté.'],
  nuovoArm:'🌿 Dans la tanière du guérisseur, à droite de l’autel, se trouve l’armoire aux herbes officinales.',
  tanaG:cl=>`tanière du guérisseur (${cl})`, rubaHint:'Voler les herbes de l’armoire', rubaSolo:'Des pots pleins d’herbes sèches. Seul un guérisseur saurait quoi prendre.', rubaVuoto:'Les pots sont encore à moitié vides depuis ton dernier passage.',
  rubate:(el,cl)=>`🌿 Tu as volé dans l’armoire du ${cl} : ${el}. Ils s’en apercevront !`, rubaMot:'on nous a volé nos herbes',
  pozBox:n=>`⚗️ Prépare une potion<small>👉 tu as ${n} herbes : il en faut trois</small>`, pozBtn:'⚗️ Préparer une potion', pozTit:'⚗️ Une potion',
  pozTesto:'Trois herbes écrasées ensemble sur une pierre, avec un peu d’eau. Les plantes de la santé soignent, celles du repos redonnent de l’énergie ; trois plantes différentes font une potion plus forte.',
  pozS:(el,n)=>`🩹 Potion de santé (+${n}) : ${el}`, pozR:(el,n)=>`💤 Potion de repos (+${n}) : ${el}`,
  pozFattaS:(el,n)=>`⚗️ Tu as mélangé ${el} : la potion te donne +${n} de santé.`, pozFattaR:(el,n)=>`⚗️ Tu as mélangé ${el} : la potion te donne +${n} d’énergie.`,
  boxTer:['Simples et composés','Les médecins anciens appelaient « simple » le remède fait d’une seule plante, « composé » celui qui en mêle plusieurs. Le plus célèbre, la thériaque d’Andromaque, médecin de Néron, en réunissait plus de soixante ; Galien en décrit la recette.'],
  mucHint:'Le tas de proies', mucTit:'🐭 Le tas de proies', mucTesto:n=>`Il y a ${n} proies dans le tas. Tu peux manger, ou en prendre une pour l’offrir sur la montagne sacrée.`, mucMangia:'Manger', mucPrendi:'🔥 Prendre une proie pour le sacrifice',
  mucPresa:'🔥 Tu as pris une proie dans le tas. Monte au sommet du Haut Rocher, la montagne sacrée du clan, et appuie sur Espace.',
  offri:'Offre la proie sur la montagne sacrée', presto:'Le feu sacré s’allume une fois par lune. Attends la prochaine.',
  sc1:'Au sommet de la montagne sacrée, tu poses la proie sur la pierre. En bas, l’un après l’autre, les chats du clan se rassemblent.', sc2:'Le feu prend, et monte haut dans le ciel. Tout le clan lève le museau et miaule ensemble.', sc3:'La fumée porte l’offrande aux ancêtres étoilés. Personne n’a faim, cette nuit : la proie est à tous.',
  scTit:'🔥 Le feu sur la montagne sacrée', scFine:n=>`Le clan a chanté ensemble sous le feu. L’esprit du clan monte de ${n}.`,
  scBox:['Les feux sur les cimes','Hérodote raconte que les Perses ne bâtissaient ni temples ni statues : ils montaient sur les plus hautes cimes des montagnes et y offraient leurs sacrifices au ciel tout entier, qu’ils appelaient Zeus (<i>Histoires</i>, I, 131).'] },
};

// la tana del guaritore dei vicini è la seconda di ogni campo: ha anche lei un armadio
const haArmadio=k=>k==='tanaGuaritore'||/Tana1$/.test(k||'');
const postoArmadio=d=>({x:d.x+d.r*0.5,y:d.y-d.r*0.5+0.45/(SALA_S*0.02)});
window.ERBE3D={haArmadio, vaso(k,s){ if(typeof G==='undefined'||!G) return false; if(k==='tanaGuaritore') return !!(G.armadio&&G.armadio[s]>0); const r=G.erbeRubate&&G.erbeRubate[k]; return !(r&&G.t-r<MOON*2)||s%3===0; }};
if(typeof taneNemiche==='function'){ const o=taneNemiche; taneNemiche=window.taneNemiche=function(){ const r=o.apply(this,arguments), T=ERB_T[LINGUA]||ERB_T.it; for(const k of r) if(haArmadio(k)&&!L[k].guar){ L[k].guar=true; L[k].nome=T.tanaG(CLAN[L[k].clan].nome); } return r; }; }

addEventListener('DOMContentLoaded',()=>{ if(typeof raccogli!=='function'||typeof modale!=='function'||typeof stG!=='function') return;
 const LG=LINGUA, T=ERB_T[LG]||ERB_T.it, N=PIANTE.length, SPIRITO_FUOCO=35;
 const nomeP=s=>PIANTE[s][LG][0], conE=s=>PIANTE[s].e+' '+nomeP(s);
 const sacca=()=>{ const p=G.p; if(!Array.isArray(p.sacca)) p.sacca=[]; while(p.sacca.length>(p.erbe||0)) p.sacca.shift(); while(p.sacca.length<(p.erbe||0)) p.sacca.push(Math.floor(Math.random()*N)); return p.sacca; };
 const viste=()=>{ const S=stG(); return S.piante||(S.piante={}); };
 const coda=[];
 function scheda(s,poi){ const P=PIANTE[s], t=P[LG]; modale(P.e+' '+t[0].charAt(0).toUpperCase()+t[0].slice(1),`<i>${P.lat}</i><br><br>${t[1]}<br><br><b>${P.v==='r'?T.virtuR:T.virtuS}</b>`+box(T.fonte,t[2]),[{t:'🌿',f:poi}]); }
 function prendi(s,conta){ const p=G.p; sacca(); p.erbe=(p.erbe||0)+1; if(conta) p.erbeTotali=(p.erbeTotali||0)+1; p.sacca.push(s); if(!viste()[s]){ viste()[s]=G.t||1; coda.push(s); } }
 window.ERBE_PROVA={scheda,prendi,sacca,impara(s){ const A=G.armadio||(G.armadio={}); A[s]=(A[s]||0)+1; if(!viste()[s]){ viste()[s]=G.t||1; coda.push(s); } }}; // impara: l'erba raccolta dal gattino in gita va nell'armadio, e la prima volta la scheda la spiega

 // raccogliere: ogni punto dà la sua pianta, e la prima volta la scheda la spiega
 raccogli=function(i){ const p=G.p; if(!puoErbe()){ log(T.solo); return; } if(p.erbe>=8){ log(T.piena); return; } G.erbe[i]=G.t+40; const s=ERBE[i].specie||0;
  avviaScena('annusa',[p],0.9,()=>{ prendi(s,true); flo(p.x,p.y-30,'+1 '+PIANTE[s].e,'#9be07f'); log(T.colta(nomeP(s),p.erbe),'#c8f0a8'); }); };
 const RACC={it:'Raccogli le erbe',en:'Gather herbs',fr:'Cueille les herbes'}[LG];

 // l'armadio delle erbe officinali
 function apriArmadio(){ const p=G.p, A=G.armadio||(G.armadio={}), tot=Object.values(A).reduce((a,b)=>a+b,0), el=PIANTE.map((P,s)=>A[s]>0?`${conE(s)} ×${A[s]}`:null).filter(Boolean), b=[]; sacca();
  if(puoErbe()&&p.erbe>0) b.push({t:T.riponi(p.erbe),f:riponi});
  if(puoErbe()&&tot>0&&p.erbe<8) b.push({t:T.prendi,f:prendiArmadio});
  if(eGuarP(p)&&p.erbe>=3) b.push({t:T.pozBtn,f:pozione});
  if(conosciute().length) b.push({t:T.erbario,f:erbario});
  b.push({t:T.chiudi});
  modale(T.armTit,(el.length?T.armDentro(el.join(' · '),el.length,N):T.armVuoto)+(puoErbe()?'':'<br><br>'+T.armNonG),b); }
 const conosciute=()=>PIANTE.map((P,s)=>s).filter(s=>viste()[s]||(stG().erbario||{})[s]);
 function riponi(){ const p=G.p, A=G.armadio||(G.armadio={}), S=stG(), E=S.erbario||(S.erbario={}), n=sacca().length; let nuove=0;
  for(const s of p.sacca){ A[s]=(A[s]||0)+1; if(!E[s]){ E[s]=1; nuove++; } viste()[s]=viste()[s]||G.t||1; } p.sacca=[]; p.erbe=0;
  log(T.riposte(n,nuove),'#c8f0a8'); flo(p.x,p.y-30,'🫙','#c8f0a8'); if(nuove) spirito(2*nuove,T.motErb);
  if(Object.keys(E).length>=N&&!S.erbarioPieno){ S.erbarioPieno=true; segnaEvento(); setTimeout(()=>modale(T.pienoTit,T.pieno+stSapere(T.boxDio),[{t:'📖',f:()=>spirito(15,T.motErb)}]),900); } }
 function prendiArmadio(){ const p=G.p, A=G.armadio||{}; let n=0; sacca();
  while(n<3&&p.erbe<8){ const s=Object.keys(A).filter(k=>A[k]>0).sort((a,b)=>A[b]-A[a])[0]; if(s==null) break; A[s]--; prendi(+s,false); n++; }
  if(n){ log(T.prese(n),'#c8f0a8'); flo(p.x,p.y-30,'+'+n+' 🌿','#9be07f'); } }
 function erbario(){ const c=conosciute(); modale(T.erbTit,T.erbTesto(c.length,N),[...c.map(s=>({t:conE(s),f:()=>scheda(s,erbario)})),{t:T.chiudi}]); }

 // rubare le erbe dall'armadio del guaritore di un altro clan
 function rubaErbe(k){ const p=G.p, cl=L[k].clan, R=G.erbeRubate||(G.erbeRubate={}); if(!puoErbe()){ log('🫙 '+T.rubaSolo,'#ffd27a'); return; }
  if(R[k]&&G.t-R[k]<MOON*2){ log('🫙 '+T.rubaVuoto,'#ffd27a'); return; } if(p.erbe>=8){ log(T.piena); return; }
  R[k]=G.t; const n=Math.min(3,8-p.erbe), ord=PIANTE.map((P,s)=>s).sort((a,b)=>(viste()[a]?1:0)-(viste()[b]?1:0)||Math.random()-0.5), prese=ord.slice(0,n);
  avviaScena('annusa',[p],1.1,()=>{ for(const s of prese) prendi(s,true); flo(p.x,p.y-30,'+'+n+' 🌿','#9be07f'); log(T.rubate(prese.map(conE).join(', '),CLAN[cl].nome),'#ffb98a');
   if(typeof offeso==='function') offeso(cl); tensione(cl,15,T.rubaMot); G.rubatoDa=cl; segnaEvento(); }); }

 if(typeof contestoTana==='function'){ const o=contestoTana; contestoTana=function(){ const k=G.dentro, d=k&&L[k];
  if(d&&haArmadio(k)){ const a=postoArmadio(d), p=G.p; if(Math.hypot(p.x-a.x,p.y-(a.y+4))<11) return d.clan?{t:T.rubaHint,f:()=>rubaErbe(k)}:{t:T.armHint,f:apriArmadio}; }
  return o.apply(this,arguments); }; }

 // la pozione: tre erbe mescolate, per la salute o per il riposo
 function scegli(v){ const sa=sacca().map((s,i)=>({s,i})), presi=[], ha=s=>presi.some(x=>x.s===s);
  const passi=[x=>PIANTE[x.s].v===v&&!ha(x.s),x=>PIANTE[x.s].v!==v&&!ha(x.s),x=>PIANTE[x.s].v===v,x=>true];
  for(const ok of passi) for(const x of sa){ if(presi.length>=3) break; if(!presi.includes(x)&&ok(x)) presi.push(x); }
  const giuste=presi.filter(x=>PIANTE[x.s].v===v).length, diverse=new Set(presi.map(x=>x.s)).size;
  return {presi,forza:giuste*15+(presi.length-giuste)*5+(diverse===3?10:0),el:presi.map(x=>nomeP(x.s)).join(', ')}; }
 function pozione(){ const p=G.p; if(!eGuarP(p)||sacca().length<3) return; const S=scegli('s'), R=scegli('r');
  modale(T.pozTit,T.pozTesto+stSapere(T.boxTer),[{t:T.pozS(S.el,S.forza),f:()=>mescola('s')},{t:T.pozR(R.el,R.forza),f:()=>mescola('r')},{t:T.nonOra}]); }
 function mescola(v){ const p=G.p, c=scegli(v); if(c.presi.length<3) return;
  avviaScena('mangia',[p],1.6,()=>{ sacca(); for(const i of c.presi.map(x=>x.i).sort((a,b)=>b-a)) p.sacca.splice(i,1); p.erbe=p.sacca.length;
   if(v==='s'){ p.salute=Math.min(100,p.salute+c.forza); flo(p.x,p.y-30,'⚗️ +'+c.forza,'#9be07f'); log(T.pozFattaS(c.el,c.forza),'#c8f0a8'); }
   else { p.energia=Math.min(100,p.energia+c.forza); flo(p.x,p.y-30,'⚗️ +'+c.forza,'#9fd0ff'); log(T.pozFattaR(c.el,c.forza),'#bfe0ff'); }
   stG().pozioni=(stG().pozioni||0)+1; if(window.REG) REG.evento('pozione',c.el); }); }
 window.ERBE_PROVA.pozione=pozione;

 const pozBox=document.createElement('div'); pozBox.id='pozBox'; pozBox.style.display='none';
 { const st=document.createElement('style'); st.textContent=`#pozBox{margin:6px 0 8px;padding:8px 10px;border-radius:12px;background:rgba(110,200,140,.14);border:1px solid rgba(150,230,170,.5);font:700 15px system-ui,sans-serif;color:#d6ffe0;cursor:pointer}
#pozBox:hover{background:rgba(110,200,140,.28)} #pozBox small{display:block;margin-top:4px;font:700 12px system-ui;color:#ffe08a;opacity:.85}`; document.head.appendChild(st);
  const inv=document.getElementById('inventario'); if(inv) inv.parentNode.insertBefore(pozBox,inv); }
 pozBox.addEventListener('click',()=>{ if(!G||paused||scena||recitaAtt||G.raid) return; pozione(); });

 // il sacrificio: una preda offerta in cima alla Roccia Alta, la montagna sacra del clan
 const fuocoPronto=()=>!(stG().fuocoIl&&G.t-stG().fuocoIl<MOON);
 const inPace=()=>!G.raid&&!G.cats.some(c=>c.stato==='assalto')&&!G.funerale&&!G.riposoFinale;
 function sacrificio(){ const p=G.p, R=L.roccia, S=stG(); if(!fuocoPronto()){ log('🔥 '+T.presto,'#ffd27a'); return; }
  S.fuocoIl=G.t; S.fuochi=(S.fuochi||0)+1; segnaEvento(); p.preda=(p.carico&&p.carico.length)?p.carico.shift():null; p.guida=null; p.caccia=null; p.vx=p.vy=0;
  p.x=R.x-17; p.y=R.y+12; p.elev=CIMA; p.sopra=true; G.fuocoSacro={da:G.t,fino:G.t+70};
  const clan=G.cats.filter(c=>c.clan==='felce'&&c!==p&&!c.ferito), cx=R.x;
  const metti=(L2,r0)=>L2.forEach((c,i)=>{ const n=L2.length, a=Math.PI*(0.1+0.8*(n>1?i/(n-1):0.5)); c.x=R.x+Math.cos(a)*(R.r+r0); c.y=R.y+Math.sin(a)*(R.r+r0)*0.85; c.vx=c.vy=0; c.elev=0; c.sopra=false; c.stato='campo'; c.attesa=60; c.tx=c.x; c.ty=c.y; c.flip=c.x<cx?1:-1; c.dir=-Math.PI/2; setPosa(c,'siede',40); });
  metti(clan.slice(0,7),44); metti(clan.slice(7,16),68); metti(clan.slice(16),92);
  if(window.R3D){ R3D.cam3.yaw=Math.PI; R3D.cam3.pitch=0.62; R3D.cam3.dist=7.5; R3D.cam3.rotella=performance.now()+60000; }
  const canta=()=>{ if(!G) return; for(const c of clan) if(G.cats.includes(c)) setPosa(c,'canta',14); setPosa(p,'canta',14); if(window.suonoMiaoGrande) suonoMiaoGrande();
   clan.forEach((c,i)=>setTimeout(()=>{ if(G&&G.cats.includes(c)) testo(c.x,c.y-44*scala(c),pick(['♪','♫','✦']),'#ffe9b0',13,-18,2.2); },i*240)); };
  if(window.REG) REG.evento('sacrificio','fuoco sulla Roccia Alta'); didascalia.classList.add('alto');
  recita([{t:T.sc1,dur:6},{t:T.sc2,dur:9},{t:T.sc3,dur:7}],()=>{ didascalia.classList.remove('alto'); for(const c of clan){ c.attesa=0; } const prima=p.spirito??60; p.spirito=Math.min(100,prima+SPIRITO_FUOCO); const n=Math.round(p.spirito-prima);
   flo(p.x,p.y-34,`+${n} ✨`,'#d9b8ff'); log('🔥 '+T.scFine(n),'#ffd9a0'); modale(T.scTit,T.scFine(n)+stSapere(T.scBox),[{t:'🔥'}]); });
  setTimeout(canta,6200); }
 window.ERBE_PROVA.sacrificio=sacrificio;
 if(typeof solennita==='function'){ const o=solennita; solennita=function(){ const r=o.apply(this,arguments); if(G&&G.fuocoSacro&&recitaAtt) solenne.classList.add('si'); return r; }; }

 if(typeof contesto==='function'){ const o=contesto; contesto=function(){ const r=o.apply(this,arguments), p=G.p; if(!r||G.dentro) return r;
  if(r.t===RACC){ const h=erbaVicina(); if(h>=0){ const s=ERBE[h].specie||0; r.t=T.cogli(viste()[s]?PIANTE[s].e+' '+nomeP(s):T.ignota); } return r; }
  if(r.f===mangiaMucchio&&eGuarP(p)&&!p.preda&&G.cibo>=2&&fuocoPronto()&&inPace())
   return {t:T.mucHint,f:()=>modale(T.mucTit,T.mucTesto(G.cibo),[{t:T.mucMangia,f:mangiaMucchio},{t:T.mucPrendi,f:()=>{ G.cibo--; p.preda='topo'; log(T.mucPresa,'#ffd9a0'); if(typeof mostraToast==='function') mostraToast(T.mucPresa,'#ffd9a0'); }},{t:T.nonOra}])};
  return r; }; }
 if(typeof azioneSpazio==='function'){ const o=azioneSpazio; azioneSpazio=function(){ const p=G.p;
  if(!G.dentro&&p.preda&&eGuarP(p)&&(p.elev||0)>0&&dist(p,L.roccia)<70&&inPace()&&!recitaAtt) return {t:T.offri,f:sacrificio};
  return o.apply(this,arguments); }; }

 // ogni mezzo secondo: le schede in attesa, la sacca in ordine, il riquadro della pozione, le partite salvate prima delle piante nuove
 setInterval(()=>{ if(typeof G==='undefined'||!G||!G.p){ pozBox.style.display='none'; return; } const p=G.p;
  if(Array.isArray(G.erbe)) while(G.erbe.length<ERBE.length) G.erbe.push(0);
  if(G.fuocoSacro&&G.t>G.fuocoSacro.fino) G.fuocoSacro=null;
  sacca(); const mostra=eGuarP(p)&&p.erbe>=3&&!G.raid; pozBox.style.display=mostra?'':'none'; if(mostra){ const h=T.pozBox(p.erbe); if(pozBox.dataset.h!==h){ pozBox.dataset.h=h; pozBox.innerHTML=h; } }
  if(G.dentro==='tanaGuaritore'&&!stG().armadioVisto&&!paused&&!scena){ stG().armadioVisto=true; log(T.nuovoArm,'#c8f0a8'); if(typeof mostraToast==='function') mostraToast(T.nuovoArm,'#c8f0a8'); }
  if(coda.length&&!paused&&!scena&&!fx&&!recitaAtt&&!G.raid&&document.getElementById('modal').style.display!=='flex') scheda(coda.shift()); },500);
});
