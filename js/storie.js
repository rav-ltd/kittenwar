// Storie e situazioni rare dei Gattini guerrieri 3D (rilettura globale del 12 novembre 2026, RILETTURA-2026-11-12.md, sezione 4).
// Richiesta
// Script classico, caricato dopo leggende.js: usa recita, modale, box, spirito, tensione, parla, log e gli altri nomi globali del gioco.
// Regola dei contenuti: ogni riquadro cita un'opera vera, con autore e anno, e dice soltanto ciò che l'opera sostiene.
// Stato: G.st (vale per tutta la partita, sopravvive alle rinascite) e G.p.st (vale per una vita). Una storia alla volta: vedi storiaLibera().
// Per provare una storia dalla console: STORIE.nome() (per esempio STORIE.dente()).

const STORIE_T={
it:{
 cuore:{madre:'Ogni gattino ha un oggetto del cuore. Scegli il tuo: ti terrà compagnia nelle notti lunghe.',tit:'🧸 L’oggetto del cuore',testo:'Nella nursery ci sono tre piccoli tesori. Quale prendi con te?',
  mio:n=>`Questo è mio. Si chiama… ${n}.`,lascia:(n,o)=>`🧸 Il giorno della cerimonia lasci ${o} nella nursery: ora appartiene ai piccoli che verranno.`,
  ritrovoTit:'🧸 Un oggetto nella nursery',ritrovo:(o,chi)=>`Tra il muschio della nursery trovi ${o}. Non l’hai mai vista, eppure ti sembra di conoscerla da sempre. La madre dice che apparteneva a ${chi}, tanto tempo fa.`,
  box:['L’oggetto del cuore','Il pediatra e psicoanalista Donald Winnicott chiamò «oggetto transizionale» la copertina o il pupazzo da cui un bambino piccolo non si separa: è la sua prima cosa «non-me», a metà tra sé e il mondo, e lo aiuta a stare solo («Oggetti transizionali e fenomeni transizionali», 1953; poi in <i>Gioco e realtà</i>, 1971).']},
 mer:{farfalla:'Una cosa che vola… e ha i colori dei fiori! Che cos’è?',riflesso:'Nell’acqua c’è un gattino che mi guarda. Se gli do una zampata… si rompe, e poi ritorna!',stella:'Lassù si è accesa una lucina. E un’altra! Chi le accende?',lucciola:'Una stella è scesa nell’erba e cammina.',ombra:'C’è una macchia scura che mi segue dappertutto. Corre quando corro io.',
  tit:'✨ Il quaderno delle meraviglie',tutte:'Hai visto cinque cose per la prima volta, e ogni volta ti sei fermat{o} a bocca aperta. Te le ricorderai per tutta la vita.',
  box:['La meraviglia','Nel <i>Teeteto</i> (155d) Platone fa dire a Socrate che provare meraviglia è proprio del filosofo, e che la filosofia non ha altro inizio. Aristotele lo ripete nella <i>Metafisica</i> (I, 2): gli uomini hanno cominciato a filosofare, ora come in origine, a causa della meraviglia.']},
 madre:{uno:'Guarda che cosa ti ho portato: un topo. Annusalo bene, poi mangia. Così saprai che odore cercare.',due:'Questo è vivo. Non te lo do: te lo lascio andare. Vediamo che cosa sai fare.',narr:'Il topo scappa tra le tue zampe. Inciampi, rotoli, lo perdi… e al terzo balzo è tuo.',
  tit:'🐭 La tua prima preda',testo:'Tua madre fa le fusa: «La prossima la troverai da sol{o}.» La preda conta già per il tuo apprendistato.',
  box:['Come insegna una gatta','Le gatte portano ai piccoli prima prede morte, poi prede vive, lasciandole andare davanti a loro perché si esercitino: lo descrivono l’etologo Paul Leyhausen (<i>Il comportamento dei gatti</i>, 1956) e gli esperimenti di T. M. Caro (1980), che mostrano come i gattini cresciuti così diventino cacciatori più abili.']},
 dente:{anz:'Ti dondola un dente? È il dente da latte: sta per cadere. Vieni, ti dico che cosa facevano i nostri vecchi.',tit:'🦷 Il dente da latte',testo:'Il dentino è caduto. L’anziano dice: «Da sempre lo si lascia davanti alla tana di un topo, perché i denti nuovi crescano forti come i suoi. Ma il topo non si tocca: è un patto.»',
  topo:'🐭 Lasciarlo alla tana del topo',tenere:'Tenerlo per ricordo',fattoTopo:'🦷 Posi il dentino davanti alla tana e ti allontani senza guardare. Un musetto spunta, annusa, e sparisce con il tuo dente.',fattoTenere:'🦷 Nascondi il dentino sotto il muschio della nursery. È tuo.',
  box:['Il dente e il topo','James Frazer racconta nel <i>Ramo d’oro</i> (1890, capitolo sulla magia simpatica) che in molte parti del mondo il dente caduto si mette dove un topo possa trovarlo, nella speranza che i denti nuovi diventino forti come quelli dei roditori: ciò che è stato parte del corpo, pensavano, gli resta legato. È la «magia contagiosa».']},
 giochi:{gara:'Facciamo a chi arriva prima! Pronti… via!',sasso:'Vieni qui, piccol{o}. Ho un sassolino in una zampa. In quale?',imita:'Guarda come faccio io, e fai uguale. Schiena bassa… e balzo!',giro:'Giriamo, giriamo, giriamo finché il bosco gira con noi!',
  sx:'🐾 La zampa sinistra',dx:'🐾 La zampa destra',vinto:'Hai indovinato! Il sassolino forato è tuo: dicono che porti fortuna.',perso:'Era nell’altra! L’anziano ride sotto i baffi: «La fortuna è una gatta capricciosa.»',
  tit:'🎲 I quattro giochi',tutti:'Hai gareggiato, hai tentato la sorte, hai fatto finta di essere un guerriero e hai girato fino al capogiro. Sono tutti i giochi che esistono.',
  box:['Quattro modi di giocare','Il sociologo Roger Caillois (<i>I giochi e gli uomini</i>, 1958) distingue quattro specie di gioco: la gara (<i>agon</i>), la sorte (<i>alea</i>), la finzione (<i>mimicry</i>) e la vertigine (<i>ilinx</i>). Ogni gioco, dice, ne mescola una o due.']},
 voce:{rombo:'Nel buio, fuori dalla nursery, si alza un rombo profondo: vuuum… vuuum… vuuum…',madre:'Zitti, piccoli. È la voce del Gatto delle Stelle. Chi è ancora gattino non può guardare.',
  svela:n=>`${n}, ricordi il rombo nella notte? Guarda: è una canna legata a un filo d’erba. La faccio girare… ecco la voce. Ora lo sai. I piccoli non devono saperlo: prometti?`,
  tit:'🤫 Il segreto del rombo',testo:'Fai girare la canna anche tu. Il rombo ti passa nelle zampe. Non era la voce di uno spirito… eppure adesso ti sembra ancora più grande.',
  box:['Il segreto degli iniziati','Mircea Eliade (<i>La nascita mistica</i>, 1958) descrive iniziazioni australiane in cui donne e bambini credono che il suono del rombo, una tavoletta fatta roteare, sia la voce di un essere soprannaturale; ai novizi, durante il rito, viene mostrato lo strumento, con il divieto di parlarne. Diventare adulti vuol dire anche custodire un segreto.']},
 re:{capo:'Oggi è il giorno alla rovescia! Per un giorno comanda il più piccolo del clan. Sali sulla Roccia, e ordina.',tit:'👑 Re per un giorno',testo:'Tutto il clan ti guarda dal basso. Che cosa ordini?',
  ordini:['Il capo si rotoli per terra!','Oggi i piccoli mangiano per primi!','Tutti i guerrieri facciano le fusa!'],piccolo:n=>`${n} sale sulla Roccia, gonfia il petto e ordina:`,risata:'Ah ah ah!',obbedisco:'Agli ordini, capo piccolissimo!',
  fine:'Il clan ride fino a sera. Domani ognuno tornerà al suo posto, e obbedire sarà più leggero.',
  box:['Il mondo alla rovescia','In molte società esistono giorni in cui i ruoli si invertono: i piccoli comandano, i grandi obbediscono. Max Gluckman li chiamò «riti di ribellione» (<i>Rituals of Rebellion in South-East Africa</i>, 1954); per Victor Turner (<i>Il processo rituale</i>, 1969) questi rovesciamenti, alla fine, rafforzano l’ordine di tutti i giorni.']},
 giro:{c:'Tutta questa fatica per due topolini così magri? Li ha mangiati il vento, prima di te?',tit:'😼 La preda presa in giro',testo:'I compagni ridacchiano intorno al mucchio. Tu hai portato una gran caccia, e loro la prendono in giro.',ridi:'😹 Ridere con loro',offesa:'😾 Offendersi',
  riso:'Ridi anche tu: «La prossima volta porto solo le ossa!» Qualcuno ti dà una testata affettuosa.',muso:'Te ne vai con la coda dritta. Nessuno ti corre dietro: il clan non ama chi si vanta.',
  box:['Sminuire la preda','L’antropologo Richard B. Lee regalò un bue enorme ai !Kung del Kalahari, e loro lo presero in giro per giorni: «un sacco d’ossa». Poi gli spiegarono: quando un giovane uccide molta carne, si crede un capo; perciò la sua preda si chiama sempre misera, per raffreddargli il cuore e renderlo gentile («Eating Christmas in the Kalahari», 1969).']},
 kula:{narr:n=>`${n}, del Clan della Nebbia, esce dagli alberi con qualcosa tra i denti.`,dono:'Questa conchiglia non è mia e non sarà tua. Viene da lontano e deve andare lontano: portala a un gatto delle Pietre. Chi la tiene per sé, la uccide.',
  tit:'🐚 La conchiglia che viaggia',testo:'Hai una conchiglia che non puoi tenere. Trova un gatto del Clan delle Pietre, nel bosco, e passagliela.',
  grazie:'Una conchiglia che viaggia! Da noi si dice che porti il nome di tutti quelli che l’hanno toccata. Prendi quest’osso inciso: va nel verso opposto. Portalo dove vuoi.',
  fineTit:'🐚 Il dono che gira',fine:'La conchiglia continua il suo viaggio, e tu hai un amico in più oltre il fiume. Per un po’ i confini saranno più tranquilli.',
  box:['Il cerchio dei doni','Bronisław Malinowski (<i>Argonauti del Pacifico occidentale</i>, 1922) descrisse il <i>kula</i> delle isole Trobriand: collane di conchiglie rosse girano tra le isole in un verso, bracciali bianchi nel verso opposto; nessuno li tiene a lungo, e ogni scambio lega due compagni per la vita. Per Marcel Mauss (<i>Saggio sul dono</i>, 1925) donare, ricevere e ricambiare sono tre obblighi che tengono insieme le società.']},
 oro:{tit:'🤝 In mezzo alla battaglia',testo:n=>`Nella mischia ti sei trovat{o} muso a muso con ${n}, a cui un giorno avevi toccato il naso. Vi siete fermati. Invece di colpirvi, vi siete scambiati un dono: tu una piuma, e una piuma più bella in cambio. Poi ognuno è tornato dai suoi.`,
  box:['Oro per bronzo','Nel sesto libro dell’<i>Iliade</i> (versi 119-236) Glauco e Diomede stanno per battersi quando scoprono che i loro nonni erano stati ospiti l’uno dell’altro. Scendono dal carro, si stringono la mano e si scambiano le armi: Glauco dà armi d’oro in cambio di armi di bronzo. L’ospitalità tra famiglie valeva più della guerra.']},
 erba:{tit:'🌿 Una pianta dall’odore strano',testo:'Tra le felci cresce una pianta dalle foglie pelose. Ha un odore che ti fa girare la testa.',rotola:'🌀 Rotolarcisi sopra',lascia:'Lasciarla stare',
  si:'Ti strofini, rotoli, scalci, fai le fusa da sol{o}. Dura poco, poi ti rialzi con il pelo profumato e l’aria di chi non ha fatto niente.',no:'Annusi, riannusi… niente. È una pianta come le altre. Eppure hai visto compagni impazzire per molto meno. Non tutti i gatti la sentono: si nasce così.',
  box:['L’erba gatta','Strofinarsi sull’erba gatta e sul matatabi non è soltanto un piacere: le foglie lasciano sul pelo una sostanza, il nepetalattolo, che tiene lontane le zanzare (Reiko Uenoyama e colleghi, <i>Science Advances</i>, 2021). La sensibilità a queste piante è ereditaria, e una parte dei gatti non ne ha.']},
 lepre:{tit:'🐇 La lepre bianca',testo:'Tra gli alberi, ferma, c’è una lepre tutta bianca. Ti guarda. Poi fa tre salti e si volta, come se ti aspettasse.',segui:'👣 Seguirla senza attaccare',caccia:'🍖 Cacciarla',
  via:'La lepre va avanti, tu dietro. Ogni volta che la perdi, la ritrovi ferma ad aspettarti.',cacciata:'È un pasto da re. Ma al campo l’anziano scuote la testa: «Certe prede non si mangiano: si seguono.»',
  arrTit:'🐇 La radura',arrivo:'La lepre è sparita. Al suo posto c’è una radura che non avevi mai visto: erbe rare, e nella terra qualcosa che brilla.',
  box:['L’animale bianco che guida','Nei racconti medievali chi insegue un animale bianco trova altro da ciò che cercava: nell’<i>Erec e Enide</i> di Chrétien de Troyes (circa 1170) tutto comincia con la caccia al cervo bianco; nelle <i>Gesta Hunnorum et Hungarorum</i> di Simone di Kéza (circa 1282) i fratelli Hunor e Magor seguono una cerva che li porta in una terra nuova, dove fondano i loro popoli.']},
 tregua:{capo:'Non piove da troppe lune. Lo stagno è fango, la pozza è secca. Da oggi vale la tregua dell’acqua: al Lago d’Argento beve chiunque, e nessuno alza una zampa.',tit:'💧 La tregua dell’acqua',testo:'Per qualche luna i tre clan bevono fianco a fianco al Lago d’Argento. Nessuno soffia. Chi rompesse la tregua sarebbe scacciato da tutti.',
  box:['La tregua','Nel racconto «Come venne la paura» (Rudyard Kipling, <i>Il secondo libro della giungla</i>, 1895), quando la siccità scopre la Roccia della Pace nessun animale può cacciare presso l’acqua. È un’invenzione, ma le tregue sacre sono esistite: Tucidide (V, 49-50) racconta che nel 420 a.C. gli Spartani furono multati ed esclusi dai giochi di Olimpia per aver attaccato durante la tregua olimpica.']},
 eclissi:{narr:'A metà del giorno la luce si spegne. Gli uccelli tacciono. Il sole ha un morso nero.',capo:'Fermi tutti. Quando il cielo chiude l’occhio, nessun gatto alza un artiglio. Né noi, né loro.',tit:'🌑 Il giorno diventato notte',testo:'Quando la luce ritorna, sulle due rive del fiume i guerrieri dei tre clan si guardano, e ognuno torna al suo campo senza una parola. Per un po’ nessuno parlerà di guerra.',
  box:['L’eclissi che fermò una battaglia','Erodoto (<i>Storie</i>, I, 74) racconta che Lidi e Medi combattevano da cinque anni quando, in piena battaglia, il giorno si fece notte. Smisero di combattere e si affrettarono a fare la pace. Secondo Erodoto, Talete di Mileto aveva predetto quell’eclissi: gli astronomi la collocano nel 585 a.C.']},
 stagioni:{nomi:['🌱 È tornata la primavera: il bosco si riempie di prede.','☀️ È estate: le giornate sono lunghe e il clan si sparpaglia per il bosco.','🍂 È autunno: le foglie cadono, e si fanno provviste.','❄️ È inverno: il clan si stringe nelle tane, e ogni rito scalda il doppio.'],
  tit:'❄️ L’inverno che raduna',testo:'Con la neve il clan dorme vicino, racconta di più e canta di più. In inverno tutto ciò che alza lo spirito del clan vale il doppio.',
  box:['Due stagioni, due vite','Marcel Mauss e Henri Beuchat («Saggio sulle variazioni stagionali delle società eschimesi», 1904-1905) osservarono che gli Inuit vivevano d’estate dispersi in piccole tende, e d’inverno riuniti in grandi case comuni, dove si concentravano le feste e i riti. La vita di un gruppo, conclusero, ha un ritmo: momenti di dispersione e momenti di raccolta.']},
 capro:{voce:n=>`Abbiamo perso per colpa di ${n}. Ha esitato. Porta sfortuna, lo dicono tutti.`,tit:'🐐 La colpa',testo:n=>`Il clan è stanco e amareggiato. Sempre più gatti guardano storto ${n}, che non ha fatto niente di diverso dagli altri. Aspettano di sentire che cosa dici tu.`,
  difendi:'🛡️ Difenderl{x}',taci:'Tacere',unisci:'Dare la colpa anche tu',
  difeso:n=>`Ti metti al fianco di ${n}: «Abbiamo perso tutti insieme.» Le voci si spengono, una alla volta. ${n} non lo dimenticherà.`,
  cacciato:n=>`${n} lascia il campo all’alba, senza che nessuno l{x} tocchi. Per una sera il clan si sente unito e leggero.`,dopo:n=>`🍂 Il mucchio delle prede è più basso da quando ${n} se n’è andat{x}. Nessuno ne parla, ma il clan non è più unito: è soltanto più piccolo.`,
  box:['Il capro espiatorio','Per René Girard (<i>La violenza e il sacro</i>, 1972; <i>Il capro espiatorio</i>, 1982) un gruppo in crisi ritrova l’unità scaricando la colpa su uno solo, scelto quasi a caso, e scacciandolo. Funziona perché tutti credono alla sua colpa; ma la crisi non era colpa sua, e ritorna.']},
 pittore:{app:n=>`Io non voglio diventare guerriero. E nemmeno guaritore. Voglio dipingere le pareti delle tane, come gli antichi.`,capo:'Non si è mai visto. Un gatto del clan caccia, combatte o cura.',tit:'🎨 Il gatto che voleva dipingere',testo:n=>`Il clan discute. ${n} aspetta, con le zampe sporche d’ocra. La tua voce conta.`,
  si:'🎨 «Il clan ha bisogno anche di lui»',no:'«Un gatto ha un rango»',
  resta:n=>`Il capo sospira: «E sia.» Da oggi ${n} dipinge. Nelle tane, sopra gli altari, compariranno pitture nuove.`,parte:n=>`${n} raccoglie la sua ocra e attraversa il fiume, senza rancore.`,dopo:n=>`🎨 Una pattuglia racconta che tra le Pietre c’è un gatto venuto da lontano che dipinge le loro tane, e che là è molto onorato. Somiglia a ${n}.`,
  box:['Fuori posto qui, onorati altrove','Ruth Benedict (<i>Modelli di cultura</i>, 1934) scrive che ogni società sceglie soltanto alcune delle possibilità umane e scoraggia le altre: chi ha un temperamento che la sua cultura non sa usare vive male, mentre in un’altra sarebbe stato stimato.']},
 araldo:{capo:n=>`${n}, tu non combatti più. Ma un vecchio con un ramo verde in bocca entra dove un guerriero non entra. Andresti dai clan vicini, a nome nostro?`,tit:'🌿 Il vecchio araldo',testo:'Con un ramo verde tra i denti attraverserai i campi degli altri clan senza che nessuno ti tocchi. Il viaggio si compie da solo: non devi raccogliere nulla. Tutto ciò che il clan aveva rubato tornerà sugli altari degli altri, e chiederai una tregua.',
  vai:'🌿 Prendere il ramo verde',resta:'Restare al campo',
  v1:'Attraversi il fiume a passo lento, il ramo verde tra i denti. Le pattuglie si fanno da parte.',v2:r=>r?`Sugli altari degli altri clan posi ciò che era stato rubato: ${r}.`:'Davanti agli altari degli altri clan chini la testa, senza toccare nulla.',v3:'I capi ti ascoltano. Quando riparti, hai una promessa.',
  fatto:(r,n)=>`${r?'<b>Restituito:</b> '+r+'.<br><br>':''}Hai ottenuto una <b>tregua di ${n} lune</b>. Finché dura, nessuno attaccherà te, e nessuno assalirà il campo.`,fineTregua:'🌿 La tregua è finita: i confini tornano inquieti.',
  box:['Chi porta la parola non si tocca','Erodoto (<i>Storie</i>, VII, 133-137) racconta che gli Spartani uccisero gli araldi di Dario, e che poi credettero di essere colpiti per questo dall’ira di Taltibio, l’araldo di Agamennone: l’araldo era inviolabile. Émile Benveniste (<i>Il vocabolario delle istituzioni indoeuropee</i>, 1969) mostra che il latino <i>hostis</i>, «nemico», indicava in origine lo straniero con cui si è in rapporto di scambio alla pari.']},
 solitario:{narr:n=>`Al bordo del campo c’è un gatto magro, senza odore di clan. Non entra: aspetta.`,lui:'Ho camminato per molte lune da sol{o}. So cacciare e so tacere. Chiedo un posto tra voi.',capo:n=>`Il clan decide insieme. ${n}, tu che cosa dici?`,
  tit:'🐾 Il gatto venuto da fuori',testo:n=>`${n} aspetta a testa bassa, senza implorare. Alcuni compagni annusano l’aria con sospetto, altri con curiosità.`,si:'🐾 «C’è posto anche per te»',no:'«Qui si nasce, non si arriva»',
  resta:n=>`🐾 ${n} entra nel campo a passi lenti. Qualcuno gli fa posto accanto al mucchio delle prede. Ti cerca con gli occhi: non dimenticherà chi ha parlato per primo.`,parte:n=>`🐾 ${n} china la testa e torna nel bosco. Nessuno saprà mai che cosa avrebbe portato.`,
  box:['Lo straniero che resta','Il sociologo Georg Simmel (<i>Excursus sullo straniero</i>, 1908) descrive lo straniero non come il viandante «che oggi viene e domani va», ma come colui «che oggi viene e domani rimane»: sta nel gruppo senza esserci nato, e proprio per questo vede cose che gli altri non vedono più.']},
 capo:{sogno:n=>`${n}, il clan ti guarda. Chi vince molte battaglie o guarisce molti gatti, un giorno potrà guidarlo. Ma un capo non comanda: ascolta, dona e mette pace.`,
  chiama:n=>`Le mie lune sono tante, e il clan ha bisogno di una guida più giovane. ${n}, ti ho vist{o} proteggere, donare e ascoltare. Vuoi prendere il mio posto?`,
  chiamaG:n=>`${n}, il clan ti ascolta più di quanto ascolti me. Ti ho vist{o} proteggere, donare e ascoltare: una guida si riconosce così. Vuoi prendere il mio posto?`,
  tit:'⭐ La guida del clan',testo:v=>`${v} aspetta la tua risposta. Tutto il clan trattiene il fiato.`,si:'⭐ Accettare',no:'Non ancora',
  nome:n=>`Da questo giorno il clan ti chiamerà ${n}. Che gli antenati stellati ti prestino la loro pazienza.`,giuro:'Guiderò il clan con le zampe leggere. Parlerò per ultim{o}, e mangerò per ultim{o}.',
  fineTit:'⭐ Sei capo del clan',fine:(n,v,vice)=>`Ora sei <b>${n}</b>. ${v} si siede tra gli anziani, content{x}. ${vice?vice+' sarà la tua voce quando sarai lontano.':''}<br><br>Puoi salire sulla Roccia Alta, e il clan si raduna intorno a te.`,
  box:['Un capo senza potere','L’antropologo Pierre Clastres (<i>La società contro lo Stato</i>, 1974) osservò che in molte società dell’Amazzonia il capo non può dare ordini a nessuno. Ha tre doveri: mettere pace con la parola, essere generoso fino a restare il più povero, e saper parlare bene. Il gruppo lo ascolta finché lo serve; se prova a comandare, lo abbandona.']},
 narra:{kit:'Raccontaci di quando eri giovane! Una storia vera!',tit:'📜 La tua storia',come:'Come la racconti?',fedele:'Così com’è andata',abbellita:'✨ Un po’ più grande',
  caccia:n=>`«Quando ero apprendista portai al mucchio ${n} prede. Il clan mangiò, e io imparai che si caccia per gli altri.»`,
  battaglia:n=>`«Ho combattuto in ${n} battaglie oltre il fiume. Ho avuto paura ogni volta, e ogni volta sono tornat{o}.»`,
  infanzia:n=>`«Da piccol{o} vidi ${n} meraviglie, e la prima fu la più grande: non sapevo ancora che il mondo continuasse oltre la siepe.»`,
  fattoF:'I piccoli ascoltano in silenzio. Qualcuno ripete le tue parole a bassa voce, per non dimenticarle.',fattoA:'I piccoli hanno gli occhi enormi. Domani la racconteranno a loro volta, e sarà ancora più grande.',
  box:['Le storie cambiano passando di bocca in bocca','Lo psicologo Frederic Bartlett (<i>Remembering</i>, 1932) fece ripetere una stessa storia da una persona all’altra: a ogni passaggio diventava più breve, più semplice, più vicina a ciò che chi raccontava già conosceva. Albert Lord (<i>Il cantore di storie</i>, 1960) mostrò che i cantori epici non ripetono mai un poema parola per parola: lo ricompongono ogni volta.']},
 eredita:{intro:n=>`Siediti, piccol{o}. Questa è la storia di ${n}, che visse qui prima che tu nascessi.`,pensiero:'Questa storia… mi sembra di averla già sentita. O vissuta.',
  caccia:n=>`«${n} prede portò al mucchio in una sola stagione, dicono. Il clan non ebbe mai fame.»`,battaglia:n=>`«In ${n} battaglie combatté oltre il fiume, e non conobbe mai la paura.»`,infanzia:n=>`«Da cucciolo vide ${n} meraviglie, e le raccontò a chiunque volesse ascoltare.»`},
},
en:{
 cuore:{madre:'Every kit has a heart object. Choose yours: it will keep you company through the long nights.',tit:'🧸 The heart object',testo:'There are three little treasures in the nursery. Which one do you take?',
  mio:n=>`This is mine. Its name is… ${n}.`,lascia:(n,o)=>`🧸 On the day of your ceremony you leave ${o} in the nursery: now it belongs to the kits to come.`,
  ritrovoTit:'🧸 Something in the nursery',ritrovo:(o,chi)=>`In the nursery moss you find ${o}. You have never seen it before, yet it feels as if you had always known it. Your mother says it belonged to ${chi}, long ago.`,
  box:['The heart object','The paediatrician and psychoanalyst Donald Winnicott called «transitional object» the blanket or soft toy a small child will not part with: it is the first «not-me» possession, halfway between the self and the world, and it helps the child to be alone («Transitional Objects and Transitional Phenomena», 1953; later in <i>Playing and Reality</i>, 1971).']},
 mer:{farfalla:'Something that flies… and has the colours of flowers! What is it?',riflesso:'There is a kit in the water looking at me. If I bat it… it breaks, and then it comes back!',stella:'A little light has come on up there. And another! Who lights them?',lucciola:'A star has come down into the grass, and it is walking.',ombra:'A dark patch follows me everywhere. It runs when I run.',
  tit:'✨ The book of wonders',tutte:'You have seen five things for the first time, and each time you stopped with your mouth open. You will remember them all your life.',
  box:['Wonder','In the <i>Theaetetus</i> (155d) Plato has Socrates say that the feeling of wonder belongs to the philosopher, and that philosophy has no other beginning. Aristotle repeats it in the <i>Metaphysics</i> (I, 2): it is owing to their wonder that people both now begin and at first began to philosophise.']},
 madre:{uno:'Look what I brought you: a mouse. Sniff it well, then eat. That way you will know which scent to follow.',due:'This one is alive. I am not giving it to you: I am letting it go. Let us see what you can do.',narr:'The mouse slips between your paws. You trip, you roll, you lose it… and on the third pounce it is yours.',
  tit:'🐭 Your first prey',testo:'Your mother purrs: “The next one you will find on your own.” This prey already counts towards your apprenticeship.',
  box:['How a mother cat teaches','Mother cats bring their kittens dead prey first, then live prey, releasing it in front of them so they can practise: this is described by the ethologist Paul Leyhausen (<i>Cat Behaviour</i>, 1956) and by the experiments of T. M. Caro (1980), which show that kittens raised this way become more skilful hunters.']},
 dente:{anz:'Is a tooth wobbling? It is your milk tooth: it is about to fall out. Come, I will tell you what our elders used to do.',tit:'🦷 The milk tooth',testo:'The little tooth has fallen out. The elder says: “It has always been left in front of a mouse’s hole, so that the new teeth grow as strong as the mouse’s. But the mouse is not to be touched: that is the pact.”',
  topo:'🐭 Leave it at the mouse hole',tenere:'Keep it as a keepsake',fattoTopo:'🦷 You lay the tooth in front of the hole and walk away without looking. A little snout pokes out, sniffs, and vanishes with your tooth.',fattoTenere:'🦷 You hide the tooth under the nursery moss. It is yours.',
  box:['The tooth and the mouse','James Frazer tells in <i>The Golden Bough</i> (1890, chapter on sympathetic magic) that in many parts of the world a shed tooth is put where a mouse or rat may find it, in the hope that the new teeth will be as strong as a rodent’s: what was once part of the body, people thought, stays linked to it. This is «contagious magic».']},
 giochi:{gara:'Race you! Ready… go!',sasso:'Come here, little one. I have a pebble in one paw. Which one?',imita:'Watch how I do it, and do the same. Back low… and pounce!',giro:'Spin, spin, spin until the forest spins with us!',
  sx:'🐾 The left paw',dx:'🐾 The right paw',vinto:'You guessed! The holed pebble is yours: they say it brings luck.',perso:'It was in the other one! The elder chuckles: “Luck is a fickle cat.”',
  tit:'🎲 The four games',tutti:'You have raced, tried your luck, pretended to be a warrior and spun until you were dizzy. Those are all the games there are.',
  box:['Four ways to play','The sociologist Roger Caillois (<i>Man, Play and Games</i>, 1958) distinguishes four kinds of play: competition (<i>agon</i>), chance (<i>alea</i>), make-believe (<i>mimicry</i>) and vertigo (<i>ilinx</i>). Every game, he says, mixes one or two of them.']},
 voce:{rombo:'In the dark, outside the nursery, a deep roar rises: vooom… vooom… vooom…',madre:'Hush, little ones. It is the voice of the Star Cat. Those who are still kits may not look.',
  svela:n=>`${n}, do you remember the roar in the night? Look: it is a reed tied to a blade of grass. I whirl it… and there is the voice. Now you know. The kits must not know: do you promise?`,
  tit:'🤫 The secret of the roar',testo:'You whirl the reed too. The roar runs through your paws. It was not the voice of a spirit… and yet now it seems even greater.',
  box:['The secret of the initiated','Mircea Eliade (<i>Birth and Rebirth</i>, 1958) describes Australian initiations in which women and children believe that the sound of the bull-roarer, a whirled slat, is the voice of a supernatural being; during the rite the novices are shown the instrument and forbidden to speak of it. Growing up also means keeping a secret.']},
 re:{capo:'Today is upside-down day! For one day the smallest of the clan gives the orders. Climb the Rock, and command.',tit:'👑 King for a day',testo:'The whole clan looks up at you. What do you order?',
  ordini:['Let the leader roll on the ground!','Today the kits eat first!','Let all the warriors purr!'],piccolo:n=>`${n} climbs the Rock, puffs out a small chest and orders:`,risata:'Ha ha ha!',obbedisco:'At your command, tiniest leader!',
  fine:'The clan laughs until evening. Tomorrow everyone goes back to their place, and obeying will feel lighter.',
  box:['The world upside down','In many societies there are days when roles are reversed: the small command, the great obey. Max Gluckman called them «rituals of rebellion» (<i>Rituals of Rebellion in South-East Africa</i>, 1954); for Victor Turner (<i>The Ritual Process</i>, 1969) these reversals end up strengthening the everyday order.']},
 giro:{c:'All that effort for two mice this skinny? Did the wind eat them before you did?',tit:'😼 Mocking the catch',testo:'Your clanmates snigger around the pile. You brought a fine catch, and they make fun of it.',ridi:'😹 Laugh with them',offesa:'😾 Take offence',
  riso:'You laugh too: “Next time I will bring only the bones!” Someone gives you an affectionate head-butt.',muso:'You walk off with your tail straight up. Nobody runs after you: the clan does not love a boaster.',
  box:['Belittling the catch','The anthropologist Richard B. Lee gave a huge ox to the !Kung of the Kalahari, and they mocked it for days: «a bag of bones». Then they explained: when a young man kills much meat, he comes to think of himself as a chief; so they always speak of his meat as worthless, to cool his heart and make him gentle («Eating Christmas in the Kalahari», 1969).']},
 kula:{narr:n=>`${n}, of the Mist Clan, steps out of the trees with something between the teeth.`,dono:'This shell is not mine and will not be yours. It comes from far away and must go far away: take it to a cat of the Stones. Whoever keeps it, kills it.',
  tit:'🐚 The travelling shell',testo:'You are carrying a shell you may not keep. Find a cat of the Stone Clan, in the forest, and pass it on.',
  grazie:'A travelling shell! Among us they say it carries the name of everyone who has touched it. Take this carved bone: it travels the other way. Carry it where you will.',
  fineTit:'🐚 The gift that goes round',fine:'The shell goes on its journey, and you have one more friend across the river. For a while the borders will be quieter.',
  box:['The circle of gifts','Bronisław Malinowski (<i>Argonauts of the Western Pacific</i>, 1922) described the <i>kula</i> of the Trobriand Islands: necklaces of red shell travel between the islands in one direction, white armshells in the other; nobody keeps them long, and each exchange binds two partners for life. For Marcel Mauss (<i>The Gift</i>, 1925) giving, receiving and returning are three obligations that hold societies together.']},
 oro:{tit:'🤝 In the middle of the battle',testo:n=>`In the fray you came face to face with ${n}, whose nose you once touched. You both stopped. Instead of striking, you exchanged a gift: you gave a feather, and received a finer one. Then each went back to their own.`,
  box:['Gold for bronze','In Book VI of the <i>Iliad</i> (lines 119-236) Glaucus and Diomedes are about to fight when they discover that their grandfathers had been each other’s guests. They leap down, clasp hands and exchange armour: Glaucus gives golden armour for bronze. Hospitality between families counted for more than the war.']},
 erba:{tit:'🌿 A plant with a strange smell',testo:'Among the ferns grows a plant with fuzzy leaves. Its smell makes your head spin.',rotola:'🌀 Roll on it',lascia:'Leave it alone',
  si:'You rub, roll, kick and purr all by yourself. It does not last; then you get up with scented fur and the air of someone who did nothing at all.',no:'You sniff, and sniff again… nothing. It is a plant like any other. And yet you have seen clanmates go wild for much less. Not every cat feels it: you are born that way.',
  box:['Catnip','Rubbing on catnip and silver vine is not only a pleasure: the leaves leave on the fur a substance, nepetalactol, that keeps mosquitoes away (Reiko Uenoyama and colleagues, <i>Science Advances</i>, 2021). Sensitivity to these plants is inherited, and some cats have none.']},
 lepre:{tit:'🐇 The white hare',testo:'Among the trees, standing still, is a hare that is white all over. It looks at you. Then it takes three hops and turns round, as if waiting.',segui:'👣 Follow without attacking',caccia:'🍖 Hunt it',
  via:'The hare goes ahead, you behind. Each time you lose it, you find it standing there, waiting.',cacciata:'It is a meal fit for a king. But back in camp the elder shakes his head: “Some prey is not for eating: it is for following.”',
  arrTit:'🐇 The clearing',arrivo:'The hare is gone. In its place is a clearing you had never seen: rare herbs, and something shining in the earth.',
  box:['The white animal that leads the way','In medieval tales, whoever chases a white animal finds something other than what they sought: Chrétien de Troyes’s <i>Erec and Enide</i> (about 1170) begins with the hunt of the white stag; in Simon of Kéza’s <i>Gesta Hunnorum et Hungarorum</i> (about 1282) the brothers Hunor and Magor follow a hind that leads them to a new land, where they found their peoples.']},
 tregua:{capo:'It has not rained for too many moons. The pond is mud, the puddle is dry. From today the water truce holds: at Silver Lake anyone may drink, and nobody lifts a paw.',tit:'💧 The water truce',testo:'For a few moons the three clans drink side by side at Silver Lake. Nobody hisses. Whoever broke the truce would be driven away by all.',
  box:['The truce','In the story «How Fear Came» (Rudyard Kipling, <i>The Second Jungle Book</i>, 1895), when drought lays bare the Peace Rock no animal may hunt near the water. That is an invention, but sacred truces did exist: Thucydides (V, 49-50) tells that in 420 BC the Spartans were fined and barred from the games at Olympia for attacking during the Olympic truce.']},
 eclissi:{narr:'In the middle of the day the light goes out. The birds fall silent. The sun has a black bite in it.',capo:'Stand still, all of you. When the sky closes its eye, no cat lifts a claw. Neither we, nor they.',tit:'🌑 The day that turned to night',testo:'When the light returns, on both banks of the river the warriors of the three clans look at one another, and each goes back to camp without a word. For a while nobody will speak of war.',
  box:['The eclipse that stopped a battle','Herodotus (<i>Histories</i>, I, 74) tells that the Lydians and the Medes had been fighting for five years when, in the middle of a battle, day turned to night. They stopped fighting and hurried to make peace. According to Herodotus, Thales of Miletus had foretold that eclipse: astronomers date it to 585 BC.']},
 stagioni:{nomi:['🌱 Spring is back: the forest fills with prey.','☀️ It is summer: the days are long and the clan spreads through the forest.','🍂 It is autumn: the leaves fall, and stores are laid in.','❄️ It is winter: the clan huddles in the dens, and every rite warms twice as much.'],
  tit:'❄️ The winter that gathers',testo:'With the snow the clan sleeps close, tells more stories and sings more. In winter, everything that lifts the clan spirit counts double.',
  box:['Two seasons, two lives','Marcel Mauss and Henri Beuchat («Seasonal Variations of the Eskimo», 1904-1905) observed that the Inuit lived scattered in small tents in summer, and gathered in large communal houses in winter, where feasts and rites were concentrated. The life of a group, they concluded, has a rhythm: times of dispersal and times of gathering.']},
 capro:{voce:n=>`We lost because of ${n}. Too much hesitating. Bad luck, everyone says so.`,tit:'🐐 The blame',testo:n=>`The clan is tired and bitter. More and more cats look askance at ${n}, who did nothing different from the others. They are waiting to hear what you say.`,
  difendi:'🛡️ Stand up for {x}',taci:'Say nothing',unisci:'Lay the blame too',
  difeso:n=>`You stand beside ${n}: “We all lost together.” The voices die down, one by one. ${n} will not forget it.`,
  cacciato:n=>`${n} leaves camp at dawn, untouched by anyone. For one evening the clan feels united and light.`,dopo:n=>`🍂 The prey pile has been lower since ${n} left. Nobody mentions it, but the clan is not more united: it is only smaller.`,
  box:['The scapegoat','For René Girard (<i>Violence and the Sacred</i>, 1972; <i>The Scapegoat</i>, 1982) a group in crisis recovers its unity by loading the blame on a single member, chosen almost at random, and driving them out. It works because everyone believes in the guilt; but the crisis was not that one’s fault, and it comes back.']},
 pittore:{app:n=>`I do not want to become a warrior. Nor a healer. I want to paint the walls of the dens, like the ancients.`,capo:'It has never been done. A cat of the clan hunts, fights or heals.',tit:'🎨 The cat who wanted to paint',testo:n=>`The clan argues. ${n} waits, paws stained with ochre. Your voice counts.`,
  si:'🎨 “The clan needs this too”',no:'“A cat has a rank”',
  resta:n=>`The leader sighs: “So be it.” From today ${n} paints. In the dens, above the altars, new paintings will appear.`,parte:n=>`${n} gathers the ochre and crosses the river, without bitterness.`,dopo:n=>`🎨 A patrol reports that among the Stones there is a cat from far away who paints their dens, and is greatly honoured there. That cat looks like ${n}.`,
  box:['Out of place here, honoured elsewhere','Ruth Benedict (<i>Patterns of Culture</i>, 1934) writes that every society selects only some of the human possibilities and discourages the rest: those whose temperament their culture cannot use live badly, while in another they would have been esteemed.']},
 araldo:{capo:n=>`${n}, you no longer fight. But an old cat with a green branch in the mouth goes where a warrior cannot. Would you go to the neighbouring clans, in our name?`,tit:'🌿 The old herald',testo:'With a green branch between your teeth you will cross the other clans’ camps without anyone touching you. The journey happens by itself: you do not need to fetch anything. Everything the clan had stolen will go back to the others’ altars, and you will ask for a truce.',
  vai:'🌿 Take the green branch',resta:'Stay in camp',
  v1:'You cross the river at a slow pace, the green branch between your teeth. The patrols step aside.',v2:r=>r?`On the other clans’ altars you lay what had been stolen: ${r}.`:'Before the other clans’ altars you bow your head, touching nothing.',v3:'The leaders listen to you. When you set off again, you carry a promise.',
  fatto:(r,n)=>`${r?'<b>Returned:</b> '+r+'.<br><br>':''}You have won a <b>truce of ${n} moons</b>. While it lasts, nobody will attack you, and nobody will raid the camp.`,fineTregua:'🌿 The truce is over: the borders grow restless again.',
  box:['Whoever carries the word is not to be touched','Herodotus (<i>Histories</i>, VII, 133-137) tells that the Spartans killed the heralds of Darius, and later believed they were struck for it by the wrath of Talthybius, Agamemnon’s herald: the herald was inviolable. Émile Benveniste (<i>Indo-European Language and Society</i>, 1969) shows that the Latin <i>hostis</i>, «enemy», originally meant the stranger with whom one stands in a relation of equal exchange.']},
 solitario:{narr:n=>`At the edge of the camp stands a thin cat with no clan scent. It does not come in: it waits.`,lui:'I have walked alone for many moons. I can hunt and I can keep quiet. I ask for a place among you.',capo:n=>`The clan decides together. ${n}, what do you say?`,
  tit:'🐾 The cat from outside',testo:n=>`${n} waits with head lowered, without begging. Some clanmates sniff the air with suspicion, others with curiosity.`,si:'🐾 “There is room for you too”',no:'“Here you are born, you do not arrive”',
  resta:n=>`🐾 ${n} walks slowly into camp. Someone makes room beside the prey pile. ${n} looks for you: whoever spoke first will not be forgotten.`,parte:n=>`🐾 ${n} bows and goes back into the forest. Nobody will ever know what might have been brought.`,
  box:['The stranger who stays','The sociologist Georg Simmel (<i>The Stranger</i>, 1908) describes the stranger not as the wanderer «who comes today and goes tomorrow», but as the one «who comes today and stays tomorrow»: part of the group without having been born in it, and for that very reason able to see what the others no longer see.']},
 capo:{sogno:n=>`${n}, the clan is watching you. Whoever wins many battles or heals many cats may one day lead it. But a leader does not command: a leader listens, gives and makes peace.`,
  chiama:n=>`My moons are many, and the clan needs a younger guide. ${n}, I have seen you protect, give and listen. Will you take my place?`,
  chiamaG:n=>`${n}, the clan listens to you more than it listens to me. I have seen you protect, give and listen: that is how a guide is known. Will you take my place?`,
  tit:'⭐ Leading the clan',testo:v=>`${v} waits for your answer. The whole clan holds its breath.`,si:'⭐ Accept',no:'Not yet',
  nome:n=>`From this day the clan will call you ${n}. May the starry ancestors lend you their patience.`,giuro:'I will lead the clan with light paws. I will speak last, and eat last.',
  fineTit:'⭐ You are the clan leader',fine:(n,v,vice)=>`Now you are <b>${n}</b>. ${v} sits down among the elders, content. ${vice?vice+' will be your voice when you are away.':''}<br><br>You may climb Tall Rock, and the clan gathers around you.`,
  box:['A chief without power','The anthropologist Pierre Clastres (<i>Society Against the State</i>, 1974) observed that in many Amazonian societies the chief cannot give orders to anyone. He has three duties: to make peace through words, to be generous to the point of being the poorest, and to speak well. The group listens as long as he serves it; if he tries to command, it leaves him.']},
 narra:{kit:'Tell us about when you were young! A true story!',tit:'📜 Your story',come:'How do you tell it?',fedele:'Just as it happened',abbellita:'✨ A little bigger',
  caccia:n=>`“When I was an apprentice I brought ${n} prey to the pile. The clan ate, and I learned that one hunts for the others.”`,
  battaglia:n=>`“I fought in ${n} battles beyond the river. I was afraid every time, and every time I came back.”`,
  infanzia:n=>`“As a kit I saw ${n} wonders, and the first was the greatest: I did not yet know that the world went on beyond the hedge.”`,
  fattoF:'The kits listen in silence. One of them repeats your words under their breath, so as not to forget them.',fattoA:'The kits’ eyes are huge. Tomorrow they will tell it in turn, and it will be bigger still.',
  box:['Stories change as they pass from mouth to mouth','The psychologist Frederic Bartlett (<i>Remembering</i>, 1932) had one story repeated from person to person: at each step it became shorter, simpler, closer to what the teller already knew. Albert Lord (<i>The Singer of Tales</i>, 1960) showed that epic singers never repeat a poem word for word: they recompose it each time.']},
 eredita:{intro:n=>`Sit down, little one. This is the story of ${n}, who lived here before you were born.`,pensiero:'This story… I feel I have heard it before. Or lived it.',
  caccia:n=>`“${n} prey brought to the pile in a single season, they say. The clan never went hungry.”`,battaglia:n=>`“${n} battles fought beyond the river, and never once afraid.”`,infanzia:n=>`“${n} wonders seen as a kit, and told to anyone who would listen.”`},
},
fr:{
 cuore:{madre:'Chaque chaton a un objet de cœur. Choisis le tien : il te tiendra compagnie pendant les longues nuits.',tit:'🧸 L’objet de cœur',testo:'Dans la pouponnière, il y a trois petits trésors. Lequel prends-tu ?',
  mio:n=>`C’est à moi. Il s’appelle… ${n}.`,lascia:(n,o)=>`🧸 Le jour de la cérémonie, tu laisses ${o} dans la pouponnière : il appartient désormais aux petits qui viendront.`,
  ritrovoTit:'🧸 Un objet dans la pouponnière',ritrovo:(o,chi)=>`Dans la mousse de la pouponnière, tu trouves ${o}. Tu n’as jamais vu cet objet, et pourtant il te semble le connaître depuis toujours. Ta mère dit qu’il appartenait à ${chi}, il y a très longtemps.`,
  box:['L’objet de cœur','Le pédiatre et psychanalyste Donald Winnicott a appelé « objet transitionnel » le doudou dont un petit enfant ne se sépare pas : c’est sa première possession « non-moi », à mi-chemin entre lui et le monde, et elle l’aide à rester seul (« Objets transitionnels et phénomènes transitionnels », 1953 ; repris dans <i>Jeu et réalité</i>, 1971).']},
 mer:{farfalla:'Une chose qui vole… et qui a les couleurs des fleurs ! Qu’est-ce que c’est ?',riflesso:'Dans l’eau, il y a un chaton qui me regarde. Si je lui donne un coup de patte… il se casse, et puis il revient !',stella:'Là-haut, une petite lumière s’est allumée. Et une autre ! Qui les allume ?',lucciola:'Une étoile est descendue dans l’herbe, et elle marche.',ombra:'Il y a une tache sombre qui me suit partout. Elle court quand je cours.',
  tit:'✨ Le cahier des merveilles',tutte:'Tu as vu cinq choses pour la première fois, et chaque fois tu es resté{e} bouche bée. Tu t’en souviendras toute ta vie.',
  box:['L’étonnement','Dans le <i>Théétète</i> (155d), Platon fait dire à Socrate que s’étonner est le propre du philosophe, et que la philosophie n’a pas d’autre origine. Aristote le répète dans la <i>Métaphysique</i> (I, 2) : c’est l’étonnement qui poussa, comme aujourd’hui, les premiers penseurs à philosopher.']},
 madre:{uno:'Regarde ce que je t’ai apporté : une souris. Renifle-la bien, puis mange. Ainsi, tu sauras quelle odeur chercher.',due:'Celle-ci est vivante. Je ne te la donne pas : je la laisse partir. Voyons ce que tu sais faire.',narr:'La souris file entre tes pattes. Tu trébuches, tu roules, tu la perds… et au troisième bond, elle est à toi.',
  tit:'🐭 Ta première proie',testo:'Ta mère ronronne : « La prochaine, tu la trouveras sans moi. » Cette proie compte déjà pour ton apprentissage.',
  box:['Comment une chatte enseigne','Les chattes apportent à leurs petits d’abord des proies mortes, puis des proies vivantes, qu’elles relâchent devant eux pour qu’ils s’exercent : c’est ce que décrivent l’éthologue Paul Leyhausen (<i>Le Comportement des chats</i>, 1956) et les expériences de T. M. Caro (1980), qui montrent que les chatons élevés ainsi deviennent des chasseurs plus habiles.']},
 dente:{anz:'Une dent qui bouge ? C’est ta dent de lait : elle va tomber. Viens, je vais te dire ce que faisaient nos anciens.',tit:'🦷 La dent de lait',testo:'La petite dent est tombée. L’ancien dit : « Depuis toujours, on la laisse devant le trou d’une souris, pour que les dents nouvelles poussent aussi fortes que les siennes. Mais on ne touche pas à la souris : c’est un pacte. »',
  topo:'🐭 La laisser au trou de la souris',tenere:'La garder en souvenir',fattoTopo:'🦷 Tu poses la dent devant le trou et tu t’éloignes sans regarder. Un petit museau sort, renifle, et disparaît avec ta dent.',fattoTenere:'🦷 Tu caches la dent sous la mousse de la pouponnière. Elle est à toi.',
  box:['La dent et la souris','James Frazer raconte dans <i>Le Rameau d’or</i> (1890, chapitre sur la magie sympathique) que, dans bien des régions du monde, on met la dent tombée là où une souris ou un rat pourra la trouver, dans l’espoir que les dents nouvelles soient aussi solides que celles des rongeurs : ce qui a fait partie du corps, pensait-on, lui reste lié. C’est la « magie contagieuse ».']},
 giochi:{gara:'On fait la course ! Prêts… partez !',sasso:'Viens ici. J’ai un petit caillou dans une patte. Laquelle ?',imita:'Regarde comment je fais, et fais pareil. Le dos bas… et bondis !',giro:'On tourne, on tourne, on tourne jusqu’à ce que la forêt tourne avec nous !',
  sx:'🐾 La patte gauche',dx:'🐾 La patte droite',vinto:'Tu as deviné ! Le caillou percé est à toi : on dit qu’il porte bonheur.',perso:'Il était dans l’autre ! L’ancien rit dans ses moustaches : « La chance est une chatte capricieuse. »',
  tit:'🎲 Les quatre jeux',tutti:'Tu as fait la course, tenté ta chance, fait semblant d’être un guerrier et tourné jusqu’au vertige. Ce sont tous les jeux qui existent.',
  box:['Quatre façons de jouer','Le sociologue Roger Caillois (<i>Les Jeux et les Hommes</i>, 1958) distingue quatre espèces de jeux : la compétition (<i>agôn</i>), le hasard (<i>alea</i>), le simulacre (<i>mimicry</i>) et le vertige (<i>ilinx</i>). Chaque jeu, dit-il, en mêle une ou deux.']},
 voce:{rombo:'Dans le noir, hors de la pouponnière, monte un grondement profond : vouum… vouum… vouum…',madre:'Chut, les petits. C’est la voix du Chat des Étoiles. Ceux qui sont encore chatons ne doivent pas regarder.',
  svela:n=>`${n}, tu te souviens du grondement dans la nuit ? Regarde : c’est un roseau attaché à un brin d’herbe. Je le fais tournoyer… et voilà la voix. Maintenant, tu sais. Les petits ne doivent pas savoir : tu le promets ?`,
  tit:'🤫 Le secret du grondement',testo:'Tu fais tournoyer le roseau à ton tour. Le grondement te passe dans les pattes. Ce n’était pas la voix d’un esprit… et pourtant, elle te semble encore plus grande.',
  box:['Le secret des initiés','Mircea Eliade (<i>Naissances mystiques</i>, 1959) décrit des initiations australiennes où les femmes et les enfants croient que le son du rhombe, une planchette que l’on fait tournoyer, est la voix d’un être surnaturel ; pendant le rite, on montre l’instrument aux novices, avec défense d’en parler. Devenir adulte, c’est aussi garder un secret.']},
 re:{capo:'Aujourd’hui, c’est le jour à l’envers ! Pour un jour, c’est le plus petit du clan qui commande. Monte sur la Roche, et ordonne.',tit:'👑 Roi d’un jour',testo:'Tout le clan te regarde d’en bas. Qu’ordonnes-tu ?',
  ordini:['Que le chef se roule par terre !','Aujourd’hui, les petits mangent les premiers !','Que tous les guerriers ronronnent !'],piccolo:n=>`${n} monte sur la Roche, bombe le torse et ordonne :`,risata:'Ha ha ha !',obbedisco:'À vos ordres, tout petit chef !',
  fine:'Le clan rit jusqu’au soir. Demain, chacun reprendra sa place, et obéir sera plus léger.',
  box:['Le monde à l’envers','Dans beaucoup de sociétés, il existe des jours où les rôles s’inversent : les petits commandent, les grands obéissent. Max Gluckman les a appelés « rituels de rébellion » (<i>Rituals of Rebellion in South-East Africa</i>, 1954) ; pour Victor Turner (<i>Le Phénomène rituel</i>, 1969), ces renversements finissent par renforcer l’ordre de tous les jours.']},
 giro:{c:'Tant d’efforts pour deux souris aussi maigres ? C’est le vent qui les a mangées avant toi ?',tit:'😼 La proie moquée',testo:'Tes compagnons ricanent autour du tas. Tu as rapporté une belle chasse, et ils s’en moquent.',ridi:'😹 Rire avec eux',offesa:'😾 Se vexer',
  riso:'Tu ris aussi : « La prochaine fois, je n’apporte que les os ! » Quelqu’un te donne un coup de tête affectueux.',muso:'Tu t’en vas, la queue bien droite. Personne ne te court après : le clan n’aime pas les vantards.',
  box:['Rabaisser la proie','L’anthropologue Richard B. Lee offrit un bœuf énorme aux !Kung du Kalahari, qui s’en moquèrent pendant des jours : « un sac d’os ». Puis ils lui expliquèrent : quand un jeune homme tue beaucoup de viande, il se prend pour un chef ; on dit donc toujours que sa proie ne vaut rien, pour lui refroidir le cœur et le rendre doux (« Eating Christmas in the Kalahari », 1969).']},
 kula:{narr:n=>`${n}, du Clan de la Brume, sort d’entre les arbres avec quelque chose entre les dents.`,dono:'Ce coquillage n’est pas à moi et ne sera pas à toi. Il vient de loin et doit aller loin : porte-le à un chat des Pierres. Celui qui le garde pour lui le tue.',
  tit:'🐚 Le coquillage voyageur',testo:'Tu portes un coquillage que tu ne peux pas garder. Trouve un chat du Clan des Pierres, dans la forêt, et transmets-le.',
  grazie:'Un coquillage voyageur ! Chez nous, on dit qu’il porte le nom de tous ceux qui l’ont touché. Prends cet os gravé : il va dans l’autre sens. Porte-le où tu voudras.',
  fineTit:'🐚 Le don qui circule',fine:'Le coquillage poursuit son voyage, et tu as un ami de plus de l’autre côté de la rivière. Pendant un moment, les frontières seront plus calmes.',
  box:['Le cercle des dons','Bronisław Malinowski (<i>Les Argonautes du Pacifique occidental</i>, 1922) a décrit la <i>kula</i> des îles Trobriand : des colliers de coquillages rouges circulent d’île en île dans un sens, des bracelets blancs dans l’autre ; personne ne les garde longtemps, et chaque échange lie deux partenaires pour la vie. Pour Marcel Mauss (<i>Essai sur le don</i>, 1925), donner, recevoir et rendre sont trois obligations qui font tenir les sociétés.']},
 oro:{tit:'🤝 Au milieu de la bataille',testo:n=>`Dans la mêlée, tu t’es retrouvé{e} nez à nez avec ${n}, dont tu avais un jour touché le museau. Vous vous êtes arrêtés. Au lieu de frapper, vous avez échangé un don : toi une plume, et une plume plus belle en retour. Puis chacun est retourné auprès des siens.`,
  box:['De l’or contre du bronze','Au chant VI de l’<i>Iliade</i> (vers 119-236), Glaucos et Diomède vont se battre quand ils découvrent que leurs grands-pères avaient été hôtes l’un de l’autre. Ils sautent de leurs chars, se serrent la main et échangent leurs armes : Glaucos donne des armes d’or contre des armes de bronze. L’hospitalité entre familles comptait plus que la guerre.']},
 erba:{tit:'🌿 Une plante à l’odeur étrange',testo:'Parmi les fougères pousse une plante aux feuilles duveteuses. Son odeur te fait tourner la tête.',rotola:'🌀 Se rouler dessus',lascia:'La laisser tranquille',
  si:'Tu te frottes, tu roules, tu rues, tu ronronnes tout{e} seul{e}. Cela ne dure pas ; puis tu te relèves, le poil parfumé, avec l’air de qui n’a rien fait.',no:'Tu renifles, tu renifles encore… rien. C’est une plante comme les autres. Tu as pourtant vu des compagnons devenir fous pour bien moins. Tous les chats n’y sont pas sensibles : on naît ainsi.',
  box:['L’herbe à chat','Se frotter à l’herbe à chat et au matatabi n’est pas qu’un plaisir : les feuilles laissent sur le poil une substance, le népétalactol, qui éloigne les moustiques (Reiko Uenoyama et ses collègues, <i>Science Advances</i>, 2021). La sensibilité à ces plantes est héréditaire, et une partie des chats n’en a pas.']},
 lepre:{tit:'🐇 Le lièvre blanc',testo:'Entre les arbres, immobile, se tient un lièvre tout blanc. Il te regarde. Puis il fait trois bonds et se retourne, comme s’il t’attendait.',segui:'👣 Le suivre sans attaquer',caccia:'🍖 Le chasser',
  via:'Le lièvre va devant, toi derrière. Chaque fois que tu le perds, tu le retrouves arrêté, à t’attendre.',cacciata:'C’est un repas de roi. Mais au camp, l’ancien secoue la tête : « Certaines proies ne se mangent pas : elles se suivent. »',
  arrTit:'🐇 La clairière',arrivo:'Le lièvre a disparu. À sa place, une clairière que tu n’avais jamais vue : des herbes rares, et dans la terre, quelque chose qui brille.',
  box:['L’animal blanc qui guide','Dans les récits médiévaux, celui qui poursuit un animal blanc trouve autre chose que ce qu’il cherchait : <i>Érec et Énide</i> de Chrétien de Troyes (vers 1170) commence par la chasse au cerf blanc ; dans les <i>Gesta Hunnorum et Hungarorum</i> de Simon de Kéza (vers 1282), les frères Hunor et Magor suivent une biche qui les mène dans une terre nouvelle, où ils fondent leurs peuples.']},
 tregua:{capo:'Il n’a pas plu depuis trop de lunes. L’étang n’est que boue, la flaque est sèche. À partir d’aujourd’hui, c’est la trêve de l’eau : au Lac d’Argent, chacun boit, et personne ne lève la patte.',tit:'💧 La trêve de l’eau',testo:'Pendant quelques lunes, les trois clans boivent côte à côte au Lac d’Argent. Personne ne crache. Qui romprait la trêve serait chassé par tous.',
  box:['La trêve','Dans le récit « Comment vint la crainte » (Rudyard Kipling, <i>Le Second Livre de la jungle</i>, 1895), quand la sécheresse découvre le Rocher de la Paix, aucun animal ne peut chasser près de l’eau. C’est une invention, mais les trêves sacrées ont existé : Thucydide (V, 49-50) raconte qu’en 420 av. J.-C. les Spartiates furent condamnés à une amende et exclus des jeux d’Olympie pour avoir attaqué pendant la trêve olympique.']},
 eclissi:{narr:'Au milieu du jour, la lumière s’éteint. Les oiseaux se taisent. Le soleil a une morsure noire.',capo:'Que personne ne bouge. Quand le ciel ferme l’œil, aucun chat ne sort une griffe. Ni nous, ni eux.',tit:'🌑 Le jour devenu nuit',testo:'Quand la lumière revient, sur les deux rives de la rivière, les guerriers des trois clans se regardent, et chacun rentre à son camp sans un mot. Pendant un moment, plus personne ne parlera de guerre.',
  box:['L’éclipse qui arrêta une bataille','Hérodote (<i>Histoires</i>, I, 74) raconte que les Lydiens et les Mèdes se battaient depuis cinq ans quand, en pleine bataille, le jour se changea en nuit. Ils cessèrent le combat et se hâtèrent de faire la paix. Selon Hérodote, Thalès de Milet avait prédit cette éclipse : les astronomes la datent de 585 av. J.-C.']},
 stagioni:{nomi:['🌱 Le printemps est revenu : la forêt se remplit de proies.','☀️ C’est l’été : les jours sont longs et le clan s’éparpille dans la forêt.','🍂 C’est l’automne : les feuilles tombent, et l’on fait des provisions.','❄️ C’est l’hiver : le clan se serre dans les tanières, et chaque rite réchauffe deux fois plus.'],
  tit:'❄️ L’hiver qui rassemble',testo:'Avec la neige, le clan dort serré, raconte davantage et chante davantage. En hiver, tout ce qui élève l’esprit du clan compte double.',
  box:['Deux saisons, deux vies','Marcel Mauss et Henri Beuchat (« Essai sur les variations saisonnières des sociétés eskimos », 1904-1905) ont observé que les Inuits vivaient l’été dispersés sous de petites tentes, et l’hiver réunis dans de grandes maisons communes, où se concentraient les fêtes et les rites. La vie d’un groupe, concluaient-ils, a un rythme : des temps de dispersion et des temps de rassemblement.']},
 capro:{voce:n=>`Nous avons perdu à cause de ${n}. Trop d’hésitation. Ça porte malheur, tout le monde le dit.`,tit:'🐐 La faute',testo:n=>`Le clan est fatigué et amer. De plus en plus de chats regardent ${n} de travers, alors que ${n} n’a rien fait de différent des autres. Ils attendent ce que tu vas dire.`,
  difendi:'🛡️ Prendre sa défense',taci:'Se taire',unisci:'Accuser aussi',
  difeso:n=>`Tu te places à côté de ${n} : « Nous avons tous perdu ensemble. » Les voix s’éteignent, une à une. ${n} ne l’oubliera pas.`,
  cacciato:n=>`${n} quitte le camp à l’aube, sans que personne y touche. Pour un soir, le clan se sent uni et léger.`,dopo:n=>`🍂 Le tas de proies est plus bas depuis le départ de ${n}. Personne n’en parle, mais le clan n’est pas plus uni : il est seulement plus petit.`,
  box:['Le bouc émissaire','Pour René Girard (<i>La Violence et le sacré</i>, 1972 ; <i>Le Bouc émissaire</i>, 1982), un groupe en crise retrouve son unité en chargeant la faute sur un seul, choisi presque au hasard, et en le chassant. Cela marche parce que tous croient à sa culpabilité ; mais la crise n’était pas de sa faute, et elle revient.']},
 pittore:{app:n=>`Je ne veux pas devenir guerrier. Ni guérisseur. Je veux peindre les parois des tanières, comme les anciens.`,capo:'Cela ne s’est jamais vu. Un chat du clan chasse, combat ou soigne.',tit:'🎨 Le chat qui voulait peindre',testo:n=>`Le clan discute. ${n} attend, les pattes tachées d’ocre. Ta voix compte.`,
  si:'🎨 « Le clan a besoin de cela aussi »',no:'« Un chat a un rang »',
  resta:n=>`Le chef soupire : « Soit. » À partir d’aujourd’hui, ${n} peint. Dans les tanières, au-dessus des autels, de nouvelles peintures apparaîtront.`,parte:n=>`${n} ramasse son ocre et traverse la rivière, sans rancune.`,dopo:n=>`🎨 Une patrouille raconte que chez les Pierres, un chat venu de loin peint leurs tanières, et qu’il y est très honoré. Il ressemble à ${n}.`,
  box:['Déplacé ici, honoré ailleurs','Ruth Benedict (<i>Échantillons de civilisations</i>, 1934) écrit que chaque société ne retient que quelques-unes des possibilités humaines et décourage les autres : celui dont le tempérament ne trouve pas d’emploi dans sa culture vit mal, alors qu’ailleurs il aurait été estimé.']},
 araldo:{capo:n=>`${n}, tu ne combats plus. Mais un vieux chat, un rameau vert dans la gueule, entre là où un guerrier n’entre pas. Irais-tu chez les clans voisins, en notre nom ?`,tit:'🌿 Le vieux héraut',testo:'Un rameau vert entre les dents, tu traverseras les camps des autres clans sans que personne te touche. Le voyage se fait tout seul : tu n’as rien à aller chercher. Tout ce que le clan avait volé retournera sur les autels des autres, et tu demanderas une trêve.',
  vai:'🌿 Prendre le rameau vert',resta:'Rester au camp',
  v1:'Tu traverses la rivière à pas lents, le rameau vert entre les dents. Les patrouilles s’écartent.',v2:r=>r?`Sur les autels des autres clans, tu déposes ce qui avait été volé : ${r}.`:'Devant les autels des autres clans, tu inclines la tête, sans rien toucher.',v3:'Les chefs t’écoutent. Quand tu repars, tu emportes une promesse.',
  fatto:(r,n)=>`${r?'<b>Rendu :</b> '+r+'.<br><br>':''}Tu as obtenu une <b>trêve de ${n} lunes</b>. Tant qu’elle dure, personne ne t’attaquera, et personne n’attaquera le camp.`,fineTregua:'🌿 La trêve est finie : les frontières redeviennent agitées.',
  box:['On ne touche pas à celui qui porte la parole','Hérodote (<i>Histoires</i>, VII, 133-137) raconte que les Spartiates tuèrent les hérauts de Darius, et crurent ensuite être frappés pour cela par la colère de Talthybios, le héraut d’Agamemnon : le héraut était inviolable. Émile Benveniste (<i>Le Vocabulaire des institutions indo-européennes</i>, 1969) montre que le latin <i>hostis</i>, « ennemi », désignait à l’origine l’étranger avec qui l’on est dans un rapport d’échange à égalité.']},
 solitario:{narr:n=>`À la lisière du camp se tient un chat maigre, sans odeur de clan. Il n’entre pas : il attend.`,lui:'J’ai marché de nombreuses lunes sans personne. Je sais chasser et je sais me taire. Je demande une place parmi vous.',capo:n=>`Le clan décide ensemble. ${n}, qu’en dis-tu ?`,
  tit:'🐾 Le chat venu d’ailleurs',testo:n=>`${n} attend, la tête basse, sans supplier. Certains compagnons hument l’air avec méfiance, d’autres avec curiosité.`,si:'🐾 « Il y a de la place pour toi aussi »',no:'« Ici, on naît, on n’arrive pas »',
  resta:n=>`🐾 ${n} entre dans le camp à pas lents. Quelqu’un lui fait une place près du tas de proies. Son regard te cherche : on n’oublie pas qui a parlé en premier.`,parte:n=>`🐾 ${n} baisse la tête et retourne dans la forêt. Personne ne saura jamais ce que ce chat aurait apporté.`,
  box:['L’étranger qui reste','Le sociologue Georg Simmel (<i>Digressions sur l’étranger</i>, 1908) décrit l’étranger non comme le voyageur « qui vient aujourd’hui et repart demain », mais comme celui « qui vient aujourd’hui et reste demain » : il fait partie du groupe sans y être né, et c’est pour cela qu’il voit ce que les autres ne voient plus.']},
 capo:{sogno:n=>`${n}, le clan te regarde. Qui remporte de nombreuses batailles ou guérit de nombreux chats pourra un jour le guider. Mais un chef ne commande pas : il écoute, il donne et il apaise.`,
  chiama:n=>`Mes lunes sont nombreuses, et le clan a besoin d’un guide plus jeune. ${n}, je t’ai vu{e} protéger, donner et écouter. Veux-tu prendre ma place ?`,
  chiamaG:n=>`${n}, le clan t’écoute plus qu’il ne m’écoute. Je t’ai vu{e} protéger, donner et écouter : c’est ainsi qu’on reconnaît un guide. Veux-tu prendre ma place ?`,
  tit:'⭐ Guider le clan',testo:v=>`${v} attend ta réponse. Tout le clan retient son souffle.`,si:'⭐ Accepter',no:'Pas encore',
  nome:n=>`À partir de ce jour, le clan t’appellera ${n}. Que les ancêtres étoilés te prêtent leur patience.`,giuro:'Je guiderai le clan d’une patte légère. Je parlerai après tous les autres, et je mangerai après tous les autres.',
  fineTit:'⭐ Tu es chef du clan',fine:(n,v,vice)=>`Maintenant, tu es <b>${n}</b>. ${v} s’assied parmi les anciens, le cœur en paix. ${vice?vice+' sera ta voix quand tu seras loin.':''}<br><br>Tu peux monter sur la Haute Roche, et le clan se rassemble autour de toi.`,
  box:['Un chef sans pouvoir','L’anthropologue Pierre Clastres (<i>La Société contre l’État</i>, 1974) a observé que, dans beaucoup de sociétés d’Amazonie, le chef ne peut donner d’ordres à personne. Il a trois devoirs : faire la paix par la parole, être généreux au point de rester le plus pauvre, et bien parler. Le groupe l’écoute tant qu’il le sert ; s’il essaie de commander, on l’abandonne.']},
 narra:{kit:'Raconte-nous quand tu étais jeune ! Une histoire vraie !',tit:'📜 Ton histoire',come:'Comment la racontes-tu ?',fedele:'Comme elle s’est passée',abbellita:'✨ Un peu plus grande',
  caccia:n=>`« Quand j’étais en apprentissage, j’ai apporté ${n} proies au tas. Le clan a mangé, et j’ai appris qu’on chasse pour les autres. »`,
  battaglia:n=>`« J’ai combattu dans ${n} batailles au-delà de la rivière. J’ai eu peur chaque fois, et chaque fois je suis revenu{e}. »`,
  infanzia:n=>`« Toute petite boule de poils, j’ai vu ${n} merveilles, et la première fut la plus grande : je ne savais pas encore que le monde continuait au-delà de la haie. »`,
  fattoF:'Les petits écoutent en silence. L’un d’eux répète tes mots tout bas, pour ne pas les oublier.',fattoA:'Les petits ont des yeux immenses. Demain, ils la raconteront à leur tour, et elle sera encore plus grande.',
  box:['Les histoires changent en passant de bouche en bouche','Le psychologue Frederic Bartlett (<i>Remembering</i>, 1932) fit répéter une même histoire d’une personne à l’autre : à chaque passage, elle devenait plus courte, plus simple, plus proche de ce que le conteur connaissait déjà. Albert Lord (<i>The Singer of Tales</i>, 1960) a montré que les chanteurs épiques ne répètent jamais un poème mot pour mot : ils le recomposent chaque fois.']},
 eredita:{intro:n=>`Assieds-toi. Voici l’histoire de ${n}, qui vécut ici avant ta naissance.`,pensiero:'Cette histoire… il me semble l’avoir déjà entendue. Ou vécue.',
  caccia:n=>`« ${n} proies apportées au tas en une seule saison, dit-on. Le clan n’eut jamais faim. »`,battaglia:n=>`« ${n} batailles au-delà de la rivière, et jamais la moindre peur. »`,infanzia:n=>`« ${n} merveilles vues dans l’enfance, et racontées à qui voulait les entendre. »`},
}}[LINGUA];

// accordi: {o} → o/a (it), {e} → ''/e (fr), {x} → o/a (it) riferito a un altro gatto
const stAcc=(t,c)=>{ const f=c&&c.sesso==='f'; return String(t).replace(/\{o\}/g,f?'a':'o').replace(/\{e\}/g,f?'e':'').replace(/\{x\}/g,LINGUA==='it'?(f?'a':'o'):LINGUA==='en'?(f?'her':'him'):''); };
const stP=()=>G.p.st||(G.p.st={}), stG=()=>G.st||(G.st={});
const stNotte=()=>{ const f=(G.t%MOON)/MOON; return f>0.6?Math.sin((f-0.6)/0.4*Math.PI):0; };
const stStagione=()=>Math.floor(G.t/(MOON*3))%4;
const stAdulto=p=>p.rango==='guerriero'||p.rango==='guaritore';
const stFuori=p=>dist(p,CLAN.felce.campo)>CLAN.felce.campo.r+60;
const stSapere=(b)=>box(b[0],b[1]);
// una storia alla volta: nessuna scena, finestra, racconto, battaglia, rito; e un po' di quiete dall'ultimo evento
function storiaLibera(quiete){ if(typeof G==='undefined'||!G||!G.p||paused||scena||recitaAtt||fx||G.raid||G.dentro||transizione) return false;
 if((typeof corteggia!=='undefined'&&corteggia)||momentoSacro()||occupato()||G.cats.some(c=>c.stato==='avvicina')) return false; const p=G.p;
 if(p.guida||p.caccia||inCaccia()) return false; return G.t-(G.ultimoEvento??-1e9)>=quiete; }
const stMadre=()=>{ const m=gatto(G.madre); return m&&m.clan==='felce'&&dist(m,G.p)<400?m:null; };
const stVicino=(f,R=380)=>{ let b=null,bd=R; for(const c of G.cats){ if(!f(c)) continue; const d=dist(c,G.p); if(d<bd){ bd=d; b=c; } } return b; };

const STORIE={
 // ---------- infanzia ----------
 cuore(){ const p=G.p, T=STORIE_T.cuore, m=stMadre(); segnaEvento(); stP().cuoreChiesto=true;
  recita([m?{c:m,t:T.madre}:null],()=>modale(T.tit,T.testo,['piuma','conchiglia','pietraforata'].map(k=>({t:OGG[k].ic+' '+cap(nomeOgg(k)),f:()=>{ stP().cuore=k; parla(p,'💭 '+T.mio(pick(['Pim','Lilla','Ghiro','Nuvola','Bu'])),5); }})))); },
 cuoreLascia(){ const p=G.p, T=STORIE_T.cuore, k=stP().cuore; stP().cuoreLasciato=true; stG().cuore={tipo:k,di:nome(p)}; log(T.lascia(nome(p),nomeOgg(k)),'#ffd9f0'); },
 cuoreRitrova(){ const p=G.p, T=STORIE_T.cuore, q=stG().cuore; segnaEvento(); stP().cuoreTrovato=true;
  modale(T.ritrovoTit,T.ritrovo(nomeOgg(q.tipo),q.di)+stSapere(T.box),[{t:'🧸',f:()=>spirito(6,'compagnia')}]); },
 meraviglia(k){ const p=G.p, T=STORIE_T.mer, S=stP(); (S.mer=S.mer||[]).push(k); S.merT=G.t; parla(p,'💭 '+T[k],6); log('✨ '+T[k],'#fff3b0'); p.spirito=Math.min(100,(p.spirito??60)+1);
  if(S.mer.length===5) setTimeout(()=>{ if(!paused&&!scena) modale(T.tit,stAcc(T.tutte,p)+stSapere(T.box),[{t:'✨',f:()=>spirito(5,'racconto')}]); },6500); },
 madre1(){ const p=G.p, T=STORIE_T.madre, m=stMadre(); if(!m) return; segnaEvento(); stP().madre=1;
  recita([{c:m,t:T.uno}],()=>avviaScena('mangia',[p],1.6,()=>{ p.fame=Math.min(100,p.fame+35); flo(p.x,p.y-30,'🍖 Gnam!'); })); },
 madre2(){ const p=G.p, T=STORIE_T.madre, m=stMadre(); if(!m) return; segnaEvento(); stP().madre=2;
  recita([{c:m,t:T.due},{t:T.narr,scena:['rotolo',[p],3],dur:4}],()=>{ p.prede=(p.prede||0)+1; modale(T.tit,stAcc(T.testo,p)+stSapere(T.box),[{t:'🐭'}]); }); },
 dente(){ const p=G.p, T=STORIE_T.dente, a=anziano(); segnaEvento(); stP().dente='chiesto';
  recita([a?{c:a,t:T.anz}:null],()=>modale(T.tit,T.testo+stSapere(T.box),[{t:T.topo,f:()=>{ stP().dente='topo'; log(T.fattoTopo,'#e8d9a8'); spirito(5,'rito'); }},{t:T.tenere,f:()=>{ stP().dente='mio'; log(T.fattoTenere,'#e8d9a8'); }}])); },
 gioco(k){ const p=G.p, T=STORIE_T.giochi, S=stP(); (S.giochi=S.giochi||[]).push(k); S.giocoT=G.t; segnaEvento();
  const fine=()=>{ p.spirito=Math.min(100,(p.spirito??60)+2); if(S.giochi.length===4) setTimeout(()=>{ if(!paused&&!scena) modale(T.tit,T.tutti+stSapere(T.box),[{t:'🎲',f:()=>spirito(6,'compagnia')}]); },800); };
  const kit=stVicino(c=>c.clan==='felce'&&c.rango==='gattino'&&c!==p,300), g=stVicino(c=>c.clan==='felce'&&c.rango==='guerriero'&&!c.leader,400), a=anziano();
  if(k==='gara'&&kit) recita([{c:kit,t:T.gara,dur:2.5}],()=>avviaScena('gioco',[p,kit],4.6,fine));
  else if(k==='giro'&&kit) recita([{c:kit,t:T.giro,dur:3}],()=>avviaScena('rotolo',[p],2.8,fine));
  else if(k==='imita'&&g) recita([{c:g,t:T.imita,dur:3.5}],()=>avviaScena('allena',[p,g],2.6,fine));
  else if(k==='sasso'&&a) recita([{c:a,t:stAcc(T.sasso,p),dur:3.5}],()=>{ const ok=Math.random()<0.5, es=()=>{ if(ok){ (p.inventario=p.inventario||[]).push('pietraforata'); log('🎲 '+T.vinto,'#ffe9a8'); } else log('🎲 '+T.perso,'#e8d9a8'); fine(); }; modale('🎲',stAcc(T.sasso,p),[{t:T.sx,f:es},{t:T.dx,f:es}]); });
  else { S.giochi.pop(); } },
 voce(){ const p=G.p, T=STORIE_T.voce, m=stMadre(); segnaEvento(); stP().voce=1; if(window.suonoRombo) suonoRombo(); recita([{t:T.rombo,dur:5},m?{c:m,t:T.madre}:null],()=>{}); },
 voceSvela(){ const p=G.p, T=STORIE_T.voce, m=gatto(p.mentore); if(!m) return; segnaEvento(); stP().voce=2; recita([{c:m,t:T.svela(nome(p)),dur:9}],()=>{ if(window.suonoRombo) suonoRombo(); modale(T.tit,T.testo+stSapere(T.box),[{t:'🤫',f:()=>spirito(6,'rito')}]); }); },
 re(){ const p=G.p, T=STORIE_T.re, k=capo(); if(!k) return; segnaEvento(); stG().re=G.t; const fine=()=>modale(T.tit,T.fine+stSapere(T.box),[{t:'👑',f:()=>spirito(10,'rito')}]);
  const ordine=(chi,o)=>recita([{c:chi,t:o,dur:4},{c:k,t:T.obbedisco,dur:3,f:()=>setPosa(k,'rotola',3)},{coro:partecipanti().filter(c=>c!==p&&c!==k).slice(0,6),coroT:T.risata,dur:3}],fine);
  if(p.rango==='gattino') recita([{c:k,t:T.capo}],()=>modale(T.tit,T.testo,T.ordini.map(o=>({t:o,f:()=>ordine(p,o)}))));
  else { const kit=G.cats.filter(c=>c.clan==='felce'&&c.rango==='gattino').sort((a,b)=>lune(a)-lune(b))[0]; if(!kit) return; recita([{c:k,t:T.capo.split('.')[0]+'.'},{t:T.piccolo(nome(kit)),dur:3.5}],()=>ordine(kit,pick(T.ordini))); } },
 // ---------- età adulta ----------
 giro(){ const p=G.p, T=STORIE_T.giro, c=stVicino(c=>c.clan==='felce'&&c.rango==='guerriero'&&!c.leader,300); if(!c) return; segnaEvento(); stG().giro=G.t;
  recita([{c,t:T.c}],()=>modale(T.tit,T.testo+stSapere(T.box),[{t:T.ridi,f:()=>{ log(T.riso,'#c8f0a8'); c.amicizia=(c.amicizia||0)+1; spirito(6,'compagnia'); }},{t:T.offesa,f:()=>{ log(T.muso,'#ffb0a0'); p.spirito=Math.max(0,(p.spirito??60)-5); }}])); },
 kula1(){ const p=G.p, T=STORIE_T.kula, e=G.cats.find(c=>c.clan==='nebbia'&&!c.leader&&c.stato!=='fuga'&&c.stato!=='assalto'); if(!e) return; segnaEvento(); stG().kula=1;
  const a=Math.random()*6.283; e.x=clamp(p.x+Math.cos(a)*90,30,WW-30); e.y=clamp(p.y+Math.sin(a)*90,30,WH-30); e.amicoPrima=e.amico; e.amico=true; e.pacificoFino=G.t+25; e.vx=e.vy=0; e.stato='pattuglia'; e.tx=e.x; e.ty=e.y;
  recita([{t:T.narr(nome(e)),dur:4},{c:e,t:T.dono,dur:9}],()=>{ (p.inventario=p.inventario||[]).push('conchiglia'); modale(T.tit,T.testo,[{t:'🐚'}]); }); },
 kula2(e){ const p=G.p, T=STORIE_T.kula; segnaEvento(); stG().kula=2; e.vx=e.vy=0; e.amico=true;
  recita([{c:e,t:T.grazie,dur:9}],()=>{ const i=(p.inventario||[]).indexOf('conchiglia'); if(i>=0) p.inventario.splice(i,1); p.inventario.push('osso'); tensione('nebbia',-20); tensione('pietre',-20); modale(T.fineTit,T.fine+stSapere(T.box),[{t:'🐚',f:()=>spirito(8,'compagnia')}]); }); },
 oro(e){ const p=G.p, T=STORIE_T.oro; segnaEvento(); stG().oro=G.t; (p.inventario=p.inventario||[]).push('piuma'); tensione(e.clan,-10); modale(T.tit,stAcc(T.testo(nome(e)),p)+stSapere(T.box),[{t:'🤝',f:()=>spirito(5,'compagnia')}]); },
 erba(){ const p=G.p, T=STORIE_T.erba, S=stP(); segnaEvento(); stG().erba=G.t; if(S.sensibile==null) S.sensibile=Math.random()<0.7;
  modale(T.tit,T.testo,[{t:T.rotola,f:()=>{ if(S.sensibile) avviaScena('rotolo',[p],3.2,()=>modale(T.tit,stAcc(T.si,p)+stSapere(T.box),[{t:'🌿',f:()=>spirito(5,'compagnia')}])); else modale(T.tit,T.no+stSapere(T.box),[{t:'🤷'}]); }},{t:T.lascia}]); },
 lepre(){ const p=G.p, T=STORIE_T.lepre; segnaEvento(); stP().lepre='vista';
  modale(T.tit,T.testo,[{t:T.segui,f:()=>{ let q=null; for(let i=0;i<40&&!q;i++){ const a=Math.random()*6.283, x=clamp(p.x+Math.cos(a)*420,60,FX0-60), y=clamp(p.y+Math.sin(a)*420,60,WH-60); if(!acqua(x,y)&&!inCampo(x,y,80)) q={x,y}; }
    if(!q) q={x:clamp(p.x+200,60,FX0-60),y:p.y}; stP().lepre=q; log('🐇 '+T.via,'#e8f0ff'); avviaGuida('punto',q); }},
   {t:T.caccia,f:()=>{ stP().lepre='mangiata'; p.fame=100; log('🐇 '+T.cacciata,'#ffb0a0'); p.spirito=Math.max(0,(p.spirito??60)-3); }}]); },
 lepreArrivo(){ const p=G.p, T=STORIE_T.lepre; segnaEvento(); stP().lepre='trovata'; (p.inventario=p.inventario||[]).push('cristallo'); if(typeof puoErbe==='function'&&puoErbe()) p.erbe=(p.erbe||0)+2;
  modale(T.arrTit,T.arrivo+stSapere(T.box),[{t:'💎',f:()=>spirito(6,'rito')}]); },
 // ---------- eventi del mondo ----------
 tregua(){ const T=STORIE_T.tregua, k=capo(); segnaEvento(); stG().tregua=G.t; G.treguaFino=G.t+MOON*4; tensione('nebbia',-25); tensione('pietre',-25);
  recita([k?{c:k,t:T.capo,dur:10}:null],()=>modale(T.tit,T.testo+stSapere(T.box),[{t:'💧'}])); },
 eclissi(){ const T=STORIE_T.eclissi, k=capo(); segnaEvento(); stG().eclissi=G.t; G.eclissiFino=G.t+16; G.treguaFino=Math.max(G.treguaFino||0,G.t+MOON*3); tensione('nebbia',-30); tensione('pietre',-30);
  recita([{t:T.narr,dur:6},k&&dist(k,G.p)<500?{c:k,t:T.capo,dur:7}:null],()=>setTimeout(()=>{ if(!paused&&!scena) modale(T.tit,T.testo+stSapere(T.box),[{t:'🌑',f:()=>spirito(5,'rito')}]); },3000)); },
 stagione(s){ const T=STORIE_T.stagioni; stG().stagione=s; log(T.nomi[s],'#dff0ff'); if(s===3&&!stG().inverno){ stG().inverno=true; if(storiaLibera(10)){ segnaEvento(); modale(T.tit,T.testo+stSapere(T.box),[{t:'❄️'}]); } } },
 // ---------- dilemmi del clan ----------
 capro(){ const p=G.p, T=STORIE_T.capro, leg=new Set([p.compagno,p.mentore,p.allievo,G.madre]); const v=pick(G.cats.filter(c=>c.clan==='felce'&&c.rango==='guerriero'&&!c.leader&&!c.regina&&!c.figlio&&!leg.has(c.id))), acc=stVicino(c=>c.clan==='felce'&&c.rango==='guerriero'&&c!==v&&!c.leader,500);
  if(!v||!acc) return; segnaEvento(); stG().capro=G.t; const n=nome(v);
  const via=()=>{ G.cats=G.cats.filter(c=>c!==v); if(typeof liberaNome==='function') liberaNome(v); log(stAcc(T.cacciato(n),v),'#d9c8ff'); spirito(12,'rito'); stG().caproDopo={n,sesso:v.sesso,t:G.t+MOON*2}; };
  recita([{c:acc,t:T.voce(n),dur:7}],()=>modale(T.tit,T.testo(n)+stSapere(T.box),[{t:stAcc(T.difendi,v),f:()=>{ v.amicizia=Math.max(v.amicizia||0,3); log(T.difeso(n),'#c8f0a8'); spirito(6,'compagnia'); }},{t:T.taci,f:via},{t:T.unisci,f:via}])); },
 caproDopo(){ const d=stG().caproDopo, T=STORIE_T.capro; stG().caproDopo=null; log(stAcc(T.dopo(d.n),d),'#ffb0a0'); G.p.spirito=Math.max(0,(G.p.spirito??60)-15); G.cibo=Math.max(0,G.cibo-2); },
 pittore(){ const p=G.p, T=STORIE_T.pittore, a=G.cats.find(c=>c.clan==='felce'&&c.rango==='apprendista'&&!c.figlio&&c.id!==p.allievo&&dist(c,p)<500), k=capo(); if(!a||!k) return; segnaEvento(); stG().pittore=G.t; const n=nome(a);
  recita([{c:a,t:T.app(n),dur:8},{c:k,t:T.capo,dur:6}],()=>modale(T.tit,T.testo(n)+stSapere(T.box),[{t:T.si,f:()=>{ a.pittore=true; log(T.resta(n),'#c8f0a8'); spirito(6,'compagnia'); }},
   {t:T.no,f:()=>{ G.cats=G.cats.filter(c=>c!==a); if(typeof liberaNome==='function') liberaNome(a); log(T.parte(n),'#d9c8ff'); stG().pittoreDopo={n,t:G.t+MOON*3}; }}])); },
 araldo(){ const p=G.p, T=STORIE_T.araldo, k=capo(); if(!k) return; segnaEvento(); stG().araldo=G.t;
  recita([{c:k,t:T.capo(nome(p)),dur:10}],()=>modale(T.tit,T.testo+stSapere(T.box),[{t:T.vai,f:()=>{ const inv=p.inventario||[], resi=[];
    for(let i=inv.length-1;i>=0;i--) if(OGG[inv[i]]&&OGG[inv[i]].cat==='culto'){ resi.push(nomeOgg(inv[i])); inv.splice(i,1); } // tutto ciò che è stato rubato torna indietro, da solo
    for(const t of (G.trofei||[])) if(OGG[t.tipo]) resi.push(nomeOgg(t.tipo)); G.trofei=[]; G.derubate={}; G.offesa={}; const lista=[...new Set(resi)].join(', '), LUNE=6;
    tensione('nebbia',-60); tensione('pietre',-60); G.treguaFino=G.t+MOON*LUNE; G.treguaAvviso=true; p.caccia=null; p.guida=null;
    for(const c of G.cats) if(c.clan!=='felce'&&(c.stato==='assalto'||c.stato==='caccia'||c.stato==='schierato')){ c.stato='pattuglia'; c.posto=null; if(typeof puntoNemico==='function') puntoNemico(c); }
    effetto('🌿',1.6,()=>recita([{t:T.v1,dur:5},{t:T.v2(lista),dur:6},{t:T.v3,dur:4.5}],()=>modale(T.tit,T.fatto(lista,LUNE),[{t:'🌿',f:()=>spirito(10,'rito')}]))); }},{t:T.resta}])); },
 // ---------- il traguardo: guidare il clan ----------
 // richiesta del 12 novembre 2026
 capoSogno(){ const p=G.p, T=STORIE_T.capo, k=capo(); if(!k) return; segnaEvento(); stP().capoSogno=true; recita([{c:k,t:T.sogno(nome(p)),dur:10}],()=>{}); },
 capoChiama(){ const p=G.p, T=STORIE_T.capo, k=capo(); if(!k||p.leader) return; segnaEvento(); stP().capoChiesto=G.t; const v=nome(k);
  recita([{c:k,t:stAcc((lune(k)<ETA_VECCHIO-6?T.chiamaG:T.chiama)(nome(p)),p),dur:11}],()=>modale(T.tit,T.testo(v)+stSapere(T.box),[{t:T.si,f:()=>avviaScena('cerimonia',partecipanti(),3.6,()=>STORIE.capoDiventa(k))},{t:T.no}])); },
 capoDiventa(k){ const p=G.p, T=STORIE_T.capo, v=nome(k), futuro=nome({...p,leader:true});
  recita([{c:k,t:T.nome(futuro),dur:8},{c:p,t:stAcc(T.giuro,p),dur:6}],()=>{ diventaAnziano(k); p.leader=true; p.convocato=false;
   const vice=G.cats.filter(c=>c.clan==='felce'&&c.rango==='guerriero'&&!c.ferito).sort((a,b)=>(b.vinte||0)-(a.vinte||0)||(b.amicizia||0)-(a.amicizia||0))[0]; G.vice=vice?vice.id:null;
   recita([{coro:partecipanti().filter(c=>c!==p).slice(0,7),coroT:nome(p)+'!',dur:4,f:()=>{ annuncia('⭐ '+nome(p)); scintille(p.x,p.y-20,'#ffe08a',18); }}],
    ()=>modale(T.fineTit,stAcc(T.fine(nome(p),v,vice?nome(vice):''),k),[{t:'⭐',f:()=>spirito(15,'rito')}])); }); },
 // ---------- la vecchiaia come ruolo: le tue storie ----------
 narra(){ const p=G.p, T=STORIE_T.narra, kit=stVicino(c=>c.clan==='felce'&&(c.rango==='gattino'||c.rango==='apprendista'),500); if(!kit) return; segnaEvento(); const S=stG(); S.narraT=G.t;
  const temi=[['caccia',p.prede||0],['battaglia',p.battaglie||0],['infanzia',(stP().mer||[]).length]].filter(x=>x[1]>0); if(!temi.length) temi.push(['caccia',1]);
  const [tipo,n]=temi[(S.narraN=(S.narraN||0)+1)%temi.length], testo=stAcc(T[tipo](n),p), primo=!S.narraBox; S.narraBox=true;
  const salva=abb=>{ (S.racconti=S.racconti||[]).push({di:nome(p),tipo,n,abb}); if(S.racconti.length>12) S.racconti.shift(); log('📜 '+(abb?T.fattoA:T.fattoF),'#e8d9a8'); spirito(abb?8:4,'tramanda'); if(typeof lezioneFatta==='function') try{ lezioneFatta(); }catch(e){} };
  recita([{c:kit,t:T.kit,dur:4}],()=>modale(T.tit,testo+'<br><br>'+T.come+(primo?stSapere(T.box):''),[{t:T.fedele,f:()=>salva(false)},{t:T.abbellita,f:()=>salva(true)}])); },
 eredita(){ const p=G.p, T=STORIE_T.eredita, a=anziano(), R=stG().racconti||[]; if(!a||!R.length) return; segnaEvento(); stP().eredita=true; const r=pick(R), n=r.abb?r.n*3+2:r.n;
  recita([{c:a,t:stAcc(T.intro(r.di),p),dur:6},{c:a,t:T[r.tipo](n),dur:8}],()=>{ parla(p,'💭 '+T.pensiero,6); spirito(5,'racconto'); }); },
};

// ---------- il regista: ogni due secondi sceglie, al più, una storia ----------
let stRaid=null, stBatt=0, stPrede=null;
setInterval(()=>{ if(typeof G==='undefined'||!G||!G.p||typeof recita!=='function') return; const p=G.p, S=stP(), W=stG(), l=lune(p), notte=stNotte();
 // cose che si notano soltanto: stagioni, conseguenze rimandate, fine di una battaglia
 if(!paused){ const s=stStagione(); if(W.stagione==null) W.stagione=s; else if(s!==W.stagione) STORIE.stagione(s);
  if(W.caproDopo&&G.t>W.caproDopo.t) STORIE.caproDopo();
  if(W.pittoreDopo&&G.t>W.pittoreDopo.t){ log(STORIE_T.pittore.dopo(W.pittoreDopo.n),'#e8d9a8'); W.pittoreDopo=null; }
  if(S.cuore&&!S.cuoreLasciato&&p.rango!=='gattino') STORIE.cuoreLascia();
  if(G.raid&&!stRaid){ stRaid=G.raid.bersaglio; stBatt=p.battaglie||0; }
  if(!G.raid&&stRaid){ const cl=stRaid; stRaid=null; if((p.battaglie||0)<=stBatt) W.sconfitta=G.t; else { const e=G.cats.find(c=>c.clan===cl&&c.amico&&c.pacificoFino==null); if(e&&!(W.oro&&G.t-W.oro<MOON*20)) setTimeout(()=>{ if(!paused&&!scena&&!recitaAtt) STORIE.oro(e); },9000); } }
 }
 if(stPrede==null||stPrede.p!==p) stPrede={p,n:p.prede||0};
 const consegna=(p.prede||0)-stPrede.n; stPrede.n=p.prede||0;
 if(typeof S.lepre==='object'&&S.lepre&&dist(p,S.lepre)<45&&storiaLibera(0)) return STORIE.lepreArrivo();
 // --- gattino ---
 if(p.rango==='gattino'){
  if(!paused&&!scena&&!recitaAtt&&!G.dentro&&!occupato()&&G.t-(S.merT??-99)>14&&(S.mer||[]).length<5){ const M=S.mer||[], ha=k=>M.includes(k); let k=null;
   if(!ha('riflesso')&&dist(p,L.pozza)<L.pozza.r+34) k='riflesso'; else if(notte>0.55&&!ha('stella')) k='stella'; else if(notte>0.3&&!ha('lucciola')&&Math.random()<0.25) k='lucciola'; else if(notte<0.05&&!ha('farfalla')&&Math.random()<0.12) k='farfalla'; else if(notte<0.05&&!ha('ombra')&&Math.random()<0.08) k='ombra';
   if(k) return STORIE.meraviglia(k); }
  if(!storiaLibera(20)||!nelCampo(p,30)) return;
  if(!S.cuoreChiesto&&l>=2) return (p.vite||1)>1&&W.cuore&&!S.cuoreTrovato?STORIE.cuoreRitrova():STORIE.cuore();
  if((p.vite||1)>1&&W.cuore&&!S.cuoreTrovato) return STORIE.cuoreRitrova();
  if(!S.madre&&l>=3&&stMadre()) return STORIE.madre1();
  if((p.vite||1)>1&&!S.eredita&&(W.racconti||[]).length&&l>=3&&anziano()) return STORIE.eredita();
  if(!S.voce&&notte>0.6) return STORIE.voce();
  if(!S.dente&&l>=4) return STORIE.dente();
  if(S.madre===1&&l>=5&&stMadre()) return STORIE.madre2();
  if(l>=5&&!(W.re&&G.t-W.re<MOON*14)&&Math.random()<0.2) return STORIE.re();
  if(G.t-(S.giocoT??-99)>26){ const k=['gara','sasso','imita','giro'].find(x=>!(S.giochi||[]).includes(x)); if(k) return STORIE.gioco(k); }
  return; }
 // --- apprendista e adulto ---
 if(S.voce===1&&p.rango==='apprendista'&&l>=7&&gatto(p.mentore)&&dist(gatto(p.mentore),p)<300&&storiaLibera(30)) return STORIE.voceSvela();
 if(W.kula===1&&(p.inventario||[]).includes('conchiglia')&&storiaLibera(5)){ const e=stVicino(c=>c.clan==='pietre'&&c.stato!=='fuga'&&c.stato!=='assalto'&&c.stato!=='caccia',110); if(e&&!ostileClan('pietre')) return STORIE.kula2(e); }
 if(consegna>=2&&nelCampo(p,0)&&!(W.giro&&G.t-W.giro<MOON*8)&&Math.random()<0.5&&storiaLibera(8)) return STORIE.giro();
 if(nelCampo(p,0)&&!p.leader&&capo()&&p.rango!=='gattino'&&p.rango!=='apprendista'&&storiaLibera(8)){ // le tappe verso la guida del clan non aspettano il silenzio lungo delle storie rare (correzione del 13 novembre 2026)
  const merito=p.rango==='guerriero'?((p.vinte||0)>=5||(p.battaglie||0)>=2):((p.cure||0)>=5);
  if(!p.vecchio&&!S.capoSogno&&l>=18) return STORIE.capoSogno();
  if(merito&&l>=28&&!(S.capoChiesto&&G.t-S.capoChiesto<MOON*8)) return STORIE.capoChiama(); }
 if(!storiaLibera(55)) return; const r=Math.random();
 if(p.vecchio){ if(!p.leader&&capo()&&nelCampo(p,0)&&!(S.capoChiesto&&G.t-S.capoChiesto<MOON*8)&&((p.vinte||0)>=5||(p.battaglie||0)>=2||(p.cure||0)>=5)) return STORIE.capoChiama(); // l'ultima occasione, anche da vecchi
  if(!W.araldo&&nelCampo(p,0)) return STORIE.araldo(); if(nelCampo(p,40)&&G.t-(W.narraT??-1e9)>MOON*2.5) return STORIE.narra(); return; }
 if(nelCampo(p,0)){
  if(stAdulto(p)&&!p.leader&&capo()){ const merito=p.rango==='guerriero'?((p.vinte||0)>=5||(p.battaglie||0)>=2):((p.cure||0)>=5); // vittorie o guarigioni, senza un conteggio severo
   if(!S.capoSogno&&l>=18) return STORIE.capoSogno();
   if(merito&&l>=28&&!(S.capoChiesto&&G.t-S.capoChiesto<MOON*8)) return STORIE.capoChiama(); }
  if((p.rango==='guerriero'||p.rango==='guaritore')&&l>=14&&p.compagno==null&&!G.attesaGattini){ const comp=G.cats.filter(c=>puoProporre(p,c)), liberi=comp.filter(c=>!impegno(c)); // nessuno con cui fare coppia: qualcuno cambia idea, oppure arriva un gatto da fuori
   if(!liberi.length){ const g=comp.find(c=>impegno(c)==='guerra'); if(g&&r<0.5) g.impegno=null; else if(!(W.solitario&&G.t-W.solitario<MOON*15)) return STORIE.solitario(); } }
  if(l>=8&&!(W.re&&G.t-W.re<MOON*14)&&r<0.03) return STORIE.re();
  if(stAdulto(p)&&!W.pittore&&l>=16&&r<0.05) return STORIE.pittore();
  if(stAdulto(p)&&!(W.capro&&G.t-W.capro<MOON*30)&&(p.spirito??60)<30&&W.sconfitta!=null&&G.t-W.sconfitta<MOON*3) return STORIE.capro();
  if(stAdulto(p)&&!(W.tregua&&G.t-W.tregua<MOON*40)&&stStagione()===1&&r<0.04) return STORIE.tregua();
  return; }
 if(stFuori(p)&&p.x<FX0){
  if(!W.kula&&l>=9&&!ostileClan('nebbia')&&r<0.06) return STORIE.kula1();
  if(!S.lepre&&l>=10&&r<0.035) return STORIE.lepre();
  if(!(W.erba&&G.t-W.erba<MOON*10)&&l>=7&&r<0.05) return STORIE.erba();
  if(!(W.eclissi&&G.t-W.eclissi<MOON*60)&&notte<0.05&&r<0.012) return STORIE.eclissi(); }
},2000);

// la tregua (dell'acqua, dell'eclissi, dell'araldo) ferma la crescita della tensione; d'inverno lo spirito sale il doppio
addEventListener('DOMContentLoaded',()=>{
 if(typeof tensione==='function'){ const o=tensione; tensione=function(cl,n,m){ if(n>0&&G&&G.treguaFino&&G.t<G.treguaFino) return; return o.apply(this,arguments); }; }
 if(typeof spirito==='function'){ const o=spirito; spirito=function(n,m){ return o.call(this,(n>0&&G&&stStagione()===3)?n*2:n,m); }; }
});

// quando il giocatore guida il clan, il suo vice parla per lui (capo() serve a molte battute del gioco); e un clan non resta mai senza guida
addEventListener('DOMContentLoaded',()=>{ if(typeof capo!=='function') return; const o=capo;
 capo=function(){ const k=o(); if(k||!G||!G.p||!G.p.leader) return k; return gatto(G.vice)||G.cats.filter(c=>c.clan==='felce'&&c.rango==='guerriero').sort((a,b)=>(b.vinte||0)-(a.vinte||0))[0]; }; });
setInterval(()=>{ if(typeof G==='undefined'||!G||!G.p||paused||scena||recitaAtt||G.raid) return; const p=G.p;
 if(p.leader){ if(!gatto(G.vice)||gatto(G.vice).rango!=='guerriero'){ const v=G.cats.filter(c=>c.clan==='felce'&&c.rango==='guerriero'&&!c.ferito).sort((a,b)=>(b.vinte||0)-(a.vinte||0))[0]; G.vice=v?v.id:null; } return; }
 if(!G.cats.some(c=>c.clan==='felce'&&c.leader)){ const c=gatto(G.vice)||G.cats.filter(c=>c.clan==='felce'&&c.rango==='guerriero'&&!c.ferito).sort((a,b)=>(b.vinte||0)-(a.vinte||0)||lune(b)-lune(a))[0]; // dopo la rinascita di un capo, o se il capo è caduto
  if(c){ c.leader=true; c.regina=false; stat(c); nuovoPuntoCampo(c); G.vice=null; log({it:'⭐ Il clan ha una nuova guida: ',en:'⭐ The clan has a new leader: ',fr:'⭐ Le clan a un nouveau guide : '}[LINGUA]+nome(c)+'.','#ffe08a'); } } },3000);

// ================== il quiz delle tradizioni ==================
// richiesta del 12 novembre 2026
//. Le risposte giuste sono usanze che il gioco mostra davvero (cerimonie, codice, riti).
// Ogni domanda: d = domanda, r = tre risposte, la prima è quella giusta (vengono mescolate).
const TRAD={
 it:{straniero:'Da noi è così. E da voi?',cucciolo:'Tu che sai tutto:',titS:n=>'💬 '+n,
  ok:n=>`«Allora è vero che il Clan della Felce conosce le sue usanze.» ${n} china la testa con rispetto.`,no:(n,g)=>`${n} piega la testa di lato: «Strano. A me avevano raccontato così: ${g}» Chiedi al tuo anziano, la prossima volta.`,
  okK:'«Lo sapevo che lo sapevi!» Il cucciolo corre a dirlo agli altri.',noK:g=>`Il cucciolo ci pensa su: «L’anziano dice un’altra cosa: ${g}»`,
  q:[{d:'Che cosa fa un guerriero la notte in cui riceve il suo nome?',r:['Veglia in silenzio, di guardia al campo','Dorme nella tana del capo','Va a caccia da solo fino all’alba']},
   {d:'Dove finisce il dente da latte di un gattino?',r:['Davanti alla tana di un topo','Sotto la Roccia Alta','Nel fiume, con la corrente']},
   {d:'A chi va la preda di un cacciatore?',r:['Al mucchio: prima si nutre il clan','A chi l’ha presa, subito','Al capo, che la divide']},
   {d:'Chi dà il nome a un guaritore?',r:['Gli antenati stellati, in sogno, al Lago d’Argento','Il capo, dalla Roccia Alta','Il guaritore più vecchio']},
   {d:'Che cosa fa un apprendista alla fine della sua cerimonia?',r:['Tocca il naso del suo mentore','Sale sulla Roccia Alta','Riceve una preda dal capo']},
   {d:'Chi comanda nel giorno alla rovescia?',r:['Il più piccolo del clan','L’anziano','Il guerriero più vittorioso']},
   {d:'Che cosa dice il codice sui gattini, in battaglia?',r:['Nessuno fa del male ai gattini','Combattono in ultima fila','Portano i messaggi']},
   {d:'Dove si saluta un compagno caduto?',r:['Alla Roccia Alta, tutti insieme','Al Lago d’Argento, di notte','Nella tana del guaritore']}]},
 en:{straniero:'That is our way. And yours?',cucciolo:'You know everything:',titS:n=>'💬 '+n,
  ok:n=>`“So it is true that the Fern Clan knows its own customs.” ${n} bows with respect.`,no:(n,g)=>`${n} tilts their head: “Strange. I was told this: ${g}” Ask your elder, next time.`,
  okK:'“I knew you knew!” The kit runs off to tell the others.',noK:g=>`The kit thinks it over: “The elder says something else: ${g}”`,
  q:[{d:'What does a warrior do on the night of receiving a name?',r:['Keeps vigil in silence, guarding the camp','Sleeps in the leader’s den','Hunts alone until dawn']},
   {d:'Where does a kit’s milk tooth end up?',r:['In front of a mouse’s hole','Under Tall Rock','In the river, with the current']},
   {d:'Who gets a hunter’s prey?',r:['The pile: the clan is fed first','Whoever caught it, at once','The leader, who shares it out']},
   {d:'Who gives a healer their name?',r:['The starry ancestors, in a dream, at Silver Lake','The leader, from Tall Rock','The oldest healer']},
   {d:'What does an apprentice do at the end of the ceremony?',r:['Touches the mentor’s nose','Climbs Tall Rock','Receives prey from the leader']},
   {d:'Who gives the orders on upside-down day?',r:['The smallest of the clan','The elder','The most victorious warrior']},
   {d:'What does the code say about kits, in battle?',r:['Nobody harms a kit','They fight in the back row','They carry messages']},
   {d:'Where is a fallen clanmate bidden farewell?',r:['At Tall Rock, all together','At Silver Lake, by night','In the healer’s den']}]},
 fr:{straniero:'Chez nous, c’est ainsi. Et chez vous ?',cucciolo:'Toi qui sais tout :',titS:n=>'💬 '+n,
  ok:n=>`« C’est donc vrai que le Clan de la Fougère connaît ses coutumes. » ${n} incline la tête avec respect.`,no:(n,g)=>`${n} penche la tête : « Étrange. On m’avait raconté ceci : ${g} » Demande à ton ancien, la prochaine fois.`,
  okK:'« Je savais que tu savais ! » Le chaton court le dire aux autres.',noK:g=>`Le chaton réfléchit : « L’ancien dit autre chose : ${g} »`,
  q:[{d:'Que fait un guerrier la nuit où il reçoit son nom ?',r:['Il veille en silence, de garde au camp','Il dort dans la tanière du chef','Il chasse sans personne jusqu’à l’aube']},
   {d:'Où finit la dent de lait d’un chaton ?',r:['Devant le trou d’une souris','Sous la Haute Roche','Dans la rivière, au fil du courant']},
   {d:'À qui va la proie d’un chasseur ?',r:['Au tas : on nourrit d’abord le clan','À celui qui l’a prise, tout de suite','Au chef, qui la partage']},
   {d:'Qui donne son nom à un guérisseur ?',r:['Les ancêtres étoilés, en rêve, au Lac d’Argent','Le chef, depuis la Haute Roche','Le plus vieux guérisseur']},
   {d:'Que fait un apprenti à la fin de sa cérémonie ?',r:['Il touche le museau de son mentor','Il monte sur la Haute Roche','Il reçoit une proie du chef']},
   {d:'Qui commande le jour à l’envers ?',r:['Le plus petit du clan','L’ancien','Le guerrier le plus victorieux']},
   {d:'Que dit le code sur les chatons, à la bataille ?',r:['Personne ne fait de mal aux chatons','Ils combattent au dernier rang','Ils portent les messages']},
   {d:'Où dit-on adieu à un compagnon tombé ?',r:['À la Haute Roche, tous ensemble','Au Lac d’Argent, la nuit','Dans la tanière du guérisseur']}]}}[LINGUA];
// chi: il gatto che chiede; tipo: 'straniero' o 'cucciolo'; fine(giusto): che cosa succede dopo
function quizTradizioni(chi,tipo,fine){ const W=stG(), fatte=W.trad=W.trad||[]; let i=TRAD.q.findIndex((_,j)=>!fatte.includes(j)); if(i<0){ fatte.length=0; i=Math.floor(Math.random()*TRAD.q.length); } fatte.push(i);
 const q=TRAD.q[i], n=nome(chi), intro=tipo==='straniero'?TRAD.straniero:TRAD.cucciolo; segnaEvento(); parla(chi,intro+' '+q.d,9); mettiAFuoco(chi,3000);
 modale(TRAD.titS(n),`«${intro} <b>${q.d}</b>»`,shuffle([0,1,2]).map(k=>({t:q.r[k],f:()=>{ const ok=k===0;
  if(tipo==='straniero'){ if(ok){ log('💬 '+TRAD.ok(n),'#c8f0a8'); tensione(chi.clan,-6); chi.conosciuto=(chi.conosciuto||0)+1; spirito(4,'racconto'); } else log('💬 '+TRAD.no(n,q.r[0]+'.'),'#e8d9a8'); }
  else { if(ok){ log('🐾 '+TRAD.okK,'#c8f0a8'); spirito(3,'tramanda'); if(typeof lezioneFatta==='function') lezioneFatta(); } else log('🐾 '+TRAD.noK(q.r[0]+'.'),'#e8d9a8'); }
  fine&&fine(ok); }}))); }
// dopo aver raccontato una sua usanza, lo straniero chiede la nostra (due volte su tre)
addEventListener('DOMContentLoaded',()=>{ if(typeof parlaStraniero!=='function'||typeof fineIncontro!=='function') return; const oP=parlaStraniero, oF=fineIncontro; let chiede=null;
 parlaStraniero=function(c){ chiede=Math.random()<0.67?c:null; return oP.apply(this,arguments); };
 fineIncontro=function(c){ if(chiede&&chiede===c&&G&&G.cats.includes(c)){ chiede=null; return quizTradizioni(c,'straniero',()=>oF(c)); } return oF.apply(this,arguments); }; });

// ================== dopo la prima partita completa (12 novembre 2026) ==================
const VITA2={
it:{poppa:['I cuccioli si stringono contro di te e succhiano, impastando con le zampine. Fai le fusa senza accorgertene.','Uno si addormenta con il muso ancora nel tuo pelo. Gli altri litigano piano per il posto migliore.','Li lavi uno per uno, dalla testa alla coda. Sanno di latte e di muschio.'],
 nomeIntro:(n,f)=>n===1?`Clan della Felce, guardate! ${f?'Questa piccola ha':'Questo piccolo ha'} visto due lune. È tempo che il clan ${f?'la':'lo'} conosca per nome.`:`Clan della Felce, guardate! Questi piccoli hanno visto due lune. È tempo che il clan li conosca per nome.`,nomeTit:'🐾 Il rito del nome',nomeScegli:(i,f)=>i<0?`${f?'La tua cucciola':'Il tuo cucciolo'} ti guarda. Con quale nome ${f?'la':'lo'} presenti al clan?`:`${f?['La prima','La seconda','La terza'][i]||'La prossima':'Il '+(['primo','secondo','terzo'][i]||'prossimo')} ${f?'cucciola':'cucciolo'} ti guarda. Con quale nome ${f?'la':'lo'} presenti al clan?`,
 nomeDato:n=>`Il clan ti conosce: sei ${n}.`,nomeFine:'Uno alla volta, i guerrieri toccano con il naso la fronte dei piccoli. Da oggi non sono più soltanto tuoi: sono del clan.',
 nomeBox:['Dare un nome davanti a tutti','Nell’antica Atene, pochi giorni dopo la nascita, il neonato veniva portato di corsa intorno al focolare di casa: era la festa delle Anfidromie, con cui la famiglia lo accoglieva; il nome gli veniva dato allora o al decimo giorno, davanti a parenti e amici. Platone vi allude nel <i>Teeteto</i> (160e).'],
 raduno:n=>`Sotto la Roccia Alta, tutto il Clan della Felce si raduna intorno a ${n}. Nessuno parla.`,capo:(n,l,pr,b)=>`${n} ha camminato con noi per ${l} lune. Ha portato ${pr} prede al mucchio e ha difeso il clan ${b} volte. Ciò che ha dato resta qui.`,
 figli:['Mi hai insegnato a cacciare. Caccerò anche per te.','Racconterò le tue storie ai miei piccoli.','Guarderò le stelle, e saprò qual è la tua.'],compagno:'Abbiamo diviso il muschio e le lune. Aspettami tra le stelle.',
 miao:'Poi, uno dopo l’altro, tutti i gatti del clan alzano il muso al cielo. Un solo, lungo miagolio sale dal campo, e il bosco tace per ascoltarlo.',stelle:'Quando il canto si spegne, in cielo c’è una stella in più.'},
en:{poppa:['The kits press against you and suckle, kneading with their tiny paws. You purr without noticing.','One falls asleep with its muzzle still in your fur. The others squabble softly over the best spot.','You wash them one by one, from head to tail. They smell of milk and moss.'],
 nomeIntro:(n)=>n===1?`Fern Clan, look! This little one has seen two moons. It is time the clan knew them by name.`:`Fern Clan, look! These little ones have seen two moons. It is time the clan knew them by name.`,nomeTit:'🐾 The naming rite',nomeScegli:(i)=>`${i<0?'Your':'The '+(['first','second','third'][i]||'next')} kit looks up at you. By what name do you present this kit to the clan?`,
 nomeDato:n=>`The clan knows you: you are ${n}.`,nomeFine:'One at a time, the warriors touch the little ones’ foreheads with their noses. From today they are no longer only yours: they belong to the clan.',
 nomeBox:['Naming before everyone','In ancient Athens, a few days after birth, the newborn was carried at a run around the household hearth: this was the feast of the Amphidromia, by which the family welcomed the child; the name was given then or on the tenth day, before relatives and friends. Plato alludes to it in the <i>Theaetetus</i> (160e).'],
 raduno:n=>`Beneath Tall Rock, the whole Fern Clan gathers around ${n}. Nobody speaks.`,capo:(n,l,pr,b)=>`${n} walked with us for ${l} moons, brought ${pr} prey to the pile and defended the clan ${b} times. What was given stays here.`,
 figli:['You taught me to hunt. I will hunt for you too.','I will tell your stories to my own kits.','I will look at the stars, and I will know which one is yours.'],compagno:'We shared the moss and the moons. Wait for me among the stars.',
 miao:'Then, one after another, every cat of the clan lifts its muzzle to the sky. A single, long cry rises from the camp, and the forest falls silent to hear it.',stelle:'When the song dies away, there is one more star in the sky.'},
fr:{poppa:['Les chatons se serrent contre toi et tètent, en pétrissant de leurs petites pattes. Tu ronronnes sans t’en rendre compte.','L’un d’eux s’endort, le museau encore dans ton poil. Les autres se disputent doucement la meilleure place.','Tu les laves un par un, de la tête à la queue. Ils sentent le lait et la mousse.'],
 nomeIntro:(n,f)=>n===1?`Clan de la Fougère, regardez ! ${f?'Cette petite':'Ce petit'} a vu deux lunes. Il est temps que le clan ${f?'la':'le'} connaisse par son nom.`:`Clan de la Fougère, regardez ! Ces petits ont vu deux lunes. Il est temps que le clan les connaisse par leur nom.`,nomeTit:'🐾 Le rite du nom',nomeScegli:(i,f)=>i<0?`${f?'Ta petite':'Ton petit'} lève les yeux vers toi. Sous quel nom ${f?'la':'le'} présentes-tu au clan ?`:`${f?(['La première','La deuxième','La troisième'][i]||'La prochaine')+' chatonne':'Le '+(['premier','deuxième','troisième'][i]||'prochain')+' chaton'} lève les yeux vers toi. Sous quel nom ${f?'la':'le'} présentes-tu au clan ?`,
 nomeDato:n=>`Le clan te connaît : tu es ${n}.`,nomeFine:'Un par un, les guerriers touchent du museau le front des petits. Désormais, ils ne sont plus seulement à toi : ils sont au clan.',
 nomeBox:['Donner un nom devant tous','Dans l’Athènes antique, quelques jours après la naissance, on portait le nouveau-né en courant autour du foyer de la maison : c’était la fête des Amphidromies, par laquelle la famille l’accueillait ; le nom lui était donné alors ou le dixième jour, devant parents et amis. Platon y fait allusion dans le <i>Théétète</i> (160e).'],
 raduno:n=>`Sous la Haute Roche, tout le Clan de la Fougère se rassemble autour de ${n}. Personne ne parle.`,capo:(n,l,pr,b)=>`${n} a marché avec nous pendant ${l} lunes, a apporté ${pr} proies au tas et a défendu le clan ${b} fois. Ce qui a été donné reste ici.`,
 figli:['Tu m’as appris à chasser. Je chasserai aussi pour toi.','Je raconterai tes histoires à mes petits.','Je regarderai les étoiles, et je saurai laquelle est la tienne.'],compagno:'Nous avons partagé la mousse et les lunes. Attends-moi parmi les étoiles.',
 miao:'Puis, l’un après l’autre, tous les chats du clan lèvent le museau vers le ciel. Un seul et long miaulement monte du camp, et la forêt se tait pour l’écouter.',stelle:'Quand le chant s’éteint, il y a une étoile de plus dans le ciel.'}}[LINGUA];

// --- il ramo verde e le tregue: nessun assalto al campo, nessuno attacca il giocatore ---
const inTregua=()=>!!(typeof G!=='undefined'&&G&&G.treguaFino&&G.t<G.treguaFino);
setInterval(()=>{ if(typeof G==='undefined'||!G||!G.p) return;
 if(inTregua()){ G.prossimoAssalto=Math.max(G.prossimoAssalto||0,G.t+MOON);
  for(const c of G.cats){ if(c.clan==='felce') continue; if(c.stato==='assalto'){ c.stato='fuga'; } else if(c.stato==='caccia'&&c.bersaglio===0){ c.stato='pattuglia'; if(typeof puntoNemico==='function') puntoNemico(c); } } }
 else if(G.treguaAvviso&&G.treguaFino&&G.t>=G.treguaFino){ G.treguaAvviso=false; log(STORIE_T.araldo.fineTregua,'#e8d9a8'); } },500);
addEventListener('DOMContentLoaded',()=>{ if(typeof colpisci!=='function') return; const o=colpisci; colpisci=function(a,b){ if(b===G.p&&a.clan!=='felce'&&inTregua()) return; return o.apply(this,arguments); }; });

// --- la nascita si vede, dentro la nursery; i cuccioli seguono la madre per due lune e si riconoscono dal nome ---
const cuccioliDi=id=>G.cats.filter(c=>c.rango==='gattino'&&c.mamma===id&&c.segueFino>G.t);
addEventListener('DOMContentLoaded',()=>{
 if(typeof nascita==='function'){ const o=nascita; nascita=function(){ const p=G.p, prima=new Set(G.cats), madreIo=p.sesso==='f', d=L.nursery, eff0=effetto;
  if(madreIo) effetto=function(t,dur,cb){ effetto=eff0; return eff0(t,dur,()=>{ G.dentro='nursery'; p.uscito=null; p.guida=null; if(window.R3D){ R3D.cam3.yaw=Math.PI; R3D.cam3.init=false; } cb&&cb(); const nati=G.cats.filter(c=>!prima.has(c)), dx=(d.x-30)-p.x, dy=(d.y+6)-p.y; p.x+=dx; p.y+=dy; if(nati[0]){ nati[0].x+=dx; nati[0].y+=dy; } nati.slice(1).forEach((c,i)=>{ c.x=p.x+4+i*11; c.y=p.y+13; }); }); }; // di fianco al focolare, con spazio per la telecamera; i fratellini accanto // la madre partorisce dentro la tana, e ci resta: prima veniva buttata fuori a metà scena
  try{ o.apply(this,arguments); } finally { effetto=eff0; }
  const kits=G.cats.filter(c=>!prima.has(c)&&c.figlio), mid=madreIo?0:p.compagno; kits.forEach(k=>{ k.mamma=mid; k.segueFino=G.t+MOON*2; });
  G.cucciolata={ids:kits.map(k=>k.id),t:G.t,nomi:false}; if(window.suonoMiao) setTimeout(()=>suonoMiao('cucciolo'),3200); }; }
 if(typeof aggiornaFelce==='function'){ const o=aggiornaFelce; aggiornaFelce=function(c,dt){
  if(c.rango==='gattino'&&c.segueFino>G.t&&c.stato==='campo'&&!c.ferito&&!(G.addio&&G.addio.includes(c.id))){ const p=G.p, m=c.mamma===0?p:gatto(c.mamma);
   if(m&&(m!==p||nelCampo(p,40))){ const F=cuccioliDi(c.mamma), i=F.indexOf(c), dir=m.flip||1;
    let tx=m.x-dir*(20+Math.floor(i/2)*14), ty=m.y+((i%2)?11:-11);
    if(c.poppaFino>G.t){ tx=m.x+(i-(F.length-1)/2)*13; ty=m.y+9; }
    if(m===p&&G.dentro&&G.dentro!=='nursery'){ const d=L[G.dentro]; tx=d.x+(i-1)*14; ty=d.y+d.r+20; } // aspettano fuori dalle altre tane
    const dd=Math.hypot(tx-c.x,ty-c.y); if(c.elev) c.elev=0; c.dorme=false;
    if(dd>9){ c.posa=null; muovi(c,tx,ty,dd>90?170:95,dt); } else { c.flip=m.x<c.x?-1:1; setPosa(c,c.poppaFino>G.t?'beve':(m.posa==='dorme'||m.dorme?'dorme':'siede'),0.4); }
    return; } }
  return o(c,dt); }; }
});
// i propri cuccioli hanno sempre l'etichetta con il nome
if(typeof etichettaUtile==='function'){ const o=etichettaUtile; etichettaUtile=function(c){ return (c.figlio&&c.rango==='gattino'&&c!==G.p)||o(c); }; }

// --- l'allattamento, il rito del nome, l'addio ---
STORIE.allatta=function(){ const p=G.p, K=cuccioliDi(0); if(!K.length) return; segnaEvento(); const W=stG(); W.allattaT=G.t; W.allattaN=(W.allattaN||0)+1;
 p.flip=1; p.vx=p.vy=0; K.forEach((k,i)=>{ k.poppaFino=G.t+7; k.x=p.x+(i-(K.length-1)/2)*13+4; k.y=p.y+10; k.vx=k.vy=0; k.flip=-1; setPosa(k,'beve',6.4); });
 recita([{t:VITA2.poppa[W.allattaN%VITA2.poppa.length],scena:['dorme',[p,...K],6],dur:6.2}],()=>{ spirito(3,'compagnia'); p.sete=Math.max(0,p.sete-6); }); }; // i cuccioli sono attori della scena: nei primi piani chi non lo è viene nascosto
STORIE.battesimo=function(){ const p=G.p, C=G.cucciolata, K=(C?C.ids:[]).map(gatto).filter(k=>k&&k.rango==='gattino'); if(!C) return; C.nomi=true; if(!K.length) return; segnaEvento();
 const k0=p.leader?p:capo(), voce=k0||p;
 const fine=()=>{ K.forEach(k=>{ k.segueFino=0; }); modale(VITA2.nomeTit,VITA2.nomeFine+stSapere(VITA2.nomeBox),[{t:'🐾',f:()=>spirito(10,'rito')}]); };
 const uno=i=>{ if(i>=K.length) return fine(); const k=K[i], liberi=shuffle(prefissiPer(k.sesso).filter(x=>!(G.usati||[]).includes(x))).slice(0,2), scelte=[k.prefisso,...liberi];
  mettiAFuoco(k,4000); modale(VITA2.nomeTit,VITA2.nomeScegli(K.length===1?-1:i,k.sesso==='f'),scelte.map(pr=>({t:nome({...k,prefisso:pr}),f:()=>{ if(pr!==k.prefisso){ if(typeof liberaNome==='function') liberaNome(k); k.prefisso=pr; (G.usati=G.usati||[]).push(pr); }
   recita([{c:voce,t:VITA2.nomeDato(nome(k)),dur:4},{coro:partecipanti().filter(c=>c!==p&&c!==k).slice(0,7),coroT:nome(k)+'!',dur:3.5,f:()=>scintille(k.x,k.y-14,'#ffe08a',12)}],()=>uno(i+1)); }}))); };
 avviaScena('cerimonia',[...new Set([...partecipanti(),...K])],3.6,()=>{ const R=L.roccia; K.forEach((k,i)=>{ k.x=R.x+(i-(K.length-1)/2)*20; k.y=R.y+R.r+52; k.vx=k.vy=0; k.segueFino=0; k.attesa=90; k.tx=k.x; k.ty=k.y; setPosa(k,'siede',90); });
  recita([{c:voce,t:VITA2.nomeIntro(K.length,K.length===1&&K[0].sesso==='f'),dur:8}],()=>uno(0)); }); };
// l'addio: tutto il clan sotto la Roccia Alta, i figli davanti, e un grande miagolio
addEventListener('DOMContentLoaded',()=>{ if(typeof fineVita!=='function'||typeof rinascita!=='function') return;
 fineVita=function(){ const p=G.p, V=TESTI_LEGG.vita, R=L.roccia; G.riposoFinale={t:G.t}; p.guida=null; p.caccia=null; p.anim=null; p.sopra=false; p.elev=0;
  modale(V.tit,V.sonno(nome(p)),[{t:'🕯️',f:()=>{ let figli=[], comp=null, clan=[];
   didascalia.classList.add('alto'); // durante l'addio la didascalia sta in alto, per non coprire il clan
   passaggio(()=>{ G.dentro=null; p.x=R.x; p.y=R.y+R.r+46; p.vx=p.vy=0; p.flip=1; setPosa(p,'dorme',300); if(window.R3D){ R3D.cam3.yaw=Math.PI; R3D.cam3.pitch=0.5; R3D.cam3.dist=4.6; R3D.cam3.manuale=1e12; R3D.cam3.init=false; }
    clan=G.cats.filter(c=>c.clan==='felce'); figli=clan.filter(c=>c.figlio); comp=gatto(p.compagno); const primi=[...figli,...(comp&&!figli.includes(comp)?[comp]:[])], altri=clan.filter(c=>!primi.includes(c)); G.addio=clan.map(c=>c.id);
    const metti=(L2,r0)=>L2.forEach((c,i)=>{ const n=L2.length, a=Math.PI*(0.12+0.76*(n>1?i/(n-1):0.5)); c.x=p.x+Math.cos(a)*r0*1.5; c.y=p.y+14+Math.sin(a)*r0*0.75; c.vx=c.vy=0; c.elev=0; c.stato='campo'; c.ferito=false; c.attesa=600; c.tx=c.x; c.ty=c.y; c.flip=c.x<p.x?1:-1; setPosa(c,'siede',600); });
    metti(primi,34); metti(altri.slice(0,9),62); metti(altri.slice(9),88); });
   setTimeout(()=>{ const k=capo(), canta=()=>{ for(const c of clan){ setPosa(c,'canta',9); } if(window.suonoMiaoGrande) suonoMiaoGrande(); clan.forEach((c,i)=>setTimeout(()=>{ if(G&&G.cats.includes(c)) testo(c.x,c.y-44*scala(c),pick(['♪','♫','✦']),'#fff3c0',13,-18,2.2); },i*260)); };
    recita([{t:VITA2.raduno(nome(p)),dur:6},k?{c:k,t:VITA2.capo(nome(p),lune(p),p.prede||0,p.battaglie||0),dur:10}:null,
     ...figli.slice(0,3).map((f,i)=>({c:f,t:VITA2.figli[i],dur:5.5})),comp?{c:comp,t:VITA2.compagno,dur:6}:null,
     {t:VITA2.miao,dur:9.5,f:canta},{t:VITA2.stelle,dur:5.5}],
     ()=>modale(V.onore,V.discorso(k&&k!==p?nome(k):'',nome(p),lune(p),p.prede||0,p.battaglie||0)+box(V.box[0],V.box[1]),[{t:V.rinasci,f:()=>{ for(const c of G.cats) if(c.clan==='felce'){ c.attesa=rnd(0,3); c.posa=null; c.posaFine=0; } G.addio=null; didascalia.classList.remove('alto'); if(window.R3D) R3D.cam3.manuale=0; rinascita(); }}])); },1600); }}]); };
});
// il regista delle cose di famiglia
setInterval(()=>{ if(typeof G==='undefined'||!G||!G.p||typeof recita!=='function') return; const p=G.p, W=stG(), C=G.cucciolata;
 if(C&&!C.nomi&&G.t>=C.t+MOON*2&&nelCampo(p,40)&&storiaLibera(6)) return STORIE.battesimo();
 if(p.sesso==='f'&&p.allatta&&G.t<p.allatta&&nelCampo(p,20)&&!p.guida&&cuccioliDi(0).length&&G.t-(W.allattaT??-99)>MOON*0.4&&storiaLibera(18)&&(p.vel||0)<8) return STORIE.allatta(); },2500);

// ================== incontri nel bosco con gatti di altri clan ==================
// richiesta del 12 novembre 2026
//. Nel nostro bosco, fuori dal campo, ogni tanto arriva un gatto della Nebbia o delle Pietre: una volta su due viene in pace
// (è la visita dello straniero che esisteva già), una volta su due ti sbarra la strada per una preda.
const VIAND={
 it:{soffio:'Ffff! Questa preda l’ho fiutata prima io!',tit:n=>'😾 '+n,testo:(n,cl)=>`${n}, del ${cl}, è entrat{x} nel nostro bosco a caccia. Ti sbarra il passo con il pelo ritto.`,scaccia:'⚔️ Scacciarl{x}',parla:'💬 Provare a parlare',passa:'Lasciarl{x} passare',
  calmo:n=>`${n} abbassa il pelo, poco alla volta. «…Hai ragione. La fame fa dire sciocchezze.»`,no:n=>`${n} non ascolta: ti salta addosso!`,via:n=>`${n} afferra un topo e sparisce verso il fiume. Una preda in meno per il clan.`},
 en:{soffio:'Hsss! I scented this prey first!',tit:n=>'😾 '+n,testo:(n,cl)=>`${n}, of the ${cl}, has come hunting in our forest and blocks your way, fur on end.`,scaccia:'⚔️ Drive {x} off',parla:'💬 Try to talk',passa:'Let {x} pass',
  calmo:n=>`${n}’s fur settles, little by little. “…You are right. Hunger makes a cat talk nonsense.”`,no:n=>`${n} does not listen, and leaps at you!`,via:n=>`${n} grabs a mouse and vanishes towards the river. One prey fewer for the clan.`},
 fr:{soffio:'Fffh ! Cette proie, je l’ai flairée avant toi !',tit:n=>'😾 '+n,testo:(n,cl)=>`${n}, du ${cl}, est venu chasser dans notre forêt et te barre le passage, le poil hérissé.`,scaccia:'⚔️ Le chasser',parla:'💬 Essayer de parler',passa:'Le laisser passer',
  calmo:n=>`Le poil de ${n} retombe, peu à peu. « …Tu as raison. La faim fait dire des bêtises. »`,no:n=>`${n} n’écoute pas et te saute dessus !`,via:n=>`${n} attrape une souris et disparaît vers la rivière. Une proie de moins pour le clan.`}}[LINGUA];
function viandante(){ const p=G.p, pool=G.cats.filter(c=>c.clan!=='felce'&&!c.leader&&c.rango!=='gattino'&&!c.ferito&&c.stato==='pattuglia'&&!ostileClan(c.clan)); if(!pool.length) return false;
 const c=pick(pool), a=Math.random()*6.283; let x=p.x+Math.cos(a)*250, y=p.y+Math.sin(a)*250; x=clamp(x,40,FX0-40); y=clamp(y,40,WH-40); if(acqua(x,y)||inCampo(x,y,60)) return false; c.x=x; c.y=y; c.vx=c.vy=0;
 segnaEvento(); stG().viandT=G.t;
 if(c.amico||Math.random()<0.5){ c.stato='pattuglia'; c.amicoPrima=c.amico; c.amico=true; c.pacificoFino=G.t+MOON*0.5; corteggia={id:c.id,t:0,cuore:99,tipo:'straniero'}; return true; } // viene in pace: la visita dello straniero (js/leggende.js)
 G.viandante={id:c.id,t:G.t}; c.soffia=1; return true; }
function incontroViandante(c){ const p=G.p, n=nome(c), acc=t=>stAcc(t,c); G.viandante=null; c.vx=c.vy=0; c.flip=p.x<c.x?-1:1; p.flip=-c.flip; p.guida=null; p.caccia=null; parla(c,VIAND.soffio,5); mettiAFuoco(c,3000); if(window.suonoMiao) suonoMiao('allarme');
 const casa=()=>{ c.stato='pattuglia'; if(typeof puntoNemico==='function') puntoNemico(c); };
 modale(VIAND.tit(n),acc(VIAND.testo(n,CLAN[c.clan].nome)),[{t:acc(VIAND.scaccia),f:()=>lottaNemico(c)},
  {t:VIAND.parla,f:()=>{ if(Math.random()<0.5+((p.spirito??60)>=70?0.2:0)){ log('💬 '+VIAND.calmo(n),'#c8f0a8'); parla(c,pick(CONV.calma),4); c.conosciuto=(c.conosciuto||0)+1; tensione(c.clan,-4); c.amicoPrima=c.amico; c.amico=true; c.pacificoFino=G.t+MOON*0.6; setTimeout(()=>{ if(G&&G.cats.includes(c)&&!paused&&!scena) parlaStraniero(c); },1800); } else { const t=pick(CONV.aggr); parla(c,t,4); if(window.suonoMiao) suonoMiao('allarme'); log('😾 '+VIAND.no(n)+' «'+t+'»','#ff9a8a'); setTimeout(()=>{ if(G&&G.cats.includes(c)&&!paused&&!scena) lottaNemico(c); },1500); } }},
  {t:acc(VIAND.passa),f:()=>{ log('😾 '+VIAND.via(n),'#ffb0a0'); G.cibo=Math.max(0,G.cibo-1); casa(); }}]); }
addEventListener('DOMContentLoaded',()=>{ if(typeof aggiornaNemico!=='function') return; const o=aggiornaNemico;
 aggiornaNemico=function(c,dt){ const v=G.viandante; if(v&&v.id===c.id){ const p=G.p;
   if(G.t-v.t>30||G.raid||G.dentro||inTregua()||!stFuori(p)){ G.viandante=null; c.stato='pattuglia'; if(typeof puntoNemico==='function') puntoNemico(c); return o(c,dt); }
   if(dist(c,p)>38){ c.posa=null; muovi(c,p.x,p.y,110,dt); } else if(!paused&&!scena&&!recitaAtt) incontroViandante(c); return; }
  return o(c,dt); }; });
setInterval(()=>{ if(typeof G==='undefined'||!G||!G.p||typeof storiaLibera!=='function') return; const p=G.p, W=stG();
 if(p.rango==='gattino'||G.viandante||inTregua()||!stFuori(p)||p.x>=FX0) return; if(G.t-(W.viandT??-1e9)<MOON*1.2) return;
 if(storiaLibera(40)&&Math.random()<0.35) viandante(); },3000);

// ================== conversazioni più varie, e coerenti ==================
// correzione del 12 novembre 2026
//. Le usanze nuove dei clan sono inventate, ma riprendono istituzioni studiate dagli antropologi (metà esogamiche, parentele
// di scherzo e di evitazione, commercio muto, dono che dà prestigio, classi d'età, servizio per la sposa, parole proibite a caccia, duelli di canto).
const CONV={
 it:{aggr:['Parlare? Con chi caccia nel bosco degli altri? Fuori gli artigli!','Le parole le tenga chi non ha denti. Ffff!','Ho sentito abbastanza. Difenditi!','Risparmia il fiato: ti servirà per scappare.','Non tratto con chi puzza di felce!','Silenzio! L’ultimo che mi ha parlato così zoppica ancora.'],
  calma:['…Va bene. Ritiro gli artigli. Ma parla in fretta.','Hm. Ci vuole coraggio, a parlare invece di graffiare. Ti ascolto.','Nessuno me l’aveva mai chiesto. Siediti, ma a distanza.','Basta litigare, per oggi. Dimmi.'],
  rifiuta:n=>`😾 ${n} non vuole sentire ragioni.`,accetta:n=>`💬 ${n} abbassa il pelo: per ora niente artigli.`,
  fine:['«Le vostre usanze sono diverse dalle nostre. Ed è giusto così: ogni clan ha le sue.»','«Strano clan, il vostro. Ma non più strano del mio, immagino.»','«Ci penserò stanotte, a quello che fate voi.»','«Adesso sai una cosa di noi. La prossima volta me ne dirai una di voi.»'],
  arriva:[(n,cl)=>`${n}, del ${cl}, esce dagli alberi. Non soffia: ti guarda con prudenza e curiosità.`,(n,cl)=>`${n}, del ${cl}, ti aspetta su un sasso, la coda ferma: non cerca guai.`,(n,cl)=>`Un fruscio tra le felci: è ${n}, del ${cl}. Alza una zampa, piano, come per dire «pace».`],
  nebbia:['«Da noi il clan è diviso in due metà, quelli dell’Alba e quelli del Tramonto. Chi è dell’Alba può prendere compagno soltanto al Tramonto: così ogni famiglia ha parenti dall’altra parte.»',
   '«Con i fratelli di mia madre posso scherzare e rubare loro la preda di bocca. Con la madre della mia compagna non posso nemmeno incrociare lo sguardo. Da voi si scherza con tutti?»',
   '«Quando la nebbia è fitta lasciamo delle prede sul confine e ci ritiriamo. Chi passa lascia qualcosa in cambio e se ne va. Nessuno vede nessuno, e nessuno imbroglia.»',
   '«Il più onorato tra noi è quello che ha regalato di più. Alla festa d’autunno il capo dona tutte le sue prede: per questo è capo.»'],
  pietre:['«I nostri piccoli crescono a schiere: tutti i nati nella stessa stagione sono fratelli per la vita, e diventano guerrieri insieme, lo stesso giorno.»',
   '«Chi vuole una compagna va a cacciare per la famiglia di lei per quattro lune. Soltanto dopo può chiederla. Da voi basta strofinarsi il muso?»',
   '«Certe parole non si dicono a caccia. Il topo lo chiamiamo “il piccolo grigio”, la volpe “quella dalla coda”. Se li chiami per nome, ti sentono.»',
   '«Quando due dei nostri litigano non si battono: cantano. Ognuno canta i difetti dell’altro davanti a tutti, e vince chi fa ridere di più.»']},
 en:{aggr:['Talk? With one who hunts in another clan’s forest? Claws out!','Words are for those without teeth. Hsss!','I have heard enough. Defend yourself!','Save your breath: you will need it to run.','I do not bargain with anything that reeks of fern!','Silence! The last one who spoke to me like that still limps.'],
  calma:['…All right. Claws in. But talk fast.','Hm. It takes courage to talk instead of scratching. I am listening.','Nobody ever asked me that before. Sit, but keep your distance.','Enough quarrelling for today. Speak.'],
  rifiuta:n=>`😾 ${n} will not listen to reason.`,accetta:n=>`💬 ${n}’s fur settles: no claws, for now.`,
  fine:['«Your customs are different from ours. And that is right: every clan has its own.»','«A strange clan, yours. But no stranger than mine, I suppose.»','«I will think tonight about what you do.»','«Now you know one thing about us. Next time you will tell me one about you.»'],
  arriva:[(n,cl)=>`${n}, of the ${cl}, steps out of the trees. No hissing: just a careful, curious look.`,(n,cl)=>`${n}, of the ${cl}, is waiting for you on a stone, tail still: not looking for trouble.`,(n,cl)=>`A rustle among the ferns: it is ${n}, of the ${cl}, raising one paw, slowly, as if to say «peace».`],
  nebbia:['«Our clan is split in two halves, those of Dawn and those of Dusk. A Dawn cat may only take a mate from Dusk: that way every family has kin on the other side.»',
   '«With my mother’s brothers I may joke and steal the prey from their mouths. With my mate’s mother I may not even meet her eyes. Do you joke with everyone?»',
   '«When the mist is thick we leave prey on the border and withdraw. Whoever passes leaves something in exchange and goes. Nobody sees anybody, and nobody cheats.»',
   '«The most honoured among us is the one who has given away the most. At the autumn feast the leader gives away all the prey: that is why the leader leads.»'],
  pietre:['«Our kits grow up in bands: all those born in the same season are siblings for life, and they become warriors together, on the same day.»',
   '«Whoever wants a mate goes hunting for the mate’s family for four moons. Only then may one ask. With you, is rubbing muzzles enough?»',
   '«Some words are not spoken on the hunt. We call the mouse “the little grey one”, the fox “the one with the tail”. Call them by name, and they hear you.»',
   '«When two of us quarrel they do not fight: they sing. Each sings the other’s faults before everyone, and whoever gets the most laughs wins.»']},
 fr:{aggr:['Parler ? Avec qui chasse dans la forêt des autres ? Sors tes griffes !','Les mots, c’est pour ceux qui n’ont pas de dents. Fffh !','J’en ai assez entendu. Défends-toi !','Garde ton souffle : tu en auras besoin pour fuir.','Je ne discute pas avec ce qui sent la fougère !','Silence ! Le dernier qui m’a parlé ainsi boite encore.'],
  calma:['…D’accord. Je rentre mes griffes. Mais parle vite.','Hm. Il faut du courage pour parler au lieu de griffer. Je t’écoute.','Personne ne me l’avait jamais demandé. Assieds-toi, mais garde tes distances.','Assez de querelles pour aujourd’hui. Parle.'],
  rifiuta:n=>`😾 ${n} ne veut rien entendre.`,accetta:n=>`💬 Le poil de ${n} retombe : pas de griffes pour l’instant.`,
  fine:['« Vos coutumes sont différentes des nôtres. Et c’est bien ainsi : chaque clan a les siennes. »','« Drôle de clan, le vôtre. Mais pas plus drôle que le mien, j’imagine. »','« J’y penserai cette nuit, à ce que vous faites. »','« Maintenant, tu sais une chose sur nous. La prochaine fois, tu m’en diras une sur vous. »'],
  arriva:[(n,cl)=>`${n}, du ${cl}, sort d’entre les arbres. Pas de crachat : ce chat t’observe avec prudence et curiosité.`,(n,cl)=>`${n}, du ${cl}, t’attend sur une pierre, la queue immobile : ce chat ne cherche pas les ennuis.`,(n,cl)=>`Un froissement dans les fougères : c’est ${n}, du ${cl}, qui lève une patte, doucement, comme pour dire « paix ».`],
  nebbia:['« Chez nous, le clan est divisé en deux moitiés, ceux de l’Aube et ceux du Crépuscule. Un chat de l’Aube ne peut prendre compagnon qu’au Crépuscule : ainsi, chaque famille a des parents de l’autre côté. »',
   '« Avec les frères de ma mère, je peux plaisanter et leur voler la proie de la gueule. Avec la mère de ma compagne, je ne peux même pas croiser son regard. Chez vous, on plaisante avec tout le monde ? »',
   '« Quand la brume est épaisse, nous laissons des proies à la frontière et nous nous retirons. Qui passe laisse quelque chose en échange et s’en va. Personne ne voit personne, et personne ne triche. »',
   '« Le plus honoré d’entre nous est celui qui a le plus donné. À la fête d’automne, le chef donne toutes ses proies : c’est pour cela qu’il est chef. »'],
  pietre:['« Nos petits grandissent par bandes : tous ceux qui naissent la même saison sont frères pour la vie, et deviennent guerriers ensemble, le même jour. »',
   '« Qui veut une compagne va chasser pour sa famille pendant quatre lunes. Ensuite seulement, il peut la demander. Chez vous, il suffit de se frotter le museau ? »',
   '« Certains mots ne se disent pas à la chasse. La souris, nous l’appelons “la petite grise”, le renard “celui à la queue”. Si tu les appelles par leur nom, ils t’entendent. »',
   '« Quand deux des nôtres se disputent, ils ne se battent pas : ils chantent. Chacun chante les défauts de l’autre devant tous, et celui qui fait le plus rire a gagné. »']}}[LINGUA];
// più usanze, più saluti, più congedi
{ const S=TESTI_LEGG.stranieri; S.cultura.nebbia.push(...CONV.nebbia); S.cultura.pietre.push(...CONV.pietre);
  Object.defineProperty(S,'fine',{get:()=>pick(CONV.fine),configurable:true}); S.arriva=(n,cl)=>pick(CONV.arriva)(n,cl); }
// parlare con un aggressore: o si calma davvero, o risponde male e attacca. Mai convenevoli seguiti da una zuffa.
function parlaConNemico(e){ const p=G.p, n=nome(e), ostile=e.stato==='caccia'||e.stato==='schierato'||(e.furioso&&e.furioso>G.t);
 if(!ostile) return parlaStraniero(e);
 if(Math.random()<0.45+((p.spirito??60)>=70?0.2:0)+(e.conosciuto?0.15:0)){ const t=pick(CONV.calma); parla(e,t,5); log(CONV.accetta(n)+' «'+t+'»','#c8f0a8');
  e.stato='pattuglia'; e.furioso=0; e.amicoPrima=e.amico; e.amico=true; e.pacificoFino=G.t+MOON*0.6; e.vx=e.vy=0; setTimeout(()=>{ if(G&&G.cats.includes(e)&&!paused&&!scena) parlaStraniero(e); },1800); }
 else { const t=pick(CONV.aggr); parla(e,t,4); e.soffia=1; if(window.suonoMiao) suonoMiao('allarme'); log(CONV.rifiuta(n)+' «'+t+'»','#ff9a8a'); setTimeout(()=>{ if(G&&G.cats.includes(e)&&!paused&&!scena) lottaNemico(e); },1500); } }

// ================== il rito della guarigione ==================
// richiesta del 12 novembre 2026
//. Quattro temi a rotazione; ogni volta il guaritore dice tre battute e alla fine
// un riquadro dà la fonte. `curaSolenne(h,fine)` sostituisce la scena breve quando è il giocatore a essere curato (js/leggende.js).
const MED={
 it:{prep:n=>`${n} ti fa sdraiare sulla lettiga di muschio. Brucia un rametto di salvia, e il fumo sale piano verso la volta.`,fineTit:'🌿 Il rito della guarigione',fine:n=>`Ti rialzi piano. ${n} ti lecca la fronte: «Torna a camminare nel mondo.»`,
  temi:[{k:'Asclepio',b:['Chiudi gli occhi. Gli antichi dicevano che la guarigione comincia nel sonno.','Chi dorme vicino all’altare sogna la sua cura: un serpente che lecca la ferita, una voce che dice quale erba cercare.','Dormi. Io veglio, e ascolto il tuo respiro.'],
    box:['Dormire nel tempio','Nei santuari di Asclepio, il dio greco della medicina, i malati passavano la notte nel recinto sacro e aspettavano che il dio li visitasse in sogno: era l’«incubazione». A Epidauro restano le iscrizioni del IV secolo a.C. che raccontano le guarigioni. Il serpente attorcigliato al bastone di Asclepio è ancora oggi il simbolo dei medici.']},
   {k:'Pharmakon',b:['Guarda questa foglia. Poca, guarisce. Troppa, avvelena.','Per questo la peso con il naso, e non la do mai a chi non conosco. Il rimedio e il veleno crescono sullo stesso stelo.','Mastica piano. Sentirai amaro: è l’amaro giusto.'],
    box:['Rimedio e veleno','In greco una sola parola, <i>phármakon</i>, indica sia il rimedio sia il veleno. Platone la usa nel <i>Fedro</i> (274e-275a) per la scrittura: il dio Theuth la offre come rimedio per la memoria, e il re gli risponde che la indebolirà. Il filosofo Jacques Derrida ha dedicato a questa ambiguità un saggio famoso, <i>La farmacia di Platone</i> (1968).']},
   {k:'Ippocrate',b:['Il mio compito è aiutarti, o almeno non farti del male.','Io non guarisco nessuno: tolgo gli ostacoli. Il resto lo fa il tuo corpo, che sa la strada meglio di me.','Riposo, acqua, e niente caccia fino a domani. Questa è la medicina più antica.'],
    box:['Aiutare, o almeno non nuocere','Nelle <i>Epidemie</i> (I, 11), uno dei testi attribuiti a Ippocrate di Cos (V secolo a.C.), si legge che nelle malattie il medico deve proporsi due cose: aiutare, o almeno non nuocere. E altrove (<i>Epidemie</i> VI) che «le nature sono i medici delle malattie»: il medico osserva, e asseconda il corpo che si cura da sé.']},
   {k:'Galeno',b:['Hai il naso caldo e la lingua secca: dentro di te c’è troppo fuoco.','Ti do un’erba fresca e umida. Caldo e freddo, secco e umido devono stare in equilibrio, come quattro gatti intorno a una preda.','Quando tornano in pace tra loro, tu torni in forze.'],
    box:['I quattro umori','Galeno di Pergamo (II secolo d.C.), medico dei gladiatori e poi dell’imperatore Marco Aurelio, riprese da Ippocrate la dottrina dei quattro umori (sangue, flegma, bile gialla, bile nera): la salute è il loro equilibrio, la malattia un eccesso da correggere con il contrario. I suoi libri guidarono la medicina europea e araba per quasi millecinquecento anni.']}]},
 en:{prep:n=>`${n} has you lie down on the moss litter and burns a sprig of sage; the smoke rises slowly towards the vault.`,fineTit:'🌿 The healing rite',fine:n=>`You get up slowly. ${n} licks your forehead: “Go back and walk in the world.”`,
  temi:[{k:'Asclepius',b:['Close your eyes. The ancients said that healing begins in sleep.','Whoever sleeps near the altar dreams the cure: a snake licking the wound, a voice telling which herb to look for.','Sleep. I will keep watch, and listen to your breathing.'],
    box:['Sleeping in the temple','In the sanctuaries of Asclepius, the Greek god of medicine, the sick spent the night in the sacred enclosure and waited for the god to visit them in a dream: this was «incubation». At Epidaurus, inscriptions from the 4th century BC still record the cures. The snake coiled around the staff of Asclepius is the emblem of physicians to this day.']},
   {k:'Pharmakon',b:['Look at this leaf. A little heals. Too much poisons.','That is why I weigh it with my nose, and never give it to one I do not know. Remedy and poison grow on the same stem.','Chew slowly. It will taste bitter: the right kind of bitter.'],
    box:['Remedy and poison','In Greek a single word, <i>phármakon</i>, means both remedy and poison. Plato uses it in the <i>Phaedrus</i> (274e-275a) for writing: the god Theuth offers it as a remedy for memory, and the king replies that it will weaken memory. The philosopher Jacques Derrida devoted a famous essay to this ambiguity, <i>Plato’s Pharmacy</i> (1968).']},
   {k:'Hippocrates',b:['My task is to help you, or at least to do you no harm.','I heal nobody: I clear the obstacles. The rest is done by your body, which knows the way better than I do.','Rest, water, and no hunting until tomorrow. That is the oldest medicine.'],
    box:['To help, or at least to do no harm','In the <i>Epidemics</i> (I, 11), one of the texts attributed to Hippocrates of Cos (5th century BC), we read that in diseases the physician should aim at two things: to help, or at least to do no harm. And elsewhere (<i>Epidemics</i> VI) that «natures are the physicians of diseases»: the physician observes, and assists the body that heals itself.']},
   {k:'Galen',b:['Your nose is hot and your tongue is dry: there is too much fire in you.','I am giving you a cool, moist herb. Hot and cold, dry and wet must stay in balance, like four cats around one prey.','When they are at peace with one another, your strength comes back.'],
    box:['The four humours','Galen of Pergamon (2nd century AD), physician to the gladiators and later to the emperor Marcus Aurelius, took up from Hippocrates the doctrine of the four humours (blood, phlegm, yellow bile, black bile): health is their balance, illness an excess to be corrected by its opposite. His books guided European and Arabic medicine for almost fifteen hundred years.']}]},
 fr:{prep:n=>`${n} te fait allonger sur la litière de mousse et brûle un brin de sauge ; la fumée monte lentement vers la voûte.`,fineTit:'🌿 Le rite de guérison',fine:n=>`Tu te relèves doucement. ${n} te lèche le front : « Retourne marcher dans le monde. »`,
  temi:[{k:'Asclépios',b:['Ferme les yeux. Les anciens disaient que la guérison commence dans le sommeil.','Celui qui dort près de l’autel rêve son remède : un serpent qui lèche la plaie, une voix qui dit quelle herbe chercher.','Dors. Je veille, et j’écoute ton souffle.'],
    box:['Dormir dans le temple','Dans les sanctuaires d’Asclépios, le dieu grec de la médecine, les malades passaient la nuit dans l’enceinte sacrée et attendaient que le dieu les visite en rêve : c’était l’« incubation ». À Épidaure, des inscriptions du IVe siècle av. J.-C. racontent encore ces guérisons. Le serpent enroulé autour du bâton d’Asclépios est aujourd’hui encore l’emblème des médecins.']},
   {k:'Pharmakon',b:['Regarde cette feuille. Un peu, elle guérit. Trop, elle empoisonne.','C’est pourquoi je la pèse du bout du nez, et je ne la donne jamais à qui je ne connais pas. Le remède et le poison poussent sur la même tige.','Mâche lentement. Ce sera amer : c’est la bonne amertume.'],
    box:['Remède et poison','En grec, un seul mot, <i>phármakon</i>, désigne à la fois le remède et le poison. Platon l’emploie dans le <i>Phèdre</i> (274e-275a) à propos de l’écriture : le dieu Theuth l’offre comme un remède pour la mémoire, et le roi lui répond qu’elle l’affaiblira. Le philosophe Jacques Derrida a consacré à cette ambiguïté un essai célèbre, <i>La Pharmacie de Platon</i> (1968).']},
   {k:'Hippocrate',b:['Ma tâche est de t’aider, ou du moins de ne pas te nuire.','Je ne guéris personne : j’écarte les obstacles. Le reste, c’est ton corps qui le fait ; il connaît le chemin mieux que moi.','Du repos, de l’eau, et pas de chasse avant demain. C’est la plus ancienne des médecines.'],
    box:['Aider, ou du moins ne pas nuire','Dans les <i>Épidémies</i> (I, 11), l’un des textes attribués à Hippocrate de Cos (Ve siècle av. J.-C.), on lit que, dans les maladies, le médecin doit avoir deux choses en vue : être utile, ou du moins ne pas nuire. Et ailleurs (<i>Épidémies</i> VI) que « les natures sont les médecins des maladies » : le médecin observe, et seconde le corps qui se soigne lui-même.']},
   {k:'Galien',b:['Tu as le nez chaud et la langue sèche : il y a trop de feu en toi.','Je te donne une herbe fraîche et humide. Le chaud et le froid, le sec et l’humide doivent rester en équilibre, comme quatre chats autour d’une proie.','Quand ils font la paix entre eux, tes forces reviennent.'],
    box:['Les quatre humeurs','Galien de Pergame (IIe siècle apr. J.-C.), médecin des gladiateurs puis de l’empereur Marc Aurèle, a repris d’Hippocrate la doctrine des quatre humeurs (sang, phlegme, bile jaune, bile noire) : la santé est leur équilibre, la maladie un excès à corriger par son contraire. Ses livres ont guidé la médecine européenne et arabe pendant près de mille cinq cents ans.']}]}}[LINGUA];
function curaSolenne(h,fine){ const p=G.p, W=stG(), i=(W.medN=(W.medN||0)+1)%MED.temi.length, T=MED.temi[i], n=nome(h); segnaEvento(); p.guida=null; p.caccia=null;
 if(scena) return; avviaScena('cura',[h,p],28,null); // la scena dura quanto il rito: lettiga, erbe, pozioni e fumo restano visibili
 const chiudi=()=>{ if(scena&&scena.tipo==='cura') scena.t=scena.dur; };
 recita([{t:MED.prep(n),dur:6},{c:h,t:T.b[0],dur:6},{c:h,t:T.b[1],dur:8},{c:h,t:T.b[2],dur:6}],()=>{ chiudi(); setTimeout(()=>{ fine&&fine();
  modale(MED.fineTit,MED.fine(n)+stSapere(T.box),[{t:'🌿',f:()=>spirito(4,'cura')}]); },250); }); }

// ================== la strada del guaritore ==================
// richiesta del 12 novembre 2026
// Il segno visibile (mantellina, collare, lume, bolla) è in js/mondo3d.js. Ogni massima porta la sua fonte, che va nel diario.
const GUAR={
 it:{chiediAcqua:'💧 Chiedere acqua',chiediCibo:'🍖 Chiedere cibo',chiediCura:'🌿 Chiedere una cura',daiCura:'🌿 Guarire',daiCibo:'🍖 Nutrire',daiAcqua:'💧 Dissetare',
  acqua:n=>`${n} tocca la terra con la zampa. Tra i sassi sale un filo d’acqua limpida, e si raccoglie in una conca che prima non c’era.`,cibo:n=>`${n} apre la zampa sul muschio: sotto c’è un topo addormentato, che un attimo fa non c’era.`,
  cura:n=>`${n} soffia sulla ferita. Un bagliore viola la attraversa, e il pelo si richiude come acqua sopra un sasso.`,
  grazie:['Che gli antenati ti rendano il doppio.','Non so come hai fatto. Ma grazie.','Lo dirò a tutto il clan!'],troppo:n=>`${n} sta già bene: il dono si fa a chi ne ha bisogno.`,
  detti:[['Ciò che è in basso è come ciò che è in alto: curo te, e il cielo respira meglio.','Tavola di smeraldo, attribuita a Ermete Trismegisto'],
   ['Non si arriva agli dèi con il solo pensiero: servono i gesti giusti, fatti al momento giusto.','Giamblico, I misteri degli Egizi, circa 300 d.C.'],
   ['Tutto è legato a tutto: se tiro un filo d’erba qui, trema una stella lassù.','Plotino, Enneadi, IV, 4: la simpatia universale'],
   ['La salute del clan sia la legge più alta.','Cicerone, Le leggi, III, 3: «salus populi suprema lex esto»'],
   ['Vivi con onore, non fare male a nessuno, da’ a ciascuno il suo. Il resto è commento.','Ulpiano, nel Digesto di Giustiniano, 1, 1, 10'],
   ['Chi cura male risponde del danno: lo dicevano già le leggi più antiche.','Codice di Hammurabi, circa 1750 a.C., norme sui medici'],
   ['L’anima scende nel corpo come la luce nell’acqua: si piega, ma non si spegne.','Plotino, Enneadi, IV, 8: la discesa dell’anima'],
   ['Conosci te stesso, e conoscerai da dove vieni.','Corpus Hermeticum, I (Pimandro), tradotto in latino da Marsilio Ficino nel 1463']],
  chiamaTit:'📯 Chiamata alle armi',chiama:(k,cl,m)=>`${k} chiama il clan contro il ${cl}. A te dice: «Tu non combatti. Ma vieni: da lontano veglierai su di noi, e nessuno toccherà chi porta il lume.»`,veglia:'🔮 Vegliare sulla battaglia',resta:'Restare al campo',
  v1:'Sali su un’altura sopra il campo di battaglia. Intorno a te si chiude una bolla di luce pallida: le zanne non la attraversano.',v2:'Laggiù i guerrieri si affrontano. Ogni volta che uno dei nostri cade, il tuo lume lo raggiunge, e si rialza.',v3:'Nessuno osa avvicinarsi all’altura. Anche i nemici, passando, abbassano gli occhi.',
  vinta:(cl,n)=>`Il ${cl} si ritira. Nessuno dei nostri è rimasto a terra: ne hai rialzati ${n} senza toccarli.`,persa:cl=>`Il ${cl} tiene il confine, e i nostri si ritirano. Ma tornano tutti sulle loro zampe: nessun ferito, grazie a te.`,
  boxB:['Un guaritore vale molti guerrieri','Nell’<i>Iliade</i> (XI, 514) Idomeneo ordina di portare in salvo Macaone, figlio di Asclepio e medico degli Achei, perché «un medico vale molti altri uomini»: sa estrarre le frecce e spargere rimedi che calmano.'],
  pontF:'pontefice del clan',pontM:'pontefice del clan',pontTit:'🕊️ Il pontefice',pont:n=>`Un guaritore non guida il clan come un guerriero. Da oggi ${n} è <b>pontefice</b>, e nel Clan della Felce valgono regole nuove:<br>• nessun assalto parte dal nostro campo;<br>• le offese dei vicini pesano tre volte meno: prima si parla;<br>• il mucchio delle prede è di tutti, e non scende sotto tre;<br>• ogni straniero ferito viene curato.`,
  boxP:['Chi costruisce ponti','A Roma il capo dei sacerdoti era il <i>pontifex maximus</i>. Lo scrittore Varrone (<i>La lingua latina</i>, V, 83) spiega la parola così: <i>pontifex</i> viene da <i>pons</i>, ponte, e <i>facere</i>, fare, perché i pontefici avevano costruito e curavano il ponte Sublicio sul Tevere. Un capo, dunque, come costruttore di ponti.']},
 en:{chiediAcqua:'💧 Ask for water',chiediCibo:'🍖 Ask for food',chiediCura:'🌿 Ask for healing',daiCura:'🌿 Heal',daiCibo:'🍖 Feed',daiAcqua:'💧 Give water',
  acqua:n=>`${n} touches the earth with one paw. A thread of clear water rises between the stones and gathers in a hollow that was not there before.`,cibo:n=>`${n} opens a paw on the moss: beneath it lies a sleeping mouse that was not there a moment ago.`,
  cura:n=>`${n} breathes on the wound. A violet glow passes through it, and the fur closes like water over a stone.`,
  grazie:['May the ancestors repay you twice over.','I do not know how you did that. But thank you.','I will tell the whole clan!'],troppo:n=>`${n} is already well: a gift is for one who needs it.`,
  detti:[['What is below is like what is above: I heal you, and the sky breathes easier.','The Emerald Tablet, attributed to Hermes Trismegistus'],
   ['One does not reach the gods by thought alone: it takes the right gestures, made at the right moment.','Iamblichus, On the Mysteries of the Egyptians, c. AD 300'],
   ['Everything is bound to everything: if I pull a blade of grass here, a star trembles up there.','Plotinus, Enneads, IV, 4: universal sympathy'],
   ['Let the health of the clan be the highest law.','Cicero, On the Laws, III, 3: «salus populi suprema lex esto»'],
   ['Live with honour, harm no one, give each their due. The rest is commentary.','Ulpian, in Justinian’s Digest, 1, 1, 10'],
   ['Whoever heals badly answers for the harm: the oldest laws already said so.','Code of Hammurabi, c. 1750 BC, rules on physicians'],
   ['The soul comes down into the body like light into water: it bends, but it does not go out.','Plotinus, Enneads, IV, 8: the descent of the soul'],
   ['Know yourself, and you will know where you come from.','Corpus Hermeticum, I (Poimandres), translated into Latin by Marsilio Ficino in 1463']],
  chiamaTit:'📯 Call to arms',chiama:(k,cl)=>`${k} calls the clan against the ${cl}. To you the leader says: “You do not fight. But come: from afar you will watch over us, and nobody will touch the one who carries the light.”`,veglia:'🔮 Watch over the battle',resta:'Stay in camp',
  v1:'You climb a rise above the battlefield. A bubble of pale light closes around you: fangs cannot pass through it.',v2:'Down there the warriors clash. Each time one of ours falls, your light reaches them, and they get up again.',v3:'Nobody dares come near the rise. Even the enemies, passing by, lower their eyes.',
  vinta:(cl,n)=>`The ${cl} withdraws. None of ours was left on the ground: you raised ${n} of them without touching them.`,persa:cl=>`The ${cl} holds the border, and ours fall back. But they all come home on their own paws: nobody hurt, thanks to you.`,
  boxB:['A healer is worth many warriors','In the <i>Iliad</i> (XI, 514) Idomeneus orders that Machaon, son of Asclepius and physician of the Achaeans, be carried to safety, because «a healer is worth many other men»: he can cut out arrows and spread soothing remedies.'],
  pontF:'pontifex of the clan',pontM:'pontifex of the clan',pontTit:'🕊️ The pontifex',pont:n=>`A healer does not lead the clan as a warrior does. From today ${n} is <b>pontifex</b>, and new rules hold in the Fern Clan:<br>• no raid sets out from our camp;<br>• the neighbours’ offences weigh three times less: first we talk;<br>• the prey pile belongs to all, and never falls below three;<br>• every injured stranger is healed.`,
  boxP:['The bridge-builder','In Rome the head of the priests was the <i>pontifex maximus</i>. The writer Varro (<i>On the Latin Language</i>, V, 83) explains the word like this: <i>pontifex</i> comes from <i>pons</i>, bridge, and <i>facere</i>, to make, because the pontiffs had built and maintained the Sublician bridge over the Tiber. A leader, then, as a builder of bridges.']},
 fr:{chiediAcqua:'💧 Demander de l’eau',chiediCibo:'🍖 Demander à manger',chiediCura:'🌿 Demander un soin',daiCura:'🌿 Guérir',daiCibo:'🍖 Nourrir',daiAcqua:'💧 Désaltérer',
  acqua:n=>`${n} touche la terre de la patte. Entre les pierres monte un filet d’eau claire, qui se rassemble dans un creux qui n’existait pas.`,cibo:n=>`${n} ouvre la patte sur la mousse : dessous, une souris endormie, qui n’y était pas l’instant d’avant.`,
  cura:n=>`${n} souffle sur la plaie. Une lueur violette la traverse, et le poil se referme comme l’eau sur une pierre.`,
  grazie:['Que les ancêtres te le rendent deux fois.','Je ne sais pas comment tu as fait. Mais merci.','Je le dirai à tout le clan !'],troppo:n=>`${n} va déjà bien : le don va à qui en a besoin.`,
  detti:[['Ce qui est en bas est comme ce qui est en haut : je te soigne, et le ciel respire mieux.','Table d’émeraude, attribuée à Hermès Trismégiste'],
   ['On n’atteint pas les dieux par la seule pensée : il faut les gestes justes, faits au bon moment.','Jamblique, Les Mystères d’Égypte, vers 300 apr. J.-C.'],
   ['Tout est lié à tout : si je tire un brin d’herbe ici, une étoile tremble là-haut.','Plotin, Ennéades, IV, 4 : la sympathie universelle'],
   ['Que la santé du clan soit la loi la plus haute.','Cicéron, Des lois, III, 3 : « salus populi suprema lex esto »'],
   ['Vis avec honneur, ne fais de tort à personne, donne à chacun son dû. Le reste est commentaire.','Ulpien, dans le Digeste de Justinien, 1, 1, 10'],
   ['Qui soigne mal répond du dommage : les lois les plus anciennes le disaient déjà.','Code de Hammurabi, vers 1750 av. J.-C., règles sur les médecins'],
   ['L’âme descend dans le corps comme la lumière dans l’eau : elle se courbe, mais ne s’éteint pas.','Plotin, Ennéades, IV, 8 : la descente de l’âme'],
   ['Connais-toi toi-même, et tu sauras d’où tu viens.','Corpus Hermeticum, I (Poimandrès), traduit en latin par Marsile Ficin en 1463']],
  chiamaTit:'📯 Appel aux armes',chiama:(k,cl)=>`${k} appelle le clan contre le ${cl}. À toi, le chef dit : « Tu ne combats pas. Mais viens : de loin, tu veilleras sur nous, et personne ne touchera à qui porte la lumière. »`,veglia:'🔮 Veiller sur la bataille',resta:'Rester au camp',
  v1:'Tu montes sur une hauteur au-dessus du champ de bataille. Autour de toi se referme une bulle de lumière pâle : les crocs ne la traversent pas.',v2:'En bas, les guerriers s’affrontent. Chaque fois que l’un des nôtres tombe, ta lumière l’atteint, et il se relève.',v3:'Personne n’ose approcher de la hauteur. Même les ennemis, en passant, baissent les yeux.',
  vinta:(cl,n)=>`Le ${cl} se retire. Aucun des nôtres n’est resté à terre : tu en as relevé ${n} sans les toucher.`,persa:cl=>`Le ${cl} tient la frontière, et les nôtres se replient. Mais tous rentrent sur leurs pattes : aucun blessé, grâce à toi.`,
  boxB:['Un guérisseur vaut beaucoup de guerriers','Dans l’<i>Iliade</i> (XI, 514), Idoménée ordonne de mettre à l’abri Machaon, fils d’Asclépios et médecin des Achéens, car « un médecin vaut beaucoup d’autres hommes » : il sait extraire les flèches et répandre des remèdes apaisants.'],
  pontF:'pontife du clan',pontM:'pontife du clan',pontTit:'🕊️ Le pontife',pont:n=>`Un guérisseur ne guide pas le clan comme un guerrier. À partir d’aujourd’hui, ${n} est <b>pontife</b>, et de nouvelles règles valent dans le Clan de la Fougère :<br>• aucun assaut ne part de notre camp ;<br>• les offenses des voisins pèsent trois fois moins : on parle d’abord ;<br>• le tas de proies est à tous, et ne descend pas sous trois ;<br>• tout étranger blessé est soigné.`,
  boxP:['Celui qui fait des ponts','À Rome, le chef des prêtres était le <i>pontifex maximus</i>. L’écrivain Varron (<i>De la langue latine</i>, V, 83) explique le mot ainsi : <i>pontifex</i> vient de <i>pons</i>, pont, et de <i>facere</i>, faire, parce que les pontifes avaient construit et entretenaient le pont Sublicius sur le Tibre. Un chef, donc, comme bâtisseur de ponts.']}}[LINGUA];
const guarDetto=()=>{ const W=stG(); return GUAR.detti[(W.dettoN=(W.dettoN||0)+1)%GUAR.detti.length]; };
// h = il guaritore che dona, a = chi riceve, tipo = 'acqua' | 'cibo' | 'cura'
function donoGuaritore(h,a,tipo){ const p=G.p, perMe=a===p, [detto,fonte]=guarDetto(), n=nome(h); segnaEvento();
 if(tipo==='cura'&&perMe) return curaSolenne(h,()=>{ p.salute=Math.min(100,p.salute+50); p.ferito=false; });
 if(!perMe&&a.donoT&&G.t-a.donoT<MOON*0.8) return log('🔮 '+GUAR.troppo(nome(a)),'#d9c8ff');
 const col={acqua:'#9cd0ff',cibo:'#ffd27a',cura:'#c58cff'}[tipo];
 recita([{c:h,t:detto,dur:6},{t:GUAR[tipo](n),dur:6,scena:tipo==='cura'?['cura',[h,a],5.5]:null,f:()=>{ scintille(a.x,a.y-16,col,22); }}],()=>{
  log('📜 '+fonte,'#e8d9a8');
  if(perMe){ if(tipo==='acqua') p.sete=100; else p.fame=100; flo(p.x,p.y-30,tipo==='acqua'?'💧':'🍖',col); }
  else { a.donoT=G.t; a.amicizia=(a.amicizia||0)+1; if(tipo==='cura'){ a.hp=a.hpMax; a.ferito=false; if(a.stato==='ferito'){ a.stato='campo'; nuovoPuntoCampo(a); } p.cure=(p.cure||0)+1; }
   parla(a,pick(GUAR.grazie),4); spirito(tipo==='cura'?5:3,'cura'); } }); }
addEventListener('DOMContentLoaded',()=>{
 // nel menu dei gatti: chiedere al guaritore, oppure donare da guaritore
 if(typeof menuGatto==='function'){ const o=menuGatto; menuGatto=function(c){ const p=G.p, ioGuar=p.rango==='guaritore', luiGuar=(c.rango==='guaritore'||(c.rango==='apprendista'&&c.via==='guaritore'))&&c!==p; if(!ioGuar&&!luiGuar) return o.apply(this,arguments);
  const apprG=!ioGuar&&c.rango==='apprendista'&&c.via==='guaritore';
  const m0=modale; modale=function(t,x,bt){ modale=m0; const extra=apprG?[{t:GUAR2.chiedi,f:()=>curaLeggera(c)},{t:GUAR.chiediAcqua,f:()=>donoGuaritore(c,p,'acqua')}]:ioGuar?[{t:GUAR.daiCura,f:()=>donoGuaritore(p,c,'cura')},{t:GUAR.daiCibo,f:()=>donoGuaritore(p,c,'cibo')},{t:GUAR.daiAcqua,f:()=>donoGuaritore(p,c,'acqua')}]
    :[{t:GUAR.chiediCura,f:()=>donoGuaritore(c,p,'cura')},{t:GUAR.chiediCibo,f:()=>donoGuaritore(c,p,'cibo')},{t:GUAR.chiediAcqua,f:()=>donoGuaritore(c,p,'acqua')}];
   return m0(t,x,[...extra,...(bt||[])]); };
  try{ return o.apply(this,arguments); } finally { modale=m0; } }; }
 // il guaritore non combatte: è convocato, e veglia da lontano dentro una bolla
 if(typeof chiamataAlleArmi==='function'){ const o=chiamataAlleArmi; chiamataAlleArmi=function(cl){ const p=G.p; if(p.rango!=='guaritore'||p.vecchio||p.incinta) return o.apply(this,arguments);
  G.tens[cl]=60; annuncia('📯','#ff9a8a'); const k=capo(), kn=k?nome(k):'';
  modale(GUAR.chiamaTit,GUAR.chiama(kn,CLAN[cl].nome)+stSapere(GUAR.boxB),[{t:GUAR.veglia,f:()=>vegliaBattaglia(cl)},...(golemPronto()?[{t:MAG.golemBtn,f:()=>ritoGrandeGatto(cl)}]:[]),{t:GUAR.resta,f:()=>battagliaLontana(cl)}]); }; }
 // il guaritore che guida il clan è un pontefice
 if(typeof rangoTesto==='function'){ const o=rangoTesto; rangoTesto=function(c){ if(c&&c.leader&&c.rango==='guaritore') return c.sesso==='f'?GUAR.pontF:GUAR.pontM; return o.apply(this,arguments); }; }
 if(typeof tensione==='function'){ const o=tensione; tensione=function(cl,n,m){ if(n>0&&G&&G.pace) n=n*0.35; return o.call(this,cl,n,m); }; } // sotto un pontefice le offese pesano tre volte meno
 if(typeof iniziaGuerra==='function'){ const o=iniziaGuerra; iniziaGuerra=function(cl,chiamata){ if(G&&G.pace&&!chiamata) return log('🕊️ '+GUAR.pontTit,'#d9c8ff'); return o.apply(this,arguments); }; }
});
function vegliaBattaglia(cl){ const p=G.p; segnaEvento(); G.bolla=true; p.guida=null; p.caccia=null; if(window.suonoMiao) suonoMiao('solenne');
 recita([{t:GUAR.v1,dur:7,f:()=>scintille(p.x,p.y-20,'#c9b4ff',26)},{t:GUAR.v2,dur:7,f:()=>scintille(p.x,p.y-20,'#c9b4ff',18)},{t:GUAR.v3,dur:6}],()=>{ G.bolla=false;
  const guer=G.cats.filter(c=>c.clan==='felce'&&c.rango==='guerriero'), vinta=Math.random()<Math.min(0.95,0.62+0.04*guer.length), n=1+Math.floor(Math.random()*3);
  for(const c of guer){ c.hp=c.hpMax; c.ferito=false; if(c.stato==='ferito'){ c.stato='campo'; nuovoPuntoCampo(c); } }
  p.cure=(p.cure||0)+n;
  if(vinta){ if(G.conq[cl]<3) G.conq[cl]++; G.tens[cl]=0; annuncia('🏆','#ffe08a'); for(const c of guer.slice(0,4)) c.vinte=(c.vinte||0)+2; modale('🏆',GUAR.vinta(CLAN[cl].nome,n),[{t:'🔮',f:()=>spirito(8,'cura')}]); }
  else { G.tens[cl]=40; modale('🕊️',GUAR.persa(CLAN[cl].nome),[{t:'🔮',f:()=>spirito(5,'cura')}]); } }); }
// il pontefice: regole di pace, annunciate quando un guaritore prende la guida del clan
setInterval(()=>{ if(typeof G==='undefined'||!G||!G.p) return; const p=G.p, pont=!!(p.leader&&p.rango==='guaritore');
 if(pont&&!G.pace&&!paused&&!scena&&!recitaAtt){ G.pace=true; modale(GUAR.pontTit,GUAR.pont(nome(p))+stSapere(GUAR.boxP),[{t:'🕊️'}]); }
 if(!pont&&G.pace) G.pace=false;
 if(G.pace&&G.cibo<3) G.cibo=3; },3000);

// ================== oggetti esoterici e primitivi da trovare ==================
// richiesta del 12 novembre 2026
//. Categoria `arcano`: si trovano nel bosco e ai lati delle sale delle tane del clan, si
// tengono nell'inventario e si possono offrire all'altare. Ogni descrizione dice una cosa vera sull'oggetto reale. Le forme 3D sono in js/mondo3d.js.
Object.assign(OGG,{
 cono:{cat:'arcano',ic:'📐',it:'un cono sumerico',en:'a Sumerian cone',fr:'un cône sumérien',d:{it:'Un chiodo d’argilla coperto di segni a cuneo. I re sumeri, come Gudea di Lagash (circa 2100 a.C.), ne infilavano a centinaia nei muri dei templi per dedicarli a un dio.',en:'A clay nail covered in wedge-shaped signs. Sumerian kings such as Gudea of Lagash (about 2100 BC) set hundreds of them into temple walls to dedicate the building to a god.',fr:'Un clou d’argile couvert de signes en forme de coins. Les rois sumériens, comme Gudéa de Lagash (vers 2100 av. J.-C.), en plantaient des centaines dans les murs des temples pour les dédier à un dieu.'}},
 palo:{cat:'arcano',ic:'🗼',it:'un piccolo palo totemico',en:'a little totem pole',fr:'un petit mât totémique',d:{it:'Figure scolpite una sopra l’altra. Sulla costa nord-ovest del Pacifico, tra gli Haida e i Tlingit, i pali raccontano gli antenati e gli stemmi di una famiglia.',en:'Carved figures one above another. On the Pacific Northwest coast, among the Haida and the Tlingit, such poles tell of a family’s ancestors and crests.',fr:'Des figures sculptées les unes sur les autres. Sur la côte nord-ouest du Pacifique, chez les Haïdas et les Tlingits, ces mâts racontent les ancêtres et les blasons d’une famille.'}},
 venere:{cat:'arcano',ic:'🪆',it:'una statuetta dalle forme tonde',en:'a round little figurine',fr:'une statuette aux formes rondes',d:{it:'Somiglia alla Venere di Willendorf, scolpita nel calcare quasi trentamila anni fa e trovata in Austria nel 1908. Nessuno sa con certezza a che cosa servisse.',en:'It looks like the Venus of Willendorf, carved in limestone almost thirty thousand years ago and found in Austria in 1908. Nobody knows for certain what it was for.',fr:'Elle ressemble à la Vénus de Willendorf, sculptée dans le calcaire il y a près de trente mille ans et trouvée en Autriche en 1908. Personne ne sait vraiment à quoi elle servait.'}},
 scarabeo:{cat:'arcano',ic:'🪲',it:'uno scarabeo di pietra verde',en:'a green stone scarab',fr:'un scarabée de pierre verte',d:{it:'In Egitto lo scarabeo che spinge la sua pallina era l’immagine del sole che rinasce ogni mattina. Lo si portava come amuleto e lo si posava sul cuore dei morti.',en:'In Egypt the beetle rolling its ball was the image of the sun reborn each morning. It was worn as an amulet and laid on the heart of the dead.',fr:'En Égypte, le scarabée qui pousse sa boule était l’image du soleil qui renaît chaque matin. On le portait en amulette et on le posait sur le cœur des morts.'}},
 ankh:{cat:'arcano',ic:'☥',it:'una croce con l’anello',en:'a looped cross',fr:'une croix à anse',d:{it:'È l’ankh, il geroglifico egizio che significa «vita». Nelle pitture gli dèi lo tengono in mano e lo avvicinano al naso dei re.',en:'It is the ankh, the Egyptian hieroglyph meaning «life». In paintings the gods hold it and bring it to the nose of kings.',fr:'C’est l’ankh, le hiéroglyphe égyptien qui signifie « vie ». Dans les peintures, les dieux le tiennent en main et l’approchent du nez des rois.'}},
 flauto:{cat:'arcano',ic:'🎶',it:'un flauto d’osso',en:'a bone flute',fr:'une flûte en os',d:{it:'Un osso d’uccello con dei fori. I flauti più antichi che si conoscano vengono dalle grotte del Giura Svevo, in Germania, e hanno circa quarantamila anni.',en:'A bird bone with holes. The oldest known flutes come from the caves of the Swabian Jura, in Germany, and are about forty thousand years old.',fr:'Un os d’oiseau percé de trous. Les plus anciennes flûtes connues viennent des grottes du Jura souabe, en Allemagne, et ont environ quarante mille ans.'}},
 ammonite:{cat:'arcano',ic:'🐚',it:'una pietra a spirale',en:'a spiral stone',fr:'une pierre en spirale',d:{it:'È un’ammonite, la conchiglia fossile di un animale marino scomparso. In India le ammoniti nere del fiume Gandaki sono venerate come forme del dio Vishnu.',en:'It is an ammonite, the fossil shell of a vanished sea creature. In India the black ammonites of the Gandaki river are revered as forms of the god Vishnu.',fr:'C’est une ammonite, la coquille fossile d’un animal marin disparu. En Inde, les ammonites noires de la rivière Gandaki sont vénérées comme des formes du dieu Vishnou.'}},
 oracolo:{cat:'arcano',ic:'🦴',it:'un osso oracolare',en:'an oracle bone',fr:'un os oraculaire',d:{it:'Una scapola incisa e piena di crepe. Nella Cina dei re Shang, verso il 1200 a.C., si scriveva una domanda sull’osso, lo si scaldava e si leggeva la risposta nelle crepe.',en:'A shoulder blade, carved and full of cracks. In the China of the Shang kings, about 1200 BC, a question was written on the bone, the bone was heated, and the answer was read in the cracks.',fr:'Une omoplate gravée et couverte de fissures. Dans la Chine des rois Shang, vers 1200 av. J.-C., on écrivait une question sur l’os, on le chauffait, et on lisait la réponse dans les fissures.'}},
 specchio:{cat:'arcano',ic:'🪞',it:'uno specchio di pietra nera',en:'a black stone mirror',fr:'un miroir de pierre noire',d:{it:'È ossidiana lucidata. Gli Aztechi usavano specchi così per vedere ciò che è nascosto: il nome del loro dio Tezcatlipoca significa «specchio che fuma».',en:'It is polished obsidian. The Aztecs used such mirrors to see what is hidden: the name of their god Tezcatlipoca means «smoking mirror».',fr:'C’est de l’obsidienne polie. Les Aztèques se servaient de tels miroirs pour voir ce qui est caché : le nom de leur dieu Tezcatlipoca signifie « miroir fumant ».'}},
 rombo:{cat:'arcano',ic:'🪃',it:'una tavoletta legata a una corda',en:'a slat on a cord',fr:'une planchette attachée à une corde',d:{it:'È un rombo: fatto roteare, manda un rombo profondo. In Australia e in molti altri luoghi quel suono è la voce degli spiriti durante le iniziazioni.',en:'It is a bull-roarer: when whirled, it gives a deep roar. In Australia and many other places that sound is the voice of the spirits during initiations.',fr:'C’est un rhombe : quand on le fait tournoyer, il gronde. En Australie et dans bien d’autres lieux, ce son est la voix des esprits pendant les initiations.'}},
 bulla:{cat:'arcano',ic:'🟤',it:'una palla d’argilla che fa rumore',en:'a rattling clay ball',fr:'une boule d’argile qui fait du bruit',d:{it:'Dentro ci sono dei gettoni. In Mesopotamia, prima della scrittura, si contavano pecore e orci con gettoni d’argilla chiusi in palle sigillate: da quei segni, pensa Denise Schmandt-Besserat, nacque la scrittura.',en:'There are tokens inside. In Mesopotamia, before writing, sheep and jars were counted with clay tokens sealed in balls: from those marks, Denise Schmandt-Besserat argues, writing was born.',fr:'Il y a des jetons à l’intérieur. En Mésopotamie, avant l’écriture, on comptait les moutons et les jarres avec des jetons d’argile enfermés dans des boules scellées : de ces marques, selon Denise Schmandt-Besserat, est née l’écriture.'}},
 tamburo:{cat:'arcano',ic:'🥁',it:'un tamburo dipinto',en:'a painted drum',fr:'un tambour peint',d:{it:'Sulla pelle ci sono figure di animali e di stelle. Gli sciamani della Siberia e i Sami del nord suonavano tamburi così per viaggiare, dicevano, nel mondo degli spiriti.',en:'On the skin are figures of animals and stars. The shamans of Siberia and the Sami of the north beat drums like this to travel, they said, into the world of the spirits.',fr:'Sur la peau, des figures d’animaux et d’étoiles. Les chamans de Sibérie et les Samis du nord battaient de tels tambours pour voyager, disaient-ils, dans le monde des esprits.'}},
 runa:{cat:'arcano',ic:'ᚠ',it:'una pietra con dei segni dritti',en:'a stone with straight signs',fr:'une pierre aux signes droits',d:{it:'Sono rune, le lettere degli antichi Germani: tutte fatte di tratti dritti, perché si incidevano nel legno e nella pietra. Le più antiche hanno quasi duemila anni.',en:'They are runes, the letters of the ancient Germanic peoples: all made of straight strokes, because they were cut into wood and stone. The oldest are almost two thousand years old.',fr:'Ce sont des runes, les lettres des anciens Germains : toutes faites de traits droits, parce qu’on les gravait dans le bois et la pierre. Les plus anciennes ont près de deux mille ans.'}},
 mandragora:{cat:'arcano',ic:'🌱',it:'una radice a forma di gattino',en:'a root shaped like a kitten',fr:'une racine en forme de chaton',d:{it:'È una mandragora. Nel Medioevo si credeva che gridasse quando la si strappava da terra, e che il suo grido fosse pericoloso: per questo la si faceva tirare a un cane.',en:'It is a mandrake. In the Middle Ages people believed it screamed when pulled from the ground, and that its scream was dangerous: so they had a dog pull it up.',fr:'C’est une mandragore. Au Moyen Âge, on croyait qu’elle criait quand on l’arrachait de terre, et que son cri était dangereux : on la faisait donc tirer par un chien.'}},
});

// ================== sempre un guaritore e un apprendista guaritore ==================
// richiesta del 12 novembre 2026
//. L'apprendista sa dare acqua e fare una cura leggera (+20 di salute, senza rito); il resto spetta al maestro.
const GUAR2={it:{chiedi:'🌿 Chiedere una cura leggera',dice:'Sto ancora imparando: so pulire una ferita e fermare il sangue. Per il resto, cerca il mio maestro.',fatto:n=>`🌿 ${n} ti pulisce la ferita con la lingua e ci posa una foglia. Va un po’ meglio.`,nuovoG:n=>`🌿 ${n} è il nuovo guaritore del clan.`,nuovoA:n=>`🌿 ${n} comincia l’apprendistato con il guaritore.`},
 en:{chiedi:'🌿 Ask for a light treatment',dice:'I am still learning: I can clean a wound and stop the bleeding. For the rest, look for my teacher.',fatto:n=>`🌿 ${n} cleans your wound and lays a leaf on it. It feels a little better.`,nuovoG:n=>`🌿 ${n} is the clan’s new healer.`,nuovoA:n=>`🌿 ${n} begins an apprenticeship with the healer.`},
 fr:{chiedi:'🌿 Demander un petit soin',dice:'J’apprends encore : je sais nettoyer une plaie et arrêter le sang. Pour le reste, va voir mon maître.',fatto:n=>`🌿 ${n} nettoie ta plaie et y pose une feuille. Ça va un peu mieux.`,nuovoG:n=>`🌿 Le clan a un nouveau guérisseur : ${n}.`,nuovoA:n=>`🌿 ${n} commence son apprentissage auprès du guérisseur.`}}[LINGUA];
function curaLeggera(h){ const p=G.p; segnaEvento(); recita([{c:h,t:GUAR2.dice,dur:6,scena:['cura',[h,p],4.5]}],()=>{ p.salute=Math.min(100,p.salute+20); log(GUAR2.fatto(nome(h)),'#c8f0a8'); flo(p.x,p.y-30,'🌿 +20','#9be07f'); }); }
setInterval(()=>{ if(typeof G==='undefined'||!G||!G.p||paused||scena||(typeof recitaAtt!=='undefined'&&recitaAtt)||G.raid) return; const p=G.p, F=G.cats.filter(c=>c.clan==='felce');
 let nG=F.filter(c=>c.rango==='guaritore').length; // al massimo due guaritori nel clan, altrimenti i guerrieri finiscono (prova del 13 novembre 2026)
 for(const c of F) if((c.rango==='guerriero'||(c.rango==='apprendista'&&lune(c)>=12))&&c.via==='guaritore'){ if(nG>=2){ c.via=c.rango==='apprendista'?'guerriero':null; continue; } nG++; const era=c.rango; c.rango='guaritore'; c.via=null; c.suffisso=pick(SUFF_GUAR); stat(c); nuovoPuntoCampo(c); if(era==='apprendista') log(GUAR2.nuovoG(nome(c)),'#c8f0a8'); } // un apprendista guaritore cresciuto diventa guaritore, non guerriero
 const guar=F.filter(c=>c.rango==='guaritore'), appr=F.filter(c=>c.rango==='apprendista'&&c.via==='guaritore');
 if(!guar.length&&(p.rango!=='guaritore'||p.leader)){ const c=appr[0]||F.filter(c=>c.rango==='guerriero'&&!c.leader&&!c.regina&&!c.figlio&&c.id!==p.compagno&&c.id!==p.mentore&&c.id!==G.vice).sort((a,b)=>lune(a)-lune(b))[0];
  if(c){ c.rango='guaritore'; c.via=null; c.suffisso=pick(SUFF_GUAR); stat(c); c.stato='campo'; nuovoPuntoCampo(c); log(GUAR2.nuovoG(nome(c)),'#c8f0a8'); } return; }
 if(!appr.length&&!(p.rango==='apprendista'&&p.via==='guaritore')&&(guar.length||p.rango==='guaritore')){ let c=F.find(c=>c.rango==='apprendista'&&c.id!==p.allievo&&!c.pittore);
  if(c){ c.via='guaritore'; } else { c=nuovoGatto('felce','apprendista',{via:'guaritore',lune:7,x:L.tanaGuaritore.x+rnd(-20,20),y:L.tanaGuaritore.y+L.tanaGuaritore.r+20}); }
  log(GUAR2.nuovoA(nome(c)),'#c8f0a8'); } },6000);

// ================== la tana del guaritore è sempre abitata; i riti a due ==================
// richiesta del 12 novembre 2026
const TANAG={
 it:{box:'🌿 Tana del guaritore',porta:'clicca: ti ci porto e ti fai curare',nessuno:'Nella tana, per ora, non c’è nessuno che possa curarti.',
  rito:'🔮 Un rito a due',titolo:'🔮 Il rito a due',intro:n=>`Tu e ${n} vi sedete ai due lati del focolare. Due lumi fanno più luce di uno. Che rito fate?`,
  evoca:o=>`🏺 Chiamare lo spirito: ${o}`,interroga:o=>`🔎 Interrogare ${o}`,lumi:'✨ Il rito dei due lumi',niente:'Non adesso',presto:'I riti stancano: aspettate la prossima luna.',
  evTesto:(o,cl)=>`Posate ${o} tra voi due e cantate piano, a turno. È un oggetto sacro del ${cl}: non è nostro. Che cosa chiedete al suo spirito?`,
  evResta:'Restare con noi, e proteggerci',evTorna:'Tornare a casa, in pace',
  evRestaF:(o,cl)=>`Il fumo si piega verso il nostro altare. ${o} resterà qui, tra i trofei del clan. Il ${cl} lo sentirà.`,evTornaF:(o,cl)=>`Avvolgete ${o} nel muschio pulito. All’alba un apprendista lo lascerà sul confine, dove il ${cl} lo troverà. Qualcosa, tra i due clan, si è sciolto.`,
  boxEv:['Chiamare il dio degli altri','Prima di prendere una città, i Romani ne «evocavano» gli dèi: con una formula li invitavano a lasciare i nemici e a venire a Roma, dove avrebbero avuto un tempio più bello. Così, racconta Tito Livio (V, 21-22), fu chiamata Giunone da Veio nel 396 a.C.; Macrobio (<i>Saturnali</i>, III, 9) riporta la formula.'],
  intTesto:(o,d)=>`Fate girare ${o} tra le zampe, uno alla volta, senza parlare. ${d}`,presagi:['Nel fumo vi sembra di vedere una preda grassa, a ovest del campo.','Per un attimo sentite la stessa cosa, e nessuno dei due sa dire che cosa.','Una scintilla salta dal focolare e si posa tra voi: un buon segno, dicono gli anziani.','L’oggetto è freddo, poi tiepido. Qualcuno, molto tempo fa, lo ha tenuto così.'],
  lumiTesto:'Cantate insieme, una nota bassa e una alta, finché le due voci sembrano una. Nel campo, chi è ferito sente il dolore allentarsi.',
  boxLumi:['Il maestro e l’allievo','Il giuramento attribuito a Ippocrate comincia così: chi lo pronuncia promette di considerare il proprio maestro come un genitore, di dividere con lui i propri beni e di insegnare l’arte ai suoi figli senza compenso. La medicina, prima che un sapere, era una parentela.']},
 en:{box:'🌿 The healer’s den',porta:'click: I will take you there to be healed',nessuno:'For now there is nobody in the den who can heal you.',
  rito:'🔮 A rite for two',titolo:'🔮 The rite for two',intro:n=>`You and ${n} sit on either side of the hearth. Two lights shine brighter than one. Which rite do you perform?`,
  evoca:o=>`🏺 Call the spirit of ${o}`,interroga:o=>`🔎 Question ${o}`,lumi:'✨ The rite of the two lights',niente:'Not now',presto:'Rites are tiring: wait for the next moon.',
  evTesto:(o,cl)=>`You set ${o} between the two of you and sing softly, in turn. It is a sacred object of the ${cl}: it is not ours. What do you ask of its spirit?`,
  evResta:'To stay with us, and protect us',evTorna:'To go home, in peace',
  evRestaF:(o,cl)=>`The smoke bends towards our altar. ${o} will stay here, among the clan’s trophies. The ${cl} will feel it.`,evTornaF:(o,cl)=>`You wrap ${o} in clean moss. At dawn an apprentice will leave it on the border, where the ${cl} will find it. Something between the two clans has loosened.`,
  boxEv:['Calling the others’ god','Before taking a city, the Romans «evoked» its gods: with a formula they invited them to leave the enemy and come to Rome, where they would have a finer temple. That, Livy tells (V, 21-22), is how Juno was called from Veii in 396 BC; Macrobius (<i>Saturnalia</i>, III, 9) records the formula.'],
  intTesto:(o,d)=>`You turn ${o} over in your paws, one at a time, without speaking. ${d}`,presagi:['In the smoke you seem to see a fat prey, west of the camp.','For a moment you both feel the same thing, and neither can say what.','A spark leaps from the hearth and settles between you: a good sign, the elders say.','The object is cold, then warm. Someone, long ago, held it like this.'],
  lumiTesto:'You sing together, one low note and one high, until the two voices seem one. In the camp, the injured feel their pain ease.',
  boxLumi:['Teacher and pupil','The oath attributed to Hippocrates begins like this: whoever swears it promises to regard their teacher as a parent, to share their goods with the teacher and to teach the art to the teacher’s children without fee. Medicine, before being a body of knowledge, was a kinship.']},
 fr:{box:'🌿 Tanière du guérisseur',porta:'clique : je t’y emmène pour te faire soigner',nessuno:'Pour l’instant, il n’y a personne dans la tanière pour te soigner.',
  rito:'🔮 Un rite à deux',titolo:'🔮 Le rite à deux',intro:n=>`Toi et ${n}, vous vous asseyez de part et d’autre du foyer. Deux lumières éclairent mieux qu’une. Quel rite faites-vous ?`,
  evoca:o=>`🏺 Appeler l’esprit : ${o}`,interroga:o=>`🔎 Interroger ${o}`,lumi:'✨ Le rite des deux lumières',niente:'Pas maintenant',presto:'Les rites fatiguent : attendez la prochaine lune.',
  evTesto:(o,cl)=>`Vous posez ${o} entre vous deux et vous chantez doucement, à tour de rôle. C’est un objet sacré du ${cl} : il n’est pas à nous. Que demandez-vous à son esprit ?`,
  evResta:'De rester avec nous, et de nous protéger',evTorna:'De rentrer chez lui, en paix',
  evRestaF:(o,cl)=>`La fumée se penche vers notre autel. ${o} restera ici, parmi les trophées du clan. Le ${cl} le sentira.`,evTornaF:(o,cl)=>`Vous enveloppez ${o} dans de la mousse propre. À l’aube, un apprenti le déposera à la frontière, où le ${cl} le trouvera. Quelque chose, entre les deux clans, s’est dénoué.`,
  boxEv:['Appeler le dieu des autres','Avant de prendre une ville, les Romains en « évoquaient » les dieux : par une formule, ils les invitaient à quitter l’ennemi et à venir à Rome, où ils auraient un plus beau temple. C’est ainsi, raconte Tite-Live (V, 21-22), que Junon fut appelée de Véies en 396 av. J.-C. ; Macrobe (<i>Saturnales</i>, III, 9) rapporte la formule.'],
  intTesto:(o,d)=>`Vous faites tourner ${o} entre vos pattes, l’un après l’autre, sans parler. ${d}`,presagi:['Dans la fumée, il vous semble voir une proie grasse, à l’ouest du camp.','Un instant, vous ressentez la même chose, et aucun des deux ne sait dire quoi.','Une étincelle saute du foyer et se pose entre vous : bon signe, disent les anciens.','L’objet est froid, puis tiède. Quelqu’un, il y a très longtemps, l’a tenu ainsi.'],
  lumiTesto:'Vous chantez ensemble, une note basse et une note haute, jusqu’à ce que les deux voix n’en fassent qu’une. Au camp, les blessés sentent leur douleur s’apaiser.',
  boxLumi:['Le maître et l’élève','Le serment attribué à Hippocrate commence ainsi : celui qui le prononce promet de tenir son maître pour un parent, de partager ses biens avec lui et d’enseigner l’art à ses enfants sans salaire. La médecine, avant d’être un savoir, était une parenté.']}}[LINGUA];
const eGuar=c=>c&&c.clan==='felce'&&(c.rango==='guaritore'||(c.rango==='apprendista'&&c.via==='guaritore'));
const curanti=()=>G.cats.filter(c=>eGuar(c)&&!c.ferito&&c.stato==='campo');
// chi custodisce la tana: se il giocatore è guaritore o apprendista guaritore, l'altro; altrimenti il guaritore (o, in mancanza, l'apprendista)
function custodeTana(){ const C=curanti(); return C.find(c=>c.rango==='guaritore')||C[0]||null; }
addEventListener('DOMContentLoaded',()=>{
 // il custode resta sempre dentro la tana; l'altro curante quasi sempre (quattro volte su cinque)
 if(typeof nuovoPuntoCampo==='function'){ const o=nuovoPuntoCampo; nuovoPuntoCampo=function(c){ if(G&&eGuar(c)&&!c.leader&&(c===custodeTana()||Math.random()<0.8)){ const d=L.tanaGuaritore, a=rnd(0,6.283), r=rnd(4,d.r*0.5); c.tx=d.x+Math.cos(a)*r; c.ty=d.y+Math.sin(a)*r*0.8-2; return; } return o.apply(this,arguments); }; }
 // il riquadro nel pannello: con un clic si va alla tana del guaritore e ci si fa curare
 const inv=document.getElementById('inventario'); if(inv) inv.parentNode.insertBefore(tanaGBox,inv);
 tanaGBox.addEventListener('click',()=>{ if(!G||paused||scena||recitaAtt) return; const p=G.p; p.guida=null; p.daCurare=G.t+90; if(G.dentro==='tanaGuaritore') return; if(G.dentro) esciTana(); setTimeout(()=>avviaGuida('punto',ingressoTana('tanaGuaritore')),G.dentro?900:0); });
 // nel menu: il rito a due, quando guaritore e apprendista guaritore si incontrano (uno dei due è il giocatore)
 if(typeof menuGatto==='function'){ const o=menuGatto; menuGatto=function(c){ const p=G.p, coppia=eGuar(c)&&c!==p&&((p.rango==='guaritore'&&c.rango==='apprendista')||(p.rango==='apprendista'&&p.via==='guaritore'&&c.rango==='guaritore')); if(!coppia) return o.apply(this,arguments);
  const m0=modale; modale=function(t,x,bt){ modale=m0; return m0(t,x,[{t:TANAG.rito,f:()=>ritoADue(c)},...(bt||[])]); }; try{ return o.apply(this,arguments); } finally { modale=m0; } }; }
});
const tanaGBox=document.createElement('div'); tanaGBox.id='tanaGBox';
{ const st=document.createElement('style'); st.textContent=`#tanaGBox{margin:6px 0 8px;padding:8px 10px;border-radius:12px;background:rgba(150,110,255,.14);border:1px solid rgba(190,160,255,.45);font:700 15px system-ui,sans-serif;color:#eadcff;cursor:pointer}
#tanaGBox:hover{background:rgba(150,110,255,.26)} #tanaGBox small{display:block;margin-top:4px;font:700 12px system-ui;color:#ffe08a;opacity:.85} #tanaGBox.urge{border-color:#ff8a7a;box-shadow:0 0 12px rgba(255,120,100,.5)}`; document.head.appendChild(st); }
setInterval(()=>{ if(typeof G==='undefined'||!G||!G.p){ tanaGBox.style.display='none'; return; } const p=G.p, io=p.rango==='guaritore'||p.rango==='gattino';
 tanaGBox.style.display=io?'none':''; tanaGBox.classList.toggle('urge',p.salute<50); const h=TANAG.box+`<small>👉 ${TANAG.porta}</small>`; if(tanaGBox.dataset.h!==h){ tanaGBox.dataset.h=h; tanaGBox.innerHTML=h; }
 // la tana non resta mai vuota: il custode torna dentro
 const cu=custodeTana(), d=L.tanaGuaritore; if(cu&&!paused&&!scena&&dist(cu,d)>d.r*0.75&&!(typeof corteggia!=='undefined'&&corteggia&&corteggia.id===cu.id)){ nuovoPuntoCampo(cu); cu.attesa=0; }
 // arrivato nella tana per farsi curare: il rito parte da solo
 if(p.daCurare&&G.t<p.daCurare&&G.dentro==='tanaGuaritore'&&!paused&&!scena&&!recitaAtt&&!transizione){ p.daCurare=0; p.guida=null; const qui=curanti().filter(c=>dist(c,d)<d.r*1.05), h1=qui.find(c=>c.rango==='guaritore')||qui[0];
  if(!h1) log('🌿 '+TANAG.nessuno,'#e8d9a8'); else { h1.vx=h1.vy=0; if(h1.rango==='guaritore') donoGuaritore(h1,p,'cura'); else curaLeggera(h1); } }
 if(p.daCurare&&G.t>=p.daCurare) p.daCurare=0; },1200);
function ritoADue(c){ const p=G.p, W=stG(), n=nome(c); if(W.ritoDueT!=null&&G.t-W.ritoDueT<MOON) return modale(TANAG.titolo,TANAG.presto,[{t:'🙂'}]);
 const inv=p.inventario||[], sacro=inv.find(t=>OGG[t]&&OGG[t].cat==='culto'), arcano=inv.find(t=>OGG[t]&&OGG[t].cat==='arcano'), bt=[];
 const fatto=()=>{ W.ritoDueT=G.t; segnaEvento(); c.amicizia=(c.amicizia||0)+1; };
 const scena2=(fine)=>avviaScena('coro',[p,c],4,fine);
 if(sacro){ const cl=sacro==='idolo'?'nebbia':sacro==='totem'?'pietre':(G.rubatoDa||'pietre'), on=nomeOgg(sacro), cn=CLAN[cl].nome;
  bt.push({t:TANAG.evoca(on),f:()=>scena2(()=>modale(TANAG.titolo,TANAG.evTesto(on,cn)+stSapere(TANAG.boxEv),[
   {t:TANAG.evResta,f:()=>{ fatto(); inv.splice(inv.indexOf(sacro),1); (G.trofei=G.trofei||[]).push({tipo:sacro,tana:'tanaGuaritore',t:G.t}); tensione(cl,10); log('🏺 '+TANAG.evRestaF(cap(on),cn),'#d9b8ff'); spirito(15,'rito'); }},
   {t:TANAG.evTorna,f:()=>{ fatto(); inv.splice(inv.indexOf(sacro),1); if(G.derubate) for(const k in G.derubate) if(L[k]&&L[k].clan===cl) delete G.derubate[k]; if(G.offesa) delete G.offesa[cl]; tensione(cl,-25); log('🏺 '+TANAG.evTornaF(cap(on),cn),'#c8f0a8'); spirito(8,'rito'); }}]))}); }
 if(arcano){ const on=nomeOgg(arcano); bt.push({t:TANAG.interroga(on),f:()=>scena2(()=>{ fatto(); modale(TANAG.titolo,TANAG.intTesto(on,pick(TANAG.presagi))+'<br><br><i>'+OGG[arcano].d[LINGUA]+'</i>',[{t:'🔎',f:()=>spirito(6,'rito')}]); })}); }
 bt.push({t:TANAG.lumi,f:()=>scena2(()=>{ fatto(); for(const f of G.cats) if(f.clan==='felce'&&(f.ferito||f.hp<f.hpMax)){ f.hp=Math.min(f.hpMax,f.hp+f.hpMax*0.5); if(f.hp>=f.hpMax*0.85){ f.ferito=false; if(f.stato==='ferito'){ f.stato='campo'; nuovoPuntoCampo(f); } } }
   p.cure=(p.cure||0)+1; modale(TANAG.titolo,TANAG.lumiTesto+stSapere(TANAG.boxLumi),[{t:'✨',f:()=>spirito(5,'rito')}]); })},{t:TANAG.niente});
 modale(TANAG.titolo,TANAG.intro(n),bt); }

// ================== il grande gatto di pietra ==================
// richiesta del 12 novembre 2026
//. G.colosso={x,y,massi,visto,...}: un masso ogni luna e mezza circa
// 24 in tutto; il giocatore guaritore (o apprendista guaritore) può portarne uno per luna. La forma 3D è in js/mondo3d.js (aggiornaColosso).
const COLOSSO_N=15; // tre clan, cinque massi per guaritore (scelta del 13 novembre 2026)
const COL={
 it:{voce:'🗿 Al campo si mormora: i guaritori dei tre clan, di notte, portano dei massi in un punto del bosco. Nessuno dice dove.',trovato:'🗿 Hai trovato il luogo dei massi! Ora è segnato sulla mappa.',
  guarda:'guarda il grande gatto di pietra',posa:'posa un masso sul grande gatto',tit:'🗿 Il grande gatto di pietra',
  stadi:['Per ora è un cerchio di massi nell’erba. Sopra ognuno c’è l’impronta di una zampa, fatta con l’ocra.','I massi salgono a strati. Si indovina già una schiena, grande come una tana.','Ora ha un petto e un collo. Chi passa di qui abbassa la voce senza sapere perché.','Gli manca poco: la testa è al suo posto, e guarda verso il fiume.'],
  conta:(n,t)=>`Massi posati: <b>${n} di ${t}</b>.`,posato:n=>`🗿 Spingi il masso fino in cima e lo incastri tra gli altri. Massi posati: ${n}.`,stanco:'Hai già portato un masso in questa luna: anche le zampe di un guaritore hanno un limite.',soloGuar:'Soltanto i guaritori posano i massi. Ma chiunque può venire a guardare.',
  finito:'🗿 Il grande gatto di pietra è finito! I guaritori dei tre clan chiamano tutti nel bosco.',fineTit:'🗿 Il gatto che guarda il fiume',
  fine:'I gatti dei tre clan sono qui, mescolati, e nessuno soffia. I guaritori accendono due fuochi negli occhi del grande gatto, e per un momento sembra che guardi ciascuno di voi. Poi, tutti insieme, un solo miagolio.<br><br>Nessuno saprebbe dire a chi appartenga: lo hanno costruito tutti, un masso alla volta.',
  box:['Prima il santuario, poi il villaggio','A Göbekli Tepe, in Turchia, circa undicimila anni fa, gruppi di cacciatori e raccoglitori alzarono grandi pilastri di pietra scolpiti con volpi, serpenti e avvoltoi, prima ancora di coltivare i campi. L’archeologo Klaus Schmidt, che li ha scavati dal 1995, ne trasse un’idea: forse non fu il villaggio a far nascere il santuario, ma il lavoro comune per il santuario a far nascere il villaggio.']},
 en:{voce:'🗿 A rumour runs through camp: by night, the healers of the three clans carry boulders to a spot in the forest. Nobody says where.',trovato:'🗿 You have found the place of the boulders! It is now marked on the map.',
  guarda:'look at the great stone cat',posa:'lay a boulder on the great cat',tit:'🗿 The great stone cat',
  stadi:['For now it is a ring of boulders in the grass. On each one is a paw print, made with ochre.','The boulders rise in layers. You can already guess a back, as big as a den.','Now it has a chest and a neck. Those who pass lower their voices without knowing why.','It is almost done: the head is in place, looking towards the river.'],
  conta:(n,t)=>`Boulders laid: <b>${n} of ${t}</b>.`,posato:n=>`🗿 You push the boulder to the top and wedge it among the others. Boulders laid: ${n}.`,stanco:'You have already carried a boulder this moon: even a healer’s paws have a limit.',soloGuar:'Only healers lay the boulders. But anyone may come and look.',
  finito:'🗿 The great stone cat is finished! The healers of the three clans call everyone into the forest.',fineTit:'🗿 The cat that watches the river',
  fine:'The cats of the three clans are here, mingled, and nobody hisses. The healers light two fires in the great cat’s eyes, and for a moment it seems to look at each of you. Then, all together, a single cry.<br><br>Nobody could say whose it is: everyone built it, one boulder at a time.',
  box:['First the sanctuary, then the village','At Göbekli Tepe, in Turkey, about eleven thousand years ago, groups of hunter-gatherers raised great stone pillars carved with foxes, snakes and vultures, before they had even begun to farm. The archaeologist Klaus Schmidt, who excavated them from 1995, drew an idea from this: perhaps it was not the village that gave rise to the sanctuary, but the shared work on the sanctuary that gave rise to the village.']},
 fr:{voce:'🗿 On murmure au camp que, la nuit, les guérisseurs des trois clans portent des blocs de pierre dans un coin de la forêt. Personne ne dit où.',trovato:'🗿 Tu as trouvé le lieu des pierres ! Il est maintenant marqué sur la carte.',
  guarda:'regarde le grand chat de pierre',posa:'pose un bloc sur le grand chat',tit:'🗿 Le grand chat de pierre',
  stadi:['Pour l’instant, c’est un cercle de blocs dans l’herbe. Sur chacun, une empreinte de patte tracée à l’ocre.','Les blocs montent par couches. On devine déjà un dos, grand comme une tanière.','Il a maintenant un poitrail et un cou. Ceux qui passent baissent la voix sans savoir pourquoi.','Il n’y manque presque rien : la tête est en place, tournée vers la rivière.'],
  conta:(n,t)=>`Blocs posés : <b>${n} sur ${t}</b>.`,posato:n=>`🗿 Tu pousses le bloc jusqu’en haut et tu le cales entre les autres. Blocs posés : ${n}.`,stanco:'Tu as déjà porté un bloc pendant cette lune : même les pattes d’un guérisseur ont leurs limites.',soloGuar:'Seuls les guérisseurs posent les blocs. Mais chacun peut venir regarder.',
  finito:'🗿 Le grand chat de pierre est terminé ! Les guérisseurs des trois clans appellent tout le monde dans la forêt.',fineTit:'🗿 Le chat qui regarde la rivière',
  fine:'Les chats des trois clans sont là, mêlés, et personne ne crache. Les guérisseurs allument deux feux dans les yeux du grand chat, et pendant un instant il semble regarder chacun de vous. Puis, tous ensemble, un seul miaulement.<br><br>Personne ne saurait dire à qui il appartient : tous l’ont bâti, une pierre après l’autre.',
  box:['D’abord le sanctuaire, ensuite le village','À Göbekli Tepe, en Turquie, il y a environ onze mille ans, des groupes de chasseurs-cueilleurs ont dressé de grands piliers de pierre sculptés de renards, de serpents et de vautours, avant même de cultiver les champs. L’archéologue Klaus Schmidt, qui les a fouillés à partir de 1995, en a tiré une idée : ce n’est peut-être pas le village qui a fait naître le sanctuaire, mais le travail commun pour le sanctuaire qui a fait naître le village.']}}[LINGUA];
function colossoCrea(){ for(let i=0;i<200;i++){ const x=rnd(140,FX0-160), y=rnd(160,WH-160); if(acqua(x,y)||inCampo(x,y,260)||Math.hypot(x-L.lago.x,y-L.lago.y)<L.lago.r+160||Math.hypot(x-L.stagno.x,y-L.stagno.y)<L.stagno.r+140||Math.hypot(x-L.roccia.x,y-L.roccia.y)<300) continue; return {x,y,massi:0,visto:false,prossimo:G.t+MOON*1.5}; }
 return {x:160,y:WH-220,massi:0,visto:false,prossimo:G.t+MOON*1.5}; }
// l'azione di Spazio vicino al grande gatto (chiamata da contestoTana in js/leggende.js)
function colossoVicino(p){ const C=G&&G.colosso; if(!C||C.massi<1||Math.hypot(p.x-C.x,p.y-C.y)>150) return null; const guar=p.rango==='guaritore'||(p.rango==='apprendista'&&p.via==='guaritore');
 if(guar&&C.massi<COLOSSO_N) return {t:COL.posa,f:()=>colossoPosa()}; return {t:COL.guarda,f:()=>colossoGuarda()}; }
function colossoGuarda(){ const C=G.colosso, st=C.massi>=COLOSSO_N?COL.fine:COL.stadi[Math.min(3,Math.floor(C.massi/COLOSSO_N*4))]; const p=G.p, guar=p.rango==='guaritore'||(p.rango==='apprendista'&&p.via==='guaritore');
 modale(COL.tit,st+'<br><br>'+COL.conta(Math.min(C.massi,COLOSSO_N),COLOSSO_N)+(C.massi<COLOSSO_N&&!guar?'<br><br><i>'+COL.soloGuar+'</i>':''),[{t:'🗿'}]); }
function colossoPosa(){ const C=G.colosso, p=G.p; if(C.mioMasso!=null&&G.t-C.mioMasso<MOON) return log('🗿 '+COL.stanco,'#e8d9a8'); C.mioMasso=G.t; segnaEvento();
 avviaScena('annusa',[p],1.6,()=>{ C.massi++; C.miei=(C.miei||0)+1; log(COL.posato(C.massi),'#d9c8ff'); scintille(p.x,p.y-20,'#c9b4ff',16); spirito(4,'rito');
  if(C.miei===MASSI_MISSIONE){ p.cure=Math.max(p.cure||0,5); tensione('nebbia',-15); tensione('pietre',-15); setTimeout(()=>{ if(G&&!paused&&!scena) modale(COE.massiTit,COE.massiFine+stSapere(COE.boxMassi),[{t:'🗿',f:()=>spirito(15,'rito')}]); },400); } }); }
function colossoFesta(){ const C=G.colosso, p=G.p; C.festa=true; if(window.SOLIDI) window.SOLIDI=window.SOLIDI.filter(q=>Math.hypot(q.x-C.x,q.y-C.y)>430); segnaEvento(); G.treguaFino=Math.max(G.treguaFino||0,G.t+MOON*6); G.treguaAvviso=true; tensione('nebbia',-60); tensione('pietre',-60); // la radura si allarga per la festa: spariscono anche i tronchi
 // i tre clan si radunano ai piedi del grande gatto
 const ospiti=[...G.cats.filter(c=>c.clan==='felce'&&!c.ferito&&c.rango!=='gattino').slice(0,7),...G.cats.filter(c=>c.clan!=='felce'&&c.stato!=='fuga').slice(0,8)];
 // davanti al grande gatto (guarda verso il fiume): i clan a semicerchio, il giocatore dietro di loro, la telecamera che inquadra la statua intera
 const dir=C.x<(FX0+FX1)/2?1:-1, cx=C.x+dir*175;
 ospiti.forEach((c,i)=>{ const fila=i%2, n=Math.ceil(ospiti.length/2), k=Math.floor(i/2); c.x=cx+dir*fila*45; c.y=C.y+(k-(n-1)/2)*44+fila*20; c.vx=c.vy=0; c.tx=c.x; c.ty=c.y; c.attesa=60; c.flip=-dir; c.dir=dir>0?Math.PI:0; if(c.clan!=='felce'){ c.stato='pattuglia'; c.amicoPrima=c.amico; c.amico=true; c.pacificoFino=G.t+90; } setPosa(c,'siede',60); }); // due file davanti alla statua
 p.x=C.x+dir*290; p.y=C.y; p.vx=p.vy=0; p.guida=null; p.caccia=null; p.flip=-dir;
 if(window.R3D){ R3D.cam3.yaw=Math.atan2(C.x-p.x,C.y-p.y); R3D.cam3.pitch=0.32; R3D.cam3.dist=5.5; R3D.cam3.rotella=performance.now()+90000; R3D.cam3.manuale=G.t+90; R3D.cam3.init=false; }
 if(window.suonoMiaoGrande) setTimeout(suonoMiaoGrande,2500);
 const V=VIVO_T[LINGUA]||VIVO_T.it, fase=k=>()=>{ C.vivo={fase:k,t0:G.t,verso:dir}; }, sacro=()=>{ for(const c of ospiti) if(G.cats.includes(c)) setPosa(c,'canta',12); if(window.suonoMiaoGrande) suonoMiaoGrande(); };
 recita([{t:COL.finito.replace('🗿 ',''),dur:6,f:fase(0)},{t:V[0],dur:6,f:fase(1)},{t:V[1],dur:7,f:fase(2)},{t:V[2],dur:6,f:fase(3)},{t:V[3],dur:8,f:()=>{ fase(4)(); sacro(); }},{t:V[4],dur:6,f:fase(5)}],
  ()=>{ C.vivo=null; C.animato=true; modale(COL.fineTit,COL.fine+stSapere(COL.box),[{t:'🗿',f:()=>{ spirito(20,'rito'); parata(ospiti); }}]); }); }
const VIVO_T={
 it:['Poi la pietra trema. Un brivido corre lungo il grande gatto, dai massi della base fino alla punta delle orecchie.','Il grande gatto gira la testa, lentamente, e guarda i tre clan uno per uno. Nei suoi occhi ardono due fuochi.','Alza una zampa sopra di voi, come per benedirvi. Nessuno respira.','Una luce d’oro esce dalla pietra e sale tra le stelle: è lo spirito di tutti i gatti che l’hanno costruito, un masso alla volta.','Poi il grande gatto torna immobile. Ma i suoi occhi, da quella notte, non si spengono più.'],
 en:['Then the stone trembles. A shiver runs through the great cat, from the stones of its base to the tips of its ears.','The great cat turns its head, slowly, and looks at the three clans one by one. Two fires burn in its eyes.','It raises a paw above you all, as if to bless you. Nobody breathes.','A golden light leaves the stone and rises among the stars: it is the spirit of all the cats who built it, one stone at a time.','Then the great cat is still again. But from that night on, its eyes never go out.'],
 fr:['Puis la pierre tremble. Un frisson parcourt le grand chat, des blocs de sa base jusqu’au bout de ses oreilles.','Le grand chat tourne la tête, lentement, et regarde les trois clans l’un après l’autre. Deux feux brûlent dans ses yeux.','Il lève une patte au-dessus de vous, comme pour vous bénir. Personne ne respire.','Une lumière d’or sort de la pierre et monte parmi les étoiles : c’est l’esprit de tous les chats qui l’ont bâti, un bloc après l’autre.','Puis le grand chat redevient immobile. Mais ses yeux, depuis cette nuit, ne s’éteignent plus.'] };
setInterval(()=>{ if(typeof G==='undefined'||!G||!G.p||paused) return; const p=G.p; if(!G.colosso) G.colosso=colossoCrea(); const C=G.colosso;
 if(C.massi>COLOSSO_N) C.massi=COLOSSO_N; if(C.altri==null) C.altri=Math.max(0,C.massi-(C.miei||0));
 // i guaritori degli altri due clan portano dieci massi; gli ultimi cinque toccano al guaritore della Felce: il giocatore, se è guaritore o apprendista guaritore
 if(C.massi<COLOSSO_N&&G.t>=C.prossimo&&!G.raid&&C.altri<(eGuarP(p)?COLOSSO_N-MASSI_MISSIONE:COLOSSO_N)){ C.prossimo=G.t+MOON*(1.2+Math.random()*0.7); C.massi++; C.altri++; if(C.massi===2&&!C.visto) log(COL.voce,'#d9c8ff'); }
 if(!C.visto&&C.massi>=1&&!G.dentro&&Math.hypot(p.x-C.x,p.y-C.y)<300){ C.visto=true; log(COL.trovato,'#d9c8ff'); if(typeof mostraToast==='function') mostraToast(COL.tit,'#d9c8ff'); }
 if(C.massi>=COLOSSO_N&&!C.annunciato){ C.annunciato=true; C.visto=true; log(COL.finito,'#ffe08a'); if(typeof annuncia==='function') annuncia('🌟 '+COL.tit.replace('🗿 ',''),'#ffe08a'); }
 if(C.massi>=COLOSSO_N&&!C.festa&&!G.dentro&&Math.hypot(p.x-C.x,p.y-C.y)<220&&typeof storiaLibera==='function'&&storiaLibera(5)) colossoFesta(); },2000);
// il grande gatto è solido
addEventListener('DOMContentLoaded',()=>{ if(typeof solidiBosco!=='function') return; const o=solidiBosco; solidiBosco=function(p){ const r=o.apply(this,arguments); const C=G&&G.colosso; if(C&&C.massi>=1&&!G.dentro){ const dx=p.x-C.x, dy=p.y-C.y, d=Math.hypot(dx,dy)||1, R0=100; if(d<R0){ p.x=C.x+dx/d*R0; p.y=C.y+dy/d*R0; } } return r; }; });

// ================== coerenza: amici, orda, guaritore in guerra, aiuti dei maestri ==================
// richieste del 13 novembre 2026
const COE={
 it:{nonCombatto:['«Contro di te non combatto: siamo amici.»','«Non alzo la zampa su chi ha toccato il mio naso.»','«Che si battano gli altri. Io e te no.»'],nonCompagno:'«Non combatto contro chi ha cresciuto dei cuccioli con me.»',
  rottura:[n=>`«Mi attacchi, ${n}? Ci siamo toccati il naso, e tu sfoderi gli artigli. Un’amicizia tradita non si ricuce: da oggi siamo nemici.»`,n=>`«Ti lasciavo passare perché eri un amico, ${n}. Chi colpisce un amico non ha più amici oltre il fiume. Difenditi!»`,n=>`«Il mio clan mi chiedeva perché mi fidassi di te, ${n}. Adesso lo so: avevano ragione loro. Peggio per te!»`],
  rotturaLog:n=>`💔 ${n} non è più tuo amico: hai attaccato per primo, e te lo ha detto in faccia.`,
  attaccoTit:'Attaccare un amico?',attacco:n=>`${n} è tuo amico: non ti attaccherà mai per primo. Se lo colpisci, l’amicizia finisce, e il suo clan lo verrà a sapere.`,attaccoSi:'⚔️ Attaccare lo stesso',attaccoNo:'Lasciar perdere',
  marcia:(k,c,altri)=>`${k} lancia il grido di guerra dalla Roccia Alta. In testa all’orda cammina <b>${c}</b>: tu ${altri?'e '+altri+' ':''}lo seguite. Resta vicino a chi guida, e colpisci quando colpisce.`,
  diQua:['«Di qua! Restate uniti!»','«Dietro di me!»','«Al guado, e in silenzio.»'],
  boxSegui:['Chi segue e chi guida','Tacito racconta che presso i Germani ogni capo aveva un seguito di guerrieri scelti: «i capi combattono per la vittoria, i compagni per il capo». Per un compagno, tornare vivo dalla battaglia in cui il capo era caduto era una vergogna per tutta la vita (<i>Germania</i>, 13-14).'],
  boxOrda:['L’orda primitiva','Darwin immaginò che i primi uomini vivessero in piccoli gruppi, ciascuno guidato dal maschio più forte (<i>L’origine dell’uomo</i>, 1871). Freud ne trasse il mito dell’«orda primitiva»: i figli che si alleano contro il padre e poi, per non ricominciare, si danno delle regole (<i>Totem e tabù</i>, 1913). Gli antropologi di oggi non la considerano storia vera: è un racconto sulle origini. Chi propone la guerra, comunque, cammina davanti.'],
  proponi:'proponi una guerra dalla Roccia Alta',proponiTit:'📯 Proporre una guerra',proponiTesto:'Dalla Roccia Alta il clan ti ascolta. Chi propone una guerra la guida: camminerai in testa all’orda, e gli altri ti seguiranno.',nebbia:'⚔️ Contro il Clan della Nebbia',pietre:'⚔️ Contro il Clan delle Pietre',niente:'Nessuna guerra, per ora',
  veglia:'veglia sulla battaglia',inMarcia:c=>`🔮 Segui l’orda a distanza. ${c?c+' cammina in testa.':''} Tu non combatti: ti fermerai dove si vede il campo di battaglia.`,
  posto:'🔮 Ti fermi su un’altura, a debita distanza. Da qui vedi tutta la battaglia, e i feriti sanno dove trovarti.',aiuto:['«Guaritore, aiutami!»','«Una zampa… non mi regge più.»','«Mi hanno preso al fianco. Fai presto!»'],
  curato:(n,f)=>`🌿 ${n} è venut${f?'a':'o'} da te ferit${f?'a':'o'}: ${f?'la':'lo'} curi sul posto, e torna nella mischia.`,dopoTit:'🔮 Dopo la battaglia',dopo:n=>n?`Hai vegliato da lontano e curato <b>${n}</b> ${n===1?'ferito':'feriti'} sul campo. Nessuno di loro è rimasto indietro.`:'Hai vegliato da lontano. Questa volta nessuno ha avuto bisogno di te: è la notizia migliore.',
  ancheSe:['«Anche se siamo nemici, sei un guaritore. Aiutami.»','«I nostri clan si graffiano, lo so. Ma il male non guarda i confini.»','«Anche se siamo nemici… da noi si dice che le tue zampe guariscono chiunque.»'],
  anzTit:'📜 L’anziano viene da te',anziano:'«Hai l’età per la cerimonia, ma non hai ancora ascoltato nessuno dei miei racconti. Un gatto senza storie non sa da dove viene. Siediti: te ne racconto uno adesso.»',anzApp:'«Ti mancano dei racconti per finire l’apprendistato. Siediti qui: le storie non pesano, e si portano dappertutto.»',ascolta:'📜 Ascoltare',
  mentoreViene:v=>`«Ti manca soltanto l’allenamento (${v}). Hai un momento? Alleniamoci adesso.»`,allena:'⚔️ Allenarsi',nonOra:'Non ora',
  massi:'Massi al grande gatto',massiNuova:'🗿 Missione del guaritore: porta cinque massi al grande gatto di pietra.',massiTit:'🗿 Cinque massi',
  massiFine:'Hai portato cinque massi con le tue zampe. I guaritori della Nebbia e delle Pietre ti hanno visto farlo, luna dopo luna: per loro adesso sei uno dei costruttori, e il tuo clan lo sa.',
  boxMassi:['Pietre che vengono da lontano','Le «pietre blu» di Stonehenge, alte circa due metri, vengono dalle colline di Preseli, nel Galles, a circa 240 chilometri. Gli archeologi guidati da Mike Parker Pearson hanno ritrovato le cave da cui furono staccate, intorno a cinquemila anni fa. Nessun gruppo poteva farcela da solo: portare le pietre era già il modo di stare insieme.']},
 en:{nonCombatto:['“I won’t fight you: we are friends.”','“I don’t raise a paw against one who touched my nose.”','“Let the others fight. Not you and me.”'],nonCompagno:'“I won’t fight the one who raised kits with me.”',
  rottura:[n=>`“You attack me, ${n}? We touched noses, and you unsheathe your claws. A betrayed friendship cannot be mended: from today we are enemies.”`,n=>`“I let you pass because you were a friend, ${n}. Whoever strikes a friend has no friends left across the river. Defend yourself!”`,n=>`“My clan kept asking why I trusted you, ${n}. Now I know: they were right. Too bad for you!”`],
  rotturaLog:n=>`💔 ${n} is no longer your friend: you struck first, and they told you so to your face.`,
  attaccoTit:'Attack a friend?',attacco:n=>`${n} is your friend and will never strike first. If you hit them, the friendship ends, and their clan will hear of it.`,attaccoSi:'⚔️ Attack anyway',attaccoNo:'Leave it',
  marcia:(k,c,altri)=>`${k} gives the war cry from the High Rock. At the head of the horde walks <b>${c}</b>: you ${altri?'and '+altri+' ':''}follow. Stay close to the one who leads, and strike when they strike.`,
  diQua:['“This way! Stay together!”','“Behind me!”','“To the ford, and quietly.”'],
  boxSegui:['Those who follow and those who lead','Tacitus tells that among the Germans each chief had a retinue of chosen warriors: “the chiefs fight for victory, the companions for their chief”. For a companion, to come back alive from the battle in which the chief had fallen was a lifelong disgrace (<i>Germania</i>, 13-14).'],
  boxOrda:['The primal horde','Darwin imagined that the earliest humans lived in small groups, each led by the strongest male (<i>The Descent of Man</i>, 1871). Freud turned this into the myth of the “primal horde”: the sons band together against the father and then, so as not to start again, give themselves rules (<i>Totem and Taboo</i>, 1913). Today’s anthropologists do not take it as real history: it is a tale about origins. Still, whoever proposes the war walks in front.'],
  proponi:'propose a war from the High Rock',proponiTit:'📯 Proposing a war',proponiTesto:'From the High Rock the clan listens to you. Whoever proposes a war leads it: you will walk at the head of the horde, and the others will follow.',nebbia:'⚔️ Against the Mist Clan',pietre:'⚔️ Against the Stone Clan',niente:'No war, for now',
  veglia:'watch over the battle',inMarcia:c=>`🔮 You follow the horde at a distance. ${c?c+' walks at the head.':''} You do not fight: you will stop where the battlefield can be seen.`,
  posto:'🔮 You stop on a rise, at a safe distance. From here you see the whole battle, and the wounded know where to find you.',aiuto:['“Healer, help me!”','“My paw… it won’t hold me.”','“They got my flank. Be quick!”'],
  curato:n=>`🌿 ${n} came to you wounded: you heal them on the spot, and they go back into the fray.`,dopoTit:'🔮 After the battle',dopo:n=>n?`You watched from afar and healed <b>${n}</b> wounded on the field. None of them was left behind.`:'You watched from afar. This time nobody needed you: that is the best news.',
  ancheSe:['“Even though we are enemies, you are a healer. Help me.”','“Our clans scratch each other, I know. But sickness does not look at borders.”','“Even though we are enemies… at home they say your paws heal anyone.”'],
  anzTit:'📜 The elder comes to you',anziano:'“You are old enough for the ceremony, little one, but you have not yet heard any of my tales. A cat without stories does not know where it comes from. Sit down: I will tell you one now.”',anzApp:'“You still need some tales to finish your apprenticeship. Sit here: stories weigh nothing, and you carry them everywhere.”',ascolta:'📜 Listen',
  mentoreViene:v=>`“All you are missing is training (${v}). Do you have a moment? Let’s train now.”`,allena:'⚔️ Train',nonOra:'Not now',
  massi:'Boulders for the great cat',massiNuova:'🗿 Healer’s mission: carry five boulders to the great stone cat.',massiTit:'🗿 Five boulders',
  massiFine:'You have carried five boulders with your own paws. The healers of Mist and Stone watched you do it, moon after moon: to them you are now one of the builders, and your clan knows it.',
  boxMassi:['Stones from far away','The “bluestones” of Stonehenge, about two metres tall, come from the Preseli Hills in Wales, about 240 kilometres away. Archaeologists led by Mike Parker Pearson have found the quarries they were taken from, around five thousand years ago. No single group could have done it alone: carrying the stones was already a way of being together.']},
 fr:{nonCombatto:['« Contre toi, je ne me bats pas : nous sommes amis. »','« Je ne lève pas la patte sur qui a touché mon nez. »','« Que les autres se battent. Pas toi et moi. »'],nonCompagno:'« Je ne me bats pas contre qui a élevé des chatons avec moi. »',
  rottura:[n=>`« Tu m’attaques, ${n} ? Nous nous sommes touché le nez, et tu sors les griffes. Une amitié trahie ne se recoud pas : à partir d’aujourd’hui, nous sommes ennemis. »`,n=>`« Je te laissais passer parce que tu étais un ami, ${n}. Qui frappe un ami n’a plus d’amis de l’autre côté de la rivière. Défends-toi ! »`,n=>`« Mon clan me demandait pourquoi je te faisais confiance, ${n}. Maintenant je le sais : ils avaient raison. Tant pis pour toi ! »`],
  rotturaLog:n=>`💔 ${n} n’est plus ton ami : tu as frappé en premier, et il te l’a dit en face.`,
  attaccoTit:'Attaquer un ami ?',attacco:n=>`${n} est ton ami : il ne t’attaquera jamais le premier. Si tu le frappes, l’amitié est finie, et son clan le saura.`,attaccoSi:'⚔️ Attaquer quand même',attaccoNo:'Laisser tomber',
  marcia:(k,c,altri)=>`${k} lance le cri de guerre depuis le Haut Rocher. En tête de la horde marche <b>${c}</b> : toi ${altri?'et '+altri+' ':''}le suivez. Reste près de celui qui guide, et frappe quand il frappe.`,
  diQua:['« Par ici ! Restez groupés ! »','« Derrière moi ! »','« Au gué, et en silence. »'],
  boxSegui:['Ceux qui suivent et ceux qui guident','Tacite raconte que chez les Germains chaque chef avait une suite de guerriers choisis : « les chefs combattent pour la victoire, les compagnons pour leur chef ». Pour un compagnon, revenir vivant de la bataille où le chef était tombé était une honte pour toute la vie (<i>La Germanie</i>, 13-14).'],
  boxOrda:['La horde primitive','Darwin a imaginé que les premiers hommes vivaient en petits groupes, chacun mené par le mâle le plus fort (<i>La Filiation de l’homme</i>, 1871). Freud en a tiré le mythe de la « horde primitive » : les fils s’allient contre le père puis, pour ne pas recommencer, se donnent des règles (<i>Totem et tabou</i>, 1913). Les anthropologues d’aujourd’hui n’y voient pas une histoire vraie : c’est un récit des origines. Reste que celui qui propose la guerre marche devant.'],
  proponi:'propose une guerre depuis le Haut Rocher',proponiTit:'📯 Proposer une guerre',proponiTesto:'Du Haut Rocher, le clan t’écoute. Qui propose une guerre la mène : tu marcheras en tête de la horde, et les autres te suivront.',nebbia:'⚔️ Contre le Clan de la Brume',pietre:'⚔️ Contre le Clan des Pierres',niente:'Pas de guerre pour l’instant',
  veglia:'veille sur la bataille',inMarcia:c=>`🔮 Tu suis la horde à distance. ${c?c+' marche en tête.':''} Tu ne te bats pas : tu t’arrêteras là où l’on voit le champ de bataille.`,
  posto:'🔮 Tu t’arrêtes sur une hauteur, à bonne distance. D’ici tu vois toute la bataille, et les blessés savent où te trouver.',aiuto:['« Guérisseur, aide-moi ! »','« Ma patte… elle ne me porte plus. »','« Ils m’ont eu au flanc. Fais vite ! »'],
  curato:(n,f)=>`🌿 ${n} est venu${f?'e':''} à toi blessé${f?'e':''} : tu ${f?'la':'le'} soignes sur place, et ${f?'elle':'il'} retourne dans la mêlée.`,dopoTit:'🔮 Après la bataille',dopo:n=>n?`Tu as veillé de loin et soigné <b>${n}</b> ${n===1?'blessé':'blessés'} sur le terrain. Aucun n’est resté en arrière.`:'Tu as veillé de loin. Cette fois, personne n’a eu besoin de toi : c’est la meilleure nouvelle.',
  ancheSe:['« Même si nous sommes ennemis, tu es guérisseur. Aide-moi. »','« Nos clans se griffent, je sais. Mais le mal ne regarde pas les frontières. »','« Même si nous sommes ennemis… chez nous on dit que tes pattes guérissent n’importe qui. »'],
  anzTit:'📜 L’ancien vient à toi',anziano:'« Tu as l’âge de la cérémonie, mais tu n’as encore écouté aucun de mes récits. Un chat sans histoires ne sait pas d’où il vient. Assieds-toi : je t’en raconte un maintenant. »',anzApp:'« Il te manque des récits pour finir ton apprentissage. Assieds-toi ici : les histoires ne pèsent rien, et on les emporte partout. »',ascolta:'📜 Écouter',
  mentoreViene:v=>`« Il ne te manque que l’entraînement (${v}). Tu as un moment ? Entraînons-nous maintenant. »`,allena:'⚔️ S’entraîner',nonOra:'Pas maintenant',
  massi:'Blocs pour le grand chat',massiNuova:'🗿 Mission du guérisseur : porte cinq blocs au grand chat de pierre.',massiTit:'🗿 Cinq blocs',
  massiFine:'Tu as porté cinq blocs de tes propres pattes. Les guérisseurs de la Brume et des Pierres t’ont vu faire, lune après lune : pour eux tu es maintenant l’un des bâtisseurs, et ton clan le sait.',
  boxMassi:['Des pierres venues de loin','Les « pierres bleues » de Stonehenge, hautes d’environ deux mètres, viennent des collines de Preseli, au pays de Galles, à environ 240 kilomètres. Les archéologues menés par Mike Parker Pearson ont retrouvé les carrières d’où elles furent détachées, il y a environ cinq mille ans. Aucun groupe ne pouvait y arriver seul : porter les pierres, c’était déjà une manière d’être ensemble.']}}[LINGUA];
window.COE_T=COE;
const MASSI_MISSIONE=5;
const eGuarP=p=>p.rango==='guaritore'||(p.rango==='apprendista'&&p.via==='guaritore');
// un gatto di un altro clan legato al giocatore: amico stabile, compagno, o genitore dei suoi cuccioli
function legato(e){ if(!e||e.clan==='felce'||e.tradito||typeof G==='undefined'||!G) return false; const p=G.p; return (e.amico&&e.pacificoFino==null)||!!e.amicoPrima||p.compagno===e.id; }
function rompiAmicizia(e){ const p=G.p; e.tradito=true; e.amico=false; e.amicoPrima=false; e.conosciuto=0; e.pacificoFino=null; e.furioso=G.t+MOON; tensione(e.clan,10);
 parla(e,pick(COE.rottura)(nome(p)),7); if(typeof mettiAFuoco==='function') mettiAFuoco(e,3000); log(COE.rotturaLog(nome(e)),'#ff9a8a'); }
let ordaAttesa=null, vegliaCurati=0, vegliaAttiva=false, vegliaFine=0, tDiQua=0;
addEventListener('DOMContentLoaded',()=>{
 // gli amici restano fuori dalle zuffe: i compagni non li cercano, e nemmeno il giocatore quando combatte in automatico
 if(typeof nemicoVicino==='function'){ const o=nemicoVicino; nemicoVicino=function(c,R){ const p=G.p; if(c===p&&!G.raid&&!p.auto) return o.apply(this,arguments);
  let best=null,bd=R; for(const e of G.cats){ if(e.clan==='felce'||e.stato==='fuga'||legato(e)) continue; const d=dist(c,e); if(d<bd){bd=d;best=e;} } return best; }; }
 if(typeof colpisci==='function'){ const o=colpisci; colpisci=function(a,b){ const p=G.p;
  if(G.bolla&&(a===p||b===p)) return; // il guaritore che veglia non colpisce e non è colpito
  if(b===p&&legato(a)) return;
  if(a===p&&legato(b)) rompiAmicizia(b); // cambia idea soltanto se lo attacchi tu, e lo dice
  else if((a.clan==='felce'&&legato(b))||(b.clan==='felce'&&legato(a))) return;
  return o.apply(this,arguments); }; }
 if(typeof lottaNemico==='function'){ const o=lottaNemico; lottaNemico=function(e){ if(!legato(e)) return o.apply(this,arguments);
  modale(COE.attaccoTit,COE.attacco(nome(e)),[{t:COE.attaccoNo},{t:COE.attaccoSi,f:()=>{ rompiAmicizia(e); setTimeout(()=>{ if(G&&G.cats.includes(e)&&!paused&&!scena) o(e); },1800); }}]); }; }
 // chi è chiamato alle armi segue; chi propone la guerra dalla Roccia Alta guida
 if(typeof iniziaGuerra==='function'){ const o=iniziaGuerra; iniziaGuerra=function(cl,chiamata){ ordaAttesa={chiamata:!!chiamata,quando:performance.now()}; return o.apply(this,arguments); }; }
 if(typeof modale==='function'){ const o=modale; modale=function(tit,testo,bt){
  if(ordaAttesa&&G&&G.raid&&String(tit).indexOf('⚔️')===0&&performance.now()-ordaAttesa.quando<30000){ const ch=ordaAttesa.chiamata, p=G.p; ordaAttesa=null;
   if(!ch) testo=testo+stSapere(COE.boxOrda);
   else if(!p.leader){ const seg=G.cats.filter(c=>c.clan==='felce'&&c.stato==='segui').sort((a,b)=>((b.leader?1:0)-(a.leader?1:0))||((b.rango==='guerriero')-(a.rango==='guerriero'))||(forza(b)-forza(a))||(lune(b)-lune(a))), c=seg[0];
    if(c) G.raid.condottiero=c.id; const k=capo(), altri=seg.slice(1).map(nome).join(', ');
    if(p.rango==='guaritore'){ G.bolla=true; G.veglia=true; vegliaAttiva=true; vegliaFine=0; vegliaCurati=0; testo=COE.inMarcia(c?nome(c):'')+stSapere(GUAR.boxB); bt=[{t:'🔮',f:()=>{ p.auto={tipo:'marcia',percorso:percorsoVerso(G.raid.luogo)}; }}]; }
    else if(c) testo=COE.marcia(k?nome(k):nome(c),nome(c),altri)+stSapere(COE.boxSegui); } }
  return o.call(this,tit,testo,bt); }; }
 // il condottiero cammina davanti, gli altri dietro di lui; i feriti cercano il guaritore che veglia
 if(typeof aggiornaFelce==='function'){ const o=aggiornaFelce; aggiornaFelce=function(c,dt){ const r=G.raid, p=G.p;
  if(c.stato==='soccorso'){ if(!vegliaAttiva&&!G.veglia){ c.stato='ferito'; return o.apply(this,arguments); } if(dist(c,p)>46) muovi(c,p.x,p.y,95,dt); else { c.vx=c.vy=0; } return; }
  if(r&&r.condottiero!=null&&c.stato==='segui'){ const k=gatto(r.condottiero); if(!k||k.stato!=='segui'){ r.condottiero=null; return o.apply(this,arguments); }
   const nem=nemicoVicino(c,170); if(nem) return combatti(c,nem,dt,150);
   if(c===k){ const lu=r.luogo; if(dist(c,lu)<60) return; if(dist(c,p)>230&&dist(c,lu)<dist(p,lu)&&!G.bolla){ c.vx=c.vy=0; c.flip=p.x<c.x?-1:1; if(performance.now()>tDiQua){ tDiQua=performance.now()+7000; parla(c,pick(COE.diQua),3); } return; }
    const w=(!G.bolla&&p.auto&&p.auto.percorso&&p.auto.percorso[0])||lu; return muovi(c,w.x,w.y,dist(c,lu)>dist(p,lu)?200:150,dt); }
   const s=c.slot||0, tx=k.x-(k.flip||1)*(38+18*s), ty=k.y+(s%2?28:-28); if(Math.hypot(tx-c.x,ty-c.y)>12) muovi(c,tx,ty,dist(c,k)>120?175:140,dt); return; }
  return o.apply(this,arguments); }; }
 // il guaritore che veglia cammina fino a debita distanza e si ferma; Spazio non lo manda nella mischia
 if(typeof guidaAuto==='function'){ const o=guidaAuto; guidaAuto=function(){ const p=G.p, A=p.auto; if(!(G.bolla&&G.raid&&A)) return o.apply(this,arguments);
  const lu=G.raid.luogo, w=A.percorso&&A.percorso[0]; if(!w||(dist(p,lu)<260&&!acqua(p.x,p.y))){ p.auto=null; log(COE.posto,'#d9c8ff'); return [0,0]; }
  const dx=w.x-p.x, dy=w.y-p.y, d=Math.hypot(dx,dy); if(d<18){ A.percorso.shift(); return [0,0]; } p.flip=dx<0?-1:1; p.dir=Math.atan2(dy,dx); return [dx/d*125,dy/d*125]; }; }
 if(typeof azioneGuerra==='function'){ const o=azioneGuerra; azioneGuerra=function(){ if(G.raid&&G.bolla) return {t:COE.veglia,f:()=>{}}; return o.apply(this,arguments); }; }
 // il giocatore capo propone la guerra dalla cima della Roccia Alta; il guerriero la propone al capo, come prima (menuCapo); gli apprendisti no
 if(typeof azioneSpazio==='function'){ const o=azioneSpazio; azioneSpazio=function(){ const p=G.p;
  if(!G.raid&&!G.dentro&&!p.vecchio&&!p.incinta&&p.leader&&!G.pace&&(p.elev||0)>0&&dist(p,L.roccia)<70&&!G.cats.some(c=>c.stato==='assalto'))
   return {t:COE.proponi,f:()=>modale(COE.proponiTit,COE.proponiTesto+stSapere(COE.boxOrda),[{t:COE.nebbia,f:()=>iniziaGuerra('nebbia',false)},{t:COE.pietre,f:()=>iniziaGuerra('pietre',false)},{t:COE.niente}])};
  return o.apply(this,arguments); }; }
 // finché il giocatore è un gattino la tensione con i vicini non supera 60: la guerra non matura durante l'infanzia
 if(typeof tensione==='function'){ const o=tensione; tensione=function(cl){ const r=o.apply(this,arguments); if(G&&G.p&&G.p.rango==='gattino'&&G.tens[cl]>60) G.tens[cl]=60; return r; }; }
 // la missione del guaritore: cinque massi al grande gatto
 if(typeof compiti==='function'){ const o=compiti; compiti=function(p){ const out=o.apply(this,arguments), C=G.colosso;
  if(C&&eGuarP(p)&&C.massi<COLOSSO_N&&(C.miei||0)<MASSI_MISSIONE) out.splice(Math.min(out.length,3),out.length>=4?1:0,{k:'massi',cl:'mis',t:`🗿 ${COE.massi}: ${C.miei||0} ${TESTI_LEGG.di} ${MASSI_MISSIONE}`});
  return out; }; }
 if(typeof vaiCompito==='function'){ const o=vaiCompito; vaiCompito=function(k){ const C=G&&G.colosso; if(k==='massi'&&C&&!paused&&!scena){ C.visto=true; return avviaGuida('punto',{x:C.x,y:C.y+125}); } return o.apply(this,arguments); }; }
});
// amici che non combattono, feriti che cercano il guaritore, fine della veglia
setInterval(()=>{ if(typeof G==='undefined'||!G||!G.p||paused) return; const p=G.p, r=G.raid, ora=performance.now();
 for(const c of G.cats){ if(c.clan==='felce') continue;
  const suDiMe=c.stato==='caccia'&&c.bersaglio===p.id;
  if((legato(c)&&(suDiMe||c.stato==='schierato'||c.stato==='assalto'))||(G.bolla&&suDiMe)){ const eraSchierato=c.stato==='schierato'; c.stato='pattuglia'; c.posto=null; c.bersaglio=null; if(typeof puntoNemico==='function') puntoNemico(c);
   if(r&&eraSchierato&&legato(c)){ if(!r.battuti){ r.battuti=[]; r.visti={}; } if(!r.battuti.includes(c.id)) r.battuti.push(c.id); }
   if(legato(c)&&dist(c,p)<320&&!(c.dettoAmico>ora)){ c.dettoAmico=ora+30000; parla(c,p.compagno===c.id?COE.nonCompagno:pick(COE.nonCombatto),4); } } }
 if((vegliaAttiva||G.veglia)&&!G.dentro){ for(const c of G.cats){ if(c.clan!=='felce'||c===p) continue;
   if(c.stato==='ferito'&&c.ferito&&!c.soccorsoIl&&dist(c,p)<1600){ c.stato='soccorso'; c.soccorsoIl=G.t; parla(c,pick(COE.aiuto),4); }
   if(c.stato==='soccorso'&&dist(c,p)<=50&&!scena&&!recitaAtt){ avviaScena('cura',[p,c],2.6,()=>{ c.hp=c.hpMax*0.8; c.ferito=false; c.soccorsoIl=null; c.stato=G.raid?'segui':'campo'; if(!G.raid) nuovoPuntoCampo(c);
     if(G.raid) G.raid.perdite=Math.max(0,(G.raid.perdite||0)-1); p.cure=(p.cure||0)+1; vegliaCurati++; scintille(c.x,c.y-20,'#c9b4ff',18); log(COE.curato(nome(c),c.sesso==='f'),'#c8f0a8'); }); break; } } }
 if(!r&&vegliaAttiva){ if(!vegliaFine) vegliaFine=G.t+40; else G.bolla=false; // dopo la battaglia i feriti hanno ancora il tempo di raggiungere il guaritore
  if(!scena&&(G.t>vegliaFine||G.dentro||!G.cats.some(c=>c.stato==='soccorso'||(c.clan==='felce'&&c.ferito&&c.stato==='ferito'&&dist(c,p)<1600)))){ vegliaAttiva=false; G.veglia=false; for(const c of G.cats){ if(c.stato==='soccorso') c.stato='ferito'; c.soccorsoIl=null; } // la veglia finisce quando nessun ferito vicino aspetta più
   const n=vegliaCurati; setTimeout(()=>{ if(G&&!paused&&!scena) modale(COE.dopoTit,COE.dopo(n),[{t:'🔮',f:()=>spirito(6+2*n,'cura')}]); },1500); } }
 if(!r&&!vegliaAttiva&&!recitaAtt){ if(G.bolla) G.bolla=false; if(G.veglia) G.veglia=false; } },500);
// l'anziano e il mentore vengono da te quando manca soltanto ciò che danno loro; la missione dei massi viene annunciata
setInterval(()=>{ if(typeof G==='undefined'||!G||!G.p||typeof storiaLibera!=='function'||!storiaLibera(6)) return; const p=G.p, S=stP(), C=G.colosso;
 if(C&&eGuarP(p)&&!C.missioneDetta&&C.massi<COLOSSO_N){ C.missioneDetta=true; C.miei=C.miei||0; log(COE.massiNuova,'#d9c8ff'); if(typeof mostraToast==='function') mostraToast(COE.massiNuova,'#d9c8ff'); return; }
 if(p.rango!=='gattino'&&p.rango!=='apprendista') return; if(S.maestroIl&&G.t-S.maestroIl<MOON*0.8) return; if(!nelCampo(p,0)) return;
 const manca=requisiti().filter(q=>!q.ok&&q.b!=='lune'); if(!manca.length||!manca.every(q=>q.b==='racconti'||q.b==='allenamenti')) return;
 if(p.rango==='gattino'&&lune(p)<6) return;
 const vicino=c=>{ const a=Math.random()*6.283; c.x=clamp(p.x+Math.cos(a)*70,30,WW-30); c.y=clamp(p.y+Math.sin(a)*70,30,WH-30); c.vx=c.vy=0; c.flip=p.x<c.x?-1:1; if(typeof mettiAFuoco==='function') mettiAFuoco(c,3000); };
 const all=manca.find(q=>q.b==='allenamenti'), m=all&&gatto(p.mentore);
 if(m&&!m.ferito&&m.stato==='campo'&&p.energia>=25){ S.maestroIl=G.t; segnaEvento(); vicino(m); return modale(nome(m),COE.mentoreViene(all.v),[{t:COE.allena,f:()=>allenati(m)},{t:COE.nonOra}]); }
 const a=manca.some(q=>q.b==='racconti')&&anziano(); if(a&&!a.ferito){ S.maestroIl=G.t; segnaEvento(); vicino(a); modale(COE.anzTit,p.rango==='gattino'?COE.anziano:COE.anzApp,[{t:COE.ascolta,f:()=>racconto(a)},{t:COE.nonOra}]); } },3000);
// il guaritore che accetta di vegliare segue davvero l'orda: la battaglia si combatte, e lui resta a distanza dentro la bolla
vegliaBattaglia=function(cl){ segnaEvento(); if(window.suonoMiao) suonoMiao('solenne'); iniziaGuerra(cl,true); };

// ================== la gita del gattino con un adulto ==================
// Correzione del 13 novembre 2026
// Stato: G.gita={id,tipo:'caccia'|'erbe',fase:'andata'|'fuori'|'ritorno',meta,da,prese,erbe}. Durante la gita il gattino esce dal campo
// resta entro 200 px dall'adulto (guinzaglio), insegue le prede (caccia) o raccoglie le erbe (erbe), e rientra con lui.
const GITA_T={
 it:{ chiediC:'🐾 Posso venire a caccia con te?', chiediE:'🌿 Mi insegni a raccogliere le erbe?',
  si:(f,t)=>t==='erbe'?`Va bene, piccol${f?'a':'o'}. Andiamo a cercare le erbe: stammi vicino e annusa quello che annuso io.`:`Va bene, piccol${f?'a':'o'}. Ti porto a caccia: stammi vicino e fai quello che faccio io.`,
  no:'Non adesso, piccolo: sono appena rientrato. Chiedimelo più tardi.', noF:'Non adesso, piccola: sono appena rientrata. Chiedimelo più tardi.',
  propC:f=>`«Vuoi venire a caccia con me, piccol${f?'a':'o'}? Ti insegno a prendere un topo. Fuori dal campo si va soltanto insieme a un grande.»`,
  propG:f=>`«Vuoi uscire con me, piccol${f?'a':'o'}? Posso insegnarti a cacciare, oppure a riconoscere le erbe che curano.»`,
  vaC:'🐾 Andiamo a caccia', vaE:'🌿 Andiamo a cercare le erbe', nonOra:'Non ora',
  ann:n=>`🐾 Esci dal campo con ${n}: restagli vicino`, log:(n,t)=>`🐾 Esci dal campo con ${n}, ${t==='erbe'?'a cercare le erbe':'a caccia'}. Fuori dal campo resta vicino a lui.`,
  vicino:f=>`Resta vicino a me, piccol${f?'a':'o'}! Nel bosco non ci si allontana.`,
  consC:['Abbassati e avvicinati piano: la preda non deve sentirti.','Guarda le orecchie del topo: quando si muovono, fermati.','Ecco, lì c\'è un topo che sonnecchia. Premi Spazio e inseguilo!','Quando sei vicino, salta! Il balzo è tutto.'],
  consE:['Annusa: ogni pianta ha il suo odore, e il suo odore dice a che cosa serve.','Si prende soltanto quello che serve, e si lascia la radice: così la pianta ricresce.','Vedi quei fiori che brillano? Avvicinati e premi Spazio per raccoglierli.'],
  insegui:n=>'insegui '+n, cogli:'raccogli l’erba', colta:(e,n)=>`🌿 Hai raccolto ${e}: ${n} la mette da parte per l’armadio delle erbe.`,
  bravoC:'Brav{o}! La tua prima preda. Ora torniamo al campo: portala al mucchio, è il tuo dono al clan.', bravoE:'Brav{o}! Hai il naso di un guaritore. Ora torniamo al campo.',
  tardi:'Si fa tardi: torniamo al campo. Ci riproveremo un’altra volta.', allarme:'Al campo, presto! Il clan ha bisogno di noi.',
  fine:(n)=>`🏡 Sei tornat{o} al campo con ${n}. Hai imparato qualcosa del bosco.`, mot:'una gita con un grande' },
 en:{ chiediC:'🐾 May I come hunting with you?', chiediE:'🌿 Will you teach me to gather herbs?',
  si:(f,t)=>t==='erbe'?'All right, little one. Let us go and look for herbs: stay close and sniff what I sniff.':'All right, little one. I will take you hunting: stay close and do what I do.',
  no:'Not now, little one: I have just come back. Ask me later.', noF:'Not now, little one: I have just come back. Ask me later.',
  propC:()=>'«Do you want to come hunting with me, little one? I will teach you to catch a mouse. Kits only leave camp together with a grown cat.»',
  propG:()=>'«Do you want to come out with me, little one? I can teach you to hunt, or to know the herbs that heal.»',
  vaC:'🐾 Let us go hunting', vaE:'🌿 Let us look for herbs', nonOra:'Not now',
  ann:n=>`🐾 You leave camp with ${n}: stay close`, log:(n,t)=>`🐾 You leave camp with ${n}, ${t==='erbe'?'to look for herbs':'to hunt'}. Outside the camp, stay close.`,
  vicino:()=>'Stay close to me, little one! In the forest we do not wander off.',
  consC:['Crouch and creep up slowly: the prey must not hear you.','Watch the mouse’s ears: when they twitch, freeze.','There, a mouse is dozing. Press Space and chase it!','When you are close, pounce! The leap is everything.'],
  consE:['Sniff: every plant has its smell, and its smell tells what it is for.','We take only what we need, and leave the root: so the plant grows back.','See those glowing flowers? Go close and press Space to gather them.'],
  insegui:n=>'chase '+n, cogli:'gather the herb', colta:(e,n)=>`🌿 You gathered ${e}: ${n} puts it aside for the herb cabinet.`,
  bravoC:'Well done! Your first prey. Now back to camp: take it to the pile, it is your gift to the Clan.', bravoE:'Well done! You have a healer’s nose. Now back to camp.',
  tardi:'It is getting late: back to camp. We will try again another time.', allarme:'Back to camp, quickly! The Clan needs us.',
  fine:(n)=>`🏡 You are back in camp with ${n}. You have learned something of the forest.`, mot:'an outing with a grown cat' },
 fr:{ chiediC:'🐾 Je peux venir chasser avec toi ?', chiediE:'🌿 Tu m’apprends à cueillir les herbes ?',
  si:(f,t)=>t==='erbe'?`D’accord, ${f?'petite':'petit'}. Allons chercher les herbes : reste près de moi et renifle ce que je renifle.`:`D’accord, ${f?'petite':'petit'}. Je t’emmène chasser : reste près de moi et fais comme moi.`,
  no:'Pas maintenant, petit : je viens de rentrer. Redemande-moi plus tard.', noF:'Pas maintenant, petite : je viens de rentrer. Redemande-moi plus tard.',
  propC:f=>`«Tu veux venir chasser avec moi, ${f?'petite':'petit'} ? Je t’apprends à attraper une souris. Hors du camp, on ne sort qu’avec un grand.»`,
  propG:f=>`«Tu veux sortir avec moi, ${f?'petite':'petit'} ? Je peux t’apprendre à chasser, ou à reconnaître les herbes qui soignent.»`,
  vaC:'🐾 Allons chasser', vaE:'🌿 Allons chercher les herbes', nonOra:'Pas maintenant',
  ann:n=>`🐾 Tu sors du camp avec ${n} : reste près de lui`, log:(n,t)=>`🐾 Tu sors du camp avec ${n}, ${t==='erbe'?'chercher les herbes':'pour chasser'}. Hors du camp, reste près de lui.`,
  vicino:f=>`Reste près de moi, ${f?'petite':'petit'} ! Dans la forêt, on ne s’éloigne pas.`,
  consC:['Baisse-toi et approche doucement : la proie ne doit pas t’entendre.','Regarde les oreilles de la souris : quand elles bougent, ne bouge plus.','Là, une souris somnole. Appuie sur Espace et poursuis-la !','Quand tu es près, bondis ! Le saut, c’est tout.'],
  consE:['Renifle : chaque plante a son odeur, et son odeur dit à quoi elle sert.','On ne prend que ce qu’il faut, et on laisse la racine : ainsi la plante repousse.','Tu vois ces fleurs qui brillent ? Approche-toi et appuie sur Espace pour les cueillir.'],
  insegui:n=>'poursuis '+n, cogli:'cueille l’herbe', colta:(e,n)=>`🌿 Tu as cueilli ${e} : ${n} la met de côté pour l’armoire aux herbes.`,
  bravoC:'Bravo ! Ta première proie. Maintenant, rentrons au camp : apporte-la au tas, c’est ton cadeau au clan.', bravoE:'Bravo ! Tu as le nez d’un guérisseur. Maintenant, rentrons au camp.',
  tardi:'Il se fait tard : rentrons au camp. On réessaiera une autre fois.', allarme:'Au camp, vite ! Le clan a besoin de nous.',
  fine:(n)=>`🏡 Tu es rentré{e} au camp avec ${n}. Tu as appris quelque chose de la forêt.`, mot:'une sortie avec un grand' },
};
addEventListener('DOMContentLoaded',()=>{ if(typeof menuGatto!=='function'||typeof aggiornaFelce!=='function') return;
 const T=GITA_T[LINGUA]||GITA_T.it, cm=CLAN.felce.campo;
 const gen=(s,p)=>s.replace(/\{o\}/g,p.sesso==='f'?'a':'o').replace(/\{e\}/g,p.sesso==='f'?'e':'');
 const insegnante=c=>c&&c.clan==='felce'&&!c.ferito&&(c.rango==='guerriero'||c.rango==='guaritore')&&c.stato==='campo';
 const puoUscire=()=>{ const p=G.p; return p.rango==='gattino'&&!G.gita&&!G.raid&&!occupato()&&!G.funerale&&!p.preda; };
 const metaCaccia=()=>{ for(let k=0;k<40;k++){ const x=cm.x+cm.r+120+Math.random()*120, y=cm.y+(Math.random()-0.5)*300; if(!acqua(x,y)&&!inCampo(x,y,30)) return {x,y}; } return {x:cm.x+cm.r+150,y:cm.y}; };
 const metaErbe=()=>{ const h=piuVicino(ERBE.filter((h,i)=>G.erbe[i]<=G.t&&!acqua(h.x,h.y)),cm); return h?{x:h.x,y:h.y}:metaCaccia(); };
 function avvia(c,tipo){ const p=G.p; if(!puoUscire()||!insegnante(c)) return; segnaEvento();
  G.gita={id:c.id,tipo,fase:'andata',meta:tipo==='erbe'?metaErbe():metaCaccia(),da:G.t,prese:p.prede||0,erbe:0,cons:0,consT:G.t};
  c.stato='gita'; c.vx=c.vy=0; parla(c,T.si(p.sesso==='f',tipo),6); mettiAFuoco(c,3000);
  log(T.log(nome(c),tipo),'#ffe0a0'); annuncia(T.ann(nome(c)),'#ffe0a0'); stP().gite=(stP().gite||0)+1; if(window.REG) REG.evento('gita',tipo+' con '+nome(c)); }
 function chiedi(c,tipo){ const p=G.p, S=stP(); if(S.gitaFine&&G.t-S.gitaFine<MOON*0.4){ const t=c.sesso==='f'?T.noF:T.no; parla(c,t,5); log(`🗣️ ${nome(c)}: «${t}»`,'#cfe8ff'); return; } avvia(c,tipo); }
 function fineGita(motivo){ const g=G.gita, p=G.p; if(!g) return; const c=gatto(g.id); G.gita=null; stP().gitaFine=G.t;
  if(c){ c.stato='campo'; if(typeof nuovoPuntoCampo==='function') nuovoPuntoCampo(c); }
  if(motivo==='casa'){ log(gen(T.fine(c?nome(c):''),p),'#ffe0a0'); spirito(4,T.mot); } }
 window.GITA={avvia,fine:fineGita};
 // durante la gita niente altri eventi né storie: una cosa alla volta
 { const o=puoEvento; puoEvento=function(){ return G&&G.gita?false:o.apply(this,arguments); }; const s2=storiaLibera; storiaLibera=function(){ return G&&G.gita?false:s2.apply(this,arguments); }; }
 // nel menu di un guerriero o di un guaritore, il gattino può chiedere di uscire con lui
 { const o=menuGatto; menuGatto=function(c){ const p=G.p; if(!(p.rango==='gattino'&&insegnante(c)&&puoUscire())) return o.apply(this,arguments);
  const m0=modale, extra=[{t:T.chiediC,f:()=>chiedi(c,'caccia')}]; if(c.rango==='guaritore') extra.push({t:T.chiediE,f:()=>chiedi(c,'erbe')});
  modale=function(t,x,bt){ modale=m0; return m0(t,x,[...extra,...(bt||[])]); }; try{ return o.apply(this,arguments); } finally{ modale=m0; } }; }
 // ogni tanto è il grande a proporlo, quando il gattino è al campo e libero
 setInterval(()=>{ if(typeof G==='undefined'||!G||!G.p||paused||scena||recitaAtt||fx||transizione||G.dentro) return; const p=G.p, S=stP();
  if(!puoUscire()||!nelCampo(p,0)||!storiaLibera(10)) return; if(S.gitaProp&&G.t-S.gitaProp<MOON*0.9) return; if(S.gitaFine&&G.t-S.gitaFine<MOON*0.6) return; if(Math.random()>0.35) return;
  const c=pick(G.cats.filter(insegnante).filter(c=>!c.leader&&dist(c,p)<500)); if(!c) return; S.gitaProp=G.t; segnaEvento();
  const a=Math.random()*6.283; c.x=clamp(p.x+Math.cos(a)*60,30,WW-30); c.y=clamp(p.y+Math.sin(a)*60,30,WH-30); c.vx=c.vy=0; c.flip=p.x<c.x?-1:1;
  const f=p.sesso==='f', bt=c.rango==='guaritore'?[{t:T.vaC,f:()=>avvia(c,'caccia')},{t:T.vaE,f:()=>avvia(c,'erbe')},{t:T.nonOra}]:[{t:T.vaC,f:()=>avvia(c,'caccia')},{t:T.nonOra}];
  modale(nome(c),c.rango==='guaritore'?T.propG(f):T.propC(f),bt); },3000);
 // l'adulto della gita: va alla meta aspettando il gattino, gira lì intorno dando consigli, poi riporta tutti al campo
 { const o=aggiornaFelce; aggiornaFelce=function(c,dt){ const g=G.gita; if(!g||c.id!==g.id) return o.apply(this,arguments);
  const p=G.p, lontano=dist(c,p)>110, v=72;
  if(g.fase==='andata'){ if(lontano&&dist(c,cm)>cm.r-30){ c.vx=c.vy=0; c.flip=p.x<c.x?-1:1; } else if(muovi(c,g.meta.x,g.meta.y,v,dt)||dist(c,g.meta)<20){ g.fase='fuori'; g.fuoriDa=G.t; } }
  else if(g.fase==='fuori'){ if(!g.giro||dist(c,g.giro)<8) g.giro={x:g.meta.x+(Math.random()-0.5)*90,y:g.meta.y+(Math.random()-0.5)*90}; if(lontano) { c.vx=c.vy=0; c.flip=p.x<c.x?-1:1; } else muovi(c,g.giro.x,g.giro.y,25,dt); }
  else { if(lontano&&!nelCampo(p,0)){ c.vx=c.vy=0; c.flip=p.x<c.x?-1:1; } else muovi(c,cm.x+20,cm.y+20,v,dt); }
  return; }; }
 // il gattino attraversa la siepe e l'apertura soltanto durante la gita, e resta vicino all'adulto
 { const o=siepe; siepe=function(p,ox,oy,dt){ const g=G&&G.gita; if(!g||p!==G.p) return o.apply(this,arguments); const c=gatto(g.id); const r=o.apply(this,arguments); if(!c){ fineGita(); return r; }
  const d=dist(p,c); if(!nelCampo(p,0)&&d>200){ p.x=c.x+(p.x-c.x)/d*200; p.y=c.y+(p.y-c.y)/d*200; p.guida=null; const ora=performance.now(); if(ora-(g.richiamo||0)>6000){ g.richiamo=ora; const t=T.vicino(p.sesso==='f'); parla(c,t,4); } } }; }
 // Spazio durante la gita: inseguire la preda (caccia) o raccogliere l'erba (erbe)
 { const o=azioneSpazio; azioneSpazio=function(){ const p=G.p, g=G.gita; if(!g||p.rango!=='gattino'||G.dentro||nelCampo(p,0)||scena) return o.apply(this,arguments);
  if(g.tipo==='caccia'&&!p.caccia&&!p.preda){ const q=predaMirata(); if(q&&dist(q,p)<320) return {t:T.insegui(PREDE[q.tipo].nome),f:()=>{ p.caccia={q,t:0}; }}; }
  if(g.tipo==='erbe'){ const h=erbaVicina(); if(h>=0) return {t:T.cogli,f:()=>{ G.erbe[h]=G.t+40; const s=ERBE[h].specie||0, c=gatto(g.id); avviaScena('annusa',[p],0.9,()=>{ g.erbe++; if(window.ERBE_PROVA&&ERBE_PROVA.impara) ERBE_PROVA.impara(s); const P=window.PIANTE&&PIANTE[s]; log(T.colta(P?P.e+' '+P[LINGUA][0]:'',c?nome(c):''),'#c8f0a8'); flo(p.x,p.y-30,'+1 🌿','#9be07f'); }); }}; }
  return o.apply(this,arguments); }; }
 // ogni mezzo secondo: consigli, una preda assonnata vicino alla meta, fine della gita
 setInterval(()=>{ if(typeof G==='undefined'||!G||!G.p||!G.gita||paused) return; const g=G.gita, p=G.p, c=gatto(g.id); if(!c||c.ferito||p.rango!=='gattino'){ fineGita(); return; }
  if((G.raid||occupato())&&g.fase!=='ritorno'){ g.fase='ritorno'; parla(c,T.allarme,4); }
  if(g.fase==='fuori'){
   if(g.tipo==='caccia'&&!prede.some(q=>!q.morta&&dist(q,g.meta)<180)) prede.push({x:g.meta.x+(Math.random()-0.5)*120,y:g.meta.y+(Math.random()-0.5)*120,tipo:'topo',vx:0,vy:0,t:0,allarme:0,vola:0,morta:false,lenta:true});
   const L2=g.tipo==='erbe'?T.consE:T.consC; if(!scena&&!recitaAtt&&G.t-g.consT>11&&g.cons<L2.length){ g.consT=G.t; parla(c,L2[g.cons++],7); }
   if(p.preda||p.pasto||(scena&&scena.tipo==='cattura'&&scena.attori.includes(p))) g.presa=true; // anche una preda mangiata subito conta
   const fatto=g.tipo==='erbe'?g.erbe>=2:g.presa;
   if(fatto&&!scena){ g.fase='ritorno'; parla(c,gen(g.tipo==='erbe'?T.bravoE:T.bravoC,p),7); mettiAFuoco(c,3000); spirito(4,T.mot); }
   else if(G.t-g.fuoriDa>110){ g.fase='ritorno'; parla(c,T.tardi,6); } }
  if(g.fase==='ritorno'&&nelCampo(p,0)&&dist(c,cm)<cm.r) fineGita('casa');
  if(G.t-g.da>300) fineGita(); },500);
});

// ================== vecchiaia e addio: testi giusti per il guaritore e per il capo ==================
// Correzione del 13 novembre 2026, dalla prova di una vita da guaritrice: a 60 lune le si diceva, e all'addio
// l'elogio contava soltanto prede e difese.
const VEC_T={
 it:{ guar:n=>`${n}, hai visto moltissime lune: le tue zampe non reggono più i sentieri lunghi del bosco. Ma le tue mani sanno ancora curare: insegna ai giovani le erbe e le parole giuste.`,
  capo:n=>`${n}, hai visto moltissime lune e non puoi più combattere. Il clan ti segue ancora: guidalo con la parola, e racconta le tue storie ai giovani.`,
  inizio:(n,l)=>`${n} ha camminato con noi per ${l} lune.`, cure:c=>`Ha curato ${c} ${c===1?'gatto':'gatti'}.`, massi:m=>`Ha portato ${m} ${m===1?'masso':'massi'} al grande gatto di pietra.`,
  guida:(x,pont)=>`Ha guidato il clan per ${x} ${x===1?'luna':'lune'}${pont?', come pontefice, in pace':''}.`, prede:x=>`Ha portato ${x} ${x===1?'preda':'prede'} al mucchio.`, difese:x=>`Ha difeso il clan ${x} ${x===1?'volta':'volte'}.`, fine:'Ciò che ha dato resta qui.' },
 en:{ guar:n=>`${n}, you have seen a great many moons: your paws can no longer manage the long forest paths. But your paws still know how to heal: teach the young the herbs and the right words.`,
  capo:n=>`${n}, you have seen a great many moons and can no longer fight. The clan still follows you: guide it with words, and tell your stories to the young.`,
  inizio:(n,l)=>`${n} walked with us for ${l} moons.`, cure:c=>`${c===1?'One cat was':c+' cats were'} healed by those paws.`, massi:m=>`${m===1?'One stone':m+' stones'} carried to the great stone cat.`,
  guida:(x,pont)=>`The clan was guided for ${x} ${x===1?'moon':'moons'}${pont?', as pontiff, in peace':''}.`, prede:x=>`${x===1?'One prey':x+' prey'} brought to the pile.`, difese:x=>`The clan defended ${x===1?'once':x+' times'}.`, fine:'What was given stays here.' },
 fr:{ guar:n=>`${n}, tu as vu d’innombrables lunes : tes pattes ne supportent plus les longs sentiers de la forêt. Mais elles savent encore soigner : apprends aux jeunes les herbes et les mots justes.`,
  capo:n=>`${n}, tu as vu d’innombrables lunes et tu ne peux plus combattre. Le clan te suit encore : guide-le par la parole, et raconte tes histoires aux jeunes.`,
  inizio:(n,l)=>`${n} a marché avec nous pendant ${l} lunes.`, cure:c=>`${c===1?'Un chat a été soigné':c+' chats ont été soignés'} par ses pattes.`, massi:m=>`${m===1?'Un bloc porté':m+' blocs portés'} jusqu’au grand chat de pierre.`,
  guida:(x,pont)=>`Le clan a été guidé pendant ${x} ${x===1?'lune':'lunes'}${pont?', en pontife, dans la paix':''}.`, prede:x=>`${x===1?'Une proie apportée':x+' proies apportées'} au tas.`, difese:x=>`Le clan défendu ${x===1?'une fois':x+' fois'}.`, fine:'Ce qui a été donné reste ici.' },
};
addEventListener('DOMContentLoaded',()=>{ const T=VEC_T[LINGUA]||VEC_T.it;
 if(TESTI_LEGG&&TESTI_LEGG.vita){ const o=TESTI_LEGG.vita.vecchio; TESTI_LEGG.vita.vecchio=function(n){ const p=G&&G.p; if(p&&eGuarP(p)) return T.guar(n); if(p&&p.leader) return T.capo(n); return o.apply(this,arguments); }; }
 if(typeof STORIE!=='undefined'&&STORIE.capoDiventa){ const o=STORIE.capoDiventa; STORIE.capoDiventa=function(){ stP().capoDa=G.t; return o.apply(this,arguments); }; }
 { const o=TESTI_LEGG.vita.discorso; TESTI_LEGG.vita.discorso=function(c,n,l,pr,b){ const p=G.p, g=eGuarP(p); let t=o.call(this,c,n,l,g?0:pr,g?0:b);
   return t.replace(/ 1 prede/g,' 1 preda').replace(/ 1 battaglie/g,' 1 battaglia').replace(/ 1 battles/g,' 1 battle').replace(/ 1 proies/g,' 1 proie').replace(/ 1 batailles/g,' 1 bataille'); }; }
 VITA2.capo=function(n,l,pr,b){ const p=G.p, S=stP(), cu=p.cure||0, ma=(G.colosso&&G.colosso.miei)||0, da=p.leader&&S.capoDa!=null?Math.max(1,Math.round((G.t-S.capoDa)/MOON)):0;
  const pezzi=[T.inizio(n,l)]; if(cu) pezzi.push(T.cure(cu)); if(ma) pezzi.push(T.massi(ma)); if(da) pezzi.push(T.guida(da,!!G.pace)); if(pr) pezzi.push(T.prede(pr)); if(b) pezzi.push(T.difese(b));
  return pezzi.slice(0,4).join(' ')+' '+T.fine; };
});

// ================== la parata dei tre clan ==================
// Idea del 13 novembre 2026, per il finale lieto della festa
//. Dopo la statua che si anima, i gatti della festa si mettono in fila a tre a tre e fanno il giro
// della radura intorno al grande gatto, miagolando in coro; il giocatore può accodarsi o guardarli passare. Dura circa 40 secondi di gioco.
const PARATA_T={ it:{ann:'🎶 I tre clan si mettono in fila, a tre a tre, e girano per il bosco miagolando in coro!',fine:'🎶 La parata finisce: ognuno torna al suo campo, con la voce ancora piena di miagolii.'},
 en:{ann:'🎶 The three clans line up, three by three, and parade through the forest meowing in chorus!',fine:'🎶 The parade is over: everyone goes back to their camp, voices still full of meows.'},
 fr:{ann:'🎶 Les trois clans se mettent en file, trois par trois, et défilent dans la forêt en miaulant en chœur !',fine:'🎶 Le défilé est fini : chacun rentre à son camp, la voix encore pleine de miaulements.'} };
function parata(ospiti){ const C=G.colosso, T=PARATA_T[LINGUA]||PARATA_T.it, vivi=ospiti.filter(c=>G.cats.includes(c));
 G.parata={da:G.t,fino:G.t+40,ids:vivi.map(c=>c.id),cx:C.x,cy:C.y,R:290,a0:Math.atan2(G.p.y-C.y,G.p.x-C.x)+0.6,coro:G.t};
 annuncia(T.ann,'#ffe08a'); log(T.ann,'#ffe08a'); if(window.suonoMiaoGrande) suonoMiaoGrande(); if(window.REG) REG.evento('parata',vivi.length+' gatti'); }
addEventListener('DOMContentLoaded',()=>{ const T=PARATA_T[LINGUA]||PARATA_T.it;
 const meta=(P,c)=>{ const k=P.ids.indexOf(c.id), r=Math.floor(k/3), col=k%3, a=P.a0+60*(G.t-P.da)/P.R-r*36/P.R, rr=P.R+(col-1)*26; return {x:P.cx+Math.cos(a)*rr,y:P.cy+Math.sin(a)*rr}; };
 const marcia=o=>function(c,dt){ const P=G.parata; if(!P||!P.ids.includes(c.id)) return o.apply(this,arguments); const m=meta(P,c);
  muovi(c,m.x,m.y,dist(c,m)>60?150:95,dt); c.elev=0; if(c.posa!=='canta') c.posa=null; return; };
 if(typeof aggiornaFelce==='function') aggiornaFelce=marcia(aggiornaFelce);
 if(typeof aggiornaNemico==='function') aggiornaNemico=marcia(aggiornaNemico);
 { const o=puoEvento; puoEvento=function(){ return G&&G.parata?false:o.apply(this,arguments); }; }
 setInterval(()=>{ if(typeof G==='undefined'||!G||!G.parata||paused) return; const P=G.parata, gatti=P.ids.map(gatto).filter(Boolean);
  if(G.t>P.fino||!gatti.length){ G.parata=null; for(const c of gatti){ c.posa=null; if(c.clan==='felce'){ c.stato='campo'; nuovoPuntoCampo(c); } else { c.stato='pattuglia'; if(typeof puntoNemico==='function') puntoNemico(c); } } log(T.fine,'#ffe08a'); return; }
  if(G.t-P.coro>4){ P.coro=G.t; if(window.suonoMiao) suonoMiao('gioia'); const scelti=gatti.filter(()=>Math.random()<0.5); for(const c of scelti){ setPosa(c,'canta',2.5); testo(c.x,c.y-44*scala(c),pick(['♪','♫','Miao!','♩']),pick(['#ffe08a','#bfe8ff','#ffd0f0']),14,-20,2); } } },300);
});

// ================== al mucchio con le prede in bocca ==================
// Correzione del 13 novembre 2026
//. Prima bastava un passo di troppo e Spazio apriva il dialogo con il gatto più vicino: ora, a pochi passi dal mucchio
// Spazio fa un balzo fino al mucchio e lascia tutte le prede.
const MUCCHIO_T={it:n=>n>1?`lascia le ${n} prede nel mucchio`:'lascia la preda nel mucchio',en:n=>n>1?`leave the ${n} prey on the pile`:'leave the prey on the pile',fr:n=>n>1?`dépose les ${n} proies sur le tas`:'dépose la proie sur le tas'};
addEventListener('DOMContentLoaded',()=>{ if(typeof azioneSpazio!=='function'||typeof deposita!=='function') return; const T=MUCCHIO_T[LINGUA]||MUCCHIO_T.it;
 const o=azioneSpazio; azioneSpazio=function(){ const p=G.p, M=L.mucchio;
  if(p.preda&&!G.dentro&&!G.raid&&!p.anim&&!(p.elev>0)&&!scena&&!(typeof campoSottoAttacco==='function'&&campoSottoAttacco())&&dist(p,M)<M.r+90){ const n=1+(p.carico||[]).length;
   return {t:T(n),f:()=>{ if(dist(p,M)>M.r+14){ const d=dist(p,M)||1; salta(p,M.x+(p.x-M.x)/d*(M.r+8),M.y+(p.y-M.y)/d*(M.r+8),0,10,0.35); setTimeout(()=>{ if(G&&G.p.preda) deposita(); },420); } else deposita(); }}; }
  return o.apply(this,arguments); }; });

// ================== la vita dei guaritori: duelli di magia e il grande gatto in marcia ==================
// Richiesta del 14 novembre 2026
// Ogni clan nemico ha un guaritore (vive vicino alla sua tana, la seconda del campo, e raccoglie erbe nel suo bosco; non combatte mai).
// Il duello: tre arti (✨ lume batte 🌑 ombra, 🌑 ombra batte 🌿 radice, 🌿 radice batte ✨ lume), vince chi arriva prima a due prove; a volte
// l'aria tradisce l'arte del rivale (cera calda, nebbia fredda, terra bagnata). Nessuno si fa male. Il rito del grande gatto richiede il monumento finito.
const MAG_T={
 it:{ arti:[['✨','il tuo lume','cera calda','il lume'],['🌑','la tua ombra','nebbia fredda','l’ombra'],['🌿','la tua radice','terra bagnata','la radice']], Arti:['✨ Il lume','🌑 L’ombra','🌿 La radice'],
  tit:'✨ Duello di magia', regole:'Un duello di magia tra guaritori non ferisce nessuno: vince chi piega l’arte dell’altro. Ci sono tre arti: ✨ <b>il lume</b> scioglie l’ombra, 🌑 <b>l’ombra</b> soffoca la radice, 🌿 <b>la radice</b> beve il lume. Vince chi arriva per primo a due prove.<br><br>A volte l’aria tradisce l’arte del rivale: la cera calda annuncia il lume, la nebbia fredda l’ombra, la terra bagnata la radice.',
  prova:(k,a,b,n)=>`<b>Prova ${k}</b> · tu ${a}, ${n} ${b}`, indizio:o=>`Nell’aria senti odore di <b>${o}</b>.`, niente:'L’aria non dice niente.', scegli:'Quale arte chiami?',
  vinta:(m,s)=>`${m.charAt(0).toUpperCase()+m.slice(1)} piega ${s}: la prova è tua.`, persa:(m,s)=>`${s.charAt(0).toUpperCase()+s.slice(1)} piega ${m}: la prova è del rivale.`, pari:x=>`Due volte ${x}: le arti si annullano, e l’aria trema.`,
  sfida:(n,f)=>`«${n}, ${f?'guaritrice':'guaritore'} della Felce: le mie stelle dicono che le tue sono più deboli. Mettiamole alla prova.»`,
  accetta:'✨ Accettare il duello', sfidaB:'✨ Sfidare a duello', rifiuta:'Rifiutare con un inchino', rifiutoT:n=>`🙇 ${n} se ne va senza duello. Nel clan qualcuno mormora.`,
  vintoTit:'✨ Hai vinto il duello', persoTit:'✨ Hai perso il duello', pariTit:'✨ Nessun vincitore',
  vinto:n=>`${n} china il muso: «La tua arte è più antica della mia. Prendi queste erbe: sono il pegno di chi perde.»`, perso:n=>`${n} china il muso, gentile: «Le stelle oggi erano con me. Torna quando avrai ascoltato meglio il bosco.»`, pareggio:n=>`Tu e ${n} vi inchinate: nessuna arte ha piegato l’altra.`,
  mot:'un duello di magia vinto', boschiTit:n=>'🔮 '+n, boschi:(n,cl,f)=>`${n}, ${f?'guaritrice':'guaritore'} del ${cl}, raccoglie erbe tra le radici. Porta la mantellina viola, come tutti i guaritori.`, saluta:'Salutare e proseguire', nonSiAttacca:(n,f)=>`${n} è ${f?'una guaritrice':'un guaritore'}: nessun guerriero alza gli artigli contro chi cura.`,
  tanaTit:'🕯️ La tana del guaritore nemico', tana:(n,f)=>`Nella penombra, ${n} alza la testa dal suo mortaio di pietra. Ti ha riconosciut${f?'a':'o'}: ${f?'una guaritrice':'un guaritore'} di un altro clan.`, sfidaT:'✨ Sfidare il guaritore', profana:'🔥 Profanare la tana', esci:'Uscire in silenzio',
  golemBtn:'🗿 Il rito del grande gatto (una volta sola)', g1:'Mentre il clan si prepara alla battaglia, corri al grande gatto di pietra e accendi le erbe ai suoi piedi.', g2:'Canti i nomi di tutti quelli che hanno portato un masso. Gli occhi di pietra si accendono.', g3:'Il grande gatto si alza, e la terra trema. Ti porge una zampa: sali sulla sua testa.',
  marcia:cl=>`Il grande gatto cammina verso il ${cl}. Attraversa il fiume come se fosse un ruscello.`, arrivo:cl=>`I gatti del ${cl} vedono arrivare il gigante e fuggono nel bosco. Nessuno si fa male.`, voce:'Dalla pietra esce una voce profonda, che fa tremare il bosco: «Ora io sono Morte, il Distruttore di Mondi.»', boxVoce:['Le parole del gigante','Nella Bhagavad Gita (XI, 32) il dio Krishna si mostra al guerriero Arjuna nella sua forma immensa e dice di essere il Tempo che distrugge i mondi. Il fisico Robert Oppenheimer raccontò che quel verso gli tornò in mente nel 1945, davanti all’esplosione della prima bomba atomica, e lo ripeté così: «Ora sono diventato Morte, il distruttore di mondi».'], distrugge:'Il grande gatto alza la zampa e la abbatte sulle tane: una, due, tre. Restano soltanto sassi e polvere.', ritorno:'All’alba il grande gatto è di nuovo al suo posto, immobile. Nessuno l’ha visto tornare.',
  golemTit:'🗿 Il gigante di pietra', golemFine:cl=>`Le tane del ${cl} sono crollate: per sei lune i loro gatti penseranno soltanto a ricostruirle. La guerra è vinta. Ma nel bosco nessuno ne parla ad alta voce: il grande gatto, adesso, fa paura a tutti, anche a noi.`,
  golemLog:cl=>`🗿 Il grande gatto di pietra ha distrutto le tane del ${cl}. La guerra è vinta.`, rovina:'🏚️ La tana è crollata: i suoi gatti la stanno ricostruendo.', ricostruita:cl=>`🏗️ Il ${cl} ha ricostruito le sue tane.`,
  boxGolem:['Il Golem di Praga','Una leggenda ebraica di Praga, messa per iscritto nell’Ottocento, racconta che il rabbino Judah Loew, vissuto nel Cinquecento, diede vita a una figura d’argilla, il Golem, per difendere la sua comunità; e che poi, quando la sua forza divenne pericolosa, lo riportò all’immobilità.'],
  box:[['La gara di canto','Nel terzo canto del Kalevala, il poema finlandese raccolto da Elias Lönnrot, il vecchio Väinämöinen accetta la sfida del giovane Joukahainen e con il suo canto lo fa sprofondare nella palude.'],['I bastoni e i serpenti','Nel libro dell’Esodo (7, 10-12) il bastone di Aronne diventa un serpente davanti al faraone; i maghi d’Egitto fanno lo stesso con i loro bastoni, ma il bastone di Aronne inghiotte i loro.'],['Le Muse e le Pieridi','Nelle Metamorfosi di Ovidio (libro V) le nove figlie di Pierio sfidano le Muse in una gara di canto; perdono, e vengono trasformate in gazze.']] },
 en:{ arti:[['✨','your light','warm wax','the light'],['🌑','your shadow','cold mist','the shadow'],['🌿','your root','wet earth','the root']], Arti:['✨ The light','🌑 The shadow','🌿 The root'],
  tit:'✨ Magic duel', regole:'A magic duel between healers hurts nobody: the winner is the one who bends the other’s art. There are three arts: ✨ <b>the light</b> melts the shadow, 🌑 <b>the shadow</b> smothers the root, 🌿 <b>the root</b> drinks the light. The first to win two trials wins.<br><br>Sometimes the air betrays the rival’s art: warm wax announces the light, cold mist the shadow, wet earth the root.',
  prova:(k,a,b,n)=>`<b>Trial ${k}</b> · you ${a}, ${n} ${b}`, indizio:o=>`You smell <b>${o}</b> in the air.`, niente:'The air says nothing.', scegli:'Which art do you call?',
  vinta:(m,s)=>`${m.charAt(0).toUpperCase()+m.slice(1)} bends ${s}: the trial is yours.`, persa:(m,s)=>`${s.charAt(0).toUpperCase()+s.slice(1)} bends ${m}: the trial goes to your rival.`, pari:x=>`${x.charAt(0).toUpperCase()+x.slice(1)} twice: the arts cancel out, and the air trembles.`,
  sfida:n=>`«${n}, healer of the Fern Clan: my stars say yours are weaker. Let us put them to the test.»`,
  accetta:'✨ Accept the duel', sfidaB:'✨ Challenge to a duel', rifiuta:'Decline with a bow', rifiutoT:n=>`🙇 ${n} leaves without a duel. In the clan, someone murmurs.`,
  vintoTit:'✨ You won the duel', persoTit:'✨ You lost the duel', pariTit:'✨ No winner',
  vinto:n=>`${n} bows: «Your art is older than mine. Take these herbs: the loser’s pledge.»`, perso:n=>`${n} bows, kindly: «The stars were with me today. Come back when you have listened better to the forest.»`, pareggio:n=>`You and ${n} bow to each other: neither art bent the other.`,
  mot:'a magic duel won', boschiTit:n=>'🔮 '+n, boschi:(n,cl)=>`${n}, healer of the ${cl}, is gathering herbs among the roots, wearing the violet cape of all healers.`, saluta:'Greet and move on', nonSiAttacca:n=>`${n} is a healer: no warrior raises claws against those who heal.`,
  tanaTit:'🕯️ The enemy healer’s den', tana:n=>`In the half-light, ${n} looks up from a stone mortar. You have been recognised: a healer of another clan.`, sfidaT:'✨ Challenge the healer', profana:'🔥 Desecrate the den', esci:'Leave quietly',
  golemBtn:'🗿 The rite of the great cat (only once)', g1:'While the clan gets ready for battle, you run to the great stone cat and light herbs at its feet.', g2:'You sing the names of all who carried a stone. The stone eyes light up.', g3:'The great cat rises, and the earth trembles. It holds out a paw: you climb onto its head.',
  marcia:cl=>`The great cat walks towards the ${cl}. It crosses the river as if it were a brook.`, arrivo:cl=>`The cats of the ${cl} see the giant coming and flee into the forest. Nobody is hurt.`, voce:'A deep voice comes out of the stone, and the forest trembles: «Now I am become Death, the destroyer of worlds.»', boxVoce:['The giant’s words','In the Bhagavad Gita (XI, 32) the god Krishna shows himself to the warrior Arjuna in his immense form and says that he is Time, the destroyer of worlds. The physicist Robert Oppenheimer said that this verse came back to him in 1945, before the explosion of the first atomic bomb, and he repeated it as: “Now I am become Death, the destroyer of worlds”.'], distrugge:'The great cat raises its paw and brings it down on the dens: one, two, three. Only stones and dust remain.', ritorno:'At dawn the great cat is back in its place, motionless. Nobody saw it return.',
  golemTit:'🗿 The stone giant', golemFine:cl=>`The dens of the ${cl} have collapsed: for six moons their cats will think only of rebuilding them. The war is won. But in the forest nobody speaks of it aloud: the great cat now frightens everyone, us included.`,
  golemLog:cl=>`🗿 The great stone cat destroyed the dens of the ${cl}. The war is won.`, rovina:'🏚️ The den has collapsed: its cats are rebuilding it.', ricostruita:cl=>`🏗️ The ${cl} has rebuilt its dens.`,
  boxGolem:['The Golem of Prague','A Jewish legend from Prague, written down in the nineteenth century, tells that Rabbi Judah Loew, who lived in the sixteenth century, brought a clay figure to life, the Golem, to defend his community; and that later, when its strength became dangerous, he returned it to stillness.'],
  box:[['The singing contest','In the third song of the Kalevala, the Finnish epic compiled by Elias Lönnrot, old Väinämöinen accepts the challenge of young Joukahainen and with his singing sinks him into the swamp.'],['The staffs and the serpents','In the book of Exodus (7:10-12) Aaron’s staff becomes a serpent before Pharaoh; the magicians of Egypt do the same with their staffs, but Aaron’s staff swallows theirs.'],['The Muses and the Pierides','In Ovid’s Metamorphoses (book V) the nine daughters of Pierus challenge the Muses to a singing contest; they lose, and are turned into magpies.']] },
 fr:{ arti:[['✨','ta lumière','cire chaude','la lumière'],['🌑','ton ombre','brume froide','l’ombre'],['🌿','ta racine','terre mouillée','la racine']], Arti:['✨ La lumière','🌑 L’ombre','🌿 La racine'],
  tit:'✨ Duel de magie', regole:'Un duel de magie entre guérisseurs ne blesse personne : gagne celui qui fait plier l’art de l’autre. Il y a trois arts : ✨ <b>la lumière</b> dissout l’ombre, 🌑 <b>l’ombre</b> étouffe la racine, 🌿 <b>la racine</b> boit la lumière. Gagne qui remporte le premier deux épreuves.<br><br>Parfois l’air trahit l’art du rival : la cire chaude annonce la lumière, la brume froide l’ombre, la terre mouillée la racine.',
  prova:(k,a,b,n)=>`<b>Épreuve ${k}</b> · toi ${a}, ${n} ${b}`, indizio:o=>`Dans l’air, tu sens une odeur de <b>${o}</b>.`, niente:'L’air ne dit rien.', scegli:'Quel art appelles-tu ?',
  vinta:(m,s)=>`${m.charAt(0).toUpperCase()+m.slice(1)} fait plier ${s} : l’épreuve est à toi.`, persa:(m,s)=>`${s.charAt(0).toUpperCase()+s.slice(1)} fait plier ${m} : l’épreuve est pour ton rival.`, pari:x=>`Deux fois ${x} : les arts s’annulent, et l’air tremble.`,
  sfida:(n,f)=>`« ${n}, ${f?'guérisseuse':'guérisseur'} de la Fougère : mes étoiles disent que les tiennes sont plus faibles. Mettons-les à l’épreuve. »`,
  accetta:'✨ Accepter le duel', sfidaB:'✨ Défier en duel', rifiuta:'Refuser avec une révérence', rifiutoT:n=>`🙇 ${n} s’en va sans duel. Dans le clan, quelqu’un murmure.`,
  vintoTit:'✨ Tu as gagné le duel', persoTit:'✨ Tu as perdu le duel', pariTit:'✨ Pas de vainqueur',
  vinto:n=>`${n} baisse le museau : « Ton art est plus ancien que le mien. Prends ces herbes : c’est le gage du perdant. »`, perso:n=>`${n} baisse le museau, avec douceur : « Les étoiles étaient avec moi aujourd’hui. Reviens quand tu auras mieux écouté la forêt. »`, pareggio:n=>`Toi et ${n} vous inclinez : aucun art n’a fait plier l’autre.`,
  mot:'un duel de magie gagné', boschiTit:n=>'🔮 '+n, boschi:(n,cl,f)=>`${n}, ${f?'guérisseuse':'guérisseur'} du ${cl}, cueille des herbes entre les racines. ${f?'Elle':'Il'} porte la petite cape violette de tous les guérisseurs.`, saluta:'Saluer et passer son chemin', nonSiAttacca:(n,f)=>`${n} est ${f?'une guérisseuse':'un guérisseur'} : aucun guerrier ne lève les griffes contre qui soigne.`,
  tanaTit:'🕯️ La tanière du guérisseur ennemi', tana:(n,f)=>`Dans la pénombre, ${n} lève la tête de son mortier de pierre. On t’a reconnu${f?'e':''} : ${f?'une guérisseuse':'un guérisseur'} d’un autre clan.`, sfidaT:'✨ Défier le guérisseur', profana:'🔥 Profaner la tanière', esci:'Sortir en silence',
  golemBtn:'🗿 Le rite du grand chat (une seule fois)', g1:'Pendant que le clan se prépare à la bataille, tu cours au grand chat de pierre et tu allumes les herbes à ses pieds.', g2:'Tu chantes les noms de tous ceux qui ont porté un bloc. Les yeux de pierre s’allument.', g3:'Le grand chat se lève, et la terre tremble. Il te tend une patte : tu montes sur sa tête.',
  marcia:cl=>`Le grand chat marche vers le ${cl}. Il traverse la rivière comme un ruisseau.`, arrivo:cl=>`Les chats du ${cl} voient arriver le géant et s’enfuient dans la forêt. Personne n’est blessé.`, voce:'Une voix profonde sort de la pierre, et la forêt tremble : « Maintenant je suis la Mort, le destructeur des mondes. »', boxVoce:['Les paroles du géant','Dans la Bhagavad Gita (XI, 32), le dieu Krishna se montre au guerrier Arjuna sous sa forme immense et dit qu’il est le Temps, destructeur des mondes. Le physicien Robert Oppenheimer raconta que ce vers lui revint en mémoire en 1945, devant l’explosion de la première bombe atomique, et il le répéta ainsi : « Maintenant je suis devenu la Mort, le destructeur des mondes ».'], distrugge:'Le grand chat lève la patte et l’abat sur les tanières : une, deux, trois. Il ne reste que des pierres et de la poussière.', ritorno:'À l’aube, le grand chat est de nouveau à sa place, immobile. Personne ne l’a vu revenir.',
  golemTit:'🗿 Le géant de pierre', golemFine:cl=>`Les tanières du ${cl} se sont effondrées : pendant six lunes, leurs chats ne penseront qu’à les reconstruire. La guerre est gagnée. Mais dans la forêt personne n’en parle à voix haute : le grand chat, maintenant, fait peur à tout le monde, à nous aussi.`,
  golemLog:cl=>`🗿 Le grand chat de pierre a détruit les tanières du ${cl}. La guerre est gagnée.`, rovina:'🏚️ La tanière s’est effondrée : ses chats la reconstruisent.', ricostruita:cl=>`🏗️ Le ${cl} a reconstruit ses tanières.`,
  boxGolem:['Le Golem de Prague','Une légende juive de Prague, mise par écrit au XIXᵉ siècle, raconte que le rabbin Judah Loew, qui vécut au XVIᵉ siècle, donna vie à une figure d’argile, le Golem, pour défendre sa communauté ; puis, quand sa force devint dangereuse, il le rendit à l’immobilité.'],
  box:[['Le concours de chant','Dans le troisième chant du Kalevala, l’épopée finlandaise rassemblée par Elias Lönnrot, le vieux Väinämöinen accepte le défi du jeune Joukahainen et, par son chant, l’enfonce dans le marais.'],['Les bâtons et les serpents','Dans le livre de l’Exode (7, 10-12), le bâton d’Aaron devient un serpent devant Pharaon ; les magiciens d’Égypte font de même avec leurs bâtons, mais le bâton d’Aaron avale les leurs.'],['Les Muses et les Piérides','Dans les Métamorphoses d’Ovide (livre V), les neuf filles de Piéros défient les Muses dans un concours de chant ; elles perdent, et sont changées en pies.']] } };
const MAG=MAG_T[LINGUA]||MAG_T.it;
const guarNemico=cl=>G.cats.find(c=>c.clan===cl&&c.rango==='guaritore');
const golemPronto=()=>{ const C=G.colosso; return !!(C&&C.massi>=COLOSSO_N&&C.festa&&!stG().golem); };
// il duello di magia: tre arti, la prima a due prove vince
function duelloMagico(r,fine){ const p=G.p, S=stG(); if(!r||G.duelloMagico) return; segnaEvento(); G.duelloMagico={id:r.id}; r.duello=true; r.vx=r.vy=0; p.guida=null; p.caccia=null;
 if(!G.dentro){ const a=Math.atan2(r.y-p.y,r.x-p.x)||0; r.x=p.x+Math.cos(a)*55; r.y=p.y+Math.sin(a)*55; } r.flip=p.x<r.x?-1:1; p.flip=-r.flip;
 if(r.arte==null) r.arte=Math.floor(Math.random()*3);
 let mie=0, sue=0, k=0; const nr=nome(r);
 const fx=(c,i)=>{ const col=['#ffe9a0','#8a7aff','#7ad07a'][i]; scintille(c.x,c.y-24,col,16); testo(c.x,c.y-50*scala(c),MAG.arti[i][0],col,22,-14,1.8); setPosa(c,'canta',2.5); };
 const finale=()=>{ r.duello=false; G.duelloMagico=null; segnaEvento(); const b=MAG.box[(S.duelli=(S.duelli||0)+1)%MAG.box.length];
  if(mie>sue){ p.duelliVinti=(p.duelliVinti||0)+1; if(typeof ERBE_PROVA!=='undefined'&&p.erbe<8){ ERBE_PROVA.prendi(Math.floor(Math.random()*PIANTE.length),false); if(p.erbe<8) ERBE_PROVA.prendi(Math.floor(Math.random()*PIANTE.length),false); } tensione(r.clan,-10); r.conosciuto=(r.conosciuto||0)+1;
   modale(MAG.vintoTit,MAG.vinto(nr)+stSapere(b),[{t:'✨',f:()=>spirito(12,MAG.mot)}]); }
  else if(sue>mie){ if(p.erbe>0){ p.erbe--; if(Array.isArray(p.sacca)) p.sacca.pop(); } p.spirito=Math.max(0,(p.spirito??60)-4); modale(MAG.persoTit,MAG.perso(nr)+stSapere(b),[{t:'🌙'}]); }
  else modale(MAG.pariTit,MAG.pareggio(nr)+stSapere(b),[{t:'🙇'}]);
  if(window.REG) REG.evento('duello',nr+' '+mie+'-'+sue); if(fine) setTimeout(fine,300); };
 const prova=()=>{ if(mie>=2||sue>=2||k>=5) return finale(); k++;
  const lui=Math.random()<0.5?r.arte:Math.floor(Math.random()*3), sente=Math.random()<0.55, falso=Math.random()<0.15, ind=sente?MAG.indizio(MAG.arti[falso?(lui+1)%3:lui][2]):MAG.niente;
  modale(MAG.tit,MAG.prova(k,mie,sue,nr)+'<br><br>'+ind+'<br><br>'+MAG.scegli,MAG.Arti.map((t,i)=>({t,f:()=>{
   fx(p,i); setTimeout(()=>{ if(G.cats.includes(r)) fx(r,lui); },500);
   const vinco=(i===0&&lui===1)||(i===1&&lui===2)||(i===2&&lui===0), t=i===lui?MAG.pari(MAG.arti[i][3]):vinco?MAG.vinta(MAG.arti[i][1],MAG.arti[lui][3]):MAG.persa(MAG.arti[i][1],MAG.arti[lui][3]);
   if(i!==lui){ if(vinco) mie++; else sue++; } if(window.suonoMiao&&i!==lui) suonoMiao(vinco?'gioia':'allarme');
   recita([{t,dur:3.2}],prova); }}))); };
 recita([{c:r,t:MAG.sfida(nome(p),p.sesso==='f').replace(/^«|»$/g,''),dur:5}],()=>{ if(!S.regoleDuello){ S.regoleDuello=true; modale(MAG.tit,MAG.regole,[{t:'✨',f:prova}]); } else prova(); }); }
window.duelloMagico=duelloMagico;
addEventListener('DOMContentLoaded',()=>{ if(typeof aggiornaNemico!=='function') return;
 // ogni clan nemico ha il suo guaritore, che non combatte mai e gira per il suo bosco a raccogliere erbe
 setInterval(()=>{ if(typeof G==='undefined'||!G||!G.cats||paused) return; if(typeof taneNemiche==='function') taneNemiche();
  for(const cl of ['nebbia','pietre']){ if(guarNemico(cl)) continue; const d=L[cl+'Tana1']; const c=nuovoGatto(cl,'guaritore',{lune:40}); c.stato='erbe'; if(d){ c.x=d.x; c.y=d.y+d.r+14; } c.arte=Math.floor(Math.random()*3); } },2000);
 const metaBosco=c=>{ for(let k=0;k<30;k++){ const x=FX1+60+Math.random()*(WW-FX1-100), y=c.clan==='nebbia'?60+Math.random()*800:960+Math.random()*780; if(territorio(x,y)===c.clan&&!acqua(x,y)&&!inCampo(x,y,15)) return {x,y}; } const d=L[c.clan+'Tana1']; return d?{x:d.x,y:d.y+d.r+14}:CLAN[c.clan].campo; };
 const o=aggiornaNemico; aggiornaNemico=function(c,dt){ if(c.golemFuga&&G.t<c.golemFuga){ if(!c.metaB||dist(c,c.metaB)<12) c.metaB=metaBosco(c); muovi(c,c.metaB.x,c.metaB.y,140,dt); return; } // davanti al gigante si fugge nel bosco, non verso il campo
  if(c.rango!=='guaritore') return o.apply(this,arguments);
  if(c.duello||(G.duelloMagico&&G.duelloMagico.id===c.id)){ c.vx=c.vy=0; return; }
  if(c.sfidante){ if(dist(c,G.p)>60) muovi(c,G.p.x,G.p.y,90,dt); else { c.vx=c.vy=0; } return; }
  if(c.stato!=='erbe'){ c.stato='erbe'; c.metaB=null; }
  if(c.attesa>0){ c.attesa-=dt; c.vx=c.vy=0; return; }
  if(!c.metaB||dist(c,c.metaB)<10){ c.metaB=Math.random()<0.4?(()=>{ const d=L[c.clan+'Tana1']; return d?{x:d.x+(Math.random()-0.5)*30,y:d.y+d.r+14}:metaBosco(c); })():metaBosco(c); c.attesa=2+Math.random()*5; return; }
  muovi(c,c.metaB.x,c.metaB.y,48,dt); };
 // incontro nel bosco con un guaritore nemico: il duello per i guaritori, un saluto per gli altri
 { const o=incontroNemico; incontroNemico=function(e){ const p=G.p; if(!e||e.rango!=='guaritore'||e.clan==='felce') return o.apply(this,arguments); if(paused||scena||G.duelloMagico) return;
  segnaEvento(); p.guida=null; p.caccia=null; e.vx=e.vy=0; e.attesa=6; e.flip=p.x<e.x?-1:1; const nr=nome(e);
  if(p.rango==='guaritore') return modale(MAG.boschiTit(nr),MAG.boschi(nr,CLAN[e.clan].nome,e.sesso==='f'),[{t:MAG.sfidaB,f:()=>duelloMagico(e)},{t:MAG.saluta,f:()=>{ e.attesa=1; }}]);
  modale(MAG.boschiTit(nr),MAG.boschi(nr,CLAN[e.clan].nome,e.sesso==='f')+'<br><br>'+MAG.nonSiAttacca(nr,e.sesso==='f'),[{t:MAG.saluta,f:()=>{ e.attesa=1; }}]); }; }
 // entrando nella tana del guaritore nemico: sfidarlo, profanare la tana o uscire in silenzio
 if(typeof entraTana==='function'){ const o=entraTana; entraTana=function(k){ const d=L[k], p=G.p;
  if(d&&d.clan&&G.rovine&&G.rovine[d.clan]){ const ora=performance.now(); if(!(G.rovinaDetto>ora)){ G.rovinaDetto=ora+5000; log(MAG.rovina,'#d8c8b0'); annuncia(MAG.rovina); } p.uscito=k; return; }
  if(!(d&&d.clan&&/Tana1$/.test(k)&&p.rango==='guaritore')) return o.apply(this,arguments);
  const pr=profanazione; profanazione=function(){}; try{ o.apply(this,arguments); } finally{ profanazione=pr; }
  setTimeout(()=>{ if(!G||G.dentro!==k) return; const r=guarNemico(d.clan); if(r){ r.x=d.x+12; r.y=d.y-4; r.vx=r.vy=0; r.attesa=20; }
   modale(MAG.tanaTit,r?MAG.tana(nome(r),p.sesso==='f'):'',[...(r?[{t:MAG.sfidaT,f:()=>duelloMagico(r,()=>{ offeso(d.clan); tensione(d.clan,5); })}]:[]),{t:MAG.profana,f:()=>profanazione(k)},{t:MAG.esci,f:()=>{ tensione(d.clan,5); esciTana(); }}]); },900); }; }
 // il guaritore nemico viene a sfidarti: almeno due volte per partita, quando sei guaritore
 setInterval(()=>{ if(typeof G==='undefined'||!G||!G.p||paused||scena||recitaAtt||fx||G.raid||G.dentro||G.gita||G.parata||G.golem||G.duelloMagico) return; const p=G.p, S=stG();
  if(p.rango!=='guaritore'||!nelCampo(p,40)||!storiaLibera(12)) return; const SF=S.sfide||(S.sfide={n:0,prox:G.t+MOON*2}); if(G.t<SF.prox) return;
  const cl=pick(['nebbia','pietre']), r=guarNemico(cl); if(!r||r.duello) return; SF.n++; SF.prox=G.t+MOON*(SF.n<2?4:7+Math.random()*5); segnaEvento();
  const a=Math.random()*6.283; r.x=clamp(p.x+Math.cos(a)*70,30,WW-30); r.y=clamp(p.y+Math.sin(a)*70,30,WH-30); r.vx=r.vy=0; r.flip=p.x<r.x?-1:1; r.pacificoFino=G.t+MOON; r.sfidante=true; if(typeof mettiAFuoco==='function') mettiAFuoco(r,4000);
  const via=()=>{ r.sfidante=false; r.metaB=null; };
  modale(nome(r),MAG.sfida(nome(p),p.sesso==='f'),[{t:MAG.accetta,f:()=>{ r.sfidante=false; duelloMagico(r,via); }},{t:MAG.rifiuta,f:()=>{ via(); log(MAG.rifiutoT(nome(r)),'#cfe8ff'); p.spirito=Math.max(0,(p.spirito??60)-3); }}]); },3000);
 // durante il duello e la marcia del grande gatto non arrivano altri eventi
 { const o=puoEvento; puoEvento=function(){ return G&&(G.duelloMagico||G.golem)?false:o.apply(this,arguments); }; const s2=storiaLibera; storiaLibera=function(){ return G&&(G.duelloMagico||G.golem)?false:s2.apply(this,arguments); }; }
 // le tane distrutte si ricostruiscono dopo sei lune
 setInterval(()=>{ if(typeof G==='undefined'||!G||!G.rovine) return; for(const cl in G.rovine) if(G.t>G.rovine[cl].fino){ delete G.rovine[cl]; log(MAG.ricostruita(CLAN[cl].nome),'#d8c8b0'); } },2000);
});
// il rito del grande gatto: una volta per partita, alla chiamata alle armi, con il monumento finito
function ritoGrandeGatto(cl){ const p=G.p, C=G.colosso, S=stG(); if(!golemPronto()) return; S.golem=true; segnaEvento(); G.tens[cl]=60; const nomeCl=CLAN[cl].nome, cm=CLAN[cl].campo;
 const dir=C.x<(FX0+FX1)/2?1:-1;
 passaggio(()=>{ G.dentro=null; p.x=C.x+dir*150; p.y=C.y; p.vx=p.vy=0; p.guida=null; p.caccia=null; p.flip=-dir; p.passaSiepe=performance.now()+4000;
  if(window.R3D){ R3D.cam3.yaw=Math.atan2(C.x-p.x,C.y-p.y); R3D.cam3.pitch=0.3; R3D.cam3.dist=5.5; R3D.cam3.rotella=performance.now()+120000; R3D.cam3.manuale=G.t+120; R3D.cam3.init=false; } });
 const fase=k=>()=>{ C.vivo={fase:k,t0:G.t,verso:dir}; };
 setTimeout(()=>recita([{t:MAG.g1,dur:6,f:()=>{ setPosa(p,'canta',6); scintille(p.x,p.y-20,'#ffd27a',20); }},{t:MAG.g2,dur:6,f:fase(2)},{t:MAG.g3,dur:6,f:fase(1)}],()=>{ C.vivo=null; avviaMarcia(); }),900);
 function avviaMarcia(){ const fine={x:cm.x-dir*0+(cm.x>C.x?-150:150),y:cm.y}; G.golem={cl,x:C.x,y:C.y,dest:fine,fase:'marcia',da:G.t};
  if(window.suonoMiaoGrande) suonoMiaoGrande(); if(window.R3D){ R3D.cam3.dist=12; R3D.cam3.pitch=0.22; } didascalia.classList.add('alto');
  let prec=performance.now(); const passo=ora=>{ const g=G&&G.golem; if(!g) return; const dt=Math.min(0.1,(ora-prec)/1000); prec=ora;
   if(!paused&&g.fase==='marcia'){ const dx=g.dest.x-g.x, dy=g.dest.y-g.y, d=Math.hypot(dx,dy); if(d<8){ g.fase='distrugge'; g.daD=G.t; distruggi(); } else { const s=Math.min(d,70*dt); g.x+=dx/d*s; g.y+=dy/d*s; } }
   p.x=g.x; p.y=g.y; p.elev=330; p.sopra=false; p.vx=p.vy=0; p.guida=null; p.passaSiepe=performance.now()+1000; if(window.R3D){ if(g.vista){ R3D.cam3.yaw=Math.atan2(cm.x-g.x||1,cm.y-g.y)+1.25; R3D.cam3.dist=13; R3D.cam3.pitch=0.4; } else R3D.cam3.yaw=Math.atan2(g.dest.x-g.x||1,g.dest.y-g.y); }
   requestAnimationFrame(passo); }; requestAnimationFrame(passo);
  recita([{t:MAG.marcia(nomeCl),dur:9},{t:MAG.arrivo(nomeCl),dur:9}],()=>{}); }
 function distruggi(){ for(const c of G.cats){ if(c.clan!==cl) continue; c.golemFuga=G.t+25; c.metaB=null; if(c.rango!=='guaritore'){ c.stato='pattuglia'; c.bersaglio=null; } }
  (G.rovine=G.rovine||{})[cl]={fino:G.t+MOON*6}; if(window.suonoMiao) suonoMiao('allarme'); G.golem.vista=true;
  recita([{t:MAG.voce,dur:6},{t:MAG.distrugge,dur:7}],()=>{ didascalia.classList.remove('alto'); passaggio(()=>{ G.golem=null; p.elev=0; p.x=CLAN.felce.campo.x; p.y=CLAN.felce.campo.y+40; p.passaSiepe=performance.now()+2000; if(window.R3D){ R3D.cam3.dist=3.4; R3D.cam3.rotella=0; R3D.cam3.manuale=0; } });
   setTimeout(()=>recita([{t:MAG.ritorno,dur:6}],()=>{ G.tens[cl]=0; if(G.conq&&G.conq[cl]<3) G.conq[cl]++; G.treguaFino=Math.max(G.treguaFino||0,G.t+MOON*6); log(MAG.golemLog(nomeCl),'#ffe08a'); annuncia('🏆 '+MAG.golemLog(nomeCl).replace('🗿 ',''),'#ffe08a'); if(window.REG) REG.evento('grande gatto',nomeCl);
    modale(MAG.golemTit,MAG.golemFine(nomeCl)+stSapere(MAG.boxVoce)+stSapere(MAG.boxGolem),[{t:'🗿',f:()=>spirito(25,'rito')}]); }),1000); }); } }
window.ritoGrandeGatto=ritoGrandeGatto;

// Durante la marcia del grande gatto tutto è solenne: niente fumetti, consigli, annunci né messaggi di guadagno, e i bordi scuri dei riti
// (correzione del 14 novembre 2026).
addEventListener('DOMContentLoaded',()=>{ const muto=f=>function(){ if(typeof G!=='undefined'&&G&&G.golem) return; return f.apply(this,arguments); };
 if(typeof consiglio==='function') consiglio=muto(consiglio);
 if(typeof annuncia==='function') annuncia=muto(annuncia);
 if(typeof mostraToast==='function') mostraToast=muto(mostraToast);
 if(typeof parla==='function') parla=muto(parla);
 if(typeof disegnaFumetti==='function'){ const o=disegnaFumetti; disegnaFumetti=function(){ if(G&&G.golem){ fumetti=[]; return; } return o.apply(this,arguments); }; }
 if(typeof solennita==='function'){ const o=solennita; solennita=function(){ const r=o.apply(this,arguments); if(G&&G.golem) solenne.classList.add('si'); return r; }; } });

// ================== il gigante si sveglia dal monumento, e il rito di riparazione ==================
// Richiesta del 14 novembre 2026
const RIP_T={
 it:{ avvisoTit:'🗿 Il grande gatto ascolta', avviso:'Da quando i tre clan hanno finito il grande gatto di pietra, i guaritori sentono che ascolta il loro canto. Una notte sola, una volta nella vita del bosco, potrebbe alzarsi e camminare.<br><br>Ai piedi del monumento, premi Spazio: sarai tu a decidere se svegliarlo, e contro chi. Puoi farlo anche alla chiamata alle armi.',
  sveglia:'svegliare il grande gatto', sceltaTit:'🗿 Svegliare il grande gatto', scelta:'Il grande gatto può camminare una volta sola. Se lo svegli, raggiungerà un villaggio nemico e ne farà crollare le tane: nessun gatto si farà male, ma quel clan non lo dimenticherà.<br><br>Quale villaggio deve raggiungere?', nessuno:'Nessuno: lasciarlo dormire',
  rimorsoTit:'🌙 Una notte senza sonno', rimorso:cl=>`Non riesci a dormire. Ripensi alle tane del ${cl} che crollano, ai cuccioli che scappano nel bosco, alla polvere. Il clan ha vinto, ma dentro di te qualcosa non torna.<br><br>Tra le rovine del loro campo potresti fare un rito di riparazione.`, vai:'🕊️ Andare tra le rovine', nonOra:'Non ora',
  ripara:'fare un rito di riparazione', r1:'Tra le pietre crollate posi le tue erbe, una per ogni tana.', r2:cl=>`Canti piano, perché gli antenati del ${cl} ti sentano: chiedi perdono per il gigante.`, r3:cl=>`Uno dopo l’altro, i gatti del ${cl} escono dal bosco. Nessuno parla. Poi il più vecchio prende un ramo e lo posa accanto alle tue erbe.`, r4:'Lavorate insieme fino all’alba, e le tane tornano in piedi.',
  fineTit:'🕊️ Il rito di riparazione', fine:cl=>`Il ${cl} non dimenticherà il gigante. Ma ricorderà anche questa notte: le sue tane sono di nuovo in piedi, e per tre lune i suoi gatti ti saluteranno come un ospite.`, log:cl=>`🕊️ Hai fatto il rito di riparazione tra le rovine del ${cl}: le tane sono ricostruite.`, mot:'un rito di riparazione',
  box:['Una genuflessione','Il 7 dicembre 1970 il cancelliere tedesco Willy Brandt, in visita a Varsavia, si inginocchiò davanti al monumento agli eroi del ghetto. Il gesto, che il protocollo non prevedeva, divenne il simbolo della richiesta di perdono della Germania verso la Polonia.'] },
 en:{ avvisoTit:'🗿 The great cat is listening', avviso:'Since the three clans finished the great stone cat, healers feel that it listens to their singing. For one night only, once in the life of the forest, it could rise and walk.<br><br>At the foot of the monument, press Space: you will decide whether to wake it, and against whom. You can also do it at a call to arms.',
  sveglia:'wake the great cat', sceltaTit:'🗿 Wake the great cat', scelta:'The great cat can walk only once. If you wake it, it will reach an enemy village and bring down its dens: no cat will be hurt, but that clan will never forget.<br><br>Which village should it reach?', nessuno:'None: let it sleep',
  rimorsoTit:'🌙 A sleepless night', rimorso:cl=>`You cannot sleep. You think of the dens of the ${cl} collapsing, of the kits running into the forest, of the dust. The clan has won, but something inside you does not add up.<br><br>Among the ruins of their camp you could perform a rite of reparation.`, vai:'🕊️ Go to the ruins', nonOra:'Not now',
  ripara:'perform a rite of reparation', r1:'Among the fallen stones you lay your herbs, one for each den.', r2:cl=>`You sing softly, so that the ancestors of the ${cl} may hear you: you ask forgiveness for the giant.`, r3:cl=>`One by one, the cats of the ${cl} come out of the forest. Nobody speaks. Then the oldest picks up a branch and lays it beside your herbs.`, r4:'You work together until dawn, and the dens stand again.',
  fineTit:'🕊️ The rite of reparation', fine:cl=>`The ${cl} will not forget the giant. But it will also remember this night: its dens stand again, and for three moons its cats will greet you as a guest.`, log:cl=>`🕊️ You performed the rite of reparation among the ruins of the ${cl}: the dens are rebuilt.`, mot:'a rite of reparation',
  box:['A kneeling','On 7 December 1970 the German chancellor Willy Brandt, visiting Warsaw, knelt before the monument to the heroes of the ghetto. The gesture, not foreseen by protocol, became the symbol of Germany asking Poland for forgiveness.'] },
 fr:{ avvisoTit:'🗿 Le grand chat écoute', avviso:'Depuis que les trois clans ont achevé le grand chat de pierre, les guérisseurs sentent qu’il écoute leur chant. Une nuit seulement, une fois dans la vie de la forêt, il pourrait se lever et marcher.<br><br>Au pied du monument, appuie sur Espace : c’est toi qui décideras de le réveiller, et contre qui. Tu peux aussi le faire lors d’un appel aux armes.',
  sveglia:'réveiller le grand chat', sceltaTit:'🗿 Réveiller le grand chat', scelta:'Le grand chat ne peut marcher qu’une seule fois. Si tu le réveilles, il atteindra un village ennemi et fera s’effondrer ses tanières : aucun chat ne sera blessé, mais ce clan ne l’oubliera pas.<br><br>Quel village doit-il atteindre ?', nessuno:'Aucun : le laisser dormir',
  rimorsoTit:'🌙 Une nuit sans sommeil', rimorso:cl=>`Tu n’arrives pas à dormir. Tu repenses aux tanières du ${cl} qui s’effondrent, aux chatons qui fuient dans la forêt, à la poussière. Le clan a gagné, mais en toi quelque chose ne va pas.<br><br>Parmi les ruines de leur camp, tu pourrais faire un rite de réparation.`, vai:'🕊️ Aller parmi les ruines', nonOra:'Pas maintenant',
  ripara:'faire un rite de réparation', r1:'Parmi les pierres effondrées, tu poses tes herbes, une pour chaque tanière.', r2:cl=>`Tu chantes doucement, pour que les ancêtres du ${cl} t’entendent : tu demandes pardon pour le géant.`, r3:cl=>`Un à un, les chats du ${cl} sortent de la forêt. Personne ne parle. Puis le plus vieux ramasse une branche et la pose à côté de tes herbes.`, r4:'Vous travaillez ensemble jusqu’à l’aube, et les tanières se relèvent.',
  fineTit:'🕊️ Le rite de réparation', fine:cl=>`Le ${cl} n’oubliera pas le géant. Mais il se souviendra aussi de cette nuit : ses tanières sont de nouveau debout, et pendant trois lunes ses chats te salueront comme un hôte.`, log:cl=>`🕊️ Tu as fait le rite de réparation parmi les ruines du ${cl} : les tanières sont reconstruites.`, mot:'un rite de réparation',
  box:['Un agenouillement','Le 7 décembre 1970, le chancelier allemand Willy Brandt, en visite à Varsovie, s’agenouilla devant le monument aux héros du ghetto. Le geste, que le protocole ne prévoyait pas, devint le symbole de la demande de pardon de l’Allemagne à la Pologne.'] } };
const RIP=RIP_T[LINGUA]||RIP_T.it;
function sceltaGrandeGatto(){ if(!golemPronto()) return; modale(RIP.sceltaTit,RIP.scelta,[{t:'🗿 '+CLAN.nebbia.nome,f:()=>ritoGrandeGatto('nebbia')},{t:'🗿 '+CLAN.pietre.nome,f:()=>ritoGrandeGatto('pietre')},{t:RIP.nessuno}]); }
function ritoRiparazione(cl){ const p=G.p, S=stG(), cm=CLAN[cl].campo, nomeCl=CLAN[cl].nome; if(!(G.rovine&&G.rovine[cl])) return; segnaEvento(); S.riparato=(S.riparato||0)+1;
 p.x=cm.x; p.y=cm.y+30; p.vx=p.vy=0; p.guida=null; p.caccia=null;
 const loro=G.cats.filter(c=>c.clan===cl&&c.rango!=='gattino').slice(0,8);
 loro.forEach((c,i)=>{ const a=Math.PI*(0.15+0.7*i/Math.max(1,loro.length-1)); c.x=cm.x+Math.cos(a)*90; c.y=cm.y+30+Math.sin(a)*55; c.vx=c.vy=0; c.stato='pattuglia'; c.golemFuga=0; c.amicoPrima=c.amico; c.amico=true; c.pacificoFino=G.t+MOON*3; c.attesa=30; c.flip=c.x<p.x?1:-1; setPosa(c,'siede',30); });
 if(window.R3D){ R3D.cam3.dist=5; R3D.cam3.pitch=0.45; R3D.cam3.init=false; }
 const erbe=()=>{ let n=Math.min(3,p.erbe||0); while(n-->0){ p.erbe--; if(Array.isArray(p.sacca)) p.sacca.pop(); } scintille(p.x,p.y-10,'#9be07f',20); setPosa(p,'canta',8); };
 recita([{t:RIP.r1,dur:6,f:erbe},{t:RIP.r2(nomeCl),dur:6.5},{t:RIP.r3(nomeCl),dur:7.5},{t:RIP.r4,dur:6,f:()=>{ delete G.rovine[cl]; if(window.suonoMiaoGrande) suonoMiaoGrande(); }}],
  ()=>{ G.tens[cl]=0; G.treguaFino=Math.max(G.treguaFino||0,G.t+MOON*3); log(RIP.log(nomeCl),'#c8f0a8'); if(window.REG) REG.evento('riparazione',nomeCl);
   modale(RIP.fineTit,RIP.fine(nomeCl)+stSapere(RIP.box),[{t:'🕊️',f:()=>spirito(15,RIP.mot)}]); }); }
window.sceltaGrandeGatto=sceltaGrandeGatto; window.ritoRiparazione=ritoRiparazione;
addEventListener('DOMContentLoaded',()=>{
 // ai piedi del monumento il guaritore può svegliare il gigante
 if(typeof colossoVicino==='function'){ const o=colossoVicino; colossoVicino=function(p){ const r=o.apply(this,arguments); if(r&&p.rango==='guaritore'&&golemPronto()&&!G.raid&&!G.parata) return {t:RIP.sveglia,f:sceltaGrandeGatto}; return r; }; }
 // tra le rovine di un campo nemico, Spazio propone il rito di riparazione
 if(typeof azioneSpazio==='function'){ const o=azioneSpazio; azioneSpazio=function(){ const p=G.p; if(G.rovine&&!G.dentro&&!G.golem&&!G.raid&&(p.rango==='guaritore'||p.rango==='apprendista'&&p.via==='guaritore')) for(const cl in G.rovine){ if(dist(p,CLAN[cl].campo)<CLAN[cl].campo.r+20) return {t:RIP.ripara,f:()=>ritoRiparazione(cl)}; } return o.apply(this,arguments); }; }
 // l'avviso, una volta: il grande gatto ascolta i guaritori; e qualche tempo dopo la distruzione, il rimorso
 setInterval(()=>{ if(typeof G==='undefined'||!G||!G.p||paused||scena||recitaAtt||fx||G.raid||G.golem||G.parata||G.dentro) return; const p=G.p, S=stG();
  if(p.rango==='guaritore'&&golemPronto()&&!S.golemAvvisato&&storiaLibera(8)){ S.golemAvvisato=true; segnaEvento(); return modale(RIP.avvisoTit,RIP.avviso,[{t:'🗿'}]); }
  if(S.rimorso&&!S.rimorso.detto&&G.t>S.rimorso.quando&&G.rovine&&G.rovine[S.rimorso.cl]&&storiaLibera(10)){ S.rimorso.detto=true; segnaEvento(); const cl=S.rimorso.cl;
   modale(RIP.rimorsoTit,RIP.rimorso(CLAN[cl].nome),[{t:RIP.vai,f:()=>avviaGuida('punto',{x:CLAN[cl].campo.x,y:CLAN[cl].campo.y+30})},{t:RIP.nonOra}]); } },3000);
 // il rimorso arriva circa una luna dopo la distruzione
 { const o=ritoGrandeGatto; ritoGrandeGatto=window.ritoGrandeGatto=function(cl){ if(golemPronto()) stG().rimorso={cl,quando:G.t+MOON*1.2}; return o.apply(this,arguments); }; }
});
