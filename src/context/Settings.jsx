import { createContext, useContext, useEffect, useState } from "react";
import { content, profile } from "../data/content";

const SettingsContext = createContext(null);

const getStored = (key, fallback) => {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
};

const fromUrl = (param, allowed, fallback) => {
  if (typeof window === "undefined") return fallback;
  const value = new URLSearchParams(window.location.search).get(param);
  return allowed.includes(value) ? value : fallback;
};

export function SettingsProvider({ children }) {
  const [lang, setLang] = useState(() => fromUrl("lang", ["en", "es"], getStored("cv-lang", "en")));
  const [theme, setTheme] = useState(() =>
    fromUrl("theme", ["dark", "light"], getStored("cv-theme", "dark"))
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("cv-theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    try {
      localStorage.setItem("cv-lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const t = content[lang] ?? content.en;

  return (
    <SettingsContext.Provider
      value={{
        lang,
        setLang,
        theme,
        setTheme,
        t,
        profile,
        toggleTheme: () => setTheme((v) => (v === "dark" ? "light" : "dark")),
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => useContext(SettingsContext);
