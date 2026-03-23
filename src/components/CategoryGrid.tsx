'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CATEGORIES } from '@/lib/categories'

export default function CategoryGrid() {
  const router = useRouter()
  const [selected, setSelected] = useState<string | null>(null)

  function handleSelect(slug: string) {
    setSelected(slug)
    router.push(`/richieste?categoria=${slug}`)
  }

  return (
    <section className="bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
          Categorie principali
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {CATEGORIES.map((cat, index) => {
            const isActive = selected === cat.slug
            const isLastOdd =
              index === CATEGORIES.length - 1 && CATEGORIES.length % 2 !== 0

            return (
              <button
                key={cat.id}
                onClick={() => handleSelect(cat.slug)}
                className={[
                  'flex flex-col items-center justify-center gap-1 p-4 rounded-xl border-2 transition-all cursor-pointer',
                  isLastOdd ? 'col-span-2 sm:col-span-1' : '',
                  isActive
                    ? 'border-[#4f46e5] bg-[#f5f3ff]'
                    : 'border-gray-200 bg-white hover:border-[#c4b5fd] hover:bg-[#faf5ff]',
                ].join(' ')}
              >
                <span className="text-3xl">{cat.emoji}</span>
                <span
                  className={`text-xs font-semibold ${
                    isActive ? 'text-[#4f46e5]' : 'text-gray-700'
                  }`}
                >
                  {cat.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
