import Footer from "../components/ui/Footer";
import SizeChecker from "../components/ui/SizeChecker";
import AboutSection from "./sections/AboutSection";
import HomeSection from "./sections/HomeSection";
import JourneySection from "./sections/JourneySection";
import ProjectSection from "./sections/ProjectSection";
import SkillSection from "./sections/SkillSection";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-between gap-8 px-4 py-4 cursor-default">
      <SizeChecker />
      <HomeSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <JourneySection />
      <Footer />
    </main>
  );
}
