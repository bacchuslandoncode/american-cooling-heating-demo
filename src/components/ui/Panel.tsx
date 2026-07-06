import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Panel({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag
      className={cn(
        "rounded-[3px] border border-steel-700/60 bg-graphite-800/70 [box-shadow:var(--shadow-panel)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function Kicker({ children, tone = "copper" }: { children: ReactNode; tone?: "copper" | "ice" }) {
  return (
    <span
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.18em]",
        tone === "copper" ? "text-copper-400" : "text-ice-400"
      )}
    >
      {children}
    </span>
  );
}

export function Divider({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-px w-full bg-steel-700/60", className)}>
      <span className="absolute left-0 top-1/2 h-2 w-px -translate-y-1/2 bg-copper-500" />
      <span className="absolute left-6 top-1/2 h-1 w-px -translate-y-1/2 bg-steel-600" />
      <span className="absolute left-11 top-1/2 h-1.5 w-px -translate-y-1/2 bg-ice-500" />
    </div>
  );
}
