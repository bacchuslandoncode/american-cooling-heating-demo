import { Link } from "react-router-dom";
import { Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import { siteConfig } from "@/data/siteConfig";
import { brands } from "@/data/products";
import { serviceAreas } from "@/data/serviceAreas";
import { Divider } from "@/components/ui/Panel";
import logo from "@/assets/images/acg-logo-2017.webp";

const resourceLinks = [
  { label: "FAQs", href: "/resources/faqs" },
  { label: "Heat Pump Guide", href: "/resources/heat-pump-guide" },
  { label: "Glossary", href: "/resources/glossary" },
  { label: "Consumer Literature", href: "/resources/consumer-literature" },
  { label: "Videos", href: "/resources/videos" },
  { label: "Tips & News", href: "/resources/tips-news" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Quality Guarantee", href: "/quality-guarantee" },
  { label: "Reviews", href: "/reviews" },
  { label: "Specials & Financing", href: "/specials" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-sand">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
        <div className="lg:col-span-2">
          <img src={logo} alt="American Cooling And Heating" className="h-12 w-auto" width={1538} height={1000} />
          <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-ink/70">
            Residential, commercial, and industrial HVAC across the Phoenix Valley since {siteConfig.founded}.
            Licensed, bonded, and insured.
          </p>
          <div className="mt-5 space-y-2.5 text-sm">
            <a href={siteConfig.phoneHref} className="flex items-center gap-2.5 text-ink hover:text-brand">
              <Phone size={16} className="text-brand" /> {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 text-ink hover:text-brand">
              <EnvelopeSimple size={16} className="text-brand" /> {siteConfig.email}
            </a>
            <div className="flex items-start gap-2.5 text-ink/70">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand" />
              <span>
                {siteConfig.address.line1}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/70">Company</h3>
          <ul className="mt-4 space-y-2.5">
            {companyLinks.map((c) => (
              <li key={c.href}>
                <Link to={c.href} className="text-sm text-ink hover:text-brand">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/70">Brands</h3>
          <ul className="mt-4 space-y-2.5">
            {brands.map((b) => (
              <li key={b.slug}>
                <Link to={`/products/${b.slug}`} className="text-sm text-ink hover:text-brand">
                  {b.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/70">Service Areas</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {serviceAreas.map((a) => (
              <li key={a.slug}>
                <Link to="/service-areas" className="text-sm text-ink hover:text-brand">
                  {a.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/70">Resources</h3>
          <ul className="mt-4 space-y-2.5">
            {resourceLinks.map((r) => (
              <li key={r.href}>
                <Link to={r.href} className="text-sm text-ink hover:text-brand">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Divider />

      <div className="container-page flex flex-col-reverse items-center justify-between gap-4 py-6 text-xs text-ink/70 md:flex-row">
        <p>&copy; {new Date().getFullYear()} American Cooling And Heating. AZ ROC #183933 / #238225.</p>
        <div className="flex flex-wrap items-center gap-5">
          <Link to="/privacy-policy" className="hover:text-brand">Privacy Policy</Link>
          <Link to="/terms-of-use" className="hover:text-brand">Terms Of Use</Link>
          <Link to="/site-map" className="hover:text-brand">Site Map</Link>
          <Link to="/contact" className="hover:text-brand">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
