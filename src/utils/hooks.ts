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
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error("Failed to load portfolio data"));
        }
      } finally {
        if (isMounted) {
          setLoading(false);
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

