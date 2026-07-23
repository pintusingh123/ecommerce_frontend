function InfoCard({ icon, title, value }) {
  return (
    <div className="rounded-2xl border border-[#e2e2e2] bg-[#f9f9f9] p-4.5 transition hover:border-[#705d00]">
      <div className="mb-1.5 flex items-center gap-2 text-[#705d00]">
        {icon}
        <span className="font-body text-xs font-bold uppercase tracking-wider text-[#5f5e5e]">
          {title}
        </span>
      </div>

      <p className="font-display text-base font-bold text-[#1a1c1c]">
        {value || "Not provided"}
      </p>
    </div>
  );
}

export default InfoCard;
