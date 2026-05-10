import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#goal', label: 'Goal' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' }
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 24);
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 z-50 h-1 bg-brand-gradient transition-all duration-150" style={{ width: `${progress}%` }} />
      <header className={`fixed inset-x-0 top-0 z-40 transition duration-300 ${scrolled ? 'border-b border-white/10 bg-ink/75 backdrop-blur-2xl' : 'bg-transparent'}`}>
        <nav className="container-shell flex min-h-20 items-center justify-between" aria-label="Primary navigation">
          <a href="#home" className="flex items-center gap-3" aria-label="VIRAL CRAFT Media home">
            <img src={logo} alt="VIRAL CRAFT Media logo" className="h-11 w-11 rounded-xl object-cover" loading="eager" />
            <span className="font-heading text-xl font-bold leading-none text-white">VIRAL CRAFT <span className="block text-sm text-electric">Media</span></span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="group relative font-heading text-sm font-semibold text-slate-200 transition hover:text-white">
                {link.label}
                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-brand-gradient transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden rounded-full bg-electric px-5 py-2.5 font-heading font-bold text-ink transition hover:-translate-y-0.5 hover:bg-aurora hover:shadow-glow lg:inline-flex">
            Start Growth
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true" />
          </button>
        </nav>

        {open && (
          <div className="border-t border-white/10 bg-ink/95 px-5 py-5 backdrop-blur-xl lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-3">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-heading text-lg text-white hover:bg-white/10">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
