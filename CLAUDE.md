# Cleanton Express Cleaning : site web

Claude Code lit ce fichier à chaque session. Il donne le contexte et les règles fixes.
- Le détail du site (design, structure, réservation, textes EN/FR) est dans `docs/brief-site.md`.
- L'emplacement de chaque image est dans `docs/images.md`.

## Direction visuelle (décision du 14 octobre 2026)
- Le site reprend le style de l'ancien site Vercel : fond bleu nuit, titres Bebas Neue en capitales, texte DM Sans, orange pour les actions, bleu clair en accent, cartes Services à retourner, bandeau défilant.
- La section 1 de `docs/brief-site.md` (direction « hôtel boutique », Cormorant, Jost, fond lin) ne s'applique plus. Le reste du brief (réservation en 4 étapes, prix, textes du formulaire, comportements) reste valable.
- Pas de section d'avis tant qu'il n'y a pas de vrais avis Google. Pas de mention « urgence ». La disponibilité 24/7 est affichée (un bot WhatsApp viendra plus tard).
- Texte des boutons orange en bleu nuit (contraste AA), pas en blanc.

## Contenu, prix et formulaire (décision du 15 octobre 2026)
- Ordre de la page : hero, bandeau, « What we do » (Résidentiel à gauche, Commercial à droite), « Why choose us », « Détail des services » (checklist par pièce : standard, deep, move-in/out, extras, services non offerts), FAQ, Contact (titre, formulaire, puis coordonnées : téléphone, WhatsApp, Toronto & GTA, courriel).
- Ces règles remplacent les prix et la réservation des sections 4 et 5 de `docs/brief-site.md`.
- Résidentiel : prix calculé dans le formulaire. 36 $ de frais de base (non affichés) + 34 $ la 1re chambre + 20 $ par chambre en plus + 19 $ la 1re salle de bain + 20 $ par salle de bain en plus, donc 89 $ pour 1 chambre et 1 salle de bain. Un studio compte comme 1 chambre. Deep clean : +89 $ (dès 178 $). Move-in/out : +130 $ (dès 219 $). Arrivée après 18 h : +10 $. Remises récurrentes sur le total, dès la 2e visite.
- Extras en tuiles cliquables : Extra kitchen, Inside fridge, Inside oven, Inside cabinets, Blinds, Pets in home, et les vitres intérieures en 3 paliers (6, 12, 24 fenêtres, un seul à la fois).
- Commercial / Office : superficie obligatoire, estimation au pied carré sans extras, affichée « Estimate Only » / « Prix indicatif » avec le message d'appel de confirmation.
- Dans le formulaire, un prix n'apparaît que dans l'encadré bleu d'estimation, sous chaque étape : rien sur les cartes de service, les tuiles d'extras ni l'option « après 18 h ». Le détail ligne par ligne s'affiche à l'étape 4.
- Date souhaitée : calendrier maison (le sélecteur natif ne s'ouvre pas dans toutes les applis mobiles). Heure précise : liste de créneaux de 30 minutes.
- Toutes ces valeurs vivent dans `js/config.js`.

## L'entreprise
- Cleanton Express Cleaning : ménage de condos, d'appartements et de townhouses à Toronto (GTA), Ontario, Canada.
- Entreprise individuelle lancée par Nabil, seul au départ ; des cleaners indépendants viendront plus tard.
- Deux volets :
  - **Résidentiel** : le cœur du site, avec des forfaits à prix affichés.
  - **Pros** : gestionnaires immobiliers, agents immobiliers, bureaux, studios et commerces, sur devis.
- Positionnement : milieu de gamme à presque premium, produits écologiques.
- Téléphone et WhatsApp : +1 437 717 8009.
- Courriel : contact@cleantonexpress.com, actif, affiché dans le bloc Contact (valeur dans `js/config.js`).
- Le site web sur le domaine cleantonexpress.com n'est pas encore en ligne : aucun lien vers ce domaine.

## Stack (rester simple)
- Site statique d'une seule page : HTML, CSS et JavaScript, sans framework, sans étape de build, sans dépendance npm.
- Hébergement sur Netlify, en publiant la racine du projet.
- Formulaire envoyé à Formspree (`https://formspree.io/f/mjgeappr`) avec `fetch`, en `FormData`, avec l'en-tête `Accept: application/json`.
- Polices Google Fonts :
  - **Bebas Neue** pour les titres, les prix et le nom de marque.
  - **DM Sans** (300, 400, 500) pour le texte et l'interface.

## Structure des fichiers
```
index.html
css/style.css
js/config.js   prix, remises, extras, téléphone, courriel, Formspree : le seul endroit où changer un prix
js/i18n.js     tous les textes visibles, en anglais et en français
js/main.js     langue, onglets de prix, menu mobile, réservation
images/        photos et logo, voir docs/images.md
docs/          brief et plan des images, à ne pas publier comme pages
```

## Règles non négociables
1. **Aucune fausse preuve.** Pas d'avis, de note étoilée, de logo client, de chiffre inventé (années d'expérience, nombre de clients), ni de mention « assuré », « bonded » ou « background-checked » tant que ce n'est pas vrai.
2. **Photos d'ambiance.** Les photos de banque d'images servent d'ambiance : aucune légende ne doit les présenter comme notre travail.
3. **Toronto et Ontario uniquement.** Dollars canadiens, prix avant taxes, aucune référence australienne.
4. **Bilingue.** Chaque texte visible vient de `js/i18n.js`, en anglais et en français, sans texte en dur dans le HTML.
5. **Format des prix.** En anglais « $165 », en français « 165 $ » (avec une espace insécable).
6. **Pas de tiret cadratin** (—) dans les textes visibles.
7. **Une estimation, jamais un prix ferme.** Le formulaire calcule une estimation avant taxes ; le prix final est confirmé par message (ou par appel pour les pros) avant le ménage.
8. **Un prix vit à un seul endroit.** On ne le change que dans `js/config.js` ; la grille, les services et le formulaire le reprennent tous de là.
9. **Pas d'image cassée.** Une image absente ne doit jamais afficher d'icône cassée : le cadre reste un aplat couleur lin.
10. **Changements limités.** Ne modifie que ce qui est demandé. Avant un changement important, propose un plan court et attends l'accord.

## Vérifier avant de dire « fini »
- Servir le site en local (par exemple `python3 -m http.server 8000`) et l'ouvrir dans un navigateur.
- À 390 px, 1024 px et 1440 px : pas de défilement horizontal, aucun élément qui en chevauche un autre.
- En anglais et en français, y compris `?lang=fr` et `?service=move` dans l'adresse.
- Faire un parcours complet du formulaire, en résidentiel puis en pro, et vérifier que la console n'affiche aucune erreur.
- Donner à Nabil la liste de ce qui a été vérifié et de ce qui ne l'a pas été.
