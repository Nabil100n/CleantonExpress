# C for Cleaning : site web

Claude Code lit ce fichier à chaque session. Il donne le contexte et les règles fixes.
- `docs/brief-site.md` est une archive du premier brief : en cas de doute, ce fichier-ci fait foi.
- L'emplacement de chaque image est dans `docs/images.md`.

## Direction visuelle (décision du 14 octobre 2026)
- Le site reprend le style de l'ancien site Vercel : fond bleu nuit, titres Bebas Neue en capitales, texte DM Sans, orange pour les actions, bleu clair en accent, cartes Services à retourner, bandeau défilant.
- La section 1 de `docs/brief-site.md` (direction « hôtel boutique », Cormorant, Jost, fond lin) ne s'applique plus. Le reste du brief (réservation en 4 étapes, prix, textes du formulaire, comportements) reste valable.
- Avis : uniquement de vrais avis clients (section « Avant et après », bloc « Avis clients »), jamais de note moyenne ni de nombre d'avis, pas de balisage schema.org. Pas de mention « urgence ». La carte « Sample review / Exemple d'avis » (`{ sample: true }` dans `reviews`) sert seulement à voir la mise en page : on la retire dès le premier vrai avis.
- Ne jamais écrire « 24/7 », ni de délai chiffré du type « en 1 h » ou « same day guaranteed ». « Fast availability across Toronto » / « Disponibles rapidement partout à Toronto » reste pour le badge du hero et la description (décision du 17 octobre 2026). Le bandeau liste les services : Homes & condos, Move-in & move-out, Deep cleaning, Offices & shops, Eco-friendly products, English & French, Toronto & GTA, Book online in 2 minutes. La carte « 2 h » de « Why choose us » et le lien WhatsApp gardent « Demandes acceptées à toute heure ».
- Texte des boutons orange en bleu nuit (contraste AA), pas en blanc.

## Contenu, prix et formulaire (décisions des 15 et 16 octobre 2026)
- Ordre de la page : hero (3 photos en fondu, `images/hero-3.jpg` encore temporaire), bandeau, « What we do » (Résidentiel à gauche, Commercial à droite), « Why choose us / Pourquoi nous choisir » (4 engagements chiffrés, pastilles, ligne assurés, 2 boutons ; aucun prénom ni « founder / fondateur » dans cette section), « Détail des services » (intro, une ligne cliquable par formule, checklist par pièce, extras, services non offerts), « Avant et après » (comparateur, puis avis clients), FAQ, Contact (titre, formulaire, puis coordonnées).
- Fonds : deux sections voisines n'ont jamais le même fond (`--bg` et `--bg-2` pour les sections foncées, blanc pour Services et Détail).
- Les salles de bain ne sont pas comprises dans le forfait de base : le site le dit dans « Détail des services ».
- Ces règles remplacent les prix et la réservation de `docs/brief-site.md`.
- Résidentiel : départ 89 $ (studio, 0 salle de bain) + chambres (39 $ la 1re, 29 $ les suivantes) + salles de bain (29 $ la 1re, 24 $ les suivantes) + demi-salles de bain (19 $ la 1re, 14 $ les suivantes). Compteurs à partir de 0 (0 chambre = studio). Deep clean : +89 $. Move-in/out : +139 $. Arrivée après 18 h : +10 $. Plus de choix de fréquence (17 octobre 2026) ; aucune remise affichée. La FAQ dit qu'on peut réserver un ménage régulier par message et parler d'une remise.
- Paiement : après le ménage, par carte via lien de paiement ou par virement Interac. Pas de blocage de carte. Prix confirmé en moins de 2 h, de 8 h à 20 h.
- « Dès 89 $ » est affiché au dos de la carte Résidentiel de « What we do », sans plus de détail : le formulaire donne le prix.
- Extras en tuiles : Extra kitchen 59 $, Inside fridge 29 $, Inside oven 29 $, Inside cabinets 39 $, Pets in home 29 $, Change bed sheets + laundry 29 $ par visite, stores 8 $ par fenêtre (compteur sur la tuile). Vitres intérieures + rails : jusqu'à 6 fenêtres 39 $, de 7 à 12 : 69 $, plus de 12 : sur devis. Pas de sous-sol ni de lave-vaisselle.
- Commercial / Office : superficie obligatoire, 0,20 $ le pied carré, salles de bain au prix résidentiel + 20 %, cuisines comprises, plancher de 89 $. Pas de deep clean en ligne (il faut un appel), pas de supplément après 18 h. Affiché « Estimate Only » / « Prix indicatif » avec le message d'appel de confirmation.
- Dans le formulaire, un prix n'apparaît que dans l'encadré bleu d'estimation, sous chaque étape, en orange et en grand. Le détail ligne par ligne s'ouvre avec le « ? » à côté du libellé, à toutes les étapes, sous le prix (pas d'infobulle flottante). « 0 chambre = studio » est expliqué dans la FAQ, plus dans le formulaire.
- Sous le total de l'encadré, en plus petit et en orange : le prix après taxes (TVH de l'Ontario, 13 %, `taxRate` dans `js/config.js`).
- Date souhaitée : calendrier maison. Heure précise : liste de créneaux de 30 minutes.
- Toutes ces valeurs vivent dans `js/config.js`, comme les avis à remplir. Avant/après : `images/before-1.jpg` et `images/after-1.jpg` ; tant que `beforeAfterReal` vaut `false`, le comparateur montre une photo temporaire avec un badge « Example / Exemple » et le sous-titre « A recent job in Toronto » reste masqué.

