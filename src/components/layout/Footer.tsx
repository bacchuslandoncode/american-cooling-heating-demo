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
    <footer className="border-t border-steel-700/60 bg-graphite-950">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
        <div className="lg:col-span-2">
          <img src={logo} alt="American Cooling And Heating" className="h-12 w-auto" width={1538} height={1000} />
          <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-steel-400">
            Residential, commercial, and industrial HVAC across the Phoenix Valley since {siteConfig.founded}.
            Licensed, bonded, and insured.
          </p>
          <div className="mt-5 space-y-2.5 text-sm">
            <a href={siteConfig.phoneHref} className="flex items-center gap-2.5 text-sand-100 hover:text-ice-300">
              <Phone size={16} className="text-copper-400" /> {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 text-sand-100 hover:text-ice-300">
              <EnvelopeSimple size={16} className="text-copper-400" /> {siteConfig.email}
            </a>
            <div className="flex items-start gap-2.5 text-steel-400">
              <MapPin size={16} className="mt-0.5 shrink-0 text-copper-400" />
              <span>
                {siteConfig.address.line1}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel-400">Company</h3>
          <ul className="mt-4 space-y-2.5">
            {companyLinks.map((c) => (
              <li key={c.href}>
                <Link to={c.href} className="text-sm text-sand-200 hover:text-ice-300">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel-400">Brands</h3>
          <ul className="mt-4 space-y-2.5">
            {brands.map((b) => (
              <li key={b.slug}>
                <Link to={`/products/${b.slug}`} className="text-sm text-sand-200 hover:text-ice-300">
                  {b.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel-400">Service Areas</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {serviceAreas.map((a) => (
              <li key={a.slug}>
                <Link to="/service-areas" className="text-sm text-sand-200 hover:text-ice-300">
                  {a.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel-400">Resources</h3>
          <ul className="mt-4 space-y-2.5">
            {resourceLinks.map((r) => (
              <li key={r.href}>
                <Link to={r.href} className="text-sm text-sand-200 hover:text-ice-300">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Divider />

      <div className="container-page flex flex-col-reverse items-center justify-between gap-4 py-6 text-xs text-steel-400 md:flex-row">
        <p>&copy; {new Date().getFullYear()} American Cooling And Heating. AZ ROC #183933 / #238225.</p>
        <div className="flex flex-wrap items-center gap-5">
          <Link to="/privacy-policy" className="hover:text-ice-300">Privacy Policy</Link>
          <Link to="/terms-of-use" className="hover:text-ice-300">Terms Of Use</Link>
          <Link to="/site-map" className="hover:text-ice-300">Site Map</Link>
          <Link to="/contact" className="hover:text-ice-300">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
