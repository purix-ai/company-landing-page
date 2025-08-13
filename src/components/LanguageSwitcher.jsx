import { useTranslation } from 'react-i18next'
import { FaGlobe } from 'react-icons/fa'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const languages = [
    { code: 'zh-TW', name: '繁體中文' },
    { code: 'en-US', name: 'English' }
  ]

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode)
  }

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors">
        <FaGlobe className="text-lg" />
        <span className="text-sm font-medium">
          {languages.find(lang => lang.code === i18n.language)?.name || '繁體中文'}
        </span>
      </button>
      
      <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
              i18n.language === lang.code ? 'text-primary-600 font-medium' : 'text-gray-700'
            } ${lang.code === 'zh-TW' ? 'rounded-t-lg' : 'rounded-b-lg'}`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default LanguageSwitcher