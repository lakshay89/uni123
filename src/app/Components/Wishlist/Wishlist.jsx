"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdDeleteSweep, MdShoppingCart } from "react-icons/md";
import pic1 from "@/Assets/Images/dress.webp";
import pic2 from "@/Assets/Images/salon.avif";
import "./wishlist.css"; // External CSS

const wishlistProductsData = [
  {
    id: 1,
    name: "GEL SUNSCREEN FOR OILY SKIN",
    price: 45.0,
    image: pic1,
    sizes: ["XXL", "XL", "M"],
  },
  {
    id: 2,
    name: "SPA CREAM FOR LADIES",
    price: 123.0,
    image: pic2,
    sizes: ["XXL", "XL", "M"],
  },
  {
    id: 3,
    name: "HAIR SERUM",
    price: 75.0,
    image: pic1,
    sizes: ["XXL", "XL", "M"],
  },
  {
    id: 4,
    name: "HAIR SERUM",
    price: 75.0,
    image: pic1,
    sizes: ["XXL", "XL", "M"],
  },
];

export default function Wishlist() {
  const [wishlistProducts, setWishlistProducts] = useState(wishlistProductsData);

  const handleRemove = (id) => {
    const updatedWishlist = wishlistProducts.filter(
      (product) => product.id !== id
    );
    setWishlistProducts(updatedWishlist);
  };

  const handleAddToCart = (product) => {
    // 🔥 Integrate with your cart context or API here
    alert(`${product.name} added to cart!`);
  };

  return (
    <section className="wishlist-section py-5">
      <div className="container">
        <h2 className="wishlist-title text-center mb-5">My Wishlist</h2>
        {wishlistProducts.length === 0 ? (
          <p className="text-center text-muted">Your wishlist is empty.</p>
        ) : (
          <div className="wishlist-grid">
            {wishlistProducts.map((product) => (
              <div key={product.id} className="wishlist-card-glass">
                <div className="wishlist-img-wrapper">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={250}
                    className="wishlist-img"
                  />
                  <div className="wishlist-overlay">
                    <button
                      className="wishlist-btn"
                      onClick={() => handleRemove(product.id)}
                    >
                      <MdDeleteSweep /> Remove
                    </button>
                    <button
                      className="wishlist-btn"
                      onClick={() => handleAddToCart(product)}
                    >
                      <MdShoppingCart /> Add to Cart
                    </button>
                  </div>
                </div>
                <div className="wishlist-info">
                  <h5>{product.name}</h5>
                  <p className="price">${product.price.toFixed(2)}</p>
                  <p className="sizes">Sizes: {product.sizes.join(", ")}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
