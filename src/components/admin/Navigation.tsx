import type React from "react"
import Link from 'next/link'
import { PlusIcon, ShoppingBagIcon, PackageIcon, StoreIcon } from "lucide-react"

export default function NavigationMenu() {
    return (
        <div className="w-full max-w-md mx-auto bg-white p-4 rounded-xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 items-center justify-between gap-2">
                <NavItem href='/products' icon={<PlusIcon className="h-5 w-5 text-purple-500" />} label="Add" />
                <NavItem href='/admin/products' icon={<ShoppingBagIcon className="h-5 w-5 text-purple-500" />} label="Products" />
                <NavItem href='#' icon={<PackageIcon className="h-5 w-5 text-purple-500" />} label="Orders" />
                <NavItem href='#' icon={<StoreIcon className="h-5 w-5 text-purple-500" />} label="Store" />
            </div>
        </div>
    )
    }

    interface NavItemProps {
        icon: React.ReactNode
        label: string
        href: string
    }

    function NavItem({ icon, label, href }: NavItemProps) {
    return (
        <Link href={href || "#"} className="flex flex-col py-4 items-center justify-center bg-neutral-100 rounded-xl w-full">
            <div className="mb-2 p-2 aspect-squre bg-neutral-200 rounded-full">{icon}</div>
            <span className="text-xs font-medium text-gray-700">{label}</span>
        </Link>
    )
    }
