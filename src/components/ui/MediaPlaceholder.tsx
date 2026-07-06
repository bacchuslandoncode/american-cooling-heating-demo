import type { Icon } from "@phosphor-icons/react";
import { ImageSquare } from "@phosphor-icons/react";
import { cn } from "@/lib/cn";

// Honest placeholder for real photography that has not been supplied yet.
// This project intentionally does not use stock photography that doesn't
// depict actual HVAC equipment or the client's own work, so this block
// stands in until real site photos are provided (see DESIGN.md).
export function MediaPlaceholder({
  label,
  icon: IconCmp = ImageSquare,
  aspect = "aspect-[4/3]",
  className,
}: {
  label: string;
  icon?: Icon;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "tick-grid relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-[3px] border border-steel-700/60 bg-graphite-800 p-8 text-center",
        aspect,
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/80 via-transparent to-transparent" />
      <IconCmp size={28} weight="light" className="relative text-steel-400" />
      <p className="relative max-w-[22ch] font-mono text-[11px] uppercase tracking-[0.12em] text-steel-400">
        {label}
      </p>
    </div>
  );
}
