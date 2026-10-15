/*
 * Cleanton Express Cleaning : comportements de la page.
 * Langue, menu mobile, bandeau défilant, cartes Services à retourner, détail des services, FAQ,
 * liens ?service=, réservation en plusieurs étapes avec estimation du prix, politique de confidentialité.
 * Aucun texte ni prix ici : les textes viennent de js/i18n.js, les prix de js/config.js.
 */
(function () {
  "use strict";

  const LANGS = ["en", "fr"];
  const STORAGE_KEY = "cleanton-lang";
  const FREQ_VALUES = { weekly: "Weekly", biweekly: "Bi-weekly", monthly: "Monthly" };
  const LINK_TO_SERVICE = { regular: "regular", deep: "deep", move: "move", recurring: "regular", pro: "pro" };
  const POSTAL_CODE = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
  const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let lang = "en";
  let currentStep = 1;
  let sending = false;
  let sendFailed = false;
  const fieldErrors = new Map();

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  /* ---------- Textes ---------- */

  function lookup(dict, path) {
    return path.split(".").reduce((node, key) => (node == null ? undefined : node[key]), dict);
  }

  // Espaces insécables du français : avant « : ; ? ! », entre un nombre et son unité
  function frenchTypography(text) {
    return text
      .replace(/ ([:;?!»])/g, " $1")
      .replace(/« /g, "« ")
      .replace(/(\d) (\d{3})(?!\d)/g, "$1 $2")
      .replace(/(\d) (h|%|\$|pi²)(?![\w])/g, "$1 $2");
  }

  function fill(text, vars, l) {
    const out = vars ? text.replace(/\{(\w+)\}/g, (match, key) => (key in vars ? vars[key] : match)) : text;
    return l === "fr" ? frenchTypography(out) : out;
  }

  function t(key, vars, l) {
    l = l || lang;
    let value = lookup(I18N[l], key);
    if (value === undefined) value = lookup(I18N.en, key);
    if (value === undefined) return "";
    if (Array.isArray(value)) return value.map((item) => (typeof item === "string" ? fill(item, vars, l) : item));
    return typeof value === "string" ? fill(value, vars, l) : value;
  }

  /* ---------- Prix, nombres, pourcentages, téléphone, courriel ---------- */

  function num(n, l) {
    return new Intl.NumberFormat((l || lang) === "fr" ? "fr-CA" : "en-CA").format(n);
  }

  // « $165 » en anglais, « 165 $ » en français (espace insécable)
  function money(amount, l) {
    l = l || lang;
    return l === "fr" ? num(amount, l) + " $" : "$" + num(amount, l);
  }

  // Tarif avec cents : « $0.20 » / « 0,20 $ »
  function moneyRate(amount, l) {
    l = l || lang;
    const fixed = amount.toFixed(2);
    return l === "fr" ? fixed.replace(".", ",") + " $" : "$" + fixed;
  }

  // Montant avec cents : « $100.57 » / « 100,57 $ »
  function moneyCents(amount, l) {
    l = l || lang;
    const value = new Intl.NumberFormat(l === "fr" ? "fr-CA" : "en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount);
    return l === "fr" ? value + "\u00A0$" : "$" + value;
  }

  // Prix après taxes (TVH), arrondi au cent
  function withTax(amount) {
    return Math.round(amount * (1 + CONFIG.taxRate) * 100) / 100;
  }

  function percent(rate, l) {
    const value = Math.round(rate * 100);
    return (l || lang) === "fr" ? value + " %" : value + "%";
  }

  function rateVars(l) {
    return {
      weekly: percent(CONFIG.recurring.weekly, l),
      biweekly: percent(CONFIG.recurring.biweekly, l),
      monthly: percent(CONFIG.recurring.monthly, l)
    };
  }

  // Une pièce comptée « 1re, puis chacune en plus » ; 0 pièce = 0 $
  function tierPrice(count, tier) {
    return count > 0 ? tier.first + (count - 1) * tier.extra : 0;
  }

  // Prix des pièces : départ (studio) + chambres + salles de bain + demi-salles de bain
  function roomsPrice(bedrooms, bathrooms, halfBathrooms) {
    const r = CONFIG.residential;
    return r.base + tierPrice(bedrooms, r.bedrooms) + tierPrice(bathrooms, r.bathrooms) + tierPrice(halfBathrooms || 0, r.halfBathrooms);
  }

  // Prix de départ d'un service : studio sans salle de bain
  function startingPrice(svc) {
    return roomsPrice(0, 0, 0) + (CONFIG.serviceSurcharge[svc] || 0);
  }

  const phoneDigits = CONFIG.phone.replace(/\D/g, "");

  function phoneDisplay() {
    const d = phoneDigits.slice(-10);
    return "(" + d.slice(0, 3) + ") " + d.slice(3, 6) + "-" + d.slice(6);
  }

  function commonVars(l) {
    return Object.assign(rateVars(l), {
      phone: phoneDisplay(),
      price: money(startingPrice("regular"), l)
    });
  }

  function whatsappHref() {
    const message = lookup(I18N[lang], "whatsapp") || lookup(I18N.en, "whatsapp");
    return "https://wa.me/" + phoneDigits + "?text=" + encodeURIComponent(message);
  }

  // « 1 bedroom », « 2 bedrooms » ; en français, 0 et 1 restent au singulier
  function unit(key, n, l) {
    l = l || lang;
    const forms = t("form.units." + key, { n: num(n, l) }, l);
    if (!Array.isArray(forms)) return forms;
    const singular = l === "fr" ? n <= 1 : n === 1;
    return singular ? forms[0] : forms[1];
  }

  /* ---------- Petits outils DOM ---------- */

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function setMeta(selector, value) {
    const node = $(selector);
    if (node) node.setAttribute("content", value);
  }

  /* ---------- Langue ---------- */

  function detectLang() {
    const param = (new URLSearchParams(location.search).get("lang") || "").toLowerCase();
    if (LANGS.includes(param)) return param;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (LANGS.includes(saved)) return saved;
    } catch (e) { /* stockage indisponible */ }
    const browser = (navigator.languages && navigator.languages[0]) || navigator.language || "";
    return /^fr/i.test(browser) ? "fr" : "en";
  }

  function setLang(next) {
    if (!LANGS.includes(next) || next === lang) return;
    lang = next;
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* stockage indisponible */ }
    const url = new URL(location.href);
    if (url.searchParams.has("lang")) {
      url.searchParams.set("lang", next);
      history.replaceState(history.state, "", url);
    }
    render();
  }

  /* ---------- Rendu des textes ---------- */

  function render() {
    const vars = commonVars();
    document.documentElement.lang = lang;
    document.title = t("meta.title");
    setMeta('meta[name="description"]', t("meta.description", vars));
    setMeta('meta[property="og:title"]', t("meta.title"));
    setMeta('meta[property="og:description"]', t("meta.description", vars));
    setMeta('meta[property="og:locale"]', lang === "fr" ? "fr_CA" : "en_CA");
    setMeta('meta[property="og:locale:alternate"]', lang === "fr" ? "en_CA" : "fr_CA");

    $$("[data-i18n]").forEach((node) => { node.textContent = t(node.dataset.i18n, vars); });
    $$("[data-i18n-attr]").forEach((node) => {
      node.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        if (attr && key) node.setAttribute(attr, t(key, vars));
      });
    });
    $$("[data-i18n-list]").forEach((list) => {
      list.replaceChildren(...t(list.dataset.i18nList, vars).map((text) => el("li", "", text)));
    });

    $$("[data-set-lang]").forEach((btn) => btn.setAttribute("aria-pressed", String(btn.dataset.setLang === lang)));
    $$("[data-phone-text]").forEach((node) => { node.textContent = phoneDisplay(); });
    $$("[data-phone-link]").forEach((node) => { node.href = "tel:+" + phoneDigits; });
    $$("[data-whatsapp-link]").forEach((node) => { node.href = whatsappHref(); });
    $$("[data-email-text]").forEach((node) => { node.textContent = CONFIG.email; });
    $$("[data-email-link]").forEach((node) => { node.href = "mailto:" + CONFIG.email; });

    syncMenuLabel();
    renderTicker();
    renderAreas();
    renderDetailCounts();
    renderResults();
    renderFaq();
    renderPrivacy();
    renderFormLabels();
    refreshForm();
    fieldErrors.forEach((key, name) => setError(name, key));
    updateEmailLabel();
    if (sendFailed) showSendError(true);
    if (sending) $("[data-submit]", form).textContent = t("form.sending");
  }

  /* ---------- Bandeau défilant, zones, politique de confidentialité ---------- */

  // Le bandeau est décoratif (aria-hidden) ; la liste est répétée pour défiler sans couture
  function renderTicker() {
    const track = $("[data-ticker]");
    if (!track) return;
    const items = t("ticker");
    track.replaceChildren(...items.concat(items).map((text) => el("span", "", text)));
  }

  function renderAreas() {
    const node = $("[data-areas]");
    if (node) node.textContent = t("areas.tags").concat(t("areas.more")).join(" · ");
  }

  // « 17 tasks » : le total des listes de chaque carte du détail des services
  function renderDetailCounts() {
    $$("[data-detail-count]").forEach((node) => {
      const key = node.dataset.detailCount;
      const card = lookup(I18N[lang], "details." + key) || {};
      if (key === "extras") {
        node.textContent = t("details.options", { n: (card.addons || []).length });
      } else {
        const n = ["standard", "deep", "move"].reduce((sum, level) => sum + (card[level] || []).length, 0);
        node.textContent = t("details.tasks", { n });
      }
    });
  }

  /* ---------- Résultats : avant/après et avis réels (données dans config.js) ---------- */

  // Une image absente disparaît : le cadre garde son aplat de couleur
  function photo(src, alt, className) {
    const img = document.createElement("img");
    img.className = className;
    img.src = src;
    img.alt = alt;
    img.loading = "lazy";
    img.decoding = "async";
    img.width = 800;
    img.height = 600;
    img.addEventListener("error", () => img.remove());
    return img;
  }

  // Comparaison avant/après : un curseur (input range) pilote la position de la poignée
  function beforeAfterItem(pair) {
    const service = (lang === "fr" ? pair.service_fr || pair.service_en : pair.service_en || pair.service_fr) || "";
    const caption = [service, pair.location].filter(Boolean).join(" · ");
    const figure = el("figure", "ba-item");
    const frame = el("div", "ba-frame");
    frame.style.setProperty("--pos", "50%");
    const base = "images/before-after/" + pair.id;
    const before = el("div", "ba-before");
    before.append(photo(base + "-before.webp", t("results.altBefore", { caption }), "ba-img"));
    const tagBefore = el("span", "ba-tag ba-tag--before", t("results.before"));
    const tagAfter = el("span", "ba-tag ba-tag--after", t("results.after"));
    const handle = el("span", "ba-handle");
    [tagBefore, tagAfter, handle].forEach((node) => node.setAttribute("aria-hidden", "true"));
    const range = document.createElement("input");
    range.type = "range";
    range.className = "ba-range";
    range.min = "0";
    range.max = "100";
    range.value = "50";
    range.setAttribute("aria-label", t("results.compare", { caption }));
    const setPos = (value) => {
      range.value = String(Math.round(Math.min(100, Math.max(0, value))));
      frame.style.setProperty("--pos", range.value + "%");
    };
    range.addEventListener("input", () => setPos(Number(range.value)));
    // Au doigt ou à la souris : on glisse n'importe où sur l'image
    let dragging = false;
    const fromPointer = (event) => {
      const rect = frame.getBoundingClientRect();
      setPos(((event.clientX - rect.left) / rect.width) * 100);
    };
    frame.addEventListener("pointerdown", (event) => { dragging = true; fromPointer(event); });
    frame.addEventListener("pointermove", (event) => { if (dragging) fromPointer(event); });
    ["pointerup", "pointercancel", "pointerleave"].forEach((type) => frame.addEventListener(type, () => { dragging = false; }));
    frame.append(photo(base + "-after.webp", t("results.altAfter", { caption }), "ba-img"), before, tagBefore, tagAfter, handle, range);
    figure.append(frame);
    if (caption) figure.append(el("figcaption", "", caption));
    return figure;
  }

  function reviewDate(value) {
    const match = /^(\d{4})-(\d{2})$/.exec(value || "");
    if (!match) return value || "";
    return new Intl.DateTimeFormat(lang === "fr" ? "fr-CA" : "en-CA", { month: "long", year: "numeric" }).format(new Date(Number(match[1]), Number(match[2]) - 1, 1));
  }

  function reviewCard(review) {
    const li = el("li", "review");
    const rating = Math.min(5, Math.max(0, Math.round(Number(review.rating) || 0)));
    const stars = el("p", "review__stars");
    stars.setAttribute("role", "img");
    stars.setAttribute("aria-label", t("results.rating", { n: rating }));
    stars.append(el("span", "", "★".repeat(rating)), el("span", "review__stars-off", "★".repeat(5 - rating)));
    const text = (lang === "fr" ? review.text_fr || review.text_en : review.text_en || review.text_fr).trim();
    const meta = el("p", "review__meta");
    meta.append(el("span", "review__name", review.name || ""));
    [review.service, reviewDate(review.date), review.location].filter((part) => part && String(part).trim()).forEach((part) => meta.append(" · " + part));
    li.append(stars, el("p", "review__text", text), meta);
    return li;
  }

  function renderResults() {
    const section = $("#results");
    if (!section) return;
    const pairs = (CONFIG.beforeAfter || []).filter((pair) => pair && pair.id);
    const reviews = (CONFIG.reviews || []).filter((r) => r && ((r.text_en || "").trim() || (r.text_fr || "").trim()));
    $("[data-before-after]", section).hidden = pairs.length === 0;
    $("[data-ba-list]", section).replaceChildren(...pairs.map(beforeAfterItem));
    $("[data-reviews]", section).hidden = reviews.length === 0;
    $("[data-reviews-list]", section).replaceChildren(...reviews.map(reviewCard));
    const google = $("[data-google-reviews]", section);
    google.hidden = !CONFIG.googleReviewsUrl;
    if (CONFIG.googleReviewsUrl) google.href = CONFIG.googleReviewsUrl;
    // État « lancement » : seulement s'il n'y a aucun avis valide
    $("[data-launch]", section).hidden = reviews.length > 0;
  }

  // Questions en accordéon ; les questions ouvertes le restent quand on change de langue
  function renderFaq() {
    const wrap = $("[data-faq]");
    if (!wrap) return;
    const open = $$("details", wrap).map((node) => node.open);
    const items = lookup(I18N[lang], "faq.items") || [];
    wrap.replaceChildren(...items.map((item, i) => {
      const details = el("details", "faq__item");
      details.open = Boolean(open[i]);
      const summary = el("summary", "faq__q", t("faq.items." + i + ".q"));
      const answer = el("div", "faq__a");
      if (item.steps) {
        const list = el("ol", "faq__steps");
        item.steps.forEach((step, j) => {
          const li = el("li", "faq__step");
          li.append(el("strong", "", t("faq.items." + i + ".steps." + j + ".title")), " ", t("faq.items." + i + ".steps." + j + ".text"));
          list.append(li);
        });
        answer.append(list);
      } else {
        answer.append(el("p", "", t("faq.items." + i + ".a")));
      }
      details.append(summary, answer);
      return details;
    }));
  }

  function renderPrivacy() {
    const wrap = $("[data-privacy-sections]");
    if (!wrap) return;
    const count = (lookup(I18N[lang], "privacy.sections") || []).length;
    const nodes = [];
    for (let i = 0; i < count; i++) {
      nodes.push(el("h3", "", t("privacy.sections." + i + ".title")));
      nodes.push(el("p", "", t("privacy.sections." + i + ".text", commonVars())));
    }
    wrap.replaceChildren(...nodes);
  }

  /* ---------- Cartes Services à retourner ---------- */

  // La face cachée est inerte : ni lue, ni atteignable au clavier
  function setFlipped(card, flipped, moveFocus) {
    card.classList.toggle("flipped", flipped);
    const front = $(".flip-front", card);
    const back = $(".flip-back", card);
    front.setAttribute("aria-expanded", String(flipped));
    front.inert = flipped;
    back.inert = !flipped;
    if (moveFocus) (flipped ? back : front).focus({ preventScroll: true });
  }

  function initFlipCards() {
    $$("[data-flip-card]").forEach((card) => {
      setFlipped(card, false, false);
      card.addEventListener("click", (event) => {
        if (event.target.closest("a")) return;
        const flipped = !card.classList.contains("flipped");
        setFlipped(card, flipped, event.detail === 0 || Boolean(event.target.closest("button")));
      });
    });
  }

  /* ---------- Info-bulles (?) des cartes de service ---------- */

  // Au survol sur ordinateur (CSS) ; au toucher ou au clavier, le bouton ouvre et ferme la bulle
  function setTip(button, open) {
    button.setAttribute("aria-expanded", String(open));
  }

  function closeTips(except) {
    $$("[data-tip]").forEach((button) => { if (button !== except) setTip(button, false); });
  }

  function initTips() {
    $$("[data-tip]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const open = button.getAttribute("aria-expanded") !== "true";
        closeTips(button);
        setTip(button, open);
      });
    });
    document.addEventListener("click", (event) => {
      if (!event.target.closest("[data-tip]")) closeTips();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      const open = $('[data-tip][aria-expanded="true"]');
      if (open) {
        setTip(open, false);
        open.focus();
      }
    });
  }

  function initPrivacy() {
    const privacy = $("[data-privacy-dialog]");
    if (!privacy) return;
    $$("[data-open-privacy]").forEach((button) => button.addEventListener("click", () => {
      if (typeof privacy.showModal === "function") privacy.showModal();
      else privacy.setAttribute("open", "");
    }));
    $("[data-close-privacy]", privacy).addEventListener("click", () => {
      if (typeof privacy.close === "function" && privacy.open) privacy.close();
      else privacy.removeAttribute("open");
    });
  }

  /* ---------- En-tête et tiroir mobile ---------- */

  const header = $("[data-header]");
  const drawer = $("[data-drawer]");
  const menuToggle = $("[data-menu-toggle]");

  function drawerOpen() {
    return drawer && !drawer.hidden;
  }

  function syncMenuLabel() {
    if (menuToggle) menuToggle.setAttribute("aria-label", t(drawerOpen() ? "nav.menuClose" : "nav.menuOpen"));
  }

  function setDrawer(open) {
    if (!drawer || !menuToggle) return;
    if (open) drawer.style.setProperty("--drawer-top", Math.max(0, header.getBoundingClientRect().bottom) + "px");
    drawer.hidden = !open;
    ["main", ".footer"].forEach((selector) => {
      const node = $(selector);
      if (node) node.inert = open;
    });
    menuToggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("has-drawer", open);
    syncMenuLabel();
  }

  function initHeader() {
    $$("[data-set-lang]").forEach((btn) => btn.addEventListener("click", () => setLang(btn.dataset.setLang)));

    if (menuToggle) menuToggle.addEventListener("click", () => setDrawer(!drawerOpen()));
    if (drawer) {
      drawer.addEventListener("click", (event) => {
        if (event.target.closest("a")) setDrawer(false);
      });
    }
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && drawerOpen()) {
        setDrawer(false);
        menuToggle.focus();
      }
    });
    window.matchMedia("(min-width: 1200px)").addEventListener("change", (event) => {
      if (event.matches && drawerOpen()) setDrawer(false);
    });

  }

  /* ---------- Réservation ---------- */

  const form = $("#booking-form");
  const field = (name) => form.elements.namedItem(name);
  const checked = (name) => form.querySelector('input[name="' + name + '"]:checked:not(:disabled)');
  const COUNTERS = {
    bedrooms: () => [0, CONFIG.residential.bedrooms.max],
    bathrooms: () => [0, CONFIG.residential.bathrooms.max],
    half_bathrooms: () => [0, CONFIG.residential.halfBathrooms.max],
    blinds_count: () => [0, CONFIG.blinds.max],
    pro_kitchens: () => [0, 20],
    pro_bathrooms: () => [0, 20]
  };

  function serviceKey() {
    const radio = checked("service");
    return radio ? radio.dataset.service : null;
  }

  function stepOrder() {
    return serviceKey() === "pro" ? [1, 3, 4] : [1, 2, 3, 4];
  }

  function todayISO() {
    const d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }

  /* Compteurs (chambres, salles de bain, cuisines) */

  // Nombre entier saisi, ou null s'il est vide, décimal ou hors limites
  function readCount(name) {
    const raw = (field(name).value || "").trim();
    if (!/^\d+$/.test(raw)) return null;
    const n = Number(raw);
    const [min, max] = COUNTERS[name]();
    return n >= min && n <= max ? n : null;
  }

  function clampCount(name, n) {
    const [min, max] = COUNTERS[name]();
    return Math.min(max, Math.max(min, n));
  }

  // Pour l'estimation : la valeur saisie ramenée dans les limites
  function countForPrice(name) {
    const n = parseInt(field(name).value, 10);
    return clampCount(name, Number.isNaN(n) ? COUNTERS[name]()[0] : n);
  }

  function initCounters() {
    Object.keys(COUNTERS).forEach((name) => {
      const [min, max] = COUNTERS[name]();
      field(name).min = min;
      field(name).max = max;
    });
    $$("[data-stepper]", form).forEach((button) => {
      button.addEventListener("click", () => {
        const name = button.dataset.stepper;
        const input = field(name);
        const current = parseInt(input.value, 10);
        const next = clampCount(name, (Number.isNaN(current) ? COUNTERS[name]()[0] : current) + Number(button.dataset.delta));
        if (String(next) === input.value) return;
        input.value = next;
        input.dispatchEvent(new Event("change", { bubbles: true }));
      });
    });
  }

  /* Libellés qui dépendent de config.js */

  function windowTier(input) {
    return CONFIG.windows[Number(input.dataset.window)];
  }

  // « up to 6 », « 7 to 12 », « more than 12 » d'après les paliers de config.js
  function tierLabel(tier, l) {
    if (tier.to == null) return t("form.step2.windowTierMore", { n: tier.from - 1 }, l);
    if (tier.from <= 1) return t("form.step2.windowTierUpTo", { to: tier.to }, l);
    return t("form.step2.windowTierRange", { from: tier.from, to: tier.to }, l);
  }

  function renderFormLabels() {
    $$("[data-freq-label]", form).forEach((span) => {
      const key = span.dataset.freqLabel;
      const name = t("form.step1.frequencies." + key);
      span.textContent = key === "once" ? name : name + " " + t("form.step1.discount", { d: percent(CONFIG.recurring[key]) });
    });
    $$("input[data-freq]", form).forEach((input) => {
      const key = input.dataset.freq;
      if (key !== "once") input.value = FREQ_VALUES[key] + " (-" + Math.round(CONFIG.recurring[key] * 100) + "%)";
    });

    // Le supplément n'apparaît que dans l'estimation ; la valeur envoyée le rappelle à Nabil
    form.querySelector("input[data-late]").value = t("form.step3.late", null, "en") + " (+" + money(CONFIG.lateArrival, "en") + ")";
    $("[data-late-label]", form).textContent = t("form.step3.late");

    $$("input[data-window]", form).forEach((input) => {
      const tier = windowTier(input);
      input.value = "Inside windows and tracks (" + tierLabel(tier, "en") + (tier.price == null ? ", on quote" : "") + ")";
    });
    $$("[data-window-label]", form).forEach((span) => {
      span.textContent = tierLabel(CONFIG.windows[Number(span.dataset.windowLabel)]);
    });

    renderDateValue();
    renderTimeOptions();
    if (!$("[data-calendar]", form).hidden) renderCalendar();
  }

  /* Calendrier de la date souhaitée
     Le champ date natif ne s'ouvre pas dans toutes les applis mobiles : ce calendrier marche partout.
     La date choisie est gardée au format AAAA-MM-JJ dans le champ caché « date ». */

  const cal = { view: null, focus: null };
  const MONTHS_AHEAD = 12;
  const pad2 = (n) => String(n).padStart(2, "0");
  const isoOf = (d) => d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate());
  const parseISO = (iso) => { const [y, m, d] = iso.split("-").map(Number); return new Date(y, m - 1, d); };
  const monthStart = (d) => new Date(d.getFullYear(), d.getMonth(), 1);
  const lastMonth = () => { const now = new Date(); return new Date(now.getFullYear(), now.getMonth() + MONTHS_AHEAD, 1); };
  const locale = () => (lang === "fr" ? "fr-CA" : "en-CA");

  function renderDateValue() {
    const iso = field("date").value;
    const node = $("[data-date-value]", form);
    node.textContent = iso ? formatDate(iso, lang) : t("form.step3.dateChoose");
    node.classList.toggle("is-placeholder", !iso);
  }

  function renderCalendar() {
    const box = $("[data-calendar]", form);
    const today = todayISO();
    const selected = field("date").value;
    if (!cal.view) cal.view = monthStart(selected ? parseISO(selected) : new Date());
    const monthKey = isoOf(cal.view).slice(0, 7);

    $("[data-cal-month]", box).textContent = new Intl.DateTimeFormat(locale(), { month: "long", year: "numeric" }).format(cal.view);
    $("[data-cal-prev]", box).disabled = cal.view <= monthStart(new Date());
    $("[data-cal-next]", box).disabled = cal.view >= lastMonth();

    // La semaine commence le dimanche ; le 1er janvier 2023 était un dimanche
    const weekday = new Intl.DateTimeFormat(locale(), { weekday: "short" });
    $("[data-cal-weekdays]", box).replaceChildren(...Array.from({ length: 7 }, (_, i) => el("span", "", weekday.format(new Date(2023, 0, 1 + i)))));

    // Un seul jour atteignable au clavier : le jour choisi, sinon aujourd'hui, sinon le 1er du mois
    let focus = cal.focus && cal.focus.slice(0, 7) === monthKey ? cal.focus : null;
    if (!focus) focus = selected.slice(0, 7) === monthKey ? selected : today.slice(0, 7) === monthKey ? today : monthKey + "-01";
    if (focus < today) focus = today;
    cal.focus = focus;

    const full = new Intl.DateTimeFormat(locale(), { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    const cells = [];
    for (let i = 0; i < cal.view.getDay(); i++) cells.push(el("span", "calendar__blank"));
    const days = new Date(cal.view.getFullYear(), cal.view.getMonth() + 1, 0).getDate();
    for (let d = 1; d <= days; d++) {
      const date = new Date(cal.view.getFullYear(), cal.view.getMonth(), d);
      const iso = isoOf(date);
      const button = el("button", "calendar__day", String(d));
      button.type = "button";
      button.dataset.date = iso;
      button.setAttribute("aria-label", full.format(date));
      button.setAttribute("aria-pressed", String(iso === selected));
      if (iso === today) {
        button.classList.add("is-today");
        button.setAttribute("aria-current", "date");
      }
      button.disabled = iso < today;
      button.tabIndex = iso === focus ? 0 : -1;
      cells.push(button);
    }
    $("[data-cal-days]", box).replaceChildren(...cells);
  }

  function focusCalendarDay() {
    const day = $('[data-cal-days] [tabindex="0"]', form);
    if (day) day.focus();
  }

  function setCalendar(open, focusDay) {
    $("[data-calendar]", form).hidden = !open;
    $("[data-date-toggle]", form).setAttribute("aria-expanded", String(open));
    if (!open) return;
    cal.view = null;
    cal.focus = null;
    renderCalendar();
    if (focusDay) focusCalendarDay();
  }

  function pickDate(iso) {
    field("date").value = iso;
    renderDateValue();
    setCalendar(false);
    $("[data-date-toggle]", form).focus();
    field("date").dispatchEvent(new Event("change", { bubbles: true }));
  }

  function initCalendar() {
    const toggle = $("[data-date-toggle]", form);
    const box = $("[data-calendar]", form);
    toggle.addEventListener("click", (event) => setCalendar(box.hidden, event.detail === 0));
    $("[data-cal-prev]", box).addEventListener("click", () => moveMonth(-1));
    $("[data-cal-next]", box).addEventListener("click", () => moveMonth(1));
    box.addEventListener("click", (event) => {
      const day = event.target.closest("[data-date]");
      if (day && !day.disabled) pickDate(day.dataset.date);
    });
    // Échap ferme, que le focus soit sur le champ ou dans le calendrier
    toggle.parentElement.addEventListener("keydown", (event) => {
      if (event.key !== "Escape" || box.hidden) return;
      event.stopPropagation();
      setCalendar(false);
      toggle.focus();
    });
    // Flèches : jour précédent ou suivant, semaine précédente ou suivante
    box.addEventListener("keydown", (event) => {
      const day = event.target.closest("[data-date]");
      const step = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[event.key];
      if (!day || !step) return;
      event.preventDefault();
      const next = parseISO(day.dataset.date);
      next.setDate(next.getDate() + step);
      if (isoOf(next) < todayISO() || monthStart(next) > lastMonth()) return;
      cal.focus = isoOf(next);
      cal.view = monthStart(next);
      renderCalendar();
      focusCalendarDay();
    });
    document.addEventListener("click", (event) => {
      if (!box.hidden && !event.target.closest("[data-calendar], [data-date-toggle]")) setCalendar(false);
    });
  }

  function moveMonth(step) {
    cal.view = new Date(cal.view.getFullYear(), cal.view.getMonth() + step, 1);
    cal.focus = null;
    renderCalendar();
  }

  // Heure précise : créneaux de 30 minutes, affichés à l'heure locale (2:30 p.m. / 14 h 30)
  function renderTimeOptions() {
    const select = $("[data-time-select]", form);
    const current = select.value;
    const format = new Intl.DateTimeFormat(locale(), { hour: "numeric", minute: "2-digit" });
    const options = [new Option(t("form.step3.timeChoose"), "")];
    for (let minutes = 0; minutes < 24 * 60; minutes += 30) {
      const h = Math.floor(minutes / 60);
      const m = minutes % 60;
      options.push(new Option(format.format(new Date(2000, 0, 1, h, m)), pad2(h) + ":" + pad2(m)));
    }
    select.replaceChildren(...options);
    select.value = current;
  }

  // Affiche les blocs utiles au service choisi ; les champs des blocs masqués sont désactivés
  function refreshForm() {
    const svc = serviceKey();
    $$("[data-when]", form).forEach((block) => {
      const when = block.dataset.when;
      const show = Boolean(svc) && (when === svc || (when === "residential" && svc !== "pro"));
      block.hidden = !show;
      $$("input, select, textarea", block).forEach((control) => { control.disabled = !show; });
    });
    updateExactTime();
    updateOptionalLabels();
    updateEmailLabel();
    updateProgress();
    updateEstimate();
    if (currentStep === 4) updateSummary();
  }

  // « Heure précise » ouvre un champ d'heure
  function updateExactTime() {
    const wrap = $("[data-exact-field]", form);
    const arrival = checked("arrival_window");
    const show = Boolean(arrival && arrival.hasAttribute("data-exact"));
    wrap.hidden = !show;
    field("exact_time").disabled = !show;
    if (!show && fieldErrors.has("exact_time")) setError("exact_time", null);
  }

  // Pour les pros, adresse, date et heure d'arrivée sont facultatives : le libellé le dit
  function updateOptionalLabels() {
    const pro = serviceKey() === "pro";
    [["label[for=\"address\"]", "address"], ["#date-label", "date"], ['[data-field="arrival_window"] .label-field', "arrival"]].forEach(([selector, key]) => {
      const node = $(selector, form);
      if (node) node.textContent = t("form.step3." + key + (pro ? "Optional" : ""));
    });
  }

  function updateProgress() {
    const order = stepOrder();
    const index = Math.max(0, order.indexOf(currentStep));
    $("[data-progress-count]", form).textContent = t("form.progress", { i: index + 1, n: order.length });
    $("[data-progress-name]", form).textContent = t("form.step" + currentStep + ".title");
    $("[data-progress-fill]", form).style.width = ((index + 1) / order.length) * 100 + "%";
    $("[data-back]", form).hidden = index === 0;
    $("[data-next]", form).hidden = index === order.length - 1;
    $("[data-submit]", form).hidden = index !== order.length - 1;
  }

  function showStep(step, focus) {
    currentStep = step;
    $$(".step", form).forEach((node) => { node.hidden = Number(node.dataset.step) !== step; });
    updateProgress();
    updateEstimate();
    if (step === 4) updateSummary();
    showSendError(false);
    if (!focus) return;
    const top = form.getBoundingClientRect().top;
    const headerBottom = header ? Math.max(0, header.getBoundingClientRect().bottom) : 0;
    if (top < headerBottom || top > window.innerHeight * 0.5) {
      form.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "start" });
    }
    $('.step[data-step="' + step + '"] .step__title', form).focus({ preventScroll: true });
  }

  /* Erreurs sous les champs */

  function errorText(name, key) {
    if (key === "count") {
      const [min, max] = COUNTERS[name]();
      return t("form.errors.count", { min, max });
    }
    return t("form.errors." + key);
  }

  function setError(name, key) {
    const wrap = form.querySelector('[data-field="' + name + '"]');
    const message = wrap && wrap.querySelector("[data-error]");
    if (key) fieldErrors.set(name, key); else fieldErrors.delete(name);
    if (message) message.textContent = key ? errorText(name, key) : "";
    if (wrap) wrap.classList.toggle("has-error", Boolean(key));
    $$('[name="' + name + '"]:not([type="hidden"]), [data-error-target="' + name + '"]', form).forEach((control) => {
      if (key) {
        control.setAttribute("aria-invalid", "true");
        if (message) control.setAttribute("aria-describedby", message.id);
      } else {
        control.removeAttribute("aria-invalid");
        control.removeAttribute("aria-describedby");
      }
    });
  }

  function validateStep(step) {
    const svc = serviceKey();
    const pro = svc === "pro";
    const residential = Boolean(svc) && !pro;
    const errors = [];
    const value = (name) => (field(name).value || "").trim();

    if (step === 1) {
      if (!svc) errors.push(["service", "service"]);
      if (residential) {
        if (readCount("bedrooms") == null) errors.push(["bedrooms", "count"]);
        if (readCount("bathrooms") == null) errors.push(["bathrooms", "count"]);
        if (readCount("half_bathrooms") == null) errors.push(["half_bathrooms", "count"]);
      }
      if (pro) {
        if (!checked("pro_type")) errors.push(["pro_type", "required"]);
        const sqft = value("square_feet");
        if (!/^\d+$/.test(sqft) || Number(sqft) < 1) errors.push(["square_feet", "sqft"]);
        if (readCount("pro_kitchens") == null) errors.push(["pro_kitchens", "count"]);
        if (readCount("pro_bathrooms") == null) errors.push(["pro_bathrooms", "count"]);
      }
    }
    if (step === 3) {
      if (residential && !value("address")) errors.push(["address", "required"]);
      const postal = value("postal_code");
      if (!postal) errors.push(["postal_code", "required"]);
      else if (!POSTAL_CODE.test(postal)) errors.push(["postal_code", "postal"]);
      if (!value("city")) errors.push(["city", "required"]);
      const date = value("date");
      if (residential && !date) errors.push(["date", "required"]);
      else if (date && date < todayISO()) errors.push(["date", "date"]);
      if (residential && !checked("arrival_window")) errors.push(["arrival_window", "required"]);
      if (!field("exact_time").disabled && !value("exact_time")) errors.push(["exact_time", "required"]);
    }
    if (step === 4) {
      if (!value("name")) errors.push(["name", "required"]);
      const digits = value("phone").replace(/\D/g, "");
      if (!value("phone")) errors.push(["phone", "required"]);
      else if (digits.length < 10) errors.push(["phone", "phone"]);
      const email = value("email");
      const wantsEmail = (checked("preferred_contact") || {}).value === "Email";
      if (!email && wantsEmail) errors.push(["email", "required"]);
      else if (email && !EMAIL.test(email)) errors.push(["email", "email"]);
    }

    $$("[data-field]", $('.step[data-step="' + step + '"]', form)).forEach((wrap) => setError(wrap.dataset.field, null));
    errors.forEach(([name, key]) => setError(name, key));

    if (errors.length) {
      const name = errors[0][0];
      const first = form.querySelector('[data-error-target="' + name + '"]') || form.querySelector('[name="' + name + '"]:not(:disabled)');
      if (first) {
        first.focus({ preventScroll: true });
        first.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "center" });
      }
    }
    return errors.length === 0;
  }

  function goNext() {
    const order = stepOrder();
    const index = order.indexOf(currentStep);
    if (!validateStep(currentStep) || index >= order.length - 1) return;
    showStep(order[index + 1], true);
  }

  function goBack() {
    const order = stepOrder();
    const index = order.indexOf(currentStep);
    if (index > 0) showStep(order[index - 1], true);
  }

  /* Estimation du prix */

  function addonName(input, l) {
    if (input.hasAttribute("data-window")) {
      return t("form.step2.windowsName", null, l) + " (" + tierLabel(windowTier(input), l) + ")";
    }
    return t("form.step2.addons." + input.dataset.addon, null, l);
  }

  // null = sur devis
  function addonPrice(input) {
    return input.hasAttribute("data-window") ? windowTier(input).price : CONFIG.addons[input.dataset.addon];
  }

  function lateFee() {
    const arrival = checked("arrival_window");
    return arrival && arrival.hasAttribute("data-late") ? CONFIG.lateArrival : 0;
  }

  // « Studio, 1 bathroom », « 2 bedrooms, 1 bathroom, 1 half bathroom »
  function homeLabel(l) {
    const bedrooms = countForPrice("bedrooms");
    const parts = [bedrooms === 0 ? t("form.units.studio", null, l) : unit("bedroom", bedrooms, l), unit("bathroom", countForPrice("bathrooms"), l)];
    const half = countForPrice("half_bathrooms");
    if (half > 0) parts.push(unit("halfBathroom", half, l));
    return parts.join(", ");
  }

  function blindsCount() {
    const input = field("blinds_count");
    return input && !input.disabled ? countForPrice("blinds_count") : 0;
  }

  // Calcule l'estimation et son détail, dans la langue demandée
  function estimate(l) {
    const svc = serviceKey();
    if (!svc) return null;
    const lines = [];
    const quote = [];

    if (svc === "pro") {
      const raw = (field("square_feet").value || "").trim();
      const sqft = /^\d+$/.test(raw) ? Number(raw) : 0;
      if (!sqft) return { pro: true, total: null, lines, quote };
      lines.push([t("form.estimate.rate", { sqft: unit("sqft", sqft, l), price: moneyRate(CONFIG.pro.perSqft, l) }, l), Math.round(sqft * CONFIG.pro.perSqft)]);
      const baths = countForPrice("pro_bathrooms");
      if (baths > 0) lines.push([unit("bathroom", baths, l), Math.round(tierPrice(baths, CONFIG.residential.bathrooms) * (1 + CONFIG.pro.bathroomMarkup))]);
      const total = lines.reduce((sum, line) => sum + line[1], 0);
      // Plancher : en dessous du minimum, on affiche le minimum
      if (total < CONFIG.pro.minimum) return { pro: true, total: CONFIG.pro.minimum, lines: [[t("form.estimate.minimum", null, l), CONFIG.pro.minimum]], quote };
      return { pro: true, total, lines, quote };
    }

    lines.push([homeLabel(l), roomsPrice(countForPrice("bedrooms"), countForPrice("bathrooms"), countForPrice("half_bathrooms"))]);
    const surcharge = CONFIG.serviceSurcharge[svc] || 0;
    if (surcharge) lines.push([t("form.estimate." + svc, null, l), surcharge]);
    $$('input[name="addons"]:checked:not(:disabled)', form).forEach((input) => {
      const price = addonPrice(input);
      if (price == null) quote.push(t("form.estimate.quote", { tier: tierLabel(windowTier(input), l) }, l));
      else lines.push([addonName(input, l), price]);
    });
    const blinds = blindsCount();
    if (blinds > 0) lines.push([t("form.estimate.blinds", { windows: unit("window", blinds, l) }, l), blinds * CONFIG.blinds.perWindow]);
    const late = lateFee();
    if (late) lines.push([t("form.estimate.late", null, l), late]);
    const total = lines.reduce((sum, line) => sum + line[1], 0);

    const freq = svc === "regular" ? checked("frequency") : null;
    const freqKey = freq ? freq.dataset.freq : "once";
    const then = freqKey === "once" ? null : { rate: CONFIG.recurring[freqKey], total: Math.round(total * (1 - CONFIG.recurring[freqKey])) };
    return { pro: false, total, lines, then, quote };
  }

  function updateBlindsTile() {
    const tile = $("[data-blinds-tile]", form);
    if (tile) tile.classList.toggle("is-active", blindsCount() > 0);
  }

  function updateEstimate() {
    updateBlindsTile();
    const box = $("[data-estimate]", form);
    const data = estimate();
    box.hidden = !data;
    if (!data) return;
    box.classList.toggle("estimate--pro", data.pro);

    $("[data-estimate-label]", box).textContent = t(data.pro ? "form.estimate.proLabel" : "form.estimate.label");
    const value = $("[data-estimate-value]", box);
    value.textContent = data.total == null ? t("form.estimate.proEmpty") : money(data.total);
    value.classList.toggle("is-empty", data.total == null);

    // Prix après taxes, en petit, sous le total
    const tax = $("[data-estimate-tax]", box);
    tax.hidden = data.total == null;
    tax.textContent = data.total == null ? "" : t("form.estimate.withTax", { price: moneyCents(withTax(data.total)), rate: percent(CONFIG.taxRate) });

    const breakdown = $("[data-estimate-breakdown]", box);
    const showLines = currentStep === 4 && data.lines.length > 1;
    breakdown.hidden = !showLines;
    breakdown.replaceChildren(...(showLines ? data.lines.map(([label, amount], i) => {
      const li = el("li", "");
      li.append(el("span", "", label), el("span", "estimate__amount", (i === 0 ? "" : "+") + money(amount)));
      return li;
    }) : []));

    const then = $("[data-estimate-then]", box);
    then.hidden = !data.then;
    then.textContent = data.then ? t("form.estimate.then", { price: money(data.then.total), d: "−" + percent(data.then.rate) }) : "";

    const quote = $("[data-estimate-quote]", box);
    quote.hidden = !data.quote.length;
    quote.textContent = data.quote.join(" ");

    $("[data-estimate-note]", box).textContent = t(data.pro ? "form.estimate.proNote" : "form.estimate.note");
  }

  /* Récapitulatif */

  function optionLabel(input) {
    if (!input) return "";
    const label = input.closest("label");
    if (!label) return input.value;
    const text = label.querySelector(".option-card__name") || label.querySelector(".tile__name") || label.querySelector("span");
    return text ? text.textContent.trim() : input.value;
  }

  function formatDate(iso, l) {
    if (!iso) return "";
    const [y, m, d] = iso.split("-").map(Number);
    return new Intl.DateTimeFormat(l === "fr" ? "fr-CA" : "en-CA", {
      weekday: "long", year: "numeric", month: "long", day: "numeric"
    }).format(new Date(y, m - 1, d));
  }

  function formatTime(value, l) {
    if (!value) return "";
    const [h, m] = value.split(":").map(Number);
    return new Intl.DateTimeFormat(l === "fr" ? "fr-CA" : "en-CA", { hour: "numeric", minute: "2-digit" }).format(new Date(2000, 0, 1, h, m));
  }

  // Collecte la demande deux fois : libellés de la langue en cours (écran) et valeurs en anglais (e-mail)
  function collect() {
    const svc = serviceKey();
    const pro = svc === "pro";
    const value = (name) => {
      const control = field(name);
      return control && !control.disabled ? (control.value || "").trim() : "";
    };
    const shown = [];
    const english = [];
    const add = (labelKey, display, plain) => {
      if (!display) return;
      shown.push([t(labelKey), display]);
      english.push(t(labelKey, null, "en") + ": " + plain);
    };

    const serviceInput = checked("service");
    add("form.summary.service", optionLabel(serviceInput), serviceInput ? serviceInput.value : "");

    if (pro) {
      const type = checked("pro_type");
      const sqft = /^\d+$/.test(value("square_feet")) ? Number(value("square_feet")) : 0;
      const parts = (l) => [
        sqft ? unit("sqft", sqft, l) : "",
        unit("kitchen", countForPrice("pro_kitchens"), l),
        unit("bathroom", countForPrice("pro_bathrooms"), l)
      ];
      add("form.summary.business",
        [optionLabel(type)].concat(parts(lang)).filter(Boolean).join(", "),
        [type ? type.value : ""].concat(parts("en")).filter(Boolean).join(", "));
    } else if (svc) {
      const type = checked("property_type");
      add("form.summary.home",
        [homeLabel(lang), optionLabel(type)].filter(Boolean).join(", "),
        [homeLabel("en"), type ? type.value : ""].filter(Boolean).join(", "));
    }

    if (svc === "regular") {
      const freq = checked("frequency");
      add("form.summary.frequency", optionLabel(freq), freq ? freq.value : "");
    }

    if (svc && !pro) {
      const addons = $$('input[name="addons"]:checked:not(:disabled)', form);
      const shownAddons = addons.map((input) => addonName(input, lang));
      const plainAddons = addons.map((input) => input.value);
      const blinds = blindsCount();
      if (blinds > 0) {
        shownAddons.push(t("form.estimate.blinds", { windows: unit("window", blinds) }));
        plainAddons.push(t("form.estimate.blinds", { windows: unit("window", blinds, "en") }, "en"));
      }
      add("form.summary.addons", shownAddons.join(", "), plainAddons.join(", "));
    }

    const date = value("date");
    const arrival = checked("arrival_window");
    const exact = value("exact_time");
    const flex = checked("flexibility");
    const arrivalText = (l) => {
      if (!arrival) return "";
      if (arrival.hasAttribute("data-exact")) return exact ? formatTime(exact, l) : "";
      return l === lang ? optionLabel(arrival) : arrival.value;
    };
    const when = [formatDate(date, lang), arrivalText(lang)].filter(Boolean).join(", ");
    const whenPlain = [date ? formatDate(date, "en") : "", arrival && arrival.hasAttribute("data-exact") && exact ? "Exact time " + exact : arrivalText("en")].filter(Boolean).join(", ");
    add("form.summary.when",
      when ? when + (flex ? " (" + optionLabel(flex) + ")" : "") : "",
      whenPlain ? whenPlain + (flex ? " (" + flex.value + ")" : "") : "");

    const unitNo = value("unit");
    const postalCode = value("postal_code").toUpperCase();
    const addressParts = [value("address"), unitNo ? "#" + unitNo.replace(/^#/, "") : "", postalCode, value("city")];
    const address = addressParts.filter(Boolean).join(", ");
    // À l'écran, le code postal ne se coupe pas en deux lignes
    add("form.summary.address", postalCode ? address.replace(postalCode, postalCode.replace(" ", " ")) : address, address);

    const access = checked("access");
    const elevator = checked("elevator_booking");
    const colon = lang === "fr" ? " : " : ": ";
    add("form.summary.access",
      [optionLabel(access), elevator ? t("form.summary.elevator") + colon + optionLabel(elevator) : ""].filter(Boolean).join(" · "),
      [access ? access.value : "", elevator ? t("form.summary.elevator", null, "en") + ": " + elevator.value : ""].filter(Boolean).join(" · "));

    // L'estimation, en anglais, pour le courriel
    const est = estimate("en");
    if (est) {
      if (est.total == null) {
        english.push(t("form.estimate.proLabel", null, "en") + ": " + t("form.estimate.proEmpty", null, "en"));
      } else {
        english.push((est.pro ? t("form.estimate.proLabel", null, "en") : t("form.estimate.label", null, "en")) + ": " + money(est.total, "en"));
        english.push("  " + t("form.estimate.withTax", { price: moneyCents(withTax(est.total), "en"), rate: percent(CONFIG.taxRate, "en") }, "en"));
        est.lines.forEach(([label, amount], i) => english.push("  " + (i === 0 ? "" : "+ ") + label + ": " + money(amount, "en")));
        est.quote.forEach((line) => english.push("  " + line));
        if (est.then) english.push(t("form.estimate.then", { price: money(est.then.total, "en"), d: "-" + percent(est.then.rate, "en") }, "en"));
      }
    }

    return { svc, shown, english: english.join("\n"), est };
  }

  function updateSummary() {
    const data = collect();
    const list = $("[data-summary-list]", form);
    list.replaceChildren(...data.shown.flatMap(([label, value]) => [el("dt", "", label), el("dd", "", value)]));
  }

  function fillHiddenFields() {
    const data = collect();
    const serviceInput = checked("service");
    const est = data.est;
    let detail;
    if (data.svc === "pro") {
      const sqft = (field("square_feet").value || "").trim();
      detail = [((checked("pro_type") || {}).value || ""), sqft ? unit("sqft", Number(sqft), "en") : ""].filter(Boolean).join(", ");
    } else {
      detail = homeLabel("en");
    }
    field("lang").value = lang;
    field("summary").value = data.english;
    field("estimated_price").value = !est || est.total == null
      ? "Not calculated"
      : money(est.total, "en") + (est.pro ? " (estimate only, to confirm by phone)" : " (estimate, before tax)");
    field("_subject").value = (data.svc === "pro" ? "New quote request: " : "New booking request: ")
      + (serviceInput ? serviceInput.value : "") + ", " + detail + " (" + field("name").value.trim() + ")";
  }

  /* Envoi */

  function showSendError(show) {
    sendFailed = show;
    $("[data-send-error]", form).textContent = show ? t("form.errors.send") : "";
  }

  function setSending(state) {
    sending = state;
    const submit = $("[data-submit]", form);
    submit.disabled = state;
    submit.setAttribute("aria-busy", String(state));
    submit.textContent = t(state ? "form.sending" : "form.submit");
    $("[data-back]", form).disabled = state;
  }

  // Le courriel devient obligatoire si le client choisit d'être confirmé par courriel
  function updateEmailLabel() {
    const wantsEmail = (checked("preferred_contact") || {}).value === "Email";
    $('label[for="email"]', form).textContent = t(wantsEmail ? "form.step4.emailRequired" : "form.step4.email");
    field("email").setAttribute("aria-required", String(wantsEmail));
  }

  // Après un changement de service, retire les erreurs des champs devenus masqués ou facultatifs
  function clearStaleErrors() {
    const pro = serviceKey() === "pro";
    Array.from(fieldErrors.keys()).forEach((name) => {
      const enabled = form.querySelector('[name="' + name + '"]:not(:disabled)');
      const residentialOnly = ["address", "date", "arrival_window"].includes(name) && fieldErrors.get(name) === "required";
      if (!enabled || (pro && residentialOnly)) setError(name, null);
    });
  }

  const dialog = $("[data-success-dialog]");

  function openDialog() {
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
    $("[data-close-dialog]", dialog).focus();
  }

  function closeDialog() {
    if (typeof dialog.close === "function" && dialog.open) dialog.close();
    else dialog.removeAttribute("open");
  }

  function resetForm() {
    form.reset();
    field("date").value = "";
    setCalendar(false);
    Array.from(fieldErrors.keys()).forEach((name) => setError(name, null));
    renderFormLabels();
    refreshForm();
    showStep(1, false);
  }

  async function submitForm() {
    if (sending || !validateStep(currentStep)) return;
    fillHiddenFields();
    const data = new FormData(form);
    const addons = data.getAll("addons");
    data.delete("addons");
    if (addons.length) data.append("addons", addons.join(", "));

    setSending(true);
    showSendError(false);
    try {
      const response = await fetch(CONFIG.formspree, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });
      if (!response.ok) throw new Error("HTTP " + response.status);
      setSending(false);
      resetForm();
      openDialog();
    } catch (error) {
      setSending(false);
      showSendError(true);
      $("[data-submit]", form).focus();
    }
  }

  // Bouton « Get a Quote » de la carte Commercial et liens ?service= : service présélectionné
  function preselect(key) {
    const svc = LINK_TO_SERVICE[key];
    if (!svc) return false;
    const radio = form.querySelector('input[name="service"][data-service="' + svc + '"]');
    if (!radio) return false;
    radio.checked = true;
    if (key === "recurring") form.querySelector('input[data-freq="biweekly"]').checked = true;
    if (key === "regular") form.querySelector('input[data-freq="once"]').checked = true;
    setError("service", null);
    refreshForm();
    clearStaleErrors();
    if (currentStep !== 1) showStep(1, false);
    return true;
  }

  function initForm() {
    initCounters();
    initCalendar();

    form.addEventListener("change", (event) => {
      const target = event.target;
      const name = target.name;
      if (name === "service") {
        setError("service", null);
        refreshForm();
        clearStaleErrors();
      }
      // Fenêtres : un seul palier coché à la fois
      if (target.hasAttribute("data-window") && target.checked) {
        $$("input[data-window]", form).forEach((input) => { if (input !== target) input.checked = false; });
      }
      if (name === "arrival_window") updateExactTime();
      if (name in COUNTERS && target.value !== "" && /^\d+$/.test(target.value)) {
        target.value = clampCount(name, Number(target.value));
      }
      if (name === "preferred_contact") {
        updateEmailLabel();
        if (fieldErrors.get("email") === "required") setError("email", null);
      }
      if (fieldErrors.has(name)) setError(name, null);
      updateEstimate();
      if (currentStep === 4) updateSummary();
    });
    form.addEventListener("input", (event) => {
      const name = event.target.name;
      if (fieldErrors.has(name)) setError(name, null);
      if (name === "square_feet" || name in COUNTERS) updateEstimate();
    });

    const postal = field("postal_code");
    postal.addEventListener("blur", () => {
      const raw = postal.value.trim().toUpperCase().replace(/[\s-]+/g, "");
      if (raw.length === 6) postal.value = raw.slice(0, 3) + " " + raw.slice(3);
    });

    $("[data-next]", form).addEventListener("click", goNext);
    $("[data-back]", form).addEventListener("click", goBack);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const order = stepOrder();
      if (currentStep !== order[order.length - 1]) goNext();
      else submitForm();
    });

    $("[data-close-dialog]", dialog).addEventListener("click", closeDialog);
    dialog.addEventListener("close", () => {
      form.scrollIntoView({ behavior: "auto", block: "start" });
      $('.step[data-step="1"] .step__title', form).focus({ preventScroll: true });
    });

    document.addEventListener("click", (event) => {
      const link = event.target.closest("[data-book-service]");
      if (!link) return;
      event.preventDefault();
      preselect(link.dataset.bookService);
      const behavior = reduceMotion.matches ? "auto" : "smooth";
      // Directement le formulaire ; sur un petit écran, la carte du service cochée
      const card = checked("service").closest("label");
      const tooLow = card.getBoundingClientRect().bottom - form.getBoundingClientRect().top > window.innerHeight - 90;
      if (tooLow) card.scrollIntoView({ behavior, block: "center" });
      else form.scrollIntoView({ behavior, block: "start" });
      $('.step[data-step="1"] .step__title', form).focus({ preventScroll: true });
    });
  }

  /* ---------- Démarrage ---------- */

  lang = detectLang();
  render();
  initHeader();
  initFlipCards();
  initTips();
  initPrivacy();
  initForm();
  showStep(1, false);

  const serviceParam = (new URLSearchParams(location.search).get("service") || "").toLowerCase();
  if (serviceParam) preselect(serviceParam);
})();
