"use client";

import React, { useState } from "react";
import {
  Gamepad2,
  LayoutDashboard,
  LogOut,
  SunMoon,
  Users,
} from "lucide-react";
import Logo from "../UI/Logo";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import LogoutDialog from "../LogoutDialog/LogoutDialog";

const items = [
  { icon: <LayoutDashboard />, label: "Dashboard", href: "/" },
  { icon: <Users />, label: "Usuários", href: "/users" },
  { icon: <Gamepad2 />, label: "Minigames", href: "/minigames" },
];

export const Navbar = () => {
  const pathName = usePathname();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenDialog = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogout = () => {
    Cookies.remove("token");
    window.location.reload();
  };

  const handleChangeTheme = () => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );

    const newTheme = localStorage.theme === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle("dark", newTheme === "dark");

    localStorage.theme = newTheme;
  };

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, []);

  const liClass =
    "flex items-center gap-4 font-medium text-slate-500 dark:text-white dark:hover:text-blue-500 transition-all cursor-pointer hover:text-blue-500 hover:font-bold";
  return (
    <>
      <LogoutDialog
        isDialogOpen={isModalOpen}
        onOpenChange={handleOpenDialog}
        handleLogout={handleLogout}
      />

      <div className="flex items-center justify-center">
        <a href="/">
          <Logo className="" />
        </a>
      </div>
      <div className="my-8">
        <ul className="flex flex-col py-6 gap-8">
          {items.map((item, index) => (
            <Link key={index} href={item.href}>
              <li className={liClass}>
                <div
                  className={
                    pathName.startsWith(item.href) && item.href !== "/"
                      ? "text-blue-500 font-bold"
                      : pathName === "/" && item.href === "/"
                      ? "text-blue-500 font-bold"
                      : ""
                  }
                >
                  {item.icon}
                </div>
                <span
                  className={
                    pathName.startsWith(item.href) && item.href !== "/"
                      ? "text-blue-500 font-bold"
                      : pathName === "/" && item.href === "/"
                      ? "text-blue-500 font-bold"
                      : ""
                  }
                >
                  {item.label}
                </span>
              </li>
            </Link>
          ))}
        </ul>
        <hr />
        <ul className="flex flex-col py-6 gap-8">
          <li onClick={() => handleChangeTheme()} className={liClass}>
            <SunMoon /> <span>Trocar tema</span>
          </li>
          <li onClick={() => handleOpenDialog()} className={liClass}>
            <LogOut /> <span>Sair</span>
          </li>
        </ul>
      </div>
    </>
  );
};
