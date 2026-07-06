import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { Accordion } from "@/components/ui/Accordion";
import { ContextualCTA } from "@/components/sections/ContextualCTA";
import { faqs } from "@/data/faqs";

export function Faqs() {
  return (
    <div>
      <Breadcrumbs trail={[{ label: "Resources", href: "/resources" }, { label: "FAQs" }]} />
      <PageHero kicker="FAQs" title="Frequently Asked Questions" subhead="The questions technicians get asked on almost every call." />
      <div className="container-page py-14 md:py-20">
        <Accordion items={faqs} />
      </div>
      <ContextualCTA label="Question not covered here? Call and ask directly." />
    </div>
  );
}
