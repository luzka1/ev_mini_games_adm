import Parse from "@/lib/parse";

export async function POST(request: Request) {
  try {
    const { game_id } = await request.json();
    const result = await Parse.Cloud.run("getConfig", { game_id });

    return new Response(JSON.stringify(result), {
      status: 200,
    });
  } catch (error) {
    console.error("Erro ao buscar configuração do jogo:", error);
    return new Response(
      JSON.stringify({ error: "Erro ao buscar configuração do jogo" }),
      { status: 500 }
    );
  }
}
