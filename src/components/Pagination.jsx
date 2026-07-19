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
    <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
      {/* Previous */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-all hover:border-blue-500 hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <IconChevronLeft size={18} />
        Previous
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-semibold transition-all ${
            currentPage === page
              ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
              : "border border-zinc-700 bg-zinc-900 text-zinc-300 hover:border-blue-500 hover:bg-zinc-800"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-all hover:border-blue-500 hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
        <IconChevronRight size={18} />
      </button>
    </div>
  );
}

export default Pagination;