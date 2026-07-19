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
    <div className="flex min-h-[calc(100vh-70px)] items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-zinc-700 bg-[#111827] p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
            <IconUser size={30} className="text-white" />
          </div>

          <h2 className="text-3xl font-bold text-white">Welcome Back</h2>

          <p className="mt-2 text-sm text-zinc-400">
            Login to continue shopping
          </p>
        </div>

        {error && (
          <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username */}
          <div className="grid gap-5 md:grid-cols-2">
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
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                  className="w-full rounded-xl border border-zinc-700 bg-[#1b2431] py-3 pl-12 pr-4 text-white placeholder:text-zinc-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>

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
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full rounded-xl border border-zinc-700 bg-[#1b2431] py-3 pl-12 pr-12 text-white placeholder:text-zinc-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                >
                  {showPassword ? (
                    <IconEyeOff size={20} />
                  ) : (
                    <IconEye size={20} />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-zinc-400">
              <input type="checkbox" className="accent-blue-600" />
              Remember me
            </label>

            {/* here reset password btn */}
          </div>

          <button
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              "Logging in..."
            ) : (
              <>
                Login
                <IconArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-zinc-700"></div>
          <span className="px-3 text-sm text-zinc-500">OR</span>
          <div className="h-px flex-1 bg-zinc-700"></div>
        </div>

        {/* <button className="w-full rounded-xl border border-zinc-700 py-3 font-medium text-zinc-300 transition hover:border-blue-500 hover:bg-zinc-800">
          Continue with Google
        </button> */}

        <p className="mt-6 text-center text-sm text-zinc-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-blue-400 hover:text-blue-300"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
