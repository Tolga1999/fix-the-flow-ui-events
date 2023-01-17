> _Fork_ deze deeltaak en ga aan de slag. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Titel
<!-- Geef je project een titel en schrijf in één zin wat het is -->
Interactive buttons. Interactive buttons die verschillende animaties uitvoeren.


## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
De opdracht voor deze deeltaak is een oefening in ui-events waarin je experimenteert met muis, keyboard, touch én apparaat interactie en de afhandeling daarvan doormiddel van javascript. Aan ons was de opdracht om aan minimaal 10 knoppen interactie toe te voegen. Verder is de code is geschreven met HTML, CSS en Javascript. Tot slot kan je interacties uitvoeren met de buttons (met verschillende events en animaties).

<!-- Voeg een link toe naar Github Pages 🌐-->
https://tolga1999.github.io/fix-the-flow-ui-events/


## Experimenten
<!-- In de Experimenten beschrijf je wat je per experiment hebt gedaan en documenteer je de code aan de hand van voorbeelden -->
Alle knoppen zijn geselecteerd met JS, nadat de knoppen zijn geselecteerd heeft elke knop een EventListener gekregen zodat je een verschillende event kan toevoegen aan de geselecteerde anchor (zoals click of double click). Tot slot toggle of add ik een class op de geselecteerde anchor zodat de animatie wordt geactiveerd. 

_Een simpel voorbeeld:_
```JS
// frontend button
let frontendAnchor = document.querySelector('a:nth-of-type(1)');
frontendAnchor.addEventListener('click', frontendAnchorClick);

function frontendAnchorClick(){
  frontendAnchor.classList.toggle('frontend-animation');
}
```

Alle buttons zijn uitgebreid omschreven onder het kopje [bouwen](https://github.com/Tolga1999/fix-the-flow-ui-events/wiki/3.-Bouwen) in de wiki.

<!-- Voeg een mooie poster visual toe 📸 per experiment -->
_hieronder een screenshot van de website:_

<img width="75%" src="https://user-images.githubusercontent.com/112855878/212795735-0157806f-a128-4f3a-8ca0-0d2de8a676be.png">

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
