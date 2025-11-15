import { useTranslation } from 'react-i18next'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const timeoutRef = useRef(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleLogoClick = (e) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation to complete, then scroll to top
      timeoutRef.current = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 100)
    } else {
      // We're already on home page, just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const scrollToSection = (sectionId) => {
    // Close mobile menu if open
    setMobileMenuOpen(false)

    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation to complete, then scroll
      timeoutRef.current = setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // We're already on home page, just scroll
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" onClick={handleLogoClick} className="flex items-center cursor-pointer">
            <img
              src="/logo_1024x1024.png"
              alt="Wonderix Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8" aria-label="Desktop navigation">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-primary-500 transition-colors font-medium"
            >
              {t('header.features')}
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-primary-500 transition-colors font-medium"
            >
              {t('header.howItWorks')}
            </button>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-primary-500 transition-colors font-medium"
              aria-label="Blog (desktop navigation)"
            >
              {t('footer.links.blog')}
            </Link>
            <LanguageSwitcher />
            <button
              onClick={() => scrollToSection('waitlist')}
              className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-secondary-500 text-white rounded-full font-medium hover:shadow-lg transition-shadow"
              aria-label="Join waitlist (desktop navigation)"
            >
              {t('header.joinWaitlist')}
            </button>
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-primary-500 transition-colors p-2"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-gray-100 py-4" aria-label="Mobile navigation">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-primary-500 transition-colors font-medium text-left px-2 py-2"
              >
                {t('header.features')}
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-700 hover:text-primary-500 transition-colors font-medium text-left px-2 py-2"
              >
                {t('header.howItWorks')}
              </button>
              <Link
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-primary-500 transition-colors font-medium px-2 py-2"
                aria-label="Blog"
              >
                {t('footer.links.blog')}
              </Link>
              <button
                onClick={() => scrollToSection('waitlist')}
                className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-secondary-500 text-white rounded-full font-medium text-center mx-2"
                aria-label="Join waitlist"
              >
                {t('header.joinWaitlist')}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header