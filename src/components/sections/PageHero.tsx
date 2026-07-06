import type { ReactNode } from "react";
import { Kicker } from "@/components/ui/Panel";

export function PageHero({
  kicker,
  tone = "copper",
  title,
  subhead,
  actions,
}: {
  kicker: string;
  tone?: "copper" | "ice";
  title: string;
  subhead: string;
  actions?: ReactNode;
}) {
  return (
    <section className="border-b border-steel-700/60 pb-12 pt-8 md:pb-16 md:pt-10">
      <div className="container-page">
        <Kicker tone={tone}>{kicker}</Kicker>
        <h1 className="mt-3 max-w-[18ch] text-3xl font-semibold leading-[1.08] md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-sand-400 md:text-lg">{subhead}</p>
        {actions && <div className="mt-7 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </section>
  );
}
