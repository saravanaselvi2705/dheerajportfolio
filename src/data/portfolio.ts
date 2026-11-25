export type WorkCategory =
  | 'All'
  | 'Reels & Shorts'
  | 'Tutorials'
  | 'Motion Graphics'
  | 'Testimonials';

export interface WorkItem {
  id: string;
  videoSrc: string;
  title: string;
  client: string;
  category: Exclude<WorkCategory, 'All'>;
  duration: string;
  role: string;
  year: string;
  thumbnailKey: string;
  aspectNote: string;
  summary: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  current?: boolean;
  highlights: string[];
  tags: string[];
}

// Screenwriting Series — Raghunath Paleri
export const HERO_VIDEO_STREAM_URL = '/videos/raghunath-trailer.mp4';

export const CONTACT_INFO = {
  name: 'Dheeraj C',
  title: 'Content Delivery Manager & Senior Video Editor',
  email: 'dheerajcheeppilatt@gmail.com',
  phone: '+91 95397 94989',
  phoneHref: 'tel:+919539794989',
  whatsappNumber: '919539794989',
  location: 'Kakkodi Post, Kozhikode, Kerala 673611, India',
  shortLocation: 'Kozhikode, Kerala, India',
};

export const WORK_CATEGORIES: WorkCategory[] = [
  'All',
  'Reels & Shorts',
  'Tutorials',
  'Motion Graphics',
  'Testimonials',
];

