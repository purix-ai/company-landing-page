import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enUS from './locales/en-US.json'
import zhTW from './locales/zh-TW.json'

// Custom language detector for Taiwan-specific detection
const customDetector = {
  name: 'taiwanDetector',
  lookup() {
    // Check if user has manually selected a language (stored in localStorage)
    const stored = localStorage.getItem('i18nextLng')
    if (stored) return stored
    
    // Check browser language
    const browserLang = navigator.language || navigator.languages?.[0]
    
    // Only show Chinese for Taiwan users (zh-TW)
    if (browserLang === 'zh-TW') {
      return 'zh-TW'
    }
    
    // All other users get English
    return 'en-US'
  },
  cacheUserLanguage(lng) {
    localStorage.setItem('i18nextLng', lng)
  }
}

// Create a new language detector instance
const languageDetector = new LanguageDetector()
languageDetector.addDetector(customDetector)

i18n
  .use(languageDetector)
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
    fallbackLng: 'en-US', // Default to English for all non-Taiwan users
    interpolation: {
      escapeValue: false // React already does escaping
    },
    detection: {
      order: ['taiwanDetector'], // Use our custom detector
      caches: ['localStorage']
    }
  })

export default i18n