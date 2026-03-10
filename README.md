# ProFlowLabsAI Web

Minimal one-page landing built with Next.js App Router + Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Keep defaults:
   - Framework preset: **Next.js**
   - Build command: `npm run build`
   - Output: `.next`
4. Click **Deploy**.
5. (Optional) Add a custom domain later in Vercel project settings.

## Structure

- `app/page.tsx` → homepage sections (Hero / What we do / How it works / CTA)
- `app/layout.tsx` → metadata + global layout
- `app/globals.css` → Tailwind import + base styles
