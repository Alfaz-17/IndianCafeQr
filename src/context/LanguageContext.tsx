"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "gu";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  toggleLanguage: () => {},
});

const STORAGE_KEY = "tic_menu_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  // Read saved preference on mount without causing hydration mismatch
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved === "en" || saved === "gu") {
        setLanguageState(saved);
      }
    } catch {
      // localStorage may fail in restricted/private modes
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "gu" : "en");
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
