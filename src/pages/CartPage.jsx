import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CardContext";
import { IconArrowLeft, IconTrash, IconShoppingCart, IconArrowRight } from "@tabler/icons-react";

export default function CartPage() {
  const navigate = useNavigate();
  const { cartItems, total, removeFromCart, updateQuantity } = useCart();
  const BASEURL =
    import.meta.env.VITE_DJANGO_BASE_URL || "http://127.0.0.1:8000";

  return (
    <div className="min-h-screen bg-[#0B060C] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-2 rounded-full border border-[#FB87AC]/30 bg-[#160B18]/80 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#FB87AC] backdrop-blur-md transition hover:border-[#FB87AC] hover:bg-[#FB87AC]/20 shadow-pink-glow-sm"
        >
          <IconArrowLeft size={18} />
          Continue Shopping
        </button>

        {/* Main Cart Card */}
        <div className="rounded-[36px] border border-[#FB87AC]/25 bg-[#160B18]/85 p-6 backdrop-blur-2xl shadow-2xl lg:p-10">
          <div className="flex items-center gap-3 border-b border-[#FB87AC]/15 pb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FB87AC]/15 text-[#FB87AC] shadow-pink-glow-sm">
              <IconShoppingCart size={24} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Your Shopping Cart</h1>
              <p className="text-xs sm:text-sm text-slate-400 font-normal">
                Review your items and proceed to checkout.
              </p>
            </div>
          </div>

          {cartItems.length === 0 ? (
            <div className="mt-10 rounded-3xl border border-dashed border-[#FB87AC]/30 bg-[#221124]/40 p-12 text-center">
              <p className="text-xl font-bold text-white">Your cart is currently empty</p>
              <p className="mt-2 text-sm text-slate-400 font-medium">Explore our collection to add luxury items.</p>
              <button
                onClick={() => navigate("/")}
                className="mt-6 rounded-2xl bg-gradient-to-r from-[#FB87AC] to-[#E86591] px-8 py-3 text-sm font-bold text-slate-950 shadow-pink-glow transition hover:scale-105"
              >
                Browse Products
              </button>
            </div>
          ) : (
            <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr]">
              {/* Item List */}
              <div className="space-y-4">
                {cartItems.map((item) => {
                  const imgUrl = item.image
                    ? item.image
                    : item.product_image
                    ? `${BASEURL}${item.product_image}`
                    : "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300";

                  return (
                    <div
                      key={item.id}
                      className="flex flex-col gap-4 rounded-3xl border border-[#FB87AC]/20 bg-[#221124]/70 p-4 backdrop-blur-md transition hover:border-[#FB87AC]/40 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={imgUrl}
                          alt={item.product_name || item.name}
                          className="h-20 w-20 rounded-2xl border border-[#FB87AC]/20 object-cover bg-[#160B18]"
                        />
                        <div>
                          <h2 className="text-base font-bold text-white">
                            {item.product_name || item.name}
                          </h2>
                          <p className="mt-1 text-base font-extrabold text-[#FB87AC]">
                            ₹{item.product_price || item.price}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 justify-between sm:justify-end">
                        {/* Quantity Stepper */}
                        <div className="flex items-center overflow-hidden rounded-full border border-[#FB87AC]/30 bg-[#160B18]">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1.5 text-base font-bold text-white transition hover:bg-[#FB87AC]/20 hover:text-[#FB87AC]"
                          >
                            −
                          </button>
                          <span className="min-w-10 text-center text-sm font-extrabold text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1.5 text-base font-bold text-white transition hover:bg-[#FB87AC]/20 hover:text-[#FB87AC]"
                          >
                            +
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400 transition hover:bg-rose-500 hover:text-white"
                          title="Remove item"
                        >
                          <IconTrash size={18} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Price Details Panel */}
              <div className="flex flex-col justify-between rounded-3xl border border-[#FB87AC]/25 bg-[#221124]/90 p-6 backdrop-blur-xl shadow-xl">
                <div>
                  <h2 className="text-lg font-bold text-white border-b border-[#FB87AC]/20 pb-3">Order Summary</h2>
                  
                  <div className="mt-4 space-y-3 text-sm text-slate-300 font-medium">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-bold text-white">₹{total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Shipping</span>
                      <span className="font-bold text-emerald-400">FREE</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes & Duties</span>
                      <span className="text-slate-400">Included</span>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#FB87AC]/20 pt-4 text-xl font-black text-white">
                    <span>Total</span>
                    <span className="text-[#FB87AC]">₹{total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/checkout')}
                  className="mt-8 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#FB87AC] to-[#E86591] py-4 text-base font-extrabold text-slate-950 shadow-pink-glow transition hover:scale-[1.02]"
                >
                  Proceed to Checkout
                  <IconArrowRight size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

