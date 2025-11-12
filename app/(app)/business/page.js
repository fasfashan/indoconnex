"use client";

import {
  Plus,
  MoreHorizontal,
  ThumbsUp,
  MessageSquare,
  Edit2,
} from "lucide-react";
import Link from "next/link";
import { useBusinessContext } from "@/contexts/BusinessContext";

export default function BusinessDetailPage({ params }) {
  const { hasBusinessPage, isLoading } = useBusinessContext();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f2f4f8] flex items-center justify-center">
        <p className="text-[#535862]">Loading...</p>
      </div>
    );
  }

  // If user has business page, show feed view
  if (hasBusinessPage) {
    return <BusinessFeedView />;
  }

  // If no business page, show discover view
  return <DiscoverBusinessView />;
}

// Component for users WITH business page (Feed view - with sidebar)
function BusinessFeedView() {
  const { userBusinessPages } = useBusinessContext();
  const userBusiness = userBusinessPages[0]; // Get first business page

  return (
    <div className="min-h-screen bg-[#f9f9f9] py-6 px-8">
      <div className="max-w-[1400px] mx-auto grid grid-cols-[1fr_360px] gap-6">
        {/* Left Column - Main Content */}
        <div className="flex flex-col gap-5">
          {/* Create Post Box */}
          <div className="bg-white border border-[#d5d7da] rounded-lg p-6 flex items-center gap-6">
            <div className="w-10 h-10 rounded-full bg-[#dde1e6]" />
            <div className="flex-1 bg-white border border-[#d5d7da] rounded-lg px-4 py-3 flex items-center gap-2 cursor-pointer hover:bg-[#f9f9f9]">
              <Edit2 className="w-5 h-5 text-[#717680]" />
              <span className="text-base text-[#717680]">Create a post...</span>
            </div>
          </div>

          {/* Featured Business Section */}
          <div className="bg-white border border-[#d5d7da] rounded-lg p-6 flex flex-col gap-3">
            <h2 className="text-base font-medium text-black">
              Featured Business
            </h2>

            {[1, 2, 3].map((i) => (
              <div key={i}>
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-[60px] h-[60px] bg-[#dde1e6]" />
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-semibold text-[#414651]">
                        Business Name
                      </p>
                      <p className="text-sm text-[#535862]">
                        Business Category
                      </p>
                      <p className="text-sm text-[#535862]">29 followers</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-[#f5f5f5] border border-[#d5d7da] rounded-lg text-sm font-semibold text-[#252b37] hover:bg-[#e9eaeb] flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Follow
                  </button>
                </div>
                {i < 3 && <div className="border-t border-[#d5d7da]" />}
              </div>
            ))}

            <div className="pt-3 border-t border-[#d5d7da]">
              <button className="w-full px-4 py-2 bg-[#f5f5f5] border border-[#d5d7da] rounded-lg text-sm font-semibold text-[#252b37] hover:bg-[#e9eaeb]">
                Discover Business
              </button>
            </div>
          </div>

          {/* Discover Business Posts */}
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-white border border-[#d5d7da] rounded-lg p-4 flex flex-col gap-4"
            >
              {/* Post Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#dde1e6]" />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-[#414651]">
                      Garena
                    </p>
                    <p className="text-sm text-[#535862]">
                      Entertainment Providers
                    </p>
                    <p className="text-xs text-[#535862]">3d ago</p>
                  </div>
                </div>
                <button>
                  <MoreHorizontal className="w-5 h-5 text-[#717680]" />
                </button>
              </div>

              {/* Post Content */}
              <p className="text-base text-black leading-6">
                You don't need to rip and replace your SAP setup to use AI. This
                playbook shows how to deploy AI into ECC, S/4HANA, or BTP
                landscapes using a low-code{" "}
                <span className="text-[#a4a7ae]">... more</span>
              </p>

              {/* Divider */}
              <div className="border-t border-[#d5d7da]" />

              {/* Post Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <div className="w-8 h-8 rounded-full bg-[#dde1e6]" />
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    <span className="text-base text-black">200</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-5 h-5" />
                    <span className="text-base text-black">200</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Business Preview Card */}
        <div className="h-fit sticky top-6">
          <div className="bg-white border border-[#d5d7da] rounded-lg overflow-hidden">
            {/* Cover Photo */}
            <div className="h-[100px] bg-[#dde1e6]" />

            {/* Business Info */}
            <div className="p-4 pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold text-[#414651]">
                    {userBusiness?.businessName || "Business Name"}
                  </p>
                  <p className="text-sm text-[#535862]">1281 Followers</p>
                </div>
                <Link
                  href="/business/dashboard"
                  className="text-sm font-medium text-black hover:underline"
                >
                  See Profile
                </Link>
              </div>

              <div className="border-t border-[#d5d7da] pt-4">
                <p className="text-sm font-medium text-[#181d27] mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="text-sm font-semibold text-black hover:underline">
                  Try Premium for free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component for users WITHOUT business page (Discover view - like image 2)
function DiscoverBusinessView() {
  // Dummy business data
  const featuredBusinesses = [
    {
      id: 1,
      name: "Renault Trucks",
      category: "Manufacture & Supplies",
      followers: 1247,
      logo: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Scania AB",
      category: "Manufacture & Supplies",
      followers: 2834,
      logo: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "DAF Trucks",
      category: "Manufacture & Supplies",
      followers: 892,
      logo: "https://i.pravatar.cc/150?img=3",
    },
  ];

  const recommendedBusinesses = [
    {
      id: 1,
      name: "Renault Trucks (Volvo Group)",
      category: "Manufacture & Supplies",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
      id: 2,
      name: "Scania AB (Volkswagen Group)",
      category: "Manufacture & Supplies",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 3,
      name: "DAF Trucks (PACCAR Inc.)",
      category: "Manufacture & Supplies",
      avatar: "https://i.pravatar.cc/150?img=6",
    },
    {
      id: 4,
      name: "MAN Truck & Bus (Volkswage...",
      category: "Manufacture & Supplies",
      avatar: "https://i.pravatar.cc/150?img=7",
    },
  ];

  const businessPosts = [
    {
      id: 1,
      companyName: "Garena",
      companyCategory: "Entertainment Providers",
      companyLogo: "https://i.pravatar.cc/150?img=8",
      timeAgo: "3d ago",
      content:
        "You don't need to rip and replace your SAP setup to use AI. This playbook shows how to deploy AI into ECC, S/4HANA, or BTP landscapes using a low-code",
      reactions: 200,
      comments: 200,
      userAvatar: "https://i.pravatar.cc/150?img=9",
    },
    {
      id: 2,
      companyName: "Microsoft Indonesia",
      companyCategory: "Technology Services",
      companyLogo: "https://i.pravatar.cc/150?img=10",
      timeAgo: "5d ago",
      content:
        "Empowering businesses with cloud solutions and AI-driven tools to accelerate digital transformation. Join us in building the future of technology.",
      reactions: 452,
      comments: 89,
      userAvatar: "https://i.pravatar.cc/150?img=11",
    },
    {
      id: 3,
      companyName: "Tokopedia",
      companyCategory: "E-Commerce Platform",
      companyLogo: "https://i.pravatar.cc/150?img=12",
      timeAgo: "1w ago",
      content:
        "We're excited to announce our new merchant partnership program! Help local businesses grow with our comprehensive e-commerce solutions and reach millions of customers.",
      reactions: 1024,
      comments: 156,
      userAvatar: "https://i.pravatar.cc/150?img=13",
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 ">
        {/* Main Content */}
        <div className="flex flex-col gap-5">
          {/* Discover Business Pages Card */}
          <div className="bg-white border border-[#dde1e6] rounded-lg p-6 flex flex-col gap-3">
            <h2 className="text-base font-medium text-black">
              Discover Business Pages
            </h2>
            <p className="text-base text-[#535862]">
              Share stories, ideas, and updates that inspire your network.
            </p>
            <Link
              href="/business/create"
              className="bg-[#f5f5f5] border border-[#d5d7da] rounded-lg px-3.5 py-2 flex items-center gap-2 self-start hover:bg-[#e9eaeb] transition-colors"
            >
              <Plus className="w-5 h-5 text-[#252b37]" />
              <span className="text-sm font-semibold text-[#252b37]">
                Create Business Page
              </span>
            </Link>
          </div>

          {/* Featured Business Card */}
          <div className="bg-white border border-[#dde1e6] rounded-lg p-6 flex flex-col gap-3">
            <h2 className="text-base font-medium text-black">
              Featured Business
            </h2>

            {featuredBusinesses.map((business, index) => (
              <div key={business.id}>
                <div className="flex items-center justify-between">
                  <div className="flex gap-3 items-start">
                    <img
                      src={business.logo}
                      alt={business.name}
                      className="w-[60px] h-[60px] rounded object-cover"
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-semibold text-[#414651]">
                        {business.name}
                      </p>
                      <p className="text-sm text-[#535862]">
                        {business.category}
                      </p>
                      <p className="text-sm text-[#535862]">
                        {business.followers} followers
                      </p>
                    </div>
                  </div>
                  <button className="bg-[#f5f5f5] border border-[#d5d7da] rounded-lg px-3.5 py-2 flex items-center gap-2 hover:bg-[#e9eaeb] transition-colors">
                    <Plus className="w-5 h-5 text-[#252b37]" />
                    <span className="text-sm font-semibold text-[#252b37]">
                      Follow
                    </span>
                  </button>
                </div>
                {index < featuredBusinesses.length - 1 && (
                  <div className="border-t border-[#dde1e6] mt-3" />
                )}
              </div>
            ))}

            <div className="border-t border-[#dde1e6] pt-3">
              <button className="bg-[#f5f5f5] border border-[#d5d7da] rounded-lg px-3.5 py-2 hover:bg-[#e9eaeb] transition-colors w-full">
                <span className="text-sm font-semibold text-[#252b37]">
                  Discover Business
                </span>
              </button>
            </div>
          </div>

          {/* Business Posts */}
          {businessPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-[#dde1e6] rounded-lg p-4 flex flex-col gap-4"
            >
              {/* Post Header */}
              <div className="flex items-start justify-between">
                <div className="flex gap-2.5 items-center">
                  <img
                    src={post.companyLogo}
                    alt={post.companyName}
                    className="w-10 h-10 rounded object-cover"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-[#414651]">
                      {post.companyName}
                    </p>
                    <p className="text-sm text-[#535862]">
                      {post.companyCategory}
                    </p>
                    <p className="text-xs text-[#535862]">{post.timeAgo}</p>
                  </div>
                </div>
                <button className="p-0 hover:bg-gray-100 rounded">
                  <MoreHorizontal className="w-5 h-5 text-[#717680]" />
                </button>
              </div>

              {/* Post Content */}
              <p className="text-base text-black">
                {post.content} <span className="text-[#a4a7ae]">... more</span>
              </p>

              {/* Divider */}
              <div className="border-t border-[#dde1e6]" />

              {/* Post Footer */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1 items-center">
                  <img
                    src={post.userAvatar}
                    alt="User"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
                <div className="flex gap-6 items-center">
                  <div className="flex gap-2 items-center">
                    <MessageSquare className="w-5 h-5 text-[#252b37]" />
                    <span className="text-base text-black">
                      {post.comments}
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <ThumbsUp className="w-5 h-5 text-[#252b37]" />
                    <span className="text-base text-black">
                      {post.reactions}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar - Business Recommendations */}
      </div>
    </div>
  );
}
