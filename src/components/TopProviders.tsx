import Link from 'next/link'
import { TOP_PROVIDERS_MOCK } from '@/lib/mock-providers'

export default function TopProviders() {
  if (TOP_PROVIDERS_MOCK.length === 0) return null

  return (
    <section className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wide">
            🏆 Top fornitori questa settimana
          </h2>
          <Link
            href="/graduatorie"
            className="text-sm font-medium hover:underline"
            style={{ color: '#4f46e5' }}
          >
            Vedi graduatoria completa →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {TOP_PROVIDERS_MOCK.map((provider) => (
            <div
              key={provider.id}
              className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm border border-gray-100"
            >
              {/* Avatar */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                style={{ background: provider.avatarColor }}
              >
                {provider.initials}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {provider.name}
                </p>
                <p className="text-xs text-amber-500">
                  {'★'.repeat(5)} {provider.rating}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {provider.category} · {provider.completedServices} servizi
                </p>
              </div>

              {/* Medal */}
              <span className="text-xl flex-shrink-0">{provider.medal}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
