import { Star } from "@phosphor-icons/react";
import type { Review } from "@/data/reviews";

export function ReviewsGrid({ items }: { items: Review[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {items.map((review) => (
        <figure key={review.name} className="flex flex-col justify-between rounded-[3px] border border-border bg-card p-6">
          <div>
            <div className="flex gap-0.5 text-brand">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} weight="fill" />
              ))}
            </div>
            <h3 className="mt-3 font-display text-base font-medium text-ink">{review.title}</h3>
            <blockquote className="mt-2 text-sm leading-relaxed text-muted">&ldquo;{review.quote}&rdquo;</blockquote>
          </div>
          <figcaption className="mt-6 flex items-center justify-between border-t border-border pt-4">
            <div>
              <p className="font-display text-sm font-medium text-ink">{review.name}</p>
              <p className="text-xs text-muted">{review.location}</p>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">{review.platform}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
