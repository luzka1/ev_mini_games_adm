import { NextRequest, NextResponse } from "next/server";
import Parse from "@/lib/parse";

export async function GET(request: NextRequest) {
  try {
    const result = await Parse.Cloud.run("getGames");

    return NextResponse.json(result);
  } catch (error) {
    console.error("Erro ao chamar a função do Parse:", error);
    return NextResponse.json(
      { error: "Erro ao buscar dados do jogo" },
      { status: 500 }
    );
  }
}
