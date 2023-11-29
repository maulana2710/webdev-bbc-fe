import Carousel from '@/components/Carousel'
import Jumbotron from '@/components/Jumbotron'
import NavigationMenu from '@/components/NavigationMenu'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <NavigationMenu />
      <Carousel />
      <Jumbotron />
    </main>
  )
}
