import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enUS from './locales/en-US.json'
import zhTW from './locales/zh-TW.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'en-US': {
        translation: enUS
      },
      'zh-TW': {
        translation: zhTW
      }
    },
    fallbackLng: 'zh-TW', // Default to zh-TW
    lng: 'zh-TW', // Set initial language to zh-TW
    interpolation: {
      escapeValue: false // React already does escaping
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  })

export default i18n