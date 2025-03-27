import React, { useState } from "react";
import { DialogDrawer } from "../UI/DialogDrawer";
import { IGameConfig } from "@/interfaces/Games";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "../UI/button";
import { useRouter } from "next/navigation";

interface RequestGameModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  formData: IGameConfig;
}

const RequestGameModal = ({
  isOpen,
  onOpenChange,
  formData,
}: RequestGameModalProps) => {
  return (
    <DialogDrawer
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title="Deseja soliciar o jogo?"
    >
      <RequestGameModalArea formData={formData} onOpenChange={onOpenChange} />
    </DialogDrawer>
  );
};

const RequestGameModalArea = ({
  onOpenChange,
  formData,
}: {
  onOpenChange: () => void;
  formData: IGameConfig;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useRouter();

  const fetchGameConfigData = async () => {
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1450));
      const res = await axios.post(`/api/create-newgame`, formData);
      if (res?.status === 200) {
        toast.success(res.data);
        onOpenChange();

        setTimeout(() => {
          navigate.push("/minigames");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-auto py-4 flex flex-col gap-4">
      <Button disabled={loading} onClick={fetchGameConfigData}>
        Solicitar
      </Button>
      <Button onClick={onOpenChange} variant={"outline"}>
        Cancelar
      </Button>
    </div>
  );
};

export default RequestGameModal;
