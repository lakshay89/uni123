"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion";
import './bestseller.css'
import pic1 from '@/Assets/Images/salon.avif'
import pic2 from '@/Assets/Images/doctor.jpg'
import pic3 from '@/Assets/Images/receptionist.jpg'
import pic4 from '@/Assets/Images/Corporate.jpg'
import pic5 from '@/Assets/Images/security.png'
import pic6 from '@/Assets/Images/salon.avif'
import { useRouter } from "next/navigation";
import Image from 'next/image';


export default function RelatedProduct() {
  const router = useRouter();

  const [hoveredStates, setHoveredStates] = useState({});

  const toggleHover = (id, isHovered) => {
    setHoveredStates((prev) => ({ ...prev, [id]: isHovered }));
  };

  const products = [
    { id: 0, defaultImg: pic1, hoverImg: pic5, productName: "Valentina Co-ord Set", price: 1299, rating: 4.5 },
    { id: 1, defaultImg: pic2, hoverImg: pic3, productName: "Elegant Floral Dress", price: 1599, rating: 4.2 },
    { id: 2, defaultImg: pic3, hoverImg: pic4, productName: "Casual Denim Jacket", price: 999, rating: 4.7 },
    { id: 3, defaultImg: pic4, hoverImg: pic5, productName: "Summer Beach Dress", price: 1799, rating: 4.3 },
    { id: 4, defaultImg: pic5, hoverImg: pic6, productName: "Classic White Shirt", price: 899, rating: 4.8 },
    { id: 5, defaultImg: pic5, hoverImg: pic6, productName: "Classic White Shirt", price: 1899, rating: 4.8 },
    { id: 6, defaultImg: pic5, hoverImg: pic6, productName: "Classic White Shirt", price: 1299, rating: 4.8 },
    { id: 7, defaultImg: pic5, hoverImg: pic6, productName: "Classic White Shirt", price: 1399, rating: 4.8 },
    { id: 8, defaultImg: pic5, hoverImg: pic6, productName: "Classic White Shirt", price: 1699, rating: 4.8 },
    { id: 9, defaultImg: pic3, hoverImg: pic4, productName: "Casual Denim Jacket", price: 999, rating: 4.7 },
    { id: 10, defaultImg: pic3, hoverImg: pic4, productName: "Casual Denim Jacket", price: 999, rating: 4.7 },
    { id: 11, defaultImg: pic3, hoverImg: pic4, productName: "Casual Denim Jacket", price: 999, rating: 4.7 },
    { id:12, defaultImg: pic3, hoverImg: pic4, productName: "Casual Denim Jacket", price: 999, rating: 4.7 },
    { id: 13, defaultImg: pic3, hoverImg: pic4, productName: "Casual Denim Jacket", price: 999, rating: 4.7 },

  ];


  const handleCategoryClick = (title) => {
    // redirect to subcategory page
    router.push(`/product/${encodeURIComponent(title)}`);
  };


  return (
    <>


      {/* Best Sellers Section */}
      <div className="container midsec">
        {/* <p>CHECK OUT</p> */}
        <b>RELATED PRODUCTS</b>
      </div>

      {/* Product Cards Grid */}
      <div className="related-product-container">
        {products.map(({ id, defaultImg, hoverImg, productName, price, rating }) => (
          <div className="related-product-card" key={id} 
          onClick={() => handleCategoryClick(productName)}
          >
            <motion.img
              src={hoveredStates[id] ? hoverImg.src : defaultImg.src}
              alt={productName}
              className="related-product-image"
              onMouseEnter={() => toggleHover(id, true)}
              onMouseLeave={() => toggleHover(id, false)}
              animate={{ scale: hoveredStates[id] ? 1.05 : 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />

            <div className="related-product-info">
              <p className="related-product-name">{productName}</p>
              <div className="related-product-rating">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={i < Math.round(rating) ? "star filled" : "star"}>★</span>
                ))}
                <span className="rating-number">({rating})</span>
              </div>
              <p className="related-product-price">₹{price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View Best Sellers Button */}
      <div className="buttonsec">
        <button className="btn viewbutton">VIEW BEST SELLERS</button>
      </div>

      <hr />




      {/* Featured Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-7 h-75 sec1">
            <Image src={pic1} className="sec1img" alt="Model Image" />
          </div>
          <div className="col-md-5  h-75 sec2">
            <Image src={pic2} className="img-fluid modalPic" alt="Product Image" />
            <p className="mt-3">WAVY AFFAIR TIE & DYE CO-ORD SET</p>
            <div className="buttonsec text-start">
              <div className="text-warning">★★★★★ <span className="text-muted">1 review</span></div>
              <p><strong>₹2,990</strong></p>
             <div className='viewbtnSec'>
             <button className="btn viewbutton">VIEW BEST SELLERS</button>
             </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
