import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  "Categories",
  "Flash Sales",
  "About Us",
  "About Us",
  "Help Center",
];

export default function Footer() {
  return (
    <div className="wrapper py-6 bg-white border-t border-neutral-100">
      <Image
        src="/images/logo.png"
        alt="logo"
        width={42}
        height={42}
        className="mb-4"
      />
      <div className="divide-y divide-neutral-200 mb-6">
        {categories.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between py-3 cursor-pointer select-none"
          >
            <span className="text-sm text-neutral-800">{item}</span>
            <span className="text-neutral-400 text-lg"><ChevronDown /></span>
          </div>
        ))}
      </div>
      <div className="text-xs text-neutral-400 mb-2">
        Walls&Gates © 2025. All Rights Reserved
      </div>
      <div className="flex gap-3 text-xs text-neutral-400">
        <Link href="#" className="hover:underline">
          Terms
        </Link>
        <span>|</span>
        <Link href="#" className="hover:underline">
          Privacy policy
        </Link>
      </div>
    </div>
  );
}
