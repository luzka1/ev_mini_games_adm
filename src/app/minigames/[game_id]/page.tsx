"use client";

import { PageLayout } from "@/app/pageLayout";
import QuestionsForm from "@/components/Forms/QuestionsForm";
import FullScreenLoading from "@/components/FullscreenLoading/FullScreenLoading";
import Container from "@/components/UI/Container";
import { SecondButton } from "@/components/UI/SecondButton";
import { TextInput } from "@/components/UI/TextInput";
import { useGamesContext } from "@/contexts/GamesContext";
import { IGameConfig } from "@/interfaces/Games";
import React, { useEffect, useState } from "react";
import { SketchPicker } from "react-color";

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
  const { fetchConfigGame, gameConfig } = useGamesContext();
  const [formData, setFormData] = useState<IGameConfig>({} as IGameConfig);

  useEffect(() => {
    fetchConfigGame(params.game_id);
  }, [params.game_id]);

  useEffect(() => {
    if (gameConfig) {
      setFormData(gameConfig);
    }
  }, [gameConfig]);

  const handleChangeFormData = (field: string, value: unknown) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  if (!gameConfig || Object.keys(gameConfig).length === 0) {
    return <FullScreenLoading />;
  }

  return (
    <div className="w-full h-full pt-8 gap-8 grid grid-cols-2">
      <div className="col-span-2 flex justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Gerenciamento do jogo: {gameConfig.game_name}
          </h1>
          <span className="text-slate-500">
            Modifique o jogo e suas peculiaridades!
          </span>
        </div>

        <div>
          <SecondButton
            type="button"
            action={() => {
              throw new Error("Function not implemented.");
            }}
            text="Salvar"
          />
        </div>
      </div>

      <Container className="p-4 flex flex-col gap-4 h-[408px]">
        <h2 className="text-2xl font-bold">Textos e informações</h2>

        <div className="flex flex-col justify-between h-full">
          <TextInput
            label="Nome do jogo"
            value={formData.game_name}
            onChange={(value) => handleChangeFormData("game_name", value)}
            placeholder="Insira o nome do jogo"
          />
          <TextInput
            label="Mensagem negativa (Menos que 25% de acerto das questões)"
            value={formData.negative_message}
            onChange={(value) =>
              handleChangeFormData("negative_message", value)
            }
            placeholder="Insira a mensagem negativa"
          />
          <TextInput
            label="Mensagem neutra (Até 75% de acerto das questões)"
            value={formData.neutral_message}
            onChange={(value) => handleChangeFormData("neutral_message", value)}
            placeholder="Insira a mensagem neutra"
          />
          <TextInput
            label="Mensagem positiva (Maior que 75% de acerto das questões)"
            value={formData.positive_message}
            onChange={(value) =>
              handleChangeFormData("positive_message", value)
            }
            placeholder="Insira mensagem positiva"
          />
        </div>
      </Container>

      <Container className="flex flex-col h-[408px] gap-4">
        <h2 className="pl-4 pt-4 text-2xl font-bold">Cor principal</h2>

        <div
          style={{ backgroundColor: formData.game_color }}
          className="flex w-full h-full gap-4 relative rounded-b-xl"
        >
          <SketchPicker
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
            color={formData.game_color}
            onChange={(newColor) =>
              handleChangeFormData("game_color", newColor.hex)
            }
          />
        </div>
      </Container>

      <Container className="p-4 col-span-2 flex flex-col gap-4">
        <QuestionsForm
          formData={formData}
          handleChangeFormData={handleChangeFormData}
        />
      </Container>
    </div>
  );
}
