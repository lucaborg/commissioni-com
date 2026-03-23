import Link from 'next/link'

export default function CtaDual() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Card richiedente */}
        <div
          className="rounded-xl p-6 text-white"
          style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}
        >
          <h2 className="text-lg font-bold mb-2">Hai bisogno di aiuto?</h2>
          <p className="text-sm opacity-85 mb-5 leading-relaxed">
            Pubblica la tua richiesta e ricevi offerte da fornitori
            verificati nella tua zona
          </p>
          <Link
            href="/registrati"
            className="inline-flex items-center px-5 py-2 rounded-lg text-sm font-bold bg-white transition-opacity hover:opacity-90"
            style={{ color: '#4f46e5' }}
          >
            + Richiedi un servizio
          </Link>
        </div>

        {/* Card fornitore */}
        <div className="rounded-xl p-6 bg-gray-50 border border-gray-200">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Vuoi guadagnare?</h2>
          <p className="text-sm text-gray-600 mb-5 leading-relaxed">
            Registrati come fornitore, costruisci la tua reputazione
            e ricevi commissioni
          </p>
          <Link
            href="/registrati"
            className="inline-flex items-center px-5 py-2 rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#4f46e5' }}
          >
            Diventa fornitore →
          </Link>
        </div>
      </div>
    </section>
  )
}
