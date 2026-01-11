"use client"

import Link from "next/link"
import { ShoppingCart, Menu, X, Moon, Sun } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/hooks/use-cart"
import { useTheme } from "@/providers/theme-provider"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { items } = useCart()
  const { isDark, toggleTheme } = useTheme()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
              MS
            </div>
            <span className="text-xl font-bold text-primary hidden sm:inline">M S UNIQUE ENTERPRISES</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link href="/equipment" className="text-foreground hover:text-primary transition">
              Equipment
            </Link>
            <Link href="/repair" className="text-foreground hover:text-primary transition">
              Repair Services
            </Link>
            <Link href="/subscription" className="text-foreground hover:text-primary transition">
              Water Cans
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition">
              Contact
            </Link>
          </div>

          {/* Cart Icon and Theme Toggle */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-muted rounded-lg transition"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-primary" />}
            </button>

            <Link href="/cart" className="relative p-2 hover:bg-muted rounded-lg transition">
              <ShoppingCart className="w-5 h-5 text-primary" />
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg transition">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border pb-4">
            <Link href="/" className="block py-2 text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link href="/equipment" className="block py-2 text-foreground hover:text-primary transition">
              Equipment
            </Link>
            <Link href="/repair" className="block py-2 text-foreground hover:text-primary transition">
              Repair Services
            </Link>
            <Link href="/subscription" className="block py-2 text-foreground hover:text-primary transition">
              Subscription
            </Link>
            <Link href="/contact" className="block py-2 text-foreground hover:text-primary transition">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
