import {
  IconTruckDelivery,
  IconShieldCheck,
  IconRefresh,
  IconHeadset,
} from "@tabler/icons-react";

const features = [
  {
    icon: IconTruckDelivery,
    title: "Free Express Shipping",
    desc: "On all orders above ₹999",
  },
  {
    icon: IconShieldCheck,
    title: "100% Secure Checkout",
    desc: "Encrypted transaction protection",
  },
  {
    icon: IconRefresh,
    title: "Instant Easy Returns",
    desc: "7-day hassle-free exchange",
  },
  {
    icon: IconHeadset,
    title: "24/7 Concierge Support",
    desc: "Dedicated personal customer care",
  },
];

function HomeFeatures() {
  return (
    <section className="my-10">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group rounded-3xl border border-[#e2e2e2] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#705d00] hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-[#ffd700]/25 p-3.5 text-[#705d00] transition duration-300 group-hover:scale-110 group-hover:bg-[#705d00] group-hover:text-white">
                <Icon size={26} />
              </div>

              <h3 className="font-display text-lg font-bold text-[#1a1c1c] tracking-tight">
                {item.title}
              </h3>

              <p className="mt-1.5 font-body text-xs sm:text-sm text-[#5f5e5e] font-normal">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HomeFeatures;
