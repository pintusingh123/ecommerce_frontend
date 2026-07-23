import React from "react";
import { useEffect, useState } from "react";
import ProductCards from "../components/ProductCards";

import Category_search from "../components/Category_search";
import Pagination from "../components/Pagination";
import { IconSparkles } from "@tabler/icons-react";

import useDebounce from "../hooks/useDebounce";
 

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const BASE_URL =
    import.meta.env.VITE_DJANGO_BASE_URL || "http://127.0.0.1:8000";

  useEffect(() => {
    // setLoading(true);
    let url = `${BASE_URL}/api/products/?page=${currentPage}`;

    if (debouncedSearch) {
      url += `&search=${debouncedSearch}`;
    }

    if (selectedCategory) {
      url += `&category=${selectedCategory}`;
    }
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.results);
        setTotalPages(Math.ceil(data.count / 6));
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [BASE_URL, debouncedSearch, selectedCategory, currentPage]);

  // category fetching
  useEffect(() => {
    fetch(`${BASE_URL}/api/categories/`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch categories");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Categories:", data); // Debug
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, [BASE_URL]);

  if (loading) {
    return (
      <div className="flex min-h-[450px] flex-col items-center justify-center bg-transparent py-16">
        <div className="relative flex flex-col items-center rounded-3xl border border-[#e2e2e2] bg-white px-12 py-10 text-center shadow-md">
          {/* Animated Dual-Ring Luxury Gold Spinner */}
          <div className="relative mb-6 h-16 w-16">
            <div className="absolute inset-0 rounded-full border-4 border-[#ffd700]/30"></div>
            <div className="absolute inset-0 animate-spin rounded-full border-4 border-[#705d00] border-t-transparent"></div>
            <div className="absolute inset-2 flex items-center justify-center rounded-full bg-[#ffd700]/10 text-[#705d00]">
              <IconSparkles size={22} className="animate-pulse text-[#705d00]" />
            </div>
          </div>

          <h3 className="font-display text-lg font-extrabold text-[#1a1c1c] tracking-tight">
            Curating Luxury Catalog...
          </h3>
          <p className="mt-1.5 font-body text-xs text-[#5f5e5e] font-normal">
            Fetching handcrafted products for you
          </p>

          {/* Dotted Animated Pulse Bar */}
          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="h-2 w-2 animate-bounce rounded-full bg-[#705d00]"></span>
            <span className="h-2 w-2 animate-bounce rounded-full bg-[#705d00] [animation-delay:0.2s]"></span>
            <span className="h-2 w-2 animate-bounce rounded-full bg-[#705d00] [animation-delay:0.4s]"></span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[400px] items-center justify-center bg-transparent px-4 py-16">
        <div className="rounded-3xl border border-rose-200 bg-white px-10 py-8 text-center shadow-md">
          <h2 className="font-display text-2xl font-bold text-rose-600">Unable to load products</h2>
          <p className="mt-2 font-body text-sm text-[#5f5e5e] font-medium">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-6">
      {/* Search and Category Filter */}
      <Category_search
        categories={categories}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products && products.length > 0 ? (
          products.map((product) => (
            <ProductCards key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full rounded-3xl border border-[#e2e2e2] bg-white p-12 text-center shadow-sm">
            <p className="font-display text-lg font-bold text-[#1a1c1c]">No Items Found</p>
            <p className="mt-2 font-body text-sm text-[#5f5e5e] font-normal">Try searching for a different keyword or resetting your category filter.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default ProductList;


