import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'
import Blog from './components/Blog'

// Home page component
const HomePage = () => (
  <main>
    <Hero />
    <Features />
    <HowItWorks />
    <Waitlist />
  </main>
)

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App