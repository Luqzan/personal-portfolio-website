import { getAllTechnologies } from "@/app/lib/data";
import TechBadge from "@/app/ui/components/TechBadge";
import Link from "next/link";

export default async function TechBadgeList() {
  const data = await getAllTechnologies("relevanceRank", [
    "id",
    "name",
    "label",
    "src",
    "color",
    "officialLink",
  ]);
  return (
    <div className="flex flex-row flex-wrap gap-2">
      {data.map((technology) => (
        <Link
          key={technology.id}
          href={technology.officialLink}
          target="_blank"
          className="hover:-translate-y-1 hover:scale-110 transition ease-out duration-300 rounded-lg"
        >
          <TechBadge technology={technology} />
        </Link>
      ))}
    </div>
  );
}
