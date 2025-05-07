import React from "react";
import { Title } from "./ui/text";
import Link from "next/link";
import Image from "next/image";
import { banner_1 } from "@/images";

export default function HomeBanner() {
  return (
    <div className="py-16 md:py-0 bg-shop-light-pink rounded-lg px-10 lg:px-24 flex items-center justify-between">
      <div className="space-y-5">
        <Title>
          Get 20% off on your{" "}
          <span className="text-red-500/50">first order</span> <br />
          Buy any product !
        </Title>
        <Link
          href={"/shop"}
          className="bg-shop_dark_green/90 text-white/90  py-2 px-5 rounded-md text-sm font-semibold hover:text-white hover:bg-shop_dark_green hoverEffect"
        >
          Shop Now
        </Link>
      </div>
      <div>
        <Image
          className="hidden md:inline-flex w-96"
          src={banner_1}
          alt="banner_1"
        />
      </div>
    </div>
  );
}
