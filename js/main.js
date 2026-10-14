/*
 * Cleanton Express Cleaning : comportements de la page.
 * Langue, prix (lus dans CONFIG), onglets de prix, tiroir mobile,
 * liens ?service= et réservation en plusieurs étapes.
 * Aucun texte ni prix ici : les textes viennent de js/i18n.js, les prix de js/config.js.
 */
(function () {
  "use strict";

  const LANGS = ["en", "fr"];
  const STORAGE_KEY = "cleanton-lang";
  const TABS = ["regular", "deep", "move", "recurring"];
  const ADDONS = ["oven", "fridge", "cabinets", "windows", "pets"];
  const FREQ_VALUES = { weekly: "Weekly", biweekly: "Bi-weekly", monthly: "Monthly" };
  const LINK_TO_SERVICE = { regular: "regular", deep: "deep", move: "move", recurring: "regular", pro: "pro" };
  const POSTAL_CODE = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
  const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const SVG_NS = "http://www.w3.org/2000/svg";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let lang = "en";
  let currentTab = "regular";
  let currentStep = 1;
  let sending = false;
  let sendFailed = false;
  let tabChosen = false;        // le client a choisi un onglet de prix lui-même
  let serviceSetByUser = false; // le client a coché un service lui-même dans le formulaire
  const openFaq = new Set();
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

  /* ---------- Prix, pourcentages, téléphone ---------- */

  function money(amount, l) {
    return (l || lang) === "fr" ? amount + " $" : "$" + amount;
  }

  function percent(rate, l) {
    const value = Math.round(rate * 100);
    return (l || lang) === "fr" ? value + " %" : value + "%";
  }

  function discounted(price, rate) {
    return Math.round(price * (1 - rate) + 1e-9);
  }

  function tabPrices(tab) {
    if (tab === "recurring") return CONFIG.prices.regular.map((p) => discounted(p, CONFIG.recurring.biweekly));
    return CONFIG.prices[tab];
  }

  function rateVars(l) {
    return {
      weekly: percent(CONFIG.recurring.weekly, l),
      biweekly: percent(CONFIG.recurring.biweekly, l),
      monthly: percent(CONFIG.recurring.monthly, l)
    };
  }

  const phoneDigits = CONFIG.phone.replace(/\D/g, "");

  function phoneDisplay() {
    const d = phoneDigits.slice(-10);
    return "(" + d.slice(0, 3) + ") " + d.slice(3, 6) + "-" + d.slice(6);
  }

  function commonVars(l) {
    const offer = CONFIG.launchOffer || {};
    return Object.assign(rateVars(l), {
      phone: phoneDisplay(),
      price: money(CONFIG.prices.regular[0], l),
      launch: percent(offer.discount || 0, l),
      clients: offer.clients || ""
    });
  }

  function whatsappHref() {
    const message = lookup(I18N[lang], "whatsapp") || lookup(I18N.en, "whatsapp");
    return "https://wa.me/" + phoneDigits + "?text=" + encodeURIComponent(message);
  }

  /* ---------- Petits outils DOM ---------- */

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function icon(name, className) {
    const svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("class", className);
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    const use = document.createElementNS(SVG_NS, "use");
    use.setAttribute("href", "#i-" + name);
    svg.appendChild(use);
    return svg;
  }

  function leader(className) {
    const span = el("span", className);
    span.setAttribute("aria-hidden", "true");
    return span;
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
    $$("[data-from-price]").forEach((node) => {
      node.textContent = t("services.from", { price: money(CONFIG.prices[node.dataset.fromPrice][0]) });
    });
    $$("[data-regular-alt]").forEach((node) => {
      node.textContent = t("services.regularAlt", { price: money(discounted(CONFIG.prices.regular[0], CONFIG.recurring.biweekly)) });
    });

    const banner = $("[data-launch-offer]");
    if (banner) banner.hidden = !CONFIG.launchOffer;
    syncMenuLabel();
    renderPriceCard(false);
    renderAddonsList();
    renderChecklist();
    renderFaq();
    renderFormLabels();
    refreshForm();
    fieldErrors.forEach((key, name) => setError(name, key));
    updateEmailLabel();
    if (sendFailed) showSendError(true);
    if (sending) $("[data-submit]", form).textContent = t("form.sending");
  }

  /* ---------- Carte des prix ---------- */

  function renderPriceCard(animate) {
    const rows = $("[data-price-rows]");
    if (!rows) return;
    const prices = tabPrices(currentTab);
    rows.replaceChildren(...t("card.sizes").map((label, i) => {
      const onQuote = i >= prices.length;
      const row = el("li", "price-row");
      row.append(
        el("span", "price-row__label", label),
        leader("price-row__leader"),
        el("span", "price-row__price" + (onQuote ? " price-row__price--quote" : ""), onQuote ? t("card.onQuote") : money(prices[i]))
      );
      return row;
    }));
    $("[data-price-desc]").textContent = t("card.desc." + currentTab, rateVars());

    $$("[data-tab]").forEach((tab) => {
      const selected = tab.dataset.tab === currentTab;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    const panel = $("[data-price-panel]");
    panel.setAttribute("aria-labelledby", "tab-" + currentTab);
    fitTabs();
    if (animate && !reduceMotion.matches && panel.animate) {
      panel.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 240, easing: "ease-out" });
    }
  }

  // Les 4 onglets passent en grille 2 × 2 quand ils ne tiennent pas sur une ligne
  function fitTabs() {
    const tabs = $("[data-price-tabs]");
    if (!tabs) return;
    tabs.classList.remove("tabs--grid");
    if (tabs.scrollWidth > tabs.clientWidth + 1) tabs.classList.add("tabs--grid");
  }

  function selectTab(tab, animate) {
    if (!TABS.includes(tab) || tab === currentTab) return;
    currentTab = tab;
    renderPriceCard(animate);
  }

  function initTabs() {
    const list = $("[data-price-tabs]");
    if (!list) return;
    list.addEventListener("click", (event) => {
      const tab = event.target.closest("[data-tab]");
      if (!tab) return;
      tabChosen = true;
      selectTab(tab.dataset.tab, true);
    });
    list.addEventListener("keydown", (event) => {
      const tabs = $$("[data-tab]", list);
      const index = tabs.indexOf(document.activeElement);
      if (index < 0) return;
      let next = null;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") next = tabs[(index + 1) % tabs.length];
      else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = tabs[(index - 1 + tabs.length) % tabs.length];
      else if (event.key === "Home") next = tabs[0];
      else if (event.key === "End") next = tabs[tabs.length - 1];
      if (!next) return;
      event.preventDefault();
      tabChosen = true;
      selectTab(next.dataset.tab, true);
      next.focus();
    });
  }

  /* ---------- Options à la carte, checklist, FAQ ---------- */

  function renderAddonsList() {
    const list = $("[data-addons-list]");
    if (!list) return;
    list.replaceChildren(...ADDONS.map((key) => {
      const item = el("li");
      item.append(
        el("span", "menu-list__label", t("included.addons." + key)),
        leader("menu-list__leader"),
        el("span", "menu-list__price", t("included.addons.price", { price: money(CONFIG.addons[key]) }))
      );
      return item;
    }));
  }

  function renderChecklist() {
    const table = $("[data-checklist-table]");
    if (!table) return;
    const cols = ["regular", "deep", "move"];
    const marks = { Y: "check", O: "plus", N: "minus" };

    const head = el("thead");
    const headRow = el("tr");
    [["task"]].concat(cols.map((c) => [c])).forEach(([key]) => {
      const th = el("th", "", t("checklist.cols." + key));
      th.scope = "col";
      headRow.appendChild(th);
    });
    head.appendChild(headRow);

    const bodies = CHECKLIST.map((group) => {
      const body = el("tbody");
      const groupRow = el("tr", "group-row");
      const groupCell = el("th", "", t("checklist.groups." + group.group));
      groupCell.scope = "rowgroup";
      groupCell.colSpan = 4;
      groupRow.appendChild(groupCell);
      body.appendChild(groupRow);
      group.rows.forEach(([key, values]) => {
        const row = el("tr");
        const label = el("th", "", t("checklist.rows." + key));
        label.scope = "row";
        row.appendChild(label);
        values.split("").forEach((mark) => {
          const cell = el("td");
          cell.append(icon(marks[mark], "mark mark--" + mark), el("span", "visually-hidden", t("checklist.legend." + mark)));
          row.appendChild(cell);
        });
        body.appendChild(row);
      });
      return body;
    });

    table.replaceChildren(head, ...bodies);
  }

  function renderFaq() {
    const wrap = $("[data-faq]");
    if (!wrap) return;
    const count = (lookup(I18N[lang], "faq.items") || []).length;
    const items = [];
    for (let i = 0; i < count; i++) {
      const open = openFaq.has(i);
      const item = el("div", "qa");
      const heading = el("h3", "qa__q");
      const button = el("button", "qa__btn");
      button.type = "button";
      button.id = "faq-q-" + i;
      button.dataset.faq = String(i);
      button.setAttribute("aria-expanded", String(open));
      button.setAttribute("aria-controls", "faq-a-" + i);
      button.append(el("span", "", t("faq.items." + i + ".q")), icon("plus", "qa__icon"));
      heading.appendChild(button);
      const answer = el("div", "qa__a");
      answer.id = "faq-a-" + i;
      answer.hidden = !open;
      answer.appendChild(el("p", "", t("faq.items." + i + ".a")));
      item.append(heading, answer);
      items.push(item);
    }
    wrap.replaceChildren(...items);
  }

  function initFaq() {
    const wrap = $("[data-faq]");
    if (!wrap) return;
    wrap.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-faq]");
      if (!button) return;
      const i = Number(button.dataset.faq);
      const open = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(open));
      $("#faq-a-" + i).hidden = !open;
      if (open) openFaq.add(i); else openFaq.delete(i);
    });
  }

  function openChecklist() {
    const details = $("#checklist");
    if (details) details.open = true;
  }

  /* ---------- En-tête et tiroir mobile ---------- */

  const header = $("[data-header]");
  const drawer = $("[data-drawer]");
  const menuToggle = $("[data-menu-toggle]");
  const mobileBar = $("[data-mobile-bar]");
  let bookingInView = false;

  function drawerOpen() {
    return drawer && !drawer.hidden;
  }

  function syncMenuLabel() {
    if (menuToggle) menuToggle.setAttribute("aria-label", t(drawerOpen() ? "nav.menuClose" : "nav.menuOpen"));
  }

  function syncMobileBar() {
    if (!mobileBar) return;
    const hidden = bookingInView || drawerOpen();
    mobileBar.classList.toggle("is-hidden", hidden);
    mobileBar.inert = hidden;
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
    syncMobileBar();
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
    window.matchMedia("(min-width: 1000px)").addEventListener("change", (event) => {
      if (event.matches && drawerOpen()) setDrawer(false);
    });

    $$("[data-open-checklist]").forEach((link) => link.addEventListener("click", openChecklist));
    window.addEventListener("hashchange", () => {
      if (location.hash === "#checklist") openChecklist();
    });

    const booking = $("#book");
    if (mobileBar && booking && "IntersectionObserver" in window) {
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => { bookingInView = entry.isIntersecting; });
        syncMobileBar();
      }, { rootMargin: "0px 0px -25% 0px" }).observe(booking);
    }
  }

  /* ---------- Réservation ---------- */

  const form = $("#booking-form");
  const field = (name) => form.elements.namedItem(name);
  const checked = (name) => form.querySelector('input[name="' + name + '"]:checked:not(:disabled)');

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

  function renderFormLabels() {
    const select = $("[data-size-select]");
    const selected = select.selectedIndex;
    select.replaceChildren(
      new Option(t("form.step1.sizeChoose"), ""),
      ...t("card.sizes").map((label, i) => new Option(label, I18N.en.card.sizes[i]))
    );
    select.selectedIndex = selected > 0 ? selected : 0;

    $$("[data-freq-label]", form).forEach((span) => {
      const key = span.dataset.freqLabel;
      const name = t("form.step1.frequencies." + key);
      span.textContent = key === "once" ? name : name + " " + t("form.step1.discount", { d: percent(CONFIG.recurring[key]) });
    });
    $$("input[data-freq]", form).forEach((input) => {
      const key = input.dataset.freq;
      if (key !== "once") input.value = FREQ_VALUES[key] + " (-" + Math.round(CONFIG.recurring[key] * 100) + "%)";
    });

    updateAddonPrices();
  }

  function updateAddonPrices() {
    const isMove = serviceKey() === "move";
    $$("[data-addon-price]", form).forEach((span) => {
      const key = span.dataset.addonPrice;
      if (isMove && CONFIG.includedInMove.includes(key)) span.textContent = t("form.step2.included");
      else span.textContent = t(key === "windows" ? "form.step2.priceFrom" : "form.step2.price", { price: money(CONFIG.addons[key]) });
    });
  }

  // Pour un déménagement, four, frigo et armoires sont inclus : cochés et désactivés
  function updateAddonState() {
    const isMove = serviceKey() === "move";
    ADDONS.forEach((key) => {
      const input = form.querySelector('input[data-addon="' + key + '"]');
      if (!input) return;
      const row = input.closest(".check");
      const included = isMove && CONFIG.includedInMove.includes(key);
      if (included) {
        if (!row.classList.contains("is-included")) input.dataset.wasChecked = input.checked ? "1" : "";
        row.classList.add("is-included");
        input.checked = true;
        input.disabled = true;
      } else if (row.classList.contains("is-included")) {
        row.classList.remove("is-included");
        input.checked = input.dataset.wasChecked === "1";
        input.disabled = Boolean(input.closest("[data-when]").hidden);
      }
    });
    updateAddonPrices();
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
    updateAddonState();
    updateOptionalLabels();
    updateEmailLabel();
    updateProgress();
    if (currentStep === 4) updateSummary();
  }

  // Pour les pros, adresse, date et heure d'arrivée sont facultatives : le libellé le dit
  function updateOptionalLabels() {
    const pro = serviceKey() === "pro";
    [["label[for=\"address\"]", "address"], ["label[for=\"date\"]", "date"], ['[data-field="arrival_window"] .label', "arrival"]].forEach(([selector, key]) => {
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

  function setError(name, key) {
    const wrap = form.querySelector('[data-field="' + name + '"]');
    const message = wrap && wrap.querySelector("[data-error]");
    if (key) fieldErrors.set(name, key); else fieldErrors.delete(name);
    if (message) message.textContent = key ? t("form.errors." + key) : "";
    if (wrap) wrap.classList.toggle("has-error", Boolean(key));
    $$('[name="' + name + '"]', form).forEach((control) => {
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
    const residential = Boolean(svc) && svc !== "pro";
    const errors = [];
    const value = (name) => (field(name).value || "").trim();

    if (step === 1) {
      if (!svc) errors.push(["service", "service"]);
      if (residential && !value("home_size")) errors.push(["home_size", "required"]);
      if (svc === "pro" && !checked("pro_type")) errors.push(["pro_type", "required"]);
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
      const first = form.querySelector('[name="' + errors[0][0] + '"]:not(:disabled)');
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

  /* Récapitulatif */

  function optionLabel(input) {
    if (!input) return "";
    const label = input.closest("label");
    if (!label) return input.value;
    const text = label.querySelector(".option-card__name") || label.querySelector(".check__label") || label.querySelector("span");
    return text ? text.textContent.trim() : input.value;
  }

  function formatDate(iso, l) {
    if (!iso) return "";
    const [y, m, d] = iso.split("-").map(Number);
    return new Intl.DateTimeFormat(l === "fr" ? "fr-CA" : "en-CA", {
      weekday: "long", year: "numeric", month: "long", day: "numeric"
    }).format(new Date(y, m - 1, d));
  }

  function gridPrice() {
    const svc = serviceKey();
    if (!svc || svc === "pro") return null;
    const index = $("[data-size-select]").selectedIndex - 1;
    const prices = CONFIG.prices[svc];
    return index >= 0 && index < prices.length ? prices[index] : null;
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
      const units = value("units_or_size");
      add("form.step1.proType",
        [optionLabel(type), units].filter(Boolean).join(", "),
        [type ? type.value : "", units].filter(Boolean).join(", "));
    } else if (svc) {
      const size = $("[data-size-select]");
      const type = checked("property_type");
      const sizeText = size.selectedIndex > 0 ? size.options[size.selectedIndex].text : "";
      add("form.summary.home",
        [sizeText, optionLabel(type)].filter(Boolean).join(", "),
        [size.value, type ? type.value : ""].filter(Boolean).join(", "));
    }

    if (svc === "regular") {
      const freq = checked("frequency");
      add("form.summary.frequency", optionLabel(freq), freq ? freq.value : "");
    }

    if (svc && !pro) {
      const shownAddons = [];
      const plainAddons = [];
      if (svc === "move") {
        const included = CONFIG.includedInMove.map((key) => form.querySelector('input[data-addon="' + key + '"]'));
        shownAddons.push(included.map(optionLabel).join(", ") + " (" + t("form.summary.included") + ")");
        plainAddons.push(included.map((i) => i.value).join(", ") + " (" + t("form.summary.included", null, "en") + ")");
      }
      $$('input[name="addons"]:checked:not(:disabled)', form).forEach((input) => {
        shownAddons.push(optionLabel(input));
        plainAddons.push(input.value);
      });
      if (checked("fragrance_free")) {
        shownAddons.push(t("form.summary.fragrance"));
        plainAddons.push(t("form.summary.fragrance", null, "en"));
      }
      add("form.summary.addons", shownAddons.join(", "), plainAddons.join(", "));
    }

    const date = value("date");
    const arrival = checked("arrival_window");
    const flex = checked("flexibility");
    const when = [formatDate(date, lang), optionLabel(arrival)].filter(Boolean).join(", ");
    const whenPlain = [date ? formatDate(date, "en") : "", arrival ? arrival.value : ""].filter(Boolean).join(", ");
    add("form.summary.when",
      when ? when + (flex ? " (" + optionLabel(flex) + ")" : "") : "",
      whenPlain ? whenPlain + (flex ? " (" + flex.value + ")" : "") : "");

    const unit = value("unit");
    const postalCode = value("postal_code").toUpperCase();
    const addressParts = [value("address"), unit ? "#" + unit.replace(/^#/, "") : "", postalCode, value("city")];
    const address = addressParts.filter(Boolean).join(", ");
    // À l'écran, le code postal ne se coupe pas en deux lignes
    add("form.summary.address", postalCode ? address.replace(postalCode, postalCode.replace(" ", "\u00A0")) : address, address);

    const access = checked("access");
    const elevator = checked("elevator_booking");
    const colon = lang === "fr" ? " : " : ": ";
    add("form.summary.access",
      [optionLabel(access), elevator ? t("form.summary.elevator") + colon + optionLabel(elevator) : ""].filter(Boolean).join(" · "),
      [access ? access.value : "", elevator ? t("form.summary.elevator", null, "en") + ": " + elevator.value : ""].filter(Boolean).join(" · "));

    const price = gridPrice();
    const freq = svc === "regular" ? checked("frequency") : null;
    const freqKey = freq ? freq.dataset.freq : "once";
    const extras = $$('input[name="addons"]:checked:not(:disabled)', form).length > 0;

    english.push(t("form.summary.price", null, "en") + ": " + (price == null ? t("form.summary.onQuote", null, "en") : money(price, "en")));
    if (freqKey !== "once") english.push(t("form.summary.then", { d: "-" + percent(CONFIG.recurring[freqKey], "en") }, "en"));
    if (extras) english.push(t("form.summary.plusAddons", null, "en"));

    return { svc, shown, english: english.join("\n"), price, freqKey, extras };
  }

  function updateSummary() {
    const data = collect();
    const list = $("[data-summary-list]", form);
    list.replaceChildren(...data.shown.flatMap(([label, value]) => [el("dt", "", label), el("dd", "", value)]));

    const priceNode = $("[data-summary-price]", form);
    priceNode.textContent = data.price == null ? t("form.summary.onQuote") : money(data.price);
    priceNode.classList.toggle("is-quote", data.price == null);

    const thenNode = $("[data-summary-then]", form);
    thenNode.hidden = data.freqKey === "once";
    thenNode.textContent = data.freqKey === "once" ? "" : t("form.summary.then", { d: "−" + percent(CONFIG.recurring[data.freqKey]) });

    const plusNode = $("[data-summary-plus]", form);
    plusNode.hidden = !data.extras;
    plusNode.textContent = data.extras ? t("form.summary.plusAddons") : "";
  }

  function fillHiddenFields() {
    const data = collect();
    const serviceInput = checked("service");
    const detail = data.svc === "pro"
      ? ((checked("pro_type") || {}).value || "")
      : (field("home_size").value || "");
    field("lang").value = lang;
    field("summary").value = data.english;
    field("grid_price").value = data.price == null ? "On quote" : money(data.price, "en");
    field("_subject").value = "New booking request: " + (serviceInput ? serviceInput.value : "") + ", " + detail + " (" + field("name").value.trim() + ")";
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
    $$("input[data-addon]", form).forEach((input) => {
      delete input.dataset.wasChecked;
      input.closest(".check").classList.remove("is-included");
    });
    Array.from(fieldErrors.keys()).forEach((name) => setError(name, null));
    serviceSetByUser = false;
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

  // Liens « Réserver » des services, bouton pros et ?service= : onglet + service présélectionné
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
    if (TABS.includes(key)) selectTab(key, false);
    return true;
  }

  function initForm() {
    field("date").min = todayISO();

    form.addEventListener("change", (event) => {
      const name = event.target.name;
      if (name === "service") {
        if (event.isTrusted) serviceSetByUser = true;
        setError("service", null);
        refreshForm();
        clearStaleErrors();
      }
      if (name === "preferred_contact") {
        updateEmailLabel();
        if (fieldErrors.get("email") === "required") setError("email", null);
      }
      if (fieldErrors.has(name)) setError(name, null);
      if (currentStep === 4) updateSummary();
    });
    form.addEventListener("input", (event) => {
      const name = event.target.name;
      if (fieldErrors.has(name)) setError(name, null);
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
      // Boutons « Réserver » génériques : si le client a choisi un onglet de prix et n'a pas encore
      // choisi de service dans le formulaire, on présélectionne le service de cet onglet
      const plainBook = event.target.closest('a[href="#book"]:not([data-book-service])');
      if (plainBook) {
        if (tabChosen && !serviceSetByUser && currentStep === 1) preselect(currentTab);
        return;
      }

      const link = event.target.closest("[data-book-service]");
      if (!link) return;
      event.preventDefault();
      preselect(link.dataset.bookService);
      const behavior = reduceMotion.matches ? "auto" : "smooth";
      if (window.matchMedia("(min-width: 1000px)").matches) {
        $("#book").scrollIntoView({ behavior, block: "start" });
      } else {
        // Sur mobile, directement le formulaire ; sur un petit écran, la carte du service cochée
        const card = checked("service").closest("label");
        const tooLow = card.getBoundingClientRect().bottom - form.getBoundingClientRect().top > window.innerHeight - 90;
        if (tooLow) card.scrollIntoView({ behavior, block: "center" });
        else form.scrollIntoView({ behavior, block: "start" });
      }
      $('.step[data-step="1"] .step__title', form).focus({ preventScroll: true });
    });
  }

  /* ---------- Images absentes : le cadre reste lin, sans icône cassée ---------- */

  function hideMissingImages() {
    $$(".frame img").forEach((img) => {
      if (img.complete && img.naturalWidth > 0) img.classList.add("is-loaded");
      else if (img.complete) img.remove();
    });
  }

  /* ---------- Démarrage ---------- */

  lang = detectLang();
  render();
  initTabs();
  initFaq();
  initHeader();
  initForm();
  showStep(1, false);

  const serviceParam = (new URLSearchParams(location.search).get("service") || "").toLowerCase();
  if (serviceParam) preselect(serviceParam);
  if (location.hash === "#checklist") openChecklist();

  hideMissingImages();

  let resizeFrame = 0;
  window.addEventListener("resize", () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(fitTabs);
  });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitTabs);
})();
