# NordicBean – rühmaprojekt (veebipõhine prototüüp)

Periood: 22.09–05.10.2025

See repo sisaldab prototüüpi kujuteldava ettevõtte jaoks: NordicBean – Eesti väikeröstla, kes müüb värskelt röstitud erikohvi (ühekordsed ostud ja paindlik korduvtellimus). Prototüüp koosneb maandumislehest ja kahest lisalehest (kataloog/valik ja kassa), lisaks nõutud UX-artefaktid: persoon, Crazy 8's ja kasutaja teekond.

## Prototüübi struktuur
- Avaleht: prototype/index.html
- Kohvisegud (valik): prototype/products.html
- Kassa (vorm + kinnitus): prototype/checkout.html

Märkus: prototüüp ei salvesta andmeid serverisse. Toote valik salvestatakse brauseri kohalikku salvestusse (localStorage) ja kassa lehel kuvatakse kinnitusekraan.

## UX-i lähteülesanne (22.09–05.10 kava)
Allpool on meie arutelupunktid ja otsused.

- Millise eesmärgiga loome veebisaidi?
  - Müüa värskelt röstitud erikohvi ja/või käivitada korduvtellimus lihtsalt ja usaldusväärselt. Koond-eesmärk: kiire ostutee mobiilis.

- Kes on tüüpiline veebisaidi kasutaja?
  - Noored linnas elavad kohvisõbrad (25–40), kes tellivad mugavalt e-poest. Esmane persoon: Anna (29), UX disainer, Tallinn.
  - Persona pilt: assets/images/persona-anna.svg

- Millega on ta harjunud?
  - Selge hinnastamine, tasuta saatmise piir, kiire filter (maitseprofiil), mobiilisõbralik ostutee, nähtavad tarneinfo ja tagastusreeglid.

- Mis võiks talle meeldida?
  - Lühike 3-sammuline teekond, maitseprofiilide lihtne võrdlus, läbipaistev päritolu, paindlik pausimine/kohandamine.

- Mis kindlasti ei meeldi?
  - Peidetud kulud, sund-registreerimine enne ostu, liiga pikk vorm, liiga palju valikuid ilma selge juhiseta.

- Milline võiks olla maandumisleht?
  - Suur hero pealkirjaga „Värske röst. Parem hommik.”, nähtav tasuta saatmise info, CTA „Vali kohvisegu”, 3-sammuline „Kuidas see toimib” ja sotsiaalne tõestus. Ideede Crazy 8's pilt: assets/images/crazy8-landing-ideas.svg

- Mida erilist tahame kasutajale pakkuda?
  - Värske röst (24–48h), läbipaistev päritolu, maitsegarantii ja päriselt toimiv pausimine. Soovitus „Maitsevalik 3×100g” kiireks stardiks.

- Kuidas kasutaja saab tellida/osta/valida X asja?
  1) Avaleht → CTA „Vali kohvisegu”
  2) Valikuleht → „Lisa korvi”
  3) Kassa → kontakt + tarneviis → „Kinnita tellimus”
  - Visuaalne teekond: assets/images/user-journey-order.svg

## Kuidas prototüüpi vaadata
- Avage prototype/index.html otse brauseris (topeltklõps failil) või paremklõps → Open in Browser.
- Navigeerige ülanavist: Avaleht → Kohvisegud → Telli.
- Testimiseks vajutage toodete lehel „Lisa korvi” ning liikuge kassasse. Kassa vormi kinnitamisel kuvatakse eduka tellimuse sõnum.
- Vajadusel tühjendage valik lisades aadressiribale hash `#clear` kassas (nt checkout.html#clear), mis puhastab localStorage'i ja viib valikulehele.

## Tiimiliikmed
 - Marcus-Imre Tikerpe
 - Jesper Korsen
 - Jelena Fokina

## Märkused
- Pildid/taust: Unsplash (ainult prototüübi eesmärgil).
- Kujundus on madala/keskmise detailsusega klikatav prototüüp, mitte tootmiskood.
