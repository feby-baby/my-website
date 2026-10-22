import { ArrowUpRight } from "lucide-react";
import type { ArticleMeta } from "@/lib/articles";
import { Reveal } from "./Reveal";
import { Section, Tag } from "./Section";

export function Articles({ articles }: { articles: { slug: string; meta: ArticleMeta; minutes: number }[] }) {
  return (
    <Section id="articles" eyebrow="Writing" title="Articles & insights" intro="Notes on engineering leadership, Python and building software for regulated industries.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((a, i) => (
          <Reveal key={a.slug} delay={(i % 3) * 0.08} className="h-full">
            <a
              href={`/articles/${a.slug}/`}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03]"
            >
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {new Date(a.meta.date).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })} · {a.minutes} min read
              </p>
              <h3 className="mt-2 flex items-start justify-between gap-2 font-display text-lg font-semibold text-slate-900 dark:text-white">
                {a.meta.title}
                <ArrowUpRight className="size-5 shrink-0 text-slate-400 transition group-hover:text-brand-500" />
              </h3>
              <p className="mt-2 flex-1 leading-7">{a.meta.summary}</p>
              {a.meta.tags && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {a.meta.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              )}
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
