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
        className="flex items-center justify-center rounded-xl border border-[#d0c6ab] bg-[#f9f9f9] p-2.5 text-[#705d00] transition duration-200 hover:border-[#705d00] hover:bg-[#f3f3f4]"
      >
        <IconMenu2 size={22} />
      </button>

      {openMenu && (
        <div className="absolute right-0 mt-3 w-60 overflow-hidden rounded-2xl border border-[#e2e2e2] bg-white py-2 shadow-xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-200">
          
          {/* Profile */}
          {isAuthenticated && (
            <Link
              to="/profile"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#1a1c1c] transition hover:bg-[#f3f3f4] hover:text-[#705d00]"
            >
              <IconUser size={19} className="text-[#705d00]" />
              My Profile
            </Link>
          )}

          {/* Login */}
          {!isAuthenticated && (
            <Link
              to="/token"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#1a1c1c] transition hover:bg-[#f3f3f4] hover:text-[#705d00]"
            >
              <IconLogin2 size={19} className="text-[#705d00]" />
              Sign In
            </Link>
          )}

          {/* Register */}
          {!isAuthenticated && (
            <Link
              to="/register"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#1a1c1c] transition hover:bg-[#f3f3f4] hover:text-[#705d00]"
            >
              <IconUserPlus size={19} className="text-[#705d00]" />
              Register Account
            </Link>
          )}

          {/* Cart */}
          <Link
            to="/cart"
            onClick={closeMenu}
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#1a1c1c] transition hover:bg-[#f3f3f4] hover:text-[#705d00]"
          >
            <IconShoppingCart size={19} className="text-[#705d00]" />
            Shopping Cart
          </Link>

          {/* Logout */}
          {isAuthenticated && (
            <>
              <div className="my-1.5 h-px bg-[#e2e2e2]" />
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-medium text-rose-600 transition hover:bg-rose-50"
              >
                <IconLogout2 size={19} />
                Sign Out
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default UserMenu;
