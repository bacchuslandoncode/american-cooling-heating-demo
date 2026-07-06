import { Phone, ClipboardText } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { ctas } from "@/data/siteConfig";

// The one large CTA moment. Used on Home and Contact only.
export function CTASection() {
  return (
    <section className="border-t border-steel-700/60 bg-graphite-800">
      <div className="container-page flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-24">
        <div>
          <h2 className="max-w-[22ch] text-3xl font-semibold leading-tight md:text-4xl">
            Get A System Running Again, Or Get It Right The First Time
          </h2>
          <p className="mt-4 max-w-[52ch] text-sand-400">
            Call for same-day repair when scheduling allows, or request a free estimate on installation,
            replacement, or a maintenance plan.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button href={ctas.call.href} size="lg" icon={<Phone size={17} weight="fill" />}>
            {ctas.call.label}
          </Button>
          <Button href={ctas.estimate.href} variant="secondary" size="lg" icon={<ClipboardText size={17} />}>
            {ctas.estimate.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
