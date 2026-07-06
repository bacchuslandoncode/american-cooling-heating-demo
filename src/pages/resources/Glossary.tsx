import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { glossary } from "@/data/glossary";

export function Glossary() {
  return (
    <div>
      <Breadcrumbs trail={[{ label: "Resources", href: "/resources" }, { label: "Glossary" }]} />
      <PageHero kicker="Glossary" title="HVAC Terms, Plainly Defined" subhead="The vocabulary that shows up on a work order or an equipment sticker." />
      <div className="container-page py-14 md:py-20">
        <dl className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
          {glossary.map((g) => (
            <div key={g.term} className="border-t border-steel-700/60 pt-4">
              <dt className="font-display text-base font-medium text-sand-100">{g.term}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-sand-400">{g.definition}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
