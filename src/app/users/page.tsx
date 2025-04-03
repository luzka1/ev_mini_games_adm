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
    const loadData = async () => {
      await fetchGamesData();
    };

    loadData();
  }, []);

  return (
    <div className="w-full h-full pt-8 flex flex-col gap-4 md:gap-8">
      <div>
        <h1 className="text-xl md:text-3xl font-bold">
          Atividades dos usuários nos jogos
        </h1>
        <span className="text-sm md:text-base text-slate-500">
          Aqui você terá controle de todos os usuários que se cadastraram nos
          jogos!
        </span>
      </div>
      <CardsGroup props={games} />
    </div>
  );
};
