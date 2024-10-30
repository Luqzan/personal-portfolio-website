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
