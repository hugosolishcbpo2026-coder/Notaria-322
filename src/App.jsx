import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Nosotros from './sections/Nosotros'
import Servicios from './sections/Servicios'
import Experiencia from './sections/Experiencia'
import Ubicacion from './sections/Ubicacion'
import Contacto from './sections/Contacto'

export default function App() {
  return (
    <div className="relative min-h-screen bg-obsidian text-ivory">
      <Navbar />
      <main>
        <Hero />
        <Nosotros />
        <Servicios />
        <Experiencia />
        <Ubicacion />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}
