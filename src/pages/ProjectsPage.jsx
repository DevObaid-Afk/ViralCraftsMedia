import { useCallback, useEffect, useMemo, useState } from 'react';
import Cursor from '../components/Cursor.jsx';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import { mediaProjects } from '../utils/animations.js';

function LazyProjectVideo({ project }) {
  const [poster, setPoster] = useState('');

  useEffect(() => {
    if (poster) {
      return undefined;
    }

    const previewVideo = document.createElement('video');
    previewVideo.src = project.source;
    previewVideo.crossOrigin = 'anonymous';
    previewVideo.muted = true;
    previewVideo.playsInline = true;
    previewVideo.preload = 'metadata';

    const captureFrame = () => {
      previewVideo.currentTime = Math.min(0.12, previewVideo.duration || 0.12);
    };

    const drawPoster = () => {
      const canvas = document.createElement('canvas');
      canvas.width = previewVideo.videoWidth || 720;
      canvas.height = previewVideo.videoHeight || 1280;
      const context = canvas.getContext('2d');

      if (context) {
        try {
          context.drawImage(previewVideo, 0, 0, canvas.width, canvas.height);
          setPoster(canvas.toDataURL('image/jpeg', 0.72));
        } catch {
          setPoster('');
        }
      }
    };

    previewVideo.addEventListener('loadedmetadata', captureFrame, { once: true });
    previewVideo.addEventListener('seeked', drawPoster, { once: true });
    previewVideo.load();

    return () => {
      previewVideo.removeAttribute('src');
      previewVideo.load();
    };
  }, [poster, project.source]);

  return (
    <div className="group/video relative mt-6 aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
      <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center bg-ink/35 opacity-0 backdrop-blur-[1px] transition duration-300 group-hover/video:opacity-100" aria-hidden="true">
        <span className="grid h-16 w-16 place-items-center rounded-full border border-electric/35 bg-ink/70 text-electric shadow-glow backdrop-blur-xl">
          <i className="fa-solid fa-play" aria-hidden="true" />
        </span>
      </div>
      <video
        className="native-cursor block h-full w-full object-cover"
        controls
        playsInline
        poster={poster || undefined}
        preload="metadata"
        src={project.source}
        aria-label={project.title}
      />
    </div>
  );
}

function ProjectMedia({ project }) {
  if (project.type === 'video') {
    return <LazyProjectVideo project={project} />;
  }

  return (
    <img
      className="mt-6 aspect-[4/5] w-full rounded-2xl border border-white/10 object-cover"
      src={project.source}
      alt={project.title}
      loading="lazy"
      decoding="async"
    />
  );
}

function ProjectsPage() {
  const videoProjects = useMemo(() => mediaProjects.filter((project) => project.type === 'video'), []);
  const postProjects = useMemo(() => mediaProjects.filter((project) => project.type === 'image'), []);

  const renderProjectCard = useCallback((project, index) => (
    <article key={project.title} className={`glass-panel magnetic-card group rounded-2xl p-6 transition duration-500 hover:border-electric/50 hover:shadow-violet ${index % 2 ? 'lg:translate-y-8' : ''}`}>
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-2xl text-ink shadow-glow transition duration-500 group-hover:rotate-6 group-hover:scale-110">
        <i className={project.icon} aria-hidden="true" />
      </div>
      <h3 className="font-heading text-2xl font-semibold text-white">{project.title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{project.text}</p>
      <ProjectMedia project={project} />
    </article>
  ), []);

  return (
    <>
      <Cursor />
      <Navbar />
      <main className="min-h-screen bg-page-radial pt-20">
        <section id="projects" className="container-shell py-20 sm:py-24">
          <div className="mb-10 max-w-3xl">
            <p className="font-accent text-sm font-bold uppercase tracking-[0.32em] text-electric">Projects</p>
            <h2 className="mt-3 font-heading text-4xl font-bold tracking-normal text-white sm:text-5xl">Campaign visuals shaped with artist, celebrity, and brand-level polish.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {videoProjects.map(renderProjectCard)}
          </div>

          <div className="mb-10 mt-24 max-w-3xl">
            <p className="font-accent text-sm font-bold uppercase tracking-[0.32em] text-electric">Posts</p>
            <h2 className="mt-3 font-heading text-4xl font-bold tracking-normal text-white sm:text-5xl">Collaborated with Celebrities</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {postProjects.map(renderProjectCard)}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ProjectsPage;
