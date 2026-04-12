import { useEffect, useState } from "react"
import photoshootImage from "@/assets/photoshoot.jpg"
import { sanityClient, urlFor } from "@/lib/sanity"


type SanityAboutPage = {
    sectionLabel?: string
    heading?: string
    paragraphs?: string[]
    backgroundImage?: unknown
}

export function AboutMeSection() {
    const [bgLoaded, setBgLoaded] = useState(false)
    const [sectionLabel, setSectionLabel] = useState("SOMETHING")
    const [heading, setHeading] = useState("ABOUT ME")
    const [paragraphs, setParagraphs] = useState<string[]>([
        "Hello! My name is Anna Voronovskaya, my creative nickname is Anna Voron. Born and raised in Moscow. Now I live and work in Paris.",
        "I started photographing at 17. And now i can't imagine my life without it.",
        "I specialise in individual portrait photoshoots, fashion photohoots, also life and street style photography. Collaborated with many local magazines. Available for cooperation.",
    ])
    const [backgroundSrc, setBackgroundSrc] = useState(photoshootImage)

    useEffect(() => {
        const query = `*[_type == "aboutPage"][0]{
            sectionLabel,
            heading,
            paragraphs,
            backgroundImage
        }`

        void sanityClient.fetch<SanityAboutPage | null>(query).then((data) => {
            if (!data) {
                return
            }

            setSectionLabel(data.sectionLabel ?? "SOMETHING")
            setHeading(data.heading ?? "ABOUT ME")

            if (Array.isArray(data.paragraphs) && data.paragraphs.length > 0) {
                setParagraphs(data.paragraphs.filter((paragraph) => typeof paragraph === "string" && paragraph.trim().length > 0))
            }

            if (data.backgroundImage) {
                setBackgroundSrc(urlFor(data.backgroundImage).width(1920).height(1080).fit("crop").url())
            }
        })
    }, [])

    return (
        <section id="about" aria-label="About the photographer" className="relative isolate flex min-h-dvh w-full flex-col items-center overflow-hidden bg-white pt-20 sm:pt-24">

            <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center sm:px-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a9a9a]">{sectionLabel}</p>
                <h2 className="mt-8 text-4xl font-light tracking-[0.3em] text-[#222222] sm:text-5xl">{heading}</h2>

                <div className="mt-14 max-w-216 space-y-6 text-lg font-light leading-[1.6] text-[#555555] sm:text-[1.35rem]">
                    {paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
            </div>

            <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full" aria-hidden="true">
                <img
                    key={backgroundSrc}
                    src={backgroundSrc}
                    alt=""
                    decoding="async"
                    onLoad={() => setBgLoaded(true)}
                    className={`absolute bottom-0 h-[85%] w-full object-cover object-top transition-opacity duration-1000 ${bgLoaded ? "opacity-100" : "opacity-0"}`}
                />
                {/* Top fade – stronger white wash on mobile so long text stays readable */}
                <div className="absolute bottom-0 h-[85%] w-full bg-linear-to-b from-white via-white/80 max-sm:via-white/60 max-sm:via-65% max-sm:to-white/40 to-transparent " />
                {/* Bottom fade to seamlessly blend with the Prices section (gold tone) */}

            </div>

        </section>
    )
}