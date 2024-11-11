import { getAllProjects } from "@/app/lib/data";
import ProjectCard from "@/app/ui/components/ProjectCard";
import { Suspense } from "react";

export default async function Page() {
  let data;
  try {
    data = await getAllProjects();
  } catch (err) {
    console.error(err);
  }

  return (
    <div className="snap-y snap-mandatory h-screen flex flex-col gap-12 py-72 overflow-y-scroll scroll-smooth">
      {data &&
        data.map((datum) => (
          <Suspense fallback={<p>test</p>}>
            <div key={datum.id} className="snap-center flex">
              <ProjectCard data={datum} />
            </div>
          </Suspense>
        ))}
    </div>
  );
}
