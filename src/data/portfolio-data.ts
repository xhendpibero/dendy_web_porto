/**
 * Portfolio Data - Imported at build time for static export
 * This ensures the data is available even in static builds
 * 
 * Note: This file imports the JSON from the public folder.
 * The data is bundled at build time, so it works in static exports.
 */

// Import JSON directly - Next.js will bundle this at build time
// JSON import is valid in Next.js with resolveJsonModule enabled in tsconfig.json
import portfolioDataJson from "../../public/data/portfolio-data.json";
import { PortfolioData } from "../utils/portfolio";

// Export the data with proper typing
export const portfolioData: PortfolioData = portfolioDataJson as PortfolioData;

