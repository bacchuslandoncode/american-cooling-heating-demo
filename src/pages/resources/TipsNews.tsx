import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { ContextualCTA } from "@/components/sections/ContextualCTA";
import { tipsTopics } from "@/data/resources";

export function TipsNews() {
  return (
    <div>
      <Breadcrumbs trail={[{ label: "Resources", href: "/resources" }, { label: "Tips & News" }]} />
      <PageHero
        kicker="Tips & News"
        title="Seasonal Tips And Company Updates"
        subhead="Practical notes on getting more out of a system, plus the occasional company update."
      />
      <div className="container-page grid grid-cols-1 gap-6 py-14 sm:grid-cols-2 md:py-20">
        {tipsTopics.map((t, i) => (
          <div key={t.title} className="border-t border-steel-700/60 pt-5">
            <span className="font-mono text-xs text-copper-400">0{i + 1}</span>
            <h2 className="mt-2 font-display text-lg font-medium text-sand-100">{t.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-steel-400">{t.detail}</p>
          </div>
        ))}
      </div>
      <ContextualCTA label="Looking for something specific? Call and ask." />
    </div>
  );
}
