import React from "react";
import { useEffect, useState } from "react";
import ProductCards from "../components/ProductCards";
import Footer from "../components/Footer";
import Category_search from "../components/Category_search";
import Pagination from "../components/Pagination";

import useDebounce from "../hooks/useDebounce";
import HeroSection from "../components/hero/HeroSection";
import HomeFeatures from "../components/hero/HomeFeatures";

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
      <div className="flex min-h-[400px] items-center justify-center bg-transparent py-16">
        <div className="rounded-3xl border border-[#FB87AC]/30 bg-[#160B18]/90 px-10 py-8 text-center shadow-2xl backdrop-blur-xl">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-[#FB87AC] border-t-transparent shadow-pink-glow"></div>
          <p className="text-base font-bold text-white tracking-wide">
            Loading curated items...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[400px] items-center justify-center bg-transparent px-4 py-16">
        <div className="rounded-3xl border border-rose-500/30 bg-[#160B18]/90 px-10 py-8 text-center shadow-2xl backdrop-blur-xl">
          <h2 className="text-2xl font-bold text-rose-400">Unable to load products</h2>
          <p className="mt-2 text-sm text-slate-300 font-medium">{error}</p>
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
          <div className="col-span-full rounded-3xl border border-[#FB87AC]/20 bg-[#160B18]/80 p-12 text-center backdrop-blur-xl shadow-xl">
            <p className="text-lg font-bold text-white">No Items Found</p>
            <p className="mt-2 text-sm text-slate-400 font-medium">Try searching for a different keyword or resetting your category filter.</p>
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

