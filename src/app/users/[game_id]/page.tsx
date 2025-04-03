"use client";

import { PageLayout } from "@/app/pageLayout";
import FullScreenLoading from "@/components/FullscreenLoading/FullScreenLoading";
import { PlayersTable } from "@/components/PlayersTable/PlayersTable";
import Container from "@/components/UI/Container";
import { Input } from "@/components/UI/input";
import { SecondButton } from "@/components/UI/SecondButton";
import { usePlayersTableContext } from "@/contexts/PlayersTableContext";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

type Props = {
  params: { game_id: string };
};

export default function UsersAdmin({ params }: Props) {
  return (
    <PageLayout>
      <UsersAdminArea params={params} />
    </PageLayout>
  );
}

const UsersAdminArea = ({ params }: Props) => {
  const { players, fetchPlayersData } = usePlayersTableContext();
  const [entries, setEntries] = useState<number>(100);

  function handleVerifyInput(value: number, max: number) {
    setEntries(value);

    if (value > max) {
      toast.error(`O valor máximo de entradas é ${max}`);
      setEntries(100);
    }
  }

  function handleExampleDownload() {
    toast.success("Download efetuado com sucesso!");
  }

  useEffect(() => {
    fetchPlayersData(params.game_id);
  }, []);

  if (!players || Object.keys(players).length === 0) {
    return <FullScreenLoading />;
  }

  return (
    players && (
      <div className="w-full h-full pt-8 flex flex-col gap-8">
        <div>
          <h1 className="text-xl md:text-3xl font-bold">
            Controle de usuários de {players.game_name}
          </h1>
          <span className="text-slate-500 text-sm md:text-base">
            Veja todos os usuários que se cadastraram no jogo
          </span>
        </div>

        <Container className="w-full h-full">
          <div className="border-b-2 mx-4 py-4 flex items-center text-muted-foreground gap-4 justify-between">
            <div className="flex items-center gap-2 md:gap-4">
              Mostar{" "}
              <Input
                className="w-12 md:w-20 px-2"
                type="number"
                value={entries}
                min={0}
                max={100}
                onChange={(e) => handleVerifyInput(e.target.valueAsNumber, 100)}
              />
              entradas
            </div>

            <div className="">
              <SecondButton
                type="button"
                action={handleExampleDownload}
                text="Baixar"
              />
            </div>
          </div>

          <div className="px-4 py-6 overflow-x-auto">
            <PlayersTable players={players.players} entries={entries} />
          </div>
        </Container>
      </div>
    )
  );
};
