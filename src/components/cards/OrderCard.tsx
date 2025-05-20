import Image from 'next/image'
import React from 'react'

export default function OrderCard() {
  return (
    //   {/* Card 4: Order with date */}
      <div className="bg-white rounded-xl p-4">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-md overflow-hidden">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="iPhone 16 Pro Max"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-sm">#34BK93OL</h3>
            <div className="flex items-center gap-2">
              <p className="text-sm">Iphone 16 x 3</p>
              <span className="text-sm font-medium">•</span>
              <p className="text-sm font-medium">₦1,905,000</p>
            </div>
            <p className="text-xs text-gray-500">15 May, 2025</p>
          </div>
          <span className="text-xs text-yellow-600 font-medium">New</span>
        </div>
      </div > 
     )
}
