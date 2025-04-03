import { IGameConfig } from "@/interfaces/Games";
import React from "react";
import { SketchPicker } from "react-color";

interface PrincipalColorFormProps {
  formData: IGameConfig;
  handleChangeFormData: (field: string, value: unknown) => void;
}

export const PrincipalColorForm = ({
  formData,
  handleChangeFormData,
}: PrincipalColorFormProps) => {
  return (
    <>
      <h2 className="pl-4 pt-4 text-lg md:text-2xl font-bold">Cor principal</h2>

      <div
        style={{ backgroundColor: formData.game_color }}
        className="flex w-full h-full gap-4 relative rounded-b-xl"
      >
        <SketchPicker
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 dark:text-black"
          color={formData.game_color}
          onChange={(newColor) =>
            handleChangeFormData("game_color", newColor.hex)
          }
        />
      </div>
    </>
  );
};
