import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="font-sans selection:bg-accent/30 selection:text-white w-full overflow-x-hidden">
      <Header />
      <main className="space-y-16 sm:space-y-24 lg:space-y-32 w-full overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />

        {/* Footer */}
        <footer
          className="mx-auto max-w-6xl px-4 sm:px-6 pb-12 sm:pb-20 pt-8 border-t border-white/5 w-full"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-foreground/40">
              © {new Date().getFullYear()}{" "}
              <span className="text-foreground/60">Md. Asif Iqbal</span>. All
              rights reserved.
            </p>
            <p className="text-[11px] sm:text-xs text-foreground/30">
              Built with{" "}
              <span className="text-accent">Next.js</span>,{" "}
              <span className="text-emerald-400">Tailwind</span> &{" "}
              <span className="text-violet-400">Framer Motion</span>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
