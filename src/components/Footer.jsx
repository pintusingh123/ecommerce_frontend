import { Link } from "react-router-dom";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-zinc-800 bg-zinc-950 text-zinc-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
        {/* Brand */}
        <div>
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide text-white"
          >
            ShopEase
          </Link>

          <p className="mt-4 text-sm leading-6 text-zinc-400">
            Discover quality products at affordable prices. Shop with
            confidence and enjoy a seamless online shopping experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="transition hover:text-emerald-400">
                Home
              </Link>
            </li>

            <li>
              <Link to="/products" className="transition hover:text-emerald-400">
                Shop
              </Link>
            </li>

            <li>
              <Link to="/categories" className="transition hover:text-emerald-400">
                Categories
              </Link>
            </li>

            <li>
              <Link to="/contact" className="transition hover:text-emerald-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Contact
          </h3>

          <div className="space-y-4 text-sm text-zinc-400">
            <div className="flex items-center gap-3">
              <IconMapPin size={18} />
              <span>Jaipur, Rajasthan</span>
            </div>

            <div className="flex items-center gap-3">
              <IconMail size={18} />
              <span>support@shopease.com</span>
            </div>

            <div className="flex items-center gap-3">
              <IconPhone size={18} />
              <span>+91 98765 43210</span>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <a href="#" className="transition hover:text-emerald-400">
              <IconBrandFacebook size={22} />
            </a>

            <a href="#" className="transition hover:text-emerald-400">
              <IconBrandInstagram size={22} />
            </a>

            <a href="#" className="transition hover:text-emerald-400">
              <IconBrandX size={22} />
            </a>

            <a href="#" className="transition hover:text-emerald-400">
              <IconBrandLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-zinc-800 py-5">
        <p className="text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} ShopEase. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;