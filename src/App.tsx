import { HeroSection } from "@/components/organisms/HeroSection"
import { AboutMeSection } from "@/components/organisms/AboutMeSection"
import { PortfolioSection } from "@/components/organisms/PortfolioSection"
import { PricesSection } from "@/components/organisms/PricesSection"

function App() {
  return (
    <main className="w-full scroll-smooth bg-background">
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
