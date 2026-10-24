export type PhotographyCategory =
  | "Event / Concert"
  | "Product"
  | "Food / Cafe"
  | "Travel / Architecture"
  | "Automotive";

export type ProjectImage = {
  src: string;
  alt: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  category: PhotographyCategory;
  description: string;
  coverImage: string;
  gallery: ProjectImage[];
  year?: string;
  location?: string;
  client?: string;
};

export const categories: ("All Work" | PhotographyCategory)[] = [
  "All Work",
  "Event / Concert",
  "Product",
  "Food / Cafe",
  "Travel / Architecture",
  "Automotive",
];

// Replace these sample images with your own photographs before publishing.
// Unsplash images are only placeholders for layout testing.
export const projects: PortfolioProject[] = [
  {
    slug: "after-hours",
    title: "After Hours",
    category: "Event / Concert",
    description: "A collection of live moments, stage lights and the energy between songs.",
    coverImage: "/images/M3_02804.jpg",
    gallery: [
  { src: "/images/M3_02730.jpg", alt: "Photography 02730" },
  { src: "/images/M3_02719.jpg", alt: "Photography 02719" },
  { src: "/images/M3_02698.jpg", alt: "Photography 02698" },
  { src: "/images/M3_02661.jpg", alt: "Photography 02661" },
  { src: "/images/M3_02514.jpg", alt: "Photography 02514" },
  { src: "/images/M3_02107.jpg", alt: "Photography 02107" },
  { src: "/images/M3_02047.jpg", alt: "Photography 02047" },
],
    year: "2025",
    location: "Jaipur, India"
  },
  {
    slug: "form-and-fragrance",
    title: "Form & Fragrance",
    category: "Product",
    description: "Minimal product frames focused on texture, shape and thoughtful details.",
    coverImage: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      { src: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1600&q=85", alt: "Perfume bottle product photograph" },
      { src: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1600&q=85", alt: "Perfume bottles arranged together" }
    ],
    year: "2025"
  },
  {
    slug: "slow-mornings",
    title: "Slow Mornings",
    category: "Food / Cafe",
    description: "Natural light, honest textures and the small rituals around a good cup of coffee.",
    coverImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=85", alt: "Coffee and cafe table" },
      { src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1600&q=85", alt: "Cafe interior with warm light" }
    ],
    year: "2025",
    location: "Jaipur, India"
  },
  {
    title: "Nightlife",
    slug: "nightlife",
    category: "Nightlife",
    coverImage: "/images/nightlife/_MG_3504.JPG",
    gallery: [
      { src: "/images/nightlife/_MG_3504.JPG" },
      { src: "/images/nightlife/DSC00458.JPG" },
      { src: "/images/nightlife/DSC00531.JPG" },
      { src: "/images/nightlife/DSC00619.JPG" },
      { src: "/images/nightlife/DSC00651.JPG" },
      { src: "/images/nightlife/DSC00690.JPG" },
      { src: "/images/nightlife/DSC00703.JPG" },
      { src: "/images/nightlife/DSC00717.JPG" },
      { src: "/images/nightlife/DSC00777.JPG" },
      { src: "/images/nightlife/IMG_3603.JPG" },
      { src: "/images/nightlife/IMG_3703.JPG" },
      { src: "/images/nightlife/IMG_3839.JPG" },
      { src: "/images/nightlife/IMG_3973.JPG" },
  ],
},
  {
    slug: "quiet-geometry",
    title: "Quiet Geometry",
    category: "Travel / Architecture",
    description: "Lines, light and architectural details found while wandering through the city.",
    coverImage: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      { src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=85", alt: "Modern architectural structure" },
      { src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=85", alt: "Architectural facade and sky" }
    ],
    year: "2025"
  },
  {
    slug: "moving-lines",
    title: "Moving Lines",
    category: "Automotive",
    description: "Clean details and bold silhouettes celebrating the design of machines.",
    coverImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      { src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85", alt: "Sports car in dramatic light" },
      { src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=85", alt: "Car detail photography" }
    ],
    year: "2025"
  },
  {
    slug: "city-after-rain",
    title: "City After Rain",
    category: "Travel / Architecture",
    description: "A personal study of the city after the rain, when reflections reshape familiar streets.",
    coverImage: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      { src: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=85", alt: "City skyline at dusk" },
      { src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=85", alt: "City buildings from street level" }
    ]
  }
];
