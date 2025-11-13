"use client";

import { useState } from "react";
import { MoreHorizontal, MessageSquare, ThumbsUp, Edit2 } from "lucide-react";

export default function BusinessDashboard() {
  const [viewMode, setViewMode] = useState("admin");
  const [activeTab, setActiveTab] = useState("posts");

  const businessPosts = [
    {
      id: 1,
      companyName: "Business Name",
      companyCategory: "Business Category",
      timeAgo: "3d ago",
      content:
        "You don't need to rip and replace your SAP setup to use AI. This playbook shows how to deploy AI into ECC, S/4HANA, or BTP landscapes using a low-code",
      likes: 200,
      comments: 200,
    },
    {
      id: 2,
      companyName: "Business Name",
      companyCategory: "Business Category",
      timeAgo: "3d ago",
      content:
        "You don't need to rip and replace your SAP setup to use AI. This playbook shows how to deploy AI into ECC, S/4HANA, or BTP landscapes using a low-code",
      likes: 200,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f2f4f8]">
      {viewMode === "admin" ? (
        <>
          <div className="relative">
            <div className="h-[205px] bg-[#dde1e6] rounded-tl-lg rounded-tr-lg" />
            <div className="absolute left-8 -bottom-12 w-[100px] h-[100px] bg-[#dde1e6] border-4 border-white" />
          </div>

          <div className="bg-white border-b border-[#d5d7da] px-8 pt-16 pb-6">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1">
                <h1 className="text-lg font-medium text-[#414651]">
                  Business Name
                </h1>
                <div className="flex items-center gap-1 text-sm text-[#414651]">
                  <span>Business tagline</span>
                  <span>•</span>
                  <span>Business Category</span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <p className="text-xs text-[#414651]">
                  You are viewing this page as a {viewMode}.{" "}
                  <span
                    className="underline cursor-pointer hover:text-black"
                    onClick={() => {
                      const newMode = viewMode === "admin" ? "member" : "admin";
                      setViewMode(newMode);
                      setActiveTab(newMode === "admin" ? "posts" : "feeds");
                    }}
                  >
                    View as {viewMode === "admin" ? "Member" : "Admin"}
                  </span>
                </p>
                <button>
                  <MoreHorizontal className="w-6 h-6 text-[#535862]" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-6 px-8 pt-6">
            <div className="w-[180px] bg-white border border-[#d5d7da] rounded-lg p-6 h-fit">
              <div className="flex flex-col gap-6">
                <button
                  onClick={() => setActiveTab("posts")}
                  className={`text-sm pb-1 text-left ${
                    activeTab === "posts"
                      ? "border-b border-black text-black font-medium"
                      : "text-[#414651]"
                  }`}
                >
                  Posts
                </button>
                <button
                  onClick={() => setActiveTab("analytics")}
                  className={`text-sm pb-1 text-left ${
                    activeTab === "analytics"
                      ? "border-b border-black text-black font-medium"
                      : "text-[#414651]"
                  }`}
                >
                  Analytics
                </button>
                <button
                  onClick={() => setActiveTab("jobs")}
                  className={`text-sm pb-1 text-left ${
                    activeTab === "jobs"
                      ? "border-b border-black text-black font-medium"
                      : "text-[#414651]"
                  }`}
                >
                  Jobs
                </button>
                <button
                  onClick={() => setActiveTab("edit")}
                  className={`text-sm pb-1 text-left ${
                    activeTab === "edit"
                      ? "border-b border-black text-black font-medium"
                      : "text-[#414651]"
                  }`}
                >
                  Edit Page
                </button>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-5">
              <div className="bg-white border border-[#d5d7da] rounded-lg p-6 flex items-center gap-6">
                <div className="w-10 h-10 rounded-full bg-[#dde1e6]" />
                <div className="flex-1 bg-white border border-[#d5d7da] rounded-lg px-4 py-3 flex items-center gap-2">
                  <Edit2 className="w-5 h-5 text-[#717680]" />
                  <span className="text-base text-[#717680]">
                    Create a post...
                  </span>
                </div>
              </div>

              {businessPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white border border-[#d5d7da] rounded-lg p-4 flex flex-col gap-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#dde1e6]" />
                      <div className="flex flex-col">
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

                  <p className="text-base text-black leading-6">
                    {post.content}{" "}
                    <span className="text-[#a4a7ae]">... more</span>
                  </p>

                  <div className="border-t border-[#d5d7da]" />

                  {post.comments ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <div className="w-8 h-8 rounded-full bg-[#dde1e6]" />
                        <svg
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#717680"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="w-5 h-5" />
                          <span className="text-base text-black">
                            {post.comments}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ThumbsUp className="w-5 h-5" />
                          <span className="text-base text-black">
                            {post.likes}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <ThumbsUp className="w-5 h-5" />
                      <span className="text-base text-black">{post.likes}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-1 overflow-y-auto bg-[#f9f9f9] my-10">
          <div className="max-w-[1050px] w-full mx-auto">
            <div className="h-[205px] bg-[#dde1e6] rounded-tl-lg rounded-tr-lg overflow-hidden" />

            <div className="bg-white border-x border-b border-[#d5d7da] rounded-bl-lg rounded-br-lg">
              <div className="relative px-6 -mt-12">
                <div className="w-[100px] h-[100px] bg-[#dde1e6] border-2 border-white rounded-full" />
              </div>

              <div className="px-6 py-6 border-b border-[#dde1e6]">
                <div className="flex items-start justify-between mb-6">
                  <div className="space-y-1">
                    <h1 className="text-lg font-medium text-[#414651]">
                      Business Name
                    </h1>
                    <div className="flex items-center gap-1 text-sm text-[#414651]">
                      <span>Business tagline</span>
                      <span>•</span>
                      <span>Business Category</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <p className="text-xs text-[#414651]">
                      You are viewing this page as a {viewMode}.{" "}
                      <span
                        className="underline cursor-pointer hover:text-black"
                        onClick={() => {
                          const newMode =
                            viewMode === "admin" ? "member" : "admin";
                          setViewMode(newMode);
                          setActiveTab(newMode === "admin" ? "posts" : "feeds");
                        }}
                      >
                        View as {viewMode === "admin" ? "Member" : "Admin"}
                      </span>
                    </p>
                    <button>
                      <MoreHorizontal className="w-6 h-6 text-gray-500" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <button
                    onClick={() => setActiveTab("feeds")}
                    className={`pb-1 ${
                      activeTab === "feeds" ? "border-b border-black" : ""
                    }`}
                  >
                    <p
                      className={`text-sm ${
                        activeTab === "feeds"
                          ? "font-medium text-black"
                          : "text-[#414651] hover:text-black"
                      }`}
                    >
                      Feeds
                    </p>
                  </button>
                  <button
                    onClick={() => setActiveTab("about")}
                    className="pb-1"
                  >
                    <p className="text-sm text-[#414651] hover:text-black">
                      About
                    </p>
                  </button>
                  <button
                    onClick={() => setActiveTab("products")}
                    className="pb-1"
                  >
                    <p className="text-sm text-[#414651] hover:text-black">
                      Products & Services
                    </p>
                  </button>
                  <button
                    onClick={() => setActiveTab("gallery")}
                    className="pb-1"
                  >
                    <p className="text-sm text-[#414651] hover:text-black">
                      Gallery
                    </p>
                  </button>
                  <button
                    onClick={() => setActiveTab("joboffering")}
                    className="pb-1"
                  >
                    <p className="text-sm text-[#414651] hover:text-black">
                      Job offering
                    </p>
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-5 mt-5">
              {businessPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white border border-[#d5d7da] rounded-lg p-4 space-y-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 bg-[#dde1e6]" />
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

                  <p className="text-base text-black leading-6">
                    {post.content}{" "}
                    <span className="text-[#a4a7ae]">... more</span>
                  </p>

                  <div className="border-t border-[#d5d7da]" />

                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-5 h-5 text-black" />
                    <span className="text-base text-black">{post.likes}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
