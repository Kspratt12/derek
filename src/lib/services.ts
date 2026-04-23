export type Service = {
  slug: string;
  name: string;
  shortName: string;
  headline: string;
  intro: string;
  includes: string[];
  symptoms: string[];
  whyMobile: string;
  commonVehicles: string;
  priceNote: string;
};

export const services: Service[] = [
  {
    slug: "brake-repair",
    name: "Mobile Brake Repair",
    shortName: "Brake Repair",
    headline: "Mobile Brake Repair in Raleigh, NC",
    intro:
      "Grinding, squealing, or a soft pedal. Brake problems don't wait for an appointment. Derek comes to your driveway with rotors, pads, and the tools to handle most brake jobs on-site. No tow, no rental car, no waiting room.",
    includes: [
      "Front and rear brake pad replacement",
      "Rotor resurfacing or replacement",
      "Brake fluid flush and top-off",
      "Caliper inspection and replacement",
      "Brake line inspection",
      "Parking brake adjustment",
    ],
    symptoms: [
      "Squealing or grinding when braking",
      "Soft or spongy brake pedal",
      "Pulsing pedal on hard stops",
      "Pulling left or right when braking",
      "Brake warning light on dash",
      "Burning smell after driving",
    ],
    whyMobile:
      "Brake jobs are one of the easiest repairs to do mobile. Derek can lift the vehicle in your driveway, swap rotors and pads in under two hours for most cars, and have you back on the road the same day. A shop visit usually means waiting through a full-day appointment plus a drop-off and pick-up.",
    commonVehicles:
      "Everything from Hondas and Toyotas to F-150s, Silverados, and Mustangs. If your vehicle has four wheels, Derek's done brakes on it.",
    priceNote:
      "Brake jobs are quoted up front after a quick look. Pricing depends on rotors vs. pads only and the make/model. No work starts until you've seen the number.",
  },
  {
    slug: "engine-diagnostics",
    name: "Engine Diagnostics",
    shortName: "Engine Diagnostics",
    headline: "Mobile Engine Diagnostics in Raleigh, NC",
    intro:
      "A check engine light doesn't tell you much. Derek hooks up professional-grade diagnostic tools at your driveway, pulls the actual codes, and tells you exactly what's wrong before you spend a dollar guessing. No parts cannon, no upsells.",
    includes: [
      "OBD-II code scan and interpretation",
      "Live sensor data analysis",
      "Misfire and cylinder diagnostics",
      "O2 sensor and catalytic converter testing",
      "Fuel trim and timing analysis",
      "Written diagnosis with recommended fix",
    ],
    symptoms: [
      "Check engine light on or flashing",
      "Rough idle or stalling",
      "Loss of power or poor acceleration",
      "Misfires or hesitation",
      "Unusual exhaust smell or smoke",
      "Failed emissions inspection",
    ],
    whyMobile:
      "Most diagnostic jobs are 30-60 minutes of scanning and test driving. Derek does it at your driveway, explains the results in plain English, and lets you decide whether to have him do the repair or take it somewhere else. No pressure either way.",
    commonVehicles:
      "All domestic and foreign makes from roughly 1996 and newer (OBD-II era). Derek has handled everything from older Mustangs to late-model Porsche Cayennes.",
    priceNote:
      "Diagnostic fees are flat-rate and often waived if Derek ends up doing the repair. You'll know the number before he plugs anything in.",
  },
  {
    slug: "fleet-maintenance",
    name: "Fleet Maintenance",
    shortName: "Fleet Maintenance",
    headline: "Fleet Maintenance Services in Raleigh, NC",
    intro:
      "Small business fleets can't afford downtime. Derek comes to your lot on your schedule (nights, early mornings, weekends) and keeps your trucks running. Regular oil changes, brake jobs, diagnostics, and pressure washing, all on-site.",
    includes: [
      "On-site oil changes and filter service",
      "Brake, rotor, and suspension work",
      "Commercial vehicle diagnostics",
      "Dump truck and work truck maintenance",
      "Fleet pressure washing",
      "Scheduled preventive maintenance plans",
    ],
    symptoms: [
      "Trucks down during work hours",
      "Needing to shuttle vehicles to and from a shop",
      "Losing billable days to maintenance",
      "Dirty fleet hurting business image",
      "No consistent maintenance schedule",
      "Unpredictable repair costs",
    ],
    whyMobile:
      "Every hour a fleet truck sits in a shop is an hour it's not earning. Derek works around your schedule (after hours, on weekends, at your lot) so your trucks stay on the road during business hours. Fleet clients get priority scheduling and net-30 billing on request.",
    commonVehicles:
      "Dump trucks, box trucks, service vans, landscaping trucks, contractor pickups, and small to mid-size commercial fleets.",
    priceNote:
      "Fleet clients get flat-rate hourly pricing and custom maintenance plans. Derek works out a schedule and cost structure that fits how your business actually runs.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
