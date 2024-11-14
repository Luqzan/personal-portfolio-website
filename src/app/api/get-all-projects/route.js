import { NextResponse } from "next/server";
import { getAllProjects } from "@/app/lib/data";

export async function POST(request) {
  try {
    const result = await getAllProjects();

    return NextResponse.json(result || { error: "There are no projects" }, {
      status: result ? 200 : 404,
    });
  } catch (error) {
    console.error("Error retrieving projects:", error);
    return NextResponse.json(
      { message: "Error retrieving projects." },
      { status: 500 }
    );
  }
}
