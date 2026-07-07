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
        "rounded-[3px] border border-border bg-card/70 [box-shadow:var(--shadow-panel)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function Kicker({ children, tone = "brand" }: { children: ReactNode; tone?: "brand" | "cooling" }) {
  return (
    <span
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.18em]",
        tone === "brand" ? "text-brand" : "text-brand-dark"
      )}
    >
      {children}
    </span>
  );
}

export function Divider({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-px w-full bg-border", className)}>
      <span className="absolute left-0 top-1/2 h-2 w-px -translate-y-1/2 bg-brand" />
      <span className="absolute left-6 top-1/2 h-1 w-px -translate-y-1/2 bg-sage" />
      <span className="absolute left-11 top-1/2 h-1.5 w-px -translate-y-1/2 bg-cooling" />
    </div>
  );
}
