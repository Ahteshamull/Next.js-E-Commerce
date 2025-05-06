import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'

export default function Header() {
  return (
    <header className='bg-white py-5 border-b border-b-black/20'>
      <Container className='flex justify-between items-center'>
        <Logo/>
        <HeaderMenu/>
      <div >Others</div>
        </Container>
    </header>
  )
}
