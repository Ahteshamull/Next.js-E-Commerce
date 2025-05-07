import { Facebook, Github, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SocialProps {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

export default function SocialMedia({
  className,
  iconClassName,
  tooltipClassName,
}: SocialProps

) {
  const socialLinks = [
    {
      title: "Facebook",
      href: "/",
      icon: <Facebook className="w-5 h-5" />,
    },
    {
      title: "Instagram",
      href: "/",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      title: "Github",
      href: "/",
      icon: <Github className="w-5 h-5" />,
    },
    {
      title: "Youtube",
      href: "/",
      icon: <Youtube className="w-5 h-5" />,
    },
    
    {
      title: "Twitter",
      href: "/",
      icon: <Twitter className="w-5 h-5" />,
    },
   
  ];

  
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5",className)}>
        {socialLinks.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link className={cn("p-2 rounded-full border hover:text-white hover:border-shop_light_green hoverEffects",iconClassName)} key={item?.title} target="_blank" rel="noopener noreferrer" href={item?.href}>
                {item.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent className={cn("bg-white text-darkColor font-semibold",tooltipClassName)}>
              <p>{item?.title}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
