# CEECO HDPE PIPES - Static Corporate Brochure

## Original Problem Statement
Static corporate brochure website for **CEECO HDPE PIPES** (by S D Ruparel Group).
Requirements: mobile-responsive design, ~1-week timeline, email-only forms (Formspree/Web3Forms),
floating WhatsApp button, premium industrial look. Brand palette: Navy / Blue / Green / Light Blue / White / Black / Grey.

## Tech Stack
- **Frontend**: React + React Router + Tailwind CSS + Shadcn UI + lucide-react
- **Backend**: None (fully static SPA)
- **Hosting**: Emergent preview env (deployable as static export)

## Site Structure (6 pages)
1. Home (`/`)
2. About Us (`/about`)
3. Products (`/products`)
4. Quality (`/quality`)
5. Careers (`/careers`)
6. Contact (`/contact`)

> ❌ Removed pages: `/infrastructure`, `/gallery` (deleted per user feedback)

## Key Constants (centralised in `/app/frontend/src/lib/site.js`)
- Phone: **+91 8043729397** (`tel:+918043729397`)
- WhatsApp: `https://wa.me/918043729397`
- Email: info@ceecopipes.com
- Hours: **Monday - Saturday · 10:00 AM - 7:00 PM**
- Established: 1984
- Copyright year: 2026
- PN Ratings (7): PN6, PN8, PN10, PN12.5, PN16, PN20, PN25
- PE Grades: PE 80, PE 100
- Sizes (9+): 20mm - 110mm

## What's Implemented (as of Feb 2026)
### Structure & Sitewide
- Deleted Infrastructure & Gallery pages from FS + routes + nav + footer.
- Phone, hours, WhatsApp, footer copyright (© 2026), all driven from `site.js`.
- All em dashes replaced with hyphens.
- Industrial B2B typography: SectionHeading and PageHero are bigger, bolder, uppercase.

### Homepage
- **Hero**: 9+ Sizes / 7 PN Ratings stats, all PN/PE chips, brighter pipe background, no overlap.
- **AboutPreview**: S D Ruparel Group as parent emphasised; uses FACTORY.jpeg; removed floating Trust box.
- **Legacy (moved up - right after About)**: Vertically stacked placeholder cards for Founder (Late Shri Damodar S Ruparel) and Director (Sameer D Ruparel, no period after S).
- **Stats**: 4 stats only (1984, 40+, 500+, Karnataka). Removed "Thousands" and "Dealer Network 200+".
- **WhyChoose / QualityManufacturing**: Lightly transparent background images per card.
- **FeaturedProducts**: BLUEDUCT.jpg used for the Blue Duct card.
- **WhyHDPE**: Redesigned to match user-provided WHYHDPE.png — central PE 80 oval, stylised stacked pipes, all 7 PN ratings.
- **ClientsMarquee**: Filtered to BBMP (formerly), BDA, Govt of Karnataka, GBA, BWSSB + state irrigation pill.
- **Testimonials**: South Indian B2B names (Ramesh Gowda, Venkatesh Iyer, Sundararajan & Sons).

### Inner Pages
- **About**: Founder & Director leadership placeholders inside "The Journey"; "40+ years" text; Vision GOAL 01 = BIS / ISI Certification.
- **Products**: BLUEDUCT.jpg; no "Download Spec" buttons; ISO 9001:2015 + Udyam MSME cert cards using user-uploaded ISO.jpeg & MSME.jpeg.
- **Quality**: Removed "Working Towards ISO" & "PE 80" cards; kept only "Working Towards BIS" + "Working Towards ISI"; ISO + MSME images side-by-side.
- **Contact**: Phone with tel: link, hours 10AM-7PM, anchored CTAs to #contact-form. Form submits with mock toast.
- **Careers**: Phone placeholder updated; Apply Now anchors to #apply. Form submits with mock toast.

## Validation
- ✅ Frontend testing agent: 22/22 spec items verified passing (iteration_1.json).
- ✅ Lint: clean (only ignored shadcn UI warnings).
- ✅ A11y: Added VisuallyHidden DialogTitle to mobile drawer Sheet.

## Open Backlog (P1/P2)
- **P1**: Wire Contact + Careers forms to Formspree / Web3Forms / Getform (email-only). Currently mock toasts.
- **P2**: Upload real client logos (BBMP, BDA, Govt Karnataka, GBA, BWSSB).
- **P2**: Upload real founder/director photos to replace the "Photo Coming Soon" placeholders (Home Legacy + About Journey).
- **P2**: Replace `[Your Office Address]` / `[Your Factory Address]` with real addresses (Footer & Contact page).
- **P2**: Optional 404 page for any stale Infrastructure/Gallery bookmarks.

## File Architecture
```
/app/frontend/src/
├── App.js                          (6 routes)
├── lib/site.js                     (SITE constants, ASSETS, PN/PE/SIZES)
├── components/
│   ├── common/SectionHeading.jsx, PageHero.jsx
│   ├── layout/Header.jsx, Footer.jsx, Layout.jsx, Logo.jsx, WhatsAppButton.jsx
│   ├── home/
│   │   ├── Hero, AboutPreview, Legacy, Stats, WhyChoose,
│   │   ├── FeaturedProducts, QualityManufacturing, WhyHDPE,
│   │   ├── ClientsMarquee, Testimonials, AfterSales, ContactPreview
│   └── ui/  (shadcn primitives)
└── pages/
    └── Home.jsx, About.jsx, Products.jsx, Quality.jsx, Careers.jsx, Contact.jsx
```

## Test Credentials
None — site is fully public, no auth.
