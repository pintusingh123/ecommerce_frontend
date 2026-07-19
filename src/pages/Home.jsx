import Footer from "../components/Footer";
import HeroSection from "../components/hero/HeroSection";
import HomeFeatures from "../components/hero/HomeFeatures";
import ProductList from "./ProductList";

function Home() {
  return (
    <>
      <div className="  px-4 pt-6 sm:px-6 lg:px-4 bg-[#080a0d]   h-full  ">
        <div className="mx-auto max-w-7xl">
          <HeroSection />
          <HomeFeatures />
          <ProductList />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
