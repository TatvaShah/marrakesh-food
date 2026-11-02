import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Marrakesh Food",
  tagline: "Traditional Moroccan pastilla, tagines, and homemade bread in Mississauga, made with love.",
  category: "Moroccan food and catering",
  schemaType: "FoodEstablishment",
  area: "Mississauga, ON",
  siteUrl: "https://marrakesh-food.vercel.app",

  theme: {
    preset: "warm-food",
    colors: { accent: "#8e2436" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "From the heart of Morocco, in Mississauga",
    headline: "Golden pastilla and slow cooked Moroccan classics",
    subhead: "Crispy pastilla topped with toasted almonds, fish tagine, sardine kofta, and homemade Moroccan bread for your table or your next celebration. Send us a DM to order.",
    images: [
      { src: "/images/pastilla-almonds.jpg", alt: "Moroccan pastilla topped with toasted almonds" },
      { src: "/images/pastilla-party.jpg", alt: "Party size pastillas ready for an event" },
      { src: "/images/kofta-tagine-spread.jpg", alt: "Sardine kofta, fish tagine, and Moroccan sides" },
    ],
    secondaryCta: { label: "See the food", href: "#gallery" },
  },

  highlights: ["Authentic Moroccan flavours", "Halal", "Pastilla for special occasions", "Orders by Instagram DM"],

  about: {
    title: "A taste of Morocco, made with love",
    body: [
      "Marrakesh Food brings traditional Moroccan cooking to Mississauga: golden, flaky pastilla, rich tagines, and bread baked at home the way it is made in Morocco.",
      "Our beautifully crafted pastillas bring tradition and a touch of luxury to weddings, family gatherings, and every special occasion. Tell us your date and how many guests, and we will take care of the rest.",
    ],
    image: { src: "/images/pastilla-golden.jpg", alt: "Golden pastilla on a serving tray" },
  },

  menu: {
    title: "From our kitchen",
    intro: "Favourites from our Moroccan table. Message us for pricing and sizes.",
    variant: "cards",
    showPrices: false,
    priceNote: "Message us for pricing on your date, dish, and quantity.",
    groups: [
      {
        title: "Pastilla",
        items: [
          { name: "Moroccan pastilla", description: "Golden, crispy pastilla topped with toasted almonds. Chicken, seafood, and party sizes.", dietary: ["halal"], image: { src: "/images/pastilla-almonds.jpg", alt: "Moroccan pastilla" }, href: "https://www.instagram.com/p/DfAGstMEdP-/" },
          { name: "Party size pastillas", description: "Made for weddings, gatherings, and special occasions.", dietary: ["halal"], image: { src: "/images/pastilla-party.jpg", alt: "Party size pastillas" }, href: "https://www.instagram.com/p/DfFVlpaERtl/" },
        ],
      },
      {
        title: "Tagines and mains",
        items: [
          { name: "Fish tagine with vegetables", dietary: ["halal"], image: { src: "/images/kofta-tagine-spread.jpg", alt: "Fish tagine with vegetables" }, href: "https://www.instagram.com/p/DfKd77FEdtF/" },
          { name: "Moroccan sardine kofta", dietary: ["halal"], href: "https://www.instagram.com/p/DfKd77FEdtF/" },
          { name: "Kera3ine with chickpeas", description: "Slow cooked and rich in flavour.", dietary: ["halal"], image: { src: "/images/kera3ine-chickpeas.jpg", alt: "Kera3ine with chickpeas" }, href: "https://www.instagram.com/p/DemwHC1R6fX/" },
        ],
      },
      {
        title: "Bread and catering",
        items: [
          { name: "Homemade Moroccan bread", image: { src: "/images/moroccan-bread.jpg", alt: "Homemade Moroccan bread" }, href: "https://www.instagram.com/p/DfKd77FEdtF/" },
          { name: "Event catering trays", description: "Moroccan dishes by the tray for your gathering.", dietary: ["halal"], image: { src: "/images/moroccan-tray.jpg", alt: "Catering tray of Moroccan food" } },
        ],
      },
    ],
  },

  gallery: {
    title: "Fresh from our kitchen",
    items: [
      { src: "/images/pastilla-almonds.jpg", width: 1080, height: 1440, alt: "Pastilla with toasted almonds", caption: "Moroccan pastilla perfection", href: "https://www.instagram.com/p/DePY6wSEaW1/" },
      { src: "/images/kofta-tagine-spread.jpg", width: 941, height: 1254, alt: "Sardine kofta and fish tagine", caption: "Sardine kofta and fish tagine", href: "https://www.instagram.com/p/DfKd77FEdtF/" },
      { src: "/images/pastilla-party.jpg", width: 1080, height: 1440, alt: "Party pastillas", caption: "Golden, crispy pastilla", href: "https://www.instagram.com/p/DfFVlpaERtl/" },
      { src: "/images/kera3ine-chickpeas.jpg", width: 900, height: 1600, alt: "Kera3ine with chickpeas", caption: "Kera3ine with chickpeas", href: "https://www.instagram.com/p/DemwHC1R6fX/" },
      { src: "/images/pastilla-golden.jpg", width: 1080, height: 1440, alt: "Golden pastilla", caption: "A taste of Morocco in every bite", href: "https://www.instagram.com/p/DfAGstMEdP-/" },
      { src: "/images/moroccan-tray.jpg", width: 1080, height: 1440, alt: "Moroccan catering tray", caption: "Moroccan cuisine", href: "https://www.instagram.com/p/DeNGAobmrtW/" },
      { src: "/images/moroccan-bread.jpg", width: 941, height: 1254, alt: "Homemade Moroccan bread", caption: "Homemade Moroccan bread", href: "https://www.instagram.com/p/DfKd77FEdtF/" },
      { src: "/images/baked-trays.jpg", width: 900, height: 1600, alt: "Fresh baked Moroccan dishes", caption: "Authentic flavours, made with love", href: "https://www.instagram.com/p/DeUzBlvRYmf/" },
      { src: "/images/stews.jpg", width: 900, height: 1600, alt: "Traditional Moroccan dishes", caption: "Traditional Moroccan food", href: "https://www.instagram.com/p/DfNEzuMRDT5/" },
    ],
  },

  instagram: {
    handle: "marrakeshfood",
    embeds: ["https://www.instagram.com/p/DfKd77FEdtF/", "https://www.instagram.com/p/DfFVlpaERtl/"],
    embedsTitle: "Latest from our kitchen",
  },

  order: {
    title: "Order in a quick DM",
    intro: "We take orders through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Marrakesh Food! I would like to place an order.\nDate needed:\nDish (pastilla, tagine, other):\nQuantity or number of guests:\nPickup time:",
    links: [],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send us a DM on Instagram with your date, dish, quantity, and pickup time. We will confirm the details and pricing in the chat." },
    { q: "Do you make pastilla for events?", a: "Yes. Our pastillas come in party sizes for weddings, gatherings, and special occasions." },
    { q: "Is your food halal?", a: "Yes, our food is halal." },
  ],

  contact: {
    area: "Mississauga, Ontario",
    socials: [],
  },

  seo: {
    title: "Marrakesh Food | Moroccan food and catering in Mississauga",
    description: "Traditional Moroccan pastilla, fish tagine, sardine kofta, and homemade bread in Mississauga, Ontario. Halal, made with love. Order by Instagram DM.",
    keywords: ["Moroccan food Mississauga", "pastilla Mississauga", "Moroccan catering GTA", "halal Moroccan food Mississauga"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
