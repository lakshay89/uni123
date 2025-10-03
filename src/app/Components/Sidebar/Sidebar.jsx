"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import "./filtersidebar.css";

export default function FilterSidebar() {
  const [openSections, setOpenSections] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "Blazers",
    "Shirts",
    "Trousers",
    "Uniforms",
    "T-Shirts",
    "Jackets",
  ];

  const sizes = ["S", "M", "L", "XL", "XXL", "3XL"];

  const filters = [
    { title: "Color", type: "text", placeholder: "Enter color" },
    { title: "Style Fit", type: "text", placeholder: "Enter style fit" },
    { title: "Fabric", type: "text", placeholder: "Enter fabric" },
    { title: "Composition", type: "text", placeholder: "Enter composition" },
    { title: "Blazer Length", type: "text", placeholder: "Enter blazer length" },
    { title: "Sleeve Length", type: "text", placeholder: "Enter sleeve length" },
    { title: "Wash Care", type: "text", placeholder: "Enter wash care" },
  ];

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="filter-sidebar ">
      {/* Sidebar Heading */}
      <h5 className="sidebar-title mb-3">Filter Products</h5>

      {/* Search Box */}
      <div className="filter-search mb-4">
        <div className="input-group">
          <span className="input-group-text">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Category Dropdown */}
      <div className="filter-category mb-4">
        <label className="form-label">Category</label>
        <select
          className="form-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Size Filter */}
      <div className="filter-section mb-3">
        <div
          className="filter-header"
          onClick={() => toggleSection("Size")}
        >
          <span>Size</span>
          {openSections["Size"] ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        <div className={`filter-body ${openSections["Size"] ? "open" : ""}`}>
          {sizes.map((size, idx) => (
            <div className="form-check" key={idx}>
              <input className="form-check-input" type="checkbox" id={size} />
              <label className="form-check-label" htmlFor={size}>
                {size}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="filter-section mb-3">
        <div
          className="filter-header"
          onClick={() => toggleSection("Price")}
        >
          <span>Price</span>
          {openSections["Price"] ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        <div className={`filter-body ${openSections["Price"] ? "open" : ""}`}>
          <div className="d-flex gap-2">
            <input
              type="number"
              className="form-control"
              placeholder="Min"
            />
            <input
              type="number"
              className="form-control"
              placeholder="Max"
            />
          </div>
        </div>
      </div>

      {/* Dynamic Collapsible Sections */}
      <div className="filter-sections">
        {filters.map((filter, index) => (
          <div key={index} className="filter-section mb-3">
            <div
              className="filter-header"
              onClick={() => toggleSection(filter.title)}
            >
              <span>{filter.title}</span>
              {openSections[filter.title] ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </div>
            <div
              className={`filter-body ${
                openSections[filter.title] ? "open" : ""
              }`}
            >
              <input
                type={filter.type}
                placeholder={filter.placeholder}
                className="form-control"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
