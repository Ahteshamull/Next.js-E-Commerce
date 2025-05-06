import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function CartIcon() {
  return (
    <Link className='group relative' href={'/cart'}>
      <ShoppingBag className='w-5 h-5 hover:text-shop_light_green hoverEffect'/>
      <span className='absolute -top-2 -right-2 text-xs w-4 h-4 flex items-center justify-center text-white bg-shop_light_green rounded-full '>
        0
      </span>
    </Link>
  )
}
