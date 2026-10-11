# Paklijst v3.4

Persoonlijke, offline-first paklijst voor GitHub Pages.

## v3.4 — compacter
- Versienummer zichtbaar in de kop en onderaan de pagina.
- Compacte lijst: één blok per categorie met dunne scheidingslijnen in plaats van een losse kaart per regel. Regels zijn nu ±40px hoog (was ±64px).

## v3.3 — slepen
- Elke regel heeft rechts een greep **⠿**. Houd die vast en sleep het item naar een andere plek.
- Werkt met vinger (iPhone/iPad) en muis, in de paklijst en in de masterlijst.
- Sleep je een item naar een andere categorie, dan verhuist het mee naar die categorie.
- Bij de boven- of onderrand scrolt de lijst automatisch mee.
- De volgorde wordt opgeslagen en zit ook in de backup.
- Een nieuwe reis neemt de volgorde van de masterlijst over.

## v3.2 — bugfixes
- **CSV- en tekstexport werken weer.** Ze waren leeg; nu staan alle items van de huidige reis erin, per categorie. Te vinden in de werkbalk van de paklijst (📤 Delen en CSV).
- **Backup gebeurt nog maar één keer.** Eerst kreeg je zowel een download als het deelscherm.
- **✨ Slim aanvullen doet echt iets.** Items in de masterlijst hebben nu een ⭐ (altijd mee) of ☆ (alleen via profiel). Tik op de ster om te wisselen. Profielen die je bij een item aanvinkt worden gebruikt. Bij het kiezen van een profiel vraagt de app of hij passende items meteen toevoegt.
- **Updates komen direct door.** De service worker haalt de pagina eerst van internet en valt alleen offline terug op de cache.
- **Echt app-icoon op iPhone/iPad** (PNG apple-touch-icon in plaats van SVG).
- **Reis verwijderen** kan nu (onderaan de paklijst).
- ＋ Item in de kop voegt toe aan de masterlijst als je daar bent, anders aan de huidige reis.
- Export- en backupknoppen staan op één plek: **Mijn reizen → Backup**. De onderste balk op de telefoon heeft een 💾 Backup-knop die daarheen springt.
- De drie losse scriptlagen (v2, v3, v3.1) zijn samengevoegd tot één script.

Bestaande gegevens blijven gewoon werken: alles staat nog in dezelfde `paklijst-v2` opslag en oude backups (v3 en v3.1) kunnen nog worden geïmporteerd. Bij de eerste keer openen worden bestaande masteritems automatisch aan passende profielen gekoppeld; welke items "altijd" mee gaan, blijft zoals het was.

## PC → iPhone
1. Open de app op de PC.
2. Ga naar **Mijn reizen** en kies **Backup delen / opslaan**.
3. Stuur het JSON-bestand naar je iPhone (AirDrop, WhatsApp, mail…).
4. Open de Paklijst op je iPhone, ga naar **Mijn reizen** en kies **Backup importeren**.
5. Selecteer het JSON-bestand in Bestanden. De masterlijst en je reizen staan daarna op de iPhone.

## iPhone als app installeren
Open de site in Safari → **Deel** → **Zet op beginscherm**.
Daarna opent Paklijst als een eigen app.

## Belangrijk
De app synchroniseert niet automatisch tussen apparaten. De data staat lokaal.
Maak daarom regelmatig een JSON-backup als je belangrijke wijzigingen hebt gemaakt.

## Bestanden
- `index.html` — de hele app
- `sw.js` — service worker voor offline gebruik
- `manifest.json`, `icon.svg`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` — installatie en iconen
