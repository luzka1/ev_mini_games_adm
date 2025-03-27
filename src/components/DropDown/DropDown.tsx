"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";
import { ReactElement } from "react";

interface DropDownProps {
  buttonText: string;
  className: string;
  values: string[];
  buttonIcon?: ReactElement;
  actions: (() => void)[];
}

export function DropDown({
  buttonText,
  values,
  className,
  buttonIcon,
  actions,
}: DropDownProps) {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button type="button" className={className}>
          {buttonText} {buttonIcon && React.cloneElement(buttonIcon)}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 dark:bg-gray-800"
        side={"bottom"}
        align="end"
      >
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {values.map((item, index) => (
            <DropdownMenuRadioItem
              key={index}
              className="dark:hover:bg-gray-700 list-none"
              value="top"
              onClick={() => actions[index]()}
            >
              {item}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