## L'entreprise
- C for Cleaning (nom adopté le 17 octobre 2026, anciennement Cleanton Express Cleaning) : ménage de condos, d'appartements et de townhouses à Toronto (GTA), Ontario, Canada.
- Nom de marque : « C for Cleaning », écrit tel quel en anglais comme en français. Le logo (le « C ») ne change pas.
- Entreprise individuelle lancée par Nabil, seul au départ ; des cleaners indépendants viendront plus tard.
- Deux volets :
  - **Résidentiel** : le cœur du site, avec des forfaits à prix affichés.
  - **Pros** : gestionnaires immobiliers, agents immobiliers, bureaux, studios et commerces, sur devis.
- Positionnement : milieu de gamme à presque premium, produits écologiques.
- Téléphone et WhatsApp : +1 437 717 8009.
- Courriel : contact@cforcleaning.com (17 octobre 2026 ; Nabil achète le domaine cforcleaning.com), affiché dans le bloc Contact (valeur dans `js/config.js`). À vérifier avant la mise en ligne : la boîte doit recevoir.
- Assurance responsabilité civile confirmée par Nabil le 16 octobre 2026 : la mention « Insured / Assurés, attestation sur demande » est autorisée.
- Aucun site n'est en ligne sur cleantonexpress.com ni sur cforcleaning.com : aucun lien vers ces domaines (le courriel seulement).

## Stack (rester simple)
- Site statique d'une seule page : HTML, CSS et JavaScript, sans framework, sans étape de build, sans dépendance npm.
- Hébergement sur Vercel : le site publie la branche `main`, racine du projet (`vercel.json` cache `docs/`, `CLAUDE.md` et `PROMPTS.md`).
- Formulaire envoyé à Formspree (`https://formspree.io/f/mjgeappr`) avec `fetch`, en `FormData`, avec l'en-tête `Accept: application/json`.
- Polices Google Fonts :
  - **Bebas Neue** pour les titres, les prix et le nom de marque.
  - **DM Sans** (300, 400, 500) pour le texte et l'interface.

## Structure des fichiers
```
index.html
css/style.css
js/config.js   prix, extras, téléphone, courriel, Formspree, avis et photos avant/après : le seul endroit où changer un prix
js/i18n.js     tous les textes visibles, en anglais et en français
js/main.js     langue, menu mobile, cartes Services, FAQ, résultats, réservation et estimation
images/        photos et logo, voir docs/images.md
docs/          brief et plan des images, à ne pas publier comme pages
```

## Règles non négociables
1. **Aucune fausse preuve.** Pas d'avis inventé, de logo client, de chiffre inventé (années d'expérience, nombre de clients), ni de mention « bonded » ou « background-checked » tant que ce n'est pas vrai. « Assuré » est vrai (voir plus haut).
2. **Photos d'ambiance.** Les photos de banque d'images servent d'ambiance : aucune légende ne doit les présenter comme notre travail.
3. **Toronto et Ontario uniquement.** Dollars canadiens, prix avant taxes, aucune référence australienne.
4. **Bilingue.** Chaque texte visible vient de `js/i18n.js`, en anglais et en français, sans texte en dur dans le HTML.
5. **Format des prix.** En anglais « $165 », en français « 165 $ » (avec une espace insécable).
6. **Tiret cadratin (—) avec modération.** On retire ceux qui alourdissent le texte ; ceux de Nabil qui se lisent bien restent.
7. **Une estimation, jamais un prix ferme.** Le formulaire calcule une estimation avant taxes ; le prix final est confirmé par message (ou par appel pour les pros) avant le ménage.
8. **Un prix vit à un seul endroit.** On ne le change que dans `js/config.js` ; la grille, les services et le formulaire le reprennent tous de là.
9. **Pas d'image cassée.** Une image absente ne doit jamais afficher d'icône cassée : le cadre reste un aplat bleu nuit.
10. **Changements limités.** Ne modifie que ce qui est demandé. Avant un changement important, propose un plan court et attends l'accord.

## Vérifier avant de dire « fini »
- Servir le site en local (par exemple `python3 -m http.server 8000`) et l'ouvrir dans un navigateur.
- À 390 px, 1024 px et 1440 px : pas de défilement horizontal, aucun élément qui en chevauche un autre.
- En anglais et en français, y compris `?lang=fr` et `?service=move` dans l'adresse.
- Faire un parcours complet du formulaire, en résidentiel puis en pro, et vérifier que la console n'affiche aucune erreur.
- Donner à Nabil la liste de ce qui a été vérifié et de ce qui ne l'a pas été.
