import { useState } from "react";
import Footer from "../components/Footer";
import API from "../services/api";
import toast from "react-hot-toast";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = isRegister
        ? "/auth/register"
        : "/auth/login";

      const { data } = await API.post(url, {
        name,
        email,
        password,
      });

      console.log(data);

      if (!isRegister) {
        localStorage.setItem("token", data.token);
        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );
      }

      toast.success(
        isRegister
          ? "Registered Successfully!"
          : "Login Successful!"
      );

      if (!isRegister) {
        window.location.href = "/";
      }

    } catch (err) {
      console.log(err.response?.data);

      toast.error(
        err.response?.data?.message ||
        "Something went wrong"
      );
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f9fc] text-[#102a43]">

      <section className="px-4 pb-16 pt-28 md:px-8 md:pt-32">

        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(10,50,90,.1)] lg:grid-cols-[.9fr_1.1fr]">


          {/* LEFT */}
          <div className="relative min-h-[460px] overflow-hidden bg-[#061426] p-8 text-white md:p-10 lg:min-h-[650px] lg:p-12">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_10%,rgba(59,130,246,.22),transparent_35%),linear-gradient(135deg,#061426,#020a14)]" />

            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative flex h-full flex-col justify-between">

              <div>

                <p className="text-[10px] font-bold tracking-[0.2em] text-blue-300 uppercase">
                  SwapShelf
                </p>

                <h1 className="mt-8 max-w-md text-4xl font-black leading-tight tracking-[-0.05em] md:text-[3.3rem]">
                  Keep your shelf
                  <span className="block text-blue-400">
                    moving.
                  </span>
                </h1>

                <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
                  Sign in to manage your listings or create an
                  account to start sharing books.
                </p>

              </div>


              <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md">

                <p className="text-sm font-medium">
                  Buy. Sell. Exchange.
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  A focused experience for people who love books.
                </p>

              </div>

            </div>

          </div>


          {/* RIGHT */}
          <div className="p-7 md:p-10 lg:p-12">

            {/* TABS */}
            <div className="grid grid-cols-2 rounded-2xl bg-slate-100 p-1">

              <button
                type="button"
                onClick={() => setIsRegister(false)}
                className={`rounded-xl py-3 text-sm font-semibold transition duration-300 ${
                  !isRegister
                    ? "bg-white text-[#071a2d] shadow-sm"
                    : "text-slate-500 hover:text-[#071a2d]"
                }`}
              >
                Login
              </button>

              <button
                type="button"
                onClick={() => setIsRegister(true)}
                className={`rounded-xl py-3 text-sm font-semibold transition duration-300 ${
                  isRegister
                    ? "bg-white text-[#071a2d] shadow-sm"
                    : "text-slate-500 hover:text-[#071a2d]"
                }`}
              >
                Register
              </button>

            </div>


            <div className="mt-10">

              <p className="text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase">
                {isRegister ? "Create account" : "Welcome back"}
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.045em] md:text-4xl">
                {isRegister
                  ? "Join SwapShelf."
                  : "Welcome back."}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {isRegister
                  ? "Create your account and start listing books."
                  : "Sign in to continue to your shelf."}
              </p>

            </div>


            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {isRegister && (
                <InputField
                  label="Full name"
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={setName}
                />
              )}


              <InputField
                label="Email address"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={setEmail}
              />


              <div>

                <label className="mb-2 block text-[10px] font-bold tracking-[0.16em] text-slate-500 uppercase">
                  Password
                </label>

                <div className="relative">

                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 pr-16 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-blue-600 transition hover:text-blue-800"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>

              </div>


              {isRegister && (
                <InputField
                  label="Confirm password"
                  type="password"
                  placeholder="Confirm your password"
                />
              )}


              <button
                type="submit"
                className="group w-full rounded-xl bg-[#071a2d] py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20"
              >
                {isRegister
                  ? "Create account"
                  : "Sign in"}

                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>


              {!isRegister && (
                <button
                  type="button"
                  className="w-full text-right text-xs font-medium text-blue-600 transition hover:text-blue-800"
                >
                  Forgot password?
                </button>
              )}

            </form>


            <div className="mt-8 border-t border-slate-100 pt-6 text-center">

              <p className="text-sm text-slate-500">

                {isRegister
                  ? "Already have an account?"
                  : "New to SwapShelf?"}

                <button
                  type="button"
                  onClick={() =>
                    setIsRegister(!isRegister)
                  }
                  className="ml-1 font-semibold text-blue-600 hover:text-blue-800"
                >
                  {isRegister
                    ? "Login"
                    : "Register"}
                </button>

              </p>

            </div>

          </div>

        </div>

      </section>


      <Footer />

    </main>
  );
}


function InputField({
  label,
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div>

      <label className="mb-2 block text-[10px] font-bold tracking-[0.16em] text-slate-500 uppercase">
        {label}
      </label>

      <input
        required
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) =>
          onChange && onChange(e.target.value)
        }
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
      />

    </div>
  );
}