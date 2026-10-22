import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: the site builds to plain files in /out, so it can be
  // hosted free on Vercel, Netlify, Cloudflare Pages or GitHub Pages.
  output: "export",
  images: { unoptimized: true },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  trailingSlash: true,
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
