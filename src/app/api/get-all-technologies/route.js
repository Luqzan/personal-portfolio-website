import { getAllTechnologies } from "@/app/lib/data";

export async function POST(request) {
  try {
    const { columns, orderBy } = await request.json();

    const result = await getAllTechnologies(columns, orderBy);

    if (result) {
      return new Response(JSON.stringify(result), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: "Error fetching data" }), {
        status: 500,
      });
    }
  } catch (error) {
    console.error("Error fetching technologies:", error);

    return new Response(JSON.stringify({ error: "Error fetching data" }), {
      status: 500,
    });
  }
}
