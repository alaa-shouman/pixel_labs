import { HeroSection } from "@/components/organisms/HeroSection"
import { AboutMeSection } from "@/components/organisms/AboutMeSection"
import { PortfolioSection } from "@/components/organisms/PortfolioSection"
import { PricesSection } from "@/components/organisms/PricesSection"
import { Analytics } from "@vercel/analytics/react"


function App() {
 
  return (
    <main className="relative w-full scroll-smooth bg-background">
      <Analytics />
      <section aria-label="Photographer landing hero">
        <HeroSection />
      </section>

      <section aria-label="Photographer portfolio gallery">
        <PortfolioSection />
      </section>

      <section aria-label="About the photographer">
        <AboutMeSection />
      </section>

      <section aria-label="Prices packages">
        <PricesSection />
      </section>
    </main>
  )
}

export default App
