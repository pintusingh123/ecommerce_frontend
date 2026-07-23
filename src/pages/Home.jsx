import Footer from "../components/Footer";
import HeroSection from "../components/hero/HeroSection";
import HomeFeatures from "../components/hero/HomeFeatures";
import ProductList from "./ProductList";

function Home() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col justify-between">
      <div className="mx-auto w-full max-w-7xl px-4 pt-6 sm:px-6 lg:px-8 flex-1">
        <HeroSection />
        <HomeFeatures />
        <div id="products">
          <ProductList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;



