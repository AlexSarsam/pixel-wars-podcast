import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.nombre || !form.email || !form.mensaje) return alert('Rellena todos los campos')
    setSent(true)
  }

  if (sent) {
    return (
      <section id="contacto" className="py-20 px-4 bg-[#0a0a14] text-center">
        <div className="max-w-xl mx-auto bg-[#12121f] border border-purple-900/30 rounded-2xl p-10">
          <p className="text-4xl mb-4">✅</p>
          <h2 className="text-2xl font-bold text-white mb-3">¡Mensaje enviado!</h2>
          <button onClick={() => setSent(false)} className="bg-purple-600 text-white font-bold px-6 py-3 rounded-xl mt-4">
            Enviar otro
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="py-20 px-4 bg-[#0a0a14]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gradient text-center mb-8">📬 Contacto</h2>

        <form onSubmit={handleSubmit} className="bg-[#12121f] border border-purple-900/30 rounded-2xl p-6 space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-sm text-gray-200 mb-1">Nombre *</label>
            <input id="nombre" name="nombre" value={form.nombre} onChange={handleChange}
              className="w-full bg-[#0a0a14] border border-purple-900/40 rounded-xl px-4 py-3 text-white text-sm"
              required aria-required="true" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-200 mb-1">Email *</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
              className="w-full bg-[#0a0a14] border border-purple-900/40 rounded-xl px-4 py-3 text-white text-sm"
              required aria-required="true" />
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-sm text-gray-200 mb-1">Mensaje *</label>
            <textarea id="mensaje" name="mensaje" rows={4} value={form.mensaje} onChange={handleChange}
              className="w-full bg-[#0a0a14] border border-purple-900/40 rounded-xl px-4 py-3 text-white text-sm resize-y"
              required aria-required="true" />
          </div>
          <div>
            <label htmlFor="grabacion" className="block text-sm text-gray-200 mb-1">Tu grabación (opcional)</label>
            <input id="grabacion" name="grabacion" type="file" accept="audio/*"
              className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-purple-800 file:text-white hover:file:bg-purple-700 cursor-pointer"
              aria-describedby="grabacion-hint" />
            <p id="grabacion-hint" className="text-xs text-gray-500 mt-1">Formatos aceptados: MP3, WAV, OGG, M4A</p>
          </div>
          <button type="submit" className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-xl">
            ✉️ Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  )
}