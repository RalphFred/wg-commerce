import { Star, Heart } from "lucide-react";

export default function ProductCard() {
  return (
    <div className="w-[185px]">
      <div className="w-[185px] h-[200px] bg-neutral-200 rounded-lg mb-1 relative">
        {/* Image goes in here */}
        <Heart className="absolute top-2 right-2 w-6 h-6 text-purple-600 bg-white rounded-full p-1" />
      </div>
      <div className="h-8 text-sm flex items-center text-pink-700">
        {/* Tag goes in here */}
        FEATURED
      </div>
      <div className="flex justify-between items-center w-full mb-1">
        <div className="text-sm flex-1 truncate">iPhone 16 Pro Max</div>
        <div className="text-sm flex items-center gap-1 ">
          <Star className="w-4 h-4 text-yellow-400" fill="currentColor" /> 4.9
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <span className="font-semibold">₦5000</span> <span className="text-xs line-through text-neutral-400">₦10000</span>
        </div>
        <div className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
          -21%
        </div>
      </div>
    </div>
  );
}
