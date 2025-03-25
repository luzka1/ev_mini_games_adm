"use client";

import React, { useEffect, useState } from "react";
import { Input } from "../UI/input";
import { toast } from "react-toastify";
import { IGameConfig } from "@/interfaces/Games";
import { SelectInput } from "../UI/SelectInput";
import { TextInput } from "../UI/TextInput";

interface QuestionsFormProps {
  formData: IGameConfig;
  handleChangeFormData: (field: string, value: unknown) => void;
}

const QuestionsForm = ({
  formData,
  handleChangeFormData,
}: QuestionsFormProps) => {
  const [entries, setEntries] = useState<number>(0);

  useEffect(() => {
    if (Array.isArray(formData.questions)) {
      setEntries(formData.questions.length);
    }
  }, [formData.questions]);

  function handleVerifyInput(value: number, max: number) {
    if (value > max) {
      toast.error(`O valor máximo de perguntas é ${max}`);
      value = 1;
    }

    setEntries(value);

    const updatedQuestions = [...formData.questions];

    if (updatedQuestions.length > value) {
      updatedQuestions.length = value;
    } else if (updatedQuestions.length < value) {
      const newQuestions = Array(value - updatedQuestions.length).fill({
        question: "",
        options: ["", "", "", ""],
        answer: "",
      });
      updatedQuestions.push(...newQuestions);
    }

    handleChangeFormData("questions", updatedQuestions);
  }

  const handleQuestionChange = (
    questionIndex: number,
    field: string,
    value: string | string[]
  ) => {
    const updatedQuestions = [...formData.questions];
    if (field === "options" && Array.isArray(value)) {
      updatedQuestions[questionIndex] = {
        ...updatedQuestions[questionIndex],
        [field]: value,
      };
    } else {
      updatedQuestions[questionIndex] = {
        ...updatedQuestions[questionIndex],
        [field]: value,
      };
    }

    handleChangeFormData("questions", updatedQuestions);
  };

  return (
    <>
      <div className="w-full flex justify-between">
        <h2 className="text-2xl font-bold">Perguntas e respostas</h2>
        <div className="flex flex-col items-end">
          <span className="font-bold">Quantidade de questões</span>
          <Input
            className="px-2 w-20"
            type="number"
            value={entries}
            min={0}
            max={15}
            onChange={(e) => handleVerifyInput(e.target.valueAsNumber, 15)}
          />
        </div>
      </div>

      <div className="grid px-4 grid-cols-2 grid-flow-row gap-4 max-h-[500px] overflow-y-auto">
        {entries === 0 ? (
          <div className="h-full w-full flex items-center justify-center col-span-2">
            <p className="font-bold text-xl">
              Selecione a quantidade de perguntas desejadas!
            </p>
          </div>
        ) : (
          formData.questions.map((question, index) => (
            <div key={index} className="flex flex-col gap-4 animate-fadeIn">
              <h2 className="font-bold text-xl">Pergunta {index + 1} </h2>

              <TextInput
                label="Pergunta"
                value={question.question}
                onChange={(value) =>
                  handleQuestionChange(index, "question", value)
                }
                placeholder="Insira a pergunta"
              />

              <div className="grid grid-cols-2 gap-4">
                {question.options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <TextInput
                      label={`Alternativa ${optionIndex + 1}`}
                      value={option}
                      onChange={(value) =>
                        handleQuestionChange(
                          index,
                          "options",
                          question.options.map((opt, i) =>
                            i === optionIndex ? value : opt
                          )
                        )
                      }
                      placeholder={`Insira a alternativa ${optionIndex + 1}`}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col w-full">
                <span className="font-bold">Resposta</span>
                <SelectInput
                  index={index}
                  value={question.answer || "Selecione uma resposta"}
                  onChange={handleQuestionChange}
                  options={question.options}
                  defaultOption="Selecione uma resposta"
                />
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default QuestionsForm;
