"use client";
import Image from "next/image";
import { useState } from "react";
import { nanoid } from "nanoid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SignedIn } from "@clerk/nextjs";
import { Delete, Edit } from "@mui/icons-material";
import TechBadge from "@/app/ui/components/TechBadge";
import CustomUploadButton from "@/app/ui/components/CustomUploadButton";
import Box from "@/app/ui/components/Box";
import CustomError from "@/app/ui/components/CustomError";
import ProjectStatusBadge from "@/app/ui/components/ProjectStatusBadge";
import ProjectDates from "@/app/ui/components/ProjectDates";
import ProjectLinkIcon from "@/app/ui/components/ProjectLinkIcon";
import ProjectInfo from "@/app/ui/components/ProjectInfo";
import CustomButton from "@/app/ui/components/CustomButton";

export default function ProjectCard({ data, setProjects }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [uploadedImageKey, setUploadedImageKey] = useState(null);
  const router = useRouter();

  function handleUploadComplete(response) {
    setUploadedImageKey(response[0].key);
  }

  function handleUploadError(err) {
    setErrorMessage(err.message);

    setTimeout(() => {
      setErrorMessage("");
    }, 10000);
  }

  function handleBeforeUploadBegin(files) {
    return files.map(
      (f) =>
        new File([f], `project-${data.id}-${nanoid()}`, {
          type: f.type,
        })
    );
  }

  function handleEdit() {
    const encodedData = encodeURIComponent(JSON.stringify(data));
    router.push(`/projects/${data.id}/edit?data=${encodedData}`);
  }

  async function handleDelete() {
    try {
      const response = await fetch("/api/delete-project", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectId: data.id,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete project");
      }

      setProjects((prev) => prev.filter((project) => project.id !== data.id));
    } catch (err) {
      console.error("Error deleting project:", err);
    }
  }

  return (
    <Box className="flex flex-col gap-8">
      <div className="flex flex-col gap-2 sm:gap-0">
        <div className="flex flex-row gap-2 items-start">
          <div className="flex-grow flex flex-col">
            <h3 className="font-mono text-2xl text-foreground">{data.title}</h3>

            <ProjectDates start={data.startDate} complete={data.completeDate} />
          </div>

          <div className="flex flex-col gap-4">
            <ProjectStatusBadge status={data.status} />

            <div className="flex flex-row gap-2 flex-nowrap justify-end">
              {data.liveLink && (
                <ProjectLinkIcon href={data.liveLink} type={"live"} />
              )}

              {data.githubLink && (
                <ProjectLinkIcon href={data.githubLink} type={"github"} />
              )}

              {data.downloadLink && (
                <ProjectLinkIcon href={data.downloadLink} type={"download"} />
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-2">
          <ProjectInfo header="type" info={data.type} />

          <ProjectInfo header="role" info={data.role} />
        </div>
      </div>

      {data.pictures.length > 0 || uploadedImageKey ? (
        <Link
          href={`https://utfs.io/f/${uploadedImageKey || data.pictures[0].key}`}
          target="_blank"
        >
          <figure className="relative border border-foreground rounded-lg overflow-clip w-full aspect-[16/9]">
            <Image
              src={`https://utfs.io/f/${
                uploadedImageKey || data.pictures[0].key
              }`}
              alt="Project Thumbnail"
              quality={100}
              fill={true}
              className="object-cover"
            />
          </figure>
        </Link>
      ) : (
        <SignedIn>
          <Box className="flex flex-col gap-4 items-center justify-center w-full aspect-[16/9]">
            <CustomUploadButton
              endpoint="projectImageUploader"
              headers={{ projectId: data.id }}
              onClientUploadComplete={handleUploadComplete}
              onUploadError={handleUploadError}
              onBeforeUploadBegin={handleBeforeUploadBegin}
            />

            {errorMessage && <CustomError error={errorMessage} />}
          </Box>
        </SignedIn>
      )}

      <div className="flex flex-row flex-wrap gap-2">
        {data.technologies.map((technology) => (
          <Link
            key={technology.id}
            href={technology.officialLink}
            target="_blank"
            className="hover:-translate-y-1 hover:scale-110 transition-transform ease-out duration-300 rounded-lg active:bg-neutral-700"
          >
            <TechBadge technology={technology} />
          </Link>
        ))}

        <SignedIn>
          <div className="flex flex-row gap-2 self-end ml-auto">
            <CustomButton onClick={handleEdit}>
              <Edit className="text-foreground text-lg active:text-accent-500" />
            </CustomButton>

            <CustomButton onClick={handleDelete}>
              <Delete className="text-foreground text-lg active:text-accent-500" />
            </CustomButton>
          </div>
        </SignedIn>
      </div>
    </Box>
  );
}
