import { IconShoppingBag, IconShieldCheck, IconTruck } from "@tabler/icons-react";

function AuthLayout({ children }) {
  return (
    <div className="min-h-[calc(100vh-70px)] bg-[#f9f9f9] px-4 py-8">
      <div className="mx-auto flex min-h-[calc(100vh-120px)] max-w-7xl items-center px-4">
        
        {/* Left Side Showcase */}
        <div className="hidden flex-1 lg:flex pr-12">
          <div className="max-w-xl">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#705d00] text-white shadow-gold-subtle">
              <IconShoppingBag size={34} />
            </div>

            <h1 className="font-display text-5xl font-extrabold leading-tight text-[#1a1c1c] tracking-tight">
              Welcome to <span className="text-[#705d00]">JhalaCollection</span>
            </h1>

            <p className="mt-5 font-body text-base leading-relaxed text-[#5f5e5e] font-normal">
              Experience handcrafted elegance, premium home essentials, curated lifestyle fashion, and seamless shopping all in one place.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4 rounded-2xl border border-[#e2e2e2] bg-white p-4 shadow-sm">
                <div className="rounded-xl bg-[#ffd700]/30 p-3 text-[#705d00]">
                  <IconTruck size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#1a1c1c]">Express Nationwide Delivery</h3>
                  <p className="font-body text-xs text-[#5f5e5e]">Directly delivered to your doorstep.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-[#e2e2e2] bg-white p-4 shadow-sm">
                <div className="rounded-xl bg-[#ffd700]/30 p-3 text-[#705d00]">
                  <IconShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#1a1c1c]">100% Encrypted Transactions</h3>
                  <p className="font-body text-xs text-[#5f5e5e]">Bank-grade security on every purchase.</p>
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
