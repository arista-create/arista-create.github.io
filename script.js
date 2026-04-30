document.addEventListener("DOMContentLoaded", function () {

  // ── Traductions ──
  const languageSelect = document.getElementById("language-select");

  const translations = {
    en: {
      navHome: "Home",
      navAbout: "About",
      navServices: "Services",
      navWork: "Creative Focus",
      navContact: "Contact",
      languageLabel: "Language",
      heroEyebrow: "Luxury creative studio in Tangier",
      heroTitle: "Elegant digital presence for brands that want to be remembered.",
      heroLead: "ARISTA helps restaurants, cafes, and beauty brands elevate their image through refined visuals, strategic content, and strong brand identity.",
      heroServices: "Explore services",
      heroProject: "Start a project",
      serviceSocial: "Social Media Management",
      serviceContent: "Content Creation",
      serviceBranding: "Branding",
      serviceMarketing: "Digital Marketing",
      serviceDirection: "Creative Direction",
      presenceEyebrow: "Crafting presence",
      presenceTitle: "We turn brands into experiences that feel modern, elegant, and unforgettable.",
      presenceText: "At ARISTA, content is not treated as decoration. Every post, campaign, shoot, and brand element is designed to make your business feel clearer, more elevated, and more desirable.",
      cardSocialTitle: "Social Media",
      cardSocialText: "Feed curation, captions, strategy, posting rhythm, and Instagram presence.",
      cardBrandTitle: "Brand Identity",
      cardBrandText: "Logo direction, color systems, typography, guidelines, and visual language.",
      cardDirectionTitle: "Creative Direction",
      cardDirectionText: "Concepts, mood boards, shoot direction, and brand positioning.",
      footerText: "Luxury-focused creative studio in Tangier, crafting elegant social media, branding, and digital marketing presence.",
      footerPages: "Pages",
      footerServices: "Services",
      footerContact: "Contact",
      footerTagline: "Modern. Elegant. Unforgettable."
    },
    fr: {
      navHome: "Accueil",
      navAbout: "À propos",
      navServices: "Services",
      navWork: "Univers créatif",
      navContact: "Contact",
      languageLabel: "Langue",
      heroEyebrow: "Studio créatif luxe à Tanger",
      heroTitle: "Une présence digitale élégante pour les marques qui veulent rester en mémoire.",
      heroLead: "ARISTA aide les restaurants, cafés et marques de beauté à élever leur image grâce à des visuels raffinés, du contenu stratégique et une identité forte.",
      heroServices: "Voir les services",
      heroProject: "Démarrer un projet",
      serviceSocial: "Gestion des réseaux sociaux",
      serviceContent: "Création de contenu",
      serviceBranding: "Branding",
      serviceMarketing: "Marketing digital",
      serviceDirection: "Direction créative",
      presenceEyebrow: "Créer une présence",
      presenceTitle: "Nous transformons les marques en expériences modernes, élégantes et inoubliables.",
      presenceText: "Chez ARISTA, le contenu n'est pas une simple décoration. Chaque post, campagne, shooting et élément de marque est pensé pour rendre votre business plus clair, plus premium et plus désirable.",
      cardSocialTitle: "Réseaux sociaux",
      cardSocialText: "Curation du feed, captions, stratégie, rythme de publication et présence Instagram.",
      cardBrandTitle: "Identité de marque",
      cardBrandText: "Direction logo, couleurs, typographies, guidelines et langage visuel.",
      cardDirectionTitle: "Direction créative",
      cardDirectionText: "Concepts, mood boards, direction de shooting et positionnement de marque.",
      footerText: "Studio créatif luxe à Tanger, spécialisé dans les réseaux sociaux, le branding et la présence digitale élégante.",
      footerPages: "Pages",
      footerServices: "Services",
      footerContact: "Contact",
      footerTagline: "Moderne. Élégant. Inoubliable."
    },
    es: {
      navHome: "Inicio",
      navAbout: "Sobre nosotros",
      navServices: "Servicios",
      navWork: "Enfoque creativo",
      navContact: "Contacto",
      languageLabel: "Idioma",
      heroEyebrow: "Estudio creativo de lujo en Tanger",
      heroTitle: "Presencia digital elegante para marcas que quieren ser recordadas.",
      heroLead: "ARISTA ayuda a restaurantes, cafeterias y marcas de belleza a elevar su imagen con visuales refinados, contenido estrategico e identidad fuerte.",
      heroServices: "Ver servicios",
      heroProject: "Iniciar un proyecto",
      serviceSocial: "Gestion de redes sociales",
      serviceContent: "Creacion de contenido",
      serviceBranding: "Branding",
      serviceMarketing: "Marketing digital",
      serviceDirection: "Direccion creativa",
      presenceEyebrow: "Crear presencia",
      presenceTitle: "Convertimos marcas en experiencias modernas, elegantes e inolvidables.",
      presenceText: "En ARISTA, el contenido no es decoracion. Cada publicacion, campana, sesion y elemento de marca esta pensado para hacer que tu negocio se vea mas claro, mas elevado y mas deseable.",
      cardSocialTitle: "Redes sociales",
      cardSocialText: "Curacion del feed, captions, estrategia, ritmo de publicacion y presencia en Instagram.",
      cardBrandTitle: "Identidad de marca",
      cardBrandText: "Direccion de logo, colores, tipografias, guias y lenguaje visual.",
      cardDirectionTitle: "Direccion creativa",
      cardDirectionText: "Conceptos, mood boards, direccion de sesiones y posicionamiento de marca.",
      footerText: "Estudio creativo de lujo en Tanger, especializado en redes sociales, branding y presencia digital elegante.",
      footerPages: "Paginas",
      footerServices: "Servicios",
      footerContact: "Contacto",
      footerTagline: "Moderno. Elegante. Inolvidable."
    }
  };

  function setLanguage(lang) {
    const dictionary = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      const key = element.getAttribute("data-i18n");
      if (dictionary[key]) {
        element.textContent = dictionary[key];
      }
    });
    document.documentElement.lang = lang;
    localStorage.setItem("aristaLanguage", lang);
  }

  if (languageSelect) {
    const savedLanguage = localStorage.getItem("aristaLanguage") || "en";
    languageSelect.value = savedLanguage;
    setLanguage(savedLanguage);
    languageSelect.addEventListener("change", function () {
      setLanguage(languageSelect.value);
    });
  }

  // ── Menu mobile ──
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector(".site-nav");

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", function () {
      const isOpen = siteNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen);
    });
  }

  // ── Navigation active ──
  const body = document.body;
  const currentPage = body.getAttribute("data-current");

  if (currentPage) {
    document.querySelectorAll("[data-nav]").forEach(function (link) {
      if (link.getAttribute("data-nav") === currentPage) {
        link.classList.add("active");
      }
    });
  }

  // ── Onglets services ──
  const serviceTabs = document.querySelectorAll(".service-tab");
  const serviceTitle = document.getElementById("service-title");
  const serviceDescription = document.getElementById("service-description");
  const servicePoints = document.getElementById("service-points");

  const serviceData = {
    social: {
      title: "Social Media Management",
      description: "Content planning, feed curation, captions, and consistency for a polished Instagram presence.",
      points: ["Content planning & strategy", "Instagram feed curation", "Captions & brand tone", "Posting & consistency"]
    },
    content: {
      title: "Content Creation",
      description: "Photo direction, visual concepts, and branded content for restaurants, cafes, and beauty brands.",
      points: ["Photo & video direction", "Visual concepts", "Branded templates", "Story & reel formats"]
    },
    branding: {
      title: "Branding & Identity",
      description: "Logo direction, color palettes, typography, and a complete visual language for your brand.",
      points: ["Logo direction", "Color systems", "Typography", "Brand guidelines"]
    },
    marketing: {
      title: "Digital Marketing",
      description: "Targeted campaigns, paid social strategy, and audience growth for your business.",
      points: ["Paid social campaigns", "Audience targeting", "Performance tracking", "Growth strategy"]
    },
    direction: {
      title: "Creative Direction",
      description: "Mood boards, shoot direction, campaign concepts, and full brand positioning.",
      points: ["Mood boards", "Shoot direction", "Campaign concepts", "Brand positioning"]
    }
  };

  if (serviceTabs.length > 0) {
    serviceTabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        serviceTabs.forEach(function (t) { t.classList.remove("active"); });
        tab.classList.add("active");

        const key = tab.getAttribute("data-service");
        const data = serviceData[key];

        if (data && serviceTitle && serviceDescription && servicePoints) {
          serviceTitle.textContent = data.title;
          serviceDescription.textContent = data.description;
          servicePoints.innerHTML = data.points
            .map(function (p) { return "<li>" + p + "</li>"; })
            .join("");
        }
      });
    });
  }

  // ── Filtres work ──
  const filterButtons = document.querySelectorAll(".filter");
  const workCards = document.querySelectorAll(".work-card");

  if (filterButtons.length > 0) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterButtons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        workCards.forEach(function (card) {
          if (filter === "all" || card.getAttribute("data-category") === filter) {
            card.removeAttribute("hidden");
          } else {
            card.setAttribute("hidden", "");
          }
        });
      });
    });
  }

  // ── Copier le handle Instagram ──
  const copyButton = document.querySelector("[data-copy]");
  const copyStatus = document.querySelector(".copy-status");

  if (copyButton) {
    copyButton.addEventListener("click", function () {
      const text = copyButton.getAttribute("data-copy");
      navigator.clipboard.writeText(text).then(function () {
        if (copyStatus) {
          copyStatus.textContent = "Handle copied!";
          setTimeout(function () {
            copyStatus.textContent = "";
          }, 2500);
        }
      }).catch(function () {
        if (copyStatus) {
          copyStatus.textContent = "Could not copy. Try manually.";
        }
      });
    });
  }

});