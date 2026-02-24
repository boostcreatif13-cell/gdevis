"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ConversionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page views
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("config", "GA_MEASUREMENT_ID", {
        page_path: pathname,
      });
    }

    // Track CTA clicks
    const trackCTAClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const ctaButton = target.closest("a[href*='demonstration'], a[href*='contact']");
      
      if (ctaButton) {
        const href = (ctaButton as HTMLAnchorElement).href;
        const text = ctaButton.textContent || "";
        
        // Analytics event
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "cta_click", {
            event_category: "engagement",
            event_label: text,
            value: href.includes("demonstration") ? 10 : 5,
          });
        }
      }
    };

    // Track form submissions
    const trackFormSubmit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement;
      const formId = form.id || form.className;
      
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "form_submit", {
          event_category: "conversion",
          event_label: formId,
          value: formId.includes("demonstration") ? 20 : 10,
        });
      }
    };

    document.addEventListener("click", trackCTAClick);
    document.addEventListener("submit", trackFormSubmit);

    return () => {
      document.removeEventListener("click", trackCTAClick);
      document.removeEventListener("submit", trackFormSubmit);
    };
  }, [pathname]);

  return null;
}
