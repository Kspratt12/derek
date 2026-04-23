export type City = {
  slug: string;
  name: string;
  fullName: string;
  county: string;
  headline: string;
  intro: string;
  neighborhoods: string[];
  commuterNote: string;
  localScenario: string;
  driveContext: string;
};

export const cities: City[] = [
  {
    slug: "raleigh",
    name: "Raleigh",
    fullName: "Raleigh, NC",
    county: "Wake County",
    headline: "Mobile Mechanic in Raleigh, NC",
    intro:
      "Derek covers all of Raleigh from North Hills and Five Points down through Cameron Village, Boylan Heights, and the 540 beltline. If you're inside 440 or along Capital Boulevard, he's usually a short drive from wherever your car gave up.",
    neighborhoods: [
      "North Hills",
      "Five Points",
      "Cameron Village",
      "Downtown Raleigh",
      "North Raleigh",
      "Brier Creek",
      "Glenwood South",
      "Boylan Heights",
    ],
    commuterNote:
      "Raleigh commuters can't afford to sit in a waiting room when a car won't start on a Tuesday morning. Derek shows up at your house or office parking lot and handles it where the vehicle sits.",
    localScenario:
      "A common call: a professional in North Raleigh notices the check engine light on their way into downtown, schedules Derek for lunch hour, and gets back on the road the same afternoon. No rental car, no rideshare, no wasted PTO.",
    driveContext: "serving all of Wake County from Raleigh",
  },
  {
    slug: "clayton",
    name: "Clayton",
    fullName: "Clayton, NC",
    county: "Johnston County",
    headline: "Mobile Mechanic in Clayton, NC",
    intro:
      "Clayton has grown fast, and a lot of residents commute up US-70 or I-40 into Raleigh every day. When a car breaks down, the nearest dealership is usually 20+ miles away. Derek covers Flowers Plantation, downtown Clayton, and everything off the 42 and 70 corridors.",
    neighborhoods: [
      "Flowers Plantation",
      "Downtown Clayton",
      "Riverwood",
      "Glen Laurel",
      "Portofino",
      "Pine Hollow",
    ],
    commuterNote:
      "Most Clayton commutes run 30-45 minutes each way. A breakdown on US-70 at 7am isn't just an inconvenience, it's a missed workday. Derek prioritizes Clayton emergency calls.",
    localScenario:
      "A typical call: a homeowner in Flowers Plantation schedules a Saturday brake job. Derek pulls into the driveway with rotors and pads, handles it in the garage, and the family has the car back by afternoon without anyone leaving the neighborhood.",
    driveContext: "serving Clayton, Flowers Plantation, and the US-70 corridor",
  },
  {
    slug: "garner",
    name: "Garner",
    fullName: "Garner, NC",
    county: "Wake County",
    headline: "Mobile Mechanic in Garner, NC",
    intro:
      "Garner sits right on I-40 south of Raleigh, which means a lot of short commutes and a lot of work trucks. Derek covers White Oak, Old Garner Road, and the neighborhoods around Lake Benson. Fleet clients in Garner get priority scheduling because downtime hits small businesses hardest here.",
    neighborhoods: [
      "White Oak",
      "Lake Benson",
      "Cleveland Road",
      "Timber Drive",
      "Greenfield Parkway",
      "Old Garner Road",
    ],
    commuterNote:
      "Garner is small enough that word travels fast. Derek's business here runs mostly on referrals from neighbors and small business owners who've used him before.",
    localScenario:
      "Common Garner call: a contractor's work truck won't start on a Monday morning. Derek shows up at the lot by 8am, diagnoses a failed starter, has the truck running before the first job of the day.",
    driveContext: "serving Garner, White Oak, and the I-40 south corridor",
  },
  {
    slug: "smithfield",
    name: "Smithfield",
    fullName: "Smithfield, NC",
    county: "Johnston County",
    headline: "Mobile Mechanic in Smithfield, NC",
    intro:
      "Smithfield is the Johnston County seat and sits right on I-95, which means a lot of trucks, a lot of travel, and a lot of vehicles that break down far from a regular shop. Derek covers Smithfield, Selma, and the rural stretches east and south of town.",
    neighborhoods: [
      "Downtown Smithfield",
      "Selma",
      "Brogden",
      "Four Oaks area",
      "Pine Level",
      "Outlets corridor",
    ],
    commuterNote:
      "For Smithfield residents, the nearest dealership or chain shop can be a 30-minute tow away. A mobile mechanic is often the fastest route back on the road.",
    localScenario:
      "Typical Smithfield call: a family's SUV starts overheating near the Premium Outlets. Derek drives out, diagnoses a failed thermostat, and handles the job in the parking lot while the family waits. No tow, no dealership wait.",
    driveContext: "serving Smithfield, Selma, and the I-95 corridor",
  },
  {
    slug: "knightdale",
    name: "Knightdale",
    fullName: "Knightdale, NC",
    county: "Wake County",
    headline: "Mobile Mechanic in Knightdale, NC",
    intro:
      "Knightdale has exploded with new construction over the past decade, and most residents drive into Raleigh daily on US-64. Derek covers Knightdale Station, Hodge Road, and the new subdivisions off Old Knight Road. Most calls here are same-day because commutes don't wait.",
    neighborhoods: [
      "Knightdale Station",
      "Hodge Road corridor",
      "Old Knight Road",
      "Mingo Creek",
      "Widewaters",
    ],
    commuterNote:
      "Knightdale residents depend on their vehicles for daily Raleigh commutes. Derek's mobile service means you can schedule a repair while you're working from home instead of taking a day off.",
    localScenario:
      "Common Knightdale call: a Knightdale Station homeowner books Derek for a brake job Saturday morning. He shows up at 9am, finishes by noon, and the homeowner never leaves the driveway.",
    driveContext: "serving Knightdale and the US-64 east corridor",
  },
  {
    slug: "wendell",
    name: "Wendell",
    fullName: "Wendell, NC",
    county: "Wake County",
    headline: "Mobile Mechanic in Wendell, NC",
    intro:
      "Wendell is one of the fastest-growing small towns in eastern Wake County, with Wendell Falls and the new developments along US-64 bringing in thousands of new residents. Derek covers downtown Wendell, Wendell Falls, and the rural outskirts heading toward Zebulon.",
    neighborhoods: [
      "Wendell Falls",
      "Downtown Wendell",
      "Wendell Boulevard",
      "Marshburn Road",
      "Rolesville border",
    ],
    commuterNote:
      "Wendell is still building infrastructure. A reliable mobile mechanic who actually drives out this far is hard to come by. Derek makes Wendell a regular part of his weekly service area.",
    localScenario:
      "Typical Wendell call: a Wendell Falls homeowner needs spark plugs and an oil change before a weekend trip. Derek schedules Friday afternoon, does both in the driveway, and the family leaves Saturday morning on time.",
    driveContext: "serving Wendell, Wendell Falls, and eastern Wake County",
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
