# Images : où elles vont et quoi y mettre

Toutes les images vont dans le dossier `images/`, à la racine du site.
Pour remplacer une photo, il suffit de déposer un fichier du même nom dans `images/`.
Les photos des cartes Services sont des fonds CSS (`css/style.css`) ; celles du hero et du comparateur avant/après sont des balises `<img>` dans `index.html`. Sans fichier, le cadre garde sa couleur bleu nuit.

## Règles pour toutes les images
- **Poids et format** : JPG, qualité autour de 80, 300 Ko maximum par photo.
- **Photos d'ambiance** : aucune légende ne présente une photo de banque d'images comme notre travail.
- **Pas de toit** : la partie Roof est retirée du site, ne pas réutiliser la photo de toiture de l'ancien site.

## Les emplacements

| N° | Fichier | Où sur la page | Format | Photo actuelle | À remplacer plus tard par |
|---|---|---|---|---|---|
| 1 | `images/hero-1.jpg` | Hero, 1re photo du fondu (fond plein écran) | Paysage, 2000 × 1333 px | Silhouette qui passe la serpillière (ancien site) | Une vraie photo de ménage à Toronto |
| 2 | `images/hero-2.jpg` | Hero, 2e photo du fondu | Portrait, 1066 × 1600 px | Deux personnes qui lavent des vitres (ancien site) | Une vraie photo de ménage à Toronto |
| 2 bis | `images/hero-3.jpg` | Hero, 3e photo du fondu | Paysage, environ 2000 × 1333 px | Temporaire : `service-residential.jpg` (commentaire « IMAGE TEMPORAIRE » dans `index.html`) | Une vraie photo de ménage à Toronto, puis changer le `src` |
| 2 ter | `images/before-1.jpg` et `images/after-1.jpg` | « Avant et après », comparateur | Paysage 4:3, environ 1200 × 900 px, même angle pour les deux | Temporaire : photo d'ambiance avec le badge « Example » (commentaire « PHOTOS TEMPORAIRES ») | Un vrai avant/après, avec l'accord du client ; puis changer les `src` et mettre `beforeAfterReal: true` dans `js/config.js` |
| 3 | `images/service-commercial.jpg` | Carte « Commercial », face avant | Portrait, 800 × 1200 px | Autolaveuse dans un couloir (ancien site) | Un bureau ou un hall d'immeuble après ton ménage |
| 4 | `images/service-residential.jpg` | Carte « Residential », face avant | Paysage, 1400 × 931 px | Gants jaunes qui essuient une table (ancien site) | Une cuisine ou une salle de bain de condo faite par toi |
| 5 | `images/logo.png` | Navigation et pied de page | PNG transparent, 80 px de haut | Le symbole détouré | Une version plate du symbole |
| 6 | `images/favicon.png` | Onglet du navigateur | Carré 512 × 512 px, PNG | Le symbole du logo seul | |
| 7 | `images/apple-touch-icon.png` | Icône sur l'écran d'accueil d'un iPhone | Carré 180 × 180 px, PNG opaque | Le symbole du logo sur fond clair | La version plate du symbole |
| 8 | `images/og.jpg` | Aperçu quand le lien est partagé (WhatsApp, Facebook) | 1200 × 630 px | (à faire) | À faire quand le domaine sera acheté |

## Tes vraies photos, à prendre dès les premiers ménages
- Demande toujours l'accord du client, par écrit (un message WhatsApp suffit).
- Pas de visage, pas d'objet personnel reconnaissable (photos de famille, courrier, écrans allumés).
- Lumière naturelle, rideaux ouverts, lumières allumées, téléphone à l'horizontale et à hauteur de poitrine.
- Pour chaque mission, garde un « avant / après » pris exactement du même angle : il servira pour les réseaux sociaux, et plus tard sur le site.
- Les photos datées des déménagements (rapport client) restent privées et ne vont pas sur le site.
