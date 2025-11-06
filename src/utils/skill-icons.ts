/**
 * Skill Icons Utility
 * Maps skill names to their icon paths or CDN URLs
 * 
 * Icons can be:
 * 1. Local SVG files in public/images/home/education-skill/
 * 2. CDN URLs from simple-icons or similar services
 * 3. Data URIs for inline SVGs
 */

export interface SkillIconConfig {
  path: string;
  type: 'local' | 'cdn' | 'data';
}

/**
 * Get icon path/URL for a skill
 * Returns local path if available, otherwise falls back to CDN
 */
export function getSkillIconPath(skillName: string): string {
  const iconMap: Record<string, string> = {
    // Web Frontend Frameworks
    "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Nuxt": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
    "NextJS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "SolidJS": "https://cdn.simpleicons.org/solidjs/2c4f7c",
    
    // Mobile Frameworks
    "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Ionic": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg",
    "Flutter": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    
    // Languages
    "Javascript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    "Scala": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg",
    
    // UI/UX Tools (existing local icons)
    "Figma": "/images/home/education-skill/figma-icon.svg",
    "Photoshop": "/images/home/education-skill/photoshop-icon.svg",
    "Sketch": "/images/home/education-skill/sketch-icon.svg",
    "Adobe XD": "/images/home/education-skill/adobe-icon.svg",
    "Framer": "/images/home/education-skill/framer-icon.svg",
    "Web Flow": "/images/home/education-skill/figma-icon.svg", // Fallback
    
    // Testing & Infrastructure
    "Pytest": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "CircleCI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg",
    "Jenkins": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    "Karma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/karma/karma-original.svg",
    "Github": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "Gitlab": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    "Azure": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  };

  // Normalize skill name (handle variations)
  const normalizedName = skillName.trim();
  
  // Direct match
  if (iconMap[normalizedName]) {
    return iconMap[normalizedName];
  }
  
  // Case-insensitive match
  const lowerName = normalizedName.toLowerCase();
  for (const [key, value] of Object.entries(iconMap)) {
    if (key.toLowerCase() === lowerName) {
      return value;
    }
  }
  
  // Partial match (e.g., "React Native" matches "React")
  for (const [key, value] of Object.entries(iconMap)) {
    if (lowerName.includes(key.toLowerCase()) || key.toLowerCase().includes(lowerName)) {
      return value;
    }
  }
  
  // Fallback to default icon
  return "/images/home/education-skill/figma-icon.svg";
}

/**
 * Check if icon is from CDN (external URL)
 */
export function isExternalIcon(iconPath: string): boolean {
  return iconPath.startsWith("http://") || iconPath.startsWith("https://");
}

