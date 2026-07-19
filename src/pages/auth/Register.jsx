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
    <div className="flex min-h-[calc(100vh-70px)] bg-black items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl rounded-3xl border border-zinc-700 bg-[#111827] p-8 shadow-[0_0_60px_rgba(0,0,0,0.45)]">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/30">
            <IconUser size={30} className="text-white" />
          </div>

          <h2 className="text-3xl font-bold text-white">Create Account</h2>

          <p className="mt-2 text-sm text-zinc-400">
            Create your account and start shopping today.
          </p>
        </div>

        {error && (
          <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Username */}
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Username
              </label>

              <div className="relative">
                <IconUser
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                />

                <input
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-zinc-700 bg-[#1b2431] py-3 pl-12 pr-4 text-white placeholder:text-zinc-500 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
                />
              </div>
            </div>
            {/* Email */}

            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Email
              </label>

              <div className="relative">
                <IconMail
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-zinc-700 bg-[#1b2431] py-3 pl-12 pr-4 text-white placeholder:text-zinc-500 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Password */}

            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Password
              </label>

              <div className="relative">
                <IconLock
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-zinc-700 bg-[#1b2431] py-3 pl-12 pr-12 text-white placeholder:text-zinc-500 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 transition hover:text-white"
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
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Confirm Password
              </label>

              <div className="relative">
                <IconLock
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="password2"
                  placeholder="Confirm password"
                  value={formData.password2}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-zinc-700 bg-[#1b2431] py-3 pl-12 pr-12 text-white placeholder:text-zinc-500 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 transition hover:text-white"
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
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition-all hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              "Creating Account..."
            ) : (
              <>
                Create Account
                <IconArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-zinc-700"></div>
          <span className="px-3 text-xs uppercase tracking-widest text-zinc-500">
            OR
          </span>
          <div className="h-px flex-1 bg-zinc-700"></div>
        </div>

        <p className="mt-6 text-center text-sm text-zinc-400">
          Already have an account?{" "}
          <Link
            to="/token"
            className="font-semibold text-blue-400 transition hover:text-blue-300"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
