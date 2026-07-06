import { MapPin, Compass } from "@phosphor-icons/react";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { ContextualCTA } from "@/components/sections/ContextualCTA";
import { serviceAreas, serviceAreaNote, regions } from "@/data/serviceAreas";
import { MapTrifold } from "@phosphor-icons/react";

export function ServiceAreas() {
  return (
    <div>
      <Breadcrumbs trail={[{ label: "Service Areas" }]} />
      <PageHero kicker="Service Areas" title="Valleywide Service" subhead={serviceAreaNote} />

      <section className="border-b border-steel-700/60 py-14 md:py-20">
        <div className="container-page grid grid-cols-1 gap-6 lg:grid-cols-3">
          {regions.map((region) => {
            const cities = serviceAreas.filter((a) => a.region === region);
            return (
              <div key={region} className="rounded-[3px] border border-steel-700/60 bg-graphite-800 p-6">
                <div className="flex items-center gap-2.5 text-ice-400">
                  <Compass size={18} weight="light" />
                  <h2 className="font-display text-base font-medium text-sand-100">{region}</h2>
                </div>
                <ul className="mt-5 space-y-3 border-t border-steel-700/60 pt-4">
                  {cities.map((city) => (
                    <li key={city.slug} className="flex items-center gap-2.5">
                      <MapPin size={14} className="shrink-0 text-copper-400" />
                      <span className="text-sm text-sand-200">{city.city}</span>
                      {city.note && <span className="text-xs text-steel-400">({city.note})</span>}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-page">
          <MediaPlaceholder
            label="Service area map, Phoenix Metro and surrounding cities"
            icon={MapTrifold}
            aspect="aspect-[21/9]"
          />
        </div>
      </section>

      <ContextualCTA label="Not seeing your city? Call to confirm coverage, service extends valleywide." />
    </div>
  );
}
