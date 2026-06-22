# 📈 Alpha Trading Pros Landing Page

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)

**Conversion-focused landing page for a 1-on-1 trading mentorship program**, built with Next.js 14 and Stripe checkout, exported as a fully static site.

---

## 💫 Overview

A single-page marketing site for an education-first trading mentorship. It presents three one-time mentorship packages (stocks, stocks plus options, stocks plus options plus futures) and a separate monthly software subscription, the Sigma Terminal, for people who want the platform without mentorship. Checkout is handled by Stripe payment links, so there is no backend.

The design follows the project [DESIGN.md](DESIGN.md) and [PRODUCT.md](PRODUCT.md): a dark, precise, emerald-accented system with a custom market visualization instead of stock imagery, and no AI-slop patterns (no gradient text, no decorative glassmorphism, no em dashes).

## ✨ Features

- **Choose-your-package flow** with three mentorship tiers, each wired to its own Stripe payment link
- **Separate Sigma Terminal section** for the standalone monthly subscription
- **Custom hero market visualization** rendered in animated SVG (no stock photos)
- **Design system** captured in DESIGN.md and PRODUCT.md, enforced by the impeccable detector
- **Fully static export** (`output: 'export'`), deployable to any static host or CDN
- **SEO-complete**: Open Graph, Twitter cards, Schema.org JSON-LD, sitemap, robots.txt
- **Accessible**: WCAG AA contrast targets, focus states, and a reduced-motion fallback

## ⚡ Quick Start

```bash
npm install
npm run dev        # development server at http://localhost:3000
npm run build      # production build
npm run export     # static export to out/
```

## 🏗️ Structure

```
pages/index.js                      # main route + SEO head
pages/_document.js                  # font links
pages/_app.js                       # app wrapper + global styles
components/AlphaTradingLanding.js   # all page sections
styles/globals.css                  # design tokens + component styles
public/                             # logo, robots.txt, sitemap.xml
DESIGN.md, PRODUCT.md               # design system + strategy
```

## 🛠️ Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (React 18) |
| Styling | CSS custom properties + Tailwind base reset |
| Fonts | Archivo, Hanken Grotesk, Geist Mono |
| Icons | Lucide React |
| Payments | Stripe payment links |
| Deployment | Static export, host anywhere |

---

## 🌐 Connect

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/umairtareen/) [![TikTok](https://img.shields.io/badge/TikTok-%23000000.svg?logo=TikTok&logoColor=white)](https://www.tiktok.com/@quantify.life) [![X](https://img.shields.io/badge/X-black.svg?logo=X&logoColor=white)](https://x.com/UAT_34) [![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white)](https://github.com/umair-tareen)

*Built by Umair Tareen*
