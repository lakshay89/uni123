"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Draggable from "react-draggable";

export default function ProductEditor({ show, onClose }) {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [text, setText] = useState("Ikashay");
  const [textColor, setTextColor] = useState("#ff0000");
  const [orientation, setOrientation] = useState("horizontal");
  const [isLandscape, setIsLandscape] = useState(true);

  // 🔧 New nodeRef for react-draggable
  const nodeRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedImage(url);

      const img = new window.Image();
      img.src = url;
      img.onload = () => {
        setIsLandscape(img.width > img.height);
      };
    }
  };

  if (!show) return null;

  return (
    <div
      className="modal show fade d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fw-semibold">Customise Product</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            {/* Orientation Buttons */}
            <div className="mb-3">
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className={`btn btn-${orientation === "vertical" ? "primary" : "outline-primary"}`}
                  onClick={() => setOrientation("vertical")}
                >
                  Vertical
                </button>
                <button
                  type="button"
                  className={`btn btn-${orientation === "horizontal" ? "primary" : "outline-primary"}`}
                  onClick={() => setOrientation("horizontal")}
                >
                  Horizontal
                </button>
              </div>
            </div>

            {/* File + Color picker */}
            <div className="d-flex align-items-center gap-2 mb-3">
              <input
                type="file"
                accept="image/*"
                className="form-control"
                onChange={handleFileChange}
              />
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="form-control form-control-color"
              />
            </div>

            {/* Text input */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text"
              />
            </div>

            {/* Preview */}
            <div
              className="border rounded position-relative mx-auto bg-light"
              style={{
                width:
                  orientation === "horizontal"
                    ? isLandscape
                      ? "500px"
                      : "350px"
                    : isLandscape
                    ? "350px"
                    : "300px",
                height:
                  orientation === "horizontal"
                    ? isLandscape
                      ? "300px"
                      : "400px"
                    : isLandscape
                    ? "400px"
                    : "500px",
                overflow: "hidden",
              }}
            >
              {uploadedImage ? (
                <Image
                  src={uploadedImage}
                  alt="Preview"
                  fill
                  style={{ objectFit: "contain" }}
                />
              ) : (
                <div className="w-100 h-100 d-flex justify-content-center align-items-center text-muted">
                  Upload an image to preview
                </div>
              )}

              {/* ✅ FIXED: Draggable Text using nodeRef */}
              <Draggable bounds="parent" defaultPosition={{ x: 100, y: 100 }} nodeRef={nodeRef}>
                <div
                  ref={nodeRef}
                  style={{
                    position: "absolute",
                    fontWeight: "bold",
                    color: textColor,
                    cursor: "move",
                    fontSize: "22px",
                    userSelect: "none",
                  }}
                >
                  {text}
                </div>
              </Draggable>
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
