export type ProductLine = { name: string; detail: string };

export type Brand = {
  slug: string;
  name: string;
  kicker: string;
  scope: "Residential" | "Commercial" | "Residential & Commercial";
  summary: string;
  productLines: ProductLine[];
};

export const brands: Brand[] = [
  {
    slug: "trane",
    name: "Trane",
    kicker: "Residential & Commercial",
    scope: "Residential & Commercial",
    summary:
      "Trane covers both sides of the business here: residential furnaces and package systems for homes, and Precedent, Voyager, Odyssey, and IntelliPak lines for commercial rooftops and packaged units.",
    productLines: [
      { name: "80/90/95 Gas Furnaces", detail: "Staged efficiency tiers for residential heating" },
      { name: "13/14/16 SEER Package Systems", detail: "Residential package units" },
      { name: "High-Efficiency Air Handlers", detail: "Matched to Trane condensing units" },
      { name: "Thermostats & Advanced Controls", detail: "Including Nexia connected controls" },
      { name: "Precedent & Voyager", detail: "Light commercial rooftop units, 3-25 tons" },
      { name: "Odyssey", detail: "Commercial split systems" },
      { name: "IntelliPak", detail: "Large commercial packaged units" },
    ],
  },
  {
    slug: "carrier",
    name: "Carrier",
    kicker: "Residential & Commercial",
    scope: "Residential & Commercial",
    summary:
      "Carrier's residential lineup covers AC, heat pumps, furnaces, and indoor air quality; the commercial catalog runs from small rooftop units up to 150-ton packaged systems.",
    productLines: [
      { name: "High-Efficiency Central Air Conditioners", detail: "Residential cooling" },
      { name: "Gas Furnaces & Heat Pumps", detail: "Residential heating" },
      { name: "Indoor Air Quality Products", detail: "Filtration and controls" },
      { name: "WeatherMaker, WeatherMaster, Centurion", detail: "Commercial rooftop units, 3-27.5 tons" },
      { name: "Gemini", detail: "Commercial split systems" },
      { name: "WeatherExpert", detail: "Large commercial units, 75-150 tons" },
      { name: "Aero & Airovision", detail: "Commercial air-handling units" },
    ],
  },
  {
    slug: "goodman",
    name: "Goodman",
    kicker: "Residential",
    scope: "Residential",
    summary:
      "Straightforward, dependable residential systems: air conditioners, heat pumps, and package units serviced and installed on new and existing homes.",
    productLines: [
      { name: "Air Conditioners", detail: "Residential split-system cooling" },
      { name: "Heat Pumps", detail: "Residential heating and cooling" },
      { name: "Package Units", detail: "Self-contained residential systems" },
    ],
  },
  {
    slug: "rheem",
    name: "Rheem",
    kicker: "Residential",
    scope: "Residential",
    summary: "High-efficiency air conditioners, heat pumps, and package units for residential installation and repair.",
    productLines: [
      { name: "High-Efficiency Air Conditioners", detail: "Residential cooling" },
      { name: "High-Efficiency Heat Pumps", detail: "Residential heating and cooling" },
      { name: "Package Units", detail: "Self-contained residential systems" },
    ],
  },
  {
    slug: "amana",
    name: "Amana",
    kicker: "Residential",
    scope: "Residential",
    summary:
      "The deepest residential catalog carried: Distinctions and Premium tiers across cooling, heating, and packaged systems, plus a full set of comfort and air quality accessories.",
    productLines: [
      { name: "Distinctions & Premium Air Conditioners", detail: "Two efficiency tiers" },
      { name: "Distinctions & Premium Heat Pumps", detail: "Two efficiency tiers" },
      { name: "Packaged Gas/Electric & Dual-Fuel Units", detail: "Self-contained systems" },
      { name: "Gas Furnaces", detail: "Distinctions and Premium tiers" },
      { name: "Air Handlers & Evaporator Coils", detail: "Matched components" },
      { name: "ComfortNet Control & Digital Thermostats", detail: "System controls" },
      { name: "UV Purification, Ventilation, Humidification, Filtration", detail: "Indoor air quality accessories" },
    ],
  },
  {
    slug: "york",
    name: "York",
    kicker: "Residential",
    scope: "Residential",
    summary: "York air conditioning and heat pump systems, installed and serviced.",
    productLines: [
      { name: "Air Conditioning Systems", detail: "Residential cooling" },
      { name: "Heat Pump Systems", detail: "Residential heating and cooling" },
    ],
  },
  {
    slug: "other-brands",
    name: "Other Major Brands",
    kicker: "Residential & Commercial",
    scope: "Residential & Commercial",
    summary:
      "Beyond the primary lineup, these residential, commercial, and precision-cooling brands round out what's serviced and installed.",
    productLines: [
      { name: "Lennox", detail: "Air conditioning service" },
      { name: "Ruud", detail: "Air conditioning repair service" },
      { name: "American Standard", detail: "Residential air conditioning and heating" },
      { name: "Day & Night", detail: "Residential air conditioning and heating" },
      { name: "Intertherm", detail: "Residential heating and cooling equipment" },
      { name: "ClimateMaster", detail: "Geothermal and water source heat pumps" },
      { name: "Liebert", detail: "Precision cooling and CRAC systems" },
      { name: "Baltimore Air Coil (BAC)", detail: "Cooling towers and fluid coolers" },
      { name: "Marley", detail: "Cooling towers and fluid coolers" },
      { name: "Evapco", detail: "Cooling towers and fluid coolers" },
    ],
  },
];

export const waterSourceHeatPumps = {
  headline: "Water Source Heat Pumps",
  summary:
    "A water source heat pump works the same way an air-to-air heat pump does, except it exchanges heat with a water loop instead of outdoor air. That makes it a fit for buildings with access to a fluid cooler, well, or another water source.",
  brandsServiced: ["Carrier", "ClimateMaster"],
  points: [
    "Commercial packaged water source heat pump installation, replacement, and maintenance",
    "Statewide service for geothermal and water-loop systems",
    "Pairs with fluid coolers for heat rejection",
  ],
};

export const indoorAirQuality = {
  headline: "Indoor Air Quality",
  summary:
    "Filtration, UV purification, ventilation, and humidity control, sourced primarily from the Amana and Carrier accessory lines and installed alongside a new system or retrofit onto an existing one.",
  products: [
    { name: "UV Purification", detail: "Amana ultraviolet air treatment" },
    { name: "Ventilation", detail: "Fresh air exchange for tighter modern homes" },
    { name: "Humidification", detail: "Whole-home humidity control" },
    { name: "Air Filtration", detail: "Amana and Carrier filtration products" },
    { name: "Carrier Indoor Air Quality Products", detail: "Filtration and control accessories" },
  ],
};
