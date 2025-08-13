import { FaComments, FaMagic, FaShare } from 'react-icons/fa'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <FaComments className="text-3xl" />,
      title: 'Describe Your Game',
      description: 'Tell Wonderix what kind of educational game you want to create. Specify the subject, age group, and learning objectives.',
      color: 'from-primary-500 to-primary-600'
    },
    {
      number: '02',
      icon: <FaMagic className="text-3xl" />,
      title: 'AI Creates Instantly',
      description: 'Our AI understands your requirements and generates a complete, playable game with graphics, mechanics, and educational content.',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      number: '03',
      icon: <FaShare className="text-3xl" />,
      title: 'Share & Play',
      description: 'Customize if needed, then share your game with students. Track their progress and adjust difficulty as they learn.',
      color: 'from-green-500 to-green-600'
    }
  ]

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Create Games in{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Three Simple Steps
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            No technical skills needed. If you can describe it, Wonderix can build it.
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
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 relative z-10">
                    {step.description}
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

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl">
            <div className="text-left">
              <p className="text-sm text-gray-600 mb-1">Average time to first game:</p>
              <p className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Under 15 minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks