import { BarChart3, Cloud, Code2, Dna, Users, Check } from "lucide-react";
import { expertise, type ExpertiseArea } from "@/data/profile";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const icons: Record<ExpertiseArea["icon"], typeof Cloud> = {
  code: Code2,
  cloud: Cloud,
  dna: Dna,
  chart: BarChart3,
  users: Users,
};

export function Expertise() {
  return (
    <Section
      id="expertise"
      eyebrow="Expertise"
      title="Where I add the most value"
      intro="Deep hands-on engineering combined with the leadership to take solutions from idea to enterprise-wide adoption."
      tinted
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {expertise.map((e, i) => {
          const Icon = icons[e.icon];
          return (
            <Reveal key={e.title} delay={(i % 3) * 0.08} className="h-full">
              <article className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg dark:border-white/10 dark:bg-navy-950/60 dark:hover:border-brand-400/30">
                <div className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-800 text-white shadow-md shadow-brand-600/20 transition group-hover:scale-110">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-slate-900 dark:text-white">{e.title}</h3>
                <p className="mt-2 leading-7">{e.description}</p>
                <ul className="mt-4 space-y-2">
                  {e.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand-500" /> {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
