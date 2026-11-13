# Gattini guerrieri 3D — by RAV

**Gioca:** https://rav-ltd.github.io/kittenwar/ · in italiano, English, français.

Tre clan di gatti, un bosco, mille leggende. Cresci da gattino ad apprendista, poi guerriero o guaritore:
caccia, combatti, cura, impara le usanze dei clan vicini, partecipa ai riti alla Roccia Alta,
e un giorno, forse, guida il tuo clan. Le leggende dipinte nelle tane, le piante medicinali e i riti
citano fonti vere, dall'antropologia all'erboristeria antica.

Di RAV, da un'idea di Dalia.

## Come si gioca

Frecce o WASD per muoversi, Spazio per l'azione del momento (parlare, cacciare, bere, raccogliere,
far avanzare un racconto), Esc per la pausa e i salvataggi, M per la musica. Il mouse gira la telecamera,
la rotella la avvicina; un clic su un luogo, un gatto o una voce del pannello ti ci porta.
Le partite si salvano nel browser di chi gioca (cinque partite con il nome che scegli).

## Com'è fatto

Un gioco web: HTML5 e JavaScript, grafica 3D in WebGL con [Three.js](https://threejs.org) 0.160
(caricato da cdn.jsdelivr.net). Nessuna installazione: si gioca nel browser, meglio su un computer.
Per giocarlo da una copia locale serve un piccolo server, perché i browser non caricano i moduli
JavaScript da un file aperto con un doppio clic, per esempio: `python3 -m http.server` nella cartella,
poi http://localhost:8000/.

## Crediti

- Modello del gatto: «Toon Cat FREE» di Omabuarts Studio,
  [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), ricolorato nel gioco
  (https://sketchfab.com/3d-models/toon-cat-free-b2bd1ee7858444bda366110a2d960386).
- Miagolii: «Meow» di IgnasD e «Kitten Mew» di AntumDeluge, OpenGameArt, CC0.
  Il resto della musica e dei suoni è sintetizzato dal codice.
- 3D: Three.js (licenza MIT).

Dettagli in `modelli/CREDITI.md`.
