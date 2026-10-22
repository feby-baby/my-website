import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getArticle, getArticleSlugs, readingTime } from "@/lib/articles";
import { profile } from "@/data/profile";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = await getArticle(slug);
  return {
    title: `${meta.title} — ${profile.name}`,
    description: meta.summary,
    robots: meta.draft ? { index: false } : undefined,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const { Content, meta } = await getArticle(slug);
  // Drafts can be previewed with `npm run dev` but are never published.
  if (meta.draft && process.env.NODE_ENV === "production") notFound();

  return (
    <>
      <Navbar links={[{ href: "/#articles", label: "All articles" }, { href: "/#story", label: "About me" }]} />
      <main id="main" className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6">
        <a href="/#articles" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-300">
          <ArrowLeft className="size-4" /> Back
        </a>
        <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
          {new Date(meta.date).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })} · {readingTime(slug)} min read
          {meta.draft && <span className="ml-2 rounded bg-amber-100 px-1.5 py-0.5 text-xs font-semibold text-amber-800">DRAFT</span>}
        </p>
        <article className="prose-article mt-2 text-lg">
          <Content />
        </article>
      </main>
      <Footer />
    </>
  );
}
