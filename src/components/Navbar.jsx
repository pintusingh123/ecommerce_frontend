import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CardContext";
import UserMenu from "./UserMenu";
import { IconShoppingCart, IconSparkles } from "@tabler/icons-react";

function Navbar() {
  const cartContext = useCart();

  const cartItems = cartContext?.cartItems ?? [];
  const cartCount = cartItems.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  return (
    <nav className="sticky top-0 z-50 border-b border-[#FB87AC]/20 bg-[#120914]/85 backdrop-blur-xl shadow-lg shadow-black/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 text-xl sm:text-2xl font-extrabold tracking-tight text-white transition hover:opacity-95"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#FB87AC] to-[#F472B6] text-white shadow-pink-glow-sm transition-transform duration-300 group-hover:scale-105">
            <IconSparkles size={22} className="text-white animate-pulse" />
          </span>
          <span className="tracking-wide">
            Jhala<span className="text-[#FB87AC]">Collection</span>
          </span>
        </Link>

        {/* Action Items */}
        <div className="flex items-center gap-4">
          <Link
            to="/cart"
            className="relative flex items-center justify-center rounded-xl border border-[#FB87AC]/30 bg-[#FB87AC]/10 p-2.5 text-white transition duration-200 hover:border-[#FB87AC] hover:bg-[#FB87AC]/20"
            title="Shopping Cart"
          >
            <IconShoppingCart size={22} className="text-[#FB87AC]" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5.5 min-w-[22px] items-center justify-center rounded-full bg-[#FB87AC] px-1.5 text-xs font-bold text-slate-950 shadow-pink-glow">
                {cartCount}
              </span>
            )}
          </Link>

          {/* User Menu */}
          <UserMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

