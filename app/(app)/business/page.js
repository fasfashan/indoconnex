"use client";

import { useState } from "react";
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

  // State for modal
  const [showPostAsModal, setShowPostAsModal] = useState(false);
  const [selectedPostAs, setSelectedPostAs] = useState("user"); // "user" or "business"

  // Dummy data for recommended businesses
  const recommendedBusinesses = [
    {
      id: 1,
      name: "Business Name",
      category: "Business Category",
      followers: 29,
      avatar: "/Avatar.png",
    },
    {
      id: 2,
      name: "Business Name",
      category: "Business Category",
      followers: 29,
      avatar: "/Avatar.png",
    },
    {
      id: 3,
      name: "Business Name",
      category: "Business Category",
      followers: 29,
      avatar: "/Avatar.png",
    },
  ];

  // Dummy data for business posts
  const businessPosts = [
    {
      id: 1,
      companyName: "Garena",
      companyCategory: "Entertainment Providers",
      companyLogo: "/Avatar.png",
      timeAgo: "3d ago",
      content:
        "You don't need to rip and replace your SAP setup to use AI. This playbook shows how to deploy AI into ECC, S/4HANA, or BTP landscapes using a low-code",
      likes: 200,
      comments: 200,
      userAvatar: "/Avatar.png",
    },
    {
      id: 2,
      companyName: "Garena",
      companyCategory: "Entertainment Providers",
      companyLogo: "/Avatar.png",
      timeAgo: "3d ago",
      content:
        "You don't need to rip and replace your SAP setup to use AI. This playbook shows how to deploy AI into ECC, S/4HANA, or BTP landscapes using a low-code",
      likes: 200,
      comments: 200,
      userAvatar: "/Avatar.png",
    },
    {
      id: 3,
      companyName: "Garena",
      companyCategory: "Entertainment Providers",
      companyLogo: "/Avatar.png",
      timeAgo: "3d ago",
      content:
        "You don't need to rip and replace your SAP setup to use AI. This playbook shows how to deploy AI into ECC, S/4HANA, or BTP landscapes using a low-code",
      likes: 200,
      comments: 200,
      userAvatar: "/Avatar.png",
    },
    {
      id: 4,
      companyName: "Garena",
      companyCategory: "Entertainment Providers",
      companyLogo: "/Avatar.png",
      timeAgo: "3d ago",
      content:
        "You don't need to rip and replace your SAP setup to use AI. This playbook shows how to deploy AI into ECC, S/4HANA, or BTP landscapes using a low-code",
      likes: 200,
      comments: 200,
      userAvatar: "/Avatar.png",
    },
    {
      id: 5,
      companyName: "Garena",
      companyCategory: "Entertainment Providers",
      companyLogo: "/Avatar.png",
      timeAgo: "3d ago",
      content:
        "You don't need to rip and replace your SAP setup to use AI. This playbook shows how to deploy AI into ECC, S/4HANA, or BTP landscapes using a low-code",
      likes: 200,
      comments: 200,
      userAvatar: "/Avatar.png",
    },
  ];

  return (
    <div className="flex flex-1 overflow-y-auto">
      <div className="flex max-w-5xl w-full gap-6 p-6 mx-auto">
        {/* Main Content - Left Column */}
        <section className="w-2/3 space-y-6">
          {/* Create Post Box */}
          <div className="bg-white border border-gray-200 shadow-xs rounded-lg p-6">
            <div className="flex gap-6">
              <img
                src={selectedPostAs === "user" ? "/Avatar.png" : "/Avatar.png"}
                alt="Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1 space-y-4">
                {/* Post As Selection */}

                {/* Input Field */}
                <div className="bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 flex items-center gap-2 cursor-pointer hover:border-gray-300">
                  <Edit2 className="w-5 h-5 text-gray-500" />
                  <span className="text-base font-medium text-gray-900">
                    What's in your mind??
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-6">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.667 1.667H5c-.917 0-1.659.75-1.659 1.666l-.007 13.334c0 .916.742 1.666 1.666 1.666h10c.917 0 1.667-.75 1.667-1.666V6.667l-5-5z"
                        stroke="currentColor"
                        strokeWidth="1.667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.667 1.667v5h5M13.333 10.833H6.667M13.333 14.167H6.667M8.333 7.5H6.667"
                        stroke="currentColor"
                        strokeWidth="1.667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm font-semibold">Article</span>
                  </button>

                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.833 3.333H4.167c-.92 0-1.667.746-1.667 1.667v10c0 .92.746 1.667 1.667 1.667h11.666c.92 0 1.667-.746 1.667-1.667V5c0-.92-.746-1.667-1.667-1.667z"
                        stroke="currentColor"
                        strokeWidth="1.667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.5 8.333l5 3.334-5 3.333V8.333z"
                        stroke="currentColor"
                        strokeWidth="1.667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm font-semibold">Video</span>
                  </button>

                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.833 2.5H4.167c-.92 0-1.667.746-1.667 1.667v11.666c0 .92.746 1.667 1.667 1.667h11.666c.92 0 1.667-.746 1.667-1.667V4.167c0-.92-.746-1.667-1.667-1.667z"
                        stroke="currentColor"
                        strokeWidth="1.667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.083 8.333a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zM17.5 12.5l-4.167-4.167L4.167 17.5"
                        stroke="currentColor"
                        strokeWidth="1.667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm font-semibold">Image</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Discover Business Page Widget */}
          <div className="bg-white border border-gray-200 shadow-xs rounded-lg p-6 space-y-3">
            <h2 className="text-base font-medium text-gray-900">
              Discover business Page
            </h2>

            {[
              {
                id: 1,
                name: "Murni Solusindo Nusantara",
                category: "IT Services",
                followers: 29,
              },
              {
                id: 2,
                name: "Murnicare",
                category: "Healthcare",
                followers: 29,
              },
              {
                id: 3,
                name: "Ergotron",
                category: "Office Equipment",
                followers: 29,
              },
            ].map((business, index) => (
              <div key={business.id}>
                <div className="flex items-center justify-between">
                  <Link
                    href="/business/murni-solusindo-nusantara"
                    className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                  >
                    <img
                      src="/Avatar.png"
                      alt="Business"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-gray-700">
                        {business.name}
                      </p>
                      <p className="text-xs text-gray-600">
                        {business.category}
                      </p>
                      <p className="text-xs text-gray-600">
                        {business.followers} followers
                      </p>
                    </div>
                  </Link>
                  <button className="flex items-center gap-2 text-red-700 hover:text-red-800">
                    <Plus className="w-5 h-5" />
                    <span className="text-sm font-semibold">Follow</span>
                  </button>
                </div>
                {index < 2 && <div className="border-t border-gray-200 my-3" />}
              </div>
            ))}

            <div className="border-t border-gray-200 pt-3">
              <button className="w-full bg-red-700 text-white text-sm font-semibold px-3.5 py-2 rounded-lg hover:bg-red-800">
                See All
              </button>
            </div>
          </div>

          {/* Business Posts Feed */}
          {businessPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-gray-200 shadow-xs rounded-lg p-4 space-y-4"
            >
              {/* Post Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={post.companyLogo}
                    alt={post.companyName}
                    className="w-10 h-10 rounded"
                  />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-gray-700">
                      {post.companyName}
                    </p>
                    <p className="text-xs text-gray-600">
                      {post.companyCategory}
                    </p>
                    <p className="text-xs text-gray-600">{post.timeAgo}</p>
                  </div>
                </div>
                <button>
                  <MoreHorizontal className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Post Content */}
              <p className="text-sm text-gray-900 leading-5">
                {post.content} <span className="text-gray-400">... more</span>
              </p>

              {/* Divider */}
              <div className="border-t border-gray-200" />

              {/* Post Actions */}
              <div className="flex items-center justify-between">
                <div
                  onClick={() => setShowPostAsModal(true)}
                  className="flex items-center gap-1"
                >
                  <img
                    src={post.userAvatar}
                    alt="User"
                    className="w-8 h-8 rounded-full"
                  />
                  <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-gray-900 hover:text-gray-700">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-sm">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-900 hover:text-gray-700">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm">{post.likes}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Sidebar - Right Column */}
        <aside className="w-1/3 space-y-3.5 sticky top-6 self-start">
          {/* Business Profile Card */}
          <div className="bg-white border border-gray-200 shadow-xs rounded-lg overflow-hidden">
            {/* Cover Photo */}
            <div className="h-25 bg-linear-to-br from-amber-200 to-orange-300" />

            {/* Profile Section */}
            <div className="relative px-4 pb-4">
              {/* Avatar */}
              <div className="absolute -top-8 left-6">
                <img
                  src="/Avatar.png"
                  alt="Business"
                  className="w-16 h-16 rounded-full border-4 border-white"
                />
              </div>

              {/* Business Info */}
              <div className="pt-10 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-medium text-gray-700">
                    Business Page Name
                  </h3>
                  <p className="text-sm text-gray-700">1281 Followers</p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-700">Profil viewers</p>
                  <p className="text-sm text-red-700 font-medium">12</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended for you Widget */}
          <div className="bg-white border border-gray-200 shadow-xs rounded-lg p-6 space-y-3">
            <h2 className="text-base font-medium text-gray-900">
              Recommended for you
            </h2>

            {recommendedBusinesses.map((business, index) => (
              <div key={business.id}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={business.avatar}
                      alt={business.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-gray-700">
                        {business.name}
                      </p>
                      <p className="text-xs text-gray-600">
                        {business.category}
                      </p>
                      <p className="text-xs text-gray-600">
                        {business.followers} followers
                      </p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-red-700 hover:text-red-800">
                    <Plus className="w-5 h-5" />
                    <span className="text-sm font-semibold">Follow</span>
                  </button>
                </div>
                {index < recommendedBusinesses.length - 1 && (
                  <div className="border-t border-gray-200 my-3" />
                )}
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* Modal - Select Post As */}
      {showPostAsModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-sm mx-4">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-base font-semibold text-gray-900">
                Comment, react, and repost as
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Comment, react, and repost as
              </p>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-4 space-y-3">
              {/* User Option */}
              <button
                onClick={() => {
                  setSelectedPostAs("user");
                  setShowPostAsModal(false);
                }}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                  selectedPostAs === "user"
                    ? "border-red-700 bg-red-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <img
                  src="/Avatar.png"
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">
                    User name
                  </p>
                </div>
                {selectedPostAs === "user" && (
                  <svg
                    className="ml-auto w-5 h-5 text-red-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>

              {/* Business Option */}
              <button
                onClick={() => {
                  setSelectedPostAs("business");
                  setShowPostAsModal(false);
                }}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                  selectedPostAs === "business"
                    ? "border-red-700 bg-red-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <img
                  src="/Avatar.png"
                  alt="Business"
                  className="w-10 h-10 rounded"
                />
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">
                    Business name
                  </p>
                </div>
                {selectedPostAs === "business" && (
                  <svg
                    className="ml-auto w-5 h-5 text-red-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-gray-200 flex gap-3 justify-end">
              <button
                onClick={() => setShowPostAsModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowPostAsModal(false)}
                className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Component for users WITHOUT business page (Discover view)
function DiscoverBusinessView() {
  // Dummy business data for Featured Business widget
  const featuredBusinesses = [
    {
      id: 1,
      name: "Business Name",
      category: "Business Category",
      followers: 29,
      logo: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Business Name",
      category: "Business Category",
      followers: 29,
      logo: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "Business Name",
      category: "Business Category",
      followers: 29,
      logo: "https://i.pravatar.cc/150?img=3",
    },
  ];

  // Dummy business data for Recommended widget
  const recommendedBusinesses = [
    {
      id: 1,
      name: "Business Name",
      category: "Business Category",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
      id: 2,
      name: "Business Name",
      category: "Business Category",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 3,
      name: "Business Name",
      category: "Business Category",
      avatar: "https://i.pravatar.cc/150?img=6",
    },
  ];

  // Business posts data
  const businessPosts = [
    {
      id: 1,
      companyName: "Murni Solusindo Nusantara ",
      companyCategory: "Entertainment ",
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
      companyName: "Garensadsada",
      companyCategory: "Entertainment Providers",
      companyLogo: "https://i.pravatar.cc/150?img=10",
      timeAgo: "3d ago",
      content:
        "You don't need to rip and replace your SAP setup to use AI. This playbook shows how to deploy AI into ECC, S/4HANA, or BTP landscapes using a low-code",
      reactions: 200,
      comments: 200,
      userAvatar: "https://i.pravatar.cc/150?img=11",
    },
    {
      id: 3,
      companyName: "Garena",
      companyCategory: "Entertainment Providers",
      companyLogo: "https://i.pravatar.cc/150?img=12",
      timeAgo: "3d ago",
      content:
        "You don't need to rip and replace your SAP setup to use AI. This playbook shows how to deploy AI into ECC, S/4HANA, or BTP landscapes using a low-code",
      reactions: 200,
      comments: 200,
      userAvatar: "https://i.pravatar.cc/150?img=13",
    },
  ];

  return (
    <div className="flex flex-1 overflow-y-auto">
      <div className="flex max-w-5xl w-full gap-6 p-6 mx-auto">
        {/* Left Column - Main Content (2/3) */}
        <section className="w-2/3 space-y-6">
          {/* Discover Business Pages Card */}
          <div className="bg-white border border-gray-200 shadow-xs rounded-lg p-6">
            <h2 className="text-base font-semibold text-gray-900 mb-2">
              Discover Business Pages
            </h2>
            <p className="text-base text-gray-600 mb-4">
              Share stories, ideas, and updates that inspire your network.
            </p>
            <Link
              href="/business/create"
              className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              <Plus className="w-5 h-5" />
              Create Business Page
            </Link>
          </div>

          {/* Discover Business Page Widget */}
          <div className="bg-white border border-gray-200 shadow-xs rounded-lg p-6">
            <h2 className="text-base font-semibold text-gray-900 mb-4">
              Discover business Page
            </h2>

            <div className="space-y-4">
              {featuredBusinesses.map((business) => (
                <div key={business.id}>
                  <div className="flex items-start justify-between">
                    <div className="flex gap-3 items-start">
                      <img
                        src={business.logo}
                        alt={business.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-gray-700">
                          {business.name}
                        </p>
                        <p className="text-xs text-gray-600">
                          {business.category}
                        </p>
                        <p className="text-xs text-gray-500">
                          {business.followers} followers
                        </p>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-red-700 hover:text-red-800 text-sm font-semibold">
                      <Plus className="w-5 h-5" />
                      Follow
                    </button>
                  </div>
                  {business.id !== featuredBusinesses.length && (
                    <div className="border-t border-gray-200 mt-4" />
                  )}
                </div>
              ))}
            </div>

            <button className="w-full mt-4 px-3.5 py-2 bg-red-700 hover:bg-red-800 text-white rounded-lg text-sm font-semibold transition-colors">
              See All
            </button>
          </div>

          {/* Business Posts Feed */}
          {businessPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-gray-200 shadow-xs rounded-lg p-6"
            >
              {/* Post Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-2.5">
                  <img
                    src={post.companyLogo}
                    alt={post.companyName}
                    className="w-10 h-10 object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-700">
                      {post.companyName}
                    </p>
                    <p className="text-xs text-gray-600">
                      {post.companyCategory}
                    </p>
                    <p className="text-xs text-gray-500">{post.timeAgo}</p>
                  </div>
                </div>
                <button>
                  <MoreHorizontal className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Post Content */}
              <p className="text-sm text-gray-900 leading-5 mb-4">
                {post.content} <span className="text-gray-500">... more</span>
              </p>

              {/* Divider */}
              <div className="border-t border-gray-200 mb-4" />

              {/* Post Actions */}
              <div className="flex items-center justify-between">
                <img
                  src={post.userAvatar}
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-base">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-base">{post.reactions}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Right Column - Widgets (1/3) */}
        <aside className="w-1/3 space-y-6">
          {/* Recommended Business Card */}
          <div className="bg-white border border-gray-200 shadow-xs rounded-lg p-6 sticky top-6 self-start">
            <h2 className="text-base font-semibold text-gray-900 mb-4">
              Recommended for you
            </h2>

            <div className="space-y-3">
              {recommendedBusinesses.map((business) => (
                <div key={business.id}>
                  <div className="flex items-start justify-between">
                    <div className="flex gap-3 items-start">
                      <img
                        src={business.avatar}
                        alt={business.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-gray-700">
                          {business.name}
                        </p>
                        <p className="text-xs text-gray-600">
                          {business.category}
                        </p>
                        <p className="text-xs text-gray-500">29 followers</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-red-700 hover:text-red-800 text-sm font-semibold">
                      <Plus className="w-5 h-5" />
                      Follow
                    </button>
                  </div>
                  {business.id !== recommendedBusinesses.length && (
                    <div className="border-t border-gray-200 mt-3" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
