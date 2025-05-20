import Image from 'next/image'
import React from 'react'

export default function ProductDetailsCard() {
    return (
        <div className="bg-white rounded-xl p-4 shadow-sm">
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
                <h3 className="font-medium text-sm">iPhone 16 Pro Max (256GB)</h3>
                <p className="font-semibold text-sm">₦1,905,000</p>
                <p className="text-xs text-green-500">In stock</p>
                <p className="text-xs text-gray-500">Colors: 2 • Size: M,X, XL</p>
            </div>
            <span className="text-xs text-blue-500 font-medium">Active</span>
            </div>
        </div>
    )
}
