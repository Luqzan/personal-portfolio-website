import { getAllTechnologies } from "@/app/lib/data";

export async function POST(request) {
  try {
    const { columns } = await request.json();

    const result = await getAllTechnologies(columns);

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error("Error fetching technologies:", error);

    return new Response(JSON.stringify({ error: "Error fetching data" }), {
      status: 500,
    });
  }
}
