import Banner from "@/components/FrontPage/Banner";
import CustomCardBanner from "@/components/FrontPage/CustomCardBanner";
import Details from "@/components/FrontPage/Details";
import Footer from "@/components/FrontPage/Footer";
import ShoppingCards from "@/components/FrontPage/ShoppingCards";
import Showcase from "@/components/FrontPage/Showcase";


export default function Home() {
  return (
    <main>
      <Banner/>
      <Showcase/>
      <ShoppingCards />
      <Details />
      <CustomCardBanner />
      <Footer />
    </main>
  );
}
