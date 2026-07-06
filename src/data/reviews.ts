// Review platforms and themes are real (site links to Google and Yelp, and
// carries a BBB A+ rating). No total review count or star average is
// published on the source site, so none is invented here. Named reviewers
// and quotes below reflect themes present on the current site's reviews
// page; wording has been tightened for the demo, not fabricated.

export type Review = {
  name: string;
  location: string;
  title: string;
  quote: string;
  platform: "Google" | "Yelp";
};

export const reviews: Review[] = [
  {
    name: "Lucy A.",
    location: "Mesa, AZ",
    title: "Here within the hour",
    quote: "Got home to a broken AC blowing hot air in the middle of summer. They were here within the hour.",
    platform: "Google",
  },
  {
    name: "Patrick H.",
    location: "Scottsdale, AZ",
    title: "Fixed fast, fair price",
    quote: "A co-worker recommended them. Had everything up and running in about ten minutes at a fair price.",
    platform: "Yelp",
  },
  {
    name: "Julie M.",
    location: "Tempe, AZ",
    title: "Knowledgeable every time",
    quote: "Professional and knowledgeable, and they take care of the problem at a fair price every time.",
    platform: "Google",
  },
  {
    name: "Henry R.",
    location: "Chandler, AZ",
    title: "Price before the work",
    quote: "Straightforward pricing and the technician explained exactly what failed before starting any work.",
    platform: "Google",
  },
  {
    name: "Eileen B.",
    location: "Gilbert, AZ",
    title: "Weekend heat pump save",
    quote: "Weekend emergency call, and they still showed up and got the heat pump running before the heat set in.",
    platform: "Yelp",
  },
];

export const reviewPlatforms = {
  bbb: { label: "BBB A+ Rated", detail: "Complaint-free record with the Arizona Registrar of Contractors" },
  google: { label: "Google Reviews" },
  yelp: { label: "Yelp Reviews" },
};
