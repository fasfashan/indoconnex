import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-[#dde1e6] px-6 py-4">
      <div className="flex items-center justify-end gap-3">
        {/* Search bar */}
        <div className="flex-1 max-w-[594.5px]">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#717680]"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full h-11 pl-10 pr-4 bg-white border border-[#d5d7da] rounded-lg text-base text-[#181d27] placeholder-[#717680] focus:outline-none focus:border-[#414651]"
            />
          </div>
        </div>

        {/* Avatar */}
        <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Notification button */}
        <button className="w-9 h-9 flex items-center justify-center bg-white border border-[#d5d7da] rounded-lg hover:bg-[#f5f5f5] transition-colors">
          <Bell size={20} className="text-[#414651]" />
        </button>

        {/* Premium button */}
        <button className="px-4 py-2 text-sm font-semibold text-black hover:bg-[#f5f5f5] rounded-lg transition-colors whitespace-nowrap">
          Try Premium for free
        </button>
      </div>
    </header>
  );
}
