import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CardContext";
import UserMenu from "./UserMenu";


function Navbar() {
  const cartContext = useCart();

  const cartItems = cartContext?.cartItems ?? [];
  const cartCount = cartItems.reduce(
    (total, item) => total + (item.quantity || 0),
    0,
  );

  return (
    <nav className="sticky top-0 z-20 border-b border-gray-200 bg-[#041229] shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-white"
        >
          <span className="rounded bg-white px-2 py-1 text-[#2874f0]">J</span>
          <span>JhalaCollection</span>
        </Link>


       {/* menu icon */}
       <UserMenu />
      </div>
    </nav>
  );
}

export default Navbar;
