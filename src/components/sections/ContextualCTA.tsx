import { Phone, CalendarCheck, ClipboardText, PiggyBank } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { ctas, type CtaKey } from "@/data/siteConfig";

const icons: Record<CtaKey, Icon> = {
  call: Phone,
  schedule: CalendarCheck,
  estimate: ClipboardText,
  financing: PiggyBank,
};

// Small, page-contextual call to action. The large CTA moment is reserved
// for Home and Contact only (see page composition rules); this stays
// compact so it doesn't repeat the same "need help" banner site-wide.
export function ContextualCTA({ label, action = "call" }: { label: string; action?: CtaKey }) {
  const cta = ctas[action];
  const Icon = icons[action];

  return (
    <section className="py-10">
      <div className="container-page flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
        <p className="max-w-[42ch] text-sm text-muted">{label}</p>
        <Button href={cta.href} size="md" icon={<Icon size={15} weight={action === "call" ? "fill" : "regular"} />}>
          {cta.label}
        </Button>
      </div>
    </section>
  );
}
