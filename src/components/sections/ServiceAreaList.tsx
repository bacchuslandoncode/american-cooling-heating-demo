import { MapPin } from "@phosphor-icons/react";
import type { ServiceArea } from "@/data/serviceAreas";

export function ServiceAreaList({ items }: { items: ServiceArea[] }) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[3px] border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
      {items.map((area) => (
        <div key={area.slug} className="flex items-center gap-2.5 bg-card px-5 py-4">
          <MapPin size={15} className="shrink-0 text-brand" />
          <div>
            <p className="text-sm font-medium text-ink">{area.city}</p>
            {area.note && <p className="text-[11px] text-muted">{area.note}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
