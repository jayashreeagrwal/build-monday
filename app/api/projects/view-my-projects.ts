import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {

    const response = await fetch(
        "https://260tmgmw-8000.inc1.devtunnels.ms/api/v1/project/myProjects",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer {"id": 1, "userName": "svd "}`
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.message }, { status: response.status });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
