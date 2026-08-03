import Hero from './sections/Hero'
import Marquee from './sections/Marquee'
import Journey from './sections/Journey'
import LabNotes from './sections/LabNotes'
import Focus from './sections/Focus'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="main-wrapper">
      <Hero />
      <Marquee />
      <Journey />
      <LabNotes />
      <Focus />
      <Footer />
    </div>
  )
}

export default App