export const WORKS: WorkItem[] = [
  {
    id: 'wt-theater-ad',
    videoSrc: '/videos/wt-theater-ad.mp4',
    title: 'Wise Talkies — Cinema Theater Spot',
    client: 'Wise Talkies',
    category: 'Motion Graphics',
    duration: '00:45',
    role: 'Lead Editor · Motion & Sound Mix',
    year: '2024',
    thumbnailKey: 'wt-theater-ad',
    aspectNote: 'DCP / 16:9 Cinema Commercial',
    summary:
      'High-impact theatrical spot blending kinetic typography, rhythmic pacing, and cinema-calibrated audio sweetening.',
  },
  {
    id: 'adoor-trailer',
    videoSrc: '/videos/adoor-trailer.mp4',
    title: 'Masterclass Trailer — Adoor Gopalakrishnan',
    client: 'Wise Talkies',
    category: 'Testimonials',
    duration: '02:14',
    role: 'Trailer Cut · Color Grade · QC',
    year: '2024',
    thumbnailKey: 'adoor-trailer',
    aspectNote: '16:9 Flagship Documentary Cut',
    summary:
      'Reverent narrative pacing and archival visual framing for the legendary Indian filmmaker’s masterclass release.',
  },
  {
    id: 'gopinath-trailer',
    videoSrc: '/videos/gopinath-trailer.mp4',
    title: 'Masterclass Trailer — Gopinath Muthukad',
    client: 'Wise Talkies',
    category: 'Testimonials',
    duration: '01:52',
    role: 'Senior Editor · Dialogue Sweetening',
    year: '2024',
    thumbnailKey: 'gopinath-trailer',
    aspectNote: '16:9 Story & Hook Assembly',
    summary:
      'Emotional story arc structured for high-retention trailer engagement with crisp dialogue mastering.',
  },
  {
    id: 'raghunath-trailer',
    videoSrc: '/videos/raghunath-trailer.mp4',
    title: 'Screenwriting Series — Raghunath Paleri',
    client: 'Wise Talkies',
    category: 'Tutorials',
    duration: '02:08',
    role: 'Editor · Pacing & Color Balance',
    year: '2023',
    thumbnailKey: 'raghunath-trailer',
    aspectNote: '16:9 Educational Series Promo',
    summary:
      'Measured editorial rhythm honoring screenwriting craft, balanced with warm filmic LUT grading.',
  },
  {
    id: 'shaji-trailer',
    videoSrc: '/videos/shaji-trailer.mp4',
    title: 'Cinematography Cut — Shaji N. Karun',
    client: 'Wise Talkies',
    category: 'Tutorials',
    duration: '01:46',
    role: 'Rough-to-Fine Cut · Visual Pacing',
    year: '2023',
    thumbnailKey: 'shaji-trailer',
    aspectNote: '16:9 Masterclass Assembly',
    summary:
      'Visual-first assembly highlighting framing philosophy, tonal continuity, and subtle atmospheric sound design.',
  },
  {
    id: 'chef-letha-trailer',
    videoSrc: '/videos/chef-letha-trailer.mp4',
    title: 'Culinary Craft — Chef Letha Series',
    client: 'Wise Talkies',
    category: 'Tutorials',
    duration: '01:34',
    role: 'Editor · Multi-Cam Sync & Grade',
    year: '2023',
    thumbnailKey: 'chef-letha-trailer',
    aspectNote: '16:9 Multi-Camera Tutorial Cut',
    summary:
      'Tactile multi-camera cut pairing close-up culinary inserts with crisp foley and vibrant food-safe color balance.',
  },
  {
    id: 'wt-casting-call',
    videoSrc: '/videos/wt-casting-call.mp4',
    title: 'Casting Call — High-Retention Promo Reel',
    client: 'Wise Talkies',
    category: 'Reels & Shorts',
    duration: '00:38',
    role: 'Short-Form Edit · Kinetic Captions',
    year: '2024',
    thumbnailKey: 'wt-casting-call',
    aspectNote: '9:16 Social Vertical Cut',
    summary:
      'Fast-hook social announcement engineered with 1.5s visual pattern interrupts and punchy rhythmic transitions.',
  },
  {
    id: 'stalling-vehicle',
    videoSrc: '/videos/stalling-vehicle.mp4',
    title: 'Stalling Vehicle — Explainer Reel',
    client: 'Digital Campaign',
    category: 'Reels & Shorts',
    duration: '00:54',
    role: 'Retention Edit · Audio & Pacing',
    year: '2025',
    thumbnailKey: 'stalling-vehicle',
    aspectNote: '9:16 Educational Micro-Cut',
    summary:
      'Structured problem-to-resolution vertical explainer with snappy J-cuts and clean callout overlays.',
  },
  {
    id: 'xmas-products',
    videoSrc: '/videos/xmas-products.mp4',
    title: 'Festive Collection — Product Showcase Reel',
    client: 'Brand Creative',
    category: 'Reels & Shorts',
    duration: '00:32',
    role: 'Edit · Mood Grade · SFX',
    year: '2024',
    thumbnailKey: 'xmas-products',
    aspectNote: '9:16 Product Reel',
    summary:
      'Stylized seasonal showcase driven by crisp rhythmic cuts, warm highlights, and product-first framing.',
  },
  {
    id: 'xmas-prod-reels',
    videoSrc: '/videos/xmas-prod-reels.mp4',
    title: 'Festive Brand Film — Holiday Master',
    client: 'Retail Campaign',
    category: 'Motion Graphics',
    duration: '00:48',
    role: 'Motion Graphics · Color & Mix',
    year: '2024',
    thumbnailKey: 'xmas-prod-reels',
    aspectNote: '16:9 / Social Campaign Package',
    summary:
      'Warm festive commercial package featuring custom motion titles, end-slate packaging, and multi-platform exports.',
  },
  {
    id: 'xmas-offer',
    videoSrc: '/videos/xmas-offer.mp4',
    title: 'Holiday Offer — Motion Promo',
    client: 'Retail Campaign',
    category: 'Motion Graphics',
    duration: '00:28',
    role: 'After Effects · Ad Pacing',
    year: '2024',
    thumbnailKey: 'xmas-offer',
    aspectNote: '9:16 Performance Ad Creative',
    summary:
      'Conversion-focused motion ad built with crisp offer hierarchy, punchy kinetic typography, and tight pacing.',
  },
  {
    id: 'reels-xmas-p4',
    videoSrc: '/videos/reels-xmas-p4.mp4',
    title: 'Curated Gift Box — Product Spotlight Reel',
    client: 'Brand Creative',
    category: 'Reels & Shorts',
    duration: '00:36',
    role: 'Product Edit · Color & Sound',
    year: '2025',
    thumbnailKey: 'reels-xmas-p4',
    aspectNote: '9:16 Product Showcase',
    summary:
      'Tactile product reel emphasizing texture, warm specular highlights, and seamless speed-ramped transitions.',
  },
];

