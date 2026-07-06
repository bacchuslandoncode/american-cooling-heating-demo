export type TrustBadge = {
  label: string;
  sub?: string;
  icon: "shield" | "seal" | "clock" | "certificate" | "check" | "gauge";
};

export const trustBadges: TrustBadge[] = [
  { label: "Since 1993", sub: "Based in Gilbert, Arizona", icon: "clock" },
  { label: "BBB A+ Rated", sub: "Better Business Bureau", icon: "seal" },
  { label: "AZ ROC Complaint Free", sub: "License #183933 / #238225", icon: "shield" },
  { label: "Licensed, Bonded, Insured", icon: "certificate" },
  { label: "3-Year Repair Warranty", sub: "Parts and labor", icon: "check" },
  { label: "Lifetime Install Warranty", sub: "Workmanship, for the life of the unit", icon: "gauge" },
  { label: "NATE Certified Technicians", icon: "certificate" },
];

export const warranties = {
  repair: {
    title: "Three-Year Parts And Labor Warranty",
    body: "Every repair carries a three-year warranty on parts and labor. If the same component fails inside that window, it's replaced at no additional cost and the three-year clock restarts on the new part.",
  },
  install: {
    title: "Lifetime Workmanship Warranty",
    body: "Installation workmanship is warrantied for the life of the unit, on top of the manufacturer's equipment warranty.",
  },
  estimate: {
    title: "Free Estimates On Replacement",
    body: "New installations and full-system replacements start with a free, in-home estimate.",
  },
  secondOpinion: {
    title: "Free Second Opinion On Compressor Replacement",
    body: "Told you need a new compressor? Get a free second opinion before you approve the biggest-ticket repair in HVAC.",
  },
  priceMatch: {
    title: "Price Match",
    body: "Bring a written bid from a licensed competitor and American Cooling And Heating will match it, or in most cases beat it.",
  },
};
