
export type PhotographyCategory =
  | "Event / Concert"
  | "Celebrity / Events"
  | "Product"
  | "Food / Cafe"
  | "Nightlife"
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
  "Celebrity / Events",
  "Product",
  "Food / Cafe",
  "Nightlife",
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
  description: "A collection of nightlife, live events, and concert photography capturing the energy, atmosphere, and unforgettable moments of the night.",
  coverImage: "/images/nightlife/_MG_3504.JPG",
  gallery: [
    { src: "/images/nightlife/_MG_3504.JPG", alt: "Nightlife photography" },
    { src: "/images/nightlife/DSC00458.JPG", alt: "Nightlife event photography" },
    { src: "/images/nightlife/DSC00531.JPG", alt: "Nightlife event photography" },
    { src: "/images/nightlife/DSC00619.JPG", alt: "Nightlife event photography" },
    { src: "/images/nightlife/DSC00651.JPG", alt: "Nightlife event photography" },
    { src: "/images/nightlife/DSC00690.JPG", alt: "Nightlife event photography" },
    { src: "/images/nightlife/DSC00703.JPG", alt: "Nightlife event photography" },
    { src: "/images/nightlife/DSC00717.JPG", alt: "Nightlife event photography" },
    { src: "/images/nightlife/DSC00777.JPG", alt: "Nightlife event photography" },
    { src: "/images/nightlife/IMG_3603.JPG", alt: "Nightlife event photography" },
    { src: "/images/nightlife/IMG_3703.JPG", alt: "Nightlife event photography" },
    { src: "/images/nightlife/IMG_3839.JPG", alt: "Nightlife event photography" },
    { src: "/images/nightlife/IMG_3973.JPG", alt: "Nightlife event photography" },
  ],
},
 

