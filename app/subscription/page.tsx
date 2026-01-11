"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Check, Droplets } from "lucide-react"

const PLANS = [
  {
    id: "daily-5l",
    name: "Daily Basic",
    quantity: "1 Water Can(20L)",
    daily: 15,
    weekly: 105,
    monthly: 450,
    features: ["1 Can per day", "Advanced purification"],
  },
  {
    id: "daily-10l",
    name: "Daily Standard",
    quantity: "2 Water Cans",
    daily: 25,
    weekly: 175,
    monthly: 750,
    features: ["2 Cans per day", "Advanced purification", "Free testing"],
    popular: true,
  },
  {
    id: "daily-20l",
    name: "Daily Premium",
    quantity: "3 Water Cans",
    daily: 35,
    weekly: 245,
    monthly: 1050,
    features: ["3 Cans per day", "Advanced purification", "Free testing"],
  },
]

export default function Subscription() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    pincode: "",
    plan: "daily-10l",
    frequency: "monthly",
    startDate: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        pincode: "",
        plan: "daily-10l",
        frequency: "monthly",
        startDate: "",
      })
      setSubmitted(false)
    }, 3000)
  }

  const selectedPlan = PLANS.find((p) => p.id === formData.plan)
  const selectedPrice = selectedPlan ? selectedPlan[formData.frequency as "daily" | "weekly" | "monthly"] : 0

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-8 md:py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">Water Subscription Plans</h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg opacity-90">
              Regular pure water delivery at your doorstep
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Coverage Areas */}
          <div className="bg-card border border-border rounded-lg p-6 mb-8 md:mb-12">
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-3">Coverage Areas</h2>
            <p className="text-muted-foreground text-xs sm:text-sm mb-4">We deliver to major areas in Visakhapatnam</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {["Visakhapatnam", "Duvvada", "Gajuwaka", "Kurmanpalem"].map((area) => (
                <div key={area} className="bg-muted p-2 md:p-3 rounded-lg text-center text-xs sm:text-sm">
                  {area}
                </div>
              ))}
            </div>
          </div>

          {/* Subscription Plans */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`border rounded-lg overflow-hidden transition ${
                  plan.popular
                    ? "border-primary bg-card ring-2 ring-primary"
                    : "border-border bg-card hover:border-primary"
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 font-semibold text-xs sm:text-sm">
                    Most Popular
                  </div>
                )}
                <div className="p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Droplets className="w-5 h-5 text-primary" />
                    <h3 className="text-base md:text-lg font-bold">{plan.name}</h3>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-primary mb-1">{plan.quantity}</p>
                  <p className="text-muted-foreground text-xs mb-4">per day</p>

                  <div className="space-y-2 mb-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="text-xs text-muted-foreground mb-2">Starting from:</div>
                    <div className="text-xl sm:text-2xl font-bold">₹{plan.daily}/day</div>
                  </div>

                  <button
                    onClick={() => setFormData((prev) => ({ ...prev, plan: plan.id }))}
                    className={`w-full mt-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:opacity-90"
                        : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    Select Plan
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Subscription Form */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6">Why Choose Our Subscription?</h2>
              <div className="space-y-4">
                {[
                  { title: "Fresh Water Daily", desc: "Delivered fresh every morning to your home" },
                  { title: "Flexible Plans", desc: "Adjust your plan anytime based on needs" },
                  { title: "Best Pricing", desc: "Save up to 40% compared to retail prices" },
                  { title: "Quality Assured", desc: "Tested and purified using advanced methods" },
                  { title: "Easy Management", desc: "Pause, skip, or modify your subscription anytime" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-9 h-9 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0 text-xs sm:text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm">{item.title}</h4>
                      <p className="text-muted-foreground text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6">Subscribe Now</h2>

              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-800 rounded-lg p-4 mb-6">
                  <p className="font-bold text-xs sm:text-sm">Subscription confirmed!</p>
                  <p className="text-xs">We'll start your subscription and confirm delivery details via phone.</p>
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
                    placeholder="your@gmail.com"
                  />
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
                    placeholder="Full address"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-xs sm:text-sm mb-2">Pincode *</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                    className="w-full border border-border rounded-lg px-4 py-2 bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="110001"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-xs sm:text-sm mb-2">Select Plan *</label>
                  <select
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    required
                    className="w-full border border-border rounded-lg px-4 py-2 bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {PLANS.map((plan) => (
                      <option key={plan.id} value={plan.id}>
                        {plan.name} ({plan.quantity})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-xs sm:text-sm mb-2">Billing Frequency *</label>
                  <select
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                    required
                    className="w-full border border-border rounded-lg px-4 py-2 bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="daily">Daily (₹{selectedPlan?.daily})</option>
                    <option value="weekly">Weekly (₹{selectedPlan?.weekly})</option>
                    <option value="monthly">Monthly (₹{selectedPlan?.monthly})</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-xs sm:text-sm mb-2">Start Date *</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    className="w-full border border-border rounded-lg px-4 py-2 bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition text-xs sm:text-sm"
                >
                  Confirm Subscription
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
