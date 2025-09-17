import { createContext, useState } from "react";

export const LanguageContext = createContext(); // default is undefined if not wrapped

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "en" ? "ar" : "en"));
    document.body.dir = language === "en" ? "rtl" : "ltr"; // adjust text direction
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
