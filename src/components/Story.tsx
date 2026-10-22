import { Award } from "lucide-react";
import { story } from "@/data/profile";
import { Reveal } from "./Reveal";
import { Section, Tag } from "./Section";

export function Story() {
  return (
    <Section
      id="story"
      eyebrow="Story"
      title="From enterprise software to life-sciences leadership"
      intro="A career spent close to the work that matters — diagnostics, genomics, manufacturing quality — leading teams that ship dependable software for clients across the USA, Canada, Israel and India."
    >
      <div className="space-y-16">
        {story.map((chapter) => (
          <div key={chapter.heading} className="grid gap-8 lg:grid-cols-[16rem_1fr]">
            <Reveal className="lg:sticky lg:top-24 lg:self-start">
              <p className="font-display text-sm font-semibold text-brand-600 dark:text-brand-300">{chapter.years}</p>
              <h3 className="mt-1 font-display text-xl font-bold text-slate-900 dark:text-white">{chapter.heading}</h3>
            </Reveal>

            <ol className="relative space-y-6 border-l-2 border-slate-200 pl-6 dark:border-white/10">
              {chapter.roles.map((r, i) => (
                <li key={r.period + r.title} className="relative">
                  <span aria-hidden className="absolute -left-[33px] top-6 size-4 rounded-full border-4 border-white bg-brand-500 dark:border-navy-950" />
                  <Reveal delay={i * 0.05}>
                    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand-200 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-400/30">
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {r.period}
                        {r.location && <> · {r.location}</>}
                      </p>
                      <h4 className="mt-1 font-display text-lg font-semibold text-slate-900 dark:text-white">{r.title}</h4>
                      <p className="text-sm font-medium text-brand-700 dark:text-brand-300">
                        {r.org}
                        {r.client && <> · Client: {r.client}</>}
                      </p>
                      <p className="mt-3 leading-7">{r.summary}</p>
                      {r.award && (
                        <p className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-amber-50 px-2.5 py-1 text-sm font-medium text-amber-800 dark:bg-amber-400/10 dark:text-amber-200">
                          <Award className="size-4" /> {r.award}
                        </p>
                      )}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {r.tech.map((t) => (
                          <Tag key={t}>{t}</Tag>
                        ))}
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </Section>
  );
}
