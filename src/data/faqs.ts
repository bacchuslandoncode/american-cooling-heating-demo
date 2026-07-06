export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "What is SEER?",
    answer:
      "Seasonal Energy Efficiency Rating. It measures air conditioning efficiency; the higher the SEER rating, the more efficient the unit.",
  },
  {
    question: "What does HSPF mean?",
    answer: "Heating Seasonal Performance Factor, a rating of heat pump heating efficiency. Higher ratings mean better performance.",
  },
  {
    question: "What does AFUE mean?",
    answer: "Annual Fuel Utilization Efficiency, used to rate gas furnaces. The higher the AFUE rating, the more efficient the unit.",
  },
  {
    question: "Should the outdoor unit be covered in winter?",
    answer: "No. Both heat pumps and air conditioners are built to sit outside year-round without a winter cover.",
  },
  {
    question: "Should the thermostat fan be set to Auto or On?",
    answer:
      "Auto is more efficient. On keeps air moving and filtering constantly and can even out temperatures, at the cost of some efficiency.",
  },
  {
    question: "How close can shrubs or plants be to the outdoor unit?",
    answer: "Small shrubs and plants should stay at least 18 inches away. Larger plants must not block airflow into the unit.",
  },
  {
    question: "If the outdoor unit needs replacing, does the indoor unit too?",
    answer: "Usually, yes. Systems are engineered to work as matched pairs, so mismatched age or capacity costs efficiency.",
  },
  {
    question: "How do I know what size unit my house needs?",
    answer: "Square footage, climate, window count and orientation, insulation, and occupancy all factor into correct sizing, not just square footage alone.",
  },
  {
    question: "What's the difference between a split system and a package unit?",
    answer: "A split system separates indoor and outdoor components. A package unit contains everything in one outdoor cabinet.",
  },
];
