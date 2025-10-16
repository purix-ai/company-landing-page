import { FaEnvelope, FaCheckCircle, FaUsers } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Waitlist = () => {
  const { t, i18n } = useTranslation()
  
  // Google Form URLs for different languages
  const GOOGLE_FORM_URLS = {
    'zh-TW': 'https://forms.gle/W2ByQBXBbGzwjRP97',
    'en-US': 'https://forms.gle/B191TLxbes4rnDDn9'
  }
  
  const handleJoinWaitlist = () => {
    // Get the appropriate form URL based on current language
    const formUrl = GOOGLE_FORM_URLS[i18n.language] || GOOGLE_FORM_URLS['en-US']
    window.open(formUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="waitlist" className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-8 text-white text-center">
              <FaUsers className="text-5xl mx-auto mb-4 opacity-90" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                {t('waitlist.badge')}
              </h2>
              <p className="text-lg opacity-90">
                {t('waitlist.subtitle')}
              </p>
            </div>
            
            <div className="p-8 lg:p-12">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('waitlist.whyJoin')}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-semibold">{t('waitlist.benefits.earlyAccess.title')}</span> {t('waitlist.benefits.earlyAccess.description')}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-semibold">{t('waitlist.benefits.exclusivePricing.title')}</span> {t('waitlist.benefits.exclusivePricing.description')}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-semibold">{t('waitlist.benefits.shapeProduct.title')}</span> {t('waitlist.benefits.shapeProduct.description')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-8">
                <div className="text-center">
                  <button
                    onClick={handleJoinWaitlist}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <FaEnvelope className="mr-3" />
                    {t('waitlist.joinButton')}
                  </button>
                  
                  <p className="mt-4 text-sm text-gray-600">
                    {t('waitlist.noSpam')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Waitlist