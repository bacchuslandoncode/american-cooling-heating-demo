import { cn } from "@/lib/cn";

export type PhotoSpec = {
  src: string;
  alt: string;
  position?: string;
  /** Tames a photo whose native color fights the graphite/copper/ice palette (used for the red radiator shot). */
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
    <div className={cn("relative overflow-hidden rounded-[3px] border border-steel-700/60 bg-graphite-800", aspect, className)}>
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        decoding="async"
        className={cn("h-full w-full object-cover", photo.tone && "saturate-[0.18] brightness-[0.55] contrast-[1.1]")}
        style={{ objectPosition: photo.position ?? "center" }}
      />
      {photo.tone && (
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/60 via-graphite-950/30 to-copper-700/20 mix-blend-multiply" />
      )}
    </div>
  );
}
