import Container from '@/components/Container'
import HomeBanner from '@/components/HomeBanner'
import HomeCategory from '@/components/HomeCategory';
import LatestBlog from '@/components/LatestBlog';
import ProductGrid from '@/components/ProductGrid'
import ShopByBrands from '@/components/ShopByBrands';
import { getCategories } from '@/sanity/queries';
import React from 'react'

export default async function Home() {
  const categories = await getCategories()
  return (
    <Container>
      <HomeBanner />
      <div className="py-10">
        <ProductGrid />
      </div>
      <HomeCategory categories={categories} />
      <ShopByBrands />
      <LatestBlog/>
    </Container>
  );
}

