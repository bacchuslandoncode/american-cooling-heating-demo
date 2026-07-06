import { useState } from "react";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { List, X, Phone, CaretDown, ClipboardText } from "@phosphor-icons/react";
import { primaryNav, isNavGroup, ctas } from "@/data/siteConfig";
import { cn } from "@/lib/cn";
import logo from "@/assets/images/acg-logo-2017.webp";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-steel-700/60 bg-graphite-900/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-[68px]">
        <Link to="/" className="flex shrink-0 items-center" onClick={() => setMobileOpen(false)}>
          <img
            src={logo}
            alt="American Cooling And Heating"
            className="h-10 w-auto md:h-12"
            width={1538}
            height={1000}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) =>
            isNavGroup(item) ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenGroup(item.label)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <button
                  className="flex items-center gap-1 rounded-full px-3 py-2 text-sm text-sand-200 hover:text-ice-300"
                  aria-expanded={openGroup === item.label}
                >
                  {item.label}
                  <CaretDown size={13} weight="bold" />
                </button>
                <div
                  className={cn(
                    "absolute left-0 top-full pt-2 transition-all duration-150",
                    openGroup === item.label ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                  )}
                >
                  <div className="w-[300px] rounded-[3px] border border-steel-700/60 bg-graphite-800 p-2 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        className="block rounded-[3px] px-3 py-2.5 hover:bg-graphite-700"
                      >
                        <span className="block text-sm font-medium text-sand-100">{sub.label}</span>
                        {sub.description && (
                          <span className="mt-0.5 block text-xs text-steel-400">{sub.description}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <RouterNavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                className={({ isActive }) =>
                  cn(
                    "rounded-full px-3 py-2 text-sm text-sand-200 hover:text-ice-300",
                    isActive && "text-ice-300"
                  )
                }
              >
                {item.label}
              </RouterNavLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={ctas.call.href}
            className="hidden items-center gap-2 rounded-full bg-copper-500 px-4 py-2.5 font-display text-sm font-medium text-graphite-950 hover:bg-copper-400 md:flex"
          >
            <Phone size={16} weight="fill" />
            {ctas.call.label}
          </a>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-[3px] border border-steel-600 text-sand-100 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100dvh-64px)] overflow-y-auto border-t border-steel-700/60 bg-graphite-900 px-5 pb-8 pt-2 lg:hidden">
          <nav aria-label="Primary, mobile">
            {primaryNav.map((item) =>
              isNavGroup(item) ? (
                <details key={item.label} className="group border-b border-steel-700/60 py-1">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-sm font-medium text-sand-100 marker:content-none">
                    {item.label}
                    <CaretDown size={13} weight="bold" className="text-steel-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="pb-3 pl-3">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        className="block py-2 text-sm text-sand-400 hover:text-ice-300"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block border-b border-steel-700/60 py-3 text-sm font-medium text-sand-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <div className="mt-5 flex flex-col gap-2.5">
            <a
              href={ctas.call.href}
              className="flex items-center justify-center gap-2 rounded-full bg-copper-500 px-4 py-3 font-display text-sm font-medium text-graphite-950"
            >
              <Phone size={16} weight="fill" />
              {ctas.call.label}
            </a>
            <Link
              to={ctas.estimate.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full border border-steel-600 px-4 py-3 font-display text-sm font-medium text-sand-100"
            >
              <ClipboardText size={16} />
              {ctas.estimate.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
