import React, { FC } from 'react'
import Logo from './Logo';
import { X } from 'lucide-react';
interface MobileSidebarMenuProps {
    isOpen: boolean;
    onClose: () => void;
}
const MobileSidebarMenu :FC<MobileSidebarMenuProps> = ({
    isOpen,
    onClose
}) => {
  return (
    <div className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white/80 shadow-xl hoverEffect  ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
     <div className='min-w-72 max-w-95 bg-black h-screen p-10 border-r-shop_light_green flex flex-col gap-6'>
     <div className='flex items-center justify-between gap-5'>
        <Logo className='text-white'/>
        <button onClick={onClose} className='hover:text-shop_light_green hoverEffect hover:cursor-pointer'>
        <X/>
        </button>
      </div>
      <div>
        </div>
     </div>
    </div>
  )
}

export default MobileSidebarMenu

