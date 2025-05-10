import Container from '@/components/Container'
import HomeBanner from '@/components/HomeBanner'
import HomeCategory from '@/components/HomeCategory';
import ProductGrid from '@/components/ProductGrid'
import React from 'react'

export default function Home() {
  return (
    <Container>
      <HomeBanner />
      <div className='py-10'>
        <ProductGrid />
      </div>
      <HomeCategory/>
    </Container>
  );
}

