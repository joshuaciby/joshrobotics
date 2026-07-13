import { SearchProvider } from "@/components/Search";
import BackgroundFX from "@/components/BackgroundFX";
import Starfield from "@/components/Starfield";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatStrip from "@/components/StatStrip";
import TeardownGallery from "@/components/TeardownGallery";
import Go2Anatomy from "@/components/Go2Anatomy";
import Categories from "@/components/Categories";
import LearnTopics from "@/components/LearnTopics";
import Projects from "@/components/Projects";
import Roadmaps from "@/components/Roadmaps";
import Careers from "@/components/Careers";
import Research from "@/components/Research";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SearchProvider>
      <BackgroundFX />
      <Starfield />
      <Navbar />
      <main>
        <Hero />
        <StatStrip />
        <TeardownGallery />
        <Go2Anatomy />
        <Categories />
        <LearnTopics />
        <Projects />
        <Roadmaps />
        <Careers />
        <Research />
        <Contact />
      </main>
      <Footer />
    </SearchProvider>
  );
}
