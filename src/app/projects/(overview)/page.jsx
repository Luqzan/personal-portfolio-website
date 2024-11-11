import ProjectList from "@/app/ui/components/ProjectList";
import ProjectCardSkeleton from "@/app/ui/components/skeletons/ProjectCardSkeleton";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="h-full w-full">
      <Suspense fallback={<ProjectCardSkeleton />}>
        <ProjectList />
      </Suspense>
    </div>
  );
}
