"use client";

import React, { useEffect, useState } from "react";
import Container from "../UI/Container";
import { User } from "lucide-react";
import { format } from "date-fns";
import { SkeletonUserCard } from "../SkeletonUserCard/SkeletonCard";

const recentsPlays = [
  {
    name: "Lucas Santos",
    email: "lucas.santos@email.com",
    played_date: "2001-03-15",
    createdAt: "2025-02-04T09:00:00Z",
    photo: "#6a5acd",
  },
  {
    name: "Ana Costa",
    email: "ana.costa@email.com",
    played_date: "1997-07-10",
    createdAt: "2025-02-04T09:05:00Z",
    photo: "#f0ad4e",
  },
  {
    name: "Pedro Souza",
    email: "pedro.souza@email.com",
    played_date: "2005-12-01",
    createdAt: "2025-02-04T09:10:00Z",
    photo: "#5cb85c",
  },
  {
    name: "Beatriz Lima",
    email: "beatriz.lima@email.com",
    played_date: "1993-10-21",
    createdAt: "2025-02-04T09:15:00Z",
    photo: "#d9534f",
  },
  {
    name: "Rafael Almeida",
    email: "rafael.almeida@email.com",
    played_date: "1999-02-18",
    createdAt: "2025-02-04T09:20:00Z",
    photo: "#0275d8",
  },
  {
    name: "Juliana Martins",
    email: "juliana.martins@email.com",
    played_date: "2003-08-05",
    createdAt: "2025-02-04T09:25:00Z",
    photo: "#f7b7a3",
  },
  {
    name: "Eduardo Pereira",
    email: "eduardo.pereira@email.com",
    played_date: "1995-11-13",
    createdAt: "2025-02-04T09:30:00Z",
    photo: "#f39c12",
  },
  {
    name: "Mariana Rocha",
    email: "mariana.rocha@email.com",
    played_date: "2007-05-09",
    createdAt: "2025-02-04T09:35:00Z",
    photo: "#8e44ad",
  },
  {
    name: "Felipe Costa",
    email: "felipe.costa@email.com",
    played_date: "1990-12-02",
    createdAt: "2025-02-04T09:40:00Z",
    photo: "#16a085",
  },
  {
    name: "Isabela Silva",
    email: "isabela.silva@email.com",
    played_date: "2000-09-10",
    createdAt: "2025-02-04T09:45:00Z",
    photo: "#c0392b",
  },
];

interface RecentsListProps {
  title: string;
  description?: string;
}

export const RecentsList = ({ title, description }: RecentsListProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const users = recentsPlays;

  return (
    <Container className="w-full h-full p-4 flex flex-col">
      <div>
        <h1 className="text-lg md:text-2xl font-bold">{title}</h1>
        <p className="text-sm md:text-base text-muted-foreground">
          {description}
        </p>
      </div>

      <ul className="flex flex-col gap-4 mt-4 h-full overflow-y-auto">
        {loading ? (
          <>
            <SkeletonUserCard />
            <SkeletonUserCard />
            <SkeletonUserCard />
          </>
        ) : users.length <= 0 ? (
          <div className="flex items-center justify-center h-full w-full">
            <span>Nenhum usuário encontrado!</span>
          </div>
        ) : (
          users.map((item, index) => (
            <li key={index} className="flex flex-col">
              <div className="flex items-center gap-4">
                <div
                  style={{ backgroundColor: item.photo }}
                  className="rounded-full p-2"
                >
                  <User />
                </div>
                <div className="flex flex-col leading-none tracking-tight">
                  <span className="text-base md:text-xl font-bold">
                    {item.name}
                  </span>
                  <p className="text-base text-muted-foreground">
                    {format(new Date(item.played_date), "dd/MM/yyyy")} -
                    {format(new Date(item.createdAt), "hh:mm")}
                  </p>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </Container>
  );
};
