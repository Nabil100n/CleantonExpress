# Prompts à coller dans Claude Code

À lancer dans l'ordre, un prompt par message. N'envoie le suivant qu'une fois le précédent terminé et vérifié.

## Avant de commencer (5 minutes)
1. Crée un dossier `c-for-cleaning-site` sur ton ordinateur.
2. Mets-y :
   - `CLAUDE.md`, à la racine ;
   - le dossier `docs/`, avec `brief-site.md` et `images.md` ;
   - un dossier `images/` qui contient ton logo, renommé `logo.png` (facultatif : sans lui, le site affiche le nom en texte).
3. Ouvre Claude Code dans ce dossier.

---

## Prompt 1 : le plan
```
Lis CLAUDE.md, docs/brief-site.md et docs/images.md en entier.
N'écris aucun code pour l'instant.
Donne-moi un plan court :
1. Les fichiers que tu vas créer et ce que contient chacun.
2. L'ordre dans lequel tu vas construire la page.
3. Les points du brief qui te paraissent flous ou contradictoires, avec ta proposition pour chacun (3 au maximum).
Attends mon accord avant de coder.
```

## Prompt 2 : la construction
```
C'est validé. Construis le site complet selon le plan, CLAUDE.md et docs/brief-site.md.
- Mets tous les prix dans js/config.js et tous les textes dans js/i18n.js : rien en dur dans le HTML.
- À chaque emplacement d'image, ajoute le commentaire <!-- IMAGE : images/xxx.jpg (voir docs/images.md, n° X) --> et prévois un fond lin quand l'image est absente.
- Ne télécharge pas encore les photos.
Quand c'est fini, fais les vérifications de la section « Vérifier avant de dire fini » de CLAUDE.md et donne-moi la liste de ce qui a été vérifié.
```

## Prompt 3 : les photos
```
Télécharge les 4 photos listées dans docs/images.md (liens « Fichier ») dans le dossier images/, avec exactement les noms indiqués.
Vérifie que chacune pèse moins de 300 Ko ; sinon, compresse-la.
Ouvre la page et confirme que chaque photo s'affiche au bon endroit, sur ordinateur et à 390 px.
Si logo.png est présent dans images/, affiche-le à côté du nom dans l'en-tête et le pied de page ; sinon, ne change rien.
```

## Prompt 4 : la vérification complète
```
Fais une vérification complète du site, sans rien modifier, et donne-moi un rapport :
1. Affichage à 390, 1024, 1440 et 1920 px : défilement horizontal, chevauchements (surtout la carte des prix sur la bande d'engagements), textes coupés.
2. Anglais et français : aucun texte qui reste dans la mauvaise langue, prix au bon format ($165 / 165 $).
3. Réservation, 3 parcours : ménage régulier aux deux semaines, déménagement (options incluses, question ascenseur), demande pro (3 étapes). Vérifie aussi les erreurs (code postal faux, téléphone trop court).
4. Liens ?lang=fr, ?service=move, ?service=recurring, ?service=pro, WhatsApp et téléphone.
5. Console du navigateur : aucune erreur.
6. Règles de CLAUDE.md : aucun faux avis, aucun chiffre inventé, aucun tiret cadratin visible.
Propose ensuite les corrections, sans les appliquer.
```
Après le rapport, envoie un message du type : « Applique les corrections 1, 3 et 4. »

## Prompt 5 : le test d'envoi réel
```
Je vais faire un vrai envoi de test. Lance le site en local et dis-moi l'adresse à ouvrir.
Je remplirai le formulaire avec le nom « TEST C for Cleaning ».
Ensuite, dis-moi quels champs je dois retrouver dans l'e-mail de Formspree, pour que je vérifie qu'il ne manque rien.
```

## Prompt 6 : la mise en ligne
```
Prépare la mise en ligne sur Netlify :
- vérifie que le site fonctionne sans serveur (chemins relatifs, pas de fichier manquant) ;
- dis-moi la méthode la plus simple pour publier ce dossier sur Netlify, étape par étape ;
- liste ce qu'il faudra changer le jour où j'achète le domaine cforcleaning.com (og:url, og:image, liens).
Ne publie rien toi-même.
```

---

## Modèles pour les retouches

**Une seule chose à changer**
```
Une seule chose à changer : [décris le problème, la section et la taille d'écran].
Ne touche à rien d'autre. Montre-moi le changement avant/après.
```

**Changer un prix**
```
Dans js/config.js, passe [le prix] de [X] à [Y].
Vérifie que la carte des prix, la section Services et le formulaire affichent tous le nouveau prix, en anglais et en français.
```

**Changer un texte**
```
Dans js/i18n.js, remplace [ancien texte] par [nouveau texte] en anglais, et [ancien] par [nouveau] en français.
Rien d'autre.
```

**Remplacer une photo**
Dépose ta photo dans `images/` avec le même nom de fichier (par exemple `hero.jpg`), puis envoie :
```
J'ai remplacé images/hero.jpg. Vérifie le recadrage sur ordinateur et à 390 px, et ajuste object-position si besoin.
```
