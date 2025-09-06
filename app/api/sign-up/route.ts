import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    const payload = {
      username: body.email,          
      visibleUsername: body.name,     // visibleUsername=name
      password: body.password,
    };

    console.log(payload)

    const response = await fetch(
        "https://img-169528297296.us-central1.run.app/api/v1/auth/join",
    //   "https://260tmgmw-8000.inc1.devtunnels.ms/api/v1/auth/join",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();
    console.log(data, response)
    if (!response.ok) {
      return NextResponse.json({ error: data.message || "Signup failed" }, { status: response.status });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
