# JoshRobotics 🤖

A premium, dark-themed robotics education hub — interactive **robot teardowns** (Unitree Go2, Boston Dynamics Spot, Tesla Optimus, Figure 02), learning topics, projects, roadmaps, careers, research explainers, and a **⌘K search**.

Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion**. 100% free stack, deploys to Vercel free.

---

## ✨ Features

- Big **JoshRobotics** hero with animated starfield + gradient grid
- **Search-first** experience — press `⌘K` / `Ctrl+K` anywhere, or click any search bar
- **Robot Teardowns** — 4 robots with specs + a full 15-part Go2 anatomy walkthrough
- **Robot classes** — Quadrupeds, Humanoids, AMRs, AGVs, Drones (with examples)
- **Learn** (29 topics), **Projects** (9 builds), **Roadmaps** (8 paths), **Careers**, **Research**
- Contact section wired to real details
- SEO: metadata, Open Graph, `sitemap.xml`, `robots.txt`
- Fully responsive, reduced-motion friendly, zero external UI dependencies beyond Framer Motion

---

## 🚀 1. Run locally

You need **Node.js 18.18+** (or 20+). Check with `node -v`.

```bash
# install dependencies
npm install

# start the dev server
npm run dev
```

Open **http://localhost:3000**. Edits hot-reload instantly.

To test a production build locally:

```bash
npm run build
npm run start
```

---

## ☁️ 2. Deploy free on Vercel

### Option A — via GitHub (recommended)

1. Create a new repo on GitHub (e.g. `joshrobotics`).
2. Push this folder:
   ```bash
   git init
   git add .
   git commit -m "JoshRobotics initial"
   git branch -M main
   git remote add origin https://github.com/<you>/joshrobotics.git
   git push -u origin main
   ```
3. Go to **vercel.com → Add New → Project**, import the repo.
4. Framework preset auto-detects **Next.js**. Leave everything default → **Deploy**.
5. You get a live URL like `joshrobotics.vercel.app` in ~1 minute.

### Option B — via Vercel CLI

```bash
npm i -g vercel
vercel        # follow the prompts
vercel --prod # promote to production
```

---

## 🌐 3. Connect a free domain / subdomain

- **Vercel subdomain (free):** in your project → **Settings → Domains**, you already get `*.vercel.app`. You can rename it there.
- **Custom domain:** buy one (~$10/yr at Porkbun / Cloudflare / Namecheap), then in **Settings → Domains** add it and follow the DNS instructions Vercel shows.
- **Free dev subdomain:** services like `js.org` or `is-a.dev` grant free subdomains for open-source projects (submit a PR to their repo).

> Tip: after deploying, update `SITE_URL` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` to your real domain so SEO + Open Graph use the correct address.

---

## 🔍 4. Make it findable on Google

1. Deploy first (you need a live URL).
2. Go to **Google Search Console** → add your domain → verify.
3. Submit `https://yourdomain.com/sitemap.xml`.
4. A **unique** brand name (e.g. *JoshRoboticsLab*) ranks far faster than a generic term. Weave your chosen name into `app/layout.tsx` metadata and the hero.

---

## ✏️ 5. Update content later

**All content lives in one file: [`lib/data.ts`](./lib/data.ts).** No component edits needed.

| Want to change… | Edit this in `lib/data.ts` |
|---|---|
| Teardown robots + specs | `ROBOTS`, `TEARDOWN_DETAIL` |
| Go2 anatomy parts | `GO2_PARTS` |
| Robot classes | `CATEGORIES` |
| Learn topics | `TOPICS` |
| Projects | `PROJECTS` |
| Roadmaps | `ROADMAPS` |
| Careers | `CAREERS` |
| Research papers | `PAPERS` |
| Homepage stats | `STATS` |
| Your contact info | `CONTACT` |

The **search index rebuilds automatically** from this data — add a project and it becomes searchable with no extra work.

### Add a new teardown robot

1. Add an entry to `ROBOTS` (give it a unique `id` and a `kind`).
2. Add matching detail rows to `TEARDOWN_DETAIL[id]`.
3. If it needs a new illustration, add a `kind` branch in `components/RobotSVG.tsx`.

### Add a new learning topic / project / roadmap

Just push a new item into the relevant array in `lib/data.ts`. Done.

---

## 🖼️ Using real photos instead of illustrations

The robots are drawn as SVG so the site always renders and stays consistent. To use real photos:

1. Put images in `public/` (e.g. `public/go2.jpg`).
2. In `components/TeardownGallery.tsx`, replace `<RobotSVG .../>` inside `.canvas` with:
   ```tsx
   <img src={`/${r.id}.jpg`} alt={r.name} style={{ maxHeight: "100%", objectFit: "contain" }} />
   ```
3. Same idea in `components/Categories.tsx` if you want photos there.

Use images you have the rights to (official press kits, Wikimedia Commons, or your own).

---

## 🗂️ Project structure

```
joshrobotics/
├── app/
│   ├── layout.tsx        # root layout, fonts, SEO metadata
│   ├── page.tsx          # home page (composes all sections)
│   ├── globals.css       # theme tokens + all component styles
│   ├── sitemap.ts        # SEO sitemap
│   └── robots.ts         # SEO robots.txt
├── components/           # one file per UI piece (all reusable)
│   ├── Navbar.tsx  Hero.tsx  Search.tsx  Starfield.tsx  BackgroundFX.tsx
│   ├── Reveal.tsx  Counter.tsx  RobotSVG.tsx  StatStrip.tsx
│   ├── TeardownGallery.tsx  Go2Anatomy.tsx  Categories.tsx
│   ├── LearnTopics.tsx  Projects.tsx  Roadmaps.tsx  Careers.tsx
│   ├── Research.tsx  Contact.tsx  Footer.tsx
├── lib/
│   └── data.ts           # ⭐ ALL CONTENT LIVES HERE
├── public/               # put images here
├── package.json  tsconfig.json  tailwind.config.ts  next.config.mjs
└── README.md
```

---

## 🎨 Theming

Colors, fonts and spacing tokens are CSS variables at the top of `app/globals.css` (`:root`). Change `--acc` / `--acc-2` to reskin the whole accent gradient in one place.

---

## 🧰 Tech

Next.js 14 · React 18 · TypeScript 5 · Tailwind 3.4 · Framer Motion 11.

---

## 📬 Contact

**Joshua Ciby** — [joshuaciby@gmail.com](mailto:joshuaciby@gmail.com) · +91 79728 02440 · LinkedIn: Joshua Ciby

> Not affiliated with Unitree, Boston Dynamics, Tesla, Figure or Addverb. Specs are compiled from public sources for education.
