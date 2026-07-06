import { useParams, Navigate } from "react-router-dom";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceSectionRenderer } from "@/components/sections/ServiceSectionRenderer";
import { ContextualCTA } from "@/components/sections/ContextualCTA";
import { getServiceBySlug } from "@/data/services";
import type { CtaKey } from "@/data/siteConfig";

const ctaBySlug: Record<string, CtaKey> = {
  "24-7-ac-service": "call",
  "ac-repair": "call",
  "installation-replacement": "estimate",
  maintenance: "schedule",
  "residential-hvac": "estimate",
  "commercial-industrial-hvac": "schedule",
  "precision-cooling-crac": "schedule",
  "cooling-towers": "schedule",
};

const labelByAction: Record<CtaKey, string> = {
  call: "System down or acting up? Call for same-day dispatch, availability permitting.",
  estimate: "Ready to size a new system? Start with a free in-home estimate.",
  schedule: "Ready to get this on the calendar? Schedule service.",
  financing: "Financing runs through Regions Bank on approved credit.",
};

export function ServiceDetail() {
  const { slug } = useParams();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) return <Navigate to="/services" replace />;

  const action = ctaBySlug[service.slug] ?? "call";

  return (
    <div>
      <Breadcrumbs trail={[{ label: "Services", href: "/services" }, { label: service.navLabel }]} />
      <PageHero
        kicker={service.kicker}
        tone={service.category === "precision" ? "ice" : "copper"}
        title={service.headline}
        subhead={service.subhead}
      />
      {service.sections.map((section, i) => (
        <ServiceSectionRenderer key={i} section={section} />
      ))}
      <ContextualCTA label={labelByAction[action]} action={action} />
    </div>
  );
}
