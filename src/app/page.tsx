import HeroSearch from '@/components/HeroSearch'
import CategoryGrid from '@/components/CategoryGrid'
import CtaDual from '@/components/CtaDual'
import TopProviders from '@/components/TopProviders'

export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSearch />
      <CategoryGrid />
      <CtaDual />
      <TopProviders />
    </main>
  )
}
