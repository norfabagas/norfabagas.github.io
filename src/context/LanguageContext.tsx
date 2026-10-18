import React, { createContext, useContext, useState, useEffect } from "react";
import { PORTFOLIO_DATA, UI_STRINGS, Locale, LocalizedPortfolioData } from "../data/portfolioData";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (typeof UI_STRINGS)[Locale];
  data: LocalizedPortfolioData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("nb_portfolio_locale");
      if (saved === "en-US" || saved === "id-ID") {
        return saved;
      }
      // Check browser navigator language
      if (navigator.language && navigator.language.startsWith("en")) {
        return "en-US";
      }
      return "id-ID";
    }
    return "id-ID";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("nb_portfolio_locale", locale);
      document.documentElement.lang = locale === "id-ID" ? "id" : "en";
    }
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  const toggleLocale = () => {
    setLocaleState((prev) => (prev === "id-ID" ? "en-US" : "id-ID"));
  };

  const t = UI_STRINGS[locale];
  const data = PORTFOLIO_DATA[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, t, data }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
