'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function HeroSearch() {
  const router = useRouter()
  const [citta, setCitta] = useState('')
  const [categoria, setCategoria] = useState('')

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (citta) params.set('citta', citta)
    if (categoria) params.set('categoria', categoria)
    router.push(`/richieste?${params.toString()}`)
  }

  return (
    <section
      className="py-16 px-4 text-center text-white"
      style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)' }}
    >
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight">
        Trova chi ti aiuta,<br />vicino a te
      </h1>
      <p className="text-base sm:text-lg opacity-85 mb-8">
        Spesa, dog sitting, bambini, bollette, assistenza fiscale — e molto altro
      </p>

      <form
        onSubmit={handleSearch}
        className="bg-white rounded-xl p-3 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto shadow-lg"
      >
        {/* Campo città */}
        <div className="flex items-center gap-2 flex-1 border-b sm:border-b-0 sm:border-r border-gray-200 pb-2 sm:pb-0 sm:pr-3">
          <span className="text-lg">📍</span>
          <input
            type="text"
            value={citta}
            onChange={(e) => setCitta(e.target.value)}
            placeholder="La tua città o CAP"
            className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
          />
        </div>

        {/* Campo categoria */}
        <div className="flex items-center gap-2 flex-1">
          <span className="text-lg">🔍</span>
          <input
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            placeholder="Cosa ti serve?"
            className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
          />
        </div>

        {/* Bottone cerca */}
        <button
          type="submit"
          className="px-6 py-2.5 rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-90 flex-shrink-0"
          style={{ backgroundColor: '#4f46e5' }}
        >
          Cerca
        </button>
      </form>
    </section>
  )
}
