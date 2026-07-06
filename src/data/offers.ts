export type OfferPage = {
  slug: string;
  navLabel: string;
  headline: string;
  subhead: string;
  body: string;
  points: string[];
  externalLink?: { label: string; href: string };
};

export const offers: OfferPage[] = [
  {
    slug: "ac-on-sale",
    navLabel: "AC On Sale",
    headline: "Air Conditioning Systems On Sale",
    subhead: "Equipment inventory and factory pricing change often.",
    body: "Current air conditioner pricing depends on live inventory, factory rebates, and manufacturer promotions, so specifics aren't listed here. Call for what's available and priced right now.",
    points: ["Free in-home estimate before you commit", "Price match on written competitor bids", "Financing available through Regions Bank"],
  },
  {
    slug: "heat-pumps-on-sale",
    navLabel: "Heat Pumps On Sale",
    headline: "Heat Pumps On Sale",
    subhead: "Same equipment-driven pricing model as air conditioning.",
    body: "Heat pump pricing shifts with inventory and factory promotions the same way air conditioner pricing does. Ask about current heat pump deals when you call for an estimate.",
    points: ["Free in-home estimate before you commit", "Price match on written competitor bids", "Financing available through Regions Bank"],
  },
  {
    slug: "financing",
    navLabel: "Financing",
    headline: "Financing Through Regions Bank",
    subhead: "A traditional installment loan, applied for by phone.",
    body: "Financing for new installations and replacements is available through Regions Bank as a traditional installment loan. Call Regions directly, reference American Cooling And Heating's dealer number, tell them the amount you'd like to finance, and ask about the e-sign option to speed up approval.",
    points: [
      "Call Regions Bank financing at (888) 724-3530",
      "Give the dealer number: 1289, American Cooling And Heating",
      "Give the plan number: DRE2922, traditional installment loan",
      "Tell them the amount you want to finance",
      "Ask for the e-sign option to speed things up",
      "Multiple payment methods are also accepted directly for cash or card jobs",
    ],
    externalLink: { label: "Regions Bank Payment Estimator", href: "https://homeimprovement.rhif.regions.com/payment-estimator-tool" },
  },
  {
    slug: "senior-discount",
    navLabel: "Senior Discounts",
    headline: "Senior Discounts",
    subhead: "Ask when you schedule.",
    body: "A senior discount is available on qualifying service. Mention it when scheduling so it's applied to your estimate or invoice.",
    points: ["Applies to qualifying repair and installation work", "Combine with a free estimate on replacement systems"],
  },
  {
    slug: "military-discount",
    navLabel: "Military Discounts",
    headline: "Military Discounts",
    subhead: "For active duty, reserve, and veteran households.",
    body: "A military discount is available for active duty, reserve, and veteran households. Mention it when scheduling so it's applied to your estimate or invoice.",
    points: ["Applies to qualifying repair and installation work", "Combine with a free estimate on replacement systems"],
  },
];

export function getOfferBySlug(slug: string) {
  return offers.find((o) => o.slug === slug);
}
