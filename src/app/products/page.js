import React from 'react'
import BestSellerProduct from '../Components/BestSellerProduct/BestSellerProduct'
import HeroSection from '../Components/Hero/Hero'

export default function page() {
  return (
    <>

<HeroSection categories={["Salon Uniforms", "Spa Uniforms"]}/>
      <BestSellerProduct/>
    </>
  )
}
