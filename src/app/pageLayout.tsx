import NavBarMenu from "@/components/NavBarMenu/NavBarMenu";
import React from "react";

interface pageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: pageLayoutProps) => {
  return (
    <>
      <div className="flex p-4 min-h-screen gap-8">
        <NavBarMenu />
        <div className="w-full md:w-5/6 md:max-w-5/6 md:basis-5/6 animate-fadeIn">
          {children}
        </div>
      </div>
    </>
  );
};
