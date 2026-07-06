import type { PhotoSpec } from "@/components/ui/PhotoFrame";
import technicianPressureTest from "@/assets/images/hvac-technician-pressure-test.jpg";
import modernHeatPumpInstall from "@/assets/images/modern-heat-pump-installation.jpg";
import agingMiniSplits from "@/assets/images/aging-mini-split-condensers.jpg";
import windowAcIndoor from "@/assets/images/window-ac-indoor-cooling.jpg";
import heatingRadiatorDetail from "@/assets/images/heating-radiator-detail.jpg";

export type ServiceSection =
  | { type: "keyPoints"; heading?: string; items: string[] }
  | { type: "stats"; heading?: string; items: { value: string; label: string }[] }
  | {
      type: "split";
      heading: string;
      body: string;
      bullets?: string[];
      mediaLabel: string;
      image?: PhotoSpec;
      reverse?: boolean;
    }
  | { type: "process"; heading: string; steps: { title: string; body: string }[] }
  | { type: "equipmentGrid"; heading: string; items: string[] }
  | {
      type: "comparison";
      heading: string;
      left: { title: string; points: string[] };
      right: { title: string; points: string[] };
    };

export type ServiceCategory = "residential" | "commercial" | "precision";

export type ServicePage = {
  slug: string;
  navLabel: string;
  category: ServiceCategory;
  icon: "bolt" | "wrench" | "swap" | "gauge" | "house" | "buildings" | "cpu" | "drop";
  headline: string;
  kicker: string;
  subhead: string;
  summary: string;
  sections: ServiceSection[];
};

