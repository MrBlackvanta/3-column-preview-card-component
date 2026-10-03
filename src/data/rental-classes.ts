export const rentalClasses = [
  {
    slug: "sedans",
    name: "Sedans",
    blurb:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
  },
  {
    slug: "suvs",
    name: "SUVs",
    blurb:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
  },
  {
    slug: "luxury",
    name: "Luxury",
    blurb:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
  },
] as const;

export type RentalClass = (typeof rentalClasses)[number];
export type RentalClassSlug = RentalClass["slug"];
