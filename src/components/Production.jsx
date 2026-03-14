export default function Production() {
  return (
    <section id="produccion" className="py-20 px-4 bg-[#0f0f1c]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gradient text-center mb-12">⚙️ Proceso de Producción</h2>

        <h3 className="text-xl font-bold text-white mb-6">Flujo de trabajo</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {['Planificación', 'Grabación', 'Edición', 'Música', 'Exportación', 'Web & Deploy'].map((step, i) => (
            <div key={i} className="bg-[#12121f] border border-purple-900/30 rounded-xl p-4">
              <p className="text-2xl font-black text-purple-400">{String(i + 1).padStart(2, '0')}</p>
              <p className="font-bold text-white text-sm">{step}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-white mb-6">Herramientas</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {[
            { icon: '🎙️', name: 'Audacity', desc: 'Grabación y edición de audio' },
            { icon: '🎵', name: 'FFmpeg', desc: 'Optimización a MP3 192kbps' },
            { icon: '⚛️', name: 'React + Vite', desc: 'Framework web con bundler rápido' },
            { icon: '🎨', name: 'Tailwind CSS', desc: 'Diseño responsivo con utilidades' },
            { icon: '🚀', name: 'Vercel', desc: 'Despliegue con HTTPS automático' },
            { icon: '♿', name: 'Lighthouse & WAVE', desc: 'Verificación accesibilidad WCAG AA' },
          ].map(({ icon, name, desc }) => (
            <div key={name} className="bg-[#12121f] border border-purple-900/30 rounded-xl p-4">
              <p className="text-2xl mb-2">{icon}</p>
              <p className="font-bold text-white">{name}</p>
              <p className="text-xs text-gray-400">{desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-purple-950/30 border border-purple-700/30 rounded-2xl p-6">
          <h3 className="font-bold text-white mb-2">♿ Accesibilidad verificada</h3>
          <p className="text-sm text-gray-400">
            Web verificada con Lighthouse y WAVE. Cumple WCAG 2.1 AA: semántica HTML, navegación por teclado,
            foco visible, contraste 4.5:1, roles ARIA y transcripción del audio.
          </p>
        </div>
      </div>
    </section>
  )
}