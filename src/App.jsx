import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Founders from './components/Founders'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Cookies from './pages/Cookies'
import NotFound from './pages/NotFound'
import SEO from './components/SEO'
import StructuredData from './components/StructuredData'
import ScrollToTop from './components/ScrollToTop'

// Home page component
const HomePage = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO
        title={t('seo.home.title')}
        description={t('seo.home.description')}
        keywords="educational games, AI education, no-code game builder, teacher tools, parent resources, game-based learning, Wonderix, edtech, educational technology, AI game creation, 遊戲化學習, 遊戲式學習, 教育遊戲, AI教育"
        url="https://www.wonderix.com"
      />
      <StructuredData type="organization" />
      <StructuredData type="software" />
      <StructuredData type="website" />
      <StructuredData type="faq" />
      <StructuredData type="howto" />
      <main>
        <Hero />
        <Features />
        <Founders />
        <HowItWorks />
        <Waitlist />
      </main>
    </>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App