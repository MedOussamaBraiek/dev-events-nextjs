import {v2 as cloudinary} from "cloudinary";
import { NextRequest, NextResponse } from "next/server";
import Event  from "@/database/event.model";
import connectDB from "@/lib/mongodb";

export async function POST(req: NextRequest) {
    try {
        await connectDB();

        const formData = await req.formData();
        let event;

        try {
            event = Object.fromEntries(formData.entries());
        } catch (error) {
            return NextResponse.json({ message: "Invalid form data", error: error instanceof Error ? error.message : "Unknown error" }, { status: 400 });
        }

        const tags = JSON.parse(formData.get("tags") as string);
        const agenda = JSON.parse(formData.get("agenda") as string);

        const file = formData.get("image") as File;

        if(!file) return NextResponse.json({ message: "Image file is required" }, { status: 400 });


        const arrayBuffer = await file.arrayBuffer(); // A raw binary data container from the Web API
        const buffer = Buffer.from(arrayBuffer); // Convert the ArrayBuffer to a Node.js Buffer, which is required by Cloudinary's uploader

        const uploadResult = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({ resource_type: "image", folder:'DevEvent' }, (error, result) => {
                if (error) return reject(error);
                resolve(result);
            }).end(buffer);
        }); // Upload the image buffer to Cloudinary
        
        event.image = (uploadResult as {secure_url: string}).secure_url;

        const createdEvent = await Event.create({
            ...event,
            tags : tags,
            agenda: agenda
        });

        return NextResponse.json({ message: "Event Created Successfully", event: createdEvent }, { status: 201 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message : "Event Creation Failed" , error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDB();

        const events = await Event.find().sort({ createdAt: -1 });

        return NextResponse.json({ message: "Events fetched successfully", events }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: "Failed to fetch events",
            error: error instanceof Error ? error.message : "Unknown error"
         }, { status: 500
        })
    }
}

export async function DELETE(req: NextRequest) {
    try {
        await connectDB();

        const { slug } = await req.json();

        if (!slug) {
            return NextResponse.json({ message: "Event slug is required" }, { status: 400 });
        }
        const events = await Event.findOneAndDelete({ slug });

        if (!events) {
            return NextResponse.json({ message: "Event not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Events deleted successfully", events }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: "Failed to delete events",
            error: error instanceof Error ? error.message : "Unknown error"
         }, { status: 500
        })
    }
}