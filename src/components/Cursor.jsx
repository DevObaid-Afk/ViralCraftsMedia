import { useEffect, useState } from 'react';

function Cursor() {
  const [position, setPosition] = useState({ x: -80, y: -80 });
  const [active, setActive] = useState(false);
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    setTouch(isTouch);
    if (isTouch) return undefined;

    const move = (event) => setPosition({ x: event.clientX, y: event.clientY });
    const over = (event) => setActive(Boolean(event.target.closest('a, button, input, textarea, select')));

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, []);

  if (touch) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed z-[60] rounded-full border transition-[width,height,background-color,border-color] duration-200 ${active ? 'h-12 w-12 border-electric/40 bg-electric/15' : 'h-6 w-6 border-white/50 bg-white/5'}`}
      style={{ left: position.x, top: position.y, transform: 'translate(-50%, -50%)' }}
    />
  );
}

export default Cursor;
