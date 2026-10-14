# Images : où elles vont et quoi y mettre

Toutes les images vont dans le dossier `images/`, à la racine du site.
Dans le HTML, chaque emplacement porte un commentaire, par exemple :
```html
<!-- IMAGE : images/hero.jpg (voir docs/images.md, n° 1) -->
```
Pour remplacer une photo, il suffit de déposer un fichier du même nom dans `images/`.

## Règles pour toutes les images
- **Poids et format** : JPG ou WebP, qualité autour de 80, 300 Ko maximum par photo.
- **Dimensions** : toujours renseigner `width` et `height` dans le HTML pour éviter les sauts de mise en page.
- **Chargement** : `loading="lazy"` partout, sauf la photo du hero (`fetchpriority="high"`).
- **Texte alternatif** : `alt=""` sur les photos d'ambiance, qui sont décoratives.
- **Image absente** : le cadre garde un fond lin (`#EFEBE3`) et le bon ratio, sans icône cassée. Le logo absent laisse le nom en texte seul.
- **Aucune légende** ne présente une photo de banque d'images comme notre travail.

## Les emplacements

| N° | Fichier | Où sur la page | Format | Photo de départ (Unsplash) | À remplacer plus tard par |
|---|---|---|---|---|---|
| 1 | `images/hero.jpg` | Hero, colonne droite, derrière la carte des prix. Sur mobile, bandeau au-dessus de la carte. | Portrait 4:5, 1600 × 2000 px. Sur mobile, recadrage 4:3 centré. | Cuisine blanche avec îlot en marbre | Une vraie cuisine de condo après ton ménage |
| 2 | `images/how.jpg` | « Comment ça marche », à côté des 3 étapes | Paysage 4:3, 1600 × 1200 px | Salon lumineux avec voilages | Un salon de client, rangé et lumineux |
| 3 | `images/included.jpg` | « Ce qui est inclus », à côté de la carte des options | Portrait 4:5, 1200 × 1500 px | Salle de bain en marbre blanc | Gros plan d'une salle de bain faite par toi (robinetterie, carrelage) |
| 4 | `images/pros.jpg` | Section pros (fond marine), côté photo | Paysage 3:2, 1800 × 1200 px | Cuisine moderne avec électroménager inox | Un logement vide prêt pour la remise des clés, ou un hall d'immeuble |
| 5 | `images/logo.png` | En-tête et pied de page, à gauche du nom | PNG transparent, 80 px de haut (affiché à 40 px) | Ton `Logo_detour.png` actuel, ou une version plate à faire | Une version plate du symbole, plus cohérente avec le style luxe |
| 6 | `images/favicon.png` | Onglet du navigateur | Carré 512 × 512 px, PNG | Le symbole du logo seul | |
| 7 | `images/og.jpg` | Aperçu quand le lien est partagé (WhatsApp, Facebook) | 1200 × 630 px | La photo du hero recadrée, avec le nom | À faire quand le domaine sera acheté |
| 8 | `images/apple-touch-icon.png` | Icône sur l'écran d'accueil d'un iPhone | Carré 180 × 180 px, PNG opaque sur fond lin `#F7F5F0` | Le symbole du logo (déjà en place) | La version plate du symbole |

## Liens des photos de départ
Elles ont été choisies dans l'autre conversation, toutes sous licence Unsplash. Cette licence autorise l'usage commercial gratuit, sans attribution obligatoire.

1. **Hero** : https://unsplash.com/photos/modern-white-kitchen-with-marble-island-GliaHAJ3_5A
   Fichier : `https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1600&q=80`
2. **Comment ça marche** : https://unsplash.com/photos/a-bright-airy-living-room-with-minimalist-decor-eLMSYhpAGEI
   Fichier : `https://images.unsplash.com/photo-1754613307941-029aa358987e?auto=format&fit=crop&w=1600&q=80`
3. **Ce qui est inclus** : https://unsplash.com/photos/a-bathtub-and-sink-in-a-marble-bathroom-jC9a3X0uiBo
   Fichier : `https://images.unsplash.com/photo-1764551322786-54a994923d8f?auto=format&fit=crop&w=1200&q=80`
4. **Pros** : https://unsplash.com/photos/a-modern-kitchen-with-stainless-steel-appliances-and-marble-counter-tops-j6QSUeiW6vo
   Fichier : `https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?auto=format&fit=crop&w=1800&q=80`

Avant de publier, vérifie sur chaque page Unsplash que la photo n'est pas marquée « Unsplash+ » : celles-là ont une licence différente.

## Tes vraies photos, à prendre dès les premiers ménages
- Demande toujours l'accord du client, par écrit (un message WhatsApp suffit).
- Pas de visage, pas d'objet personnel reconnaissable (photos de famille, courrier, écrans allumés).
- Lumière naturelle, rideaux ouverts, lumières allumées, téléphone à l'horizontale et à hauteur de poitrine.
- Pour chaque mission, garde un « avant / après » pris exactement du même angle : il servira pour les réseaux sociaux, et plus tard sur le site.
- Les photos datées des déménagements (rapport client) restent privées et ne vont pas sur le site.
