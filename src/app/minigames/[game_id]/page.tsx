"use client";

import { PageLayout } from "@/app/pageLayout";
import FullScreenLoading from "@/components/FullscreenLoading/FullScreenLoading";
import { useGamesContext } from "@/contexts/GamesContext";
import React, { useEffect } from "react";

interface Props {
  params: { game_id: string };
}

export default function GamesAdmin({ params }: Props) {
  return (
    <PageLayout>
      <GamesAdminArea params={params} />
    </PageLayout>
  );
}

function GamesAdminArea({ params }: Props) {
  const { fetchConfigGame, gameConfig, loading } = useGamesContext();

  useEffect(() => {
    fetchConfigGame(params.game_id);
  }, []);

  if (loading) {
    return <FullScreenLoading />;
  }

  return (
    <div className="w-full h-full pt-8 flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold">Gerenciamento do jogo: </h1>
        <span className="text-slate-500">
          Modifique o jogo e suas peculiaridades!
        </span>
      </div>

      <div></div>
    </div>
  );
}
