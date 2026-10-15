/*
 * Cleanton Express Cleaning : tous les textes visibles, en anglais (en) et en français (fr).
 * Règles : pas de tiret cadratin ; aucun prix écrit en dur ; pas de faux avis.
 * Les prix et pourcentages viennent de js/config.js, par ces repères :
 *   {price}  un prix formaté ($165 / 165 $)
 *   {phone}  le téléphone de config.js, (437) 717-8009
 *   {d}      une remise, {i} {n} les numéros d'étape du formulaire
 */
const I18N = {
  en: {
    meta: {
      title: "Cleanton Express Cleaning | 24/7 cleaning services in Toronto",
      description: "24/7 professional cleaning in Toronto for condos, apartments, homes and businesses. Prices from {price}, eco-friendly products, service in English and French."
    },
    skip: "Skip to content",
    lang: { en: "EN", fr: "FR", enName: "English", frName: "Français" },
    brand: { word1: "Cleanton", word2: "Express", word3: "Cleaning", home: "Cleanton Express Cleaning, back to top" },
    nav: {
      label: "Main",
      why: "Why Us",
      services: "Services",
      contact: "Contact",
      quote: "Free Quote →",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      language: "Language",
      call: "Call {phone}"
    },
    hero: {
      badge: "✦ Available 24/7 in Toronto",
      title1: "We clean.",
      title2: "That’s it.",
      sub: "Reliable, fast and professional cleaning for homes and businesses, whenever you need us.",
      cta: "Get a Free Quote",
      whatsapp: "WhatsApp available",
      quick: "Quick response"
    },
    ticker: ["24/7 cleaning", "Professional equipment", "Reliable & punctual", "Competitive pricing", "Eco-friendly products", "Downtown Toronto & GTA", "English & French"],
    why: {
      label: "Why choose Cleanton Express Cleaning",
      title1: "Every space.",
      title2: "Spotless.",
      p1: "Designed for responsiveness. Guided by exacting standards. We know that a clean space reflects your image, and that your home or business can’t wait.",
      p2: "That’s why we step in with precision, professionalism and high standards, 24/7. Fast, structured and professional cleaning, tailored to your needs.",
      pillars: [
        { title: "24/7 availability", text: "Day, night, weekends and holidays: we’re always on." },
        { title: "Eco-friendly products", text: "Included at no extra charge." },
        { title: "Pro equipment", text: "Professional-grade tools for an impeccable result every time." },
        { title: "Reliable & punctual", text: "On time, careful and committed to quality." },
        { title: "Competitive pricing", text: "Professional quality, with prices shown upfront." }
      ]
    },
    services: {
      label: "Our services",
      labelBrand: "at Cleanton",
      title: "What we do",
      hint: "Tap a card to discover more",
      more: "↺ Tap to discover more",
      back: "↺ Flip back",
      cta: "Get a Quote →",
      commercial: {
        tag: "✔ Commercial cleaning",
        name: "Commercial",
        title: "Offices, shops & more",
        desc: "We adapt to your schedule and deliver spotless results, every time.",
        items: ["Offices & corporate spaces", "Retail stores", "Gyms & fitness studios", "Bars & restaurants", "After-event cleaning", "Unit turnovers for property managers & realtors"]
      },
      residential: {
        tag: "✔ Residential cleaning",
        name: "Residential",
        title: "Your home, spotless",
        desc: "Regular cleans, deep cleans, move-ins and move-outs: we bring your home back to its best.",
        items: ["Regular home cleaning", "Deep cleaning", "Move-in / move-out cleaning", "Condos, apartments & townhouses"]
      }
    },
    areas: {
      label: "Areas covered",
      tags: ["Downtown Toronto", "King West", "Liberty Village", "CityPlace", "Fort York", "Entertainment District", "Financial District", "St. Lawrence", "Kensington Market", "Chinatown", "The Annex", "Yorkville", "Little Italy", "Trinity Bellwoods", "Parkdale", "Leslieville", "Midtown"],
      more: "and more across the GTA"
    },
    contact: {
      label: "Contact",
      title: "Get Your Free Quote",
      intro: "Fill in the form or contact us directly. We respond quickly.",
      whatsapp: "WhatsApp available 24/7",
      area: "Toronto & GTA",
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
        from: "from {price}",
        size: "Home size",
        sizes: ["Studio or 1 bed, 1 bath", "2 bed, 1 bath", "2 bed, 2 bath", "3 bed, 2 bath", "4 bed or more"],
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
        addons: { oven: "Inside the oven", fridge: "Inside the fridge", cabinets: "Inside cabinets", pets: "Pet hair" },
        windows: "Interior windows and tracks",
        price: "+{price}",
        priceFrom: "from +{price}",
        included: "Included",
        fragrance: "Fragrance-free products, at no extra cost (allergies, baby at home)"
      },
      step3: {
        title: "Where and when?",
        address: "Street address",
        addressOptional: "Street address (optional)",
        unit: "Unit (optional)",
        postal: "Postal code",
        city: "City",
        date: "Preferred date",
        dateOptional: "Preferred date (optional)",
        arrival: "Arrival time",
        arrivalOptional: "Arrival time (optional)",
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
      line: "© 2026 Cleanton Express · 24/7 professional cleaning · Toronto",
      privacy: "Privacy Policy",
      legal: "Cleanton Express Cleaning · Toronto, Ontario, Canada. Prices in Canadian dollars, before tax. Services subject to availability."
    },
    privacy: {
      title: "Privacy Policy",
      updated: "Last updated: October 2026",
      close: "Close",
      sections: [
        { title: "1. Information we collect", text: "When you send a request through our website, we collect your name, phone number, email address (if you give one), address and the details of your request. We use this information only to answer your request and provide our cleaning services." },
        { title: "2. How we use your information", text: "We use your information to contact you about your request, confirm your booking and provide our services. We do not sell, trade or share it with third parties for marketing." },
        { title: "3. Data security", text: "We take reasonable steps to protect your personal information from misuse, loss and unauthorized access. Our booking form is processed securely by Formspree." },
        { title: "4. Contact us", text: "To ask a question about this policy, or to access, update or delete your personal information, call us or message us on WhatsApp at {phone}." },
        { title: "5. Compliance", text: "This policy follows Canada’s Personal Information Protection and Electronic Documents Act (PIPEDA)." }
      ]
    }
  },
  fr: {
    meta: {
      title: "Cleanton Express Cleaning | Ménage 24/7 à Toronto",
      description: "Ménage professionnel 24/7 à Toronto pour condos, appartements, maisons et entreprises. Prix dès {price}, produits écologiques, service en français et en anglais."
    },
    skip: "Aller au contenu",
    lang: { en: "EN", fr: "FR", enName: "English", frName: "Français" },
    brand: { word1: "Cleanton", word2: "Express", word3: "Cleaning", home: "Cleanton Express Cleaning, haut de page" },
    nav: {
      label: "Navigation principale",
      why: "Pourquoi nous",
      services: "Services",
      contact: "Contact",
      quote: "Devis gratuit →",
      menuOpen: "Ouvrir le menu",
      menuClose: "Fermer le menu",
      language: "Langue",
      call: "Appeler le {phone}"
    },
    hero: {
      badge: "✦ Disponible 24/7 à Toronto",
      title1: "On nettoie.",
      title2: "C’est tout.",
      sub: "Un ménage fiable, rapide et professionnel pour les logements et les entreprises, quand vous en avez besoin.",
      cta: "Obtenir un devis gratuit",
      whatsapp: "WhatsApp disponible",
      quick: "Réponse rapide"
    },
    ticker: ["Ménage 24/7", "Équipement professionnel", "Fiable et ponctuel", "Prix compétitifs", "Produits écologiques", "Centre-ville de Toronto et GTA", "Français et anglais"],
    why: {
      label: "Pourquoi choisir Cleanton Express Cleaning",
      title1: "Chaque espace.",
      title2: "Impeccable.",
      p1: "Pensé pour réagir vite. Guidé par des standards exigeants. Un espace propre reflète votre image, et votre logement ou votre entreprise ne peut pas attendre.",
      p2: "C’est pourquoi nous intervenons avec précision, professionnalisme et exigence, 24/7. Un ménage rapide, structuré et professionnel, adapté à vos besoins.",
      pillars: [
        { title: "Disponible 24/7", text: "Jour, nuit, week-ends et jours fériés : on est toujours là." },
        { title: "Produits écologiques", text: "Inclus, sans supplément." },
        { title: "Équipement pro", text: "Du matériel professionnel pour un résultat impeccable, à chaque fois." },
        { title: "Fiable et ponctuel", text: "À l’heure, soigneux et attaché à la qualité." },
        { title: "Prix compétitifs", text: "Une qualité professionnelle, avec des prix affichés d’avance." }
      ]
    },
    services: {
      label: "Nos services",
      labelBrand: "chez Cleanton",
      title: "Ce qu’on fait",
      hint: "Touchez une carte pour en savoir plus",
      more: "↺ Touchez pour en savoir plus",
      back: "↺ Retourner la carte",
      cta: "Demander un devis →",
      commercial: {
        tag: "✔ Ménage commercial",
        name: "Commercial",
        title: "Bureaux, commerces et plus",
        desc: "On s’adapte à votre horaire, pour un résultat impeccable à chaque fois.",
        items: ["Bureaux et espaces d’entreprise", "Commerces", "Gyms et studios de sport", "Bars et restaurants", "Ménage après un événement", "Remises en état pour gestionnaires et agents immobiliers"]
      },
      residential: {
        tag: "✔ Ménage résidentiel",
        name: "Résidentiel",
        title: "Votre logement, impeccable",
        desc: "Ménage régulier, ménage en profondeur, emménagement ou déménagement : on redonne à votre logement son meilleur visage.",
        items: ["Ménage régulier", "Ménage en profondeur", "Ménage d’emménagement ou de déménagement", "Condos, appartements et maisons en rangée"]
      }
    },
    areas: {
      label: "Zones desservies",
      tags: ["Centre-ville de Toronto", "King West", "Liberty Village", "CityPlace", "Fort York", "Entertainment District", "Financial District", "St. Lawrence", "Kensington Market", "Chinatown", "The Annex", "Yorkville", "Little Italy", "Trinity Bellwoods", "Parkdale", "Leslieville", "Midtown"],
      more: "et ailleurs dans la région de Toronto (GTA)"
    },
    contact: {
      label: "Contact",
      title: "Obtenez votre devis gratuit",
      intro: "Remplissez le formulaire ou contactez-nous directement. On répond rapidement.",
      whatsapp: "WhatsApp disponible 24/7",
      area: "Toronto et GTA",
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
        from: "dès {price}",
        size: "Taille du logement",
        sizes: ["Studio ou 1 chambre, 1 salle de bain", "2 chambres, 1 salle de bain", "2 chambres, 2 salles de bain", "3 chambres, 2 salles de bain", "4 chambres ou plus"],
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
        addons: { oven: "Intérieur du four", fridge: "Intérieur du frigo", cabinets: "Intérieur des armoires", pets: "Poils d’animaux" },
        windows: "Vitres intérieures et rails",
        price: "+{price}",
        priceFrom: "dès +{price}",
        included: "Inclus",
        fragrance: "Produits sans parfum, sans supplément (allergies, bébé à la maison)"
      },
      step3: {
        title: "Où et quand ?",
        address: "Adresse",
        addressOptional: "Adresse (facultative)",
        unit: "Appartement (facultatif)",
        postal: "Code postal",
        city: "Ville",
        date: "Date souhaitée",
        dateOptional: "Date souhaitée (facultative)",
        arrival: "Heure d’arrivée",
        arrivalOptional: "Heure d’arrivée (facultative)",
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
      line: "© 2026 Cleanton Express · Ménage professionnel 24/7 · Toronto",
      privacy: "Politique de confidentialité",
      legal: "Cleanton Express Cleaning · Toronto (Ontario), Canada. Prix en dollars canadiens, avant taxes. Services selon les disponibilités."
    },
    privacy: {
      title: "Politique de confidentialité",
      updated: "Dernière mise à jour : octobre 2026",
      close: "Fermer",
      sections: [
        { title: "1. Renseignements recueillis", text: "Quand vous envoyez une demande par notre site, nous recueillons votre nom, votre numéro de téléphone, votre courriel (si vous l’indiquez), votre adresse et les détails de votre demande. Nous les utilisons uniquement pour répondre à votre demande et fournir nos services de ménage." },
        { title: "2. Utilisation de vos renseignements", text: "Nous utilisons vos renseignements pour vous contacter au sujet de votre demande, confirmer votre réservation et fournir nos services. Nous ne les vendons pas, ne les échangeons pas et ne les partageons pas avec des tiers à des fins de marketing." },
        { title: "3. Sécurité des données", text: "Nous prenons des mesures raisonnables pour protéger vos renseignements personnels contre la perte, l’utilisation abusive et l’accès non autorisé. Notre formulaire est traité de façon sécurisée par Formspree." },
        { title: "4. Nous joindre", text: "Pour toute question sur cette politique, ou pour consulter, corriger ou supprimer vos renseignements personnels, appelez-nous ou écrivez-nous sur WhatsApp au {phone}." },
        { title: "5. Conformité", text: "Cette politique respecte la Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE) du Canada." }
      ]
    }
  }
};
