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
            {t('about.backHome', 'Back to Home')}
          </Link>
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t('about.title', 'About Purix')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.subtitle', 'We\'re on a mission to democratize educational game creation through artificial intelligence')}
            </p>
          </div>
          
          {/* Mission Section */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <FaRocket className="text-3xl text-primary-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {t('about.mission.title', 'Our Mission')}
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('about.mission.content', 'At Purix, we believe every educator should have the power to create engaging, personalized learning experiences without technical barriers. Our flagship product, Wonderix, transforms the way educational games are created by enabling teachers and parents to build interactive learning tools through simple conversation.')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.mission.impact', 'We\'re not just building technology; we\'re building a future where quality education is accessible, engaging, and tailored to every learner\'s needs.')}
              </p>
            </div>
          </div>
          
          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {t('about.values.title', 'Our Values')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <FaLightbulb className="text-3xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t('about.values.innovation.title', 'Innovation')}
                </h3>
                <p className="text-gray-600">
                  {t('about.values.innovation.content', 'Pushing the boundaries of AI to make educational content creation intuitive and powerful.')}
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <FaUsers className="text-3xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t('about.values.accessibility.title', 'Accessibility')}
                </h3>
                <p className="text-gray-600">
                  {t('about.values.accessibility.content', 'Ensuring every educator, regardless of technical expertise, can create amazing learning experiences.')}
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <FaRocket className="text-3xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t('about.values.impact.title', 'Impact')}
                </h3>
                <p className="text-gray-600">
                  {t('about.values.impact.content', 'Measuring our success by the positive change we bring to education worldwide.')}
                </p>
              </div>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t('about.team.title', 'Our Team')}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {t('about.team.content', 'Purix was founded by a passionate team of educators, AI researchers, and product designers who saw the untapped potential of AI in education. With decades of combined experience in educational technology, artificial intelligence, and game design, we\'re uniquely positioned to revolutionize how educational content is created.')}
              </p>
              <p className="text-lg text-gray-700">
                {t('about.team.expertise', 'Our diverse team brings together expertise from leading tech companies, educational institutions, and game studios to create a product that truly understands and serves the needs of educators.')}
              </p>
            </div>
          </div>
          
          {/* Vision Section */}
          <div className="mb-16">
            <div className="text-center bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t('about.vision.title', 'Our Vision')}
              </h2>
              <p className="text-xl text-gray-700 font-medium mb-6">
                {t('about.vision.quote', '"A world where every educator is empowered to create engaging, personalized learning experiences that inspire and educate the next generation."')}
              </p>
              <p className="text-lg text-gray-600">
                {t('about.vision.future', 'By 2030, we envision Wonderix powering millions of educational games worldwide, making quality education more accessible, engaging, and effective for learners everywhere.')}
              </p>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t('about.contact.title', 'Get in Touch')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('about.contact.content', 'We\'d love to hear from you. Whether you\'re an educator, investor, or just curious about what we\'re building.')}
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="mailto:contact@purix.ai"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors"
              >
                <FaEnvelope className="mr-2" />
                {t('about.contact.email', 'Email Us')}
              </a>
              <a 
                href="https://www.linkedin.com/company/105497266"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-full font-medium hover:bg-primary-50 transition-colors"
              >
                <FaLinkedin className="mr-2" />
                {t('about.contact.linkedin', 'Connect on LinkedIn')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About