import { SiteFrame } from "@/components/site-frame";
import {
  AboutSection,
  ContactSection,
  FinalCtaSection,
  PageIntro,
  ProcessSection,
  ProofSection,
} from "@/components/site-sections";

export default function AboutPage() {
  return (
    <SiteFrame currentPath="/about">
      <PageIntro
        eyebrow="About"
        title="A lean web studio with direct technical delivery and premium design standards"
        description="Zenscio Web Studio is positioned around practical launch work: sharper positioning, stronger trust signals, clean Next.js builds, and a delivery model that stays close to the actual product."
      />
      <AboutSection />
      <ProcessSection />
      <ProofSection />
      <FinalCtaSection />
      <ContactSection />
    </SiteFrame>
  );
}
