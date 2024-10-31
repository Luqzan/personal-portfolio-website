"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { setProject } from "@/app/lib/data";

const projectSchema = z.object({
  title: z
    .string({ message: "Title must be a string" })
    .min(1, "Title is required"),
  type: z.enum(["WebApplication", "MobileApplication", "Website"], {
    message: "Type is required",
  }),
  role: z.enum(
    ["FullStackDeveloper", "FrontEndDeveloper", "BackEndDeveloper"],
    { message: "Role is required" }
  ),
  status: z.enum(["Ongoing", "Completed", "Abandoned"], {
    message: "Status is required",
  }),
  technologies: z
    .string({ message: "Technologies must be a string" })
    .min(1, "Choose at least one technology"),
  liveLink: z
    .string({ message: "Live link must be a string" })
    .url({ message: "Live link must be a URL" })
    .optional(),
  githubLink: z
    .string({ message: "Github link must be a string" })
    .url({ message: "Github link must be a URL" })
    .optional(),
  downloadLink: z
    .string({ message: "Download link must be a string" })
    .url({ message: "Download link must be a URL" })
    .optional(),
  startDate: z.string().date(),
  completeDate: z.string().date().optional(),
});

export async function createProject(prevState, formData) {
  const dataInput = {
    title: formData.get("title"),
    type: formData.get("type"),
    role: formData.get("role"),
    status: formData.get("status"),
    technologies: formData.get("technologies"),
    liveLink: formData.get("liveLink"),
    githubLink: formData.get("githubLink"),
    downloadLink: formData.get("downloadLink"),
    startDate: formData.get("startDate"),
    completeDate: formData.get("completeDate"),
  };

  const validatedFields = projectSchema.safeParse(dataInput);
  if (!validatedFields.success) {
    return {
      defaultValues: dataInput,
      message: "Failed to create project.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  validatedFields.data.startDate =
    validatedFields.data.startDate + "T00:00:00.000Z";

  validatedFields.data.completeDate =
    validatedFields.data.completeDate + "T00:00:00.000Z";

  const projectId = await setProject(validatedFields.data);

  revalidatePath("/projects");
  redirect(`/projects/${projectId}/upload-image`);
}
