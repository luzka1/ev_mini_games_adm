"use client";

import { PageLayout } from "@/app/pageLayout";
import { DropDown } from "@/components/DropDown/DropDown";
import FullScreenLoading from "@/components/FullscreenLoading/FullScreenLoading";
import {
  SelectMenu,
  SelectValuesType,
} from "@/components/SelectMenu/SelectMenu";
import Container from "@/components/UI/Container";
import { Input } from "@/components/UI/input";
import { usePlayersTableContext } from "@/contexts/PlayersTableContext";
import React, { useEffect } from "react";

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
  const { players, loading, fetchPlayersData } = usePlayersTableContext();

  const playersTable = players.find(
    (index) => index.game_id === params.game_id
  );

  useEffect(() => {
    fetchPlayersData();
  }, []);

  const selectValues: SelectValuesType[] = [
    { value: "a", label: "Mais recentes" },
    { value: "b", label: "Mais antigos" },
  ];

  if (loading) {
    return <FullScreenLoading />;
  }

  return (
    playersTable && (
      <div className="w-full h-full pt-8 flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold">
            Controle de usuários de {playersTable.game_name}
          </h1>
          <span className="text-slate-500">
            Veja todos os usuários que se cadastraram no jogo id: {""}
            {playersTable.game_id}
          </span>
        </div>

        <Container className="w-full h-full">
          <div className="border-b-2 p-4 flex items-center text-muted-foreground justify-between">
            <div className="flex items-center gap-4">
              Mostar <Input className="w-20 px-2" type="number" />
              entradas
            </div>

            <div className="">
              <SelectMenu
                placeholder="Data de cadastro"
                values={selectValues}
                className="w-40"
              />
            </div>
          </div>

          <div></div>
        </Container>
      </div>
    )
  );
};
