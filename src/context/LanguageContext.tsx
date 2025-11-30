import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import pt from "../i18n/pt.json";
import en from "../i18n/en.json";

type Lang = "pt" | "en";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored === "pt" || stored === "en") {
      setLang(stored);
    }
  }, []);

  const toggleLang = () => {
    const newLang: Lang = lang === "pt" ? "en" : "pt";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  const translations = { pt, en };

  const t = (path: string): string => {
    const parts = path.split(".");
    let result: any = translations[lang];

    for (const part of parts) {
      if (result == null) break;
      result = result[part];
    }

    return typeof result === "string" ? result : "";
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return ctx;
}
