"use client";

import { useState } from "react";
import { ImageDown, MoreHorizontal, ThumbsUp, Plus } from "lucide-react";

export default function FeedPage() {
  const [posts] = useState([
    {
      id: 1,
      author: {
        name: "Garena",
        category: "Entertainment Providers",
        avatar:
          "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop",
      },
      content:
        "You don't need to rip and replace your SAP setup to use AI. This playbook shows how to deploy AI into ECC, S/4HANA, or BTP landscapes using a low-code...",
      timeAgo: "3d ago",
      likes: 200,
    },
  ]);

  const [recommendations] = useState([
    {
      id: 1,
      name: "Garena",
      location: "Indonesia",
      coverImage:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=200&fit=crop",
      avatar:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop",
    },
    {
      id: 2,
      name: "Tokopedia",
      location: "Indonesia",
      coverImage:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=200&fit=crop",
      avatar:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=100&h=100&fit=crop",
    },
    {
      id: 3,
      name: "Gojek",
      location: "Indonesia",
      coverImage:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=200&fit=crop",
      avatar:
        "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=100&h=100&fit=crop",
    },
  ]);

  const [peopleToFollow] = useState([
    {
      id: 1,
      name: "Renault Trucks (Volvo Group)",
      category: "Manufacture & Supplies",
    },
    {
      id: 2,
      name: "Scania AB (Volkswagen Group)",
      category: "Manufacture & Supplies",
    },
    {
      id: 3,
      name: "DAF Trucks (PACCAR Inc.)",
      category: "Manufacture & Supplies",
    },
    {
      id: 4,
      name: "MAN Truck & Bus (Volkswage...",
      category: "Manufacture & Supplies",
    },
  ]);

  return (
    <div className="flex gap-6 items-start max-w-[1400px] mx-auto">
      {/* Main Feed Column */}
      <div className="flex-1">
        {/* Create Post Box */}
        <div className="bg-white border border-[#d5d7da] rounded-lg p-6 mb-4">
          <div className="flex gap-6 items-center">
            <div className="w-10 h-10 rounded-full bg-[#dde1e6]" />
            <div className="flex-1 flex items-center gap-2 bg-white border border-[#d5d7da] rounded-lg px-3.5 py-2.5">
              <ImageDown size={20} className="text-[#717680]" />
              <span className="text-base text-[#717680]">Create a post...</span>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="h-px bg-[#d5d7da] mb-4" />

        {/* Feed Posts */}
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white border border-[#d5d7da] rounded-lg p-4 mb-4"
          >
            {/* Post Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex gap-2.5 items-center">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-[#414651]">
                    {post.author.name}
                  </p>
                  <p className="text-sm text-[#535862]">
                    {post.author.category}
                  </p>
                  <p className="text-xs text-[#535862]">{post.timeAgo}</p>
                </div>
              </div>
              <button className="text-[#717680]">
                <MoreHorizontal size={20} />
              </button>
            </div>

            {/* Post Content */}
            <p className="text-base text-[#21272a] mb-4">
              {post.content} <span className="text-[#a4a7ae]">more</span>
            </p>

            {/* Horizontal Divider */}
            <div className="h-px bg-[#d5d7da] mb-4" />

            {/* Post Actions */}
            <div className="flex gap-2 items-center">
              <ThumbsUp size={20} className="text-[#21272a]" />
              <span className="text-base text-[#21272a]">{post.likes}</span>
            </div>
          </div>
        ))}

        {/* Business Pages Recommendation */}
        <div className="bg-white border border-[#d5d7da] rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base text-[#21272a]">
              Business Pages Recommendation
            </h3>
            <button className="flex items-center gap-2 text-sm font-semibold text-[#414651]">
              <Plus size={20} />
              Create business
            </button>
          </div>

          <div className="h-px bg-[#d5d7da] mb-4" />

          {/* Business Cards Grid */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {recommendations.map((business) => (
              <div
                key={business.id}
                className="border border-[#d5d7da] rounded-lg overflow-hidden"
              >
                {/* Cover Image */}
                <div className="relative h-[100px]">
                  <img
                    src={business.coverImage}
                    alt={business.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Avatar Overlay */}
                  <img
                    src={business.avatar}
                    alt={business.name}
                    className="absolute -bottom-5 left-5 w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                </div>

                {/* Content */}
                <div className="px-6 pt-6 pb-4">
                  <div className="flex gap-1 items-start text-sm mb-2">
                    <span className="font-semibold text-[#414651]">
                      {business.name}
                    </span>
                    <span className="text-[#535862]">
                      • {business.location}
                    </span>
                  </div>

                  {/* Follow Button */}
                  <button className="w-full bg-[#f5f5f5] border border-[#d5d7da] rounded-lg px-3.5 py-2 flex items-center justify-center gap-2 hover:bg-[#e9eaeb] transition-colors">
                    <Plus size={20} className="text-[#252b37]" />
                    <span className="text-sm font-semibold text-[#252b37]">
                      Follow
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="h-px bg-[#d5d7da] mb-4" />

          {/* View All Button */}
          <button className="w-full text-sm font-semibold text-[#21272a] py-2 hover:underline">
            View all recommendation
          </button>
        </div>
      </div>

      {/* Right Sidebar - Recommended to Follow */}
    </div>
  );
}
