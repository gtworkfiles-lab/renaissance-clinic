import type { SiteContent } from "@/types/content";

/**
 * Mock content data - Replace this with your headless CMS integration
 *
 * To connect to a headless CMS:
 * 1. Install your CMS client (e.g., @sanity/client, contentful, etc.)
 * 2. Replace the siteContent object with a fetch function
 * 3. Update the getContent() function in @/lib/cms.ts
 *
 * Supported CMS options:
 * - Sanity: https://www.sanity.io/
 * - Contentful: https://www.contentful.com/
 * - Strapi: https://strapi.io/
 * - Prismic: https://prismic.io/
 * - Hygraph (GraphCMS): https://hygraph.com/
 */

export const siteContent: SiteContent = {
  metadata: {
    siteName: "Renesans Clinic",
    siteDescription: "Professional rehabilitation and medical services",
    logo: "/logo.svg",
    logoAlt: "Renesans Clinic Logo",
  },
  navigation: {
    menuItems: [
      {
        id: "home",
        label: "Home",
        href: "/",
      },
      {
        id: "about",
        label: "About Us",
        href: "/about",
      },
      {
        id: "services",
        label: "Services",
        href: "/services",
        children: [
          {
            id: "rehabilitation",
            label: "Rehabilitation",
            href: "/services/rehabilitation",
          },
          {
            id: "physiotherapy",
            label: "Physiotherapy",
            href: "/services/physiotherapy",
          },
          {
            id: "diagnostics",
            label: "Diagnostics",
            href: "/services/diagnostics",
          },
        ],
      },
      {
        id: "team",
        label: "Our Team",
        href: "/team",
      },
      {
        id: "contact",
        label: "Contact",
        href: "/contact",
      },
    ],
  },
  hero: {
    title: "Your Path to Recovery Starts Here",
    subtitle: "Expert rehabilitation services tailored to your unique needs. Our dedicated team helps you regain strength, mobility, and confidence.",
    backgroundImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    backgroundImageAlt: "Modern rehabilitation center",
    ctaButton: {
      label: "Book Appointment",
      href: "/contact",
    },
    secondaryButton: {
      label: "Learn More",
      href: "/about",
    },
  },
  contact: {
    phone: "+380 (12) 345-6789",
    email: "info@renesans-clinic.com",
    address: "123 Medical Center Street, Chernivtsi, Ukraine",
  },
};
