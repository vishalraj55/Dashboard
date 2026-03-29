import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#F7F7F8] dark:bg-[#0F0F0F] text-gray-900 dark:text-white">

      {/* 🔥 POPUP */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-6 sm:p-8 w-full max-w-md text-center shadow-xl">
            <h2 className="text-lg sm:text-xl font-semibold mb-3">
               Demo Project
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              This is a demo UI. <br />Simply click “Sign In” to continue - no credentials required.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-black dark:bg-teal-500 text-white dark:text-black py-3 rounded-xl font-medium active:scale-[0.98]"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/*Desktop only*/}
      <div className="hidden md:flex w-1/2 relative overflow-hidden bg-linear-to-br from-teal-500/20 via-indigo-500/10 to-transparent p-12 lg:p-20 items-center">
        <div className="max-w-lg">
          <h1 className="text-4xl xl:text-5xl font-semibold mb-6 leading-tight">
            Enterprise cybersecurity.
            <span className="block text-teal-500">
              Delivered in hours.
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Launch enterprise-grade security scans instantly and generate reports automatically.
          </p>

          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            {[
              "Automated reconnaissance & mapping",
              "AI-validated vulnerability findings",
              "Enterprise-ready security reports",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 📱 RIGHT PANEL */}
      <div className="flex-1 flex flex-col justify-center px-5 py-10 md:px-12">

        <div className="w-full max-w-md mx-auto">

          {/* HEADER */}
          <div className="text-center md:text-left mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              VR Security
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Welcome back — sign in to continue
            </p>
          </div>

          {/* FORM */}
          <div className="space-y-4 md:bg-white md:dark:bg-[#1A1A1A] md:border md:border-gray-200 md:dark:border-gray-800 md:rounded-2xl md:p-8 md:shadow-sm">

            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/dashboard");
              }}
              className="space-y-4"
            >

              {/* EMAIL */}
              <div>
                <label className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="mt-1 w-full px-4 py-4 md:py-3 rounded-xl bg-white md:bg-transparent shadow-sm md:shadow-none border border-gray-200 md:border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="mt-1 w-full px-4 py-4 md:py-3 rounded-xl bg-white md:bg-transparent shadow-sm md:shadow-none border border-gray-200 md:border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* OPTIONS */}
              <div className="flex items-center justify-between text-sm px-1">
                <label className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <input type="checkbox" className="accent-teal-500" />
                  Remember
                </label>

                <button
                  type="button"
                  className="text-teal-500 hover:underline"
                >
                  Forgot?
                </button>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-black md:bg-teal-500 text-white md:text-black py-4 md:py-3 rounded-xl font-semibold active:scale-[0.98] transition"
              >
                Sign in
              </button>

              {/* DIVIDER */}
              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
                <span className="text-xs text-gray-400">
                  OR CONTINUE WITH
                </span>
                <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
              </div>

              {/* SOCIAL */}
              <div className="grid grid-cols-3 gap-3">
                {["Apple", "Google", "Meta"].map((provider) => (
                  <button
                    key={provider}
                    type="button"
                    className="bg-white md:bg-transparent shadow-sm md:shadow-none border border-gray-200 md:border-gray-300 dark:border-gray-700 py-3 md:py-2 rounded-xl text-sm active:scale-[0.97]"
                  >
                    {provider}
                  </button>
                ))}
              </div>

            </form>
          </div>

          {/* FOOTER */}
          <p className="text-xs text-gray-400 text-center mt-8">
            © 2026 VR Security
          </p>

        </div>
      </div>
    </div>
  );
}