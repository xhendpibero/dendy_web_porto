/**
 * Portfolio Data Utilities
 * Centralized utilities for fetching and managing portfolio data
 */

import { getDataPath } from "./image";

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  summary: string;
  about: string;
  location: string;
  status: string;
  roles: string[];
  stats: {
    yearsExperience: string;
    happyClients: string;
    projectsCompleted: string;
  };
  languages: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  website: string;
}

export interface Experience {
  id: string;
  year: string;
  title: string;
  company: string;
  location: string;
  type: string;
  product?: string;
  techstack?: string;
  description: string;
  clients?: Array<{ name: string; description: string }>;
  products?: Array<{ name: string; description: string }>;
  projects?: Array<{ name: string; description: string }>;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  image: string;
  slug: string;
  url?: string;
  period: string;
  role: string;
  location: string;
  techstack?: string;
  description: string;
}

export interface Education {
  id: string;
  title: string;
  degree: string;
  description: string;
}

export interface Skill {
  name: string;
  rating: number;
}

export interface Skills {
  webFrontend: Skill[];
  mobileFrontend: Skill[];
  languages: Skill[];
  uiux: Skill[];
  testing: Skill[];
  infrastructure: Skill[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  contact: ContactInfo;
  experience: Experience[];
  projects: Project[];
  education: Education[];
  skills: Skills;
  certifications: string[];
}

let portfolioDataCache: PortfolioData | null = null;

/**
 * Fetch portfolio data from JSON file
 * Uses caching to avoid multiple fetches
 * Falls back to imported data if fetch fails (for static export)
 */
export async function fetchPortfolioData(): Promise<PortfolioData> {
  if (portfolioDataCache) {
    return portfolioDataCache;
  }

  // Try to import the data directly first (works in static export)
  try {
    // Dynamic import that works in both dev and production
    const { portfolioData } = await import("../data/portfolio-data");
    portfolioDataCache = portfolioData;
    return portfolioDataCache;
  } catch (importError) {
    // If import fails, try fetching from public folder
    try {
      const dataPath = getDataPath("/data/portfolio-data.json");
      
      // Try fetching with the resolved path
      let res = await fetch(dataPath);
      
      // If that fails, try without basePath (for root deployment)
      if (!res.ok && dataPath !== "/data/portfolio-data.json") {
        res = await fetch("/data/portfolio-data.json");
      }
      
      // If still fails, try with just the filename
      if (!res.ok) {
        res = await fetch("data/portfolio-data.json");
      }
      
      if (!res.ok) {
        throw new Error(`Failed to fetch portfolio data: ${res.status} ${res.statusText}. Tried: ${dataPath}, /data/portfolio-data.json, data/portfolio-data.json`);
      }
      
      const data = await res.json();
      portfolioDataCache = data as PortfolioData;
      return portfolioDataCache;
    } catch (fetchError) {
      console.error("Error fetching portfolio data:", fetchError);
      // Return fallback data structure
      return {
        personal: {
          name: "Dendy Sapto Adi",
          title: "Fullstack Developer",
          subtitle: "",
          summary: "",
          about: "",
          location: "",
          status: "",
          roles: [],
          stats: {
            yearsExperience: "7+",
            happyClients: "50+",
            projectsCompleted: "100+",
          },
          languages: [],
        },
        contact: {
          phone: "+62 896-0258-9896",
          email: "dendysaptoadi160@gmail.com",
          linkedin: "https://linkedin.com/in/dendysaptoadi",
          github: "https://github.com/xhendpibero",
          website: "",
        },
        experience: [],
        projects: [],
        education: [],
        skills: {
          webFrontend: [],
          mobileFrontend: [],
          languages: [],
          uiux: [],
          testing: [],
          infrastructure: [],
        },
        certifications: [],
      };
    }
  }
}

/**
 * Get contact bar data formatted for ContactBar component
 */
export function getContactBarData(contact: ContactInfo) {
  return {
    contactItems: [
      {
        type: "email",
        label: contact.email,
        icon: "/images/icon/mail-icon.svg",
        link: `mailto:${contact.email}`,
      },
      {
        type: "phone",
        label: contact.phone,
        icon: "/images/icon/call-icon.svg",
        link: `tel:${contact.phone.replace(/\s/g, "")}`,
      },
      ...(contact.website
        ? [
            {
              type: "website",
              label: contact.website,
              icon: "/images/icon/web-icon.svg",
              link: contact.website,
            },
          ]
        : []),
    ],
    socialItems: [
      {
        platform: "linkedin",
        icon: "/images/icon/linkedin-icon.svg",
        link: contact.linkedin,
      },
      {
        platform: "github",
        icon: "/images/icon/web-icon.svg",
        link: contact.github,
      },
    ],
  };
}

/**
 * Get all skills flattened for display
 */
export function getAllSkills(skills: Skills): Array<Skill & { category: string }> {
  return [
    ...skills.webFrontend.map((s) => ({ ...s, category: "Web Frontend" })),
    ...skills.mobileFrontend.map((s) => ({ ...s, category: "Mobile Frontend" })),
    ...skills.languages.map((s) => ({ ...s, category: "Languages" })),
    ...skills.uiux.map((s) => ({ ...s, category: "UI/UX" })),
    ...skills.testing.map((s) => ({ ...s, category: "Testing" })),
    ...skills.infrastructure.map((s) => ({ ...s, category: "Infrastructure" })),
  ];
}

/**
 * Clear portfolio data cache (useful for development/testing)
 */
export function clearPortfolioCache() {
  portfolioDataCache = null;
}

