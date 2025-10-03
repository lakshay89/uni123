"use client";
import React, { useState, useEffect } from "react";
import pic1 from '@/Assets/Images/Banner1.jpeg';
import pic2 from '@/Assets/Images/Banner2.jpg';
import pic3 from '@/Assets/Images/slide1.jpg';
import pic4 from '@/Assets/Images/slide2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroCarousel.css';
import Image from "next/image";
import { Modal, Button } from "react-bootstrap";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const hero = {
    image: pic1,
    title: "Welcome to Our Site",
    subtitle: "Discover amazing products every day",
    buttonText: "Enquiry Now",
    buttonLink: "#shop"
  };

  const rightSlides = [
    { image: pic3, caption: "Fashion" },
    { image: pic4, caption: "Accessories" },
    { image: pic3, caption: "Footwear" }
  ];

  const [index, setIndex] = useState(0);

  // Auto increment right carousel every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % rightSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row hero-section align-items-center">
        {/* Left Section */}
        <div className="col-md-8 hero-left position-relative text-white">
          <Image src={hero.image} alt="Hero" className="img-fluid hero-bg" />
          <div className="hero-overlay p-4">
            <h1>{hero.title}</h1>
            <p>{hero.subtitle}</p>
            <Button variant="" className="buttonoverlay" onClick={handleShow}>
              {hero.buttonText}
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-4">
          <div className="right-carousel">
            <Image
              src={rightSlides[index].image}
              alt={rightSlides[index].caption}
              className="d-block w-100 rounded shadow-sm"
            />
          </div>
        </div>

        {/* Modal */}
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Fill the Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="nameInput"
                  placeholder="Name"
                />
                <label htmlFor="nameInput">Name *</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  placeholder="Email Address"
                />
                <label htmlFor="emailInput">Email *</label>
              </div>

              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="commentsTextarea"
                  rows={8}
                ></textarea>
                <label htmlFor="commentsTextarea">Comments</label>
              </div>

              <Button className=""   type="submit">
                Submit
              </Button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Header;
