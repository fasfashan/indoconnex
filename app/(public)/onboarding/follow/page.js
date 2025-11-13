"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
export default function FollowOnboarding() {
  const router = useRouter();
  const [followedBusinesses, setFollowedBusinesses] = useState([]);

  // Mock business recommendations
  const recommendations = [
    {
      id: 1,
      category: "Murni Solusindo Nusantara",
      title: "Tech Innovators Indonesia",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      category: "Indoconnex",
      title: "Jakarta Coffee Community",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      category: "Murnicare",
      title: "Indonesian Fashion Hub",
      image:
        "https://images.unsplash.com/photo-1558769132-cb1aea3bcb5c?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      category: "Education",
      title: "Learning Center Jakarta",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      category: "Health & Wellness",
      title: "Wellness Indonesia",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      category: "Finance",
      title: "Fintech Indonesia Network",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    },
  ];

  const toggleFollow = (businessId) => {
    setFollowedBusinesses((prev) => {
      if (prev.includes(businessId)) {
        return prev.filter((id) => id !== businessId);
      } else {
        return [...prev, businessId];
      }
    });
  };

  const handleFinish = () => {
    // Check if user has followed at least 3 accounts
    if (followedBusinesses.length < 3) {
      return;
    }

    // Save followed businesses to localStorage (for prototype)
    localStorage.setItem(
      "followedBusinesses",
      JSON.stringify(followedBusinesses)
    );
    router.push("/feed");
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Logo */}
      <div className="absolute top-8 left-20">
        <Image src="/logo.svg" alt="INDOCONNEX Logo" width={120} height={40} />
      </div>

      {/* Header with Skip Button */}
      <div className="pt-[118px] px-20">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-xl leading-[30px] font-medium text-[#21272a] font-['Inter'] mb-2">
              Follow Business, Community
            </h1>
            <p className="text-sm text-gray-600">
              Follow at least 3 accounts to continue (
              {followedBusinesses.length}/3)
            </p>
          </div>
          <button
            onClick={handleFinish}
            disabled={followedBusinesses.length < 3}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
              followedBusinesses.length >= 3
                ? "bg-red-700 text-white hover:bg-red-600"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>

        {/* Grid of Business Cards */}
        <div className="grid grid-cols-3 gap-5 max-w-[1200px]">
          {recommendations.map((business) => {
            const isFollowing = followedBusinesses.includes(business.id);

            return (
              <div
                key={business.id}
                className="bg-white border border-[#dde1e6] flex flex-col"
              >
                {/* Image */}
                <div className="w-full h-[220px] bg-[#dde1e6] relative overflow-hidden">
                  <img
                    src={business.image}
                    alt={business.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="px-4 pt-6 pb-4 flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-base font-medium text-[#21272a] font-['Roboto']">
                      {business.category}
                    </p>
                    <p className="text-xl font-bold text-[#21272a] font-['Roboto']">
                      {business.title}
                    </p>
                  </div>
                </div>

                {/* Follow Button */}
                <div className="px-4 pb-4">
                  <button
                    onClick={() => toggleFollow(business.id)}
                    className={`w-full h-12 border-2 text-base font-medium font-['Roboto'] tracking-[0.5px] transition-colors ${
                      isFollowing
                        ? "bg-white  text-red-500 hover:bg-red-50"
                        : "bg-red-700  text-white hover:bg-red-600"
                    }`}
                  >
                    {isFollowing ? "Following" : "Follow"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Finish Button */}
        <div className="mt-12 max-w-[400px] mx-auto">
          <button
            onClick={handleFinish}
            disabled={followedBusinesses.length < 3}
            className={`w-full h-12 text-base font-medium font-['Roboto'] tracking-[0.5px] transition-colors rounded-lg ${
              followedBusinesses.length >= 3
                ? "bg-red-700 text-white hover:bg-red-600"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Continue to Feed{" "}
            {followedBusinesses.length >= 3
              ? ""
              : `(${followedBusinesses.length}/3)`}
          </button>
        </div>
      </div>
    </div>
  );
}
