# 📈 Alpha Trading Pros — Landing Page

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)

**Conversion-focused landing page for a trading signals & education subscription service** — built with Next.js 14, Tailwind CSS, and Stripe checkout, exported as a fully static site.

---

## 💫 Overview

A single-page marketing site for a futures/options trading community offering live signals, monthly webinars, educational content on the ORB (Opening Range Breakout) strategy, and weekly market newsletters. Subscription checkout is handled by Stripe — no backend required.

## ✨ Features

- **Hero + CTA flow** wired directly to Stripe checkout
- **ORB strategy visualization** — pre-market high/low zones rendered in-page
- **Subscription benefits grid** with Lucide icons
- **Fully static export** (`output: 'export'`) — deployable to any static host or CDN
- **SEO-complete** — Open Graph, Twitter cards, Schema.org JSON-LD structured data, sitemap, robots.txt
- **Responsive** mobile-first layout with Tailwind utility classes

## ⚡ Quick Start

```bash
npm install
npm run dev        # development server -> http://localhost:3000
npm run build      # production build
npm run export     # static export -> out/
```

## 🏗️ Structure

```
pages/index.js                      # main route
components/AlphaTradingLanding.js   # all page sections
pages/_app.js                       # app wrapper + global styles
public/                             # logo, robots.txt, sitemap.xml
```

## 🛠️ Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (React 18) |
| Styling | Tailwind CSS 3 + PostCSS/Autoprefixer |
| Icons | Lucide React |
| Payments | Stripe Checkout (hosted) |
| Deployment | Static export — host anywhere |

---

## 🌐 Connect

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/umairtareen/) [![TikTok](https://img.shields.io/badge/TikTok-%23000000.svg?logo=TikTok&logoColor=white)](https://www.tiktok.com/@quantify.life) [![X](https://img.shields.io/badge/X-black.svg?logo=X&logoColor=white)](https://x.com/UAT_34) [![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white)](https://github.com/umair-tareen)

*Built by Umair Tareen*
