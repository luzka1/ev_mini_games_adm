import React from "react";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={`${className} bg-white rounded-xl shadow-lg`}>
      {children}
    </div>
  );
};

export default Container;
