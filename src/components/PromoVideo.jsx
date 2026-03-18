const VIDEO_ID = 'Vbw3ihWfEOM'

export default function PromoVideo() {
  return (
    <section id="promo" className="py-20 px-4 bg-[#0a0a14]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gradient mb-4">🎬 Vídeo Promocional</h2>
        <p className="text-gray-400 mb-8">El tráiler oficial de Pixel Wars.</p>

        <div className="bg-[#12121f] border border-purple-900/30 rounded-2xl overflow-hidden">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}`}
              title="Vídeo promocional Pixel Wars"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}