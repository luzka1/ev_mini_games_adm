"use client";

import { IPlayer } from "@/interfaces/Player";
import { format } from "date-fns";
import { ArrowUpDown, User } from "lucide-react";
import React, { useState } from "react";

interface PlayersTableProps {
  players: IPlayer[];
  entries: number;
}

type headValuesType = { label: string; sort_value: keyof IPlayer };

export const PlayersTable = ({ players, entries }: PlayersTableProps) => {
  const [filteredPlayers, setFilteredPlayers] = useState<IPlayer[]>(players);
  const [sort, setSort] = useState<{
    key: keyof IPlayer | null;
    orderBy: "asc" | "desc";
  }>({ key: null, orderBy: "asc" });

  function sortTable(key: keyof IPlayer) {
    let orderBy: "asc" | "desc" = "asc";

    if (sort.key === key && sort.orderBy === "asc") {
      orderBy = "desc";
    }

    setSort({ key, orderBy });

    const sortedData = [...filteredPlayers].sort((a, b) => {
      if (a[key] < b[key]) {
        return orderBy === "asc" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return orderBy === "asc" ? 1 : -1;
      }
      return 0;
    });

    setFilteredPlayers(sortedData);
  }

  const headClass = "px-4 py-2";

  const contentClass = "px-4 py-6";

  const headTableValues: headValuesType[] = [
    {
      label: "Nome",
      sort_value: "full_name",
    },
    { label: "E-mail", sort_value: "email" },
    { label: "Data de nascimento", sort_value: "birth_date" },
    { label: "Celular", sort_value: "phone_number" },
    { label: "Data de cadastro", sort_value: "createdAt" },
  ];

  return (
    <table className="w-full text-left overflow-x-auto border-separate border-spacing-0">
      <thead>
        <tr className="bg-slate-100 text-muted-foreground">
          {headTableValues.map((item, index) => (
            <th
              key={index}
              className={
                headTableValues.length - 1 === index
                  ? `${headClass} rounded-e-xl`
                  : index === 0
                  ? `${headClass} rounded-s-xl`
                  : `${headClass} rounded-none`
              }
            >
              <div className="flex gap-2 items-center">
                {item.label}{" "}
                <ArrowUpDown
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => sortTable(item.sort_value)}
                />
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredPlayers?.slice(0, entries).map((item, index) => (
          <tr key={index} className={index % 2 != 0 ? "bg-blue-100/40" : ""}>
            <td className={`${contentClass} rounded-s-xl`}>
              <div className="flex gap-4 items-center">
                <User
                  style={{ backgroundColor: item.photo }}
                  className="rounded-full p-2 w-12 h-12"
                />
                {item.full_name}
              </div>
            </td>
            <td className={contentClass}>{item.email}</td>
            <td className={contentClass}>
              {format(new Date(item.birth_date), "dd/MM/yyyy")}
            </td>
            <td className={contentClass}>{item.phone_number}</td>
            <td className={`${contentClass} rounded-e-xl`}>
              {format(new Date(item.createdAt), "dd/MM/yyyy")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
