import { useParams, Navigate } from "react-router-dom";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { ContextualCTA } from "@/components/sections/ContextualCTA";
import { brands } from "@/data/products";
import { cn } from "@/lib/cn";

export function BrandDetail() {
  const { slug } = useParams();
  const brand = brands.find((b) => b.slug === slug);

  if (!brand) return <Navigate to="/products" replace />;

  const isOdd = brand.productLines.length % 2 === 1;

  return (
    <div>
      <Breadcrumbs trail={[{ label: "Products & Brands", href: "/products" }, { label: brand.name }]} />
      <PageHero kicker={brand.kicker} title={brand.name} subhead={brand.summary} />
      <section className="border-b border-border py-14 md:py-20">
        <div className="container-page">
          <h2 className="mb-8 max-w-[26ch] text-2xl font-semibold md:text-3xl">Product Lines Serviced</h2>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[3px] border border-border bg-border sm:grid-cols-2">
            {brand.productLines.map((line, i) => (
              <div
                key={line.name}
                className={cn("bg-card p-6", isOdd && i === brand.productLines.length - 1 && "sm:col-span-2")}
              >
                <p className="font-display text-base font-medium text-ink">{line.name}</p>
                <p className="mt-1.5 text-sm text-muted">{line.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContextualCTA label={`Ask about current ${brand.name} availability and pricing.`} action="estimate" />
    </div>
  );
}
