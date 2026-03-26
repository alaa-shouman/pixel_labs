import photoshootImage from "@/assets/photoshoot.jpg"

export function AboutMeSection() {
    return (
        <section id="about" aria-label="About the photographer" className="relative isolate flex min-h-dvh w-full flex-col items-center overflow-hidden bg-white pt-20 sm:pt-24">
            <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center sm:px-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a9a9a]">SOMETHING</p>
                <h2 className="mt-8 text-4xl font-light tracking-[0.3em] text-[#222222] sm:text-5xl">ABOUT ME</h2>

                <div className="mt-14 max-w-216 space-y-6 text-lg font-light leading-[1.6] text-[#555555] sm:text-[1.35rem]">
                    <p>
                        Hello! My name is Anna Voronovskaya, my creative nickname is Anna Voron.<br className="hidden sm:block" />
                        Born and raised in Moscow. Now I live and work in Paris.
                    </p>
                    <p>
                        I started photographing at 17. And now i can&apos;t imagine my life without it.
                    </p>
                    <p>
                        I specialise in individual portrait photoshoots, fashion photohoots, also life and<br className="hidden sm:block" />
                        street style photography. Collaborated with many local magazines. Available for<br className="hidden sm:block" />
                        cooperation.
                    </p>
                </div>
            </div>

            <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full" aria-hidden="true">
                <img src={photoshootImage} alt="" className="absolute bottom-0 h-[85%] w-full object-cover object-top" />
                <div className="absolute bottom-0 h-[85%] w-full bg-linear-to-b from-white via-white/80 to-transparent" />
            </div>
        </section>
    )
}