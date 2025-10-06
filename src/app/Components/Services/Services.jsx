'use client';
import { useEffect, useState, useMemo } from 'react';

const LANDSCAPE = [
  { label: '12×9',  w: 10, h: 7 },
  { label: '16×12', w: 13, h: 9 },
  { label: '18×12', w: 15, h: 11 },
  { label: '21×15', w: 19, h: 13 },
  { label: '30×20', w: 26, h: 16 },
  { label: '35×23', w: 28, h: 17 },
  { label: '48×36', w: 32, h: 19 },
];
const PORTRAIT = LANDSCAPE.map(s => ({ label: `${s.h}×${s.w}`, w: s.h, h: s.w }));


// Frame position and size as percentage of the container (adjust as needed for your mockup)
const FRAME_RECT_PCT = { left: 35, top: 7, width: 22, height: 33 };

function sizeScale(selected, base) {
  return Math.sqrt((selected.w * selected.h) / (base.w * base.h));
}

export default function ServicesSection() {
  const [photo, setPhoto] = useState(null);
  const [orientation, setOrientation] = useState('landscape');
  const [selected, setSelected] = useState(LANDSCAPE[0]);
  const [thickness, setThickness] = useState('8mm');

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
  // Border and frame removed, so price is just base
  const total = priceBase;

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
            }}
          >
            {/* Dynamic Labels */}
            {photo && (
              <>
                {/* Width Label (above image) */}
                <div
                  style={{
                    position: 'absolute',
                    // top: `${FRAME_RECT_PCT.top - 7}%`, // Move higher above frame
                    top: `40px`, // Move higher above frame
                    left: `${FRAME_RECT_PCT.left + FRAME_RECT_PCT.width / 2}%`, // Center above frame
                    transform: 'translate(-50%, -100%)',
                    // background: '#22d3ee',
                    color: 'black',
                    padding: '4px 10px',
                    fontSize: 'small',
                    fontWeight: 'bold',
                    borderRadius: '6px',
                    zIndex: 10,
                    pointerEvents: 'none',
                  }}
                >
                  {selected.w} inches ({(selected.w * 2.54).toFixed(2)} cm)
                </div>

                {/* Height Label (left side, rotated) */}
                <div
                  style={{
                    position: 'absolute',
                    // top: `${FRAME_RECT_PCT.top + FRAME_RECT_PCT.height / 2}%`,
                    top: `300px`,
                    // top: ``,
                    left: `${FRAME_RECT_PCT.left - 13}%`, // Move farther left near lamp
                    transform: 'translate(-100%, -50%) rotate(-90deg)',
                     // background: '#22d3ee',
                    color: 'black',
                    padding: '4px 10px',
                    fontSize: 'small',
                    fontWeight: 'bold',
                    borderRadius: '6px',
                    zIndex: 10,
                    pointerEvents: 'none',
                  }}
                >
                  {selected.h} inches ({(selected.h * 2.54).toFixed(2)} cm)
                </div>

                {/* Thickness Label (below image) */}
                <div
                  style={{
                    position: 'absolute',
                    // top: `${FRAME_RECT_PCT.top + FRAME_RECT_PCT.height + 8}%`,  // Move lower below frame
                    top: `450px`,  // Move lower below frame
                    left: `${FRAME_RECT_PCT.left + FRAME_RECT_PCT.width / 2}%`,
                    transform: 'translate(-50%, 0)',
                    // background: '#22d3ee',
                    color: 'black',
                    padding: '4px 10px',
                    fontSize: 'small',
                    fontWeight: 'bold',
                    borderRadius: '6px',
                    zIndex: 10,
                    pointerEvents: 'none',
                  }}
                >
                  Thickness: {thickness}
                </div>
              </>
            )}

            {/* Uploaded Image Container */}
            <div
              className="position-absolute  "
              style={{
                marginTop:'100px',
                left: `${FRAME_RECT_PCT.left}%`,
                top: `${FRAME_RECT_PCT.top}%`,
                width: `${FRAME_RECT_PCT.width}%`,
                height: `${FRAME_RECT_PCT.height}%`,
                transform: `scale(${scale * 0.75})`,
                transformOrigin: 'center',
                transition: 'transform .25s ease',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <div
                className="w-100 mt-5 h-100"
                style={{
                  backgroundImage: photo ? `url(${photo})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  boxShadow:
                    thickness === '3mm'
                      ? '0 4px 12px rgba(0,0,0,0.35)'
                      : thickness === '5mm'
                      ? '0 8px 20px rgba(0,0,0,0.45)'
                      : '0 12px 28px rgba(0,0,0,0.55)',
                  borderRadius: 12
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

          <div className="mb-4">
            <h5 className="mb-2">Acrylic Thickness:</h5>
            <div className="btn-group">
              {['3mm','5mm','8mm'].map((t) => (
                <button key={t}
                  className={`btn btn-outline-dark ${thickness===t?'active':''}`}
                  onClick={() => setThickness(t)}
                  style={{
                    border: thickness === t ? '2px solid #000' : '1px solid #ccc',
                    background: thickness === t ? '#111' : '#fff',
                    color: thickness === t ? '#fff' : '#111',
                    marginRight: 8,
                    padding: '8px 18px',
                    borderRadius: 20,
                    fontWeight: 600,
                    cursor: 'pointer',
                    outline: 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 border rounded mb-3">
            <div className="d-flex justify-content-between"><span>Base</span><strong>${priceBase}</strong></div>
            <hr className="my-2"/>
            <div className="d-flex justify-content-between fs-5">
              <span>Total Price</span><strong>${priceBase}</strong>
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
