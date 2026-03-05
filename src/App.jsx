import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import BankingStandard from './components/BankingStandard'
import Process from './components/Process'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <BankingStandard />
      <Services />
      <Process />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
