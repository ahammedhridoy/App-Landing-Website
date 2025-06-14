import Hero from "../components/Hero";
import FeatureGrid from "../components/FeatureGrid";
import ServicesGrid from "../components/ServicesGrid";
import Stats from "../components/Stats";
import PricingTable from "../components/PricingTable";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <ServicesGrid />
      <Stats />
      <PricingTable />
      <Testimonials />
      <Faq />
    </>
  );
}
