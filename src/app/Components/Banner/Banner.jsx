import Image from 'next/image'
import React from 'react'
import banner from '@/Assets/Images/Background3.jpg'
import './banner.css'

export default function Banner() {
  return (
    <>
     <div className='container-fluid'>
     <div className='BannerSection'>
        <Image src={banner}  alt="BannerImg" className='BannerImg' style={{width:"100%" , height:"700px"}} />
      </div>
     </div>
    </>
  )
}
