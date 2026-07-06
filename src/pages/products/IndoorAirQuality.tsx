import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { ContextualCTA } from "@/components/sections/ContextualCTA";
import { indoorAirQuality } from "@/data/products";
import { cn } from "@/lib/cn";

export function IndoorAirQuality() {
  const d = indoorAirQuality;
  const isOdd = d.products.length % 2 === 1;
  return (
    <div>
      <Breadcrumbs trail={[{ label: "Products & Brands", href: "/products" }, { label: "Indoor Air Quality" }]} />
      <PageHero kicker="Indoor Air Quality" tone="ice" title={d.headline} subhead={d.summary} />
      <section className="py-14 md:py-20">
        <div className="container-page grid grid-cols-1 gap-px overflow-hidden rounded-[3px] border border-steel-700/60 bg-steel-700/60 sm:grid-cols-2">
          {d.products.map((p, i) => (
            <div key={p.name} className={cn("bg-graphite-800 p-6", isOdd && i === d.products.length - 1 && "sm:col-span-2")}>
              <p className="font-display text-base font-medium text-sand-100">{p.name}</p>
              <p className="mt-1.5 text-sm text-steel-400">{p.detail}</p>
            </div>
          ))}
        </div>
      </section>
      <ContextualCTA label="Ask about adding filtration or humidity control to a new or existing system." action="estimate" />
    </div>
  );
}
