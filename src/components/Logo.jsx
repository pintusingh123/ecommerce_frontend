import React from "react";
import { Link } from "react-router-dom";

export function LogoIcon({ className = "h-9 w-9" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-transform duration-300 group-hover:scale-105`}
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9a8100" />
          <stop offset="50%" stopColor="#ffd700" />
          <stop offset="100%" stopColor="#705d00" />
        </linearGradient>
        <linearGradient id="goldRing" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#705d00" />
          <stop offset="50%" stopColor="#ffe16d" />
          <stop offset="100%" stopColor="#544600" />
        </linearGradient>
      </defs>
      
      {/* Outer Diamond Crest Ring */}
      <polygon
        points="50,5 95,50 50,95 5,50"
        fill="#1a1c1c"
        stroke="url(#goldRing)"
        strokeWidth="4"
        rx="8"
      />
      <polygon
        points="50,12 88,50 50,88 12,50"
        fill="none"
        stroke="url(#goldGrad)"
        strokeWidth="1.5"
        strokeDasharray="4 2"
      />

      {/* Monogram Interlocked "J" & "C" */}
      {/* J Letter */}
      <path
        d="M 42,30 L 54,30 L 54,62 C 54,70 46,74 38,72 C 34,71 31,67 31,63"
        fill="none"
        stroke="url(#goldGrad)"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* C Letter */}
      <path
        d="M 68,36 C 63,30 52,30 46,38 C 40,46 40,56 46,63 C 52,70 63,70 68,64"
        fill="none"
        stroke="url(#goldRing)"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Crown / Diamond Sparkle Top Accent */}
      <polygon points="50,18 54,26 50,30 46,26" fill="url(#goldGrad)" />
    </svg>
  );
}

export default function Logo({ variant = "default", dark = false }) {
  const isDark = dark;

  return (
    <Link
      to="/"
      className="group flex items-center gap-3.5 transition opacity-100 hover:opacity-95"
    >
      {/* Monogram Crest Icon */}
      <LogoIcon className="h-10 w-10 shrink-0 drop-shadow-sm" />

      {/* Luxury Typography */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-display text-xl sm:text-2xl font-black tracking-[0.12em] uppercase ${
            isDark ? "text-white" : "text-[#1a1c1c]"
          }`}
        >
          JHALA
        </span>
        <span
          className={`font-body text-[9px] sm:text-[10px] font-bold tracking-[0.32em] uppercase mt-0.5 ${
            isDark ? "text-[#ffd700]" : "text-[#705d00]"
          }`}
        >
          COLLECTION
        </span>
      </div>
    </Link>
  );
}
