import SectionWrapper from './SectionWrapper.jsx';

function Goal() {
  const points = [
    {
      title: 'Magnetic brand presence',
      text: 'Premium content systems that make brands feel impossible to scroll past.',
      featured: true
    },
    { title: 'Content strategy' },
    { title: 'Reels and short-form content' },
    { title: 'Brand visibility' },
    { title: 'Audience growth' },
    { title: 'Lead generation' }
  ];

  return (
    <SectionWrapper id="goal" eyebrow="Our Goal" title="Build attention that becomes measurable business growth." animation="slide-left">
      <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <p className="text-lg leading-8 text-slate-300">
          VIRAL CRAFT Media helps businesses grow with intelligent social media marketing, sharp content strategy, high-retention reels, and visibility systems designed to bring the right audience closer to the brand.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((point) => (
            <div key={point.title} className={`glass-panel magnetic-card relative overflow-hidden rounded-2xl p-5 transition duration-500 hover:border-electric/40 ${point.featured ? 'sm:col-span-2 border-electric/30 bg-white/[0.09]' : ''}`}>
              {point.featured && (
                <>
                  <div className="absolute -right-10 -top-12 h-32 w-32 rounded-full bg-brand-gradient opacity-25 blur-2xl" />
                  <div className="absolute inset-x-0 bottom-0 h-px bg-brand-gradient opacity-70" />
                </>
              )}
              <div className="relative flex items-start gap-3">
                <span className={`grid shrink-0 place-items-center rounded-full bg-electric/10 text-electric ${point.featured ? 'h-11 w-11 text-lg' : 'h-7 w-7 text-sm'}`}>
                  <i className={point.featured ? 'fa-solid fa-wand-magic-sparkles' : 'fa-solid fa-check'} aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-heading text-lg text-white">{point.title}</span>
                  {point.text && <span className="mt-2 block leading-7 text-slate-300">{point.text}</span>}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Goal;
