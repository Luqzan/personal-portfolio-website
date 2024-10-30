import Image from "next/image";
import TechBadges from "@/app/ui/components/TechBadges";

export default function ProjectCard() {
  const technologies = ["nextjs", "typescript", "tailwindcss", "postgresql"];

  return (
    <div className="flex flex-col gap-8 p-8 border border-foreground rounded-lg">
      <h3 className="font-mono font-extralight text-2xl">
        nextjs-financial-dashboard
      </h3>

      <figure className="border border-foreground rounded-lg overflow-clip">
        <Image
          src="/dummy-photo.jpg"
          alt="dummy photo"
          width={384}
          height={216}
          className="w-full h-auto"
        />
      </figure>

      <TechBadges technologies={technologies} />
    </div>
  );
}
