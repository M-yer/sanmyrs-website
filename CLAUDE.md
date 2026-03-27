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
- Contact form: Formspree (placeholder URL — not yet live)
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

Color grid: 2 cols mobile → 3 cols (480px) → 4 cols (640px) → 6 cols (1024px)
Each box: white card, image + label, fully clickable `<a>` linking to product slug page, hover lift effect.

Screen printing uses single-level pills + ProductCard grid (4-col desktop).

## ProductCard Component
- Outer element is `<a>` tag — entire card is clickable, links to `/products/${category}/${slug}`
- Hover: description slides down, card lifts with shadow
- Real image if `product.image` exists, camera placeholder SVG if not
- `data-desc` attribute holds description for tooltip (tooltip appended to document.body)

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
- [ ] og-image.png (1200×630) — referenced in SEOHead but file doesn't exist yet
- [ ] favicon.ico
- [ ] Google Search Console verification meta tag → add to SEOHead.astro
- [ ] Google Analytics (GA4) tag

## Mobile
- Fully optimized for 375px, 768px, 1024px, 1440px
- Pills: horizontally scrollable on mobile (scrollbar hidden)
- Product grid: 1/2/4 cols at mobile/tablet/desktop
- Color grid: 2/3/4/6 cols

## Common Mistakes — NEVER DO THESE
- Touch Navbar.astro
- Touch the SANMYRS logo or ErasITC font
- Change button colors
- Use flexbox for product card grids
- Add overflow:hidden to grid containers
- Change astro.config.mjs site URL (https://www.sanmyrs.com)
- Make product boxes non-clickable (must always be full `<a>` tags)

## Pending
- [ ] Formspree real URL (contact form)
- [ ] Google Maps embed on contact page
- [ ] Product catalog PDF download
- [ ] Certifications content from client
- [ ] About page real content from client
- [ ] Screen chemicals & accessories product images
- [ ] Textile auxiliaries product images + color grid (same pattern as digital printing)
- [ ] og-image.png + favicon.ico
- [ ] Google Search Console + Analytics setup
- [ ] Netlify deploy + sanmyrs.com domain connection
