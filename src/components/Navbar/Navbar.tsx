import React from "react";
import {
  Gamepad2,
  Headset,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
} from "lucide-react";
import Logo from "../UI/Logo";
import Link from "next/link";

const items = [
  { icon: <LayoutDashboard />, label: "Dashboard", href: "/" },
  { icon: <Users />, label: "Usuários", href: "/users" },
  { icon: <Gamepad2 />, label: "Minigames", href: "/minigames" },
];

const settings = [
  { icon: <Settings />, label: "Ajustes", href: "/help" },
  { icon: <Headset />, label: "Contato", href: "/help" },
  { icon: <HelpCircle />, label: "Ajuda", href: "/help" },
];

export const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <Logo className="" />
      </div>
      <div className="my-8">
        <ul className="flex flex-col py-6 gap-8">
          {items.map((item, index) => (
            <Link key={index} href={item.href}>
              <li className="flex items-center gap-4 font-medium text-slate-500 transition-all cursor-pointer hover:text-blue-500 hover:font-bold">
                {item.icon} <span>{item.label}</span>
              </li>
            </Link>
          ))}
        </ul>
        <hr />
        <ul className="flex flex-col py-6 gap-8">
          {settings.map((item, index) => (
            <Link key={index} href={item.href}>
              <li className="flex items-center gap-4 font-medium text-slate-500 transition-all cursor-pointer hover:text-blue-500 hover:font-bold">
                {item.icon} <span>{item.label}</span>
              </li>
            </Link>
          ))}
        </ul>
        <li className="flex items-center gap-4 font-medium text-slate-500 transition-all cursor-pointer hover:text-blue-500 hover:font-bold">
          <LogOut /> <span>Sair</span>
        </li>
      </div>
    </>
  );
};
