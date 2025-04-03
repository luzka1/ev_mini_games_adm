import React from "react";
import { TextInput } from "../UI/TextInput";
import { IGameConfig } from "@/interfaces/Games";

interface GameTextsFormProps {
  formData: IGameConfig;
  handleChangeFormData: (field: string, value: unknown) => void;
}

const GameTextsForm = ({
  formData,
  handleChangeFormData,
}: GameTextsFormProps) => {
  return (
    <>
      <h2 className="text-lg md:text-2xl font-bold">Textos e informações</h2>

      <div className="flex flex-col justify-between h-full gap-4 overflow-auto px-2">
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
        <TextInput
          label="Mensagem negativa (Menos que 25% de acerto das questões) *"
          value={formData.negative_message}
          onChange={(value) => handleChangeFormData("negative_message", value)}
          placeholder="Insira a mensagem negativa"
        />
        <TextInput
          label="Mensagem neutra (Até 75% de acerto das questões) *"
          value={formData.neutral_message}
          onChange={(value) => handleChangeFormData("neutral_message", value)}
          placeholder="Insira a mensagem neutra"
        />
        <TextInput
          label="Mensagem positiva (Maior que 75% de acerto das questões) *"
          value={formData.positive_message}
          onChange={(value) => handleChangeFormData("positive_message", value)}
          placeholder="Insira mensagem positiva"
        />
        <div className="flex gap-2">
          <label className="text-sm md:text-base font-bold">
            Permitir convidados?
          </label>
          <input
            checked={formData.allow_guest}
            className=""
            type="checkbox"
            onChange={(e) =>
              handleChangeFormData("allow_guest", e.target.checked)
            }
          />
        </div>
      </div>
    </>
  );
};

export default GameTextsForm;
