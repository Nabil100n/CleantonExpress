/*
 * C for Cleaning : tous les textes visibles, en anglais (en) et en français (fr).
 * Règles : tiret cadratin avec modération ; aucun prix écrit en dur ; pas de faux avis ; jamais de mention « vingt-quatre sur sept ».
 * Les prix et pourcentages viennent de js/config.js, par ces repères :
 *   {price}  un prix formaté ($89 / 89 $)
 *   {phone}  le téléphone de config.js, (437) 717-8009
 *   {d}      une remise, {n} un nombre, {i} {n} les numéros d'étape du formulaire
 */
/* ==================== À REMPLIR ====================
   Textes provisoires de la section « Pourquoi nous choisir ». */
const FILL_IN = {
  en: {
    hours: "Requests accepted at any hour, reply as fast as possible.",
    // TODO : remplacer par la mention du produit certifié une fois les produits choisis
    productsTitle: "Cleaning products included",
    productsText: "We bring everything, at no extra cost."
  },
  fr: {
    hours: "Demandes acceptées à toute heure, réponse au plus vite.",
    // TODO : remplacer par la mention du produit certifié une fois les produits choisis
    productsTitle: "Produits inclus",
    productsText: "Nous apportons tout, sans frais supplémentaires."
  }
};

const I18N = {
  en: {
    meta: {
      title: "C for Cleaning | Cleaning services in Toronto",
      description: "Professional cleaning for condos, apartments, homes and businesses. Fast availability across Toronto, prices from {price}, eco-friendly products, service in English and French."
    },
    skip: "Skip to content",
    lang: { en: "EN", fr: "FR", enName: "English", frName: "Français" },
    brand: { word1: "C", word2: "for", word3: "Cleaning", home: "C for Cleaning, back to top" },
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
      badge: "✦ Fast availability across Toronto",
      title1: "We clean.",
      title2: "That’s it.",
      sub: "Reliable, fast and professional cleaning for homes and businesses, whenever you need us.",
      cta: "Get a Free Quote",
      whatsapp: "WhatsApp available",
      quick: "Quick response"
    },
    ticker: ["Fast availability across Toronto", "Professional equipment", "Reliable & punctual", "Competitive pricing", "Eco-friendly products", "Downtown Toronto & GTA", "English & French"],
    why: {
      label: "Why choose us",
      title: "Fast. Fair. Personally checked.",
      text: "Moving out, turning over a unit, or need it done on short notice? You get an instant estimate, a confirmed price within 2 hours, and a founder who actually reads your feedback.",
      cards: [
        { title: "Confirmed within 2 hours", text: "Instant estimate online, confirmation by text or WhatsApp. " + FILL_IN.en.hours },
        { title: "Honest, upfront prices", text: "“From” prices on the site, final price before we start." },
        { title: "Your feedback runs the business", text: "Anything under 5 stars, we call you and make it right." },
        { title: "Owner on every job", text: "Our founder cleans or checks every booking personally." },
        { title: "Photo report on request", text: "Ideal for move-outs, landlords and property managers." },
        { title: FILL_IN.en.productsTitle, text: FILL_IN.en.productsText }
      ]
    },
    trust: { insured: "Insured — certificate of insurance available on request." },
    cta: { estimate: "Get my instant estimate", whatsapp: "WhatsApp us" },
    services: {
      label: "Our services",
      labelBrand: "at C for Cleaning",
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
        items: ["Offices & corporate spaces", "Retail stores", "Gyms & fitness studios", "Bars & restaurants", "After-event cleaning", "Unit turnovers for property managers & realtors"],
        price: "Estimate by square foot, confirmed by phone"
      },
      residential: {
        tag: "✔ Residential cleaning",
        name: "Residential",
        title: "Your home, spotless",
        desc: "Regular cleans, deep cleans, move-ins and move-outs: we bring your home back to its best.",
        items: ["Regular home cleaning", "Deep cleaning", "Move-in / move-out cleaning", "Condos, apartments & townhouses"],
        price: "From {price} · based on your bedrooms and bathrooms · get your estimate in 2 minutes"
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
      intro: "Same checklist every time. Deep clean includes everything in Standard, and Move-in / out includes everything in Deep. Good to know: bathrooms are not included in the base package. Add each one in the form and it’s added to your estimate.",
      levels: { standard: "✓ Standard cleaning", deep: "+ Deep clean", move: "+ Move-in / out", addons: "Available add-ons" },
      formulas: {
        standard: {
          short: "Upkeep of every room",
          text: "Every room: surfaces dusted and wiped, floors swept and mopped, carpets vacuumed, mirrors cleaned, bins emptied. Kitchen: sink, stovetop, microwave and appliance exteriors. Bathrooms are not part of the base package: each one you add is cleaned and sanitized (toilet, sink, tub, shower faucets)."
        },
        deep: {
          short: "Standard + the details",
          text: "Everything in Standard, plus the details: baseboards, under furniture, window sills and frames, door frames, kitchen cabinet fronts and backsplash, bathroom doors and cabinet fronts. Best for a first visit."
        },
        move: {
          short: "Deep + an empty home",
          text: "Everything in Deep, for an empty home before or after a move: walls spot-cleaned, vents, ceilings and fans dusted, behind the appliances and the range hood. Inside the fridge, oven and cabinets are extras."
        },
        pro: {
          name: "Commercial / Office",
          short: "Offices, shops and units",
          text: "Offices, shops, gyms, restaurants and units between tenants. Estimate by square foot, kitchens included, bathrooms added. We confirm the scope and the price with you by phone."
        }
      },
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
        addons: ["Extra kitchen", "Inside cabinets", "Inside fridge", "Inside oven", "Windows & tracks", "Blinds cleaning", "Change bed sheets + laundry", "Pets in home"]
      },
      notOffered: {
        title: "Services not offered",
        intro: "To ensure our cleaners can work safely and effectively, we are unable to provide the following:",
        items: ["Cleaning of animal feces", "Mold", "Garage, patio or balcony", "Moving heavy or fragile items", "Crawl spaces", "Bodily fluids", "Pest removal or infestations", "Dishes", "Full wash of ceilings and walls"]
      }
    },
    results: {
      label: "Results",
      title: "Before and after",
      sub: "A recent job in Toronto.",
      before: "Before",
      after: "After",
      compare: "Compare before and after",
      altBefore: "Before the cleaning",
      altAfter: "After the cleaning",
      example: "Example",
      exampleNote: "Example image: photos of a real job coming soon.",
      reviewsTitle: "Client reviews",
      sampleBadge: "Sample review",
      sampleText: "This is where a real client review will appear, word for word. It will show the client’s first name and last initial, the service and the month.",
      sampleName: "First name L.",
      sampleMeta: "Service · Month",
      rating: "Rated {n} out of 5",
      google: "See all reviews on Google",
      launch: "We’re just getting started — be one of our first clients."
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
        { q: "I live in a studio, what do I pick?", a: "Set Bedrooms to 0: 0 bedrooms means a studio. Then choose your number of bathrooms." },
        { q: "Do you offer a discount for regular cleaning?", a: "If you’d like a regular cleaning (weekly, every 2 weeks or monthly), tell us in the form or by message and we can talk about a discount." },
        { q: "Do you bring the products and equipment?", a: "Yes. We bring eco-friendly products and all the supplies. If you’d rather we use your vacuum or your own products, just tell us." },
        { q: "Do I need to be home?", a: "No. Many clients leave a key with the concierge or in a lockbox. We agree on access when we confirm your booking." }
      ]
    },
    contact: {
      label: "Contact",
      title: "Get Your Free Quote",
      intro: "Fill in the form or contact us directly. We respond quickly.",
      whatsapp: "WhatsApp: requests at any hour",
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
        bathrooms: "Bathrooms",
        bathroomsLess: "One bathroom less",
        bathroomsMore: "One more bathroom",
        halfBathrooms: "Half bathrooms",
        halfBathroomsLess: "One half bathroom less",
        halfBathroomsMore: "One more half bathroom",
        halfNote: "Toilet and sink, no shower.",
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
        kitchens: "Kitchens",
        kitchensLess: "One kitchen less",
        kitchensMore: "One more kitchen",
        kitchensNote: "Included in the price.",
        proBathrooms: "Bathrooms"
      },
      step2: {
        title: "Add-ons",
        note: "Everything here is optional. Tap a tile to add it.",
        extras: "Extras",
        addons: { kitchen: "Extra kitchen", fridge: "Inside fridge", oven: "Inside oven", cabinets: "Inside cabinets", blinds: "Blinds cleaning", pets: "Pets in home", sheetsLaundry: "Change bed sheets + laundry" },
        blindsLess: "One window with blinds less",
        blindsMore: "One more window with blinds",
        blindsHint: "windows with blinds",
        windows: "Inside windows & tracks",
        windowsName: "Inside windows",
        windowTierUpTo: "up to {to}",
        windowTierRange: "{from} to {to}",
        windowTierMore: "more than {n}",
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
        studio: "Studio",
        bathroom: ["{n} bathroom", "{n} bathrooms"],
        halfBathroom: ["{n} half bathroom", "{n} half bathrooms"],
        kitchen: ["{n} kitchen", "{n} kitchens"],
        window: ["{n} window", "{n} windows"],
        sqft: "{n} sq ft"
      },
      estimate: {
        label: "Estimated total, before tax",
        note: "We confirm your final price by message before the cleaning. Nothing to pay now.",
        then: "Then {price} per visit from your 2nd visit ({d}).",
        withTax: "{price} with tax ({rate} HST)",
        proLabel: "Estimate Only",
        proNote: "This is a rough estimate. We will call you shortly to discuss your needs and confirm the final quote.",
        proEmpty: "Enter your square footage",
        rate: "{sqft} × {price}",
        late: "Arrival after 6 pm",
        blinds: "Blinds cleaning ({n} × {price})",
        minimum: "Minimum per visit",
        quote: "Inside windows, {tier}: price on quote.",
        detailLabel: "How this price is calculated",
        base: "{service} · {home}",
        total: "Estimated total, before tax",
        discount: "Discount {d}, from the 2nd visit",
        fine: "Final price confirmed by message before the cleaning.",
        proFine: "Final price confirmed by phone before the cleaning."
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
    whatsapp: "Hi C for Cleaning! I’d like to book a cleaning.\nBedrooms and bathrooms: \nPreferred date: ",
    footer: {
      line: "© 2026 C for Cleaning · Professional cleaning · Toronto",
      privacy: "Privacy Policy",
      legal: "C for Cleaning · Toronto, Ontario, Canada. Prices in Canadian dollars, before tax. Services subject to availability."
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
      title: "C for Cleaning | Ménage à Toronto",
      description: "Ménage professionnel pour condos, appartements, maisons et entreprises. Disponibles rapidement partout à Toronto, prix dès {price}, produits écologiques, service en français et en anglais."
    },
    skip: "Aller au contenu",
    lang: { en: "EN", fr: "FR", enName: "English", frName: "Français" },
    brand: { word1: "C", word2: "for", word3: "Cleaning", home: "C for Cleaning, haut de page" },
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
      badge: "✦ Disponibles rapidement partout à Toronto",
      title1: "On nettoie.",
      title2: "C’est tout.",
      sub: "Un ménage fiable, rapide et professionnel pour les logements et les entreprises, quand vous en avez besoin.",
      cta: "Obtenir un devis gratuit",
      whatsapp: "WhatsApp disponible",
      quick: "Réponse rapide"
    },
    ticker: ["Disponibles rapidement partout à Toronto", "Équipement professionnel", "Fiable et ponctuel", "Prix compétitifs", "Produits écologiques", "Centre-ville de Toronto et GTA", "Français et anglais"],
    why: {
      label: "Pourquoi nous choisir",
      title: "Rapides. Justes. Vérifiés par le fondateur.",
      text: "Déménagement, remise en location ou besoin d’un ménage rapidement ? Estimation instantanée, prix confirmé sous 2 h, et un fondateur qui lit vraiment vos retours.",
      cards: [
        { title: "Confirmé sous 2 h", text: "Estimation instantanée en ligne, confirmation par SMS ou WhatsApp. " + FILL_IN.fr.hours },
        { title: "Des prix clairs, sans surprise", text: "Prix « à partir de » affichés, prix final confirmé avant l’intervention." },
        { title: "Vos retours pilotent l’entreprise", text: "En dessous de 5 étoiles, nous vous appelons et corrigeons." },
        { title: "Le fondateur sur chaque mission", text: "Notre fondateur réalise ou contrôle personnellement chaque intervention." },
        { title: "Rapport photo sur demande", text: "Idéal pour les déménagements, propriétaires et gestionnaires immobiliers." },
        { title: FILL_IN.fr.productsTitle, text: FILL_IN.fr.productsText }
      ]
    },
    trust: { insured: "Assurés — attestation d’assurance disponible sur demande." },
    cta: { estimate: "Obtenir mon estimation", whatsapp: "Écrire sur WhatsApp" },
    services: {
      label: "Nos services",
      labelBrand: "chez C for Cleaning",
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
        items: ["Bureaux et espaces d’entreprise", "Commerces", "Gyms et studios de sport", "Bars et restaurants", "Ménage après un événement", "Remises en état pour gestionnaires et agents immobiliers"],
        price: "Estimation au pied carré, confirmée par téléphone"
      },
      residential: {
        tag: "✔ Ménage résidentiel",
        name: "Résidentiel",
        title: "Votre logement, impeccable",
        desc: "Ménage régulier, ménage en profondeur, emménagement ou déménagement : on redonne à votre logement son meilleur visage.",
        items: ["Ménage régulier", "Ménage en profondeur", "Ménage d’emménagement ou de déménagement", "Condos, appartements et maisons en rangée"],
        price: "Dès {price} · selon vos chambres et salles de bain · obtenez votre estimation en 2 minutes"
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
      intro: "La même checklist à chaque fois. Le ménage en profondeur comprend tout le ménage standard, et le déménagement comprend tout le ménage en profondeur. Bon à savoir : les salles de bain ne sont pas comprises dans le forfait de base. Indiquez-les dans le formulaire, chacune s’ajoute à votre estimation.",
      levels: { standard: "✓ Ménage standard", deep: "+ Ménage en profondeur", move: "+ Déménagement", addons: "Extras disponibles" },
      formulas: {
        standard: {
          short: "L’entretien de chaque pièce",
          text: "Toutes les pièces : surfaces dépoussiérées et essuyées, sols balayés et lavés, tapis aspirés, miroirs nettoyés, poubelles vidées. Cuisine : évier, plaque de cuisson, micro-ondes et extérieur des appareils. Les salles de bain ne sont pas comprises dans le forfait de base : chacune que vous ajoutez est nettoyée et désinfectée (toilette, lavabo, baignoire, robinetterie de douche)."
        },
        deep: {
          short: "Le standard + les détails",
          text: "Tout le ménage standard, plus les détails : plinthes, dessous des meubles, rebords et cadres de fenêtres, cadres de portes, façades des placards et crédence de la cuisine, portes et façades de meubles de la salle de bain. Idéal pour une première visite."
        },
        move: {
          short: "Le profond + un logement vide",
          text: "Tout le ménage en profondeur, pour un logement vide avant ou après un déménagement : taches sur les murs, grilles d’aération, plafonds et ventilateurs dépoussiérés, derrière les appareils et la hotte. L’intérieur du frigo, du four et des placards est en extra."
        },
        pro: {
          name: "Commercial / bureau",
          short: "Bureaux, commerces et logements",
          text: "Bureaux, commerces, salles de sport, restaurants et logements entre deux locataires. Estimation au pied carré, cuisines comprises, salles de bain en plus. On confirme avec vous le contenu et le prix par téléphone."
        }
      },
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
        addons: ["Cuisine supplémentaire", "Intérieur des armoires", "Intérieur du frigo", "Intérieur du four", "Fenêtres et rails", "Nettoyage des stores", "Changer les draps + lessive", "Animaux à la maison"]
      },
      notOffered: {
        title: "Services non offerts",
        intro: "Pour que nos agents d’entretien travaillent en sécurité et efficacement, nous ne pouvons pas offrir les services suivants :",
        items: ["Nettoyage d’excréments d’animaux", "Moisissure", "Garage, terrasse ou balcon", "Déplacer des objets lourds ou fragiles", "Vides sanitaires", "Fluides corporels", "Nuisibles ou infestations", "Vaisselle", "Lavage complet des murs et plafonds"]
      }
    },
    results: {
      label: "Résultats",
      title: "Avant et après",
      sub: "Une mission récente à Toronto.",
      before: "Avant",
      after: "Après",
      compare: "Comparer avant et après",
      altBefore: "Avant le ménage",
      altAfter: "Après le ménage",
      example: "Exemple",
      exampleNote: "Image d’exemple : les photos d’une vraie mission arrivent bientôt.",
      reviewsTitle: "Avis clients",
      sampleBadge: "Exemple d’avis",
      sampleText: "Ici s’affichera un vrai avis client, mot pour mot. On y verra le prénom et l’initiale du client, le service et le mois.",
      sampleName: "Prénom I.",
      sampleMeta: "Service · Mois",
      rating: "Note de {n} sur 5",
      google: "Voir tous les avis sur Google",
      launch: "Nous démarrons — devenez l’un de nos premiers clients."
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
        { q: "J’habite un studio, je choisis quoi ?", a: "Mettez 0 dans Chambres : 0 chambre correspond à un studio. Indiquez ensuite votre nombre de salles de bain." },
        { q: "Faites-vous une remise pour un ménage régulier ?", a: "Si vous souhaitez un ménage régulier (chaque semaine, aux deux semaines ou chaque mois), dites-le-nous dans le formulaire ou par message : on peut parler d’une remise." },
        { q: "Apportez-vous les produits et le matériel ?", a: "Oui. On apporte des produits écologiques et tout le matériel. Vous préférez qu’on utilise votre aspirateur ou vos produits ? Dites-le-nous." },
        { q: "Dois-je être présent ?", a: "Non. Beaucoup de clients laissent une clé au concierge ou dans une boîte à clé. On fixe l’accès au moment de confirmer." }
      ]
    },
    contact: {
      label: "Contact",
      title: "Obtenez votre devis gratuit",
      intro: "Remplissez le formulaire ou contactez-nous directement. On répond rapidement.",
      whatsapp: "WhatsApp : demandes à toute heure",
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
        bathrooms: "Salles de bain",
        bathroomsLess: "Une salle de bain de moins",
        bathroomsMore: "Une salle de bain de plus",
        halfBathrooms: "Demi-salles de bain",
        halfBathroomsLess: "Une demi-salle de bain de moins",
        halfBathroomsMore: "Une demi-salle de bain de plus",
        halfNote: "Toilette et lavabo, sans douche.",
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
        kitchens: "Cuisines",
        kitchensLess: "Une cuisine de moins",
        kitchensMore: "Une cuisine de plus",
        kitchensNote: "Comprises dans le prix.",
        proBathrooms: "Salles de bain"
      },
      step2: {
        title: "Extras",
        note: "Tout est facultatif. Touchez une tuile pour l’ajouter.",
        extras: "Extras",
        addons: { kitchen: "Cuisine supplémentaire", fridge: "Intérieur du frigo", oven: "Intérieur du four", cabinets: "Intérieur des armoires", blinds: "Nettoyage des stores", pets: "Animaux à la maison", sheetsLaundry: "Changer les draps + lessive" },
        blindsLess: "Une fenêtre avec stores de moins",
        blindsMore: "Une fenêtre avec stores de plus",
        blindsHint: "fenêtres avec stores",
        windows: "Vitres intérieures et rails",
        windowsName: "Vitres intérieures",
        windowTierUpTo: "jusqu’à {to}",
        windowTierRange: "de {from} à {to}",
        windowTierMore: "plus de {n}",
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
        studio: "Studio",
        bathroom: ["{n} salle de bain", "{n} salles de bain"],
        halfBathroom: ["{n} demi-salle de bain", "{n} demi-salles de bain"],
        kitchen: ["{n} cuisine", "{n} cuisines"],
        window: ["{n} fenêtre", "{n} fenêtres"],
        sqft: "{n} pi²"
      },
      estimate: {
        label: "Total estimé, avant taxes",
        note: "On vous confirme le prix final par message avant le ménage. Rien à payer maintenant.",
        then: "Puis {price} par visite dès votre 2e visite ({d}).",
        withTax: "{price} taxes incluses (TVH {rate})",
        proLabel: "Prix indicatif",
        proNote: "Ceci est une estimation approximative. Nous vous appellerons rapidement pour discuter de vos besoins et confirmer le prix final.",
        proEmpty: "Indiquez la superficie",
        rate: "{sqft} × {price}",
        late: "Arrivée après 18 h",
        blinds: "Nettoyage des stores ({n} × {price})",
        minimum: "Minimum par visite",
        quote: "Vitres intérieures, {tier} : prix sur devis.",
        detailLabel: "Détail du calcul du prix",
        base: "{service} · {home}",
        total: "Total estimé, avant taxes",
        discount: "Remise {d}, à partir de la 2e visite",
        fine: "Prix final confirmé par message avant le ménage.",
        proFine: "Prix final confirmé par appel avant le ménage."
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
    whatsapp: "Bonjour C for Cleaning ! J’aimerais réserver un ménage.\nChambres et salles de bain : \nDate souhaitée : ",
    footer: {
      line: "© 2026 C for Cleaning · Ménage professionnel · Toronto",
      privacy: "Politique de confidentialité",
      legal: "C for Cleaning · Toronto (Ontario), Canada. Prix en dollars canadiens, avant taxes. Services selon les disponibilités."
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
