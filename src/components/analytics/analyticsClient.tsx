'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// Define the gtag function to avoid TypeScript errors
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      // Construct the full URL from the path and search parameters
      const url =
        searchParams.size > 0
          ? `${pathname}?${searchParams.toString()}`
          : pathname;

      // Send a pageview to Google Analytics
      window.gtag('config', 'G-Y483K4ZEBE', {
        page_path: url
      });
    }
  }, [pathname, searchParams]);

  // This component doesn't render anything
  return null;
}
