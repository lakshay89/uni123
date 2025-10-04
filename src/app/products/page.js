'use client';
import Image from "next/image";
import { useState } from "react";
import ProductEditor from "../Components/ProductEditor/ProductEditor"; // fixed path

export default function Page() {
  const [showEditor, setShowEditor] = useState(false);

  const products = [
    {
      id: 1,
      title: "Portrait Acrylic Wall Photo",
      image: "/mockup/Portrait-Acrylic-Wall-Photo-min-500x500.jpg",
    },
    {
      id: 2,
      title: "Portrait Acrylic Wall Photo Dual Border",
      image: "/mockup/Portrait-Acrylic-Wall-Photo-Dual-Border-min-500x500.jpg",
    },
    {
      id: 3,
      title: "Landscape Acrylic Wall Photo",
      image: "/mockup/Landscape-min-500x500.jpg",
    },
  ];

  return (
    <div className="container py-4">
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-12 col-sm-6 col-md-4" key={product.id}>
            <div className="card h-100 border-0 shadow-sm">
              <div
                className="position-relative w-100"
                style={{ aspectRatio: "1/1" }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  style={{ objectFit: "cover", borderRadius: "0.25rem" }}
                  className="card-img-top"
                />
              </div>
              <div className="card-body text-center d-flex flex-column">
                <h5 className="card-title mb-3">{product.title}</h5>
                <button
                  className="btn btn-danger mt-auto"
                  onClick={() => setShowEditor(true)}
                >
                  Customise
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProductEditor show={showEditor} onClose={() => setShowEditor(false)} />
    </div>
  );
}
