import SectionWrapper from './SectionWrapper.jsx';
import { projects } from '../utils/animations.js';

function Projects() {
  return (
    <SectionWrapper id="projects" eyebrow="Projects" title="Campaign systems crafted for local and digital brands.">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <article key={project.title} className={`glass-panel magnetic-card group rounded-2xl p-6 transition duration-500 hover:border-electric/50 hover:shadow-violet ${index % 2 ? 'lg:translate-y-8' : ''}`}>
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-2xl text-ink shadow-glow transition duration-500 group-hover:rotate-6 group-hover:scale-110">
              <i className={project.icon} aria-hidden="true" />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 leading-7 text-slate-300">{project.text}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Projects;
