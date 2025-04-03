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
        <div>
          <a href="/minigames/new-minigame">
            <button
              type="button"
              className="flex gap-2 p-4 rounded-xl border-2 border-blue-500 font-bold text-blue-500 hover:border-transparent hover:bg-blue-500 hover:text-white transition-all"
            >
              Solicitar minigame <PlusIcon />
            </button>
          </a>
        </div>
      </div>

      <CardsGroup props={games} />
    </div>
  );
};
