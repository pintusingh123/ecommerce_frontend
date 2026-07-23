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
    <div className="w-full max-w-md rounded-[36px] border border-[#FB87AC]/25 bg-[#160B18]/90 p-8 shadow-2xl backdrop-blur-2xl">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#FB87AC] to-[#E86591] text-slate-950 shadow-pink-glow">
          <IconUser size={30} />
        </div>

        <h2 className="text-3xl font-extrabold text-white tracking-tight">Welcome Back</h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-400 font-normal">
          Login to your JhalaCollection account
        </p>
      </div>

      {error && (
        <div className="mb-6 rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-xs text-rose-300 font-medium">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
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
              required
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full rounded-2xl border border-[#FB87AC]/30 bg-[#221226]/90 py-3.5 pl-12 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-[#FB87AC] focus:ring-4 focus:ring-[#FB87AC]/20 shadow-inner"
            />
          </div>
        </div>

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
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
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

        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-2 text-slate-400 font-medium cursor-pointer">
            <input type="checkbox" className="h-4 w-4 rounded accent-[#FB87AC]" />
            Remember Me
          </label>
        </div>

        <button
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#FB87AC] to-[#E86591] py-3.5 text-base font-extrabold text-slate-950 shadow-pink-glow transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
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

      <p className="mt-8 text-center text-xs sm:text-sm text-slate-400 font-medium">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-bold text-[#FB87AC] hover:underline"
        >
          Create Account
        </Link>
      </p>
    </div>
  );
}

export default Login;
