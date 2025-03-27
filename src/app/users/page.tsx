"use client";

import React, { useEffect } from "react";
import { PageLayout } from "../pageLayout";
import { CardsGroup } from "@/components/CardsGroup/CardsGroup";
import { useGamesContext } from "@/contexts/GamesContext";

export default function Users() {
  return (
    <PageLayout>
      <UsersArea />
    </PageLayout>
  );
}

const UsersArea = () => {
  const { games, fetchGamesData } = useGamesContext();

  useEffect(() => {
    fetchGamesData();
  }, []);

  return (
    <div className="w-full h-full pt-8 flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold">
          Atividades dos usuários nos jogos
        </h1>
        <span className="text-slate-500">
          Aqui você terá controle de quem jogou e qual foi a performance do
          jogador!
        </span>
      </div>

      <CardsGroup props={games} />
    </div>
  );
};
