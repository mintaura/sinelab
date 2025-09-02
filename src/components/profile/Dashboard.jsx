"use client";

import { dashboardProducts } from "../common/Helper";
import { HomeIcon, UserIcon } from "../common/Icons";
import DashboardCard from "./dashboard/DashboardCard";
import DashboardProductCard from "./dashboard/DashboardProductCard";

export default function Dashboard() {
  return (
    <div className="">
      <div className="grid grid-cols-1 custom-sm:grid-cols-2 gap-4 md:gap-6 lg:gap-10 xl:gap-[68px]">
        <DashboardCard
          icon={<UserIcon className="w-6 h-6 lg:w-7 lg:h-7" />}
          title="My Account"
          description="Edit your name or change your password."
        />
        <DashboardCard
          icon={<HomeIcon className="w-6 h-6 lg:w-7 lg:h-7" />}
          title="Billing Address"
          description="Setup your Billing address."
        />
      </div>
      <h2 className="font-bold text-xl sm:text-2xl md:text-3xl !leading-[120%] tracking-normal text-black mb-6 mt-10 sm:mt-12 md:mt-14 lg:mt-[60px]">
        Our Products
      </h2>
      <div className="grid grid-cols-1 custom-sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        {dashboardProducts.map((p, idx) => (
          <DashboardProductCard key={idx} p={p} />
        ))}
      </div>
    </div>
  );
}
