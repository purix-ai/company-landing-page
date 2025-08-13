import { FaCode, FaRobot, FaGraduationCap, FaGamepad, FaPalette, FaChartLine } from 'react-icons/fa'

const Features = () => {
  const features = [
    {
      icon: <FaCode className="text-3xl" />,
      title: 'No-Code Platform',
      description: 'Create complex educational games through simple conversations. Describe what you want, and AI handles the rest.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <FaRobot className="text-3xl" />,
      title: 'AI-Powered Creation',
      description: 'Advanced AI understands educational objectives and automatically generates engaging, age-appropriate content.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: 'Made for Everyone',
      description: 'Intuitive tools for creating educational content. Perfect for teachers, parents, and anyone who wants to make learning fun.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FaGamepad className="text-3xl" />,
      title: 'Engaging Games',
      description: 'Kids love learning through play. Create puzzles, quizzes, adventures, and more to make education fun.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <FaPalette className="text-3xl" />,
      title: 'Fully Customizable',
      description: 'Personalize characters, themes, difficulty levels, and learning objectives to match your needs.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: 'Track Progress',
      description: 'Built-in analytics help you understand how students are learning and where they need extra support.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <section id="features" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Create{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Amazing Educational Games
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Wonderix combines the power of AI with intuitive design to help you build 
            games that kids love and everyone can create.
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
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features