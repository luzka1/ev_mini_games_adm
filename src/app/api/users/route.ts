import { NextRequest, NextResponse } from "next/server";
import Parse from "@/lib/parse";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const gameId = url.searchParams.get("game_id");

  if (!gameId) {
    return NextResponse.json(
      { error: "game_id é necessário" },
      { status: 400 }
    );
  }

  try {
    const result = await Parse.Cloud.run("getUsers", { game_id: gameId });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Erro ao chamar a função do Parse:", error);
    return NextResponse.json(
      { error: "Erro ao buscar dados do jogo" },
      { status: 500 }
    );
  }
}
