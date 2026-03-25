import photographerImage from "@/assets/photographer.jpg"

export function HeroSection() {
    return (
        <div className="grid h-dvh place-items-center">
            <div className="relative isolate h-full w-full overflow-hidden">
                <img
                    src={photographerImage}
                    alt="Photographer holding a camera"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
                <div className="hero-fog-top pointer-events-none absolute inset-x-0 top-[-20%] z-[2] h-[58%]" aria-hidden="true" />
                <div className="hero-fog-bottom pointer-events-none absolute inset-x-0 bottom-[-14%] z-[2] h-[50%]" aria-hidden="true" />
                <div className="hero-noise pointer-events-none absolute inset-0 z-[3] opacity-[0.14] mix-blend-screen" aria-hidden="true" />

                <div className="relative z-10 h-full p-8 sm:p-10 md:p-12">
                    <header className="flex items-center justify-between gap-4">
                        <a
                            href="#"
                            className="inline-flex items-center text-lg tracking-[0.35em] text-white/95 transition-opacity hover:opacity-75"
                            aria-label="Homepage"
                        >
                            THE PIXEL LAB
                        </a>

                        <nav aria-label="Social media" className="flex items-center gap-8">
                            <a
                                href="https://vk.com"
                                aria-label="VK profile"
                                className="inline-flex min-w-6 items-center justify-center text-sm font-medium tracking-[0.16em] text-white/90 transition-all hover:-translate-y-0.5 hover:text-white"
                                target="_blank"
                                rel="noreferrer"
                            >
                                vk
                            </a>
                            <a
                                href="https://instagram.com"
                                aria-label="Instagram profile"
                                className="inline-flex min-w-6 items-center justify-center text-base font-medium tracking-[0.16em] text-white/90 transition-all hover:-translate-y-0.5 hover:text-white"
                                target="_blank"
                                rel="noreferrer"
                            >
                                ig
                            </a>
                            <a
                                href="https://facebook.com"
                                aria-label="Facebook profile"
                                className="inline-flex min-w-6 items-center justify-center text-lg font-medium tracking-[0.16em] text-white/90 transition-all hover:-translate-y-0.5 hover:text-white"
                                target="_blank"
                                rel="noreferrer"
                            >
                                f
                            </a>
                        </nav>
                    </header>

                    <div className="pointer-events-none absolute inset-0 grid place-items-center px-6">
                        <div className="space-y-5 text-center text-white">
                            <h1 className="text-4xl font-light tracking-[0.22em] sm:text-6xl">The Pixel Lab</h1>
                            <p className="text-lg tracking-[0.25em] text-white/90 sm:text-2xl">PHOTOGRAFER</p>
                        </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-8 flex justify-center sm:bottom-10 md:bottom-12">
                        <button
                            type="button"
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
