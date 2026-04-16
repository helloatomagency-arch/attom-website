"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Lang = "en" | "pt";
type Theme = "light" | "dark";

interface AppContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const AppContext = createContext<AppContextType>({
  lang: "en",
  setLang: () => {},
  theme: "light",
  setTheme: () => {},
});

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    const savedLang = localStorage.getItem("attom_lang") as Lang | null;
    const savedTheme = localStorage.getItem("attom_theme") as Theme | null;
    if (savedLang) setLangState(savedLang);
    if (savedTheme) setThemeState(savedTheme);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("attom_lang", l);
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem("attom_theme", t);
  };

  return (
    <AppContext.Provider value={{ lang, setLang, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}