// Centralised brand, contact and asset constants for CEECO HDPE Pipes.
// Update these in one place and the whole site stays in sync.

export const SITE = {
  brand: "CEECO HDPE PIPES",
  parent: "S D Ruparel Group",
  established: 1984,
  tagline: "WATER · FIELDS · FUTURE",
  builtOn: "Built on Trust Since 1984",

  phone: "+91 8043729397",
  phoneRaw: "+918043729397",
  email: "info@ceecopipes.com",
  website: "www.ceecopipes.com",
  whatsapp: "https://wa.me/919449528205",

  hours: {
    days: "Monday - Saturday",
    time: "10:00 AM - 7:00 PM",
    compact: "Mon-Sat · 10AM-7PM",
  },

  address: {
    office: {
      lines: [
        "17, Venkata Ramanaik Lane,",
        "S P Road Cross, Kumbarpet,",
        "Dodpete, Nagarathpete,",
        "Bengaluru, Karnataka - 560002",
      ],
      compact:
        "17, Venkata Ramanaik Lane, S P Road Cross, Kumbarpet, Dodpete, Nagarathpete, Bengaluru, Karnataka - 560002",
      mapUrl: "https://maps.app.goo.gl/LBp7S1pHW7YYr3CK6",
      // Embed uses the full address as a query.
      embedQuery:
        "17 Venkata Ramanaik Lane S P Road Cross Kumbarpet Dodpete Nagarathpete Bengaluru Karnataka 560002",
    },
    factory: {
      lines: [
        "B-67, 2nd Cross Road,",
        "Peenya 1st Stage, Peenya II Phase,",
        "Peenya, Bengaluru,",
        "Karnataka - 560058",
      ],
      compact:
        "B-67, 2nd Cross Road, Peenya 1st Stage, Peenya II Phase, Peenya, Bengaluru, Karnataka - 560058",
      mapUrl: "https://maps.app.goo.gl/sZJy1xpkjxcKsEp6A",
      embedQuery:
        "B-67 2nd Cross Road Peenya 1st Stage Peenya II Phase Bengaluru Karnataka 560058",
    },
  },
};

// PN ratings & grades displayed across the site
export const PN_RATINGS = ["PN6", "PN8", "PN10", "PN12.5", "PN16", "PN20", "PN25"];
export const PE_GRADES = ["PE 80", "PE 100"];
export const PIPE_SIZES = [
  "20mm", "25mm", "32mm", "40mm", "50mm",
  "63mm", "75mm", "90mm", "110mm",
];

// User-uploaded brand assets
export const ASSETS = {
  factory: "https://customer-assets.emergentagent.com/job_ceeco-hdpe/artifacts/huutw4o0_FACTORY.jpeg",
  blueDuct: "https://customer-assets.emergentagent.com/job_ceeco-hdpe/artifacts/vd5a8i4f_BLUEDUCT.jpg",
  whyHdpe: "https://customer-assets.emergentagent.com/job_ceeco-hdpe/artifacts/p8uvqixh_WHYHDPE.png",
  iso: "https://customer-assets.emergentagent.com/job_ceeco-hdpe/artifacts/73fjdjs9_ISO.jpeg",
  msme: "https://customer-assets.emergentagent.com/job_ceeco-hdpe/artifacts/tggd9dpo_MSME.jpeg",
};

// Client logos (matched by filename, ignoring extension)
export const CLIENT_LOGOS = {
  BBMP: "https://customer-assets.emergentagent.com/job_ceeco-hdpe/artifacts/wim3loa1_BBMP.jpg",
  BDA: "https://customer-assets.emergentagent.com/job_ceeco-hdpe/artifacts/2kfn50ri_BDA.jpeg",
  BWSSB: "https://customer-assets.emergentagent.com/job_ceeco-hdpe/artifacts/boh3ugl3_BWSSB.png",
  GBA: "https://customer-assets.emergentagent.com/job_ceeco-hdpe/artifacts/huqxvuxk_GBA.jpg",
  GOVTOFKARNATAKA:
    "https://customer-assets.emergentagent.com/job_ceeco-hdpe/artifacts/5zehsybs_GOVTOFKARNATAKA.png",
};

export const COPYRIGHT_YEAR = 2026;
