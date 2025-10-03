"use client";
import React, { useState, useEffect } from "react";
import "./testimonial.css";
import pic1 from "@/Assets/Images/client1.jpg";
import pic2 from "@/Assets/Images/client2.jpg";
import pic3 from "@/Assets/Images/client3.jpg";
import Image from "next/image";

const testimonials = [
  { name: "Rajesh Sharma", designation: "Factory Manager", image: pic1, review: "The uniforms delivered by Uniform vala are of top-notch quality. Our staff looks professional and feels comfortable all day!" },
  { name: "Anita Verma", designation: "HR Manager", image: pic2, review: "Uniform vala’s custom designs and timely delivery have made a huge difference in our company image." },
  { name: "Vikram Singh", designation: "Operations Head", image: pic3, review: "Exceptional quality and perfect fit! Our team loves the new uniforms." },
  { name: "Sunita Mehra", designation: "School Principal", image: pic1, review: "Very professional service and durable fabrics. Parents and students both appreciated the uniforms." },
  { name: "Ravi Patel", designation: "Restaurant Owner", image: pic2, review: "Our staff now looks neat and elegant. The delivery was quick and hassle-free!" },
  { name: "Pooja Kapoor", designation: "Corporate Trainer", image: pic3, review: "Perfect stitching and quality material. Highly recommended for corporate uniforms." },
];

export default function Testimonial() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  // Get the 3 testimonials to display, wrapping around the array
  const displayedTestimonials = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length],
  ];

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title text-light">What Our Clients Say</h2>
      <div className="testimonial-row">
        {displayedTestimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <p className="testimonial-review">"{t.review}"</p>
            <div className="testimonial-user">
              <Image src={t.image} alt={t.name} className="testimonial-img" />
              <div>
                <h5 className="testimonial-name">{t.name}</h5>
                <p className="testimonial-designation">{t.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
