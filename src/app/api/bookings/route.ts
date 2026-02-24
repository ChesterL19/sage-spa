import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      fullName,
      phoneNumber,
      email,
      service,
      specialist,
      date,
      time,
      specialRequests,
    } = body;
    const full_name = fullName;
    const special_requests = specialRequests ?? "";

    if (
      !service ||
      !specialist ||
      !date ||
      !time ||
      !full_name ||
      !phoneNumber ||
      !email
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const { error } = await supabase.from("bookings").insert({
      full_name,
      phone: phoneNumber,
      email,
      service,
      specialist,
      date,
      time,
      special_requests,
    });

    if (error) {
      return NextResponse.json(
        { error: "Failed to save booking" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to process booking" },
      { status: 500 },
    );
  }
}
