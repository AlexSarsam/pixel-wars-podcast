import Header from './components/Header'
import Hero from './components/Hero'
import AudioPlayer from './components/AudioPlayer'
import Transcript from './components/Transcript'
import PromoVideo from './components/PromoVideo'
import Production from './components/Production'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      <Header />

      <main id="main-content">
        <Hero />

        <section
          id="episodio"
          aria-labelledby="episodio-heading"
          className="bg-[#0f0f1c] py-20 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <h2
              id="episodio-heading"
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient"
            >
              🎧 Episodio 1: La Gran Batalla
            </h2>
            <AudioPlayer
              src="/podcast.mp3"
              title="Pixel Wars – Ep.1: PC vs Consola, ¿cuál gana?"
            />
            <Transcript />
          </div>
        </section>

        <PromoVideo />

        <Production />

        <ContactForm />
      </main>

      <Footer />
    </>
  )
}
