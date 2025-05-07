import React, { FC } from 'react'
import Logo from './Logo';
import { X } from 'lucide-react';
import { headerData } from '@/constants/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialMedia from './SocialMedia';
import { useOutsideClick } from '@/hooks';
interface MobileSidebarMenuProps {
    isOpen: boolean;
    onClose: () => void;
}
const MobileSidebarMenu :FC<MobileSidebarMenuProps> = ({
    isOpen,
    onClose
}) => {
    const pathName = usePathname()
    const sideBarRef = useOutsideClick<HTMLDivElement>(onClose)
  return (
    <div className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white/70 shadow-xl hoverEffect  ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
     <div ref={sideBarRef} className='min-w-72 max-w-95 bg-black h-screen p-10 border-r-shop_light_green flex flex-col gap-6'>
     <div className='flex items-center justify-between gap-5'>
        <Logo className='text-white' spanDesign="group-hover:text-white"/>
        <button onClick={onClose} className='hover:text-shop_light_green hoverEffect hover:cursor-pointer'>
        <X/>
        </button>
      </div>
      <div className='flex flex-col space-y-3.5 font-semibold tracking-wide'>
        {headerData.map((item) => (
          <Link className={`hover:text-shop_light_green hoverEffect  ${pathName === item?.href &&'text-white' }`	} key={item?.title} href={item?.href}>{item?.title}</Link>
        ))}
        </div>
        <SocialMedia/>
     </div>
    </div>
  )
}

export default MobileSidebarMenu

