export function PricesSection() {
    const packages = [
        {
            name: "MINIMAL",
            price: "100$",
            duration: "2 hours",
            photos: "50-70",
        },
        {
            name: "STANDART",
            price: "200$",
            duration: "2 hours",
            photos: "50-70",
        },
        {
            name: "MAXIMUM",
            price: "350$",
            duration: "2 hours",
            photos: "50-70",
        },
    ]

    return (
        <section id="prices" aria-label="Prices packages" className="bg-white py-20 sm:py-32 min-h-screen">
            
            <div className="mx-auto flex max-w-6xl flex-col items-center px-6 sm:px-10">
                <h2 className="font-playball text-[3.5rem] tracking-wide text-black sm:text-[4.5rem]">Prices</h2>

                <div className="mt-14 flex w-full flex-col items-center justify-center gap-8 md:flex-row md:items-stretch lg:gap-10">
                    {packages.map((pkg) => {
                        const message = `Hello! I would like to schedule the ${pkg.name} package (${pkg.price}).`
                        const waLink = `https://wa.me/96170821128?text=${encodeURIComponent(message)}`

                        return (
                            <div
                                key={pkg.name}
                                className="flex w-full max-w-88 flex-col rounded-[2.5rem] bg-white p-8 shadow-[0_12px_50px_rgba(0,0,0,0.06)] ring-1 ring-black/3 sm:p-10"
                            >
                                <div className="text-center">
                                    <h3 className="text-sm font-medium tracking-[0.08em] text-[#333] sm:text-[0.95rem]">{pkg.name}</h3>
                                    <div className="mx-auto mt-2 h-px w-12 bg-[#888]"></div>
                                    <p className="mt-4 text-2xl font-light text-[#222] sm:text-3xl">{pkg.price}</p>
                                </div>

                                <div className="mt-12 flex-1 space-y-6">
                                    <div className="flex items-end justify-between border-b border-[#d8d0cf] pb-1.5 text-[0.85rem] text-[#444]">
                                        <span className="font-light">duration</span>
                                        <span className="font-normal text-[#222]">{pkg.duration}</span>
                                    </div>
                                    <div className="flex items-end justify-between border-b border-[#d8d0cf] pb-1.5 text-[0.85rem] text-[#444]">
                                        <span className="font-light">number of photos</span>
                                        <span className="font-normal text-[#222]">{pkg.photos}</span>
                                    </div>
                                    <div className="flex items-end justify-between border-b border-[#d8d0cf] pb-1.5 text-[0.85rem] text-[#444]">
                                        <span className="font-light">consultation on style</span>
                                        <span></span>
                                    </div>
                                </div>

                                <a
                                    href={waLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-12 inline-block w-full rounded-full border border-black/70 py-[0.85rem] text-center text-[0.8rem] text-[#333] transition hover:border-[#666] hover:bg-black/5"
                                >
                                    Schedulle photosession
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
