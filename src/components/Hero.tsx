import Image from "next/image";
import { ArrowRight, Download, MapPin, Mail } from "lucide-react";
import { highlights, profile } from "@/data/profile";

const delay = (s: number) => ({ animationDelay: `${s}s` });

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft background glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-200/60 via-sky-100/40 to-transparent blur-3xl dark:from-brand-700/25 dark:via-navy-900/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184/0.18)_1px,transparent_0)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-16 pt-28 sm:px-6 sm:pt-40 lg:grid-cols-[1.7fr_1fr] lg:gap-12 lg:pb-24">
        <div>
          {profile.openToWork && (
            <div className="fade-up inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {profile.openToWorkText}
            </div>
          )}

          <p style={delay(0.05)} className="fade-up mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-300">
            {profile.title} · {profile.focus}
          </p>

          <h1 style={delay(0.1)} className="fade-up mt-3 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            Hi, I&apos;m {profile.name}.
            <span className="mt-2 block bg-gradient-to-r from-brand-600 via-brand-500 to-sky-500 bg-clip-text pb-1 text-transparent dark:from-brand-300 dark:via-brand-400 dark:to-sky-300">
              I build software that matters.
            </span>
          </h1>

          <p style={delay(0.18)} className="fade-up mt-6 max-w-xl text-lg leading-8">
            {profile.tagline} {profile.intro}
          </p>

          <div style={delay(0.24)} className="fade-up mt-6 flex flex-wrap gap-2">
            {profile.roles.map((r) => (
              <span key={r} className="rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700 ring-1 ring-brand-100 dark:bg-brand-400/10 dark:text-brand-200 dark:ring-brand-400/20">
                {r}
              </span>
            ))}
          </div>

          <div style={delay(0.3)} className="fade-up mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:-translate-y-0.5 hover:bg-brand-700">
              <Mail className="size-4" /> Get in touch
            </a>
            <a href="#story" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-700 dark:border-white/15 dark:text-white dark:hover:border-brand-400 dark:hover:text-brand-200">
              Explore my work <ArrowRight className="size-4" />
            </a>
            {profile.cvUrl && (
              <a href={profile.cvUrl} download className="inline-flex items-center gap-2 px-2 py-3 font-semibold text-slate-700 hover:text-brand-700 dark:text-slate-200 dark:hover:text-brand-200">
                <Download className="size-4" /> Download CV
              </a>
            )}
          </div>

          <p style={delay(0.34)} className="fade-up mt-6 inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
            <MapPin className="size-4" /> {profile.location}
          </p>
        </div>

        <div
          style={delay(0.15)}
          className="fade-in-scale relative order-first w-full max-w-[10rem] sm:max-w-[13rem] lg:order-none lg:mx-auto lg:max-w-[17rem]"
        >
          <div aria-hidden className="absolute -inset-2 rounded-[1.75rem] bg-gradient-to-br from-brand-500 via-sky-400 to-brand-800 opacity-25 blur-2xl dark:opacity-35" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/60 shadow-xl shadow-navy-900/20 dark:border-white/10">
            <Image src={profile.photo} alt={`Portrait of ${profile.name}`} width={800} height={1000} priority className="h-auto w-full" />
          </div>
        </div>
      </div>

      {/* Highlight cards */}
      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <div
              key={h.label}
              style={delay(0.4 + i * 0.08)}
              className="fade-up rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
            >
              <p className="font-display text-2xl font-bold text-slate-900 dark:text-white">{h.value}</p>
              <p className="text-sm font-medium text-brand-600 dark:text-brand-300">{h.label}</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{h.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
