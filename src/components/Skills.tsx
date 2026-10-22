import { skills } from "@/data/profile";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technical toolkit">
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={(i % 2) * 0.06}>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">{s.group}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-brand-400/40 dark:hover:bg-brand-400/10 dark:hover:text-brand-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
