export const revealClasses = {
  hidden: 'opacity-0 translate-y-8',
  visible: 'opacity-100 translate-y-0',
  'slide-left-hidden': 'opacity-0 -translate-x-12',
  'slide-right-hidden': 'opacity-0 translate-x-12',
  'scale-hidden': 'opacity-0 scale-95',
  'fade-hidden': 'opacity-0'
};

export const projects = [
  {
    icon: 'fa-solid fa-utensils',
    title: 'Restaurant Campaign Growth',
    text: 'Reels, offers, and local discovery campaigns designed to turn online attention into table bookings.'
  },
  {
    icon: 'fa-solid fa-mug-hot',
    title: 'Cafe Social Media Branding',
    text: 'A warm visual identity, content calendar, and creator-style videos for daily footfall growth.'
  },
  {
    icon: 'fa-solid fa-scissors',
    title: 'Salon Ads Campaign',
    text: 'Geo-targeted creatives and conversion-focused offers for appointments, makeovers, and bridal packages.'
  },
  {
    icon: 'fa-solid fa-box-open',
    title: 'Product Reel Marketing',
    text: 'Short-form product stories that explain value fast and make the brand memorable in the feed.'
  },
  {
    icon: 'fa-solid fa-rocket',
    title: 'Local Business Digital Launch',
    text: 'Launch strategy, profile optimization, and first-month content built to create instant market presence.'
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Audience Growth System',
    text: 'Trend mapping, retention hooks, and posting rhythm tuned for visibility, saves, shares, and leads.'
  }
];

const projectMediaModules = import.meta.glob('../assets/projects/**/*.{mp4,jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default'
});

const mediaProjectDetails = {
  Cafe: {
    icon: 'fa-solid fa-mug-hot',
    title: 'Cafe Content Reel',
    texts: [
      'Built for cafe brands that want the same polished content standard used for artists, creators, and premium campaigns.',
      'A brand-focused edit that helps cafes look consistent, polished, and ready for stronger social media campaigns.',
      'Designed to give cafe brands reusable content that improves perception, supports promotions, and keeps the feed active.'
    ]
  },
  RealEstate: {
    icon: 'fa-solid fa-building',
    title: 'Real Estate Showcase Reel',
    texts: [
      'Created for real estate brands that need listings to look premium, trustworthy, and easy to present across social platforms.',
      'A polished property edit that brings celebrity-campaign finishing standards into real estate brand presentation.',
      'Designed to help real estate brands communicate value faster, improve listing appeal, and stand out in a crowded market.'
    ]
  },
  'Event Reel': {
    icon: 'fa-solid fa-clapperboard',
    title: 'Event Highlight Reel',
    texts: [
      'A recap asset that helps brands extend event value with the kind of polish expected from artist and star-led moments.',
      'Created so brands can turn event footage into proof of activity, community, and momentum on social media.',
      'A highlight edit that gives brands a polished campaign asset for announcements, recaps, and future promotion.'
    ]
  },
  "Post's": {
    icon: 'fa-solid fa-image',
    title: 'Social Media Post Design',
    titles: [
      'Rahul Vaidya',
      'DJ Ganesh',
      'Bhaven Dhanak',
      'Dr. Sanket Bhosale & Sugandha Mishra',
      'Arunita Kanjilal',
      'Shaarib & Toshi'
    ],
    texts: [
      'Singer and performer known for powerful live shows and a strong fan following.',
      'DJ and live performer recognized for high-energy sets and event crowd engagement.',
      'Playback singer and performer featured for corporate and live event appearances.',
      'Celebrity duo known for comedy, television, and live entertainment performances.',
      'Singer and performer recognized for her expressive voice and public event presence.',
      'Playback singer duo known for Bollywood music, live shows, and stage performances.'
    ]
  }
};

const getMediaType = (path) => (path.toLowerCase().endsWith('.mp4') ? 'video' : 'image');

const getProjectCategory = (path) => path.split('/').at(-2);

const mediaProjectCounts = {};

export const mediaProjects = Object.entries(projectMediaModules)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .map(([path, source]) => {
    const category = getProjectCategory(path);
    const details = mediaProjectDetails[category] ?? {
      icon: 'fa-solid fa-photo-film',
      title: 'Digital Campaign Asset',
      text: 'Campaign-ready creative produced for social media visibility and brand consistency.'
    };
    const categoryCount = (mediaProjectCounts[category] ?? 0) + 1;

    mediaProjectCounts[category] = categoryCount;

    return {
      ...details,
      title: details.titles?.[categoryCount - 1] ?? `${details.title} ${categoryCount}`,
      text: details.texts?.[(categoryCount - 1) % details.texts.length] ?? details.text,
      source,
      type: getMediaType(path)
    };
  });

export const reviews = [
  {
    name: 'Aarav Mehta',
    type: 'Restaurant Owner',
    text: 'Our Instagram finally started bringing real customers. The reels looked premium and the offers were timed perfectly.'
  },
  {
    name: 'Sana Khan',
    type: 'Salon Founder',
    text: 'The team understood our audience quickly. We saw better inquiries and a much cleaner brand presence within weeks.'
  },
  {
    name: 'Rohan Shah',
    type: 'Cafe Partner',
    text: 'VIRAL CRAFT Media gave us a content style people actually remembered. The growth felt strategic, not random.'
  }
];
