import { IconSearch } from "@tabler/icons-react";

function Category_search({
  categories = [],
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div id="search-section" className="mb-10 rounded-[32px] border border-[#e2e2e2] bg-white p-6 shadow-sm">
      {/* Search Input */}
      <div className="relative">
        <IconSearch
          size={22}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#705d00]"
        />

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search items by name, category, or description..."
          className="w-full rounded-2xl border border-[#d0c6ab] bg-[#f9f9f9] py-3.5 pl-12 pr-4 text-sm text-[#1a1c1c] placeholder:text-[#5f5e5e] outline-none transition-all duration-200 focus:border-[#705d00] focus:ring-4 focus:ring-[#705d00]/15"
        />
      </div>

      {/* Category Pills */}
      <div className="mt-6 flex flex-wrap gap-2.5">
        <button
          onClick={() => setSelectedCategory("")}
          className={`rounded-full px-5 py-2 text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 ${
            selectedCategory === ""
              ? "bg-[#705d00] text-white shadow-sm"
              : "border border-[#e2e2e2] bg-[#f3f3f4] text-[#1a1c1c] hover:border-[#705d00] hover:bg-white"
          }`}
        >
          All Items
        </button>

        {Array.isArray(categories) &&
          categories.map((category) => (
            <button
              key={category.id || category.slug}
              onClick={() => setSelectedCategory(category.slug)}
              className={`rounded-full px-5 py-2 text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 ${
                selectedCategory === category.slug
                  ? "bg-[#705d00] text-white shadow-sm"
                  : "border border-[#e2e2e2] bg-[#f3f3f4] text-[#1a1c1c] hover:border-[#705d00] hover:bg-white"
              }`}
            >
              {category.name}
            </button>
          ))}
      </div>
    </div>
  );
}

export default Category_search;


