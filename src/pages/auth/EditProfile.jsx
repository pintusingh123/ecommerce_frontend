import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateProfile } from "../../api/profileApi";
import { IconArrowLeft, IconEdit, IconCheck } from "@tabler/icons-react";

function EditProfile() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  useEffect(() => {
    if (!user) return;

    setFormData({
      username: user.username || "",
      email: user.email || "",
      first_name: user.first_name || "",
      last_name: user.last_name || "",
      phone: user.profile?.phone || "",
      gender: user.profile?.gender || "",
      address: user.profile?.address || "",
      city: user.profile?.city || "",
      state: user.profile?.state || "",
      country: user.profile?.country || "",
      pincode: user.profile?.pincode || "",
    });
  }, [user]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await updateProfile(formData);
      setUser(res.data);
      navigate("/profile");
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.username ||
          err.response?.data?.email ||
          "Failed to update profile."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <button
          onClick={() => navigate("/profile")}
          className="mb-8 flex items-center gap-2 rounded-full border border-[#d0c6ab] bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-[#705d00] shadow-sm transition hover:border-[#705d00] hover:bg-[#f3f3f4]"
        >
          <IconArrowLeft size={18} />
          Cancel & Back to Profile
        </button>

        <div className="rounded-[36px] border border-[#e2e2e2] bg-white p-6 shadow-md sm:p-10">
          <div className="flex items-center gap-3 border-b border-[#e2e2e2] pb-6 mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffd700]/30 text-[#705d00]">
              <IconEdit size={24} />
            </div>
            <div>
              <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#1a1c1c] tracking-tight">Edit Profile Details</h1>
              <p className="font-body text-xs sm:text-sm text-[#5f5e5e] font-normal">Update your contact details and shipping preferences.</p>
            </div>
          </div>

          {error && (
            <div className="mb-6 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-xs sm:text-sm text-rose-700 font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-bold text-[#1a1c1c] uppercase tracking-wider">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#d0c6ab] bg-[#f9f9f9] p-3.5 text-sm text-[#1a1c1c] placeholder:text-[#5f5e5e] outline-none transition focus:border-[#705d00] focus:ring-4 focus:ring-[#705d00]/15"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-bold text-[#1a1c1c] uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#d0c6ab] bg-[#f9f9f9] p-3.5 text-sm text-[#1a1c1c] placeholder:text-[#5f5e5e] outline-none transition focus:border-[#705d00] focus:ring-4 focus:ring-[#705d00]/15"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-bold text-[#1a1c1c] uppercase tracking-wider">First Name</label>
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#d0c6ab] bg-[#f9f9f9] p-3.5 text-sm text-[#1a1c1c] placeholder:text-[#5f5e5e] outline-none transition focus:border-[#705d00] focus:ring-4 focus:ring-[#705d00]/15"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-bold text-[#1a1c1c] uppercase tracking-wider">Last Name</label>
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#d0c6ab] bg-[#f9f9f9] p-3.5 text-sm text-[#1a1c1c] placeholder:text-[#5f5e5e] outline-none transition focus:border-[#705d00] focus:ring-4 focus:ring-[#705d00]/15"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-bold text-[#1a1c1c] uppercase tracking-wider">Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#d0c6ab] bg-[#f9f9f9] p-3.5 text-sm text-[#1a1c1c] placeholder:text-[#5f5e5e] outline-none transition focus:border-[#705d00] focus:ring-4 focus:ring-[#705d00]/15"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-bold text-[#1a1c1c] uppercase tracking-wider">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#d0c6ab] bg-[#f9f9f9] p-3.5 text-sm text-[#1a1c1c] outline-none transition focus:border-[#705d00] focus:ring-4 focus:ring-[#705d00]/15"
              >
                <option value="" className="bg-white text-[#1a1c1c]">Select Gender</option>
                <option value="Male" className="bg-white text-[#1a1c1c]">Male</option>
                <option value="Female" className="bg-white text-[#1a1c1c]">Female</option>
                <option value="Other" className="bg-white text-[#1a1c1c]">Other</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="mb-1.5 block text-xs font-bold text-[#1a1c1c] uppercase tracking-wider">Address</label>
              <textarea
                name="address"
                placeholder="Complete Address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-2xl border border-[#d0c6ab] bg-[#f9f9f9] p-3.5 text-sm text-[#1a1c1c] placeholder:text-[#5f5e5e] outline-none transition focus:border-[#705d00] focus:ring-4 focus:ring-[#705d00]/15"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-bold text-[#1a1c1c] uppercase tracking-wider">City</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#d0c6ab] bg-[#f9f9f9] p-3.5 text-sm text-[#1a1c1c] placeholder:text-[#5f5e5e] outline-none transition focus:border-[#705d00] focus:ring-4 focus:ring-[#705d00]/15"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-bold text-[#1a1c1c] uppercase tracking-wider">State</label>
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#d0c6ab] bg-[#f9f9f9] p-3.5 text-sm text-[#1a1c1c] placeholder:text-[#5f5e5e] outline-none transition focus:border-[#705d00] focus:ring-4 focus:ring-[#705d00]/15"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-bold text-[#1a1c1c] uppercase tracking-wider">Country</label>
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#d0c6ab] bg-[#f9f9f9] p-3.5 text-sm text-[#1a1c1c] placeholder:text-[#5f5e5e] outline-none transition focus:border-[#705d00] focus:ring-4 focus:ring-[#705d00]/15"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-bold text-[#1a1c1c] uppercase tracking-wider">Pincode</label>
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#d0c6ab] bg-[#f9f9f9] p-3.5 text-sm text-[#1a1c1c] placeholder:text-[#5f5e5e] outline-none transition focus:border-[#705d00] focus:ring-4 focus:ring-[#705d00]/15"
              />
            </div>

            <div className="md:col-span-2 flex gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 rounded-2xl bg-[#705d00] py-4 text-base font-extrabold text-white shadow-gold-subtle transition hover:bg-[#544600] hover:scale-[1.02] disabled:opacity-50"
              >
                {loading ? "Saving Changes..." : "Save Profile Changes"}
              </button>

              <button
                type="button"
                onClick={() => navigate("/profile")}
                className="rounded-2xl border border-[#d0c6ab] bg-[#f9f9f9] px-8 py-4 text-sm font-bold text-[#1a1c1c] transition hover:bg-[#f3f3f4]"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
