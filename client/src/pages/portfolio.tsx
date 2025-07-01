import { LoadingScreen } from "@/components/ui/loading-screen";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BackToTop } from "@/components/ui/back-to-top";
import { FloatingSocial } from "@/components/ui/floating-social";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground page-transition">
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      <FloatingSocial />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  );
}
