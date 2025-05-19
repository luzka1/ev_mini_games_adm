import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/UI/dialog";

interface DialogLayoutProps {
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: () => void;
}

function DialogLayout({ children, isOpen, onOpenChange }: DialogLayoutProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTitle />
      <DialogDescription />
      <DialogContent className="max-w-[90vw] sm:max-w-[425px]">
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default DialogLayout;
