import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  IconUser,
  IconMail,
  IconLock,
  IconEye,
  IconEyeOff,
  IconArrowRight,
  IconUserPlus,
} from "@tabler/icons-react";

function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

    const result = await register(formData);

    setLoading(false);

    if (result.success) {
      navigate("/token");
    } else {
      if (typeof result.error === "object") {
        const firstError = Object.values(result.error)[0];
        setError(Array.isArray(firstError) ? firstError[0] : firstError);
      } else {
        setError("Registration failed");
      }
    }
  };

  return (
    <div className="w-full max-w-xl rounded-[36px] border border-[#e2e2e2] bg-white p-8 shadow-md">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#705d00] text-white shadow-gold-subtle">
          <IconUserPlus size={30} />
        </div>

        <h2 className="font-display text-3xl font-extrabold text-[#1a1c1c] tracking-tight">Create Account</h2>
        <p className="mt-2 font-body text-xs sm:text-sm text-[#5f5e5e] font-normal">
          Join JhalaCollection and enjoy VIP privileges.
        </p>
      </div>

      {error && (
        <div className="mb-6 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-xs text-rose-700 font-medium">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Username */}
          <div>
            <label className="mb-2 block text-xs font-bold text-[#1a1c1c] uppercase tracking-wider">
              Username
            </label>
            <div className="relative">
              <IconUser
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#705d00]"
              />
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-[#d0c6ab] bg-[#f9f9f9] py-3.5 pl-12 pr-4 text-sm text-[#1a1c1c] placeholder:text-[#5f5e5e] outline-none transition focus:border-[#705d00] focus:ring-4 focus:ring-[#705d00]/15"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-xs font-bold text-[#1a1c1c] uppercase tracking-wider">
              Email Address
            </label>
            <div className="relative">
              <IconMail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#705d00]"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-[#d0c6ab] bg-[#f9f9f9] py-3.5 pl-12 pr-4 text-sm text-[#1a1c1c] placeholder:text-[#5f5e5e] outline-none transition focus:border-[#705d00] focus:ring-4 focus:ring-[#705d00]/15"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Password */}
          <div>
            <label className="mb-2 block text-xs font-bold text-[#1a1c1c] uppercase tracking-wider">
              Password
            </label>
            <div className="relative">
              <IconLock
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#705d00]"
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-[#d0c6ab] bg-[#f9f9f9] py-3.5 pl-12 pr-12 text-sm text-[#1a1c1c] placeholder:text-[#5f5e5e] outline-none transition focus:border-[#705d00] focus:ring-4 focus:ring-[#705d00]/15"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5f5e5e] hover:text-[#1a1c1c]"
              >
                {showPassword ? (
                  <IconEyeOff size={20} />
                ) : (
                  <IconEye size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-2 block text-xs font-bold text-[#1a1c1c] uppercase tracking-wider">
              Confirm Password
            </label>
            <div className="relative">
              <IconLock
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#705d00]"
              />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="password2"
                placeholder="Confirm password"
                value={formData.password2}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-[#d0c6ab] bg-[#f9f9f9] py-3.5 pl-12 pr-12 text-sm text-[#1a1c1c] placeholder:text-[#5f5e5e] outline-none transition focus:border-[#705d00] focus:ring-4 focus:ring-[#705d00]/15"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5f5e5e] hover:text-[#1a1c1c]"
              >
                {showConfirmPassword ? (
                  <IconEyeOff size={20} />
                ) : (
                  <IconEye size={20} />
                )}
              </button>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#705d00] py-4 text-base font-extrabold text-white shadow-gold-subtle transition hover:bg-[#544600] disabled:cursor-not-allowed disabled:opacity-50 mt-4"
        >
          {loading ? (
            "Creating Account..."
          ) : (
            <>
              Register Account
              <IconArrowRight size={18} />
            </>
          )}
        </button>
      </form>

      <p className="mt-8 text-center font-body text-xs sm:text-sm text-[#5f5e5e] font-medium">
        Already have an account?{" "}
        <Link
          to="/token"
          className="font-bold text-[#705d00] hover:underline"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}

export default Register;
