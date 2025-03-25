"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { IGames } from "@/interfaces/Games";
import { Skeleton } from "../UI/skeleton";

interface CardsGroupProps {
  props: IGames[];
}

export const CardsGroup = ({ props }: CardsGroupProps) => {
  const pathname = usePathname();

  if (props.length <= 0) {
    return <Skeleton className="h-[350px] w-[350px] bg-slate-200" />;
  }

  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] w-full">
      {props.map((item, index) => (
        <a
          key={index}
          href={
            pathname === "/users"
              ? `/users/${item.game_id}`
              : `/minigames/${item.game_id}`
          }
        >
          <div
            style={{ backgroundColor: item.game_color }}
            className="rounded-xl h-[350px] w-full flex items-end shadow-xl hover:scale-105 transition-all"
          >
            <div className="bg-white h-1/3 max-h-1/3 w-full rounded-b-xl py-2 px-4 flex overflow-auto">
              <div>
                <span className="text-xl font-bold">{item.game_name}</span>
                <p className="text-sm text-muted-foreground">
                  {item.game_desc}
                </p>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
