export default function AudioPlayer({ src, title }) {
  return (
    <article className="bg-[#12121f] border border-purple-900/30 rounded-2xl p-6 mb-12">
      <h3 className="text-base font-semibold text-gray-200 mb-4">🎙️ {title}</h3>
      <audio controls src={src} preload="metadata" className="w-full" aria-label={title}>
        Tu navegador no soporta audio.
      </audio>
    </article>
  )
}