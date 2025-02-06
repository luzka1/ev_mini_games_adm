import React from "react";
import { PageLayout } from "../pageLayout";
import { CardsGroup } from "@/components/CardsGroup/CardsGroup";

const users = [
  {
    game_id: "q1",
    game_name: "name",
    game_color: "#e623e3",
    game_desc:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error suscipit eaque amet ipsam soluta consequuntur rerum aliquam hic adipisci.",
    users: [
      {
        name: 1,
        birth: 1,
        email: 1,
        gender: 1,
      },
    ],
  },
];

export default function Users() {
  return (
    <>
      <PageLayout>
        <UsersArea />
      </PageLayout>
    </>
  );
}

const UsersArea = () => {
  return (
    <div className="w-full h-full pt-8 flex flex-col gap-8">
      <div className="">
        <h1 className="text-3xl font-bold">
          Atividades dos usuários nos jogos
        </h1>
        <span className="text-slate-500">
          Aqui você terá controle de quem jogou e qual foi a performance do
          jogador!
        </span>
      </div>

      <CardsGroup props={users} />
    </div>
  );
};
