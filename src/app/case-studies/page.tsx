import { SiteFrame } from "@/components/site-frame";
import {
  CaseStudiesSection,
  ContactSection,
  FinalCtaSection,
  PageIntro,
  ProofSection,
} from "@/components/site-sections";

export default function CaseStudiesPage() {
  return (
    <SiteFrame currentPath="/case-studies">
      <PageIntro
        eyebrow="Case Studies"
        title="Representative upgrade patterns that show how trust and conversion improve"
        description="These case-study style examples explain the before-and-after thinking behind premium website work, even when a project is framed privately rather than as a public portfolio."
      />
      <CaseStudiesSection />
      <ProofSection />
      <FinalCtaSection />
      <ContactSection />
    </SiteFrame>
  );
}
