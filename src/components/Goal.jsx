import SectionWrapper from './SectionWrapper.jsx';

function Goal() {
  const points = ['Social media marketing', 'Content strategy', 'Reels and short-form content', 'Brand visibility', 'Audience growth', 'Lead generation'];

  return (
    <SectionWrapper id="goal" eyebrow="Our Goal" title="Build attention that becomes measurable business growth." animation="slide-left">
      <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <p className="text-lg leading-8 text-slate-300">
          VIRAL CRAFT Media helps businesses grow with intelligent social media marketing, sharp content strategy, high-retention reels, and visibility systems designed to bring the right audience closer to the brand.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((point) => (
            <div key={point} className="glass-panel magnetic-card rounded-2xl p-5 transition duration-500 hover:border-electric/40">
              <i className="fa-solid fa-check text-electric" aria-hidden="true" />
              <span className="ml-3 font-heading text-lg text-white">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Goal;