export const TOOLKIT_SKILLS = [
  { name: 'Premiere Pro', detail: 'Narrative & High-Retention Cuts' },
  { name: 'DaVinci Resolve', detail: 'Node Grading & Color Pipelines' },
  { name: 'After Effects', detail: 'Motion Graphics & Brand Intros' },
  { name: 'Audio Sweetening', detail: 'Sound Dubbing & -14 LUFS Mix' },
  { name: 'QC & Platform Metadata', detail: 'Multi-Channel Release Ops' },
  { name: 'Color Grading', detail: 'Log-to-Rec.709 & Look Dev' },
];

export const ABOUT_STATS = [
  { value: '7+ Years', label: 'Post-Production & Delivery' },
  { value: '100+', label: 'High-Retention Releases' },
  { value: 'End-to-End', label: 'Delivery Coordination' },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: '2026 – Present',
    role: 'Senior Video Editor',
    company: 'Rinoware Digital Media',
    location: 'Kerala, India',
    current: true,
    highlights: [
      'Edit promotional videos, social media reels, and digital media content from rough cut through final delivery.',
      'Handle color grading, audio sweetening, and motion graphics to keep output polished and consistent.',
    ],
    tags: ['Promos & Reels', 'Color Grading', 'Motion Graphics'],
  },
  {
    period: '2024 – Present',
    role: 'Content Delivery Manager',
    company: 'Wise Talkies',
    location: 'Kozhikode, India',
    current: true,
    highlights: [
      'Oversee end-to-end content delivery pipelines, quality control, and media distribution across digital channels.',
      'Coordinate cross-functional teams of editors, creators, and producers to streamline production workflows and maintain strict publishing schedules.',
      'Manage digital assets, platform optimization, and metadata strategies to maximize audience reach and engagement.',
    ],
    tags: ['Pipeline Ops', 'QC & Metadata', 'Team Leadership'],
  },
  {
    period: '2022 – 2024',
    role: 'Video Editor',
    company: 'Wise Talkies',
    location: 'Kozhikode, India',
    highlights: [
      'Edited high-retention tutorial videos, promotional clips, brand intros, and digital media content.',
      'Executed advanced post-production tasks including color grading, audio sweetening, and dynamic visual pacing.',
    ],
    tags: ['Masterclasses', 'Visual Pacing', 'Audio Sweetening'],
  },
  {
    period: '2021 – 2022',
    role: 'Senior Video Editor',
    company: 'Steyp',
    location: 'Kerala, India',
    highlights: [
      'Coordinated creative teams to execute diverse multimedia projects and educational video episodes.',
      'Managed color correction, sound dubbing, and promotional video production for digital channels.',
    ],
    tags: ['Team Coordination', 'Sound Dubbing', 'Color Correction'],
  },
  {
    period: '2020 – 2021',
    role: 'Video Editor',
    company: 'Talrop',
    location: 'Kerala, India',
    highlights: [
      'Assisted the creative team with frame setting, scene trimming, and raw footage review.',
      'Produced engaging promotional videos, social media reels, customer testimonials, and motion graphics advertisements.',
    ],
    tags: ['Testimonials', 'Motion Ads', 'Rough-Cut Review'],
  },
  {
    period: '2017 – 2019',
    role: 'Sales Engineer',
    company: 'Thapas Energy',
    location: 'Kerala, India',
    highlights: [
      'Consulted with clients to scope, design, and close solar equipment supply and installation projects.',
      'Managed solar system design, technical estimations, and contracting operations — establishing rigorous client communication and deadline delivery habits.',
    ],
    tags: ['Client Scoping', 'Technical Estimation', 'Project Delivery'],
  },
];

export const EDUCATION = [
  {
    period: 'Jan 2021',
    credential: 'Advanced Diploma in Video Editing',
    institution: 'Fly FX Multimedia VFX Academy',
    location: 'Kozhikode, India',
  },
  {
    period: 'Aug 2012 – May 2016',
    credential: 'B.Tech in Electronics and Communication',
    institution: 'Calicut University',
    location: 'Kozhikode, India',
  },
];
