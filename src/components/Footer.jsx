export default function Footer() {
  return (
    <footer className="bg-[#08080f] border-t border-purple-900/20 py-8 px-4 text-center">
      <p className="text-sm text-gray-500 mb-2">© 2026 Pixel Wars Podcast</p>
      <p className="text-xs text-gray-600">
        Licencia{' '}
        <a href="https://creativecommons.org/licenses/by-nc/4.0/deed.es" target="_blank" rel="noopener noreferrer"
          className="text-purple-400 underline">CC BY-NC 4.0</a>
        {' '}· Hecho con  React + Tailwind · Proyecto M9
      </p>
      <p className="text-xs text-gray-700 mt-2">
        Web diseñada siguiendo WCAG 2.1 AA
      </p>
    </footer>
  )
}