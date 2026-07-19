import { IconShoppingBag, IconShieldCheck, IconTruck } from "@tabler/icons-react";

function AuthLayout({ children }) {
  return (
    <div className="min-h-[calc(100vh-70px)] bg-[#080a0d]">

      <div className="mx-auto flex min-h-[calc(100vh-70px)] max-w-7xl items-center px-5 py-10">

        {/* Left */}

        <div className="hidden flex-1 lg:flex">

          <div className="max-w-xl">

            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">

              <IconShoppingBag size={34} className="text-white" />

            </div>

            <h1 className="text-5xl font-bold leading-tight text-white">

              Welcome Back.

            </h1>

            <p className="mt-5 text-lg leading-8 text-zinc-400">

              Shop premium furniture, kitchen essentials,
              electronics and home decor with a seamless shopping
              experience.

            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-blue-600/20 p-3">

                  <IconTruck className="text-blue-400" />

                </div>

                <div>

                  <h3 className="font-semibold text-white">

                    Fast Delivery

                  </h3>

                  <p className="text-sm text-zinc-500">

                    Delivered to your doorstep.

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-blue-600/20 p-3">

                  <IconShieldCheck className="text-blue-400" />

                </div>

                <div>

                  <h3 className="font-semibold text-white">

                    24/7 Available

                  </h3>

                  <p className="text-sm text-zinc-500">

                    100% encrypted checkout.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-1 justify-center">

          {children}

        </div>

      </div>

    </div>
  );
}

export default AuthLayout;