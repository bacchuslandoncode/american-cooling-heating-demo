import { Star } from "@phosphor-icons/react";
import type { Review } from "@/data/reviews";

export function ReviewsGrid({ items }: { items: Review[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {items.map((review) => (
        <figure key={review.name} className="flex flex-col justify-between rounded-[3px] border border-steel-700/60 bg-graphite-800 p-6">
          <div>
            <div className="flex gap-0.5 text-copper-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} weight="fill" />
              ))}
            </div>
            <h3 className="mt-3 font-display text-base font-medium text-sand-100">{review.title}</h3>
            <blockquote className="mt-2 text-sm leading-relaxed text-sand-200">&ldquo;{review.quote}&rdquo;</blockquote>
          </div>
          <figcaption className="mt-6 flex items-center justify-between border-t border-steel-700/60 pt-4">
            <div>
              <p className="font-display text-sm font-medium text-sand-100">{review.name}</p>
              <p className="text-xs text-steel-400">{review.location}</p>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-steel-400">{review.platform}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
