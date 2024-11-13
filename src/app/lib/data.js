import prisma from "@/app/lib/prisma";

export async function storeTechnology(data) {
  try {
    const result = await prisma.technology.create({
      data: {
        name: data.name,
        label: data.label,
        src: data.logo,
        color: data.color,
        relevanceRank: data.relevanceRank,
        officialLink: data.officialLink,
      },
    });

    if (result.id) {
      return result.id;
    } else {
      return null;
    }
  } catch (err) {
    console.error("Error storing technology:", err);
    return null;
  }
}

export async function getAllTechnologies(orderBy, columns) {
  const selectQ =
    columns && columns.length > 0
      ? Object.fromEntries(columns.map((column) => [column, true]))
      : {
          id: true,
          name: true,
          label: true,
          src: true,
          color: true,
          officialLink: true,
          relevanceRank: true,
        };

  const orderByQ =
    orderBy && orderBy !== "name"
      ? [{ [orderBy]: "asc" }, { name: "asc" }]
      : [{ name: "asc" }];

  try {
    return await prisma.technology.findMany({
      orderBy: orderByQ,
      select: selectQ,
    });
  } catch (err) {
    console.error("Error fetching all technologies:", err);
    return null;
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

    if (result) {
      return result;
    } else {
      return null;
    }
  } catch (err) {
    console.error("Error fetching technologies by name:", err);
    return null;
  }
}

export async function storeProject(data) {
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
    return null;
  }

  const technologiesQ = technologyIds.map((tech) => ({ id: tech.id }));

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
      technologies: { connect: technologiesQ },
    },
  };
  try {
    const result = await prisma.project.create(projectQ);

    if (result.id) {
      return result.id;
    } else {
      return null;
    }
  } catch (err) {
    console.error("Error storing project:", err);
    return null;
  }

  if (result.id) {
    return result.id;
  } else {
    return null;
  }
}

export async function storeProjectImages(data, projectId) {
  console.log(data);

  try {
    const result = await prisma.projectPictures.create({
      data: {
        name: data.name,
        type: data.type,
        key: data.key,
        fileHash: data.fileHash,
        project: { connect: { id: Number(projectId) } },
      },
    });

    return result.id;
  } catch (err) {
    console.error("Error storing project images:", err);
    return null;
  }
}

export async function getAllProjects(
  orderBy,
  projectColumns,
  technologyColumns,
  pictureColumns
) {
  const picturesQ =
    pictureColumns && pictureColumns.length > 0
      ? Object.fromEntries(pictureColumns.map((column) => [column, true]))
      : { id: true, name: true, type: true, key: true, fileHash: true };

  const technologiesQ =
    technologyColumns && technologyColumns.length > 0
      ? Object.fromEntries(technologyColumns.map((column) => [column, true]))
      : {
          id: true,
          name: true,
          label: true,
          src: true,
          color: true,
          relevanceRank: true,
          officialLink: true,
        };

  const projectQ =
    projectColumns && projectColumns.length > 0
      ? Object.fromEntries(projectColumns.map((column) => [column, true]))
      : {
          id: true,
          title: true,
          type: true,
          role: true,
          status: true,
          liveLink: true,
          githubLink: true,
          downloadLink: true,
          startDate: true,
          completeDate: true,
        };

  try {
    return await prisma.project.findMany({
      orderBy: orderBy
        ? [{ [orderBy]: "asc" }, { startDate: "asc" }]
        : [{ startDate: "asc" }],
      select: {
        ...projectQ,
        pictures: { select: picturesQ },
        technologies: {
          orderBy: [{ relevanceRank: "asc" }, { name: "asc" }],
          select: technologiesQ,
        },
      },
    });
  } catch (err) {
    console.error("Error fetching all technologies:", err);
    return null;
  }
}
