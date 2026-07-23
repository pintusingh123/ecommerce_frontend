function InfoCard({ icon, title, value }) {
  return (
    <div className="rounded-2xl border border-[#FB87AC]/20 bg-[#221124]/70 p-4.5 backdrop-blur-md transition hover:border-[#FB87AC]/40">
      <div className="mb-1.5 flex items-center gap-2 text-[#FB87AC]">
        {icon}
        <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
          {title}
        </span>
      </div>

      <p className="text-base font-bold text-white">
        {value || "Not provided"}
      </p>
    </div>
  );
}

export default InfoCard;