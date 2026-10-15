/*
 * Cleanton Express Cleaning : réglages du site.
 * C'est le SEUL endroit où changer un prix, une remise, une option, le téléphone ou le courriel.
 * Le formulaire, la section Services et les textes qui citent un prix reprennent tous ces valeurs.
 * Tous les prix sont avant taxes, en dollars canadiens.
 */
const CONFIG = {
  phone: "+14377178009",
  email: "contact@cleantonexpress.com",
  formspree: "https://formspree.io/f/mjgeappr",

  // Résidentiel : prix calculé selon le nombre de pièces.
  // 1 chambre et 1 salle de bain = 36 + 34 + 19 = 89 $. Un studio compte comme 1 chambre.
  residential: {
    base: 36,            // frais de base, non affichés
    firstBedroom: 34,
    extraBedroom: 20,    // chaque chambre en plus
    firstBathroom: 19,
    extraBathroom: 20,   // chaque salle de bain en plus
    maxBedrooms: 6,
    maxBathrooms: 5
  },

  // Supplément fixe ajouté au prix des pièces, selon le service choisi
  // (Deep dès 89 + 89 = 178 $ ; Move-in/out dès 89 + 130 = 219 $)
  serviceSurcharge: { regular: 0, deep: 89, move: 130 },

  // Commercial / bureau : estimation seulement, au pied carré, sans extras.
  // deep = supplément « Deep Clean » ajouté à l'estimation (0 = aucun).
  pro: { perSqft: 0.20, deep: 0 },

  // Remises récurrentes, appliquées dès la 2e visite (ménage régulier uniquement)
  recurring: { weekly: 0.15, biweekly: 0.10, monthly: 0.05 },

  // Extras (tuiles de l'étape 2)
  addons: { kitchen: 64, pets: 29, fridge: 29, oven: 29, cabinets: 39, blinds: 29 },

  // Fenêtres intérieures et rails : un seul palier à la fois
  windows: [
    { upTo: 6, price: 29 },
    { upTo: 12, price: 49 },
    { upTo: 24, price: 89 }
  ],

  // Arrivée après 18 h
  lateArrival: 10,

  // Offre de lancement (non affichée pour l'instant). Quand elle se termine : launchOffer: null
  launchOffer: { discount: 0.15, clients: 20 }
};
