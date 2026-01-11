"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
          <img
            src="/installed-ro-water-plant-system-in-modern-home.jpg"
            alt="RO Water Plant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-balance">
                Pure Water, Healthy Living
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 opacity-95 text-balance">
                Premium RO water purification solutions for your family
              </p>
            </div>
          </div>
        </section>

        {/* Two Options Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-12 text-balance">
            What Are You Looking For?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Services Option */}
            <Link href="/repair">
              <div className="group cursor-pointer rounded-xl overflow-hidden bg-card border border-border hover:border-primary transition h-full">
                <div className="relative h-64 md:h-80 overflow-hidden bg-muted">
                  <img
                    src="/professional-ro-repair-service-technician.jpg"
                    alt="Repair Services"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-primary">SERVICES</h3>
                  <p className="text-xs sm:text-sm md:text-base text-foreground mb-4">
                    Professional repair and maintenance services for your water purification systems. Get expert support
                    when you need it.
                  </p>
                  <div className="flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Equipment Option */}
            <Link href="/equipment">
              <div className="group cursor-pointer rounded-xl overflow-hidden bg-card border border-border hover:border-primary transition h-full">
                <div className="relative h-64 md:h-80 overflow-hidden bg-muted">
                  <img
                    src="/modern-ro-water-purifier-equipment-system.jpg"
                    alt="Equipment"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-accent">EQUIPMENT</h3>
                  <p className="text-xs sm:text-sm md:text-base text-foreground mb-4">
                    Browse our range of premium RO purifiers and water treatment equipment. Find the perfect solution
                    for your needs.
                  </p>
                  <div className="flex items-center text-accent font-semibold group-hover:gap-3 gap-2 transition">
                    Shop Now
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-muted py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-8 text-balance">Featured Products</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  id: 1,
                  name: "RO Water Plant Complete Equipment(Branded)",
                  price: 270000,
                  capacity: "2000L Capacity",
                  image: "https://innovapriority.com/images/ro-plant-chemicals.jpg",
                },
                {
                  id: 2,
                  name: "Complete Equipment Non Branded",
                  price: 240000,
                  capacity: "2000L Capacity",
                  image: "https://www.aquasafewater.in/wp-content/uploads/Aquasafe-1000-Litre-RO-Water-Plant.jpg",
                },
                {
                  id: 3,
                  name: "2000L SS Skid (Stainless Steel)",
                  price: 12000,
                  capacity: "2000L",
                  image:
                    "https://5.imimg.com/data5/SELLER/Default/2021/4/FP/JO/AL/22019891/whatsapp-image-2021-04-01-at-6-52-01-pm-1--500x500.jpeg",
                },
              ].map((product) => (
                <div
                  key={product.id}
                  className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary transition"
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-sm sm:text-base md:text-lg mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-xs mb-3">{product.capacity}</p>
                    <p className="text-xl sm:text-2xl font-bold text-primary mb-4">₹{product.price.toLocaleString()}</p>
                    <Link
                      href="/equipment"
                      className="block w-full bg-primary text-primary-foreground py-2 rounded-lg text-center hover:opacity-90 transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-8 text-balance">Why Choose AquaPure?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Premium Quality", desc: "Industry-leading purification systems with advanced technology" },
              { title: "Expert Support", desc: "24/7 customer service and professional repair technicians" },
              { title: "Flexible Plans", desc: "Multiple subscription options and customized solutions" },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {i + 1}
                </div>
                <h3 className="text-base md:text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
