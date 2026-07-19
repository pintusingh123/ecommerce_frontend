import { IconSearch } from "@tabler/icons-react";
import { useEffect } from "react";

const BASE_URL =
  import.meta.env.VITE_DJANGO_BASE_URL || "http://127.0.0.1:8000";

const categories = [
  "All",
  "Home Decor",
  "Kitchen",
  "Electronics",
  "Cleaning",
  "Furniture",
  "Bathroom",
  "Lighting",
  "Storage",
  "Wooden",
  "HouseHold",
];

function Category_search({
  categories,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
}) {
  useEffect(() => {
    fetch(`${BASE_URL}/api/categories/`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, [BASE_URL]);
  return (
    <>
      {/* Search & Categories */}
      <div className="mb-8 rounded-3xl border border-zinc-800 bg-[#111827] p-6 shadow-xl">
        {/* Search */}
        <div className="relative">
          <IconSearch
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for products..."
            className="w-full rounded-2xl border border-zinc-700 bg-[#1b2431] py-3 pl-12 pr-4 text-white placeholder:text-zinc-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        {/* Categories */}
        <div className="mt-6 flex flex-wrap gap-3">
          {/* All Button */}

          <button
            onClick={() => setSelectedCategory("")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              selectedCategory === ""
                ? "bg-blue-600 text-white"
                : "border border-zinc-700 bg-[#1b2431] text-zinc-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
            }`}
          >
            All
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.slug)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                selectedCategory === category.slug
                  ? "bg-blue-600 text-white"
                  : "border border-zinc-700 bg-[#1b2431] text-zinc-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Category_search;
