export interface MockProvider {
  id: string
  initials: string
  name: string
  rating: number
  category: string
  completedServices: number
  medal: '🥇' | '🥈' | '🥉'
  avatarColor: string
}

export const TOP_PROVIDERS_MOCK: MockProvider[] = [
  {
    id: '1',
    initials: 'M',
    name: 'Mario R.',
    rating: 4.9,
    category: 'Spesa',
    completedServices: 43,
    medal: '🥇',
    avatarColor: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
  },
  {
    id: '2',
    initials: 'G',
    name: 'Giulia F.',
    rating: 4.8,
    category: 'Dog Sitting',
    completedServices: 31,
    medal: '🥈',
    avatarColor: 'linear-gradient(135deg, #7c3aed, #a855f7)',
  },
  {
    id: '3',
    initials: 'A',
    name: 'Anna B.',
    rating: 4.8,
    category: 'Bambini',
    completedServices: 28,
    medal: '🥉',
    avatarColor: 'linear-gradient(135deg, #0369a1, #0284c7)',
  },
]
