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
    <div className="w-full max-w-xl rounded-[36px] border border-[#FB87AC]/25 bg-[#160B18]/90 p-8 shadow-2xl backdrop-blur-2xl">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#FB87AC] to-[#E86591] text-slate-950 shadow-pink-glow">
          <IconUserPlus size={30} />
        </div>

        <h2 className="text-3xl font-extrabold text-white tracking-tight">Create Account</h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-400 font-normal">
          Join JhalaCollection and enjoy VIP privileges.
        </p>
      </div>

      {error && (
        <div className="mb-6 rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-xs text-rose-300 font-medium">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Username */}
          <div>
            <label className="mb-2 block text-xs font-bold text-slate-300 uppercase tracking-wider">
              Username
            </label>
            <div className="relative">
              <IconUser
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FB87AC]"
              />
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-[#FB87AC]/30 bg-[#221226]/90 py-3.5 pl-12 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-[#FB87AC] focus:ring-4 focus:ring-[#FB87AC]/20 shadow-inner"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-xs font-bold text-slate-300 uppercase tracking-wider">
              Email Address
            </label>
            <div className="relative">
              <IconMail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FB87AC]"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-[#FB87AC]/30 bg-[#221226]/90 py-3.5 pl-12 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-[#FB87AC] focus:ring-4 focus:ring-[#FB87AC]/20 shadow-inner"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Password */}
          <div>
            <label className="mb-2 block text-xs font-bold text-slate-300 uppercase tracking-wider">
              Password
            </label>
            <div className="relative">
              <IconLock
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FB87AC]"
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-[#FB87AC]/30 bg-[#221226]/90 py-3.5 pl-12 pr-12 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-[#FB87AC] focus:ring-4 focus:ring-[#FB87AC]/20 shadow-inner"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
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
            <label className="mb-2 block text-xs font-bold text-slate-300 uppercase tracking-wider">
              Confirm Password
            </label>
            <div className="relative">
              <IconLock
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FB87AC]"
              />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="password2"
                placeholder="Confirm password"
                value={formData.password2}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-[#FB87AC]/30 bg-[#221226]/90 py-3.5 pl-12 pr-12 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-[#FB87AC] focus:ring-4 focus:ring-[#FB87AC]/20 shadow-inner"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
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
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#FB87AC] to-[#E86591] py-4 text-base font-extrabold text-slate-950 shadow-pink-glow transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50 mt-4"
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

      <p className="mt-8 text-center text-xs sm:text-sm text-slate-400 font-medium">
        Already have an account?{" "}
        <Link
          to="/token"
          className="font-bold text-[#FB87AC] hover:underline"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}

export default Register;
