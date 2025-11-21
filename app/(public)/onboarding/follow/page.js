"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function FollowOnboarding() {
  const router = useRouter();
  const [followedAccounts, setFollowedAccounts] = useState([]);

  // Mock data for businesses
  const businesses = [
    {
      id: "biz-1",
      type: "business",
      name: "PT Murni Solusindo Nusantara",
      tagline: "Tech Innovators Indonesia",
      coverImage:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      avatar:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    },
    {
      id: "biz-2",
      type: "business",
      name: "Murni Medika Solusindo",
      tagline: "Transportation & Logistics",
      coverImage:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop",
      avatar:
        "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=100&h=100&fit=crop",
    },
    {
      id: "biz-3",
      type: "business",
      name: "Indoconnex",
      tagline: "E-Commerce Platform",
      coverImage:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      avatar:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop",
    },
    {
      id: "biz-4",
      type: "business",
      name: "Ergonomic",
      tagline: "Travel & Booking Services",
      coverImage:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop",
      avatar:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=100&h=100&fit=crop",
    },
  ];

  // Mock data for communities
  const communities = [
    {
      id: "com-1",
      type: "community",
      name: "Jakarta Coffee Community",
      tagline: "Coffee Lovers Network",
      coverImage:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
      avatar:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=100&h=100&fit=crop",
    },
    {
      id: "com-2",
      type: "community",
      name: "Indonesian Startup Network",
      tagline: "Tech Entrepreneurs Hub",
      coverImage:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      avatar:
        "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=100&h=100&fit=crop",
    },
    {
      id: "com-3",
      type: "community",
      name: "Jakarta Foodie Club",
      tagline: "Culinary Enthusiasts",
      coverImage:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
      avatar:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&h=100&fit=crop",
    },
    {
      id: "com-4",
      type: "community",
      name: "Design Indonesia",
      tagline: "Creative Professionals Network",
      coverImage:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
      avatar:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=100&h=100&fit=crop",
    },
  ];

  // Mock data for people
  const people = [
    {
      id: "ppl-1",
      type: "people",
      name: "Nadiem Makarim",
      coverImage:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      id: "ppl-2",
      type: "people",
      name: "William Tanuwijaya",
      coverImage:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    {
      id: "ppl-3",
      type: "people",
      name: "Achmad Zaky",
      coverImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    },
    {
      id: "ppl-4",
      type: "people",
      name: "Ferry Unardi",
      coverImage:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
      avatar:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop",
    },
  ];

  const toggleFollow = (accountId) => {
    setFollowedAccounts((prev) => {
      if (prev.includes(accountId)) {
        return prev.filter((id) => id !== accountId);
      } else {
        return [...prev, accountId];
      }
    });
  };

  const handleFinish = () => {
    // Check if user has followed at least 3 accounts
    if (followedAccounts.length < 3) {
      return;
    }

    // Save followed accounts to localStorage (for prototype)
    localStorage.setItem("followedAccounts", JSON.stringify(followedAccounts));
    router.push("/feed");
  };

  const renderCard = (account) => {
    const isFollowing = followedAccounts.includes(account.id);

    return (
      <div
        key={account.id}
        className="bg-white border border-[#d5d7da] flex flex-col rounded-lg overflow-hidden"
      >
        {/* Cover Image */}
        <div className="w-full h-[100px] bg-[#dde1e6] relative">
          <img
            src={account.coverImage}
            alt={account.name}
            className="w-full h-full object-cover"
          />
          {/* Avatar positioned overlapping cover and content */}
          <div className="absolute bottom-0 left-4 translate-y-1/2 w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-white">
            <img
              src={account.avatar}
              alt={account.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-4 pt-10 pb-4 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold text-[#414651] font-['Inter'] leading-7">
              {account.name}
            </p>
            {account.tagline && (
              <p className="text-sm text-[#414651] font-['Inter'] leading-5">
                {account.tagline}
              </p>
            )}
          </div>

          {/* Follow Button */}
          <button
            onClick={() => toggleFollow(account.id)}
            className={`w-full rounded-lg h-10 text-sm font-medium font-['Inter'] transition-colors shadow-sm ${
              isFollowing
                ? "bg-white border-2 border-red-500 text-red-500 hover:bg-red-50"
                : "bg-[#ed1846] text-white hover:bg-red-600"
            }`}
          >
            {isFollowing ? "Following" : "Follow"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-graY-100 pb-20">
      {/* Logo */}
      <div className="absolute top-8 left-20">
        <Image src="/logo.svg" alt="INDOCONNEX Logo" width={120} height={40} />
      </div>

      {/* Header with Next Button */}
      <div className="pt-[118px] px-20">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-xl leading-[30px] font-medium text-[#21272a] font-['Inter'] mb-2">
              Follow Business, Community, and People
            </h1>
            <p className="text-sm text-[#535862]">
              Follow at least 3 accounts to continue ({followedAccounts.length}
              /3)
            </p>
          </div>
          <button
            onClick={handleFinish}
            disabled={followedAccounts.length < 3}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
              followedAccounts.length >= 3
                ? "bg-[#ed1846] text-white hover:bg-red-600"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>

        {/* Business Section */}
        <div className="mb-10">
          <h2 className="text-base font-medium text-[#21272a] mb-4">
            Business page
          </h2>
          <div className="grid grid-cols-4 gap-5">
            {businesses.map((business) => renderCard(business))}
          </div>
        </div>

        {/* Community Section */}
        <div className="mb-10">
          <h2 className="text-base font-medium text-[#21272a] mb-4">
            Community
          </h2>
          <div className="grid grid-cols-4 gap-5">
            {communities.map((community) => renderCard(community))}
          </div>
        </div>

        {/* People Section */}
        <div className="mb-10">
          <h2 className="text-base font-medium text-[#21272a] mb-4">People</h2>
          <div className="grid grid-cols-4 gap-5">
            {people.map((person) => renderCard(person))}
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-12 max-w-[400px] mx-auto">
          <button
            onClick={handleFinish}
            disabled={followedAccounts.length < 3}
            className={`w-full h-12 text-base font-medium font-['Roboto'] tracking-[0.5px] transition-colors rounded-lg ${
              followedAccounts.length >= 3
                ? "bg-[#ed1846] text-white hover:bg-red-600"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Continue to Feed{" "}
            {followedAccounts.length >= 3
              ? ""
              : `(${followedAccounts.length}/3)`}
          </button>
        </div>
      </div>
    </div>
  );
}
