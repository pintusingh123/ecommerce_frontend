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
      <div className="flex min-h-screen items-center justify-center bg-[#f9f9f9] px-4 py-12">
        <div className="w-full max-w-lg rounded-[36px] border border-[#e2e2e2] bg-white p-8 text-center shadow-md sm:p-12">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#705d00] text-white shadow-gold-subtle">
            <IconCheck size={40} stroke={3} />
          </div>
          <h2 className="font-display text-3xl font-extrabold text-[#1a1c1c]">Order Confirmed!</h2>
          <p className="mt-3 font-body text-sm text-[#5f5e5e] font-normal leading-relaxed">
            Thank you for your purchase from JhalaCollection. Your order is being processed and prepared for shipping.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-8 w-full rounded-2xl bg-[#705d00] py-4 text-base font-extrabold text-white shadow-gold-subtle transition hover:bg-[#544600]"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f9f9f9] px-4">
        <div className="rounded-3xl border border-[#e2e2e2] bg-white p-10 text-center shadow-md">
          <h2 className="font-display text-2xl font-bold text-[#1a1c1c]">Your cart is empty</h2>
          <button
            onClick={() => navigate("/")}
            className="mt-6 rounded-2xl bg-[#705d00] px-8 py-3 text-sm font-bold text-white shadow-sm"
          >
            Explore Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9f9f9] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <button
          onClick={() => navigate("/cart")}
          className="mb-8 flex items-center gap-2 rounded-full border border-[#d0c6ab] bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-[#705d00] shadow-sm transition hover:border-[#705d00] hover:bg-[#f3f3f4]"
        >
          <IconArrowLeft size={18} />
          Back to Cart
        </button>

        <div className="rounded-[36px] border border-[#e2e2e2] bg-white p-6 shadow-md sm:p-10">
          <h1 className="font-display text-3xl font-extrabold text-[#1a1c1c] tracking-tight">Checkout Order</h1>
          <p className="mt-1 font-body text-sm text-[#5f5e5e] font-normal">Complete your details to finalize the purchase.</p>
          
          {/* Order Summary Box */}
          <div className="my-6 rounded-2xl border border-[#e2e2e2] bg-[#f9f9f9] p-5">
            <h2 className="text-xs font-bold text-[#5f5e5e] uppercase tracking-wider mb-2">Total Payment</h2>
            <div className="flex justify-between items-baseline">
              <span className="font-body text-sm font-medium text-[#1a1c1c]">Amount Due:</span>
              <span className="font-display text-2xl font-black text-[#705d00]">₹{typeof total === 'number' ? total.toFixed(2) : total}</span>
            </div>
          </div>

          {error && (
            <div className="mb-6 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-xs sm:text-sm text-rose-700 font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="address" className="mb-2 flex items-center gap-2 text-xs font-bold text-[#1a1c1c] uppercase tracking-wider">
                <IconMapPin size={16} className="text-[#705d00]" />
                Shipping Address
              </label>
              <textarea
                id="address"
                name="address"
                rows="3"
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#d0c6ab] bg-[#f9f9f9] p-4 text-sm text-[#1a1c1c] placeholder:text-[#5f5e5e] outline-none transition focus:border-[#705d00] focus:ring-4 focus:ring-[#705d00]/15"
                placeholder="Enter complete delivery address (House No, Street, Landmark, City, Pincode)"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 flex items-center gap-2 text-xs font-bold text-[#1a1c1c] uppercase tracking-wider">
                <IconPhone size={16} className="text-[#705d00]" />
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#d0c6ab] bg-[#f9f9f9] p-4 text-sm text-[#1a1c1c] placeholder:text-[#5f5e5e] outline-none transition focus:border-[#705d00] focus:ring-4 focus:ring-[#705d00]/15"
                placeholder="Enter 10-digit mobile number"
              />
            </div>

            <div>
              <label htmlFor="payment_method" className="mb-2 flex items-center gap-2 text-xs font-bold text-[#1a1c1c] uppercase tracking-wider">
                <IconCreditCard size={16} className="text-[#705d00]" />
                Payment Method
              </label>
              <select
                id="payment_method"
                name="payment_method"
                value={formData.payment_method}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#d0c6ab] bg-[#f9f9f9] p-4 text-sm text-[#1a1c1c] outline-none transition focus:border-[#705d00] focus:ring-4 focus:ring-[#705d00]/15"
              >
                <option value="Cash on Delivery" className="bg-white text-[#1a1c1c]">Cash on Delivery (COD)</option>
                <option value="Credit Card" className="bg-white text-[#1a1c1c]">Credit / Debit Card (Online Test)</option>
              </select>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-[#705d00] py-4 text-base font-extrabold text-white shadow-gold-subtle transition hover:bg-[#544600] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
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


