import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { KeyPoints } from "@/components/sections/KeyPoints";
import { ContextualCTA } from "@/components/sections/ContextualCTA";
import { warranties } from "@/data/trustBadges";
import { cn } from "@/lib/cn";

export function QualityGuarantee() {
  const items = Object.values(warranties);
  const isOdd = items.length % 2 === 1;

  return (
    <div>
      <Breadcrumbs trail={[{ label: "About", href: "/about" }, { label: "Quality Guarantee" }]} />
      <PageHero
        kicker="Quality Guarantee"
        title="The Work Is Guaranteed, In Writing"
        subhead="All work is backed by clear warranty terms, not a verbal promise that's hard to hold anyone to later."
      />
      <section className="border-b border-border py-14 md:py-20">
        <div className="container-page grid grid-cols-1 gap-px overflow-hidden rounded-[3px] border border-border bg-border md:grid-cols-2">
          {items.map((w, i) => (
            <div key={w.title} className={cn("bg-card p-6", isOdd && i === items.length - 1 && "md:col-span-2")}>
              <h3 className="font-display text-base font-medium text-brand">{w.title}</h3>
              <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-muted">{w.body}</p>
            </div>
          ))}
        </div>
      </section>
      <KeyPoints
        heading="Backed By"
        items={[
          "Licensed, bonded, and insured",
          "BBB A+ rated",
          "Complaint-free record with the Arizona Registrar of Contractors",
          "NATE certified technicians",
          "Up-front flat-rate pricing before any work starts",
        ]}
      />
      <ContextualCTA label="Questions about how a warranty applies to your system? Ask when you call." />
    </div>
  );
}
