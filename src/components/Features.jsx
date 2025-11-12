import { FaGamepad, FaRobot, FaChartLine } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Features = () => {
  const { t } = useTranslation()

  const features = [
    {
      icon: <FaGamepad className="text-4xl" />,
      titleKey: 'features.items.intrinsicIntegration.title',
      subtitleKey: 'features.items.intrinsicIntegration.subtitle',
      descriptionKey: 'features.items.intrinsicIntegration.description',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: <FaRobot className="text-4xl" />,
      titleKey: 'features.items.aiTutoring.title',
      subtitleKey: 'features.items.aiTutoring.subtitle',
      descriptionKey: 'features.items.aiTutoring.description',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      titleKey: 'features.items.parentDashboard.title',
      subtitleKey: 'features.items.parentDashboard.subtitle',
      descriptionKey: 'features.items.parentDashboard.description',
      color: 'from-accent-500 to-accent-600'
    }
  ]

  return (
    <section id="features" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('features.title')}{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {t('features.titleHighlight')}
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border-t-4 border-transparent hover:border-primary-500"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t(feature.titleKey)}
              </h3>
              <p className="text-sm text-primary-600 font-semibold mb-4">
                {t(feature.subtitleKey)}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t(feature.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features