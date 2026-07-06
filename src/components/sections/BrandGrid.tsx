import { Link } from "react-router-dom";
import type { Brand } from "@/data/products";

export function BrandGrid({ items }: { items: Brand[] }) {
  // Independent bordered cards (not the shared-background bento technique)
  // on purpose: brand counts don't divide evenly into 2/3/4 columns, and a
  // real gap avoids leaving a visible filled-but-empty slab in the last row.
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((brand) => (
        <Link
          key={brand.slug}
          to={`/products/${brand.slug}`}
          className="group flex flex-col gap-4 rounded-[3px] border border-steel-700/60 bg-graphite-800 p-6 transition-colors hover:border-ice-500/50 hover:bg-graphite-700"
        >
          <span className="font-display text-lg font-semibold text-sand-100 group-hover:text-copper-400">{brand.name}</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-steel-400">{brand.scope}</span>
        </Link>
      ))}
    </div>
  );
}
