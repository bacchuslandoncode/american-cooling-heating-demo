import { CheckCircle } from "@phosphor-icons/react";
import type { WhyChooseUsPoint } from "@/data/whyChooseUs";

export function WhyChooseUs({ heading, items }: { heading?: string; items: WhyChooseUsPoint[] }) {
  return (
    <section className="border-b border-border py-16 md:py-24">
      <div className="container-page">
        {heading && <h2 className="max-w-[26ch] text-3xl font-semibold md:text-4xl">{heading}</h2>}
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[3px] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="bg-card p-6">
              <CheckCircle size={20} weight="fill" className="text-brand" />
              <h3 className="mt-4 font-display text-base font-medium text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
