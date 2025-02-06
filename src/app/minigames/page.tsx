import React from "react";
import { PageLayout } from "../pageLayout";
import { PlusIcon } from "lucide-react";

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
  return (
    <div className="w-full h-full pt-8 flex flex-col gap-8">
      <div className="w-full flex justify-between">
        <div>
          <h1 className="text-3xl font-bold">Seus jogos ativos</h1>
          <span className="text-slate-500">
            Aqui você encontrará os jogos que já estão em circulação!
          </span>
        </div>
        <div>
          <button
            type="button"
            className="flex gap-2 p-4 rounded-full border-2 border-blue-500 font-bold text-blue-500 hover:border-transparent hover:bg-blue-500 hover:text-white transition-all"
          >
            Solicitar minigame <PlusIcon />
          </button>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))]">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className="rounded-xl bg-blue-500 h-[350px] w-full flex items-end shadow-xl"
          >
            <div className="bg-white h-1/3 w-full rounded-b-xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
