"use client";

import React, { useEffect } from "react";
import { PageLayout } from "../pageLayout";
import { PlusIcon } from "lucide-react";
import { CardsGroup } from "@/components/CardsGroup/CardsGroup";
import { useGamesContext } from "@/contexts/GamesContext";

export default function Minigames() {
  return (
    <>
      <PageLayout>
        <MinigamesArea />
      </PageLayout>
    </>
  );
}

const MinigamesArea = () => {
  const { games, fetchGamesData } = useGamesContext();

  useEffect(() => {
    const loadData = async () => {
      await fetchGamesData();
    };

    loadData();
  }, []);

  return (
    <div className="w-full h-full pt-8 flex flex-col gap-4 md:gap-8">
      <div className="w-full flex flex-col md:flex-row gap-2 justify-between">
        <div>
          <h1 className="text-xl md:text-3xl font-bold">Seus jogos ativos</h1>
          <span className="text-sm md:text-base text-slate-500">
            Aqui você encontrará os jogos que já estão em circulação!
          </span>
        </div>

        <a
          href="/minigames/new-minigame"
          className="fixed z-20 bottom-16 md:bottom-4 right-4 bg-blue-500 rounded-full text-white p-4 hover:scale-110 transition-all shadow-md"
        >
          <PlusIcon className="md:h-8 md:w-8" />
        </a>
      </div>

      <CardsGroup props={games} />
    </div>
  );
};
