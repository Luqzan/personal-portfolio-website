"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

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
  startDate: z
    .string({ message: "Start date must be a string" })
    .date({ message: "Start date must be a date" }),
  completeDate: z
    .string({ message: "Complete date must be a string" })
    .date({ message: "Complete date must be a date" })
    .optional(),
  upload: z.any().optional(),
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
    upload: formData.get("upload"),
  };

  const validatedFields = projectSchema.safeParse(dataInput);
  if (!validatedFields.success) {
    return {
      defaultValues: dataInput,
      message: "Failed to create project.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // const {
  //   title,
  //   type,
  //   role,
  //   status,
  //   technologies,
  //   liveLink,
  //   githubLink,
  //   downloadLink,
  //   startDate,
  //   completeDate,
  //   upload,
  // } = validatedFields.data;

  console.log(validatedFields.data);

  revalidatePath("/projects");
  redirect("/projects");
}
