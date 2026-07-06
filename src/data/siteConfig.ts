// Central source of truth for business facts. Every number/claim here is
// traceable to CONTENT_COVERAGE.md. Do not hardcode phone/address/claims in
// components - import from here so a correction only happens in one place.

export const siteConfig = {
  name: "American Cooling And Heating",
  shortName: "American Cooling & Heating",
  founded: 1993,
  phone: "(480) 699-2516",
  phoneHref: "tel:+14806992516",
  email: "service@americancoolingandheating.com",
  // Source conflict (internal note, not shown publicly): the live site's
  // homepage/footer lists 3651 E Baseline Rd E-111, while its contact page
  // lists 745 N Gilbert Rd #124/276 (both Gilbert, AZ 85234). Per project
  // direction, the demo shows a single address (the contact-page one) and
  // the discrepancy is tracked only in CONTENT_COVERAGE.md.
  address: {
    line1: "745 N Gilbert Rd #124/276",
    city: "Gilbert",
    state: "AZ",
    zip: "85234",
  },
  serviceHoursNote: "24/7 emergency dispatch as scheduling and technician availability permit.",
  sameDayNote: "Same-day service in most cases when you call before early afternoon.",
  licenses: [
    { label: "AZ ROC K79", value: "License #183933", detail: "Residential, Commercial, Industrial HVAC and Refrigeration Contractor" },
    { label: "AZ ROC KB2", value: "License #238225", detail: "Residential, Commercial General Contractor" },
  ],
  socials: {
    facebook: "https://facebook.com",
    google: "https://google.com",
  },
} as const;

// The four canonical CTA actions used across the site. Every button on the
// site pulls from this list rather than inventing new labels, so "book me"
// always means the same thing in the same words wherever it appears.
export const ctas = {
  call: { label: `Call ${siteConfig.phone}`, href: siteConfig.phoneHref },
  schedule: { label: "Schedule Service", href: "/contact" },
  estimate: { label: "Request Free Estimate", href: "/contact" },
  financing: { label: "View Financing", href: "/specials/financing" },
} as const;

export type CtaKey = keyof typeof ctas;

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href: string;
  items: NavLink[];
};

export const primaryNav: (NavLink | NavGroup)[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    items: [
      { label: "24/7 AC Service", href: "/services/24-7-ac-service", description: "Fast dispatch, nights and weekends" },
      { label: "AC Repair", href: "/services/ac-repair", description: "All makes and models" },
      { label: "Installation & Replacement", href: "/services/installation-replacement", description: "Free estimates, matched systems" },
      { label: "Maintenance", href: "/services/maintenance", description: "Annual and semi-annual programs" },
      { label: "Residential HVAC", href: "/services/residential-hvac", description: "Homes across the Valley" },
      { label: "Commercial & Industrial HVAC", href: "/services/commercial-industrial-hvac", description: "Retail, hospitals, industrial" },
      { label: "Precision Cooling / CRAC", href: "/services/precision-cooling-crac", description: "Liebert data center cooling" },
      { label: "Cooling Towers", href: "/services/cooling-towers", description: "Towers and fluid coolers" },
    ],
  },
  {
    label: "Products & Brands",
    href: "/products",
    items: [
      { label: "Trane", href: "/products/trane" },
      { label: "Carrier", href: "/products/carrier" },
      { label: "Goodman", href: "/products/goodman" },
      { label: "Rheem", href: "/products/rheem" },
      { label: "Amana", href: "/products/amana" },
      { label: "York", href: "/products/york" },
      { label: "Other Major Brands", href: "/products/other-brands", description: "Lennox, Ruud, ClimateMaster and more" },
      { label: "Water Source Heat Pumps", href: "/products/water-source-heat-pumps" },
      { label: "Indoor Air Quality", href: "/products/indoor-air-quality" },
    ],
  },
  {
    label: "Specials & Financing",
    href: "/specials",
    items: [
      { label: "AC On Sale", href: "/specials/ac-on-sale" },
      { label: "Heat Pumps On Sale", href: "/specials/heat-pumps-on-sale" },
      { label: "Regions Bank Financing", href: "/specials/financing" },
      { label: "Senior Discounts", href: "/specials/senior-discount" },
      { label: "Military Discounts", href: "/specials/military-discount" },
    ],
  },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Reviews", href: "/reviews" },
  {
    label: "Resources",
    href: "/resources",
    items: [
      { label: "FAQs", href: "/resources/faqs" },
      { label: "Heat Pump Guide", href: "/resources/heat-pump-guide" },
      { label: "Glossary", href: "/resources/glossary" },
      { label: "Consumer Literature", href: "/resources/consumer-literature" },
      { label: "Videos", href: "/resources/videos" },
      { label: "Tips & News", href: "/resources/tips-news" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function isNavGroup(item: NavLink | NavGroup): item is NavGroup {
  return "items" in item;
}
