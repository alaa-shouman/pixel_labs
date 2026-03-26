import { useMemo, useState } from "react"

type PortfolioCategory = "Portrait" | "Fashion" | "Life"

type PortfolioItem = {
    id: number
    src: string
    category: PortfolioCategory
    priority: number
}

const portfolioItems: PortfolioItem[] = [
    {
        id: 1,
        src: "https://picsum.photos/id/1027/900/1200",
        category: "Portrait",
        priority: 1,
    },
    {
        id: 2,
        src: "https://picsum.photos/id/1035/900/1200",
        category: "Fashion",
        priority: 5,
    },
    {
        id: 3,
        src: "https://picsum.photos/id/1025/900/1200",
        category: "Life",
        priority: 8,
    },
    {
        id: 4,
        src: "https://picsum.photos/id/1074/900/1200",
        category: "Portrait",
        priority: 4,
    },
    {
        id: 5,
        src: "https://picsum.photos/id/1081/900/1200",
        category: "Fashion",
        priority: 2,
    },
    {
        id: 6,
        src: "https://picsum.photos/id/1062/900/1200",
        category: "Life",
        priority: 7,
    },
    {
        id: 7,
        src: "https://picsum.photos/id/1005/900/1200",
        category: "Portrait",
        priority: 9,
    },
    {
        id: 8,
        src: "https://picsum.photos/id/1011/900/1200",
        category: "Fashion",
        priority: 3,
    },
    {
        id: 9,
        src: "https://picsum.photos/id/1012/900/1200",
        category: "Life",
        priority: 6,
    },
]

const filters: Array<"All" | PortfolioCategory> = ["All", "Portrait", "Fashion", "Life"]

export function PortfolioSection() {
    const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All")

    const visibleItems = useMemo(() => {
        return portfolioItems
            .filter((item) => activeFilter === "All" || item.category === activeFilter)
            .sort((a, b) => a.priority - b.priority)
            .slice(0, 9)
    }, [activeFilter])

    return (
        <section
            id="portfolio"
            aria-label="Photography portfolio gallery"
            className="bg-[#f3f2f0] px-4 py-16 text-[#353535] sm:px-6 md:py-20"
        >
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#8b8b8b]">PHOTOGRAPHY</p>
                <h2 className="mt-3 text-4xl font-light tracking-[0.2em] sm:text-5xl">PORTFOLIO</h2>

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

                <div className="mt-6 w-full max-w-3xl">
                    <div className="grid aspect-square grid-cols-3 grid-rows-3 gap-2 sm:gap-3">
                        {visibleItems.map((item) => (
                            <article key={item.id} className="h-full w-full overflow-hidden bg-[#e8e8e8]">
                                <img
                                    src={item.src}
                                    alt={`${item.category} work ${item.id}`}
                                    loading="lazy"
                                    className="h-full w-full object-cover object-center"
                                />
                            </article>
                        ))}
                    </div>
                </div>

                <button
                    type="button"
                    className="mt-10 border border-[#cfcfcf] px-8 py-3 text-[11px] font-semibold tracking-[0.18em] text-[#696969] transition-colors hover:bg-[#ecebe8]"
                >
                    SEE MORE WORKS
                </button>
            </div>
        </section>
    )
}