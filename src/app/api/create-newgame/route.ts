import { NextRequest, NextResponse } from "next/server";
import Parse from "@/lib/parse";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = await Parse.Cloud.run("createGame", body);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Erro ao chamar a função do Parse:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar a configuração do jogo" },
      { status: 500 }
    );
  }
}
