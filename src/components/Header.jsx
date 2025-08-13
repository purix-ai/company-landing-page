import { useTranslation } from 'react-i18next'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  
  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      // We're already on home page, just scroll
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }
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
            <Link 
              to="/blog"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              {t('footer.links.blog')}
            </Link>
            <LanguageSwitcher />
            <button 
              onClick={() => scrollToSection('waitlist')}
              className="px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-medium hover:shadow-lg transition-shadow"
            >
              {t('header.joinWaitlist')}
            </button>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <Link 
              to="/blog"
              className="text-gray-700 hover:text-primary-600 transition-colors text-sm font-medium"
            >
              {t('footer.links.blog')}
            </Link>
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