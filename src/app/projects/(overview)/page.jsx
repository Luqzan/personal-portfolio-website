import ProjectCard from "@/app/ui/components/ProjectCard";

export default function Page() {
  return (
    <div className="snap-y snap-mandatory w-full h-full flex flex-col gap-12 items-center pr-8 py-72 overflow-y-scroll scroll-smooth">
      <div className="snap-center flex">
        <ProjectCard />
      </div>

      <div className="snap-center flex">
        <ProjectCard />
      </div>

      <div className="snap-center flex">
        <ProjectCard />
      </div>

      <div className="snap-center flex">
        <ProjectCard />
      </div>

      <div className="snap-center flex">
        <ProjectCard />
      </div>

      <div className="snap-center flex">
        <ProjectCard />
      </div>

      <div className="snap-center flex">
        <ProjectCard />
      </div>

      <div className="snap-center flex">
        <ProjectCard />
      </div>
    </div>
  );
}
