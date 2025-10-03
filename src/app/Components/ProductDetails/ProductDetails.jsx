"use client";
import React, { useState } from "react";
import "./productdetails.css"; // external css
import Image from "next/image";
import pic1 from '@/Assets/Images/salon.avif'
import pic2 from '@/Assets/Images/doctor.jpg'
import pic3 from '@/Assets/Images/receptionist.jpg'
import pic4 from '@/Assets/Images/Corporate.jpg'
import pic5 from '@/Assets/Images/security.png'
import pic6 from '@/Assets/Images/salon.avif'
import Tips from '@/Assets/Images/Tips.png'
import popupImg from '@/Assets/Images/modal.jpg'
import { FaInstagram, FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";
import { IoLogoYoutube } from "react-icons/io";

const ProductDetails = () => {
  const images = [pic1, pic2, pic3, pic4, pic5, pic6];
  const [mainImage, setMainImage] = useState(images[0]);
  const [show, setShow] = useState(false)
  const [popup, setPopUp] = useState(false)
  const [enquiryShow, setEnquiryShow] = useState(false);
const handleEnquiryOpen = () => setEnquiryShow(true);
const handleEnquiryClose = () => setEnquiryShow(false);
  


  const prodcutfeature = [
    { id: 1, title: "SAMPLE", price: "$ 3759" },
    { id: 1, title: "5+ pcs", price: "$ 2259" },
    { id: 1, title: "20+ pcs", price: "$ 1159" },
    { id: 1, title: "50+ pcs", price: "$ 4459" }
  ]

  const productSize = [
    { id: 1, size: "XXL" },
    { id: 1, size: "S" },
    { id: 1, size: "M" },
    { id: 1, size: "L" },
    { id: 1, size: "XL" },
    { id: 1, size: "2XL" },
    { id: 1, size: "3XL" },
  ]



  const handleCheckbox = (e) => {
    setShow(e.target.checked)

  }

  const handleShow = () => setPopUp(true)
  const handleClose = () => setPopUp(false)


  return (
    <div className="container product-details-container py-5">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-6">
          <div className="main-image mb-3">
            <Image src={mainImage} alt="Uniform" className="img-fluid rounded shadow" />
          </div>
          <div className="d-flex gap-2 thumbnail-container">
            {images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail-img ${mainImage === img ? "active" : ""}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6 product-info">
          <h2 className="product-title">BLACK FORMAL BLAZER FOR MEN </h2>
          <p className="product-price">₹1,299.00</p>
          <div className="container">
            <div className="row">
              {prodcutfeature.map((item, index) => (
                <div className="col-md-3" key={index}>
                  <div className="StaticDetails">
                    <b>{item.title}</b>
                    <p>{item.price}</p>
                  </div>
                </div>
              ))

              }
            </div>

          </div>

          <div className="my-4 mx-2" >

            <p className="product-id mb-0 d-flex gap-3"><b> Product Code (SKU)</b> UNB-MASK-02</p>
            <p className="product-id mb-0 d-flex gap-3"><b>Fabric Description	:</b> 	Polyester Cotton</p>
            <p className="product-id mb-0 d-flex gap-3"><b>Dispatch Time	:</b> 5-6 Working Days ( T&C Apply )</p>
          </div>


          <div className="d-flex justify-content-between">
            <b>Select Size </b>
            <p>Size Chart </p>
          </div>

          <div className="d-flex ">


            {productSize.map((item, index) => (
              <div className="text-center" key={index}>

                <p>{item.size}</p>

                <div className="d-flex justify-content-center">
                  <input type="number" className="inputQuatity form-control" />
                </div>
              </div>
            ))
            }

          </div>


          <div className="d-flex justify-content-between my-4">
            <div className="d-flex gap-2">
              <input type="checkbox" className="" onChange={handleCheckbox} />
              <b className=" d-flex align-items-center pb-0">Interested in Embroidery</b>
            </div>
            <div className="d-flex align-items-center me-2" onClick={handleShow} >
              <Image src={Tips} alt="icon" className="me-2" height={20} width={20} />
              <p className="mb-0"> Tips For Best Quality Embroidery</p>
            </div>
          </div>
          {/* Modal  */}

          <Modal show={popup} onHide={handleClose} centered size="lg">
            <Modal.Body className="text-center">
              <Image
                src={popupImg}
                alt="big"
                className="img-fluid rounded"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="" className="productBtn" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <div>
            {show && (
              <div>
                <div className="d-grid gap-2 my-3">
                  <label htmlFor="">Embroidery Logo File *</label>
                  <input type="file" className="form-control w-50" />
                </div>

                <div>


                  <div className="my-4 mx-2" >

                    <p className="product-id mb-0 d-flex gap-3"><b> ₹150.00</b>per embroidery logo charge in a sample order.</p>
                    <p className="product-id mb-0 d-flex gap-3"><b>₹75.00 </b>per Embroidery Logo charge if order 5+.</p>
                    <p className="product-id mb-0 d-flex gap-3"><b>₹50.00</b>  per Embroidery Logo charge if order 20+.</p>
                  </div>






                </div>

              </div>
            )

            }
          </div>


          <div className="d-flex gap-3">
            <button className="productBtn">Wishlist</button>
            <button className="productBtn">Add To Cart</button>
            <button className="productBtn" onClick={handleEnquiryOpen}>Enquiry Now</button>
          </div>

          <hr />




          {/* Enquiry Modal */}
<Modal show={enquiryShow} onHide={handleEnquiryClose} centered>
  <Modal.Header closeButton>
    <Modal.Title>Product Enquiry</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" placeholder="Your Name" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" placeholder="Your Email" />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input type="text" className="form-control" id="phone" placeholder="Your Phone" />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea className="form-control" id="message" rows={3} placeholder="Your Message"></textarea>
      </div>
    </form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleEnquiryClose}>Close</Button>
    <Button variant="primary">Submit</Button>
  </Modal.Footer> 
</Modal>

          

          <div className="shareSec">
            <b>share it</b>
            <div className=" iconSection d-flex gap-3 my-2">
              <FaInstagram className="fs-3" /><FaFacebookSquare className="fs-3" /> <FaTwitter className="fs-3" /> <IoLogoYoutube className="fs-3" /><FaLinkedin className="fs-3" />

            </div>
          </div>



        </div>


      </div>
      <div className="productEveDetails">
        <h3 className="text-center Themetext">PRODUCT DETAILS</h3>
        <b className="boldText "> Black Formal Blazer For Men</b>

        <br />

        <p>
          This blend of Polyester Viscose fabric is comfortable to wear due to breathable yarns. Uniform Bucket Range of MALE'S Blazers are made up of fine quality fabric and export quality stitching that will give you a smart look. It is ideal for corporate, office wear, workwear, etc.
        </p>


        <h4> Notched Collar With Flap Pockets</h4>

        <p><b>COLOR -</b>  Black</p>
        <p><b>STYLE -</b> FIT- Regular</p>
        <p><b>FABRIC-</b> Polyester Viscose Twill</p>
        <p><b> COMPOSITION-</b> 67% Polyester 33% Viscose Twill</p>
        <p><b>BLAZER LENGTH- </b> Approx 28 inches | Medium Size</p>
        <p><b>SLEEVE LENGTH-</b> Approx 24 inches | Medium Size</p>
        <p><b> FAB - </b>   SUMO-PV-SUI-TW</p>
        <p><b> WASH CARE- </b>  Do not bleach</p>


      </div>
    </div>
  );
};

export default ProductDetails;
