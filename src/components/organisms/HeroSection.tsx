import { useState } from "react"
import photographerImage from "@/assets/photographer.jpeg"
import logoImage from "@/assets/thepixellabs-removebg-preview.png"

export function HeroSection() {
    const [heroLoaded, setHeroLoaded] = useState(false)

    return (
        <div className="grid h-dvh place-items-center">
            <div className="relative isolate h-full w-full overflow-hidden bg-[#111]">
                <img
                    src={photographerImage}
                    alt="Photographer holding a camera"
                    fetchPriority="high"
                    onLoad={() => setHeroLoaded(true)}
                    className={`absolute inset-0 h-full w-full object-cover object-[50%_25%] transition-opacity duration-1000 ${heroLoaded ? "opacity-100" : "opacity-0"}`}
                />

                <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
                <div className="hero-fog-top pointer-events-none absolute inset-x-0 top-[-20%] z-2 h-[58%]" aria-hidden="true" />
                <div className="hero-fog-bottom pointer-events-none absolute inset-x-0  bottom-[-14%] z-2 h-[50%]" aria-hidden="true" />
                <div className="hero-noise pointer-events-none absolute inset-0 z-3 opacity-[0.14] mix-blend-screen" aria-hidden="true" />

                <div className="relative z-10 h-full p-8 sm:p-10 md:p-12">
                    <header className="flex items-center justify-between gap-4">
                        <a
                            href="#"
                            className="inline-flex items-center gap-3 text-black/95 transition-opacity hover:opacity-75"
                            aria-label="Homepage"
                        >
                            <img src={logoImage} alt="The Pixel Lab logo" className="h-15 w-auto object-contain" />
                            <span className="hidden text-lg tracking-[0.35em] sm:inline">THE PIXEL LAB</span>
                        </a>

                        <nav aria-label="Social media" className="flex items-center gap-6">
                            <a
                                href="https://www.instagram.com/thepixellab.lb"
                                aria-label="Instagram profile"
                                className="inline-flex items-center justify-center text-black/90 transition-all hover:-translate-y-0.5 hover:text-black"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                                </svg>
                            </a>
                            <a
                                href="https://wa.me/96170821128"
                                aria-label="WhatsApp contact"
                                className="inline-flex items-center justify-center text-black/90 transition-all hover:-translate-y-0.5 hover:text-black"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </a>
                        </nav>
                    </header>

                    <div className="pointer-events-none absolute inset-0 grid place-items-center px-6">
                        <div className="space-y-5 text-center text-white">
                            <h1 className="text-4xl font-light tracking-[0.22em] sm:text-6xl">The Pixel Lab</h1>
                            <p className="text-lg tracking-[0.25em] text-white/90 sm:text-2xl">PHOTOGRAPHER</p>
                        </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-8 flex justify-center sm:bottom-10 md:bottom-12">
                        <button
                            type="button"
                            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                            aria-label="Scroll down"
                            className="inline-flex size-12 items-baseline-last justify-center rounded-full border border-white/20 text-white/90 backdrop-blur-sm transition-all hover:border-white/45 hover:text-white"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="size-7 animate-bounce"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="m6 5 6 6 6-6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
