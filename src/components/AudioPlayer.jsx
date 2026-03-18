import { useRef, useState } from 'react'

export default function AudioPlayer({ src, title }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  function togglePlay() {
    const audio = audioRef.current
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <article className="bg-[#12121f] border border-purple-900/30 rounded-2xl p-6 mb-12">
      <h3 className="text-base font-semibold text-gray-200 mb-4">🎙️ {title}</h3>

      <audio ref={audioRef} src={src} preload="metadata" aria-label={title} />

      <div className="flex items-center gap-4 mt-4">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
          className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center transition-all"
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          ) : (
            <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
        <span className="text-sm text-gray-400">{isPlaying ? 'Reproduciendo...' : 'Pausado'}</span>
      </div>
    </article>
  )
}