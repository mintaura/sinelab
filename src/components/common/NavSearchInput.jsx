"use client";

import { useEffect, useRef, useState } from "react";
import { CrossIcon, SearchIcon } from "./Icons";

const NavSearchInput = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative h-7 sm:h-[34px]" ref={dropdownRef}>
      <button className="cursor-pointer" onClick={() => setOpen(true)}>
        <SearchIcon className="h-7 w-7 sm:w-[34px] sm:h-[34px]" />
      </button>
      {open && (
        <div className="absolute top-full max-xs:-right-[85px] xs:-right-10 custom-sm:right-0 mt-2 z-50 w-[260px]">
          <div className="relative bg-white rounded-xl shadow-light-grey p-4">
            <button
              onClick={() => setOpen(false)}
              className="cursor-pointer flex justify-end ml-auto mb-2.5"
            >
              <CrossIcon className="w-4 h-4 text-gray-600" />
            </button>
            <input
              type="text"
              placeholder="Search..."
              autoFocus
              className="w-full border border-iron/80 rounded-full px-4 py-2 text-sm outline-none text-davy-gray placeholder:text-davy-gray"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavSearchInput;
