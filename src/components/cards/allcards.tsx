"use client"

import { useState } from "react"
import { ChevronRight, Minus, Plus, X } from "lucide-react"
import Image from "next/image"

export default function ProductCards() {
  const [quantity, setQuantity] = useState(1)

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="text-pink-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-medium">Janet Jackson</h3>
            <p className="text-sm text-gray-600">234, Bode Thomas Avenue, Lagos, Nigeria.</p>
            <p className="text-sm text-gray-600">+2348123456789</p>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </div>
      </div>    
  )
}
