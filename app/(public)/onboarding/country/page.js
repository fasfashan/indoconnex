"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CountryOnboarding() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState("");

  const countries = [
    "Indonesia",
    "Singapore",
    "Malaysia",
    "Thailand",
    "Philippines",
    "Vietnam",
    "Brunei",
    "Cambodia",
    "Laos",
    "Myanmar",
  ];

  const handleContinue = (e) => {
    e.preventDefault();
    // Save country to localStorage (for prototype)
    if (selectedCountry) {
      localStorage.setItem("userCountry", selectedCountry);
    }
    router.push("/onboarding/follow");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Logo */}
      <div className="absolute top-8 left-20">
        <div className="text-2xl font-bold text-red-500">INDOCONNEX</div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-[720px] px-20 py-20">
          <div className="flex flex-col gap-12">
            {/* Header */}
            <div className="flex flex-col gap-2">
              <h1 className="text-[36px] leading-[44px] font-medium text-[#21272a] font-['Inter']">
                Select your country
              </h1>
            </div>

            {/* Form */}
            <form onSubmit={handleContinue} className="flex flex-col gap-6">
              {/* Country Select */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm leading-5 font-medium text-[#414651] font-['Inter']">
                  Country
                </label>
                <div className="relative">
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#d5d7da] rounded-lg text-base leading-6 text-[#717680] font-['Inter'] appearance-none cursor-pointer focus:outline-none focus:border-[#414651]"
                  >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option
                        key={country}
                        value={country}
                        className="text-[#21272a]"
                      >
                        {country}
                      </option>
                    ))}
                  </select>
                  {/* Chevron Down Icon */}
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="#697077"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Continue Button */}
              <button
                type="submit"
                className="w-full h-12 bg-red-500 border-2 border-red-500 text-white text-base font-medium font-['Roboto'] tracking-[0.5px] flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                Continue
              </button>

              {/* Skip Link */}
              <Link
                href="/onboarding/follow"
                className="text-sm text-red-500 text-center font-['Roboto'] hover:underline"
              >
                Skip
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
