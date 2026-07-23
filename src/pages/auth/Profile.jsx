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
      <div className="flex min-h-screen items-center justify-center bg-[#f9f9f9] px-4">
        <div className="rounded-3xl border border-[#e2e2e2] bg-white px-10 py-8 text-center shadow-md">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-[#705d00] border-t-transparent"></div>
          <p className="font-display text-base font-bold text-[#1a1c1c] tracking-wide">
            Loading profile...
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f9f9f9] px-4">
        <div className="rounded-3xl border border-rose-200 bg-white p-10 text-center shadow-md">
          <h2 className="font-display text-2xl font-bold text-rose-600">User Not Found</h2>
          <button
            onClick={() => navigate("/token")}
            className="mt-6 rounded-2xl bg-[#705d00] px-8 py-3 text-sm font-bold text-white shadow-sm"
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
    <div className="min-h-screen bg-[#f9f9f9] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <button
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-2 rounded-full border border-[#d0c6ab] bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-[#705d00] shadow-sm transition hover:border-[#705d00] hover:bg-[#f3f3f4]"
        >
          <IconArrowLeft size={18} />
          Back to Home
        </button>

        <div className="rounded-[36px] border border-[#e2e2e2] bg-white p-6 shadow-md sm:p-10">
          {/* Header Banner */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-6 border-b border-[#e2e2e2] pb-8">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#705d00] text-white shadow-gold-subtle text-3xl font-black font-display">
                {fullName.charAt(0).toUpperCase()}
              </div>

              <div>
                <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#1a1c1c] tracking-tight">
                  {fullName}
                </h1>
                <p className="mt-1 font-body text-sm font-medium text-[#705d00]">{user.email}</p>
              </div>
            </div>

            <Link
              to="/profile/edit"
              className="flex items-center gap-2 rounded-2xl bg-[#705d00] px-6 py-3 text-sm font-extrabold text-white shadow-gold-subtle transition hover:bg-[#544600] hover:scale-105"
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


