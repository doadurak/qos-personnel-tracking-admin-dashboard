import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import DigitalTwinVisualization from "../../components/DigitalTwinVisualization/DigitalTwinVisualization";
import MobileAppSection from "../../components/MobileAppSection/MobileAppSection";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />
      <Features />
      <DigitalTwinVisualization />
      <MobileAppSection />

      <Footer />
    </>
  );
}
