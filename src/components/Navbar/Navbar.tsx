"use client";

import React from "react";
import {
  Gamepad2,
  LayoutDashboard,
  LogOut,
  SunMoon,
  Users,
} from "lucide-react";
import Logo from "../UI/Logo";
import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect } from "react";

const items = [
  { icon: <LayoutDashboard />, label: "Dashboard", href: "/" },
  { icon: <Users />, label: "Usuários", href: "/users" },
  { icon: <Gamepad2 />, label: "Minigames", href: "/minigames" },
];

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

export const Navbar = () => {
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
                {item.icon} <span>{item.label}</span>
              </li>
            </Link>
          ))}
        </ul>
        <hr />
        <ul className="flex flex-col py-6 gap-8">
          <li onClick={() => handleChangeTheme()} className={liClass}>
            <SunMoon /> <span>Trocar tema</span>
          </li>
          <li onClick={() => handleLogout()} className={liClass}>
            <LogOut /> <span>Sair</span>
          </li>
        </ul>
      </div>
    </>
  );
};
