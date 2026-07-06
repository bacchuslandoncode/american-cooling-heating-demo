import { useParams, Navigate } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { KeyPoints } from "@/components/sections/KeyPoints";
import { ContextualCTA } from "@/components/sections/ContextualCTA";
import { getOfferBySlug } from "@/data/offers";
import type { CtaKey } from "@/data/siteConfig";

const ctaByOffer: Record<string, { label: string; action: CtaKey }> = {
  "ac-on-sale": { label: "Ask what's in stock right now with a free estimate.", action: "estimate" },
  "heat-pumps-on-sale": { label: "Ask what's in stock right now with a free estimate.", action: "estimate" },
  financing: { label: "Ready to move forward? Schedule the work.", action: "schedule" },
  "senior-discount": { label: "Mention this discount when you schedule.", action: "schedule" },
  "military-discount": { label: "Mention this discount when you schedule.", action: "schedule" },
};

export function OfferDetail() {
  const { slug } = useParams();
  const offer = slug ? getOfferBySlug(slug) : undefined;

  if (!offer) return <Navigate to="/specials" replace />;

  const cta = ctaByOffer[offer.slug] ?? { label: "Ask how this applies to your system when you call.", action: "call" as CtaKey };

  return (
    <div>
      <Breadcrumbs trail={[{ label: "Specials & Financing", href: "/specials" }, { label: offer.navLabel }]} />
      <PageHero kicker={offer.subhead} title={offer.headline} subhead={offer.body} />
      <KeyPoints heading="Details" items={offer.points} />
      {offer.externalLink && (
        <div className="container-page -mt-8 pb-14">
          <a
            href={offer.externalLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-ice-400 hover:text-ice-300"
          >
            {offer.externalLink.label}
            <ArrowUpRight size={14} />
          </a>
        </div>
      )}
      <ContextualCTA label={cta.label} action={cta.action} />
    </div>
  );
}
