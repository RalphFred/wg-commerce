import React from 'react'
import { StatsCard } from './StatsCard'
import NavigationMenu from './Navigation'
import { ShoppingBagIcon } from 'lucide-react'

export default function AdminOverview() {
    return (
        <div className="flex flex-col space-y-4 pt-6 p-4 bg-neutral-100">
            <div className="flex flex-wrap justify-between gap-4">
                <StatsCard 
                    icon={<ShoppingBagIcon className="h-5 w-5 text-white" />}
                    label="Today's Sales"
                    value="₦45,000"
                    variant="purple"
                />
                <StatsCard 
                    icon={<ShoppingBagIcon className="h-5 w-5 text-white" />}
                    label="Today's Orders"
                    value="5"
                />
                <StatsCard 
                    icon={<ShoppingBagIcon className="h-5 w-5 text-white" />}
                    label="Out of stock"
                    value="5"
                />
            </div>
            <NavigationMenu />
        </div>
    )
}
