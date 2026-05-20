import { SiteFrame } from "@/components/site-frame";
import {
  AboutSection,
  CaseStudiesSection,
  ContactSection,
  DemoWebsiteSection,
  FinalCtaSection,
  HomeHero,
  PricingSection,
  ProcessSection,
  ProofSection,
  ServicesSection,
} from "@/components/site-sections";

export default function Home() {
  return (
    <SiteFrame currentPath="/">
      <HomeHero />
      <DemoWebsiteSection />
      <ServicesSection />
      <CaseStudiesSection />
      <PricingSection />
      <ProofSection />
      <AboutSection />
      <ProcessSection />
      <FinalCtaSection />
      <ContactSection />
    </SiteFrame>
  );
}
