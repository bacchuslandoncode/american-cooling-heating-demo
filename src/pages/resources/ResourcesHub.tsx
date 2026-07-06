import { Link } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";

const links = [
  { label: "FAQs", href: "/resources/faqs", detail: "SEER, HSPF, AFUE, sizing, and other common questions" },
  { label: "Heat Pump Guide", href: "/resources/heat-pump-guide", detail: "How a heat pump moves heat both directions" },
  { label: "Glossary", href: "/resources/glossary", detail: "Plain-language HVAC terms" },
  { label: "Consumer Literature", href: "/resources/consumer-literature", detail: "Ten downloadable guides on efficiency, safety, and air quality" },
  { label: "Videos", href: "/resources/videos", detail: "Brand video libraries for Trane, Carrier, Goodman, and Rheem" },
  { label: "Tips & News", href: "/resources/tips-news", detail: "Seasonal tips and company updates" },
];

export function ResourcesHub() {
  return (
    <div>
      <Breadcrumbs trail={[{ label: "Resources" }]} />
      <PageHero
        kicker="Resources"
        title="Straight Answers, No Sales Pitch"
        subhead="Reference material for homeowners and facility managers trying to understand what they're being told before they agree to it."
      />
      <div className="container-page grid grid-cols-1 gap-px overflow-hidden rounded-[3px] border border-steel-700/60 bg-steel-700/60 py-0 sm:grid-cols-2 lg:grid-cols-3 my-14 md:my-20">
        {links.map((l) => (
          <Link key={l.href} to={l.href} className="group flex flex-col justify-between gap-6 bg-graphite-800 p-6 hover:bg-graphite-700">
            <div>
              <h2 className="font-display text-lg font-medium text-sand-100">{l.label}</h2>
              <p className="mt-2 text-sm leading-relaxed text-steel-400">{l.detail}</p>
            </div>
            <ArrowUpRight size={16} className="text-steel-400 group-hover:text-copper-400" />
          </Link>
        ))}
      </div>
    </div>
  );
}
