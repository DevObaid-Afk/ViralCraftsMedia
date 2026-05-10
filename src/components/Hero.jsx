import logo from '../assets/logo.png';

function Hero() {
  const metrics = ['Reels systems', 'Lead funnels', 'Trend response', 'Brand recall', 'Local demand', 'Creator hooks'];
  const titleLetters = 'VIRAL CRAFT'.split('');

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-page-radial pt-28">
      <div className="motion-grid absolute inset-0 opacity-60" />
      <div className="absolute inset-0 opacity-80">
        {[12, 28, 44, 63, 78, 91].map((left, index) => (
          <span key={left} className="particle" style={{ left: `${left}%`, top: `${18 + (index % 3) * 21}%`, animationDelay: `${index * 0.55}s` }} />
        ))}
      </div>
      <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-electric/15 blur-3xl" />
      <div className="absolute bottom-8 right-0 h-96 w-96 rounded-full bg-signal/15 blur-3xl" />

      <div className="container-shell relative grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-16 lg:grid-cols-[1.05fr_.95fr]">
        <div className="max-w-4xl">
          <p className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 font-accent text-sm font-bold uppercase tracking-[0.24em] text-electric backdrop-blur-xl">Founder: Rayyan Ansari | Since April 2023</p>
          <h1 className="hero-title group/title mt-6 font-heading text-6xl font-bold leading-[0.92] tracking-normal text-white sm:text-7xl lg:text-8xl" aria-label="VIRAL CRAFT Media">
            <span className="hero-title-word relative inline-flex flex-wrap" aria-hidden="true" data-text="VIRAL CRAFT">
              {titleLetters.map((letter, index) => (
                <span
                  key={`${letter}-${index}`}
                  className={letter === ' ' ? 'w-[0.32em]' : 'hero-title-letter'}
                  style={{ '--i': index }}
                >
                  {letter}
                </span>
              ))}
              <span className="hero-title-scan" />
            </span>
            <span className="mt-2 block text-4xl text-white sm:text-5xl lg:text-6xl">Media</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Premium social media marketing, trend-led content, and conversion-focused strategy for brands ready to become impossible to ignore.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="glow-button">Grow Your Brand <i className="fa-solid fa-arrow-right" aria-hidden="true" /></a>
            <a href="#projects" className="ghost-button">View Projects <i className="fa-solid fa-layer-group" aria-hidden="true" /></a>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[520px]" aria-label="Abstract social media growth visual">
          <div className="absolute inset-8 rounded-full border border-electric/25 bg-electric/5 blur-sm" />
          <div className="absolute inset-0 animate-spinSlow rounded-full border border-dashed border-white/20" />
          <div className="absolute left-1/2 top-1/2 h-12 w-12 animate-orbit rounded-2xl border border-white/10 bg-aurora/20 backdrop-blur-xl" />
          <div className="absolute left-1/2 top-1/2 h-10 w-10 animate-orbit rounded-full border border-white/10 bg-signal/25 backdrop-blur-xl [animation-delay:-4s]" />
          <div className="glass-panel magnetic-card absolute inset-10 grid place-items-center overflow-hidden rounded-[2rem] transition duration-500">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-white/10 blur-2xl animate-scan" />
            <img src={logo} alt="VIRAL CRAFT Media brand mark" className="relative h-44 w-44 rounded-full object-cover shadow-violet sm:h-56 sm:w-56" loading="eager" />
            <div className="absolute bottom-10 left-8 rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Reach</p>
              <p className="font-heading text-3xl text-white">+240%</p>
            </div>
            <div className="absolute right-6 top-8 rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Leads</p>
              <p className="font-heading text-3xl text-electric">3.8x</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-y border-white/10 bg-white/[0.04] py-4 backdrop-blur-xl">
        <div className="flex w-[200%] animate-marquee gap-6 whitespace-nowrap font-heading text-sm font-bold uppercase tracking-[0.22em] text-slate-200">
          {[...metrics, ...metrics, ...metrics, ...metrics].map((item, index) => (
            <span key={`${item}-${index}`} className="inline-flex items-center gap-6">
              {item}
              <i className="fa-solid fa-bolt text-signal" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
