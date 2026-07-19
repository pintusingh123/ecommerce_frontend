import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CardContext";

export default function CartPage() {
  const navigate = useNavigate();
  const { cartItems, total, removeFromCart, updateQuantity } = useCart();
  const BASEURL =
    import.meta.env.VITE_DJANGO_BASE_URL || "http://127.0.0.1:8000";
    // console.log("Cart Items ",cartItems)

  return (
    <div className="min-h-screen bg-[#050b14] px-4 py-8 sm:px-6 lg:px-8">
      
      <div className="mx-auto max-w-6xl rounded-[24px] bg-gray-100 p-6 shadow-xl sm:p-8">
                <button
          onClick={() => navigate("/")}
          className="mb-6 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-[#2874f0] transition hover:bg-blue-50"
        >
          ← Back to Home
        </button>
        <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        <p className="mt-2 text-gray-600">
          Review your selected items and proceed with confidence.
        </p>

        {cartItems.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
            <p className="text-xl font-semibold text-gray-700">
              Your cart is empty
            </p>
            <p className="mt-2 text-gray-500">
              Add something beautiful from the product list.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 rounded-2xl border border-gray-200 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-4">
                    {item.product_image &&(
                      <img 
                      src={`${BASEURL}${item.product_image}`}
                       alt={item.product_name}
                       className="w-20 h-20 object-cover rounded-lg" />
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-xl object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">
                        {item.product_name}
                      </h2>
                      <p className="mt-1 text-[#2874f0]">${item.product_price}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center overflow-hidden rounded-full border border-gray-300">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-3 py-2 text-lg font-semibold text-gray-700 hover:bg-gray-100"
                      >
                        −
                      </button>
                      <span className="min-w-10 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-3 py-2 text-lg font-semibold text-gray-700 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="rounded-full bg-red-50 px-3 py-2 text-sm font-semibold text-red-500 hover:bg-red-100"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl bg-[#f8faff] p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">Price Details</h2>
              <div className="mt-4 space-y-3 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="text-green-600">Free</span>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4 text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button 
                onClick={() => navigate('/checkout')}
                className="mt-6 w-full rounded-xl bg-[#fb641b] px-4 py-3 font-semibold text-white transition hover:bg-[#e65d10]"
              >
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
