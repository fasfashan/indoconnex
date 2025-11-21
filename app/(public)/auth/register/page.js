"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("Muhamad Ali");
  const [email, setEmail] = useState("olivia@murni.co.id");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("Indonesia");

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Logo Header */}

      <div className="min-h-screen flex flex-col max-w-2xl mx-auto justify-center p-4">
        <div className="mb-8">
          <Image
            src="/logo.svg"
            alt="INDOCONNEX Logo"
            width={120}
            height={40}
          />
        </div>
        <div className="w-full max-w-[654px] flex flex-col gap-8">
          {/* Register Card */}
          <div className="bg-white border border-[#d5d7da] rounded-lg p-4">
            <div className="p-12">
              {/* Form */}
              <div className="space-y-4 mb-6">
                {/* Full Name Input */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#414651]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#d5d7da] rounded-lg text-base text-[#717680] focus:outline-none focus:border-[#0a5f9b] focus:ring-1 focus:ring-[#0a5f9b]"
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#414651]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#d5d7da] rounded-lg text-base text-[#717680] focus:outline-none focus:border-[#0a5f9b] focus:ring-1 focus:ring-[#0a5f9b]"
                  />
                </div>

                {/* Password Input */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#414651]">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#d5d7da] rounded-lg text-base text-[#717680] placeholder:text-[#717680] focus:outline-none focus:border-[#0a5f9b] focus:ring-1 focus:ring-[#0a5f9b]"
                  />
                  <p className="text-sm text-[#535862]">
                    It must be a combination of minimum 8 letters, numbers, and
                    symbols.
                  </p>
                </div>

                {/* Country Select */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#414651]">
                    Select country
                  </label>
                  <div className="relative">
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#d5d7da] rounded-lg text-base text-[#717680] appearance-none focus:outline-none focus:border-[#0a5f9b] focus:ring-1 focus:ring-[#0a5f9b]"
                    >
                      <option value="Indonesia">Indonesia</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Philippines">Philippines</option>
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717680] pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Register Button */}
              <Link
                href="/onboarding/follow"
                className="w-full bg-[#ed1846] text-white rounded-lg h-12 mb-6 px-4 py-2 flex items-center justify-center font-medium text-sm shadow-sm hover:bg-red-600 transition-colors"
              >
                Register
              </Link>

              {/* Divider with "or" */}
              <div className="flex items-center gap-1 mb-6">
                <div className="flex-1 border-t border-[#d5d7da]"></div>
                <span className="text-xs text-[#535862]">or</span>
                <div className="flex-1 border-t border-[#d5d7da]"></div>
              </div>

              {/* Google Register Button */}
              <button className="w-full bg-white border border-[#d5d7da] rounded-lg px-4 py-2.5 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
                <span className="text-base font-semibold text-[#414651]">
                  Register with Google
                </span>
              </button>
            </div>

            {/* Sign In Link */}
            <div className="bg-[#f5f5f5] rounded-md p-4 text-center">
              <p className="text-sm">
                <span className="text-[#535862]">
                  Already have an account?{" "}
                </span>
                <Link
                  href="/auth/login"
                  className="text-[#ed1846] hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-center items-center gap-4 text-sm font-medium text-[#535862]">
            <p>© Indoconnex</p>
            <p>Privacy &amp; policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
