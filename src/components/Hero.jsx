import { FaRocket, FaPlay, FaCalendarAlt } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()

  // Google Calendar appointment scheduling URL
  const SCHEDULE_URL = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3EF7SxLVJo_pux9CiaYESLuqKc2InXKTopQ97w80HLzYVwi74C8yi39togkEtk4F4Fj4cG21Ue?gv=true'

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSchedule = () => {
    window.open(SCHEDULE_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-primary-500/10 via-accent-500/10 to-yellow-500/10 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-yellow-500/5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 animate-fade-in">
                {t('hero.headline')}{' '}
                <span className="bg-gradient-to-r from-yellow-500 to-secondary-500 bg-clip-text text-transparent">
                  {t('hero.headlineEngaging')}
                </span>{' '}
                {t('hero.headlineAnd')}{' '}
                <span className="bg-gradient-to-r from-primary-500 to-deepBlue-500 bg-clip-text text-transparent">
                  {t('hero.headlineEffective')}
                </span>
                {t('hero.headlineEnd')}{' '}
                <span className="bg-gradient-to-r from-accent-500 to-aqua-500 bg-clip-text text-transparent">
                  {t('hero.headlineHighlight')}
                </span>
              </h1>

              <p className="text-2xl font-semibold text-gray-700 mb-6 animate-fade-in">
                {t('hero.subheadline')}
              </p>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up">
                {t('hero.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
                <button
                  onClick={scrollToWaitlist}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-secondary-500 text-white rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  {t('hero.joinWaitlist')}
                </button>
                <button
                  onClick={handleSchedule}
                  className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <FaCalendarAlt />
                  {t('hero.scheduleWithFounder')}
                </button>
                {/* Demo button - uncomment when video is ready
                <button className="px-8 py-4 bg-white text-gray-700 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-primary-500 transition-colors flex items-center justify-center gap-2">
                  <FaPlay className="text-primary-600" />
                  {t('hero.watchDemo')}
                </button>
                */}
              </div>
            </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-secondary-500 bg-clip-text text-transparent">50%</div>
              <div className="text-sm text-gray-600">{t('hero.stats.learningBoost')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-secondary-500 bg-clip-text text-transparent">7x</div>
              <div className="text-sm text-gray-600">{t('hero.stats.activeTime')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-secondary-500 bg-clip-text text-transparent">24/7</div>
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