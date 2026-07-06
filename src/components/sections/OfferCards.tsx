import { Link } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";
import type { OfferPage } from "@/data/offers";

export function OfferCards({ items }: { items: OfferPage[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((offer) => (
        <Link
          key={offer.slug}
          to={`/specials/${offer.slug}`}
          className="group flex flex-col justify-between gap-6 rounded-[3px] border border-steel-700/60 bg-graphite-800 p-6 hover:border-ice-500/50"
        >
          <div>
            <h3 className="font-display text-lg font-medium text-sand-100">{offer.navLabel}</h3>
            <p className="mt-2 text-sm leading-relaxed text-steel-400">{offer.subhead}</p>
          </div>
          <span className="flex items-center gap-1.5 text-sm text-copper-400">
            Details <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </Link>
      ))}
    </div>
  );
}
