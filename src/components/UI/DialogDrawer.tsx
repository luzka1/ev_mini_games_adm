"use client";

import * as React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/UI/drawer";

interface DialogDrawerProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  isOpen: boolean;
  onOpenChange: () => void;
}

export function DialogDrawer({
  children,
  title,
  description,
  isOpen,
  onOpenChange,
}: DialogDrawerProps) {
  return (
    <Drawer open={isOpen} onOpenChange={() => onOpenChange()}>
      <DrawerContent>
        <DrawerHeader>
          <div className="mx-auto w-full max-w-sm">
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
            {children}
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
