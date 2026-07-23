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
  IconArrowRight,
  IconShieldCheck,
  IconTruckDelivery,
  IconHeadset,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="w-full mt-24 border-t-2 border-[#705d00]/30 bg-[#121417] text-white shadow-2xl">
      {/* Top Newsletter Bar */}
      <div className="border-b border-white/10 bg-[#1a1d21]/80 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ffd700]">
              <IconSparkles size={16} /> VIP Insider Access
            </span>
            <h3 className="font-display text-2xl font-extrabold text-white tracking-tight sm:text-3xl mt-1">
              Join The JhalaCollection Club
            </h3>
            <p className="font-body text-xs sm:text-sm text-slate-300 font-normal mt-1">
              Subscribe for exclusive previews, new arrivals, and special member-only offers.
            </p>
          </div>

          <div className="flex w-full max-w-md items-center justify-end gap-2">
            <Link
              to="/contact"
              id="contactus"
              className="flex shrink-0 items-center gap-2 rounded-2xl bg-[#705d00] px-6 py-3.5 text-sm font-extrabold text-white shadow-md transition hover:bg-[#544600] hover:scale-105"
            >
              Contact Us
              <IconArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand Column */}
        <div className="space-y-4">
          <Link
            to="/"
            className="flex items-center gap-3 text-2xl font-extrabold tracking-tight text-white"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#705d00] text-white shadow-sm">
              <IconSparkles size={22} className="text-[#ffd700]" />
            </span>
            <span className="font-display font-black text-2xl">
              Jhala<span className="text-[#ffd700]">Collection</span>
            </span>
          </Link>

          <p className="font-body text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">
            Handcrafted luxury home decor, premium apparel, lifestyle essentials, and curated fashion pieces designed for sophisticated living.
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-1.5 text-[#ffd700]">
              <IconShieldCheck size={16} /> 100% Authentic
            </div>
            <div className="flex items-center gap-1.5 text-[#ffd700]">
              <IconTruckDelivery size={16} /> Fast Shipping
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-base font-bold text-white tracking-wide border-b border-[#705d00]/40 pb-2.5 inline-block">
            Quick Navigation
          </h4>

          <ul className="mt-4 space-y-2.5 font-body text-xs sm:text-sm font-medium text-slate-300">
            <li>
              <Link to="/" className="flex items-center gap-1.5 transition hover:text-[#ffd700] hover:translate-x-1 duration-200">
                <span>›</span> Home Showcase
              </Link>
            </li>
            <li>
              <Link to="/products" className="flex items-center gap-1.5 transition hover:text-[#ffd700] hover:translate-x-1 duration-200">
                <span>›</span> Shop All Catalog
              </Link>
            </li>
            <li>
              <Link to="/cart" className="flex items-center gap-1.5 transition hover:text-[#ffd700] hover:translate-x-1 duration-200">
                <span>›</span> Shopping Cart
              </Link>
            </li>
            <li>
              <Link to="/profile" className="flex items-center gap-1.5 transition hover:text-[#ffd700] hover:translate-x-1 duration-200">
                <span>›</span> Member Account
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center gap-1.5 transition hover:text-[#ffd700] hover:translate-x-1 duration-200">
                <span>›</span> Contact Concierge
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="font-display text-base font-bold text-white tracking-wide border-b border-[#705d00]/40 pb-2.5 inline-block">
            Customer Support
          </h4>

          <ul className="mt-4 space-y-2.5 font-body text-xs sm:text-sm font-medium text-slate-300">
            <li>
              <a href="#search-section" className="flex items-center gap-1.5 transition hover:text-[#ffd700] hover:translate-x-1 duration-200">
                <span>›</span> Order Tracking
              </a>
            </li>
            <li>
              <a href="#search-section" className="flex items-center gap-1.5 transition hover:text-[#ffd700] hover:translate-x-1 duration-200">
                <span>›</span> Shipping & Delivery Policy
              </a>
            </li>
            <li>
              <a href="#search-section" className="flex items-center gap-1.5 transition hover:text-[#ffd700] hover:translate-x-1 duration-200">
                <span>›</span> Easy Returns & Refund
              </a>
            </li>
            <li>
              <a href="#search-section" className="flex items-center gap-1.5 transition hover:text-[#ffd700] hover:translate-x-1 duration-200">
                <span>›</span> Concierge Support FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info & Socials */}
        <div className="space-y-4">
          <h4 className="font-display text-base font-bold text-white tracking-wide border-b border-[#705d00]/40 pb-2.5 inline-block">
            Get In Touch
          </h4>

          <div className="space-y-3 font-body text-xs sm:text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <IconMapPin size={18} className="text-[#ffd700] shrink-0 mt-0.5" />
              <span>Jhala Towers, Johri Bazaar, Jaipur, Rajasthan 302003</span>
            </div>

            <div className="flex items-center gap-3">
              <IconMail size={18} className="text-[#ffd700] shrink-0" />
              <span>support@jhalacollection.com</span>
            </div>

            <div className="flex items-center gap-3">
              <IconPhone size={18} className="text-[#ffd700] shrink-0" />
              <span>+91 98765 43210</span>
            </div>
          </div>

          <div className="pt-2 flex gap-3">
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-200 transition duration-300 hover:border-[#ffd700] hover:bg-[#705d00] hover:text-white hover:scale-110">
              <IconBrandFacebook size={20} />
            </a>

            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-200 transition duration-300 hover:border-[#ffd700] hover:bg-[#705d00] hover:text-white hover:scale-110">
              <IconBrandInstagram size={20} />
            </a>

            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-200 transition duration-300 hover:border-[#ffd700] hover:bg-[#705d00] hover:text-white hover:scale-110">
              <IconBrandX size={20} />
            </a>

            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-200 transition duration-300 hover:border-[#ffd700] hover:bg-[#705d00] hover:text-white hover:scale-110">
              <IconBrandLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#0c0d0f] py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="font-body text-xs text-slate-400 font-medium text-center sm:text-left">
            © {new Date().getFullYear()} <span className="text-[#ffd700] font-bold">JhalaCollection</span>. All rights reserved. Premium Editorial Store.
          </p>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="rounded bg-white/10 px-2.5 py-1 font-mono font-semibold text-slate-300">VISA</span>
            <span className="rounded bg-white/10 px-2.5 py-1 font-mono font-semibold text-slate-300">MASTERCARD</span>
            <span className="rounded bg-white/10 px-2.5 py-1 font-mono font-semibold text-slate-300">UPI</span>
            <span className="rounded bg-[#705d00]/40 text-[#ffd700] px-2.5 py-1 font-mono font-bold">COD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
