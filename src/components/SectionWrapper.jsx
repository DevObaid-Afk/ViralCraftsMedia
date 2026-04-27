import { useScrollAnimation } from '../hooks/useScrollAnimation.js';

function SectionWrapper({ id, eyebrow, title, children, animation = 'slide-left', className = '' }) {
  const { ref, isVisible } = useScrollAnimation();
  const hidden =
    animation === 'slide-left'
      ? 'translate-x-24'
      : animation === 'slide-right'
        ? '-translate-x-24'
        : animation === 'scale'
          ? 'translate-x-10 scale-95'
          : 'translate-x-16';

  return (
    <section id={id} ref={ref} className={`container-shell py-20 sm:py-24 ${className}`}>
      <div className={`reveal ${isVisible ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : `${hidden} opacity-0`}`}>
        {(eyebrow || title) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && <p className="font-accent text-sm font-bold uppercase tracking-[0.32em] text-electric">{eyebrow}</p>}
            {title && <h2 className="mt-3 font-heading text-4xl font-bold tracking-normal text-white sm:text-5xl">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export default SectionWrapper;
