import {
  IconArrowRight,
  IconShieldCheck,
  IconTruckDelivery,
  IconStarFilled,
  IconSparkles,
} from "@tabler/icons-react";

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-[#FB87AC]/25 bg-gradient-to-br from-[#241121] via-[#120814] to-[#0B060C] px-6 py-12 text-white shadow-2xl lg:px-14 lg:py-16">
      {/* Background Pink Ambient Glows */}
      <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#FB87AC]/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-[#F472B6]/15 blur-[120px] pointer-events-none"></div>

      <div className="relative grid items-center gap-12 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FB87AC]/40 bg-[#FB87AC]/10 px-4 py-2 text-xs sm:text-sm font-bold tracking-wider text-[#FB87AC] backdrop-blur-md shadow-pink-glow-sm">
            <IconSparkles size={16} /> WELCOME TO JHALACOLLECTION
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.15] md:text-5xl lg:text-6xl tracking-tight">
            Elevate Your Style &
            <span className="block bg-gradient-to-r from-[#FB87AC] via-[#F472B6] to-white bg-clip-text text-transparent mt-1">
              Luxury Living
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-300 font-normal">
            Discover handpicked premium fashion, home decor, electronics, kitchen essentials,
            and luxury lifestyle products crafted to make every day extraordinary.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#FB87AC] to-[#E86591] px-8 py-3.5 font-bold text-slate-950 shadow-pink-glow transition-all duration-300 hover:scale-105 hover:shadow-pink-glow"
            >
              Shop Collection
              <IconArrowRight size={20} />
            </a>

            <button
              onClick={() => {
                const el = document.getElementById("search-section");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-2xl border border-[#FB87AC]/30 bg-[#FB87AC]/10 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition duration-300 hover:border-[#FB87AC] hover:bg-[#FB87AC]/20"
            >
              Explore Categories
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="rounded-2xl border border-[#FB87AC]/20 bg-white/5 p-4 backdrop-blur-md transition hover:border-[#FB87AC]/40">
              <h2 className="text-2xl font-black text-[#FB87AC]">500+</h2>
              <p className="text-xs text-slate-400 font-medium">Curated Items</p>
            </div>

            <div className="rounded-2xl border border-[#FB87AC]/20 bg-white/5 p-4 backdrop-blur-md transition hover:border-[#FB87AC]/40">
              <h2 className="text-2xl font-black text-[#FB87AC]">100%</h2>
              <p className="text-xs text-slate-400 font-medium">Authentic</p>
            </div>

            <div className="rounded-2xl border border-[#FB87AC]/20 bg-white/5 p-4 backdrop-blur-md transition hover:border-[#FB87AC]/40">
              <h2 className="text-2xl font-black text-[#FB87AC]">24/7</h2>
              <p className="text-xs text-slate-400 font-medium">VIP Support</p>
            </div>
          </div>
        </div>

        {/* RIGHT HERO IMAGE */}
        <div className="relative">
          <div className="overflow-hidden rounded-[32px] border border-[#FB87AC]/30 bg-[#160A18] p-3 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&auto=format&fit=crop&q=80"
              alt="Luxury Lifestyle"
              className="h-[460px] w-full rounded-[24px] object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Floating Glass Cards */}
          <div className="absolute -left-4 top-8 rounded-2xl border border-[#FB87AC]/30 bg-[#180C1A]/90 p-3.5 backdrop-blur-xl shadow-pink-glow-sm sm:-left-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#FB87AC]/20 p-2 text-[#FB87AC]">
                <IconTruckDelivery size={22} />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Express Delivery</p>
                <span className="text-[11px] font-medium text-slate-400">2-4 Business Days</span>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 bottom-6 rounded-2xl border border-[#FB87AC]/30 bg-[#180C1A]/90 p-3.5 backdrop-blur-xl shadow-pink-glow-sm sm:-right-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#FB87AC]/20 p-2 text-[#FB87AC]">
                <IconShieldCheck size={22} />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Verified Quality</p>
                <span className="text-[11px] font-medium text-slate-400">100% Guaranteed</span>
              </div>
            </div>
          </div>

          <div className="absolute left-8 bottom-16 flex items-center gap-2 rounded-full border border-[#FB87AC]/40 bg-[#180C1A]/90 px-4 py-2 backdrop-blur-xl shadow-pink-glow-sm">
            <IconStarFilled size={16} className="text-[#FB87AC]" />
            <span className="text-xs font-bold text-white">4.9 ★ Top Rated Store</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;