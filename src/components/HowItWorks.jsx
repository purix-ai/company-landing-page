import { FaComments, FaMagic, FaShare } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const HowItWorks = () => {
  const { t } = useTranslation()

  const steps = [
    {
      number: '01',
      icon: <FaComments className="text-3xl" />,
      titleKey: 'howItWorks.steps.describe.title',
      descriptionKey: 'howItWorks.steps.describe.description',
      color: 'from-primary-500 to-primary-600'
    },
    {
      number: '02',
      icon: <FaMagic className="text-3xl" />,
      titleKey: 'howItWorks.steps.aiCreates.title',
      descriptionKey: 'howItWorks.steps.aiCreates.description',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      number: '03',
      icon: <FaShare className="text-3xl" />,
      titleKey: 'howItWorks.steps.sharePlay.title',
      descriptionKey: 'howItWorks.steps.sharePlay.description',
      color: 'from-green-500 to-green-600'
    }
  ]

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {t('howItWorks.titleHighlight')}
            </span>{' '}
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-secondary-200 to-green-200 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative z-10">
                  <div className="absolute -top-4 -left-4 text-6xl font-bold text-gray-100 z-0">
                    {step.number}
                  </div>
                  
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white mb-6 relative z-10`}>
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                    {t(step.titleKey)}
                  </h3>
                  
                  <p className="text-gray-600 relative z-10">
                    {t(step.descriptionKey)}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks