"use client";

import { Container } from "lucide-react";
import React, { useState } from "react";
import { Input } from "../UI/input";
import { toast } from "react-toastify";

const QuestionsForm = () => {
  const [entries, setEntries] = useState<number>(1);

  function handleVerifyInput(value: number, max: number) {
    setEntries(value);

    if (value > max) {
      toast.error(`O valor máximo de perguntas é ${max}`);
      setEntries(10);
    }
  }

  return (
    <>
      <h2 className="text-2xl font-bold">Perguntas e respostas</h2>

      <div>
        <span>Quantidade de questões</span>
        <Input
          className="px-2 w-20"
          type="number"
          value={entries}
          min={0}
          max={15}
          onChange={(e) => handleVerifyInput(e.target.valueAsNumber, 15)}
        />
      </div>

      <div className="grid grid-cols-2 grid-flow-row gap-4 max-h-[500px] overflow-y-auto">
        {entries === 0 ? (
          <div className="h-full w-full flex items-center justify-center col-span-2">
            <p className="font-bold text-xl ">
              Selecione a quantidade de perguntas desejadas!
            </p>
          </div>
        ) : (
          Array.from({ length: entries }).map((_, index) => (
            <div key={index} className="flex flex-col gap-4 animate-fadeIn">
              <h2 className="font-bold text-xl">Pergunta {index + 1} </h2>

              <div>
                <span>Alternativa 1</span>
                <Input placeholder="Insira a alternativa 1" />
              </div>

              <div>
                <span>Alternativa 2</span>
                <Input placeholder="Insira a alternativa 2" />
              </div>

              <div>
                <span>Alternativa 3</span>
                <Input placeholder="Insira a alternativa 3" />
              </div>

              <div>
                <span>Alternativa 4</span>
                <Input placeholder="Insira a alternativa 4" />
              </div>

              <div>
                <span>Resposta</span>
                <Input placeholder="Insira a resposta" />
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default QuestionsForm;
