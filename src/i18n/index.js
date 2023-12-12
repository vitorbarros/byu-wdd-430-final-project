import {initReactI18next} from "react-i18next";
import i18n from "i18next";

import translation_en from "./locales/en/translation.json";

const availableLanguages = ['en-US', 'es-ES', 'pt-BR'];

const resources = {
  'en-US': { translation: translation_en },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en-US',
    lng: 'en-US',
    detection: { checkWhitelist: true },
    debug: false,
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
