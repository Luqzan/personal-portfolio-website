import { getTechnologiesByName } from "@/app/lib/data";
import Image from "next/image";

export default async function TechBadges({ technologies }) {
  let data;

  try {
    data = await getTechnologiesByName(technologies);
  } catch (err) {
    console.error("Error fetching technology badges:", err);
    data = [];
  }

  return (
    <div className="flex flex-row flex-wrap gap-2">
      {data.map((datum) => (
        <div
          key={datum.id}
          className="w-fit flex gap-2 items-center py-1 px-2 border rounded-lg flex-shrink-0"
          style={{ borderColor: datum.color }}
        >
          <Image
            src={datum.src}
            height={18}
            width={18}
            alt={`${datum.label} Logo`}
            className="h-4 w-4"
          />

          <p className="tracking-widest text-xs text-nowrap">{datum.label}</p>
        </div>
      ))}
    </div>
  );
}
