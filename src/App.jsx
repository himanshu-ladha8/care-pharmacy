import { useEffect, useState } from "react";
import { SHOP } from "./config.js";
import logoMark from "./assets/logo-mark.png";
import logoFull from "./assets/logo-full.png";
import medicineTablets from "./assets/products/medicine-tablets.jpg";
import painReliefTablets from "./assets/products/medicine-first-aid.jpg";
import bathBodySoap from "./assets/products/bath-body-soap.jpg";
import babyCareProducts from "./assets/products/baby-care-products.jpg";
import firstAidKit from "./assets/products/first-aid-kit.png";
import glucoseMonitor from "./assets/products/glucose-monitor.jpg";
import hairCareProducts from "./assets/products/hair-care-products.jpg";
import oralCareProducts from "./assets/products/oral-care.jpg";
import personalHygieneProducts from "./assets/products/personal-hygiene.png";
import skinCareProducts from "./assets/products/skin-care-products.png";
import vitaminSupplements from "./assets/products/vitamin-supplements.jpg";

const PHOTO_CREDITS = {
  hairCare: {
    title: "Hair shampoos, conditioners and other hair care products in liter bottles for use in hair salon",
    creator: "Pittigrilli",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hair_shampoos,_conditioners_and_other_hair_care_products_in_liter_bottles_for_use_in_hair_salon.jpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  bathBody: {
    title: "Colorful bars of soap on white towel",
    creator: "Horia Varlan",
    source: "Flickr",
    sourceUrl: "https://www.flickr.com/photos/10361931@N06/4263958356",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
  },
  babyCare: {
    title: "Pinkfong Baby Shark Bath & Shampoo Gel, Hillegersberg, Rotterdam (2021)",
    creator: "Donald Trung Quoc Don",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pinkfong_Baby_Shark_Bath_%26_Shampoo_Gel,_Hillegersberg,_Rotterdam_(2021).jpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  oralCare: {
    title: "Shuke cherry blossom enzyme toothpaste on a toothbrush",
    creator: "Nord794ub",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:%E8%88%92%E5%AE%A2_Shuke_cherry_blossom_enzyme_toothpaste_on_a_toothbrush.jpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  personalHygiene: {
    title: "Feminine Hygiene Products in a Walmart",
    creator: "Stilfehler",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Feminine_Hygiene_Products_in_a_Walmart.png",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  vitamins: {
    title: "B vitamin supplement tablets",
    creator: "Ragesoss",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:B_vitamin_supplement_tablets.jpg",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
  },
  diabetes: {
    title: "Accu-Answer blood glucose meter with accessories",
    creator: "Confidence24",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Accu-Answer_blood_glucose_meter_with_accessories.jpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
};

const CATEGORIES = {
  pharmacy: [
    {
      slug: "prescription-medicines",
      mark: "Rx",
      name: "Prescription medicines",
      description: "Help finding the medicines on your prescription.",
      categoryDescription: "Medicines prescribed by qualified healthcare professionals to treat diagnosed medical conditions.",
      subcategories: [
        "Antibiotics",
        "Blood pressure medicines",
        "Cholesterol-lowering medicines",
        "Prescription pain relievers",
        "Allergy medicines",
        "Asthma and respiratory medicines",
        "Gastrointestinal medicines",
        "Thyroid medicines",
        "Cardiovascular medicines",
        "Dermatological prescription medicines",
      ],
      productFields: [
        ["Medicine identity", "Generic name and common brand names, where verified."],
        ["Use", "Therapeutic use and indications."],
        ["Forms and strengths", "Available dosage forms and common strengths, where applicable."],
        ["Prescription status", "Prescription requirements for the specific medicine."],
        ["Safety", "Important precautions and potential side effects."],
      ],
      safetyNote: "Prescription medicines require assessment by an appropriate healthcare professional. We do not recommend prescription treatments without professional assessment; follow your prescriber's instructions.",
      image: medicineTablets,
      imageAlt: "Prescription medicine tablets in blister packs",
    },
    {
      slug: "everyday-medicines",
      mark: "+",
      name: "Everyday medicines",
      description: "Common essentials for everyday health needs.",
      categoryDescription: "Common medicines and healthcare products used to relieve minor symptoms and manage everyday health concerns.",
      subcategories: [
        "Pain and fever relief",
        "Cough, cold, and flu",
        "Allergy relief",
        "Acidity and indigestion",
        "Constipation and diarrhea",
        "Oral rehydration solutions",
        "Motion sickness",
        "Topical pain relief",
        "Basic skin treatments",
        "Eye and ear care products",
      ],
      productFields: [
        ["Product", "Product or generic name."],
        ["Use", "Main use and symptoms it may relieve."],
        ["Forms and pack sizes", "Available dosage forms, common strengths, or pack sizes."],
        ["Age and precautions", "Age restrictions and key precautions."],
        ["Professional advice", "Whether advice from a pharmacist or other healthcare professional is recommended."],
      ],
      safetyNote: "Check the product label and age restrictions before use. Ask a pharmacist or healthcare professional if symptoms are severe, persistent, or you are unsure whether a product is suitable.",
      image: painReliefTablets,
      imageAlt: "Ibuprofen tablets in a medicine blister pack",
    },
    {
      slug: "diabetes-care",
      mark: "D",
      name: "Diabetes care",
      description: "Medicines and everyday diabetes-care essentials.",
      categoryDescription: "Medicines, devices, and supplies that support blood glucose management and diabetes monitoring.",
      subcategories: [
        "Oral diabetes medicines",
        "Insulin and injectable diabetes medicines",
        "Blood glucose monitors",
        "Glucose test strips",
        "Lancets and lancing devices",
        "Continuous glucose monitoring systems",
        "Glucose tablets and emergency glucose products",
        "Diabetes-related foot care",
        "Diabetes-compatible wound care products",
      ],
      productFields: [
        ["Product type", "Product name and whether it is a medicine, monitoring device, or accessory."],
        ["Intended use", "Purpose of the product."],
        ["Forms and models", "Available forms, models, or sizes."],
        ["Compatibility and storage", "Monitoring-supply compatibility and storage requirements, where applicable."],
        ["Safety and prescription", "Important safety considerations and prescription requirements, where applicable."],
      ],
      safetyNote: "Diabetes medicines and monitoring accessories are different product types. Confirm device and test-strip compatibility before use; follow your care team's instructions for medicines and glucose monitoring.",
      image: glucoseMonitor,
      imageAlt: "Blood glucose monitor with diabetes testing supplies",
      photoCredit: PHOTO_CREDITS.diabetes,
    },
    {
      slug: "vitamins-supplements",
      mark: "V",
      name: "Vitamins & supplements",
      description: "Everyday vitamins and wellness support.",
      categoryDescription: "Nutritional supplements intended to help meet dietary requirements and address nutritional deficiencies.",
      subcategories: [
        "Multivitamins",
        "Vitamin A, B-complex, C, D, E, and K",
        "Calcium and magnesium",
        "Iron and folic acid",
        "Zinc and other minerals",
        "Omega-3 supplements",
        "Probiotics",
        "Electrolyte supplements",
        "Nutritional drinks and protein supplements",
        "Age-specific nutritional supplements",
      ],
      productFields: [
        ["Supplement", "Supplement name and nutrient or active ingredient."],
        ["Nutritional purpose", "Intended nutritional purpose, without unsupported disease-prevention or treatment claims."],
        ["Forms and pack sizes", "Available dosage forms, common strengths, or pack sizes."],
        ["Suitable age groups", "Age groups, where established by verified product information."],
        ["Interactions and precautions", "Important interactions, contraindications, and precautions."],
      ],
      safetyNote: "Supplements do not replace a balanced diet or professional care, and should not be presented as preventing or curing disease. Check for interactions and ask a pharmacist if you are pregnant, breastfeeding, or taking other medicines.",
      image: vitaminSupplements,
      imageAlt: "Vitamin supplement tablets",
      photoCredit: PHOTO_CREDITS.vitamins,
    },
    {
      slug: "mother-and-baby",
      mark: "♡",
      name: "Mother & baby",
      description: "Essentials for mums, babies and growing families.",
      categoryDescription: "Products supporting maternal health, breastfeeding, newborn care, and children's everyday healthcare needs.",
      subcategories: [
        "Prenatal vitamins",
        "Folic acid and pregnancy supplements",
        "Breastfeeding and lactation products",
        "Infant vitamin supplements",
        "Baby fever and pain medicines",
        "Saline nasal drops",
        "Diaper rash creams",
        "Baby skincare products",
        "Baby thermometers",
        "Feeding bottles and accessories",
        "Infant oral care",
        "Baby hygiene products",
        "Child-friendly healthcare supplies",
      ],
      productFields: [
        ["Product and use", "Product name and intended use."],
        ["Forms, sizes, and age range", "Available forms, sizes, and labelled age ranges."],
        ["Ingredients", "Main ingredients, where applicable."],
        ["Verified directions", "Usage instructions taken from verified product labelling."],
        ["Age-specific safety", "Warnings and precautions, including suitability for newborns, pregnancy, and breastfeeding."],
      ],
      safetyNote: "Do not use a product for a newborn, during pregnancy, or while breastfeeding unless its verified label and a healthcare professional confirm it is appropriate. Use age-specific medicines only as directed by a qualified professional.",
      image: babyCareProducts,
      imageAlt: "Baby bath and shower gel product",
      photoCredit: PHOTO_CREDITS.babyCare,
    },
    {
      slug: "first-aid-and-devices",
      mark: "✓",
      name: "First aid & devices",
      description: "First aid, monitoring devices and more.",
      categoryDescription: "First-aid supplies, wound-care products, and medical devices for basic injury care and routine health monitoring.",
      subcategories: [
        "Adhesive bandages and plasters",
        "Sterile gauze and dressings",
        "Medical tapes",
        "Antiseptic products",
        "Wound-cleaning solutions",
        "Burn-care dressings",
        "Elastic and compression bandages",
        "Digital thermometers",
        "Blood pressure monitors",
        "Pulse oximeters",
        "Nebulizers",
        "Hot and cold packs",
        "First-aid kits",
        "Protective gloves and disposable medical supplies",
      ],
      productFields: [
        ["Product and type", "Product name and whether it is a first-aid supply, wound-care item, or medical device."],
        ["Intended use", "Purpose and basic care use, as stated by the manufacturer."],
        ["Models and sizes", "Available forms, models, or sizes."],
        ["Device information", "Relevant device features, accessories, or compatibility requirements."],
        ["Safe use", "Important safety instructions, care guidance, and prescription requirements where applicable."],
      ],
      safetyNote: "Follow the manufacturer's instructions for devices and dressings. Seek urgent medical care for serious injuries, severe burns, breathing difficulty, or other emergencies.",
      image: firstAidKit,
      imageAlt: "First-aid kit with emergency medical supplies",
    },
  ],
  parapharmacy: [
    {
      slug: "skin-care",
      mark: "S",
      name: "Skin care",
      description: "Daily care for healthy, happy-feeling skin.",
      detail: "Browse everyday skin-care essentials for your personal routine. Our team can help you check product availability and point you to the right product information.",
      image: skinCareProducts,
      imageAlt: "An assortment of skin-care products",
      highlights: ["Daily cleansing", "Moisturisers and skin care", "Personal-care essentials"],
    },
    {
      slug: "hair-care",
      mark: "H",
      name: "Hair care",
      description: "Shampoo, conditioning and hair-care essentials.",
      detail: "Find everyday hair-care essentials, from cleansing to conditioning. Get in touch to check which products are currently available in store.",
      image: hairCareProducts,
      imageAlt: "Shampoo and conditioner bottles for hair care",
      photoCredit: PHOTO_CREDITS.hairCare,
      highlights: ["Shampoo and cleansing", "Conditioning care", "Everyday hair-care essentials"],
    },
    {
      slug: "bath-and-body",
      mark: "B",
      name: "Bath & body",
      description: "Everyday cleansing and body-care favourites.",
      detail: "Explore everyday bath and body products for your home and personal-care routine. Contact us to check what is in stock.",
      image: bathBodySoap,
      imageAlt: "Bath soap bars arranged on a towel",
      photoCredit: PHOTO_CREDITS.bathBody,
      highlights: ["Bath-time essentials", "Body care", "Everyday cleansing"],
    },
    {
      slug: "oral-care",
      mark: "O",
      name: "Oral care",
      description: "Toothpaste, brushes and fresh-breath essentials.",
      detail: "Ask us about everyday oral-care essentials for your household. We are happy to check availability before you visit.",
      image: oralCareProducts,
      imageAlt: "Toothpaste on a toothbrush",
      photoCredit: PHOTO_CREDITS.oralCare,
      highlights: ["Toothpaste and toothbrushes", "Oral hygiene essentials", "Family everyday care"],
    },
    {
      slug: "personal-hygiene",
      mark: "P",
      name: "Personal hygiene",
      description: "Daily hygiene and personal-care essentials.",
      detail: "Find personal-hygiene products and everyday essentials in one place. Contact our team to ask about a particular product.",
      image: personalHygieneProducts,
      imageAlt: "Personal hygiene products on a store shelf",
      photoCredit: PHOTO_CREDITS.personalHygiene,
      highlights: ["Daily hygiene essentials", "Personal-care products", "Household favourites"],
    },
    {
      slug: "nutrition-and-wellness",
      mark: "N",
      name: "Nutrition & wellness",
      description: "Wellness and nutrition for everyday routines.",
      detail: "Ask our team about nutrition and wellness products for everyday routines. A pharmacist can help with questions about product suitability.",
      image: vitaminSupplements,
      imageAlt: "Vitamin supplement tablets for nutrition and wellness",
      photoCredit: PHOTO_CREDITS.vitamins,
      highlights: ["Everyday wellness", "Nutrition essentials", "Supplement availability"],
    },
  ],
};

const ALL_CATEGORIES = Object.values(CATEGORIES).flat();

const BRANDS = [
  { name: "Cipla", src: "/brands/cipla.png", alt: "Cipla logo" },
  { name: "Sun Pharma", src: "/brands/sun-pharma.png", alt: "Sun Pharma logo" },
  { name: "Abbott", src: "/brands/abbott.png", alt: "Abbott logo" },
  { name: "Dr. Reddy's", src: "/brands/dr-reddys.png", alt: "Dr Reddy's logo" },
  { name: "Himalaya", src: "/brands/himalaya.png", alt: "Himalaya logo" },
  { name: "Dabur", src: "/brands/dabur.png", alt: "Dabur logo" },
];

function useRoute() {
  const get = () => {
    const path = window.location.pathname.replace(/\/+$/, "") || "/";
    const categoryRoute = path.match(/^\/category\/([^/]+)$/);
    if (categoryRoute) return `category:${categoryRoute[1]}`;
    const routes = {
      "/about": "about",
      "/contact": "contact",
      "/terms-and-conditions": "terms",
      "/privacy-policy": "privacy",
    };
    if (routes[path]) return routes[path];

    const legacyHashRoute = window.location.hash.slice(1);
    return path === "/" && ["contact", "about"].includes(legacyHashRoute) ? legacyHashRoute : "home";
  };
  const [route, setRoute] = useState(get);
  useEffect(() => {
    const onChange = () => {
      const r = get();
      setRoute(r);
      const targetId = window.location.hash.slice(1);
      requestAnimationFrame(() => {
        const target = targetId ? document.getElementById(targetId) : null;
        if (target) target.scrollIntoView();
        else window.scrollTo(0, 0);
      });
    };
    window.addEventListener("hashchange", onChange);
    window.addEventListener("popstate", onChange);
    return () => {
      window.removeEventListener("hashchange", onChange);
      window.removeEventListener("popstate", onChange);
    };
  }, []);
  return route;
}

function Header({ route }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const onMenuKeyDown = (event) => {
    if (event.key === "Escape") closeMenu();
  };

  return (
    <header>
      <div className="bar">
        <a className="brand" href="/" aria-label="Care Pharmacy home">
          <img className="mark" src={logoMark} alt="" width="44" height="44" />
          <span>
            <b>{SHOP.name}</b>
            <small>{SHOP.sub}</small>
          </span>
        </a>
        <button
          className={`nav-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          onKeyDown={onMenuKeyDown}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="main-navigation" className={menuOpen ? "is-open" : ""} aria-label="Main">
          <a href="/" aria-current={route === "home" || route.startsWith("category:") ? "page" : undefined} onClick={closeMenu}>Home</a>
          <a href="/about" aria-current={route === "about" ? "page" : undefined} onClick={closeMenu}>About us</a>
          <a href="/contact" aria-current={route === "contact" ? "page" : undefined} onClick={closeMenu}>Contact us</a>
        </nav>
      </div>
    </header>
  );
}

function Home() {
  const [storeType, setStoreType] = useState(() => (
    window.sessionStorage.getItem("care-pharmacy-store-type") === "parapharmacy"
      ? "parapharmacy"
      : "pharmacy"
  ));

  useEffect(() => {
    window.sessionStorage.setItem("care-pharmacy-store-type", storeType);
  }, [storeType]);

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker"><span aria-hidden="true" />Your neighbourhood pharmacy · {SHOP.city}</p>
            <h1>Good care.<br />A little easier.<br /><span>Every single day.</span></h1>
            <p className="lead">
              Find the medicines and everyday essentials your family needs, with friendly help and savings up to 20%.
            </p>
            <div className="btns">
              <a className="btn primary" href="/contact">Ask for a medicine <span aria-hidden="true">↗</span></a>
              <a className="btn ghost" href="#categories">Explore what we stock</a>
            </div>
            <p className="hero-hours"><span aria-hidden="true">◷</span>{SHOP.hours}</p>
          </div>
          <div className="hero-visual" aria-label="A look at medicines and everyday care products">
            <div className="hero-image hero-image-main">
              <img src={medicineTablets} alt="A colourful selection of medicines and tablets" />
            </div>
            <div className="hero-image hero-image-small">
              <img src={skinCareProducts} alt="An assortment of skin-care products" />
            </div>
            <div className="hero-discount">
              <span>Save up to</span>
              <strong>20<sup>%</sup></strong>
              <span>on medicines</span>
            </div>
            <div className="hero-caption">
              <img src={logoMark} alt="" />
              <span><strong>Care, close to home</strong><small>{SHOP.name} · {SHOP.sub}</small></span>
            </div>
          </div>
        </div>
      </section>

      <section className="catalog-section" id="categories">
        <div className="wrap">
          <div className="catalog-heading">
            <div>
              <p className="eyebrow">Find what you need</p>
              <h2>One pharmacy. Two ways to care.</h2>
              <p>Choose a category to explore the essentials we can help you find.</p>
            </div>
            <div className="category-toggle" data-active={storeType} role="group" aria-label="Choose a category">
              <button
                type="button"
                className={storeType === "pharmacy" ? "active" : ""}
                aria-pressed={storeType === "pharmacy"}
                onClick={() => setStoreType("pharmacy")}
              >
                <span aria-hidden="true">✚</span> Pharmacy
              </button>
              <button
                type="button"
                className={storeType === "parapharmacy" ? "active" : ""}
                aria-pressed={storeType === "parapharmacy"}
                onClick={() => setStoreType("parapharmacy")}
              >
                <span aria-hidden="true">✿</span> Parapharmacy
              </button>
            </div>
          </div>
          <div className="category-grid" aria-live="polite">
            {CATEGORIES[storeType].map((category) => (
              <a className="category-tile" href={`/category/${category.slug}`} key={category.name}>
                <img className="category-card-image" src={category.image} alt="" aria-hidden="true" />
                <span className="category-info">
                  <strong>{category.name}</strong>
                  <span>{category.description}</span>
                </span>
                <span className="category-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="brands-section" id="brands" aria-labelledby="brands-title">
        <div className="wrap">
          <div className="brands-heading">
            <p className="eyebrow">Recognised names in healthcare</p>
            <h2 id="brands-title">Brands you know. Care you can trust.</h2>
            <p>Looking for a particular brand? Ask us and we’ll check availability.</p>
          </div>
          <div className="brand-marquee" aria-label="Healthcare brands slider">
            <div className="brand-marquee-track">
              {[...BRANDS, ...BRANDS].map((brand, index) => (
                <div className="brand-logo-item" key={`${brand.name}-${index}`}>
                  <div className="brand-logo-frame">
                    <img className="brand-logo" src={brand.src} alt={brand.alt} loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="brands-note">Brand availability may vary. Please contact us to confirm.</p>
        </div>
      </section>

      <section className="trust-features" id="trust" aria-labelledby="trust-title">
        <div className="wrap">
          <div className="trust-heading">
            <p className="eyebrow">Your health, closer to home</p>
            <h2 id="trust-title">A little more care, in the ways that count.</h2>
          </div>
          <div className="trust-grid">
            <article className="trust-card">
              <span className="trust-icon" aria-hidden="true">♡</span>
              <h3>Friendly local care</h3>
              <p>A neighbourhood pharmacy ready to help you find what you need.</p>
            </article>
            <article className="trust-card">
              <span className="trust-icon" aria-hidden="true">✓</span>
              <h3>Helpful pharmacist support</h3>
              <p>Ask us about your prescription and everyday medicine needs.</p>
            </article>
            <article className="trust-card">
              <span className="trust-icon" aria-hidden="true">20%</span>
              <h3>Clear savings</h3>
              <p>Discounts up to 20%. We’ll confirm your medicine’s price with you.</p>
            </article>
            <article className="trust-card">
              <span className="trust-icon trust-star" aria-hidden="true">★</span>
              <h3>{SHOP.rating} rated on Google</h3>
              <p>Our Google customer rating.</p>
            </article>
          </div>
        </div>
      </section>

    </>
  );
}

function ContactForm({ initialMessage = "" }) {
  const [form, setForm] = useState({ name: "", phone: "", msg: initialMessage });
  const set = (k) => (e) => setForm((current) => ({ ...current, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const text = `Hello ${SHOP.name},\nName: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.msg}`;
    window.open(`https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <label className="f">Your name
        <input value={form.name} onChange={set("name")} autoComplete="name" required />
      </label>
      <label className="f">Phone number
        <input value={form.phone} onChange={set("phone")} type="tel" autoComplete="tel" required />
      </label>
      <label className="f">Medicine name or message
        <textarea value={form.msg} onChange={set("msg")} required />
      </label>
      <button className="btn primary submit-btn" type="submit">Send on WhatsApp</button>
      <p className="fine">This opens WhatsApp with your message ready to send.</p>
    </form>
  );
}

function Contact() {
  return (
    <section className="contact">
      <div className="wrap contact-shell">
        <div className="contact-copy">
          <h1>Contact us</h1>
          <p className="intro">Visit the store, call us, or send a message. We reply as soon as we can.</p>
        </div>
        <div className="cgrid">
          <div className="info">
            <dl className="contact-list">
              <div className="contact-row">
                <dt>Store</dt>
                <dd>{SHOP.name} ({SHOP.sub})</dd>
              </div>
              <div className="contact-row">
                <dt>Address</dt>
                <dd>{SHOP.address}</dd>
              </div>
              <div className="contact-row">
                <dt>Phone</dt>
                <dd><a href={`tel:${SHOP.phoneTel}`}>{SHOP.phoneDisplay}</a></dd>
              </div>
              <div className="contact-row">
                <dt>Hours</dt>
                <dd>{SHOP.hours}</dd>
              </div>
              <div className="contact-row">
                <dt>Map location</dt>
                <dd>{SHOP.plusCode}</dd>
              </div>
            </dl>
            <div className="btns contact-actions">
              <a className="btn primary" href={`tel:${SHOP.phoneTel}`}>Call now</a>
              <a className="btn ghost" href={SHOP.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function CategoryPage({ category }) {
  const initialMessage = `I would like to ask about ${category.name}. Please let me know what is available.`;
  const subcategories = category.subcategories || category.highlights;
  const productFields = category.productFields || [
    ["Product details", "Product names, ingredients, sizes, and intended use are confirmed against verified product information."],
    ["Availability", "Ask the pharmacy to confirm current stock and available options."],
    ["Guidance", "Speak with a pharmacist if you need help choosing a product."],
  ];

  return (
    <>
      <section className="category-hero">
        <div className="wrap category-hero-grid">
          <div className="category-hero-copy">
            <a className="category-back" href="/#categories">← All categories</a>
            <p className="eyebrow">Care Pharmacy · {SHOP.city}</p>
            <h1>{category.name}</h1>
            <p className="category-lead">{category.categoryDescription || category.description}</p>
            <a className="btn primary" href="#category-enquiry">Ask us about this category <span aria-hidden="true">↗</span></a>
          </div>
          <div className="category-hero-media">
            <div className="category-hero-visual">
              <img className="category-photo-main" src={category.image} alt={category.imageAlt} />
              <span className="category-photo-label"><span aria-hidden="true">✚</span> Helpful local care</span>
            </div>
            {category.photoCredit && (
              <p className="category-photo-credit">
                Photo: <a href={category.photoCredit.sourceUrl} target="_blank" rel="noopener noreferrer" title={category.photoCredit.title}>
                  “{category.photoCredit.title}” by {category.photoCredit.creator} · {category.photoCredit.source}
                </a>
                {" · "}
                <a href={category.photoCredit.licenseUrl} target="_blank" rel="noopener noreferrer">
                  {category.photoCredit.license}
                </a>
              </p>
            )}
            <p className="category-photo-note">Illustrative photo only; pictured products and brands may not be in stock.</p>
          </div>
        </div>
      </section>

      <section className="category-details" aria-labelledby="category-range-title">
        <div className="wrap">
          <div className="category-section-heading">
            <div>
              <p className="eyebrow">Browse the range</p>
              <h2 id="category-range-title">Find the type of care you need.</h2>
            </div>
            <p>Ask us to confirm current availability before visiting.</p>
          </div>
          <div className="subcategory-grid">
            {subcategories.map((subcategory, index) => (
              <article className="subcategory-card" key={subcategory}>
                <span className="subcategory-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{subcategory}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-information" aria-labelledby="product-information-title">
        <div className="wrap product-information-grid">
          <div className="product-information-copy">
            <p className="eyebrow">Clear, useful product details</p>
            <h2 id="product-information-title">What to check for each product.</h2>
            <p>Product-specific details should be verified against the package, manufacturer information, and pharmacist guidance. Stock and available options can change.</p>
          </div>
          <dl className="product-field-list">
            {productFields.map(([label, detail]) => (
              <div className="product-field" key={label}>
                <dt>{label}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="wrap category-safety-note">
          <span aria-hidden="true">i</span>
          <p>{category.safetyNote || "Product information is general and availability may vary. Check the product label and ask a pharmacist if you are unsure whether an item is suitable."}</p>
        </div>
      </section>

      <section className="category-enquiry" id="category-enquiry">
        <div className="wrap category-enquiry-grid">
          <div className="category-enquiry-copy">
            <p className="eyebrow">We’re happy to help</p>
            <h2>Ask about {category.name.toLowerCase()}.</h2>
            <p>Send us a message and we’ll help check what is available. Your message opens in WhatsApp so you can review it before sending.</p>
            <a href={`tel:${SHOP.phoneTel}`}>Prefer to call? {SHOP.phoneDisplay}</a>
          </div>
          <ContactForm initialMessage={initialMessage} />
        </div>
      </section>
    </>
  );
}

function About() {
  const productRanges = [
    ["Medicines & healthcare", "Abbott, GSK, Pfizer, Sanofi, Bayer and other leading pharmaceutical brands."],
    ["Skincare", "Cetaphil, CeraVe, Nivea, Neutrogena, Bioderma and La Roche-Posay."],
    ["Hair care", "Dabur, L'Oréal Paris, Head & Shoulders, Pantene, Sunsilk and Parachute."],
    ["Oral care", "Colgate, Oral-B, Sensodyne, Closeup and Pepsodent."],
    ["Personal care & hygiene", "Dove, Lux, Dettol, Lifebuoy, Rexona and Vaseline."],
    ["Baby care", "Johnson's Baby, Pampers, Huggies, Sebamed Baby and Chicco."],
    ["Women's hygiene", "Whisper, Kotex and Stayfree."],
    ["Health & wellness", "Centrum, Ensure, Supradyn and other nutrition and wellness brands."],
    ["Tissues & everyday essentials", "Kleenex, Fine and other trusted household brands."],
  ];

  return (
    <>
      <section className="about-hero">
        <div className="wrap about-grid">
          <div className="about-copy">
            <p className="eyebrow">Proudly serving {SHOP.city}</p>
            <h1>Everyday care, made easier to reach.</h1>
            <p className="about-lead">
              At {SHOP.name} ({SHOP.sub}), we bring medicines, personal care and everyday essentials together
              with trusted brands, helpful service, competitive prices and free home delivery.
            </p>
            <a className="btn primary" href="/contact">Ask us about delivery</a>
          </div>
          <aside className="about-note">
            <span className="about-note-label">Your neighbourhood pharmacy</span>
            <div className="about-logo-frame">
              <img className="logo-full" src={logoFull} alt="Care Pharmacy, Saawaliya Medicohub, Medical Store" />
            </div>
            <p>From prescriptions and refills to skincare, baby care and household essentials, we’re here to help.</p>
            <div className="about-rating">
              <span className="about-rating-stars" aria-label="5 stars">★★★★★</span>
              <strong>{SHOP.rating}</strong>
              <span>Google customer rating</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="about-story" aria-labelledby="about-story-title">
        <div className="wrap about-story-in">
          <div className="about-year"><span>OUR PROMISE</span><strong>Care</strong><small>Close to home</small></div>
          <div className="about-story-copy">
            <p className="eyebrow">Quality, value and convenience</p>
            <h2 id="about-story-title">More of what you need, with savings that matter.</h2>
            <p>
              We believe healthcare and everyday essentials should be accessible and affordable. Our team is
              here to help you find the right section, check current availability and confirm prices before you buy.
              For medicine-related questions, speak with a pharmacist or your healthcare professional.
            </p>
          </div>
        </div>
      </section>

      <section className="about-range" aria-labelledby="about-range-title">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">A wide selection under one roof</p>
            <h2 id="about-range-title">Explore our product range.</h2>
            <p>From pharmacy essentials to personal care and home necessities, find products from familiar brands.</p>
          </div>
          <div className="about-range-grid">
            {productRanges.map(([title, brands]) => (
              <article className="about-range-card" key={title}>
                <h3>{title}</h3>
                <p>{brands}</p>
              </article>
            ))}
          </div>
          <p className="about-range-note">Brand availability may vary depending on current stock and our product range. Contact us to check availability.</p>
        </div>
      </section>

      <section className="block about-values">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Affordable prices, exceptional convenience</p>
            <h2>Good value, brought closer to home.</h2>
            <p>Enjoy savings on medicines and everyday products, with delivery to make shopping easier.</p>
          </div>
          <div className="why">
            <div><span className="value-number">01</span><h3>20% off medicines</h3><p>Save 20% on medicines. Ask us to confirm the price and applicable offer before purchase.</p></div>
            <div><span className="value-number">02</span><h3>Up to 20% off FMCG</h3><p>Get up to 20% off selected everyday FMCG products. Offers and availability may vary.</p></div>
            <div><span className="value-number">03</span><h3>Free home delivery</h3><p>Have your medicines and everyday essentials delivered to your doorstep. Contact us to arrange delivery.</p></div>
          </div>
        </div>
      </section>

      <section className="about-local">
        <div className="wrap about-local-in">
          <div>
            <p className="eyebrow">Right here in your neighbourhood</p>
            <h2>Local care, easy to reach.</h2>
            <p>Your health, your savings and your convenience matter to us. Find us at {SHOP.address}.</p>
          </div>
          <a className="btn" href={SHOP.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
        </div>
      </section>

      <section className="band">
        <div className="wrap band-in">
          <h2>Your health. Your savings. Your convenience—delivered to your doorstep.</h2>
          <a className="btn" href="/contact">Contact us</a>
        </div>
      </section>
    </>
  );
}

function LegalPage({ type }) {
  const isPrivacy = type === "privacy";

  return (
    <section className="legal-page">
      <div className="wrap legal-content">
        <p className="eyebrow">{SHOP.name} · {SHOP.city}</p>
        <h1>{isPrivacy ? "Privacy policy" : "Terms and conditions"}</h1>
        <p className="legal-intro">
          {isPrivacy
            ? "How information is handled when you browse this website or contact our store."
            : "A few useful details about using this website and contacting our pharmacy."}
        </p>
        {isPrivacy ? (
          <>
            <section>
              <h2>Contacting us</h2>
              <p>The contact form opens WhatsApp with the message you provide so you can review and send it. This website does not submit or store that form information. If you choose to send the message, WhatsApp processes it under its own terms and privacy policy.</p>
            </section>
            <section>
              <h2>Information you share</h2>
              <p>If you contact the store by phone, WhatsApp, or in person, we may use the details you choose to share to respond to your enquiry. Please avoid sending unnecessary sensitive personal or medical information through public or shared devices.</p>
            </section>
            <section>
              <h2>Third-party services and links</h2>
              <p>This website links to external services such as WhatsApp and Google Maps. Those services operate independently and have their own privacy practices. Please review their policies before sharing information with them.</p>
            </section>
            <section>
              <h2>Questions</h2>
              <p>For questions about this notice or information you have shared with our store, contact us at <a href={`tel:${SHOP.phoneTel}`}>{SHOP.phoneDisplay}</a> or visit us at {SHOP.address}.</p>
            </section>
          </>
        ) : (
          <>
            <section>
              <h2>Website information</h2>
              <p>We aim to keep the information on this website useful and current. Product details, stock, prices, opening hours, and offers may change; please contact the store to confirm before relying on them.</p>
            </section>
            <section>
              <h2>Medicines and health information</h2>
              <p>Website content is general information only. It is not a diagnosis, medical advice, or a substitute for advice from a qualified healthcare professional. Use medicines only as directed by your doctor or pharmacist, and follow applicable prescription requirements.</p>
            </section>
            <section>
              <h2>Prices and offers</h2>
              <p>Any advertised discount is up to 20%, where applicable. The actual price and discount depend on the medicine and are confirmed by the store. Offers are subject to availability and applicable terms.</p>
            </section>
            <section>
              <h2>Replacement policy</h2>
              <p>Replace medicines in 7 days. Without used.</p>
            </section>
            <section>
              <h2>External websites</h2>
              <p>Links to services such as WhatsApp and Google Maps are provided for convenience. We do not control those services, their content, or their terms.</p>
            </section>
            <section>
              <h2>Contact</h2>
              <p>Questions about these terms? Call <a href={`tel:${SHOP.phoneTel}`}>{SHOP.phoneDisplay}</a> or visit {SHOP.name} at {SHOP.address}.</p>
            </section>
          </>
        )}
        <a className="legal-back" href="/">← Back to home</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-main">
        <div className="footer-about">
          <a className="footer-brand" href="/">
            <img src={logoMark} alt="" width="42" height="42" />
            <span><strong>{SHOP.name}</strong><small>{SHOP.sub}</small></span>
          </a>
          <p>Your neighbourhood pharmacy for everyday medicines, health essentials and friendly local care.</p>
          <a className="footer-directions" href={SHOP.mapsUrl} target="_blank" rel="noopener noreferrer">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
              <circle cx="12" cy="10" r="2.3" />
            </svg>
            Get directions <span aria-hidden="true">↗</span>
          </a>
          <a className="footer-social" href="https://www.instagram.com/carepharmacy06?mdxt=Z2plcGt6MDl2M3Zk" target="_blank" rel="noopener noreferrer">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle className="footer-social-dot" cx="17.5" cy="6.5" r="1" />
            </svg>
            Follow us on Instagram <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <a href="/">Home</a>
          <a href="/about">About us</a>
          <a href="/#categories">Product categories</a>
          <a href="/#brands">Featured brands</a>
          <a href="/contact">Contact us</a>
        </div>
        <div className="footer-column footer-contact">
          <h2>Visit or call</h2>
          <p>{SHOP.address}</p>
          <a href={`tel:${SHOP.phoneTel}`}>{SHOP.phoneDisplay}</a>
          <span>{SHOP.hours}</span>
          <div className="footer-address-qr">
            <img src="/address-qr.png" alt="QR code for the store address" loading="lazy" />
            <span>Scan QR to get address</span>
          </div>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} {SHOP.name} ({SHOP.sub}), {SHOP.city}</span>
        <nav aria-label="Legal">
          <a href="/terms-and-conditions">Terms &amp; conditions</a>
          <a href="/privacy-policy">Privacy policy</a>
        </nav>
        <p>Medicine availability and discounts are subject to confirmation by the store.</p>
      </div>
    </footer>
  );
}

export default function App() {
  const route = useRoute();
  const category = route.startsWith("category:")
    ? ALL_CATEGORIES.find((item) => item.slug === route.slice("category:".length))
    : null;

  useEffect(() => {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const main = document.querySelector("main");
    if (!main) return;

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    const revealTargets = [
      "main > section:not(.hero):not(.category-hero)",
      "main .category-tile",
      "main .brand-logo-item",
      "main .trust-card",
      "main .why > div",
      "main .subcategory-card",
      "main .product-field",
      "main .about-range-card",
      "main .contact-row",
      "main .contact-form",
      "main .about-note",
    ].join(", ");

    const observeRevealTargets = (node) => {
      if (!(node instanceof Element)) return;
      const targets = [];
      if (node.matches(revealTargets)) targets.push(node);
      targets.push(...node.querySelectorAll(revealTargets));

      targets.forEach((target) => {
        if (target.classList.contains("scroll-reveal")) return;
        const siblingIndex = Array.prototype.indexOf.call(target.parentElement.children, target);
        target.style.setProperty("--reveal-delay", `${Math.min(siblingIndex, 4) * 75}ms`);
        target.classList.add("scroll-reveal");
        revealObserver.observe(target);
      });
    };

    observeRevealTargets(main);
    const mutationObserver = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach(observeRevealTargets);
      });
    });
    mutationObserver.observe(main, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [route]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const parallaxElements = document.querySelectorAll(".hero-image-main, .hero-image-small, .category-photo-main");
    if (parallaxElements.length === 0) return;

    let frameId = 0;
    const updateParallax = () => {
      frameId = 0;
      const viewportCenter = window.innerHeight / 2;
      parallaxElements.forEach((element) => {
        const bounds = element.getBoundingClientRect();
        const offset = Math.max(-12, Math.min(12, (bounds.top + bounds.height / 2 - viewportCenter) * 0.025));
        const direction = element.classList.contains("hero-image-small") ? -1 : 1;
        element.style.setProperty("--parallax-y", `${offset * direction}px`);
      });
    };
    const requestParallaxUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
    window.addEventListener("resize", requestParallaxUpdate);

    return () => {
      window.removeEventListener("scroll", requestParallaxUpdate);
      window.removeEventListener("resize", requestParallaxUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
      parallaxElements.forEach((element) => element.style.removeProperty("--parallax-y"));
    };
  }, [route]);

  return (
    <>
      <Header route={route} />
      <main>
        {category ? (
          <CategoryPage category={category} />
        ) : route === "contact" ? (
          <Contact />
        ) : route === "about" ? (
          <About />
        ) : route === "terms" || route === "privacy" ? (
          <LegalPage type={route} />
        ) : (
          <Home />
        )}
      </main>
      <Footer />
    </>
  );
}
