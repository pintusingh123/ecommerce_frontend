import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateProfile } from "../../api/profileApi";

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
    <div className="mx-auto max-w-5xl p-6">
      <div className="rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-8 text-3xl font-bold text-[#2874f0]">
          Edit Profile
        </h1>

        {error && (
          <div className="mb-5 rounded bg-red-100 p-3 text-red-600">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {/* Username */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="rounded border p-3 outline-none focus:border-[#2874f0]"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="rounded border p-3 outline-none focus:border-[#2874f0]"
          />

          {/* First Name */}
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
            className="rounded border p-3 outline-none focus:border-[#2874f0]"
          />

          {/* Last Name */}
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
            className="rounded border p-3 outline-none focus:border-[#2874f0]"
          />

          {/* Phone */}
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="rounded border p-3 outline-none focus:border-[#2874f0]"
          />

          {/* Gender */}
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="rounded border p-3 outline-none focus:border-[#2874f0]"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          {/* Address */}
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            rows={3}
            className="rounded border p-3 outline-none focus:border-[#2874f0] md:col-span-2"
          />

          {/* City */}
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="rounded border p-3 outline-none focus:border-[#2874f0]"
          />

          {/* State */}
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="rounded border p-3 outline-none focus:border-[#2874f0]"
          />

          {/* Country */}
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="rounded border p-3 outline-none focus:border-[#2874f0]"
          />

          {/* Pincode */}
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="rounded border p-3 outline-none focus:border-[#2874f0]"
          />

          <div className="md:col-span-2 flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 rounded bg-[#2874f0] py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Updating..." : "Update Profile"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="rounded border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;