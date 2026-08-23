# CEECO HDPE PIPES - Static Corporate Brochure

## Original Problem Statement
Static corporate brochure website for **CEECO HDPE PIPES** (by S D Ruparel Group).
Requirements: mobile-responsive, email-only forms, floating WhatsApp button, premium industrial look.

**Iteration 3 (current)**: Full visual redesign to a **RED · BLACK · WHITE industrial B2B brand**
positioned to compete with Astral Pipes and Supreme Industries. Zero functional changes; skin
transplant only.

## Tech Stack
- **Frontend**: React + React Router + Tailwind CSS + Shadcn UI + lucide-react
- **Fonts**: Inter (body) + Sora (display) via Google Fonts
- **Backend**: None (fully static SPA)

## Site Structure (6 pages)
Home (`/`) · About Us (`/about`) · Products (`/products`) · Quality (`/quality`) · Careers (`/careers`) · Contact (`/contact`)

## Design System (Iteration 3)

### Palette
| Token | Hex | Usage |
|-------|-----|-------|
| Brand Red | `#C8102E` (approx rgb(198,16,40) via HSL) | Primary CTAs, accent lines, hover states |
| Deep Red | `#9B0A1E` | Button hover darkening |
| True Black | `#0A0A0A` | Text, dark sections, footer, navbar-solid |
| Soft Black | `#1A1A1A` | Card depth |
| Pure White | `#FFFFFF` | Backgrounds, text on dark |
| Industrial Gray | `#F2F2F2` | Alt sections, subtle fills |
| Text Gray | `#4A4A4A` | Body text |
| Border Gray | `#E0E0E0` | Dividers, card borders |
| WhatsApp Green | `#25D366` | Retained ONLY for the WhatsApp button |

Note: CSS custom property is still named `--brand-green` but now holds the red value — semantic rename can be a follow-up cleanup.

### Typography
- Family: **Sora** (display 700-900) · **Inter** (body 300-800)
- Hero H1: 72-96px, weight 900
- Section H2: 52-64px, weight 900 (Sora display)
- Body: 16-18px, line-height 1.7
- Nav / Buttons: uppercase, letter-spacing 0.05-0.1em

### Radius / Corners
- Global `--radius: 0.125rem` (2px minimum)
- Buttons & industrial cards use sharp `rounded-none`

### Animations
- Navbar transparent → solid on scroll (50px threshold, 500ms ease)
- Scroll reveal: `.reveal` (fadeY 40px), `.reveal-x` (fadeX -30px), `.reveal-scale` (fadeS 0.95→1)
- Stat count-up: 2.5s easeOutExpo on viewport entry
- Hero: Ken Burns 22s slow zoom + staggered fade-up (0.15s stagger)
- Buttons: hover translateY(-2px) + shadow expansion
- Cards: hover translateY(-8px) + red line grows from left
- Nav links: red underline animates center-out

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

### Iteration 1 — 41-point UI overhaul (Feb 2026)
Deleted Infrastructure/Gallery, centralised constants, restructured content per user list.
✅ 22/22 spec items verified.

### Iteration 2 — Addendum (Feb 2026)
Real Bengaluru addresses (office + manufacturing unit), Google Maps embeds, 5 real client logos.
✅ 54/54 spec items verified.

