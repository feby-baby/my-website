import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { LinkedInIcon } from "./LinkedInIcon";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-navy-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm sm:flex-row sm:px-6">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold text-slate-900 dark:text-white">{profile.name}</p>
          <p className="text-slate-500 dark:text-slate-400">Turning complex problems into dependable software.</p>
        </div>
        <div className="flex items-center gap-3">
          <a href={`mailto:${profile.email}`} aria-label="Email" className="grid size-9 place-items-center rounded-full border border-slate-200 text-slate-600 hover:border-brand-300 hover:text-brand-600 dark:border-white/10 dark:text-slate-300 dark:hover:text-brand-300">
            <Mail className="size-4" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid size-9 place-items-center rounded-full border border-slate-200 text-slate-600 hover:border-brand-300 hover:text-brand-600 dark:border-white/10 dark:text-slate-300 dark:hover:text-brand-300">
            <LinkedInIcon className="size-4" />
          </a>
        </div>
        <p className="text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}
