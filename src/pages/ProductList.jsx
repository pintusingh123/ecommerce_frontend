import React from "react";
import { useEffect, useState } from "react";
import ProductCards from "../components/ProductCards";
function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL =
    import.meta.env.VITE_DJANGO_BASE_URL || "http://127.0.0.1:8000";

  useEffect(() => {
    fetch(`${BASE_URL}/api/products/`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [BASE_URL]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f1f3f6]">
        <div className="rounded-2xl px-8 py-6 text-center shadow-lg">
          <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-4 border-[#2874f0] border-t-transparent"></div>
          <p className="text-lg font-semibold text-gray-700">
            Loading amazing products...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f1f3f6] px-4">
        <div className="rounded-2xl bg-white px-8 py-6 text-center shadow-lg">
          <h2 className="text-xl font-bold text-red-500">Oops!</h2>
          <p className="mt-2 text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f1f3f6] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 rounded-3xl bg-gradient-to-r from-[#2874f0] to-[#1f5ed9] px-6 py-8 text-white shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
            Fresh arrivals
          </p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Shop the best picks for your home
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-blue-100 sm:text-base">
            Discover stylish essentials with a smooth and modern shopping
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCards key={product.id} product={product} />
            ))
          ) : (
            <p className="col-span-full rounded-2xl bg-white p-8 text-center text-gray-500 shadow-sm">
              No Products Available..
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
