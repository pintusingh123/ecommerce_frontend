import Footer from "../components/Footer";
import HeroSection from "../components/hero/HeroSection";
import HomeFeatures from "../components/hero/HomeFeatures";
import ProductList from "./ProductList";

function Home() {
  return (
    <div className="min-h-screen bg-[#0B060C] px-4 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HeroSection />
        <HomeFeatures />
        <div id="products">
          <ProductList />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;

