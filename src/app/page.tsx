import { AboutSection } from "@/components/AboutSection";
import { Concepts } from "@/components/Concepts";
import { Hero } from "@/components/Hero";
import { SelectedWorks } from "@/components/SelectedWorks";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <SelectedWorks />
      <Concepts />

      <AboutSection />
    </main>
  );
}
