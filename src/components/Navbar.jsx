import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CardContext";

function Navbar() {
  const cartContext = useCart();
  const cartItems = cartContext?.cartItems ?? [];
  const cartCount = cartItems.reduce(
    (total, item) => total + (item.quantity || 0),
    0,
  );

  return (
    <nav className="sticky top-0 z-20 border-b border-gray-200 bg-[#2874f0] shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-white"
        >
          <span className="rounded bg-white px-2 py-1 text-[#2874f0]">J</span>
          <span>JhalaCollection</span>
        </Link>

        <div className="hidden flex-1 px-4 md:block">
          <div className="flex items-center rounded bg-white px-3 py-2 shadow-sm">
            <span className="text-gray-400">🔍</span>
            <input
              type="text"
              placeholder="Search for products"
              className="ml-2 w-full bg-transparent text-sm outline-none"
            />
          </div>
        </div>

        <Link
          to="/cart"
          className="relative flex items-center gap-2 rounded bg-white px-4 py-2 font-semibold text-[#2874f0] transition hover:bg-gray-100"
        >
          <span>🛒</span>
          Cart
          {cartCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
