import { FaCode, FaRobot, FaGraduationCap, FaGamepad, FaPalette, FaChartLine } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Features = () => {
  const { t } = useTranslation()

  const features = [
    {
      icon: <FaCode className="text-3xl" />,
      titleKey: 'features.items.noCode.title',
      descriptionKey: 'features.items.noCode.description',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <FaRobot className="text-3xl" />,
      titleKey: 'features.items.aiPowered.title',
      descriptionKey: 'features.items.aiPowered.description',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      titleKey: 'features.items.madeForEveryone.title',
      descriptionKey: 'features.items.madeForEveryone.description',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FaGamepad className="text-3xl" />,
      titleKey: 'features.items.engagingGames.title',
      descriptionKey: 'features.items.engagingGames.description',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <FaPalette className="text-3xl" />,
      titleKey: 'features.items.customizable.title',
      descriptionKey: 'features.items.customizable.description',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      titleKey: 'features.items.trackProgress.title',
      descriptionKey: 'features.items.trackProgress.description',
      color: 'from-indigo-500 to-indigo-600'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t(feature.titleKey)}
              </h3>
              <p className="text-gray-600">
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