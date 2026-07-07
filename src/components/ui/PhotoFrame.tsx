import { cn } from "@/lib/cn";

export type PhotoSpec = {
  src: string;
  alt: string;
  position?: string;
  /** Tames a photo whose native color fights the brand/cooling palette (used for the red radiator shot). */
  tone?: boolean;
};

export function PhotoFrame({
  photo,
  aspect = "aspect-[4/3]",
  className,
}: {
  photo: PhotoSpec;
  aspect?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-[3px] border border-border bg-card", aspect, className)}>
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        decoding="async"
        className={cn("h-full w-full object-cover", photo.tone && "saturate-[0.35] brightness-[0.9] contrast-[1.05]")}
        style={{ objectPosition: photo.position ?? "center" }}
      />
      {photo.tone && (
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/15 to-brand/15 mix-blend-multiply" />
      )}
    </div>
  );
}
