# Feby Baby — Personal Website

Built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion and MDX.

## Everyday commands

Run these in a terminal inside this `MyWebsite` folder.

| Command | What it does |
|---|---|
| `npm run dev` | Preview the site at http://localhost:3000 — updates live as you edit |
| `npm run build` | Build the final website into the `out` folder |
| `npm run preview` | Preview the built `out` folder at http://localhost:3000 |

## Editing content

- **All text** (bio, jobs, projects, skills, certifications): `src/data/profile.ts`
- **Photo**: replace `public/feby-baby.jpg` (portrait, about 800 × 1000 px)
- **CV download**: put a CV **without your phone number** in `public/` as
  `Feby_Baby_CV.pdf`, then in `profile.ts` set `cvUrl: "/Feby_Baby_CV.pdf"`
- **Articles**: see `src/content/articles/how-to-write-an-article.mdx`
- **Colours**: the `--color-brand-*` values in `src/app/globals.css`

## Publishing for free (GitHub + Vercel)

1. Create a free account at https://github.com and a new **private** or
   public repository called `my-website`.
2. In this folder run:
   ```
   git init
   git add .
   git commit -m "First version of my website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/my-website.git
   git push -u origin main
   ```
3. Go to https://vercel.com, choose **Sign up with GitHub** (Hobby plan, free).
4. Click **Add New → Project**, pick `my-website`, click **Deploy**.
   No settings need changing.
5. Your site is live at `https://<project-name>.vercel.app`. Every
   `git push` updates it automatically.
6. If the address isn't `febybaby.vercel.app`, add an environment variable
   `NEXT_PUBLIC_SITE_URL` with your real address in Vercel → Settings →
   Environment Variables, then redeploy.

**Optional custom domain** (e.g. `febybaby.com`, ~A$15–25/year): buy it from
any registrar (Cloudflare, Namecheap, VentraIP), then in Vercel →
Settings → Domains add it and follow the DNS instructions.

**Alternatives:** the site is a plain static export, so Netlify or
Cloudflare Pages also work — build command `npm run build`, output folder `out`.
