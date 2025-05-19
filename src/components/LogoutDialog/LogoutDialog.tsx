import React from "react";
import DialogLayout from "../DialogLayout/DialogLayout";
import { Button } from "../UI/button";

interface LogoutDialogProps {
  isDialogOpen: boolean;
  onOpenChange: () => void;
  handleLogout: () => void;
}

const LogoutDialog = ({
  isDialogOpen,
  onOpenChange,
  handleLogout,
}: LogoutDialogProps) => {
  return (
    <DialogLayout isOpen={isDialogOpen} onOpenChange={onOpenChange}>
      <LogoutDialogArea
        onOpenChange={onOpenChange}
        handleLogout={handleLogout}
      />
    </DialogLayout>
  );
};

const LogoutDialogArea = ({
  onOpenChange,
  handleLogout,
}: {
  onOpenChange: () => void;
  handleLogout: () => void;
}) => {
  return (
    <div>
      <h1 className="font-bold mb-2">Tem certeza que deseja sair?</h1>

      <div className="flex flex-col gap-2 w-full h-full">
        <Button className="w-full text-white" onClick={onOpenChange}>
          Cancelar
        </Button>
        <Button
          className="bg-red-500 hover:bg-red-600 w-full text-white"
          onClick={handleLogout}
        >
          Sair
        </Button>
      </div>
    </div>
  );
};

export default LogoutDialog;
