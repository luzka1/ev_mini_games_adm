import React from "react";
import DialogLayout from "../DialogLayout/DialogLayout";
import { TextInput } from "../UI/TextInput";
import { IGameConfig } from "@/interfaces/Games";
import { Button } from "../UI/button";

interface GameTextsDialogProps {
  isOpen: boolean;
  onOpenChange: () => void;
  formData: IGameConfig;
  handleChangeFormData: (field: string, value: unknown) => void;
}

const GameTextsDialog = ({
  isOpen,
  onOpenChange,
  formData,
  handleChangeFormData,
}: GameTextsDialogProps) => {
  return (
    <DialogLayout isOpen={isOpen} onOpenChange={onOpenChange}>
      <DialogLayoutArea
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        formData={formData}
        handleChangeFormData={handleChangeFormData}
      />
    </DialogLayout>
  );
};

const DialogLayoutArea = ({
  onOpenChange,
  formData,
  handleChangeFormData,
}: GameTextsDialogProps) => {
  return (
    <>
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

      <Button onClick={onOpenChange}>Ok</Button>
    </>
  );
};

export default GameTextsDialog;
