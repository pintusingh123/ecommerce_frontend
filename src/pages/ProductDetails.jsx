import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CardContext";
import { useAuth } from "../context/AuthContext";
import { IconArrowLeft, IconShoppingCart, IconSparkles, IconShieldCheck, IconTruck } from "@tabler/icons-react";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const navigate = useNavigate();
  const BASEURL =
    import.meta.env.VITE_DJANGO_BASE_URL || "http://127.0.0.1:8000";

  useEffect(() => {
    fetch(`${BASEURL}/api/products/${id}/`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch product details");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id, BASEURL]);

  const { isAuthenticated } = useAuth();
  const handleAddToCart = () => {
    if (!isAuthenticated) {
      alert("Please login first.");
      return;
    }
    addToCart(product.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f9f9f9] px-4">
        <div className="rounded-3xl border border-[#e2e2e2] bg-white px-10 py-8 text-center shadow-md">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-[#705d00] border-t-transparent"></div>
          <p className="font-display text-base font-bold text-[#1a1c1c] tracking-wide">
            Loading details...
          </p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f9f9f9] px-4">
        <div className="rounded-3xl border border-rose-200 bg-white px-10 py-8 text-center shadow-md">
          <h2 className="font-display text-2xl font-bold text-rose-600">
            {error || "Product Not Found"}
          </h2>
          <button
            onClick={() => navigate("/")}
            className="mt-6 rounded-2xl bg-[#705d00] px-6 py-2.5 text-sm font-bold text-white shadow-sm"
          >
            Back to Catalog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9f9f9] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <button
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-2 rounded-full border border-[#d0c6ab] bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-[#705d00] shadow-sm transition hover:border-[#705d00] hover:bg-[#f3f3f4]"
        >
          <IconArrowLeft size={18} />
          Back to Collection
        </button>

        <div className="overflow-hidden rounded-[36px] border border-[#e2e2e2] bg-white p-6 shadow-md lg:p-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-[28px] border border-[#e2e2e2] bg-[#f3f3f4] p-3 shadow-inner">
              <img
                src={product.image}
                alt={product.name}
                className="h-[440px] w-full rounded-[22px] object-cover transition duration-500 hover:scale-105"
              />
              <span className="absolute left-6 top-6 flex items-center gap-1.5 rounded-full border border-[#d0c6ab] bg-white/95 px-4 py-1.5 text-xs font-bold text-[#705d00] shadow-sm backdrop-blur-md">
                <IconSparkles size={15} className="text-[#705d00]" /> Premium Quality
              </span>
            </div>

            {/* Product Meta */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#ffd700]/30 border border-[#d0c6ab] px-3.5 py-1 text-xs font-bold text-[#705d00]">
                  In Stock & Ready to Ship
                </span>
              </div>

              <h1 className="mt-4 font-display text-3xl font-extrabold text-[#1a1c1c] sm:text-4xl tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="mt-4 font-body text-base leading-relaxed text-[#5f5e5e] font-normal">
                {product.description}
              </p>

              <div className="mt-6 flex flex-wrap items-baseline gap-4 border-y border-[#e2e2e2] py-5">
                <span className="font-display text-3xl font-black text-[#705d00] sm:text-4xl">
                  ₹{product.price}
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  Free Express Shipping Included
                </span>
              </div>

              {/* Guarantees */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 rounded-2xl border border-[#e2e2e2] bg-[#f9f9f9] p-3 text-xs text-[#1a1c1c]">
                  <IconTruck size={18} className="text-[#705d00]" />
                  <span>2-4 Days Delivery</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-2xl border border-[#e2e2e2] bg-[#f9f9f9] p-3 text-xs text-[#1a1c1c]">
                  <IconShieldCheck size={18} className="text-[#705d00]" />
                  <span>100% Authentic</span>
                </div>
              </div>

              {/* Add to Cart CTA */}
              <button
                onClick={handleAddToCart}
                className="mt-8 flex items-center justify-center gap-3 rounded-2xl bg-[#705d00] py-4 text-base font-extrabold text-white shadow-gold-subtle transition-all duration-300 hover:bg-[#544600] hover:scale-[1.02]"
              >
                <IconShoppingCart size={22} />
                {added ? "Added to Cart ✓" : "Add to Cart"}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;


