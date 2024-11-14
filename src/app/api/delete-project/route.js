import { NextResponse } from "next/server";
import { deleteProject } from "@/app/lib/data";

export async function DELETE(request) {
  try {
    const { projectId } = await request.json();

    await deleteProject(projectId);

    return NextResponse.json(
      { message: "Project deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { message: "Error deleting project." },
      { status: 500 }
    );
  }
}
