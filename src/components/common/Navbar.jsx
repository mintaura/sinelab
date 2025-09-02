"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CartIcon, CrossIcon, DevHubLogo } from "./Icons";
import LanguageDropdown from "./LanguageDropdown";
import NavSearchInput from "./NavSearchInput";
import ProductDropdown from "./ProductDropdown";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when menu is open
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

  return (
    <header className="section-x-gap py-3 sm:py-4 border-b border-b-black/15">
      <nav className="custom-container flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-[50px]">
          <Link
            href="/"
            className="cursor-pointer flex items-center outline-none"
          >
            <DevHubLogo className="w-full max-w-[140px] sm:min-w-[166px] sm:max-w-[166px] max-h-[58px]" />
          </Link>
          <ul className="hidden lg:flex space-x-4 items-center">
            <li>
              <ProductDropdown />
            </li>
            <li>
              <Link href="#" className="nav-links">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="nav-links">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="nav-links">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-3 sm:gap-6 relative">
          <div className="flex items-center gap-6 relative max-sm:hidden">
            <NavSearchInput />
            <button>
              <CartIcon className="w-[34px] h-[34px] cursor-pointer" />
            </button>
            <LanguageDropdown />
            <Image
              src="/assets/images/webp/profile-image.webp"
              alt="user"
              width={44}
              height={44}
              className="min-w-11 min-h-11 w-11 h-11 rounded-full object-cover object-top cursor-pointer"
            />
          </div>
          <div className="sm:hidden flex items-center gap-3">
            <CartIcon className="w-7 h-7 cursor-pointer" />
            <NavSearchInput />
          </div>
          <Image
            src="/assets/images/webp/profile-image.webp"
            alt="user"
            width={44}
            height={44}
            className="min-w-9 min-h-9 sm:min-w-11 sm:min-h-11 w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover object-top sm:hidden cursor-pointer"
          />

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden flex flex-col gap-1.5 ml-3 cursor-pointer"
          >
            <span className="block w-6 h-[2px] bg-black rounded" />
            <span className="block w-6 h-[2px] bg-black rounded" />
            <span className="block w-6 h-[2px] bg-black rounded" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-screen w-[260px] bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-7 sm:pt-8 pb-5 sm:pb-6 px-4 sm:px-6">
          {/* Close button */}
          <div className="flex justify-between sm:justify-end items-center mb-6">
            <div className="sm:hidden">
              <LanguageDropdown />
            </div>
            <button
              className="cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <CrossIcon className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-4 overflow-y-auto overflow-x-hidden">
            <ProductDropdown />
            <Link
              href="#"
              className="text-base font-medium text-black/80"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-base font-medium text-black/80"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-base font-medium text-black/80"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
