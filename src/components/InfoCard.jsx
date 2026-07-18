function InfoCard({ icon, title, value }) {
  return (
    <div className="rounded-lg border p-4">

      <div className="mb-2 flex items-center gap-2 text-[#2874f0]">
        {icon}
        <span className="font-semibold">
          {title}
        </span>
      </div>

      <p className="text-gray-700">
        {value || "-"}
      </p>

    </div>
  );
}

export default InfoCard;