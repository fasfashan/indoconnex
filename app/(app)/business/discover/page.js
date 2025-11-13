"use client";

import { useState } from "react";
import { ChevronDown, Search, Plus } from "lucide-react";
import Link from "next/link";

export default function DiscoverBusinessPage() {
  const [selectedLocation, setSelectedLocation] = useState("Location");
  const [selectedCategory, setSelectedCategory] = useState("Business Category");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for featured businesses
  const featuredBusinesses = [
    {
      id: 1,
      name: "Murni Solusindo Nusantara",
      slug: "murni-solusindo-nusantara",
      tagline: "IT Solutions Provider",
      category: "Technology",
      location: "Indonesia",
      followers: 29,
      description:
        "Renault Trucks is a manufacturer of trucks and military vehicles headquartered in Saint-Priest near Lyon, France.",
      logo: "/placeholder-logo.png",
    },
    {
      id: 2,
      name: "IndoConnex",
      slug: "indoconnex",
      tagline: "Business Network",
      category: "Networking",
      location: "Indonesia",
      followers: 45,
      description:
        "Connecting Indonesian businesses globally through innovative networking solutions and partnerships.",
      logo: "/placeholder-logo.png",
    },
    {
      id: 3,
      name: "Tech Innovations",
      slug: "tech-innovations",
      tagline: "Digital Transformation",
      category: "Technology",
      location: "Indonesia",
      followers: 67,
      description:
        "Leading digital transformation initiatives for businesses across Southeast Asia.",
      logo: "/placeholder-logo.png",
    },
    {
      id: 4,
      name: "Green Solutions",
      slug: "green-solutions",
      tagline: "Sustainable Business",
      category: "Environment",
      location: "Indonesia",
      followers: 34,
      description:
        "Providing eco-friendly solutions for businesses committed to sustainability and environmental responsibility.",
      logo: "/placeholder-logo.png",
    },
    {
      id: 5,
      name: "Food Industry Co",
      slug: "food-industry-co",
      tagline: "Quality Food Products",
      category: "Food & Beverage",
      location: "Indonesia",
      followers: 89,
      description:
        "Manufacturing and distributing premium food products across Indonesia and international markets.",
      logo: "/placeholder-logo.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <div className="max-w-[1440px] mx-auto px-20 py-10">
        <div className="flex gap-6">
          {/* Sidebar Filter */}
          <div className="w-[345px] shrink-0">
            <div className="bg-white border border-[#d5d7da] rounded-lg p-6">
              <h2 className="text-base font-medium text-black mb-3">
                Discover Business
              </h2>

              <div className="flex flex-col gap-6">
                {/* Location Dropdown */}
                <div className="flex flex-col gap-6">
                  <button className="bg-white border border-[#d5d7da] rounded-lg px-4 py-2.5 flex items-center justify-between w-full hover:bg-gray-50 transition-colors">
                    <span className="text-sm font-semibold text-[#414651]">
                      {selectedLocation}
                    </span>
                    <ChevronDown className="w-5 h-5 text-[#717680]" />
                  </button>

                  {/* Category Dropdown */}
                  <button className="bg-white border border-[#d5d7da] rounded-lg px-4 py-2.5 flex items-center justify-between w-full hover:bg-gray-50 transition-colors">
                    <span className="text-sm font-semibold text-[#414651]">
                      {selectedCategory}
                    </span>
                    <ChevronDown className="w-5 h-5 text-[#717680]" />
                  </button>
                </div>

                {/* Search Input */}
                <div className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717680]" />
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border border-[#d5d7da] rounded-lg pl-10 pr-3.5 py-2.5 text-base text-[#181d27] placeholder:text-[#717680] focus:outline-none focus:ring-2 focus:ring-[#b42318] focus:border-transparent"
                  />
                </div>

                {/* Search Button */}
                <button className="w-full bg-[#b42318] text-white font-semibold text-sm rounded-lg px-3.5 py-2 hover:bg-[#912018] transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white border border-[#d5d7da] rounded-lg p-6">
              <h2 className="text-base font-medium text-black mb-6">
                Featured Business
              </h2>

              <div className="flex flex-col space-y-4">
                {featuredBusinesses.map((business, index) => (
                  <div key={business.id}>
                    <div className="flex items-start justify-between py-6 first:pt-0 last:pb-0">
                      {/* Business Info */}
                      <div className="flex gap-3 flex-1">
                        {/* Logo */}
                        <Link href={`/business/${business.slug}`}>
                          <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0 overflow-hidden">
                            <img
                              src={business.logo}
                              alt={business.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </Link>

                        {/* Text Content */}
                        <div className="flex flex-col gap-2 flex-1">
                          <div className="flex flex-col gap-1">
                            <Link
                              href={`/business/${business.slug}`}
                              className="hover:underline"
                            >
                              <h3 className="text-base font-medium text-black">
                                {business.name}
                              </h3>
                            </Link>
                            <p className="text-xs text-black">
                              {business.location}
                            </p>
                            <div className="flex items-center gap-1 text-sm text-black">
                              <span>{business.tagline}</span>
                              <span>•</span>
                              <span>{business.category}</span>
                            </div>
                            <p className="text-xs text-[#535862]">
                              {business.followers} followers
                            </p>
                          </div>
                          <p className="text-xs text-[#535862] leading-relaxed">
                            {business.description}
                          </p>
                        </div>
                      </div>

                      {/* Follow Button */}
                      <button className="flex items-center gap-2 text-[#b42318] hover:text-[#912018] transition-colors shrink-0 ml-4">
                        <Plus className="w-5 h-5" />
                        <span className="text-sm font-semibold">Follow</span>
                      </button>
                    </div>

                    {/* Divider (except for last item) */}
                    {index < featuredBusinesses.length - 1 && (
                      <div className="border-t border-[#d5d7da]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
