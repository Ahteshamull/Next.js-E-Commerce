import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import FavButton from './FavButton'
import SignIn from './SignIn'
import MobileMenu from './MobileMenu'

export default function Header() {
  return (
    <header className='bg-white py-5 border-b border-b-black/20'>
      <Container className='flex justify-between items-center text-LightColor'>
        <div className='w-auto md:w-1/3 flex items-center justify-start gap-2.5 md:gap-0'>
        <MobileMenu/>
        <Logo/>
        </div>
        <HeaderMenu/>
      <div className='w-auto md:w-1/3 flex items-center justify-end gap-5'>
        <SearchBar/>
        <CartIcon/>
        <FavButton/>
        <SignIn/>
      </div>
        </Container>
    </header>
  )
}
