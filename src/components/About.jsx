import { useEffect, useRef, useState } from 'react';

const lanes = [
  {
    number: '01',
    title: 'Signal Mapping',
    text: 'We identify the content angles your audience already reacts to, then package your brand into those demand signals.',
    stat: '7-day sprint'
  },
  {
    number: '02',
    title: 'Creative Engine',
    text: 'Hooks, offers, captions, reels, carousels, and proof assets are built as one repeatable content operating system.',
    stat: '30+ assets'
  },
  {
    number: '03',
    title: 'Market Positioning',
    text: 'Your business gets a sharper reason to be remembered, compared, shared, and contacted.',
    stat: 'Brand recall'
  },
  {
    number: '04',
    title: 'Growth Feedback',
    text: 'Performance data shapes the next creative cycle so the brand keeps improving instead of guessing.',
    stat: 'Weekly tuning'
  }
];

function About() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const raw = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      setProgress(Number.isFinite(raw) ? raw : 0);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const x = `translateX(${12 - progress * 48}%)`;

  return (
    <section id="about" ref={sectionRef} className="relative h-[220vh] bg-ink">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-page-radial">
        <div className="motion-grid absolute inset-0 opacity-50" />
        <div className="container-shell relative">
          <div className="mb-10 max-w-3xl">
            <p className="font-accent text-sm font-bold uppercase tracking-[0.32em] text-electric">Productized Growth System</p>
            <h2 className="mt-3 font-heading text-4xl font-bold text-white sm:text-5xl">Not random posting. A repeatable content machine.</h2>
          </div>

          <div className="flex w-[1780px] gap-6 transition-transform duration-200 ease-out will-change-transform lg:w-[2050px]" style={{ transform: x }}>
            <div className="glass-panel relative flex w-[380px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border-electric/25 bg-white/[0.09] p-7 sm:w-[460px]">
              <div className="absolute -right-14 -top-16 h-40 w-40 rounded-full bg-brand-gradient opacity-25 blur-2xl" />
              <div className="absolute inset-x-7 top-0 h-px bg-brand-gradient opacity-70" />
              <p className="relative font-heading text-3xl font-semibold leading-tight text-white">
                Premium content direction for brands that want to look trusted before they ever pitch.
              </p>
              <p className="relative mt-5 text-lg leading-8 text-slate-300">
                From celebrity-grade creatives to conversion-focused campaigns, we shape every asset to make the brand feel sharper, more credible, and easier to remember.
              </p>
              <div className="relative mt-8 grid grid-cols-3 gap-3">
                {['Plan', 'Craft', 'Scale'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-ink/55 p-4 text-center">
                    <span className="font-heading text-lg text-electric">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {lanes.map((lane, index) => (
              <article key={lane.title} className="glass-panel magnetic-card group relative flex h-[420px] w-[360px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl p-7 transition duration-500 hover:border-electric/40 sm:w-[430px]">
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-gradient opacity-20 blur-2xl transition group-hover:opacity-40" />
                <span className="font-heading text-6xl text-signal">{lane.number}</span>
                <div>
                  <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-aurora">{lane.stat}</p>
                  <h3 className="font-heading text-3xl text-white">{lane.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{lane.text}</p>
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-white/10">
                  <span className="block h-full bg-brand-gradient transition-all duration-700" style={{ width: `${35 + index * 18}%` }} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
