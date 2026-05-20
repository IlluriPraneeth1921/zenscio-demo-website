import { SiteFrame } from "@/components/site-frame";
import { ContactSection, PageIntro } from "@/components/site-sections";

export default function ContactPage() {
  return (
    <SiteFrame currentPath="/contact">
      <PageIntro
        eyebrow="Contact"
        title="Start with the business problem, the current site, and the launch context"
        description="Bring the offer, trust gap, redesign pressure, or launch constraint. The first step is a manual review that determines fit and the most practical next move."
      />
      <ContactSection />
    </SiteFrame>
  );
}
