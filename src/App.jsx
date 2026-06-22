import Header from "./components/Header";
import Hero from "./components/Hero";
import {
  CtaSection,
  IndustriesSection,
  InsightsSection,
  ProcessSection,
  SolutionsSection,
  StatsSection,
  WhySection,
} from "./components/Sections";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <SolutionsSection />
        <WhySection />
        <ProcessSection />
        <IndustriesSection />
        <InsightsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
