import type { SiteContent } from "@/types/content";

export const siteContent: SiteContent = {
  metadata: {
    siteName: "Ренесанс Центр",
    siteDescription: "Професійна реабілітація та лікування залежностей у Чернівцях",
    logo: "/logo.svg",
    logoAlt: "Логотип Ренесанс Центр",
  },
  navigation: {
    menuItems: [
      { id: "home", label: "Головна", href: "/" },
      { id: "about", label: "Про центр", href: "/about" },
      {
        id: "services",
        label: "Наші послуги",
        href: "/services",
        children: [
          {
            id: "alcohol-treatment",
            label: "Лікування алкоголізму",
            href: "/services/alcohol-treatment",
          },
          {
            id: "drug-treatment",
            label: "Лікування наркоманії",
            href: "/services/drug-treatment",
          },
          {
            id: "detox",
            label: "Детоксикація (виведення із запою)",
            href: "/services/detox",
          },
          {
            id: "gambling-treatment",
            label: "Лікування ігроманії",
            href: "/services/gambling-treatment",
          },
        ],
      },
      { id: "contact", label: "Контакти", href: "/contact" },
    ],
  },
  hero: {
    title: "Ренесанс Центр Чернівці — лікування алкоголізму та наркоманії",
    subtitle: "Анонімна допомога, професійна детоксикація та повний курс реабілітації. Поверніть близьку людину до тверезого життя вже сьогодні.",
    backgroundImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    backgroundImageAlt: "Реабілітаційний центр Ренесанс у Чернівцях",
    ctaButton: {
      label: "Безкоштовна консультація",
      href: "/contact",
    },
    secondaryButton: {
      label: "Наші послуги",
      href: "/services",
    },
  },
  contact: {
    phone: "+38 (068) 420 94 40",
    email: "maxrenes2020@gmail.com",
    address: "м. Чернівці, вул. Хутірська, 23а",
  },
};