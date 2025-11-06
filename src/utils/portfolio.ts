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
  period: string;
  role: string;
  location: string;
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
 */
export async function fetchPortfolioData(): Promise<PortfolioData> {
  if (portfolioDataCache) {
    return portfolioDataCache;
  }

  try {
    const res = await fetch(getDataPath("/data/portfolio-data.json"));
    if (!res.ok) {
      throw new Error(`Failed to fetch portfolio data: ${res.statusText}`);
    }
    const data = await res.json();
    portfolioDataCache = data as PortfolioData;
    return portfolioDataCache;
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    throw error;
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

