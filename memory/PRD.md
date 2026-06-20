# CEECO HDPE PIPES - Static Corporate Brochure

## Original Problem Statement
Static corporate brochure website for **CEECO HDPE PIPES** (by S D Ruparel Group).
Requirements: mobile-responsive, ~1-week timeline, email-only forms (Formspree/Web3Forms),
floating WhatsApp button, premium industrial look. Brand palette: Navy / Blue / Green / Light Blue / White / Black / Grey.

## Tech Stack
- **Frontend**: React + React Router + Tailwind CSS + Shadcn UI + lucide-react
- **Backend**: None (fully static SPA)

## Site Structure (6 pages)
Home (`/`) · About Us (`/about`) · Products (`/products`) · Quality (`/quality`) · Careers (`/careers`) · Contact (`/contact`)
> ❌ Removed pages: `/infrastructure`, `/gallery`

## Key Constants (`/app/frontend/src/lib/site.js`)
- Phone: **+91 8043729397** (`tel:+918043729397`)
- WhatsApp: `https://wa.me/918043729397`
- Email: info@ceecopipes.com
- Hours: **Monday - Saturday · 10:00 AM - 7:00 PM**
- Established: 1984 · Copyright year: 2026
- **Corporate Office**: 17, Venkata Ramanaik Lane, S P Road Cross, Kumbarpet, Dodpete, Nagarathpete, Bengaluru, Karnataka - 560002 · Maps: https://maps.app.goo.gl/LBp7S1pHW7YYr3CK6
- **Manufacturing Unit**: B-67, 2nd Cross Road, Peenya 1st Stage, Peenya II Phase, Peenya, Bengaluru, Karnataka - 560058 · Maps: https://maps.app.goo.gl/sZJy1xpkjxcKsEp6A
- PN Ratings (7): PN6, PN8, PN10, PN12.5, PN16, PN20, PN25
- PE Grades: PE 80, PE 100
- Sizes (9+): 20mm - 110mm

## Implementation Log

### Iteration 1 - 41-point UI overhaul (Feb 2026)
- Deleted Infrastructure & Gallery pages from FS, routes, nav, footer.
- Centralised SITE constants. Phone, hours, WhatsApp, footer copyright auto-driven.
- All em dashes replaced with hyphens. Industrial B2B uppercase typography.
- Homepage: Hero (9+ Sizes / 7 PN Ratings, brighter pipe bg, no overlap), AboutPreview (S D Ruparel parent, FACTORY.jpeg, no Trust overlay), Legacy moved up after About with stacked Founder/Director placeholders, Stats (500+, Karnataka once, no Dealer Network), WhyChoose & QualityManufacturing with bg images per card, FeaturedProducts (BLUEDUCT.jpg), WhyHDPE central oval + 7 PN ratings, ClientsMarquee filtered, South Indian B2B testimonials.
- Inner pages: About leadership placeholders + 40+ years + BIS/ISI as GOAL 01; Products BLUEDUCT.jpg + ISO 9001:2015 + Udyam MSME; Quality removed Working Towards ISO/PE80, kept BIS + ISI.
- ✅ 22/22 spec items verified (iteration_1.json).

### Iteration 2 - User Addendum (Feb 2026)
- **Addresses**: Real office (Nagarathpete) + manufacturing unit (Peenya) replace placeholders sitewide.
- **Map links**: Footer location rows and Contact page address cards link to the user's `maps.app.goo.gl` short URLs.
- **Maps embed**: Contact page "Visit Us" section now has TWO Google Maps iframes (office + manufacturing unit) with labelled headers and "Open in Google Maps" CTA bars.
- **Client logos**: All 5 real uploaded institution logos (BBMP, BDA, GOVTOFKARNATAKA, GBA, BWSSB) render in the home Clients section, matched by filename.
- **Hero tweaks**: Removed PE 80 / PE 100 green chips from the chip strip beside PN ratings (kept PN6-PN25 only). Hero background swapped from generic duct-pipe stock photo to user's authentic FACTORY.jpeg HDPE coils.
- **Why HDPE redesign**: Kept original 4-left + center + 4-right layout. Restyled the central oval into a realistic head-on HDPE pipe cross-section using concentric ring gradients (outer dark wall → signature blue stripe → inner wall → black hollow cavity with brand text + PN ratings inside). Added "· PIPE CROSS-SECTION ·" annotation.
- **A11y**: VisuallyHidden DialogTitle added to mobile drawer Sheet.
- ✅ 54/54 spec items verified (iteration_2.json).

## File Architecture
```
/app/frontend/src/
├── App.js                          (6 routes)
├── lib/site.js                     (SITE constants, ASSETS, CLIENT_LOGOS, PN/PE/SIZES)
├── components/
│   ├── common/SectionHeading.jsx, PageHero.jsx
│   ├── layout/Header.jsx, Footer.jsx, Layout.jsx, Logo.jsx, WhatsAppButton.jsx
│   ├── home/ (12 sections)
│   └── ui/  (shadcn primitives)
└── pages/Home.jsx, About.jsx, Products.jsx, Quality.jsx, Careers.jsx, Contact.jsx
```

## Open Backlog
- **P1**: Wire Contact + Careers forms to Formspree / Web3Forms / Getform (email-only, free).
- **P2**: Upload real founder/director photos to replace "Photo Coming Soon" placeholders (Home Legacy + About Journey).
- **P3**: Consider /infrastructure and /gallery URLs returning a friendly NotFound or redirect to `/` for stale bookmarks.

## Test Credentials
None - fully public static site, no auth.
