"use client";
import React from "react";
import "./brandCarousel.css";
import pic1 from '@/Assets/brands/bmw.png'
import pic2 from '@/Assets/brands/flat.png'
import pic3 from '@/Assets/brands/suzuki.png'
import pic4 from '@/Assets/brands/mercedise.png'
import pic5 from '@/Assets/brands/mg.png'
import pic6 from '@/Assets/brands/volkswagan.png'
import pic7 from '@/Assets/brands/Chevrolet.png'
import pic8 from '@/Assets/brands/bmw.png'
import pic9 from '@/Assets/brands/bmw.png'
import pic10 from '@/Assets/brands/bmw.png'
import Image from "next/image";

export default function BrandCarousel() {
  // Example brand logos (replace with your images)
  const brands = [
   pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10
  ];

  return (
   <>
      <div>
        <h3 className="text-center">Trusted by Great Teams</h3>
      </div>
       <hr />
    <div className="brand-carousel-container">
      {/* Top carousel (left) */}
      <div className="carousel-row left">
        <div className="carousel-track">
          {brands.concat(brands).map((src, i) => (
            <Image key={`top-${i}`} src={src} alt="brand" />
          ))}
        </div>
      </div>
    <hr />
      {/* Middle carousel (right) */}
      <div className="carousel-row right">
        <div className="carousel-track">
          {brands.concat(brands).map((src, i) => (
            <Image key={`mid-${i}`} src={src} alt="brand" />
          ))}
        </div>
      </div>
    <hr />
      {/* Bottom carousel (right again) */}
      <div className="carousel-row left">
        <div className="carousel-track">
          {brands.concat(brands).map((src, i) => (
            <Image key={`bot-${i}`} src={src} alt="brand" />
          ))}
        </div>
      </div>
    </div>
   
   </>
  );
}
