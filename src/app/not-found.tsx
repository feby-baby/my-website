import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-4 text-center">
      <div>
        <p className="font-display text-6xl font-extrabold text-brand-600 dark:text-brand-300">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-slate-900 dark:text-white">This page could not be found</h1>
        <a href="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 font-semibold text-white hover:bg-brand-700">
          <ArrowLeft className="size-4" /> Back to home
        </a>
      </div>
    </main>
  );
}
