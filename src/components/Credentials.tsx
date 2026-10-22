import { BadgeCheck, GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/profile";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Credentials() {
  return (
    <Section id="credentials" eyebrow="Learning" title="Certifications & education" tinted>
      <div className="grid gap-8 lg:grid-cols-[1fr_22rem]">
        <ul className="grid gap-3 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={(i % 2) * 0.05}>
              <li className="flex h-full gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-navy-950/60">
                <BadgeCheck className="mt-0.5 size-5 shrink-0 text-brand-500" />
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">{c.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {c.issuer} · {c.year}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <div className="rounded-2xl bg-gradient-to-br from-navy-900 to-brand-900 p-6 text-white shadow-xl">
            <GraduationCap className="size-8 text-brand-200" />
            <h3 className="mt-4 font-display text-lg font-semibold">{education.degree}</h3>
            <p className="mt-2 text-brand-100">{education.school}</p>
            <p className="mt-1 text-sm text-brand-200">
              {education.location} · {education.year}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
