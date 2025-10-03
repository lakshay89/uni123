"use client";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { useRouter } from "next/navigation";

import pic1 from "@/Assets/Images/salon.avif";
import pic2 from "@/Assets/Images/doctor.jpg";
import pic3 from "@/Assets/Images/receptionist.jpg";
import pic4 from "@/Assets/Images/Corporate.jpg";
import pic5 from "@/Assets/Images/security.png";
import pic6 from "@/Assets/Images/salon.avif";

import "./subcategory.css";

export default function SubCategory() {
  const router = useRouter();

  const categories = [
    { id: 1, title: "Men's Wear", images: [pic5, pic6, pic3, pic4] },
    { id: 2, title: "Women's Wear", images: [pic4, pic3, pic2, pic6] },
    { id: 3, title: "School Uniforms", images: [pic1, pic2, pic3, pic4] },
    { id: 4, title: "Corporate Wear", images: [pic2, pic3, pic4, pic1] },
    { id: 5, title: "Industrial Uniforms", images: [pic4, pic1, pic2, pic3] },
    { id: 6, title: "Security Uniforms", images: [pic3, pic4, pic1, pic2] },
    { id: 7, title: "Sports Wear", images: [pic6, pic1, pic2, pic3] },
    { id: 8, title: "Hospital Wear", images: [pic2, pic5, pic6, pic4] },
    { id: 9, title: "Reception Wear", images: [pic3, pic4, pic1, pic2] },   
    { id: 10, title: "Salon Wear", images: [pic1, pic6, pic5, pic2] },
  ];

  const handleCategoryClick = (title) => {
    // redirect to products page
    // router.push(`/products/${encodeURIComponent(title)}`);
    router.push(`/products`);
  };

  return (
    <>
      <div className="my-4">
        <h3 className="text-center">SUB-CATEGORIES</h3>
      </div>

      <div className="container my-5">
        <div className="row g-4">
          {categories.map((cat) => (
            <div key={cat.id} className="col-6 col-md-2">
              <HoverSubCategoryCard
                cat={cat}
                handleCategoryClick={handleCategoryClick}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function HoverSubCategoryCard({ cat, handleCategoryClick }) {
  const [hover, setHover] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="sub-category-card shadow"
      onClick={() => handleCategoryClick(cat.title)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ cursor: "pointer" }}
    >
      <Carousel
        activeIndex={activeIndex}
        onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
        controls={false} // no arrows
        indicators={false} // no dots
        interval={hover ? 1000 : null} // autoplay only on hover
        pause={false} // don't pause internally
      >
        {cat.images.map((img, index) => (
          <Carousel.Item key={index}>
            <Image
              className="d-block w-100 sub-category-img"
              src={img}
              alt={`${cat.title}-${index}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="sub-category-content text-center p-3">
        <h5 className="sub-categorytitle">{cat.title}</h5>
        <p className="truncate1">
          Explore our latest collection of {cat.title}.
        </p>
      </div>
    </div>
  );
}
