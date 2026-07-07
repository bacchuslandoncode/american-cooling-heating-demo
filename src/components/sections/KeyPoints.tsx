import { CheckCircle } from "@phosphor-icons/react";

export function KeyPoints({ heading, items }: { heading?: string; items: string[] }) {
  return (
    <section className="border-b border-border py-14 md:py-20">
      <div className="container-page">
        {heading && <h2 className="mb-8 max-w-[26ch] text-2xl font-semibold md:text-3xl">{heading}</h2>}
        <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle size={18} weight="fill" className="mt-0.5 shrink-0 text-brand" />
              <span className="text-sm leading-relaxed text-ink md:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
