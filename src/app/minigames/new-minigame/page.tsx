"use client";

import React, { useState } from "react";
import { PageLayout } from "@/app/pageLayout";
import { IGameConfig } from "@/interfaces/Games";
import { SecondButton } from "@/components/UI/SecondButton";
import Container from "@/components/UI/Container";
import GameTextsForm from "@/components/Forms/GameTextsForm";
import { PrincipalColorForm } from "@/components/Forms/PrincipalColorForm";
import QuestionsForm from "@/components/Forms/QuestionsForm";
import ErrorMessageModal from "@/components/ErrorMessageModal/ErrorMessageModal";
import RequestGameModal from "@/components/RequestGameModal/RequestGameModal";

export default function Minigames() {
  return (
    <>
      <PageLayout>
        <NewMiniGameArea />
      </PageLayout>
    </>
  );
}

function NewMiniGameArea() {
  const [formData, setFormData] = useState<IGameConfig>({
    allow_guest: false,
    company_link: "",
    company_name: "",
    createdAt: new Date(),
    game_color: "#fff",
    game_desc: "",
    game_id: "",
    game_name: "",
    id: "",
    negative_message:
      "Ainda tem muito para aprender. Tente novamente e melhore!",
    neutral_message:
      "Boa! Você quase chegou na excelência. Revise os detalhes e tente mais uma vez!",
    positive_message:
      "Excelente! Você mandou muito bem. Continue assim e vai arrasar!",
    times_played: 0,
    type: "q",
    questions: [
      {
        answer: "",
        options: ["", "", "", ""],
        question: "",
      },
    ],
  });
  const [isErrorModalOpen, setErrorModalOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

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

  const handleControlErrorModal = () => {
    setErrorModalOpen(!isErrorModalOpen);
  };

  const handleControlRequestModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <ErrorMessageModal
        isOpen={isErrorModalOpen}
        onOpenChange={handleControlErrorModal}
        formErrors={formErrors}
        formData={formData}
      />

      <RequestGameModal
        formData={formData}
        isOpen={isModalOpen}
        onOpenChange={handleControlRequestModal}
      />

      <div className="w-full h-full pt-8 gap-8 grid grid-cols-2">
        <div className="col-span-2 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Solicitação de novo jogo</h1>
            <span className="text-slate-500">
              Crie um jogo com suas especificações!
            </span>
          </div>
          <div className="flex gap-4">
            <SecondButton
              type="button"
              action={handleSendRequest}
              text="Solicitar"
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
