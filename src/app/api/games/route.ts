import { NextResponse } from "next/server";
import Parse from "@/lib/parse";

export async function GET() {
  try {
    const result = await Parse.Cloud.run("getGames");

    return NextResponse.json(result, {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store, max-age=0",
        "CDN-Cache-Control": "no-store",
        "Vercel-CDN-Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Erro ao chamar a função do Parse:", error);
    return NextResponse.json(
      { error: "Erro ao buscar dados do jogo" },
      { status: 500 }
    );
  }
}
