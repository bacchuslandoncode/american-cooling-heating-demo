import { Link } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { BrandGrid } from "@/components/sections/BrandGrid";
import { ContextualCTA } from "@/components/sections/ContextualCTA";
import { brands } from "@/data/products";

const specialtyPages = [
  { label: "Water Source Heat Pumps", href: "/products/water-source-heat-pumps", detail: "Carrier and ClimateMaster geothermal systems" },
  { label: "Indoor Air Quality", href: "/products/indoor-air-quality", detail: "Filtration, UV, humidification, ventilation" },
];

export function ProductsHub() {
  return (
    <div>
      <Breadcrumbs trail={[{ label: "Products & Brands" }]} />
      <PageHero
        kicker="Products & Brands"
        title="Every Major Brand, Serviced And Installed"
        subhead="Trane and Carrier cover both residential and commercial lines. Goodman, Rheem, Amana, and York round out residential. All of it carries the same warranty terms."
      />
      <div className="container-page py-14 md:py-20">
        <BrandGrid items={brands} />
        <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-[3px] border border-steel-700/60 bg-steel-700/60 sm:grid-cols-2">
          {specialtyPages.map((p) => (
            <Link key={p.href} to={p.href} className="group flex items-center justify-between gap-4 bg-graphite-800 p-6 hover:bg-graphite-700">
              <div>
                <p className="font-display text-base font-medium text-sand-100">{p.label}</p>
                <p className="mt-1 text-sm text-steel-400">{p.detail}</p>
              </div>
              <ArrowUpRight size={16} className="shrink-0 text-steel-400 group-hover:text-copper-400" />
            </Link>
          ))}
        </div>
      </div>
      <ContextualCTA label="Have equipment in mind already? Ask about current pricing and availability." action="estimate" />
    </div>
  );
}
