import {
  IconTruckDelivery,
  IconShieldCheck,
  IconRefresh,
  IconHeadset,
} from "@tabler/icons-react";

const features = [
  {
    icon: IconTruckDelivery,
    title: "Free Delivery",
    desc: "On orders above ₹999",
  },
  {
    icon: IconShieldCheck,
    title: "Secure Payment",
    desc: "100% protected checkout",
  },
  {
    icon: IconRefresh,
    title: "Easy Returns",
    desc: "7-day hassle-free returns",
  },
  {
    icon: IconHeadset,
    title: "24/7 Support",
    desc: "Always here to help",
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
              className="group rounded-2xl border border-zinc-800 bg-[#111827] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500"
            >
              <div className="mb-4 inline-flex rounded-xl bg-blue-600/10 p-3 text-blue-400">
                <Icon size={26} />
              </div>

              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
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