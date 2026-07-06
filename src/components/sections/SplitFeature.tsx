import { CheckCircle } from "@phosphor-icons/react";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { PhotoFrame, type PhotoSpec } from "@/components/ui/PhotoFrame";
import { cn } from "@/lib/cn";

export function SplitFeature({
  heading,
  body,
  bullets,
  mediaLabel,
  image,
  reverse,
}: {
  heading: string;
  body: string;
  bullets?: string[];
  mediaLabel: string;
  image?: PhotoSpec;
  reverse?: boolean;
}) {
  return (
    <section className="border-b border-steel-700/60 py-14 md:py-20">
      <div className="container-page grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={cn(reverse && "lg:order-2")}>
          <h2 className="max-w-[22ch] text-2xl font-semibold md:text-3xl">{heading}</h2>
          <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-sand-400 md:text-base">{body}</p>
          {bullets && (
            <ul className="mt-6 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle size={17} weight="fill" className="mt-0.5 shrink-0 text-copper-400" />
                  <span className="text-sm text-sand-200">{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        {image ? (
          <PhotoFrame photo={image} className={cn(reverse && "lg:order-1")} />
        ) : (
          <MediaPlaceholder label={mediaLabel} className={cn(reverse && "lg:order-1")} />
        )}
      </div>
    </section>
  );
}
