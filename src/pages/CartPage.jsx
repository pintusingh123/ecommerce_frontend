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
    <div className="min-h-screen bg-[#f9f9f9] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-2 rounded-full border border-[#d0c6ab] bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-[#705d00] shadow-sm transition hover:border-[#705d00] hover:bg-[#f3f3f4]"
        >
          <IconArrowLeft size={18} />
          Continue Shopping
        </button>

        {/* Main Cart Card */}
        <div className="rounded-[36px] border border-[#e2e2e2] bg-white p-6 shadow-md lg:p-10">
          <div className="flex items-center gap-3 border-b border-[#e2e2e2] pb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffd700]/30 text-[#705d00]">
              <IconShoppingCart size={24} />
            </div>
            <div>
              <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#1a1c1c] tracking-tight">Your Shopping Cart</h1>
              <p className="font-body text-xs sm:text-sm text-[#5f5e5e] font-normal">
                Review your items and proceed to checkout.
              </p>
            </div>
          </div>

          {cartItems.length === 0 ? (
            <div className="mt-10 rounded-3xl border border-dashed border-[#d0c6ab] bg-[#f9f9f9] p-12 text-center">
              <p className="font-display text-xl font-bold text-[#1a1c1c]">Your cart is currently empty</p>
              <p className="mt-2 font-body text-sm text-[#5f5e5e] font-normal">Explore our collection to add luxury items.</p>
              <button
                onClick={() => navigate("/")}
                className="mt-6 rounded-2xl bg-[#705d00] px-8 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#544600]"
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
                      className="flex flex-col gap-4 rounded-3xl border border-[#e2e2e2] bg-[#f9f9f9] p-4 transition hover:border-[#705d00] sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={imgUrl}
                          alt={item.product_name || item.name}
                          className="h-20 w-20 rounded-2xl border border-[#e2e2e2] object-cover bg-white"
                        />
                        <div>
                          <h2 className="font-display text-base font-bold text-[#1a1c1c]">
                            {item.product_name || item.name}
                          </h2>
                          <p className="mt-1 font-display text-base font-extrabold text-[#705d00]">
                            ₹{item.product_price || item.price}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 justify-between sm:justify-end">
                        {/* Quantity Stepper */}
                        <div className="flex items-center overflow-hidden rounded-full border border-[#d0c6ab] bg-white">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1.5 text-base font-bold text-[#1a1c1c] transition hover:bg-[#f3f3f4]"
                          >
                            −
                          </button>
                          <span className="min-w-10 text-center text-sm font-extrabold text-[#1a1c1c]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1.5 text-base font-bold text-[#1a1c1c] transition hover:bg-[#f3f3f4]"
                          >
                            +
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-100 text-rose-600 transition hover:bg-rose-600 hover:text-white"
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
              <div className="flex flex-col justify-between rounded-3xl border border-[#e2e2e2] bg-[#f9f9f9] p-6 shadow-sm">
                <div>
                  <h2 className="font-display text-lg font-bold text-[#1a1c1c] border-b border-[#e2e2e2] pb-3">Order Summary</h2>
                  
                  <div className="mt-4 space-y-3 font-body text-sm text-[#5f5e5e] font-medium">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-bold text-[#1a1c1c]">₹{total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Shipping</span>
                      <span className="font-bold text-emerald-700">FREE</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes & Duties</span>
                      <span className="text-[#5f5e5e]">Included</span>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#e2e2e2] pt-4 text-xl font-black text-[#1a1c1c]">
                    <span>Total</span>
                    <span className="font-display text-[#705d00]">₹{total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/checkout')}
                  className="mt-8 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#705d00] py-4 text-base font-extrabold text-white shadow-gold-subtle transition hover:bg-[#544600] hover:scale-[1.02]"
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


