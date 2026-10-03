import { Attribution } from "@/components/layout";
import { rentalClasses } from "@/data";
import { RentalClassCard } from "@/views/home";

export default function Home() {
  return (
    <>
      <main className="grid min-h-dvh place-items-center px-6 py-22">
        <h1 className="sr-only">Choose your rental class</h1>
        <ul className="w-full max-w-81.75 overflow-hidden rounded-lg lg:grid lg:min-h-125 lg:max-w-230 lg:grid-cols-3">
          {rentalClasses.map((rentalClass) => (
            <RentalClassCard key={rentalClass.slug} {...rentalClass} />
          ))}
        </ul>
      </main>
      <Attribution />
    </>
  );
}
