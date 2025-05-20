import { MinusIcon, PlusIcon, XIcon } from 'lucide-react'
import Image from 'next/image'

export default function QtyProductCard() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
    <div className="flex items-start">
      <div className="flex flex-1 gap-3">
        <div className="relative w-12 h-12 rounded-md overflow-hidden">
          <Image
            src="/placeholder.svg?height=48&width=48"
            alt="iPhone 16 Pro Max"
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-sm">iPhone 16 Pro Max (256GB)</h3>
          <p className="text-xs text-gray-500">Apple</p>
          <p className="text-xs text-gray-500">Pink</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="font-semibold text-sm">₦1,905,000</span>
            <span className="text-xs text-gray-400 line-through">₦5,000</span>
            <span className="text-xs text-white bg-pink-500 rounded-full px-1.5 py-0.5">-21%</span>
          </div>
        </div>
      </div>
      <button className="text-gray-400">
        <XIcon size={18} />
      </button>
    </div>
    <div className="flex items-center justify-between mt-3">
      <p className="text-xs text-gray-500">20 units left</p>
      <div className="flex items-center">
        <button
          onClick={() => {}}
          className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300"
        >
          <MinusIcon size={14} />
        </button>
        <span className="w-8 text-center">{0}</span>
        <button
          onClick={() => {}}
          className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300"
        >
          <PlusIcon size={14} />
        </button>
      </div>
    </div>
  </div>
  )
}
