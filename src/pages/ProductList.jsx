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
    <div className="min-h-screen bg-[#080a0d] px-4 pt-6 sm:px-6 lg:px-4">
      <div className="mx-auto max-w-7xl">
 

        {/* searching and categories */}
        <Category_search
          categories={categories}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

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

        {/* pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    
    </div>
  );
}

export default ProductList;
