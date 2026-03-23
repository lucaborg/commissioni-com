import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-extrabold tracking-tight">
          <span style={{ color: '#4f46e5' }}>commissioni</span>
          <span style={{ color: '#7c3aed' }}>.com</span>
        </Link>

        {/* Nav links — nascosti su mobile */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <Link href="/come-funziona" className="hover:text-gray-900 transition-colors">
            Come funziona
          </Link>
          <Link href="/categorie" className="hover:text-gray-900 transition-colors">
            Categorie
          </Link>
          <Link href="/graduatorie" className="hover:text-gray-900 transition-colors">
            Graduatorie
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden sm:inline-flex items-center px-4 py-1.5 text-sm font-semibold rounded-lg border-2 transition-colors"
            style={{ borderColor: '#4f46e5', color: '#4f46e5' }}
          >
            Accedi
          </Link>
          <Link
            href="/registrati"
            className="inline-flex items-center px-4 py-1.5 text-sm font-semibold rounded-lg text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: '#4f46e5' }}
          >
            Registrati
          </Link>

          {/* Hamburger — visibile solo su mobile, menu interattivo da aggiungere con auth */}
          <button
            className="md:hidden ml-2 p-2 rounded-md text-gray-600 hover:bg-gray-100"
            aria-label="Apri menu"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}
