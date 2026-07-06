import { Link } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";
import type { ServicePage } from "@/data/services";
import { serviceIconMap } from "@/lib/icons";

// A deliberately asymmetric bento for the residential lineup: one large
// featured card plus a smaller grid, instead of five identical tiles.
export function FeaturedServices({ featured, items }: { featured: ServicePage; items: ServicePage[] }) {
  const FeaturedIcon = serviceIconMap[featured.icon];

  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[3px] border border-steel-700/60 bg-steel-700/60 lg:grid-cols-5">
      <Link
        to={`/services/${featured.slug}`}
        className="group flex flex-col justify-between gap-10 bg-graphite-700 p-8 transition-colors hover:bg-graphite-600 lg:col-span-2"
      >
        <div className="flex items-start justify-between">
          <FeaturedIcon size={32} weight="light" className="text-copper-400" />
          <ArrowUpRight size={18} className="text-steel-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-copper-400" />
        </div>
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-copper-400">{featured.kicker}</span>
          <h3 className="mt-2 font-display text-2xl font-medium text-sand-100">{featured.navLabel}</h3>
          <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-sand-400">{featured.summary}</p>
        </div>
      </Link>

      <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:col-span-3">
        {items.map((service) => {
          const Icon = serviceIconMap[service.icon];
          return (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group flex flex-col justify-between gap-6 bg-graphite-800 p-6 transition-colors hover:bg-graphite-700"
            >
              <div className="flex items-start justify-between">
                <Icon size={20} weight="light" className="text-ice-400" />
                <ArrowUpRight size={14} className="text-steel-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-copper-400" />
              </div>
              <div>
                <h3 className="font-display text-sm font-medium text-sand-100">{service.navLabel}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-steel-400">{service.summary}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
