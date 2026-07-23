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
        className="flex items-center gap-2 rounded-2xl border border-[#d0c6ab] bg-white px-4 py-2.5 text-xs sm:text-sm font-bold text-[#1a1c1c] transition-all hover:border-[#705d00] hover:bg-[#f3f3f4] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <IconChevronLeft size={18} className="text-[#705d00]" />
        Previous
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`flex h-10 w-10 items-center justify-center rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            currentPage === page
              ? "bg-[#705d00] text-white shadow-sm scale-105"
              : "border border-[#e2e2e2] bg-white text-[#1a1c1c] hover:border-[#705d00] hover:bg-[#f3f3f4]"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 rounded-2xl border border-[#d0c6ab] bg-white px-4 py-2.5 text-xs sm:text-sm font-bold text-[#1a1c1c] transition-all hover:border-[#705d00] hover:bg-[#f3f3f4] disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
        <IconChevronRight size={18} className="text-[#705d00]" />
      </button>
    </div>
  );
}

export default Pagination;
