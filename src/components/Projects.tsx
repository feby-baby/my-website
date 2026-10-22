import { TrendingUp } from "lucide-react";
import { projects } from "@/data/profile";
import { Reveal } from "./Reveal";
import { Section, Tag } from "./Section";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured work"
      title="Projects with measurable impact"
      intro="Selected client work. Each one started with a slow, manual or error-prone process — and ended with something faster, safer and easier to use."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.08} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03]">
              <p className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                <TrendingUp className="size-3.5" /> {p.impact}
              </p>
              <h3 className="mt-4 font-display text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="text-sm font-medium text-brand-700 dark:text-brand-300">{p.client}</p>
              <p className="mt-3 flex-1 leading-7">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
