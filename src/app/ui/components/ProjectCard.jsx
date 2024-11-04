"use client";
import Image from "next/image";
import TechBadge from "@/app/ui/components/TechBadge";
import CustomUploadButton from "./CustomUploadButton";
import { useState } from "react";
import Box from "./Box";
import CustomError from "./CustomError";
import { nanoid } from "nanoid";
import Link from "next/link";
import { Language } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import { DownloadForOffline } from "@mui/icons-material";
import { SignedIn } from "@clerk/nextjs";

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
    <div className="flex flex-col gap-4 p-8 border border-foreground rounded-lg">
      <div className="flex flex-row gap-4 flex-wrap items-center">
        <h3 className="font-mono font-extralight text-2xl">{data.title}</h3>

        <div className="flex flex-row gap-4 flex-nowrap">
          {data.liveLink && (
            <Link
              href={data.liveLink}
              target="_blank"
              className="hover:text-accent-600 hover:-translate-y-1 hover:scale-110 transition ease-out duration-300"
            >
              <Language />
            </Link>
          )}

          {data.githubLink && (
            <Link
              href={data.githubLink}
              target="_blank"
              className="hover:text-accent-600 hover:-translate-y-1 hover:scale-110 transition ease-out duration-300"
            >
              <GitHub />
            </Link>
          )}

          {data.downloadLink && (
            <Link
              href={data.downloadLink}
              target="_blank"
              className="hover:text-accent-600 hover:-translate-y-1 hover:scale-110 transition ease-out duration-300"
            >
              <DownloadForOffline />
            </Link>
          )}
        </div>
      </div>

      <div className="flex flex-row flex-wrap gap-4">
        <div className="flex flex-col">
          <h4 className="font-sans text-xs tracking-widest">START DATE:</h4>

          <p className="font-mono font-extralight text-lg tracking-wide">
            {data.startDate.toLocaleDateString()}
          </p>
        </div>

        {data.completeDate && (
          <div className="flex flex-col">
            <h4 className="font-sans text-xs tracking-widest">
              COMPLETION DATE:
            </h4>

            <p className="font-mono font-extralight text-lg tracking-wide">
              {data.completeDate.toLocaleDateString()}
            </p>
          </div>
        )}

        <div className="flex flex-col">
          <h4 className="font-sans text-xs tracking-widest">STATUS:</h4>

          <p className="font-mono font-extralight text-lg tracking-wide">
            {data.status}
          </p>
        </div>
      </div>

      <div className="flex flex-row flex-wrap gap-4">
        <div className="flex flex-col">
          <h4 className="font-sans text-xs tracking-widest">TYPE:</h4>

          <p className="font-mono font-extralight text-lg tracking-wide">
            {data.type}
          </p>
        </div>

        <div className="flex flex-col">
          <h4 className="font-sans text-xs tracking-widest">ROLE:</h4>

          <p className="font-mono font-extralight text-lg tracking-wide">
            {data.role}
          </p>
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
    </div>
  );
}
