import TechBadge from "@/app/ui/components/TechBadge";
import Image from "next/image";

export default function ProjectCard() {
  const technologies = ["nextjs", "typescript", "tailwind", "postgres"];

  return (
    <div className="flex flex-col gap-8 p-8 border border-foreground rounded-lg w-full">
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

      <div className="flex flex-row flex-wrap gap-2">
        {technologies.map((tech) => {
          return <TechBadge key={tech} brand={tech} />;
        })}
      </div>
    </div>
  );
}
