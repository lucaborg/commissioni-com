export interface Category {
  id: string
  label: string
  emoji: string
  slug: string
}

export const CATEGORIES: Category[] = [
  { id: 'spesa', label: 'Spesa', emoji: '🛒', slug: 'spesa' },
  { id: 'dog-sitting', label: 'Dog Sitting', emoji: '🐕', slug: 'dog-sitting' },
  { id: 'bambini', label: 'Bambini', emoji: '👶', slug: 'bambini' },
  { id: 'bollette', label: 'Bollette', emoji: '📄', slug: 'bollette' },
  { id: 'fiscale', label: 'Fiscale', emoji: '💼', slug: 'fiscale' },
]
