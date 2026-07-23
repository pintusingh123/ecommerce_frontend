import {
  IconArrowRight,
  IconShieldCheck,
  IconTruckDelivery,
  IconStarFilled,
  IconSparkles,
} from "@tabler/icons-react";

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-[#e2e2e2] bg-gradient-to-br from-[#ffffff] via-[#f9f9f9] to-[#f3f3f4] px-6 py-12 text-[#1a1c1c] shadow-sm lg:px-14 lg:py-16">
      {/* Background Soft Ambient Light */}
      <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#ffd700]/15 blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-[#ffe16d]/20 blur-[120px] pointer-events-none"></div>

      <div className="relative grid items-center gap-12 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d0c6ab] bg-[#f3f3f4] px-4 py-2 text-xs sm:text-sm font-bold tracking-wider text-[#705d00] shadow-sm">
            <IconSparkles size={16} className="text-[#705d00]" /> WELCOME TO JHALACOLLECTION
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.15] md:text-5xl lg:text-6xl tracking-tight text-[#1a1c1c]">
            Elevate Your Style &
            <span className="block text-[#705d00] mt-1">
              Luxury Living
            </span>
          </h1>

          <p className="mt-6 max-w-xl font-body text-base sm:text-lg leading-relaxed text-[#5f5e5e] font-normal">
            Discover handpicked premium fashion, home decor, electronics, kitchen essentials,
            and luxury lifestyle products crafted to make every day extraordinary.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="flex items-center gap-2.5 rounded-2xl bg-[#705d00] px-8 py-3.5 font-bold text-white shadow-gold-subtle transition-all duration-300 hover:bg-[#544600] hover:scale-105"
            >
              Shop Collection
              <IconArrowRight size={20} />
            </a>

            <button
              onClick={() => {
                const el = document.getElementById("search-section");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-2xl border border-[#d0c6ab] bg-white px-7 py-3.5 font-semibold text-[#1a1c1c] transition duration-300 hover:border-[#705d00] hover:bg-[#f3f3f4]"
            >
              Explore Categories
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="rounded-2xl border border-[#e2e2e2] bg-white p-4 transition hover:border-[#705d00]">
              <h2 className="font-display text-2xl font-black text-[#705d00]">500+</h2>
              <p className="font-body text-xs text-[#5f5e5e] font-medium">Curated Items</p>
            </div>

            <div className="rounded-2xl border border-[#e2e2e2] bg-white p-4 transition hover:border-[#705d00]">
              <h2 className="font-display text-2xl font-black text-[#705d00]">100%</h2>
              <p className="font-body text-xs text-[#5f5e5e] font-medium">Authentic</p>
            </div>

            <div className="rounded-2xl border border-[#e2e2e2] bg-white p-4 transition hover:border-[#705d00]">
              <h2 className="font-display text-2xl font-black text-[#705d00]">24/7</h2>
              <p className="font-body text-xs text-[#5f5e5e] font-medium">VIP Support</p>
            </div>
          </div>
        </div>

        {/* RIGHT HERO IMAGE */}
        <div className="relative">
          <div className="overflow-hidden rounded-[32px] border border-[#e2e2e2] bg-white p-3 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&auto=format&fit=crop&q=80"
              alt="Luxury Lifestyle"
              className="h-[460px] w-full rounded-[24px] object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Floating Luxury Cards */}
          <div className="absolute -left-4 top-8 rounded-2xl border border-[#e2e2e2] bg-white/95 p-3.5 shadow-lg backdrop-blur-md sm:-left-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#ffd700]/30 p-2 text-[#705d00]">
                <IconTruckDelivery size={22} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#1a1c1c]">Express Delivery</p>
                <span className="text-[11px] font-medium text-[#5f5e5e]">2-4 Business Days</span>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 bottom-6 rounded-2xl border border-[#e2e2e2] bg-white/95 p-3.5 shadow-lg backdrop-blur-md sm:-right-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#ffd700]/30 p-2 text-[#705d00]">
                <IconShieldCheck size={22} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#1a1c1c]">Verified Quality</p>
                <span className="text-[11px] font-medium text-[#5f5e5e]">100% Guaranteed</span>
              </div>
            </div>
          </div>

          <div className="absolute left-8 bottom-16 flex items-center gap-2 rounded-full border border-[#e2e2e2] bg-white/95 px-4 py-2 shadow-lg backdrop-blur-md">
            <IconStarFilled size={16} className="text-[#705d00]" />
            <span className="text-xs font-bold text-[#1a1c1c]">4.9 ★ Top Rated Store</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
