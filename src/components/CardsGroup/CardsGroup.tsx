"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { IGames } from "@/interfaces/Games";
import { Skeleton } from "../UI/skeleton";
import { Button } from "../UI/button";

interface CardsGroupProps {
  props: IGames[];
}

export const CardsGroup = ({ props }: CardsGroupProps) => {
  const pathname = usePathname();

  if (props.length <= 0) {
    return (
      <Skeleton className="h-[350px] w-[350px] bg-slate-200 dark:dark:bg-zinc-950" />
    );
  }

  return (
    <div className="grid gap-8 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] w-full">
      {props.map((item, index) => (
        <a
          key={index}
          href={
            pathname === "/users"
              ? `/users/${item.game_id}`
              : `/minigames/${item.game_id}`
          }
        >
          <div className="rounded-[42px] h-[250px] md:h-[450px] bg-white dark:bg-zinc-950 w-full flex flex-col shadow-xl hover:scale-105 transition-all p-2">
            <div
              style={{ backgroundColor: item.game_color }}
              className="h-3/5 w-full rounded-[36px]"
            />

            <div className="p-4 h-2/5 flex flex-col justify-between">
              <div>
                <span className="text-lg md:text-xl font-bold truncate">
                  {item.game_name}
                </span>
                <p className="text-sm line-clamp-2 pt-1 text-slate-500 dark:text-white">
                  {item.game_desc}
                </p>
              </div>

              <div className="flex w-full justify-end">
                <Button className="rounded-3xl">Mais informações</Button>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
