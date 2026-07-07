import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { KeyPoints } from "@/components/sections/KeyPoints";
import { EquipmentGrid } from "@/components/sections/EquipmentGrid";
import { ContextualCTA } from "@/components/sections/ContextualCTA";
import { waterSourceHeatPumps } from "@/data/products";

export function WaterSourceHeatPumps() {
  const d = waterSourceHeatPumps;
  return (
    <div>
      <Breadcrumbs trail={[{ label: "Products & Brands", href: "/products" }, { label: "Water Source Heat Pumps" }]} />
      <PageHero kicker="Water Source Heat Pumps" tone="cooling" title={d.headline} subhead={d.summary} />
      <KeyPoints heading="Service Scope" items={d.points} />
      <EquipmentGrid heading="Brands Serviced" items={d.brandsServiced} />
      <ContextualCTA label="Ask whether a water source system fits your building's loop." action="estimate" />
    </div>
  );
}
