"use client";

import React, { useState } from "react";
import { TextInput } from "../UI/TextInput";
import { IGameConfig } from "@/interfaces/Games";
import { Button } from "../UI/button";
import GameTextsDialog from "../GameTextsDialog/GameTextsDialog";

interface GameTextsFormProps {
  formData: IGameConfig;
  handleChangeFormData: (field: string, value: unknown) => void;
}

const GameTextsForm = ({
  formData,
  handleChangeFormData,
}: GameTextsFormProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenChange = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="absolute">
        <GameTextsDialog
          isOpen={isModalOpen}
          onOpenChange={handleOpenChange}
          formData={formData}
          handleChangeFormData={handleChangeFormData}
        />
      </div>

      <div className="flex flex-col justify-between h-full gap-4 overflow-auto px-2">
        <h2 className="text-lg md:text-2xl font-bold">Textos e informações</h2>

        <TextInput
          label="Nome do jogo *"
          value={formData.game_name}
          onChange={(value) => handleChangeFormData("game_name", value)}
          placeholder="Insira o nome do jogo"
        />
        <TextInput
          label="Descrição do jogo"
          value={formData.game_desc}
          onChange={(value) => handleChangeFormData("game_desc", value)}
          placeholder="Insira a descrição do jogo (opcional)"
        />
        <TextInput
          label="Nome da empresa *"
          value={formData.company_name}
          onChange={(value) => handleChangeFormData("company_name", value)}
          placeholder="Insira o nome da empresa (ficará na tela inicial do jogo)"
        />

        <div className="flex w-full justify-end">
          <Button
            onClick={handleOpenChange}
            className="w-full lg:w-60 text-white"
          >
            Mais informações
          </Button>
        </div>
      </div>
    </>
  );
};

export default GameTextsForm;
