import Image from "next/image";
import { Search, ShoppingCart, Menu } from "lucide-react";

export default function Topbar() {
  return (
    <div className="wrapper py-4 flex items-center justify-between border-b border-gray-200">
      <Image src="/images/logo.png" alt="logo" width={42} height={42} />
      <div className="flex gap-6">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100">
          <Search className="text-purple-600 w-8 h-8 p-2" />
        </div>
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100">
          <ShoppingCart className="text-purple-600 w-8 h-8 p-2" />
        </div>
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100">
          <Menu className="text-purple-600 w-8 h-8 p-2" />
        </div>
      </div>
    </div>
  );
}