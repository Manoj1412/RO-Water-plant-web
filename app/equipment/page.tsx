"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { useState } from "react"

const PRODUCTS = [
  {
    id: 1,
    name: "Industrial RO Plant – Complete Equipment",
    price: 210000,
    brand: "Complete System",
    specs: "Full system setup",
    image: "https://innovapriority.com/images/ro-plant-chemicals.jpg",
  },
  {
    id: 2,
    name: "Raw Water Motor",
    price: 12000,
    brand: "CRI",
    specs: "High efficiency pump",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/10/355805559/QX/AY/VO/4103899/cri-champee-series-raw-water-pump-1-hp.jpeg",
  },
  {
    id: 3,
    name: "Sand & Carbon Vessels",
    price: 22000,
    brand: "Pentair / Baburi",
    specs: "FRP construction",
    image: "https://5.imimg.com/data5/IB/BU/XO/SELLER-21599407/sand-and-carbon-filter-500x500.jpg",
  },
  {
    id: 4,
    name: "Multiport Valves",
    price: 8500,
    brand: "Initiative",
    specs: "Automatic switching",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/5/OX/IH/ET/7146614/initiative-multiport-valve.jpg",
  },
  {
    id: 5,
    name: "Sand & Carbon Media",
    price: 15000,
    brand: "900 IV",
    specs: "Premium filtration",
    image: "https://www.starkefiltermedia.com/wp-content/uploads/2025/05/Filter-Media-Options-1200x700.jpg.webp",
  },
  {
    id: 6,
    name: "SS Skid 40mm",
    price: 18000,
    brand: "Stainless Steel",
    specs: "Industrial grade frame",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/4/FP/JO/AL/22019891/whatsapp-image-2021-04-01-at-6-52-01-pm-1--500x500.jpeg",
  },
  {
    id: 7,
    name: "Flow Meters",
    price: 6500,
    brand: "UKL",
    specs: "Digital display",
    image: "https://5.imimg.com/data5/EF/DU/MY-50346108/ro-plant-flow-meter.jpg",
  },
  {
    id: 8,
    name: "Pressure Gauges",
    price: 4500,
    brand: "Generic",
    specs: "Accurate readings",
    image: "https://m.media-amazon.com/images/I/71nqsQRYoiS.jpg",
  },
  {
    id: 9,
    name: "RO Control Panel",
    price: 30000,
    brand: "Hyderabad Made",
    specs: "Automated controls",
    image: "https://5.imimg.com/data5/WV/WJ/MY-61659235/ro-control-panel-st-2000-lph-1-3-500x500.jpg",
  },
  {
    id: 10,
    name: "UV Meter",
    price: 1500,
    brand: "Generic",
    specs: "Precise measurement",
    image: "https://images.linshangtech.com/other/125UVCWP19060402.jpg",
  },
  {
    id: 11,
    name: "High Pressure Pump",
    price: 38000,
    brand: "CRI",
    specs: "High output pump",
    image: "https://4.imimg.com/data4/KT/TQ/MY-4310098/img-20151006-wa0005.jpg",
  },
  {
    id: 12,
    name: "Dosing Pumps",
    price: 16000,
    brand: "UKL / LCM",
    specs: "Chemical injection",
    image: "https://m.media-amazon.com/images/I/61GUSkwV6bL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 13,
    name: "Membrane Housings",
    price: 1700,
    brand: "Aqua",
    specs: "Durable design",
    image: "https://5.imimg.com/data5/OR/RY/MY-14047183/ro-plant-membrane-housing.jpg",
  },
  {
    id: 14,
    name: "Micron Housing",
    price: 8500,
    brand: "Generic",
    specs: "Fine filtration",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/3/OL/WT/IG/58100304/ss-micron-filter-housing-500x500.jpg",
  },
  {
    id: 15,
    name: "RO Chemicals Set",
    price: 12000,
    brand: "Generic",
    specs: "Complete package",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/6/320765707/DG/HX/ZC/8065020/ro-membrane-cleaning-chemicals.jpg",
  },
  {
    id: 16,
    name: "Filters",
    price: 7500,
    brand: "Generic",
    specs: "Multi-stage filtering",
    image: "https://5.imimg.com/data5/FF/FM/HN/SELLER-5777738/ro-plant-filter.jpg",
  },
  {
    id: 17,
    name: "RO Membranes",
    price: 24000,
    brand: "India Made",
    specs: "High rejection rate",
    image: "https://5.imimg.com/data5/GLADMIN/Default/2022/6/AE/LJ/QB/90547/ro-membranes-500x500.jpg",
  },
  {
    id: 18,
    name: "SS Water Tank 2000 Litres",
    price: 15000,
    brand: "SS 304 Quality",
    specs: "2000L capacity",
    image: "https://www.aquasafesstanks.com/wp-content/uploads/2000-Litre-Stainless-Steel-Water-Tank-Price.jpg",
  },
  {
    id: 19,
    name: "PVC Water Tank 2000 Litres",
    price: 9000,
    brand: "Generic",
    specs: "2000L storage",
    image: "https://m.media-amazon.com/images/I/41OydCsrURL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 20,
    name: "Electrical Items & Nut Bolts",
    price: 800,
    brand: "Generic",
    specs: "Complete hardware",
    image: "https://3.imimg.com/data3/QV/KU/MY-3696539/nut-and-bolts-wire.jpg",
  },
  {
    id: 21,
    name: "Floats & CPVC Pipeline upto Taps",
    price: 999,
    brand: "Generic",
    specs: "Complete piping kit",
    image: "https://m.media-amazon.com/images/I/61dJqw28U+L._AC_UF1000,1000_QL80_.jpg",
  },
]

