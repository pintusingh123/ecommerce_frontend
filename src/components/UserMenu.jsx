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
        className="flex items-center justify-center rounded-xl border border-[#FB87AC]/30 bg-[#FB87AC]/10 p-2.5 text-[#FB87AC] transition duration-200 hover:border-[#FB87AC] hover:bg-[#FB87AC]/20 shadow-pink-glow-sm"
      >
        <IconMenu2 size={22} />
      </button>

      {openMenu && (
        <div className="absolute right-0 mt-3 w-60 overflow-hidden rounded-2xl border border-[#FB87AC]/30 bg-[#160E18]/95 py-2 shadow-2xl backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200">
          
          {/* Profile */}
          {isAuthenticated && (
            <Link
              to="/profile"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-[#FB87AC]/20 hover:text-[#FB87AC]"
            >
              <IconUser size={19} className="text-[#FB87AC]" />
              My Profile
            </Link>
          )}

          {/* Login */}
          {!isAuthenticated && (
            <Link
              to="/token"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-[#FB87AC]/20 hover:text-[#FB87AC]"
            >
              <IconLogin2 size={19} className="text-[#FB87AC]" />
              Login
            </Link>
          )}

          {/* Register */}
          {!isAuthenticated && (
            <Link
              to="/register"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-[#FB87AC]/20 hover:text-[#FB87AC]"
            >
              <IconUserPlus size={19} className="text-[#FB87AC]" />
              Register Account
            </Link>
          )}

          {/* Cart */}
          <Link
            to="/cart"
            onClick={closeMenu}
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-[#FB87AC]/20 hover:text-[#FB87AC]"
          >
            <IconShoppingCart size={19} className="text-[#FB87AC]" />
            Shopping Cart
          </Link>

          {/* Logout */}
          {isAuthenticated && (
            <>
              <div className="my-1.5 h-px bg-[#FB87AC]/20" />
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-medium text-rose-400 transition hover:bg-rose-500/10 hover:text-rose-300"
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