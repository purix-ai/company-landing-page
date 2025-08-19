import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import SEO from '../components/SEO'

const Cookies = () => {
  return (
    <>
      <SEO 
        title="Cookie Policy | Purix"
        description="Cookie Policy for Purix and Wonderix. Learn how we use cookies to improve your experience on our platform."
        url="https://www.purix.ai/cookies"
      />
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Link 
            to="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-8"
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </Link>
          
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <div className="prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies</h2>
                <p className="text-gray-700 mb-4">
                  Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our services.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Cookies</h2>
                <p className="text-gray-700 mb-4">We use cookies for:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
                  <li><strong>Performance cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Functionality cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Analytics cookies:</strong> Help us improve our website and services</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Session Cookies</h3>
                <p className="text-gray-700 mb-4">
                  Temporary cookies that are deleted when you close your browser. They help maintain your session while using our services.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Persistent Cookies</h3>
                <p className="text-gray-700 mb-4">
                  Cookies that remain on your device for a set period. They help remember your preferences for future visits.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Third-Party Cookies</h3>
                <p className="text-gray-700 mb-4">
                  Cookies set by third-party services we use, such as analytics providers. We only work with trusted partners who comply with privacy regulations.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Managing Cookies</h2>
                <p className="text-gray-700 mb-4">
                  You can control and manage cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>View what cookies are stored on your device</li>
                  <li>Delete individual or all cookies</li>
                  <li>Block cookies from specific or all websites</li>
                  <li>Set preferences for cookie acceptance</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Please note that disabling certain cookies may affect the functionality of our website.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Updates to This Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
                <p className="text-gray-700">
                  If you have questions about our Cookie Policy, please contact us at:
                </p>
                <p className="text-gray-700 mt-4">
                  Email: <a href="mailto:contact@purix.ai" className="text-primary-600 hover:text-primary-700">contact@purix.ai</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cookies