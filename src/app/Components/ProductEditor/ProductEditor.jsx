"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Rnd } from "react-rnd";

export default function ProductEditor({ show, onClose }) {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [text, setText] = useState("type name");
  const [textColor, setTextColor] = useState("#ff0000");
  const [orientation, setOrientation] = useState("horizontal");
  const [isLandscape, setIsLandscape] = useState(true);

  const [imageSize, setImageSize] = useState({ width: 200, height: 200 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  const containerRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedImage(url);

      const img = new window.Image();
      img.src = url;
      img.onload = () => {
        setIsLandscape(img.width > img.height);

        // ✅ Auto-fit uploaded image to container
        if (containerRef.current) {
          const { offsetWidth, offsetHeight } = containerRef.current;
          const imgRatio = img.width / img.height;
          const boxRatio = offsetWidth / offsetHeight;

          let newWidth, newHeight;
          if (imgRatio > boxRatio) {
            // Image is wider
            newWidth = offsetWidth;
            newHeight = offsetWidth / imgRatio;
          } else {
            // Image is taller
            newHeight = offsetHeight;
            newWidth = offsetHeight * imgRatio;
          }

          setImageSize({ width: newWidth, height: newHeight });
          setImagePosition({
            x: (offsetWidth - newWidth) / 2,
            y: (offsetHeight - newHeight) / 2,
          });
        }
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
            <button type="button" className="btn-close" onClick={onClose}></button>
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

            {/* File + Color Picker */}
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

            {/* Text Input */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text"
              />
            </div>

            {/* Preview Canvas */}
            <div
              ref={containerRef}
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
                overflow: "hidden", // ✅ hides outside part
              }}
            >
              {/* Background */}
              <Image
                src="/Images/wall-background.png"
                alt="Background"
                fill
                style={{ objectFit: "cover", zIndex: 1 }}
              />

              {/* ✅ Uploaded Image */}
              {uploadedImage && (
                <Rnd
                  size={imageSize}
                  position={imagePosition}
                  onDragStop={(e, d) => setImagePosition({ x: d.x, y: d.y })}
                  onResizeStop={(e, direction, ref, delta, position) => {
                    setImageSize({
                      width: ref.offsetWidth,
                      height: ref.offsetHeight,
                    });
                    setImagePosition(position);
                  }}
                  lockAspectRatio
                  dragGrid={[1, 1]}
                  style={{
                    border: "1px dashed #00aaff",
                    background: "transparent",
                    zIndex: 10,
                  }}
                >
                  <Image
                    src={uploadedImage}
                    alt="Uploaded"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </Rnd>
              )}

              {/* ✅ Text Layer - Always on Top */}
              <Rnd
                bounds="parent"
                default={{
                  x: 100,
                  y: 200,
                  width: 150,
                  height: 40,
                }}
                enableResizing={false}
                style={{ zIndex: 20 }} // ✅ ensures text above image
              >
                <div
                  style={{
                    color: textColor,
                    fontWeight: "bold",
                    fontSize: "22px",
                    textAlign: "center",
                    cursor: "move",
                    userSelect: "none",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.4)", // improves visibility
                  }}
                >
                  {text}
                </div>
              </Rnd>
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
