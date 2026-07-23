import { Link } from "react-router-dom";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
  IconMapPin,
  IconPhone,
  IconSparkles,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-[#FB87AC]/20 bg-[#100712] text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        {/* Brand Column */}
        <div>
          <Link
            to="/"
            className="flex items-center gap-2.5 text-2xl font-extrabold tracking-tight text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#FB87AC] to-[#F472B6] text-white shadow-pink-glow-sm">
              <IconSparkles size={20} />
            </span>
            <span>
              Jhala<span className="text-[#FB87AC]">Collection</span>
            </span>
          </Link>

          <p className="mt-4 text-sm leading-6 text-slate-400 font-normal">
            Discover luxury home decor, fashion, and lifestyle items. Experience unmatched elegance, premium quality, and seamless customer service.
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="mb-4 text-base font-bold text-white tracking-wide">
            Quick Navigation
          </h3>

          <ul className="space-y-3 text-sm font-medium">
            <li>
              <Link to="/" className="text-slate-400 transition hover:text-[#FB87AC]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-slate-400 transition hover:text-[#FB87AC]">
                Shop Catalog
              </Link>
            </li>
            <li>
              <Link to="/cart" className="text-slate-400 transition hover:text-[#FB87AC]">
                Shopping Cart
              </Link>
            </li>
            <li>
              <Link to="/profile" className="text-slate-400 transition hover:text-[#FB87AC]">
                My Account
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="mb-4 text-base font-bold text-white tracking-wide">
            Contact & Support
          </h3>

          <div className="space-y-3.5 text-sm text-slate-400 font-normal">
            <div className="flex items-center gap-3">
              <IconMapPin size={18} className="text-[#FB87AC]" />
              <span>Jaipur, Rajasthan, India</span>
            </div>

            <div className="flex items-center gap-3">
              <IconMail size={18} className="text-[#FB87AC]" />
              <span>support@jhalacollection.com</span>
            </div>

            <div className="flex items-center gap-3">
              <IconPhone size={18} className="text-[#FB87AC]" />
              <span>+91 98765 43210</span>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FB87AC]/20 bg-[#FB87AC]/10 text-slate-300 transition duration-200 hover:border-[#FB87AC] hover:bg-[#FB87AC] hover:text-slate-950">
              <IconBrandFacebook size={20} />
            </a>

            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FB87AC]/20 bg-[#FB87AC]/10 text-slate-300 transition duration-200 hover:border-[#FB87AC] hover:bg-[#FB87AC] hover:text-slate-950">
              <IconBrandInstagram size={20} />
            </a>

            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FB87AC]/20 bg-[#FB87AC]/10 text-slate-300 transition duration-200 hover:border-[#FB87AC] hover:bg-[#FB87AC] hover:text-slate-950">
              <IconBrandX size={20} />
            </a>

            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FB87AC]/20 bg-[#FB87AC]/10 text-slate-300 transition duration-200 hover:border-[#FB87AC] hover:bg-[#FB87AC] hover:text-slate-950">
              <IconBrandLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#FB87AC]/15 py-6">
        <p className="text-center text-xs text-slate-500 font-medium">
          © {new Date().getFullYear()} JhalaCollection. All rights reserved. Crafted with care in #FB87AC Rose Pink & White.
        </p>
      </div>
    </footer>
  );
};

export default Footer;