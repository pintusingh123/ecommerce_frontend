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
              className="group rounded-3xl border border-[#FB87AC]/20 bg-[#160B18]/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FB87AC] hover:shadow-pink-glow-sm"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-[#FB87AC]/15 p-3.5 text-[#FB87AC] transition duration-300 group-hover:scale-110 group-hover:bg-[#FB87AC] group-hover:text-slate-950">
                <Icon size={26} />
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight">
                {item.title}
              </h3>

              <p className="mt-1.5 text-xs sm:text-sm text-slate-400 font-medium">
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