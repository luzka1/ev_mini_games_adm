import React, { useState } from "react";
import { DialogDrawer } from "../UI/DialogDrawer";
import { Button } from "../UI/button";
import { IGameConfig } from "@/interfaces/Games";
import axios from "axios";
import { toast } from "react-toastify";
import { Dices } from "lucide-react";
import { CopyToClipboard } from "@/functions/CopyToClipboard";

interface SaveModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  formData: IGameConfig;
}

const SaveModal = ({ isOpen, onOpenChange, formData }: SaveModalProps) => {
  const [showLink, setShowLink] = useState<boolean>(false);
  return (
    <DialogDrawer
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title={
        !showLink
          ? "Deseja salvar as alterações?"
          : "Alterações efetuadas com sucesso!"
      }
    >
      <SaveModalArea
        formData={formData}
        onOpenChange={onOpenChange}
        showLink={showLink}
        setShowLink={setShowLink}
      />
    </DialogDrawer>
  );
};

const SaveModalArea = ({
  onOpenChange,
  formData,
  showLink,
  setShowLink,
}: {
  onOpenChange: () => void;
  formData: IGameConfig;
  showLink: boolean;
  setShowLink: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const fetchGameConfigData = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1450));
      const res = await axios.patch(
        `/api/update-config?game_id=${formData.game_id}`,
        formData
      );
      if (res?.status === 200) {
        toast.success(res.data.message);
        setShowLink(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-auto py-4">
      {!showLink ? (
        <div className="flex flex-col gap-2">
          <Button
            disabled={loading}
            type="button"
            onClick={() => fetchGameConfigData()}
          >
            Salvar
          </Button>
          <Button type="button" variant="outline" onClick={onOpenChange}>
            Cancelar
          </Button>
        </div>
      ) : (
        <div className="h-[200px] flex flex-col w-full items-center justify-center gap-4">
          <Dices
            style={{ color: formData.game_color }}
            className="w-24 h-24 animate-fadeIn"
          />
          <Button
            className="w-full"
            type="button"
            onClick={() =>
              CopyToClipboard(
                `https://quiz-ev.vercel.app/?game_id=${formData.game_id}`
              )
            }
          >
            Copiar link do jogo
          </Button>
          <Button
            className="w-full"
            variant="outline"
            type="button"
            onClick={onOpenChange}
          >
            Fechar
          </Button>
        </div>
      )}
    </div>
  );
};

export default SaveModal;
