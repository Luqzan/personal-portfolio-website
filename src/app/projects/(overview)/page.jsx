import ProjectCard from "@/app/ui/components/ProjectCard";

export default function Page() {
  return (
    <div className="snap-y snap-mandatory w-full h-full flex flex-col gap-12 px-8 py-72 overflow-y-scroll scroll-smooth">
      <div className="snap-center flex justify-center">
        <ProjectCard />
      </div>
      <div className="snap-center flex justify-center">
        <ProjectCard />
      </div>
      <div className="snap-center flex justify-center">
        <ProjectCard />
      </div>
      <div className="snap-center flex justify-center">
        <ProjectCard />
      </div>
      {/* <div className="sticky bottom-0 bg-gradient-to-t from-background to-transparent">
        <div className="h-40" />
      </div> */}
    </div>
  );
}
