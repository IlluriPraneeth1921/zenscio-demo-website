import { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type SiteFrameProps = {
  children: ReactNode;
  currentPath?: string;
};

export function SiteFrame({ children, currentPath = "/" }: SiteFrameProps) {
  return (
    <div className="page-shell">
      <SiteHeader currentPath={currentPath} />
      <main className="section-grid">{children}</main>
      <SiteFooter />
    </div>
  );
}
