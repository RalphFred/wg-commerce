"use client"
import { ChevronLeftIcon, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function AdminBar({ title, children }: { title: string, children?: ReactNode }) {
    const router = useRouter()

    return (
        <div className="wrapper flex items-center justify-between py-4">
            <button className="flex items-center gap-1" onClick={() => router.back()}>
                <ChevronLeftIcon className="size-4"/>
                <p>{title}</p>
            </button>
            <div className="flex items-center gap-1 text-sm text-purple-600">
                {/* <MapPin className="w-5 h-5" /> Lagos, Nigeria */}
                {children}
            </div>
        </div>
    );
}
