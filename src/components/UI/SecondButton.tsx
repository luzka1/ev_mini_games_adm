import React from "react";

interface SecondButtonProps {
  text: string;
  className?: string;
  type: "submit" | "reset" | "button" | undefined;
  action: () => void;
}

export const SecondButton = ({
  text,
  className,
  type,
  action,
}: SecondButtonProps) => {
  return (
    <button
      onClick={action}
      type={type}
      className={`${className} flex items-center justify-center py-2 px-4 rounded-xl border-2 border-blue-500 font-bold text-blue-500 hover:border-transparent hover:bg-blue-500 hover:text-white transition-all`}
    >
      {text}
    </button>
  );
};
