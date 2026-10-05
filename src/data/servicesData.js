export const servicesCategories = [
  "All",
  "Facials",
  "Hair Removal",
  "Nail Care",
  "Spa & Wellness",
];

export const servicesData = [
  {
    id: "hydra-facial",
    name: "Hydra Facial",
    category: "Facials",
    shortDescription:
      "A gentle multi-step cleansing and hydration therapy focused on deep pore cleansing and restoring natural skin freshness.",
    image:
      "/images/hydra-facial.jpg",
    duration: null,
    price: null,
    featured: true,
  },
  {
    id: "special-gold-facial",
    name: "Special Gold Facial",
    category: "Facials",
    shortDescription:
      "A nourishing facial experience designed to improve skin smoothness, restore gentle luminosity, and enhance natural glow.",
    image:
      "/images/gold-facial.jpg",
    duration: null,
    price: null,
    featured: true,
  },
  {
    id: "tan-removal-pack",
    name: "Tan Removal Pack",
    category: "Facials",
    shortDescription:
      "A soothing exfoliation and de-tanning pack formulated to gently lift sun dullness and refresh your complexion.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    duration: null,
    price: null,
    featured: true,
  },
  {
    id: "vitamin-glow-facial",
    name: "Vitamin Glow Facial",
    category: "Facials",
    shortDescription:
      "A revitalizing nutrient-rich session that boosts moisture retention and leaves the skin feeling supple, soft, and clear.",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
    duration: null,
    price: null,
    featured: true,
  },
  {
    id: "eyebrow-threading",
    name: "Eyebrow Threading",
    category: "Hair Removal",
    shortDescription:
      "Precise eyebrow grooming designed to create a clean, well-defined shape that naturally complements your facial features.",
    image:
      "/images/eyebrow-threading.jpg",
    duration: null,
    price: null,
    featured: false,
  },
  {
    id: "manicure-pedicure",
    name: "Manicure & Pedicure",
    category: "Nail Care",
    shortDescription:
      "Essential hand and foot care focused on grooming, nail shaping, cuticle neatness, gentle exfoliation, and relaxation.",
    image:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80",
    duration: null,
    price: null,
    featured: true,
  },
  {
    id: "full-hands-half-legs-wax",
    name: "Full Hands / Half Legs Wax",
    category: "Hair Removal",
    shortDescription:
      "Careful salon waxing service providing smooth, hygienic hair removal with soothing post-wax skin care.",
    image:
      "/images/waxing-treatment.jpg",
    duration: null,
    price: null,
    featured: false,
  },
  {
    id: "relaxing-spa-therapy",
    name: "Relaxing Spa Therapy",
    category: "Spa & Wellness",
    shortDescription:
      "A calming therapeutic experience with soothing massage strokes to release tension, ease fatigue, and promote complete rest.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    duration: null,
    price: null,
    featured: true,
  },
];

export const servicesPageContent = {
  hero: {
    kicker: "Our Services",
    title: "Beauty Care for Every You",
    description:
      "Explore thoughtful salon treatments, gentle skin therapies, and grooming services crafted to help you look and feel your best.",
    cta: {
      text: "Book an Appointment",
      path: "/booking",
    },
    image: {
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      alt: "Soundaryalahari Beauty Care Treatments",
    },
  },
  notSureCta: {
    heading: "Not Sure What to Choose?",
    description:
      "Whether you are planning routine grooming or looking for a suitable skincare treatment, our team in S.R. Nagar is happy to help you decide.",
  },
  offersPreview: {
    label: "Special Privileges",
    heading: "Looking for Current Offers?",
    description:
      "Special beauty and salon offers are periodically available, including dedicated packages for ladies and students.",
    cta: {
      text: "Explore Offers",
      path: "/gallery-offers",
    },
  },
  finalCta: {
    heading: "Your Next Beauty Session Starts Here",
    description:
      "Book your salon visit in advance for a relaxed, comfortable beauty experience tailored to you.",
    primaryCta: {
      text: "Book an Appointment",
      path: "/booking",
    },
  },
};
