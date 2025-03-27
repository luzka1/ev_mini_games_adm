"use client";

import { PageLayout } from "@/app/pageLayout";
import ErrorMessageModal from "@/components/ErrorMessageModal/ErrorMessageModal";
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
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isErrorModalOpen, setErrorModalOpen] = useState<boolean>(false);

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

  const handleSendRequest = () => {
    const errors: { [key: string]: string } = {};

    if (!formData.game_name) errors.game_name = "O nome do jogo é obrigatório";
    if (!formData.company_name)
      errors.company_name = "O nome da empresa é obrigatório";

    formData.questions.forEach((question, index) => {
      if (!question.question)
        errors[`question_${index}`] = `A pergunta ${index + 1} é obrigatória`;
      if (!question.answer)
        errors[`answer_${index}`] = `A resposta da pergunta ${
          index + 1
        } é obrigatória`;
      question.options.forEach((option, i) => {
        if (!option)
          errors[`option_${index}_${i}`] = `A opção ${i + 1} da pergunta ${
            index + 1
          } é obrigatória`;
      });
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setErrorModalOpen(true);
    } else {
      setFormErrors({});
      setIsModalOpen(true);
      setErrorModalOpen(false);
    }
  };

  const handleControlSaveModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleControlErrorModal = () => {
    setErrorModalOpen(!isErrorModalOpen);
  };

  if (!gameConfig || Object.keys(gameConfig).length === 0) {
    return <FullScreenLoading />;
  }

  return (
    <>
      <ErrorMessageModal
        isOpen={isErrorModalOpen}
        onOpenChange={handleControlErrorModal}
        formErrors={formErrors}
        formData={formData}
      />

      <SaveModal
        formData={formData}
        isOpen={isModalOpen}
        onOpenChange={handleControlSaveModal}
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
            <div className="rounded-xl border border-slate-400 p-2 bg-white dark:bg-zinc-950 flex gap-2 items-center">
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
              action={handleSendRequest}
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
