import React from "react";

interface ErrorProps {
  status: number;
  message: string;
}

const Error = ({ status, message }: ErrorProps) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center text-center">
        <div className="text-red-500 font-black text-[96px] tracking-tighter animate-bounce">
          {status}
        </div>
        <p className="text-2xl font-bold">{message}</p>
      </div>
    </div>
  );
};

export default Error;
