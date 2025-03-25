"use client";

import { PageLayout } from "@/app/pageLayout";
import GameTextsForm from "@/components/Forms/GameTextsForm";
import { PrincipalColorForm } from "@/components/Forms/PrincipalColorForm";
import QuestionsForm from "@/components/Forms/QuestionsForm";
import FullScreenLoading from "@/components/FullscreenLoading/FullScreenLoading";
import SaveModal from "@/components/SaveModal/SaveModal";
import Container from "@/components/UI/Container";
import { SecondButton } from "@/components/UI/SecondButton";
import { useGamesContext } from "@/contexts/GamesContext";
import { CopyToClipboard } from "@/functions/CopyToClipboard";
import { IGameConfig } from "@/interfaces/Games";
import { Copy } from "lucide-react";
import React, { useEffect, useState } from "react";
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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  if (!gameConfig || Object.keys(gameConfig).length === 0) {
    return <FullScreenLoading />;
  }

  return (
    <>
      <SaveModal
        formData={formData}
        isOpen={isModalOpen}
        onOpenChange={handleOpenModal}
      />

      <div className="w-full h-full pt-8 gap-8 grid grid-cols-2">
        <div className="col-span-2 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Gerenciamento do jogo: {gameConfig.game_name}
            </h1>
            <span className="text-slate-500">
              Modifique o jogo e suas peculiaridades!
            </span>
          </div>
          <div className="flex gap-4">
            <div className="rounded-xl border border-slate-400 p-2 bg-white flex gap-2 items-center">
              http://localhost:5173/?game_id={gameConfig.game_id}{" "}
              <Copy
                className="hover:scale-110 transition-all"
                onClick={() =>
                  CopyToClipboard(
                    `http://localhost:5173/?game_id=${formData.game_id}`
                  )
                }
              />
            </div>

            <SecondButton
              type="button"
              action={handleOpenModal}
              text="Salvar"
            />
          </div>
        </div>

        <Container className="p-4 flex flex-col gap-4 h-[408px]">
          <GameTextsForm
            formData={formData}
            handleChangeFormData={handleChangeFormData}
          />
        </Container>

        <Container className="flex flex-col h-[408px] gap-4">
          <PrincipalColorForm
            formData={formData}
            handleChangeFormData={handleChangeFormData}
          />
        </Container>

        <Container className="p-4 col-span-2 flex flex-col gap-4">
          <QuestionsForm
            formData={formData}
            handleChangeFormData={handleChangeFormData}
          />
        </Container>
      </div>
    </>
  );
}
