# Temple Town Stay — Website

A premium, light-mode-only, one-page hotel/resort website for **Temple Town Stay**, a family-friendly boutique stay in Kanchipuram, Tamil Nadu, India.

Built with Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion, and Lucide React icons.

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** DM Sans (Google Fonts)

## Local Setup

### Prerequisites

- Node.js 18+ (20+ recommended)
- npm

### Install and Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
```

The static site will be generated in the `out/` directory.

### Preview Production Build

```bash
npm run start
```

## Deployment to Cloudflare Pages

### Option 1: Cloudflare Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Go to **Workers & Pages** → **Create** → **Pages**
4. Connect your Git repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node.js version:** `20`
6. Click **Save and Deploy**

### Option 2: Wrangler CLI

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy out --project-name=temple-town-stay
```

### Custom Domain

After deployment, add your custom domain in the Cloudflare Pages project settings under **Custom domains**.

## Before Publishing Checklist

- [ ] Add approved owner/CEO details and photo in `src/data/siteContent.ts`
- [ ] Replace `[WHATSAPP_NUMBER]` with the official WhatsApp number in international format (e.g., `919XXXXXXXXX`)
- [ ] Add all supplied property images in the correct folders:
  - `public/images/hero/`
  - `public/images/rooms/`
  - `public/images/about/`
  - `public/images/owner/`
  - `public/images/gallery/`
- [ ] Verify price and GST details with the owner
- [ ] Test Call, Email, WhatsApp, Gallery, and Directions actions on a real mobile phone
- [ ] Verify all content and policies before publishing
- [ ] Review gallery image alt text against actual image content
- [ ] Update `metadataBase` URL in `src/app/layout.tsx` to match your production domain
- [ ] Update `sitemap.xml` and `robots.txt` with your production domain

## Project Structure

```
src/
  components/        # React components
  data/              # Editable content (siteContent.ts, gallery.ts)
  types/             # TypeScript type definitions
  services/          # Placeholder service interfaces (backend-ready)
  lib/               # Utility functions (whatsapp.ts, formatters.ts)
  app/               # Next.js App Router pages
public/
  images/            # Static image assets
  favicon.svg        # Custom SVG favicon
  robots.txt         # Search engine directives
  sitemap.xml        # XML sitemap
```

## Content Editing

All editable content lives in `src/data/siteContent.ts`. Key values:

- Business name, location, contact details
- Hero section text
- Room types and pricing
- About section copy
- FAQ entries
- Owner/leadership details (placeholder — replace with verified data)
- SEO metadata

## Backend-Ready Architecture

The codebase includes placeholder interfaces for future integration:

- `src/services/bookingService.ts` — booking inquiry, availability check, room rates
- `src/types/booking.ts` — BookingInquiry, ContactInfo types
- `src/types/room.ts` — RoomType, FloorLayout types

`TODO: FUTURE BACKEND` comments mark where static functions can be replaced with API calls.

## License

All rights reserved. Temple Town Stay © 2026.
