import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const { t } = useTranslation()
  
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Wonderix Logo" 
              className="h-10 md:h-12 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              {t('header.features')}
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              {t('header.howItWorks')}
            </button>
            <LanguageSwitcher />
            <button 
              onClick={() => scrollToSection('waitlist')}
              className="px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-medium hover:shadow-lg transition-shadow"
            >
              {t('header.joinWaitlist')}
            </button>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button 
              onClick={() => scrollToSection('waitlist')}
              className="px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full text-sm font-medium"
            >
              {t('header.joinWaitlist')}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header