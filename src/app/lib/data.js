import prisma from "@/app/lib/prisma";

export async function getAllTechnologies(columns = []) {
  try {
    const select =
      columns.length > 0
        ? Object.fromEntries(columns.map((column) => [column, true]))
        : undefined;

    return await prisma.technology.findMany({
      select,
    });
  } catch (err) {
    console.error("Error fetching all technologies:", err);
    return [];
  }
}

export async function getTechnologiesByName(technologies) {
  try {
    const result = await prisma.technology.findMany({
      where: {
        name: {
          in: technologies,
        },
      },
    });

    return result;
  } catch (err) {
    console.error("Error fetching technologies by name:", err);
    return [];
  }
}

export async function setProject(data) {
  const technologies = data.technologies.split(",").map((item) => item.trim());

  let technologyIds = [];

  try {
    technologyIds = await prisma.technology.findMany({
      where: {
        name: {
          in: technologies,
        },
      },
      select: {
        id: true,
      },
    });
  } catch (err) {
    console.error("Error retrieving technology IDs:", err);
    return;
  }

  const technologiesQ = technologyIds.map((tech) => ({
    technology: { connect: { id: tech.id } },
  }));

  const projectQ = {
    data: {
      title: data.title,
      type: data.type,
      role: data.role,
      status: data.status,
      liveLink: data.liveLink,
      githubLink: data.githubLink,
      downloadLink: data.downloadLink,
      startDate: data.startDate,
      completeDate: data.completeDate,
      technologies: { create: technologiesQ },
    },
  };

  let result;

  try {
    result = await prisma.project.create(projectQ);
  } catch (err) {
    console.error("Error creating project:", err);
    return;
  }

  if (result.id) {
    return result.id;
  } else {
    return;
  }
}
