import { NavBar } from "@/components/navbar/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/Intro";
import { SkillSection } from "@/components/sections/Skills";
import BackgroundSection from "@/components/sections/Background";
import StickyProjects from "@/components/sections/Projects";
import PortfolioCards from "@/components/sections/Graphics";

export default function Home() {
  return (
    <div className=" min-h-screen items-center justify-center font-sans dark:bg-black">
      <NavBar />
      <HeroSection />
      <IntroSection />
      <SkillSection />
      <BackgroundSection />
      <StickyProjects />
      <PortfolioCards />
    </div>
  );
}
