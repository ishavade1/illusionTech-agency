import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClientStats from './components/ClientStats'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import EditorialMarquee from './components/EditorialMarquee'
import Testimonials from './components/Testimonials'
import Cta from './components/Cta'
//import About from './components/About'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <ClientStats />
        <Services />
        <WhyChooseUs />
        <Process />
        <Portfolio />
        <EditorialMarquee />
        <Testimonials />
        <Faq />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
