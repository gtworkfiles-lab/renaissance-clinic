// CMS Content Types
// These types define the structure of content that will come from your headless CMS

export interface MenuItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
  children?: MenuItem[];
}

export interface HeroContent {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  backgroundImageAlt?: string;
  ctaButton?: {
    label: string;
    href: string;
  };
  secondaryButton?: {
    label: string;
    href: string;
  };
}

export interface SiteMetadata {
  siteName: string;
  siteDescription: string;
  logo?: string;
  logoAlt?: string;
}

export interface ContactInfo {
  phone?: string;
  email?: string;
  address?: string;
}

export interface SiteContent {
  metadata: SiteMetadata;
  navigation: {
    menuItems: MenuItem[];
  };
  hero: HeroContent;
  contact?: ContactInfo;
}
