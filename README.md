# DVLOP Agency Landing Page | Premium Astro Boilerplate

A high-performance, aesthetically curated landing page boilerplate designed for modern agencies. Built with **Astro 5**, **Tailwind CSS**, and **Lucide Icons**, this template focuses on luxury aesthetics, impeccable SEO, and lightning-fast user experiences.

## 🚀 Key Features

- **Native View Transitions**: Seamless, app-like page navigation using Astro's `ClientRouter`.
- **Media Optimization**: Full integration with `astro:assets` for automated `.avif` / `.webp` conversion and Layout Shift (CLS) prevention.
- **Dynamic SEO System**:
  - Auto-generated **XML Sitemaps**.
  - Custom `SEO.astro` component for OpenGraph, Twitter Cards, and Canonical URLs.
  - Pre-configured `robots.txt`.
- **Scroll Reveal Animations**: Global reveal-on-scroll system using Intersection Observers and CSS transforms.
- **Premium Tech Stack**:
  - **Astro**: The fast web framework for content-driven websites.
  - **Tailwind CSS**: Modern styling with custom design tokens.
  - **Lucide & Remix Icons**: Versatile and performant iconography.
- **Multi-Page Ready**: Includes `/about`, `/services`, `/work`, and `/contact` secondary pages.

## 🛠️ Usage

### 1. Installation

```bash
# Clone the repository and install dependencies
npm install
```

### 2. Local Development

```bash
# Starts the development server with Hot Module Replacement (HMR)
npm run dev
```

### 3. Production Build

```bash
# Optimized build for production deployment
npm run build
```

## 📂 Project Structure

- `src/layouts/`: Base layout including global SEO, View Transitions, and Scroll Reveal logic.
- `src/components/`: Reusable UI modules (Header, Footer, Services, Portfolio cards).
- `src/pages/`: Dynamic routing for the main landing and internal pages.
- `src/assets/`: High-resolution source imagery (.avif) managed by Astro Assets.
- `src/styles/`: Global CSS variables and design system tokens.

## ⚙️ Configuration

To customize for your own agency:

1. **Domain**: Update the `site` property in `astro.config.mjs` to your target URL.
2. **Icons**: This project uses dynamic icon sets. Manage them via `astro-icon` and `Lucide` imports.
3. **Images**: Local assets are stored in `src/assets/images`. Update your data arrays in components to use standard ESM imports of these files.

## 📄 License

This boilerplate is provided for use under the standard MIT license. Build something incredible.

---

**Built with ❤️ and Precision by DVLOP Agency.**
