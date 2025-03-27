import { NextRequest, NextResponse } from "next/server";
import Parse from "@/lib/parse";

export async function PATCH(request: NextRequest) {
  const url = new URL(request.url);
  const gameId = url.searchParams.get("game_id");

  if (!gameId) {
    return NextResponse.json(
      { error: "game_id é necessário" },
      { status: 400 }
    );
  }

  try {
    const body = await request.json();

    body.game_id = gameId;

    const result = await Parse.Cloud.run("editConfig", body);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Erro ao chamar a função do Parse:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar a configuração do jogo" },
      { status: 500 }
    );
  }
}
