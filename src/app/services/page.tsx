import { SiteFrame } from "@/components/site-frame";
import {
  ContactSection,
  FinalCtaSection,
  PageIntro,
  PricingSection,
  ServicesSection,
} from "@/components/site-sections";

export default function ServicesPage() {
  return (
    <SiteFrame currentPath="/services">
      <PageIntro
        eyebrow="Services"
        title="Launch, redesign, and automation services built to make quality obvious"
        description="Zenscio Web Studio combines premium visual direction, modern Next.js delivery, and practical launch systems so the website can sell trust before the conversation starts."
      />
      <ServicesSection />
      <PricingSection />
      <FinalCtaSection />
      <ContactSection />
    </SiteFrame>
  );
}
