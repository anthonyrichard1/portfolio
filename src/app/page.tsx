import { Footer } from "./components/footer";
import { AboutSection } from "./sections/about_section";
import { ContactSection } from "./sections/contact_section";
import { HomeSection } from "./sections/home_section";
import { JourneySection } from "./sections/journey_section";
import { ProjectSection } from "./sections/project_section";
import { SkillSection } from "./sections/skill_section";

export default function Home() {
  return (
    <main className="w-screen flex flex-col justify-between gap-4 px-4 py-2 cursor-default">
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
