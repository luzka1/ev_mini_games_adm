import React from "react";

interface ErrorProps {
  status: number;
  message: string;
  className?: string;
}

const Error = ({ status, message, className }: ErrorProps) => {
  return (
    <div
      className={`${className} w-full h-screen flex flex-col items-center justify-center`}
    >
      <div className="w-full flex flex-col justify-center text-center">
        <div className="text-red-500 font-black text-[96px] tracking-tighter animate-bounce">
          {status}
        </div>
        <p className="text-2xl font-bold">{message}</p>
      </div>
    </div>
  );
};

export default Error;
