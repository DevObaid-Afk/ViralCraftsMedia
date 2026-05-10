import SectionWrapper from './SectionWrapper.jsx';
import { reviews } from '../utils/animations.js';

function Reviews() {
  return (
    <SectionWrapper id="reviews" eyebrow="Clients Review" title="What growing brands say after the strategy starts working." animation="scale">
      <div className="grid gap-6 lg:grid-cols-3">
        {reviews.map((review) => (
          <article key={review.name} className="glass-panel magnetic-card rounded-2xl p-6 transition duration-500 hover:border-signal/60">
            <div className="flex text-aurora" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <i key={index} className="fa-solid fa-star" aria-hidden="true" />
              ))}
            </div>
            <p className="mt-5 leading-7 text-slate-200">"{review.text}"</p>
            <div className="mt-6 border-t border-white/10 pt-5">
              <h3 className="font-heading text-xl text-white">{review.name}</h3>
              <p className="text-sm text-slate-400">{review.type}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Reviews;
