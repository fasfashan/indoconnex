"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Briefcase,
  Newspaper,
  Users,
  Heart,
  MapPin,
  BriefcaseBusiness,
  ShoppingCart,
  Package,
  Search,
  Target,
  GraduationCap,
  HelpCircle,
  Settings,
  Menu,
} from "lucide-react";

const navItems = [
  { label: "Business", href: "/business", icon: Briefcase },
  { label: "Articles", href: "/articles", icon: Newspaper, comingSoon: true },
  { label: "Community", href: "/community", icon: Users, comingSoon: true },
  { label: "Charity", href: "/charity", icon: Heart, comingSoon: true },
  { label: "Place", href: "/place", icon: MapPin, comingSoon: true },
  {
    label: "Job Listing",
    href: "/jobs",
    icon: BriefcaseBusiness,
    comingSoon: true,
  },
  {
    label: "Buy & Sales",
    href: "/marketplace",
    icon: ShoppingCart,
    comingSoon: true,
  },
  { label: "Product", href: "/products", icon: Package, comingSoon: true },
  {
    label: "Lost & Found",
    href: "/lost-found",
    icon: Search,
    comingSoon: true,
  },
  { label: "Wanted List", href: "/wanted", icon: Target, comingSoon: true },
  {
    label: "Campus & Education",
    href: "/education",
    icon: GraduationCap,
    comingSoon: true,
  },
];

const footerNavItems = [
  { label: "Help", href: "/help", icon: HelpCircle },
  { label: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`${
        isCollapsed ? "w-[80px]" : "w-[300px]"
      } h-screen bg-white border-r border-[#d5d7da] sticky top-0 flex flex-col transition-all duration-300`}
    >
      {/* Toggle Button */}
      <div className={`${isCollapsed ? "px-4" : "px-6"} pt-6 pb-4 shrink-0`}>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center  p-2 rounded-md hover:bg-[#fafafa] transition-colors"
        >
          <Menu size={20} className="text-[#414651]" />
        </button>
      </div>

      {/* Logo */}
      <div className={`${isCollapsed ? "px-4" : "px-6"} pb-8 shrink-0`}>
        <Link
          href="/feed"
          className={`${
            isCollapsed ? "text-sm" : "text-xl"
          } font-bold text-red-500 transition-all duration-300`}
        >
          {isCollapsed ? "IC" : "INDOCONNEX"}
        </Link>
      </div>

      {/* Search Bar */}

      {/* Main Navigation */}
      <nav className="flex-1 px-4 flex flex-col overflow-y-auto">
        <div className="space-y-1 shrink-0">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center ${
                  isCollapsed ? "justify-center" : "justify-between"
                } px-3 py-2.5 rounded-md text-sm transition-colors ${
                  pathname === item.href
                    ? "bg-[#f5f5f5] text-[#181d27] font-semibold"
                    : "text-[#414651] hover:bg-[#fafafa]"
                }`}
                title={isCollapsed ? item.label : ""}
              >
                <div
                  className={`flex items-center ${isCollapsed ? "" : "gap-3"}`}
                >
                  <Icon size={20} />
                  {!isCollapsed && <span>{item.label}</span>}
                </div>
                {!isCollapsed && item.comingSoon && (
                  <span className="bg-[#f5f5f5] text-[#414651] text-xs px-2 py-1 rounded-2xl">
                    Coming soon
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        <div className="h-px bg-[#d5d7da] my-6" />

        {/* Footer Nav */}
        <div className="space-y-1 pb-4 shrink-0">
          {footerNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center ${
                  isCollapsed ? "justify-center" : "gap-3"
                } px-3 py-2.5 rounded-md text-sm transition-colors ${
                  pathname === item.href
                    ? "bg-[#f5f5f5] text-[#181d27] font-semibold"
                    : "text-[#414651] hover:bg-[#fafafa]"
                }`}
                title={isCollapsed ? item.label : ""}
              >
                <Icon size={20} />
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </div>

        {/* Premium Card */}
        {!isCollapsed && (
          <div className="bg-[#f5f5f5] rounded-lg p-4 mb-8 shrink-0">
            <h3 className="text-sm font-semibold text-[#21272a] mb-2">
              Try Premium for free
            </h3>
            <p className="text-xs text-[#535862] mb-4">
              Unlock advanced features and get the most out of your business
              connections
            </p>
            <button className="w-full bg-red-500 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
              Try for Free
            </button>
          </div>
        )}
      </nav>
    </aside>
  );
}
