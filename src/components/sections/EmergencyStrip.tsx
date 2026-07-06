import { Phone, Clock } from "@phosphor-icons/react";
import { siteConfig } from "@/data/siteConfig";

export function EmergencyStrip() {
  return (
    <div className="border-b border-copper-700/40 bg-copper-500 text-graphite-950">
      <div className="container-page flex flex-col items-center justify-between gap-3 py-3 text-sm sm:flex-row">
        <div className="flex items-center gap-2 font-medium">
          <Clock size={16} weight="fill" />
          <span>System down? Emergency dispatch, 24/7 as scheduling permits.</span>
        </div>
        <a href={siteConfig.phoneHref} className="flex items-center gap-2 font-display font-semibold">
          <Phone size={16} weight="fill" />
          {siteConfig.phone}
        </a>
      </div>
    </div>
  );
}
