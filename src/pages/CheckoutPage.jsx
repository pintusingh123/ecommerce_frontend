import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CardContext";
import { IconCheck, IconArrowLeft, IconCreditCard, IconMapPin, IconPhone } from "@tabler/icons-react";

export default function CheckoutPage() {
  const { cartItems, total, fetchCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    address: "",
    phone: "",
    payment_method: "Cash on Delivery",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL || "http://127.0.0.1:8000";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${BASEURL}/api/order/create/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.Error || "Failed to place order");
      }

      setSuccess(true);
      fetchCart();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B060C] px-4 py-12">
        <div className="w-full max-w-lg rounded-[36px] border border-[#FB87AC]/30 bg-[#160B18]/90 p-8 text-center backdrop-blur-2xl shadow-2xl sm:p-12">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-[#FB87AC] to-[#E86591] text-slate-950 shadow-pink-glow">
            <IconCheck size={40} stroke={3} />
          </div>
          <h2 className="text-3xl font-extrabold text-white">Order Confirmed!</h2>
          <p className="mt-3 text-sm text-slate-300 font-normal leading-relaxed">
            Thank you for your purchase from JhalaCollection. Your order is being processed and prepared for shipping.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-8 w-full rounded-2xl bg-gradient-to-r from-[#FB87AC] to-[#E86591] py-4 text-base font-extrabold text-slate-950 shadow-pink-glow transition hover:scale-[1.02]"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B060C] px-4">
        <div className="rounded-3xl border border-[#FB87AC]/25 bg-[#160B18]/90 p-10 text-center shadow-2xl backdrop-blur-xl">
          <h2 className="text-2xl font-bold text-white">Your cart is empty</h2>
          <button
            onClick={() => navigate("/")}
            className="mt-6 rounded-2xl bg-gradient-to-r from-[#FB87AC] to-[#E86591] px-8 py-3 text-sm font-bold text-slate-950 shadow-pink-glow"
          >
            Explore Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B060C] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <button
          onClick={() => navigate("/cart")}
          className="mb-8 flex items-center gap-2 rounded-full border border-[#FB87AC]/30 bg-[#160B18]/80 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#FB87AC] backdrop-blur-md transition hover:border-[#FB87AC] hover:bg-[#FB87AC]/20 shadow-pink-glow-sm"
        >
          <IconArrowLeft size={18} />
          Back to Cart
        </button>

        <div className="rounded-[36px] border border-[#FB87AC]/25 bg-[#160B18]/85 p-6 backdrop-blur-2xl shadow-2xl sm:p-10">
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Checkout Order</h1>
          <p className="mt-1 text-sm text-slate-400 font-normal">Complete your details to finalize the purchase.</p>
          
          {/* Order Summary Box */}
          <div className="my-6 rounded-2xl border border-[#FB87AC]/20 bg-[#221124]/70 p-5 backdrop-blur-md">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Total Payment</h2>
            <div className="flex justify-between items-baseline">
              <span className="text-sm font-medium text-slate-200">Amount Due:</span>
              <span className="text-2xl font-black text-[#FB87AC]">₹{typeof total === 'number' ? total.toFixed(2) : total}</span>
            </div>
          </div>

          {error && (
            <div className="mb-6 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs sm:text-sm text-rose-300 font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="address" className="mb-2 flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
                <IconMapPin size={16} className="text-[#FB87AC]" />
                Shipping Address
              </label>
              <textarea
                id="address"
                name="address"
                rows="3"
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#FB87AC]/30 bg-[#221226]/90 p-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-[#FB87AC] focus:ring-4 focus:ring-[#FB87AC]/20 shadow-inner"
                placeholder="Enter complete delivery address (House No, Street, Landmark, City, Pincode)"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
                <IconPhone size={16} className="text-[#FB87AC]" />
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#FB87AC]/30 bg-[#221226]/90 p-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-[#FB87AC] focus:ring-4 focus:ring-[#FB87AC]/20 shadow-inner"
                placeholder="Enter 10-digit mobile number"
              />
            </div>

            <div>
              <label htmlFor="payment_method" className="mb-2 flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
                <IconCreditCard size={16} className="text-[#FB87AC]" />
                Payment Method
              </label>
              <select
                id="payment_method"
                name="payment_method"
                value={formData.payment_method}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#FB87AC]/30 bg-[#221226]/90 p-4 text-sm text-white outline-none transition focus:border-[#FB87AC] focus:ring-4 focus:ring-[#FB87AC]/20 shadow-inner"
              >
                <option value="Cash on Delivery" className="bg-[#160B18] text-white">Cash on Delivery (COD)</option>
                <option value="Credit Card" className="bg-[#160B18] text-white">Credit / Debit Card (Online Test)</option>
              </select>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-gradient-to-r from-[#FB87AC] to-[#E86591] py-4 text-base font-extrabold text-slate-950 shadow-pink-glow transition hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Processing Order..." : "Confirm & Place Order"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

