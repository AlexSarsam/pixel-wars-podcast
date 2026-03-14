import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0a0a14]/95 backdrop-blur-md border-b border-purple-900/30">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#inicio" className="text-xl font-bold text-purple-400">🎮 Pixel Wars</a>

        <nav className="hidden md:block">
          <ul className="flex gap-6 list-none">
            <li><a href="#inicio" className="text-gray-300 hover:text-purple-300 text-sm">Inicio</a></li>
            <li><a href="#episodio" className="text-gray-300 hover:text-purple-300 text-sm">Episodio</a></li>
            <li><a href="#promo" className="text-gray-300 hover:text-purple-300 text-sm">Promo</a></li>
            <li><a href="#produccion" className="text-gray-300 hover:text-purple-300 text-sm">Producción</a></li>
            <li><a href="#contacto" className="text-gray-300 hover:text-purple-300 text-sm">Contacto</a></li>
          </ul>
        </nav>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-[#0a0a14] border-t border-purple-900/30 px-4 py-3">
          <ul className="flex flex-col gap-2 list-none">
            <li><a href="#inicio" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-200">Inicio</a></li>
            <li><a href="#episodio" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-200">Episodio</a></li>
            <li><a href="#promo" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-200">Promo</a></li>
            <li><a href="#produccion" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-200">Producción</a></li>
            <li><a href="#contacto" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-200">Contacto</a></li>
          </ul>
        </nav>
      )}
    </header>
  )
}