import { Navbar, type NavLink } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Story } from "@/components/Story";
import { Expertise } from "@/components/Expertise";
import { Projects } from "@/components/Projects";
import { Recognition } from "@/components/Recognition";
import { Skills } from "@/components/Skills";
import { Credentials } from "@/components/Credentials";
import { Articles } from "@/components/Articles";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { getPublishedArticles, readingTime } from "@/lib/articles";

export default async function Home() {
  const articles = (await getPublishedArticles()).map((a) => ({ ...a, minutes: readingTime(a.slug) }));

  const links: NavLink[] = [
    { href: "/#story", label: "Story" },
    { href: "/#expertise", label: "Expertise" },
    { href: "/#projects", label: "Projects" },
    { href: "/#recognition", label: "Recognition" },
    { href: "/#skills", label: "Skills" },
    { href: "/#credentials", label: "Certifications" },
    ...(articles.length ? [{ href: "/#articles", label: "Articles" }] : []),
  ];

  return (
    <>
      <Navbar links={links} />
      <main id="main">
        <Hero />
        <Stats />
        <Story />
        <Expertise />
        <Projects />
        <Recognition />
        <Skills />
        <Credentials />
        {articles.length > 0 && <Articles articles={articles} />}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
