import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";

interface SelectInputProps {
  value: string;
  onChange: (
    questionIndex: number,
    field: string,
    value: string | string[]
  ) => void;
  options: string[];
  defaultOption: string;
  index: number;
}

export function SelectInput({
  value,
  onChange,
  options,
  index,
}: SelectInputProps) {
  return (
    <Select
      value={value}
      onValueChange={(selectedValue: string) =>
        onChange(index, "answer", selectedValue)
      }
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Selecione uma opção" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map(
            (item, index) =>
              item && (
                <SelectItem key={index} value={item}>
                  {item}
                </SelectItem>
              )
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
