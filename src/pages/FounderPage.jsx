import Cursor from '../components/Cursor.jsx';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

const founderValues = [
  'Creative direction with a sharp eye for brand perception',
  'Campaign thinking shaped for artists, celebrities, and growing brands',
  'A hands-on approach to content, positioning, and visual polish'
];

function FounderPage() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main className="min-h-screen bg-page-radial pt-20">
        <section className="container-shell py-20 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_.95fr]">
            <div>
              <p className="font-accent text-sm font-bold uppercase tracking-[0.32em] text-electric">Founder</p>
              <h1 className="mt-3 font-heading text-5xl font-bold leading-tight text-white sm:text-6xl">
                Rayyan Ansari
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Rayyan Ansari is the mind behind VIRAL CRAFT Media, a founder with a rare instinct for turning attention into a serious brand asset. His work is built around one clear belief: a brand should not just be seen, it should be remembered, trusted, and talked about.
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                With a strong sense of visual direction, social media behavior, and campaign storytelling, Rayyan has shaped VIRAL CRAFT Media into an agency that understands both polish and performance. From artist and celebrity-facing creatives to business growth campaigns, his focus stays on giving brands a presence that feels premium, confident, and impossible to ignore.
              </p>
            </div>

            <div className="glass-panel magnetic-card relative overflow-hidden rounded-3xl p-4 transition duration-500 hover:border-electric/40">
              <div className="absolute -right-14 -top-16 h-44 w-44 rounded-full bg-brand-gradient opacity-25 blur-2xl" />
              <img
                src="/rayCoFounder.jpeg"
                alt="Rayyan Ansari, founder of VIRAL CRAFT Media"
                className="relative aspect-[4/5] w-full rounded-2xl object-cover object-[68%_58%]"
                loading="eager"
              />
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
            <div className="glass-panel relative overflow-hidden rounded-3xl border-electric/25 bg-white/[0.09] p-7">
              <div className="absolute inset-x-7 top-0 h-px bg-brand-gradient opacity-70" />
              <h2 className="font-heading text-3xl font-semibold text-white">Why Brands Trust His Direction</h2>
              <p className="mt-5 leading-8 text-slate-300">
                Rayyan brings the kind of creative taste that makes a campaign feel bigger than a post. He looks at every reel, poster, hook, and visual system through the lens of brand value: how it will look to the audience, how fast it communicates trust, and whether it gives the brand a reason to stand apart.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {founderValues.map((value) => (
                <div key={value} className="glass-panel rounded-2xl p-5">
                  <i className="fa-solid fa-star text-electric" aria-hidden="true" />
                  <p className="mt-4 font-heading text-lg leading-7 text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 glass-panel rounded-3xl p-7 sm:p-8">
            <p className="font-heading text-2xl leading-9 text-white">
              Under Rayyan’s vision, VIRAL CRAFT Media is not just a service provider. It is a creative growth partner for brands that want their content to carry status, clarity, and confidence.
            </p>
            <p className="mt-5 leading-8 text-slate-300">
              His strength is in understanding what makes people stop, what makes a brand look premium, and what makes content feel worth trusting. That mix of taste, strategy, and ambition is what gives the agency its edge.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default FounderPage;
