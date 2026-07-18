import { Link } from "react-router-dom";
import { useState } from "react";
import {
  IconMenu2,
  IconUser,
  IconLogin2,
  IconLogout2,
  IconUserPlus,
  IconShoppingCart,
} from "@tabler/icons-react";

import { useAuth } from "../context/AuthContext";

function UserMenu() {
  const [openMenu, setOpenMenu] = useState(false);

  const { isAuthenticated, logout } = useAuth();

  const closeMenu = () => setOpenMenu(false);

  const handleLogout = () => {
    logout();
    closeMenu();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpenMenu((prev) => !prev)}
        className="rounded bg-white p-2 text-[#2874f0] shadow hover:bg-gray-100"
      >
        <IconMenu2 size={22} />
      </button>

      {openMenu && (
        <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-lg border bg-white py-2 shadow-xl">

          {/* Profile */}
          {isAuthenticated && (
            <Link
              to="/profile"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
            >
              <IconUser size={18} />
              Profile
            </Link>
          )}

          {/* Login */}
          {!isAuthenticated && (
            <Link
              to="/token"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
            >
              <IconLogin2 size={18} />
              Login
            </Link>
          )}

          {/* Register */}
          {!isAuthenticated && (
            <Link
              to="/register"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
            >
              <IconUserPlus size={18} />
              Register
            </Link>
          )}

          {/* Cart */}
          <Link
            to="/cart"
            onClick={closeMenu}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
          >
            <IconShoppingCart size={20} />
            Your Cart
          </Link>

          {/* Logout */}
          {isAuthenticated && (
            <>
              <hr className="my-2" />
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-red-600 hover:bg-red-50"
              >
                <IconLogout2 size={18} />
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default UserMenu;