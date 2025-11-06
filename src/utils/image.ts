/**
 * Get image path with basePath for production
 * In development, returns the path as-is. In production, adds the basePath prefix.
 */
export const getImgPath = (path: string): string => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  if (!basePath) {
    return path;
  }

  if (path.startsWith(basePath)) {
    return path;
  }

  return `${basePath}${path}`;
};

/**
 * Get data file path with basePath for production
 * Used for fetching JSON data files
 */
export const getDataPath = (path: string): string => {
  // In browser/client-side
  if (typeof window !== "undefined") {
    // Try to get basePath from environment variable first
    const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    
    // If we have a basePath from env, use it
    if (envBasePath) {
      const cleanPath = path.startsWith("/") ? path : `/${path}`;
      const cleanBasePath = envBasePath.startsWith("/") ? envBasePath : `/${envBasePath}`;
      const cleanBasePathEnd = cleanBasePath.endsWith("/") ? cleanBasePath.slice(0, -1) : cleanBasePath;
      return `${cleanBasePathEnd}${cleanPath}`;
    }
    
    // Fallback: try to detect from current path (for GitHub Pages, etc.)
    const currentPath = window.location.pathname;
    if (currentPath.includes("/Resume-Nextjs")) {
      return `/Resume-Nextjs${path}`;
    }
    
    // Default: return path as-is
    return path;
  }

  // Server-side or build time
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!basePath) {
    return path;
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const cleanBasePath = basePath.startsWith("/") ? basePath : `/${basePath}`;
  const cleanBasePathEnd = cleanBasePath.endsWith("/") ? cleanBasePath.slice(0, -1) : cleanBasePath;

  if (cleanPath.startsWith(cleanBasePathEnd)) {
    return cleanPath;
  }

  return `${cleanBasePathEnd}${cleanPath}`;
};
