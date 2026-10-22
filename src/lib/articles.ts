import fs from "node:fs";
import path from "node:path";

export type ArticleMeta = {
  title: string;
  date: string; // YYYY-MM-DD
  summary: string;
  tags?: string[];
  draft?: boolean;
};

const articlesDir = path.join(process.cwd(), "src", "content", "articles");

export function getArticleSlugs(): string[] {
  return fs
    .readdirSync(articlesDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export async function getArticle(slug: string) {
  const mod = await import(`@/content/articles/${slug}.mdx`);
  return { slug, Content: mod.default as React.ComponentType, meta: mod.metadata as ArticleMeta };
}

/** Published (non-draft) articles, newest first. */
export async function getPublishedArticles() {
  const all = await Promise.all(getArticleSlugs().map(getArticle));
  return all
    .filter((a) => !a.meta.draft)
    .sort((a, b) => b.meta.date.localeCompare(a.meta.date))
    .map(({ slug, meta }) => ({ slug, meta }));
}

export function readingTime(slug: string): number {
  const text = fs.readFileSync(path.join(articlesDir, `${slug}.mdx`), "utf8");
  return Math.max(1, Math.round(text.split(/\s+/).length / 220));
}
