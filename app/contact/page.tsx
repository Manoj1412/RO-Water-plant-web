"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">Contact Us</h1>
            <p className="text-xs sm:text-sm md:text-base opacity-90">We're here to help. Reach out to us anytime</p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-8">Get In Touch</h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm md:text-base mb-1">Phone</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">+91 7659034234</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm md:text-base mb-1">Email</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">yalamarthisudhakar4@gmail.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm md:text-base mb-1">Address</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">M S Unique Enterprises</p>
                    <p className="text-muted-foreground text-xs sm:text-sm">Duvvada, Visakhapatnam</p>
                    <p className="text-muted-foreground text-xs sm:text-sm">Andhra Pradesh 530046, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-8">Send us a Message</h2>

              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-800 rounded-lg p-4 mb-6">
                  <p className="font-bold text-xs sm:text-sm">Message sent successfully!</p>
                  <p className="text-xs">We'll get back to you within 24 hours.</p>
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
                    placeholder="Enter Your Name"
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
                  <label className="block font-semibold text-xs sm:text-sm mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-border rounded-lg px-4 py-2 bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-xs sm:text-sm mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border border-border rounded-lg px-4 py-2 bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-xs sm:text-sm mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border border-border rounded-lg px-4 py-2 bg-card focus:outline-none focus:ring-2 focus:ring-primary resize-none text-xs sm:text-sm"
                    rows={6}
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition text-xs sm:text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="rounded-lg overflow-hidden border border-border h-64 md:h-80 bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7602.5156358316!2d83.15893771359715!3d17.685276779705884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39692c8c37c8d3%3A0xfe188c4ad42b3607!2sKurmanipalem!5e0!3m2!1sen!2sin!4v1768067051424!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
