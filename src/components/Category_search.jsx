import { IconSearch } from "@tabler/icons-react";

function Category_search({
  categories = [],
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div id="search-section" className="mb-10 rounded-[32px] border border-[#FB87AC]/25 bg-[#160B18]/80 p-6 backdrop-blur-xl shadow-2xl shadow-black/40">
      {/* Search Input */}
      <div className="relative">
        <IconSearch
          size={22}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FB87AC]"
        />

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search items by name, category, or description..."
          className="w-full rounded-2xl border border-[#FB87AC]/30 bg-[#221226]/90 py-3.5 pl-12 pr-4 text-white placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-[#FB87AC] focus:ring-4 focus:ring-[#FB87AC]/20 shadow-inner"
        />
      </div>

      {/* Category Pills */}
      <div className="mt-6 flex flex-wrap gap-2.5">
        <button
          onClick={() => setSelectedCategory("")}
          className={`rounded-full px-5 py-2 text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 ${
            selectedCategory === ""
              ? "bg-gradient-to-r from-[#FB87AC] to-[#E86591] text-slate-950 shadow-pink-glow"
              : "border border-[#FB87AC]/30 bg-[#221226]/80 text-slate-200 hover:border-[#FB87AC] hover:bg-[#FB87AC]/20 hover:text-white"
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
                  ? "bg-gradient-to-r from-[#FB87AC] to-[#E86591] text-slate-950 shadow-pink-glow"
                  : "border border-[#FB87AC]/30 bg-[#221226]/80 text-slate-200 hover:border-[#FB87AC] hover:bg-[#FB87AC]/20 hover:text-white"
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

