# Photography Portfolio Website

A responsive, editorial-style portfolio starter built with Next.js App Router, TypeScript, Tailwind CSS v4 and Lucide React.

## 1. Requirements
- Node.js 20.9 or newer
- npm
- VS Code (recommended)

## 2. Run locally

Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## 3. Add your details

Edit `src/config/site.ts`:
- `photographerName`
- `location`
- `email`
- `whatsappNumber` (digits only, include country code; India example: 919876543210)
- `instagramUsername`
- `siteUrl`

## 4. Add your own photos

Edit `src/data/projects.ts`. Replace the sample Unsplash URLs with your own images and update titles, descriptions, category, gallery, year and location. Only list client names when you have permission.

The current sample photos are placeholders for testing the layout. Replace them before launch.

## 5. Main routes
- `/` — home
- `/portfolio` — filterable portfolio
- `/portfolio/after-hours` — example project detail
- `/about` — about page
- `/services` — services
- `/contact` — WhatsApp, Instagram and email

## 6. Before publishing
1. Update your details and all placeholder text.
2. Replace all sample photography with images you own or have permission to use.
3. Set `siteUrl` to the real production URL.
4. Test links on desktop and mobile.
5. Run `npm run build`.
6. Push the project to GitHub and import it into Vercel.

## Notes
- This starter intentionally has no database, authentication, payment, booking calendar, slot availability, or admin dashboard.
- Contact enquiries go directly to WhatsApp, Instagram, or email; the website does not store enquiries.
- Images are loaded from Unsplash for demo purposes. For production, prefer optimized copies of your own images in `public/images/` and update the project data accordingly.
