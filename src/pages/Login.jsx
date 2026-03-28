import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  // ✅ ADDED STATE
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white dark:bg-[#0F0F0F] text-gray-900 dark:text-white transition-colors duration-300">

      {/* 🔥 FULL SCREEN POPUP */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

          <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-8 max-w-md w-[90%] text-center shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              ⚠️ Demo Project Notice
            </h2>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              This is a UI-based project. Authentication and backend are not connected.
              <br /><br />
              You can click <span className="text-teal-500 font-medium">Sign In</span> directly without filling any details.
              <br />
              It will open the dashboard.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-teal-500 text-black py-3 rounded-xl font-medium hover:opacity-90 transition"
            >
              Got it, continue
            </button>

          </div>
        </div>
      )}

      {/* LEFT PANEL (Branding) */}
      <div className="hidden md:flex w-1/2 relative overflow-hidden bg-linear-to-br from-teal-500/20 via-indigo-500/10 to-transparent dark:from-teal-500/10 dark:via-indigo-500/5 p-20 flex-col justify-center">

        <div className="relative z-10 max-w-lg">
          <h1 className="text-4xl xl:text-5xl font-semibold leading-tight tracking-tight mb-6">
            Enterprise cybersecurity.
            <span className="block text-teal-500">
              Delivered in hours.
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10">
            Launch enterprise-grade security scans instantly.
            Validate vulnerabilities faster.
            Generate professional reports automatically.
          </p>

          <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              Automated reconnaissance & mapping
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              AI-validated vulnerability findings
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              Enterprise-ready security reports
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL (Form) */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 md:px-20">

        <div className="w-full max-w-md">

          {/* Logo */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold tracking-tight">
              VR Security
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Create your account to continue
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm">

            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/dashboard");
              }}
              className="space-y-6"
            >

              <div className="space-y-2">
                <label className="text-sm text-gray-600 dark:text-gray-400">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600 dark:text-gray-400">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <input type="checkbox" className="accent-teal-500" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-teal-500 hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-500 text-black py-3 rounded-xl font-medium hover:opacity-90 transition active:scale-[0.99]"
              >
                Sign in
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
                <span className="text-xs text-gray-500">
                  OR CONTINUE WITH
                </span>
                <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
              </div>

              {/* Social Buttons */}
              <div className="grid grid-cols-3 gap-3">
                {["Apple", "Google", "Meta"].map((provider) => (
                  <button
                    key={provider}
                    type="button"
                    className="border border-gray-300 dark:border-gray-700 py-2 rounded-xl text-sm hover:bg-gray-100 dark:hover:bg-[#242424] transition"
                  >
                    {provider}
                  </button>
                ))}
              </div>

            </form>

          </div>

          {/* Footer */}
          <p className="text-xs text-gray-500 text-center mt-8">
            © 2026 VR Security Platform
          </p>

        </div>
      </div>
    </div>
  );
}