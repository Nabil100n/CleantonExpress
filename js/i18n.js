/*
 * Cleanton Express Cleaning : tous les textes visibles, en anglais (en) et en français (fr).
 * Règles : pas de tiret cadratin ; aucun prix écrit en dur ; pas de faux avis.
 * Les prix et pourcentages viennent de js/config.js, par ces repères :
 *   {price}  un prix formaté ($89 / 89 $)
 *   {phone}  le téléphone de config.js, (437) 717-8009
 *   {d}      une remise, {n} un nombre, {i} {n} les numéros d'étape du formulaire
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
      details: "What’s Included",
      faq: "FAQ",
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
    details: {
      label: "What’s included",
      title: "Service details",
      intro: "Same checklist every time. Deep clean includes everything in Standard, and Move-in / out includes everything in Deep.",
      levels: { standard: "✓ Standard cleaning", deep: "+ Deep clean", move: "+ Move-in / out", addons: "Available add-ons" },
      tasks: "{n} tasks",
      options: "{n} options",
      rooms: {
        title: "Bedrooms & living areas",
        standard: ["Dust and wipe table-top surfaces", "Sweep and mop floors", "Vacuum carpets", "Clean mirrors", "Dust furniture", "Clean hallways and staircases", "Clean glass on patio door and front door", "Empty bins"],
        deep: ["Clean baseboards", "Clean under furniture", "Wipe window sills", "Clean window frames", "Wipe door frames"],
        move: ["Spot clean walls", "Clean and wipe vents", "Dust the ceiling", "Wipe fans"]
      },
      kitchen: {
        title: "Kitchen",
        standard: ["Dust and wipe table-top surfaces", "Clean and shine sink", "Sweep and mop floors", "Clean and wipe appliances (exterior)", "Clean stovetop", "Clean microwave inside and out", "Empty bins"],
        deep: ["Clean kitchen baseboards", "Wipe and clean cabinets (exterior)", "Wipe and clean backsplash"],
        move: ["Spot clean walls", "Clean behind appliances", "Clean range hood", "Clean and wipe vents", "Dust the ceiling"]
      },
      bathroom: {
        title: "Bathroom",
        standard: ["Wipe and sanitize all surfaces", "Clean and shine sink", "Clean mirrors", "Clean and sanitize toilets", "Sweep and mop floors", "Clean shower faucets", "Clean and scrub tub", "Empty bins"],
        deep: ["Clean bathroom baseboards", "Clean doors and cabinet exteriors"],
        move: ["Spot clean walls", "Clean and wipe vents", "Dust the ceiling"]
      },
      extras: {
        title: "Additional areas & extras",
        addons: ["Basement area", "Extra kitchen", "Inside cabinets", "Inside fridge", "Inside oven", "Windows & tracks", "Blinds cleaning", "Load dishwasher", "Change bed sheets", "Load laundry", "Pets in home"]
      },
      notOffered: {
        title: "Services not offered",
        intro: "To ensure our cleaners can work safely and effectively, we are unable to provide the following:",
        items: ["Cleaning of animal feces", "Mold", "Exterior of the home (garage, patio, balcony)", "Moving heavy furniture or fragile items", "Crawl spaces", "Bodily fluids", "Pest removal or infestations", "Dishes", "Full wash of ceilings and walls"]
      }
    },
    faq: {
      label: "FAQ",
      title: "Questions",
      items: [
        {
          q: "What happens after I request a quote?",
          steps: [
            { title: "Step 1: Confirmation.", text: "Once you submit your request, our team will review it and contact you shortly via SMS or phone call to confirm the details." },
            { title: "Step 2: Securing your booking.", text: "You will receive a secure payment link to place a hold on your credit card. No funds are deducted at this stage. You also have the option to pay upfront via Interac e-Transfer." },
            { title: "Step 3: The cleaning & final payment.", text: "Our professional team arrives and makes your space spotless. Your card is only charged after the service is completed." }
          ]
        },
        { q: "Is the price shown final?", a: "It’s an estimate based on what you tell us. We confirm the final price with you before the cleaning, never after." },
        { q: "Do you bring the products and equipment?", a: "Yes. We bring eco-friendly products and all the supplies. If you’d rather we use your vacuum or your own products, just tell us." },
        { q: "Do I need to be home?", a: "No. Many clients leave a key with the concierge or in a lockbox. We agree on access when we confirm your booking." }
      ]
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
        note: "Tell us about your home: your estimate updates as you go.",
        service: "Which service?",
        services: {
          regular: {
            name: "Regular cleaning",
            desc: "One-time or recurring.",
            tipLabel: "What’s included in Regular cleaning",
            tip: "Dusting, floors, kitchen surfaces, stovetop, microwave, sinks, toilets, tub, mirrors and bins."
          },
          deep: {
            name: "Deep cleaning",
            desc: "Best for a first visit.",
            tipLabel: "What’s included in Deep cleaning",
            tip: "Everything in Regular, plus baseboards, under furniture, window sills and frames, door frames, cabinet fronts and backsplash."
          },
          move: { name: "Move-in / move-out", desc: "Empty home. Deep clean plus walls, vents and range hood." },
          pro: { name: "Commercial / Office", desc: "Offices, shops, property managers and realtors." }
        },
        bedrooms: "Bedrooms",
        bedroomsLess: "One bedroom less",
        bedroomsMore: "One more bedroom",
        studioNote: "A studio counts as 1 bedroom.",
        bathrooms: "Bathrooms",
        bathroomsLess: "One bathroom less",
        bathroomsMore: "One more bathroom",
        type: "Type of home",
        types: ["Condo or apartment", "Townhouse", "House"],
        frequency: "How often?",
        frequencies: { once: "One time", weekly: "Weekly", biweekly: "Every 2 weeks", monthly: "Monthly" },
        discount: "−{d}",
        frequencyNote: "The discount starts with your 2nd visit.",
        proType: "You are",
        proTypes: ["An office or shop", "A property manager", "A realtor", "Other"],
        sqft: "Square footage",
        sqftExample: "e.g. 1200",
        proClean: "Type of cleaning",
        proCleans: ["Standard", "Deep clean"],
        kitchens: "Kitchens",
        kitchensLess: "One kitchen less",
        kitchensMore: "One more kitchen",
        proBathrooms: "Bathrooms"
      },
      step2: {
        title: "Add-ons",
        note: "Everything here is optional. Tap a tile to add it.",
        extras: "Extras",
        addons: { kitchen: "Extra kitchen", fridge: "Inside fridge", oven: "Inside oven", cabinets: "Inside cabinets", blinds: "Blinds cleaning", pets: "Pets in home" },
        windows: "Inside windows & tracks",
        windowsName: "Inside windows",
        windowUpTo: "up to {n}",
        windowsNote: "Pick one. Tap it again to remove it."
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
        windows: ["Morning, 8 to 10 am", "Midday, 11 am to 1 pm", "Afternoon, 2 to 4 pm", "4 to 6 pm"],
        late: "After 6 pm",
        exact: "Exact time request",
        exactLabel: "Exact arrival time",
        timeChoose: "Choose a time",
        dateChoose: "Choose a date",
        prevMonth: "Previous month",
        nextMonth: "Next month",
        arrivalNote: "This is when we arrive, not how long it takes. A clean lasts 2 to 6 hours depending on the home and the service.",
        flexibility: "If that date is taken?",
        flexibilities: ["Only this date", "Day before or after", "Any day that week"],
        access: "How do we get in?",
        accesses: ["I’ll be home", "Concierge or front desk", "Key in a lockbox", "Buzzer code", "Other"],
        elevator: "Elevator booking needed?",
        elevators: ["Not sure", "Yes, I’ll book it", "No"],
        instructions: "Cleaning Instructions / Priorities (optional)",
        instructionsExample: "e.g. Focus on the kitchen, skip the office, buzzer code 1234"
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
        business: "Space",
        frequency: "Frequency",
        addons: "Add-ons",
        when: "When",
        address: "Address",
        access: "Access",
        elevator: "Elevator booking",
        instructions: "Instructions"
      },
      units: {
        bedroom: ["{n} bedroom", "{n} bedrooms"],
        bathroom: ["{n} bathroom", "{n} bathrooms"],
        kitchen: ["{n} kitchen", "{n} kitchens"],
        sqft: "{n} sq ft"
      },
      estimate: {
        label: "Estimated total, before tax",
        note: "We confirm your final price by message before the cleaning. Nothing to pay now.",
        then: "Then {price} per visit from your 2nd visit ({d}).",
        proLabel: "Estimate Only",
        proNote: "This is a rough estimate. We will call you shortly to discuss your needs and confirm the final quote.",
        proEmpty: "Enter your square footage",
        rate: "{sqft} × {price}",
        late: "Arrival after 6 pm",
        deep: "Deep clean",
        move: "Move-in / move-out"
      },
      privacy: "We only use your details to answer your request.",
      errors: {
        service: "Choose a service.",
        required: "This field is required.",
        sqft: "Enter the square footage, like 1200.",
        count: "Enter a number from {min} to {max}.",
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
    whatsapp: "Hi Cleanton! I’d like to book a cleaning.\nBedrooms and bathrooms: \nPreferred date: ",
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
      details: "Ce qui est inclus",
      faq: "FAQ",
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
    details: {
      label: "Ce qui est inclus",
      title: "Détail des services",
      intro: "La même checklist à chaque fois. Le ménage en profondeur comprend tout le ménage standard, et le déménagement comprend tout le ménage en profondeur.",
      levels: { standard: "✓ Ménage standard", deep: "+ Ménage en profondeur", move: "+ Déménagement", addons: "Extras disponibles" },
      tasks: "{n} tâches",
      options: "{n} options",
      rooms: {
        title: "Chambres et pièces de vie",
        standard: ["Dépoussiérer et essuyer les surfaces", "Balayer et laver les sols", "Passer l’aspirateur sur les tapis", "Nettoyer les miroirs", "Dépoussiérer les meubles", "Nettoyer les couloirs et les escaliers", "Nettoyer la vitre de la porte-fenêtre et de la porte d’entrée", "Vider les poubelles"],
        deep: ["Nettoyer les plinthes", "Nettoyer sous les meubles", "Essuyer les rebords de fenêtres", "Nettoyer les cadres de fenêtres", "Essuyer les cadres de portes"],
        move: ["Détacher les murs", "Nettoyer les bouches d’aération", "Dépoussiérer le plafond", "Essuyer les ventilateurs"]
      },
      kitchen: {
        title: "Cuisine",
        standard: ["Dépoussiérer et essuyer les surfaces", "Nettoyer et faire briller l’évier", "Balayer et laver les sols", "Nettoyer l’extérieur des électroménagers", "Nettoyer la plaque de cuisson", "Nettoyer le micro-ondes, dedans et dehors", "Vider les poubelles"],
        deep: ["Nettoyer les plinthes de la cuisine", "Nettoyer les façades d’armoires", "Nettoyer le dosseret"],
        move: ["Détacher les murs", "Nettoyer derrière les électroménagers", "Nettoyer la hotte", "Nettoyer les bouches d’aération", "Dépoussiérer le plafond"]
      },
      bathroom: {
        title: "Salle de bain",
        standard: ["Essuyer et désinfecter toutes les surfaces", "Nettoyer et faire briller le lavabo", "Nettoyer les miroirs", "Nettoyer et désinfecter les toilettes", "Balayer et laver les sols", "Nettoyer la robinetterie de douche", "Nettoyer et frotter la baignoire", "Vider les poubelles"],
        deep: ["Nettoyer les plinthes de la salle de bain", "Nettoyer les portes et l’extérieur des meubles"],
        move: ["Détacher les murs", "Nettoyer les bouches d’aération", "Dépoussiérer le plafond"]
      },
      extras: {
        title: "Autres espaces et extras",
        addons: ["Sous-sol", "Cuisine supplémentaire", "Intérieur des armoires", "Intérieur du frigo", "Intérieur du four", "Fenêtres et rails", "Nettoyage des stores", "Remplir le lave-vaisselle", "Changer les draps", "Lancer une lessive", "Animaux à la maison"]
      },
      notOffered: {
        title: "Services non offerts",
        intro: "Pour que nos agents d’entretien travaillent en sécurité et efficacement, nous ne pouvons pas offrir les services suivants :",
        items: ["Nettoyage d’excréments d’animaux", "Moisissure", "Extérieur du logement (garage, terrasse, balcon)", "Déplacement de meubles lourds ou d’objets fragiles", "Vides sanitaires", "Fluides corporels", "Extermination ou infestation de nuisibles", "Vaisselle", "Lavage complet des plafonds et des murs"]
      }
    },
    faq: {
      label: "FAQ",
      title: "Questions",
      items: [
        {
          q: "Que se passe-t-il après ma demande de devis ?",
          steps: [
            { title: "Étape 1 : Confirmation.", text: "Une fois votre demande envoyée, notre équipe l’examine et vous contacte rapidement par texto ou par téléphone pour confirmer les détails." },
            { title: "Étape 2 : Garantir votre réservation.", text: "Vous recevez un lien de paiement sécurisé pour bloquer un montant sur votre carte de crédit. Aucun montant n’est prélevé à cette étape. Vous pouvez aussi payer d’avance par virement Interac." },
            { title: "Étape 3 : Le ménage et le paiement final.", text: "Notre équipe professionnelle arrive et rend votre espace impeccable. Votre carte n’est débitée qu’une fois le service terminé." }
          ]
        },
        { q: "Le prix affiché est-il définitif ?", a: "C’est une estimation selon ce que vous nous indiquez. On vous confirme le prix final avant le ménage, jamais après." },
        { q: "Apportez-vous les produits et le matériel ?", a: "Oui. On apporte des produits écologiques et tout le matériel. Vous préférez qu’on utilise votre aspirateur ou vos produits ? Dites-le-nous." },
        { q: "Dois-je être présent ?", a: "Non. Beaucoup de clients laissent une clé au concierge ou dans une boîte à clé. On fixe l’accès au moment de confirmer." }
      ]
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
        note: "Décrivez votre logement : votre estimation se met à jour au fur et à mesure.",
        service: "Quel service ?",
        services: {
          regular: {
            name: "Ménage régulier",
            desc: "Ponctuel ou récurrent.",
            tipLabel: "Ce que comprend le ménage régulier",
            tip: "Poussière, sols, surfaces de cuisine, plaque de cuisson, micro-ondes, éviers, toilettes, baignoire, miroirs et poubelles."
          },
          deep: {
            name: "Ménage en profondeur",
            desc: "Idéal pour une première visite.",
            tipLabel: "Ce que comprend le ménage en profondeur",
            tip: "Tout le ménage régulier, plus plinthes, dessous des meubles, rebords et cadres de fenêtres, cadres de portes, façades d’armoires et dosseret."
          },
          move: { name: "Déménagement", desc: "Logement vide. Ménage en profondeur, plus murs, bouches d’aération et hotte." },
          pro: { name: "Commercial / bureau", desc: "Bureaux, commerces, gestionnaires et agents immobiliers." }
        },
        bedrooms: "Chambres",
        bedroomsLess: "Une chambre de moins",
        bedroomsMore: "Une chambre de plus",
        studioNote: "Un studio compte comme 1 chambre.",
        bathrooms: "Salles de bain",
        bathroomsLess: "Une salle de bain de moins",
        bathroomsMore: "Une salle de bain de plus",
        type: "Type de logement",
        types: ["Condo ou appartement", "Maison en rangée", "Maison"],
        frequency: "À quelle fréquence ?",
        frequencies: { once: "Une fois", weekly: "Chaque semaine", biweekly: "Aux deux semaines", monthly: "Chaque mois" },
        discount: "−{d}",
        frequencyNote: "Le rabais s’applique dès votre 2e visite.",
        proType: "Vous êtes",
        proTypes: ["Bureau ou commerce", "Gestionnaire immobilier", "Agent immobilier", "Autre"],
        sqft: "Superficie (pi²)",
        sqftExample: "ex. 1200",
        proClean: "Type de ménage",
        proCleans: ["Standard", "En profondeur"],
        kitchens: "Cuisines",
        kitchensLess: "Une cuisine de moins",
        kitchensMore: "Une cuisine de plus",
        proBathrooms: "Salles de bain"
      },
      step2: {
        title: "Extras",
        note: "Tout est facultatif. Touchez une tuile pour l’ajouter.",
        extras: "Extras",
        addons: { kitchen: "Cuisine supplémentaire", fridge: "Intérieur du frigo", oven: "Intérieur du four", cabinets: "Intérieur des armoires", blinds: "Nettoyage des stores", pets: "Animaux à la maison" },
        windows: "Vitres intérieures et rails",
        windowsName: "Vitres intérieures",
        windowUpTo: "jusqu’à {n}",
        windowsNote: "Choisissez-en une. Touchez-la de nouveau pour la retirer."
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
        windows: ["Matin, de 8 h à 10 h", "Midi, de 11 h à 13 h", "Après-midi, de 14 h à 16 h", "De 16 h à 18 h"],
        late: "Après 18 h",
        exact: "Heure précise",
        exactLabel: "Heure d’arrivée précise",
        timeChoose: "Choisir une heure",
        dateChoose: "Choisir une date",
        prevMonth: "Mois précédent",
        nextMonth: "Mois suivant",
        arrivalNote: "C’est l’heure à laquelle on arrive, pas la durée. Un ménage dure de 2 à 6 h selon le logement et le service.",
        flexibility: "Si cette date est prise ?",
        flexibilities: ["Seulement cette date", "La veille ou le lendemain", "N’importe quel jour de la semaine"],
        access: "Comment on entre ?",
        accesses: ["Je serai là", "Concierge ou réception", "Clé dans une boîte à clé", "Code d’interphone", "Autre"],
        elevator: "Réservation d’ascenseur ?",
        elevators: ["Je ne sais pas", "Oui, je la réserve", "Non"],
        instructions: "Consignes de ménage / priorités (facultatif)",
        instructionsExample: "ex. Insister sur la cuisine, ne pas faire le bureau, code d’interphone 1234"
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
        business: "Local",
        frequency: "Fréquence",
        addons: "Extras",
        when: "Quand",
        address: "Adresse",
        access: "Accès",
        elevator: "Réservation d’ascenseur",
        instructions: "Consignes"
      },
      units: {
        bedroom: ["{n} chambre", "{n} chambres"],
        bathroom: ["{n} salle de bain", "{n} salles de bain"],
        kitchen: ["{n} cuisine", "{n} cuisines"],
        sqft: "{n} pi²"
      },
      estimate: {
        label: "Total estimé, avant taxes",
        note: "On vous confirme le prix final par message avant le ménage. Rien à payer maintenant.",
        then: "Puis {price} par visite dès votre 2e visite ({d}).",
        proLabel: "Prix indicatif",
        proNote: "Ceci est une estimation approximative. Nous vous appellerons rapidement pour discuter de vos besoins et confirmer le prix final.",
        proEmpty: "Indiquez la superficie",
        rate: "{sqft} × {price}",
        late: "Arrivée après 18 h",
        deep: "Ménage en profondeur",
        move: "Déménagement"
      },
      privacy: "Vos coordonnées servent uniquement à répondre à votre demande.",
      errors: {
        service: "Choisissez un service.",
        required: "Ce champ est obligatoire.",
        sqft: "Indiquez la superficie, par exemple 1200.",
        count: "Entrez un nombre de {min} à {max}.",
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
    whatsapp: "Bonjour Cleanton ! J’aimerais réserver un ménage.\nChambres et salles de bain : \nDate souhaitée : ",
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