{
  slug: "celeb-events",
  title: "Celeb Events",
  category: "Celebrity / Events",
  description: "Capturing celebrity appearances, candid moments, and unforgettable experiences from exclusive events.",
  coverImage: "/images/celeb-events/_DSC0131.jpg",
  gallery: [
    { src: "/images/celeb-events/_DSC0131.jpg", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/_DSC0318.jpg", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/_DSC0335.jpg", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/_DSC0429.jpg", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/_DSC0568.jpg", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/_DSC0620.jpg", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/_MG_0066.JPG", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/_MG_0073.JPG", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/_MG_0079.JPG", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/_MG_0130.JPG", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/DSC_3077.JPG", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/DSC_3132.JPG", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/DSC05484.jpg.jpeg", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/DSC05632.jpg.jpeg", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/DSC05744.jpg.jpeg", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/DSC07522.jpg.jpeg", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/DSC09002.jpg.jpeg", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/DSC09042.jpg.jpeg", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/DSC09074.jpg.jpeg", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/IMG_0034.jpg", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/IMG_0052.jpg", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/IMG_0081-2.jpg", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/IMG_0183.jpg", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/IMG_0205.jpg", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/IMG_0212.jpg", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/IMG_0259.jpg", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/IMG_0369.jpg", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/IMG_0414.jpg", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/IMG_0424.jpg", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/IMG_0455.jpg", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/IMG_0528.jpg", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/IMG_0533.jpg", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/M3_04165.JPG", alt: "Celebrity event photography" },
    { src: "/images/celeb-events/M3_04268.JPG", alt: "Celebrity event photography" }
  ],
  year: "2025",
  location: "Jaipur, India"
},


  
{
  slug: "moving-lines",
  title: "Moving Lines",
  category: "Automotive",
  description: "Automotive photography capturing bold silhouettes, refined details, and the character of every machine.",
  coverImage: "/images/cars/DSC04025.JPG",
  gallery: [
    { src: "/images/cars/DSC04025.JPG", alt: "Automotive photography" },
    { src: "/images/cars/DSC04066.JPG", alt: "Automotive photography" },
    { src: "/images/cars/DSC04127.JPG", alt: "Automotive photography" },
    { src: "/images/cars/DSC04134.JPG", alt: "Automotive photography" },
    { src: "/images/cars/DSC04254.JPG", alt: "Automotive photography" },
    { src: "/images/cars/DSC04258.JPG", alt: "Automotive photography" },
    { src: "/images/cars/DSC04280.JPG", alt: "Automotive photography" },
    { src: "/images/cars/DSC04356.JPG", alt: "Automotive photography" },
    { src: "/images/cars/DSC04486.JPG", alt: "Automotive photography" },
    { src: "/images/cars/DSC04552.JPG", alt: "Automotive photography" },
    { src: "/images/cars/DSC04743.JPG", alt: "Automotive photography" },
    { src: "/images/cars/DSC04746.JPG", alt: "Automotive photography" },
    { src: "/images/cars/DSC04756.JPG", alt: "Automotive photography" },
    { src: "/images/cars/DSC04795.JPG", alt: "Automotive photography" },
    { src: "/images/cars/DSC04802.JPG", alt: "Automotive photography" },
    { src: "/images/cars/DSC04833.JPG", alt: "Automotive photography" }
  ],
  year: "2025"
},

  
{
  slug: "travel-architecture",
  title: "Travel & Architecture",
  category: "Travel / Architecture",
  description: "Exploring places, architectural details, and travel stories through light, texture, and perspective.",
  coverImage: "/images/travel/_DSC0351.JPG",
  gallery: [
    { src: "/images/travel/_DSC0351.JPG", alt: "Travel photography" },
    { src: "/images/travel/_MG_0262.JPG", alt: "Travel and architecture" },
    { src: "/images/travel/_MG_0358.jpg", alt: "Architectural details" },
    { src: "/images/travel/_MG_6368.JPG", alt: "Travel photography" },
    { src: "/images/travel/_MG_6452.JPG", alt: "Travel photography" },
    { src: "/images/travel/_MG_6520.JPG", alt: "Architecture and surroundings" },
    { src: "/images/travel/_MG_6525.JPG", alt: "Architectural details" },
    { src: "/images/travel/_MG_6588.JPG", alt: "Travel photography" },
    { src: "/images/travel/_MG_6611.JPG", alt: "Travel photography" },
    { src: "/images/travel/_MG_6615.JPG", alt: "Travel photography" },
    { src: "/images/travel/_MG_6653.JPG", alt: "Architecture photography" },
    { src: "/images/travel/_MG_6707.JPG", alt: "Travel photography" },
    { src: "/images/travel/_MG_6716.JPG", alt: "Travel photography" },
    { src: "/images/travel/_MG_6750.JPG", alt: "Architectural details" },
    { src: "/images/travel/_MG_6751.JPG", alt: "Travel photography" },
    { src: "/images/travel/_MG_6763.JPG", alt: "Travel photography" },
    { src: "/images/travel/_MG_6775.JPG", alt: "Architecture photography" },
    { src: "/images/travel/_MG_6786.jpg", alt: "Travel photography" },
    { src: "/images/travel/_MG_7783.jpg", alt: "Travel photography" },
    { src: "/images/travel/_MG_7819-2.jpg", alt: "Travel photography" },
    { src: "/images/travel/_MG_8293.JPG", alt: "Architecture photography" },
    { src: "/images/travel/_MG_8467.JPG", alt: "Travel photography" },
    { src: "/images/travel/_MG_9891.jpg", alt: "Travel photography" },
    { src: "/images/travel/_MG_9934.jpg", alt: "Travel photography" },
    { src: "/images/travel/_MG_9960.jpg", alt: "Travel photography" },
    { src: "/images/travel/f1923904.JPG", alt: "Travel photography" },
    { src: "/images/travel/f12617792.JPG", alt: "Travel photography" },
    { src: "/images/travel/f14439680.JPG", alt: "Travel photography" },
    { src: "/images/travel/Snapchat-1224295135.JPG", alt: "Travel photography" }
  ],
  year: "2025"
},
]