export const services: ServicePage[] = [
  {
    slug: "24-7-ac-service",
    navLabel: "24/7 AC Service",
    category: "residential",
    icon: "bolt",
    kicker: "Emergency Dispatch",
    headline: "Fast AC Service, Day Or Night",
    subhead:
      "When a system goes down in triple-digit heat, response time matters more than anything else. Emergency dispatch is available 24 hours a day, seven days a week, as scheduling and technician availability permit.",
    summary: "Round-the-clock dispatch for no-cool and no-heat emergencies across the Valley.",
    sections: [
      {
        type: "stats",
        items: [
          { value: "24/7", label: "Emergency dispatch, availability permitting" },
          { value: "1993", label: "Serving the Valley since" },
          { value: "3 yr", label: "Parts and labor warranty on repairs" },
        ],
      },
      {
        type: "split",
        heading: "One Call, One Number",
        body: "There is no separate emergency line to remember. The same technicians who handle scheduled maintenance answer after-hours calls, so whoever shows up already knows how to work on residential and commercial systems, all makes and models.",
        bullets: [
          "Nights and weekends, not just business hours",
          "Residential and commercial dispatch from the same team",
          "Upfront diagnosis before any work begins",
        ],
        mediaLabel: "Technician arriving on an after-hours service call",
        image: {
          src: technicianPressureTest,
          alt: "Technician reading refrigerant pressure gauges while diagnosing a cooling system",
          position: "56% 55%",
        },
      },
      {
        type: "process",
        heading: "What Happens When You Call",
        steps: [
          { title: "Describe the problem", body: "No cool air, no heat, strange noise, tripped breaker. A quick description helps route the right technician and parts." },
          { title: "Get a dispatch window", body: "You'll get a realistic arrival window based on current call volume and technician location, not a vague \"sometime today.\"" },
          { title: "Diagnosis, then a number", body: "The technician diagnoses the fault and gives you a price before any repair starts." },
        ],
      },
    ],
  },
  {
    slug: "ac-repair",
    navLabel: "AC Repair",
    category: "residential",
    icon: "wrench",
    kicker: "Repair",
    headline: "AC And Heat Pump Repair, All Makes And Models",
    subhead:
      "From a tripped capacitor to a failed compressor, repairs are diagnosed first and quoted flat-rate and up front before any work begins. Every repair is backed by a three-year parts and labor warranty.",
    summary: "Diagnosis-first, flat-rate repair on any brand of air conditioner, heat pump, or furnace.",
    sections: [
      {
        type: "keyPoints",
        heading: "Common Repair Calls",
        items: [
          "No cool air or weak airflow",
          "Refrigerant leaks and low charge",
          "Failed capacitors, contactors, and motors",
          "Compressor diagnosis (with free second opinion before replacement)",
          "Thermostat and control board faults",
          "Frozen evaporator coils",
        ],
      },
      {
        type: "process",
        heading: "Diagnostic Process",
        steps: [
          { title: "Inspect", body: "Airflow, refrigerant charge, electrical components, and controls are checked against manufacturer spec." },
          { title: "Quote", body: "You get a flat-rate price up front and a plain explanation of what failed, before any work starts." },
          { title: "Repair", body: "Work is completed the same visit when parts are on the truck; every repair carries the three-year parts and labor warranty." },
        ],
      },
      {
        type: "equipmentGrid",
        heading: "Serviced Regardless Of Brand",
        items: ["Trane", "Carrier", "Goodman", "Rheem", "Amana", "York", "Lennox", "Ruud"],
      },
    ],
  },
  {
    slug: "installation-replacement",
    navLabel: "Installation & Replacement",
    category: "residential",
    icon: "swap",
    kicker: "Installation & Replacement",
    headline: "New System Installation And Replacement",
    subhead:
      "Every replacement starts with a free in-home estimate and a system sized to the house, not just the unit that's already there. Installation workmanship is warrantied for the life of the unit.",
    summary: "Free estimates, matched-system sizing, and a lifetime workmanship warranty.",
    sections: [
      {
        type: "comparison",
        heading: "Repair Or Replace",
        left: {
          title: "Repair Usually Makes Sense When",
          points: [
            "The system is under 10 years old",
            "This is the first major repair",
            "The repair cost is a small fraction of replacement cost",
          ],
        },
        right: {
          title: "Replacement Is Worth Discussing When",
          points: [
            "The compressor has failed on an older system",
            "Repairs are becoming frequent or expensive",
            "Efficiency gains would meaningfully lower summer bills",
          ],
        },
      },
      {
        type: "split",
        heading: "Sized And Matched, Not Guessed",
        body: "Replacement systems are sized to the home's square footage, insulation, and duct condition, and matched indoor-to-outdoor per manufacturer spec so the efficiency rating on the sticker is the efficiency rating you actually get.",
        bullets: [
          "Free in-home estimate before any commitment",
          "Weekend and after-hours installation available",
          "Financing available through Regions Bank",
        ],
        mediaLabel: "New condensing unit set on a residential pad",
        image: {
          src: modernHeatPumpInstall,
          alt: "Newly installed heat pump condenser set beside a home's exterior wall",
          position: "45% 55%",
        },
        reverse: true,
      },
      {
        type: "keyPoints",
        heading: "Covered On Every Installation",
        items: [
          "Lifetime workmanship warranty on the installation",
          "Manufacturer equipment warranty registration",
          "Code-compliant electrical and refrigerant line work",
          "Old equipment removal",
        ],
      },
    ],
  },
  {
    slug: "maintenance",
    navLabel: "Maintenance",
    category: "residential",
    icon: "gauge",
    kicker: "Maintenance",
    headline: "Maintenance That Prevents The 2 P.M. Breakdown",
    subhead:
      "An annual or semi-annual maintenance visit checks the items that quietly drive up energy bills and cause mid-summer failures, before they fail.",
    summary: "Annual and semi-annual maintenance visits for residential and light commercial systems.",
    sections: [
      {
        type: "stats",
        items: [
          { value: "10-25%", label: "Typical energy savings from proper maintenance" },
          { value: "$200", label: "Added cost per 10,000 CFM from a dirty filter alone" },
          { value: "2x", label: "Recommended visits per year (spring and fall)" },
        ],
      },
      {
        type: "keyPoints",
        heading: "What A Maintenance Visit Covers",
        items: [
          "Airflow measured against manufacturer spec",
          "Refrigerant charge checked",
          "Electrical connections and capacitors inspected",
          "Compliance with national and local code and electrical standards",
        ],
      },
      {
        type: "split",
        heading: "Built Around The Arizona Heat Load",
        body: "Systems here run longer and harder than almost anywhere else in the country. Maintenance timed before summer and before winter catches the wear that a mild climate would let slide, before it looks like this.",
        mediaLabel: "Aging outdoor condensing units showing years of wear",
        image: {
          src: agingMiniSplits,
          alt: "Aging outdoor condensing units mounted on a building wall, showing years of wear",
          position: "center 40%",
        },
      },
    ],
  },
  {
    slug: "residential-hvac",
    navLabel: "Residential HVAC",
    category: "residential",
    icon: "house",
    kicker: "Residential",
    headline: "Residential Air Conditioning, Heating, And Heat Pumps",
    subhead:
      "Repair, installation, and maintenance for homes across the Valley, on any brand of equipment, with the same warranty terms whether it's a Tuesday afternoon or a Saturday night.",
    summary: "The full residential lineup: repair, install, replacement, and maintenance, under one warranty.",
    sections: [
      {
        type: "equipmentGrid",
        heading: "Residential Services",
        items: ["AC Repair", "Heat Pump Repair", "Furnace Repair", "Installation & Replacement", "Maintenance Plans", "Indoor Air Quality"],
      },
      {
        type: "keyPoints",
        heading: "Why Homeowners Call",
        items: [
          "Free estimates on new installation and replacement",
          "Senior and military discounts",
          "Financing available through Regions Bank",
          "Three-year parts and labor warranty on repairs",
        ],
      },
      {
        type: "split",
        heading: "Furnaces Get The Same Attention As AC",
        body: "Winters in the Valley are short, but a furnace that hasn't been checked in a year is the reason a cold snap turns into a no-heat call. Furnace repair and maintenance follow the same diagnose-first, flat-rate approach as cooling work.",
        mediaLabel: "Residential heating equipment detail",
        image: {
          src: heatingRadiatorDetail,
          alt: "Close-up detail of a residential heating radiator",
          position: "center 82%",
          tone: true,
        },
      },
      {
        type: "split",
        heading: "Window Units, Split Systems, Or Heat Pumps",
        body: "Arizona homes run every configuration, from window and through-wall units to split systems with a separate air handler. Technicians work on all of them, on all major brands.",
        mediaLabel: "Residential window air conditioning unit",
        image: {
          src: windowAcIndoor,
          alt: "Residential through-the-wall air conditioning unit installed beneath a window",
          position: "center 45%",
        },
        reverse: true,
      },
    ],
  },
  {
    slug: "commercial-industrial-hvac",
    navLabel: "Commercial & Industrial HVAC",
    category: "commercial",
    icon: "buildings",
    kicker: "Commercial & Industrial",
    headline: "Commercial And Industrial HVAC Across The Valley",
    subhead:
      "Retail centers, restaurants, banks, hospitals, and industrial facilities run on tighter uptime margins than a house. Service is scoped around minimizing downtime, not just fixing the unit.",
    summary: "Rooftop units, chillers, and process cooling for retail, hospitality, healthcare, government, and industrial sites.",
    sections: [
      {
        type: "equipmentGrid",
        heading: "Facility Types Served",
        items: [
          "Data Centers",
          "Telecommunications",
          "Industrial Facilities",
          "Hospitals",
          "Municipalities",
          "Federal Organizations",
          "Retail Centers",
          "Business Centers",
          "Churches",
          "Restaurants",
          "Banks",
          "Civic Centers",
        ],
      },
      {
        type: "keyPoints",
        heading: "Equipment In Scope",
        items: [
          "Rooftop package units and split systems",
          "Centrifugal, reciprocating, and screw chillers",
          "Air handlers, compressors, and motors",
          "Control systems and building automation tie-ins",
          "Thermal analysis and motor bearing inspection",
        ],
      },
      {
        type: "split",
        heading: "Custom Engineering When The Off-The-Shelf Answer Doesn't Fit",
        body: "Not every facility fits a standard rooftop unit. Custom design and engineering work is available for buildings with unusual load, layout, or process cooling requirements.",
        mediaLabel: "Rooftop package unit bank on a commercial building",
      },
    ],
  },
  {
    slug: "precision-cooling-crac",
    navLabel: "Precision Cooling / CRAC",
    category: "precision",
    icon: "cpu",
    kicker: "Precision Cooling",
    headline: "Liebert Precision Cooling And CRAC Systems",
    subhead:
      "Data centers and server rooms fail on a different clock than a house. Installation, repair, and support for Liebert precision cooling equipment is available 24/7 for mission-critical spaces.",
    summary: "Installation, repair, and support for Liebert CRAC and precision cooling equipment.",
    sections: [
      {
        type: "equipmentGrid",
        heading: "Liebert Equipment Supported",
        items: [
          "Liebert CW (chilled water, remote monitoring)",
          "Liebert iCOM (manages up to 32 units)",
          "Liebert DS (dual-circuit data center cooling)",
          "Liebert XD (targeted heat-density cooling)",
          "Liebert DCW (water-based rack enclosure)",
          "Liebert DCP (water-based pumping unit)",
        ],
      },
      {
        type: "split",
        heading: "Built Around Uptime, Not Just Temperature",
        body: "Precision cooling is about tight humidity and temperature control at scale, with redundancy that keeps a room stable even while a unit is being serviced.",
        bullets: [
          "24/7 support for mission-critical spaces",
          "Scalable to room growth without a full system replacement",
          "Lower energy cost versus comfort-cooling retrofits",
        ],
        mediaLabel: "Precision cooling CRAC unit inside a data center row",
        reverse: true,
      },
    ],
  },
  {
    slug: "cooling-towers",
    navLabel: "Cooling Towers",
    category: "precision",
    icon: "drop",
    kicker: "Cooling Towers & Fluid Coolers",
    headline: "Cooling Towers And Fluid Coolers",
    subhead:
      "Two different jobs get confused constantly: a cooling tower rejects heat from a chiller, a fluid cooler rejects heat from a water source heat pump loop. Both get installed, serviced, and repaired.",
    summary: "Evaporative cooling towers and closed-circuit fluid coolers, installed and serviced.",
    sections: [
      {
        type: "comparison",
        heading: "Cooling Tower Vs. Fluid Cooler",
        left: {
          title: "Cooling Tower",
          points: ["Rejects unwanted heat from a chiller", "Evaporative, open or closed-circuit", "Common on larger commercial chiller plants"],
        },
        right: {
          title: "Fluid Cooler",
          points: ["Rejects unwanted heat from a water source heat pump loop", "Closed-circuit dry or hybrid design", "Common on distributed WSHP systems"],
        },
      },
      {
        type: "equipmentGrid",
        heading: "Brands Serviced",
        items: ["Baltimore Air Coil (BAC)", "Marley", "Evapco", "Recold", "Frigid Coil", "CTS", "Imeco"],
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function servicesByCategory(category: ServiceCategory) {
  return services.filter((s) => s.category === category);
}
