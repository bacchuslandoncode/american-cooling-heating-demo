import { Link } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";
import type { ServicePage } from "@/data/services";
import { serviceIconMap } from "@/lib/icons";
import { cn } from "@/lib/cn";

// Independent bordered cards with a real gap, not the shared-background
// bento technique: service counts per category vary (1, 2, 5...) and don't
// divide evenly into a fixed column count, so a real gap avoids ever
// leaving a visible filled-but-empty slab in an incomplete last row.
export function ServicesGrid({ items }: { items: ServicePage[] }) {
  const solo = items.length === 1;

  return (
    <div className={cn("grid grid-cols-1 gap-4", !solo && "sm:grid-cols-2 lg:grid-cols-4")}>
      {items.map((service) => {
        const Icon = serviceIconMap[service.icon];
        return (
          <Link
            key={service.slug}
            to={`/services/${service.slug}`}
            className={cn(
              "group rounded-[3px] border border-border bg-card p-6 transition-colors hover:border-cooling hover:bg-ice",
              solo ? "flex items-center gap-6" : "flex flex-col justify-between gap-8"
            )}
          >
            <div className={cn("flex items-center gap-3", !solo && "w-full items-start justify-between")}>
              <Icon size={solo ? 30 : 22} weight="light" className="shrink-0 text-brand" />
              {!solo && (
                <ArrowUpRight size={16} className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
              )}
            </div>
            <div>
              <h3 className="font-display text-base font-medium text-ink">{service.navLabel}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>
            </div>
            {solo && (
              <ArrowUpRight size={18} className="ml-auto shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
            )}
          </Link>
        );
      })}
    </div>
  );
}
