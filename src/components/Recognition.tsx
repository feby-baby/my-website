import { Trophy } from "lucide-react";
import { recognition } from "@/data/profile";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Recognition() {
  return (
    <Section id="recognition" eyebrow="Recognition" title="Awards & acknowledgements" tinted>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {recognition.map((r, i) => (
          <Reveal key={r.title + r.by} delay={(i % 3) * 0.06}>
            <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-navy-950/60">
              <div className="grid size-10 shrink-0 place-items-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300">
                <Trophy className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">{r.title}</h3>
                <p className="text-sm font-medium text-brand-700 dark:text-brand-300">{r.by}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{r.note}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
