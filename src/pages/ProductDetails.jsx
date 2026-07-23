import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CardContext";
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

  const handleAddToCart = () => {
    addToCart(product.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B060C] px-4">
        <div className="rounded-3xl border border-[#FB87AC]/30 bg-[#160B18]/90 px-10 py-8 text-center shadow-2xl backdrop-blur-xl">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-[#FB87AC] border-t-transparent shadow-pink-glow"></div>
          <p className="text-base font-bold text-white tracking-wide">
            Loading details...
          </p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B060C] px-4">
        <div className="rounded-3xl border border-rose-500/30 bg-[#160B18]/90 px-10 py-8 text-center shadow-2xl backdrop-blur-xl">
          <h2 className="text-2xl font-bold text-rose-400">
            {error || "Product Not Found"}
          </h2>
          <button
            onClick={() => navigate("/")}
            className="mt-6 rounded-2xl bg-gradient-to-r from-[#FB87AC] to-[#E86591] px-6 py-2.5 text-sm font-bold text-slate-950 shadow-pink-glow"
          >
            Back to Catalog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B060C] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <button
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-2 rounded-full border border-[#FB87AC]/30 bg-[#160B18]/80 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#FB87AC] backdrop-blur-md transition hover:border-[#FB87AC] hover:bg-[#FB87AC]/20 shadow-pink-glow-sm"
        >
          <IconArrowLeft size={18} />
          Back to Collection
        </button>

        <div className="overflow-hidden rounded-[36px] border border-[#FB87AC]/25 bg-[#160B18]/85 p-6 backdrop-blur-2xl shadow-2xl lg:p-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-[28px] border border-[#FB87AC]/20 bg-[#221124] p-3 shadow-inner">
              <img
                src={product.image}
                alt={product.name}
                className="h-[440px] w-full rounded-[22px] object-cover transition duration-500 hover:scale-105"
              />
              <span className="absolute left-6 top-6 flex items-center gap-1.5 rounded-full border border-[#FB87AC]/40 bg-[#120814]/85 px-4 py-1.5 text-xs font-bold text-[#FB87AC] backdrop-blur-md shadow-pink-glow-sm">
                <IconSparkles size={15} /> Premium Quality
              </span>
            </div>

            {/* Product Meta */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#FB87AC]/15 border border-[#FB87AC]/30 px-3.5 py-1 text-xs font-bold text-[#FB87AC]">
                  In Stock & Ready to Ship
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="mt-4 text-base leading-relaxed text-slate-300 font-normal">
                {product.description}
              </p>

              <div className="mt-6 flex flex-wrap items-baseline gap-4 border-y border-[#FB87AC]/15 py-5">
                <span className="text-3xl font-black text-[#FB87AC] sm:text-4xl">
                  ₹{product.price}
                </span>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                  Free Express Shipping Included
                </span>
              </div>

              {/* Guarantees */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 rounded-2xl border border-[#FB87AC]/20 bg-[#221124]/60 p-3 text-xs text-slate-300">
                  <IconTruck size={18} className="text-[#FB87AC]" />
                  <span>2-4 Days Delivery</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-2xl border border-[#FB87AC]/20 bg-[#221124]/60 p-3 text-xs text-slate-300">
                  <IconShieldCheck size={18} className="text-[#FB87AC]" />
                  <span>100% Authentic</span>
                </div>
              </div>

              {/* Add to Cart CTA */}
              <button
                onClick={handleAddToCart}
                className="mt-8 flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#FB87AC] to-[#E86591] py-4 text-base font-extrabold text-slate-950 shadow-pink-glow transition-all duration-300 hover:scale-[1.02] hover:shadow-pink-glow"
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

