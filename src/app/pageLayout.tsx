import { Navbar } from "@/components/Navbar/Navbar";
import Container from "@/components/UI/Container";
import React from "react";

interface pageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: pageLayoutProps) => {
  return (
    <div className="flex p-4 min-h-screen gap-8">
      <div className="basis-1/6">
        <Container className="w-1/6 fixed top-4 bottom-4 h-auto">
          <div className="px-6 py-8 h-full flex flex-col">
            <Navbar />
          </div>
        </Container>
      </div>
      <div className="w-5/6 max-w-5/6 basis-5/6 animate-fadeIn">{children}</div>
    </div>
  );
};
