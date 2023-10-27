import { Product, addProduct } from "@/app/data/FakeDatabase/Product";
import { NextResponse } from "next/server";

export function GET(request: Request) {
  try {
    // vanligvis har vi en funksjon for å hente fra database, men nå bare returnerer jeg data fra data/ShoppingItems filen
    const returnedData = Product;
    return NextResponse.json({ data: returnedData });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products. Error: " + error },
      { status: 500 }
    );
  }
}

// LEGGE TIL NY PRODUKT
export async function POST(request: Request) {
  const body = await request.json();
  try {
    addProduct(body);
    return NextResponse.json({ data: body }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create product. Error: " + error },
      { status: 400 }
    );
  }
}
