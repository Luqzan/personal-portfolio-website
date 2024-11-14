"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { storeProject, updateProject, storeTechnology } from "@/app/lib/data";

const projectSchema = z.object({
  title: z
    .string({ message: "Title must be a string" })
    .min(1, "Title is required"),
  type: z.enum(["WebApplication", "MobileApplication", "Website"], {
    message: "Type is required",
  }),
  role: z.enum(["FullStackEngineer", "FrontEndEngineer", "BackEndEngineer"], {
    message: "Role is required",
  }),
  status: z.enum(["Ongoing", "Completed", "Abandoned"], {
    message: "Status is required",
  }),
  technologies: z.union([
    z
      .string({ message: "Technologies must be a string" })
      .min(1, "Choose at least one technology"),
    z.string().optional(),
  ]),

  liveLink: z.union([
    z
      .string({ message: "Live link must be a string" })
      .url({ message: "Live link must be a URL" }),
    z.string().optional(),
  ]),

  githubLink: z.union([
    z
      .string({ message: "Github link must be a string" })
      .url({ message: "Github link must be a URL" }),
    z.string().optional(),
  ]),

  apiLink: z.union([
    z
      .string({ message: "API link must be a string" })
      .url({ message: "API link must be a URL" }),
    z.string().optional(),
  ]),

  downloadLink: z.union([
    z
      .string({ message: "Download link must be a string" })
      .url({ message: "Download link must be a URL" }),
    z.string().optional(),
  ]),

  startDate: z.string().date(),
  completeDate: z.union([z.string().date(), z.string().optional()]),
});

const technologySchema = z.object({
  name: z
    .string({ message: "Title must be a string" })
    .min(1, "Title is required")
    .toLowerCase(),
  label: z
    .string({ message: "Title must be a string" })
    .min(1, "Title is required"),
  logo: z.enum(["png", "svg"], { message: "Logo type is required" }),
  color: z
    .string({ message: "Color must be a string" })
    .regex(/^#([0-9A-Fa-f]{6})$/, {
      message:
        "Color must be a valid hex code starting with # and followed by 6 hexadecimal digits",
    }),
  officialLink: z
    .string({ message: "Official link must be a string" })
    .url({ message: "Official link must be a URL" }),
  relevanceRank: z
    .number({ message: "Relevance Score must be a number" })
    .int({ message: "Relevance Score must be an integer" })
    .positive({ message: "Relevance Score cannot be negative or 0" })
    .min(1, { message: "Relevance Score must be at least 1" })
    .max(7, { message: "Relevance Score must be at most 7" }),
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
    apiLink: formData.get("apiLink"),
    downloadLink: formData.get("downloadLink"),
    startDate: formData.get("startDate"),
    completeDate: formData.get("completeDate"),
  };

  const validatedFields = projectSchema.safeParse(dataInput);
  if (!validatedFields.success) {
    return {
      defaultValues: dataInput,
      message: "Invalid input(s).",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  validatedFields.data = {
    ...validatedFields.data,
    technologies: {
      connect: validatedFields.data.technologies
        .split(",")
        .map((item) => ({ id: Number(item.trim()) })),
    },
    startDate: `${validatedFields.data.startDate}T00:00:00.000Z`,
    completeDate: validatedFields.data.completeDate
      ? `${validatedFields.data.completeDate}T00:00:00.000Z`
      : null,
  };

  const result = await storeProject(validatedFields.data);

  if (result) {
    revalidatePath("/projects");
    redirect(`/projects/`);
  } else {
    return {
      defaultValues: dataInput,
      message: "Failed to store project.",
      errors: {},
    };
  }
}

export async function editProject(prevState, formData) {
  const dataInput = {
    title: formData.get("title"),
    type: formData.get("type"),
    role: formData.get("role"),
    status: formData.get("status"),
    technologies: formData.get("technologies"),
    liveLink: formData.get("liveLink"),
    githubLink: formData.get("githubLink"),
    apiLink: formData.get("apiLink"),
    downloadLink: formData.get("downloadLink"),
    startDate: formData.get("startDate"),
    completeDate: formData.get("completeDate"),
  };

  const validatedFields = projectSchema.safeParse(dataInput);
  if (!validatedFields.success) {
    return {
      defaultValues: dataInput,
      message: "Invalid input(s).",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const prevTech = formData.get("previousTechnologies").split(",");
  const newTech = validatedFields.data.technologies.split(",");

  let addTech = newTech
    .filter((tech) => !prevTech.includes(tech))
    .map((tech) => ({ id: Number(tech) }));

  let removeTech = prevTech
    .filter((tech) => !newTech.includes(tech))
    .map((tech) => ({ id: Number(tech) }));

  validatedFields.data = {
    ...validatedFields.data,
    technologies: { connect: addTech, disconnect: removeTech },
    startDate: `${validatedFields.data.startDate}T00:00:00.000Z`,
    completeDate: validatedFields.data.completeDate
      ? `${validatedFields.data.completeDate}T00:00:00.000Z`
      : null,
  };

  const result = await updateProject(
    validatedFields.data,
    Number(formData.get("projectId"))
  );

  if (result) {
    revalidatePath("/projects");
    redirect(`/projects/`);
  } else {
    return {
      defaultValues: dataInput,
      message: "Failed to store project.",
      errors: {},
    };
  }
}

export async function addTechnology(prevState, formData) {
  const dataInput = {
    name: formData.get("name"),
    label: formData.get("label"),
    logo: formData.get("logo"),
    color: formData.get("color"),
    officialLink: formData.get("officialLink"),
    relevanceRank: Number(formData.get("relevanceRank")),
  };

  const validatedFields = technologySchema.safeParse(dataInput);
  if (!validatedFields.success) {
    return {
      defaultValues: dataInput,
      message: "Invalid input(s).",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  validatedFields.data = {
    ...validatedFields.data,
    logo: `/logos/${validatedFields.data.name}.${validatedFields.data.logo}`,
    color: validatedFields.data.color.toUpperCase(),
  };

  const technologyId = await storeTechnology(validatedFields.data);

  if (technologyId) {
    revalidatePath("/projects/create");
    redirect("/projects/create");
  } else {
    return {
      defaultValues: dataInput,
      message: "Failed to store technology.",
      errors: {},
    };
  }
}
