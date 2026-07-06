import { FilePdf } from "@phosphor-icons/react";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { consumerLiterature } from "@/data/resources";

export function ConsumerLiterature() {
  return (
    <div>
      <Breadcrumbs trail={[{ label: "Resources", href: "/resources" }, { label: "Consumer Literature" }]} />
      <PageHero
        kicker="Consumer Literature"
        title="Ten Guides Worth Reading Before You Buy"
        subhead="Manufacturer and industry-association literature on efficiency, safety, and indoor air quality."
      />
      <div className="container-page grid grid-cols-1 gap-px overflow-hidden rounded-[3px] border border-steel-700/60 bg-steel-700/60 py-0 sm:grid-cols-2 my-14 md:my-20">
        {consumerLiterature.map((doc) => (
          <div key={doc.title} className="flex items-start gap-4 bg-graphite-800 p-6">
            <FilePdf size={20} className="mt-0.5 shrink-0 text-copper-400" />
            <div>
              <p className="font-display text-sm font-medium text-sand-100">{doc.title}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.08em] text-steel-400">{doc.topic}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
