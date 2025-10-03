// components/HeroSection.jsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./heroSection.css";

export default function HeroSection({ categories = [] }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Enquiry Submitted!\nName: ${formData.name}\nPhone: ${formData.phone}\nCategory: ${formData.category}`);
    setFormData({ name: "", phone: "", category: "" });
  };

  // Generate dynamic breadcrumbs: Home / Category / Subcategory
  const breadcrumbs = [
    { label: "Home", href: "/" },
    ...categories.map((cat, idx) => {
      const path = "/category/" + categories.slice(0, idx + 1).join("/").toLowerCase().replace(/\s+/g, "-");
      return { label: cat, href: path };
    }),
  ];

  return (
    <section className="hero-section">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb-nav">
          {breadcrumbs.map((crumb, idx) => (
            <span key={idx}>
              {idx !== 0 && " / "}
              {idx !== breadcrumbs.length - 1 ? (
                <Link href={crumb.href}>{crumb.label}</Link>
              ) : (
                <span className="current">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        {/* Hero Title */}
        <h1 className="hero-title">
          Best Range Of Salon Uniform And Spa Uniform
        </h1>
        <p className="hero-subtitle">
          Look Comfortable And Relaxed With Spa Uniform & Salon Uniforms
        </p>

        {/* Enquiry Form */}
        <form className="hero-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number*"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Choose Category</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <button type="submit" className="btn-request">
            Request a call
          </button>
        </form>
      </div>
    </section>
  );
}
