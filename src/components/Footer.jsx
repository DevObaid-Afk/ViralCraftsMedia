import logo from '../assets/logo.png';

function Footer() {
  const quickLinks = ['Home', 'Goal', 'Projects', 'About', 'Reviews', 'Contact'];
  const services = ['Social Media Marketing', 'Content Strategy', 'Reels Production', 'Lead Generation'];
  const socials = [
    ['Instagram', 'fa-brands fa-instagram'],
    ['Facebook', 'fa-brands fa-facebook-f'],
    ['YouTube', 'fa-brands fa-youtube'],
    ['LinkedIn', 'fa-brands fa-linkedin-in'],
    ['WhatsApp', 'fa-brands fa-whatsapp']
  ];

  return (
    <footer className="border-t border-white/10 bg-ink/95 py-12">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr_1fr]">
        <div>
          <img src={logo} alt="VIRAL CRAFT Media logo" className="h-14 w-14 rounded-2xl object-cover" loading="lazy" />
          <h2 className="mt-4 font-heading text-2xl text-white">VIRAL CRAFT <span className="text-electric">Media</span></h2>
          <p className="mt-3 max-w-sm text-slate-400">Premium digital growth for brands that want sharper content and stronger visibility.</p>
        </div>
        <FooterList title="Quick Links" items={quickLinks.map((item) => ({ label: item, href: `#${item.toLowerCase() === 'home' ? 'home' : item.toLowerCase()}` }))} />
        <FooterList title="Services" items={services.map((item) => ({ label: item, href: '#contact' }))} />
        <div>
          <h3 className="font-heading text-xl text-white">Social</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {socials.map(([label, icon]) => (
              <a key={label} href="#contact" aria-label={label} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:-translate-y-1 hover:border-electric hover:text-electric">
                <i className={icon} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="container-shell mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">© 2026 Viral Craft Media. All Rights Reserved.</p>
    </footer>
  );
}

function FooterList({ title, items }) {
  return (
    <div>
      <h3 className="font-heading text-xl text-white">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="text-slate-400 transition hover:text-electric">{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
