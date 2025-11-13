"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Bell, User } from "lucide-react";
import Image from "next/image";
const navigationItems = [
  { label: "Feed", href: "/feed" },
  { label: "Business", href: "/business" },
  { label: "Articles", href: "/articles" },
  { label: "Community", href: "/community" },
  { label: "Charity", href: "/charity" },
  { label: "Place", href: "/place" },
  { label: "Jobs", href: "/jobs" },
  { label: "Products", href: "/products" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b border-gray-200">
      <div className="h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/feed"
          className="text-xl font-bold text-red-500 hover:text-red-600 transition-colors"
        >
          <Image
            src="/logo.svg"
            alt="INDOCONNEX Logo"
            width={120}
            height={40}
          />
        </Link>

        {/* Center Navigation */}
        <nav className="flex items-center gap-6">
          {navigationItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors relative pb-1 ${
                  isActive
                    ? "text-gray-900 font-semibold"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-700" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-64 bg-gray-50 border border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>

          {/* Notification Icon */}
          <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* User Avatar */}
          <Link
            href="/profile"
            className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <User size={18} className="text-gray-600" />
          </Link>
        </div>
      </div>
    </header>
  );
}
