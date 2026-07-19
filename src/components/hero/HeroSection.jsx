import {
  IconArrowRight,
  IconShieldCheck,
  IconTruckDelivery,
  IconStarFilled,
} from "@tabler/icons-react";

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-zinc-800 bg-gradient-to-br from-[#84a5e6] via-[#101827] to-[#000000] px-8 py-14 text-white shadow-2xl lg:px-14">
      {/* Background Glow */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl"></div>

      <div className="relative grid items-center gap-12 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            WELCOME TO JHALACOLLECTION
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            Upgrade Your
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Dream Home
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
            Discover premium furniture, kitchen essentials,
            electronics, lighting and home decor carefully selected
            to make your home beautiful and comfortable.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-500">
              Support
              <IconArrowRight size={18} />
            </button>

            <button className="rounded-xl border border-zinc-700 px-7 py-3 font-semibold transition hover:border-blue-500 hover:bg-zinc-900">
              Explore Categories
            </button>
          </div>

          {/* Stats */}

          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="rounded-2xl border border-zinc-800 bg-white/5 p-4 backdrop-blur">
              <h2 className="text-2xl font-bold">30+</h2>
              <p className="text-sm text-zinc-400">
                Products
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-white/5 p-4 backdrop-blur">
              <h2 className="text-2xl font-bold">100%</h2>
              <p className="text-sm text-zinc-400">
                Secure
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-white/5 p-4 backdrop-blur">
              <h2 className="text-2xl font-bold">24/7</h2>
              <p className="text-sm text-zinc-400">
                Support
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="relative">
          <div className="overflow-hidden rounded-[28px] border border-zinc-700 bg-zinc-900 p-3 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900"
              alt="Hero"
              className="h-[500px] w-full rounded-3xl object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* Floating Card */}

          <div className="absolute -left-6 top-10 rounded-2xl border border-zinc-700 bg-[#111827]/90 p-4 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <IconTruckDelivery className="text-blue-400" />
              <div>
                <p className="text-sm font-semibold">
                  Fast Delivery
                </p>
                <span className="text-xs text-zinc-400">
                  2-4 Business Days
                </span>
              </div>
            </div>
          </div>

          <div className="absolute -right-5 bottom-8 rounded-2xl border border-zinc-700 bg-[#111827]/90 p-4 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <IconShieldCheck className="text-yellow-400" />
              <div>
                <p className="text-sm font-semibold">
                  Full Featured
                </p>
                <span className="text-xs text-zinc-400">
                  100% Trusted
                </span>
              </div>
            </div>
          </div>

          <div className="absolute left-12 bottom-20 flex items-center gap-2 rounded-full border border-zinc-700 bg-[#111827]/90 px-4 py-2 backdrop-blur-xl">
            <IconStarFilled
              size={18}
              className="text-yellow-400"
            />
            <span className="text-sm font-medium">
              4.9 Customer Rating
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;