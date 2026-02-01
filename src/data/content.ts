import type { SiteContent } from "@/types/content";

export const siteContent: SiteContent = {
  metadata: {
    siteName: "Ренесанс Центр",
    siteDescription: "Професійна реабілітація та медична допомога в Чернівцях",
    logo: "/logo.svg",
    logoAlt: "Логотип Ренесанс Центр",
  },
  navigation: {
    menuItems: [
      { id: "home", label: "Головна", href: "/" },
      { id: "about", label: "Про Центр", href: "#about" },
      { id: "services", label: "Послуги", href: "#services" },
      { id: "contact", label: "Контакти", href: "#contact" },
    ],
  },
  hero: {
    title: "Ренесанс Центр Чернівці — Ваш шлях до відновлення",
    subtitle: "Професійне лікування алкоголізму, наркоманії та ігрової залежності. Надаємо анонімну допомогу та детоксикацію під наглядом фахівців у Чернівцях.",
    backgroundImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    backgroundImageAlt: "Реабілітаційний центр Ренесанс Центр у Чернівцях",
    ctaButton: {
      label: "Записатися на консультацію",
      href: "#contact",
    },
    secondaryButton: {
      label: "Наші послуги",
      href: "#services",
    },
  },
  services: {
    title: "Наші спеціалізовані послуги",
    items: [
      {
        id: "alcohol-treatment",
        title: "Лікування алкоголізму в Чернівцях",
        description: "Комплексна терапія, виведення із запою та психологічна підтримка в центрі Ренесанс.",
        href: "/services/alcohol-treatment",
      },
      {
        id: "drug-treatment",
        title: "Допомога при наркоманії в Чернівцях",
        description: "Анонімне лікування наркотичної залежності з використанням передових методів реабілітації.",
        href: "/services/drug-treatment",
      },
      {
        id: "gambling-treatment",
        title: "Лікування ігроманії (лудоманії)",
        description: "Професійна психологічна допомога у подоланні залежності від азартних та комп'ютерних ігор.",
        href: "/services/gambling-treatment",
      },
      {
        id: "detox",
        title: "Детоксикація та виведення із запою",
        description: "Швидка медична допомога в Чернівцях для очищення організму та зняття абстинентного синдрому.",
        href: "/services/detox",
      },
    ],
  },
  contact: {
    phone: "+38 (068) 420 94 40",
    email: "maxrenes2020@gmail.com",
    address: "м. Чернівці, вул. Хутірська, 23а",
  },
};