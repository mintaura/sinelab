"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DotEllipse } from "../common/Icons";
import { useMediaQuery } from "../hooks/useMediaQuery";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [menuOpen, setMenuOpen] = useState(false);

  const isSmUp = useMediaQuery("(min-width: 640px)");

  const pages = {
    Dashboard: Dashboard,
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const ActivePage =
    pages[activeTab] ||
    (() => (
      <div className="flex items-center justify-center min-h-[250px]">
        No data found
      </div>
    ));

  return (
    <section className="relative section-x-gap py-12 sm:py-14 md:py-16 lg:py-24 xl:pt-[100px] xl:pb-[160px]">
      <div className="custom-container relative z-20">
        <div className="lg:flex lg:gap-8 max-lg:w-full relative">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <Sidebar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />
          </div>

          {/* Mobile Sidebar */}
          <div
            className={`fixed top-0 left-0 h-screen z-40 transition-all duration-300 ease-in-out
              ${
                menuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-[200%] opacity-0"
              }`}
          >
            <Sidebar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />
          </div>
          <div
            className={`flex-1 min-h-[400px] p-0 sm:p-5 md:p-7 lg:p-8 xl:p-10 sm:bg-white overflow-hidden relative ${
              isSmUp ? "review-card shadow-light-grey rounded-xl" : ""
            }`}
          >
            <div className="relative z-20">
              {/* Hamburger button (mobile only) */}
              <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden flex flex-col gap-1.5 mb-4 cursor-pointer"
              >
                <span className="block w-6 h-[2px] bg-black rounded" />
                <span className="block w-6 h-[2px] bg-black rounded" />
                <span className="block w-6 h-[2px] bg-black rounded" />
              </button>
              <ActivePage />
            </div>
            {menuOpen && (
              <div
                onClick={() => setMenuOpen(false)}
                className="fixed w-full h-full inset-0 bg-black/10 backdrop-blur-xs z-30 lg:hidden"
              />
            )}
            <Image
              src="/assets/images/webp/profile-dashboard-ellipse.webp"
              alt="layer"
              width={912}
              height={146}
              className="absolute -bottom-[5%] max-sm:hidden left-0 -rotate-[5deg] object-cover object-top min-w-[912px] h-[146px] z-10"
            />
          </div>
        </div>
      </div>
      <div className="absolute z-0 -left-[74px] top-5 lg:top-[60px] rounded-full gradient-blue w-[145px] h-[145px] opacity-70 blur-[90px] rotate-[28deg]"></div>
      <div className="absolute z-0 max-sm:hidden left-3 sm:left-5 lg:left-[34px] top-5 lg:top-[60px]">
        <DotEllipse className="w-8 sm:w-10 lg:w-[56px] h-16 sm:h-20 lg:h-[141px]" />
      </div>
      <div className="absolute z-0 -right-[74px] bottom-5 rounded-full gradient-blue w-[145px] h-[145px] opacity-70 blur-[90px] -rotate-[28deg]"></div>
      <div className="absolute z-0 right-3 sm:right-5 md:right-5 lg:right-[34px] bottom-5">
        <DotEllipse className="w-8 sm:w-10 lg:w-[56px] h-16 sm:h-20 lg:h-[141px]" />
      </div>
    </section>
  );
};

export default Profile;
