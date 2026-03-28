# CLAUDE.md — SANMYRS Website Project

## General Rules
- Install whatever app or tool is required to finish the job, but always inform the user what was installed before proceeding.
- Push to GitHub after every major change. Use git + gh CLI at `"E:/Mayer 2025/Mayer Programs/gh.exe"`.
- Product cards and color grid boxes must always be fully clickable (entire element is an `<a>` tag linking to the product slug page) — never just a "View Details" link inside a non-clickable container.
- No UI changes unless explicitly requested.

---

## ⛔ ABSOLUTE FREEZE — READ THIS FIRST

### NEVER TOUCH THESE — NO EXCEPTIONS EVER:
1. **Navbar.astro** — Completely frozen. Never open, read, edit or modify it for any reason. Do not touch ANY navbar code.
2. **SANMYRS logo font** — The ErasITC font on the logo is working correctly. Never touch it.
3. **Button colors** — Browse Products / Get Quote = #0099AF teal. Request a Sample = transparent white outline. Never change.

If ANY task seems to require touching Navbar.astro, navbar code, or the logo font — SKIP IT. Do not ask. Just skip it.

---

## Project Overview
- Company: SANMYRS (Source International Company)
- Business: B2B printing chemicals and textile auxiliaries supplier
- Location: F-126, Lucknow Society, Korangi, Karachi, Pakistan
- WhatsApp: +92 318 3755197
- Website: https://www.sanmyrs.com

## Tech Stack
- Framework: Astro + Tailwind CSS + `@astrojs/sitemap` (auto-generates sitemap at build)
- Contact form: Formspree — **LIVE URL: `https://formspree.io/f/xzdkbblv`** (already set in contact.astro)
- Hosting: Netlify (planned)
- Git repo: https://github.com/M-yer/sanmyrs-website (branch: main)
- gh CLI: `E:/Mayer 2025/Mayer Programs/gh.exe`

## Brand Colors
- Primary: #0099AF
- Navbar bg: #1A1A2E (always — never change)
- Hero / footer / CTA bg: #7A2A37 (burgundy)
- Category card headers on /products: #1A1A2E navy
- Page background: #F5F7F6
- Body text: #4A4A4A
- Hero accent line: #F5A623 (gold)

## Color Rules
- Navbar: #1A1A2E always
- Category card headers (/products index): #1A1A2E always
- Hero sections, footer, CTA banners: #7A2A37 burgundy
- Hero checkerboard pattern: always present on all hero sections

## Typography
- Page headings: font-glancyr (Outfit from Google Fonts — weights 700, 800 only)
- Body: Inter (weights 400, 600, 700 only)
- Logo: ErasITC Bold — FROZEN, never touch
- Fonts loaded in both BaseLayout.astro and ProductLayout.astro

## Layouts
- `BaseLayout.astro` — used by homepage, about, contact, industries, certifications, products index
- `ProductLayout.astro` — used by all product category and product detail pages. Includes:
  - ErasITC font preload + fonts.css (required for logo to render)
  - Auto-generated canonical, OG, Twitter meta via SEOHead
  - BreadcrumbList JSON-LD schema auto-generated from `breadcrumbs` prop

## Product Category Page Pattern (Two-Level Pills + Color Grid)
Used on: `digital-printing/index.astro`, `textile-auxiliaries/index.astro`

**Level 1 pills** — main subcategory (e.g. "Textile Digital Printing", "Graphic & Advertisement")
**Level 2 pills** — individual products within that subcategory (e.g. "Dye Sublimation Ink", "Reactive Digital Ink")
**Content area** — when a Level 2 pill is clicked, shows a color image grid of all variants for that product

Color grid: 1 col mobile → 2 cols (640px) → 4 cols (1024px)
Each box: white card, image + label, fully clickable `<a>` linking to `product slug?variant=LABEL`, hover lift effect.

Screen printing uses single-level pills + ProductCard grid (4-col desktop).

**IMPORTANT — `prod-item` wrapper**: Must always use `display:block` (not `display:contents`). Using `display:contents` breaks CSS grid toggling. In JS `activateSubPill`, set `target.style.display = 'block'` (not `'contents'`).

## Digital Printing Detail Page (`[slug].astro`)
- Full-width carousel with prev/next arrows, thumbnail strip, and **CSS magnifier lens on hover**
- Carousel reads `product.images[]` from `data-variants` JSON attribute
- URL `?variant=LABEL` param pre-selects the correct color when arriving from the index color grid
- Lens: circular, 150×150px, 2.5× zoom, appears on `mouseenter` the zoom-container, tracks mouse
- Image height: 380px max in carousel main view

## ProductCard Component
- Outer element is `<a>` tag — entire card is clickable, links to `/products/${category}/${slug}`
- Hover: description slides down, card lifts with shadow
- Real image if `product.image` exists, camera placeholder SVG if not

## Product Grid (screen-printing, screen-chemicals-accessories)
- CSS grid only: `display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:24px; align-items:start`
- Never flexbox for product card grids
- Never overflow:hidden on grid container
- Responsive: 1 col mobile, 2 col tablet, 4 col desktop

## Subcategory Pills
- Active: bg #0099AF, white text, cursor-default
- Inactive hover: bg #0099AF, white text, transition 150ms

