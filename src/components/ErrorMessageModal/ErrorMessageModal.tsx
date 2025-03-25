import React from "react";
import { DialogDrawer } from "../UI/DialogDrawer";
import { IGameConfig } from "@/interfaces/Games";
import { Button } from "../UI/button";

interface ErrorMessageModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  formData: IGameConfig;
  formErrors: {
    [key: string]: string;
  };
}

const ErrorMessageModal = ({
  isOpen,
  onOpenChange,
  formData,
  formErrors,
}: ErrorMessageModalProps) => {
  return (
    <DialogDrawer
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title="Ops! Algo de errado aconteceu!"
    >
      <ErrorMessageModalArea
        formData={formData}
        formErrors={formErrors}
        onOpenChange={onOpenChange}
      />
    </DialogDrawer>
  );
};

const ErrorMessageModalArea = ({
  formData,
  formErrors,
  onOpenChange,
}: {
  onOpenChange: () => void;
  formData: IGameConfig;
  formErrors: {
    [key: string]: string;
  };
}) => {
  return (
    <div className="h-auto py-4 flex flex-col gap-2">
      {formErrors.game_name && (
        <span className="text-red-500">{formErrors.game_name}</span>
      )}
      {formErrors.company_name && (
        <span className="text-red-500">{formErrors.company_name}</span>
      )}
      {formErrors.game_desc && (
        <span className="text-red-500">{formErrors.game_desc}</span>
      )}
      {formErrors.company_link && (
        <span className="text-red-500">{formErrors.company_link}</span>
      )}

      {formData.questions.map((_, index) => (
        <div className="flex flex-col gap-2" key={index}>
          {formErrors[`question_${index}`] && (
            <span className="text-red-500">
              {formErrors[`question_${index}`]}
            </span>
          )}
          {formErrors[`answer_${index}`] && (
            <span className="text-red-500">
              {formErrors[`answer_${index}`]}
            </span>
          )}
          {formData.questions[index].options.map(
            (_, i) =>
              formErrors[`option_${index}_${i}`] && (
                <span className="text-red-500" key={i}>
                  {formErrors[`option_${index}_${i}`]}
                </span>
              )
          )}
        </div>
      ))}

      <Button variant={"outline"} onClick={onOpenChange}>
        Fechar
      </Button>
    </div>
  );
};

export default ErrorMessageModal;
