import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Card from './components/Card'
import CaseStudies from './components/CaseStudies'
import WorkingProcess from './components/WorkingProcess'
import Team from './components/Team'
import { Container } from './components/container'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Container>
      <Navbar />
      <Hero />
      <Services />
      <Card />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials/>
      <Contact />
      <Footer/>
      </Container>
    </>
  )
}