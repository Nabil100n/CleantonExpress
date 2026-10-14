/*
 * Cleanton Express Cleaning : réglages du site.
 * C'est le SEUL endroit où changer un prix, une remise, une option ou le téléphone.
 * La carte des prix, la section Services, le formulaire et les textes qui citent
 * un prix ou un pourcentage reprennent tous ces valeurs.
 */
const CONFIG = {
  phone: "+14377178009",
  formspree: "https://formspree.io/f/mjgeappr",

  // Prix avant taxes, en dollars canadiens, dans l'ordre :
  // studio ou 1 ch. ; 2 ch. 1 sdb ; 2 ch. 2 sdb ; 3 ch. 2 sdb. Au-delà : sur devis.
  prices: {
    regular: [165, 195, 225, 265],
    deep:    [255, 285, 315, 355],
    move:    [315, 345, 375, 415]
  },

  // Remises récurrentes, appliquées dès la 2e visite (ménage régulier uniquement)
  recurring: { weekly: 0.15, biweekly: 0.10, monthly: 0.05 },

  // L'onglet « Récurrent » affiche le prix aux deux semaines, arrondi au dollar : 149, 176, 203, 239
  addons: { oven: 30, fridge: 30, cabinets: 40, windows: 40, pets: 25 }, // windows = « dès »
  includedInMove: ["oven", "fridge", "cabinets"],

  // Offre de lancement du bandeau d'annonce. Quand elle se termine, remplacer par : launchOffer: null
  launchOffer: { discount: 0.15, clients: 20 }
};
