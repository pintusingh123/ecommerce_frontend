import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CardContext";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  // back to home navigate btn
  const navigate = useNavigate();
  const BASEURL =
    import.meta.env.VITE_DJANGO_BASE_URL || "http://127.0.0.1:8000";

  useEffect(() => {
    fetch(`${BASEURL}/api/products/${id}/`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("failed to fetch product details");
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

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f1f3f6] px-4">
        <div className="rounded-2xl bg-white px-8 py-6 text-center shadow-lg">
          <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-4 border-[#2874f0] border-t-transparent"></div>
          <p className="text-lg font-semibold text-gray-700">
            Loading product details...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f1f3f6] px-4">
        <div className="rounded-2xl bg-white px-8 py-6 text-center shadow-lg">
          <h2 className="text-xl font-bold text-red-500">
            Unable to load product
          </h2>
          <p className="mt-2 text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f1f3f6] px-4">
        <div className="rounded-2xl bg-white px-8 py-6 text-center shadow-lg">
          <h2 className="text-xl font-bold text-gray-800">
            No Product Found...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f1f3f6] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[24px] bg-white p-6 shadow-xl sm:p-8">
        <button
          onClick={() => navigate("/")}
          className="mb-6 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-[#2874f0] transition hover:bg-blue-50"
        >
          ← Back to Home
        </button>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 p-4">
            <img
              src={product.image}
              alt={product.name}
              className="h-[420px] w-full rounded-2xl object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 inline-flex w-fit rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-700">
              Best Seller
            </p>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-4 text-lg leading-7 text-gray-600">
              {product.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="text-3xl font-bold text-[#2874f0]">
                ${product.price}
              </span>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
                Free delivery
              </span>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="mt-8 rounded-xl bg-[#fb641b] px-6 py-3 font-semibold text-white shadow-md transition hover:bg-[#e65d10]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
