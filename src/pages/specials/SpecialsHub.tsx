import { ClipboardText, PiggyBank } from "@phosphor-icons/react";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { KeyPoints } from "@/components/sections/KeyPoints";
import { OfferCards } from "@/components/sections/OfferCards";
import { ContextualCTA } from "@/components/sections/ContextualCTA";
import { Button } from "@/components/ui/Button";
import { offers } from "@/data/offers";
import { ctas } from "@/data/siteConfig";

export function SpecialsHub() {
  return (
    <div>
      <Breadcrumbs trail={[{ label: "Specials & Financing" }]} />
      <PageHero
        kicker="Specials & Financing"
        title="Current Offers, Discounts, And Financing"
        subhead="Equipment pricing shifts with inventory and factory rebates, so live pricing isn't posted here. What is fixed: the guarantees below apply every time."
        actions={
          <>
            <Button href={ctas.estimate.href} icon={<ClipboardText size={15} />}>
              {ctas.estimate.label}
            </Button>
            <Button href={ctas.financing.href} variant="secondary" icon={<PiggyBank size={15} />}>
              {ctas.financing.label}
            </Button>
          </>
        }
      />
      <KeyPoints
        heading="Standing Guarantees"
        items={[
          "Free in-home estimate on new installation and replacement",
          "Free second opinion before approving a compressor replacement",
          "Price match on a written bid from a licensed competitor",
          "Financing available through Regions Bank",
          "Senior and military discounts on qualifying service",
          "Multiple payment methods accepted",
        ]}
      />
      <section className="py-14 md:py-20">
        <div className="container-page">
          <h2 className="mb-8 max-w-[26ch] text-2xl font-semibold md:text-3xl">Offers</h2>
          <OfferCards items={offers} />
        </div>
      </section>
      <ContextualCTA label="Financing runs through Regions Bank on approved credit." action="financing" />
    </div>
  );
}
