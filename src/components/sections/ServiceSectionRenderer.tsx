import type { ServiceSection } from "@/data/services";
import { StatStrip } from "./StatStrip";
import { KeyPoints } from "./KeyPoints";
import { SplitFeature } from "./SplitFeature";
import { ProcessSteps } from "./ProcessSteps";
import { Comparison } from "./Comparison";
import { EquipmentGrid } from "./EquipmentGrid";

export function ServiceSectionRenderer({ section }: { section: ServiceSection }) {
  switch (section.type) {
    case "stats":
      return <StatStrip heading={section.heading} items={section.items} />;
    case "keyPoints":
      return <KeyPoints heading={section.heading} items={section.items} />;
    case "split":
      return (
        <SplitFeature
          heading={section.heading}
          body={section.body}
          bullets={section.bullets}
          mediaLabel={section.mediaLabel}
          image={section.image}
          reverse={section.reverse}
        />
      );
    case "process":
      return <ProcessSteps heading={section.heading} steps={section.steps} />;
    case "comparison":
      return <Comparison heading={section.heading} left={section.left} right={section.right} />;
    case "equipmentGrid":
      return <EquipmentGrid heading={section.heading} items={section.items} />;
    default:
      return null;
  }
}
