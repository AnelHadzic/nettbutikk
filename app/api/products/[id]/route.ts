import { findProductById } from "@/app/data/FakeDatabase/Product";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const productId = parseInt(context.params.id, 10);

  const product = findProductById(productId);

  if (!product) {
    return NextResponse.json(
      { error: "Kunne ikke finne produktet" },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: product }, { status: 200 });
}
