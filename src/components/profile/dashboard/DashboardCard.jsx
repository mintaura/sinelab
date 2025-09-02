"use client";

import { ArrowRightTop } from "@/components/common/Icons";

export default function DashboardCard({ icon, title, description }) {
  return (
    <article className="dashboard-card text-white hover:shadow-medium-blue cursor-pointer group duration-300 transition-all py-10 rounded-xl relative overflow-hidden">
      <div className="flex items-center justify-between gap-4 px-3 sm:px-5 mb-4">
        <div className="flex flex-col gap-[5px]">
          <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-white rounded-full">
            {icon}
          </div>
          <h3 className="text-lg sm:text-xl lg:-2xl !leading-[120%] tracking-normal text-white font-bold">
            {title}
          </h3>
        </div>
        <div className="w-9 h-9 sm:w-10 sm:h-10 group-hover:rotate-[20deg] duration-300 transition-all flex items-center justify-center bg-white/10 shadow-white-inset rounded-full">
          <ArrowRightTop className="w-4 sm:w-5" />
        </div>
      </div>
      <div className="h-px bg-white"></div>
      <p className="text-sm mt-2 px-3 sm:px-5 text-center mx-auto">{description}</p>
    </article>
  );
}
