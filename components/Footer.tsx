import React from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { SubText, SubTitle } from "./ui/text";
import { categoriesData, quickLinksData } from "@/constants/data";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <SubText className="text-sm font-sans text-gray-600 font-medium">
              Discover curated furniture collections at E@Store, blending style
              and comfort to elevate your living spaces.
            </SubText>
            <SocialMedia
              className="text-darkColor/60"
              iconClassName="border-darkColor/60 hover:border-shop_light_green hover:text-shop_light_green"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>
          <div>
            <SubTitle>Quick Links</SubTitle>
            <ul className="space-y-3 mt-4 font-sans">
              {quickLinksData.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className="text-sm text-gray-600 font-medium hover:text-shop_light_green hoverEffect"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle>Categories</SubTitle>
            <ul className="space-y-3 mt-4">
              {categoriesData.map((item) => (
                <li key={item?.title}>
                  <a
                    href={`/category/${item?.href}`}
                    className="text-sm text-gray-600 font-medium hover:text-shop_light_green hoverEffect"
                  >
                    {item?.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 ">
            <SubTitle>News Letter</SubTitle>
            <SubText>
              Subscribe to our newsletter to get the latest news and updates
              exclusive offers..!
            </SubText>
            <form className="space-y-3">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full border border-gray-200 rounded-md p-2"
              />
              <Button className="w-full ">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="py-6 border-t text-center text-sm text-gray-600">
          <div>
            Hasan © {new Date().getFullYear()} <Logo className="text-sm" />. All
            rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
