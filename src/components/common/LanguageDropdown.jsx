"use client";

import { useState, useRef, useEffect } from "react";
import { DownIcon } from "./Icons";
import Image from "next/image";

const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const dropdownRef = useRef(null);

  const languages = [
    { code: "EN", flag: "/assets/images/webp/en-flag.webp" },
    { code: "FR", flag: "/assets/images/webp/fr-flag.webp" },
  ];

  // Close dropdown when clicking outside
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
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-0.5 cursor-pointer"
      >
        <Image
          width={36}
          height={24}
          unoptimized
          src={languages.find((l) => l.code === lang)?.flag}
          alt={lang}
          className="min-w-[36px] min-h-6 object-cover rounded-xs"
        />
        <span className="text-sm">{lang}</span>
        <DownIcon
          className={`w-[18px] h-5 duration-300 transition-all ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-white shadow-md overflow-hidden rounded-md border border-iron/70 w-28 z-50">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false); // close after selection
              }}
              className="flex items-center cursor-pointer gap-2 px-3 py-1.5 text-xs hover:bg-gray-100 w-full"
            >
              <Image
                width={36}
                height={24}
                src={l.flag}
                alt={l.code}
                className="w-[36px] h-6 rounded-sm object-cover"
                unoptimized
              />
              {l.code}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
