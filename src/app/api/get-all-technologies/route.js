import { getAllTechnologies } from "@/app/lib/data";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { columns, orderBy } = await request.json();
    const result = await getAllTechnologies(orderBy, columns);

    return NextResponse.json(result || { error: "Error fetching data" }, {
      status: result ? 200 : 500,
    });
  } catch (error) {
    console.error("Error fetching technologies:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
