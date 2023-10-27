import { Category } from "@/app/data/FakeDatabase/Category";
import { NextResponse } from "next/server";

export function GET(request: Request) {
  try {
    // vanligvis har vi en funksjon for å hente fra database, men nå bare returnerer jeg data fra data/ShoppingItems filen
    const returnedData = Category;
    return NextResponse.json({ data: returnedData });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products. Error: " + error },
      { status: 500 }
    );
  }
}
