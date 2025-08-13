import { FaRocket, FaPlay } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 mb-8">
            <div className="flex-shrink-0">
              <img 
                src="/logo_1024x1024.png" 
                alt="Wonderix Logo" 
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain animate-fade-in"
              />
            </div>
            
            <div className="text-center lg:text-left flex-1">
              <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-primary-600 text-sm font-medium">
                <FaRocket className="mr-2" />
                {t('hero.introducing')}
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
                {t('hero.headline')}{' '}
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  {t('hero.headlineHighlight')}
                </span>
              </h1>
          
              <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-slide-up">
                {t('hero.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
                <button
                  onClick={scrollToWaitlist}
                  className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  {t('hero.joinWaitlist')}
                </button>
                {/* Demo button - uncomment when video is ready
                <button className="px-8 py-4 bg-white text-gray-700 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-primary-500 transition-colors flex items-center justify-center gap-2">
                  <FaPlay className="text-primary-600" />
                  {t('hero.watchDemo')}
                </button>
                */}
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">0</div>
              <div className="text-sm text-gray-600">{t('hero.stats.noCoding')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">15min</div>
              <div className="text-sm text-gray-600">{t('hero.stats.timeToGame')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">{t('hero.stats.aiPowered')}</div>
            </div>
          </div>
        </div>

        {/* Demo video section - uncomment when video is ready
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-secondary-100 blur-3xl opacity-30"></div>
          <div className="relative bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto">
            <div className="aspect-video bg-white rounded-lg shadow-inner flex items-center justify-center">
              <span className="text-gray-400 text-lg">Interactive Demo Coming Soon</span>
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  )
}

export default Hero