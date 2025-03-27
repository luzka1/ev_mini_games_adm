import { LoaderCircle } from "lucide-react";
import React from "react";

const FullScreenLoading = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="animate-bounce">
        <LoaderCircle className="animate-spin h-[96px] w-[96px] text-blue-500" />
      </div>
    </div>
  );
};

export default FullScreenLoading;
