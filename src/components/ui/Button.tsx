import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-medium tracking-tight transition-transform duration-200 active:scale-[0.98] whitespace-nowrap";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-cooling text-ink hover:bg-cooling-dark",
  secondary: "border border-border text-ink hover:border-brand hover:text-brand",
  ghost: "text-ink hover:text-brand",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  icon,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a href={href} className={classes}>
          {children}
          {icon}
        </a>
      );
    }
    return (
      <Link to={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}
