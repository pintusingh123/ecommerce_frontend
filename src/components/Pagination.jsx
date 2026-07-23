import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  if (totalPages <= 1) return null;

  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
      {/* Previous */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="flex items-center gap-2 rounded-2xl border border-[#FB87AC]/30 bg-[#160B18]/90 px-4 py-2.5 text-xs sm:text-sm font-bold text-white backdrop-blur-md transition-all hover:border-[#FB87AC] hover:bg-[#FB87AC]/20 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <IconChevronLeft size={18} className="text-[#FB87AC]" />
        Previous
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`flex h-10 w-10 items-center justify-center rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            currentPage === page
              ? "bg-gradient-to-r from-[#FB87AC] to-[#E86591] text-slate-950 shadow-pink-glow scale-105"
              : "border border-[#FB87AC]/30 bg-[#160B18]/90 text-slate-300 hover:border-[#FB87AC] hover:bg-[#FB87AC]/20"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 rounded-2xl border border-[#FB87AC]/30 bg-[#160B18]/90 px-4 py-2.5 text-xs sm:text-sm font-bold text-white backdrop-blur-md transition-all hover:border-[#FB87AC] hover:bg-[#FB87AC]/20 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
        <IconChevronRight size={18} className="text-[#FB87AC]" />
      </button>
    </div>
  );
}

export default Pagination;