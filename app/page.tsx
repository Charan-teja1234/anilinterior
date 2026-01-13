import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Portfolio from './components/Portfolio'
import LeadCapture from './components/LeadCapture'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home"><Hero /></section>
      <section id="services"><Services /></section>
      <section id="why-choose-us"><WhyChooseUs /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="contact"><LeadCapture /></section>
      <Footer />
    </main>
  )
}