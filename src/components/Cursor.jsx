import { useEffect, useRef, useState } from 'react';

function Cursor() {
  const [position, setPosition] = useState({ x: -80, y: -80 });
  const [trail, setTrail] = useState([]);
  const [active, setActive] = useState(false);
  const [nativeCursor, setNativeCursor] = useState(false);
  const [touch, setTouch] = useState(false);
  const frameRef = useRef(null);
  const positionRef = useRef(position);
  const activeRef = useRef(active);
  const nativeCursorRef = useRef(nativeCursor);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    setTouch(isTouch);
    if (isTouch) return undefined;

    const move = (event) => {
      const nextPosition = { x: event.clientX, y: event.clientY };
      positionRef.current = nextPosition;

      if (frameRef.current) {
        return;
      }

      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;
        setPosition(positionRef.current);
        setTrail((points) => [positionRef.current, ...points].slice(0, 8));
      });
    };
    const over = (event) => {
      const nextActive = Boolean(event.target.closest('a, button, input, textarea, select'));
      const nextNativeCursor = Boolean(event.target.closest('video, .native-cursor'));

      if (activeRef.current !== nextActive) {
        activeRef.current = nextActive;
        setActive(nextActive);
      }

      if (nativeCursorRef.current !== nextNativeCursor) {
        nativeCursorRef.current = nextNativeCursor;
        setNativeCursor(nextNativeCursor);
      }
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  if (touch) return null;

  return (
    <>
      {trail.map((point, index) => (
        <span
          key={`${point.x}-${point.y}-${index}`}
          aria-hidden="true"
          className={`pointer-events-none fixed z-[59] h-3 w-3 rounded-full bg-brand-gradient transition-opacity duration-200 ${nativeCursor ? 'opacity-0' : ''}`}
          style={{
            left: point.x,
            top: point.y,
            opacity: nativeCursor ? 0 : Math.max(0, 0.32 - index * 0.035),
            transform: `translate(-50%, -50%) scale(${Math.max(0.2, 1 - index * 0.1)})`
          }}
        />
      ))}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed z-[60] rounded-full border transition-[width,height,background-color,border-color,opacity] duration-200 ${nativeCursor ? 'opacity-0' : 'opacity-100'} ${active ? 'h-12 w-12 border-electric/40 bg-electric/15' : 'h-6 w-6 border-white/50 bg-white/5'}`}
        style={{ left: position.x, top: position.y, transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
}

export default Cursor;
