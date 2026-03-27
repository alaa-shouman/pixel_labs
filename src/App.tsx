import { useEffect, useRef, useState, type CSSProperties } from "react"
import confetti from "canvas-confetti"
import { HeroSection } from "@/components/organisms/HeroSection"
import { AboutMeSection } from "@/components/organisms/AboutMeSection"
import { PortfolioSection } from "@/components/organisms/PortfolioSection"
import { PricesSection } from "@/components/organisms/PricesSection"

const balloons = [
  { left: "7%", delay: "0s", duration: "5.2s", size: "44px", color: "#ff6b6b" },
  { left: "16%", delay: "0.25s", duration: "5.8s", size: "50px", color: "#ffd166" },
  { left: "24%", delay: "0.6s", duration: "5.4s", size: "46px", color: "#7bdff2" },
  { left: "36%", delay: "0.15s", duration: "6.1s", size: "52px", color: "#b8f2e6" },
  { left: "45%", delay: "0.55s", duration: "5.6s", size: "42px", color: "#f9c5d1" },
  { left: "54%", delay: "0.05s", duration: "5.9s", size: "48px", color: "#cdb4db" },
  { left: "63%", delay: "0.45s", duration: "5.5s", size: "44px", color: "#ffafcc" },
  { left: "72%", delay: "0.2s", duration: "6.2s", size: "50px", color: "#90dbf4" },
  { left: "81%", delay: "0.5s", duration: "5.7s", size: "46px", color: "#fdffb6" },
  { left: "91%", delay: "0.1s", duration: "6s", size: "42px", color: "#a0c4ff" },
]

function launchBirthdayConfetti() {
  const end = Date.now() + 1700
  const colors = ["#ff6b6b", "#ffd166", "#7bdff2", "#b8f2e6", "#f9c5d1"]

  const fire = () => {
    confetti({
      particleCount: 40,
      startVelocity: 35,
      spread: 70,
      ticks: 220,
      origin: { x: 0.18, y: 0.8 },
      colors,
      scalar: 1.02,
    })

    confetti({
      particleCount: 40,
      startVelocity: 35,
      spread: 70,
      ticks: 220,
      origin: { x: 0.82, y: 0.8 },
      colors,
      scalar: 1.02,
    })

    if (Date.now() < end) {
      requestAnimationFrame(fire)
    }
  }

  fire()
}

function App() {
  const [showBirthdayOverlay, setShowBirthdayOverlay] = useState(false)
  const hasTriggeredRef = useRef(false)

  useEffect(() => {
    const portfolioSection = document.getElementById("portfolio-birthday-trigger")
    if (!portfolioSection) {
      return
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (!entry?.isIntersecting || hasTriggeredRef.current) {
          return
        }

        hasTriggeredRef.current = true
        if (!prefersReducedMotion) {
          setShowBirthdayOverlay(true)
          window.setTimeout(launchBirthdayConfetti, 220)
          window.setTimeout(() => setShowBirthdayOverlay(false), 5200)
        }

        observer.disconnect()
      },
      { threshold: 0.45 }
    )

    observer.observe(portfolioSection)

    return () => observer.disconnect()
  }, [])

  return (
    <main className="relative w-full scroll-smooth bg-background">
      {showBirthdayOverlay && (
        <div className="birthday-overlay" aria-hidden="true">
          {balloons.map((balloon, index) => (
            <span
              key={`${balloon.left}-${index}`}
              className="birthday-balloon"
              style={{
                "--balloon-left": balloon.left,
                "--balloon-delay": balloon.delay,
                "--balloon-duration": balloon.duration,
                "--balloon-size": balloon.size,
                "--balloon-color": balloon.color,
              } as CSSProperties}
            />
          ))}
        </div>
      )}

      <section aria-label="Photographer landing hero">
        <HeroSection />
      </section>

      <section id="portfolio-birthday-trigger" aria-label="Photographer portfolio gallery">
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
