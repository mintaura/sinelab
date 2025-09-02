"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { DownIcon } from "./Icons";

const ProductDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Desktop Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        data-text="Product"
        className="flex items-center gap-1 nav-links group max-lg:hidden"
      >
        Product{" "}
        <DownIcon
          pathClass="group-hover:stroke-butterfly-blue duration-300 transition-all"
          className={`${
            open && "rotate-180"
          } duration-300 transition-all w-4 h-4`}
        />
      </button>

      {/* Mobile Accordion Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        data-text="Product"
        className="flex items-center justify-between w-full py-2 text-base font-medium text-black/80 group lg:hidden"
      >
        <span>Product</span>
        <DownIcon
          className={`${
            open && "rotate-180"
          } duration-300 transition-all w-4 h-4`}
        />
      </button>

      {/* Desktop Dropdown */}
      {open && (
        <div className="absolute top-full left-0 mt-2 w-48 p-2 border border-iron/50 bg-white shadow-lg rounded-md z-50 hidden lg:block">
          <Link
            href="/profile"
            className="block px-3 py-2 text-sm hover:bg-gray-100 rounded"
            onClick={() => setOpen(false)}
          >
            Profile
          </Link>
        </div>
      )}

      {/* Mobile Accordion with Smooth Transition */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out lg:hidden ${
          open ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-3 py-2 gap-1">
          <Link
            href="/profile"
            className="block px-3 py-2 text-sm hover:bg-gray-100 rounded"
            onClick={() => setOpen(false)}
          >
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDropdown;
