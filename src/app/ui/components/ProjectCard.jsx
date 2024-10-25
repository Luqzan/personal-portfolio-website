import TechBadge from "@/app/ui/components/TechBadge";
import Image from "next/image";

export default function ProjectCard() {
  const technologies = ["nextjs", "typescript", "tailwind", "postgres"];

  return (
    <div className="flex flex-col gap-6 p-6 border border-foreground rounded-lg w-fit">
      <h3 className="font-mono font-extralight text-2xl w-[384px]">
        nextjs-financial-dashboard
      </h3>

      <figure className="h-fit w-fit border border-foreground rounded-lg overflow-clip">
        <Image
          src="/dummy-photo.jpg"
          alt="dummy photo"
          width={384}
          height={216}
        />
      </figure>

      <div className="flex flex-row flex-wrap gap-2 w-[384px]">
        {technologies.map((tech) => {
          return <TechBadge key={tech} brand={tech} />;
        })}
      </div>
    </div>
  );
}
