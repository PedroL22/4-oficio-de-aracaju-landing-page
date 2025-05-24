import { FAQSection } from './components/FAQSection'
import { HeroSection } from './components/HeroSection'
import { InventorySection } from './components/InventorySection'
import { ServicesSection } from './components/ServicesSection'

export default function Home() {
  return (
    <main className='mx-auto flex min-h-screen flex-1 flex-col'>
      <HeroSection />

      <ServicesSection />

      <FAQSection />

      <InventorySection />
    </main>
  )
}
