import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CardContext";

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

      // Order placed successfully
      setSuccess(true);
      fetchCart(); // Refetch cart to clear it out in context
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f1f3f6] px-4">
        <div className="rounded-2xl bg-white px-8 py-10 text-center shadow-lg sm:px-12 sm:py-16">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-gray-900">Order Placed Successfully!</h2>
          <p className="mb-8 text-gray-600">Thank you for your purchase. Your order is being processed.</p>
          <button
            onClick={() => navigate("/")}
            className="rounded-xl bg-[#2874f0] px-6 py-3 font-semibold text-white transition hover:bg-[#1a5bba]"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f1f3f6]">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">Your cart is empty</h2>
          <button
            onClick={() => navigate("/")}
            className="rounded-xl bg-[#2874f0] px-6 py-3 font-semibold text-white transition hover:bg-[#1a5bba]"
          >
            Go Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f1f3f6] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-[24px] bg-white p-6 shadow-xl sm:p-8">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">Checkout</h1>
        
        <div className="mb-8 rounded-xl bg-gray-50 p-4 border border-gray-100">
          <h2 className="mb-2 font-semibold text-gray-700">Order Summary</h2>
          <div className="flex justify-between items-center text-lg font-bold text-gray-900">
            <span>Total Amount:</span>
            <span className="text-[#2874f0]">${total}</span>
          </div>
        </div>

        {error && (
          <div className="mb-6 rounded-xl bg-red-50 p-4 text-red-600 border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="address" className="mb-2 block text-sm font-medium text-gray-700">
              Shipping Address
            </label>
            <textarea
              id="address"
              name="address"
              rows="3"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-[#2874f0] focus:ring-1 focus:ring-[#2874f0]"
              placeholder="Enter your full address"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-[#2874f0] focus:ring-1 focus:ring-[#2874f0]"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label htmlFor="payment_method" className="mb-2 block text-sm font-medium text-gray-700">
              Payment Method
            </label>
            <select
              id="payment_method"
              name="payment_method"
              value={formData.payment_method}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-[#2874f0] focus:ring-1 focus:ring-[#2874f0]"
            >
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="Credit Card">Credit Card (Test)</option>
            </select>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-[#2874f0] py-4 text-lg font-bold text-white transition hover:bg-[#1a5bba] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
