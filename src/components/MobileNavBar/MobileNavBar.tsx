"use client";

import {
  Gamepad2,
  LayoutDashboard,
  LogOut,
  SunMoon,
  Users,
} from "lucide-react";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

const items = [
  { icon: <LayoutDashboard />, label: "Dashboard", href: "/" },
  { icon: <Users />, label: "Usuários", href: "/users" },
  { icon: <Gamepad2 />, label: "Minigames", href: "/minigames" },
];

const MobileNavBar = () => {
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
    "flex items-center gap-4 font-medium text-slate-500 dark:text-white dark:hover:text-blue-500 transition-all cursor-pointer hover:text-blue-500 hover:font-bold";

  return (
    <div className="w-screen p-4 h-[50px] bg-white/70 backdrop-blur-md border border-b-0 border-x-0 border-zinc-200 dark:border-zinc-700 border-t-1 dark:bg-zinc-950/70">
      <ul className="flex flex-row w-full items-center h-full justify-between">
        {items.map((item, index) => (
          <Link key={index} href={item.href}>
            <li className={liClass}>{item.icon}</li>
          </Link>
        ))}
        <li onClick={() => handleChangeTheme()} className={liClass}>
          <SunMoon />
        </li>
        <li onClick={() => handleLogout()} className={liClass}>
          <LogOut />
        </li>
      </ul>
    </div>
  );
};

export default MobileNavBar;
