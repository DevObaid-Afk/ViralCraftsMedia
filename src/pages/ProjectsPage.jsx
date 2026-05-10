import { useEffect, useRef, useState } from 'react';
import Cursor from '../components/Cursor.jsx';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import SectionWrapper from '../components/SectionWrapper.jsx';
import { mediaProjects } from '../utils/animations.js';

function LazyProjectVideo({ project }) {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || shouldLoad) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '320px' }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div className="relative mt-6 aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
      <div className={`absolute inset-0 grid place-items-center bg-page-radial transition duration-500 ${isReady ? 'opacity-0' : 'opacity-100'}`} aria-hidden="true">
        <span className="grid h-16 w-16 place-items-center rounded-full border border-electric/35 bg-ink/70 text-electric shadow-glow backdrop-blur-xl">
          <i className="fa-solid fa-play" aria-hidden="true" />
        </span>
      </div>
      <video
        ref={videoRef}
        className={`h-full w-full object-cover transition duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`}
        controls
        playsInline
        preload="metadata"
        aria-label={project.title}
        onLoadedData={() => setIsReady(true)}
      >
        {shouldLoad ? <source src={project.source} type="video/mp4" /> : null}
      </video>
    </div>
  );
}

function ProjectMedia({ project }) {
  if (project.type === 'video') {
    return <LazyProjectVideo project={project} />;
  }

  return (
    <img
      className="mt-6 aspect-[9/16] w-full rounded-2xl border border-white/10 object-cover"
      src={project.source}
      alt={project.title}
      loading="lazy"
      decoding="async"
    />
  );
}

function ProjectsPage() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main className="min-h-screen bg-page-radial pt-20">
        <SectionWrapper id="projects" eyebrow="Projects" title="Campaign visuals, reels, and social posts.">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {mediaProjects.map((project, index) => (
              <article key={project.title} className={`glass-panel magnetic-card group rounded-2xl p-6 transition duration-500 hover:border-electric/50 hover:shadow-violet ${index % 2 ? 'lg:translate-y-8' : ''}`}>
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-2xl text-ink shadow-glow transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <i className={project.icon} aria-hidden="true" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{project.text}</p>
                <ProjectMedia project={project} />
              </article>
            ))}
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}

export default ProjectsPage;
