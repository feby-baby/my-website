import { Download, FileText, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { LinkedInIcon } from "./LinkedInIcon";
import { Reveal } from "./Reveal";

export function Contact() {
  const cvHref = profile.cvUrl ?? `mailto:${profile.email}?subject=${encodeURIComponent("CV request")}`;

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-brand-900 text-white">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 size-[30rem] rounded-full bg-brand-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-200">Contact</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">Let&apos;s build something reliable together.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            I&apos;m open to Principal, Lead and senior engineering roles in {profile.location} and remote. If you&apos;re hiring or
            would like to talk about a project, I&apos;d love to hear from you.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 grid gap-4 sm:grid-cols-3">
          <a href={`mailto:${profile.email}`} className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/10">
            <Mail className="size-6 text-brand-200" />
            <p className="mt-3 font-semibold">Email</p>
            <p className="break-all text-sm text-slate-300 group-hover:text-white">{profile.email}</p>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/10">
            <LinkedInIcon className="size-6 text-brand-200" />
            <p className="mt-3 font-semibold">LinkedIn</p>
            <p className="text-sm text-slate-300 group-hover:text-white">linkedin.com/in/feby-baby</p>
          </a>
          <a href={cvHref} {...(profile.cvUrl ? { download: true } : {})} className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/10">
            {profile.cvUrl ? <Download className="size-6 text-brand-200" /> : <FileText className="size-6 text-brand-200" />}
            <p className="mt-3 font-semibold">{profile.cvUrl ? "Download CV" : "Request my CV"}</p>
            <p className="text-sm text-slate-300 group-hover:text-white">{profile.cvUrl ? "PDF" : "I'll send it by email"}</p>
          </a>
        </Reveal>

        <p className="mt-8 inline-flex items-center gap-1.5 text-sm text-slate-400">
          <MapPin className="size-4" /> Based in {profile.location}
        </p>
      </div>
    </section>
  );
}
