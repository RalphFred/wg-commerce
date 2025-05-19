export default function FeaturedCard() {
  return (
    <div className="wrapper flex flex-col items-center py-4 border-b border-neutral-200">
      <div className="bg-purple-500 rounded-2xl p-6 w-full max-w-md shadow-lg text-white">
        <div className="text-xs font-semibold opacity-70 mb-4">FEATURED</div>
        <div className="text-xl font-bold leading-tight mb-4 max-w-3xs">Clearance Sales This Season</div>
        <div className="text-sm opacity-80 mb-4">Save up to 25% on all products</div>
        <button className="bg-white text-purple-600 font-semibold px-6 py-2 rounded-full shadow-sm hover:bg-purple-50 transition">Shop Now</button>
      </div>
    </div>
  );
}