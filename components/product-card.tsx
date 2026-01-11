"use client"

import { ShoppingCart, Plus, Minus } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/hooks/use-cart"

interface Product {
  id: number
  name: string
  price: number
  specs: string
  image: string
}

export function ProductCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  const imageUrl = product.image.startsWith("http")
    ? product.image
    : `/placeholder.svg?height=250&width=300&query=${product.image}`

  const handleAddToCart = () => {
    addItem({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: imageUrl,
      quantity,
    })
    setQuantity(1)
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition">
      <img src={imageUrl || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-1">{product.name}</h3>
        <p className="text-muted-foreground text-[10px] sm:text-xs mb-2">{product.specs}</p>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mb-4">
          ₹{product.price.toLocaleString()}
        </p>

        <div className="flex items-center gap-2 mb-4 bg-muted rounded-lg p-2">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-1 hover:bg-background rounded transition"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="flex-1 text-center font-semibold text-xs sm:text-sm">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)} className="p-1 hover:bg-background rounded transition">
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2 text-xs sm:text-sm"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  )
}
