
'use client';
import { useEffect, useState, useMemo } from 'react';

const LANDSCAPE = [
  { label: '12×9',  w: 12, h: 9 },
  { label: '16×12', w: 16, h: 12 },
  { label: '18×12', w: 18, h: 12 },
  { label: '21×15', w: 21, h: 15 },
  { label: '30×20', w: 30, h: 20 },
  { label: '35×23', w: 35, h: 23 },
  { label: '48×36', w: 48, h: 36 },
];
const PORTRAIT = LANDSCAPE.map(s => ({ label: `${s.h}×${s.w}`, w: s.h, h: s.w }));

// replace with your measured numbers:
const FRAME_RECT_PCT = { left: 27, top: 15, width: 18, height: 24 };


function sizeScale(selected, base) {
  return Math.sqrt((selected.w * selected.h) / (base.w * base.h));
}

export default function ServicesSection() {
  const [photo, setPhoto] = useState(null);
  const [orientation, setOrientation] = useState('landscape');
  const [selected, setSelected] = useState(LANDSCAPE[0]);
  const [border, setBorder] = useState('none');
  const [frame, setFrame] = useState('classic');

  const sizes = orientation === 'landscape' ? LANDSCAPE : PORTRAIT;
  const base = sizes[0];
  const scale = sizeScale(selected, base);

  // auto orientation
  useEffect(() => {
    if (!photo) return;
    const img = new Image();
    img.onload = () => {
      if (img.naturalWidth > img.naturalHeight) {
        setOrientation('landscape');
        setSelected(LANDSCAPE[0]);
      } else {
        setOrientation('portrait');
        setSelected(PORTRAIT[0]);
      }
    };
    img.src = photo;
  }, [photo]);

  const handleUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPhoto(String(reader.result));
    reader.readAsDataURL(file);
  };

  // price calculation
  const priceBase = useMemo(() => {
    const p = (s) => (s.w === 12 && s.h === 9) || (s.w === 9 && s.h === 12) ? 40
      : (s.w === 16 && s.h === 12) || (s.w === 12 && s.h === 16) ? 50
      : 70;
    return p(selected);
  }, [selected]);
  const priceBorder = border === 'thin' ? 10 : border === 'thick' ? 20 : 0;
  const priceFrame = frame === 'classic' ? 0 : 15;
  const total = priceBase + priceBorder + priceFrame;

  return (
    <div className="container py-4">
      <div className="row g-4">
        {/* Left: Upload + Preview */}
        <div className="col-lg-7">
          <div className="d-flex align-items-center gap-2 mb-3">
            <input className="form-control" type="file" accept="image/*" onChange={handleUpload} />
            <div className="btn-group">
              <button
                className={`btn btn-outline-primary ${orientation==='portrait'?'active':''}`}
                onClick={() => { setOrientation('portrait'); setSelected(PORTRAIT[0]); }}
                disabled={!photo}
              >Vertical</button>
              <button
                className={`btn btn-outline-primary ${orientation==='landscape'?'active':''}`}
                onClick={() => { setOrientation('landscape'); setSelected(LANDSCAPE[0]); }}
                disabled={!photo}
              >Horizontal</button>
            </div>
          </div>

          <div
            className="position-relative w-100 rounded shadow"
            style={{
              aspectRatio: '4/3',
              backgroundImage: "url('/mockup/wall-frame.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              overflow: 'hidden',
              zIndex:'-999',
              // backgroundColor: 'red'

            }}
          >
            <div
              className="position-absolute"
              style={{
                left: `${FRAME_RECT_PCT.left}%`,
                top: `${FRAME_RECT_PCT.top}%`,
                width: `${FRAME_RECT_PCT.width}%`,
                height: `${FRAME_RECT_PCT.height}%`,
                transform: `scale(${scale})`,
                transformOrigin: 'center',
                transition: 'transform .25s ease',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <div
                className="w-100 h-100"
                style={{
                  backgroundImage: photo ? `url(${photo})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: border === 'none' ? 'none'
                        : border === 'thin' ? '3px solid #111'
                        : '8px solid #111',
                  boxShadow: frame === 'modern'
                    ? '0 0 0 8px rgba(0,0,0,.85) inset'
                    : frame === 'vintage'
                    ? '0 0 0 10px #bfa46f inset'
                    : '0 1px 8px rgba(0,0,0,.25)',
                  borderRadius: 6
                }}
              />
            </div>
          </div>
        </div>

        {/* Right: Options */}
        <div className="col-lg-5">
          <div className="mb-3">
            <h5 className="mb-2">Acrylic Size (Inch)</h5>
            <div className="d-flex flex-wrap gap-2">
              {sizes.map(s => (
                <button
                  key={s.label}
                  className={`btn btn-sm ${selected.label===s.label?'btn-dark':'btn-outline-dark'}`}
                  onClick={() => setSelected(s)}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <h5 className="mb-2">Border</h5>
            <div className="btn-group">
              {['none','thin','thick'].map((b) => (
                <button key={b}
                  className={`btn btn-outline-secondary ${border===b?'active':''}`}
                  onClick={() => setBorder(b)}
                >
                  {b === 'none' ? 'No Border' : b === 'thin' ? 'Thin' : 'Thick'}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h5 className="mb-2">Frame Style</h5>
            <div className="btn-group">
              {['classic','modern','vintage'].map((f) => (
                <button key={f}
                  className={`btn btn-outline-dark ${frame===f?'active':''}`}
                  onClick={() => setFrame(f)}
                >
                  {f === 'classic' ? 'Classic Wood' : f === 'modern' ? 'Modern Black' : 'Vintage Gold'}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 border rounded mb-3">
            <div className="d-flex justify-content-between"><span>Base</span><strong>${priceBase}</strong></div>
            <div className="d-flex justify-content-between"><span>Border</span><strong>${priceBorder}</strong></div>
            <div className="d-flex justify-content-between"><span>Frame</span><strong>${priceFrame}</strong></div>
            <hr className="my-2"/>
            <div className="d-flex justify-content-between fs-5">
              <span>Total Price</span><strong>${total}</strong>
            </div>
          </div>

          <button className="btn btn-danger btn-lg w-100" disabled={!photo}>
            Add to Cart – ${total}
          </button>
          <p className="text-muted mt-2 small">Client-side demo: no backend yet.</p>
        </div>
      </div>
    </div>
  );
}
  