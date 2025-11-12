"use client";

import { useState } from "react";
import { MoreHorizontal, MessageSquare, ThumbsUp, Edit2 } from "lucide-react";

export default function BusinessDashboard() {
  const [viewMode, setViewMode] = useState("admin"); // 'admin' or 'member'
  const [activeTab, setActiveTab] = useState(
    viewMode === "admin" ? "posts" : "feeds"
  );

  return (
    <div className="min-h-screen bg-[#f2f4f8]">
      {/* Cover Photo */}
      <div className="relative">
        <div className="h-[205px] bg-[#dde1e6] rounded-tl-lg rounded-tr-lg" />

        {/* Business Logo */}
        <div className="absolute left-8 -bottom-12 w-[100px] h-[100px] bg-[#dde1e6] border-4 border-white" />
      </div>

      {/* Business Info Header */}
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

      {/* Main Content */}
      <div className="flex gap-6 px-8 pt-6">
        {/* Left Sidebar - Tabs */}
        <div className="w-[180px] bg-white border border-[#d5d7da] rounded-lg p-6 h-fit">
          <div className="flex flex-col gap-6">
            {viewMode === "admin" ? (
              <>
                {/* Admin Tabs */}
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
              </>
            ) : (
              <>
                {/* Member Tabs */}
                <button
                  onClick={() => setActiveTab("feeds")}
                  className={`text-sm pb-1 text-left ${
                    activeTab === "feeds"
                      ? "border-b border-black text-black font-medium"
                      : "text-[#414651]"
                  }`}
                >
                  Feeds
                </button>
                <button
                  onClick={() => setActiveTab("about")}
                  className={`text-sm pb-1 text-left ${
                    activeTab === "about"
                      ? "border-b border-black text-black font-medium"
                      : "text-[#414651]"
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => setActiveTab("products")}
                  className={`text-sm pb-1 text-left ${
                    activeTab === "products"
                      ? "border-b border-black text-black font-medium"
                      : "text-[#414651]"
                  }`}
                >
                  Products & Services
                </button>
                <button
                  onClick={() => setActiveTab("gallery")}
                  className={`text-sm pb-1 text-left ${
                    activeTab === "gallery"
                      ? "border-b border-black text-black font-medium"
                      : "text-[#414651]"
                  }`}
                >
                  Gallery
                </button>
                <button
                  onClick={() => setActiveTab("joboffering")}
                  className={`text-sm pb-1 text-left ${
                    activeTab === "joboffering"
                      ? "border-b border-black text-black font-medium"
                      : "text-[#414651]"
                  }`}
                >
                  Job offering
                </button>
              </>
            )}
          </div>
        </div>

        {/* Right Content - Feed */}
        <div className="flex-1 flex flex-col gap-5">
          {/* Create Post - Only show in admin mode */}
          {viewMode === "admin" && (
            <div className="bg-white border border-[#d5d7da] rounded-lg p-6 flex items-center gap-6">
              <div className="w-10 h-10 rounded-full bg-[#dde1e6]" />
              <div className="flex-1 bg-white border border-[#d5d7da] rounded-lg px-4 py-3 flex items-center gap-2">
                <Edit2 className="w-5 h-5 text-[#717680]" />
                <span className="text-base text-[#717680]">
                  Create a post...
                </span>
              </div>
            </div>
          )}

          {/* Post Card 1 */}
          <div className="bg-white border border-[#d5d7da] rounded-lg p-4 flex flex-col gap-4">
            {/* Post Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#dde1e6]" />
                <div className="flex flex-col">
                  <p className="text-sm font-semibold text-[#414651]">
                    Business Name
                  </p>
                  <p className="text-sm text-[#535862]">Business Category</p>
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
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
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
                  <span className="text-base text-black">200</span>
                </div>
                <div className="flex items-center gap-2">
                  <ThumbsUp className="w-5 h-5" />
                  <span className="text-base text-black">200</span>
                </div>
              </div>
            </div>
          </div>

          {/* Post Card 2 */}
          <div className="bg-white border border-[#d5d7da] rounded-lg p-4 flex flex-col gap-4">
            {/* Post Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#dde1e6]" />
                <div className="flex flex-col">
                  <p className="text-sm font-semibold text-[#414651]">
                    Business Name
                  </p>
                  <p className="text-sm text-[#535862]">Business Category</p>
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
            <div className="flex items-center gap-2">
              <ThumbsUp className="w-5 h-5" />
              <span className="text-base text-black">200</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
