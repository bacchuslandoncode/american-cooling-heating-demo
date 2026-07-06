import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ContextualCTA } from "@/components/sections/ContextualCTA";
import { servicesByCategory } from "@/data/services";

export function ServicesHub() {
  return (
    <div>
      <Breadcrumbs trail={[{ label: "Services" }]} />
      <PageHero
        kicker="Services"
        title="Residential, Commercial, And Precision HVAC"
        subhead="One warranty standard and one phone number, whether it's a home AC unit, a rooftop package on a strip mall, or a CRAC unit in a server room."
      />
      <div className="container-page space-y-14 py-14 md:py-20">
        <div>
          <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-steel-400">Residential</h2>
          <ServicesGrid items={servicesByCategory("residential")} />
        </div>
        <div>
          <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-steel-400">Commercial</h2>
          <ServicesGrid items={servicesByCategory("commercial")} />
        </div>
        <div>
          <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-steel-400">Precision &amp; Industrial</h2>
          <ServicesGrid items={servicesByCategory("precision")} />
        </div>
      </div>
      <ContextualCTA label="Not sure which service applies? Describe the problem and get scheduled with the right technician." action="schedule" />
    </div>
  );
}
