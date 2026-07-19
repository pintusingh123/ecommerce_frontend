import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  IconUser,
  IconMail,
  IconPhone,
  IconMapPin,
  IconGenderBigender,
  IconHome,
  IconEdit,
} from "@tabler/icons-react";
import InfoCard from "../../components/InfoCard";

function Profile() {
  const { user, loading } = useAuth();
  const navigate = useNavigate()

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        User not found.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl p-6">
      <div className="rounded-xl bg-white p-8 shadow">
        <div className="mb-8 justify-between flex items-center gap-5">
          <div>
            <button
              onClick={() => navigate("/")}
              className="mb-6 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-[#2874f0] transition hover:bg-blue-50"
            >
              ← Back to Home
            </button>
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              {user.first_name || user.last_name
                ? `${user.first_name} ${user.last_name}`
                : user.username}
            </h1>

            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <InfoCard
            icon={<IconUser size={20} />}
            title="Username"
            value={user.username}
          />

          <InfoCard
            icon={<IconMail size={20} />}
            title="Email"
            value={user.email}
          />

          <InfoCard
            icon={<IconPhone size={20} />}
            title="Phone"
            value={user.profile?.phone}
          />

          <InfoCard
            icon={<IconGenderBigender size={20} />}
            title="Gender"
            value={user.profile?.gender}
          />

          <InfoCard
            icon={<IconHome size={20} />}
            title="Address"
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

        <div className="mt-8">
          <Link
            to="/profile/edit"
            className="inline-flex items-center gap-2 rounded bg-[#2874f0] px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            <IconEdit size={20} />
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
