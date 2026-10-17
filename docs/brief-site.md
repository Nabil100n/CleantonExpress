# Brief du site C for Cleaning

Un site d'une page, bilingue anglais / français, pour un service de ménage de condos et d'appartements à Toronto.
Les prix sont affichés d'entrée, comme sur hellamaid.ca, mais le rendu doit évoquer un hôtel boutique, jamais un gabarit de ménage générique.

Ce brief mélange deux sources :
- **La version Lovable** : la direction luxe à empattements, la structure de la page et les textes.
- **Les décisions d'offre du 13 octobre 2026** :
  - remises récurrentes de 15 % par semaine, 10 % aux deux semaines et 5 % par mois ;
  - forfaits uniquement, sans tarif horaire ;
  - un volet pros sur devis ;
  - une réservation en plusieurs étapes.

---

## 1. Direction artistique

**Ambiance**
- Hôtel boutique, carte de grand restaurant, linge blanc.
- Calme et aéré, avec des mises en page éditoriales asymétriques.
- Interdit : dégradés, effet verre, emojis, illustrations, ombres lourdes, cartes arrondies façon « SaaS », icônes dans des ronds.

**Typographie**
- **Cormorant Garamond** pour les titres et les prix.
  - Titres en minuscules de phrase.
  - Hero de 76 à 96 px sur ordinateur, de 44 à 52 px sur mobile, interligne de 1,0 à 1,05.
  - La 2e ligne du titre principal est en italique.
- **Jost** pour le texte.
  - Corps en 17 px, interligne 1,65.
  - Navigation, onglets, boutons et petites étiquettes : 12 px, Jost 500, en majuscules, espacement de lettres de 0,16 em.
  - Utiliser ces petites étiquettes avec parcimonie, pas au-dessus de chaque section.

**Couleurs** (à déclarer en variables CSS)
| Rôle | Valeur |
|---|---|
| Fond lin | `#F7F5F0` |
| Surfaces | `#FFFFFF` |
| Marine (texte, sections sombres, boutons principaux) | `#0B1628` |
| Marine 2 | `#13233D` |
| Orange signature | `#F15A29` |
| Texte secondaire | `#5B6474` |
| Filets | `rgba(11,22,40,0.12)` |

- L'orange s'utilise comme une touche, façon Hermès : soulignement de l'onglet de prix actif, filets fins, chiffres des étapes, bouton principal dans les sections marine, bouton « Réserver » sur mobile. Jamais de grands aplats orange.
- Le bleu `#29ABE2` est réservé au logo et n'apparaît nulle part ailleurs.

**Formes**
- Coins carrés (rayon de 0 à 2 px), bordures d'1 px.
- Boutons rectangulaires de 50 px de haut, en Jost 500, majuscules, 13 px, espacement de lettres de 0,14 em.
  - Bouton principal sur fond clair : fond marine, texte lin.
  - Bouton principal sur fond marine : fond orange, texte marine.
  - Bouton secondaire : contour marine d'1 px.

**Animations**
- Un léger fondu avec montée sur le hero au premier chargement, et c'est tout.
- Survols en 150 ms, soulignement qui se dessine sur les liens, fondu doux au changement d'onglet de prix.
- Respecter `prefers-reduced-motion`.

**Logo**
- Par défaut, un mot-symbole : « C for Cleaning » en Cormorant Garamond 600.
- Un emplacement est prévu pour `images/logo.png` à côté du nom ; tant que le fichier n'existe pas, le mot-symbole s'affiche seul (voir `docs/images.md`).

---

## 2. Structure de la page, dans cet ordre

Chaque emplacement d'image porte un commentaire HTML du type `<!-- IMAGE : images/hero.jpg (voir docs/images.md) -->`.

1. **Bandeau d'annonce** : fond marine, texte lin, 13 px.
2. **En-tête collant** (fond lin, filet en bas). Sur une seule ligne sur ordinateur : mot-symbole, liens (Tarifs, Services, Checklist, FAQ), bascule EN | FR, téléphone « (437) 717-8009 », bouton « Réserver un ménage ».
   - Sur mobile : mot-symbole, EN | FR et icône de menu.
   - Le menu ouvre un tiroir pleine largeur avec les liens, le lien « Gestionnaires et agents immobiliers », le téléphone et le bouton de réservation.
