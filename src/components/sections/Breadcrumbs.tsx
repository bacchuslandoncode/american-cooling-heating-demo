import { Link } from "react-router-dom";
import { CaretRight } from "@phosphor-icons/react";

export function Breadcrumbs({ trail }: { trail: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-page flex items-center gap-2 pt-6 text-xs text-steel-400">
      <Link to="/" className="hover:text-ice-300">Home</Link>
      {trail.map((t) => (
        <span key={t.label} className="flex items-center gap-2">
          <CaretRight size={10} />
          {t.href ? (
            <Link to={t.href} className="hover:text-ice-300">{t.label}</Link>
          ) : (
            <span className="text-sand-200">{t.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
