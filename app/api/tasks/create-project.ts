import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    const payload = {
        title: body.title,
        description: body.description,
        deadline: body.deadline,
        project_id: body.project_id,
        assignee_user_id: 1,
    };

    const response = await fetch(
        "https://img-169528297296.us-central1.run.app/api/v1/task/createTask",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer {"id": 1, "userName": "svd"}`
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.message || "Task Creation Failed" }, { status: response.status });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
