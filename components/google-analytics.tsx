"use client"

import Script from "next/script"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

// Replace with your actual GA4 Measurement ID
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: pathname + searchParams.toString(),
      })
    }
  }, [pathname, searchParams])

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

// Analytics helper functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", eventName, parameters)
  }
}

export const trackFormSubmission = (formType: string, language: string) => {
  trackEvent("form_submission", {
    form_type: formType,
    language: language,
    event_category: "engagement",
    event_label: formType,
  })
}

export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent("button_click", {
    button_name: buttonName,
    button_location: location,
    event_category: "engagement",
  })
}

export const trackLanguageChange = (fromLanguage: string, toLanguage: string) => {
  trackEvent("language_change", {
    from_language: fromLanguage,
    to_language: toLanguage,
    event_category: "user_preference",
  })
}
