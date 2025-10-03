"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./bestseller.css";
import pic1 from "@/Assets/Images/salon.avif";
import pic2 from "@/Assets/Images/doctor.jpg";
import pic3 from "@/Assets/Images/receptionist.jpg";
import pic4 from "@/Assets/Images/Corporate.jpg";
import pic5 from "@/Assets/Images/security.png";
import pic6 from "@/Assets/Images/salon.avif";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Sidebar from "../Sidebar/Sidebar";
import Link from "next/link";

export default function BestProduct() {
  const router = useRouter();
  const [hoveredStates, setHoveredStates] = useState({});
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [enquiryProduct, setEnquiryProduct] = useState("");

  const toggleHover = (id, isHovered) => {
    setHoveredStates((prev) => ({ ...prev, [id]: isHovered }));
  };

  const products = [
    { id: 0, defaultImg: pic3, hoverImg: pic1, productName: "Spa & Tunics", price: 1299 },
    { id: 1, defaultImg: pic4, hoverImg: pic2, productName: "Spa & Salon Blazers & Jackets", price: 1230 },
    { id: 2, defaultImg: pic5, hoverImg: pic3, productName: "Spa & Salon Dress", price: 1230 },
    { id: 3, defaultImg: pic6, hoverImg: pic4, productName: "Spa & Salon Female Kurti", price: 1230 },
    { id: 4, defaultImg: pic1, hoverImg: pic5, productName: "Spa & Salon Gown", price: 1230 },
    { id: 5, defaultImg: pic2, hoverImg: pic6, productName: "Hair Cutting Sheet & Cap", price: 1230 },
    { id: 6, defaultImg: pic3, hoverImg: pic1, productName: "Spa & Salon Pajamas", price: 1230 },
    { id: 7, defaultImg: pic4, hoverImg: pic2, productName: "Salon Apron", price: 1230 }
  ];
  

  const handleCategoryClick = (productName) => {
    router.push(`/product/${encodeURIComponent(productName)}`);
  };

  const handleEnquiryClick = (productName) => {
    setEnquiryProduct(productName);
    setShowEnquiry(true);
  };

  const handleCloseEnquiry = () => {
    setShowEnquiry(false);
    setEnquiryProduct("");
  };

  const handleSubmitEnquiry = (e) => {
    e.preventDefault();
    alert(`Enquiry submitted for ${enquiryProduct}`);
    handleCloseEnquiry();
  };

  return (
    <>
      <div className="container midsec">
        <p className="HeadingText"> BEST SELLING PRODUCTS</p>
      </div>

      <div className="container">
        <div className="row">
         
          <div className="col-md-12">
            <div className="Bestproduct-container">
              {products.map(({ id, defaultImg, hoverImg, productName, price }) => (
                <Link href={`/product/${id}`} className="text-decoration-none" key={id}>
                  <div className="Bestproduct-card" >
                  <motion.img
                    src={hoveredStates[id] ? hoverImg.src : defaultImg.src}
                    alt={productName}
                    className="Bestproduct-image"
                    onMouseEnter={() => toggleHover(id, true)}
                    onMouseLeave={() => toggleHover(id, false)}
                    animate={{ scale: hoveredStates[id] ? 1.05 : 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                  <div className="Bestproduct-info">
                    <p className="Bestproduct-name">{productName}</p>
                    <p className="Bestproduct-price">₹  {price}</p>
                    <div className="buttonPortion">
                      <button
                        className=" enquiryBtn"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent card click
                          handleEnquiryClick(productName);
                        }}
                      >
                        Enquiry
                      </button>
                      <button
                        className=" addToCartBtn"
                        onClick={() => handleCategoryClick(productName)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      {showEnquiry && (
        <div className="enquiry-modal">
          <div className="enquiry-modal-content">
            <span className="close-btn" onClick={handleCloseEnquiry}>
              &times;
            </span>
            <h3>Enquiry for {enquiryProduct}</h3>
            <form onSubmit={handleSubmitEnquiry}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit" className="btn submitEnquiryBtn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
