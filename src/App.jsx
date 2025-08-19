import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import SEO from './components/SEO'
import StructuredData from './components/StructuredData'

// Home page component
const HomePage = () => (
  <>
    <SEO 
      title="Purix - AI-Powered Educational Game Creation Platform | Wonderix"
      description="Create engaging educational games in 15 minutes with Wonderix. No coding required. AI-powered platform for teachers and parents to build personalized learning experiences through conversation."
      keywords="educational games, AI education, no-code game builder, teacher tools, parent resources, game-based learning, Wonderix, Purix, edtech, educational technology, AI game creation"
      url="https://www.purix.ai"
    />
    <StructuredData type="organization" />
    <StructuredData type="software" />
    <StructuredData type="website" />
    <StructuredData type="faq" />
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Waitlist />
    </main>
  </>
)

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App