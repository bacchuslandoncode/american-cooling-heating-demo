import { trustBadges } from "@/data/trustBadges";
import { badgeIconMap } from "@/lib/icons";

export function TrustBar() {
  return (
    <section className="border-b border-steel-700/60 bg-graphite-800/40">
      <div className="container-page grid grid-cols-2 gap-px overflow-hidden rounded-[3px] border border-steel-700/60 bg-steel-700/60 sm:grid-cols-3 lg:grid-cols-7">
        {trustBadges.map((b) => {
          const Icon = badgeIconMap[b.icon];
          return (
            <div key={b.label} className="flex flex-col items-start gap-2 bg-graphite-900 p-4">
              <Icon size={18} className="text-ice-400" weight="light" />
              <div>
                <p className="font-display text-sm font-medium leading-tight text-sand-100">{b.label}</p>
                {b.sub && <p className="mt-1 text-[11px] leading-tight text-steel-400">{b.sub}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
