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
import clsx from "clsx";

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
    <Box className="flex flex-col gap-4 pb-6">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-start">
          <div className="flex-grow flex flex-col">
            <h3 className="font-mono text-2xl text-foreground">{data.title}</h3>

            <p className="uppercase font-sans font-light text-foreground text-xs tracking-widest opacity-80">
              {data.startDate.toLocaleDateString()}
              {` - ${
                data.completeDate
                  ? data.completeDate.toLocaleDateString()
                  : "Ongoing"
              }`}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p
              className={clsx(
                "uppercase font-sans font-light text-xs tracking-widest border rounded-xl px-2 text-nowrap",
                {
                  "text-yellow-500 border-yellow-500":
                    data.status === "Ongoing",
                  "text-green-500 border-green-500":
                    data.status === "Completed",
                  "text-red-500 border-red-500": data.status === "Abandoned",
                }
              )}
            >
              {data.status === "Ongoing" ? "In Progress" : data.status}
            </p>

            <div className="flex flex-row gap-2 flex-nowrap justify-end">
              {data.liveLink && (
                <Link
                  href={data.liveLink}
                  target="_blank"
                  className="hover:-translate-y-1 hover:scale-110 transition ease-out duration-300"
                >
                  <Language className="text-foreground" />
                </Link>
              )}

              {data.githubLink && (
                <Link
                  href={data.githubLink}
                  target="_blank"
                  className="hover:-translate-y-1 hover:scale-110 transition ease-out duration-300"
                >
                  <GitHub className="text-foreground" />
                </Link>
              )}

              {data.downloadLink && (
                <Link
                  href={data.downloadLink}
                  target="_blank"
                  className="hover:text-accent-600 hover:-translate-y-1 hover:scale-110 transition ease-out duration-300"
                >
                  <DownloadForOffline className="text-foreground" />
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-2">
          <div className="flex-1 flex flex-col">
            <h4 className="font-sans font-medium opacity-50 text-xs text-foreground tracking-widest leading-none">
              TYPE:
            </h4>

            <p className="font-mono font-extralight text-lg tracking-wide leading-none">
              {data.type}
            </p>
          </div>

          <div className="flex-1 flex flex-col">
            <h4 className="font-sans font-medium opacity-50 text-xs text-foreground tracking-widest leading-none">
              ROLE:
            </h4>

            <p className="font-mono font-extralight text-lg tracking-wide leading-none">
              {data.role}
            </p>
          </div>
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
