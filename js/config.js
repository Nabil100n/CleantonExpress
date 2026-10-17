/*
 * C for Cleaning : réglages du site.
 * C'est le SEUL endroit où changer un prix, une remise, une option, le téléphone ou le courriel.
 * Le formulaire, les services et les textes qui citent un prix reprennent tous ces valeurs.
 * Tous les prix sont avant taxes, en dollars canadiens.
 */
const CONFIG = {
  phone: "+14377178009",
  email: "contact@cforcleaning.com",
  formspree: "https://formspree.io/f/mjgeappr",

  // Résidentiel (grille du 16 octobre 2026).
  // Prix = départ + chambres + salles de bain + demi-salles de bain.
  // 0 chambre = studio. Studio sans salle de bain = 89 $, le prix « dès » affiché sur le site.
  residential: {
    base: 89,
    bedrooms:      { first: 39, extra: 29, max: 6 },  // 1re chambre, puis chaque chambre en plus
    bathrooms:     { first: 29, extra: 24, max: 5 },  // même prix pour tous les forfaits
    halfBathrooms: { first: 19, extra: 14, max: 3 }   // toilette et lavabo, sans douche
  },

  // Supplément fixe ajouté au prix du ménage régulier du même logement
  // (Deep dès 89 + 89 = 178 $ ; Move-in/out dès 89 + 139 = 228 $)
  serviceSurcharge: { regular: 0, deep: 89, move: 139 },

  // Commercial / bureau : estimation seulement, confirmée par téléphone. Pas de deep clean en ligne,
  // cuisines comprises, pas de supplément après 18 h.
  // Salles de bain : prix résidentiel + 20 % (35 $ la 1re, 29 $ les suivantes, arrondi au total).
  pro: { perSqft: 0.20, minimum: 89, bathroomMarkup: 0.20 },

  // Remises récurrentes : AUCUNE pour l'instant (décision du 17 octobre 2026).
  // Pour en remettre une : 0.15 = 15 %, appliquée dès la 2e visite, ménage régulier uniquement.
  // Elle s'affiche alors toute seule dans le formulaire ; pense aussi à la mentionner dans la FAQ (js/i18n.js).
  recurring: { weekly: 0, biweekly: 0, monthly: 0 },

  // Extras (tuiles de l'étape 2). Draps + lessive : par visite.
  addons: { kitchen: 59, fridge: 29, oven: 29, cabinets: 39, pets: 29, sheetsLaundry: 29 },

  // Stores : prix par fenêtre, avec un compteur sur la tuile
  blinds: { perWindow: 8, max: 30 },

  // Vitres intérieures et rails : un seul palier à la fois. price: null = sur devis.
  windows: [
    { from: 1, to: 6, price: 39 },
    { from: 7, to: 12, price: 69 },
    { from: 13, to: null, price: null }
  ],

  // Arrivée après 18 h (ménage résidentiel)
  lateArrival: 10,

  // TVH de l'Ontario, pour le prix après taxes affiché sous l'estimation
  taxRate: 0.13,

  /* ==================== À REMPLIR (section « Avant et après ») ====================
     Aucune note moyenne ni aucun nombre d'avis n'est calculé ni affiché. */

  // false tant que le comparateur montre des photos temporaires : badge « Exemple » visible,
  // sous-titre « Une mission récente à Toronto » masqué. Passer à true avec les vraies photos
  // (images/before-1.jpg et images/after-1.jpg, chemins à mettre dans index.html).
  beforeAfterReal: false,

  // Lien « Voir tous les avis sur Google ». Vide = lien masqué.
  googleReviewsUrl: "",

  // Avis réels de clients. Une entrée dont le texte est vide n'est pas affichée.
  // Format :
  // { name: "Prénom I.", service: "Move-out clean", date: "2026-10", rating: 5,
  //   text_en: "…", text_fr: "…", location: "" }   // location : facultatif, vide = aucun lieu affiché
  // { sample: true } = carte « Exemple d'avis » pour voir la mise en page : à SUPPRIMER dès le premier vrai avis.
  reviews: [
    { sample: true }, // EXEMPLE : à supprimer
    { name: "", service: "", date: "", rating: 5, text_en: "", text_fr: "", location: "" }, // TODO : avis à remplir
    { name: "", service: "", date: "", rating: 5, text_en: "", text_fr: "", location: "" }, // TODO : avis à remplir
    { name: "", service: "", date: "", rating: 5, text_en: "", text_fr: "", location: "" }  // TODO : avis à remplir
  ],

};
