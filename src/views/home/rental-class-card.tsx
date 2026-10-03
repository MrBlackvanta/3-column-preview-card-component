import { LuxuryIcon, SedanIcon, SuvIcon } from "@/components/icons";
import type { RentalClass, RentalClassSlug } from "@/data";
import type { ComponentType } from "react";

const presentation: Record<
  RentalClassSlug,
  { Icon: ComponentType; band: string; label: string }
> = {
  sedans: { Icon: SedanIcon, band: "bg-sedans", label: "text-sedans" },
  suvs: { Icon: SuvIcon, band: "bg-suvs", label: "text-suvs" },
  luxury: { Icon: LuxuryIcon, band: "bg-luxury", label: "text-luxury" },
};

export default function RentalClassCard({ slug, name, blurb }: RentalClass) {
  const { Icon, band, label } = presentation[slug];

  return (
    <li className={`${band} text-paper flex flex-col p-12`}>
      <Icon />
      <h2 className="font-display text-display mt-8.75 font-bold uppercase">
        {name}
      </h2>
      <p className="mt-6.25">{blurb}</p>
      <button
        type="button"
        className={`${label} v-focus-ring v-on-dark bg-paper mt-6.25 inline-flex h-12 w-36.5 items-center justify-center rounded-full border-2 border-transparent hover:border-white hover:bg-transparent hover:text-white motion-safe:transition-[background-color,border-color,color] motion-safe:duration-200 lg:mt-auto`}
      >
        Learn More
        <span className="sr-only"> about {name}</span>
      </button>
    </li>
  );
}