## Category Card Headers (/products index)
- Fixed height h-60, bg #1A1A2E navy always
- Button text: "Browse" only — never "Browse [Category Name]"

## Homepage Category Cards
- 4 cards: Screen Printing, Screen Chemicals & Accessories, Digital Printing, Textile Auxiliaries
- Entire card is an `<a>` tag — text-decoration:none, full card clickable
- Grid: sm:grid-cols-2 lg:grid-cols-4

## Fonts
- ErasITC: public/fonts/eras-itc-bold.woff2 + eras-itc-bold.ttf — WORKING, DO NOT TOUCH
- Glancyr / Outfit + Inter: Google Fonts, loaded in both layouts

## products.js Data Structure
Each product can have:
- `name`, `slug`, `description`, `uses[]`, `metaTitle`, `metaDescription`
- `image` — single path for product card + detail page header
- `images[]` — array of `{ src, label }` objects for the color grid gallery (digital printing products have this)

## Product Images — Current State
Source images: `E:/Mayer 2025/Mayer Factory/SANMYRS Website/Product images/`
Public path: `public/images/products/`

| Category | Status |
|----------|--------|
| screen-printing (plastisol inks) | ✅ Done — 11 images in `plastisol-inks/` |
| screen-printing (WB inks, WB additives, plastisol additives) | ✅ Done — images in `screen-printing/` subfolders |
| digital-printing | ✅ Done — 60 images across 8 products, all kebab-case |
| screen-chemicals-accessories | ❌ No images yet |
| textile-auxiliaries | ❌ No images yet |

Digital printing image folders: `dye-sublimation-ink/`, `reactive-digital-ink/`, `pigment-textile-ink/`, `disperse-dtf-ink/`, `eco-solvent-ink/`, `latex-ink/`, `eco-printer-ink/`, `uv-ink/`
All filenames: lowercase kebab-case (e.g. `ecosol-cyan.png`, `dtf-black.png`)

## SEO — Completed
- `@astrojs/sitemap` installed — sitemap auto-generates at build
- Homepage title: 54 chars | Products index: 42 chars
- Homepage schema: LocalBusiness (with address + phone)
- All product detail pages: Product schema with `offers` block (enables rich results)
- ProductLayout: BreadcrumbList JSON-LD auto-generated from breadcrumbs prop
- Google Fonts trimmed to 5 weights (was 10) for faster LCP
- canonical, OG, Twitter meta on every page via SEOHead.astro
- robots.txt: allows all, references sitemap

## SEO — Still Needed
- [ ] og-image.png (1200×630) — referenced in SEOHead but file doesn't exist yet (og:image currently broken)
- [ ] favicon.ico — missing, add `<link rel="icon" href="/favicon.ico" />` to both layouts
- [ ] Fix og:image in SEOHead.astro to absolute URL (currently relative `/og-image.png` — invalid for OG)
- [ ] Add `twitter:image` meta tag to SEOHead.astro
- [ ] Add `og:site_name` to SEOHead.astro
- [ ] Google Search Console verification meta tag → add to SEOHead.astro
- [ ] Google Analytics (GA4) tag → add to both layouts
- [ ] Fix short title tags: Digital Printing index (31 chars), Textile Auxiliaries index (29 chars)
- [ ] Upgrade LocalBusiness schema: add `image`, `openingHours`, `sameAs` fields; remove `priceRange`

## Critical Bug — screen-chemicals-accessories
**`src/pages/products/screen-chemicals-accessories/` directory is COMPLETELY EMPTY.**
All internal links from the homepage and /products index to this category currently return 404.
This is the highest-priority pending task: build `index.astro` and `[slug].astro` for this category.
The pattern to follow is identical to `screen-printing/index.astro` (single-level pills + ProductCard grid).

## Mobile
- Fully optimized for 375px, 768px, 1024px, 1440px
- Pills: horizontally scrollable on mobile (scrollbar hidden)
- Product grid: 1/2/4 cols at mobile/tablet/desktop
- Color grid: 1/2/4 cols (digital printing index)

## Common Mistakes — NEVER DO THESE
- Touch Navbar.astro
- Touch the SANMYRS logo or ErasITC font
- Change button colors
- Use flexbox for product card grids
- Add overflow:hidden to grid containers
- Change astro.config.mjs site URL (https://www.sanmyrs.com)
- Make product boxes non-clickable (must always be full `<a>` tags)
- Use `display:contents` on `prod-item` wrappers — always `display:block`

## Pending
- [ ] **CRITICAL**: Build screen-chemicals-accessories pages (index.astro + [slug].astro) — currently 404
- [ ] **CRITICAL**: Create public/og-image.png (1200×630 branded)
- [ ] **CRITICAL**: Add favicon.ico
- [ ] Fix og:image to absolute URL in SEOHead.astro + add twitter:image + og:site_name
- [ ] Google Maps embed on contact page
- [ ] Product catalog PDF download
- [ ] Certifications content from client
- [ ] About page real content from client
- [ ] Screen chemicals & accessories product images
- [ ] Textile auxiliaries product images + color grid (same pattern as digital printing)
- [ ] Google Search Console + Analytics setup
- [ ] Netlify deploy + sanmyrs.com domain connection
