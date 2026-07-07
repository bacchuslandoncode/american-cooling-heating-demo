import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { cn } from "@/lib/cn";

export function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-base font-medium text-ink md:text-lg">{item.question}</span>
              <CaretDown
                size={18}
                className={cn("shrink-0 text-muted transition-transform duration-200", isOpen && "rotate-180 text-brand")}
              />
            </button>
            <div className={cn("grid transition-all duration-300 ease-out", isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0")}>
              <div className="overflow-hidden">
                <p className="max-w-[65ch] text-sm leading-relaxed text-muted md:text-base">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
