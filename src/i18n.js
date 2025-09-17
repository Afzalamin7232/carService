import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "We Keep Qatar Moving",
        description: "From the scorching desert heat to the bustling city streets..."
      }
    },
    ar: {
      translation: {
        welcome: "نحافظ على قطر تتحرك",
        description: "من حرارة الصحراء الحارقة إلى شوارع المدينة المزدحمة..."
      }
    }
  },
  lng: "ar", // Default language Arabic
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
