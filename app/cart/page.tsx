"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useCart } from "@/hooks/use-cart"
import Link from "next/link"
import { Trash2, Plus, Minus } from "lucide-react"

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart } = useCart()

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = Math.round(subtotal * 0.18) // 18% GST
  const total = subtotal + tax

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">Shopping Cart</h1>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-base sm:text-lg md:text-xl font-bold mb-4">Your cart is empty</p>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base mb-8">
                Start adding products to your cart
              </p>
              <Link
                href="/equipment"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition text-xs sm:text-sm"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-card border border-border rounded-lg overflow-hidden">
                  <div className="px-6 py-4 border-b border-border flex justify-between items-center">
                    <h2 className="text-base md:text-lg font-bold">Items in Cart</h2>
                    <button onClick={clearCart} className="text-destructive hover:opacity-70 transition text-xs">
                      Clear Cart
                    </button>
                  </div>

                  <div className="divide-y divide-border">
                    {items.map((item) => (
                      <div key={item.id} className="p-4 sm:p-6">
                        <div className="flex gap-4 mb-4">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-lg bg-muted flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-xs sm:text-sm md:text-base mb-1 break-words">{item.name}</h3>
                            <p className="text-primary font-semibold text-xs sm:text-sm mb-2">
                              ₹{item.price.toLocaleString()}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-destructive hover:opacity-70 transition flex-shrink-0 mt-1"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 bg-muted rounded-lg w-fit p-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-background rounded transition"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-3 font-semibold text-xs">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-background rounded transition"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          <p className="text-base sm:text-lg font-bold">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div>
                <div className="bg-card border border-border rounded-lg p-6 sticky top-20">
                  <h3 className="text-base md:text-lg font-bold mb-6">Order Summary</h3>

                  <div className="space-y-3 mb-6 pb-6 border-b border-border">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-xs sm:text-sm">Subtotal</span>
                      <span className="font-semibold text-xs sm:text-sm">₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-xs sm:text-sm">Tax (18% GST)</span>
                      <span className="font-semibold text-xs sm:text-sm">₹{tax.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-xs sm:text-sm">Shipping</span>
                      <span className="font-semibold text-xs sm:text-sm">Free</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <span className="text-base md:text-lg font-bold">Total</span>
                    <span className="text-lg sm:text-xl font-bold text-primary">₹{total.toLocaleString()}</span>
                  </div>

                  <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition mb-3 text-xs sm:text-sm">
                    Proceed to Checkout
                  </button>

                  <Link
                    href="/equipment"
                    className="block w-full border border-primary text-primary text-center py-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition text-xs sm:text-sm"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
