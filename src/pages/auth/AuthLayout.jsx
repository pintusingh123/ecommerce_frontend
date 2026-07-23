import { IconShoppingBag, IconShieldCheck, IconTruck } from "@tabler/icons-react";

function AuthLayout({ children }) {
  return (
    <div className="min-h-[calc(100vh-70px)] bg-[#0B060C] px-4 py-8">
      <div className="mx-auto flex min-h-[calc(100vh-120px)] max-w-7xl items-center px-4">
        
        {/* Left Side Showcase */}
        <div className="hidden flex-1 lg:flex pr-12">
          <div className="max-w-xl">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#FB87AC] to-[#E86591] text-slate-950 shadow-pink-glow">
              <IconShoppingBag size={34} />
            </div>

            <h1 className="text-5xl font-extrabold leading-tight text-white tracking-tight">
              Welcome to <span className="bg-gradient-to-r from-[#FB87AC] to-pink-200 bg-clip-text text-transparent">JhalaCollection</span>
            </h1>

            <p className="mt-5 text-base leading-relaxed text-slate-300 font-normal">
              Experience handcrafted elegance, premium home essentials, curated lifestyle fashion, and seamless shopping all in one place.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4 rounded-2xl border border-[#FB87AC]/20 bg-[#160B18]/70 p-4 backdrop-blur-md">
                <div className="rounded-xl bg-[#FB87AC]/20 p-3 text-[#FB87AC]">
                  <IconTruck size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white">Express Nationwide Delivery</h3>
                  <p className="text-xs text-slate-400">Directly delivered to your doorstep.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-[#FB87AC]/20 bg-[#160B18]/70 p-4 backdrop-blur-md">
                <div className="rounded-xl bg-[#FB87AC]/20 p-3 text-[#FB87AC]">
                  <IconShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white">100% Encrypted Transactions</h3>
                  <p className="text-xs text-slate-400 font-normal">Bank-grade security on every purchase.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Container */}
        <div className="flex flex-1 justify-center">
          {children}
        </div>

      </div>
    </div>
  );
}

export default AuthLayout;