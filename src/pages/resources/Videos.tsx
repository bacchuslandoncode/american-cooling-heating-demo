import { PlayCircle } from "@phosphor-icons/react";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { videoLibrary } from "@/data/resources";

export function Videos() {
  return (
    <div>
      <Breadcrumbs trail={[{ label: "Resources", href: "/resources" }, { label: "Videos" }]} />
      <PageHero kicker="Videos" title="Brand Video Library" subhead="Manufacturer video resources organized by brand." />
      <div className="container-page grid grid-cols-1 gap-6 py-14 sm:grid-cols-2 md:py-20">
        {videoLibrary.map((v) => (
          <div key={v.brand} className="flex items-center gap-4 rounded-[3px] border border-steel-700/60 bg-graphite-800 p-6">
            <PlayCircle size={28} weight="light" className="text-ice-400" />
            <div>
              <p className="font-display text-base font-medium text-sand-100">{v.brand}</p>
              <p className="mt-1 text-sm text-steel-400">{v.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