### Iteration 3 — Full visual redesign to Red/Black/White industrial (Feb 2026)
- **Design tokens rewritten**: navy/blue/green palette fully replaced with red/black/white/gray. Sora display font.
- **Typography scale doubled**: Hero H1 96px, Section H2 52-64px, Page H1 88px.
- **Sharp industrial corners** (0-2px radius) on cards + buttons.
- **Navbar redesign**: transparent-on-hero, solid-white-on-scroll (50px threshold). Red 3px top strip when solid. Red underline center-out for nav links.
- **New Logo**: red C mark + text wordmark with "Since 1984" byline. (Original logo file still awaiting user upload.)
- **Hero rebuilt**: FACTORY.jpeg 65% opacity with Ken Burns zoom, red "PIPES" accent, staggered fade-up entrance, sharp-cornered red primary CTA, PE 80/PE 100 grade strip, all 7 PN chips, corner-accented trusted-manufacturer card, PE 80/PE 100 badge lowered (-bottom-10 right-6) to not overlap card content.
- **Stats reworked**: numeric values count up 2.5s easeOutExpo. Text values (Thousands, Karnataka) at smaller 44px to prevent horizontal overflow.
- **Legacy section**: black bg, stacked founder/director placeholder cards with red corners.
- **Why Choose / Quality Manufacturing**: 8 & 4 industrial cards each with lightly transparent background images and hover animations.
- **Featured Products**: black section with sharp cards, red tag pills, hover lift.
- **Why HDPE**: WHYHDPE.png used as the central visual (it already contains the pipe + 8 feature callouts); duplicate external feature columns removed for cleaner presentation.
- **Clients**: 5 real logos, grayscale filter transitioning to full color on hover, corner accents.
- **Testimonials, After Sales, Contact Preview**: red primary CTAs, sharp cards.
- **ContactPreview background**: brand red (max CTA impact).
- **Inner pages** (About / Products / Quality / Careers / Contact): PageHero with 88px H1 on black bg. Sharp cards with border-only style. Red underline focus for form inputs. Product certifications use ISO.jpeg + MSME.jpeg.
- **Footer rebuilt**: pure black, red 4px top line, red accent lines under every column heading, addresses linked to Google Maps.
- **WhatsApp button**: retained native green (#25D366) per user spec.
- ✅ 20/20 spec categories verified (iteration_3.json). No em dashes. No console errors. All buttons and forms functional.

## Open Backlog
- **P1**: Wire Contact + Careers forms to Formspree / Web3Forms / Getform (free, email-only).
- **P2**: Upload real founder/director photos to replace "Photo Coming Soon" placeholders (Home Legacy + About Journey).
- **P2**: Upload the finalised CEECO wordmark logo file (currently a text-based industrial logo in `Logo.jsx`).
- **P3**: (Optional) Semantic rename `--brand-green` → `--brand-red` and Tailwind classes accordingly — currently a cosmetic-only technical debt, no runtime impact.
- **P3**: Friendly NotFound page for stale `/infrastructure` and `/gallery` bookmarks.

## File Architecture
```
/app/frontend/src/
├── App.js                          (6 routes)
├── App.css                         (minimal CRA reset)
├── index.css                       (design tokens, animations, utility classes)
├── lib/site.js                     (SITE constants, ASSETS, CLIENT_LOGOS, PN/PE/SIZES)
├── hooks/useScrollReveal.js        (IntersectionObserver for .reveal / .reveal-x / .reveal-scale)
├── components/
│   ├── common/SectionHeading.jsx, PageHero.jsx
│   ├── layout/Header.jsx, Footer.jsx, Layout.jsx, Logo.jsx, WhatsAppButton.jsx
│   ├── home/ (12 sections: Hero, AboutPreview, Legacy, Stats, WhyChoose,
│   │          FeaturedProducts, QualityManufacturing, WhyHDPE, ClientsMarquee,
│   │          Testimonials, AfterSales, ContactPreview)
│   └── ui/  (shadcn primitives)
└── pages/Home.jsx, About.jsx, Products.jsx, Quality.jsx, Careers.jsx, Contact.jsx
```

## Test Credentials
None - fully public static site, no auth.

## Update — June 2026 (Fork session, 13-point change batch — ALL DONE, tested via iteration_4.json 100% pass)
1. Legacy heading: "Three generations. One commitment."
2. Mobile nav: duplicate Sheet close X hidden via `[&>button]:hidden` on SheetContent (Header.jsx)
3. Responsive typography: all monumental headings converted to clamp() (SectionHeading, PageHero, Hero, Stats, AboutPreview, ContactPreview, Quality). body overflow-x: clip for 320px decorative elements.
4. Stats: "Thousands / of Satisfied Customers"
5. Institutions disclaimer added below logos (data-testid=institutions-disclaimer)
6. NEW Home section CustomRequirements.jsx (id=custom-enquiry) with enquiry form (id=enquiry-form) — form MOCKED (toast only)
7. All quote CTAs → /contact#enquiry-form with cross-route smooth scroll (hash handling in Layout.jsx). Contact page form now id=enquiry-form.
8. Brand red re-extracted from uploaded S D Ruparel logo: --brand-green: 352 76% 33% (#941425), deep: 352 84% 24% (#710A17)
9. Logo.jsx: typography-only CEECO wordmark (red "C" block removed). index.html title/description branded.
10. All social media icons removed (Footer)
11. WhatsAppButton.jsx: official WhatsApp SVG glyph
12. WhatsApp link → https://wa.me/919449528205 (site.js single source)
13. Manufacturing Excellence image replaced with AI-generated premium HDPE extrusion photo (static.prod-images URL in AboutPreview.jsx)

## Remaining backlog
- P1: Wire Contact / Careers / Custom Enquiry forms to Formspree or Web3Forms (currently MOCKED with toasts)
- P3 (skipped, optional): premium micro-interactions inspired by padmavatijewellers.in

## Update — June 2026 (Polish batch: Formspree wiring + typography + premium UX)
- Formspree: lib/formspree.js submitLead() wired into Contact, Careers, CustomRequirements forms. REACT_APP_FORMSPREE_ID in frontend/.env is EMPTY (user doesn't own info@ceecopipes.com yet) → forms run in graceful MOCKED fallback (simulated success, no network). When user provides the ID, paste into .env and restart frontend — delivery goes live. One shared form with form_type field (contact / careers / custom-enquiry).
- Typography audit: text-wrap: balance on h1-h6, text-wrap: pretty on p (fixes orphans/lone punctuation). AboutPreview spacing normalized.
- Premium UX: BrandMarquee.jsx red scrolling ribbon (Hero→About), btn-sharp shine sweep hover, .reveal-img cinematic clip-path image reveals (AboutPreview, WhyHDPE, Products), product image hover zoom, custom scrollbar, prefers-reduced-motion support.
- BUG FIXED (learning): Chromium IntersectionObserver includes the target's OWN clip-path in intersection calc → element clipped to 0 width never intersects. Solution: apply clip-path to `.reveal-img > *` children, observe unclipped container. (iteration_5.json caught it; fix verified via browser evaluate.)
- Testing: iteration_5.json — all other areas pass (forms mocked-mode, marquee, mobile 375px, typography, CTAs, WhatsApp). reveal-img fix verified post-report.

## Remaining backlog
- P0 (user-blocked): user to create Formspree account + provide Form ID → paste into REACT_APP_FORMSPREE_ID
- P2: per-page SEO meta titles/descriptions
- P2: product brochure PDF downloads

## Update — June 2026 (Custom logo + design makeover batch — iteration_6.json 100% PASS)
1. Custom SVG "Stenciled Monolith" CEECO wordmark (Logo.jsx): pure geometry (paths/rects, no fonts) - chamfered C/O plates, stencil-gap E spines, red E mid-arms. Used in header + footer. New public/favicon.svg (chamfered C + red block) linked in index.html.
2. Design makeover (per /app/design_guidelines.json from design_agent): Anton display font for all headings (font-display -> Anton, forced weight 400, tracking normalized from negative to 0.02em via sitewide sed), glass header (bg-white/90 + backdrop-blur on scroll), Anton red marquee (bigger), Featured Products exposed gap-px dark grid, square WhatsApp button.
3. FIXED punctuation line-break bug: root cause was `break-words` (overflow-wrap:break-word) on headings breaking before trailing periods ('Generations / .One'). Removed break-words sitewide; Anton's condensed width keeps words fitting. Audited 6 routes x 3 viewports = clean.
4. Stats section rebuilt: no-gap grid with border-l/border-t separators (perfectly aligned), fixed-height value boxes align baselines, 'Thousands' sized clamp(2.25rem,4vw,56px) vs numbers clamp(3rem,5.5vw,80px) for optical balance.
5. Product deep links: Home featured cards -> /products#product-{slug} (agricultural, water-supply, industrial, blue-duct); Products rows have id + scroll-mt-28.
6. Enquiry prefill: Request Quote passes state={{product}} -> Contact.jsx useEffect prefills message "I'd like to request a quote for {product}...".
Testing: iteration_6.json — 100% pass, 0 console errors, 0 mobile overflow.

## Remaining backlog
- P0 (user-blocked): Formspree ID -> REACT_APP_FORMSPREE_ID (forms still MOCKED)
- P2: per-page SEO meta, product brochure PDFs

## Update — June 2026 (Pre-launch batch: official logo + Playfair typography — iteration_7.json 12/12 PASS, LIVE-READY)
1. Uploaded official CEECO PIPES serif logo (WhatsApp Image 2026-08-23). Background removed programmatically with PIL (luminance-based alpha, 651x339 crop). Two transparent PNGs in public/: ceeco-logo-dark.png (for white bg), ceeco-logo-light.png (black text recoloured to white, red preserved, for dark bg). New favicon.png. Logo.jsx swaps variant based on nav state (light over hero, dark elsewhere) and used in footer.
2. Heading typography swapped from Anton (blocky/gaming) to Playfair Display (corporate-luxury serif matching the logo). Removed uppercase from major headings (sentence case), tightened tracking to -0.02em, scaled clamp() sizes DOWN (serif reads bigger). Hero H1 uses italic Playfair on the 'Pipes' word. Marquee italic Playfair.
3. Testing: iteration_7.json — 12/12 priority PASS; 0 console errors; 0 broken images; forms working in mocked mode with 0 network calls; punctuation wrap clean at 1920/1440/375; deep links + prefill working; reveal-img working; single mobile close icon; wa.me/919449528205 square WhatsApp button. Non-blocking observations: 768px tablet had 28px metric-only overflow from Ken Burns hero image (fixed with isolate on hero); institutions disclaimer already exists (testing agent search phrase mismatch, verified data-testid present).

Site is LIVE-READY. Only blocker to full lead-capture live: user needs to create Formspree form and paste ID into REACT_APP_FORMSPREE_ID in frontend/.env — currently gracefully falls back to mocked success.
