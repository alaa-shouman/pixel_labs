import { useEffect, useMemo, useState } from "react"
import { sanityClient } from "@/lib/sanity"

type PricePackage = {
    _key: string
    name: string
    price: string
    duration: string
    photos: string
    consultationOnStyle?: boolean
    order?: number
}

type PriceSection = {
    _id: string
    heading: string
    whatsAppNumber: string
    buttonLabel: string
    packages: PricePackage[]
}

const FALLBACK_SECTIONS: PriceSection[] = [
    {
        _id: "fallback-1",
        heading: "Products Photography",
        whatsAppNumber: "96170821128",
        buttonLabel: "Schedule photo session",
        packages: [
            { _key: "f1", name: "MINIMAL", price: "100$", duration: "2 hours", photos: "50-70", consultationOnStyle: true, order: 1 },
            { _key: "f2", name: "STANDARD", price: "200$", duration: "2 hours", photos: "50-70", consultationOnStyle: true, order: 2 },
            { _key: "f3", name: "MAXIMUM", price: "350$", duration: "2 hours", photos: "50-70", consultationOnStyle: true, order: 3 },
        ],
    },
]

const QUERY = `*[_type == "pricesSection"] | order(_createdAt asc) {
    _id,
    heading,
    whatsAppNumber,
    buttonLabel,
    packages[] {
        _key,
        name,
        price,
        duration,
        photos,
        consultationOnStyle,
        order
    }
}`

export function PricesSection() {
    const [sections, setSections] = useState<PriceSection[]>(FALLBACK_SECTIONS)
    const [activeSectionId, setActiveSectionId] = useState<string>(FALLBACK_SECTIONS[0]._id)

    useEffect(() => {
        void sanityClient.fetch<PriceSection[]>(QUERY).then((data) => {
            if (!Array.isArray(data) || data.length === 0) return

            const sanitized = data
                .filter((s) => s._id && s.heading && s.whatsAppNumber && s.buttonLabel && Array.isArray(s.packages))
                .map((s) => ({
                    ...s,
                    packages: s.packages
                        .filter((pkg) => pkg._key && pkg.name && pkg.price && pkg.duration && pkg.photos)
                        .sort((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER)),
                }))
                .filter((s) => s.packages.length > 0)

            if (sanitized.length > 0) {
                setSections(sanitized)
                setActiveSectionId(sanitized[0]._id)
            }
        })
    }, [])

    const activeSection = useMemo(
        () => sections.find((s) => s._id === activeSectionId) ?? sections[0],
        [sections, activeSectionId],
    )

    const normalizedWhatsAppNumber = useMemo(
        () => activeSection.whatsAppNumber.replace(/\D/g, ""),
        [activeSection.whatsAppNumber],
    )

    const tabId = (id: string) => `price-tab-${id}`
    const panelId = (id: string) => `price-panel-${id}`

    return (
        <section id="prices" aria-label="Prices packages" className="bg-white py-20 sm:py-32 min-h-screen">
            <div className="mx-auto flex max-w-6xl flex-col items-center px-6 sm:px-10">
                <h2 className="font-playball text-[3.5rem] tracking-wide text-black sm:text-[4.5rem]">Prices</h2>

                {sections.length > 1 ? (
                    <div
                        role="tablist"
                        aria-label="Photography session types"
                        className="mt-10 flex w-full gap-3 border-b border-[#dddddd] pb-2 sm:gap-6 sm:pb-3"
                    >
                        {sections.map((section) => {
                            const isActive = section._id === activeSectionId
                            return (
                                <button
                                    key={section._id}
                                    id={tabId(section._id)}
                                    role="tab"
                                    type="button"
                                    aria-selected={isActive}
                                    aria-controls={panelId(section._id)}
                                    onClick={() => setActiveSectionId(section._id)}
                                    className={`relative pb-2 text-left text-sm font-semibold tracking-[0.02em] transition-colors sm:text-xl ${
                                        isActive ? "text-[#333333]" : "text-[#9b9b9b] hover:text-[#666666]"
                                    }`}
                                >
                                    {section.heading}
                                    {isActive && <span className="absolute inset-x-0 bottom-0 h-[1.5px] bg-[#bdbdbd]" aria-hidden="true" />}
                                </button>
                            )
                        })}
                    </div>
                ) : (
                    <p className="mt-4 text-base font-light tracking-[0.05em] text-[#666]">{sections[0].heading}</p>
                )}

                <div
                    id={panelId(activeSection._id)}
                    role="tabpanel"
                    aria-labelledby={tabId(activeSection._id)}
                    className="mt-14 flex w-full flex-col items-center justify-center gap-8 md:flex-row md:items-stretch lg:gap-10"
                >
                    {activeSection.packages.map((pkg) => {
                        const message = `Hello! I would like to schedule the ${pkg.name} package (${pkg.price}).`
                        const waLink = `https://wa.me/${normalizedWhatsAppNumber}?text=${encodeURIComponent(message)}`

                        return (
                            <div
                                key={pkg._key}
                                className="flex w-full flex-col rounded-[2.5rem] bg-white p-8 shadow-[0_12px_50px_rgba(0,0,0,0.06)] ring-1 ring-black/3 sm:p-10"
                            >
                                <div className="text-center">
                                    <h3 className="text-sm font-medium tracking-[0.08em] text-[#333] sm:text-[0.95rem]">{pkg.name}</h3>
                                    <div className="mx-auto mt-2 h-px w-12 bg-[#888]"></div>
                                    <p className="mt-4 text-2xl font-light text-[#222] sm:text-3xl">{pkg.price}</p>
                                </div>

                                <div className="mt-12 flex-1 space-y-6">
                                    <div className="flex items-start justify-between gap-2 border-b border-[#d8d0cf] pb-1.5 text-[0.85rem] text-[#444]">
                                        <span className="shrink-0 font-light">duration</span>
                                        <span className="text-right font-normal text-[#222]">{pkg.duration}</span>
                                    </div>
                                    <div className="flex items-start justify-between gap-2 border-b border-[#d8d0cf] pb-1.5 text-[0.85rem] text-[#444]">
                                        <span className="shrink-0 font-light">number of photos</span>
                                        <span className="text-right font-normal text-[#222]">{pkg.photos}</span>
                                    </div>
                                    {pkg.consultationOnStyle !== false && (
                                        <div className="flex items-start justify-between gap-2 border-b border-[#d8d0cf] pb-1.5 text-[0.85rem] text-[#444]">
                                            <span className="shrink-0 font-light">consultation on style</span>
                                            <span></span>
                                        </div>
                                    )}
                                </div>

                                <a
                                    href={waLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-12 inline-block w-full rounded-full border border-black/70 py-[0.85rem] text-center text-[0.8rem] text-[#333] transition hover:border-[#666] hover:bg-black/5"
                                >
                                    {activeSection.buttonLabel}
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
