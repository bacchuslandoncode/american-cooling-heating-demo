import { Link } from "react-router-dom";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { services } from "@/data/services";
import { brands } from "@/data/products";
import { offers } from "@/data/offers";

const groups: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Main",
    links: [
      { label: "Home", href: "/" },
      { label: "Service Areas", href: "/service-areas" },
      { label: "Reviews", href: "/reviews" },
      { label: "About", href: "/about" },
      { label: "Quality Guarantee", href: "/quality-guarantee" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [{ label: "Services Overview", href: "/services" }, ...services.map((s) => ({ label: s.navLabel, href: `/services/${s.slug}` }))],
  },
  {
    title: "Products & Brands",
    links: [
      { label: "Products Overview", href: "/products" },
      ...brands.map((b) => ({ label: b.name, href: `/products/${b.slug}` })),
      { label: "Water Source Heat Pumps", href: "/products/water-source-heat-pumps" },
      { label: "Indoor Air Quality", href: "/products/indoor-air-quality" },
    ],
  },
  {
    title: "Specials & Financing",
    links: [{ label: "Specials Overview", href: "/specials" }, ...offers.map((o) => ({ label: o.navLabel, href: `/specials/${o.slug}` }))],
  },
  {
    title: "Resources",
    links: [
      { label: "Resources Overview", href: "/resources" },
      { label: "FAQs", href: "/resources/faqs" },
      { label: "Heat Pump Guide", href: "/resources/heat-pump-guide" },
      { label: "Glossary", href: "/resources/glossary" },
      { label: "Consumer Literature", href: "/resources/consumer-literature" },
      { label: "Videos", href: "/resources/videos" },
      { label: "Tips & News", href: "/resources/tips-news" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms Of Use", href: "/terms-of-use" },
      { label: "Site Map", href: "/site-map" },
    ],
  },
];

export function SiteMap() {
  return (
    <div>
      <Breadcrumbs trail={[{ label: "Site Map" }]} />
      <PageHero kicker="Site Map" title="Every Page, In One Place" subhead="A full index of the site, grouped the way the navigation is." />
      <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3 md:py-20">
        {groups.map((group) => (
          <div key={group.title}>
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-steel-400">{group.title}</h2>
            <ul className="mt-4 space-y-2.5 border-t border-steel-700/60 pt-4">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-sand-200 hover:text-ice-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
