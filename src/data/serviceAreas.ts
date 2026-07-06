export type ServiceRegion = "East Valley" | "West Valley" | "Central Phoenix";

export type ServiceArea = {
  city: string;
  slug: string;
  region: ServiceRegion;
  note?: string;
};

export const serviceAreas: ServiceArea[] = [
  { city: "Gilbert", slug: "gilbert", region: "East Valley", note: "Home base" },
  { city: "Mesa", slug: "mesa", region: "East Valley" },
  { city: "Tempe", slug: "tempe", region: "East Valley" },
  { city: "Chandler", slug: "chandler", region: "East Valley" },
  { city: "Scottsdale", slug: "scottsdale", region: "East Valley" },
  { city: "Queen Creek", slug: "queen-creek", region: "East Valley" },
  { city: "Phoenix", slug: "phoenix", region: "Central Phoenix", note: "Phoenix Metro" },
  { city: "Glendale", slug: "glendale", region: "West Valley" },
  { city: "Peoria", slug: "peoria", region: "West Valley" },
  { city: "Sun City", slug: "sun-city", region: "West Valley" },
];

export const regions: ServiceRegion[] = ["East Valley", "Central Phoenix", "West Valley"];

export const serviceAreaNote =
  "Valleywide service across the Phoenix Metro area and surrounding Arizona cities and towns.";
