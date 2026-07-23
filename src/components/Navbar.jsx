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
    <nav className="sticky top-0 z-50 border-b border-[#e2e2e2] bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3 text-xl sm:text-2xl font-extrabold tracking-tight text-[#1a1c1c] transition hover:opacity-90"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#705d00] text-white shadow-gold-subtle transition-transform duration-300 group-hover:scale-105">
            <IconSparkles size={20} className="text-[#ffd700]" />
          </span>
          <span className="font-display font-black tracking-tight text-[#1a1c1c]">
            Jhala<span className="text-[#705d00]">Collection</span>
          </span>
        </Link>

        {/* Action Items */}
        <div className="flex items-center gap-4">
          <Link
            to="/cart"
            className="relative flex items-center justify-center rounded-xl border border-[#d0c6ab] bg-[#f9f9f9] p-2.5 text-[#1a1c1c] transition duration-200 hover:border-[#705d00] hover:bg-[#f3f3f4]"
            title="Shopping Cart"
          >
            <IconShoppingCart size={22} className="text-[#705d00]" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#705d00] px-1.5 text-xs font-bold text-white shadow-sm">
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


