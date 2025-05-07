"use client"
import { AlignLeft } from 'lucide-react'
import React, { useState } from 'react'
import MobileSidebarMenu from './MobileSidebarMenu'

export default function MobileMenu() {
  const [isSidebar , setIsSidebar] = useState(false) 
  return (
    <div >
      <button className='flex items-center ' onClick={() => setIsSidebar(!isSidebar)}>
      <AlignLeft className='w-5 h-5 hover:text-shop_light_green hoverEffect hover:cursor-pointer md:hidden '/>

      </button>
      <div className='md:hidden'>

      <MobileSidebarMenu 
      isOpen={isSidebar}
      onClose={() => setIsSidebar(false)}
      />
      </div>
    </div>
  )
}
