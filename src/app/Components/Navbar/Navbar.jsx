"use client";
import React, { useState, useEffect } from "react";
import {
  IoLogoTwitter,
  IoCartOutline,
  IoHeartOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoMenuOutline,
  IoCloseOutline,
  IoHomeOutline,
  IoGridOutline,
} from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
import logo from "@/Assets/Images/logo.jpg";
import "./navbar.css";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile width
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 991);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDropdownClick = (index) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  const closeMobileDropdown = () => setActiveDropdown(null);
  
  const closeMobileMenu = () => {
    setMobileMenu(false);
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    setActiveDropdown(null);
  };

  const menuItems = [
    {
      title: "Corporate",
      subMenu: [
        { label: "Corporate Blazers", href: "/products" },
        { label: "Corporate Female Dress", href: "/products" },
        { label: "Corporate Female Kurti", href: "/products" },
        { label: "Corporate Female Top", href: "/products" },
        { label: "Corporate Shirt", href: "/products" },
        { label: "Corporate T-Shirt", href: "/products" },
        { label: "Corporate Trousers", href: "/products" },
        { label: "Corporate Vest", href: "/products" },
      ],
    },
    {
      title: "Hotel Aprons",
      subMenu: [
        { label: "Hotel Bandana & Skull Cap", href: "/products" },
        { label: "Hotel Bed Sheet & Napkins", href: "/products" },
        { label: "Hotel Chef Coats", href: "/products" },
        { label: "Hotel Chef Trousers", href: "/products" },
        { label: "Hotel Accessories", href: "/products" },
        { label: "Hotel Housekeeping & Waiter Shirt", href: "/products" },
        { label: "Hotel Housekeeping & Waiter Trousers", href: "/products" },
        { label: "Hotel Housekeeping & Waiter Vest", href: "/products" },
      ],
    },
    {
      title: "Spa & Salon",
      subMenu: [
        { label: "Spa & Salon Blazers & Jackets", href: "/products" },
        { label: "Spa & Salon Dress", href: "/products" },
        { label: "Spa & Salon Female Kurti", href: "/products" },
        { label: "Spa & Salon Gown", href: "/products" },
        { label: "Hair Cutting Sheet & Cap", href: "/products" },
        { label: "Spa & Salon Pajamas", href: "/products" },
        { label: "Salon Apron", href: "/products" },
        { label: "Spa & Salon Shirts", href: "/products" },
        { label: "Slimming Gown", href: "/products" },
        { label: "Spa & Salon Trousers", href: "/products" },
        { label: "Spa & Salon Tunics Tops", href: "/products" },
      ],
    },
    {
      title: "Security",
      subMenu: [
        { label: "Security Jackets", href: "/products" },
        { label: "Security Shirts", href: "/products" },
        { label: "Security Trousers", href: "/products" },
      ],
    },
    {
      title: "Hospital",
      subMenu: [
        { label: "Doctors Lab Coat", href: "/products" },
        { label: "Nurse & Ward Boy Tunic", href: "/products" },
        { label: "Nurse & Ward Boy Trouser", href: "/products" },
        { label: "Patient Uniform", href: "/products" },
        { label: "OT Uniform", href: "/products" },
      ],
    },
    {
      title: "Industrial",
      subMenu: [
        { label: "Industrial Dungarees / Coverall", href: "/products" },
        { label: "Industrial Vest Jackets", href: "/products" },
        { label: "Industrial Shirts", href: "/products" },
        { label: "Industrial T-Shirts", href: "/products" },
        { label: "Industrial Trousers", href: "/products" },
      ],
    },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="TopNavbarContainer">
        <div className="TopNavbar">
          <div className="TopNavLeftSec">
            <p className="navtext">Talk to Uniform Consultant </p>
            <div className="d-flex align-items-center">
              <IoLogoTwitter className="fs-4 ms-2" />
              <a
                href="tel:+919876543210"
                className="text-decoration-none text-dark ms-2 navtext"
              >
                +91 9218 008 549 |
              </a>
              <p className="ms-3 navtext">Mon - Sat (10:30 AM to 5:30 PM) |</p>
            </div>
            <div className="ms-3 ">
              <p className="navtext">ISO 9001:2015 Certified Company</p>
            </div>
          </div>

          <div className="TopNavRightSec">
            <button className="PayOnlineBtn">Pay Online</button>
            <ul className="list-unstyled PagesSection d-flex">
              <li className="list-group-item me-3">
                <Link className="AnchorLink" href="/aboutus">
                  About
                </Link>
              </li>
              |
              <li className="list-group-item me-3">
                <Link className="AnchorLink" href="/contactus">
                  Contact
                </Link>
              </li>
              |
              <li className="list-group-item me-3">
                <Link className="AnchorLink" href="/aboutus">
                  Blog
                </Link>
              </li>
              |
              <li className="list-group-item me-3">
                <Link className="AnchorLink" href="/aboutus">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Bottom Navbar */}
      <div className="BottomNavbar">
        <div className="BottomNavLeft">
          <Link href="/" onClick={closeMobileMenu}>
            <Image src={logo} alt="Logo" className="navbar-logo" />
          </Link>
        </div>

        {/* Hamburger icon */}
        <div
          className="mobileMenuIcon"
          onClick={toggleMobileMenu}
        >
          {mobileMenu ? <IoCloseOutline size={28} /> : <IoMenuOutline size={28} />}
        </div>

        {/* Middle menu */}
        <div className={`BottomNavMid ${mobileMenu ? "show-mobile-menu" : ""}`}>
          {isMobile && (
            <button className="mobile-menu-close" onClick={closeMobileMenu}>
              <IoCloseOutline />
            </button>
          )}
          <ul className="list-unstyled d-flex dropdown-section flex-wrap">
            {menuItems.map((menu, idx) => (
              <li
                className={`dropdown bottomNavDropdown ${activeDropdown === idx ? "active" : ""}`}
                key={idx}
              >
                {/* Mobile click */}
                <div
                  className="dropdown-title"
                  onClick={() => handleDropdownClick(idx)}
                >
                  {menu.title} {isMobile && "▾"}
                </div>

                {/* Desktop hover */}
                {!isMobile && (
                  <ul className="dropdown-menu">
                    <div className="dropdown-menu-grid">
                      {menu.subMenu.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <Link
                            href={sub.href}
                            className="dropdown-link"
                            onClick={closeMobileMenu}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </ul>
                )}

                {/* Mobile dropdown */}
                {isMobile && (
                  <ul className="dropdown-menu">
                    <button
                      className="dropdown-close"
                      onClick={(e) => {
                        e.stopPropagation();
                        closeMobileDropdown();
                      }}
                    >
                      <IoCloseOutline />
                    </button>
                    <div className="dropdown-menu-grid">
                      {menu.subMenu.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <Link
                            href={sub.href}
                            className="dropdown-link"
                            onClick={() => {
                              closeMobileDropdown();
                              closeMobileMenu();
                            }}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right icons */}
        <div className="BottomNavRight">
          <IoSearchOutline className="nav-icon me-3" />
          <Link href="/signup">
            <IoPersonOutline className="nav-icon me-3" />
          </Link>
          <Link href="/wishlist">
            <IoHeartOutline className="nav-icon me-3" />
          </Link>
          <Link href="/cart">
            <IoCartOutline className="nav-icon" />
          </Link>
        </div>
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="MobileBottomNav">
        <div className="d-flex align-items-center justify-content-around">
          <Link href="/" className="mobile-nav-icon" onClick={closeMobileMenu}>
            <IoHomeOutline size={24} />
            <span>Home</span>
          </Link>
          <Link href="/wishlist" className="mobile-nav-icon" onClick={closeMobileMenu}>
            <IoHeartOutline size={24} />
            <span>Wishlist</span>
          </Link>
          <Link href="/cart" className="mobile-nav-icon" onClick={closeMobileMenu}>
            <IoCartOutline size={24} />
            <span>Cart</span>
          </Link>
          <Link href="/products" className="mobile-nav-icon" onClick={closeMobileMenu}>
            <IoGridOutline size={24} />
            <span>All Products</span>
          </Link>
          <Link href="/signup" className="mobile-nav-icon" onClick={closeMobileMenu}>
            <CgProfile size={24} />
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </>
  );
}