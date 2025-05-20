import Link from "next/link";
import ProductCard from "./ProductCard";
import { ReactNode } from "react";

export default function ProductCardsGroup({ title, seeAllUrl, children }: { 
    title: string
    seeAllUrl?: string
    children?: ReactNode
}) {
    return (
        <div className="wrapper py-4 border-b border-neutral-200 ">
            <div className="flex items-center justify-between mb-4">
                <div className="font-semibold">{title}</div>
                    {seeAllUrl ? <div className="text-sm text-purple-600">
                        <Link href={seeAllUrl}> See All </Link>
                    </div> : null }
            </div>
            {children || <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>}
        </div>
    );
}
