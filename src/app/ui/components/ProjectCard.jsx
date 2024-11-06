"use client";
import Image from "next/image";
import { useState } from "react";
import { nanoid } from "nanoid";
import Link from "next/link";
import { SignedIn } from "@clerk/nextjs";
import TechBadge from "@/app/ui/components/TechBadge";
import CustomUploadButton from "@/app/ui/components/CustomUploadButton";
import Box from "@/app/ui/components/Box";
import CustomError from "@/app/ui/components/CustomError";
import ProjectStatusBadge from "@/app/ui/components/ProjectStatusBadge";
import ProjectDates from "@/app/ui/components/ProjectDates";
import ProjectLinkIcon from "@/app/ui/components/ProjectLinkIcon";
import ProjectInfo from "./ProjectInfo";

export default function ProjectCard({ data }) {
  const [errorMessage, setErrorMessage] = useState("");

  function handleUploadComplete(response) {}

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

  return (
    <Box className="flex flex-col gap-4">
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

      {data.pictures.length > 0 ? (
        <Link href={`#`}>
          <figure className="relative border border-foreground rounded-lg overflow-clip w-full aspect-[16/9]">
            <Image
              src={`https://utfs.io/f/${data.pictures[0].key}`}
              alt="Project Thumbnail"
              quality={100}
              fill={true}
              sizes="100vw"
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
            className="hover:-translate-y-1 hover:scale-110 transition ease-out duration-300 rounded-lg"
          >
            <TechBadge technology={technology} />
          </Link>
        ))}
      </div>
    </Box>
  );
}