export default function Equipment() {
  const [selectedPrice, setSelectedPrice] = useState("all")
  const [selectedBrand, setSelectedBrand] = useState("all")

  const filteredProducts = PRODUCTS.filter((product) => {
    let match = true

    if (selectedPrice !== "all") {
      const price = product.price
      if (selectedPrice === "0-10k" && price > 10000) match = false
      if (selectedPrice === "10k-20k" && (price < 10000 || price > 20000)) match = false
      if (selectedPrice === "20k+" && price < 20000) match = false
    }

    if (selectedBrand !== "all" && product.brand !== selectedBrand) match = false

    return match
  })

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-8 md:py-6 leading-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">Our Equipment</h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg opacity-90">
              Browse our premium RO water purification systems
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters - Hidden on mobile, shown as dropdown */}
            <div className="lg:col-span-1">
              <details className="lg:hidden mb-6">
                <summary className="bg-primary text-primary-foreground px-4 py-3 rounded-lg font-semibold cursor-pointer hover:opacity-90 transition text-sm">
                  Filters
                </summary>
                <div className="bg-card border border-border rounded-lg p-6 mt-2 space-y-6">
                  {/* Price Filter */}
                  <div>
                    <label className="block font-semibold text-xs sm:text-sm mb-3">Price Range</label>
                    <select
                      value={selectedPrice}
                      onChange={(e) => setSelectedPrice(e.target.value)}
                      className="w-full border border-border rounded-lg px-3 py-2 bg-background text-foreground text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="all">All Prices</option>
                      <option value="0-10k">₹0 - ₹10,000</option>
                      <option value="10k-20k">₹10,000 - ₹20,000</option>
                      <option value="20k+">₹20,000+</option>
                    </select>
                  </div>

                  {/* Brand Filter */}
                  <div>
                    <label className="block font-semibold text-xs sm:text-sm mb-3">Brand</label>
                    <select
                      value={selectedBrand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      className="w-full border border-border rounded-lg px-3 py-2 bg-background text-foreground text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="all">All Brands</option>
                      {[...new Set(PRODUCTS.map((p) => p.brand))].map((brand) => (
                        <option key={brand} value={brand}>
                          {brand}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedPrice("all")
                      setSelectedBrand("all")
                    }}
                    className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition text-xs sm:text-sm"
                  >
                    Reset Filters
                  </button>
                </div>
              </details>

              {/* Desktop Filters */}
              <div className="hidden lg:block bg-card border border-border rounded-lg p-6 sticky top-20">
                <h3 className="text-base md:text-lg font-bold mb-6">Filters</h3>

                {/* Price Filter */}
                <div className="mb-6">
                  <label className="block font-semibold text-xs sm:text-sm mb-3">Price Range</label>
                  <select
                    value={selectedPrice}
                    onChange={(e) => setSelectedPrice(e.target.value)}
                    className="w-full border border-border rounded-lg px-3 py-2 bg-background text-foreground text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="all">All Prices</option>
                    <option value="0-10k">₹0 - ₹10,000</option>
                    <option value="10k-20k">₹10,000 - ₹20,000</option>
                    <option value="20k+">₹20,000+</option>
                  </select>
                </div>

                {/* Brand Filter */}
                <div className="mb-6">
                  <label className="block font-semibold text-xs sm:text-sm mb-3">Brand</label>
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full border border-border rounded-lg px-3 py-2 bg-background text-foreground text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="all">All Brands</option>
                    {[...new Set(PRODUCTS.map((p) => p.brand))].map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={() => {
                    setSelectedPrice("all")
                    setSelectedBrand("all")
                  }}
                  className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition text-xs sm:text-sm"
                >
                  Reset Filters
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-base sm:text-lg md:text-xl font-bold">
                  Showing {filteredProducts.length} products
                </h2>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
                    No products found matching your filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
