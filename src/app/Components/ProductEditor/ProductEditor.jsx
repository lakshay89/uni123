'use client';
import { useState, useRef } from 'react';
import Cropper from 'react-easy-crop';
import Draggable from 'react-draggable';
import { Modal, Button } from 'react-bootstrap';
import './ProductEditor.css';

export default function ProductEditor({ show, onClose }) {
  const [orientation, setOrientation] = useState('vertical');
  const [image, setImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [text, setText] = useState('Your Text');
  const [textColor, setTextColor] = useState('#000000');
  const dragRef = useRef(null);

  const placeholderVertical = '/placeholders/vertical.jpg';
  const placeholderHorizontal = '/placeholders/horizontal.jpg';

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
    }
  };

  return (
    <Modal show={show} onHide={onClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Customise Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Orientation */}
        <div className="mb-3">
          <Button
            variant={orientation === 'vertical' ? 'primary' : 'outline-primary'}
            className="me-2"
            onClick={() => setOrientation('vertical')}
          >
            Vertical
          </Button>
          <Button
            variant={orientation === 'horizontal' ? 'primary' : 'outline-primary'}
            onClick={() => setOrientation('horizontal')}
          >
            Horizontal
          </Button>
        </div>

        {/* Upload */}
        <div className="mb-3">
          <input type="file" accept="image/*" onChange={handleFile} />
        </div>

        {/* Text input + color */}
        <div className="d-flex mb-3">
          <input
            className="form-control me-2"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text"
          />
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </div>

        {/* Image area */}
        <div
          className={`crop-container ${orientation}`}
        >
          <Cropper
            image={image || (orientation === 'vertical' ? placeholderVertical : placeholderHorizontal)}
            crop={{ x: 0, y: 0 }}
            zoom={zoom}
            aspect={orientation === 'vertical' ? 3 / 4 : 4 / 3}
            onZoomChange={setZoom}
            onCropChange={() => {}}
            onCropComplete={() => {}}
            showGrid={false}
          />
          <Draggable bounds="parent" nodeRef={dragRef}>
            <div
              ref={dragRef}
              className="draggable-text"
              style={{ color: textColor }}
            >
              {text}
            </div>
          </Draggable>
        </div>

        {/* Zoom */}
        <div className="mt-3">
          <label>Zoom</label>
          <input
            type="range"
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e) => setZoom(e.target.value)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary">Save</Button>
      </Modal.Footer>
    </Modal>
  );
}
