import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  IconUser,
  IconLock,
  IconEye,
  IconEyeOff,
  IconArrowRight,
} from "@tabler/icons-react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

    const result = await login(formData);

    setLoading(false);

    if (result.success) {
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="w-full max-w-md rounded-[36px] border border-[#e2e2e2] bg-white p-8 shadow-md">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#705d00] text-white shadow-gold-subtle">
          <IconUser size={30} />
        </div>

        <h2 className="font-display text-3xl font-extrabold text-[#1a1c1c] tracking-tight">Welcome Back</h2>
        <p className="mt-2 font-body text-xs sm:text-sm text-[#5f5e5e] font-normal">
          Login to your JhalaCollection account
        </p>
      </div>

      {error && (
        <div className="mb-6 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-xs text-rose-700 font-medium">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
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
              required
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full rounded-2xl border border-[#d0c6ab] bg-[#f9f9f9] py-3.5 pl-12 pr-4 text-sm text-[#1a1c1c] placeholder:text-[#5f5e5e] outline-none transition focus:border-[#705d00] focus:ring-4 focus:ring-[#705d00]/15"
            />
          </div>
        </div>

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
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
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

        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-2 text-[#5f5e5e] font-medium cursor-pointer">
            <input type="checkbox" className="h-4 w-4 rounded accent-[#705d00]" />
            Remember Me
          </label>
        </div>

        <button
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#705d00] py-3.5 text-base font-extrabold text-white shadow-gold-subtle transition hover:bg-[#544600] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? (
            "Authenticating..."
          ) : (
            <>
              Sign In
              <IconArrowRight size={18} />
            </>
          )}
        </button>
      </form>

      <p className="mt-8 text-center font-body text-xs sm:text-sm text-[#5f5e5e] font-medium">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-bold text-[#705d00] hover:underline"
        >
          Create Account
        </Link>
      </p>
    </div>
  );
}

export default Login;
