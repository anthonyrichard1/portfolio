import { Footer } from "./components/footer";
import { SizeChecker } from "./components/responsive_tool";
import { AboutSection } from "./sections/about_section";
import { ContactSection } from "./sections/contact_section";
import { HomeSection } from "./sections/home_section";
import { JourneySection } from "./sections/journey_section";
import { ProjectSection } from "./sections/project_section";
import { SkillSection } from "./sections/skill_section";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-between gap-8 px-4 py-4 cursor-default">
      <SizeChecker />
      <HomeSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <JourneySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
