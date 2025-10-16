import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import SEO from '../components/SEO'

const Terms = () => {
  return (
    <>
      <SEO
        title="Terms of Service | Wonderix"
        description="Terms of Service for Wonderix. Read our terms and conditions for using our educational game creation platform."
        url="https://www.purix.ai/terms"
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
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <div className="prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing and using Wonderix services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use of Services</h2>
                <p className="text-gray-700 mb-4">Our services are intended for:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Educational purposes</li>
                  <li>Creating educational games and content</li>
                  <li>Personal and classroom use</li>
                  <li>Commercial use with appropriate licensing</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
                <p className="text-gray-700 mb-4">
                  When you create an account, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  Content you create using our services remains your property. You grant us a license to use, display, and distribute your content solely for the purpose of providing our services.
                </p>
                <p className="text-gray-700 mb-4">
                  The Wonderix platform, including all software, design, and content, are protected by intellectual property laws and remain our property.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Prohibited Uses</h2>
                <p className="text-gray-700 mb-4">You may not use our services to:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Violate any laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Create harmful, offensive, or inappropriate content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of our services</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  Wonderix provides services on an "as is" basis. We are not liable for any indirect, incidental, special, or consequential damages arising from your use of our services.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Modifications</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify these Terms of Service at any time. Continued use of our services after modifications constitutes acceptance of the updated terms.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
                <p className="text-gray-700">
                  For questions about these Terms of Service, please contact us at:
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

export default Terms