import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  IconUser,
  IconMail,
  IconPhone,
  IconMapPin,
  IconGenderBigender,
  IconHome,
  IconEdit,
  IconArrowLeft,
  IconSparkles,
} from "@tabler/icons-react";
import InfoCard from "../../components/InfoCard";

function Profile() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B060C] px-4">
        <div className="rounded-3xl border border-[#FB87AC]/30 bg-[#160B18]/90 px-10 py-8 text-center shadow-2xl backdrop-blur-xl">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-[#FB87AC] border-t-transparent shadow-pink-glow"></div>
          <p className="text-base font-bold text-white tracking-wide">
            Loading profile...
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B060C] px-4">
        <div className="rounded-3xl border border-rose-500/30 bg-[#160B18]/90 p-10 text-center shadow-2xl backdrop-blur-xl">
          <h2 className="text-2xl font-bold text-rose-400">User Not Found</h2>
          <button
            onClick={() => navigate("/token")}
            className="mt-6 rounded-2xl bg-gradient-to-r from-[#FB87AC] to-[#E86591] px-8 py-3 text-sm font-bold text-slate-950 shadow-pink-glow"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const fullName = user.first_name || user.last_name
    ? `${user.first_name || ""} ${user.last_name || ""}`.trim()
    : user.username;

  return (
    <div className="min-h-screen bg-[#0B060C] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <button
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-2 rounded-full border border-[#FB87AC]/30 bg-[#160B18]/80 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#FB87AC] backdrop-blur-md transition hover:border-[#FB87AC] hover:bg-[#FB87AC]/20 shadow-pink-glow-sm"
        >
          <IconArrowLeft size={18} />
          Back to Home
        </button>

        <div className="rounded-[36px] border border-[#FB87AC]/25 bg-[#160B18]/85 p-6 backdrop-blur-2xl shadow-2xl sm:p-10">
          {/* Header Banner */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-6 border-b border-[#FB87AC]/15 pb-8">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-tr from-[#FB87AC] to-[#E86591] text-slate-950 shadow-pink-glow text-3xl font-black">
                {fullName.charAt(0).toUpperCase()}
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {fullName}
                </h1>
                <p className="mt-1 text-sm font-medium text-[#FB87AC]">{user.email}</p>
              </div>
            </div>

            <Link
              to="/profile/edit"
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#FB87AC] to-[#E86591] px-6 py-3 text-sm font-extrabold text-slate-950 shadow-pink-glow transition hover:scale-105"
            >
              <IconEdit size={19} />
              Edit Profile
            </Link>
          </div>

          {/* Info Cards Grid */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <InfoCard
              icon={<IconUser size={20} />}
              title="Username"
              value={user.username}
            />

            <InfoCard
              icon={<IconMail size={20} />}
              title="Email Address"
              value={user.email}
            />

            <InfoCard
              icon={<IconPhone size={20} />}
              title="Phone Number"
              value={user.profile?.phone}
            />

            <InfoCard
              icon={<IconGenderBigender size={20} />}
              title="Gender"
              value={user.profile?.gender}
            />

            <InfoCard
              icon={<IconHome size={20} />}
              title="Delivery Address"
              value={user.profile?.address}
            />

            <InfoCard
              icon={<IconMapPin size={20} />}
              title="City"
              value={user.profile?.city}
            />

            <InfoCard
              icon={<IconMapPin size={20} />}
              title="State"
              value={user.profile?.state}
            />

            <InfoCard
              icon={<IconMapPin size={20} />}
              title="Country"
              value={user.profile?.country}
            />

            <InfoCard
              icon={<IconMapPin size={20} />}
              title="Pincode"
              value={user.profile?.pincode}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