3. **Hero** (tient dans un écran d'ordinateur).
   - Colonne gauche : petite étiquette, titre sur exactement 2 lignes (la 2e en italique), sous-titre, boutons « Réserver un ménage » (principal) et « WhatsApp » (contour, avec icône).
   - Colonne droite : **[IMAGE 1 : hero]** en hauteur, avec la **carte des prix** qui chevauche le coin bas gauche de la photo.
   - La carte réserve sa place : elle ne doit jamais recouvrir la section suivante, quelle que soit la largeur (1024, 1280, 1440 et 1920 px).
   - La carte des prix est blanche, avec un filet, 32 px de marge intérieure, et contient :
     - le titre « Nos prix » en Cormorant, et la note « En $ CA, avant taxes » ;
     - des onglets en petites capitales (Régulier, En profondeur, Déménagement, Récurrent), l'onglet actif souligné de 2 px en orange ;
     - des lignes façon menu de restaurant : taille du logement à gauche, pointillés, prix à droite en Cormorant 30 px. Toutes les lignes ont la même hauteur ; la dernière affiche « Sur devis » en petites capitales ;
     - une phrase décrivant le service sélectionné, puis « Produits écologiques et matériel inclus » avec le lien « Voir ce qui est inclus ».
   - Sur mobile, la photo devient un bandeau 4:3 au-dessus de la carte, et la carte arrive pleine largeur juste après le sous-titre.
4. **Bande d'engagements** : 4 éléments séparés par des filets verticaux, avec des icônes au trait (épaisseur 1,25). Sur une ligne sur ordinateur, en 2 × 2 sur tablette, empilés sur mobile.
5. **Services** : une liste éditoriale de 3 lignes séparées par des filets.
   - Chaque ligne : nom du service en Cormorant 36 px, description, prix « dès » en Cormorant, et un lien « Réserver un ménage ».
   - Le lien descend au formulaire et présélectionne le service.
   - Dessous, la mention « Bureaux, studios et commerces : sur devis ».
6. **Comment ça marche** : **[IMAGE 2 : how]** d'un côté, 3 étapes de l'autre, avec de grands chiffres en Cormorant italique orange.
7. **Ce qui est inclus**
   - Trois colonnes séparées par des filets (Régulier, En profondeur, Déménagement). Les deux dernières commencent par « Tout le régulier, plus : » et « Tout le ménage en profondeur, plus : ».
   - Ensuite, une carte « Options à la carte » avec des pointillés, **[IMAGE 3 : included]** à côté, et la ligne « Non inclus ».
   - Enfin, un bloc repliable « Voir la checklist complète, pièce par pièce » qui contient le tableau, avec des icônes coche, plus et moins et une légende.
8. **Pros** : section marine pleine largeur, avec **[IMAGE 4 : pros]** d'un côté.
   - Texte, 3 points, et un bouton orange « Demander les tarifs volume ».
   - Le bouton descend au formulaire et présélectionne le parcours pro.
9. **Où on intervient** (quartiers en petites étiquettes à contour) à côté de la **FAQ** en accordéon.
10. **Réservation** : titre, texte, liens téléphone et WhatsApp à gauche ; formulaire en plusieurs étapes dans une carte blanche à droite (voir section 4).
11. **Pied de page marine** : mot-symbole, téléphone, WhatsApp, « Haut de page », mention légale.
12. **Mobile uniquement** : une barre fixe en bas, avec « WhatsApp » (contour) et « Réserver un ménage » (orange, texte marine).

---

## 3. Comportements

**Langue**
- Tout texte visible vient du dictionnaire `js/i18n.js`.
- La bascule est présente dans l'en-tête et dans le tiroir.
- Priorité : le paramètre `?lang=fr` ou `?lang=en`, puis le choix enregistré (localStorage, entouré d'un try/catch), puis la langue du navigateur (fr* donne le français). Par défaut, l'anglais.
- Mettre à jour `<html lang>`, le titre et la meta description à chaque changement de langue.

**Onglets de prix**
- Onglets accessibles au clavier (flèches, Début, Fin), avec un fondu doux au changement.

**Liens de pub**
- `?service=regular|deep|move|recurring|pro` ouvre l'onglet de prix correspondant et présélectionne le service dans le formulaire.
  - `recurring` = ménage régulier aux deux semaines.
  - `pro` = parcours pro.
- Les liens « Réserver » des services et le bouton de la section pros font la même chose.

**WhatsApp**
- Lien `https://wa.me/14377178009?text=` suivi du message encodé dans la langue en cours (voir les textes).
- Lien téléphone : `tel:+14377178009`.

**Accessibilité**
- Contraste WCAG AA partout et contour de focus visible.
- Titres dans l'ordre.
- `alt=""` sur les photos d'ambiance.
- Libellés au-dessus des champs, jamais un texte d'exemple qui sert de libellé.

**Pas de backend**
- Ni compte, ni base de données, ni cookie de suivi.

---

## 4. Réservation en 4 étapes

Inspirée des sites de réservation du marché, sans calculateur. Le client voit le prix de la grille pour sa taille de logement, et le prix final lui est confirmé par message.

**Navigation**
- Une barre de progression : « Étape 2 sur 4 » et le nom de l'étape. Le parcours pro saute l'étape 2 et compte donc 3 étapes.
- Les boutons « Retour » et « Continuer » ; à la dernière étape, « Envoyer ma demande ».
- On ne passe à l'étape suivante que si l'étape en cours est valide. Les erreurs s'affichent sous le champ concerné.

**Étape 1 : Votre ménage**
- `service` (obligatoire), sous forme de 4 cartes radio :
  - `Regular`, `Deep` et `Move-in/out` affichent leur prix « dès », lu dans `config.js` ;
  - `Property manager / realtor / office` affiche « Sur devis ».
- Si le service est résidentiel :
  - `home_size` (obligatoire) : les 5 tailles de la grille ;
  - `property_type` : Condo / appartement, townhouse ou maison.
- Si le service est `Regular`, choix de `frequency` sous forme de pastilles :
  - `One time` (par défaut), `Weekly (-15%)`, `Bi-weekly (-10%)`, `Monthly (-5%)` ;
  - avec la note : « Le rabais s'applique dès votre 2e visite. »
- Si le service est pro :
  - `pro_type` : gestionnaire, agent, bureau ou commerce, autre ;
  - `units_or_size` (facultatif).

**Étape 2 : Options** (sautée pour les pros)
- `addons` (cases à cocher), dont les prix viennent de `config.js` :
  - four +30 $, frigo +30 $, armoires +40 $, vitres intérieures et rails dès +40 $, poils d'animaux +25 $ ;
  - pour un déménagement, four, frigo et armoires s'affichent « Inclus », cochés et désactivés.
- `fragrance_free` : produits sans parfum, sans supplément.

**Étape 3 : Où, quand et accès**
- Adresse :
  - `address` (obligatoire en résidentiel) et `unit` (facultatif) ;
  - `postal_code` (obligatoire, au format canadien A1A 1A1) ;
  - `city` (obligatoire, « Toronto » par défaut).
- Date et heure :
  - `date` (obligatoire en résidentiel, sans date passée) ;
  - `arrival_window` (obligatoire en résidentiel) : matin de 8 h à 10 h, midi de 11 h à 13 h, après-midi de 14 h à 16 h ;
  - avec la note : « C'est l'heure d'arrivée, pas la durée. »
- `flexibility` en pastilles : seulement cette date, la veille ou le lendemain, n'importe quel jour de la semaine (par défaut).
- Accès :
  - `access` : je serai là, concierge, boîte à clé, code d'interphone, autre ;
  - `elevator_booking`, uniquement pour un déménagement ;
  - `message` : détails (facultatif).

**Étape 4 : Coordonnées et récapitulatif**
- `name` (obligatoire) et `phone` (obligatoire, au moins 10 chiffres).
- `email` : facultatif, sauf si le client choisit d'être confirmé par courriel.
- `preferred_contact` en pastilles : WhatsApp (par défaut), texto, appel, courriel.
- `heard_about_us` (facultatif).
- Un **récapitulatif** reprend le service, le logement, la fréquence, les options, la date, l'adresse et l'accès.
  - Il affiche « Prix de notre grille, avant taxes » avec le montant. Pour une taille « 4 chambres ou plus » ou une demande pro, il affiche « Sur devis ».
  - En dessous, si besoin : « Puis −10 % dès votre 2e visite » et « Plus les options choisies ».
  - Puis la phrase : « On vous confirme le prix final par message avant de commencer. Rien à payer maintenant : vous payez après le ménage. »

**Envoi à Formspree**
- Les noms de champs sont ceux ci-dessus. Les valeurs restent en anglais, seuls les libellés visibles sont traduits.
- Champs cachés :
  - `_subject` = « New booking request: {service}, {taille ou type pro} ({nom}) » ;
  - `lang` ;
  - `summary` : le récapitulatif en texte brut ;
  - `grid_price` ;
  - `_gotcha` : un piège à robots.
- Les champs des blocs masqués sont désactivés, pour ne pas partir dans l'envoi.
- Pendant l'envoi, le bouton affiche « Envoi en cours… » et il est désactivé.
- En cas de succès : une fenêtre « Demande envoyée », puis le formulaire revient à l'étape 1, vide.
- En cas d'erreur : un message sous le bouton.

---

## 5. `js/config.js` (valeurs de départ)

```js
const CONFIG = {
  phone: "+14377178009",
  formspree: "https://formspree.io/f/mjgeappr",
  // Prix avant taxes, dans l'ordre : studio ou 1 ch. ; 2 ch. 1 sdb ; 2 ch. 2 sdb ; 3 ch. 2 sdb. Au-delà : sur devis.
  prices: {
    regular: [165, 195, 225, 265],
    deep:    [255, 285, 315, 355],
    move:    [315, 345, 375, 415]
  },
  // Remises récurrentes, appliquées dès la 2e visite (ménage régulier uniquement)
  recurring: { weekly: 0.15, biweekly: 0.10, monthly: 0.05 },
  // L'onglet « Récurrent » affiche le prix aux deux semaines, arrondi au dollar : 149, 176, 203, 239
  addons: { oven: 30, fridge: 30, cabinets: 40, windows: 40, pets: 25 }, // windows = « dès »
  includedInMove: ["oven", "fridge", "cabinets"]
};
```

À trancher par Nabil : cette grille (165 / 255 / 315 $) est celle de l'étude de marché. Une autre grille (150 / 260 / 320 $) a été évoquée sans être validée.

---

## 6. Textes (EN / FR), à mettre dans `js/i18n.js`

Règles : pas de tiret cadratin ; prix au format « $165 » / « 165 $ ».

### SEO
- Titre EN : « C for Cleaning | Condo & apartment cleaning in Toronto, prices upfront »
- Description EN : « Move-in/move-out, regular and deep cleaning for Toronto condos and apartments. Prices upfront from $165, eco-friendly products included, service in English and French. »
- Titre FR : « C for Cleaning | Ménage de condos et d'appartements à Toronto, prix affichés »
- Description FR : « Déménagement, ménage régulier ou en profondeur pour condos et appartements à Toronto. Prix affichés dès 165 $, produits écologiques inclus, service en français et en anglais. »

### Bandeau d'annonce
- EN : « Launch offer: 15% off your first clean, for our first 20 clients. »
- FR : « Offre de lancement : 15 % de rabais sur votre premier ménage, pour nos 20 premiers clients. »

### En-tête
- Liens EN : Prices, Services, Checklist, FAQ. Liens FR : Tarifs, Services, Checklist, FAQ.
- Lien du tiroir : EN « Property managers and realtors », FR « Gestionnaires et agents immobiliers ».
- Bouton de réservation : EN « Book a cleaning », FR « Réserver un ménage ». Le bouton WhatsApp s'appelle « WhatsApp » dans les deux langues.

### Hero
- Étiquette : EN « Condo and apartment cleaning, Toronto », FR « Ménage de condos et d'appartements, Toronto ».
- Titre EN : « Impeccable homes. » puis, en italique, « Prices upfront. »
- Titre FR : « Un intérieur impeccable. » puis, en italique, « Des prix affichés. »
- Sous-titre EN : « Move-in and move-out, regular and deep cleaning. Eco-friendly products included, service in English and French. »
- Sous-titre FR : « Déménagement, ménage régulier ou en profondeur. Produits écologiques inclus, service en français et en anglais. »

### Carte des prix
- Titre : EN « Our prices », FR « Nos prix ». Note : EN « CAD, before tax », FR « En $ CA, avant taxes ».
- Onglets EN : Regular, Deep, Move-in/out, Recurring. Onglets FR : Régulier, En profondeur, Déménagement, Récurrent.
- Lignes (EN / FR) :
  1. « Studio or 1 bed, 1 bath » / « Studio ou 1 chambre, 1 salle de bain »
  2. « 2 bed, 1 bath » / « 2 chambres, 1 salle de bain »
  3. « 2 bed, 2 bath » / « 2 chambres, 2 salles de bain »
  4. « 3 bed, 2 bath » / « 3 chambres, 2 salles de bain »
  5. « 4 bed or more » / « 4 chambres ou plus » : « On quote » / « Sur devis »
- Prix : lus dans `config.js`. L'onglet Récurrent affiche le prix aux deux semaines (149, 176, 203, 239).
- Phrase sous les lignes, selon l'onglet :
  - Régulier : EN « Kitchen, bathrooms, dusting and floors, done properly. » FR « Cuisine, salles de bain, poussière et sols, faits dans les règles. »
  - En profondeur : EN « Everything in Regular, plus baseboards, doors, switches and built-up grime. » FR « Tout le ménage régulier, plus plinthes, portes, interrupteurs et saleté incrustée. »
  - Déménagement : EN « Empty home, inside the oven, fridge and cabinets. Dated photo report included. » FR « Logement vide, intérieur du four, du frigo et des armoires. Rapport photo daté inclus. »
  - Récurrent : EN « Bi-weekly price (−10%), from your 2nd visit. Weekly saves 15%, monthly 5%. » FR « Prix aux deux semaines (−10 %), dès la 2e visite. Hebdomadaire : −15 %, mensuel : −5 %. »
- Pied de la carte : EN « Eco-friendly products and supplies included. » avec le lien « See what's included » ; FR « Produits écologiques et matériel inclus. » avec le lien « Voir ce qui est inclus ».

### Engagements
1. EN « Eco products included » / « No extra charge. » ; FR « Produits écologiques inclus » / « Sans supplément. »
2. EN « Price agreed before we start » / « Flat rates, no surprise on the bill. » ; FR « Prix fixé avant de commencer » / « Des forfaits, pas de surprise sur la facture. »
3. EN « Photo report on move-outs » / « Dated photos for you and your landlord. » ; FR « Rapport photo au déménagement » / « Des photos datées pour vous et votre propriétaire. »
4. EN « English or French » / « By phone or WhatsApp. » ; FR « Français ou anglais » / « Par téléphone ou WhatsApp. »

### Services
- Titre : EN « What we clean », FR « Ce qu'on nettoie ».
- Intro EN : « Flat prices for homes in normal condition. If yours needs more work, you get the new price before we start, never after. »
- Intro FR : « Des forfaits pour un logement en état normal. S'il demande plus de travail, vous avez le nouveau prix avant qu'on commence, jamais après. »
- **Déménagement** (EN « Move-in / move-out »), présélectionne `Move-in/out`, prix EN « from $315 », FR « dès 315 $ ».
  - EN : « Moving in or out? We clean the empty unit top to bottom, inside the oven, fridge and cabinets included, and send you dated photos for a smooth key handover. »
  - FR : « Vous arrivez ou vous partez ? On nettoie le logement vide de fond en comble, intérieur du four, du frigo et des armoires compris, et on vous envoie des photos datées pour une remise des clés sans accroc. »
- **Ménage régulier** (EN « Regular cleaning »), présélectionne `Regular`. Prix EN « from $165 » avec en petit « or $149 bi-weekly » ; FR « dès 165 $ » avec en petit « ou 149 $ aux deux semaines ».
  - EN : « One-time or recurring: weekly, bi-weekly or monthly, with the same cleaner whenever possible and up to 15% off. »
  - FR : « Ponctuel ou récurrent : chaque semaine, aux deux semaines ou chaque mois, avec la même personne autant que possible et jusqu'à 15 % de rabais. »
- **Ménage en profondeur** (EN « Deep cleaning »), présélectionne `Deep`, prix EN « from $255 », FR « dès 255 $ ».
  - EN : « For a first visit, after a busy season or before guests arrive. Everything in Regular, plus baseboards, doors, switches and built-up grime. »
  - FR : « Pour une première visite, après une période chargée ou avant de recevoir. Tout le ménage régulier, plus plinthes, portes, interrupteurs et saleté incrustée. »
- Mention sous la liste : EN « Offices, studios and shops: on quote. » FR « Bureaux, studios et commerces : sur devis. »

### Comment ça marche
- Titre : EN « How it works », FR « Comment ça marche ».
1. EN « Find your price » / « Pick your home size in the price list. That's your price for a home in normal condition. » ; FR « Trouvez votre prix » / « Choisissez la taille de votre logement dans la grille. C'est votre prix pour un logement en état normal. »
2. EN « Send your request » / « Use the form or WhatsApp. We confirm the date, access and price within 2 hours (8 am to 8 pm). » ; FR « Envoyez votre demande » / « Par le formulaire ou WhatsApp. On confirme la date, l'accès et le prix en moins de 2 h (de 8 h à 20 h). »
3. EN « We clean, you pay after » / « You pay once the job is done. Move-outs come with a dated photo report. » ; FR « On nettoie, vous payez après » / « Vous payez une fois le travail fait. Les déménagements incluent un rapport photo daté. »

À confirmer par Nabil : le délai de réponse de 2 h (de 8 h à 20 h).

### Ce qui est inclus
- Titre : EN « What's included », FR « Ce qui est inclus ».
- Intro EN : « Each clean builds on the one before. Same checklist every time, so you know what you're paying for. »
- Intro FR : « Chaque formule reprend la précédente. La même checklist à chaque fois, pour savoir ce que vous payez. »
- **Régulier** (EN / FR) :
  - Counters, sink and backsplash / Comptoirs, évier et dosseret
  - Stovetop and appliance fronts / Plaque de cuisson et façades d'électroménagers
  - Cabinet fronts / Façades d'armoires
  - Inside the microwave / Intérieur du micro-ondes
  - Toilet, sink, tub and shower / Toilette, lavabo, baignoire et douche
  - Mirrors and fixtures / Miroirs et robinetterie
  - Dusting / Poussière
  - Vacuum and mop / Aspirateur et lavage des sols
  - Garbage and recycling / Poubelles et recyclage
- **En profondeur** (« Everything in Regular, plus: » / « Tout le régulier, plus : ») :
  - Baseboards, doors and frames / Plinthes, portes et cadres
  - Switches and door handles / Interrupteurs et poignées
  - Windowsills / Rebords de fenêtres
  - Limescale and soap scum / Calcaire et traces de savon
- **Déménagement** (« Everything in Deep, plus: » / « Tout le ménage en profondeur, plus : ») :
  - Inside the oven / Intérieur du four
  - Inside the fridge / Intérieur du frigo
  - Inside cabinets and drawers / Intérieur des armoires et tiroirs
  - Inside closets / Intérieur des placards
  - Window tracks / Rails de fenêtres
  - Dated photo report / Rapport photo daté
- **Options**, titre EN « Add-ons, à la carte », FR « Options à la carte » :
  - Inside the oven / Intérieur du four : +$30 / +30 $
  - Inside the fridge / Intérieur du frigo : +$30 / +30 $
  - Inside cabinets / Intérieur des armoires : +$40 / +40 $
  - Interior windows and tracks, from / Vitres intérieures et rails, dès : +$40 / +40 $
  - Pet hair / Poils d'animaux : +$25 / +25 $
- Note EN : « Oven, fridge and cabinets are already included in move-in/out cleaning. »
- Note FR : « Four, frigo et armoires sont déjà inclus dans le ménage de déménagement. »
- EN : « Not included: exterior windows, moving heavy furniture, mould, biohazards. »
- FR : « Non inclus : vitres extérieures, déplacement de meubles lourds, moisissure, risques biologiques. »

**Bloc repliable**
- Titre : EN « See the full checklist, room by room », FR « Voir la checklist complète, pièce par pièce ».
- Colonnes : Task / Tâche, Regular / Régulier, Deep / En profondeur, Move-in/out / Déménagement.
- Légende : Y = Included / Inclus (coche), O = Add-on / En option (plus), N = Not included / Non inclus (moins).
- Kitchen / Cuisine :
  - Counters, sink and backsplash / Comptoirs, évier et dosseret : Y Y Y
  - Stovetop and outside of appliances / Plaque de cuisson et extérieur des électroménagers : Y Y Y
  - Cabinet fronts and handles / Façades et poignées d'armoires : Y Y Y
  - Inside the microwave / Intérieur du micro-ondes : Y Y Y
  - Inside the oven / Intérieur du four : O O Y
  - Inside the fridge / Intérieur du frigo : O O Y
  - Inside cabinets and drawers / Intérieur des armoires et tiroirs : O O Y
- Bathrooms / Salles de bain :
  - Toilet, sink, tub and shower / Toilette, lavabo, baignoire et douche : Y Y Y
  - Mirrors and fixtures shined / Miroirs et robinetterie lustrés : Y Y Y
  - Limescale and soap scum on tiles and grout / Calcaire et traces de savon sur carreaux et joints : N Y Y
- Whole home / Tout le logement :
  - Dust all reachable surfaces / Poussière sur toutes les surfaces accessibles : Y Y Y
  - Vacuum and mop floors / Aspirateur et lavage des sols : Y Y Y
  - Empty garbage and recycling / Poubelles et recyclage vidés : Y Y Y
  - Baseboards, doors and frames / Plinthes, portes et cadres : N Y Y
  - Light switches and door handles / Interrupteurs et poignées de porte : N Y Y
  - Windowsills / Rebords de fenêtres : N Y Y
  - Window tracks / Rails de fenêtres : O O Y
  - Inside closets / Intérieur des placards : N N Y
  - Dated photo report / Rapport photo daté : N N Y

### Pros
- Titre : EN « Property managers and realtors », FR « Gestionnaires et agents immobiliers ».
- EN : « Units turned over between tenants, homes ready for listing photos. One contact, and a photo report and invoice for every job. »
- FR : « Logements remis en état entre deux locataires, prêts pour les photos de mise en vente. Un seul interlocuteur, avec un rapport photo et une facture à chaque mission. »
- Points :
  - Turnover and pre-listing cleans / Remise en état et préparation à la vente
  - Photo report and invoice per unit / Rapport photo et facture par logement
  - Volume pricing for regular work / Tarifs volume pour un travail régulier
- Bouton : EN « Ask for volume pricing », FR « Demander les tarifs volume ».

### Où on intervient
- Titre : EN « Where we clean », FR « Où on intervient ».
- EN : « Downtown Toronto and nearby neighbourhoods, with no travel fee: »
- FR : « Centre-ville de Toronto et quartiers voisins, sans frais de déplacement : »
- Étiquettes : King West, Liberty Village, CityPlace, Fort York, Entertainment District, Financial District, St. Lawrence, Kensington Market, Chinatown, The Annex, Yorkville, Little Italy, Trinity Bellwoods, Parkdale, Leslieville, Midtown.
- Après les étiquettes : EN « Somewhere else in Toronto? Ask us and we'll tell you right away. » FR « Ailleurs à Toronto ? Demandez-nous, on vous répond tout de suite. »

### FAQ (titre « Questions » dans les deux langues)
1. EN « Do you bring the products and equipment? » / « Yes. We bring eco-friendly products and all the supplies. If you'd rather we use your vacuum or your own products, just tell us. »
   FR « Apportez-vous les produits et le matériel ? » / « Oui. On apporte des produits écologiques et tout le matériel. Vous préférez qu'on utilise votre aspirateur ou vos produits ? Dites-le-nous. »
2. EN « Do I need to be home? » / « No. Many clients leave a key with the concierge or in a lockbox. We agree on access when we confirm your booking. »
   FR « Dois-je être présent ? » / « Non. Beaucoup de clients laissent une clé au concierge ou dans une boîte à clé. On fixe l'accès au moment de confirmer. »
3. EN « Are the prices final? » / « Yes, for a home in normal condition. If the home is very dirty or you add tasks, you get the new price before we start, never after. »
   FR « Les prix sont-ils définitifs ? » / « Oui, pour un logement en état normal. S'il est très sale ou si vous ajoutez des tâches, vous avez le nouveau prix avant qu'on commence, jamais après. »
4. EN « When and how do I pay? » / « After the clean, by Interac e-Transfer. Prices are in Canadian dollars, before tax. »
   FR « Quand et comment je paie ? » / « Après le ménage, par virement Interac. Les prix sont en dollars canadiens, avant taxes. »
5. EN « What if something was missed? » / « Tell us within 24 hours and we come back to fix it, free of charge. »
   FR « Et si quelque chose a été oublié ? » / « Prévenez-nous dans les 24 h : on revient le faire, sans frais. »
6. EN « Can I cancel or reschedule? » / « Yes, free of charge up to 24 hours before your clean. »
   FR « Puis-je annuler ou déplacer le ménage ? » / « Oui, sans frais jusqu'à 24 h avant le ménage. »

À confirmer par Nabil : le moyen de paiement (question 4), la garantie de retour sous 24 h (question 5) et la politique d'annulation (question 6).

### Réservation : textes autour du formulaire
- Titre : EN « Book your cleaning », FR « Réservez votre ménage ».
- EN : « Tell us about your home in about 2 minutes. We confirm your date and final price within 2 hours, from 8 am to 8 pm. Nothing to pay now: you pay after the clean. »
- FR : « Décrivez votre logement en 2 minutes environ. On confirme la date et le prix final en moins de 2 h, de 8 h à 20 h. Rien à payer maintenant : vous payez après le ménage. »
- Progression : EN « Step {i} of {n} », FR « Étape {i} sur {n} ».
- Boutons : Back / Retour, Continue / Continuer, Send my request / Envoyer ma demande, Sending… / Envoi en cours….

### Réservation : étape 1
- Titre : EN « Your cleaning », FR « Votre ménage ». Note : EN « Prices for a home in normal condition, before tax. » FR « Prix pour un logement en état normal, avant taxes. »
- Question : EN « Which service? », FR « Quel service ? »
- Cartes de service :
  - Regular : EN « Regular cleaning » / « One-time or recurring. » ; FR « Ménage régulier » / « Ponctuel ou récurrent. »
  - Deep : EN « Deep cleaning » / « Best for a first visit. » ; FR « Ménage en profondeur » / « Idéal pour une première visite. »
  - Move-in/out : EN « Move-in / move-out » / « Empty home, oven, fridge and cabinets included. » ; FR « Déménagement » / « Logement vide, four, frigo et armoires inclus. »
  - Pro : EN « Property manager, realtor or office » / « Turnovers, listings, offices. » / « On quote » ; FR « Gestionnaire, agent ou bureau » / « Remises en état, mises en vente, bureaux. » / « Sur devis »
- Taille du logement : EN « Home size », FR « Taille du logement ». Choix vide : EN « Choose a size », FR « Choisissez une taille ». Les options reprennent les 5 lignes de la grille.
- Type de logement : EN « Type of home » (Condo or apartment, Townhouse, House) ; FR « Type de logement » (Condo ou appartement, Maison en rangée, Maison).
- Fréquence : EN « How often? » (One time, Weekly −15%, Every 2 weeks −10%, Monthly −5%) ; FR « À quelle fréquence ? » (Une fois, Chaque semaine −15 %, Aux deux semaines −10 %, Chaque mois −5 %).
  - Note : EN « The discount starts with your 2nd visit. » FR « Le rabais s'applique dès votre 2e visite. »
- Parcours pro :
  - EN « You are » (A property manager, A realtor, An office or shop, Other) ; FR « Vous êtes » (Gestionnaire immobilier, Agent immobilier, Bureau ou commerce, Autre).
  - EN « Units or size (optional) », exemple « e.g. 3 units, or 1,200 sq ft » ; FR « Logements ou superficie (facultatif) », exemple « ex. 3 logements, ou 1 200 pi² ».

### Réservation : étape 2
- Titre : EN « Add-ons », FR « Options ». Note : EN « Everything here is optional. » FR « Tout est facultatif. »
- Mot pour une option incluse : EN « Included », FR « Inclus ».
- Case : EN « Fragrance-free products, at no extra cost (allergies, baby at home) » ; FR « Produits sans parfum, sans supplément (allergies, bébé à la maison) ».

### Réservation : étape 3
- Titre : EN « Where and when? », FR « Où et quand ? »
- Libellés : Street address / Adresse ; Unit (optional) / Appartement (facultatif) ; Postal code / Code postal ; City / Ville ; Preferred date / Date souhaitée ; Arrival time / Heure d'arrivée.
- Heures : EN « Morning, 8 to 10 am », « Midday, 11 am to 1 pm », « Afternoon, 2 to 4 pm » ; FR « Matin, de 8 h à 10 h », « Midi, de 11 h à 13 h », « Après-midi, de 14 h à 16 h ».
- Note EN : « This is when we arrive, not how long it takes. A clean lasts 2 to 6 hours depending on the home and the service. »
- Note FR : « C'est l'heure à laquelle on arrive, pas la durée. Un ménage dure de 2 à 6 h selon le logement et le service. »
- Flexibilité : EN « If that date is taken? » (Only this date, Day before or after, Any day that week) ; FR « Si cette date est prise ? » (Seulement cette date, La veille ou le lendemain, N'importe quel jour de la semaine).
- Accès : EN « How do we get in? » (I'll be home, Concierge or front desk, Key in a lockbox, Buzzer code, Other) ; FR « Comment on entre ? » (Je serai là, Concierge ou réception, Clé dans une boîte à clé, Code d'interphone, Autre).
- Ascenseur : EN « Elevator booking needed? » (Not sure, Yes, I'll book it, No) ; FR « Réservation d'ascenseur ? » (Je ne sais pas, Oui, je la réserve, Non).
- Détails : EN « Details (optional) », exemple « Buzzer code, pets, priorities » ; FR « Détails (facultatif) », exemple « Code d'interphone, animaux, priorités ».

### Réservation : étape 4
- Titre : EN « Your details », FR « Vos coordonnées ».
- Libellés : Name / Nom ; Phone / Téléphone ; Email (optional) / Courriel (facultatif).
- Confirmation : EN « How should we confirm? » (WhatsApp, Text message, Phone call, Email) ; FR « Comment préférez-vous qu'on vous confirme ? » (WhatsApp, Texto, Appel, Courriel).
- Source : EN « How did you hear about us? (optional) » (Google, Instagram, Facebook, Poster in my building, A friend or a referral, Other) ; FR « Comment nous avez-vous connus ? (facultatif) » (Google, Instagram, Facebook, Affiche dans mon immeuble, Un ami, une recommandation, Autre).
- Récapitulatif : EN « Your request », FR « Votre demande ».
  - Lignes : Service ; Home / Logement ; Frequency / Fréquence ; Add-ons / Options ; When / Quand ; Address / Adresse ; Access / Accès.
  - Prix : EN « Price from our grid, before tax », FR « Prix de notre grille, avant taxes ». Sinon : On quote / Sur devis.
  - Lignes en plus : EN « Then {d} from your 2nd visit. » / « Plus the add-ons you picked. » ; FR « Puis {d} dès votre 2e visite. » / « Plus les options choisies. »
  - Phrase finale EN : « We confirm your final price by message before we start. Nothing to pay now: you pay after the clean. »
  - Phrase finale FR : « On vous confirme le prix final par message avant de commencer. Rien à payer maintenant : vous payez après le ménage. »
- Sous le formulaire : EN « We only use your details to answer your request. » FR « Vos coordonnées servent uniquement à répondre à votre demande. »
- Messages d'erreur :
  - EN : « Choose a service. », « This field is required. », « Enter a valid postal code, like M5V 2T6. », « Enter a 10-digit phone number. », « Check your email address. »
  - FR : « Choisissez un service. », « Ce champ est obligatoire. », « Entrez un code postal valide, comme M5V 2T6. », « Entrez un numéro à 10 chiffres. », « Vérifiez votre courriel. »
- Échec d'envoi EN : « Your request didn't go through. Check your connection and try again, or message us on WhatsApp. »
- Échec d'envoi FR : « Votre demande n'est pas partie. Vérifiez votre connexion et réessayez, ou écrivez-nous sur WhatsApp. »
- Fenêtre de succès :
  - Titre : EN « Request sent », FR « Demande envoyée ».
  - EN : « Thank you! We'll confirm your date and price within 2 hours, from 8 am to 8 pm. »
  - FR : « Merci ! On vous confirme la date et le prix en moins de 2 h, de 8 h à 20 h. »
  - Bouton : Close / Fermer.

### Messages WhatsApp pré-remplis
- EN : « Hi C for Cleaning! I'd like to book a cleaning.\nHome size: \nPreferred date: »
- FR : « Bonjour C for Cleaning ! J'aimerais réserver un ménage.\nTaille du logement : \nDate souhaitée : »

### Pied de page
- EN : « © 2026 C for Cleaning, Toronto, Ontario. Prices in Canadian dollars, before tax. »
- FR : « © 2026 C for Cleaning, Toronto (Ontario). Prix en dollars canadiens, avant taxes. »
- Liens : téléphone, WhatsApp, EN « Back to top » / FR « Haut de page ».
