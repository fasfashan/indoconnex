"use client";

import { useState } from "react";
import {
  ImageIcon,
  MoreHorizontal,
  ThumbsUp,
  Plus,
  MessageSquare,
  Edit2,
  FileText,
  Video,
} from "lucide-react";
import Image from "next/image";

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
      comments: 200,
      avatar: "/Avatar.png",
    },
    {
      id: 2,
      author: {
        name: "Muhamad Fasha Fadillah ",
        category: "Web Designer",
        avatar:
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=100&h=100&fit=crop",
      },
      content:
        "Exciting news! We're launching our new seller dashboard with AI-powered analytics. Track your store performance in real-time and get personalized recommendations...",
      timeAgo: "5d ago",
      likes: 350,
      comments: 89,
      avatar: "/Avatar.png",
    },
    {
      id: 3,
      author: {
        name: "Gojek",
        category: "Transportation & Delivery",
        avatar:
          "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=100&h=100&fit=crop",
      },
      content:
        "Proud to announce that we've reached 50 million monthly active users! Thank you for trusting us with your daily transportation and food delivery needs...",
      timeAgo: "1w ago",
      likes: 520,
      comments: 145,
      avatar: "/Avatar.png",
    },
    {
      id: 4,
      author: {
        name: "Shopee",
        category: "E-commerce Marketplace",
        avatar:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
      },
      content:
        "Flash sale alert! 🔥 Up to 90% off on selected items this weekend. Don't miss out on amazing deals from your favorite brands...",
      timeAgo: "2w ago",
      likes: 890,
      comments: 234,
      avatar: "/Avatar.png",
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

  const [featuredBusiness] = useState([
    {
      id: 1,
      name: "Tech Innovators",
      category: "Technology Solutions",
      followers: 29,
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
    },
    {
      id: 2,
      name: "Creative Agency",
      category: "Design & Marketing",
      followers: 45,
      avatar:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=100&h=100&fit=crop",
    },
    {
      id: 3,
      name: "Food Paradise",
      category: "Restaurant & Catering",
      followers: 78,
      avatar:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=100&h=100&fit=crop",
    },
  ]);

  return (
    <div className="flex flex-1 overflow-y-auto">
      <div className="flex max-w-5xl w-full gap-6 p-6 mx-auto">
        {/* Main Feed Column - 65% */}
        <div className="w-2/3 space-y-5">
          {/* Create Post Box */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-xs">
            <div className="flex gap-6 items-start">
              <Image
                src="/Avatar.png"
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex-1 flex flex-col gap-4">
                {/* Input Box */}
                <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center gap-2 cursor-pointer hover:bg-gray-50 transition-colors">
                  <Edit2 className="w-5 h-5 text-gray-600" />
                  <span className="text-base text-gray-900">
                    What&apos;s in your mind?
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <FileText className="w-5 h-5" />
                    <span className="text-sm font-semibold">Article</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <Video className="w-5 h-5" />
                    <span className="text-sm font-semibold">Video</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <ImageIcon className="w-5 h-5" />
                    <span className="text-sm font-semibold">Image</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Feed Posts */}
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white border shadow-xs border-gray-200 rounded-lg p-4 space-y-4"
            >
              {/* Post Header */}
              <div className="flex items-start justify-between">
                <div className="flex gap-2.5 items-center">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-gray-700">
                      {post.author.name}
                    </p>
                    <p className="text-xs text-gray-600">
                      {post.author.category}
                    </p>
                    <p className="text-xs text-gray-600">{post.timeAgo}</p>
                  </div>
                </div>
                <button className="text-gray-600 hover:text-gray-900">
                  <MoreHorizontal size={20} />
                </button>
              </div>

              {/* Post Content */}
              <p className="text-sm text-black leading-6">
                {post.content}{" "}
                <span className="text-gray-400 hover:underline cursor-pointer">
                  more
                </span>
              </p>

              {/* Divider */}
              <div className="border-t border-gray-200" />

              {/* Post Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Image
                    src={post.avatar}
                    alt="Post Avatar"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors">
                    <MessageSquare size={16} />
                    <span className="text-sm">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors">
                    <ThumbsUp size={16} />
                    <span className="text-sm">{post.likes}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Featured Business Section */}
        </div>

        {/* Right Sidebar - 35% */}
        <div className="w-1/3 space-y-6">
          {/* Profile Card */}
          <div className="bg-white border shadow-xs border-gray-200 rounded-lg overflow-hidden sticky top-6 self-start z-10">
            {/* Cover Photo */}
            <Image
              src="/cover.jpg"
              alt="Cover Photo"
              width={400}
              height={100}
              className="w-full h-24 object-cover"
            />
            {/* Profile Avatar */}
            <div className="relative px-4 pb-4 pt-10">
              <Image
                src="/Avatar.png"
                alt="User Avatar"
                width={64}
                height={64}
                className="absolute -top-8 left-4 rounded-full border-4 border-white"
              />

              {/* Profile Info */}
              <div className="space-y-1 mb-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  Farhan Naufal
                </h3>
                <p className="text-sm text-gray-700">PT Mencari Cinta Sejati</p>
              </div>

              {/* Profile Stats */}
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-700">Profile viewers</span>
                <span className="text-red-500 font-medium">12</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-3 shadow-xs">
            <h2 className="text-base font-medium text-black">
              Recommended for you
            </h2>

            {featuredBusiness.map((business, index) => (
              <div key={business.id}>
                <div className="flex items-center justify-between py-3">
                  <div className="flex  gap-3">
                    <img
                      src={business.avatar}
                      alt={business.name}
                      className="w-10 h-10 rounded-full object-cover"
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
                  <button className=" bg-white  text-red-700  border-gray-200 rounded-lg text-sm font-semibold hover:text-red-800 flex items-center gap-2 transition-colors">
                    <Plus className="w-5 h-5" />
                    Follow
                  </button>
                </div>
                {index < featuredBusiness.length - 1 && (
                  <div className="border-t border-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
