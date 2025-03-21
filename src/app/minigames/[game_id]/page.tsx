"use client";

import { PageLayout } from "@/app/pageLayout";
import QuestionsForm from "@/components/Forms/QuestionsForm";
import FullScreenLoading from "@/components/FullscreenLoading/FullScreenLoading";
import Container from "@/components/UI/Container";
import { Input } from "@/components/UI/input";
import { useGamesContext } from "@/contexts/GamesContext";
import React, { useEffect, useState } from "react";
import { CompactPicker, MaterialPicker, SketchPicker } from "react-color";

interface Props {
  params: { game_id: string };
}

export default function GamesAdmin({ params }: Props) {
  return (
    <PageLayout>
      <GamesAdminArea params={params} />
    </PageLayout>
  );
}

function GamesAdminArea({ params }: Props) {
  const { fetchConfigGame, gameConfig, loading } = useGamesContext();
  const [color, setColor] = useState<string>("#000");

  useEffect(() => {
    fetchConfigGame(params.game_id);
  }, [params.game_id]);

  if (loading) {
    return <FullScreenLoading />;
  }

  return (
    <div className="w-full h-full pt-8 gap-8 grid grid-cols-2">
      <div className="col-span-2">
        <h1 className="text-3xl font-bold">
          Gerenciamento do jogo: {gameConfig.game_name}
        </h1>
        <span className="text-slate-500">
          Modifique o jogo e suas peculiaridades!
        </span>
      </div>

      <Container className="p-4 flex flex-col gap-4 h-[408px]">
        <h2 className="text-2xl font-bold">Textos e informações</h2>

        <div className="flex flex-col justify-between h-full">
          <div>
            <span>Nome do jogo</span>
            <Input placeholder="Insira o nome do minigame" />
          </div>

          <div>
            <span>
              Mensagem negativa (Menos que 25% de acerto das questões)
            </span>
            <Input placeholder="Insira a mensagem negativa" />
          </div>

          <div>
            <span>Mensagem neutra (Até 75% de acerto das questões)</span>
            <Input placeholder="Insira a mensagem neutra" />
          </div>

          <div>
            <span>
              Mensagem positiva (Maior que 75% de acerto das questões)
            </span>
            <Input placeholder="Insira mensagem positiva" />
          </div>
        </div>
      </Container>

      <Container className="flex flex-col h-[408px] gap-4">
        <h2 className="pl-4 pt-4 text-2xl font-bold">Cor principal</h2>

        <div
          style={{ backgroundColor: color }}
          className="flex w-full h-full gap-4 relative rounded-b-xl"
        >
          <SketchPicker
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
            color={color}
            onChange={(newColor) => setColor(newColor.hex)}
          />
        </div>
      </Container>

      <Container className="p-4 col-span-2 flex flex-col gap-4">
        <QuestionsForm />
      </Container>
    </div>
  );
}
