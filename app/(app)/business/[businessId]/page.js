"use client";

import { use } from "react";
import { MoreHorizontal, ThumbsUp } from "lucide-react";
import Link from "next/link";

export default function BusinessDetailPage({ params }) {
  const { businessId } = use(params);

  // Mock business data - bisa diganti dengan fetch dari API
  const businessData = {
    id: businessId,
    name: "Murni Solusindo Nusantara",
    category: "IT Services & Consulting",
    tagline: "Empowering Business Through Technology Solutions",
    avatar: "/Avatar.png",
    coverPhoto:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",
  };

  // Mock posts data
  const businessPosts = [
    {
      id: 1,
      companyName: businessData.name,
      companyCategory: businessData.category,
      companyLogo: businessData.avatar,
      timeAgo: "3d ago",
      content:
        "You don't need to rip and replace your SAP setup to use AI. This playbook shows how to deploy AI into ECC, S/4HANA, or BTP landscapes using a low-code",
      likes: 200,
    },
    {
      id: 2,
      companyName: businessData.name,
      companyCategory: businessData.category,
      companyLogo: businessData.avatar,
      timeAgo: "3d ago",
      content:
        "You don't need to rip and replace your SAP setup to use AI. This playbook shows how to deploy AI into ECC, S/4HANA, or BTP landscapes using a low-code",
      likes: 200,
    },
  ];

  return (
    <div className="flex flex-1 overflow-y-auto bg-[#f9f9f9] my-10">
      <div className="max-w-[1050px]  w-full mx-auto">
        {/* Cover Photo */}
        <div className="h-[205px] bg-[#dde1e6] rounded-tl-lg rounded-tr-lg overflow-hidden">
          {businessData.coverPhoto && (
            <img
              src={businessData.coverPhoto}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Business Profile Card */}
        <div className="bg-white border-x border-b border-[#d5d7da] rounded-bl-lg rounded-br-lg">
          {/* Business Avatar - Positioned absolute over cover */}
          <div className="relative px-6 -mt-12">
            <img
              src={businessData.avatar}
              alt={businessData.name}
              className="w-[100px] h-[100px] border-2 border-white rounded-full bg-white"
            />
          </div>

          {/* Business Header Info */}
          <div className="px-6 py-6 border-b border-[#dde1e6]">
            <div className="flex items-start justify-between mb-6">
              <div className="space-y-1">
                <h1 className="text-lg font-medium text-[#414651]">
                  {businessData.name}
                </h1>
                <div className="flex items-center gap-1 text-sm text-[#414651]">
                  <span>{businessData.tagline}</span>
                  <span>•</span>
                  <span>{businessData.category}</span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Link
                  href={`/business/${businessId}/claim`}
                  className="text-sm text-[#414651] underline hover:text-gray-900"
                >
                  Owner of this place?
                </Link>
                <button>
                  <MoreHorizontal className="w-6 h-6 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex items-center gap-6">
              <div className="border-b border-black pb-1">
                <p className="text-sm font-medium text-black">Feeds</p>
              </div>
              <button className="pb-1">
                <p className="text-sm text-[#414651] hover:text-black">About</p>
              </button>
              <button className="pb-1">
                <p className="text-sm text-[#414651] hover:text-black">
                  Products & Services
                </p>
              </button>
              <button className="pb-1">
                <p className="text-sm text-[#414651] hover:text-black">
                  Gallery
                </p>
              </button>
              <button className="pb-1">
                <p className="text-sm text-[#414651] hover:text-black">
                  Job offering
                </p>
              </button>
            </div>
          </div>

          {/* Posts Feed */}
        </div>
        <div className=" space-y-5 mt-5">
          {businessPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-[#d5d7da] rounded-lg p-4 space-y-4"
            >
              {/* Post Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={post.companyLogo}
                    alt={post.companyName}
                    className="w-10 h-10"
                  />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-[#414651]">
                      {post.companyName}
                    </p>
                    <p className="text-sm text-[#535862]">
                      {post.companyCategory}
                    </p>
                    <p className="text-xs text-[#535862]">{post.timeAgo}</p>
                  </div>
                </div>
                <button>
                  <MoreHorizontal className="w-5 h-5 text-[#717680]" />
                </button>
              </div>

              {/* Post Content */}
              <p className="text-base text-black leading-6">
                {post.content} <span className="text-[#a4a7ae]">... more</span>
              </p>

              {/* Divider */}
              <div className="border-t border-[#d5d7da]" />

              {/* Post Actions */}
              <div className="flex items-center gap-2">
                <ThumbsUp className="w-5 h-5 text-black" />
                <span className="text-base text-black">{post.likes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
