import { NextRequest, NextResponse } from "next/server";
import Event from "@/database/event.model";
import connectDB from "@/lib/mongodb";

// Slug must be a non-empty, URL-safe string (lowercase alphanumeric + hyphens).
const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export async function GET(_req: NextRequest, { params }: RouteParams) {
  try {
    const { slug } = await params;

    // Validate slug format before hitting the database.
    if (!slug || !SLUG_REGEX.test(slug)) {
      return NextResponse.json(
        { message: "Invalid or missing slug parameter" },
        { status: 400 }
      );
    }

    await connectDB();

    const event = await Event.findOne({ slug }).lean();

    if (!event) {
      return NextResponse.json(
        { message: `No event found with slug "${slug}"` },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Event fetched successfully", event },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /api/events/[slug] error:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch event",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
