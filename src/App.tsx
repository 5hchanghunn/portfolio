import Hero from './sections/Hero'
import Marquee from './sections/Marquee'
import Journey from './sections/Journey'
import LabNotes from './sections/LabNotes'
import Projects from './sections/Projects'
import Focus from './sections/Focus'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="main-wrapper">
      <Hero />
      <Marquee />
      <Journey />
      <LabNotes />
      <Projects />
      <Focus />
      <Footer />
    </div>
  )
}

export default App
