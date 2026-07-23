import React from "react";
import {
  IconTruckDelivery,
  IconCertificate,
  IconRefresh,
  IconHeadset,
  IconSparkles,
} from "@tabler/icons-react";

const features = [
  {
    number: "01",
    icon: IconTruckDelivery,
    title: "Express Priority Shipping",
    desc: "Complimentary door-step delivery nationwide on all orders above ₹999.",
  },
  {
    number: "02",
    icon: IconCertificate,
    title: "Certified Jaipur Craftsmanship",
    desc: "100% authentic artisan-made heritage products with hallmark guarantee.",
  },
  {
    number: "03",
    icon: IconRefresh,
    title: "White-Glove Easy Returns",
    desc: "7-day effortless exchange and instant refund assurance on all purchases.",
  },
  {
    number: "04",
    icon: IconHeadset,
    title: "24/7 VIP Concierge Care",
    desc: "Personalized shopper support and custom order consultation anytime.",
  },
];

function HomeFeatures() {
  return (
    <section className="my-4 py-4">
      {/* Section Header */}
      <div className="mb-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#d0c6ab] bg-[#ffd700]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#705d00] shadow-sm">
          <IconSparkles size={16} className="text-[#705d00]" />
          THE JHALA PROMISE
        </span>

        <h2 className="mt-3 font-display text-2xl font-black text-[#1a1c1c] sm:text-3xl lg:text-4xl tracking-tight">
          Uncompromising Standards of Luxury
        </h2>

        <p className="mt-2 font-body text-xs sm:text-sm text-[#5f5e5e] font-normal max-w-xl mx-auto">
          Every piece is curated to deliver timeless royal heritage, certified authenticity, and effortless customer care.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[28px] border border-[#e2e2e2] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#705d00] hover:shadow-xl"
            >
              {/* Background Watermark Number */}
              <span className="absolute -right-1 -top-2 select-none font-display text-6xl font-black text-[#705d00]/10 transition-colors duration-300 group-hover:text-[#705d00]/20">
                {item.number}
              </span>

              {/* Icon Container */}
              <div className="relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d0c6ab]/40 bg-[#ffd700]/25 text-[#705d00] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#705d00] group-hover:text-white group-hover:shadow-gold-subtle">
                <Icon size={28} />
              </div>

              {/* Content */}
              <h3 className="relative font-display text-lg font-extrabold text-[#1a1c1c] tracking-tight">
                {item.title}
              </h3>

              <p className="mt-2 font-body text-xs sm:text-sm leading-relaxed text-[#5f5e5e] font-normal">
                {item.desc}
              </p>

              {/* Top Accent Line on Hover */}
              <div className="mt-5 h-1 w-10 rounded-full bg-[#d0c6ab] transition-all duration-500 group-hover:w-full group-hover:bg-[#705d00]"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HomeFeatures;