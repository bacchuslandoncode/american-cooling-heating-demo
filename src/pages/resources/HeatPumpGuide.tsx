import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { KeyPoints } from "@/components/sections/KeyPoints";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { ContextualCTA } from "@/components/sections/ContextualCTA";
import { heatPumpGuide } from "@/data/resources";
import modernHeatPumpInstall from "@/assets/images/modern-heat-pump-installation.jpg";

export function HeatPumpGuide() {
  return (
    <div>
      <Breadcrumbs trail={[{ label: "Resources", href: "/resources" }, { label: "Heat Pump Guide" }]} />
      <PageHero kicker="Heat Pump Guide" tone="ice" title={heatPumpGuide.headline} subhead={heatPumpGuide.summary} />
      <SplitFeature
        heading="One Unit, Two Jobs"
        body="A heat pump installation looks like a standard outdoor condenser, but the reversing valve inside means the same unit pulls heat out of the house in summer and pulls heat into it in winter."
        mediaLabel="Heat pump condenser installed outside a home"
        image={{
          src: modernHeatPumpInstall,
          alt: "Heat pump condenser installed beside a home's exterior wall",
          position: "45% 55%",
        }}
      />
      <KeyPoints heading="Good To Know" items={heatPumpGuide.points} />
      <ContextualCTA label="Wondering if a heat pump fits your home? Ask during a free estimate." action="estimate" />
    </div>
  );
}
