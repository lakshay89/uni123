"use client"
import { useState } from 'react';

export default function About() {
  const [photo, setPhoto] = useState(null);
  const [size, setSize] = useState('small');
  const [border, setBorder] = useState('none');
  const [frame, setFrame] = useState('classic');

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const priceMap = {
    small: 40,
    medium: 50,
    large: 70,
  };
  const borderMap = {
    none: 0,
    thin: 10,
    thick: 20,
  };
  const frameMap = {
    classic: 0,
    modern: 15,
    vintage: 15,
  };

  const total =
    priceMap[size] + borderMap[border] + frameMap[frame];

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <input type="file" onChange={handleUpload} className="form-control mb-3" />

          <div
            style={{
              position: 'relative',
              width: '100%',
              paddingTop: '75%', // 4:3 ratio
              backgroundImage: `url(/mockups/wall-frame.png)`,
              backgroundSize: 'cover',
            }}
          >
            {photo && (
              <div
                style={{
                  position: 'absolute',
                  left: '27%',
                  top: '15%',
                  width: '45%',
                  height: '60%',
                  backgroundImage: `url(${photo})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border:
                    border === 'none'
                      ? 'none'
                      : border === 'thin'
                      ? '3px solid black'
                      : '8px solid black',
                }}
              ></div>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <h4>Size</h4>
          <div className="btn-group mb-3">
            <button
              className={`btn btn-outline-primary ${
                size === 'small' ? 'active' : ''
              }`}
              onClick={() => setSize('small')}
            >
              Small (12x16)
            </button>
            <button
              className={`btn btn-outline-primary ${
                size === 'medium' ? 'active' : ''
              }`}
              onClick={() => setSize('medium')}
            >
              Medium (16x20)
            </button>
            <button
              className={`btn btn-outline-primary ${
                size === 'large' ? 'active' : ''
              }`}
              onClick={() => setSize('large')}
            >
              Large (20x26)
            </button>
          </div>

          <h4>Border</h4>
          <div className="btn-group mb-3">
            <button
              className={`btn btn-outline-secondary ${
                border === 'none' ? 'active' : ''
              }`}
              onClick={() => setBorder('none')}
            >
              None
            </button>
            <button
              className={`btn btn-outline-secondary ${
                border === 'thin' ? 'active' : ''
              }`}
              onClick={() => setBorder('thin')}
            >
              Thin
            </button>
            <button
              className={`btn btn-outline-secondary ${
                border === 'thick' ? 'active' : ''
              }`}
              onClick={() => setBorder('thick')}
            >
              Thick
            </button>
          </div>

          <h4>Frame Style</h4>
          <div className="btn-group mb-3">
            <button
              className={`btn btn-outline-dark ${
                frame === 'classic' ? 'active' : ''
              }`}
              onClick={() => setFrame('classic')}
            >
              Classic
            </button>
            <button
              className={`btn btn-outline-dark ${
                frame === 'modern' ? 'active' : ''
              }`}
              onClick={() => setFrame('modern')}
            >
              Modern
            </button>
            <button
              className={`btn btn-outline-dark ${
                frame === 'vintage' ? 'active' : ''
              }`}
              onClick={() => setFrame('vintage')}
            >
              Vintage
            </button>
          </div>

          <h3>Total Price: ${total}</h3>

          <button className="btn btn-success">
            Add to Cart - ${total}
          </button>
        </div>
      </div>
    </div>
  );
}
