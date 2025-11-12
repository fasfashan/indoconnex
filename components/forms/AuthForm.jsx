"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthForm({ mode = "login" }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    rememberMe: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fake auth - redirect based on mode
    if (mode === "login") {
      console.log("Logging in with:", formData.email);
      router.push("/feed");
    } else {
      console.log("Registering with:", formData.email);
      // Save user data to localStorage (for prototype)
      localStorage.setItem("userName", formData.name);
      localStorage.setItem("userEmail", formData.email);
      // Redirect to onboarding
      router.push("/onboarding/country");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {mode === "register" && (
        <div className="flex flex-col gap-2">
          <label className="text-[#21272a] text-base font-medium">
            Full Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Placeholder"
            required
            className="bg-[#f2f4f8] border-b border-[#c1c7cd] px-4 py-3 h-12 text-base text-[#697077] focus:outline-none focus:border-[#21272a]"
          />
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label className="text-[#21272a] text-base font-medium">
          Email Address
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Placeholder"
          required
          className="bg-[#f2f4f8] border-b border-[#c1c7cd] px-4 py-3 h-12 text-base text-[#697077] focus:outline-none focus:border-[#21272a]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[#21272a] text-base font-medium">Password</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          placeholder="Placeholder"
          required
          className="bg-[#f2f4f8] border-b border-[#c1c7cd] px-4 py-3 h-12 text-base text-[#697077] focus:outline-none focus:border-[#21272a]"
        />
      </div>

      {mode === "login" && (
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="rememberMe"
              checked={formData.rememberMe}
              onChange={(e) =>
                setFormData({ ...formData, rememberMe: e.target.checked })
              }
              className="w-5 h-5 border border-gray-300 rounded"
            />
            <label htmlFor="rememberMe" className="text-sm text-[#21272a]">
              Remember me
            </label>
          </div>
          <a
            href="#"
            className="text-sm text-red-500 text-right hover:underline"
          >
            Forgot Password?
          </a>
        </div>
      )}

      <button
        type="submit"
        className="bg-red-500 text-white border-2 border-red-500 h-12 px-3 py-4 flex items-center justify-center font-medium text-base tracking-[0.5px] hover:bg-red-600 transition-colors"
      >
        {mode === "login" ? "Log In" : "Sign Up"}
      </button>

      <div className="h-px bg-[#d5d7da]"></div>

      <button
        type="button"
        className="bg-white border border-[#d5d7da] rounded-lg h-auto px-4 py-2.5 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        <span className="text-[#414651] text-base font-semibold">
          Log in with Google
        </span>
      </button>

      <p className="text-sm text-[#21272a]">
        {mode === "login" ? (
          <>
            No account yet?{" "}
            <a
              href="/auth/register"
              className="text-red-500 underline hover:no-underline"
            >
              Sign Up
            </a>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <a
              href="/auth/login"
              className="text-red-500 underline hover:no-underline"
            >
              Log In
            </a>
          </>
        )}
      </p>
    </form>
  );
}
