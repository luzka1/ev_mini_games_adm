import React from "react";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div
      className={`${className} bg-white rounded-xl shadow-lg dark:bg-zinc-950`}
    >
      {children}
    </div>
  );
};

export default Container;
