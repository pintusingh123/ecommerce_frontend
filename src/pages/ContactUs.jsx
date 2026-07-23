import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";
import {
  IconArrowLeft,
  IconUser,
  IconMail,
  IconMessage,
  IconSend,
  IconMapPin,
  IconPhone,
  IconClock,
  IconCheck,
  
  IconAlertCircle,
} from "@tabler/icons-react";

function ContactUs() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      setError("EmailJS environment variables are missing.");
      setLoading(false);
      return;
    }
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      reply_to: formData.email,
    };

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log("EmailJS Success:", response);

      setSubmitted(true);

      // Form reset
      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (err) {
      console.error("EmailJS Error:", err);
      console.log("Status:", err.status);
      console.log("Text:", err.text);

      setError(err.text || "Failed to send email.");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col justify-between">
      <div className="mx-auto w-full max-w-7xl px-4 pt-6 sm:px-6 lg:px-8 flex-1">
        {/* Main Contact Container */}
        <div className="rounded-[36px] border border-[#e2e2e2] bg-white p-6 shadow-md lg:p-12">
          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="mb-8 flex items-center gap-2 rounded-full border border-[#d0c6ab] bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-[#705d00] shadow-sm transition hover:border-[#705d00] hover:bg-[#f3f3f4]"
          >
            <IconArrowLeft size={18} />
            Back to Home
          </button>

          {/* Header */}
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d0c6ab] bg-[#f3f3f4] px-4 py-1.5 text-xs font-bold text-[#705d00]">
              WE'RE HERE TO HELP
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#1a1c1c] tracking-tight mt-3">
              Contact <span className="text-[#705d00]">JhalaCollection</span>
            </h1>
            <p className="font-body text-sm text-[#5f5e5e] font-normal mt-2">
              Have a question about an order, custom request, or our collection? Send us a message and your query will be sent directly to our Gmail.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Left Contact Info Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl border border-[#e2e2e2] bg-[#f9f9f9] p-6 shadow-sm">
                <h3 className="font-display text-xl font-bold text-[#1a1c1c] border-b border-[#e2e2e2] pb-4 mb-5">
                  Reach Out To Us
                </h3>

                <div className="space-y-5 font-body text-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#ffd700]/30 text-[#705d00]">
                      <IconMapPin size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1c1c]">Boutique Location</h4>
                      <p className="text-xs text-[#5f5e5e] mt-0.5 leading-relaxed">
                        Jhala Towers, Johri Bazaar, Jaipur, Rajasthan 302003, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#ffd700]/30 text-[#705d00]">
                      <IconMail size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1c1c]">Email Support</h4>
                      <p className="text-xs text-[#705d00] font-semibold mt-0.5">
                        pintugit982@gmail.com
                      </p>
                      <p className="text-[11px] text-[#5f5e5e]">Direct SMTP Dispatch</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#ffd700]/30 text-[#705d00]">
                      <IconPhone size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1c1c]">Concierge Hotline</h4>
                      <p className="text-xs text-[#1a1c1c] font-bold mt-0.5">
                        +91 98765 43210
                      </p>
                      <p className="text-[11px] text-[#5f5e5e]">Mon - Sat: 9 AM - 8 PM IST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#ffd700]/30 text-[#705d00]">
                      <IconClock size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1c1c]">Working Hours</h4>
                      <p className="text-xs text-[#5f5e5e] mt-0.5">
                        Monday to Saturday: 10:00 AM – 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Column (7 Cols) */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center shadow-sm">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#705d00] text-white">
                    <IconCheck size={36} stroke={3} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#1a1c1c]">
                    Message Sent Successfully!
                  </h3>
                  <p className="font-body text-sm text-[#5f5e5e] mt-2 leading-relaxed">
                    Thank you, <span className="font-bold text-[#1a1c1c]">{formData.name}</span>. Your message has been sent directly to <span className="font-bold text-[#705d00]">pintugit982@gmail.com</span> via EmailJS SMTP. We will respond shortly to <span className="font-bold text-[#1a1c1c]">{formData.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="mt-6 rounded-2xl bg-[#705d00] px-8 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#544600]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="flex items-center gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-xs text-rose-700 font-medium">
                      <IconAlertCircle size={20} className="shrink-0 text-rose-600" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* User Name Input */}
                  <div>
                    <label className="mb-2 block text-xs font-bold text-[#1a1c1c] uppercase tracking-wider">
                      User Name
                    </label>
                    <div className="relative">
                      <IconUser
                        size={20}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#705d00]"
                      />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full rounded-2xl border border-[#d0c6ab] bg-[#f9f9f9] py-3.5 pl-12 pr-4 text-sm text-[#1a1c1c] placeholder:text-[#5f5e5e] outline-none transition focus:border-[#705d00] focus:ring-4 focus:ring-[#705d00]/15"
                      />
                    </div>
                  </div>

                  {/* User Email Input */}
                  <div>
                    <label className="mb-2 block text-xs font-bold text-[#1a1c1c] uppercase tracking-wider">
                      User Email
                    </label>
                    <div className="relative">
                      <IconMail
                        size={20}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#705d00]"
                      />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="w-full rounded-2xl border border-[#d0c6ab] bg-[#f9f9f9] py-3.5 pl-12 pr-4 text-sm text-[#1a1c1c] placeholder:text-[#5f5e5e] outline-none transition focus:border-[#705d00] focus:ring-4 focus:ring-[#705d00]/15"
                      />
                    </div>
                  </div>

                  {/* SMS / Message Input */}
                  <div>
                    <label className="mb-2 block text-xs font-bold text-[#1a1c1c] uppercase tracking-wider">
                      Message / SMS
                    </label>
                    <div className="relative">
                      <IconMessage
                        size={20}
                        className="absolute left-4 top-4 text-[#705d00]"
                      />
                      <textarea
                        name="message"
                        required
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Type your message or SMS here..."
                        className="w-full rounded-2xl border border-[#d0c6ab] bg-[#f9f9f9] py-3.5 pl-12 pr-4 text-sm text-[#1a1c1c] placeholder:text-[#5f5e5e] outline-none transition focus:border-[#705d00] focus:ring-4 focus:ring-[#705d00]/15"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#705d00] py-4 text-base font-extrabold text-white shadow-gold-subtle transition hover:bg-[#544600] hover:scale-[1.01] disabled:opacity-50"
                  >
                    {loading ? (
                      "Sending Email via EmailJS SMTP..."
                    ) : (
                      <>
                        Send Message to Gmail
                        <IconSend size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactUs;
