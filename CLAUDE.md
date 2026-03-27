# CLAUDE.md — SANMYRS Website Project

## General Rules
- Install whatever app or tool is required to finish the job, but always inform the user what was installed before proceeding.

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
- Framework: Astro + Tailwind CSS
- Contact form: Formspree (placeholder URL)
- Hosting: Netlify (planned)

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
- Page headings: font-glancyr (Outfit from Google Fonts)
- Logo: ErasITC Bold — FROZEN, never touch
- Body: default sans

## Product Grid
- CSS grid only: display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:24px; align-items:start
- Never flexbox for product cards
- Never overflow:hidden on grid container
- Responsive: 1 col mobile, 2 col tablet, 4 col desktop

## ProductCard
- Image in data-desc attribute, NOT inside card HTML
- Tooltip appended to document.body using getBoundingClientRect
- Removes on mouseleave and scroll
- Real image if product.image exists, camera placeholder if not

## Subcategory Pills
- Active: bg #0099AF, white text, cursor-default, no hover
- Inactive hover: bg #0099AF, white text, transition 150ms

## Category Card Headers (/products index)
- Fixed height h-60, bg #1A1A2E navy always, flex flex-col justify-between (h-60 fits "Screen Chemicals & Accessories" two-line title)
- Button text: "Browse" only — never "Browse [Category Name]"

## Homepage Category Cards
- 4 cards: Screen Printing, Screen Chemicals & Accessories, Digital Printing, Textile Auxiliaries
- Entire card is an <a> tag (not just a button) — text-decoration:none, full card clickable
- Grid: sm:grid-cols-2 lg:grid-cols-4

## Fonts
- ErasITC: public/fonts/eras-itc-bold.woff2 + eras-itc-bold.ttf — WORKING, DO NOT TOUCH
- Glancyr / Outfit: Google Fonts, loaded in BaseLayout.astro

## Product Images
- public/images/products/plastisol-inks/ — 11 images done
- public/images/products/screen-chemicals/
- public/images/products/digital-printing/
- public/images/products/textile-auxiliaries/
- public/images/products/water-based-inks/
- public/images/products/plastisol-additives/

## Mobile
- Fully optimized for 375px, 768px, 1024px, 1440px
- Pills: horizontally scrollable on mobile
- Product grid: 1/2/4 cols at mobile/tablet/desktop

## SEO
- Site URL in astro.config.mjs: https://www.sanmyrs.com — never change
- Sitemap auto-generated — never manually edit

## Common Mistakes — NEVER DO THESE
- Touch Navbar.astro
- Touch the SANMYRS logo or ErasITC font
- Change button colors
- Use flexbox for product card grids
- Add overflow:hidden to grid containers
- Put description text inside ProductCard HTML
- Change astro.config.mjs site URL

## Pending
- [ ] Formspree real URL
- [ ] Google Maps embed on contact page
- [ ] Product catalog PDF download
- [ ] Certifications content from client
- [ ] About page real content from client
- [ ] More product images (only plastisol inks done)
- [ ] Git push to GitHub (M-yer/sanmyrs-website)
- [ ] Netlify deploy + sanmyrs.com domain connection
