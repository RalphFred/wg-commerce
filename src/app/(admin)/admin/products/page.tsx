import AdminBar from '@/components/admin/AdminBar'
import OrderCard from '@/components/cards/OrderCard'
import FeaturedCard from '@/components/shared/FeaturedCard'
import HomeBestseller from '@/components/shared/HomeBestseller'
import HomeFeatured from '@/components/shared/HomeFeatured'
import ProductCardsGroup from '@/components/shared/ProductCardGroup'
import { ScrollArea } from '@radix-ui/react-scroll-area'

type TOrders = {
  imageUrl: string
  id: string
  qty: number
  price: number
  date: Date 
  label: 'new' | 'active' | 'completed' | 'cancelled'
}

const orders: TOrders[] = [
  {
    imageUrl: '/images/logo.png',
    id: 'asdasdf',
    qty: 5,
    price: 3_000_000,
    date: new Date("12/03/2024"),
    label: 'new'
  },
  {
    imageUrl: '/images/logo.png',
    id: 'asdasdf',
    qty: 5,
    price: 3_000_000,
    date: new Date("12/03/2024"),
    label: 'new'
  },
  {
    imageUrl: '/images/logo.png',
    id: 'asdasdf',
    qty: 5,
    price: 3_000_000,
    date: new Date("12/03/2024"),
    label: 'new'
  },
  {
    imageUrl: '/images/logo.png',
    id: 'asdasdf',
    qty: 5,
    price: 3_000_000,
    date: new Date("12/03/2024"),
    label: 'new'
  },
  {
    imageUrl: '/images/logo.png',
    id: 'asdasdf',
    qty: 5,
    price: 3_000_000,
    date: new Date("12/03/2024"),
    label: 'new'
  },
  {
    imageUrl: '/images/logo.png',
    id: 'asdasdf',
    qty: 5,
    price: 3_000_000,
    date: new Date("12/03/2024"),
    label: 'new'
  },
]


export default function ProductsPage() {
    return (
        <div>
            <AdminBar title="Products" />
            <div className="bg-neutral-100">
                <ProductCardsGroup title={`${44} products`}>
                    <ScrollArea className="max-h-[450px] h-[450px] overflow-auto rounded-xl">
                        <div className="flex flex-col space-y-4">
                            {orders.map((order) => (
                                <OrderCard key={order.id} {...order} />
                            ))}
                        </div>
                    </ScrollArea>
                </ProductCardsGroup>
            </div>
        </div>
    )
}
