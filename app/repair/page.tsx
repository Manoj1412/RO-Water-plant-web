"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Wrench, Clock, Shield } from "lucide-react"

const REPAIR_TYPES = [
  "General Maintenance",
  "Filter Replacement",
  "Membrane Repair",
  "Tank Repair",
  "Pressure Issue",
  "Water Quality Issue",
  "Leakage Repair",
  "Valve Replacement",
]

export default function Repair() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    address: "",
    problemDescription: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Repair booking:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: "",
        phone: "",
        email: "",
        serviceType: "",
        preferredDate: "",
        preferredTime: "",
        address: "",
        problemDescription: "",
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-8 md:py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">Repair Services</h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg opacity-90">
              Expert maintenance and repair for your water purification systems
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Service Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Clock, title: "Quick Service", desc: "12-24 hour service availability" },
              { icon: Shield, title: "Expert Technicians", desc: "Certified professionals with 10+ years experience" },
              { icon: Wrench, title: "Complete Solutions", desc: "Maintenance, repairs, and replacements" },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 text-center">
                <item.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="text-sm md:text-base font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Service Description */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6">Our Services</h2>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Regular Maintenance",
                    desc: "Scheduled filter changes, system cleaning, and performance checks",
                  },
                  { title: "Emergency Repair", desc: "Same-day service for critical issues and breakdowns" },
                  { title: "Part Replacement", desc: "High-quality replacement parts with warranty" },
                  { title: "System Upgrades", desc: "Enhance your system with advanced features and filters" },
                  { title: "Water Testing", desc: "Complete water quality analysis and recommendations" },
                  { title: "Warranty Support", desc: "Free support under extended warranty plans" },
                ].map((service, i) => (
                  <div key={i} className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-bold text-xs sm:text-sm mb-1">{service.title}</h4>
                    <p className="text-muted-foreground text-xs">{service.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-accent text-accent-foreground rounded-lg p-6">
                <h3 className="font-bold text-sm md:text-base mb-3">Service Pricing</h3>
                <ul className="space-y-1 text-xs">
                  <li>• General Maintenance: ₹500-1000</li>
                  <li>• Filter Replacement: ₹1500-3000</li>
                  <li>• Repair Service: ₹800-2500</li>
                  <li>• Emergency Service: Additional 50% charge</li>
                </ul>
              </div>
            </div>

            {/* Booking Form */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6">Book Service Now</h2>

              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-800 rounded-lg p-4 mb-6">
                  <p className="font-bold text-xs sm:text-sm">Thank you for booking!</p>
                  <p className="text-xs">We'll contact you shortly to confirm your appointment.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-semibold text-xs sm:text-sm mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-border rounded-lg px-4 py-2 bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-xs sm:text-sm mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-border rounded-lg px-4 py-2 bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter Your Phone Number"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-xs sm:text-sm mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-border rounded-lg px-4 py-2 bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter Your gmail"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-xs sm:text-sm mb-2">Service Type *</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full border border-border rounded-lg px-4 py-2 bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select service type</option>
                    {REPAIR_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-xs sm:text-sm mb-2">Preferred Date *</label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                      className="w-full border border-border rounded-lg px-4 py-2 bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-xs sm:text-sm mb-2">Preferred Time *</label>
                    <input
                      type="time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                      className="w-full border border-border rounded-lg px-4 py-2 bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-xs sm:text-sm mb-2">Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full border border-border rounded-lg px-4 py-2 bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your full address"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-xs sm:text-sm mb-2">Problem Description *</label>
                  <textarea
                    name="problemDescription"
                    value={formData.problemDescription}
                    onChange={handleChange}
                    required
                    className="w-full border border-border rounded-lg px-4 py-2 bg-card focus:outline-none focus:ring-2 focus:ring-primary resize-none text-xs sm:text-sm"
                    rows={4}
                    placeholder="Describe the issue with your system"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition text-xs sm:text-sm"
                >
                  Book Service
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
