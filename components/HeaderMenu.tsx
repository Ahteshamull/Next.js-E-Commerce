import { headerData } from '@/constants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function HeaderMenu() {

    const pathName = usePathname()
  return (
    <div className='hidden md:inline-flex w-1/3 items-center gap-7 text-sm capitalize font-semibold text-LightColor'>
     {headerData.map((item) => (
      <Link className={`hover:text-shop_light_green hoverEffect relative group`} key={item?.title} href={item?.href}>{item?.title}<span className={`absolute -bottom-0.5 left-1/5 h-0.5 w-0 bg-shop_light_green  group-hover:w-1/2 hoverEffect group-hover:left-0`}/>
      <span className={`absolute -bottom-0.5 right-1/5 h-0.5 w-0 bg-shop_light_green  group-hover:w-1/2 hoverEffect group-hover:right-0`}/></Link>
     ))}
    </div>
  )
}
