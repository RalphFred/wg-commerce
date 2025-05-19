import ProductCard from "./ProductCard";

export default function HomeBestseller() {
  return (
    <div className="wrapper py-4 border-b border-neutral-200 ">
      <div className="flex items-center justify-between mb-4">
        <div className="font-semibold">Bestsellers</div>
        <div className="text-sm text-purple-600">See All</div>
      </div>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
