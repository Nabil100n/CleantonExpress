# Cleanton Express Cleaning : site web

Claude Code lit ce fichier à chaque session. Il donne le contexte et les règles fixes.
- Le détail du site (design, structure, réservation, textes EN/FR) est dans `docs/brief-site.md`.
- L'emplacement de chaque image est dans `docs/images.md`.

## L'entreprise
- Cleanton Express Cleaning : ménage de condos, d'appartements et de townhouses à Toronto (GTA), Ontario, Canada.
- Entreprise individuelle lancée par Nabil, seul au départ ; des cleaners indépendants viendront plus tard.
- Deux volets :
  - **Résidentiel** : le cœur du site, avec des forfaits à prix affichés.
  - **Pros** : gestionnaires immobiliers, agents immobiliers, bureaux, studios et commerces, sur devis.
- Positionnement : milieu de gamme à presque premium, produits écologiques.
- Téléphone et WhatsApp : +1 437 717 8009.
- Le courriel et le domaine (cleantonexpress.com) ne sont pas encore actifs : ne les affiche nulle part.

## Stack (rester simple)
- Site statique d'une seule page : HTML, CSS et JavaScript, sans framework, sans étape de build, sans dépendance npm.
- Hébergement sur Netlify, en publiant la racine du projet.
- Formulaire envoyé à Formspree (`https://formspree.io/f/mjgeappr`) avec `fetch`, en `FormData`, avec l'en-tête `Accept: application/json`.
- Polices Google Fonts :
  - **Cormorant Garamond** (500, 600, italique 500) pour les titres et les prix.
  - **Jost** (400, 500) pour le texte et l'interface.

## Structure des fichiers
```
index.html
css/style.css
js/config.js   prix, remises, options, téléphone, Formspree : le seul endroit où changer un prix
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
7. **Pas de calculateur de prix.** Le formulaire envoie une demande ; le prix final est confirmé par message avant le ménage.
8. **Un prix vit à un seul endroit.** On ne le change que dans `js/config.js` ; la grille, les services et le formulaire le reprennent tous de là.
9. **Pas d'image cassée.** Une image absente ne doit jamais afficher d'icône cassée : le cadre reste un aplat couleur lin.
10. **Changements limités.** Ne modifie que ce qui est demandé. Avant un changement important, propose un plan court et attends l'accord.

## Vérifier avant de dire « fini »
- Servir le site en local (par exemple `python3 -m http.server 8000`) et l'ouvrir dans un navigateur.
- À 390 px, 1024 px et 1440 px : pas de défilement horizontal, aucun élément qui en chevauche un autre.
- En anglais et en français, y compris `?lang=fr` et `?service=move` dans l'adresse.
- Faire un parcours complet du formulaire, en résidentiel puis en pro, et vérifier que la console n'affiche aucune erreur.
- Donner à Nabil la liste de ce qui a été vérifié et de ce qui ne l'a pas été.
