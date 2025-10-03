"use client";
import React, { useState } from 'react';
import './addtocart.css';
import { IoMdCart } from "react-icons/io";
import { GiReturnArrow } from "react-icons/gi";
import { IoInformationCircle } from "react-icons/io5";
import Image from 'next/image';
import { FaAmazonPay } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { useRouter } from 'next/navigation';
import pic1 from '@/Assets/Images/dress.webp';

// ✅ Static product data
const cartProductsData = [
  {
    id: 1,
    name: "SPA DRESS FOR WOMEN",
    serialNo: "1122321BC",
    mfc: "04/09/2026",
    exp: "04/09/2030",
    price: 45.0,
    quantity: 1,
    image: pic1,
    sizes: ["XL", "XXL", "M"]
  },
  {
    id: 2,
    name: "SPA DRESS FOR MAN ",
    serialNo: "44223AC",
    mfc: "04/09/2024",
    exp: "04/09/2027",
    price: 123.0,
    quantity: 2,
    image: pic1,
    sizes: ["XL", "XXL", "M"]
  },
];

export default function AddToCart() {
  const [cartProducts, setCartProducts] = useState(cartProductsData);
  const [selectedOption, setSelectedOption] = useState('ship');
  const router = useRouter();

  // ✅ Remove product from cart
  const handleRemove = (id) => {
    const updatedCart = cartProducts.filter(product => product.id !== id);
    setCartProducts(updatedCart);
  };

  // ✅ Update quantity for specific product
  const handleQuantityChange = (id, delta) => {
    setCartProducts(prev =>
      prev.map(product =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity + delta) }
          : product
      )
    );
  };

  // ✅ Calculate totals
  const subtotal = cartProducts.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const tax = subtotal * 0.1; // 10% tax
  const shipping = 145; // fixed
  const total = subtotal + tax + shipping;

  return (
    <section>
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-8">
            <div className='cartLeftAllSec'>
              <div className='row'>
                <div className="col-md-6">
                  <div className='cartLeftTopSec1'>
                    <p>Register now & get FREE standard shipping. US only</p>
                    <div className='d-flex'>
                      <button className='RegisterBtn w-50'>Register</button>
                      <button className='RegisterBtn w-50'>Login</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className='cartLeftTopSe2'>
                    <p><span><IoMdCart /></span> Faster Checkout</p>
                    <p><span><GiReturnArrow /></span> Easier Returns and Exchanges</p>
                    <p><span><IoInformationCircle /></span> Quick Order Information and Tracking</p>
                  </div>
                </div>

                <div className='cartCardSection' style={{ maxHeight: '85vh', overflowY: 'auto' }}>
                  {cartProducts.map((product, index) => (
                    <div className='cartLeftBottomSec' key={product.id}>
                      <div className='cartBottomTitleSec'>
                        <h3>{product.name}</h3>
                      </div>
                      <hr />
                      <div className="row">
                        <div className='col-md-4 text-center'>
                          <p className='mb-3'><b>{product.name?.split(' ')[0]}</b></p>
                          <Image src={product.image} alt="ProductImg" height={220} width={180} className='productImage' />
                        </div>
                        <div className='col-md-8'>
                          <div className='d-flex justify-content-between mb-3'>
                            <b className='text-warning fs-4'>{product.name}</b>
                          </div>
                          <div className='cartDetails'>
                            <p><b className='me-3'>Price:</b> ${product.price.toFixed(2)}</p>
                            <p>
                              <b className='me-3'>Quantity:</b>
                              <button className='cartBtn' onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                              {product.quantity}
                              <button className='cartBtn' onClick={() => handleQuantityChange(product.id, 1)}>+</button>
                            </p>
                          </div>

                          <div className="form-check mt-3">
                            <input
                              className="form-check-input"
                              type="radio"
                              name={`radioDefault${index}`}
                              id={`ship${index}`}
                              value="ship"
                              checked={selectedOption === 'ship'}
                              onChange={(e) => setSelectedOption(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor={`ship${index}`}>Ship to Address</label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name={`radioDefault${index}`}
                              id={`pickup${index}`}
                              value="pickup"
                              checked={selectedOption === 'pickup'}
                              onChange={(e) => setSelectedOption(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor={`pickup${index}`}>Pick up in Store</label>
                          </div>

                          <div className='mt-3 mb-3'>
                            <button className='btn btn-success w-25 me-2' onClick={() => handleRemove(product.id)}>
                              <MdDeleteSweep className='fs-3' /> Remove
                            </button>
                            <button className='btn btn-success w-25 p-2'>Save for later</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-4">
            <div className='cartRightSec mt-2'>
              <div className='cartRightTopSec'>
                <div className='cartRightTopTitle'>
                  <h5>Order Summary</h5>
                </div>
                <div className='d-flex justify-content-between'>
                  <p>Subtotal :</p><span className='text-danger'>${subtotal.toFixed(2)}</span>
                </div>
                <div className='d-flex justify-content-between'>
                  <p>Estimated tax :</p><span className='text-danger'>${tax.toFixed(2)}</span>
                </div>
                <div className='d-flex justify-content-between'>
                  <p>Estimated Shipping :</p><span className='text-danger'>${shipping.toFixed(2)}</span>
                </div>
                <hr />
                <div className='d-flex justify-content-between'>
                  <b>Estimated Total :</b><span className='text-danger'>${total.toFixed(2)}</span>
                </div>
                <p>4 interest-free payments available. Learn more</p>
                <hr />
              </div>
              <div className='cartRightBottomSec'>
                <label className='mb-1'>Apply Promo Code</label>
                <div className='d-flex gap-3'>
                  <input type="text" className="form-control w-75" placeholder="Enter promo code" />
                  <button className='btn btn-success w-25 p-2'>Apply</button>
                </div>
                <div className='mt-3'>
                  <button
                    className='ms-2 text-light btn btn-danger w-100'
                    onClick={() => router.push('/Pages/checkouts')}
                  >
                    Checkout   
                  </button>
                  <button className='ms-2 text-light mt-3 btn btn-danger w-100'>
                    <FaAmazonPay className='fs-2' />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* End Right Section */}
        </div>
      </div>
    </section>
  );
}
