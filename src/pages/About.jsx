import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaLinkedin, FaEnvelope, FaRocket, FaLightbulb, FaUsers } from 'react-icons/fa'
import SEO from '../components/SEO'

const About = () => {
  const { t } = useTranslation()
  
  return (
    <>
      <SEO 
        title="About Us | Purix - Our Mission to Transform Education"
        description="Learn about Purix's mission to democratize educational game creation through AI. Meet our team and discover how we're empowering educators worldwide."
        keywords="about Purix, educational technology company, AI education mission, Wonderix team, edtech innovation"
        url="https://www.purix.ai/about"
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            to="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-8"
          >
            <FaArrowLeft className="mr-2" />
            {t('about.backHome')}
          </Link>
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <img 
                src="/logo.png" 
                alt="Purix Logo" 
                className="h-12 md:h-16 w-auto object-contain animate-fade-in"
              />
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                {t('about.title')}
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
          
          {/* Mission Section */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <FaRocket className="text-3xl text-primary-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {t('about.mission.title')}
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('about.mission.content')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.mission.impact')}
              </p>
            </div>
          </div>
          
          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {t('about.values.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <FaLightbulb className="text-3xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t('about.values.innovation.title')}
                </h3>
                <p className="text-gray-600">
                  {t('about.values.innovation.content')}
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <FaUsers className="text-3xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t('about.values.accessibility.title')}
                </h3>
                <p className="text-gray-600">
                  {t('about.values.accessibility.content')}
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <FaRocket className="text-3xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t('about.values.impact.title')}
                </h3>
                <p className="text-gray-600">
                  {t('about.values.impact.content')}
                </p>
              </div>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t('about.team.title')}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {t('about.team.content')}
              </p>
              <p className="text-lg text-gray-700 mb-6">
                {t('about.team.personal')}
              </p>
              <p className="text-lg text-gray-700">
                {t('about.team.expertise')}
              </p>
            </div>
          </div>
          
          {/* Vision Section */}
          <div className="mb-16">
            <div className="text-center bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t('about.vision.title')}
              </h2>
              <p className="text-xl text-gray-700 font-medium">
                {t('about.vision.quote')}
              </p>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t('about.contact.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('about.contact.content')}
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="mailto:contact@purix.ai"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors"
              >
                <FaEnvelope className="mr-2" />
                {t('about.contact.email')}
              </a>
              <a 
                href="https://www.linkedin.com/company/105497266"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-full font-medium hover:bg-primary-50 transition-colors"
              >
                <FaLinkedin className="mr-2" />
                {t('about.contact.linkedin')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About