"use client";

import {
  Gamepad2,
  LayoutDashboard,
  LogOut,
  SunMoon,
  Users,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutDialog from "../LogoutDialog/LogoutDialog";

const items = [
  { icon: <LayoutDashboard />, label: "Dashboard", href: "/" },
  { icon: <Users />, label: "Usuários", href: "/users" },
  { icon: <Gamepad2 />, label: "Minigames", href: "/minigames" },
];

const MobileNavBar = () => {
  const pathName = usePathname();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenDialog = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogout = () => {
    Cookies.remove("token");
    location.reload();
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
    "flex items-center gap-4 font-medium dark:text-white dark:hover:text-blue-500 transition-all cursor-pointer hover:text-blue-500 hover:font-bold";

  return (
    <>
      <LogoutDialog
        isDialogOpen={isModalOpen}
        onOpenChange={handleOpenDialog}
        handleLogout={handleLogout}
      />

      <div className="w-screen p-4 h-[50px] bg-white/70 backdrop-blur-md border border-b-0 border-x-0 border-zinc-200 dark:border-zinc-700 border-t-1 dark:bg-zinc-950/70">
        <ul className="flex flex-row w-full items-center h-full justify-between">
          {items.map((item, index) => (
            <Link key={index} href={item.href}>
              <li
                className={
                  pathName.startsWith(item.href) && item.href !== "/"
                    ? "text-blue-500 font-bold"
                    : pathName === "/" && item.href === "/"
                    ? "text-blue-500 font-bold"
                    : ""
                }
              >
                {item.icon}
              </li>
            </Link>
          ))}
          <li onClick={() => handleChangeTheme()} className={liClass}>
            <SunMoon />
          </li>
          <li onClick={() => handleOpenDialog()} className={liClass}>
            <LogOut />
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNavBar;
