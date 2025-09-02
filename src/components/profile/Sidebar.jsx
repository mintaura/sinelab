"use client";
import Image from "next/image";
import { profileMenuItems } from "../common/Helper";
import { AffiliateIcon, CrossIcon, LogoutIcon } from "../common/Icons";
import SidebarMenuList from "./SidebarMenuList";

const Sidebar = ({ activeTab, setActiveTab, menuOpen, setMenuOpen }) => {
  return (
    <aside className="w-[244px] bg-white review-card rounded-tl-xl rounded-bl-xl lg:rounded-xl py-5 shadow-light-grey h-full flex flex-col">
      <button
        onClick={() => setMenuOpen(false)}
        className="lg:hidden px-5 mb-3 ml-auto"
      >
        <CrossIcon className="w-6 h-6 cursor-pointer" />
      </button>
      <div className="flex flex-col items-center px-5 mb-5">
        <Image
          src="/assets/images/webp/profile-image.webp"
          alt="profile-image"
          width={80}
          height={80}
          className="w-20 h-20 object-cover object-top rounded-full"
        />
        <span className="text-center text-xl font-bold mt-5 text-black">
          Cameron William
        </span>
        <span className="text-center text-sm text-black/50 mt-1.5">
          Cameron_willam@gmail.com
        </span>
      </div>
      <div className="h-px gradient-blue"></div>
      <div className="flex-1 hide-scrollbar max-lg:overflow-y-auto">
        <ul className="space-y-1 px-5 mt-[18px]">
          {profileMenuItems.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <SidebarMenuList
                key={item.name}
                item={item}
                isActive={isActive}
                setActiveTab={setActiveTab}
                setMenuOpen={setMenuOpen}
              />
            );
          })}
        </ul>
        <div className="my-4 h-px mx-5 gradient-blue"></div>
        <div className="flex flex-col gap-1 px-5 pb-5">
          <button className="group dashboard-sidebar-secondary-btn">
            <span className="flex items-center gap-3">
              <AffiliateIcon className="w-[26px] h-[26px]" />
              Affiliate Area
            </span>
          </button>
          <button className="group dashboard-sidebar-secondary-btn">
            <span className="flex items-center gap-3">
              <LogoutIcon className="w-[26px] h-[26px]" />
              Log out
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
