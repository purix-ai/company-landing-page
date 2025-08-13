import { FaEnvelope, FaCheckCircle, FaUsers } from 'react-icons/fa'

const Waitlist = () => {
  // Replace this with your actual Google Form URL
  const GOOGLE_FORM_URL = 'https://forms.google.com/your-form-url-here'
  
  const handleJoinWaitlist = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="waitlist" className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-8 text-white text-center">
              <FaUsers className="text-5xl mx-auto mb-4 opacity-90" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                Be Among the First
              </h2>
              <p className="text-lg opacity-90">
                Join our exclusive waitlist and get early access to Wonderix
              </p>
            </div>
            
            <div className="p-8 lg:p-12">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Join the Waitlist?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-semibold">Early Access:</span> Be the first to try Wonderix when we launch
                    </p>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-semibold">Exclusive Pricing:</span> Get a lifetime discount as an early supporter
                    </p>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-semibold">Shape the Product:</span> Your feedback will directly influence our development
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
                    Join the Waitlist Now
                  </button>
                  
                  <p className="mt-4 text-sm text-gray-600">
                    No spam, ever. We'll only email you about Wonderix updates.
                  </p>

                  <div className="mt-6 flex items-center justify-center space-x-8">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">500+</p>
                      <p className="text-sm text-gray-600">Parents & Teachers Waiting</p>
                    </div>
                    <div className="w-px h-12 bg-gray-300"></div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">Q4 2025</p>
                      <p className="text-sm text-gray-600">Expected Launch</p>
                    </div>
                  </div>
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