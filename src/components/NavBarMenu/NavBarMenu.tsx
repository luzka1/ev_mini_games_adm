"use client";

import React from "react";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import { Navbar } from "../Navbar/Navbar";
import { useWindowSize } from "@/functions/WindowSize";
import Container from "../UI/Container";

const NavBarMenu = () => {
  const { width } = useWindowSize();
  return (
    <>
      {width < 1024 ? (
        <div className="fixed -left-[0.1%] bottom-0 z-10">
          <MobileNavBar />
        </div>
      ) : (
        <div className="basis-1/6">
          <Container className="w-1/6 fixed top-4 bottom-4 h-auto">
            <div className="px-6 py-8 h-full flex flex-col">
              <Navbar />
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default NavBarMenu;
