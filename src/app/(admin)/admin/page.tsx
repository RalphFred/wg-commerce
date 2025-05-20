import Homebar from "@/components/shared/Homebar";
import FeaturedCard from "@/components/shared/FeaturedCard";
import HomeFeatured from "@/components/shared/HomeFeatured";
import HomeBestseller from "@/components/shared/HomeBestseller";
import Footer from "@/components/shared/Footer";
import AdminBar from "@/components/admin/AdminBar";
import ProductCardsGroup from "@/components/shared/ProductCardGroup";
import { ScrollArea } from "@/components/shared/ui/scroll-area";
import OrderCard from "@/components/cards/OrderCard";
import BackToTopButton from "@/components/shared/BackToTopButton";
import AdminOverview from "@/components/admin/AdminOverview";

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

export default function Home() {
  return (
    <div>
      {/* <AdminBar /> */}
      <AdminOverview />
      <div className="bg-neutral-100">
        <ProductCardsGroup title="Recent Orders" seeAllUrl="/orders#recent">
          <ScrollArea className="h-96 rounded-xl">
            <div className="flex flex-col space-y-4">
              {orders.map((order) => (
                <OrderCard key={order.id} {...order} />
              ))}
            </div>
          </ScrollArea>
        </ProductCardsGroup>
        <ProductCardsGroup title="Low Stock" seeAllUrl="/orders#low-stock"/>
      </div>
      <BackToTopButton />
      <Footer />
    </div>
  );
}
