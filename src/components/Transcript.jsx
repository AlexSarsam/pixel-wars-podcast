import { useState } from 'react'

const SECTIONS = [
  { time: '0:00', title: 'Introducción', content: '¡Qué pasa gente! Bienvenidos a Pixel Wars, el podcast donde hablamos de lo que realmente importa en el mundo gamer. Soy Alex, y hoy nos metemos con el debate más clásico de todos: PC vs Consola. ¿Cuál es mejor? ¿Cuál deberías elegir? Vamos a analizarlo.' },
  { time: '0:20', title: 'Argumentos del PC', content: 'Empecemos con el PC. Lo primero, la potencia. Un buen PC te da gráficos bestiales y lo mejor es que lo puedes ir mejorando con el tiempo, cambias la gráfica y ya tienes otro nivel. Luego están los mods, que son una pasada. Skyrim con mods parece un juego completamente nuevo. Y las ofertas de Steam son brutales, te pillas juegos triple A por 5 o 10 euros que en consola siguen a 40. Ah, y para shooters el ratón y teclado no tiene rival, la precisión es de otro mundo.' },
  { time: '1:00', title: 'Argumentos de la consola', content: 'Pero ojo que la consola tiene argumentos muy fuertes también. Lo primero: la enchufas y funciona. Nada de drivers, nada de si te falta una DLL, nada de complicaciones. Es plug and play total. Los exclusivos son otro nivel: God of War, Zelda, Spider-Man, The Last of Us... son juegos que definen generaciones. Y el precio de entrada es mucho menor, por 500 euros estás jugando a tope. Además, jugar en el sofá con mando, con amigos al lado jugando un Mario Kart... esa experiencia no la replicas en PC.' },
  { time: '1:50', title: 'Mi opinión', content: 'Yo creo que no hay un ganador claro. Depende totalmente de qué tipo de jugador eres. Si te gusta trastear, personalizar y tener lo último en gráficos, PC. Si quieres algo que funcione sin complicaciones, con exclusivos brutales y no quieres gastarte mucho, consola. Y si puedes permitirte los dos, pues los dos, ¿por qué no?' },
  { time: '2:30', title: 'Cierre', content: 'Al final lo importante es disfrutar jugando, da igual la plataforma. Y eso ha sido todo por hoy en Pixel Wars. Si os ha molado, volved para el próximo episodio. Dejadme vuestra opinión: ¿PC o consola? ¡Nos vemos pronto, GG!' },
]

export default function Transcript() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="transcripcion" className="mt-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white">📄 Transcripción completa</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="text-sm text-purple-300 bg-purple-950/40 border border-purple-700/30 px-4 py-2 rounded-lg"
        >
          {isOpen ? 'Ocultar' : 'Mostrar'}
        </button>
      </div>

      {isOpen && (
        <div className="space-y-4">
          {SECTIONS.map(({ time, title, content }, i) => (
            <div key={i} className="bg-[#0a0a14] border border-purple-900/30 rounded-xl p-5">
              <p className="text-xs text-cyan-400 font-mono mb-1">{time}</p>
              <h4 className="font-bold text-white mb-2">{title}</h4>
              <p className="text-sm text-gray-300 leading-relaxed">{content}</p>
            </div>
          ))}
          <p className="text-xs text-gray-500 text-center">
            Transcripción para accesibilidad (WCAG 2.1 AA – Criterio 1.2.1)
          </p>
        </div>
      )}
    </section>
  )
}