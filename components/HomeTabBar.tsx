import { productType } from "@/sanity/structure";
import Link from "next/link";
import React from "react";
interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

export default function HomeTabBar({ selectedTab, onTabSelect }: Props) {
  return (
    <div className="flex  items-center justify-between flex-wrap gap-5">
      <div className="flex items-center gap-1.5 text-sm font-semibold">
        {productType.map((item) => (
          <button
            onClick={() => onTabSelect(item?.title)}
            className={`border border-shop_light_green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect ${selectedTab === item?.title ? "bg-shop_light_green text-white border-shop_light_green" : "bg-shop_light_green/10"}`}
            key={item?.title}
          >
            {item?.title}
          </button>
        ))}
      </div>
      <Link
        className="border border-darkColor px-4 py-1 rounded-full hover:bg-shop_light_green hover:text-white hover:border-shop_light_green hoverEffect"
        href={"/shop"}
      >
        See all
      </Link>
    </div>
  );
}
