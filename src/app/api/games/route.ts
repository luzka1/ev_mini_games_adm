import { NextResponse } from "next/server";
import Parse from "@/lib/parse";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const result = await Parse.Cloud.run("getGames");

    if (!Array.isArray(result)) {
      console.error("O resultado não é um array:", result);
      return NextResponse.json([], {
        headers: { "Cache-Control": "no-store" },
        status: 200,
      });
    }

    return NextResponse.json(result, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("Erro na API:", error);
    return NextResponse.json([], {
      headers: { "Cache-Control": "no-store" },
      status: 500,
    });
  }
}
