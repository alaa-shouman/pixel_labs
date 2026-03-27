import { useEffect, useMemo, useState } from "react"
import { sanityClient, urlFor } from "@/lib/sanity"

type PortfolioCategory = "Portrait" | "Fashion" | "Life"

type PortfolioItem = {
    id: string
    src: string
    category: PortfolioCategory
    alt: string
}

const portfolioItems: PortfolioItem[] = [
    {
        id: "fallback-1",
        src: "https://picsum.photos/id/1027/900/1200",
        category: "Portrait",
        alt: "Portrait work 1",
    },
    {
        id: "fallback-2",
        src: "https://picsum.photos/id/1035/900/1200",
        category: "Fashion",
        alt: "Fashion work 1",
    },
    {
        id: "fallback-3",
        src: "https://picsum.photos/id/1025/900/1200",
        category: "Life",
        alt: "Life work 1",
    },
    {
        id: "fallback-4",
        src: "https://picsum.photos/id/1074/900/1200",
        category: "Portrait",
        alt: "Portrait work 2",
    },
    {
        id: "fallback-5",
        src: "https://picsum.photos/id/1081/900/1200",
        category: "Fashion",
        alt: "Fashion work 2",
    },
    {
        id: "fallback-6",
        src: "https://picsum.photos/id/1062/900/1200",
        category: "Life",
        alt: "Life work 2",
    },
    {
        id: "fallback-7",
        src: "https://picsum.photos/id/1005/900/1200",
        category: "Portrait",
        alt: "Portrait work 3",
    },
    {
        id: "fallback-8",
        src: "https://picsum.photos/id/1011/900/1200",
        category: "Fashion",
        alt: "Fashion work 3",
    },
    {
        id: "fallback-9",
        src: "https://picsum.photos/id/1012/900/1200",
        category: "Life",
        alt: "Life work 3",
    },
]

const filters: Array<"All" | PortfolioCategory> = ["All", "Portrait", "Fashion", "Life"]

type SanityPortfolioItem = {
    _key: string
    alt: string
    category: PortfolioCategory
    image?: unknown
}

type SanityPortfolioSection = {
    sectionLabel?: string
    heading?: string
    items?: SanityPortfolioItem[]
}

export function PortfolioSection() {
    const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All")
    const [sectionLabel, setSectionLabel] = useState("PHOTOGRAPHY")
    const [heading, setHeading] = useState("PORTFOLIO")
    const [items, setItems] = useState<PortfolioItem[]>(portfolioItems)

    useEffect(() => {
        const query = `*[_type == "portfolioSection"][0]{
            sectionLabel,
            heading,
            items[]{
                _key,
                alt,
                category,
                image
            }
        }`

        void sanityClient.fetch<SanityPortfolioSection | null>(query).then((data) => {
            if (!data) {
                return
            }

            setSectionLabel(data.sectionLabel ?? "PHOTOGRAPHY")
            setHeading(data.heading ?? "PORTFOLIO")

            const mappedItems = (data.items ?? [])
                .map((item) => {
                    if (!item.image) {
                        return null
                    }

                    const category: PortfolioCategory = ["Portrait", "Fashion", "Life"].includes(item.category)
                        ? item.category
                        : "Portrait"

                    return {
                        id: item._key,
                        src: urlFor(item.image).width(900).height(1200).fit("crop").url(),
                        category,
                        alt: item.alt || `${category} work`,
                    }
                })
                .filter((item): item is PortfolioItem => item !== null)

            if (mappedItems.length > 0) {
                setItems(mappedItems.slice(0, 9))
            }
        })
    }, [])

    const visibleItems = useMemo(() => {
        return items.filter((item) => activeFilter === "All" || item.category === activeFilter).slice(0, 9)
    }, [activeFilter, items])

    return (
        <section
            id="portfolio"
            aria-label="Photography portfolio gallery"
            className="flex min-h-dvh flex-col items-center justify-center bg-[#f3f2f0] px-4 py-16 text-[#353535] sm:px-6 md:py-20"
        >
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#8b8b8b]">{sectionLabel}</p>
                <h2 className="mt-3 text-4xl font-light tracking-[0.2em] sm:text-5xl">{heading}</h2>

                <div className="mt-10 grid w-full grid-cols-4 gap-3 border-b border-[#dddddd] pb-2 sm:gap-6 sm:pb-3">
                    {filters.map((filter) => {
                        const isActive = filter === activeFilter

                        return (
                            <button
                                key={filter}
                                type="button"
                                aria-pressed={isActive}
                                onClick={() => setActiveFilter(filter)}
                                className={`relative pb-2 text-left text-sm font-semibold tracking-[0.02em] transition-colors sm:text-xl ${isActive ? "text-[#333333]" : "text-[#9b9b9b] hover:text-[#666666]"
                                    }`}
                            >
                                {filter}
                                {isActive && <span className="absolute inset-x-0 bottom-0 h-[1.5px] bg-[#bdbdbd]" aria-hidden="true" />}
                            </button>
                        )
                    })}
                </div>

                <div className="mt-6 w-full max-w-5xl">
                    <div className="grid aspect-square grid-cols-3 grid-rows-3 gap-2 sm:gap-3">
                        {visibleItems.map((item) => (
                            <article key={item.id} className="h-full w-full overflow-hidden bg-[#e8e8e8]">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    loading="lazy"
                                    className="h-full w-full object-cover object-center"
                                />
                            </article>
                        ))}
                    </div>
                </div>

                <a
                    href="https://www.instagram.com/thepixellab.lb"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-10 inline-block border border-[#cfcfcf] px-8 py-3 text-[11px] font-semibold tracking-[0.18em] text-[#696969] transition-colors hover:bg-[#ecebe8]"
                >
                    SEE MORE WORKS
                </a>
            </div>
        </section>
    )
}