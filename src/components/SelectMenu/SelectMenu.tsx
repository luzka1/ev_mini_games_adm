import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";

export type SelectValuesType = { value: string; label: string };

interface SelectMenuProps {
  placeholder: string;
  values: SelectValuesType[];
  className?: string;
}

export function SelectMenu({
  placeholder,
  values,
  className,
}: SelectMenuProps) {
  return (
    <Select>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {values.map((item, index) => (
            <SelectItem key={index} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
