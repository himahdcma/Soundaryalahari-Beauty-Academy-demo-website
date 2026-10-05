import { businessData } from './businessData.js';

export const aboutData = {
  hero: {
    label: "About Soundaryalahari",
    heading: "Beauty With a Personal Touch",
    subheading: "Dedicated to personal beauty care, thoughtful grooming, and revitalizing self-care in a warm, welcoming salon environment.",
    locationBadge: `${businessData.location.area}, ${businessData.location.city}`,
    ctaText: "Book an Appointment",
    ctaLink: "/booking",
    heroImage: {
      url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
      alt: "Welcoming and serene beauty salon interior",
    },
  },

  story: {
    label: "Our Story",
    heading: "A Space for Beauty, Care & Confidence",
    paragraphs: [
      "Soundaryalahari brings together essential beauty, grooming, and self-care services in S.R. Nagar, Hyderabad. We created our studio to offer individuals an unhurried, comfortable sanctuary where personal grooming meets genuine care and attention.",
      "Our focus is simple: listening closely to your preferences, providing thoughtful treatments with quality products, and ensuring every visit leaves you feeling confident, refreshed, and well cared for in a friendly neighborhood setting.",
    ],
  },

  philosophy: {
    label: "Our Philosophy",
    heading: "Care That Feels Personal",
    subtitle: "Three simple commitments guide every treatment and interaction in our studio.",
    principles: [
      {
        id: "principle-1",
        title: "Personal Attention",
        description: "We take the time to understand your unique preferences so every service feels tailored specifically to you.",
        iconName: "HeartHandshake",
      },
      {
        id: "principle-2",
        title: "Thoughtful Beauty Care",
        description: "Every treatment is delivered with patience, quality products, and meticulous attention to detail.",
        iconName: "Sparkles",
      },
      {
        id: "principle-3",
        title: "Comfortable Experience",
        description: "A welcoming, relaxing salon environment designed to let you unwind while we care for your grooming needs.",
        iconName: "Smile",
      },
    ],
  },

  visualSalon: {
    label: "The Atmosphere",
    heading: "A Welcoming Environment",
    subtitle: "Step into a space designed for calm, gentle self-care and professional attention.",
    images: [
      {
        id: "vis-1",
        url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
        alt: "Welcoming beauty salon ambiance with clean styling stations",
        caption: "Welcoming Salon Ambiance",
      },
      {
        id: "vis-2",
        url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
        alt: "Professional and attentive beauty skincare treatment",
        caption: "Attentive Personal Care",
      },
      {
        id: "vis-3",
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80",
        alt: "Calm and peaceful self-care setting",
        caption: "Calm Self-Care Space",
      },
    ],
    demoNote: "Demo imagery shown for presentation.",
  },

  academy: {
    label: "Beauty Academy",
    heading: "Interested in Beauty Learning?",
    copy: "Contact Soundaryalahari directly to learn about any current beauty learning or training opportunities.",
    ctaText: "Ask on WhatsApp",
  },

  contact: {
    label: "Get In Touch",
    heading: "Let's Connect",
    subtitle: "We're here to answer questions, guide your service choices, or welcome you for your next appointment.",
  },

  location: {
    label: "Find Us",
    heading: "Salon Location",
    area: businessData.location.area,
    city: businessData.location.city,
    state: businessData.location.state,
    directionsText: "Get Directions",
  },

  hours: {
    label: "Visiting Hours",
    heading: "Business Hours",
    unverifiedNotice: "Opening hours — Please contact the salon for current timings.",
    ctaText: "Call for Timings",
  },

  finalCta: {
    heading: "Ready to Plan Your Visit?",
    subheading: "Whether you need essential grooming, a soothing treatment, or a fresh new look, we look forward to welcoming you.",
    primaryCta: "Book an Appointment",
    primaryLink: "/booking",
    secondaryCta: "WhatsApp Us",
  },
};
