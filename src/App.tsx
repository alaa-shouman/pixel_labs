import { HeroSection } from "@/components/organisms/HeroSection"
import { PortfolioSection } from "@/components/organisms/PortfolioSection"

function App() {
  return (
    <main className="min-h-screen bg-background">
      <section aria-label="Photographer landing hero">
        <HeroSection />
      </section>
      <PortfolioSection />
    </main>
  )
}

export default App
