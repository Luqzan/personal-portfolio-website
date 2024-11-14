"use client";
import { useState, useEffect } from "react";
import ProjectCard from "@/app/ui/components/ProjectCard";
import ProjectCardSkeleton from "@/app/ui/components/skeletons/ProjectCardSkeleton";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/get-all-projects", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch project list");
        }

        const result = await response.json();
        setProjects(result);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="snap-y snap-mandatory h-screen flex flex-col gap-12 py-72 overflow-y-scroll scroll-smooth">
      {projects.length < 1 && (
        <div className="snap-center flex">
          <ProjectCardSkeleton />
        </div>
      )}

      {projects.length < 1 && (
        <div className="snap-center flex">
          <ProjectCardSkeleton />
        </div>
      )}

      {projects.map((datum) => (
        <div key={datum.id} className="snap-center flex">
          <ProjectCard data={datum} setProjects={setProjects} />
        </div>
      ))}
    </div>
  );
}
