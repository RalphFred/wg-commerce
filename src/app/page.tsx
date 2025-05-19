import Homebar from "@/components/shared/Homebar";
import FeaturedCard from "@/components/shared/FeaturedCard";
import HomeFeatured from "@/components/shared/HomeFeatured";
import HomeBestseller from "@/components/shared/HomeBestseller";
import Footer from "@/components/shared/Footer";
export default function Home() {
  return (
    <div>
      <Homebar />
      <div className="bg-neutral-100">
        <FeaturedCard />
        <HomeFeatured />
        <HomeBestseller />
      </div>
      <Footer />
    </div>
  );
}
