/**
 * Custom React Hooks for Portfolio
 */

import { useEffect, useState } from "react";
import { fetchPortfolioData, PortfolioData } from "./portfolio";

/**
 * Hook to fetch and manage portfolio data
 * Provides loading and error states
 */
export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        const portfolioData = await fetchPortfolioData();
        if (isMounted) {
          setData(portfolioData);
          setLoading(false);
        }
      } catch (err) {
        console.error("Error in usePortfolioData:", err);
        if (isMounted) {
          setError(err instanceof Error ? err : new Error("Failed to load portfolio data"));
          setLoading(false);
          // Still set data to prevent infinite loading
          // fetchPortfolioData returns fallback data, so this shouldn't happen
          const fallbackData = await fetchPortfolioData();
          setData(fallbackData);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, loading, error };
}

