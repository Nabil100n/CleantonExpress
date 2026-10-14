/*
 * Cleanton Express Cleaning : tous les textes visibles, en anglais (en) et en français (fr).
 * Règles : pas de tiret cadratin ; aucun prix écrit en dur.
 * Les prix et pourcentages viennent de js/config.js, par ces repères :
 *   {price}  un prix formaté ($165 / 165 $)
 *   {weekly} {biweekly} {monthly}  les remises récurrentes (15% / 15 %)
 *   {launch} {clients}  l'offre de lancement (15% / 15 %, 20 clients)
 *   {d}      une remise, {i} {n} les numéros d'étape
 */
const I18N = {
  en: {
    meta: {
      title: "Cleanton Express Cleaning | Condo & apartment cleaning in Toronto, prices upfront",
      description: "Move-in/move-out, regular and deep cleaning for Toronto condos and apartments. Prices upfront from {price}, eco-friendly products included, service in English and French."
    },
    skip: "Skip to content",
    lang: { en: "EN", fr: "FR", enName: "English", frName: "Français" },
    brand: { name: "Cleanton Express", tag: "Cleaning", home: "Cleanton Express Cleaning, back to top" },
    banner: "Launch offer: {launch} off your first clean, for our first {clients} clients.",
    nav: {
      label: "Main",
      prices: "Prices",
      services: "Services",
      checklist: "Checklist",
      faq: "FAQ",
      pros: "Property managers and realtors",
      book: "Book a cleaning",
      whatsapp: "WhatsApp",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      language: "Language",
      call: "Call {phone}"
    },
    hero: {
      eyebrow: "Condo and apartment cleaning, Toronto",
      title1: "Impeccable homes.",
      title2: "Prices upfront.",
      subtitle: "Move-in and move-out, regular and deep cleaning. Eco-friendly products included, service in English and French."
    },
    card: {
      title: "Our prices",
      note: "CAD, before tax",
      tabsLabel: "Prices by service",
      tabs: { regular: "Regular", deep: "Deep", move: "Move-in/out", recurring: "Recurring" },
      sizes: ["Studio or 1 bed, 1 bath", "2 bed, 1 bath", "2 bed, 2 bath", "3 bed, 2 bath", "4 bed or more"],
      onQuote: "On quote",
      desc: {
        regular: "Kitchen, bathrooms, dusting and floors, done properly.",
        deep: "Everything in Regular, plus baseboards, doors, switches and built-up grime.",
        move: "Empty home, inside the oven, fridge and cabinets. Dated photo report included.",
        recurring: "Bi-weekly price (−{biweekly}), from your 2nd visit. Weekly saves {weekly}, monthly {monthly}."
      },
      foot: "Eco-friendly products and supplies included.",
      footLink: "See what’s included"
    },
    pledges: [
      { title: "Eco products included", text: "No extra charge." },
      { title: "Price agreed before we start", text: "Flat rates, no surprise on the bill." },
      { title: "Photo report on move-outs", text: "Dated photos for you and your landlord." },
      { title: "English or French", text: "By phone or WhatsApp." }
    ],
    services: {
      title: "What we clean",
      intro: "Flat prices for homes in normal condition. If yours needs more work, you get the new price before we start, never after.",
      from: "from {price}",
      regularAlt: "or {price} bi-weekly",
      book: "Book a cleaning",
      move: {
        name: "Move-in / move-out",
        text: "Moving in or out? We clean the empty unit top to bottom, inside the oven, fridge and cabinets included, and send you dated photos for a smooth key handover."
      },
      regular: {
        name: "Regular cleaning",
        text: "One-time or recurring: weekly, bi-weekly or monthly, with the same cleaner whenever possible and up to {weekly} off."
      },
      deep: {
        name: "Deep cleaning",
        text: "For a first visit, after a busy season or before guests arrive. Everything in Regular, plus baseboards, doors, switches and built-up grime."
      },
      note: "Offices, studios and shops: on quote."
    },
    how: {
      title: "How it works",
      steps: [
        { title: "Find your price", text: "Pick your home size in the price list. That’s your price for a home in normal condition." },
        { title: "Send your request", text: "Use the form or WhatsApp. We confirm the date, access and price within 2 hours (8 am to 8 pm)." },
        { title: "We clean, you pay after", text: "You pay once the job is done. Move-outs come with a dated photo report." }
      ]
    },
    included: {
      title: "What’s included",
      intro: "Each clean builds on the one before. Same checklist every time, so you know what you’re paying for.",
      regular: {
        title: "Regular",
        items: [
          "Counters, sink and backsplash",
          "Stovetop and appliance fronts",
          "Cabinet fronts",
          "Inside the microwave",
          "Toilet, sink, tub and shower",
          "Mirrors and fixtures",
          "Dusting",
          "Vacuum and mop",
          "Garbage and recycling"
        ]
      },
      deep: {
        title: "Deep",
        lead: "Everything in Regular, plus:",
        items: [
          "Baseboards, doors and frames",
          "Switches and door handles",
          "Windowsills",
          "Limescale and soap scum"
        ]
      },
      move: {
        title: "Move-in/out",
        lead: "Everything in Deep, plus:",
        items: [
          "Inside the oven",
          "Inside the fridge",
          "Inside cabinets and drawers",
          "Inside closets",
          "Window tracks",
          "Dated photo report"
        ]
      },
      addons: {
        title: "Add-ons, à la carte",
        oven: "Inside the oven",
        fridge: "Inside the fridge",
        cabinets: "Inside cabinets",
        windows: "Interior windows and tracks, from",
        pets: "Pet hair",
        price: "+{price}",
        note: "Oven, fridge and cabinets are already included in move-in/out cleaning."
      },
      notIncluded: "Not included: exterior windows, moving heavy furniture, mould, biohazards."
    },
    checklist: {
      toggle: "See the full checklist, room by room",
      cols: { task: "Task", regular: "Regular", deep: "Deep", move: "Move-in/out" },
      legend: { Y: "Included", O: "Add-on", N: "Not included" },
      groups: {
        kitchen: "Kitchen",
        bathrooms: "Bathrooms",
        whole: "Whole home"
      },
      rows: {
        counters: "Counters, sink and backsplash",
        stovetop: "Stovetop and outside of appliances",
        cabinetFronts: "Cabinet fronts and handles",
        microwave: "Inside the microwave",
        oven: "Inside the oven",
        fridge: "Inside the fridge",
        cabinetsInside: "Inside cabinets and drawers",
        toilet: "Toilet, sink, tub and shower",
        mirrors: "Mirrors and fixtures shined",
        limescale: "Limescale and soap scum on tiles and grout",
        dust: "Dust all reachable surfaces",
        floors: "Vacuum and mop floors",
        garbage: "Empty garbage and recycling",
        baseboards: "Baseboards, doors and frames",
        switches: "Light switches and door handles",
        sills: "Windowsills",
        tracks: "Window tracks",
        closets: "Inside closets",
        photos: "Dated photo report"
      }
    },
    pros: {
      title: "Property managers and realtors",
      text: "Units turned over between tenants, homes ready for listing photos. One contact, and a photo report and invoice for every job.",
      points: [
        "Turnover and pre-listing cleans",
        "Photo report and invoice per unit",
        "Volume pricing for regular work"
      ],
      cta: "Ask for volume pricing"
    },
    areas: {
      title: "Where we clean",
      text: "Downtown Toronto and nearby neighbourhoods, with no travel fee:",
      tags: [
        "King West", "Liberty Village", "CityPlace", "Fort York", "Entertainment District",
        "Financial District", "St. Lawrence", "Kensington Market", "Chinatown", "The Annex",
        "Yorkville", "Little Italy", "Trinity Bellwoods", "Parkdale", "Leslieville", "Midtown"
      ],
      after: "Somewhere else in Toronto? Ask us and we’ll tell you right away."
    },
    faq: {
      title: "Questions",
      items: [
        { q: "Do you bring the products and equipment?", a: "Yes. We bring eco-friendly products and all the supplies. If you’d rather we use your vacuum or your own products, just tell us." },
        { q: "Do I need to be home?", a: "No. Many clients leave a key with the concierge or in a lockbox. We agree on access when we confirm your booking." },
        { q: "Are the prices final?", a: "Yes, for a home in normal condition. If the home is very dirty or you add tasks, you get the new price before we start, never after." },
        { q: "When and how do I pay?", a: "After the clean, by Interac e-Transfer. Prices are in Canadian dollars, before tax." },
        { q: "What if something was missed?", a: "Tell us within 24 hours and we come back to fix it, free of charge." },
        { q: "Can I cancel or reschedule?", a: "Yes, free of charge up to 24 hours before your clean." }
      ]
    },
    book: {
      title: "Book your cleaning",
      text: "Tell us about your home in about 2 minutes. We confirm your date and final price within 2 hours, from 8 am to 8 pm. Nothing to pay now: you pay after the clean.",
      formLabel: "Booking request"
    },
    form: {
      progress: "Step {i} of {n}",
      back: "Back",
      next: "Continue",
      submit: "Send my request",
      sending: "Sending…",
      choose: "Choose an option",
      step1: {
        title: "Your cleaning",
        note: "Prices for a home in normal condition, before tax.",
        service: "Which service?",
        services: {
          regular: { name: "Regular cleaning", desc: "One-time or recurring." },
          deep: { name: "Deep cleaning", desc: "Best for a first visit." },
          move: { name: "Move-in / move-out", desc: "Empty home, oven, fridge and cabinets included." },
          pro: { name: "Property manager, realtor or office", desc: "Turnovers, listings, offices.", price: "On quote" }
        },
        size: "Home size",
        sizeChoose: "Choose a size",
        type: "Type of home",
        types: ["Condo or apartment", "Townhouse", "House"],
        frequency: "How often?",
        frequencies: { once: "One time", weekly: "Weekly", biweekly: "Every 2 weeks", monthly: "Monthly" },
        discount: "−{d}",
        frequencyNote: "The discount starts with your 2nd visit.",
        proType: "You are",
        proTypes: ["A property manager", "A realtor", "An office or shop", "Other"],
        units: "Units or size (optional)",
        unitsExample: "e.g. 3 units, or 1,200 sq ft"
      },
      step2: {
        title: "Add-ons",
        note: "Everything here is optional.",
        windows: "Interior windows and tracks",
        price: "+{price}",
        priceFrom: "from +{price}",
        included: "Included",
        fragrance: "Fragrance-free products, at no extra cost (allergies, baby at home)"
      },
      step3: {
        title: "Where and when?",
        address: "Street address",
        unit: "Unit (optional)",
        postal: "Postal code",
        city: "City",
        date: "Preferred date",
        arrival: "Arrival time",
        windows: ["Morning, 8 to 10 am", "Midday, 11 am to 1 pm", "Afternoon, 2 to 4 pm"],
        arrivalNote: "This is when we arrive, not how long it takes. A clean lasts 2 to 6 hours depending on the home and the service.",
        flexibility: "If that date is taken?",
        flexibilities: ["Only this date", "Day before or after", "Any day that week"],
        access: "How do we get in?",
        accesses: ["I’ll be home", "Concierge or front desk", "Key in a lockbox", "Buzzer code", "Other"],
        elevator: "Elevator booking needed?",
        elevators: ["Not sure", "Yes, I’ll book it", "No"],
        details: "Details (optional)",
        detailsExample: "Buzzer code, pets, priorities"
      },
      step4: {
        title: "Your details",
        name: "Name",
        phone: "Phone",
        email: "Email (optional)",
        emailRequired: "Email",
        confirm: "How should we confirm?",
        confirms: ["WhatsApp", "Text message", "Phone call", "Email"],
        source: "How did you hear about us? (optional)",
        sources: ["Google", "Instagram", "Facebook", "Poster in my building", "A friend or a referral", "Other"]
      },
      summary: {
        title: "Your request",
        service: "Service",
        home: "Home",
        frequency: "Frequency",
        addons: "Add-ons",
        when: "When",
        address: "Address",
        access: "Access",
        included: "included",
        fragrance: "Fragrance-free products",
        elevator: "Elevator booking",
        price: "Price from our grid, before tax",
        onQuote: "On quote",
        then: "Then {d} from your 2nd visit.",
        plusAddons: "Plus the add-ons you picked.",
        final: "We confirm your final price by message before we start. Nothing to pay now: you pay after the clean."
      },
      privacy: "We only use your details to answer your request.",
      errors: {
        service: "Choose a service.",
        required: "This field is required.",
        postal: "Enter a valid postal code, like M5V 2T6.",
        phone: "Enter a 10-digit phone number.",
        email: "Check your email address.",
        date: "Choose a date from today onward.",
        send: "Your request didn’t go through. Check your connection and try again, or message us on WhatsApp."
      },
      success: {
        title: "Request sent",
        text: "Thank you! We’ll confirm your date and price within 2 hours, from 8 am to 8 pm.",
        close: "Close"
      }
    },
    whatsapp: "Hi Cleanton! I’d like to book a cleaning.\nHome size: \nPreferred date: ",
    footer: {
      legal: "© 2026 Cleanton Express Cleaning, Toronto, Ontario. Prices in Canadian dollars, before tax.",
      top: "Back to top"
    }
  },

  fr: {
    meta: {
      title: "Cleanton Express Cleaning | Ménage de condos et d’appartements à Toronto, prix affichés",
      description: "Déménagement, ménage régulier ou en profondeur pour condos et appartements à Toronto. Prix affichés dès {price}, produits écologiques inclus, service en français et en anglais."
    },
    skip: "Aller au contenu",
    lang: { en: "EN", fr: "FR", enName: "English", frName: "Français" },
    brand: { name: "Cleanton Express", tag: "Cleaning", home: "Cleanton Express Cleaning, haut de page" },
    banner: "Offre de lancement : {launch} de rabais sur votre premier ménage, pour nos {clients} premiers clients.",
    nav: {
      label: "Navigation principale",
      prices: "Tarifs",
      services: "Services",
      checklist: "Checklist",
      faq: "FAQ",
      pros: "Gestionnaires et agents immobiliers",
      book: "Réserver un ménage",
      whatsapp: "WhatsApp",
      menuOpen: "Ouvrir le menu",
      menuClose: "Fermer le menu",
      language: "Langue",
      call: "Appeler le {phone}"
    },
    hero: {
      eyebrow: "Ménage de condos et d’appartements, Toronto",
      title1: "Un intérieur impeccable.",
      title2: "Des prix affichés.",
      subtitle: "Déménagement, ménage régulier ou en profondeur. Produits écologiques inclus, service en français et en anglais."
    },
    card: {
      title: "Nos prix",
      note: "En $ CA, avant taxes",
      tabsLabel: "Prix par service",
      tabs: { regular: "Régulier", deep: "En profondeur", move: "Déménagement", recurring: "Récurrent" },
      sizes: ["Studio ou 1 chambre, 1 salle de bain", "2 chambres, 1 salle de bain", "2 chambres, 2 salles de bain", "3 chambres, 2 salles de bain", "4 chambres ou plus"],
      onQuote: "Sur devis",
      desc: {
        regular: "Cuisine, salles de bain, poussière et sols, faits dans les règles.",
        deep: "Tout le ménage régulier, plus plinthes, portes, interrupteurs et saleté incrustée.",
        move: "Logement vide, intérieur du four, du frigo et des armoires. Rapport photo daté inclus.",
        recurring: "Prix aux deux semaines (−{biweekly}), dès la 2e visite. Hebdomadaire : −{weekly}, mensuel : −{monthly}."
      },
      foot: "Produits écologiques et matériel inclus.",
      footLink: "Voir ce qui est inclus"
    },
    pledges: [
      { title: "Produits écologiques inclus", text: "Sans supplément." },
      { title: "Prix fixé avant de commencer", text: "Des forfaits, pas de surprise sur la facture." },
      { title: "Rapport photo au déménagement", text: "Des photos datées pour vous et votre propriétaire." },
      { title: "Français ou anglais", text: "Par téléphone ou WhatsApp." }
    ],
    services: {
      title: "Ce qu’on nettoie",
      intro: "Des forfaits pour un logement en état normal. S’il demande plus de travail, vous avez le nouveau prix avant qu’on commence, jamais après.",
      from: "dès {price}",
      regularAlt: "ou {price} aux deux semaines",
      book: "Réserver un ménage",
      move: {
        name: "Déménagement",
        text: "Vous arrivez ou vous partez ? On nettoie le logement vide de fond en comble, intérieur du four, du frigo et des armoires compris, et on vous envoie des photos datées pour une remise des clés sans accroc."
      },
      regular: {
        name: "Ménage régulier",
        text: "Ponctuel ou récurrent : chaque semaine, aux deux semaines ou chaque mois, avec la même personne autant que possible et jusqu’à {weekly} de rabais."
      },
      deep: {
        name: "Ménage en profondeur",
        text: "Pour une première visite, après une période chargée ou avant de recevoir. Tout le ménage régulier, plus plinthes, portes, interrupteurs et saleté incrustée."
      },
      note: "Bureaux, studios et commerces : sur devis."
    },
    how: {
      title: "Comment ça marche",
      steps: [
        { title: "Trouvez votre prix", text: "Choisissez la taille de votre logement dans la grille. C’est votre prix pour un logement en état normal." },
        { title: "Envoyez votre demande", text: "Par le formulaire ou WhatsApp. On confirme la date, l’accès et le prix en moins de 2 h (de 8 h à 20 h)." },
        { title: "On nettoie, vous payez après", text: "Vous payez une fois le travail fait. Les déménagements incluent un rapport photo daté." }
      ]
    },
    included: {
      title: "Ce qui est inclus",
      intro: "Chaque formule reprend la précédente. La même checklist à chaque fois, pour savoir ce que vous payez.",
      regular: {
        title: "Régulier",
        items: [
          "Comptoirs, évier et dosseret",
          "Plaque de cuisson et façades d’électroménagers",
          "Façades d’armoires",
          "Intérieur du micro-ondes",
          "Toilette, lavabo, baignoire et douche",
          "Miroirs et robinetterie",
          "Poussière",
          "Aspirateur et lavage des sols",
          "Poubelles et recyclage"
        ]
      },
      deep: {
        title: "En profondeur",
        lead: "Tout le régulier, plus :",
        items: [
          "Plinthes, portes et cadres",
          "Interrupteurs et poignées",
          "Rebords de fenêtres",
          "Calcaire et traces de savon"
        ]
      },
      move: {
        title: "Déménagement",
        lead: "Tout le ménage en profondeur, plus :",
        items: [
          "Intérieur du four",
          "Intérieur du frigo",
          "Intérieur des armoires et tiroirs",
          "Intérieur des placards",
          "Rails de fenêtres",
          "Rapport photo daté"
        ]
      },
      addons: {
        title: "Options à la carte",
        oven: "Intérieur du four",
        fridge: "Intérieur du frigo",
        cabinets: "Intérieur des armoires",
        windows: "Vitres intérieures et rails, dès",
        pets: "Poils d’animaux",
        price: "+{price}",
        note: "Four, frigo et armoires sont déjà inclus dans le ménage de déménagement."
      },
      notIncluded: "Non inclus : vitres extérieures, déplacement de meubles lourds, moisissure, risques biologiques."
    },
    checklist: {
      toggle: "Voir la checklist complète, pièce par pièce",
      cols: { task: "Tâche", regular: "Régulier", deep: "En profondeur", move: "Déménagement" },
      legend: { Y: "Inclus", O: "En option", N: "Non inclus" },
      groups: {
        kitchen: "Cuisine",
        bathrooms: "Salles de bain",
        whole: "Tout le logement"
      },
      rows: {
        counters: "Comptoirs, évier et dosseret",
        stovetop: "Plaque de cuisson et extérieur des électroménagers",
        cabinetFronts: "Façades et poignées d’armoires",
        microwave: "Intérieur du micro-ondes",
        oven: "Intérieur du four",
        fridge: "Intérieur du frigo",
        cabinetsInside: "Intérieur des armoires et tiroirs",
        toilet: "Toilette, lavabo, baignoire et douche",
        mirrors: "Miroirs et robinetterie lustrés",
        limescale: "Calcaire et traces de savon sur carreaux et joints",
        dust: "Poussière sur toutes les surfaces accessibles",
        floors: "Aspirateur et lavage des sols",
        garbage: "Poubelles et recyclage vidés",
        baseboards: "Plinthes, portes et cadres",
        switches: "Interrupteurs et poignées de porte",
        sills: "Rebords de fenêtres",
        tracks: "Rails de fenêtres",
        closets: "Intérieur des placards",
        photos: "Rapport photo daté"
      }
    },
    pros: {
      title: "Gestionnaires et agents immobiliers",
      text: "Logements remis en état entre deux locataires, prêts pour les photos de mise en vente. Un seul interlocuteur, avec un rapport photo et une facture à chaque mission.",
      points: [
        "Remise en état et préparation à la vente",
        "Rapport photo et facture par logement",
        "Tarifs volume pour un travail régulier"
      ],
      cta: "Demander les tarifs volume"
    },
    areas: {
      title: "Où on intervient",
      text: "Centre-ville de Toronto et quartiers voisins, sans frais de déplacement :",
      tags: [
        "King West", "Liberty Village", "CityPlace", "Fort York", "Entertainment District",
        "Financial District", "St. Lawrence", "Kensington Market", "Chinatown", "The Annex",
        "Yorkville", "Little Italy", "Trinity Bellwoods", "Parkdale", "Leslieville", "Midtown"
      ],
      after: "Ailleurs à Toronto ? Demandez-nous, on vous répond tout de suite."
    },
    faq: {
      title: "Questions",
      items: [
        { q: "Apportez-vous les produits et le matériel ?", a: "Oui. On apporte des produits écologiques et tout le matériel. Vous préférez qu’on utilise votre aspirateur ou vos produits ? Dites-le-nous." },
        { q: "Dois-je être présent ?", a: "Non. Beaucoup de clients laissent une clé au concierge ou dans une boîte à clé. On fixe l’accès au moment de confirmer." },
        { q: "Les prix sont-ils définitifs ?", a: "Oui, pour un logement en état normal. S’il est très sale ou si vous ajoutez des tâches, vous avez le nouveau prix avant qu’on commence, jamais après." },
        { q: "Quand et comment je paie ?", a: "Après le ménage, par virement Interac. Les prix sont en dollars canadiens, avant taxes." },
        { q: "Et si quelque chose a été oublié ?", a: "Prévenez-nous dans les 24 h : on revient le faire, sans frais." },
        { q: "Puis-je annuler ou déplacer le ménage ?", a: "Oui, sans frais jusqu’à 24 h avant le ménage." }
      ]
    },
    book: {
      title: "Réservez votre ménage",
      text: "Décrivez votre logement en 2 minutes environ. On confirme la date et le prix final en moins de 2 h, de 8 h à 20 h. Rien à payer maintenant : vous payez après le ménage.",
      formLabel: "Demande de réservation"
    },
    form: {
      progress: "Étape {i} sur {n}",
      back: "Retour",
      next: "Continuer",
      submit: "Envoyer ma demande",
      sending: "Envoi en cours…",
      choose: "Choisissez une option",
      step1: {
        title: "Votre ménage",
        note: "Prix pour un logement en état normal, avant taxes.",
        service: "Quel service ?",
        services: {
          regular: { name: "Ménage régulier", desc: "Ponctuel ou récurrent." },
          deep: { name: "Ménage en profondeur", desc: "Idéal pour une première visite." },
          move: { name: "Déménagement", desc: "Logement vide, four, frigo et armoires inclus." },
          pro: { name: "Gestionnaire, agent ou bureau", desc: "Remises en état, mises en vente, bureaux.", price: "Sur devis" }
        },
        size: "Taille du logement",
        sizeChoose: "Choisissez une taille",
        type: "Type de logement",
        types: ["Condo ou appartement", "Maison en rangée", "Maison"],
        frequency: "À quelle fréquence ?",
        frequencies: { once: "Une fois", weekly: "Chaque semaine", biweekly: "Aux deux semaines", monthly: "Chaque mois" },
        discount: "−{d}",
        frequencyNote: "Le rabais s’applique dès votre 2e visite.",
        proType: "Vous êtes",
        proTypes: ["Gestionnaire immobilier", "Agent immobilier", "Bureau ou commerce", "Autre"],
        units: "Logements ou superficie (facultatif)",
        unitsExample: "ex. 3 logements, ou 1 200 pi²"
      },
      step2: {
        title: "Options",
        note: "Tout est facultatif.",
        windows: "Vitres intérieures et rails",
        price: "+{price}",
        priceFrom: "dès +{price}",
        included: "Inclus",
        fragrance: "Produits sans parfum, sans supplément (allergies, bébé à la maison)"
      },
      step3: {
        title: "Où et quand ?",
        address: "Adresse",
        unit: "Appartement (facultatif)",
        postal: "Code postal",
        city: "Ville",
        date: "Date souhaitée",
        arrival: "Heure d’arrivée",
        windows: ["Matin, de 8 h à 10 h", "Midi, de 11 h à 13 h", "Après-midi, de 14 h à 16 h"],
        arrivalNote: "C’est l’heure à laquelle on arrive, pas la durée. Un ménage dure de 2 à 6 h selon le logement et le service.",
        flexibility: "Si cette date est prise ?",
        flexibilities: ["Seulement cette date", "La veille ou le lendemain", "N’importe quel jour de la semaine"],
        access: "Comment on entre ?",
        accesses: ["Je serai là", "Concierge ou réception", "Clé dans une boîte à clé", "Code d’interphone", "Autre"],
        elevator: "Réservation d’ascenseur ?",
        elevators: ["Je ne sais pas", "Oui, je la réserve", "Non"],
        details: "Détails (facultatif)",
        detailsExample: "Code d’interphone, animaux, priorités"
      },
      step4: {
        title: "Vos coordonnées",
        name: "Nom",
        phone: "Téléphone",
        email: "Courriel (facultatif)",
        emailRequired: "Courriel",
        confirm: "Comment préférez-vous qu’on vous confirme ?",
        confirms: ["WhatsApp", "Texto", "Appel", "Courriel"],
        source: "Comment nous avez-vous connus ? (facultatif)",
        sources: ["Google", "Instagram", "Facebook", "Affiche dans mon immeuble", "Un ami, une recommandation", "Autre"]
      },
      summary: {
        title: "Votre demande",
        service: "Service",
        home: "Logement",
        frequency: "Fréquence",
        addons: "Options",
        when: "Quand",
        address: "Adresse",
        access: "Accès",
        included: "inclus",
        fragrance: "Produits sans parfum",
        elevator: "Réservation d’ascenseur",
        price: "Prix de notre grille, avant taxes",
        onQuote: "Sur devis",
        then: "Puis {d} dès votre 2e visite.",
        plusAddons: "Plus les options choisies.",
        final: "On vous confirme le prix final par message avant de commencer. Rien à payer maintenant : vous payez après le ménage."
      },
      privacy: "Vos coordonnées servent uniquement à répondre à votre demande.",
      errors: {
        service: "Choisissez un service.",
        required: "Ce champ est obligatoire.",
        postal: "Entrez un code postal valide, comme M5V 2T6.",
        phone: "Entrez un numéro à 10 chiffres.",
        email: "Vérifiez votre courriel.",
        date: "Choisissez une date à partir d’aujourd’hui.",
        send: "Votre demande n’est pas partie. Vérifiez votre connexion et réessayez, ou écrivez-nous sur WhatsApp."
      },
      success: {
        title: "Demande envoyée",
        text: "Merci ! On vous confirme la date et le prix en moins de 2 h, de 8 h à 20 h.",
        close: "Fermer"
      }
    },
    whatsapp: "Bonjour Cleanton ! J’aimerais réserver un ménage.\nTaille du logement : \nDate souhaitée : ",
    footer: {
      legal: "© 2026 Cleanton Express Cleaning, Toronto (Ontario). Prix en dollars canadiens, avant taxes.",
      top: "Haut de page"
    }
  }
};

/*
 * Structure de la checklist, commune aux deux langues.
 * Colonnes : Régulier, En profondeur, Déménagement.
 * Y = inclus (coche), O = en option (plus), N = non inclus (moins).
 */
const CHECKLIST = [
  { group: "kitchen", rows: [
    ["counters", "YYY"], ["stovetop", "YYY"], ["cabinetFronts", "YYY"], ["microwave", "YYY"],
    ["oven", "OOY"], ["fridge", "OOY"], ["cabinetsInside", "OOY"]
  ] },
  { group: "bathrooms", rows: [
    ["toilet", "YYY"], ["mirrors", "YYY"], ["limescale", "NYY"]
  ] },
  { group: "whole", rows: [
    ["dust", "YYY"], ["floors", "YYY"], ["garbage", "YYY"], ["baseboards", "NYY"],
    ["switches", "NYY"], ["sills", "NYY"], ["tracks", "OOY"], ["closets", "NNY"], ["photos", "NNY"]
  ] }
];
